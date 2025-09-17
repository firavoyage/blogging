latex math syntax in markdown

---

# LaTeX Math Syntax in Markdown

Markdown supports LaTeX math expressions using **MathJax** or **KaTeX**. Here's a comprehensive guide:

## Inline Math

Use single dollar signs `$...$`:

```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
```

**Result:** The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

## Display Math

Use double dollar signs `$$...$$` for centered equations:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Result:**

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Common Math Symbols

### Greek Letters

```latex
$\alpha, \beta, \gamma, \Gamma, \pi, \Pi, \omega, \Omega$
```

$\alpha, \beta, \gamma, \Gamma, \pi, \Pi, \omega, \Omega$

### Operators

```latex
$\times, \div, \pm, \mp, \cdot, \ast, \sum, \prod, \int$
```

$\times, \div, \pm, \mp, \cdot, \ast, \sum, \prod, \int$

### Relations

```latex
$=, \neq, <, >, \leq, \geq, \approx, \sim, \equiv$
```

$=, \neq, <, >, \leq, \geq, \approx, \sim, \equiv$

### Fractions and Roots

```latex
$\frac{a}{b}, \sqrt{x}, \sqrt[n]{x}$
```

$\frac{a}{b}, \sqrt{x}, \sqrt[n]{x}$

### Superscripts and Subscripts

```latex
$x^2, y_n, x^{a+b}, z_{i,j}$
```

$x^2, y_n, x^{a+b}, z_{i,j}$

## Matrices

```latex
$$
\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}
$$
```

$$
\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}
$$

## Examples

### Quadratic Equation

```latex
The solutions to $ax^2 + bx + c = 0$ are given by:
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Calculus

```latex
The derivative of $f(x)$ is:
$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$
```

### Physics Equation

```latex
Einstein's famous equation: $E = mc^2$
```

## Tips

1. **Escape special characters**: Use `\` before `$`, `%`, `#`, `&`, etc.
2. **Spaces**: Use `\,` for small space, `\;` for medium space, `\quad` for large space
3. **Text in math**: Use `\text{your text here}`

```latex
$$
f(x) = x^2 \quad \text{for all real } x
$$
```

## Platform Support

- **GitHub**: Limited support (may require browser extensions)
- **Jupyter Notebooks**: Full support
- **Stack Overflow**: Full support
- **Obsidian**: With plugins
- **VS Code**: With Markdown+Math extension

Remember that LaTeX rendering depends on the specific Markdown processor being used.
