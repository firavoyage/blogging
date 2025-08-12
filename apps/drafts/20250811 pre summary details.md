<!-- author: deepseek v3 -->

in markdown, how to write such thing: show summary first, click to show details

In Markdown, you can create a "show summary first, click to show details" effect using the `<details>` and `<summary>` HTML tags, as native Markdown doesn't have this feature built-in. Here's how to do it:

markdown

Copy

Download

<details\>
<summary\>Click to see details</summary\>

This is the hidden content that will be revealed when clicked.

You can include:
\- Text
\- \*\*Formatting\*\*
\- Lists
\- Even code blocks:
\`\`\`python
print("Hello World")
\`\`\`
</details\>

This will render as:

<details> <summary>Click to see details</summary>

This is the hidden content that will be revealed when clicked.

You can include:

- Text
- **Formatting**
- Lists
- Even code blocks:

  python

  Copy

  Download

  print("Hello World")

</details>

### Notes:

1.  This works in most modern Markdown renderers (GitHub, GitLab, many static site generators)
2.  The content between `<summary>` and `</summary>` is always visible
3.  The content between `<details>` and `</details>` (but outside the summary) is hidden until clicked
4.  You can add Markdown formatting inside the details section
5.  For some platforms (like GitHub), you can make it open by default with `<details open>`

### Alternative for specific platforms:

Some Markdown flavors/extensions have their own syntax:

- **GitHub Flavored Markdown**: Uses the HTML tags as shown above
- **mkdocs-material**: Has a special `???` syntax for collapsible sections
- **Asciidoctor**: Has its own `[%collapsible]` syntax

But the HTML `<details>` approach is the most widely supported across different platforms.
