i have a markdown to html converter (which also split it to slides)

i want to change the mathjax library to katex.

give me the cdn link, and the modified code.

```
/**
 * Converts markdown to an array of HTML slides
 * @param {string} markdown - The markdown content to parse
 * @returns {string[]} Array of HTML strings, each representing a slide
 */
function convert(markdown) {
  // Initialize markdown-it with basic configuration
  const md = window
    .markdownit({
      html: true,
      xhtmlOut: true,
      breaks: true,
      linkify: true,
      typographer: true, // Enables smartquotes, dashes, etc.
      highlight: function (str, lang) {
        if (lang && window.Prism && window.Prism.languages[lang]) {
          return window.Prism.highlight(
            str,
            window.Prism.languages[lang],
            lang
          );
        }
        return ""; // Fallback
      },
    })
    .use(window.markdownitEmoji) // for emoji
    .use(window.markdownitTaskLists); // for task lists

  // Split markdown into slides based on headers only
  const slideSeparators = /(?=^#{1,6} )/gm;
  const rawSlides = markdown
    .split(slideSeparators)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0);

  // Convert each slide markdown to HTML
  const htmlSlides = rawSlides.map((slide) => {
    // Process markdown to HTML
    let html = md.render(slide);

    // Process math expressions (both block and inline)
    if (window.MathJax) {
      // Convert $...$ to \(...\) for MathJax
      html = html
        .replace(/\$\$(.*?)\$\$/gs, "\\[$1\\]") // block math
        .replace(/\$(.*?)\$/gs, "\\($1\\)"); // inline math

      // Create temporary container
      const container = document.createElement("div");
      container.innerHTML = html;

      // Typeset synchronously (not recommended but per your requirements)
      try {
        window.MathJax.typesetClear([container]);
        window.MathJax.typeset([container]);
      } catch (e) {
        console.error("MathJax processing error:", e);
      }

      return container.innerHTML;
    }

    return html;
  });

  return htmlSlides;
}
```

(upd 20250903: deprecated. new method is way better. split the latex converter based on katex out of the markdown converter. used for handling precious code block.)
