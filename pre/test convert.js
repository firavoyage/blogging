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

const sample3 = `# Headers

\`\`\`
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
\`\`\`	

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

------

# Emphasis

\`\`\`
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
\`\`\`

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

------

# Lists

\`\`\`
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

1. Make my changes
    1. Fix bug
    2. Improve formatting
        - Make the headings bigger
2. Push my commits to GitHub
3. Open a pull request
    * Describe my changes
    * Mention all the members of my team
        * Ask for feedback

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
\`\`\`

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

1. Make my changes
    1. Fix bug
    2. Improve formatting
        - Make the headings bigger
2. Push my commits to GitHub
3. Open a pull request
    * Describe my changes
    * Mention all the members of my team
        * Ask for feedback

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

------

# Task lists

\`\`\`
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
\`\`\`

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [ ] this is a complete item
- [ ] this is an incomplete item

------

# Ignoring Markdown formatting

You can tell GitHub to ignore (or escape) Markdown formatting by using \\ before the Markdown character.

\`\`\`
Let's rename \\*our-new-project\\* to \\*our-old-project\\*.
\`\`\`

Let's rename \\*our-new-project\\* to \\*our-old-project\\*.

------

# Links

\`\`\`
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
\`\`\`

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

------

# Images

\`\`\`
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
\`\`\`

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

------

# [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

\`\`\`
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
\`\`\`

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

------

# Code and Syntax Highlighting

\`\`\`
Inline \`code\` has \`back-ticks around\` it.
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

\`\`\`c#
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
\`\`\`

\`\`\`css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
\`\`\`

\`\`\`javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
\`\`\`

\`\`\`php
require_once 'Zend/Uri/Http.php';

namespace Location\\Web;

interface Factory
{
    static function _factory();
}

abstract class URI extends BaseURI implements Factory
{
    abstract function test();

    public static $st1 = 1;
    const ME = "Yo";
    var $list = NULL;
    private $var;

    /**
     * Returns a URI
     *
     * @return URI
     */
    static public function _factory($stats = array(), $uri = 'http')
    {
        echo __METHOD__;
        $uri = explode(':', $uri, 0b10);
        $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
        $desc = 'Multi
line description';

        // Security check
        if (!ctype_alnum($scheme)) {
            throw new Zend_Uri_Exception('Illegal scheme');
        }

        $this->var = 0 - self::$st;
        $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \\Location\\Web\\URI::class));

        return [
            'uri'   => $uri,
            'value' => null,
        ];
    }
}

echo URI::ME . URI::$st1;

__halt_compiler () ; datahere
datahere
datahere */
datahere
\`\`\`

------

# Tables

\`\`\`
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | \`         |
| Pipe     | \\|        |
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | \`         |
| Pipe     | \\|        |

------

# Blockquotes

\`\`\`
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
\`\`\`

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

------

# Inline HTML

\`\`\`
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
\`\`\`

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

------

# Horizontal Rules

\`\`\`
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
\`\`\`

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

------

# YouTube Videos

\`\`\`
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE" target="_blank">
<img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10">
</a>
\`\`\`

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE" target="_blank">
<img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10">
</a>

\`\`\`
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
\`\`\`

[![IMAGE ALT TEXT HERE](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png)](https://www.youtube.com/watch?v=ciawICBvQoE)
`;

const sample4 = `
# GitHub Flavored Markdown (GFM) Sample

This document demonstrates various GitHub Flavored Markdown features along with some commonly used HTML elements.

## Text Formatting

**Bold text** and _italic text_ or **_bold and italic_**  
~~Strikethrough~~ and \`inline code\`

## Headers

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered List

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Links and Images

[Regular link](https://github.com)  
[Link with title](https://github.com "GitHub Homepage")

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)  
![Alt text](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png "GitHub Logo")

## Code

### Inline Code

Use \`console.log('Hello World')\` for debugging.

### Code Blocks with Syntax Highlighting

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`

\`\`\`python
def greet(name):
  return f"Hello, {name}!"

print(greet("World"))
\`\`\`

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
\`\`\`

## Tables

| Header 1 | Header 2   | Header 3  |
| :------- | :--------: | --------: |
| Cell 1   | Cell 2     | Cell 3    |
| Cell 4   | Cell 5     | Cell 6    |
| Left     | Center     | Right     |

## Blockquotes

> This is a blockquote
>
> With multiple lines
>
> > And nested blockquotes

## Horizontal Rules

---

---

---

## Emoji

:smile: :sparkles: :rocket: :octocat: :heart:

You can use emoji shortcuts like :+1: or :-1:

## Mentions and References

@username - Mention a user  
#123 - Reference an issue or pull request  
org/repo#123 - Reference an issue in another repository

## Strikethrough

~~This text is crossed out~~ while this is not.

## Automatic URL linking

Visit https://github.com for more information.

## HTML Elements

### Details/Summary (Collapsible Section)

<details>
<summary>Click to expand</summary>

This content is hidden until you click the summary.

\`\`\`javascript
// You can put code here too
const hiddenCode = "This was hidden!";
\`\`\`

</details>

<details>
<summary>More information about GFM</summary>

### Additional Features

- **Automatic linking for URLs**: https://github.com
- **Task lists** in issues and PRs
- **Tables** with alignment options
- **SHA references**: Commit references like d6b5d5c become links
- **Issue references**: #1, USER/REPO#1

</details>

### HTML Table with Advanced Styling

<table style="width:100%">
  <tr style="background-color: #f6f8fa">
    <th>Feature</th>
    <th>Support</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>Tables</td>
    <td>✅</td>
    <td>With alignment support</td>
  </tr>
  <tr>
    <td>Syntax highlighting</td>
    <td>✅</td>
    <td>For 200+ languages</td>
  </tr>
</table>

### Custom HTML

You can also use <span style="color: red;">inline HTML</span> for custom styling.

<center>
This text is centered using HTML
</center>

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

## Math Support (with LaTeX)

When $a \\ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$:

$$
x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}
$$

## Mermaid Diagrams (GitHub Support)

\`\`\`mermaid
graph TD;
    A[Start] --> B{Decision};
    B -->|Yes| C[Result 1];
    B -->|No| D[Result 2];
\`\`\`

## Keyboard Shortcuts

Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.

## Highlighting

==This text is highlighted== (GFM extension)

## Comments

<!-- This is a comment that won't be visible in the rendered output -->

## Special References

- Commit: \`d6b5d5c\`
- Issue: #123
- User: @github

---

_This sample demonstrates most GitHub Flavored Markdown features. Note that some features like Mermaid diagrams and math rendering may require specific repository settings or GitHub Pages configuration._
`;

const slides = convertMarkdownToSlides(sample4);

document.getElementsByClassName("pre")[0].innerHTML = slides.join("");
document.getElementsByClassName("json")[0].value = JSON.stringify(slides);
