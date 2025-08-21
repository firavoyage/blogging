# LaTeX Math Guide for Markdown

## Basic Syntax

### Inline Math

Wrap formulas with single dollar signs:

```
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
```

_Result:_ The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### Display Math

Wrap formulas with double dollar signs for centered equations:

```
$$
\int_a^b f(x)dx = F(b) - F(a)
$$
```

_Result:_

$$
\int_a^b f(x)dx = F(b) - F(a)
$$

## Greek Letters

### Lowercase

```
$\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi, \pi, \rho, \sigma, \tau, \upsilon, \phi, \chi, \psi, \omega$
```

_Result:_ $\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi, \pi, \rho, \sigma, \tau, \upsilon, \phi, \chi, \psi, \omega$

### Uppercase

```
$\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$
```

_Result:_ $\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$

## Operators

### Basic Arithmetic

```
$+ - \times \div \cdot \pm \mp$
```

_Result:_ $+ - \times \div \cdot \pm \mp$

### Comparison

```
$= \neq < > \leq \geq \approx \sim \propto$
```

_Result:_ $= \neq < > \leq \geq \approx \sim \propto$

### Calculus

```
$\frac{dy}{dx}, \partial, \nabla, \int, \oint, \sum, \prod, \lim$
```

_Result:_ $\frac{dy}{dx}, \partial, \nabla, \int, \oint, \sum, \prod, \lim$

### Set Theory

```
$\in, \notin, \subset, \subseteq, \cup, \cap, \emptyset, \infty$
```

_Result:_ $\in, \notin, \subset, \subseteq, \cup, \cap, \emptyset, \infty$

## Fractions and Binomials

### Fractions

```
$\frac{a}{b}, \dfrac{a}{b}, \tfrac{a}{b}$
```

_Result:_ $\frac{a}{b}, \dfrac{a}{b}, \tfrac{a}{b}$

### Binomial Coefficients

```
$\binom{n}{k}, \dbinom{n}{k}, \tbinom{n}{k}$
```

_Result:_ $\binom{n}{k}, \dbinom{n}{k}, \tbinom{n}{k}$

## Superscripts and Subscripts

### Basic

```
$x^2, y_n, x^{a+b}, y_{n+1}$
```

_Result:_ $x^2, y_n, x^{a+b}, y_{n+1}$

### Multiple Levels

```
$x^{y^z}, a_{b_{c}}$
```

_Result:_ $x^{y^z}, a_{b_{c}}$

## Roots

### Square Roots

```
$\sqrt{x}, \sqrt[n]{x}$
```

_Result:_ $\sqrt{x}, \sqrt[n]{x}$

### Nested Roots

```
$\sqrt{\frac{x}{y}}, \sqrt[3]{\sqrt{x}}$
```

_Result:_ $\sqrt{\frac{x}{y}}, \sqrt[3]{\sqrt{x}}$

## Sums, Products, and Integrals

### With Limits

```
$\sum_{i=1}^n i^2, \prod_{i=1}^n i, \int_0^1 x^2 dx$
```

_Result:_ $\sum_{i=1}^n i^2, \prod_{i=1}^n i, \int_0^1 x^2 dx$

### Display Style

```
$$
\sum_{i=1}^{\infty} \frac{1}{i^2} = \frac{\pi^2}{6}
$$
```

_Result:_

$$
\sum_{i=1}^{\infty} \frac{1}{i^2} = \frac{\pi^2}{6}
$$

## Matrices

### Basic Matrix

```
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$
```

_Result:_

$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$

### Parentheses Matrix

```
$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$
```

_Result:_

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

### Brackets Matrix

```
$$
\begin{bmatrix}
x & y \\
z & w
\end{bmatrix}
$$
```

_Result:_

$$
\begin{bmatrix}
x & y \\
z & w
\end{bmatrix}
$$

## Functions

### Common Functions

```
$\sin x, \cos x, \tan x, \log x, \ln x, \exp x$
```

_Result:_ $\sin x, \cos x, \tan x, \log x, \ln x, \exp x$

### Custom Functions

```
$\operatorname{argmax}, \operatorname{Var}, \operatorname{Cov}$
```

_Result:_ $\operatorname{argmax}, \operatorname{Var}, \operatorname{Cov}$

## Accents and Decorations

### Vector Accents

```
$\vec{v}, \hat{x}, \bar{y}, \dot{z}, \ddot{w}$
```

_Result:_ $\vec{v}, \hat{x}, \bar{y}, \dot{z}, \ddot{w}$

### Over/Underlines

```
$\overline{ABC}, \underline{xyz}$
```

_Result:_ $\overline{ABC}, \underline{xyz}$

## Parentheses and Brackets

### Automatic Sizing

```
$\left(\frac{a}{b}\right), \left[\frac{x}{y}\right], \left\{\frac{m}{n}\right\}$
```

_Result:_ $\left(\frac{a}{b}\right), \left[\frac{x}{y}\right], \left\{\frac{m}{n}\right\}$

### Manual Sizing

```
$\big( \Big( \bigg( \Bigg($
```

_Result:_ $\big( \Big( \bigg( \Bigg($

## Special Symbols

### Arrows

```
$\rightarrow, \leftarrow, \Rightarrow, \Leftarrow, \leftrightarrow$
```

_Result:_ $\rightarrow, \leftarrow, \Rightarrow, \Leftarrow, \leftrightarrow$

### Dots

```
$1, 2, \ldots, n \quad x_1 + x_2 + \cdots + x_n$
```

_Result:_ $1, 2, \ldots, n \quad x_1 + x_2 + \cdots + x_n$

### Miscellaneous

```
$\forall, \exists, \neg, \land, \lor, \oplus, \otimes$
```

_Result:_ $\forall, \exists, \neg, \land, \lor, \oplus, \otimes$

## Examples

### Quadratic Formula

```
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

_Result:_

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### Euler's Identity

```
$$
e^{i\pi} + 1 = 0
$$
```

_Result:_

$$
e^{i\pi} + 1 = 0
$$

### Matrix Equation

```
$$
Ax = b \quad \text{where} \quad A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}, \quad x = \begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
$$
```

_Result:_

$$
Ax = b \quad \text{where} \quad A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}, \quad x = \begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
$$

## Tips

1. **Escape special characters**: Use `\$` for literal dollar signs
2. **Use spaces**: LaTeX ignores spaces in math mode, use `\,` or `\quad` for spacing
3. **Group expressions**: Use `{ }` to group multiple characters
4. **Text in math**: Use `\text{your text here}` for text within math expressions

Remember: All LaTeX must be wrapped in `$` or `$$` delimiters to work in Markdown!
