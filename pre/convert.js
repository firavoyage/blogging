/**
 * Converts markdown to an array of HTML slides
 * @param {string} markdown - The markdown content to parse
 * @returns {string[]} Array of HTML strings, each representing a slide
 */
function convertMarkdownToSlides(markdown) {
  // Initialize markdown-it with plugins configuration
  const md = window.markdownit({
    html: true, // Enable HTML tags in source
    xhtmlOut: true, // Use '/' to close single tags
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
    highlight: function (str, lang) {
      if (lang && window.Prism.languages[lang]) {
        try {
          return window.Prism.highlight(
            str,
            window.Prism.languages[lang],
            lang
          );
        } catch (__) {}
      }
      return ""; // use external default escaping
    },
  });

  // Split markdown into slides based on headers and horizontal rules
  const slideSeparators = /(^#{1,6}.*$|^---$|^\*\*\*$|^___$)/m;
  const rawSlides = markdown
    .split(slideSeparators)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0 && !/^(---|\*\*\*|___)$/.test(chunk));

  // Process each slide
  const slides = [];
  let currentSlideContent = [];

  for (const chunk of rawSlides) {
    if (/^#{1,6}.*$/.test(chunk)) {
      // If it's a header, finalize current slide and start new one
      if (currentSlideContent.length > 0) {
        slides.push(currentSlideContent.join("\n"));
        currentSlideContent = [];
      }
      currentSlideContent.push(chunk);
    } else {
      currentSlideContent.push(chunk);
    }
  }

  // Add the last slide if it has content
  if (currentSlideContent.length > 0) {
    slides.push(currentSlideContent.join("\n"));
  }

  // Convert each slide markdown to HTML
  const htmlSlides = slides.map((slide) => md.render(slide));

  // Process MathJax in each slide
  if (window.MathJax) {
    htmlSlides.forEach((slideHtml, index) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = slideHtml;
      window.MathJax.typesetPromise([tempDiv])
        .then(() => {
          htmlSlides[index] = tempDiv.innerHTML;
        })
        .catch((err) => console.error("MathJax typeset error:", err));
    });
  }

  return htmlSlides;
}
