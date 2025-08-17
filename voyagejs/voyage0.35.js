/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250401 ~ 20250429 (utc+8)
 *
 * @author firavoyage
 * @version 0.35
 * @since 0.1 initiated on 20240806
 * @see changelog.md
 */
/**
 * data and functions
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

      const iterate = function (begin, end, step) {
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
  },
  info: {
    props: {},
    subscriber: false,
    lifecycle: {
      created: [],
      shown: [],
    },
  },
  components: {},
  p(defaultProps) {
    const { info } = voyage;
    const { has, check } = voyage.lib;
    const handler = {
      get(_, prop) {
        let value;
        let subscribers = new Set();
        if (has(info.props, prop)) {
          value = info.props[prop];
        } else if (has(defaultProps, prop)) {
          value = defaultProps[prop];
        }
        if (check(value, "function")) {
          // it's already a reactive prop
          // if not, it shouldnt be reactive (event handler, etc.)
          return value;
        }
        const result = (newValue) => {
          // props cant be set as undefined
          if (check(newValue)) {
            if (check(newValue, "function")) {
              // new value can be computed from the previous value
              value = newValue(value);
            } else {
              value = newValue;
            }
            for (const _ of subscribers) {
              _();
            }
          } else {
            if (info.subscriber) {
              subscribers.add(info.subscriber);
            }
            return value;
          }
        };
        result.subscribe = (_) => {
          subscribers.add(_);
        };
        return result;
      },
    };

    return new Proxy({}, handler);
  },
  e(effect, when) {
    const { info } = voyage;
    const { check } = voyage.lib;
    let cleanup;

    const apply = () => {
      const prevSubscriber = info.subscriber;
      info.subscriber = apply;

      if (check(cleanup, "function")) {
        cleanup();
      }
      cleanup = effect();

      info.subscriber = prevSubscriber;
    };

    when = check(when) ? when : "created";
    info.lifecycle[when].push(apply);
  },
  m(memo) {
    const { info } = voyage;
    let value;
    let subscribers = new Set();

    const update = () => {
      value = compute();
      for (const _ of subscribers) {
        _();
      }
    };
    const compute = () => {
      const prevSubscriber = info.subscriber;
      info.subscriber = update;
      value = memo();
      info.subscriber = prevSubscriber;
      return value;
    };

    value = compute();

    const result = () => {
      if (info.subscriber) {
        subscribers.add(info.subscriber);
      }
      return value;
    };
    result.subscribe = (_) => {
      subscribers.add(_);
    };
    return result;
  },
  t(...template) {
    const { each, check } = voyage.lib;
    const [strings, ...props] = template;
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
  h(html) {
    const { check } = voyage.lib;

    if (check(html)) {
      return ["div", { "@html": html }];
    }

    const handler = {
      get(_, tag) {
        return (...props) => [tag, ...props];
      },
    };

    return new Proxy({}, handler);
  },
  show(when, template, ...otherwise) {
    const { each, check } = voyage.lib;

    const cases = [when, template, ...otherwise];

    return [
      {
        "@component"() {
          let template;
          for (const i of each(0, cases.length - 1, 2)) {
            if (cases[i]()) {
              template = cases[i + 1];
              break;
            }
          }
          if (!template && cases.length % 2 == 1) {
            template = cases[cases.length - 1];
          }
          if (template) {
            let node;
            if (check(template, Array)) {
              node = template;
            } else if (check(template, "function")) {
              node = template();
            }
            return node;
          }
        },
      },
    ];
  },
  each(list, template, key) {
    const { e, insert, render } = voyage;
    const { each, check } = voyage.lib;

    const node = document.createComment("");
    let map = new Map();

    if (!key) {
      key = (_, i) => i;
    }

    e(() => {
      const unused = new Map();
      for (const _ of map.keys()) {
        unused.set(_, map.get(_).node);
      }

      let currentList;
      if (check(list, "function")) {
        currentList = list();
      } else {
        currentList = list;
      }

      for (const i of each(currentList.length - 1)) {
        let itemKey = key(currentList[i], i);

        if (map.has(itemKey) && map.get(itemKey).data === currentList[i]) {
          insert(map.get(itemKey).node, node);
          unused.delete(itemKey);
        } else {
          const itemNode = render(() => template(currentList[i], i));
          map.set(itemKey, { node: itemNode, data: currentList[i] });
          insert(itemNode, node);
        }
      }

      for (const _ of unused.keys()) {
        if (map.get(_).node == unused.get(_)) {
          // is previous data
          map.delete(_);
        }
        unused.get(_).remove();
      }
    }, "shown");

    return node;
  },
  /**
   * insert a node, return its remover fn
   * @param {Node} node - the node to be inserted
   * @param {Node} sibling - sibling must have parent node
   * @returns {function} to remove the node
   */
  insert(node, sibling) {
    const { check } = voyage.lib;
    if (check(node, "string")) {
      node = document.createTextNode(node);
    }
    sibling.parentNode.insertBefore(node, sibling);
    return () => node.remove();
  },
  /**
   * @typedef {object} Element
   * @prop {string|function} type - node or component
   * @prop {object} labels - attributes or props
   * @prop {Array<Element|Node|string>} content - node or text
   */
  /**
   * template to element
   * @param  {Array} template
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
      } else if (check(item, "function")) {
        if (!element.type) {
          element.type = item;
        } else {
          element.content.push({ type: item });
        }
      } else if (check(item, Array)) {
        element.content.push(compile(item));
      } else if (check(item, Node)) {
        element.content.push(item);
      } else if (check(item, "object")) {
        element.labels = item;
      }
    }
    return element;
  },
  /**
   * element to node
   * @param {Element} element
   * @returns {Node}
   */
  create(element) {
    const { create, render, e, insert } = voyage;
    const { check, has } = voyage.lib;

    const { components } = voyage;
    if (has(components, element.type)) {
      // it's a component
      const { type, labels } = element;
      const node = render(components[type], labels);
      return node;
    }

    if (check(element.type, "function")) {
      // it's a prop
      const { type, labels } = element;
      const _ = document.createComment("");
      e(() => {
        const node = render(type, labels);
        return insert(node, _);
      });
      return _;
    }

    let node;
    if (element.type == "") {
      node = document.createDocumentFragment();
    } else {
      node = document.createElement(element.type);
    }

    const { labels } = element;
    for (const label in labels) {
      const value = labels[label];
      if (label == "class" && check(value, Array)) {
        e(() => {
          for (const _ of value) {
            if (check(_, "function")) {
              node.classList.add(_());
            } else {
              node.classList.add(_);
            }
          }
        });
      } else if (label == "style" && check(value, "object")) {
        for (const _ in value) {
          if (check(value[_], "function")) {
            e(() => {
              node.style[_] = value[_]();
            });
          } else {
            node.style[_] = value[_];
          }
        }
      } else if (label[0] == "@") {
        const event = label.slice(1);
        const macros = {
          ref() {
            value(node);
          },
          html() {
            node = document.createComment("");
            e(() => {
              let html = document.createElement("_");
              const cleanup = insert(html, node);
              html.outerHTML = check(value, "function") ? value() : value;
              return cleanup;
            }, "shown");
          },
          value() {
            e(() => {
              node.value = value();
              node.addEventListener("input", () => {
                value(node.value);
              });
            });
          },
          component() {
            node = document.createComment("");
            e(() => {
              return insert(render(value), node);
            }, "shown");
          },
        };
        if (has(macros, event)) {
          macros[event]();
        } else {
          node.addEventListener(event, value);
        }
      } else {
        if (check(value, "function")) {
          e(() => {
            node.setAttribute(label, value());
          });
        } else {
          node.setAttribute(label, value);
        }
      }
    }

    for (const child of element.content) {
      if (check(child, "string") || check(child, Node)) {
        node.append(child);
      } else if (check(child, "object")) {
        let childNode = create(child);
        node.append(childNode);
        // const _ = document.createComment("");
        // node.append(_);
        // e(() => {
        //   let childNode = create(child);
        //   return insert(childNode, _);
        // });
      }
    }
    return node;
  },
  render(component, props) {
    const { info, compile, create } = voyage;
    const { check } = voyage.lib;

    info.props = props;
    template = component();
    if (check(template, "string")) {
      return template;
    } else if (check(template, Array)) {
      element = compile(template);
      node = create(element);
      for (const _ of info.lifecycle.created) {
        _();
      }
      info.lifecycle.created = [];
      return node;
    }
  },
  run(app, on) {
    const { info, render } = voyage;

    const parent = document.querySelector(on);
    parent.append(render(app));

    for (const _ of info.lifecycle.shown) {
      _();
    }
    info.lifecycle.shown = [];
  },
  load(library) {
    let { components } = voyage;
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
    const { p, h } = voyage;
    const { html } = p({
      html: `here's some <strong>HTML!!!</strong>`,
    });
    return h(html);
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
    return ["p", t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`];
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
  ChangingConditional() {
    const { p, t, show } = voyage;
    const { x } = p({ x: 3 });
    const { e } = voyage;
    e(() => {
      setInterval(() => {
        x(x() + 1);
      }, 1000);
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
};

voyage.load(examples);

voyage.run(examples.KeyedList, "body");
