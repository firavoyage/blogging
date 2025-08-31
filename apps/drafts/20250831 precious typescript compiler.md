i wanna write a ts to js compiler tell me how

how the compiler work under the hood

---

# How TypeScript Compiler Works Under the Hood

Let me break down the internal workings of the TypeScript compiler in detail:

## Compilation Pipeline

The TypeScript compiler follows this multi-stage process:

```
Source Code → Scanner → Parser → Binder → Checker → Transformer → Emitter → JavaScript
```

## 1. Scanner (Lexical Analysis)

**Purpose**: Convert raw source code into tokens

```typescript
// Example TypeScript code
const message: string = "Hello";
```

**Tokenization**:

```
[const] [message] [:] [string] [=] ["Hello"] [;]
```

**Scanner Process**:

- Reads character by character
- Identifies keywords, identifiers, operators, literals
- Handles whitespace and comments
- Creates `SyntaxKind` tokens

## 2. Parser (Syntax Analysis)

**Purpose**: Convert tokens into Abstract Syntax Tree (AST)

**AST Structure**:

```javascript
{
  kind: SyntaxKind.VariableDeclaration,
  name: { kind: SyntaxKind.Identifier, text: "message" },
  type: { kind: SyntaxKind.StringKeyword },
  initializer: { kind: SyntaxKind.StringLiteral, text: "Hello" }
}
```

**Parser Types**:

- **Abstract Syntax Tree (AST)**: Pure structure of code
- **Concrete Syntax Tree (CST)**: Includes all tokens (punctuation, etc.)

## 3. Binder

**Purpose**: Create symbol tables and connect identifiers

**What it does**:

- Creates `Symbol` objects for each declaration
- Links variable references to their declarations
- Builds scope hierarchy
- Handles function/block scoping

```typescript
function example() {
  const x = 1; // Symbol created for 'x'
  console.log(x); // Reference linked to 'x' symbol
}
```

## 4. Type Checker (The Magic Sauce)

**Purpose**: Verify type correctness and infer types

**Key Activities**:

### A. Type Inference

```typescript
const x = 10; // Infer x: number
const y = "hello"; // Infer y: string
```

### B. Type Relationship Checking

```typescript
interface Person {
  name: string;
}
const person: Person = { name: "John" }; // ✓ Valid
const invalid: Person = { age: 30 }; // ✗ Error
```

### C. Generic Type Resolution

```typescript
function identity<T>(arg: T): T {
  return arg;
}
const result = identity("hello"); // T inferred as string
```

### D. Control Flow Analysis

```typescript
function example(x: string | number) {
  if (typeof x === "string") {
    return x.length; // x is string here
  }
  return x; // x is number here
}
```

## 5. Transformer (Code Transformation)

**Purpose**: Apply compiler transformations and emit planning

**Transformations include**:

- **Type erasure**: Remove type annotations
- **Async/await** → Promise transformation
- **Decorators** processing
- **Enum** transformation
- **Module** system conversion

**Example Transformation**:

```typescript
// Input TypeScript
const message: string = "Hello";

// Output JavaScript (after transformation)
const message = "Hello";
```

## 6. Emitter

**Purpose**: Generate final JavaScript output

**Emitter Types**:

- **JavaScript emitter**: `.ts` → `.js`
- **Declaration emitter**: `.ts` → `.d.ts` (type definitions)
- **Source map emitter**: Generates `.js.map` files

**Emission Strategies**:

```javascript
// CommonJS
exports.message = "Hello";

// ES Modules
export const message = "Hello";

// AMD
define(["require", "exports"], function (require, exports) {
  exports.message = "Hello";
});
```

## Deep Dive: Type System Implementation

### Type Representation

```typescript
interface Type {
  flags: TypeFlags;
  symbol?: Symbol;
}

// Example type objects
const stringType: Type = { flags: TypeFlags.String };
const numberType: Type = { flags: TypeFlags.Number };
```

### Symbol Table Structure

```typescript
interface Symbol {
  name: string;
  declarations: Declaration[];
  members?: SymbolTable; // For classes/interfaces
  exports?: SymbolTable; // For modules
}

interface SymbolTable {
  [name: string]: Symbol;
}
```

### Control Flow Graph

The compiler builds a control flow graph to understand how types change:

```typescript
function example(x: string | number) {
  // Node 1: Entry - x: string | number
  if (typeof x === "string") {
    // Node 2: True branch - x: string
    return x.length;
  } else {
    // Node 3: False branch - x: number
    return x;
  }
  // Node 4: Merge - (never reached)
}
```

## Compiler Architecture Components

### Program

The main orchestrator that manages:

- Source files
- Compiler options
- Module resolution
- Build state

### SourceFile

Represents a parsed file with:

- AST
- Symbol table
- Diagnostics
- Dependencies

### Compiler Host

Abstracts file system operations:

- `fileExists()`
- `readFile()`
- `getCurrentDirectory()`
- `writeFile()`

## Performance Optimizations

### 1. Incremental Compilation

- Only rechecks changed files
- Reuses previous type checking results
- Smart dependency tracking

### 2. Project References

- Breaks large codebases into smaller projects
- Parallel compilation
- Cached build results

### 3. Language Service Cache

- Persistent caching of ASTs and symbols
- Fast recompilation during development

## Example: Tracing the Compilation Process

Here's what happens when compiling this code:

```typescript
// src/main.ts
interface User {
  id: number;
  name: string;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

const currentUser: User = { id: 1, name: "Alice" };
console.log(greet(currentUser));
```

### Step-by-Step Transformation:

1. **Scanner**: Creates 25+ tokens
2. **Parser**: Builds AST with ~15 nodes
3. **Binder**: Creates symbols for `User`, `greet`, `currentUser`
4. **Checker**:
   - Verifies `currentUser` matches `User` interface
   - Checks `greet` return type matches annotation
   - Infers literal types
5. **Transformer**: Removes types, preserves logic
6. **Emitter**: Generates clean JavaScript

```javascript
// Output JavaScript
function greet(user) {
  return `Hello, ${user.name}!`;
}

const currentUser = { id: 1, name: "Alice" };
console.log(greet(currentUser));
```

## Key Data Structures

### SyntaxKind Enum

```typescript
enum SyntaxKind {
  Identifier,
  StringLiteral,
  NumericLiteral,
  FunctionDeclaration,
  VariableDeclaration,
  // ... 200+ more
}
```

### Node Flags

```typescript
enum NodeFlags {
  None = 0,
  Let = 1 << 0,
  Const = 1 << 1,
  Async = 1 << 2,
  // ... etc
}
```

### Type Flags

```typescript
enum TypeFlags {
  Any = 1 << 0,
  String = 1 << 1,
  Number = 1 << 2,
  Boolean = 1 << 3,
  // ... etc
}
```

## Real-world Compilation Challenges

### 1. Circular References

```typescript
interface A {
  b: B;
}
interface B {
  a: A;
}
```

### 2. Conditional Types

```typescript
type Test<T> = T extends string ? "string" : "other";
```

### 3. Mapped Types

```typescript
type Readonly<T> = { readonly [P in keyof T]: T[P] };
```

### 4. Template Literal Types

```typescript
type EventName<T extends string> = `${T}Changed`;
```

The TypeScript compiler is a sophisticated system that combines traditional compiler techniques with advanced type theory to provide both strong type safety and excellent developer experience.
