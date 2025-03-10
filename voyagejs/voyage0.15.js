//20241106
//voyagejs 0.15

let voyage = {
  info: {},
  storage: {},
  states: {},
  updaters: { storage: {} },
  components: {},
  macros: {
    model({ node, state, componentid, stateid }) {
      const { bindState } = voyage;
      const { listen } = voyage;
      const handleChange = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      listen(node, "change", handleChange);
      const updater = function modelValue() {
        node.value = state.v;
      };
      bindState(componentid, stateid, updater);
    },
  },
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
  checkType(a) {
    const { is } = voyage;
    if (is(a, null) || is(a, undefined)) {
      return false;
    } else if (Array.isArray(a)) {
      return "array";
    } else {
      return typeof a;
    }
  },
  check(a, b) {
    const { is, checkType } = voyage;
    if (is(checkType(b), "string")) {
      return is(checkType(a), b);
    } else if (is(checkType(b), "object")) {
      return a instanceof b;
    } else {
      return checkType(a);
    }
  },
  iterateEach(begin, end, step) {
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
  each(begin, end, step) {
    const { check } = voyage;
    const { iterateEach } = voyage;
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
    return iterateEach(begin, end, step);
  },
  map(array, converter) {
    let result = [];
    for (const item of array) {
      result.push(converter(item));
    }
    return result;
  },
  use(fn, param) {
    const { check } = voyage;
    const { name } = fn;

    if (param) {
      if (check(param, "array")) {
        return {
          [name]: function () {
            return fn(...param);
          },
        }[name];
      } else {
        return {
          [name]: function () {
            return fn(...param);
          },
        }[name];
      }
    } else {
      return {
        [name]: function () {
          return fn(...param);
        },
      }[name];
    }
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
    if (check(obj, "object")) {
      return obj.hasOwnProperty(key);
    } else if (check(obj, "array") && check(key, "number")) {
      return key < obj.length;
    } else {
      return false;
    }
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
  reset(counter, key) {
    counter[key] = 0;
  },
  count(counter, key) {
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
  bindState(componentid, stateid, updater) {
    const { has, init } = voyage;
    let { info, updaters } = voyage;
    init(updaters, componentid, {});
    init(updaters[componentid], stateid, []);

    init(info, "updaters", {});
    init(info.updaters, componentid, {});
    init(info.updaters[componentid], stateid, {});

    const { name } = updater;
    if (name) {
      if (has(info.updaters[componentid][stateid], name)) {
        return false;
      } else {
        info.updaters[componentid][stateid][name] = true;
        updaters[componentid][stateid].push(updater);
      }
    } else {
      updaters[componentid][stateid].push(updater);
    }
  },
  bindStorage(key, updater) {
    const { has, init } = voyage;
    let { info, updaters } = voyage;

    init(updaters.storage, key, []);

    init(info, "updaters", {});
    init(info.updaters, "storage", {});
    init(info.updaters.storage, key, {});

    const { name } = updater;
    if (name) {
      if (has(info.updaters.storage[key], name)) {
        return false;
      } else {
        info.updaters.storage[key][name] = true;
        updaters.storage[key].push(updater);
      }
    } else {
      updaters.storage[key].push(updater);
    }
  },
  bind(...options) {
    const { check, has } = voyage;
    const { bindState, bindStorage } = voyage;
    if (check(options[0], "string")) {
      bindStorage(...options);
    } else if (check(options[0], "number")) {
      bindState(...options);
    } else {
      if (has(options[0], "key")) {
        const [storageItem, updater] = options[0];
        const { key } = storageItem;
        bindStorage(key, updater);
      } else {
        const [state, updater] = options[0];
        const { componentid, stateid } = state;
        bindState(componentid, stateid, updater);
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
    init(info, componentid, { component, properties });
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
          const { componentid, stateid } = data;
          macros[macro]({ node, componentid, stateid, state });
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
        if (check(child, "array")) {
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

      let typeOptions = [];
      for (const option of options) {
        typeOptions.push([check(option), option]);
      }

      reset(counter, "string");
      reset(counter, "array");
      for (const typeOption of typeOptions) {
        const [type, option] = typeOption;
        if (is(type, "string")) {
          if (is(counter.string, 0)) {
            element.tag = option;
            count(counter, "string");
          } else {
            element.children = option;
          }
        } else if (is(type, "object")) {
          element.labels = option;
        } else if (is(type, "array")) {
          if (is(counter.array, 0)) {
            element.children = option;
            count(counter, "array");
          } else {
            element.children = options;
            break;
          }
        }
      }

      init(element, "tag", "div");
      init(element, "labels", {});
      init(element, "children", []);

      let isChildrenChild = false;
      for (const i of each(2)) {
        if (has(element.children, i)) {
          if (!check(element.children[i], "array")) {
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
    init(updaters, componentid, {});
    init(updaters[componentid], stateid, []);
    for (const updater of updaters[componentid][stateid]) {
      updater(componentid, stateid);
    }
  },
  updateStorage(key) {
    const { updaters } = voyage;

    const { init } = voyage;
    init(updaters.storage, key, []);

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

    init(states, componentid, {});
    init(states[componentid], stateid, initial);

    let reactive = sync(
      states[componentid],
      stateid,
      use(updateState, [componentid, stateid])
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
    if (check(options, "array")) {
      return map(options, refState);
    } else {
      return refState(options);
    }
  },
  storeState(initial) {
    const { refState, bindState } = voyage;
    const { update } = voyage;

    const { info } = voyage;
    const { componentid } = info;
    const { stateid } = info[componentid];

    bindState(componentid, stateid, update);
    return refState(initial);
  },
  store(...options) {
    const { is } = voyage;
    if (is(options.length, 1)) {
      options = options[0];
    }

    const { check, map } = voyage;
    const { storeState } = voyage;
    if (check(options, "array")) {
      return map(options, storeState);
    } else {
      return storeState(options);
    }
  },
  keepStorage(key, value) {
    const { assign: put } = Object;
    const { sync, use } = voyage;
    const { updateStorage } = voyage;

    let { storage } = voyage;
    storage[key] = value;

    let result = sync(storage, key, use(updateStorage, key));
    put(result, { key });
    return result;
  },
  keep(obj) {
    const { keys } = Object;
    const { is, map, use } = voyage;
    const { keepStorage } = voyage;

    if (is(keys(obj).length, 1)) {
      const key = keys(obj)[0];
      return keepStorage(key, obj[key]);
    } else {
      let result = {};
      for (const key in obj) {
        result.key = keepStorage(key, obj[key]);
      }
      return result;
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
    const combined = c([
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@model": count }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
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
// init poly
// - init(a,b)
// - init(a,b,c)
// - init(a,b,[c]) c is array
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
