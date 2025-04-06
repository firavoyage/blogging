# cpp guide

## quick start in 10 min

### why cpp

- about competitive programming
  - kill time
    - facing the great ocean
    - creating problem reducers
  - create memories of oi
    - communicate with souls of diverse fates and intuitions 
    - acquire their erudition and strength
  - learn math & english
    - math proofs behind algorithms
    - math symbols elegance
    - english comments
  - become internet otaku
    - get on with foss apps
    - become a linux user mostly ubuntu or arch
    - read anime styled problem intro
  - escape boring courses
    - "prefer to stuck in computer rooms rather than stuck in classrooms"
    - a few may join top universities without exams
- about cpp
  - functional programming support
  - balance between performance and readablity
  - highly customizable macros and overrides

> forget all above. 
> 
> know you are learning cpp for oi.

### preparation

- compiler
  - prefer g++ but the option is yours
  - install `g++`
  - for windows ...
  - for mac ...
  - for ubuntu
    - `sudo apt install g++`
- editor
  - prefer vscode but the option is yours
  - install `code`
  - for windows or mac
    - https://code.visualstudio.com/
  - for ubuntu
    - `sudo snap install code`
    - have issue with fcitx but is solvable by searching

### basics

- comments

...

- hello world
  - header file `iostream` stands for `input output stream`
    - guess its function
  - `main(){}` contains the program


```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

- functions

Functions allow you to organize your code into reusable blocks.

```cpp
void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    greet("Alice");
    return 0;
}
```

- types

C++ supports various data types, including `int`, `float`, `double`, `char`, `bool`, and more.

```cpp
int age = 25;
float height = 5.9;
double pi = 3.14159;
char grade = 'A';
bool isStudent = true;
```

- Operators

C++ supports arithmetic, relational, logical, and other operators.

```cpp
int a = 10;
int b = 3;
int sum = a + b;
int difference = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;
```

- Control Structures

Control structures include `if`, `else if`, `else`, `switch`, `while`, `do...while`, and `for` loops.

```cpp
int number = 10;

if (number > 0) {
    std::cout << "The number is positive." << std::endl;
} else if (number < 0) {
    std::cout << "The number is negative." << std::endl;
} else {
    std::cout << "The number is zero." << std::endl;
}
```

> todo

Once you're comfortable with the basics, you can explore more advanced topics like:

- **Pointers and References**: Understanding memory management.
- **Templates**: Writing generic code.
- **Standard Template Library (STL)**: Using pre-built data structures and algorithms.
- **Exception Handling**: Managing runtime errors.
- **File I/O**: Reading from and writing to files.

### learn further

- join the world (for humanity under sensor ship)
  - bing search "github mirror"
  - github search "free nodes"
- search knowledge
  - google
  - internet archive
- summarize knowledge
  - chatgpt
  - mistral
  - hix
- exchange knowledge
  - luogu
  - libreoj
  - codeforces

## about

> make tools elegant

> make knowledge pure

