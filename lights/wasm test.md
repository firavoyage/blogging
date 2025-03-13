> author: deepseek r1
>
> prompt: test performance of wasm, measue time in ms, use rust and compile to wasm, compare with js, run a function several times...

To compare the performance of WebAssembly (Wasm) and JavaScript, we'll implement a recursive Fibonacci function in both Rust (compiled to Wasm) and JavaScript, then measure their execution times. Here's a step-by-step guide:

### 1. Set Up Rust Project

Create a new Rust library and add `wasm-bindgen` as a dependency:

```bash
cargo new wasm-fib --lib
cd wasm-fib
```

Edit `Cargo.toml`:

```toml
[package]
name = "wasm-fib"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

### 2. Implement Fibonacci in Rust

Edit `src/lib.rs`:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
    if n <= 1 {
        n
    } else {
        fib(n - 1) + fib(n - 2)
    }
}
```

### 3. Build the Wasm Module

Compile the Rust code to Wasm:

```bash
wasm-pack build --target web
```

This generates Wasm files in the `pkg/` directory.

### 4. Create HTML/JavaScript Test Harness

Create `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Wasm vs JS Fibonacci</title>
  </head>
  <body>
    <script type="module">
      import init, { fib } from "./pkg/wasm_fib.js";

      async function runTest() {
        await init();

        function jsFib(n) {
          if (n <= 1) return n;
          return jsFib(n - 1) + jsFib(n - 2);
        }

        const n = 40;
        const times = 20;
        const expected = 102334155;

        // Validate correctness
        console.assert(fib(n) === expected, "Wasm result incorrect");
        console.assert(jsFib(n) === expected, "JS result incorrect");

        // Test WASM
        const wasmStart = performance.now();
        for (let i = 0; i < times; i++) fib(n);
        const wasmDuration = performance.now() - wasmStart;

        // Test JS
        const jsStart = performance.now();
        for (let i = 0; i < times; i++) jsFib(n);
        const jsDuration = performance.now() - jsStart;

        console.log(
          `Wasm total: ${wasmDuration}ms (avg ${wasmDuration / times}ms/call)`
        );
        console.log(
          `JS total: ${jsDuration}ms (avg ${jsDuration / times}ms/call)`
        );
      }

      runTest();
    </script>
  </body>
</html>
```

### 5. Run the Test

Serve the files using a web server (e.g., Python's HTTP server):

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` and check the browser's console for results.

### Expected Results

• **Wasm** will typically execute the Fibonacci function **3-10x faster** than JavaScript due to:
• Near-native performance from Rust
• LLVM optimizations during compilation
• Efficient Wasm execution in the browser

• **JavaScript** will be slower due to:
• Interpretation overhead
• Dynamic type system
• Garbage collection pauses

### Key Observations

1. **Recursive Overhead**: The recursive Fibonacci implementation (O(2ⁿ)) stresses function call overhead.
2. **Optimization Differences**: Rust's compiler optimizes the code more aggressively than JavaScript JIT compilers.
3. **Consistency**: Wasm provides predictable performance, while JS performance can vary between engines.

For computationally intensive tasks, Wasm generally outperforms JavaScript. For simple operations, the difference may be negligible. Always profile real-world use cases for accurate comparisons.

---

Wasm total: 9447ms (avg 472.35ms/call)
JS total: 18562.100000023842ms (avg 928.1050000011921ms/call)
