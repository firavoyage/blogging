//20241107
//voyagejs 0.16

let voyage = {
  info: {},
  storage: {},
  states: {},
  updaters: {},
  components: {},
  macros: {
    model({ node, state }) {
      const { bind } = voyage;
      const { listen } = voyage;
      const handleChange = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      listen(node, "change", handleChange);
      const updater = function modelValue() {
        node.value = state.v;
      };
      bind(state, updater);
    },
  },
  counter: {},
  is(a, b) {
    return a === b;
  },
  isnt(a, b) {
    return a !== b;
  },
  check(a, b) {
    const { is } = voyage;
    const { checkType } = {
      checkType(a) {
        if (is(a, undefined) || is(a, null)) {
          return false;
        } else {
          return typeof a;
        }
      },
    };
    if (b) {
      if (is(checkType(b), "function")) {
        return a instanceof b;
      } else {
        return is(checkType(a), b);
      }
    } else {
      return checkType(a);
    }
  },
  each(begin, end, step) {
    const { check } = voyage;
    const { iterate } = {
      iterate(begin, end, step) {
        let index = begin;
        const iterator = {
          next() {
            if ((index - end) * step <= 0) {
              const value = index;
              index += step;
              return { value, done: false };
            } else {
              return { value: undefined, done: true };
            }
          },
          [Symbol.iterator]() {
            return iterator;
          },
        };
        return iterator;
      },
    };
    if (!check(end)) {
      end = begin;
      begin = 0;
    }
    if (!check(step)) {
      if (begin <= end) {
        step = 1;
      } else {
        step = -1;
      }
    }
    return iterate(begin, end, step);
  },
  map(things, converter) {
    const { check } = voyage;
    if (check(things, Array)) {
      let result = [];
      for (const item of things) {
        result.push(converter(item));
      }
      return result;
    } else {
      let result = {};
      for (const key in things) {
        result[key] = converter(key, things[key]);
      }
      return result;
    }
  },
  use(fn, ...param) {
    const { name } = fn;

    return {
      [name]() {
        return fn(...param);
      },
    }[name];
  },
  sync(obj, key, listener) {
    const { defineProperty } = Object;
    const { isnt } = voyage;

    let reactive = Object(obj[key]);
    const agent = {
      get() {
        return obj[key];
      },
      set(value) {
        const oldValue = obj[key];
        if (isnt(oldValue, value)) {
          obj[key] = value;
          listener(value, oldValue);
        }
      },
    };
    defineProperty(reactive, "v", agent);
    return reactive;
  },
  has(obj, key) {
    const { check } = voyage;
    if (check(obj, Array) && check(key, "number")) {
      return key < obj.length;
    } else if (check(obj, "object")) {
      return obj.hasOwnProperty(key);
    } else {
      return false;
    }
  },
  lacks(obj, key) {
    const { has } = voyage;
    return !has(obj, key);
  },
  init(obj, ...path) {
    const { is, check } = voyage;
    const { initKey } = {
      initKey(obj, key, initial) {
        const { lacks } = voyage;
        if (lacks(obj, key)) {
          obj[key] = initial;
        }
      },
    };
    let current = obj;
    for (const key of path) {
      if (check(key, Array)) {
        if (is(key.length, 1)) {
          initKey(current, key[0], []);
        } else {
          initKey(current, key[0], key[1]);
        }
      } else if (check(key, "object")) {
        const { keys, values } = Object;
        initKey(current, keys(key)[0], values(key)[0]);
      } else {
        initKey(current, key, {});
      }
      current = current[key];
    }
    return obj;
  },
  reset(counter, key) {
    counter[key] = 0;
  },
  count(counter, key) {
    const { init } = voyage;
    init(counter, [key, 0]);
    const current = counter[key];
    counter[key]++;
    return current;
  },
  remove(componentid) {
    let { info, states, updaters } = voyage;
    info[componentid] = false;
    states[componentid] = false;
    updaters[componentid] = false;
  },
  select(componentid) {
    const { remove } = voyage;
    const node = document.querySelector(`[componentid="${componentid}"]`);
    if (node) {
      return node;
    } else {
      remove(componentid);
      return false;
    }
  },
  replace(node, updatedNode) {
    node.parentNode.replaceChild(updatedNode, node);
  },
  listen(node, event, handler) {
    node.addEventListener(event, handler);
  },
  bind(...options) {
    const { check, has, init } = voyage;
    let { info, updaters } = voyage;

    const { bindUpdater } = {
      bindUpdater(first, second, updater) {
        init(updaters, first, [second]);
        init(info, "updaters", first, second);

        const { name } = updater;
        if (name) {
          if (has(info.updaters[first][second], name)) {
            return false;
          } else {
            info.updaters[first][second][name] = true;
            updaters[first][second].push(updater);
          }
        } else {
          updaters[first][second].push(updater);
        }
      },
    };
    if (check(options[0], "string")) {
      const [key, updater] = options;
      bindUpdater("storage", key, updater);
    } else if (check(options[0], "number")) {
      const [componentid, stateid, updater] = options;
      bindUpdater(componentid, stateid, updater);
    } else {
      if (has(options[0], "key")) {
        const [globalState, updater] = options;
        const { key } = globalState;
        bindUpdater("storage", key, updater);
      } else {
        const [state, updater] = options;
        const { componentid, stateid } = state;
        bindUpdater(componentid, stateid, updater);
      }
    }
  },
  call(componentid) {
    const { assign: put } = Object;
    const { reset } = voyage;
    let { info } = voyage;

    put(info, { componentid });
    reset(info[componentid], "stateid");

    const { component, properties } = info[componentid];
    const node = component(properties);
    node.setAttribute("componentid", componentid);

    return node;
  },
  createComponent(component, properties) {
    const { init } = voyage;
    const { count, counter } = voyage;
    const { call } = voyage;
    let { info } = voyage;
    const componentid = count(counter, "component");
    init(info, [componentid, { component, properties }]);
    return call(componentid);
  },
  createNode(element) {
    const { is, has, check } = voyage;
    const { listen } = voyage;
    const { create } = voyage;
    const { macros } = voyage;

    let { tag, labels, children } = element;

    let node = document.createElement(tag);

    for (const label in labels) {
      const data = labels[label];
      if (is(label[0], "@")) {
        const macro = label.slice(1);
        if (has(macros, macro)) {
          const state = data;
          macros[macro]({ node, state });
        } else {
          const event = macro;
          const handler = data;
          listen(node, event, handler);
        }
      } else {
        node.setAttribute(label, data);
      }
    }

    if (check(children, "string")) {
      node.innerText = children;
    } else {
      for (const child of children) {
        if (check(child, Array)) {
          node.appendChild(create(...child));
        } else {
          node.appendChild(child);
        }
      }
    }

    return node;
  },
  create(...options) {
    const { is, each, has, check, init } = voyage;
    const { reset, count, counter } = voyage;
    const { createComponent, createNode } = voyage;
    const { assign: put } = Object;

    if (check(options[0], "function")) {
      const [component, properties, children] = options;
      if (children) {
        put(properties, { children });
      }
      return createComponent(component, properties);
    } else {
      let element = {};

      reset(counter, "string");
      reset(counter, "array");
      for (const option of options) {
        if (check(option, "string")) {
          if (is(counter.string, 0)) {
            element.tag = option;
            count(counter, "string");
          } else {
            element.children = option;
          }
        } else if (check(option, Array)) {
          if (is(counter.array, 0)) {
            element.children = option;
            count(counter, "array");
          } else {
            element.children = options;
            break;
          }
        } else {
          element.labels = option;
        }
      }

      init(element, { tag: "div" });
      init(element, "labels");
      init(element, ["children"]);

      let isChildrenChild = false;
      for (const i of each(2)) {
        if (has(element.children, i)) {
          if (!check(element.children[i], Array)) {
            isChildrenChild = true;
          }
        }
      }
      if (isChildrenChild) {
        element.children = [element.children];
      }
      return createNode(element);
    }
  },
  c(...options) {
    const { create } = voyage;
    return create(...options);
  },
  getState(componentid, stateid) {
    const { lacks } = voyage;
    const { states } = voyage;
    if (lacks(states, componentid)) {
      return false;
    } else if (lacks(states[componentid], stateid)) {
      return false;
    }
    return states[componentid][stateid];
  },
  getStorage(key) {
    const { lacks } = voyage;
    const { storage } = voyage;
    if (lacks(storage, key)) {
      return false;
    }
    return storage[key];
  },
  get(...options) {
    const { is } = voyage;
    const { getState, getStorage } = voyage;
    if (is(options.length, 1)) {
      return getStorage(...options);
    } else {
      return getState(...options);
    }
  },
  updateState(componentid, stateid) {
    const { updaters } = voyage;
    const { init } = voyage;
    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(componentid, stateid);
    }
  },
  updateStorage(key) {
    const { init } = voyage;
    const { updaters } = voyage;
    init(updaters, "storage", [key]);

    for (const updater of updaters.storage[key]) {
      updater();
    }
  },
  update(componentid) {
    const { call } = voyage;
    const { select, replace } = voyage;

    const updatedNode = call(componentid);
    const node = select(componentid);
    replace(node, updatedNode);
  },
  refState(initial) {
    const { assign: put, keys, values } = Object;
    const { init, check, sync, use } = voyage;
    const { count } = voyage;
    let { info, states } = voyage;
    const { updateState } = voyage;

    const { componentid } = info;
    let stateid;
    if (check(initial, "object")) {
      stateid = keys(initial)[0];
      initial = values(initial)[0];
    } else {
      stateid = count(info[componentid], "stateid");
    }

    init(states, componentid, [stateid, initial]);

    let reactive = sync(
      states[componentid],
      stateid,
      use(updateState, componentid, stateid)
    );
    put(reactive, { componentid, stateid });
    return reactive;
  },
  ref(...options) {
    const { is } = voyage;
    if (is(options.length, 1)) {
      options = options[0];
    }

    const { check, map } = voyage;
    const { refState } = voyage;
    if (check(options, Array)) {
      return map(options, refState);
    } else {
      return refState(options);
    }
  },
  storeState(initial) {
    const { refState, bind } = voyage;
    const { update } = voyage;

    const { info } = voyage;
    const { componentid } = info;
    const { stateid } = info[componentid];

    bind(componentid, stateid, update);
    return refState(initial);
  },
  store(...options) {
    const { is } = voyage;
    if (is(options.length, 1)) {
      options = options[0];
    }

    const { check, map } = voyage;
    const { storeState } = voyage;
    if (check(options, Array)) {
      return map(options, storeState);
    } else {
      return storeState(options);
    }
  },
  keep(obj) {
    const { is, map } = voyage;
    const { keepStorage } = {
      keepStorage(key, value) {
        const { assign: put } = Object;
        const { sync, use } = voyage;
        const { updateStorage } = voyage;

        let { storage } = voyage;
        storage[key] = value;

        return put(sync(storage, key, use(updateStorage, key)), { key });
      },
    };

    if (is(keys(obj).length, 1)) {
      const { keys } = Object;
      const key = keys(obj)[0];
      return keepStorage(key, obj[key]);
    } else {
      return map(obj, keepStorage);
    }
  },
  defineComponent(component) {
    let { components } = voyage;
    components[component.name] = component;
  },
  defineMacro(macro) {
    let { macros } = voyage;
    macros[macro.name] = macro;
  },
  define() {},
  runComponent(options) {
    const { component, properties, parent } = options;
    const { createComponent } = voyage;
    const node = createComponent(component, properties);
    parent.appendChild(node);
  },
  run(...options) {
    const { check } = voyage;
    const { runComponent } = voyage;
    if (options.length > 1) {
      const [component, properties, parent] = options;
      options = { component, properties, parent };
    } else {
      options = options[0];
    }
    if (check(options.parent, "string")) {
      options.parent = document.querySelector(options.parent);
    }
    runComponent(options);
  },
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
    const combined = create([
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@change": change }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
  },
  createPoly1() {
    const { store, create } = voyage;
    let count = store(0);
    const dec = function () {
      count.v--;
    };
    const combined = create(["button", { "@click": dec }, "-"]);
    return combined;
  },
  createPoly2() {
    const { store, create } = voyage;
    let count = store(0);
    const dec = function () {
      count.v--;
    };
    const change = function (e) {
      const value = e.target.value;
      if (isNaN(value)) {
        count.v = 0;
      } else {
        count.v = value;
      }
    };
    const combined = create(
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@change": change }]
    );
    return combined;
  },
  counterMacro() {
    const { ref, c } = voyage;
    let count = ref(0);
    const dec = function () {
      count.v--;
    };
    const inc = function () {
      count.v++;
    };
    const combined = c([
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@model": count }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
  },
  counterKey() {
    const { ref, c } = voyage;
    let count = ref({ count: 0 });
    const dec = function () {
      count.v--;
    };
    const inc = function () {
      count.v++;
    };
    const node = c(
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@model": count }],
      ["button", { "@click": inc }, "+"]
    );
    return node;
  },
  hello(msg) {
    const { c } = voyage;
    return c("p", msg);
  },
};

const { counter, createPoly1, createPoly2, counterMacro, counterKey, hello } =
  examples;

voyage.run({ component: counter, parent: "body" });
voyage.run({ component: counterKey, parent: "body" });
voyage.run({
  component: hello,
  properties: "welcome to hotel california",
  parent: "body",
});

// roadmap
// - complete todos for basis
// - svelte examples for feature testing
// - chakra ui for more realistic case
// - google reader for elegance
// - sr component library for fun
//
// @todo
// count revise
// - count -> lack -> reset
// private function
// - checkType is private in check function
// bind revise
// - change bind behavior
// - combine bindState (componentid,stateid) and bindStorage ("storage",key)
// map revise
// - map for object
// init poly
// - init(a,b)
// - init(a,b,c)
// - init(a,b,[c],d) c is array
// - init(a,b,[c,cvalue],d) c is cvalue
// - init(a,b,{c:cvalue},d) c is cvalue
// fix use
// - bug fix
// create poly redo
// - create(string tag,obj labels,array child,array child)
// - create([string tag,obj labels,array child,array child]) -> one more div wrap
// select while create
// - attribute $0 $1 $2
// - input = select("$0")
// - [input] = select(["$0"])
// - input.focus()
// - component = select("$xyz")
// - component.state key (proxy or obj def prop)
// - nav = select(parent,location [0,1,0,2])
// - select(number) for component
// - select(string) for node or reactive component
// dom method macros
// - steal from jquery
// - learn from common use case
// macro
// - more built in macro ("@model")
// revise
// - param (a,b) ({a,b}) (...ab)
// - function poly
// - clearer method name
// - less typing
// xhr
// - impl elsewhere
// route
// - impl elsewhere
