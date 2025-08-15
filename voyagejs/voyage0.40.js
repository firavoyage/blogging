/**
 * features:
 * - prop
 * - effect
 * - h
 * - context
 * - utilities
 *   - html (show, each)
 *   - effects (e.g. onInterval)
 */
/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250812 ~ 20250814 (utc+8)
 *
 * @author firavoyage
 * @version 0.40
 * @since 0.1 initiated on 20240816
 * @see changelog.md
 */
/**
 * methods and data
 * @namespace voyage
 */
let voyage = {
  /**
   * @typedef {number} PropId
   * the unique id of a prop, start from 0
   */
  /**
   * @typedef {number} EffectId
   * the unique id of an effect, start from 0
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
    currentProps: {},
    props: new Map(),
    propId: 0,
    effects: new Map(),
    effectId: 0,
    effectParent: false,
    status: "creating",
    lifecycle: {
      // created, shown
    },
    preset: {},
    styles: new Map(),
    theme: "default",
  },
  /**
   * js standard library extension
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
     * two params (type: fn): value.constructor === type
     */
    check(value, type) {
      if (type === undefined) {
        return value !== undefined && value !== null;
      } else if (typeof type == "string") {
        return typeof value == type;
      } else if (typeof type == "function") {
        return value?.constructor == type;
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
     * @typedef {Array<Node>} Fragment
     */
    /**
     * append a node to a parent, both can be a fragment
     * @param {Node|Fragment} node - node to insert, text will be handled
     * @param {Node|Fragment} parent - where the node will be appended
     */
    append(node, parent) {
      const { check } = voyage.lib;

      if (!check(node, Array)) {
        // consider non-fragment as a fragment with only one child
        node = [node];
      }

      if (check(parent, Array)) {
        // parent is a fragment
        parent.push(...node);
      } else {
        // parent is a node
        node.map((_) => parent.appendChild(_));
      }
    },
    /**
     * insert a node or a fragment before a mounted sibling
     * @param {Node|Fragment} node - node to insert, text will be handled
     * @param {Node} sibling - what the node will be inserted before
     * @param {Fragment} [parent] - useful for insertion before mounting
     * @returns {Fragment} stuff that got inserted
     */
    insert(node, sibling, parent) {
      const { check } = voyage.lib;

      parent = sibling.parentNode ? sibling.parentNode : parent;

      if (!check(node, Array)) {
        // consider non-fragment as a fragment with only one child
        node = [node];
      }

      if (check(parent, Array)) {
        const index = parent.indexOf(sibling);
        parent.splice(index, 0, ...node);
      } else {
        node.map((_) => parent.insertBefore(_, sibling));
      }

      return node;
    },
    /**
     * remove a fragment
     * @param {Fragment} node - the node to be removed
     */
    remove(node) {
      node.map((_) => _.parentNode.removeChild(_));
    },
    /**
     *
     * @param  {Array<string|object|Array|Node|function>} element
     * @returns {Node|Fragment}
     */
    create(element) {
      const { effect } = voyage;
      const { check, has } = voyage.lib;
      const { create, render, append, insert, remove } = voyage.methods;

      const compile = (element) => {
        // an element can be
        // [string, object, ..._] => [tag, attrs, children]
        // [string (component), ...] => [component, props (incl. children)]
        // [{type:constants.component, component}, ...] => [component, ...]
        // [..._] => fragment
        // if you have a component fn, call it directly.
        // ... => child of a fragment

        // add type comments

        const { has, check } = voyage.lib;

        let tag = "",
          attrs = {},
          children = [];

        if (!check(element, Array)) {
          children = [element];
          return [tag, attrs, children];
        }

        if (check(element[0], "string") || check(element[0], Symbol)) {
          if (check(element[1], Object)) {
            [attrs, ...children] = element.slice(1);
          } else {
            [...children] = element.slice(1);
          }

          const { info } = voyage;
          if (has(info.components, tag)) {
            tag = info.components[tag];
            attrs = { children, ...attrs };
          } else {
            tag = element[0];
          }
        } else {
          // a fragment
          children = element;
        }

        return [tag, attrs, children];
      };
      const [tag, attrs, children] = compile(element);

      if (check(tag, "function")) {
        const [component, props] = [tag, attrs];
        return render(component, props);
      }

      const node = tag == "" ? [] : document.createElement(tag);

      // define attrs
      for (const [attr, content] of Object.entries(attrs)) {
        const directives = {
          ref() {
            content(node);
          },
          bind() {
            effect(() => {
              node.value = content();
            });
            node.addEventListener("input", () => {
              content(node.value);
            });
          },
        };

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
        } else if (attr == "style" && check(content, Object)) {
          Object.entries(content).map(([prop, value]) => {
            if (check(value, "function")) {
              effect(() => {
                node.style[prop] = value();
              });
            } else {
              node.style[prop] = value;
            }
          });
        } else if (has(directives, attr)) {
          directives[attr]();
        } else if (attr[0] == "@") {
          const event = attr.slice(1);
          node.addEventListener(event, content);
        } else if (check(content, "function")) {
          effect(() => {
            node.setAttribute(attr, content());
          });
        } else {
          node.setAttribute(attr, content);
        }
      }

      // define content
      for (const child of children) {
        if (check(child, Array)) {
          // element or fragment
          append(create(child), node);
        } else if (check(child, "function")) {
          // dynamic content
          const _ = document.createComment("");
          append(_, node);
          effect(() => {
            const fragment = insert(create(child()), _, node);
            return () => remove(fragment);
          });
        } else if (child instanceof Node) {
          // node
          append(child, node);
        } else {
          // text
          append(document.createTextNode(child), node);
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
      const { create, takeEffect } = voyage.methods;

      const { info } = voyage;

      const prevProps = info.currentProps;
      info.currentProps = props;

      info.status = "creating";
      info.lifecycle.created = new Set();
      let node = create(component());

      info.status = "created";
      const pendingEffects = info.lifecycle.created;
      for (const id of pendingEffects) {
        takeEffect(id);
      }

      info.currentProps = prevProps;

      return node;
    },
    /**
     * apply prop change to an effect
     * @param {EffectId} id the effect id
     */
    takeEffect(id) {
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
      const prevParent = info.effectParent;

      info.effectParent = id;

      const result = effect.effect();
      effect.cleanup = check(result, "function") ? result : false;

      info.effectParent = prevParent;
    },
  },
  props(defaultProps = {}) {
    const { has, check, map } = voyage.lib;
    const { takeEffect } = voyage.methods;

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
            takeEffect(effectId);
          } else {
            prop.subscribers.delete(effectId);
          }
        });
      };

      return (..._) => {
        if (_.length == 0) {
          if (check(info.effectParent, "number")) {
            subscribe(info.effectParent);
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

        if (check(info.currentProps[propName], "function")) {
          // it's a reactive prop passed down
          return info.currentProps[propName];
        }

        const id = info.propId++;
        info.props.set(id, {
          value: has(info.currentProps, propName)
            ? info.currentProps[propName]
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
    const { takeEffect } = voyage.methods;

    const { info } = voyage;
    const id = info.effectCount++;
    info.effects.set(id, {
      effect,
      cleanup: false,
      children: new Set(),
      deps: new Set(),
    });

    if (check(info.effectParent, "number")) {
      const parent = info.effects.get(info.effectParent);
      parent.children.add(id);
    }

    const schedule = {
      creating: 0,
      created: 1,
      shown: 2,
    };
    const time = schedule[when];
    const now = schedule[info.status];

    if (now < time) {
      info.lifecycle[when].add(id);
    } else {
      takeEffect(id);
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
  html(html) {
    const { check } = voyage.lib;
    return () => {
      const value = check(html, "function") ? html() : html;
      const _ = document.createElement("div");
      _.innerHTML = value;
      // a fragment
      return Array.from(_.childNodes);
    };
  },
  show(when, element, ...otherwise) {
    const { each } = voyage.lib;

    const cases = [when, element, ...otherwise];

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
  each(list, template) {
    // param key is removed
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
    const { render, append, takeEffect } = voyage.methods;

    const node = document.querySelector(on);

    const { info } = voyage;
    info.lifecycle.shown = new Set();
    append(render(app, {}), node);

    info.status = "shown";
    const pendingEffects = info.lifecycle.shown;
    for (const id of pendingEffects) {
      takeEffect(id);
    }
  },
  load(library) {
    let { components } = voyage.info;
    Object.assign(components, library);
  },
};

const { elements, props, effect, t, html, show, each, load } = voyage;

let examples = {
  HelloWorld() {
    const { name } = props({ name: "world" });

    return t`hello ${name}`;
  },
  Label() {
    const { name, src } = props();

    return ["img", { src, alt: t`${name} dancing` }];
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
    return ["p", { ref: parent }];
  },
  Counter() {
    const { count } = props({ count: 0 });

    return [
      ["button", { "@click": () => count(+count() - 1) }, "-"],
      ["input", { type: "text", bind: count }],
      ["button", { "@click": () => count(+count() + 1) }, "+"],
    ];
  },
  SimpleCounter() {
    const { count } = props({ count: 0 });

    return [
      "button",
      { "@click": () => count((x) => x + 1) },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`,
    ];
  },
  DerivedCounter() {
    const { count } = props({ count: 0 });

    const doubled = () => count() * 2;
    const quadrupled = () => doubled() * 2;

    return [
      [
        "button",
        {
          "@click": () => count(count() + 1),
        },
        t`Count: ${count}`,
      ],
      ["p", t`${count} * 2 = ${doubled}`],
      ["p", t`${doubled} * 2 = ${quadrupled}`],
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
    return [
      "button",
      {
        "@click": () => count(count() + 1),
      },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`,
    ];
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
  List() {
    const cats = [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];

    return [
      ["h1", "The Famous Cats of YouTube"],
      [
        "ul",
        each(cats, ({ id, name }, i) => [
          "li",
          [
            "a",
            {
              target: "_blank",
              rel: "noreferrer",
              href: t`https://www.youtube.com/watch?v=${id}`,
            },
            t`${i + 1}: ${name}`,
          ],
        ]),
      ],
    ];
  },
  Thing() {
    // `color` is updated whenever the prop value changes...
    const { color } = props();

    // ...but `initial` is fixed upon initialisation
    const initial = color();

    return [
      "p",
      ["span", { style: { "background-color": initial } }, "initial"],
      ["span", { style: { "background-color": color } }, "current"],
    ];
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

    return [
      ["button", { "@click": slice }, "remove first thing"],
      each(
        things,
        (item) => ["Thing", { color: item.color }],
        (item) => item.id
      ),
    ];
  },
  UpdatingStoreProps() {
    const { p } = props();
    p({ abc: "def" });
    p("abc", "xyz");
    p("foo", "bar");

    return () => JSON.stringify(p());
  },
  EffectDeps() {
    const { message, parent, child } = props({ parent: false, child: false });
    effect(() => {
      if (parent()) {
        message(`${parent()} ${child()}`);
      }
    });
    return [
      ["button", { "@click": () => parent(!parent()) }, "parent"],
      ["button", { "@click": () => child(!child()) }, "child"],
      message,
    ];
  },
};

load(examples);

voyage.run(examples.Counter, "body");
