/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250321 ~ (utc+8)
 *
 * @author firavoyage
 * @version 0.33
 * @since 0.1 initiated on 20240806
 * @see changelog.md
 */
/**
 * methods and states
 * @namespace voyage
 */
let voyage = {
  /**
   * some pure fn
   * @namespace lib
   * @memberof voyage
   */
  lib: {
    /**
     * strict equality test. put awkward === into an abstraction.
     *
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a equals b
     */
    is(a, b) {
      return a === b;
    },
    /**
     * strict inequality test
     * @param {*} a
     * @param {*} b
     * @returns {boolean} whether a is not equal to b
     */
    isnt(a, b) {
      return a !== b;
    },
    /**
     * a proper key in an object
     * @typedef {string|symbol|boolean|number|bigint} Key
     */
    /**
     * has own property
     *
     * @param {object} obj - the object
     * @param {Key} key - the key
     * @returns {boolean}
     *
     * an object: whether the key exists
     *
     * not an object: false
     *
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
     * type check a value
     *
     * @param {*} value - value to be checked
     * @param {string|function} [type] - type (or a constructor)
     * @returns {string|boolean}
     *
     * invalid value (undefined or null): false
     *
     * valid value & no type given: typeof value
     *
     * valid value & type: equals type or instanceof type
     *
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
     *
     * one param: end
     *
     * two params: begin, end
     *
     * three params: begin, end, step
     *
     * begin defaults to 0,
     *
     * step defaults to 1 if begin < end, otherwise -1
     *
     * @param {number} begin - first param
     * @param {number} [end] - second param
     * @param {number} [step] - third param
     * @returns {Iterator} the iterator
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
     * functional programming essential
     *
     * @returns {Proxy<function>}
     * @example
     * const {slice} = use(Array)
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
  },
  components: {},
  counter: {},
  /**
   * @typedef {object} Element
   * @prop {string|function} type
   * string means html tag. fn means component.
   * @prop {object} labels
   * or properties for a component.
   * @prop {Array<Element|string>} content
   * ignored if it's a component. string means text node.
   */
  /**
   * @param  {...*} options - currently only support json
   * @returns {Element}
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
   * @param {Element} element
   * @returns {Node}
   */
  create(element) {
    const { render, bind } = voyage;
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
        const node = render(componentid);

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
          const value = labels[label];
          if (is(label, "class") || is(label, "className")) {
            if (check(value, Array)) {
              node.className = join(value, " ");
            } else {
              node.className = value;
            }
          } else if (is(label, "style") && check(value, "object")) {
            assign(node.style, value);
          } else if (is(label[0], "@")) {
            const { macros } = voyage;
            const event = slice(label, 1);
            if (has(macros, event)) {
              const { [event]: macro } = macros;
              macro(node, value);
            } else {
              node.addEventListener(event, value);
            }
          } else if (is(label, "$")) {
            let { selections } = voyage;
            init(selections, { [value]: node });
          } else if (has(value, "stateid")) {
            const state = value;
            node.setAttribute(label, state.value);

            const labelUpdater = function (newValue) {
              node.setAttribute(label, newValue);
            };

            bind(labelUpdater, state);
          } else if (has(value, "calculator")) {
            const { calculator, factors } = value;

            const labelCalculator = function () {
              node.setAttribute(label, calculator());
            };

            for (const state of factors) {
              bind(labelCalculator, state);
            }
          } else {
            node.setAttribute(label, value);
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
   */
  c(..._) {
    const { compile, create } = voyage;
    return create(compile(..._));
  },
  /**
   * @typedef {function} Prop
   *
   */
  /**
   * declare props of a component
   * @param {object} props
   * @returns {object<Prop>}
   */
  p(props) {},
  /**
   * manage side effects
   * @param {function} effect
   * @returns {void}
   */
  e(effect) {},
  t(...template) {},
  h() {},
};

let examples = {
  HelloWorld() {
    const { p, t } = voyage;
    const { name } = p({ name: "world" });
    return ["div", t`hello ${name}`];
  },
  Label() {
    const { p, t } = voyage;
    const { name, src } = p();
    return ["img", { src, alt: t`${name} dancing` }];
  },
  Html() {
    const { p, h } = voyage;
    const { html } = p({ html: `here's some <strong>HTML!!!</strong>` });
    return ["p", h(html)];
  },
  LegacyCounter() {
    const { p } = voyage;
    const { count } = p({ count: 0 });
    return [
      ["button", { "@click": () => count(count() - 1) }, "-"],
      ["input", { type: "text", "@value": count }],
      ["button", { "@click": () => count(count() + 1) }, "+"],
    ];
  },
  Counter() {
    const { p, t } = voyage;
    const { count } = p({ count: 0 });
    return [
      "button",
      {
        "@click": () => {
          count(count() + 1);
        },
      },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`,
    ];
  },
  DerivedCounter() {
    const { p, m, t } = voyage;
    const { count } = p({ count: 0 });
    const doubled = m(() => count() * 2);
    const quadrupled = m(() => doubled() * 2);
    return [
      [
        "button",
        {
          "@click": () => {
            count(count() + 1);
          },
        },
        t`Count: ${count}`,
      ],
      ["p", t`${count} * 2 = ${doubled}`],
      ["p", t`${doubled} * 2 = ${quadrupled}`],
    ];
  },
  SafeCounter() {
    const { p, e, t, h } = voyage;
    const { count } = p({ count: 0 });
    e(() => {
      if (count() >= 10) {
        console.log(`count is dangerously high!`);
        count(9);
      }
    });
    const { button } = h();
    return button(
      {
        "@click": () => {
          count(count() + 1);
        },
      },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`
    );
  },
  IncreasingCounter() {
    const { p, e, t } = voyage;
    const { count } = p({ count: 0 });
    e(() => {
      setInterval(() => {
        count(count() + 1);
      }, 1000);
    });
    e(() => console.log(count()));
    return ["p", t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`];
  },
  Conditional() {
    const { p, t, show } = voyage;
    const { x } = p({ x: 7 });
    return () =>
      show(
        x() > 10,
        t`${x} is greater than 10`,
        x() < 5,
        t`${x} is less than 5`,
        t`${x} is between 5 and 10`
      );
  },
  List() {
    const { p, h, t, each } = voyage;
    const cats = [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];
    const { h1, ul, li, a } = h();
    return [
      h1("The Famous Cats of YouTube"),
      ul(
        each(cats, ({ id, name }) => [
          li(
            a(
              {
                target: "_blank",
                rel: "noreferrer",
                href: t`https://www.youtube.com/watch?v=${id}`,
              },
              t`${i + 1}: ${name}`
            )
          ),
        ])
      ),
    ];
  },
};
