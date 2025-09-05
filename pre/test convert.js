const sample = `# Markdown Feature Showcase

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Text Formatting

_Italic_ or _Italic_  
**Bold** or **Bold**  
**_Bold Italic_** or **_Bold Italic_**  
~~Strikethrough~~  
\`Inline code\`

## Lists

### Unordered

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

### Task List

- [x] Complete markdown guide
- [ ] Add more examples
- [ ] Review formatting

## Links and Images

[Markdown Guide](https://www.markdownguide.org)  
![Alt text](https://markdownlogo.com/img/logo-markdown.png "Markdown Logo")

## Code Blocks

\`\`\`python
def hello_world():
    print("Hello, Markdown!")
\`\`\`

\`\`\`javascript
console.log("Code blocks support syntax highlighting");
\`\`\`

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
| \`code\`    | Inline code |

## Blockquotes

> This is a blockquote.  
> It can span multiple lines.

## Horizontal Rule

---

or

---

## Inline HTML

<details>
<summary>Click to expand</summary>
Hidden content revealed!
</details>

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Emoji

:smile: :rocket: :+1:

## Math (when supported)

Inline math: $E = mc^2$

Block math:

$$
\int_a^b f(x)dx = F(b) - F(a)
$$

## Definition Lists (when supported)

Term 1
: Definition 1

Term 2
: Definition 2

## Miscellaneous

Escaped characters: \*not italic\*  
Hard line break (two spaces at end)  
Line 1  
Line 2
`;

const sample2 = `# Introduction to Markdown Presentations

Welcome to this demo presentation! This slide was created from a H1 header.

---

## Slide Features

This slide was created from a H2 header. The presentation supports:

- **Markdown formatting** like *italics* and **bold**
- Code blocks with syntax highlighting:
\`\`\`javascript
function hello() {
    console.log("Hello, world!");
    return 42;
}
\`\`\`

- Math expressions with MathJax: $E = mc^2$

---

### Advanced Features

> Blockquotes are supported too!

Tables work as well:

| Feature       | Support         |
|--------------|----------------|
| Headers      | Yes            |
| Lists        | Yes            |
| Code         | Yes            |

---

# Math Slide

Here's some more complex math:

$$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

And inline math: $\\frac{d}{dx}f(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$

---

# Final Slide

Thank you for viewing this presentation!

Created with:
- Markdown
- JavaScript
- ❤️
`;

const slides = convertMarkdownToSlides(sample);

document.getElementsByClassName("pre")[0].innerHTML = slides.join("");
document.getElementsByClassName("json")[0].value = JSON.stringify(slides);
