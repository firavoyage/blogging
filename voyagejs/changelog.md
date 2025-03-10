# roadmap

- fix issues
- write every example on react learn
- impl svelte examples with voyagejs
- learn component system from chakra ui
- create voyagejs maia (google reader)
- create voyagejs material design 3
- create sr hi hg component library

# issues

- add more lang to compile fn
  - `extension`
  - `20250201`
  - from various lang, not just json. for instance pug.
  - compile fn can be used as tag fn.
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

## 0.31

- docs: more jsdoc comments
  - not everywhere, just the newly added ones
  - stategy: first write comments, then write code.
  - jsdoc includes: param returns examples
- (wip) wording: rename some fn names
  - inspired by component life cycle of react
  - mount, update, unmount
  - create (creating & created), show, update, remove
- (wip) refactor: change inner text to text node
  - a node can contain both text nodes and other nodes
  - everything that isnt object will be a text node
- (wip) feat: add voyage.pointer, alias p
  - usage: p("foo","bar","xyz")
  - returns a proxy with .value pointing states.foo.bar.xyz
  - get handler is simple
  - set handler updates the component
- (wip) feat: add voyage.listen
  - usage: listen(updater, stateName)
  - returns true, bind the updater to the state
  - updater(newValue, oldValue, node)
  - returns the updated node or true.
  - if true, the updater edits the dom (by prop node) directly.
- (wd) feat: make functions stoppable
  - if global state like "display method" changed from 1 to 2
  - the full page will rerender (expensive)
  - and user cancelled quickly (changing display method again, like 3)
  - the former rerender will stop, and run next rerender as method 3
- (wip) feat: add type calculator, a label can be calculator
  - an object
  - prop factors, an array of str keys of states
  - prop calculator, a fn with states inside
- (wip) feat: add voyage.lib.pattern (alias voyage.lib.p)
  - tagged fn
  - p "Counter: ${...}" 
  - usage: a string, with some states inside
  - returns a calculator
- (wip) feat: add voyage.getStatus
  - react has "usestate(init fn)"
  - in voyagejs it's simple, just get status, and do it yourself.
- (wip) refactor: change ref and store fn behavior
  - of course it can function like react, store them by order
  - but in voyagejs, each state must have a name
  - so only objects are accepted
  - fix the legacy examples
- (wip) feat: set value behavior
  - state.value wont be changed before created
  - such changes will be applied like useEffect or onMount
- (wd) example: list of counter that can be sorted
  - (two components, list and counter)
  - list has the states, counters: [{id:..., count: ...}, ...] using ref
  - order: "ascended" using store
  - give each counter a p("counters", index, "count") state, done.
  - counter also consider count as ref, binding input.value
  - when inc/dec/change, list wont rerender, counters wont rerender.
  - when sorted, list will rerender, counters will rerender.
  - (only changing position of counters is ok, but not supported by default)
  - just counters.v = sort(counters.v...), component wont update before created
  - like fetch..., state changes during creation will be delayed
- (wip) feat: write styling feature like tailwind
  - three fn. defineStyle(), defineTheme(), useTheme().
  - defineStyle(obj styles)
    - two kind of props
    - for string
      - a prop or value "bg": "background", "blue-1":"lightblue"
      - a style "c-1": "color-red", "rounded": "border-radius: 5px"
      - value with - is considered style otherwise prop or value
    - for fn
      - a value blue(){}. blue-foo-100 calls blue("foo","100")
      - a style rounded(){}. rounded-5px calls rounded("5px")
      - when it comes to "a-b-c-d" when ab are fn, eval a(b(c,d))
      - when b is not defined, eval a("b","c","d")
      - when a is not defined, consider a as the prop a:b(c,d)
      - when both not defined, raise error. (no css value has -)
    - these styles will be applied by default
  - defineTheme(options) saves a theme in voyage obj
    - if the theme is already defined, merge them
    - options {"darkTheme": {...styles}}
    - styles {"text-color":"white", "bg-color":"black"}
    - styles {"button":"rounded bg-blue-100", "button-inner":"..."}
    - options {"shiro": {...styles}}
    - styles {"text-color":"grey", "bg-color":"white"}
    - these styles will only be applied for certain global state "theme"
  - useTheme(str theme) injects a theme to document head
    - private fn compile(css)
      - param list of str selector and obj properties (type: Css)
      - returns str innerhtml of style element
    - style componentid="theme" @html=theme
    - theme is a global state
    - styles will be generated with recursion
      - e.g. text style can reference text-color style
      - no matter which one is former or latter 
      - voyagejs will make the recursion work
- (wd) docs: see readme.md
  - roadmap, but in very informal style
  - (lots of thoughts)

# river

## 20250118

21:13

`ref1`

asked mistral le chat.

> eg, i have a number(num) component, which is very simple. and i place number(1), number(2), number(1) in dom. will react call the component three times or twice?

> why still three times even with react.memo? i mean the first one and the third one have the same prop

(ans omitted)

## 20250214

(@see readme.md)
