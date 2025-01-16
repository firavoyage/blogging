## roadmap

- complete todos for basic features
- svelte examples as unit tests
- chakra ui as a real world design system
- material design 3 for elegance
- google reader (google books classic) for retro
- sr component library for fun

## issues

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

## versions

> the date after the version number is its release date (utc+8)

> version 0.xx: the framework being written, no static api

### 0.29

- splitted the source and changelog
  - `docs` `important`
  - before: changelog is comment after the code
  - after: changelog is a separated markdown file
- removed ugly abstraction especially those only used once after definition
  - `refactor`
  - removed the `use` function
  - refactored the `include` function
    - before: `const {slice} = include(Array)`
      - the `include` fn returns a proxy of constructor's prototype.
    - after: `const {slice} = include("slice")`
      - returns `fn(obj,...args){obj["slice"](...args)}`
  - renamed `include` to `use`

### 0.28 20250116

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

### 0.27 20241212

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

### 0.26 20241210

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

### 0.25

- private fn move to lib
  - private pure functions like has init are moved to voyage.lib
  - voyage includes public functions

### 0.24

- label updater with multi factors
  - {label:calc(fn,...[factor states])}
  - or calc(fn,[factor states]) -> a reducer like useMemo in react
  - return obj {calculator:fn,factors:[...arr]}
  - updateLabelCalc(node,label,calculator){...}
  - map factors bind(updLabelCalc,factor)

### 0.23

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
