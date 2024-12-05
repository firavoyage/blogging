//20241127
//voyagejs 0.25

let voyage = {
  lib: {
    /**
     * 
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    is(a, b) {
      return a === b;
    },
    isnt(a, b) {
      return a !== b;
    },
    has(obj, key) {
      const { check } = voyage.lib;

      if (check(obj, Array) && check(key, "number")) {
        return key < obj.length;
      } else if (check(obj, "object")) {
        return obj.hasOwnProperty(key);
      } else {
        return false;
      }
    },
    lacks(obj, key) {
      const { has } = voyage.lib;
      return !has(obj, key);
    },
    init(obj, ...path) {
      const { check,lacks } = voyage.lib;
      
      const { initKey } = {
        initKey(obj, key, initial) {
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
    check(a, b) {
      const { is } = voyage.lib;

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
      const { check } = voyage.lib;

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
      const { check } = voyage.lib;

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
      const { isnt } = voyage.lib;

      let matches = [],
        index = list.indexOf(query);
      while (isnt(index, -1)) {
        matches.push(index);
        index = list.indexOf(query, index + 1);
      }
      return matches;
    },
    use(fn, ...params) {
      const { is, symbol, match } = voyage.lib;
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
      const { isnt, map, use } = voyage.lib;
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
    reset(counter, key) {
      counter[key] = 0;
    },
    count(counter, key) {
      const { init } = voyage.lib;
      init(counter, { [key]: 0 });
      const current = counter[key];
      counter[key]++;
      return current;
    },
  },
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
      const { check } = voyage.lib;
      const { bind } = voyage;

      if (check(state, "object")) {
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
  select(option) {
    const { check } = voyage.lib;
    const { remove } = voyage;

    const { fromSelection, byComponentid } = {
      fromSelection(selection) {
        const { info } = voyage;
        const { node } = info.selections[selection];
        return node;
      },
      byComponentid(componentid) {
        const node = document.querySelector(`[componentid="${componentid}"]`);
        if (node) {
          return node;
        } else {
          remove(componentid);
          return false;
        }
      },
    };

    if (check(option, "number")) {
      return byComponentid(option);
    } else {
      return fromSelection(option);
    }
  },
  remove(componentid) {
    let { info, states, updaters } = voyage;

    info[componentid] = false;
    states[componentid] = false;
    updaters[componentid] = false;
  },
  replace(node, updatedNode) {
    node.parentNode.replaceChild(updatedNode, node);
  },
  calc(calculator, ...factors) {
    const { check } = voyage.lib;

    if (check(factors[0], Array)) {
      factors = factors[0];
    }

    return {
      calculator,
      factors,
    };
  },
  bind(...options) {
    const { check, has,init } = voyage.lib;
    
    let { updaters,info } = voyage;
    const { bindUpdater } = {
      bindUpdater(componentid, stateid, updater) {
        if (!info[componentid].created) {
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
    const { reset } = voyage.lib;
    const { assign: give } = Object;

    let { info } = voyage;
    give(info, { componentid });
    reset(info[componentid], "stateid");

    const { component, properties } = info[componentid];
    const node = component(properties);
    node.setAttribute("componentid", componentid);

    return node;
  },
  create(...options) {
    const { is, isnt, check, has, lacks, init, each, use, count } = voyage.lib;
    const { bind,call } = voyage;
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
        const { counter } = voyage;
        const componentid = count(counter, "component");

        let { info } = voyage;
        init(info, {
          [componentid]: { component, properties, created: false },
        });

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
    const { is, check } = voyage.lib;
    
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
    const { init } = voyage.lib;

    const { updaters } = voyage;
    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(newValue, oldValue);
    }
  },
  ref(...options) {
    const { is,check,map,init,count,sync,use } = voyage.lib;
    const { updateState } = voyage;

    const { refState } = {
      refState(initial) {
        let { info } = voyage;
        const { componentid } = info;

        let stateid;
        if (check(initial, "object")) {
          const { keys, values } = Object;
          stateid = keys(initial)[0];
          initial = values(initial)[0];
        } else {
          stateid = count(info[componentid], "stateid");
        }

        let { states } = voyage;
        init(states, componentid, { [stateid]: initial });

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

    if (is(options.length, 1)) {
      options = options[0];
    }

    if (check(options, Array)) {
      return map(options, refState);
    } else {
      return refState(options);
    }
  },
  store(...options) {
    const { is,check,map,init } = voyage.lib;
    const { bind,select, replace ,call,ref} = voyage;

    if (is(options.length, 1)) {
      options = options[0];
    }

    const { storeState } = {
      storeState(initial) {
        let { info } = voyage;
        const { componentid } = info;
        const { stateid } = info[componentid];

        let { updaters } = voyage;
        init(updaters, componentid, [stateid]);

        const { updateComponent } = {
          updateComponent() {
            const node = select(componentid);
            const updatedNode = call(componentid);
            replace(node, updatedNode);
          },
        };
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
    const { is, map,init,sync, use } = voyage.lib;
    const { updateState } = voyage;

    const { keepGlobal } = {
      keepGlobal(key, value) {

        let { states } = voyage;
        states["global"][key] = value;

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
    const { init } = voyage.lib;
    const { create } = voyage;

    const { runComponent } = {
      runComponent(options) {
        init(options, { properties: {} });

        const { component, properties, parent } = options;

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
revise
- at param {} name
- at return {} name
- function poly
- separate public and private function
- clearer method name
- less typing
styling
- learn from tailwind sass less stylus
- search css in js methods and ask mistral
- using class like method without class
- edit style label directly
- `@style` macro
- define with name
- = "big large red button"
- define with name range and step
- = "big-1 large-4 red-12 button-2"
- define with name and params
- = "border-red-solid"
- defineStyle big(param){r {font-size:param*10}}
- importStyleLibrary "myTheme" big red button 
styling spec
- style class <- "a-1 b-2 c d e-221"
- style obj <- {style:value,style:value}
- defineStyle(style,styleObj fn(value) or fn())
theme namespace
- same button component across material design and chakra ui
- setTheme(str theme)
- if theme is set check whether the tag is included in the namespace
- if so createComponent otherwise createNode
define more macros
- learn from jquery react alpine mithril svelte
- `@if` `@show`
- macro(node,state) | macro(node,content)
to element
- from pug etc.
better readabilty
- rp all cid sid with state and dc {cid sid} = state
- rp some else with else if
- single rep principle: split long fn
- fn create is too long. split into shorter named fn.
- dc for fn should be place on top {fn1,fn2}=voyage
- dc for data should be placed where it's needed
dom methods abstract
- steal from jquery
- learn from common use case
xhr
- fetch in fp without promise
route
- path and page component
- custom decision function

@version 0.26 release date

@version 0.25
private fn move to lib
- private pure functions like has init are moved to voyage.lib
- voyage includes public functions

@version 0.24
label updater with multi factors
- {label:calc(fn,...[factor states])}
- or calc(fn,[factor states]) -> a reducer like useMemo in react
- return obj {calculator:fn,factors:[...arr]}
- updateLabelCalc(node,label,calculator){...}
- map factors bind(updLabelCalc,factor)

@version 0.23
better and safer state
- in fn sync
- instead of state=obj(initial) state={}
- state.v for the value
- state for the state obj carrying cid sid
label updater
- in fn createNode
- {label:state} -> bind single state to label
- updateLabel(node,label,state){...}
- bind(updateLabel,state)
revise fn macros.model
- add node.value=state.v
- no need to write {value:state,"@model":state}
- write {"@model":state} instead
label updater example
- examples[counterLabel]
- label:state will only bind state change to label
- it wont listen label.content change to update state
*/
