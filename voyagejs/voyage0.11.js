//20241030
//voyagejs 0.11

let voyage = {
  storage: {},
  states: {},
  components: {},
  counter: {
    componentid: 0,
    current: 0,
  },
  is(a, b) {
    return a === b;
  },
  isnt(a, b) {
    return a !== b;
  },
  has(obj, key) {
    const { isnt } = voyage;
    if (isnt(typeof obj, "object")) {
      return false;
    }
    return obj.hasOwnProperty(key);
  },
  lacks(obj, key) {
    const { isnt } = voyage;
    if (isnt(typeof obj, "object")) {
      return false;
    }
    return !obj.hasOwnProperty(key);
  },
  generate() {
    let { counter } = voyage;
    counter.componentid++;
    return counter.componentid;
  },
  select(componentid) {
    const node = document.querySelector(`[componentid="${componentid}"]`);
    return node;
  },
  callComponent(component, componentid) {
    const { lacks } = voyage;
    let { states, counter } = voyage;
    if (lacks(states, componentid)) {
      states[componentid] = [];
    }
    counter.current = componentid;
    states[componentid].order = 0;
    const node = component();
    node.setAttribute("componentid", componentid);
    return node;
  },
  createComponent(component) {
    let { states } = voyage;
    const { lacks } = voyage;
    const { generate } = voyage;
    const { callComponent, updateComponent } = voyage;
    const componentid = generate();
    const node = callComponent(component, componentid);
    if (lacks(states[componentid], "update")) {
      states[componentid].update = function () {
        updateComponent(component, componentid);
      };
    }
    return node;
  },
  createNode(element) {
    const { is } = voyage;
    element = element || [];
    let [tag, labels, children] = element;
    tag = tag || "div";
    labels = labels || {};
    children = children || [];
    let node = document.createElement(tag);
    for (const label in labels) {
      if (is(label[0], "@")) {
        let event = label.slice(1);
        node.addEventListener(event, labels[label]);
      } else {
        node.setAttribute(label, labels[label]);
      }
    }
    if (is(typeof children, "string")) {
      node.innerText = children;
    } else {
      for (const child of children) {
        if (child instanceof Array) {
          const { createNode } = voyage;
          node.appendChild(createNode(child));
        } else if (child instanceof Node) {
          node.appendChild(child);
        }
      }
    }
    return node;
  },
  create(...options) {
    const { createNode } = voyage;
    if (options[0] instanceof Array) {
      return createNode(options[0]);
    } else {
      return createNode(options);
    }
  },
  storeState(initial) {
    let { states } = voyage;
    const { isnt, lacks } = voyage;
    const { current } = voyage.counter;
    const { order: here } = states[current];
    const { defineProperty: watch } = Object;
    if (lacks(states[current], here)) {
      states[current][here] = initial;
    }
    let result = Object(states[current][here]);
    const eye = {
      get() {
        return states[current][here];
      },
      set(value) {
        if (isnt(states[current][here], value)) {
          states[current][here] = value;
          states[current].update();
        }
      },
    };
    const aliases = ["v", "value"];
    for (let key of aliases) {
      watch(result, key, eye);
    }
    states[current].order++;
    return result;
  },
  storeGlobal(key, value) {},
  store(options) {
    const { storeState, storeGlobal } = voyage;
    let { storage, states } = voyage;
    if (options instanceof Array) {
      //states
      let result = [];
      for (const option of options) {
        result.push(storeState(option));
      }
      return result;
    } else if (options instanceof Object) {
      //global
      return storeGlobal(options);
    } else {
      //state
      return storeState(options);
    }
  },
  updateComponent(component, componentid) {
    const { select } = voyage;
    const { callComponent } = voyage;
    const node = select(componentid);
    const newComponent = callComponent(component, componentid);
    node.parentNode.replaceChild(newComponent, node);
  },
  define() {},
  run(...options) {
    const { createComponent } = voyage;
    let { component, parent } = options[0];
    if (options[1]) {
      [component, parent] = options;
    }
    const node = createComponent(component);
    parent.appendChild(node);
  },
  remove() {},
};

let examples = {
  counter() {
    const { store, create } = voyage;
    let count = store(0);
    const dec = function () {
      count.v--;
    };
    const inc = function () {
      count.v++;
    };
    const change = function (e) {
      const value = e.target.value;
      if (isNaN(value)) {
        count.v = 0;
      } else {
        count.v = value;
      }
    };
    let combined = create("", "", [
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@change": change }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
  },
};

voyage.run(examples.counter, document.body);
voyage.run(examples.counter, document.body);

// todo
// 
// remove
// - need to select componentid -> failed -> remove componentid
// ref decorator for state
// - ref() (state without default change function)
// macro
// - built in macro ("@model")
// - define macro (macro(node,state obj))
// create component
// - create(fn,[arg],children)
// component public states with key
// - state = store({key:value})
// - [state,state2] = store([{key:value},{key2:value2}])
// - get(componentid,state key)
// - state.id (componentid & state key)
// select while create
// - attribute $0 $1 $2
// - input = select("$0")
// - [input] = select(["$0"])
// - input.focus()
// - component = select("$xyz")
// - component.state key (proxy or obj def prop)
// - nav = select(parent,location [0,1,0,2])
// custom efficient update function
// - state.update (default updateComponent)
// - state bind list (everywhere concerned with)
// - bind list item [position (node tree array),reducer]
// custom state management
// - unique state id (component id + state order | state key)
// - get componentid (node)
// - get component state (key) from componentid public storage
// dom method macros
// - steal from jquery
// - learn from common use case
// unit test 
// - mulitple states in one component
// - implement more svelte examples
// revise
// - less typing
// - clear variable name
// - function poly
// analyzer
// - precompiler like svelte
// - generate while create (by state get observer)
// - if get elsewhere (maybe conditional rendering) then dont optimize
// - dom update diff (update virtual dom everytime)
// examples
// - chakra ui in voyage
// - material ui in voyage
// theme
// - mihoyo sr
// - google books classic'
// - ...
