/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250513 ~ (utc+8)
 *
 * @author firavoyage
 * @version 0.37
 * @since 0.1 initiated on 20240806
 * @see changelog.md
 */
/**
 * data and functions
 * @namespace voyage
 */
let voyage = {
  /**
   * extended js standard library
   * @namespace lib
   * @memberof voyage
   */
  lib: {
    /**
     * a proper key in an object
     * @typedef {string|symbol|number|boolean} Key
     */
    /**
     * has own property (false if it's not an object)
     * @param {object} obj - the object
     * @param {Key} key - the key
     * @returns {boolean}
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
     * check if a value is valid
     * @param {*} value - value to be checked
     * @param {string|function} [type] - type (or a constructor)
     * @returns {boolean}
     * one param: false if value is undefined or null, otherwise true
     * two params (type: string): typeof value === type
     * two params (type: fn): value instanceof type
     */
    check(value, type) {
      if (type === undefined) {
        if (value === undefined || value === null) {
          return false;
        } else {
          return true;
        }
      } else {
        if (typeof type == "string") {
          return typeof value == type;
        } else if (typeof type == "function") {
          return value instanceof type;
        }
      }
    },
    /**
     * generate iterator in `for of` loop
     *
     * one param: [0, end, 1]
     * two params: [begin, end, 1]
     * three params: [begin, end, step]
     * @param {number} begin
     * @param {number} [end]
     * @param {number} [step]
     * @returns {Iterator}
     */
    each(begin, end, step) {
      const { check } = voyage.lib;

      if (!check(end)) {
        end = begin;
        begin = 0;
      }
      if (!check(step)) {
        step = 1;
      }

      const iterate = (begin, end, step) => {
        let index = begin;
        const iterator = {
          next() {
            if ((index - end) * step <= 0) {
              const value = index;
              index += step;
              return { value, done: false };
            } else {
              return { value: false, done: true };
            }
          },
          [Symbol.iterator]() {
            return iterator;
          },
        };
        return iterator;
      };
      return iterate(begin, end, step);
    },
    /**
     * pop an item out of a set
     * @param {Set} set
     * @returns {*}
     */
    pop(set) {
      // Get the first value from the Set's iterator
      const value = set.values().next().value;

      // Remove the value from the Set
      set.delete(value);

      return value;
    },
    /**
     * process for each item in a set
     * @param {Set} set
     * @param {function} fn
     */
    map(set, fn) {
      for (const _ of set) {
        fn(_);
      }
    },
  },
  /**
   * private methods
   * @namespace methods
   * @memberof voyage
   */
  methods: {
    /**
     * @typedef {string|number|boolean} Text
     */
    /**
     * convert string like stuff to text node
     * @param {Node|Text} node
     * @returns {Node}
     */
    handleText(node) {
      const { check } = voyage.lib;
      return check(node, Node) ? node : document.createTextNode(node);
    },
    /**
     * @typedef {Array<Node|Text>} Fragment
     */
    /**
     * append a node to a parent, both can be fragment
     * @param {Node|Text|Fragment} node - node to insert, text will be handled
     * @param {Node|Fragment} parent - where the node will be appended
     * @returns {Node|Fragment} the node without unhandled text
     */
    append(node, parent) {
      const { check } = voyage.lib;
      const { handleText } = voyage.methods;

      if (check(node, Array)) {
        node = node.map(handleText);
      } else {
        node = handleText(node);
      }

      if (check(node, Array)) {
        if (check(parent, Array)) {
          parent.push(...node);
        } else {
          node.map((_) => parent.appendChild(_));
        }
      } else {
        if (check(parent, Array)) {
          parent.push(node);
        } else {
          parent.appendChild(node);
        }
      }

      return node;
    },
    /**
     * insert a node or a fragment before a mounted sibling
     * @param {Node|Text|Fragment} node - node to insert, text will be handled
     * @param {Node} sibling - what the node will be inserted before
     * @param {Fragment} [parent] - for insertion before mounting
     * @returns {Node|Fragment} the node without unhandled text
     */
    insert(node, sibling, parent) {
      const { check } = voyage.lib;
      const { handleText } = voyage.methods;

      if (check(node, Array)) {
        node = node.map(handleText);
      } else {
        node = handleText(node);
      }

      parent = sibling.parentNode ? sibling.parentNode : parent;

      if (check(parent, Array)) {
        const index = parent.indexOf(sibling);

        if (check(node, Array)) {
          parent.splice(index, 0, ...node);
        } else {
          parent.splice(index, 0, node);
        }
      } else {
        if (check(node, Array)) {
          node.map((_) => parent.insertBefore(_, sibling));
        } else {
          parent.insertBefore(node, sibling);
        }
      }

      return node;
    },
    /**
     * remove a node or a fragment
     * @param {Node|Fragment} node - the node to be removed
     */
    remove(node) {
      const { check } = voyage.lib;

      if (check(node, Node)) {
        node.parentNode.removeChild(node);
      } else if (check(node, Array)) {
        node.map((_) => _.parentNode.removeChild(_));
      }
    },
    /**
     *
     * @param  {Array<string|object|Array|Node|function>} _
     * @returns {Node|Fragment}
     */
    create(_) {
      const { effect } = voyage;
      const { check, has } = voyage.lib;
      const { create, append, insert, remove } = voyage.methods;

      let tag = "",
        attrs = {},
        content = [];

      // determine tag, attrs and content by template
      if (check(_[0], "string")) {
        if (
          check(_[1], "object") &&
          !check(_[1], Node) &&
          !check(_[1], Array)
        ) {
          [tag, attrs, ...content] = _;
        } else {
          [tag, ...content] = _;
        }
      } else {
        content = _;
      }

      const node = tag == "" ? [] : document.createElement(tag);

      // define attrs
      for (const attr in attrs) {
        const content = attrs[attr];
        if (attr == "class" && check(content, Array)) {
          content.map((_) => {
            if (check(_, "function")) {
              effect(() => {
                const value = _();
                node.classList.add(value);
                return () => node.classList.remove(value);
              });
            } else {
              node.classList.add(_);
            }
          });
        } else if (attr == "style" && check(content, "object")) {
          Object.entries(content).map(([prop, value]) => {
            if (check(value, "function")) {
              effect(() => {
                node.style[prop] = value();
              });
            } else {
              node.style[prop] = value;
            }
          });
        } else if (attr[0] == "@") {
          const event = attr.slice(1);
          const macros = {
            ref() {
              content(node);
            },
            value() {
              effect(() => {
                node.value = content();
              });
              node.addEventListener("input", () => {
                content(node.value);
              });
            },
          };
          if (has(macros, event)) {
            macros[event]();
          } else {
            node.addEventListener(event, content);
          }
        } else {
          if (check(content, "function")) {
            effect(() => {
              node.setAttribute(attr, content());
            });
          } else {
            node.setAttribute(attr, content);
          }
        }
      }

      // define content
      for (const child of content) {
        if (check(child, Array)) {
          // element
          append(create(child), node);
        } else if (check(child, "function")) {
          // dynamic content
          const _ = document.createComment("");
          append(_, node);
          effect(() => {
            const result = child();
            let fragment;
            if (check(result, Array)) {
              // template
              fragment = insert(create(result), _, node);
            } else {
              // node or text
              fragment = insert(result, _, node);
            }
            return () => remove(fragment);
          });
        } else {
          // node or text
          append(child, node);
        }
      }

      return node;
    },
    /**
     * render a component to node
     * @param {function} component
     * @param {object} props
     * @returns {Node}
     */
    render(component, props) {
      const { check, pop } = voyage.lib;
      const { create, runEffect } = voyage.methods;

      const { info } = voyage;

      const passedProps = info.passedProps;

      info.passedProps = check(props, "object") ? props : {};
      info.status = "creating";
      let element = component();

      let node;
      if (check(element, Node)) {
        node = element;
      } else if (check(element, "function")) {
        // let it be the only child of a document fragment
        element = [element];
        node = create(element);
      } else {
        node = create(element);
      }

      info.status = "created";
      while (info.lifecycle.created.size != 0) {
        const id = pop(info.lifecycle.created);
        runEffect(id);
      }

      info.passedProps = passedProps;

      return node;
    },
    /**
     * apply prop change to an effect
     * @param {EffectId} id the effect id
     */
    runEffect(id) {
      const { map, check } = voyage.lib;
      const { info } = voyage;

      const cleanupEffect = (id) => {
        if (info.effects.has(id)) {
          const effect = info.effects.get(id);

          if (effect.cleanup) {
            effect.cleanup();
          }
          effect.cleanup = false;

          map(effect.children, (child) => {
            cleanupEffect(child);
            info.effects.delete(child);
          });
          effect.children = new Set();

          effect.deps = new Set();
        }
      };
      cleanupEffect(id);

      const effect = info.effects.get(id);
      const parent = info.parent;

      info.parent = id;

      const result = effect.effect();
      if (check(result, "function")) {
        effect.cleanup = result;
      }

      info.parent = parent;
    },
  },
  /**
   * @typedef {number} PropId
   * the unique id of any prop, start from 0
   */
  /**
   * @typedef {number} EffectId
   * the unique id of any effect, start from 0
   */
  /**
   * @typedef {Object} Effect
   * @prop {function} effect
   * @prop {function|false} cleanup
   * @prop {Set<EffectId>} children nested effect
   * @prop {Set<PropId>} deps dependencies
   */
  /**
   * @type {Object}
   * @prop {Map<EffectId, Effect>} effects
   */
  info: {
    components: {},
    props: new Map(),
    propCount: 0,
    passedProps: {},
    effects: new Map(),
    effectCount: 0,
    parent: undefined,
    status: "creating",
    lifecycle: {
      created: new Set(),
      shown: new Set(),
    },
  },
  props(defaultProps = {}) {
    const { has, check, map } = voyage.lib;
    const { runEffect } = voyage.methods;

    const { info } = voyage;

    /**
     * @param {PropId} id
     * @returns {function} the reactive prop
     */
    const createReactiveProp = (id) => {
      const prop = info.props.get(id);

      const subscribe = (effectId) => {
        prop.subscribers.add(effectId);
        info.effects.get(effectId).deps.add(id);
      };

      const apply = () => {
        map(prop.subscribers, (effectId) => {
          if (
            info.effects.has(effectId) &&
            info.effects.get(effectId).deps.has(id)
          ) {
            runEffect(effectId);
          } else {
            prop.subscribers.delete(effectId);
          }
        });
      };

      return (..._) => {
        if (_.length == 0) {
          if (check(info.parent)) {
            subscribe(info.parent);
          }
          return prop.value;
        } else if (_.length == 1) {
          let newValue = _[0];

          if (check(newValue, "function")) {
            // fn means to compute new value using the previous one
            const result = newValue(prop.value);
            if (result !== undefined) {
              prop.value = result;
            }
            // for undefined result, consider it produce()
          } else {
            prop.value = newValue;
          }

          apply();
        } else if (_.length >= 2) {
          const path = _.slice(0, _.length - 2);
          const lastKey = _[_.length - 2];
          const newValue = _.slice(-1)[0];

          let current = prop.value;
          path.map((key) => {
            current[key] = has(current, key) ? current[key] : {};
            current = current[key];
          });

          if (check(newValue, "function")) {
            // fn means to compute new value using the previous one
            const result = newValue(current[lastKey]);
            if (result !== undefined) {
              current[lastKey] = result;
            }
            // for undefined result, consider it produce()
          } else {
            current[lastKey] = newValue;
          }

          apply();
        }
      };
    };

    const handler = {
      get(_, propName) {
        const { info } = voyage;

        if (check(info.passedProps[propName], "function")) {
          // it's a reactive prop passed down
          return info.passedProps[propName];
        }

        const id = info.propCount++;
        info.props.set(id, {
          value: has(info.passedProps, propName)
            ? info.passedProps[propName]
            : defaultProps[propName],
          subscribers: new Set(),
        });

        return createReactiveProp(id);
      },
    };

    return new Proxy({}, handler);
  },
  effect(effect, when = "created") {
    const { check } = voyage.lib;
    const { runEffect } = voyage.methods;

    const { info } = voyage;
    const id = info.effectCount++;
    info.effects.set(id, {
      effect,
      cleanup: false,
      children: new Set(),
      deps: new Set(),
    });

    if (check(info.parent)) {
      const parent = info.effects.get(info.parent);
      parent.children.add(id);
    }

    const timeline = {
      creating: 0,
      created: 1,
      shown: 2,
    };
    const schedule = timeline[when];
    const now = timeline[info.status];

    if (now < schedule) {
      info.lifecycle[when].add(id);
    } else {
      runEffect(id);
    }
  },
  t(...text) {
    const { each, check } = voyage.lib;
    const [strings, ...props] = text;
    return () => {
      let result = [];
      for (const index of each(strings.length - 1)) {
        result.push(strings[index]);
        if (index != strings.length - 1) {
          if (check(props[index], "function")) {
            result.push(props[index]());
          } else {
            result.push(props[index]);
          }
        }
      }
      return result.join("");
    };
  },
  h() {
    const { has } = voyage.lib;
    const { create, render } = voyage.methods;

    const { info } = voyage;
    const handler = {
      get(_, tag) {
        if (has(info.components, tag)) {
          const component = info.components[tag];
          return (props) => render(component, props);
        }
        return (..._) => create([tag, ..._]);
      },
    };

    return new Proxy({}, handler);
  },
  html(html) {
    const { check } = voyage.lib;
    return () => {
      const value = check(html, "function") ? html() : html;
      const _ = document.createElement("div");
      _.innerHTML = value;
      return Array.from(_.childNodes);
    };
  },
  show(when, template, ...otherwise) {
    const { each } = voyage.lib;

    const cases = [when, template, ...otherwise];

    return () => {
      for (const i of each(0, cases.length - (cases.length % 2) - 1, 2)) {
        const condition = cases[i];
        const option = cases[i + 1];
        if (condition()) {
          return option();
        }
      }
      if (cases.length % 2 == 1) {
        const otherwise = cases[cases.length - 1];
        return otherwise();
      } else {
        return "";
      }
    };
  },
  each(list, template, key) {
    // todo
    const { check } = voyage.lib;
    const { create } = voyage.methods;

    return () => {
      const value = check(list, "function") ? list() : list;
      // get the reactive prop's current value

      node = value.map((value, index) => {
        const result = template(value, index);
        return check(result, Array) ? create(result) : result;
      });

      return node;
    };
  },
  run(app, on) {
    const { pop } = voyage.lib;
    const { render, append, runEffect } = voyage.methods;

    const node = document.querySelector(on);
    append(render(app), node);

    const { info } = voyage;
    info.status = "shown";
    while (info.lifecycle.shown.size != 0) {
      const id = pop(info.lifecycle.shown);
      runEffect(id);
    }
  },
  load(library) {
    let { components } = voyage.info;
    Object.assign(components, library);
  },
};

const { props, effect, t, h, html, show, each, load } = voyage;
const { div, img, p, span, button, h1, ul, li, a } = h();

let examples = {
  HelloWorld() {
    const { name } = props({ name: "world" });

    return t`hello ${name}`;
  },
  Label() {
    const { name, src } = props();

    return img({ src, alt: t`${name} dancing` });
  },
  Html() {
    const { content } = props({
      content: `here's some <strong>HTML!!!</strong>`,
    });

    return html(content);
  },
  NodeRef() {
    const { content, parent } = props({
      content: `here's some <strong>HTML!!!</strong>`,
    });

    effect(() => {
      parent().innerHTML = content();
    });
    return p({ "@ref": parent });
  },
  Counter() {
    const { count } = props({ count: 0 });

    return [
      ["button", { "@click": () => count(+count() - 1) }, "-"],
      ["input", { type: "text", "@value": count }],
      ["button", { "@click": () => count(+count() + 1) }, "+"],
    ];
  },
  SimpleCounter() {
    const { count } = props({ count: 0 });

    return button(
      {
        "@click": () => {
          count((x) => x + 1);
        },
      },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`
    );
  },
  DerivedCounter() {
    const { count } = props({ count: 0 });

    const doubled = () => count() * 2;
    const quadrupled = () => doubled() * 2;

    return [
      button(
        {
          "@click": () => {
            count(count() + 1);
          },
        },
        t`Count: ${count}`
      ),
      p(t`${count} * 2 = ${doubled}`),
      p(t`${doubled} * 2 = ${quadrupled}`),
    ];
  },
  Effect() {
    const { count } = props({ count: 0 });

    effect(() => {
      if (count() >= 10) {
        // count is dangerously high!
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
  IntervalEffect() {
    const { count } = props({ count: 0 });

    effect(() => {
      interval = setInterval(() => {
        count(count() + 1);
      }, 1000);
      return () => clearInterval(interval);
    });
    return ["p", count];
  },
  Condition() {
    const { x } = props({ x: 7 });

    return show(
      () => x() > 10,
      t`${x} is greater than 10`,
      () => x() < 5,
      t`${x} is less than 5`,
      t`${x} is between 5 and 10`
    );
  },
  ChangeableCondition() {
    const { x } = props({ x: 3 });

    effect(() => {
      interval = setInterval(() => {
        x(x() + 1);
      }, 1000);
      return () => clearInterval(interval);
    });
    return show(
      () => x() > 10,
      t`${x} is greater than 10`,
      () => x() < 5,
      t`${x} is less than 5`,
      t`${x} is between 5 and 10`
    );
  },
  IncrementAtAnyInterval() {
    // todo
  },
  List() {
    const cats = [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];

    return [
      h1("The Famous Cats of YouTube"),
      ul(
        each(cats, ({ id, name }, i) =>
          li(
            a(
              {
                target: "_blank",
                rel: "noreferrer",
                href: t`https://www.youtube.com/watch?v=${id}`,
              },
              t`${i + 1}: ${name}`
            )
          )
        )
      ),
    ];
  },
  Thing() {
    // `color` is updated whenever the prop value changes...
    const { color } = props();

    // ...but `initial` is fixed upon initialisation
    const initial = color();

    return p(
      span({ style: { "background-color": initial } }, "initial"),
      span({ style: { "background-color": color } }, "current")
    );
  },
  KeyedList() {
    const { things } = props({
      things: [
        { id: 1, color: "darkblue" },
        { id: 2, color: "indigo" },
        { id: 3, color: "deeppink" },
        { id: 4, color: "salmon" },
        { id: 5, color: "gold" },
      ],
    });

    const slice = () => things((things) => things.slice(1));

    const { Thing } = h();
    return [
      button({ "@click": slice }, "remove first thing"),
      each(
        things,
        (item) => Thing({ color: item.color }),
        (item) => item.id
      ),
    ];
  },
  PropEditing() {
    const { something } = props();
    something({ abc: "def" });
    something("abc", "xyz");
    something("foo", "bar");

    return () => JSON.stringify(something());
  },
  EffectDeps() {
    const { message, parent, child } = props({ parent: false, child: false });
    effect(() => {
      if (parent()) {
        message(`${parent()} ${child()}`);
      }
    });
    return [
      button({ "@click": () => parent(!parent()) }, "parent"),
      button({ "@click": () => child(!child()) }, "child"),
      message,
    ];
  },
  ChildEffect() {
    const { IncreasingCounter } = h();
    // todo
    return IncreasingCounter();
  },
};

load(examples);

voyage.run(examples.Counter, "body");

// todo styling with preset

