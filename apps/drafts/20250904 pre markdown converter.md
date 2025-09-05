write the js fn for a markdown to html slides converter.

- const arrow fn with jsdoc
- param: string markdown, optional object config
- returns: array of string html
- all cdn links are already loaded, no need to include in your code
- use markdown-it. put the following config at the top of the fn
  ```js
  const md = window
    .markdownit({
      html: true,
      xhtmlOut: true,
      breaks: false, // breaks block math when $$ is placed on its own line
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
  ```
- convert markdown to html, and then convert latex. i already have a `convertLatex` fn before your code. it convert html to rendered html. just use it.
- split the html to slides based on headers and horizontal rules.
- whenever you read h1-n (whether nested or not) or hr tag, start a new page. n is `config.header`, default to 6. headers should be kept while hr should be removed. only top level headers or hr should be considered as separator. top level means not being inside any block like element (blockquotes, details summary, code blocks, etc).
- tell me if there are any choices to make.
- tell me if you have any suggestions.

fix: if you see a header right after a hr, dont add a blank page (or a page with only a newline.) 
only give me the fixed js fn
