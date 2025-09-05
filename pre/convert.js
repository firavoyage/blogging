/**
 * Core function to convert LaTeX string to HTML using KaTeX
 * @param {string} latex - LaTeX expression to convert
 * @param {boolean} isDisplayMode - Whether to render in display mode (double dollars)
 * @returns {string} Rendered HTML string
 *
 * <!-- KaTeX CDN Links -->
 * <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
 * <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
 */
const renderLatex = (latex, isDisplayMode) => {
  try {
    return katex.renderToString(latex, {
      displayMode: isDisplayMode,
      throwOnError: false,
      errorColor: "#cc0000",
      strict: "warn",
      trust: false,
      output: "mathml",
      macros: {},
    });
  } catch (error) {
    return `<span style="color: #cc0000;">LaTeX Error: ${error.message}</span>`;
  }
};

/**
 * Converts LaTeX expressions in HTML string to rendered HTML
 * @param {string} html - HTML string containing LaTeX expressions
 * @returns {string} Converted HTML string with rendered math
 */
const convertLatex = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const ignoredTags = [
    "SCRIPT",
    "STYLE",
    "TEXTAREA",
    "PRE",
    "CODE",
    "SELECT",
    "OPTION",
    "BUTTON",
  ];
  const ignoredSelectors = [
    ".math-disable",
    ".latex-ignore",
    "[data-latex-ignore]",
  ];

  const treeWalker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (node.parentNode.nodeType !== Node.ELEMENT_NODE)
        return NodeFilter.FILTER_REJECT;
      const el = node.parentNode;

      if (ignoredTags.includes(el.tagName)) return NodeFilter.FILTER_REJECT;
      if (ignoredSelectors.some((selector) => el.matches(selector)))
        return NodeFilter.FILTER_REJECT;
      if (el.closest(ignoredSelectors.join(",")))
        return NodeFilter.FILTER_REJECT;

      return /(\$\$[^$]+\$\$|\$[^$]+\$)/.test(node.textContent)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes = [];
  while (treeWalker.nextNode()) textNodes.push(treeWalker.currentNode);

  textNodes.forEach((node) => {
    const tempDiv = document.createElement("div");
    let text = node.textContent;

    text = text
      .replace(/\$\$([^$]+)\$\$/g, (_, latex) => renderLatex(latex, true))
      .replace(/\$([^$]+)\$/g, (_, latex) => renderLatex(latex, false));

    tempDiv.innerHTML = text;

    const newNodes = Array.from(tempDiv.childNodes);
    const parent = node.parentNode;
    newNodes.forEach((newNode) => parent.insertBefore(newNode, node));
    parent.removeChild(node);
  });

  return doc.body.innerHTML;
};

/**
 * Converts Markdown to HTML slides, splitting on top-level headers and horizontal rules.
 * @param {string} markdown - The markdown content to convert.
 * @param {object} [config] - Optional configuration.
 * @param {number} [config.header=6] - Maximum header level to split on (1-6).
 * @returns {string[]} Array of HTML slide strings.
 */
const convertMarkdownToSlides = (markdown, config = {}) => {
  const md = window
    .markdownit({
      html: true,
      xhtmlOut: true,
      breaks: false,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && window.Prism && window.Prism.languages[lang]) {
          return window.Prism.highlight(
            str,
            window.Prism.languages[lang],
            lang
          );
        }
        return "";
      },
    })
    .use(window.markdownitEmoji)
    .use(window.markdownitTaskLists);

  // Convert markdown to HTML and process LaTeX
  let html = md.render(markdown);
  html = convertLatex(html); // Assumed to be available in scope

  // Parse HTML into DOM
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const body = doc.body;

  // Configuration
  const maxHeaderLevel = config.header || 6;
  const headerTags = Array.from(
    { length: maxHeaderLevel },
    (_, i) => `H${i + 1}`
  );

  // Split slides
  const slides = [];
  let currentSlide = [];
  const nodes = Array.from(body.childNodes);

  const isBlockElement = (node) =>
    node.nodeType === 1 && // ELEMENT_NODE
    ["BLOCKQUOTE", "DETAILS", "PRE", "FIGURE", "TABLE"].includes(node.tagName);

  const isEmptySlide = (slideNodes) => {
    if (slideNodes.length === 0) return true;
    return slideNodes.every((node) => {
      if (node.nodeType === 3) {
        // TEXT_NODE
        return node.textContent.trim() === "";
      }
      if (node.nodeType === 1 && node.tagName === "BR") {
        // ELEMENT_NODE <br>
        return true;
      }
      return false;
    });
  };

  nodes.forEach((node) => {
    // Check if node is a splitting element
    if (node.nodeType === 1) {
      // ELEMENT_NODE
      const isSplittingHeader = headerTags.includes(node.tagName);
      const isSplittingHr = node.tagName === "HR";

      if ((isSplittingHeader || isSplittingHr) && !isBlockElement(node)) {
        // Start new slide only if current slide has content
        if (!isEmptySlide(currentSlide)) {
          slides.push(currentSlide);
        }
        currentSlide = [];

        // Keep headers (discard HR)
        if (isSplittingHeader) {
          currentSlide.push(node);
        }
        return;
      }
    }

    // Add node to current slide
    currentSlide.push(node);
  });

  // Add final slide if it has content
  if (!isEmptySlide(currentSlide)) {
    slides.push(currentSlide);
  }

  // Convert slide nodes to HTML strings
  return slides.map((slide) => {
    const div = doc.createElement("div");
    slide.forEach((node) => div.appendChild(node.cloneNode(true)));
    return div.innerHTML;
  });
};
