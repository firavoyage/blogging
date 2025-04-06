//20241111
//voyagejs 0.19

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
    map(aliases, use(defineProperty, reactive, use(), agent));
    // for (const alias of aliases) {
    //   defineProperty(reactive, alias, agent);
    // }
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
  updateState(componentid, stateid, value, oldValue) {
    const { init } = voyage;
    const { updaters } = voyage;
    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(value, oldValue);
    }
  },
  ref(...options) {
    const { refState } = {
      refState(initial) {
        let { info } = voyage;
        const { componentid } = info;

        let stateid;
        const { check } = voyage;
        if (check(initial, "object")) {
          const { keys, values } = Object;
          stateid = keys(initial)[0];
          initial = values(initial)[0];
        } else {
          const { count } = voyage;
          stateid = count(info[componentid], "stateid");
        }

        const { init } = voyage;
        let { states } = voyage;
        init(states, componentid, { [stateid]: initial });

        const { sync, use } = voyage;
        const { updateState } = voyage;
        let reactive = sync(
          states[componentid],
          stateid,
          use(updateState, componentid, stateid, use(), use())
        );

        const { assign: give } = Object;
        give(reactive, { componentid, stateid });
        return reactive;
      },
    };

    const { is } = voyage;
    if (is(options.length, 1)) {
      options = options[0];
    }

    const { check, map } = voyage;
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
        const { info } = voyage;
        const { componentid } = info;
        const { stateid } = info[componentid];

        const { updateComponent } = {
          updateComponent() {
            const { select, replace } = voyage;
            const { call } = voyage;

            const node = select(componentid);
            const updatedNode = call(componentid);
            replace(node, updatedNode);
          },
        };

        const { bind, ref } = voyage;
        bind(componentid, stateid, updateComponent);

        return ref(initial);
      },
    };
    if (check(options, Array)) {
      return map(options, storeState);
    } else {
      return storeState(options);
    }
  },
  keep(obj) {
    const { keepStorage } = {
      keepStorage(key, value) {
        const { updateState } = voyage;

        let { storage } = voyage;
        storage[key] = value;

        const { assign: give } = Object;
        const { sync, use } = voyage;
        let reactive = sync(
          storage,
          key,
          use(updateState, "storage", key, use(), use())
        );
        give(reactive, { key });
        return reactive;
      },
    };

    const { is, map } = voyage;
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
    const { runComponent } = {
      runComponent(options) {
        const { init } = voyage;
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
// change code style
// - import function and data where it's needed
// - on top of its usages
// - not on top of everything
// put use superpower into practice
// - sync map alias use defineprop
// better updater
// - give updater value and oldvalue
// - updateState(cid,sid,value,old value)
// support flat param
// - ref(a,b,c)
// - ref([a,b,c]) (works the same)
// select poly
// - attribute $ "$:1" "$:123"
// - input = select("0")
// - [input] = select(["$0"])
// - input.focus()
// - select(number componentid) for component node
// - select(string) for node or component node
// revise object like array
// - make states[componentid] obj not array
// - make updater obj not array
// symbol function
// - symbol() -> unique sha256+count
// get poly
// - get(number componentid) -> states {}
// - get(string "0") -> states {}
// - states[componentid][stateid]
// - storage[key]
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
