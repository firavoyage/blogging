//20241126
//voyagejs 0.24

let voyage = {
  info: {},
  states: { global: {} },
  reactive: {},
  updaters: {},
  components: {},
  macros: {
    model(node, state) {
      const { bind } = voyage;

      node.value = state.v;

      const updater = function modelValue(newValue) {
        node.value = newValue;
      };
      bind(state, updater);

      const handleChange = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      node.addEventListener("change", handleChange);
    },
    text(node, state) {
      const { check } = voyage;
      if (check(state, "object")) {
        const { bind } = voyage;
        node.innerText = state.v;
        const updater = function updateText(newValue) {
          node.innerText = newValue;
        };
        bind(state, updater);
      } else {
        node.innerText = state;
      }
    },
    html(node, state) {
      const { check } = voyage;
      if (check(state, "object")) {
        const { bind } = voyage;
        node.innerHTML = state.v;
        const updater = function updateHTML(newValue) {
          node.innerHTML = newValue;
        };
        bind(state, updater);
      } else {
        node.innerHTML = state;
      }
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
  symbol(key) {
    const symbolSha256 =
      "b76a7ca153c24671658335bbd08946350ffc621fa1c516e7123095d4ffd5c581";
    return symbolSha256 + key;
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
  match(list, query) {
    const { isnt } = voyage;
    let matches = [],
      index = list.indexOf(query);
    while (isnt(index, -1)) {
      matches.push(index);
      index = list.indexOf(query, index + 1);
    }
    return matches;
  },
  use(fn, ...params) {
    const { is, symbol, match } = voyage;
    const placeholder = symbol("placeholder");
    //sha256("useplaceholder")
    if (fn) {
      const { name } = fn;
      if (is(params.indexOf(placeholder), -1)) {
        return {
          [name]() {
            return fn(...params);
          },
        }[name];
      } else {
        const flex = match(params, placeholder);
        return {
          [name](...flexParam) {
            for (const index in flex) {
              params[flex[index]] = flexParam[index];
            }
            return fn(...params);
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

    let reactive = {};
    const agent = {
      get() {
        return obj[key];
      },
      set(newValue) {
        const oldValue = obj[key];
        if (isnt(oldValue, newValue)) {
          obj[key] = newValue;
          observer(newValue, oldValue);
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
  select(option) {
    const { fromSelection, byComponentid } = {
      fromSelection(selection) {
        const { info } = voyage;
        const { node } = info.selections[selection];
        return node;
      },
      byComponentid(componentid) {
        const { remove } = voyage;
        const node = document.querySelector(`[componentid="${componentid}"]`);
        if (node) {
          return node;
        } else {
          remove(componentid);
          return false;
        }
      },
    };

    const { check } = voyage;

    if (check(option, "number")) {
      return byComponentid(option);
    } else {
      return fromSelection(option);
    }
  },
  replace(node, updatedNode) {
    node.parentNode.replaceChild(updatedNode, node);
  },
  calc(calculator, ...factors) {
    const { check } = voyage;

    if (check(factors[0], Array)) {
      factors = factors[0];
    }

    return {
      calculator,
      factors,
    };
  },
  bind(...options) {
    const { check, has } = voyage;
    let { updaters } = voyage;

    const { bindUpdater } = {
      bindUpdater(componentid, stateid, updater) {
        const { info } = voyage;
        if (!info[componentid].created) {
          const { init } = voyage;
          init(updaters, componentid, [stateid]);
          updaters[componentid][stateid].push(updater);
        }
      },
    };

    if (check(options[0], "number")) {
      const [componentid, stateid, updater] = options;
      bindUpdater(componentid, stateid, updater);
    } else if (check(options[0], "string")) {
      const [key, updater] = options;
      bindUpdater("global", key, updater);
    } else {
      // check options[0] "object"
      if (has(options[0], "componentid")) {
        const [state, updater] = options;
        const { componentid, stateid } = state;
        bindUpdater(componentid, stateid, updater);
      } else {
        const [globalState, updater] = options;
        const { key } = globalState;
        bindUpdater("global", key, updater);
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
    const { is, isnt, check, has, lacks, init, each, bind, use } = voyage;
    const { assign: give } = Object;

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
        init(info, {
          [componentid]: { component, properties, created: false },
        });

        const { call } = voyage;
        const node = call(componentid);

        if (has(properties, "$")) {
          const { $: selector } = properties;
          init(info, "selections", selector);
          give(info.selections[selector], { node, componentid });
        }

        info[componentid].created = true;

        return node;
      },
      createNode(element) {
        const { macros, info } = voyage;

        let node = document.createElement(element.tag);
        const { labels } = element;

        for (const label in labels) {
          const content = labels[label];
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
          } else if (is(label, "$")) {
            init(info, "selections", content);
            info.selections[content].node = node;
          } else if (check(content, "object") && has(content, "stateid")) {
            node.setAttribute(label, content.v);

            const { updateLabel } = {
              updateLabel(newValue) {
                node.setAttribute(label, newValue);
              },
            };
            const state = content;
            bind(state, updateLabel);
          } else if (check(content, "object") && has(content, "calculator")) {
            const { calculator, factors } = content;

            const { updateLabelCalc } = {
              updateLabelCalc() {
                node.setAttribute(label, calculator());
              },
            };

            updateLabelCalc();

            map(factors, use(bind, use(), calculator));
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
    const { is, check } = voyage;
    const { reactive } = voyage;

    if (is(options.length, 1)) {
      const [option] = options;
      let componentid;

      if (check(option, "string")) {
        const { info } = voyage;
        componentid = info.selections[option].componentid;
      } else {
        componentid = option;
      }

      return reactive[componentid];
    } else {
      const [componentid, stateid] = options;
      return reactive[componentid][stateid];
    }
  },
  lookup(key) {
    const { reactive } = voyage;
    return reactive["global"][key];
  },
  updateState(componentid, stateid, newValue, oldValue) {
    const { init } = voyage;
    const { updaters } = voyage;
    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(newValue, oldValue);
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
        let reactiveState = sync(
          states[componentid],
          stateid,
          use(updateState, componentid, stateid, use(), use())
        );

        const { assign: give } = Object;
        give(reactiveState, { componentid, stateid });

        let { reactive } = voyage;
        init(reactive, componentid, { [stateid]: reactiveState });

        return reactiveState;
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
        let { info } = voyage;
        const { componentid } = info;
        const { stateid } = info[componentid];

        let { updaters } = voyage;
        const { init } = voyage;
        init(updaters, componentid, [stateid]);

        const { bind } = voyage;
        const { updateComponent } = {
          updateComponent() {
            const { select, replace } = voyage;
            const { call } = voyage;

            const node = select(componentid);
            const updatedNode = call(componentid);
            replace(node, updatedNode);
          },
        };
        bind(componentid, stateid, updateComponent);

        const { ref } = voyage;
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
    const { keepGlobal } = {
      keepGlobal(key, value) {
        const { updateState } = voyage;

        const { init } = voyage;
        let { states } = voyage;
        states["global"][key] = value;

        const { sync, use } = voyage;
        let reactiveState = sync(
          states["global"],
          key,
          use(updateState, "global", key, use(), use())
        );

        const { assign: give } = Object;
        give(reactiveState, { key });

        let { reactive } = voyage;
        init(reactive, "global", { [key]: reactiveState });

        return reactiveState;
      },
    };

    const { is, map } = voyage;
    if (is(keys(obj).length, 1)) {
      const { keys } = Object;
      const key = keys(obj)[0];
      return keepGlobal(key, obj[key]);
    } else {
      return map(obj, keepGlobal);
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
      ["input", { type: "text", "@model": count }],
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
      ["button", { "@click": dec, $: "a" }, "-"],
      ["input", { type: "text", "@model": count }],
      ["button", { "@click": inc }, "+"]
    );
    return node;
  },
  counterLabel() {
    const { ref, c } = voyage;
    let count = ref({ count: 0 });
    const dec = function () {
      count.v--;
    };
    const inc = function () {
      count.v++;
    };
    const node = c(
      ["button", { "@click": dec, $: "a" }, "-"],
      ["input", { type: "text", value: count }],
      ["button", { "@click": inc }, "+"]
    );
    return node;
  },
  hello({ msg }) {
    const { c } = voyage;
    return c("p", { "@text": msg });
  },
};

const { counter, counterMacro, counterKey, hello } = examples;

voyage.run({ component: counter, parent: "body" });
voyage.run({ component: counterKey, parent: "body" });
voyage.run({
  component: hello,
  properties: { $: "abc", msg: "welcome to hotel california" },
  parent: "body",
});

/**
@roadmap
- complete todos for basis
- svelte examples for feature testing
- chakra ui for real world design system
- material design 3 for elegance
- google reader (google books classic) for retro
- sr component library for fun

@todo
better and safer state (done)
- in fn sync
- instead of state=obj(initial) state={}
- state.v for the value
- state for the state obj carrying cid sid
label updater (done)
- in fn createNode
- {label:state} -> bind single state to label
- updateLabel(node,label,state){...}
- bind(updateLabel,state)
revise fn macros.model (done)
- add node.value=state.v
- no need to write {value:state,"@model":state}
- write {"@model":state} instead
label updater example (done)
- examples[counterLabel]
- label:state will only bind state change to label
- it wont listen label.content change to update state
label updater with multi factors (done)
- {label:calc(fn,...[factor states])}
- or calc(fn,[factor states]) -> a reducer like useMemo in react
- return obj {calculator:fn,factors:[...arr]}
- updateLabelCalc(node,label,calculator){...}
- map factors bind(updLabelCalc,factor)
better readabilty
- rp all cid sid with state and dc {cid sid} = state
- rp some else with else if
- single rep principle: split long fn
- fn create is too long. split into shorter named fn.
- dc for fn should be place on top {fn1,fn2}=voyage
- dc for data should be placed where it's needed
theme namespace
- same button component across material design and chakra ui
- setTheme(str theme)
- if theme is set check whether the tag is included in the namespace
- if so createComponent otherwise createNode
more macro
- `@if` `@show`
- macro(node,state)
- macro(node,content)
styling
- class based
- style alias
- nested style alias
- with or without default values
- style alias library
- define custom style alias
styling spec
- style class <- "a-1 b-2 c d e-221"
- style obj <- {style:value,style:value}
- defineStyle(style,styleObj fn(value) or fn())
dom methods abstract
- steal from jquery
- learn from common use case
revise
- param (a,b) ({a,b}) (...ab)
- function poly
- separate public and private function
- clearer method name
- less typing
xhr
- fetch in fp without promise
route
- path and page component
- custom decision function
*/
