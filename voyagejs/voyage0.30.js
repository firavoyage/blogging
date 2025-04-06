/**
 * @file
 * the script of voyage framework
 *
 * the current version released on 20250201
 *
 * has been in development since 20250117 (utc+8)
 *
 * @author firavoyage
 * @version 0.30
 * @since 0.1 initiated on 20240806
 * @see changelog.md
 */
/**
 * all methods and data
 * @namespace voyage
 */
let voyage = {
  /**
   * some pure functions
   * @namespace lib
   * @memberof voyage
   */
  lib: {
    /**
     * strict equality test
     *
     * (why)
     *
     * i dont like === approach. but there are some issues related to ==.
     *
     * so i wrapped === in a fn.
     *
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a is equal to b
     * @memberof voyage.lib
     */
    is(a, b) {
      return a === b;
    },
    /**
     * strict inequality test
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a is not equal to b
     * @memberof voyage.lib
     */
    isnt(a, b) {
      return a !== b;
    },
    /**
     * @typedef {string|symbol|boolean|number|bigint} Key
     * the appropriate types of a key in an object
     */
    /**
     * check if an object has certain key (own prop)
     *
     * returns false if it's not an object
     *
     * @param {object} obj - the object
     * @param {Key} key - the key
     * @returns {boolean} whether the key exists
     * @memberof voyage.lib
     */
    has(obj, key) {
      const { check } = voyage.lib;
      if (check(obj, "object")) {
        return obj.hasOwnProperty(key);
      } else {
        return false;
      }
    },
    /**
     * check if an object lacks certain key (own prop)
     *
     * @param {object} obj - the object
     * @param {Key} key - the key
     * @returns {boolean} whether the key doesn't exist
     * @memberof voyage.lib
     */
    lacks(obj, key) {
      return !obj.hasOwnProperty(key);
    },
    /**
     * essential fn for functional programming
     *
     * (story)
     *
     * at first it's named "include(constructor)" which is a proxy
     *
     * very slow.
     *
     * now it even doesnt need to know what the constructor is.
     *
     * sometimes even faster than direct call
     *
     * maybe it could receive an array of method in the future
     *
     * but now it works well and i dont need that feature
     *
     * @param {string} methodName - the method needed
     * @returns {Object<function>}
     * @example
     * const {slice} = use("slice")
     * slice([1,2,3],0,2) //[1,2,3].slice(0,2)
     */
    use(methodName) {
      const { fn } = {
        fn(obj, ...args) {
          return obj[methodName](...args);
        },
      };
      return { [methodName]: fn };
    },
    /**
     * @typedef {Array} SingleElementArray
     * @prop {*} 0 - the element
     */
    /**
     * init an obj with certain path. very customizable.
     * @param {object} obj - the object needs to be init
     * @param  {Array<object|string|SingleElementArray<string>>} path - path to be init
     * > if the key already exists, it wont init
     * >
     * > if it's an object wiht one key value pair, init {key:value}
     *
     * > if it's a string, consider it as the key and init {key:{}}
     * >
     * > if it's a array with one string element, consider it as the key and init {key:[]}
     * @returns {object} the object given after being init
     * @example
     * init({},"foo","bar") //{foo:{bar:{}}}
     * init({},"foo",["bar"]) //{foo:{bar:[]}}
     * init({},{"foo":{abc:"xyz"}},"bar") //{foo:{abc:"xyz",bar:{}]}
     * init({foo:{abc:"xyz"}},"foo","bar") //{foo:{abc:"xyz",bar:{}}}
     * init({foo:{abc:"xyz"}},["foo"],["bar"]) //{foo:{abc:"xyz",bar:[]}}
     * init({foo:{abc:"xyz"}},{foo:"123"},["bar"]) //{foo:{abc:"xyz"},bar:[]}
     * @memberof voyage.lib
     */
    init(obj, ...path) {
      const { check, lacks } = voyage.lib;

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
    /**
     * one param: typeof valid value
     * two param: type equality of valid value
     * if the value is not valid (undefined or null): false
     * @param {*} value - value to be checked
     * @param {string|function} type - type or constructor
     * @returns {string|boolean} type or equality
     * @example
     * check(undefined) //false
     * check(null) //false
     * check(undefined,"undefined") //false
     * check(false) //"boolean"
     * check("number") //"string"
     * check(123,"number") //true
     * check([],Array) //true
     * check([],"object") //true
     * check([],"array") //false
     * @memberof voyage.lib
     */
    check(value, type) {
      const { is } = voyage.lib;

      if (is(value, null) || is(value, undefined)) {
        return false;
      } else {
        if (type) {
          if (is(typeof type, "function")) {
            return value instanceof type;
          } else {
            return is(typeof value, type);
          }
        } else {
          return typeof value;
        }
      }
    },
    /**
     * generate iterator inside for of loop
     * @param {number} begin - first number included
     * @param {number} [end] - last number included
     * @param {number} [step] - if begin<end then default to 1 otherwise default to -1.
     * @returns {Iterator} the iterator
     * @example
     * each(5) //each(0,5,1)
     * each(1,10) //each(1,10,1)
     * each(20,10) //each(20,10,-1)
     * @memberof voyage.lib
     */
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
    /**
     * map array to a function
     * @param {Array} things - things need to be converted
     * @param {function} converter - the converter
     * @returns {Array} things converted
     * @memberof voyage.lib
     */
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
    /**
     * search all appearances for an item in a list
     * @param {Array} list - the list to be searched
     * @param {*} query - the item to be searched
     * @returns {Array} all indexes of the item
     * @memberof voyage.lib
     */
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
    /**
     * @typedef {object} SyncReactive
     * @prop {*} value - the value with getter and setter
     * @prop {*} v - alias of value
     */
    /**
     * @callback SyncObserver
     * @param {*} newValue
     * @param {*} oldValue
     * @returns {void}
     */
    /**
     * make an object prop reactive
     * @param {object} obj - the object to be observed
     * @param {Key} key - the key in the object refering to a value
     * @param {SyncObserver} observer - the callback fn when obj[key] changes
     * @returns {SyncReactive} the reactive object
     * @memberof voyage.lib
     */
    sync(obj, key, observer) {
      const { isnt } = voyage.lib;
      const { defineProperty } = Object;

      let reactive = {};
      const handler = {
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

      for (const alias of aliases) {
        defineProperty(reactive, alias, handler);
      }
      return reactive;
    },
  },
  /**
   * private data in creating components
   * @type {object}
   * @prop {number} componentid
   * the componentid of the next component to be created
   * @memberof voyage
   */
  info: {},
  /**
   * @template Type
   * @typedef {Type[]} ComponentArray
   * @prop {Type} [componentid:number]
   */
  /**
   * @typedef {object} Component
   * @prop {"creating"|"created"} status
   * @prop {function} component the function that creates this component
   * @prop {object} properties the properties of this component
   * @prop {number} stateid the state count used privately in creating this component
   */
  /**
   * private data of components
   * @type {ComponentArray<Component>}
   * @memberof voyage
   */
  components: {},
  /**
   * the nodes being selected
   * @type {Object<Node>}
   * @memberof voyage
   */
  selections: {},
  /**
   * @typedef {ComponentArray} States
   * @prop {object} global the global states
   */
  /**
   * private states of components
   * @type {States}
   * @memberof voyage
   */
  states: {},
  /**
   * @typedef {object} Updaters
   * @prop {function[]} [stateid:number] - when state changes call updaters
   */
  /**
   * the updaters binding each component state
   * @type {ComponentArray<Updaters>}
   * @memberof voyage
   */
  updaters: {},
  /**
   * the macros on element label, eg "@text"
   * @type {object<function>}
   * @memberof voyage
   */
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
  counter: { component: 0 },
  /**
   * select a node or find it in selections
   * @param {number | string} option
   * numbers are considered componentids,
   * strings are considered selectors.
   * @returns {Node | false}
   * false if it doesn't exist
   * @memberof voyage
   */
  select(option) {
    const { check } = voyage.lib;

    const { getNode } = {
      getNode(option) {
        if (check(option, "number")) {
          return document.querySelector(`[componentid="${option}"]`);
        } else {
          const { selections } = voyage;
          return selections[option];
        }
      },
    };

    const node = getNode(option);

    if (node) {
      return node;
    } else {
      return false;
    }
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
    const { is, check, init } = voyage.lib;

    let { updaters, components } = voyage;
    const { bindUpdater } = {
      bindUpdater(componentid, stateid, updater) {
        if (is(components[componentid].status, "creating")) {
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
    } else if (check(options[0], "object")) {
      if (is(options[0].componentid, "global")) {
        const [globalState, updater] = options;
        const { stateid } = globalState;
        bindUpdater("global", stateid, updater);
      } else {
        const [state, updater] = options;
        const { componentid, stateid } = state;
        bindUpdater(componentid, stateid, updater);
      }
    }
  },
  /**
   * convert a component fn to a node
   * @param {number} componentid
   * @returns {Node}
   * @memberof voyage
   */
  call(componentid) {
    const { assign } = Object;

    let { info } = voyage;
    assign(info, { componentid });

    let { components } = voyage;
    components[componentid].stateid = 0;
    const { component, properties } = components[componentid];
    const node = component(properties);
    node.setAttribute("componentid", componentid);

    return node;
  },
  /**
   * @typedef {object} voyageElement
   * @prop {string | function} type
   * string type refers to its html tag. fn type refers to its component.
   * @prop {object} labels
   * will be considered properties if the type is a fn.
   * @prop {voyageElement[] | string} content
   * will be ignored if the type is a fn.
   */
  /**
   * @param  {...any} options - currently support json
   * @returns {voyageElement}
   * @memberof voyage
   */
  compile(...options) {
    const { is, check, use } = voyage.lib;
    const { push } = use("push");
    const { json } = {
      json(options) {
        const { recursion } = {
          recursion(arr) {
            let element = { type: "div", labels: {}, content: [] };
            let strings = [];
            for (const item of arr) {
              if (check(item, "string")) {
                push(strings, item);
              } else if (check(item, "function")) {
                element.type = item;
              } else if (check(item, Array)) {
                push(element.content, recursion(item));
              } else if (check(item, "object")) {
                element.labels = item;
              }
            }
            if (check(element.type, "function")) {
              if (is(strings.length, 1)) {
                element.content = strings[0];
              }
            } else if (check(element.type, "string")) {
              if (is(strings.length, 1)) {
                element.type = strings[0];
              } else if (is(strings.length, 2)) {
                element.type = strings[0];
                element.content = strings[1];
              }
            }
            return element;
          },
        };
        return recursion(options);
      },
    };
    return json(options);
  },
  create(element) {
    const { call, bind } = voyage;
    const { check, use, has, init, is } = voyage.lib;
    const { join } = use("join");
    const { slice } = use("slice");
    const { recursion } = {
      recursion(element) {
        if (check(element.type, "function")) {
          const { counter } = voyage;
          const componentid = counter.component++;

          const { type: component, labels: properties } = element;

          let { components } = voyage;
          init(components, {
            [componentid]: { component, properties, status: "creating" },
          });
          const node = call(componentid);

          if (has(properties, "$")) {
            const { $: selector } = properties;
            let { selections } = voyage;
            init(selections, { [selector]: node });
          }

          components[componentid].status = "created";
          return node;
        } else if (check(element.type, "string")) {
          let node = document.createElement(element.type);

          const { labels } = element;
          for (const label in labels) {
            const content = labels[label];
            if (is(label, "class") && check(content, Array)) {
              node.className = join(content, " ");
            } else if (is(label, "style") && check(content, "object")) {
              assign(node.style, content);
            } else if (is(label[0], "@")) {
              const { macros } = voyage;
              const event = slice(label, 1);
              if (has(macros, event)) {
                const { [event]: macro } = macros;
                macro(node, content);
              } else {
                node.addEventListener(event, content);
              }
            } else if (is(label, "$")) {
              let { selections } = voyage;
              init(selections, { [content]: node });
            } else if (has(content, "stateid")) {
              const state = content;
              node.setAttribute(label, state.value);

              const { updateLabel } = {
                updateLabel(newValue) {
                  node.setAttribute(label, newValue);
                },
              };

              bind(state, updateLabel);
            } else if (has(content, "calculator")) {
              const { calculator, factors } = content;

              const { updateLabelAfterCalc } = {
                updateLabelAfterCalc() {
                  node.setAttribute(label, calculator());
                },
              };

              updateLabelAfterCalc();

              for (const factor of factors) {
                bind(factor, calculator);
              }
            } else {
              node.setAttribute(label, content);
            }
          }

          if (check(element.content, Array)) {
            for (const child of element.content) {
              node.appendChild(recursion(child));
            }
          } else {
            node.innerText = element.content;
          }
          return node;
        }
      },
    };
    return recursion(element);
  },
  c(...options) {
    const { compile, create } = voyage;
    return create(compile(...options));
  },
  getState(componentid, stateid) {
    const { sync } = voyage.lib;
    const { updateState } = voyage;
    const { assign } = Object;

    const { states } = voyage;

    const { observer } = {
      observer(newValue, oldValue) {
        updateState(componentid, stateid, newValue, oldValue);
      },
    };

    const state = sync(states[componentid], stateid, observer);
    assign(state, { componentid, stateid });

    return state;
  },
  getStates(componentid) {
    const { updateState } = voyage;

    const { states } = voyage;
    const handler = {
      get(states, stateid) {
        const state = states[stateid];
        return state;
      },
      set(states, stateid, newValue) {
        const oldValue = states[stateid];
        states[stateid] = newValue;
        updateState(componentid, stateid, newValue, oldValue);
      },
    };

    const proxy = new Proxy(states[componentid], handler);
    return proxy;
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
    const { is, check, map, init } = voyage.lib;
    const { getState } = voyage;
    const { keys, values } = Object;

    const { refState } = {
      refState(initial) {
        const { info } = voyage;
        const { componentid } = info;

        let stateid;
        if (check(initial, "object")) {
          stateid = keys(initial)[0];
          initial = values(initial)[0];
        } else {
          let { components } = voyage;
          init(components[componentid], { stateid: 0 });
          stateid = components[componentid].stateid++;
        }

        let { states } = voyage;
        init(states, componentid, { [stateid]: initial });

        const state = getState(componentid, stateid);
        return state;
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
    const { is, check, map, init } = voyage.lib;
    const { bind, select, replace, call, ref } = voyage;

    if (is(options.length, 1)) {
      options = options[0];
    }

    const { storeState } = {
      storeState(initial) {
        const { info } = voyage;
        const { componentid } = info;

        const { components } = voyage;
        const { stateid } = components[componentid];

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
    const { is, map, init } = voyage.lib;
    const { getState } = voyage;
    const { keys } = Object;

    const { keepGlobal } = {
      keepGlobal(key, value) {
        let { states } = voyage;
        init(states, "global", key, value);

        return getState("global", key);
      },
    };

    if (is(keys(obj).length, 1)) {
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
  defineStyle(styles, theme) {},
  useTheme(theme) {},
  run(...options) {
    const { init } = voyage.lib;
    const { c } = voyage;
    const { runComponent } = {
      runComponent(options) {
        init(options, { properties: {} });

        const { component, properties, parent } = options;

        const node = c(component, properties);

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
    const { store, c } = voyage;
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
    const combined = c(
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
