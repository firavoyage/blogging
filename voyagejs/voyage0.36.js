/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250429 ~ 20250513 (utc+8)
 *
 * @author firavoyage
 * @version 0.36
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
     * check if a value is valid
     *
     * @param {*} value - value to be checked
     * @param {string|function} [type] - type (or a constructor)
     * @returns {boolean}
     *
     * no type: undefined and null to false, otherwise true
     *
     * type is string: typeof value === type
     *
     * type is fn: value instanceof type
     *
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
     * step defaults to 1
     *
     * @param {number} begin - first param
     * @param {number} [end] - second param
     * @param {number} [step] - third param
     * @returns {Iterator} the iterator
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
  },
  /**
   * private methods
   * @namespace methods
   * @memberof voyage
   */
  methods: {
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
     * apply prop change to an effect
     * @param {number} id the effect id
     */
    runEffect(id) {
      const { check } = voyage.lib;
      const { info } = voyage;

      const cleanup = (id) => {
        if (info.effects[id]) {
          const effect = info.effects[id];
          if (check(effect.cleanup, "function")) {
            effect.cleanup();
          }
          for (const child of effect.children) {
            cleanup(child);
            info.effects[child] = false;
          }
        }
      };
      cleanup(id);

      const parent = info.parent;
      info.parent = id;
      info.effects[id].cleanup = info.effects[id].effect();

      info.parent = parent;
    },
  },
  /**
   * runtime infomation
   * @namespace info
   * @memberof voyage
   */
  info: {
    components: {},
    props: false,
    effects: {},
    effectCount: 0,
    parent: false,
    status: "creating",
    lifecycle: {
      created: new Set(),
      shown: new Set(),
    },
  },
  /**
   * prop of a component
   * @typedef {function} Prop
   * @prop {*} value value in untracked mode
   * @prop {function} apply apply changes to all subscribed effect
   * @prop {function} subscribe subscribe to an effect
   * @prop {function} unsubscribe unsubscribe to an effect
   */
  /**
   * define props
   * @param {object} defaultProps
   * @returns {object<Prop>}
   */
  p(defaultProps) {
    const { has, check } = voyage.lib;
    const { runEffect } = voyage.methods;

    const { info } = voyage;
    const handler = {
      get(_, propName) {
        let initial = has(info.props, propName)
          ? info.props[propName]
          : has(defaultProps, propName)
            ? defaultProps[propName]
            : false;
        let subscribers = new Set();

        if (check(initial, "function")) {
          // it's a reactive prop passed down
          return initial;
        }

        const prop = (..._) => {
          if (_.length == 0) {
            if (check(info.parent, "number")) {
              subscribers.add(info.parent);
            }
            return prop.value;
          } else if (_.length == 1) {
            let newValue = _[0];
            newValue = check(newValue, "function")
              ? newValue(prop.value)
              : newValue;
            prop.value = newValue;
            // new value can be computed from the previous value

            prop.apply();
          } else if (_.length >= 2) {
            const path = _.slice(0, _.length - 1);
            const lastKey = path[path.length - 1];
            let current = prop.value;

            for (let i = 0; i < path.length - 1; i++) {
              const key = path[i];
              current[key] = has(current, key) ? current[key] : {};
              current = current[key];
            }

            let newValue = _.slice(-1)[0];
            newValue = check(newValue, "function")
              ? newValue(current[lastKey])
              : newValue;
            current[lastKey] = newValue;

            prop.apply();
          }
        };
        prop.value = initial;
        prop.apply = () => {
          for (const id of subscribers) {
            if (info.effects[id]) {
              runEffect(id);
            } else {
              subscribers.delete(id);
            }
          }
        };
        prop.subscribe = (id) => {
          subscribers.add(id);
        };
        prop.unsubscribe = (id) => {
          subscribers.delete(id);
        };

        return prop;
      },
    };

    return new Proxy({}, handler);
  },
  /**
   * @typedef {object|false} Effect
   * @prop {function} effect
   * @prop {function} cleanup
   * @prop {Array<number>} children
   */
  /**
   * create an effect
   * @param {*} effect
   * @param {*} when
   */
  e(effect, when = "created") {
    const { info } = voyage;
    const { runEffect } = voyage.methods;

    const id = info.effectCount++;
    info.effects[id] = { effect, cleanup: false, children: [] };

    if (info.parent) {
      info.effects[info.parent].children.push(id);
    }

    const timeline = {
      creating: 0,
      created: 1,
      shown: 2,
    };
    const time = timeline[when];

    if (info.status < time) {
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
    const { render } = voyage;
    const handler = {
      get(_, tag) {
        const { components } = voyage.info;
        if (has(components, tag)) {
          return (...props) => render(components[tag], ...props);
        } else {
          return (...props) => [tag, ...props];
        }
      },
    };

    return new Proxy({}, handler);
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
    const { e, compile, create } = voyage;
    const { each, check } = voyage.lib;
    const { insert, remove, handleText } = voyage.methods;

    return () => {
      const current = check(list, "function") ? list() : list;
      // get the reactive prop's current value

      node = current.map((value, index) => {
        const result = template(value, index);
        return check(result, Array)
          ? create(compile(result))
          : handleText(result);
      });

      return node;
    };
  },
  /**
   * @typedef {object} Element
   * @prop {string} type - node
   * @prop {object} labels - attributes
   * @prop {Array<Element|Node|Text|function>} content - can be reactive or not
   */
  /**
   * @typedef {Array<string|object|Template|Text|Node|function>} Template
   */
  /**
   * convert a template to an element
   * @param  {Template} template
   * @returns {Element}
   */
  compile(template) {
    const { compile } = voyage;
    const { check } = voyage.lib;
    let element = { type: "", labels: {}, content: [] };
    for (const item of template) {
      if (check(item, "string")) {
        if (element.type == "") {
          element.type = item;
        } else {
          element.content.push(item);
        }
      } else if (check(item, Array)) {
        element.content.push(compile(item));
      } else if (check(item, Node)) {
        element.content.push(item);
      } else if (check(item, "function")) {
        element.content.push(item);
      } else if (check(item, "object")) {
        element.labels = item;
      } else {
        element.content.push(item);
      }
    }
    return element;
  },
  /**
   * element to node
   * @param {Element} element
   * @returns {Node|Fragment}
   */
  create(element) {
    const { compile, create, e } = voyage;
    const { check, has } = voyage.lib;
    const { append, insert, remove } = voyage.methods;

    let node = element.type == "" ? [] : document.createElement(element.type);

    const { labels } = element;
    for (const label in labels) {
      const content = labels[label];
      if (label == "class" && check(content, Array)) {
        // todo
        e(() => {
          for (const _ of content) {
            if (check(_, "function")) {
              node.classList.add(_());
            } else {
              node.classList.add(_);
            }
          }
        });
      } else if (label == "style" && check(content, "object")) {
        for (const _ in content) {
          if (check(content[_], "function")) {
            e(() => {
              node.style[_] = content[_]();
            });
          } else {
            node.style[_] = content[_];
          }
        }
      } else if (label[0] == "@") {
        const event = label.slice(1);
        const macros = {
          ref() {
            content.value = node;
          },
          html() {
            // todo (insert instead of append)
            e(() => {
              const _ = document.createElement("div");
              _.innerHTML = check(content, "function") ? content() : content;
              const fragment = Array.from(_.childNodes);
              append(fragment, node);
              return () => remove(fragment);
            });
          },
          value() {
            e(() => {
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
          e(() => {
            node.setAttribute(label, content());
          });
        } else {
          node.setAttribute(label, content);
        }
      }
    }

    for (const child of element.content) {
      if (check(child, "object") && !check(child, Node)) {
        // element
        append(create(child), node);
      } else if (check(child, "function")) {
        // dynamic content
        const _ = document.createComment("");
        append(_, node);
        e(() => {
          const result = child();
          let fragment;
          if (check(result, Array)) {
            // template
            fragment = insert(create(compile(result)), _, node);
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
    const { compile, create } = voyage;
    const { check, pop } = voyage.lib;
    const { runEffect } = voyage.methods;

    const { info } = voyage;
    info.props = props;

    info.status = "creating";

    template = component();

    if (check(template, "function")) {
      // let it be the only child of a document fragment
      template = [template];
    }

    const element = compile(template);
    const node = create(element);

    info.status = "created";
    while (info.lifecycle.created.size != 0) {
      const id = pop(info.lifecycle.created);
      runEffect(id);
    }
    return node;
  },
  run(app, on) {
    const { info, render } = voyage;
    const { pop } = voyage.lib;
    const { append, runEffect } = voyage.methods;

    const node = document.querySelector(on);
    append(render(app), node);

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
    const { p } = voyage;
    const { html } = p({
      html: `here's some <strong>HTML!!!</strong>`,
    });
    return ["div", { "@html": html }];
  },
  HtmlEffect() {
    const { p, e } = voyage;
    const { html, parent } = p({
      html: `here's some <strong>HTML!!!</strong>`,
    });
    e(() => {
      parent().innerHTML = html();
    });
    return ["p", { "@ref": parent }];
  },
  LegacyCounter() {
    const { p } = voyage;
    const { count } = p({ count: 0 });
    return [
      ["button", { "@click": () => count(+count() - 1) }, "-"],
      ["input", { type: "text", "@value": count }],
      ["button", { "@click": () => count(+count() + 1) }, "+"],
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
    const { p, t } = voyage;
    const { count } = p({ count: 0 });
    const doubled = () => count() * 2;
    const quadrupled = () => doubled() * 2;

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
  IncreasingCounter() {
    const { p, e, t } = voyage;
    const { count } = p({ count: 0 });
    e(() => {
      interval = setInterval(() => {
        count(count() + 1);
      }, 1000);
      return () => clearInterval(interval);
    });
    return ["p", count];
  },
  Conditional() {
    const { p, t, show } = voyage;
    const { x } = p({ x: 7 });
    return show(
      () => x() > 10,
      t`${x} is greater than 10`,
      () => x() < 5,
      t`${x} is less than 5`,
      t`${x} is between 5 and 10`
    );
  },
  ChangeableConditional() {
    const { p, t, show } = voyage;
    const { x } = p({ x: 3 });
    const { e } = voyage;
    e(() => {
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
    const { h, t, each } = voyage;
    const cats = [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];
    const { h1, ul, li, a } = h();
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
    const { p: props, h } = voyage;
    // `color` is updated whenever the prop value changes...
    let { color } = props();

    // ...but `initial` is fixed upon initialisation
    const initial = color();

    const { p, span } = h();
    return p(
      span({ style: { "background-color": initial } }, "initial"),
      span({ style: { "background-color": color } }, "current")
    );
  },
  KeyedList() {
    const { p, each, h } = voyage;
    const { things } = p();
    things([
      { id: 1, color: "darkblue" },
      { id: 2, color: "indigo" },
      { id: 3, color: "deeppink" },
      { id: 4, color: "salmon" },
      { id: 5, color: "gold" },
    ]);
    const slice = () => things((things) => things.slice(1));
    const { button, Thing } = h();
    return [
      button({ "@click": slice }, "remove first thing"),
      each(
        things,
        (item) => Thing({ color: item.color }),
        (item) => item.id
      ),
    ];
  },
  PropPath() {
    const { p } = voyage;
    const { prop } = p();
    prop({ abc: "xyz" });
    prop("abc", "def");
    prop("c123", "aaa");

    return () => JSON.stringify(prop);
  },
  ConditionalIncreasingCounter() {
    const { show, h } = voyage;
    const { IncreasingCounter } = h();
    // todo
    return IncreasingCounter();
  },
};

voyage.load(examples);

voyage.run(examples.LegacyCounter, "body");

// voyage.run(examples.ChangeableConditional, "body");

// voyage.run(examples.KeyedList, "body");
