## syntax

> author: deepseek v3, edited by fira
>
> prompt: give me some code snippets to show the difference of syntax between programming languages

Here are some code snippets that demonstrate syntax differences between popular programming languages for common operations:

### 1. Hello World

```fira
pr "Hello, World!" //or prn "Hello, World!" (which adds a \n)
```

```fira
// ; <=> \n
pr "Hello, World!";
```

```python
# Python
print("Hello, World!")
```

```java
// Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```javascript
// JavaScript
console.log("Hello, World!");
```

```c
// C
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
```

### 2. For Loop

```fira
for i each(5)
  prn i
```

```fira
// {} <=> indentation
for i of each(5){
  prn i;
}
```

```fira
//(omitted) <=> of <=> in
for i in [0,1,2,3,4,5]
  prn i
```

```python
# Python
for i in range(5):
    print(i)
```

```java
// Java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

```javascript
// JavaScript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

```rust
// Rust
for i in 0..5 {
    println!("{}", i);
}
```

### 3. If-Else Statement

```fira
x = 10
x > 5? pr "Greater": pr "Smaller"
```

```fira
x = 10
if x > 5
  pr "Greater"
else
  pr "Smaller"
```

```python
# Python
x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")
```

```java
// Java
int x = 10;
if (x > 5) {
    System.out.println("Greater");
} else {
    System.out.println("Smaller");
}
```

```javascript
// JavaScript
let x = 10;
if (x > 5) {
  console.log("Greater");
} else {
  console.log("Smaller");
}
```

```go
// Go
x := 10
if x > 5 {
    fmt.Println("Greater")
} else {
    fmt.Println("Smaller")
}
```

### 4. Function Definition

```fira
add(a, b)
  a + b
```

```fira
add = (a, b){a + b}
```

```fira
int add = (int a, int b){a + b}
```

```python
# Python
def add(a, b):
    return a + b
```

```java
// Java
public static int add(int a, int b) {
    return a + b;
}
```

```javascript
// JavaScript
function add(a, b) {
  return a + b;
}
// or
const add = (a, b) => a + b;
```

```c
// C
int add(int a, int b) {
    return a + b;
}
```

### 5. Array/List Operations

```fira
my_list = [1, 2, 3]
my_list.push(4)
```

```fira
Array.append(arr, element)
  Array.push(arr, element)

my_list = [1, 2, 3]
my_list.append(4)
```

```python
# Python
my_list = [1, 2, 3]
my_list.append(4)
```

```java
// Java
import java.util.ArrayList;

ArrayList<Integer> myList = new ArrayList<>();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
```

```javascript
// JavaScript
const myArray = [1, 2, 3];
myArray.push(4);
```

```rust
// Rust
let mut my_vec = vec![1, 2, 3];
my_vec.push(4);
```

### 6. Class Definition

```fira
Person(name)
  .name = name // foo is private, .foo is public
  .greet()
    prn `Hello, {name}`
```

```fira
Person(name)
  .name = name

// append a method
Person.greet(person)
  prn `Hello, {person.name}`
```

```fira
// fp style approach
Person(name){
  {
    name // name <=> name: name
    greet(person)
      prn `Hello, {name}`
  }
  // it's an object instead of an expression
}
```

```python
# Python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, {self.name}")
```

```java
// Java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public void greet() {
        System.out.println("Hello, " + name);
    }
}
```

```javascript
// JavaScript (ES6)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

```c++
// C++
class Person {
private:
    std::string name;
public:
    Person(std::string name) : name(name) {}

    void greet() {
        std::cout << "Hello, " << name << std::endl;
    }
};
```

### 7. Switch/Case Statement

```fira
day = 3
days = {
  1: "Monday" //, <=> \n
  2: "Tuesday"
}
prn days[day] | "Other day" // evaluates to second value if first one is falsy
// falsy: nil, false, 0, ""
```

```fira
day = 3
days = {
  1: "Monday" //, <=> \n
  2: "Tuesday"
}
prn days[day] != nil ? days[day] : "Other day"
// undefined and null are both nil in firascript
```

```java
// Java
int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Other day");
}
```

```javascript
// JavaScript
const day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}
```

```rust
// Rust
let day = 3;
match day {
    1 => println!("Monday"),
    2 => println!("Tuesday"),
    _ => println!("Other day"),
}
```

```python
# Python (no switch, using if-elif or dictionary)
day = 3
days = {
    1: "Monday",
    2: "Tuesday"
}
print(days.get(day, "Other day"))
```

These examples highlight how different languages implement the same concepts with varying syntax. Key differences include:

- Use of semicolons and curly braces
- Type declarations
- Function/method definitions
- Code block delimitation
- Variable declaration keywords
- Print/output methods
- Class definitions

Would you like to see comparisons for any specific languages or features?

## algorithms

> author: deepseek v3, edited by fira
>
> prompt: give me some code snippets of algorithms to show the difference of syntax between programming languages

Here are some common algorithms implemented in different programming languages to highlight syntax differences:

### 1. **Fibonacci Sequence (Recursive)**

```fira
fib(n)
  n <= 1? n: fib(n-1) + fib(n-2)
```

```fira
fib(n)
  if n <= 1 // if a <=> if(a)
    n
  else
    fib(n-1) + fib(n-2)
```

```python
# Python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

```java
// Java
public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

```javascript
// JavaScript
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

```rust
// Rust
fn fib(n: i32) -> i32 {
    if n <= 1 { return n; }
    fib(n-1) + fib(n-2)
}
```

### 2. **Bubble Sort**

```fira
swap(&a, &b)
  a, b = b, a

bubble_sort(&arr)
  int n = arr.length
  for i each(n-1)
    for j each(n-i-2)
      if arr[j] > arr[j+1]
        swap(arr[j], arr[j+1])
```

```python
# Python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

```java
// Java
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}
```

```javascript
// JavaScript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
}
```

```go
// Go
func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}
```

### 3. **Binary Search**

```fira
Array.indexOf(arr, target)
  int l, r = 0, arr.length-1
  while l <= r
    int m = (l + r) / 2
    arr[mid] == target?
      return m
    : arr[mid] < target
      l = m + 1
    :
      r = m - 1
  nil
```

```python
# Python
def binary_search(arr, target):
    low, high = 0, len(arr)-1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

```java
// Java
public static int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

```javascript
// JavaScript
function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
```

```rust
// Rust
fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = arr.len() - 1;
    while low <= high {
        let mid = (low + high) / 2;
        match arr[mid].cmp(&target) {
            std::cmp::Ordering::Equal => return Some(mid),
            std::cmp::Ordering::Less => low = mid + 1,
            std::cmp::Ordering::Greater => high = mid - 1,
        }
    }
    None
}
```

### 4. **Factorial (Recursive)**

```fira
factorial(n)
  n == 0? 1 : n * factorial(n-1)
```

```python
# Python
def factorial(n):
    return 1 if n == 0 else n * factorial(n-1)
```

```java
// Java
public static int factorial(int n) {
    return n == 0 ? 1 : n * factorial(n-1);
}
```

```javascript
// JavaScript
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
```

```haskell
-- Haskell
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

### 5. **Quick Sort**

```fira
quickSort(arr) {
  if (arr.length <= 1) arr;
  else
    pivot = arr[math.floor(arr.length / 2)];
    left = arr.filter((x){x < pivot});
    middle = arr.filter((x){x == pivot});
    right = arr.filter((x){x > pivot});
    [...quickSort(left), ...middle, ...quickSort(right)];
}
```

```python
# Python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

```java
// Java
public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}
```

```javascript
// JavaScript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

```rust
// Rust
fn quicksort(arr: &[i32]) -> Vec<i32> {
    if arr.len() <= 1 {
        return arr.to_vec();
    }
    let pivot = arr[arr.len()/2];
    let left: Vec<_> = arr.iter().filter(|&&x| x < pivot).cloned().collect();
    let middle: Vec<_> = arr.iter().filter(|&&x| x == pivot).cloned().collect();
    let right: Vec<_> = arr.iter().filter(|&&x| x > pivot).cloned().collect();
    [quicksort(&left), middle, quicksort(&right)].concat()
}
```

### Key Syntax Differences Illustrated:

1. **Function Definitions**:

   - Python/JS use `def`/`function`
   - Java/Rust specify return types
   - Rust uses `fn` and type annotations (`-> i32`)

2. **Variable Declarations**:

   - Python/JS are dynamically typed
   - Java/Rust require explicit types (`int`, `i32`)

3. **Control Structures**:

   - Python uses indentation
   - Others use curly braces
   - Rust's `match` vs `switch` in Java/JS

4. **Array Operations**:

   - Python has list comprehensions
   - Java uses traditional loops
   - Rust uses iterators and `collect()`

5. **Return Values**:
   - Python/JS can return multiple types
   - Java/Rust must declare return types
   - Rust uses `Option` for nullable returns

Would you like to see any specific algorithm implemented in particular languages?
