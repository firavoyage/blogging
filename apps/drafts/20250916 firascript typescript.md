# 1

simple guide of most useful features in typescript

---

TypeScript enhances JavaScript by adding static types, improving code quality and developer experience. Here's a concise guide to its most useful features:

---

### **1. Basic Types**

Explicitly declare types for variables, parameters, and return values:

```typescript
let isDone: boolean = false;
let count: number = 42;
let name: string = "Alice";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 42]; // Fixed-type array
```

---

### **2. Interfaces**

Define object shapes for type checking:

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}
const user: User = { id: 1, name: "John" };
```

---

### **3. Union Types**

Allow variables to hold multiple types:

```typescript
let value: string | number;
value = "hello"; // OK
value = 42; // OK
```

---

### **4. Type Aliases**

Create custom names for complex types:

```typescript
type ID = number | string;
type Response<T> = { data: T; error?: string };
```

---

### **5. Generics**

Write reusable code with type parameters:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
const output = identity<string>("hello");
```

---

### **6. Type Inference**

TypeScript automatically infers types when possible:

```typescript
let message = "Hello"; // Inferred as `string`
```

---

### **7. Strict Null Checks**

Prevent `null`/`undefined` errors with `strictNullChecks` in `tsconfig.json`:

```typescript
let name: string | null = null; // Must explicitly handle null
```

---

### **8. Classes**

Use OOP features with types, access modifiers, and more:

```typescript
class Person {
  constructor(public name: string, private age: number) {}
  greet() {
    return `Hello, ${this.name}`;
  }
}
```

---

### **9. Utility Types**

Built-in helpers for common type transformations:

```typescript
interface User {
  name: string;
  age: number;
}
type PartialUser = Partial<User>; // All properties optional
type ReadonlyUser = Readonly<User>; // Immutable properties
```

---

### **10. Mapped Types**

Dynamically generate types:

```typescript
type Keys = "name" | "age";
type Person = { [K in Keys]: string }; // { name: string; age: string }
```

---

### **11. `as` Type Assertions**

Override TypeScript's inferred type when you know better:

```typescript
const input = document.getElementById("input") as HTMLInputElement;
```

---

### **12. `unknown` Type**

Safer alternative to `any`—requires type checks before use:

```typescript
let data: unknown;
if (typeof data === "string") {
  console.log(data.toUpperCase()); // Now safe
}
```

---

### **13. Optional Chaining (`?.`)**

Safely access nested properties:

```typescript
const name = user?.profile?.name; // Returns `undefined` if any chain is null/undefined
```

---

### **14. Nullish Coalescing (`??`)**

Fall back to default values only for `null`/`undefined`:

```typescript
const name = user.name ?? "Anonymous"; // Uses "Anonymous" only if `user.name` is null/undefined
```

---

### **Key Benefits**

- **Early Error Detection**: Catch mistakes during development.
- **Self-Documenting Code**: Types clarify intent.
- **Enhanced IDE Support**: Autocomplete, refactoring, and navigation.

---

### **Getting Started**

1. Install: `npm install -g typescript`
2. Initialize: `tsc --init` (creates `tsconfig.json`)
3. Compile: `tsc` (converts `.ts` files to `.js`)

Use these features to write safer, more maintainable code. Explore the [TypeScript Handbook](https://www.typescriptlang.org/docs/) for deeper dives!

# 2

advanced useful typescript features i may not know

---

TypeScript offers several advanced features that enhance type safety, maintainability, and developer experience. Here are some powerful yet less commonly known features with practical examples:

---

### 1. **Template Literal Types**

Create complex string literal types by combining strings and placeholders.

```typescript
type EventName = "click" | "scroll";
type Element = "div" | "span";

type EventHandlerName = `on${Capitalize<EventName>}${Capitalize<Element>}`;
// "onClickDiv" | "onClickSpan" | "onScrollDiv" | "onScrollSpan"
```

---

### 2. **Recursive Type Aliases**

Define self-referencing types for nested structures.

```typescript
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const data: Json = {
  users: [{ name: "Alice", age: 30 }],
};
```

---

### 3. **Assertion Functions**

Validate and narrow types at runtime with custom error messages.

```typescript
function assertIsString(val: unknown): asserts val is string {
  if (typeof val !== "string") throw new Error("Not a string!");
}

const input: unknown = "hello";
assertIsString(input); // Now `input` is typed as string
console.log(input.toUpperCase()); // Safe
```

---

### 4. **Using `in` Operator for Type Narrowing**

Discriminate union types dynamically.

```typescript
interface Dog {
  bark: () => void;
}
interface Cat {
  meow: () => void;
}

function makeSound(pet: Dog | Cat) {
  if ("bark" in pet) pet.bark();
  else pet.meow();
}
```

---

### 5. **Mapped Types with `as` Clauses (Key Remapping)**

Transform keys in mapped types (TS 4.1+).

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }
```

---

### 6. **Conditional Type Inference with `infer`**

Extract types from nested structures.

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type A = UnwrapPromise<Promise<string>>; // string
```

---

### 7. **Branded Types for Nominal Typing**

Enforce additional type safety for primitives (e.g., IDs, emails).

```typescript
type Email = string & { readonly __brand: unique symbol };
function validateEmail(email: string): Email | null {
  return email.includes("@") ? (email as Email) : null;
}
```

---

### 8. **Const Context**

Preserve literal types in objects/arrays with `as const`.

```typescript
const routes = [{ path: "/home", component: HomePage }] as const;
// path is "/home", not string
```

---

### 9. **Exclusive Union Types with `never`**

Enforce mutually exclusive properties.

```typescript
type XOR<T, U> = T | U extends object
  ?
      | (T & Partial<Record<keyof U, never>>)
      | (U & Partial<Record<keyof T, never>>)
  : T | U;

type A = { foo: string };
type B = { bar: number };
type C = XOR<A, B>;
// Can have { foo: string } OR { bar: number }, but not both
```

---

### 10. **Decorators for Metadata/Validation**

Add metadata or validate arguments (requires `experimentalDecorators`).

```typescript
function Validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    if (args.some((arg) => arg === undefined))
      throw new Error("Invalid argument");
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @Validate
  add(a: number, b: number) {
    return a + b;
  }
}
```

---

### 11. **`satisfies` Operator (TS 4.9+)**

Validate expressions without losing type inference.

```typescript
const colors = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#00FF00",
} satisfies Record<string, string>;
// Ensures values are strings, but keeps literal types for keys
```

---

### 12. **Type-Only Imports/Exports**

Isolate types to avoid runtime imports.

```typescript
import type { SomeType } from "./module"; // Not emitted in JS
export type { AnotherType }; // Excluded from JS output
```

---

### 13. **Module Augmentation**

Extend existing type definitions.

```typescript
// Augment a library's types
declare module "library" {
  interface Config {
    customOption: boolean;
  }
}
```

---

### 14. **Generic Constraints with `keyof`**

Enforce type-safe property access.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person = { name: "Alice", age: 30 };
getProperty(person, "name"); // string
```

---

### 15. **Utility Types: `Awaited`, `Partial<T>`, etc.**

Leverage built-in utilities for common transformations.

```typescript
type Result = Awaited<Promise<Promise<string>>>; // string
type PartialUser = Partial<{ name: string; age: number }>; // All properties optional
```

---

These features enable more expressive, safe, and maintainable code. Explore the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook) for deeper insights!

# 3

advanced typescript features

---

Advanced TypeScript features elevate your code by enhancing type safety, improving maintainability, and enabling sophisticated type transformations. Below are key advanced features with practical examples:

---

### 1. **Conditional Types**

Dynamically select types based on conditions using `extends`.

```typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<number>; // false
```

---

### 2. **Mapped Types**

Transform existing types by iterating over their keys.

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = { name: string; age: number };
type ReadonlyPerson = Readonly<Person>;
// { readonly name: string; readonly age: number }
```

---

### 3. **Template Literal Types**

Generate types using template string syntax.

```typescript
type EventName = "click" | "scroll";
type EventHandler = `on${Capitalize<EventName>}`;
// 'onClick' | 'onScroll'
```

---

### 4. **Recursive Type Aliases**

Define self-referencing types (requires TypeScript 4.1+).

```typescript
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const data: Json = {
  name: "Alice",
  scores: [100, 90],
  metadata: { isActive: true },
};
```

---

### 5. **Key Remapping via `as`**

Rename keys in mapped types (TypeScript 4.1+).

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }
```

---

### 6. **Variadic Tuple Types**

Manipulate function parameter types with precision (TypeScript 4.0+).

```typescript
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
```

---

### 7. **Assertion Functions**

Enforce invariants at runtime and narrow types.

```typescript
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") throw new Error("Not a string!");
}

function greet(input: unknown) {
  assertIsString(input);
  console.log(input.toUpperCase()); // input is now string
}
```

---

### 8. **Type Guards with `is`**

Create custom runtime checks for type narrowing.

```typescript
function isNumberArray(value: any): value is number[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "number")
  );
}

const unknownValue: unknown = [1, 2, 3];
if (isNumberArray(unknownValue)) {
  unknownValue.push(4); // unknownValue is number[]
}
```

---

### 9. **Decorators (Experimental)**

Annotate classes/methods (requires `experimentalDecorators` in `tsconfig.json`).

```typescript
function Log(target: any, key: string) {
  console.log(`Method ${key} called`);
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}
```

---

### 10. **Using `infer` in Conditional Types**

Extract types from nested structures.

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type A = UnwrapPromise<Promise<string>>; // string
```

---

### 11. **Branded Types**

Create nominal types for additional safety.

```typescript
type EUR = { readonly _brand: "EUR" };
type USD = { readonly _brand: "USD" };
type Money = { amount: number; currency: EUR | USD };

const eur = { amount: 100, currency: { _brand: "EUR" } } as Money;
```

---

### 12. **Exhaustiveness Checking with `never`**

Ensure all cases are handled in conditionals.

```typescript
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

---

### Key Benefits:

- **Type Safety**: Catch errors at compile time.
- **Abstraction**: Create reusable type logic.
- **Tooling**: Leverage autocomplete and inline documentation.
- **Maintainability**: Refactor with confidence.

These features enable complex type transformations and runtime checks, making TypeScript a powerfully expressive language for large-scale applications.
