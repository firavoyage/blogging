wenyanlang guide in english

---

Of course. Here is a comprehensive guide to the Wenyanlang (文言編程語言 / Wenyan-lang) in English.

### What is Wenyan-lang?

**Wenyan-lang** (文言編程語言, meaning "Classical Chinese Programming Language") is an esoteric programming language created by **Lingdong Huang**. Its core concept is to write computer programs using the grammar and vocabulary of classical Chinese (文言文), the literary language of ancient China.

It's not just a simple keyword replacement. The language is designed to feel authentically ancient, using particles like `之`、`其`、`曰`、`乃` in ways that mirror classical Chinese syntax.

---

### 1. Core Philosophy & "Hello World"

The goal is to make code look like an ancient Chinese text. A simple "Hello World" program demonstrates this:

```wenyan
吾有一言。曰「「問天地好在。」」。書之。
```

Let's break it down:

- `吾有一言`： "I have a statement." (Variable declaration)
- `曰「「...」」`： "Say: '...'" (String assignment. Note the double quotes `「「」」`).
- `書之`： "Write it." (Print function)

**Compiled JavaScript Output:**

```javascript
var n = "問天地好在。";
console.log(n);
```

**Output:** `問天地好在。`

---

### 2. Basic Concepts & Syntax

#### Variables

Variables are declared by stating you have a "thing" of a certain type.

- `吾有一數。名之曰「甲」。` → "I have a number. Name it 'A'." → `var a = 0;`
- `吾有一言。名之曰「乙」。` → "I have a string. Name it 'B'." → `var b = "";`
- `吾有布爾。名之曰「丙」。` → "I have a boolean. Name it 'C'." → `var c = true;`

You can assign values immediately:

- `吾有一數。曰三。名之曰「天」。` → "I have a number. It is 3. Name it 'sky'." → `var sky = 3;`

#### Arithmetic & Operations

Operators are replaced by ancient Chinese terms.

| Operation      | Wenyan   | Meaning        | JavaScript Equivalent |
| :------------- | :------- | :------------- | :-------------------- |
| Assignment     | `名之曰` | "Name it..."   | `var ... =`           |
| Addition       | `加`     | "add"          | `+`                   |
| Subtraction    | `減`     | "subtract"     | `-`                   |
| Multiplication | `乘`     | "multiply"     | `*`                   |
| Division       | `除`     | "divide"       | `/`                   |
| Equality       | `等於`   | "equals"       | `==`                  |
| Less Than      | `小於`   | "is less than" | `<`                   |

**Example:**

```wenyan
吾有二數。曰三。曰五。名之曰「甲」。曰「乙」。
加「甲」以「乙」。書之。 【Outputs 8】
乘「甲」以「乙」。書之。 【Outputs 15】
```

#### Control Flow: Conditionals (若)

The word `若` ("if") is used for conditionals. It must be closed with `云云` ("and so on"/"etc.").

```wenyan
吾有一數。曰十。名之曰「丁」。
若「丁」大於五者。乃
    書曰「「丁大於五」」。
云云。
```

- `若 [condition] 者` → "If [condition] is true, then..."
- `乃` → "then" (starts the block)
- `云云` → ends the conditional block.

#### Control Flow: Loops (循環)

Loops use the `為是` ... `遍` structure.

```wenyan
吾有一數。曰零。名之曰「始」。
為是「始」小於十者。遍。
    書之。
    加「始」以一。名之曰「始」。
云云。
```

This is a `while` loop: "While `始` is less than 10, do...". It will print numbers 0 to 9.

#### Functions (術)

Functions are called `術` ("methods"). They are defined with `吾有一術` and parameters are declared with `欲行是術`。

```wenyan
吾有一術。名之曰「乘方」。欲行是術。必先得一數。曰「底」。得一數。曰「冪」。乃行是術曰。
    吾有一數。曰一。名之曰「果」。
    為是「冪」大於零者。遍。
        乘「果」以「底」。名之曰「果」。
        減「冪」以一。名之曰「冪」。
    云云。
    乃得「果」。
是謂「乘方」之術也。

施「乘方」於二。於三。書之。 【Calls power(2, 3) and prints 8】
```

- `必先得一數。曰「底」。` → "Must first get a number, called 'base'." (Parameter 1)
- `乃得「果」` → "Then return 'result'." (Return statement)
- `是謂「乘方」之術也` → "This is called the 'power' method." (End of function definition)
- `施「乘方」於二。於三。` → "Apply 'power' to 2 and to 3." (Function call)

---

### 3. Data Structures

#### Arrays (列)

```wenyan
吾有一列。名之曰「陣」。
充「陣」以三。以五。以七。以十一。 【array = [3, 5, 7, 11]】
夫「陣」之「一」。書之。 【Prints the element at index 1 -> 5】
```

#### Objects (物)

```wenyan
吾有一物。名之曰「聖」。 【var sage = {}】
屬性曰「名」。曰「孔子」。 【sage.name = "孔子"】
屬性曰「年」。曰七十有三。 【sage.age = 73】

夫「聖」之「名」。書之。 【Prints "孔子"】
```

---

### 4. How to Run Wenyan-lang Code

1.  **Online Compiler**: The easiest way to start is to use the official online IDE: [**wenyan-lang.ide**](https://wenyan-lang.lingdong.works/ide.html). You can write code on the left and see the compiled JavaScript/Python on the right, and run it.
2.  **Node.js / npm**: Install the compiler globally via npm:
    ```bash
    npm install -g @wenyanlang/wenyan
    ```
    Then you can compile a `.wy` file:
    ```bash
    wenyan myprogram.wy -o myprogram.js
    node myprogram.js
    ```

---

### 5. Why Does This Exist? (Is It Useful?)

- **No, it's not "useful"** in a practical sense for software development. It is an **esoteric language**, created for **fun, art, and education**.
- It's a fascinating **cross-disciplinary project** that bridges computer science and classical Chinese literature.
- It demonstrates how **syntax is arbitrary** and how programming concepts (variables, logic, functions) can be expressed in wildly different forms.
- It's a brilliant piece of **conceptual art**.

### Learning Resources

- **Official Website & Tutorial**: [**wenyan-lang.lingdong.works**](https://wenyan-lang.lingdong.works/) - This is the best place to start. It includes an interactive tutorial, examples, and the online IDE.
- **GitHub Repository**: [github.com/wenyan-lang/wenyan](https://github.com/wenyan-lang/wenyan) - For the open-source compiler and documentation.
- **The Universal Primer** (《渾沌》): This is a complete example program written in Wenyan-lang that generates the Mandelbrot set. Studying it is a great way to see complex features in action.

In summary, Wenyan-lang is a beautiful and creative experiment that allows you to write code that looks like an ancient scroll. It's a delightful challenge for programmers and language enthusiasts alike.
