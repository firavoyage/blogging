/**
 * @file
 * the js library of voyage web framework
 */
/**
 * all data and methods
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
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a is equal to b
     * @memberof voyage.lib
     */
    is(a, b) {
      return a === b;
    },
    /**
     * strict equality test
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a is not equal to b
     * @memberof voyage.lib
     */
    isnt(a, b) {
      return a !== b;
    },
    /**
     * check whether an object has certain key or an array has certain index
     * @param {object} obj - the object or array
     * @param {string | number} key - the key or index
     * @returns {boolean} whether the object has such key or the array has such index
     * @memberof voyage.lib
     */
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
    /**
     * check whether an object lacks certain key or an array lacks certain index
     * @param {object} obj - the object or array
     * @param {string | number} key - the key or index
     * @returns {boolean} whether the object lacks such key or the array lacks such index
     * @memberof lib
     */
    lacks(obj, key) {
      const { has } = voyage.lib;
      return !has(obj, key);
    },
    /**
     * base of functional programming
     * @param {function} constructor - the constructor
     * @returns {Proxy}
     * @example
     * const {slice} = Array
     * console.log(slice([1,2,3],0,2))
     * //instead of
     * console.log([1,2,3].slice(0,2))
     */
    include(constructor) {
      const handler = {
        get(obj, prop) {
          const { fn } = {
            fn(...params) {
              return obj.prototype[prop].call(...params);
            },
          };
          return fn;
        },
      };
      const proxy = new Proxy(constructor, handler);

      return proxy;
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
     * @typedef {object} SeekResult
     * @prop {*} result - the result of seeking
     */
    /**
     * get a prop of an obj by its path
     * @param {object} obj - the object
     * @param  {string[]} path - the path
     * @returns {SeekResult|false} an array containing the prop
     * or false if the path doesnt exist
     */
    seek(obj, ...path) {
      const { lacks } = voyage.lib;

      let current = obj;
      for (const key of path) {
        if (lacks(current, key)) {
          return false;
        } else {
          current = current[key];
        }
      }
      const seekResult = { result: current };
      return seekResult;
    },
    /**
     * set a prop in an obj on a certain path
     * @param {*} value - the value to be set
     * @param {object} obj - the object
     * @param {string[]} path - the path in the object
     * @returns {object} the updated object
     */
    set(value, obj, ...path) {
      const { lacks, include } = voyage.lib;
      const { slice } = include(Array);
      let current = obj;
      for (const key of slice(path, 0, -1)) {
        if (lacks(current, key)) {
          current[key] = {};
        }
        current = current[key];
      }
      current = value;
      return obj;
    },
    /**
     * check type or type equality
     * @param {*} a - value needs to be checked
     * @param {string|function} [b] - type or constructor
     * @returns {string|boolean} type or equality
     * > calculate a value
     * >
     * > if a is undefined or null the value is false
     * >
     * > otherwise it's typeof a
     * >
     * > if b is not given return the value
     * >
     * > if b is given as a string
     * >
     * > then return true if b is the same as the value
     * >
     * > if b is given as a function
     * >
     * > then return a instance of b
     * @example
     * check(undefined) //false
     * check(null) //false
     * check(undefined,false) //true
     * check(undefined,"undefined") //false
     * check(false) //"boolean"
     * check(1,"number") //true
     * check("number") //"string"
     * check([],Array) //true
     * check([],"object") //true
     * check([],"array") //false
     * @memberof voyage.lib
     */
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
    /**
     * get unique identifier for each key. same key same identifier.
     * @param {string} key
     * @returns {string} hash+key
     * @memberof voyage.lib
     */
    symbol(key) {
      const symbolSha256 =
        "b76a7ca153c24671658335bbd08946350ffc621fa1c516e7123095d4ffd5c581";
      return symbolSha256 + key;
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
     * get a new function with some params filled in the old one. keep the name unchanged.
     * @param {function} [fn] - the function to be used
     * @param  {...any} [params]
     * @returns {function|string} the function with some params filled
     * @example
     * use() //symbol("placeholder")
     * use(fn,1,2) //function(){fn(1,2)}
     * use(fn,use(),1) //function(...p){fn(p[0],1)}
     * use(fn,"foo",use(),"bar",use()) //function(...p){fn("foo",p[0],"bar",p[1])}
     * @memberof voyage.lib
     */
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
     * @param {*} key - the key in the object refering to a value
     * @param {SyncObserver} observer - the callback fn when obj[key] changes
     * @returns {SyncReactive} the reactive object
     * @memberof voyage.lib
     */
    sync(obj, key, observer) {
      const { isnt, map, use } = voyage.lib;
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
      map(aliases, use(defineProperty, reactive, use(), handler));
      // for (const alias of aliases) {
      //   defineProperty(reactive, alias, agent);
      // }
      return reactive;
    },
    /**
     * reset a key to 0 in a counter object
     * @param {object} counter - the counter object
     * @param {string} key - the key to be reset
     * @returns {void}
     * @memberof voyage.lib
     */
    reset(counter, key) {
      counter[key] = 0;
    },
    /**
     * count a key in a counter object
     * @param {object} counter - the counter object
     * @param {string} key - the key to be counted
     * @returns {number} current value, the value before increment
     * @memberof voyage.lib
     */
    count(counter, key) {
      const { init } = voyage.lib;
      init(counter, { [key]: 0 });
      const current = counter[key];
      counter[key]++;
      return current;
    },
  },
  /**
   * private data in creating components
   * @type {object}
   * @prop {number} componentid the componentid refering the current component being created
   * @memberof voyage
   */
  info: {},
  /**
   * @typedef {object} Component
   * @prop {boolean} created whether this componentid is created at least once
   * @prop {function} component the function that creates this component
   * @prop {object} properties the properties of this component
   * @prop {number} stateid the state count used privately in creating this component
   */
  /**
   * private data of components
   * @type {Component[]}
   * @memberof voyage
   */
  components: {},
  /**
   * @typedef {object} Selection
   * @prop {Node} node the node selected
   * @prop {number} [componentid] the componentid of this node, if it's a component
   */
  /**
   * private data of nodes selected and their componentids
   * @type {Selection[]}
   * @memberof voyage
   */
  selections: {},
  /**
   * @typedef {object} States
   * @prop {object} global the global states
   * @prop {object} [componentid:number] the states of components
   */
  /**
   * private states of components
   * @type {States}
   * @memberof voyage
   */
  states: { global: {} },
  /**
   * some calculation results of pure functions
   * ref by memorize()
   * @type {object}
   * @memberof voyage
   */
  memo: {},
  /**
   *
   */
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
  /**
   * memory a pure function with certain params.
   * functions must have a different names.
   * the params will be object key so object is not allowed.
   * @param {function} fn - the function to be memorized
   * @param  {string[]} params - the params of the fn
   * @returns {*} the calculation result
   */
  memorize(fn, ...params) {
    const { seek, set } = voyage.lib;

    const { memo } = voyage;
    const { name } = fn;
    const precalculation = seek(memo, name, ...params);

    let result;
    if (precalculation) {
      result = precalculation.result;
    } else {
      const calculation = fn(...params);
      set(calculation, memo, name, ...params);
      result = calculation;
    }
    return result;
  },
  select(option) {
    const { check } = voyage.lib;
    const { remove } = voyage;

    const { fromSelection, byComponentid } = {
      fromSelection(selection) {
        const { selections } = voyage;
        const { node } = selections[selection];
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
    let { components, states, updaters } = voyage;

    components[componentid] = false;
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
    const { is, check, init } = voyage.lib;

    let { updaters, components } = voyage;
    const { bindUpdater } = {
      bindUpdater(componentid, stateid, updater) {
        if (!components[componentid].created) {
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
  call(componentid) {
    const { reset } = voyage.lib;
    const { assign: give } = Object;

    let { info } = voyage;
    give(info, { componentid });
    let { components } = voyage;
    reset(components[componentid], "stateid");

    const { component, properties } = components[componentid];
    const node = component(properties);
    node.setAttribute("componentid", componentid);

    return node;
  },
  create(...options) {
    const { is, isnt, check, has, lacks, init, each, use, count, include } =
      voyage.lib;
    const { bind, call } = voyage;
    const { assign: give } = Object;
    const { slice } = include(String);

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

        let { components } = voyage;
        init(components, {
          [componentid]: { component, properties, created: false },
        });

        const node = call(componentid);

        if (has(properties, "$")) {
          const { $: selector } = properties;

          let { selections } = voyage;
          init(selections, selector);
          give(selections[selector], { node, componentid });
        }

        components[componentid].created = true;

        return node;
      },
      createNode(element) {
        const { macros } = voyage;

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
            const event = slice(label, 1);

            if (has(macros, event)) {
              const { [event]: macro } = macros;
              macro(node, content);
            } else {
              node.addEventListener(event, content);
            }
          } else if (is(label, "$")) {
            let { selections } = voyage;
            init(selections, content, { node });
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
    const { memorize, getState, getStates } = voyage;

    if (is(options.length, 1)) {
      const [option] = options;
      let componentid;

      if (check(option, "string")) {
        const { selections } = voyage;
        componentid = selections[option].componentid;
      } else {
        componentid = option;
      }

      return memorize(getStates, componentid);
    } else {
      const [componentid, stateid] = options;
      return memorize(getState, componentid, stateid);
    }
  },
  getState(componentid, stateid) {
    const { sync, use } = voyage.lib;
    const { updateState } = voyage;
    const { assign: give } = Object;

    const { states } = voyage;
    const state = sync(
      states[componentid],
      stateid,
      use(updateState, componentid, stateid, use(), use())
    );
    give(state, { componentid, stateid });

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
  lookup(key) {
    const { memorize, getState } = voyage;

    const reactiveState = memorize(getState, "global", key);
    give(reactiveState, { key });
    return reactiveState;
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
    const { is, check, map, init, count } = voyage.lib;
    const { memorize, getState } = voyage;
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
          stateid = count(components[componentid], "stateid");
        }

        let { states } = voyage;
        init(states, componentid, { [stateid]: initial });

        const reactiveState = memorize(getState, componentid, stateid);
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
    const { is, map } = voyage.lib;
    const { memorize, getState } = voyage;
    const { keys } = Object;

    const { keepGlobal } = {
      keepGlobal(key, value) {
        let { states } = voyage;
        states["global"][key] = value;

        return memorize(getState, "global", key);
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
@todo
roadmap
- complete todos for basic features
- svelte examples as unit tests
- chakra ui as a real world design system
- material design 3 for elegance
- google reader (google books classic) for retro
- sr component library for fun

@todo
add jsdoc comments
- at param {} name
- at return {} name
- function poly
- separate public and private function
- clearer method name
- less typing
single responsibility principle
- remove excessive fn poly
add styling macro
- learn from tailwind sass less stylus
- ask mistral css in js methods to define events like hover in js
- which inline style couldnt support
- `@style` macro
- `@style:"opacity-low h2 hover:opacity-high"`
- work with class and css in js
- `@theme` macro
- `@theme:"myTheme"`
- apply theme to its children
define style
- defineStyle({"del":"opacity-low hover:opacity-medium"},"paragraph")
- del is a css selector, opacity-low is macro, theme namespace is optional
- defineMacro({"opacity-low":{"opacity":"0.5"}},"myTheme")
- key is macro and value is css attr and value
- defineMacro({"opacity":function opacity(p){...}},"myTheme")
- opacity-1-2 -> opacity(1,2)
theme namespace macro
- div `@theme="myTheme"`
- rerender all children with `@style` and set them to myTheme
define more macros
- learn from jquery react alpine mithril svelte
- `@if` `@show`
- macro(node,state) | macro(node,content)
convert html dialects to voyage element
- ask mistral pug alternatives
- translate(words,lang) -> element
- from html pug etc.
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

@version 0.27 20241212
change typedef naming
- from various naming methods to
- AaBbCc
change seek behavior
- return SeekResult
- {result:...}
- precalculation.result
add examples to lib init
- case when init has no effect
change get state behavior
- from getReactiveState
- to getState(cid,sid) and getStates(cid)
revise fn get
- from memo.getReactiveState ...
- to memorize(getStates,cid)

@version 0.26 20241210
separate objects and arrays
- from info
- to info components and selections
- states stay unchanged
- because states["global"] acts the same as states[cid]
remove voyage.reactive
- seem awkward and redundant. remove all ref.
- tradeoff of readability. yet badly implemented.
- rewrite this when needed in the future.
extract logic
- fn get reactive state
- instead of redundant use sync
change reactive to memo
- voyage.memo
- some calculation results of pure functions
- fn memorize
- get pre calc result or calc
seek fn
- on voyage.lib
- seek(obj,...path)
- success -> [item]
- failed -> false
set fn
- on voyage.lib
- void
- set(value,obj,...path)
single element array
- typedef
rename some words
- on obj define prop
- from "agent" to "handler"
fn include 
- to implement functional programming
- on voyage.lib
- {slice} = include(Array)
- slice([],...)
- instead of [].slice(...)

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
