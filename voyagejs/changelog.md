# roadmap

- complete todos for basic features
- svelte examples as unit tests
- chakra ui as a real world design system
- material design 3
- google reader (google books classic)
- sr hi hg component library

# issues

- single responsibility principle
  - remove excessive fn poly
  - split fn into smaller fn
- learn css in js methods
  - learn from tailwind sass less stylus
  - ask mistral css in js methods to define events and parent style in js
  - which inline style couldnt support
- add styling macro
  - `@style` macro
  - class-like styling `@style:"opacity-low h2"`
  - syntax: `style style-param style-p1-p2-p3`
  - styling with event `@style:"hover:opacity-high"`
  - syntax: `event:styles`
  - styling as parent `@style:"article{a{d e} b c} block{a c e} .xyz{}"`
  - syntax: `selector{styles}`
  - work with class and css in js
  - `@theme` macro
  - `@theme:"myTheme"`
  - apply theme to its children
- define style
  - defineStyle({"del":"opacity-low hover:opacity-medium"},"paragraph")
  - del is a css selector, opacity-low is macro, theme namespace is optional
  - defineMacro({"opacity-low":{"opacity":"0.5"}},"myTheme")
  - key is macro and value is css attr and value
  - defineMacro({"opacity":function opacity(p){...}},"myTheme")
  - opacity-1-2 -> opacity(1,2)
- theme namespace macro
  - div `@theme="myTheme"`
  - rerender all children with `@style` and set them to myTheme
- define more macros
  - learn from jquery react alpine mithril svelte
  - `@if` `@show`
  - macro(node,state) | macro(node,content)
- convert html dialects to voyage element
  - ask mistral pug alternatives
  - translate(words,lang) -> element
  - from html pug etc.
- better readabilty
  - rp all cid sid with state and dc {cid sid} = state
  - rp some else with else if
  - single rep principle: split long fn
  - fn create is too long. split into shorter named fn.
  - dc for fn should be place on top {fn1,fn2}=voyage
  - dc for data should be placed where it's needed
- dom methods abstract
  - steal from jquery
  - learn from common use case
- xhr
  - fetch in fp without promise
- route
  - path and page component
  - custom decision function

# stone

> the date after the version number is its release date (utc+8)

> version 0.xx: the framework being written, no static api

## 0.23

- better and safer state
  - in fn sync
  - instead of state=obj(initial) state={}
  - state.v for the value
  - state for the state obj carrying cid sid
- label updater
  - in fn createNode
  - {label:state} -> bind single state to label
  - updateLabel(node,label,state){...}
  - bind(updateLabel,state)
- revise fn macros.model
  - add node.value=state.v
  - no need to write {value:state,"@model":state}
  - write {"@model":state} instead
- label updater example
  - examples[counterLabel]
  - label:state will only bind state change to label
  - it wont listen label.content change to update state

## 0.24

- label updater with multi factors
  - {label:calc(fn,...[factor states])}
  - or calc(fn,[factor states]) -> a reducer like useMemo in react
  - return obj {calculator:fn,factors:[...arr]}
  - updateLabelCalc(node,label,calculator){...}
  - map factors bind(updLabelCalc,factor)

## 0.25

- private fn move to lib
  - private pure functions like has init are moved to voyage.lib
  - voyage includes public functions

## 0.26 20241210

- separate objects and arrays
  - from info
  - to info components and selections
  - states stay unchanged
  - because states["global"] acts the same as states[cid]
- remove voyage.reactive
  - seem awkward and redundant. remove all ref.
  - tradeoff of readability. yet badly implemented.
  - rewrite this when needed in the future.
- extract logic
  - fn get reactive state
  - instead of redundant use sync
- change reactive to memo
  - voyage.memo
  - some calculation results of pure functions
  - fn memorize
  - get pre calc result or calc
- seek fn
  - on voyage.lib
  - seek(obj,...path)
  - success -> [item]
  - failed -> false
- set fn
  - on voyage.lib
  - void
  - set(value,obj,...path)
- single element array
  - typedef
- rename some words
  - on obj define prop
  - from "agent" to "handler"
- fn include
  - to implement functional programming
  - on voyage.lib
  - {slice} = include(Array)
  - slice([],...)
  - instead of [].slice(...)

## 0.27 20241212

- change typedef naming
  - from various naming methods to
  - AaBbCc
- change seek behavior
  - return SeekResult
  - {result:...}
  - precalculation.result
- add examples to lib init
  - case when init has no effect
- change get state behavior
  - from getReactiveState
  - to getState(cid,sid) and getStates(cid)
- revise fn get
  - from memo.getReactiveState ...
  - to memorize(getStates,cid)

## 0.28 20250116

- add Key type
  - object.key
  - all literals except object(and fn)
  - undef and null not included
- changed keep global behavior
  - from states[][]=value to init states ... ... value
  - removed states.global
  - which provides better terser support
- changed variable naming
  - from reactiveState
  - to state
- typedef component array
  - [componentid:number]
- add jsdoc comments
  - at param {} name
  - at return {} name
  - function poly
  - separate public and private function
  - clearer method name
  - less typing
- remove redundant code
  - voyage.component exists twice
  - the latter will take over the former

## 0.29

- splitted the source and changelog
  - `docs` `important`
  - before: changelog is comment after the code
  - after: changelog is a separated markdown file
- removed ugly abstraction especially those only used once after definition
  - `refactor`
  - removed the "use" function
  - refactored the "include" function
    - before: "const {slice} = include(Array)"
      - the "include" fn returns a proxy of constructor's prototype.
    - after: "const {slice} = include("slice")"
      - slice(arr,...args) // arr.slice(...args)
  - renamed "include" "use"

## 0.30

- revised some words
  - `typo`
  - before: "the current version released on (date) has been being written since 20250117 (utc+8)" "@since 20240806 when voyagejs was found"
  - after: "the current version released on (date) has been in development since 20250117 (utc+8)" "@since 0.1 initiated on 20240806"
- revised some jsdoc comment
  - `docs`
  - including the example of "voyage.lib.use" fn
    - the former one is using deprecated approach
  - and others (made them clearer)
- removed voyage.lib.symbol()
  - `refactor`
  - defined but never used in current version
- (wip) remove memorize fn and its dependencies
  - `refactor`
  - see `ref1`
- (wip) wrote styling feature like tailwind
  - `feature`
  - todo: ask mistral for css in js methods and css events & test performance
  - "defineStyle(name style theme)" fn
    - options {name:"h1",style:"font-size:...;" , theme:"default"}
    - options {name:"h",style(num){return "font-size:..."}}
  - "defineStyle({name:styles}, theme)" fn (another case)
    - name: "button"
    - style: "opacity-1 hover:abc foo-123 bar-456"
    - theme: "default"
  - "useTheme(theme)" fn
    - change global state theme
  - in "create()" fn
    - @style:"h1 h-2 font-red-green great-123 foo"
    - bind global state theme
    - if h1 is defined in current theme, use that
    - if h-2 is defined, calc that, eg style(2)
    - if great-123 is not defined, add style "great:123;"
    - if foo is not defined, ignore that
  - in "create()" fn (another case)
    - @style: "button"
    - calc until it couldnt be calc
    - bind global state theme

# river

## 20250118

21:13

`ref1`

asked mistral le chat.

> eg, i have a number(num) component, which is very simple. and i place number(1), number(2), number(1) in dom. will react call the component three times or twice?

In React, if you render the same component with the same props multiple times, React will call the component function (or class) for each instance, even if the props are the same. This means that in your example, the `Number` component will be called three times, once for each instance: `Number(1)`, `Number(2)`, and `Number(1)`.

Here's a simple example to illustrate this:

```jsx
import React from "react";

const Number = ({ num }) => {
  console.log(`Rendering Number with prop: ${num}`);
  return <div>{num}</div>;
};

const App = () => {
  return (
    <div>
      <Number num={1} />
      <Number num={2} />
      <Number num={1} />
    </div>
  );
};

export default App;
```

In this example, you will see the following output in the console:

```
Rendering Number with prop: 1
Rendering Number with prop: 2
Rendering Number with prop: 1
```

This shows that the `Number` component is called three times, once for each instance, even though `Number(1)` is rendered twice with the same prop.

### Optimizing with `React.memo`

If you want to optimize this and avoid re-rendering the component when the props haven't changed, you can use `React.memo`:

```jsx
import React from "react";

const Number = React.memo(({ num }) => {
  console.log(`Rendering Number with prop: ${num}`);
  return <div>{num}</div>;
});

const App = () => {
  return (
    <div>
      <Number num={1} />
      <Number num={2} />
      <Number num={1} />
    </div>
  );
};

export default App;
```

With `React.memo`, the component will only re-render if the props change. However, in this specific case, since the components are rendered initially and not re-rendered later, you will still see the component function called three times initially. `React.memo` is more useful for preventing re-renders on subsequent updates rather than initial renders.

### Summary

- By default, React will call the component function for each instance, even if the props are the same.
- `React.memo` can be used to optimize and prevent re-renders on subsequent updates when the props haven't changed, but it won't affect the initial render count.

> why still three times even with react.memo? i mean the first one and the third one have the same prop

The behavior you're observing is due to how React handles the initial rendering of components. Even with `React.memo`, each instance of the component will be rendered initially because React needs to create the DOM elements and mount them. `React.memo` is primarily useful for preventing unnecessary re-renders during updates, not during the initial render.

Here's a more detailed explanation:

1. **Initial Render**: During the initial render, React needs to create the DOM elements for each instance of the component. This means that even if the props are the same, React will call the component function for each instance to generate the initial DOM.

2. **Subsequent Updates**: `React.memo` is effective during subsequent updates. If the props of a memoized component haven't changed, React will reuse the previous rendered output instead of calling the component function again.

Let's illustrate this with an example:

```jsx
import React, { useState } from "react";

const Number = React.memo(({ num }) => {
  console.log(`Rendering Number with prop: ${num}`);
  return <div>{num}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Number num={1} />
      <Number num={2} />
      <Number num={1} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
```

### Initial Render

When the `App` component is first rendered, you will see the following output in the console:

```
Rendering Number with prop: 1
Rendering Number with prop: 2
Rendering Number with prop: 1
```

This is because React needs to create the DOM elements for each instance of the `Number` component.

### Subsequent Updates

If you click the "Increment" button, the `App` component will re-render, but the `Number` components will not re-render because their props haven't changed. You won't see any additional console logs for the `Number` components.

### Why `React.memo` Doesn't Affect Initial Render

`React.memo` works by performing a shallow comparison of the props. If the props haven't changed, React will reuse the previous rendered output. However, during the initial render, there is no previous rendered output to reuse, so React must call the component function for each instance to generate the initial DOM.

### Summary

- During the initial render, React will call the component function for each instance, even if the props are the same.
- `React.memo` is effective during subsequent updates, preventing re-renders when the props haven't changed.
- The initial render behavior is necessary for React to create the DOM elements and mount them.
