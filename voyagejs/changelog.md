# voyagejs changelog

> ui is a function of states `ui = f(states)`

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

## 0.29 20250117

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

## 0.30 20250201

- revised some words
  - `wording`
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
- removed voyage.memorize fn and its dependencies
  - `refactor`
  - see "ref1"
  - removed voyage.lib.seek & voyage.lib.set fn.
  - removed voyage.memo
- rewrote voyage.lib.check fn
  - `fix`
  - make the fn simpler
  - to make the jsdoc comment clearer
- changed voyage.lib.has behavior
  - `reduce`
  - removed its ability to check if an array has certain index
- reduced voyage.lib.lacks behavior
  - `reduce`
  - no longer depending on voyage.lib.has
- removed redundant abstraction
  - `refactor`
  - like some lib fn only appearing once
  - including voyage.lib.reset and voyage.lib.count
- changed voyage.selections data structure
  - `refactor`
  - no longer keep componentid in selections
  - removed voyage.remove fn (never called)
  - revised voyage.select fn
  - removed voyage.get (no reference or comment)
  - removed voyage.lookup (no reference or comment)
- split compile and create fn
  - `refactor`
  - write compile fn for json
    - write a sub fn: recursion(...arr)
    - iterate the arr,
    - if it's the first str then consider it type otherwise contents
    - if it's an obj, consider it labels
    - if it's an arr, init contents [] and push recursion(it).
    - if no str appears, consider type "div"
    - just use recursion. an element shouldnt be that large.
    - returns element {str type,obj labels,arr|str contents}
    - (upd: type can be function, as component)
  - rewrite create fn
    - write a sub fn recursion(element)
    - create a node of element.type
    - give it componentid.
    - if there is macros on labels, bind them to componentid.
    - if the contents is str, then set innerText
    - otherwise iterate contents, recursion and appendChild.
    - just use recursion. an element shouldnt be that large.
    - returns node
- rewrite c fn
  - `alias`
  - create fn includes compile fn before, now doesn't
  - so let c(...) equal to create(compile(...))
  - to make the code work

## 0.31 20250316

- docs: add jsdoc comments to existing code
- refactor: some unused functions
- refactor: merge voyage.info into voyage.counter
- style: change syntax of private functions
  - from `const { a } = { a() {} };`
  - to `const a = function () {};`
  - the former one omits `function` at the cost of redundant indentation and the repetition of `a`
- refactor: merge voyage.states into voyage.components
  - from `voyage.states[componentid]` to `voyage.components[componentid].states`
  - more semantic now
- refactor: voyage.ref and voyage.store
  - fn(...options) is awkward, changed to fn(initial, stateid)
  - both param are optional
- refactor: merge voyage.getState into voyage.ref
- style: rename some component life cycle fn
  - component: create, show, update.
  - state: ref (create state), set (change state), apply (apply new value).
  - inspired by react (mount, update, unmount)
- refactor: voyage.lib.use
  - changed its implementation to proxy
  - now it doesnt rely on method name, and can return all methods at once
- feat: change event listener of @model macro to "input"
  - not "change"
  - inspired by vue model
- refactor: change inner text to text node
  - a node can contain both text nodes and other nodes

## 0.32 20250321

- feat: replace innertext with textcontent
  - faster and preserve formatting
- refactor: remove newvalue param on `apply`
  - and oldvalue is optional now
- refactor: remove `keep` and `"global"` componentid
  - no reference, and number componentid works well
- refactor: merge updaters into components
  - `components[cid].states[sid].updaters`
- refactor: `lib.init`
  - previous one is too complex logic
  - replace voyage.lib.lacks with !voyage.lib.has
- refactor: remove `store`
  - use `a = ref(...); bind(a, update())` instead
  - store and ref are `useState` and `useRef` in react
  - now store feels redundant
  - inspired by svelte vue
- style: rename `call` to `render`
- fix: `class` label doesnt take effect
  - replace with `className`

## 0.33 (not released)

- (wip)
- chore: read svelte examples
  - learn from it
  - define stable apis to release version 1.0
- chore: read tailwindcss docs
  - learn from it
  - define theming features
- feat(state): `aftercreate` and delay state changes on the fly
  - state changes wont apply when the component is in `create` status. these stateids will be put into `components[cid].afterCreate`. after create the component, apply all changes and clear todo.
  - eg. a component store internet resources in a state, show loading until data is fetched.
  - inspired by react `useEffect`
- feat(theming): `defineTheme()`, `useTheme()`, `@style` macro.
  - `defineTheme(obj theme)`
    - theme includes obj, str, fn `{str|fn|[theme]:{str|fn}}`
    - obj `"c-1": {dark:"black", light: "white"}`
    - str `{bg: "background", bar: "perspective: 123"}`
    - fn `{w(v){return 100*v}}`
  - `useTheme(str theme)`
    - change global state theme
  - `@style`
    - {@style: "bg-c-1 br-2 color-black font-weight-w-1 foo hover:bar"}
    - split by " " into array of styles, for each style, split by "-"
    - bg is defined as string, converted to `"background"`
    - c is defined, and -1 is valid, converted by current theme
    - br and 2 are not defined, converted to `"br:2,"`
    - font and weight are not defined, stay still
    - w is defined, pass 1 to it, get 100, so `font-weight: 100`
    - foo is not defined, even without value, not taking effect
    - bar is defined using peusdo class
    - all these style will generate a murmurhash as classname in style element
    - the style element has state "theme" and "map" (hash: "br-2 ...")
  - inspired by tailwindcss, emotion, unocss, tachyons
- feat: `computed`, a special state
  - `voyage.computed(computation, ...factors)`
  - return a `computedState`
  - prop compute, fn(states)
  - prop factors, an array of states
  - prop value
  - get: value
  - set: no effect
  - binds all its factors to `recompute(){value=compute()}`
  - inspired by vue computed, immer, svelte derived
- feat: `bind` supports `remover` fn and multiple states
  - replace the param order to `bind(updater, ...states)`, more semantic ("bind a to b")
  - bind for each state
  - change the logic of calling updaters:
    - if the `isnt(prototype(updater).removerid, 0)`, call `component.removers[rid]`, then remove `component.removers[rid]` and reset removerid to 0
    - if the updater returns a fn, it will be put on `component.removers[component.removerid++]` and put removerid to its `prototype`
    - conclusion: remover will run when updater rerun or component is removed
  - inspired by svelte effect
- feat: `remove(cid)`, `family` and `component.children`
  - call all `voyage.components[cid].removers`
  - remove all children `component.children`
  - delete `voyage.components[cid]`
  - define `voyage.family`, when creating a component push it, when created pop it to its parent `component.children`
- refactor: use `prototype` to define reactive states info
  - using `obj.getprototypeof` and `set...`
  - including `componentid`, `stateid`
- feat: `ref` supports deep state, and `snap` `raw`
  - objects ref doesnt need .value now, just use as normal object, it's a proxy
  - `snap` can turn the proxy into a normal object (by cloning)
  - `raw` is for large arrays, just reference the object and add state info to its prototype. need to apply it specially for any changes.
  - inspired by svelte state.raw state.snapshot
- refactor: `$` label
  - remove voyage selections
  - $: state, define the element as the state value
  - the state should be raw({}), and Object.assign will be used.
  - inspired by svelte bind
- feat: `aftershow` and `effect(effect, ...states)`
  - `bind(effect,...states)` and put effect to `component.afterShow`
  - inspired by svelte effect
- feat: `load` a component `library`
  - no need to import or deconstruct child components
  - just load them, and use them as string
  - both functions and strings found in `library` are consider components
- feat: `html`, a tagged fn to copmuted state
  - `html(...state)` creates a component, and bind the state to its innerhtml
  - `html` can also be use as tagged fn
- feat: `text`, a tagged fn to computed state
  - text`Clicked ${count} ${computed(()=>count === 1 ? 'time' : 'times')}`
  - similar to `html`
  - inspired by svelte example: reactive assignments
- feat: `children` prop and `@content` macro, remove `@text` `@html`
  - during `compile`,
  - for components, children will be put into `children` prop
  - for nodes, if children contain state, the whole children will be converted to a compiled state of array, with these states as factors, put on `@content`
  - `@html` and `@text` are useless, being removed
- feat: `replace` fn diff with `key`
  - for each old, create key map `{key: {node, index}}`
  - for each new, if new one has key 
    - if key exists, move old one and remove matched key
    - otherwise insert new one
    - remove leftover old nodes on key map
  - otherwise assign to old index
    - type match: labels (shallow), content (recursive), add to used list
    - unused (type not match or redundant nodes at the end): remove
  - inspired by vue, svelte each
- feat(diff): preserve focus in input element
  - no need to update dom when state changes
  - diff between the new component and real dom before `replace`
  - only affects `store`, not `ref`
  - inspired by svelte
- feat(key): list of counter that can be sorted
  - list component ref array counts and boolean isAscended
  - counter component has a prop count, which is created by pointer

## 0.34 20250401

- refactor!: `ui = f(states)` and test driven dev
  - props and states are the same thing, as `p`
  - make the whole api simpler and remove most legacy code
    - the more often being used, the shorter fn name
  - write unit tests (examples), inspired by
    - svelte playground
    - solidjs docs & component examples
    - react component examples
- style: remove `lib.use`
  - fp is good, but oop is ok
- style: remove `lib.is` `lib.isnt`
  - `==` is ok (no type issue)
  - `===` is used rarely, when where could be type issue
- feat: `p(props)`, properties of a component
  - assign `passedprops` to `props`
  - returns a proxy, each key in obj becomes a fn
  - create a set of subscribers
  - get (no param): get value, add current subscriber
  - set (a param, not fn): set value, call all subscribers
  - set (a param, fn): pass current value, set returned value, call ...
    - a prop can not be set to undefined, if the fn returns undefined, consider some prop inside the state has changed (ref immer "produce")
  - ref 
    - https://docs.solidjs.com/advanced-concepts/fine-grained-reactivity
    - https://docs.solidjs.com/guides/state-management
    - https://docs.solidjs.com/guides/complex-state-management
    - https://docs.solidjs.com/guides/fetching-data
- feat: `e(effect, dependencies)`
  - one param: track dependencies, and subscribe it
    - store `prevSubscriber`
    - define `subscriber` and run effect fn
    - reset to `prevSubsciber` (for nested effect)
  - two param (empty dep array): run once on mounting
  - two param (not empty dep array): run when any dep changes
  - effect can returns a cleanup fn
  - ref https://docs.solidjs.com/advanced-concepts/fine-grained-reactivity
- feat: `render(component, props)`
- feat: `run(component, selector)`
- feat: `@ref`

## 0.35 (not released)

- style: remove some indentation
  - for fn like `fn(){if(return) else(return)}` `else` is ommited
- feat: `e(effect, when)`
- feat: `h()` `h(html)` `@html`
- feat: `@value`
- feat: `m(memo, dependencies)`
  - one param: track dependencies, and subscribe it
    - store `prevSubscriber`
    - define `subscriber` and run memo fn
    - reset to `prevSubsciber` (for nested memo)
  - two param: run when any dep changes
  - stores the value `memo` returns
  - ref https://docs.solidjs.com/advanced-concepts/fine-grained-reactivity
- fix: new dependencies are tracked
  - subscribe dependencies not only in the first run
  - for both effect and memo
- feat: `show(when, template, ...otherwise)`
- feat: `insert(node, _)`
  - create text node, if node is a string
  - returns () => node.remove
- test: `show`, when the condition changes
- feat: `@component`
  - create a comment and an effect to insert the node
- feat: `each(list, template, key)`
- fix: `t` support not only props but also primitive values
- feat: `create` support `""` tag, which means document fragment
- feat: `load(library)` and nested components
- feat: macro `@ref: state`
  - assign the element to the state on creation

## 0.36

- refactor!: make voyagejs declarative and simple
  - create vdom inside render fn
  - rerun component whenever state changes
    - rerun component, update vdom
    - diff vdom and dom
- feat: macro `@style`
  - ref
    - https://tailwindcss.com/docs/styling-with-utility-classes
    - https://tachyons.io/
    - https://unocss.dev/guide/
- feat: `route`
  - ref https://docs.solidjs.com/guides/routing-and-navigation
- test: a component library
  - ref
    - https://v2.chakra-ui.com/docs/components
    - https://ui.shadcn.com/docs/components/

