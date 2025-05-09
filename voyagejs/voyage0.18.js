//20241109
//voyagejs 0.18

let voyage = {
  info: {},
  storage: {},
  states: {},
  updaters: {},
  components: {},
  macros: {
    model(node, state) {
      const { bind } = voyage;
      const handleChange = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      node.addEventListener("change", handleChange);
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
    const { check } = voyage;
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
        initKey(current, key[0], []);
        current = current[key];
      } else if (check(key, "object")) {
        for (const item in key) {
          initKey(current, item, key[item]);
        }
      } else {
        initKey(current, key, {});
        current = current[key];
      }
    }
    return obj;
  },
  reset(counter, key) {
    counter[key] = 0;
  },
  count(counter, key) {
    const { init } = voyage;
    init(counter, { [key]: 0 });
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
  bind(...options) {
    const { check, has, init } = voyage;
    let { info, updaters } = voyage;

    const { bindUpdater } = {
      bindUpdater(componentid, stateid, updater) {
        init(updaters, componentid, [stateid]);
        init(info, "updaters", componentid, stateid);

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
    const { assign: give } = Object;
    const { reset } = voyage;
    let { info } = voyage;

    give(info, { componentid });
    reset(info[componentid], "stateid");

    const { component, properties } = info[componentid];
    const node = component(properties);
    node.setAttribute("componentid", componentid);

    return node;
  },
  create(...options) {
    const { is, isnt, check, has, lacks, init, each } = voyage;
    const { assign: give } = Object;

    const { macros } = voyage;

    let elements = [],
      nodes = [];

    let current = 0;
    elements[0] = { options };

    while (true) {
      if (is(current, elements.length)) {
        break;
      }

      let element = elements[current];

      for (const item of element.options) {
        if (check(item, "function")) {
          element.component = item;
        } else if (check(item, "string")) {
          if (lacks(element, "tag")) {
            element.tag = item;
          } else {
            element.text = item;
          }
        } else if (check(item, Array)) {
          let child = { options: item, parent: current };
          elements.push(child);
        } else {
          //check item object
          element.labels = item;
        }
      }

      current++;
    }

    const { createComponent, createNode } = {
      createComponent(component, properties) {
        const { count, counter } = voyage;
        const componentid = count(counter, "component");

        let { info } = voyage;
        init(info, { [componentid]: { component, properties } });

        const { call } = voyage;
        return call(componentid);
      },
      createNode(element) {
        let node = document.createElement(element.tag);
        for (const label in element.labels) {
          const content = element.labels[label];
          if (is(label, "class") && check(content, Array)) {
            for (const className of content) {
              node.classList.add(className);
            }
          } else if (is(label, "style") && check(content, "object")) {
            give(node.style, content);
          } else if (is(label[0], "@")) {
            const event = label.slice(1);

            if (has(macros, event)) {
              const { [event]: macro } = macros;
              macro(node, content);
            } else {
              node.addEventListener(event, content);
            }
          } else {
            node.setAttribute(label, content);
          }
        }
        if (has(element, "text")) {
          node.innerText = element.text;
        }
        return node;
      },
    };

    for (const index in elements) {
      const element = elements[index];
      init(element, { tag: "div", labels: {} });

      let node;
      if (has(element, "component")) {
        node = createComponent(element.component, element.labels);
      } else {
        node = createNode(element);
      }

      nodes[index] = node;
    }

    if (isnt(elements.length, 1)) {
      for (const index of each(elements.length - 1, 1)) {
        const { parent } = elements[index];

        nodes[parent].appendChild(nodes[index]);
      }
    }

    return nodes[0];
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

    init(states, componentid, { [stateid]: initial });

    let reactive = sync(
      states[componentid],
      stateid,
      use(updateState, componentid, stateid)
    );

    const { assign: give } = Object;
    give(reactive, { componentid, stateid });
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

        const { assign: give } = Object;
        return give(sync(storage, key, use(updateState, "storage", key)), {
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
    const { init } = voyage;

    const { runComponent } = {
      runComponent(options) {
        init(options, { properties: {} });

        const { component, properties, parent } = options;

        const { create } = voyage;
        const node = create(component, properties);

        const parentNode = document.querySelector(parent);
        parentNode.appendChild(node);
      },
    };
    if (options.length > 1) {
      const [component, properties, parent] = options;
      runComponent({ component, properties, parent });
    } else {
      runComponent(options[0]);
    }
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
    const combined = create(
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@change": change }],
      ["button", { "@click": inc }, "+"]
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
    const combined = c(
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count, "@model": count }],
      ["button", { "@click": inc }, "+"]
    );
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
  hello({ msg }) {
    const { c } = voyage;
    return c("p", msg);
  },
};

const { counter, counterMacro, counterKey, hello } = examples;

voyage.run({ component: counter, parent: "body" });
voyage.run({ component: counterKey, parent: "body" });
voyage.run({
  component: hello,
  properties: { msg: "welcome to hotel california" },
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
// fix bug in init
// - init(obj,1,1)
// - differs from init(obj,"1",1)
// - type mistake. obj key could be number (auto convert)
// fix bug in welcome to hotel california
// - properties should be object
// remove stupid listen function
// - replace with add event listener
// give init some more superpowers
// - init(a,{b:c,d:e})
// - remove init(a,[b,c])
// create poly redo
// - create(string tag,obj labels,string text)
// - create(string tag,obj labels,array child,array child)
// - create(string tag,obj labels,[array child,array child]) -> one more div wrap children
// - create([string tag,obj labels,array child,array child]) -> one more div wrap all
// create avoid sof
// - use dfs array
// create labels obj
// - class
// - style
// flatten examples
// - before: counter [tag,labels,children]
// - after: counter [tag,labels,child,child,child]
// better updater
// - give updater value and oldvalue
// support flat param
// - ref(a,b,c)
// - ref([a,b,c]) (works the same)
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
// macro
// - more built in macro ("@model")
// - text html
// dom method macros
// - steal from jquery
// - learn from common use case
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
