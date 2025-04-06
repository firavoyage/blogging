//20241103
//voyagejs 0.12

let voyage = {
  storage: {},
  states: {},
  updaters: {},
  macros: {
    model({ node, state, componentid, stateid }) {
      let { updaters } = voyage;
      const { init } = voyage;
      const change = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      node.addEventListener("change", change);
      init(updaters, componentid, {});
      init(updaters[componentid], stateid, []);
      const updater = function () {
        node.value = state.v;
      };
      updaters[componentid][state].push(updater);
    },
  },
  components: {},
  counter: {
    component: 0,
    componentid: 0,
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
    const { has } = voyage;
    return !has(obj, key);
  },
  init(obj, key, initial) {
    const { lacks } = voyage;
    if (lacks(obj, key)) {
      obj[key] = initial;
    }
  },
  generate() {
    let { counter } = voyage;
    counter.component++;
    return counter.component;
  },
  select(componentid) {
    const node = document.querySelector(`[componentid="${componentid}"]`);
    return node;
  },
  callComponent(component, componentid) {
    const { init } = voyage;
    let { states, counter } = voyage;
    init(states, component, []);
    counter.componentid = componentid;
    states[componentid].stateid = 0;
    const node = component();
    node.setAttribute("componentid", componentid);
    return node;
  },
  createComponent(component) {
    let { states } = voyage;
    const { generate } = voyage;
    const { callComponent, update } = voyage;
    const componentid = generate();
    states[componentid] = {};
    states[componentid].component = component;
    const node = callComponent(component, componentid);
    return node;
  },
  createNode(element) {
    const { is, has } = voyage;
    const { macros } = voyage;
    element = element || [];
    let [tag, labels, children] = element;
    tag = tag || "div";
    labels = labels || {};
    children = children || [];
    let node = document.createElement(tag);
    for (const label in labels) {
      const data = labels[label];
      if (is(label[0], "@")) {
        const event = label.slice(1);
        if (has(macros, event)) {
          const { componentid, stateid } = data;
          macros[event]({ node, componentid, stateid, state: data });
        } else {
          node.addEventListener(event, data);
        }
      } else {
        node.setAttribute(label, data);
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
  createState(initial, watcher) {
    let { states } = voyage;
    const { isnt, init, update } = voyage;
    const { componentid } = voyage.counter;
    const { stateid } = states[componentid];
    const { defineProperty: watch } = Object;
    init(states[componentid], stateid, initial);
    let result = Object(states[componentid][stateid]);
    result.componentid = componentid;
    result.stateid = stateid;
    const aliases = ["v", "value"];
    for (let key of aliases) {
      watch(result, key, watcher);
    }
    states[componentid].stateid++;
    return result;
  },
  storeState(initial) {
    let { states } = voyage;
    const { isnt } = voyage;
    const { update, createState } = voyage;
    const { componentid } = voyage.counter;
    const { stateid } = states[componentid];
    const watcher = {
      get() {
        return states[componentid][stateid];
      },
      set(value) {
        if (isnt(states[componentid][stateid], value)) {
          states[componentid][stateid] = value;
          update(componentid);
        }
      },
    };
    const result = createState(initial, watcher);
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
  refState(initial) {
    let { states } = voyage;
    const { isnt } = voyage;
    const { updateState, createState } = voyage;
    const { componentid } = voyage.counter;
    const { stateid } = states[componentid];
    const watcher = {
      get() {
        return states[componentid][stateid];
      },
      set(value) {
        if (isnt(states[componentid][stateid], value)) {
          states[componentid][stateid] = value;
          updateState(componentid, stateid);
        }
      },
    };
    const result = createState(initial, watcher);
    return result;
  },
  refGlobal(key, value) {},
  ref(options) {
    const { refState, refGlobal } = voyage;
    let { storage, states } = voyage;
    if (options instanceof Array) {
      //states
      let result = [];
      for (const option of options) {
        result.push(refState(option));
      }
      return result;
    } else if (options instanceof Object) {
      //global
      return refGlobal(options);
    } else {
      //state
      return refState(options);
    }
  },
  update(componentid) {
    const { states } = voyage;
    const { select } = voyage;
    const { callComponent } = voyage;
    const node = select(componentid);
    const { component } = states[componentid];
    const updated = callComponent(component, componentid);
    node.parentNode.replaceChild(updated, node);
  },
  updateState(componentid, state) {
    const { updaters } = voyage;
    const { has } = voyage;
    if (has(updaters, componentid)) {
      if (has(updaters[componentid], state)) {
        for (const updater of updaters[componentid][state]) {
          updater(componentid, state);
        }
      }
    }
  },
  defineMacro(macro) {
    let { macros } = voyage;
    macros[macro.name] = macro;
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
  counterMacro() {
    const { ref, create } = voyage;
    let count = ref(0);
    const dec = function () {
      count.v--;
    };
    const inc = function () {
      count.v++;
    };
    let combined = create("", "", [
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@model": count }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
  },
};

voyage.run(examples.counterMacro, document.body);
voyage.run(examples.counter, document.body);

// todo
//
// remove
// - select componentid -> failed -> remove componentid -> return false
// create poly
// - create(str tag,obj labels,arr children)
// - create(str tag,obj labels,str text)
// - create(obj labels,str text)
// create component
// - create(fn,[arg],children)
// macro
// - more built in macro ("@model")
// custom efficient update function
// - state.update (default update)
// - state bind list (everywstateid concerned with)
// - bind list item [node,attribute,reducer]
// component public states with key
// - state = store({key:value})
// - [state,state2] = store([{key:value},{key2:value2}])
// - get(componentid,state key)
// - state.id (componentid & state key)
// - state = storeGlobal({key:value})
// select while create
// - attribute $0 $1 $2
// - input = select("$0")
// - [input] = select(["$0"])
// - input.focus()
// - component = select("$xyz")
// - component.state key (proxy or obj def prop)
// - nav = select(parent,location [0,1,0,2])
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
// - if get elsewstateid (maybe conditional rendering) then dont optimize
// - dom update diff (update virtual dom everytime)
// examples
// - chakra ui in voyage
// - material ui in voyage
// theme
// - mihoyo sr
// - google books classic'
// - chakra
// xhr
// - from jquery
// - sync and async
// route
// - simple
// - custom reducer
