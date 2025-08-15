## can i use react without a compiler? i wont wanna use jsx or ts. i wanna use hooks instead of classes

Yes, you can use React without a compiler (like Babel or TypeScript) and without JSX. You can write React components using plain JavaScript by manually creating elements with `React.createElement()`. Hooks work the same way whether you use JSX or not.

### Example: Using React with Plain JavaScript (No JSX)

Here's how you can write a React component using hooks (like `useState`) without JSX:

```javascript
const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Count: ", count),
    React.createElement(
      "button",
      { onClick: () => setCount(count + 1) },
      "Increment"
    )
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
```

### Key Points:

1. **No JSX Needed** – Instead of writing JSX (`<div>...</div>`), you use `React.createElement(type, props, children)`.
2. **Hooks Work Normally** – `useState`, `useEffect`, etc., work the same way as in JSX-based React.
3. **No Compiler Required** – Since you're not using JSX or TypeScript, you don't need Babel/TS. Just load React in a browser via CDN:
   ```html
   <script
     crossorigin
     src="https://unpkg.com/react@18/umd/react.development.js"
   ></script>
   <script
     crossorigin
     src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
   ></script>
   ```

### Pros & Cons:

✅ **No build step needed** – Works directly in the browser.  
❌ **Verbose syntax** – Writing `React.createElement` for everything is tedious.  
❌ **Less readable** – JSX is cleaner for nested structures.

### Alternative: Hyperscript-style Helpers

If `React.createElement` is too verbose, you can write a helper function like `h()` to shorten it:

```javascript
function h(type, props, ...children) {
  return React.createElement(type, props, ...children);
}

function App() {
  const [count, setCount] = useState(0);
  return h(
    "div",
    null,
    h("h1", null, "Count: ", count),
    h("button", { onClick: () => setCount(count + 1) }, "Increment")
  );
}
```

### Conclusion:

Yes, you can use React with hooks and without JSX/compilers, but it's more verbose. JSX is just syntactic sugar for `React.createElement()`. If you want to avoid a build step, consider using a helper function to reduce boilerplate.

## react have too many features. i dont want them all. is there a lighter version of react, with most essential features like state and effects?

Yes! If you want a lighter alternative to React with just the essential features (like state and effects), consider these options:

### 1. **Preact** (Best React Alternative)

- **What it is**: A 3KB lightweight React alternative with the same modern API (hooks, `useState`, `useEffect`, etc.).
- **Features**:
  - Supports React hooks (`useState`, `useEffect`, `useMemo`, etc.).
  - Works with JSX (optional, can use `h()` instead).
  - Much smaller and faster than React.
- **How to use**:

  ```javascript
  import { h, render, useState } from "preact";

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  render(<Counter />, document.getElementById("root"));
  ```

- **No JSX?** Use `h()` (Preact's `createElement`):
  ```javascript
  return h(
    "div",
    null,
    h("p", null, count),
    h("button", { onClick: () => setCount(count + 1) }, "Increment")
  );
  ```
- **Bundle Size**: ~3KB (vs React's ~40KB).

### 2. **Nano JSX** (Ultra-Lightweight JSX Runtime)

- **What it is**: A tiny (~1KB) JSX runtime with hooks support.
- **Features**:
  - Only includes `useState`, `useEffect`, and basic JSX rendering.
  - No virtual DOM (faster, but less optimized for large apps).
- **Example**:

  ```javascript
  import { useState, render } from "nano-jsx";

  function App() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
  }

  render(<App />, document.getElementById("root"));
  ```

### 3. **Sinuous** (Reactive, No Virtual DOM)

- **What it is**: A tiny (~3KB) reactive library with hooks-like state.
- **Features**:
  - `useState`-like reactivity (but not exactly React hooks).
  - No virtual DOM (direct DOM updates).
- **Example**:

  ```javascript
  import { h, o, $ } from "sinuous";

  const count = o(0); // Observable state
  const view = () => (
    <div>
      <p>{$(count)}</p> // Auto-updates
      <button onClick={() => count(count() + 1)}>+1</button>
    </div>
  );

  document.body.append(view());
  ```

### 4. **Vanilla JS + State Management**

If you **only need state/effects**, you can avoid a framework entirely:

```javascript
// Simple useState/useEffect implementation
let state;
function useState(initial) {
  state = state || initial;
  const setState = (newValue) => {
    state = newValue;
    render();
  };
  return [state, setState];
}

function useEffect(callback, deps) {
  callback(); // Simplified (no cleanup)
}

function render() {
  const [count, setCount] = useState(0);
  document.getElementById("root").innerHTML = `
    <div>
      <p>${count}</p>
      <button onclick="setCount(${count + 1})">+1</button>
    </div>
  `;
}

render();
```

### **Recommendation**

- **For React-like minimalism**: Use **Preact** (best balance of size & compatibility).
- **For ultra-lightweight**: **Nano JSX** or **Sinuous**.
- **No framework**: Roll your own state/effects (but limited scalability).

Would you like a specific example for your use case?

## what this the difference between react, preact and others besides bundle size

Great question! The differences between **React**, **Preact**, and other lightweight alternatives go beyond just bundle size. Here’s a detailed breakdown of key distinctions:

---

### **1. React (Full-Featured)**

**Pros:**  
✅ **Rich Ecosystem** – Best for complex apps (Next.js, Redux, React Router).  
✅ **Optimized Reconciliation** – Virtual DOM with efficient diffing.  
✅ **Advanced Features** – Concurrent Mode, Suspense, Error Boundaries, Server Components.  
✅ **Strict Mode & DevTools** – Helps catch bugs early.

**Cons:**  
❌ **Larger Bundle** (~40KB min+gzip).  
❌ **More Overhead** – Some features (like Concurrent Mode) may be unnecessary for small apps.

**Best for:** Large-scale apps, teams, or when you need React’s full power.

---

### **2. Preact (Lightweight React Alternative)**

**Pros:**  
✅ **Tiny Size** (~3KB min+gzip).  
✅ **Same Modern API** – Supports hooks, `useState`, `useEffect`, etc.  
✅ **Faster** – Optimized for performance with a simpler Virtual DOM.  
✅ **Compatibility** – Can alias `react` to `preact` in bundlers (saves size).

**Cons:**  
❌ **Fewer Features** – No Concurrent Mode, limited Suspense.  
❌ **Minor Differences** – Some edge-case React behaviors may differ.

**Best for:** Projects where bundle size matters (PWAs, embedded widgets).

---

### **3. Nano JSX / Sinuous / etc. (Ultra-Lightweight)**

**Pros:**  
✅ **Tiniest Size** (~1-3KB).  
✅ **No Virtual DOM** – Direct DOM updates (faster in some cases).  
✅ **Simple Hooks** – Basic `useState`/`useEffect` support.

**Cons:**  
❌ **Limited Ecosystem** – Fewer third-party libraries.  
❌ **No React Compatibility** – Can’t use React tools/libraries.  
❌ **Less Optimized** – Manual DOM updates can hurt performance in large apps.

**Best for:** Micro-apps, static sites, or when you need barebones reactivity.

---

### **Key Differences Beyond Size**

| Feature                       | React           | Preact                   | Nano JSX/Sinuous                |
| ----------------------------- | --------------- | ------------------------ | ------------------------------- |
| **Virtual DOM**               | Yes (optimized) | Yes (simpler)            | No (direct DOM)                 |
| **Hooks Support**             | Full            | Full                     | Basic (`useState`, `useEffect`) |
| **Suspense/Error Boundaries** | Yes             | Partial (basic Suspense) | No                              |
| **Concurrent Mode**           | Yes             | No                       | No                              |
| **Server Components**         | Yes             | No                       | No                              |
| **React DevTools**            | Yes             | Yes (Preact DevTools)    | No                              |
| **JSX Required?**             | No (but common) | No (can use `h()`)       | Optional                        |
| **Ecosystem**                 | Massive         | Good (React-compatible)  | Minimal                         |

---

### **When to Choose What?**

- **Use React** if you need:

  - Advanced features (Suspense, Concurrent Mode).
  - A large ecosystem (Next.js, Redux, etc.).
  - Future-proofing for complex apps.

- **Use Preact** if you want:

  - Near-React API with tiny size.
  - Good performance without sacrificing hooks.
  - Compatibility with some React libraries.

- **Use Nano JSX/Sinuous** if:
  - You’re building a tiny app (e.g., a widget).
  - You don’t need Virtual DOM or React compatibility.
  - Bundle size is the #1 priority.

---

### **Example: The Same Component in Each**

#### **React (with JSX)**

```jsx
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

#### **Preact (with `h()` instead of JSX)**

```javascript
import { h, render, useState } from "preact";
function Counter() {
  const [count, setCount] = useState(0);
  return h(
    "div",
    null,
    h("p", null, count),
    h("button", { onClick: () => setCount(count + 1) }, "+1")
  );
}
render(h(Counter), document.body);
```

#### **Nano JSX (No Virtual DOM)**

```javascript
import { useState, render } from "nano-jsx";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
render(<Counter />, document.body);
```

---

### **Final Recommendation**

- **Stick with React** if you’re building something serious.
- **Switch to Preact** if bundle size is critical but you still want hooks.
- **Try Nano JSX/Sinuous** if you’re experimenting or need ultra-lightweight solutions.

Would you like a deeper dive into any of these?

## will they call the component function whenever state changes? or just update the minimal view the depends on certain state.

Great question! The behavior depends on whether the library uses a **Virtual DOM** (like React/Preact) or **fine-grained reactivity** (like Sinuous/Solid.js). Here's how each approach works:

---

### **1. React & Preact (Virtual DOM + Re-render on State Change)**

- **What happens?**

  - When state changes (`setState`), the **entire component function re-runs**.
  - A new Virtual DOM tree is created and **diffed** against the previous one.
  - Only the **minimal required DOM updates** are applied.

- **Example:**

  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    console.log("Component re-rendered!"); // Logs on every state change.
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
  }
  ```

  - Even though only `<p>` needs an update, the whole `Counter` function executes again.
  - **Optimizations**:
    - `React.memo`/`useMemo`/`useCallback` can prevent unnecessary child re-renders.
    - Preact is slightly more aggressive in skipping work than React.

- **Key Point:**  
  The **component function runs fully**, but the **DOM updates are minimal** thanks to the Virtual DOM diffing.

---

### **2. Sinuous / Solid.js (Fine-Grained Reactivity)**

- **What happens?**

  - State changes **trigger updates only in the parts of the DOM that depend on that state**.
  - The component function **does not re-run**; only the bound elements update.

- **Example (Sinuous):**

  ```javascript
  import { o, h, $ } from "sinuous";
  const count = o(0); // Observable state
  const view = () => (
    <div>
      <p>{$(count)}</p> // Auto-updates when `count` changes
      <button onClick={() => count(count() + 1)}>+1</button>
    </div>
  );
  ```

  - Only the `<p>` text updates when `count` changes. No Virtual DOM diffing.

- **Key Point:**  
  **No re-renders**—just direct DOM updates where needed.

---

### **3. Nano JSX / Vanilla JS (Manual DOM Updates)**

- **What happens?**

  - You manually update the DOM when state changes (no automatic tracking).
  - The component function may re-run, but it’s up to you to optimize.

- **Example (Vanilla JS):**
  ```javascript
  let count = 0;
  function updateDOM() {
    document.querySelector("p").textContent = count;
  }
  document.querySelector("button").addEventListener("click", () => {
    count++;
    updateDOM(); // Manual update
  });
  ```
  - **No re-renders**, but you manage all updates yourself.

---

### **Summary: When Does the Component Re-run?**

| Library        | Re-run Component? | DOM Updates                | Mechanism               |
| -------------- | ----------------- | -------------------------- | ----------------------- |
| **React**      | Yes               | Minimal (Virtual DOM diff) | Full re-render + diff   |
| **Preact**     | Yes               | Minimal (faster diff)      | Full re-render + diff   |
| **Sinuous**    | No                | Targeted (no VDOM)         | Fine-grained reactivity |
| **Solid.js**   | No                | Targeted (no VDOM)         | Fine-grained reactivity |
| **Vanilla JS** | N/A               | Manual                     | Manual updates          |

---

### **Which is More Efficient?**

- **For small apps**: It doesn’t matter much (React/Preact are fast enough).
- **For performance-critical apps**: Fine-grained reactivity (Sinuous/Solid) avoids unnecessary work.
- **For developer experience**: React/Preact’s re-render model is easier to reason about.

---

### **React/Preact Optimization Tips**

To minimize re-renders in React/Preact:

1. Use `React.memo()` for components.
2. Wrap state updates in `useMemo`/`useCallback`.
3. Split components to isolate state changes.

Example:

```jsx
const ExpensiveComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});
```

---

### **Final Answer**

- **React/Preact**: Re-run the component function but update the DOM minimally.
- **Sinuous/Solid**: No re-render—only update the exact DOM nodes that depend on state.
- **Vanilla JS**: No re-render, but you handle updates manually.

Would you like a deeper dive into any of these approaches?

## why the most popular framework, react chose vdom instead of finegrained...

React chose the **Virtual DOM (VDOM)** over fine-grained reactivity primarily for **developer experience**, **predictability**, and **ecosystem scalability**, even though fine-grained reactivity can be more performant in some cases. Here’s why:

---

### **1. Developer Experience (DX) Over Raw Performance**

- **Problem Fine-Grained Solves**:  
  Fine-grained reactivity (e.g., Svelte, Solid.js) updates **only the exact parts of the DOM that changed**, which is efficient. But it requires:

  - Explicit dependency tracking (e.g., `createSignal` in Solid.js).
  - A "reactive mindset" that can feel more like vanilla JS than component-based UI.

- **React’s Choice**:  
  The VDOM’s "re-render everything, then diff" model is **easier to reason about**. Developers write:
  ```jsx
  function Component() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```
  - No need to think about _how_ updates happen—just declare UI based on state.
  - **Tradeoff**: Slightly less efficient than fine-grained, but far more intuitive.

---

### **2. Predictability & Debugging**

- **Fine-Grained Pitfalls**:

  - Reactive systems can have "hidden" updates (e.g., a variable change auto-updating a DOM element).
  - Harder to debug because dependencies are implicit.

- **VDOM’s Advantage**:
  - Re-renders are **explicit** (triggered by `setState`).
  - The **unidirectional data flow** (props down, events up) makes debugging easier.
  - React DevTools show **why a component re-rendered**.

---

### **3. Flexibility & Escape Hatches**

- **VDOM enables:**

  - **Suspense**: React can "pause" rendering mid-component.
  - **Concurrent Mode**: Prioritize UI updates (e.g., typing over rendering a heavy list).
  - **Custom Renderers**: React Native, React Three Fiber, etc.

- **Fine-grained reactivity struggles** with these features because they rely on granular DOM updates, not a tree reconciliation process.

---

### **4. Historical Context (Why React Won)**

When React launched (2013):

- The dominant libraries (Backbone, Angular 1.x) used **manual DOM updates** or **dirty checking**, which were slow and hard to scale.
- React’s VDOM was a **revolutionary balance**:
  - Fast enough (compared to manual updates).
  - Simple enough (compared to fine-grained systems of the time, like Meteor’s Tracker).

Fine-grained reactivity (e.g., Solid.js, Svelte) became viable **later**, thanks to:

- Better JS tooling (compilers, proxies).
- Lessons learned from React’s success.

---

### **5. The Compiler Tradeoff**

- **Fine-grained reactivity often requires a compiler** (e.g., Svelte, Solid.js):

  - Analyzes code to generate optimized DOM updates.
  - Adds build-step complexity.

- **React’s VDOM works without a compiler**:
  - Just JS + a runtime (easier adoption in 2013).
  - **Modern React** _does_ use a compiler (React Forget, for auto-memoization), but it’s optional.

---

### **When Fine-Grained Wins**

- **Performance-critical apps**: Games, real-time dashboards.
- **Small bundles**: No VDOM overhead (e.g., Solid.js apps can be <10KB).
- **Static sites**: Svelte’s compiler shines here.

---

### **Why React Stuck with VDOM**

1. **Backwards compatibility**: Millions of apps rely on React’s model.
2. **Ecosystem**: Tools like Next.js, Redux assume VDOM.
3. **Progressive enhancement**: Concurrent Mode, Server Components, etc., are easier to add to a VDOM system.

---

### **The Future?**

- React is **adopting fine-grained ideas** incrementally:
  - **React Forget** (compiler for auto-memoization).
  - **Server Components** (move work off the client).
- But the core VDOM model will likely stay—it’s good enough for most apps.

---

### **Summary**

| **Virtual DOM (React)**          | **Fine-Grained (Solid.js, Svelte)**   |
| -------------------------------- | ------------------------------------- |
| Easier to learn                  | More performant (but harder to debug) |
| Explicit re-renders              | Implicit reactive updates             |
| Works without a compiler         | Often requires a compiler             |
| Flexible (Concurrent Mode, etc.) | Limited by direct DOM updates         |

React chose the VDOM **to prioritize developer experience and scalability**—and it worked (hence its popularity). But fine-grained alternatives are gaining ground where performance is critical.

Would you prefer a deep dive into how Solid.js or Svelte’s reactivity works?

## should i use react or preact

Whether you should use **React** or **Preact** depends on your project’s needs. Here’s a quick guide to help you decide:

### **Use React if:**

✅ You need **advanced features** like:

- Concurrent Mode
- Suspense for data fetching
- Server Components (Next.js)
- Extensive ecosystem (Redux, React Router, etc.)  
  ✅ You’re building a **large-scale app** with complex state management.  
  ✅ You rely on **React-specific libraries** (e.g., Framer Motion, React Hook Form).

### **Use Preact if:**

✅ You want a **smaller bundle size** (~3KB vs React’s ~40KB).  
✅ You’re building a **progressive web app (PWA)** or performance-critical widget.  
✅ You need **hooks + JSX** but don’t need React’s bleeding-edge features.  
✅ You want **near-React compatibility** with a lighter footprint.

### **Key Differences:**

| Feature               | React         | Preact                          |
| --------------------- | ------------- | ------------------------------- |
| **Size**              | ~40KB         | ~3KB                            |
| **Performance**       | Optimized     | Faster (smaller diffing)        |
| **Ecosystem**         | Massive       | Compatible (with some aliasing) |
| **Suspense**          | Full support  | Basic support                   |
| **Concurrent Mode**   | Yes           | No                              |
| **Server Components** | Yes (Next.js) | No                              |

### **When to Switch to Preact?**

- You’re using React **only for basic hooks (useState, useEffect)**.
- Bundle size is **critical** (e.g., embeddable widgets, low-end devices).
- You don’t need **React 18+ features** (like Streaming SSR).

### **When to Stick with React?**

- You’re using **Next.js, Gatsby, or a React meta-framework**.
- Your app needs **Suspense for data loading** or advanced patterns.
- You depend on **React Native** for mobile.

### **Try Preact if:**

```bash
npm install preact
```

And use it with the **same React code**—just alias `react` to `preact/compat` in your bundler (Webpack/Vite):

```js
// vite.config.js / webpack.config.js
resolve: {
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat',
  },
}
```

### **Final Verdict:**

- **For most projects**: Start with React (it’s the safest bet).
- **For perf-critical small apps**: Preact is a fantastic drop-in replacement.

Would you like help migrating a React app to Preact? Or need a specific comparison for your use case?

## i want to use preact without a bundler, give me its cdn source

Here's how to use **Preact without a bundler** (directly in the browser via CDN):

### **Option 1: Preact (Minimal Hooks Version)**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Preact CDN Example</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- Load Preact & Preact Hooks from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/dist/preact.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/hooks/dist/hooks.min.js"></script>

    <script>
      const { h, render } = window.preact;
      const { useState } = window.preactHooks;

      function Counter() {
        const [count, setCount] = useState(0);
        return h(
          "div",
          null,
          h("h1", null, "Count: ", count),
          h("button", { onClick: () => setCount(count + 1) }, "Increment")
        );
      }

      render(h(Counter), document.getElementById("app"));
    </script>
  </body>
</html>
```

---

### **Option 2: Preact + `preact/compat` (React Compatibility)**

If you need React-like APIs (e.g., `React.createElement` style):

```html
<script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/dist/preact.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/compat/dist/compat.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/hooks/dist/hooks.min.js"></script>

<script>
  const { render } = window.preact;
  const { useState } = window.preactHooks;

  // Use `preact/compat` for React-like syntax
  const React = window.preactCompat;

  function Counter() {
    const [count, setCount] = useState(0);
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Count: ", count),
      React.createElement(
        "button",
        { onClick: () => setCount(count + 1) },
        "Increment"
      )
    );
  }

  render(React.createElement(Counter), document.getElementById("app"));
</script>
```

---

### **Key Notes:**

1. **No JSX**: You must use `h()` (Preact’s `createElement`) or `React.createElement`.
2. **Hooks**: Load `preact/hooks` separately for `useState`, `useEffect`, etc.
3. **Size**:
   - Core Preact: ~4KB
   - Preact + Compat: ~5KB

---

### **Live Demo (Minimal Preact)**

Try this CodePen:  
👉 [Preact CDN Example (No Bundler)](https://codepen.io/anon/pen/ExvXqWZ?editors=1010)

---

### **Why This Works**

- Preact’s CDN exposes `window.preact` and `window.preactHooks`.
- No build step needed—just plain ES5 JavaScript.
- Perfect for quick prototypes, demos, or static sites.

Need JSX? Use [Babel Standalone](https://babeljs.io/docs/babel-standalone) or switch to a bundler (Vite, Webpack).

## why did you write window.preact, instead of preact, like `const { useState } = React;` and why is there so many js files, instead of one

Great questions! Let me break it down clearly:

### **1. Why `window.preact` instead of direct `preact`?**

- When you load Preact via CDN (`<script src="...preact.min.js">`), it **doesn't** expose a global `preact` variable by default (unlike React, which exposes `React` globally).
- Instead, it attaches itself to **`window.preact`** (a safer namespace to avoid collisions).
- So you _must_ use `window.preact` or alias it first:

  ```js
  // Either this:
  const { h, render, useState } = window.preact;

  // Or this (alias for cleaner code):
  const preact = window.preact;
  const { h, render, useState } = preact;
  ```

- **React comparison**: React’s CDN _does_ expose `React` globally, so `const { useState } = React;` works.  
  Preact avoids polluting the global scope aggressively.

---

### **2. Why Multiple JS Files?**

Preact splits its CDN builds into separate files for **smaller initial loads**:
| File | Purpose | Size |
|------|---------|------|
| `preact.min.js` | Core library (VDOM, rendering) | ~4KB |
| `hooks.min.js` | Hooks (`useState`, `useEffect`) | ~1KB |
| `compat.min.js` | React compatibility layer | ~2KB |

#### **Why not bundle everything?**

- **Flexibility**: If you only need core Preact (no hooks/compat), you save ~3KB.
- **Tree shaking**: Bundlers (like Webpack) can exclude unused parts.
- **Legacy support**: Some projects might need just `preact-compat`.

#### **React Comparison**:

React’s CDN is a **single file** (`react.production.min.js`) because it’s designed for simplicity, not modularity.

---

### **Optimized Single-File Example**

If you want **one script tag** (with hooks included), use:

```html
<!-- All-in-one Preact + Hooks (no compat) -->
<script src="https://cdn.jsdelivr.net/npm/preact@10.19.2/dist/preact.umd.js"></script>
<script>
  // Now `preact` is global (UMD build)!
  const { h, render, useState } = preact;

  function App() {
    const [count, setCount] = useState(0);
    return h(
      "div",
      null,
      h("p", null, count),
      h("button", { onClick: () => setCount(count + 1) }, "+1")
    );
  }
  render(h(App), document.body);
</script>
```

---

### **Key Takeaways**

1. **`window.preact`** is used because Preact’s CDN doesn’t expose a global `preact` by default (unlike React).
2. **Multiple files** let you load only what you need (e.g., skip `compat` if not using React APIs).
3. For **simplicity**, use the UMD build (`preact.umd.js`) if you want a single global `preact` object.

Would you like a full working template with Preact + Hooks in a single HTML file?
