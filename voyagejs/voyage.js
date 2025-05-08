/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250429 ~ (utc+8)
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
    parent: false,
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
        let value = has(info.props, prop)
          ? info.props[prop]
          : has(defaultProps, prop)
          ? defaultProps[prop]
          : false;
        let subscribers = new Set();

        if (check(value, "function")) {
          // it's already a reactive prop
          // or it shouldnt be reactive (e.g. an event handler)
          return value;
        }

        const result = (..._) => {
          if (_.length == 0) {
            if (info.subscriber) {
              result.subscribe(info.subscriber);
            }
            return value;
          } else if (_.length == 1) {
            const newValue = _[0];
            value = check(newValue, "function") ? newValue(value) : newValue;
            // new value can be computed from the previous value
            result.apply();
          } else {
            const path = _.slice(0, _.length - 1);
            const newValue = _.slice(-1)[0];
            let current = value;

            for (let i = 0; i < path.length - 1; i++) {
              const key = path[i];
              current[key] = has(current, key) ? current[key] : {};
              current = current[key];
            }

            const lastKey = path[path.length - 1];
            current[lastKey] = check(newValue, "function")
              ? newValue(value)
              : newValue;
            result.apply();
          }
        };
        result.apply = () => {
          for (const _ of subscribers) {
            _();
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

    if (!check(when)) {
      when = "created";
    }

    let node = { self: false, children: [] };
    let _subscriber = info.subscriber;
    let _parent = info.parent;

    if (info.parent) {
      info.parent.push(node);
    }

    const cleanup = function (node) {
      if (node.self) {
        node.self();
      }
      for (const child of node.children) {
        cleanup(child);
      }
    };

    const run = () => {
      cleanup(node);

      info.subscriber = run;
      info.parent = node.children;
      node.self = effect();

      info.subscriber = _subscriber;
      info.parent = _parent;
    };

    info.lifecycle[when].push(run);
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
  h() {
    const { has } = voyage.lib;
    const { render } = voyage;
    const handler = {
      get(_, tag) {
        const { components } = voyage;
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
    const { e, insert, compile, create } = voyage;
    const { each, check } = voyage.lib;

    const _ = document.createComment("");
    let map = new Map();

    if (!key) {
      key = (_, i) => i;
    }

    e(() => {
      const removal = new Set();
      // for items cease to exist, flag it to be removed
      window.a = map;
      for (const _ of map.values()) {
        _.node.remove();
        removal.add(_.node);
      }

      const current = check(list, "function") ? list() : list;
      // for function (a reactive prop), get its current value

      for (const i of each(current.length - 1)) {
        let itemKey = key(current[i], i);

        if (map.has(itemKey) && map.get(itemKey).props === current[i]) {
          insert(map.get(itemKey).node, _);
          removal.delete(map.get(itemKey).node);
        } else {
          const result = template(current[i], i);
          const node = check(result, Array) ? create(compile(result)) : result;

          map.set(itemKey, { node, props: current[i] });
          insert(node, _);
        }
      }

      for (const _ of removal.values()) {
        _.remove();
      }
    }, "shown");

    return _;
  },
  /**
   * insert a node, return its remover fn
   * @param {Node} node - the node to be inserted
   * @param {Node} sibling - sibling must have parent node
   * @returns {function} to remove the node
   */
  insert(node, sibling) {
    const { check } = voyage.lib;
    if (!check(node, Node)) {
      node = document.createTextNode(node);
    }
    sibling.parentNode.insertBefore(node, sibling);
    return () => node.remove();
  },
  /**
   * @typedef {object} Element
   * @prop {string} type - node
   * @prop {object} labels - attributes or props
   * @prop {Array<Element|Node|string|Function>} content
   * - reactive or non reactive stuff
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
      } else if (check(item, Array)) {
        element.content.push(compile(item));
      } else if (check(item, Node)) {
        element.content.push(item);
      } else if (check(item, "function")) {
        element.content.push(item);
      } else if (check(item, "object")) {
        element.labels = item;
      } else {
        element.content.push(String(item));
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
    const { compile, create, e, insert } = voyage;
    const { check, has } = voyage.lib;

    let node =
      element.type == ""
        ? document.createDocumentFragment()
        : document.createElement(element.type);

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
            });
            node.addEventListener("input", () => {
              value(node.value);
            });
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
      if (check(child, Node)) {
        node.appendChild(child);
      } else if (check(child, "object")) {
        node.appendChild(create(child));
      } else if (check(child, "function")) {
        const _ = document.createComment("");
        e(() => {
          const result = child();
          if (check(result, Array)) {
            return insert(create(compile(result)), _);
          } else {
            return insert(result, _);
          }
        }, "shown");
        node.appendChild(_);
      } else {
        node.appendChild(document.createTextNode(child));
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
    const { check } = voyage.lib;
    const { compile, create } = voyage;

    const { info } = voyage;
    info.props = props;

    template = component();

    if (check(template, "function")) {
      // let it be the only child of a document fragment
      template = [template];
    }

    const element = compile(template);
    const node = create(element);

    for (const _ of info.lifecycle.created) {
      _();
    }
    info.lifecycle.created = [];
    return node;
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
  PropPath() {
    const { p, e } = voyage;
    const { prop } = p();
    e(() => console.log(prop()));
    prop({ abc: "xyz" });
    prop("abc", "def");
    prop("c123", "aaa");

    return "";
  },
};

voyage.load(examples);

voyage.run(examples.LegacyCounter, "body");

