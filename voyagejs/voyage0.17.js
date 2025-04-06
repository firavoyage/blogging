//20241108
//voyagejs 0.17

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
  match(list, item) {
    const { isnt } = voyage;
    let result = [],
      current = list.indexOf(item);
    while (isnt(current, -1)) {
      result.push(current);
      current = list.indexOf(item, current + 1);
    }
    return result;
  },
  use(fn, ...param) {
    const { is, match } = voyage;
    const placeholder =
      "e22f2ddc6ea80bcd61e03272bc44f727e1984d5b986d2ad5e5817b4193dc0a5f";
    //sha256("useplaceholder")
    if (fn) {
      const { name } = fn;
      if (is(param.indexOf(placeholder), -1)) {
        return {
          [name]() {
            return fn(...param);
          },
        }[name];
      } else {
        const flex = match(param, placeholder);
        return {
          [name](...flexParam) {
            for (const index in flex) {
              param[flex[index]] = flexParam[index];
            }
            return fn(...param);
          },
        }[name];
      }
    } else {
      return placeholder;
    }
  },
  sync(obj, key, observer) {
    const { isnt, map, use } = voyage;
    const { defineProperty } = Object;

    let reactive = Object(obj[key]);
    const agent = {
      get() {
        return obj[key];
      },
      set(value) {
        const oldValue = obj[key];
        if (isnt(oldValue, value)) {
          obj[key] = value;
          observer(value, oldValue);
        }
      },
    };

    const aliases = ["v", "value"];
    for (const alias of aliases) {
      defineProperty(reactive, alias, agent);
    }
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
  create(...options) {
    const { is, each, has, check, init } = voyage;
    const { reset, count, counter } = voyage;
    const { createComponent, createNode } = {
      createComponent(component, properties) {
        const { count, counter } = voyage;
        const { call } = voyage;
        let { info } = voyage;
        const componentid = count(counter, "component");
        init(info, [componentid, { component, properties }]);
        return call(componentid);
      },
      createNode(element) {
        const { create } = voyage;
        const { listen } = voyage;
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
    };
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
  get(...options) {
    const { is } = voyage;
    const { getState, getStorage } = {
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
    };
    if (is(options.length, 1)) {
      return getStorage(...options);
    } else {
      return getState(...options);
    }
  },
  updateState(componentid, stateid) {
    const { init } = voyage;
    const { updaters } = voyage;
    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(componentid, stateid);
    }
  },
  updateComponent(componentid) {
    const { call } = voyage;
    const { select, replace } = voyage;

    const updatedNode = call(componentid);
    const node = select(componentid);
    replace(node, updatedNode);
  },
  refState(initial) {
    const { init, check, sync, use } = voyage;
    const { count } = voyage;
    const { updateState } = voyage;
    let { info, states } = voyage;

    const { componentid } = info;
    let stateid;
    if (check(initial, "object")) {
      const { keys, values } = Object;
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

    const { assign: put } = Object;
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
  store(...options) {
    const { is } = voyage;
    if (is(options.length, 1)) {
      options = options[0];
    }

    const { check, map } = voyage;
    const { storeState } = {
      storeState(initial) {
        const { refState, bind } = voyage;
        const { updateComponent } = voyage;

        const { info } = voyage;
        const { componentid } = info;
        const { stateid } = info[componentid];

        bind(componentid, stateid, updateComponent);
        return refState(initial);
      },
    };
    if (check(options, Array)) {
      return map(options, storeState);
    } else {
      return storeState(options);
    }
  },
  keep(obj) {
    const { is, map, sync, use } = voyage;
    const { keepStorage } = {
      keepStorage(key, value) {
        const { updateState } = voyage;

        let { storage } = voyage;
        storage[key] = value;

        const { assign: put } = Object;
        return put(sync(storage, key, use(updateState, "storage", key)), {
          key,
        });
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
  run(...options) {
    const { check } = voyage;
    const { runComponent } = {
      runComponent(options) {
        const { component, properties, parent } = options;
        const { create } = voyage;
        const node = create(component, properties);
        parent.appendChild(node);
      },
    };
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
// give use some super power
// - use() -> sha256 hash of placeholder
// - use(...) -> indexof indexof [1,4]
// - fn(...options){} -> replace corresponding param with options
// private function
// - checkType which only appears in check function is private
// - make more functions like checkType private
// create poly redo
// - create(string tag,obj labels,string text)
// - create(string tag,obj labels,array child,array child)
// - create(string tag,obj labels,[array child,array child]) -> one more div wrap children
// - create([string tag,obj labels,array child,array child]) -> one more div wrap all
// better updater
// - give updater value and oldvalue
// support flat param
// - ref(a,b,c)
// - ref([a,b,c]) (works the same)
// create labels obj
// - class
// - style
// select while create
// - attribute $0 $1 $2
// - input = select("$0")
// - [input] = select(["$0"])
// - input.focus()
// - component = select("$xyz")
// - component.state key (proxy or obj def prop)
// - select(number) for component node
// - select(string) for node or component node
// - get(string) for component obj
// dom method macros
// - steal from jquery
// - learn from common use case
// macro
// - more built in macro ("@model")
// revise
// - param (a,b) ({a,b}) (...ab)
// - function poly
// - separate public and private function
// - clearer method name
// - less typing
// xhr
// - impl elsewhere
// route
// - impl elsewhere
