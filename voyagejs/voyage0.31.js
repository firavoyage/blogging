/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250117 ~ 20250316 (utc+8)
 *
 * @author firavoyage
 * @version 0.31
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
     * functional programming essential
     *
     * @returns {Proxy<function>}
     * @example
     * const {slice} = use()
     * slice([1,2,3],0,2) //[1,2,3].slice(0,2)
     */
    use() {
      const handler = {
        get(_, method) {
          return {
            [method](obj, ...args) {
              return obj[method](...args);
            },
          }[method];
        },
      };

      return new Proxy({}, handler);
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

      const initKey = function (obj, key, initial) {
        if (lacks(obj, key)) {
          obj[key] = initial;
        }
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

      const iterate = function (begin, end, step) {
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
  },
  /**
   * @typedef {object} Component
   * @prop {"create"|"show"} status
   * @prop {function} component the function that creates this component
   * @prop {object} properties the properties of this component
   * @prop {object} states the states of this component, without proxy
   * @prop {number} stateid the state counter for creating this component
   */
  /**
   * @typedef {number | "global"} Componentid
   */
  /**
   * @typedef {Array} ComponentArray
   * @prop {Component} [componentid: Componentid]
   */
  /**
   * private data of components
   * @type {ComponentArray}
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

      const handleInput = function (e) {
        const value = e.target.value;
        state.v = value;
      };
      node.addEventListener("input", handleInput);
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
  /**
   * @type {object}
   * @prop {number} component
   * the counter of componentid
   * @prop {number} current
   * the componentid of the current component being created
   * @memberof voyage
   */
  counter: { component: 0, componentid: 0 },
  /**
   * select a node or find it in selections
   * @param {number | string} query
   * numbers are considered componentids,
   * strings are considered selectors.
   * @returns {Node | false}
   * false if it doesn't exist
   * @memberof voyage
   */
  select(query) {
    const { check } = voyage.lib;

    const getNode = function (query) {
      if (check(query, "number")) {
        return document.querySelector(`[componentid="${query}"]`);
      } else {
        const { selections } = voyage;
        return selections[query];
      }
    };

    return getNode(query) || false;
  },
  /**
   * replace a node
   * @param {Node} node
   * @param {Node} previousNode
   * @returns {void}
   */
  replace(node, previousNode) {
    previousNode.parentNode.replaceChild(node, previousNode);
  },
  /**
   * bind an updater for a state
   * @param {State} state
   * @param {function} updater
   */
  bind(state, updater) {
    const { is, init } = voyage.lib;

    let { components, updaters } = voyage;
    const { componentid, stateid } = state;
    if (is(components[componentid].status, "create")) {
      init(updaters, componentid, [stateid]);
      updaters[componentid][stateid].push(updater);
    }
  },
  /**
   * convert a component fn to a node
   * @param {number} componentid
   * @returns {Node}
   * @memberof voyage
   */
  call(componentid) {
    let { counter } = voyage;
    counter.current = componentid;

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
   * string means html tag. fn means component.
   * @prop {object} labels
   * or properties for a component.
   * @prop {Array <voyageElement | string>} content
   * ignored if it's a component. string means text node.
   */
  /**
   * @param  {...any} options - currently support json
   * @returns {voyageElement}
   * @memberof voyage
   */
  compile(...options) {
    const { check, use } = voyage.lib;
    const { push } = use();
    const json = function (options) {
      const recursion = function (arr) {
        let element = { type: "div", labels: {}, content: [] };
        let isFirstString = true;
        for (const item of arr) {
          if (check(item, "string")) {
            if (isFirstString) {
              element.type = item;
              isFirstString = false;
            } else {
              push(element.content, item);
            }
          } else if (check(item, "function")) {
            element.type = item;
          } else if (check(item, Array)) {
            push(element.content, recursion(item));
          } else if (check(item, "object")) {
            element.labels = item;
          }
        }
        return element;
      };
      return recursion(options);
    };
    return json(options);
  },
  /**
   *
   * @param {voyageElement} element
   * @returns {Node}
   * @memberof voyage
   */
  create(element) {
    const { call, bind } = voyage;
    const { check, use, has, init, is } = voyage.lib;
    const { join, slice } = use();

    const recursion = function recursion(element) {
      if (check(element.type, "function")) {
        let { counter } = voyage;
        const componentid = counter.component++;

        const { type: component, labels: properties } = element;

        let { components } = voyage;
        init(components, {
          [componentid]: { component, properties, status: "create" },
        });
        const node = call(componentid);

        if (has(properties, "$")) {
          const { $: selector } = properties;
          let { selections } = voyage;
          init(selections, { [selector]: node });
        }

        components[componentid].status = "show";
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

            const labelUpdater = function (newValue) {
              node.setAttribute(label, newValue);
            };

            bind(state, labelUpdater);
          } else if (has(content, "calculator")) {
            const { calculator, factors } = content;

            const labelCalculator = function () {
              node.setAttribute(label, calculator());
            };

            for (const state of factors) {
              bind(state, labelCalculator);
            }
          } else {
            node.setAttribute(label, content);
          }
        }

        for (const child of element.content) {
          if (check(child, "string")) {
            node.appendChild(document.createTextNode(element.content));
          } else if (check(child, "object")) {
            node.appendChild(recursion(child));
          }
        }
        return node;
      }
    };
    return recursion(element);
  },
  /**
   * alias of create(compile(_))
   * @param  {...any} _
   * @returns {Node}
   * @memberof voyage
   */
  c(..._) {
    const { compile, create } = voyage;
    return create(compile(..._));
  },
  /**
   * @typedef {object} State
   * @prop {Componentid} componentid
   * @prop {Key} stateid
   * @prop {*} value - the value with getter and setter
   * @prop {*} v - alias of value
   */
  /**
   * apply new value to a state, call updaters
   * @param {State} state
   * @param {*} newValue
   * @param {*} oldValue
   * @returns {void}
   * @memberof voyage
   */
  apply(state, newValue, oldValue) {
    const { init } = voyage.lib;

    const { updaters } = voyage;
    const { componentid, stateid } = state;

    init(updaters, componentid, [stateid]);
    for (const updater of updaters[componentid][stateid]) {
      updater(newValue, oldValue);
    }
  },
  /**
   * create a state, without binding any updater
   * @param {*} [initial] - the initial value
   * @param {Key} [stateid] - if not specified, use counter
   * @returns {State}
   * @memberof voyage
   */
  ref(initial, stateid) {
    const { check, init } = voyage.lib;
    const { apply } = voyage;
    const { defineProperty } = Object;

    const { current: componentid } = voyage.counter;

    let { components } = voyage;
    if (!check(stateid)) {
      init(components[componentid], { stateid: 0 });
      stateid = components[componentid].stateid++;
    }
    init(components, componentid, "states", { [stateid]: initial });

    const state = { componentid, stateid };

    const handler = {
      get() {
        return components[componentid].states[stateid];
      },
      set(newValue) {
        const oldValue = components[componentid].states[stateid];
        components[componentid].states[stateid] = newValue;
        apply(state, newValue, oldValue);
      },
    };
    const aliases = ["v", "value"];
    for (const alias of aliases) {
      defineProperty(state, alias, handler);
    }

    return state;
  },
  /**
   * create a state, update the component if it changes
   * @param {*} [initial] - the initial value
   * @param {Key} [stateid] - if not specified, use counter
   * @returns {State}
   * @memberof voyage
   */
  store(initial, stateid) {
    const { check } = voyage.lib;
    const { bind, call, select, replace, ref } = voyage;

    const { current: componentid } = voyage.counter;
    if (!check(stateid)) {
      const { components } = voyage;
      stateid = components[componentid].stateid++;
    }

    const state = ref(initial, stateid);

    const componentUpdater = function () {
      const updatedNode = call(componentid);
      const node = select(componentid);
      replace(updatedNode, node);
    };
    bind(state, componentUpdater);

    return state;
  },
  /**
   * create a global state
   * @param {*} [initial] - the initial value
   * @param {Key} stateid - global state must have an id
   * @returns {State}
   * @memberof voyage
   */
  keep(initial, stateid) {
    const { init } = voyage.lib;
    const { apply } = voyage;
    const { defineProperty } = Object;

    let { components } = voyage;
    init(components, "global", "states", { [stateid]: initial });

    const state = { componentid: "global", stateid };

    const handler = {
      get() {
        return components["global"].states[stateid];
      },
      set(newValue) {
        const oldValue = components["global"].states[stateid];
        components["global"].states[stateid] = newValue;
        apply(state, newValue, oldValue);
      },
    };
    const aliases = ["v", "value"];
    for (const alias of aliases) {
      defineProperty(state, alias, handler);
    }

    return state;
  },
  /**
   * append a component on a parent
   */
  show({ component, properties, parent }) {
    const { c } = voyage;
    const node = c(component, properties);
    parent.appendChild(node);
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
    let count = ref(0, "count");
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
    let count = ref(0, "count");
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
const { show } = voyage;

show({ component: counter, parent: document.body });
show({ component: counterKey, parent: document.body });
show({
  component: hello,
  properties: { $: "abc", msg: "welcome to hotel california" },
  parent: document.body,
});
