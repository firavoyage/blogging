# 1

lisp guide

---

Of course! Here is a comprehensive guide to Lisp, covering its core philosophy, fundamentals, and a roadmap for learning.

### The Big Idea: Why Lisp?

Lisp isn't just a language; it's a family of languages and a way of thinking about programming. Its most defining features are:

1.  **Homoiconicity:** The code you write is data that the language can easily manipulate. A Lisp program is written in the form of Lisp data structures (lists, symbols), which means you can write code that writes or transforms code. This is the foundation of Lisp's legendary **macro system**.
2.  **Interactive Development:** You don't just compile and run a Lisp program. You interact with a running Lisp environment (called the _REPL_), compiling and testing functions one at a time. It's a conversation with your program.
3.  **Minimal, Regular Syntax:** Lisp uses **S-expressions** (parenthesized lists) for everything. This might seem strange at first, but it eliminates syntax-related bugs and makes code incredibly consistent and easy to parse (for both the computer and the programmer).

The most common modern Lisp dialects are **Common Lisp** (a powerful, standardized, batteries-included language) and **Scheme** / **Racket** (known for elegance, simplicity, and a focus on functional programming and pedagogy). **Clojure** is a modern Lisp that runs on the JVM and emphasizes immutability and concurrency.

This guide will focus on **Common Lisp** concepts.

---

### Part 1: The Absolute Basics

#### 1. Syntax: It's All About Parentheses

Lisp code is made of symbolic expressions (s-exps). An s-exp can be:

- An **atom**: a number (`5`), a string (`"hello"`), or a symbol (`my-variable`).
- A **list**: a sequence of s-exps surrounded by parentheses `(` `)`.

A function call is written as a list where the first element is the function name and the rest are the arguments.

```lisp
; This is a comment

; In other languages: function_name(arg1, arg2)
; In Lisp: (function-name arg1 arg2)

(+ 2 3)       ; -> 5 (2 + 3)
(* 5 6)       ; -> 30 (5 * 6)
(max 10 20 5) ; -> 20
```

This style is called **prefix notation** or **Polish notation**.

#### 2. The REPL (Read-Eval-Print Loop)

This is your best friend. You type an expression, Lisp **R**eads it, **Eval**uates it, **P**rints the result, and **L**oops back to do it again. It's an interactive interpreter.

```
$ clisp    ; or sbcl, ecl, etc.
[1]> (+ 1 2) ; You type this
3            ; Lisp prints this
[2]>
```

#### 3. Defining Variables (`defparameter`, `defvar`)

```lisp
(defparameter *my-name* "Alice") ; Convention: global variables have *earmuffs*
(defvar *count* 0)               ; defvar only sets it if it's undefined

(let ((x 10) (y 20))             ; `let` creates local variables
  (+ x y))                       ; -> 30
```

#### 4. Defining Functions (`defun`)

```lisp
; (defun function-name (arg1 arg2) "optional-docstring" body)

(defun square (x)
  "Returns the square of a number X."
  (* x x))

(square 9) ; -> 81

(defun greet (name &optional (greeting "Hello"))
  ; &optional allows for optional arguments
  (format t "~A, ~A!~%" greeting name))

(greet "Bob")          ; -> "Hello, Bob!"
(greet "Bob" "Hola")   ; -> "Hola, Bob!"
```

---

### Part 2: Core Data Structures & Control Flow

#### 1. Data Structures

```lisp
;;; LIST: The fundamental Lisp data structure (Linked List)
(list 1 2 3)          ; -> (1 2 3)
'(1 2 3)              ; ' quote prevents evaluation - same as (list 1 2 3)
(cons 1 (cons 2 nil)) ; -> (1 2) - building a list from pairs
(car '(a b c))        ; -> A (first item)
(cdr '(a b c))        ; -> (B C) (the rest of the list)

;;; VECTOR (Array)
#(1 2 3)              ; A simple vector
(aref #(a b c) 1)     ; -> B (zero-indexed access)

;;; HASH-TABLE
(defvar *my-table* (make-hash-table))
(setf (gethash 'name *my-table*) "Alice") ; set a key-value pair
(gethash 'name *my-table*)                ; -> "Alice", T

;;; STRUCTURES (like C structs or simple classes)
(defstruct person
  name
  age
  (occupation :unemployed)) ; default value

(defvar *p* (make-person :name "Bob" :age 30))
(person-name *p*) ; -> "Bob"
```

#### 2. Control Flow

```lisp
;;; CONDITIONAL: if
(if (> 10 5)
    (print "Bigger")   ; then-clause
    (print "Smaller")) ; else-clause (optional)

;;; CONDITIONAL: cond (like a switch/if-else-if statement)
(cond ((> x 10) (print "Big"))
      ((< x 5)  (print "Small"))
      (t        (print "Medium"))) ; 't' is the default

;;; LOOPS: loop macro (extremely powerful)
(loop for i from 1 to 5
      do (print i)) ; Prints 1, 2, 3, 4, 5

(loop for item in '(a b c d)
      collect (square item)) ; -> (1 4 9 16) (Transforms the list)

;;; LOOPS: dolist
(dolist (item '(a b c))
  (print item))
```

---

### Part 3: The Superpower: Macros

Macros allow you to extend the language itself. They run at **compile time** and transform your code before it's evaluated.

**Problem:** Imagine you want to create a `my-until` loop that runs _until_ a condition is true.

```lisp
; This is what we want to write:
(my-until (> x 10)
  (print x)
  (incf x))
```

You can't do this with a function because the arguments `(print x)` and `(incf x)` would be evaluated _before_ `my-until` is called. We need to control evaluation.

**Solution:** Write a macro that transforms the `my-until` form into something Lisp already understands.

```lisp
(defmacro my-until (test &body body)
  "Repeatedly executes BODY until TEST becomes true."
  `(do ()          ; `do` is a basic looping construct
       (,test)     ; The exit condition (stop when true)
     ,@body))      ; Splice the body into the loop

; The macro `my-until` expands the above code into this:
(do ()
    ((> x 10)) ; Stop when this is true
  (print x)
  (incf x))
```

The backtick **`** creates a template. The comma **,** evaluates and inserts a value. The comma-at **,@** evaluates and splices a list in place.

---

### Learning Roadmap & Resources

1.  **Install a Environment:**

    - **Editor:** Use VSCode with the `commonlisp-vscode` extension, Vim/Emacs with SLIME (Superior Lisp Interaction Mode for Emacs), or Portacle (a complete, pre-packaged Common Lisp IDE based on Emacs).
    - **Implementation:** Install SBCL (Steel Bank Common Lisp) or CLISP. They are excellent and free.

2.  **Beginner Resources:**

    - **Tutorial:** [Learn Lisp the Hard Way](https://learnlispthehardway.org/) (great for beginners)
    - **Book:** **Practical Common Lisp** by Peter Seibel. [It's free online!](https://gigamonkeys.com/book/) This is the canonical modern introduction.
    - **Practice:** [Exercism's Common Lisp Track](https://exercism.org/tracks/common-lisp)

3.  **Intermediate/Advanced Resources:**

    - **Book:** **On Lisp** by Paul Graham (Advanced, focused on macros). Also [free online](https://paulgraham.com/onlisp.html).
    - **Book:** **Paradigms of Artificial Intelligence Programming (PAIP)** by Peter Norvig. A masterclass in programming using Common Lisp.
    - **Book:** **Let Over Lambda** by Doug Hoyte (Very advanced macro techniques).

4.  **Community:**
    - **r/lisp** and **r/Common_Lisp** on Reddit are very active and helpful.
    - The **Lisp Discord** server.

### Summary & Key Takeaways

- **Don't fear the parentheses:** You'll soon appreciate their consistency. Use an editor that helps with matching and indentation (like Paredit mode).
- **Live in the REPL:** Test everything there. Build your program incrementally by sending code from your editor to the REPL.
- **Code is Data:** This is Lisp's secret weapon. Once you grasp this, macros will unlock a new level of programming power.
- **Start Simple:** Learn basic list manipulation, `defun`, `defparameter`, `let`, and `if`. Then move to `loop`, `cond`, and structures.
- **Macros come last:** Don't start by writing macros. First learn to solve problems with functions. Once you understand the language's limits, you'll see where macros are needed.

Lisp will change how you think about programming in any language. Enjoy the journey

# 2

lisp macro guide

---

Of course. This is a guide to Lisp macros, the feature that truly sets Lisp apart. We'll move from the "what" and "why" to the "how," with practical examples.

### The Core Idea: Code is Data

Before you can understand macros, you must internalize this Lisp principle: **Code is Data**.

In Lisp, the program's source code is composed of simple data structures: lists, symbols, numbers, and strings. When you write `(+ 1 2)`, you are writing a list containing the symbol `+` and the numbers `1` and `2`.

This means you can write functions that _manipulate code_ because code is just lists. A **macro** is exactly that: a function that runs at **compile time** that takes code as input (in the form of data) and returns new code as output (also as data). The compiler then compiles this new, transformed code.

---

### 1. The Problem: Why Macros?

Functions are powerful, but they have a key limitation: **all arguments are evaluated before the function is called.**

Imagine you want to write a new conditional statement, `my-if`.

```lisp
;; This is what we WANT to write:
(my-if (is-raining)
    (take-umbrella)
    (wear-sunglasses))
```

If `my-if` were a function, both `(take-umbrella)` and `(wear-sunglasses)` would be evaluated _before_ `my-if` even gets to check the weather! This is useless. We need to control _which_ expressions are evaluated and _when_.

This is the job of a macro. It lets you define new syntactic forms that control evaluation.

---

### 2. The Tools: Backtick, Comma, Comma-At

To write macros, you need the template system: the **backtick** **`` ` ``**, the **comma** **`,`**, and the **comma-at** **`,@`**.

- **Backtick ( `` ` `` )**: "I am defining a template. Most of this structure is fixed, but parts will be filled in later."
  - It's like the regular quote `'` but allows evaluation inside.
- **Comma ( `,` )**: "Inside a backtick, evaluate this expression and insert its value here."
- **Comma-At ( `,@` )**: "Evaluate this expression (which must be a list) and _splice_ its elements into the surrounding list."

#### Examples:

```lisp
(defvar x 10)
(defvar y '(a b c))

'(x ,x y ,y)    ; -> (X ,X Y ,Y)  ; ' is a regular quote, nothing is evaluated
`(x ,x y ,y)    ; -> (X 10 Y (A B C)) ; ` is a backtick, ,x and ,y are evaluated
`(x ,x y ,@y)   ; -> (X 10 Y A B C)   ; ,@y splices the list (A B C) into the outer list
```

---

### 3. Writing Your First Macro

Let's solve the `my-if` problem.

**Step 1: What should it expand into?**
We want our `my-if` to transform into the standard `cond` (or `if`).

Input:

```lisp
(my-if (is-raining)
    (take-umbrella)
    (wear-sunglasses))
```

Desired Output:

```lisp
(cond ((is-raining) (take-umbrella))
      (t (wear-sunglasses)))
```

**Step 2: Write the Macro**
A macro is defined with `defmacro`. Its parameters are the unevaluated pieces of code from the call.

```lisp
(defmacro my-if (test then-clause else-clause)
  "Takes a TEST, a THEN-CLAUSE, and an ELSE-CLAUSE.
   Controls evaluation so only the correct clause is run."
  `(cond (,test ,then-clause)
         (t ,else-clause)))
; Note: The backticks and commas are creating the code structure we want.
```

**How it works:**

1.  You write `(my-if (is-raining) (take-umbrella) (wear-sunglasses))`.
2.  The compiler sees `my-if` and doesn't evaluate the arguments. Instead, it calls the `my-if` macro function with them:
    - `test` gets `(is-raining)`
    - `then-clause` gets `(take-umbrella)`
    - `else-clause` gets `(wear-sunglasses)`
3.  The macro returns the new code: `(cond ((is-raining) (take-umbrella)) (t (wear-sunglasses)))`.
4.  The compiler compiles and runs this new code. Now, only the correct branch is evaluated.

---

### 4. A More Complex Example: The `my-until` Loop

Let's create a loop that runs _until_ a condition is true.

**Step 1: Define the desired syntax and expansion.**

Input:

```lisp
(my-until (> x 10)
  (print x)
  (incf x))
```

Desired Output (using `do` loop):

```lisp
(do ()
    ((> x 10)) ; exit condition: stop when this is TRUE
  (print x)
  (incf x))
```

**Step 2: Write the Macro**
We need to accept a condition and a body (which can be multiple expressions). We use `&body` to collect all the body expressions into a list.

```lisp
(defmacro my-until (test &body body)
  "Repeatedly executes BODY until TEST becomes true."
  `(do ()
       (,test)    ; The exit condition for `do` is (test), stop when TEST is true.
     ,@body))     ; Splice the entire BODY list into the loop.
```

**Key Point:** `,@body` is crucial. It takes the list of expressions in `body` (e.g., `((print x) (incf x))`) and splices them into the `do` loop. Without it, you'd get `( (print x) (incf x) )` which is invalid syntax.

---

### 5. Debugging Macros: `macroexpand-1`

Macros can be tricky. The essential tool for debugging them is `macroexpand-1`. It shows you what a macro call expands into.

```lisp
(macroexpand-1 '(my-until (> x 10) (print x) (incf x)))
; -> (DO () ((> X 10)) (PRINT X) (INCF X)) ; Returns T (meaning it's a full expansion)
```

This lets you see if your macro is generating the code you intended. If the expansion looks wrong, your macro is wrong.

---

### 6. Avoiding Variable Capture: Gensym

**The Problem:** What if a variable in your macro accidentally conflicts with a variable in the user's code?

```lisp
;; A naive macro to run code twice
(defmacro naive-twice (code)
  `(progn
     ,code
     ,code))

;; This works fine:
(let ((x 10))
  (naive-twice (print x))) ; Prints 10, then 10.

;; But this has a hidden bug:
(let ((value 1))
  (naive-twice (setf value (+ value 1)))) ; What does value become?
; The expansion is:
(PROGN (SETF VALUE (+ VALUE 1)) (SETF VALUE (+ VALUE 1)))
; -> VALUE becomes 3, which might be unexpected.
```

**The Solution: `gensym`**
`(gensym)` generates a unique, uninterned symbol (like `G1234`). This guarantees it won't conflict with any user variable.

```lisp
;; A correct version using GENSYM
(defmacro twice (code)
  (let ((result (gensym))) ; Create a unique symbol
    `(let ((,result ,code)) ; Store the result of the first execution
       (progn
         ,result           ; Use the stored result
         ,code))))         ; Run the code again

;; Now it's safe
(let ((value 1))
  (twice (setf value (+ value 1))))
; Expansion is roughly:
(LET ((#:G1234 (SETF VALUE (+ VALUE 1))))
  (PROGN #:G1234 (SETF VALUE (+ VALUE 1))))
; No variable capture. VALUE becomes 2.
```

**Always use `gensym` for any temporary variables you introduce in your macro expansions.**

---

### Summary & Best Practices

1.  **Macros are Code Transformations:** They run at compile time and transform one form of code into another.
2.  **Use `macroexpand-1`:** This is your most important debugging tool. Always check your macro's output.
3.  **Use `gensym`:** Always generate unique symbols for any temporary variables in your macro to avoid variable capture.
4.  **Macros are a Last Resort:** If you can do it with a function, **use a function**. Macros are for:
    - Creating new language constructs (e.g., `my-until`, `my-if`).
    - Controlling evaluation (e.g., short-circuiting `and`/`or`).
    - Performance (inlining code, avoiding unnecessary computation).
5.  **Start Simple:** Practice by writing macros that mimic simple existing forms (`when`, `unless`, `cond`).

Macros are what make Lisp a "programmable programming language." They give you the power to mold the language to fit your problem, rather than forcing your problem to fit the language.
