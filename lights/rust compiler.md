### Rust - Compile Time Memory Safety

Apr 22, 2019

In this post, I will explain why Rust is interesting by making an analogy between "dynamic vs static typing" and "C++ vs Rust's static memory safety" without going into too much detail.

#### Preventing type errors at compile time

Static typing prevents type errors at compile time, for example,

- Python

```py
def square(x):
    return x * x

square("5")
# Runtime error: Can't multiply sequence by non-int of type 'str'
```

- C++

```cpp
int square(int x) {
    return x * x;
}

square("5");
// Compile error: Invalid conversion from 'const char*' to 'int'
```

Static typing has the following benefits (taken from [Guido Rossum's Stanford seminar](https://www.youtube.com/watch?v=GiZKuyLKvAA&t=702)).

- Catches (certain) bugs earlier
- Refactor with confidence
- Helps human reader navigate large code bases
- Better than (certain) comments: compiler keeps you honest

In fact, all popular dynamic languages have static typing projects, often backed by big corporations as the benefit of static typing becomes more significant for larger projects.

- Python: [PEP 484 Type Hints](https://www.python.org/dev/peps/pep-0484/), [Dropbox Mypy](http://mypy-lang.org/index.html)
- Javascript: [Microsoft Typescript](https://www.typescriptlang.org/), [Google Closure](https://developers.google.com/closure/compiler/), [Facebook Flow](https://flow.org/)
- Ruby: [Stripe Sorbet](https://sorbet.org/)
- PHP: [Facebook Hack](https://hacklang.org/)
- Lua: [Ravi](https://github.com/dibyendumajumdar/ravi)

#### Preventing memory errors at compile time

Since memory safety in C++ is a major practical issue, it would be great if we can check them statically in a similar manner that static typing does.

Yes, this was one of the main motivations behind the creation of Rust. Just like C++ compiler tracks type information for each variable, Rust compiler tracks ownership, lifetime, and aliasing for each variable in addition.

Here is a small list of memory issues that can be statically verified with Rust.

#### Using uninitialized variable

- C++

```cpp
int x;
int y = square(x);
// Passing a garbage value at runtime.
```

- Rust

```rs
let mut x: i32;
let mut y = square(x);
// Compile error
// error[E0381]: use of possibly uninitialized variable: `x`
//   |
//   | let mut y = square(x);
//   |                    ^ use of possibly uninitialized `x`
```

#### Invalid memory access

- C++

```cpp
int* x = (int*)1234;
*x = 5;
// Runtime invalid memory access
// Segmentation fault (core dumped)
```

- Rust

```rs
let x = 1234 as *mut i32;
*x = 5;
// Compile error
// error[E0133]: dereference of raw pointer is unsafe and requires unsafe function or block
//   |
//   | *x = 5;
//   | ^^^^^^ dereference of raw pointer
//   |
//   = note: raw pointers may be NULL, dangling or unaligned; they can violate aliasing rules and cause data races: all of these are undefined behavior
```

#### Dangling pointer / variable

- C++

```cpp
std::string_view get_extension(std::string filename) {
    return filename.substr(filename.find_last_of('.') + 1);
    // Returning dangling std::string_view at runtime.
}
```

- Rust

```rs
fn get_extension(filename: String) -> &'static str {
    return &filename[filename.rfind('.').unwrap()+1..];
    // Compile error
    // error[E0515]: cannot return value referencing function parameter `filename`
    //   |
    //   | return &filename[filename.rfind('.').unwrap()+1..];
    //   |        ^--------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //   |        ||
    //   |        |`filename` is borrowed here
    //   |        returns a value referencing data owned by the current function
    //   }
    //
}
```

#### Incorrectly using a moved object

- C++

```cpp
std::vector<int> x = {1, 2, 3};
process(std::move(x));
x.push_back(4);
// Using an unspecified state object at runtime
```

- Rust

```rs
let mut x = vec![1, 2, 3];
process(x);
x.push(4);
// Compile error
// error[E0382]: borrow of moved value: `x`
//   |
//   | let mut x = vec![1, 2, 3];
//   |     ----- move occurs because `x` has type `std::vec::Vec<i32>`, which does not implement the `Copy` trait
//   | process(x);
//   |         - value moved here
//   | x.push(4);
//   | ^ value borrowed here after move
```

#### Data race in multithreading

- C++

```cpp
#include<iostream>
#include<thread>
#include<vector>

static int MONEY = 0;

void deposit_money(int amount) {
    for (int i = 0; i < amount; ++i)
        ++MONEY;
        // Runtime data race. Some increments can be ignored.
}

int main() {
    std::vector<std::thread> threads;

    for(int i = 0; i < 100; ++i)
        threads.emplace_back(deposit_money, 10000);

    for(int i = 0; i < 100; ++i)
        threads[i].join();

    // The result might not be 1000000 due to the data race.
    std::cout << MONEY;
}
```

- Rust

```rs
static mut MONEY: i32 = 0;

fn deposit_money(amount: i32) {
    for _ in 0..amount {
        MONEY += 1;
        // Compile error
        // error[E0133]: use of mutable static is unsafe and requires unsafe function or block
        //   |
        //   |     MONEY += 1;
        //   |     ^^^^^^^^^^ use of mutable static
        //   |
        //   = note: mutable statics can be mutated by multiple threads: aliasing violations or data races will cause undefined behavior
    }
}

fn main() {
    let mut threads = vec![];

    for _ in 0..100 {
        let thread = std::thread::spawn(|| deposit_money(10000));
        threads.push(thread);
    }

    for thread in threads {
        let _ = thread.join();
    }

    println!("{}", MONEY);
}
```

To make these static memory checks possible, Rust enforces single mutable ownership or multiple read-only aliases at a time. In fact, they are very good idioms to structure large codebase anyways, and normally they do not get in the way for ordinary applications. For libraries that require fine-grained memory control like data containers, e.g., vector, list, and hash map, [`unsafe` keyword](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html) is available to bypass the restrictions.

To be fair, there are compiler options or external tools that we can use to detect C++ memory issues, but it's nowhere close to the completeness of Rust due to the implementation complexity and the inherent language spec limitations.

- `-Wall -Wextra` compiler options: Even for the above trivial examples, GCC 8.3 and Clang 8.0 could only detect the one case, uninitialized variable, out of the five cases.
- External tools, e.g., Valgrind, Address/Memory/Thread Sanitizers: They are great tools. However in practice, being able to detect at compile time vs runtime is a big difference as the detection is limited to the specific test cases that we have. Otherwise, there would be no need for static typing for correctness as we can run tests to catch the type errors.
