typst syntax

---

Of course! Typst has a powerful and beautifully designed math mode that integrates seamlessly into documents. The syntax is clean and often more intuitive than traditional LaTeX.

### 1. Entering Math Mode

You can enter math mode in two ways:

- **Inline Math:** Surround your math with a single `$` symbol. It will appear within a line of text.

  ```typst
  The Pythagorean theorem is $a^2 + b^2 = c^2$.
  ```

- **Block Math:** Surround your math with two `$` symbols. It will be displayed on its own line, centered.
  ```typst
  The quadratic formula is given by:
  $$
    x = frac(-b plus-minus sqrt(b^2 - 4ac))(2a)
  $$
  ```

---

### 2. Basic Syntax

- **Variables:** Just type letters. Typst will automatically italicize them.

  ```typst
  $a + b = c$ // Output: *a* + *b* = *c*
  ```

- **Spaces:** Typst ignores spaces in math mode. To add space, use specific commands:

  ```typst
  $a b$       // No space between a and b: *ab*
  $a space b$ // Adds a medium space: *a b*
  $a quad b$  // Adds a larger space (1 em): *a b*
  $a qquad b$ // Adds an even larger space (2 em): *a b*
  ```

- **Subscripts and Superscripts:** Use `_` for subscript and `^` for superscript.
  ```typst
  $x^2$       // x squared
  $a_n$       // a subscript n
  $x^2_1$     // x squared subscript 1 (on the x)
  $x_1^2$     // x subscript 1, squared (often preferred)
  $e^(i pi)$  // Parentheses group the exponent: e^{iπ}
  ```

---

### 3. Common Functions and Symbols

Typst provides intuitive names for common mathematical functions and symbols. Functions like `sin`, `cos`, `log` are automatically rendered in upright text.

- **Greek Letters:** Spell them out, starting with a lowercase or capital letter.

  ```typst
  $alpha$, $Beta$, $gamma$, $Delta$, $omega$, $Omega$
  ```

- **Functions:**

  ```typst
  $sin(2 theta)$
  $log(10)$
  $lim_n -> infinity a_n$
  ```

- **Fractions:** Use `frac(numerator)(denominator)`.

  ```typst
  $frac(1)(2)$         // Simple fraction: ½
  $frac(a + b)(c^2)$   // Complex fraction: (a+b)/c²
  ```

- **Roots:** Use `sqrt(expression)` or `root(degree)(expression)`.

  ```typst
  $sqrt(2)$            // Square root: √2
  $root(3)(x)$         // Cube root: ³√x
  $sqrt(1 + sqrt(x))$  // Nested root: √(1+√x)
  ```

- **Sums, Products, Integrals:** Use `sum`, `prod`, `int`, often with subscripts and superscripts.
  ```typst
  $sum_(n=1)^infty a_n$   // Sum from n=1 to ∞
  $prod_(i=1)^n i = n!$   // Product from i=1 to n
  $int_0^1 f(x) dx$       // Definite integral
  $oint_C F dot dr$       // Contour integral
  ```

---

### 4. Grouping with Parentheses

Parentheses `()`, brackets `[]`, and braces `{}` are used for grouping. To make them scale to the size of their content, prefix them with `left` and `right`.

```typst
$( frac(1)(2) )$           // Normal parentheses: (½)
$left( frac(1)(2) right)$  // Scaling parentheses: (½)

$left[ int x dx right]_0^1$
$left{ x in RR right}$
```

---

### 5. Matrices

Use the `mat` function. Rows are separated by `;` and elements within a row are separated by `,`.

```typst
$$
mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
)
$$

// With delimiters
$$ left[ mat(1, 2; 3, 4) right] $$
```

---

### 6. Equations and Numbering

You can add a numbering to block math equations by using the `#equation` function. This allows for automatic numbering and easy cross-referencing.

```typst
// A simple numbered equation
#equation(
  $F = m a$
) <newton2>

// A more complex example with a label
#equation(
  <euler>
  $e^(i pi) + 1 = 0$
)

// Reference the equation later
As shown in @newton2 and the beautiful identity @euler, we can see...
```

---

### 7. Alignment (`&`)

You can align equations on a specific character (usually the `=` sign) using the `&` symbol. The `&` defines the alignment point in each row.

```typst
$$
align(
  (a + b)^2 &= a^2 + 2ab + b^2 \
  (a - b)^2 &= a^2 - 2ab + b^2 \
  a^2 - b^2 &= (a + b)(a - b)
)
$$
```

This will align all equations neatly at the `=` signs.

---

### 8. Custom Definitions (`#let`)

If you find yourself repeating a complex symbol or expression, you can define it with `#let`.

```typst
// Define a custom symbol for the set of real numbers
#let R = math.bb("R")

// Define a command for a vector
#let vect = ($mathbf{v}$)

// Use them in your document
The vector $#vect$ is an element of $#R^3$.
```

### Putting It All Together: A Complete Example

```typst
#set page(margin: 1.5cm)
#set text(font: "New Computer Modern")

= Important Equations

The fundamental theorem of calculus connects differentiation and integration. Given a continuous function $f$ on $[a, b]$, we have:
$$
  int_a^b f'(x) dx = f(b) - f(a).
$$ <ftc>

The solutions to the quadratic equation $a x^2 + b x + c = 0$ are given by:
#equation(
  <quadratic>
  x = frac(-b plus-minus sqrt(b^2 - 4ac))(2a)
)

We can align multiple lines of a derivation:
$$
  align(
    sum_(k=1)^n k &= 1 + 2 + ... + n \
                  &= frac(n(n+1))(2)        space space [by @gauss]
  )
$$

As proven by @ftc and @quadratic, these are foundational results. The aligned derivation above uses the famous formula attributed to @gauss.
```

This example shows inline math, block math, numbered equations, alignment, and cross-referencing—all core features of Typst's math mode. The syntax is designed to be readable and writable.
