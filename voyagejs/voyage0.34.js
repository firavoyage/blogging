/**
 * @file
 * voyage framework
 *
 * this version is developed during 20250321 ~ 20250401 (utc+8)
 *
 * @author firavoyage
 * @version 0.34
 * @since 0.1 initiated on 20240806
 * @see changelog.md
 */
/**
 * everything
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
              return { value: false, done: true };
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
  },
  info: {
    props: {},
    subscriber: false,
    prevSubscriber: false,
    pending: [],
  },
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
  e(effect) {
    const { info } = voyage;
    const { check } = voyage.lib;
    let cleanup;
    const runEffect = () => {
      if (check(cleanup, "function")) {
        cleanup();
      }
      cleanup = effect();
    };
    info.pending.push(() => {
      info.prevSubscriber = info.subscriber;
      info.subscriber = runEffect;
      runEffect();
      info.subscriber = info.prevSubscriber;
    });
  },
  t(...template) {
    const { each } = voyage.lib;
    const [strings, ...props] = template;
    return () => {
      let result = [];
      for (const index of each(strings.length - 1)) {
        result.push(strings[index]);
        if (index != strings.length - 1) {
          result.push(props[index]());
        }
      }
      return result.join("");
    };
  },
  h() {},
  /**
   * @typedef {object} Element
   * @prop {string|function} type - node or component
   * @prop {object} labels - attributes or props
   * @prop {Array<Element|string>} content - node or text
   */
  /**
   * template to element
   * @param  {Array} template
   * @returns {Element}
   */
  compile(template) {
    const { compile } = voyage;
    const { check } = voyage.lib;
    let element = { type: false, labels: {}, content: [] };
    for (const item of template) {
      if (check(item, "string")) {
        if (!element.type) {
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
      } else if (check(item, "object")) {
        element.labels = item;
      } else if (check(item, Array)) {
        element.content.push(compile(item));
      }
    }
    if (!element.type) {
      element.type = "div";
    }
    return element;
  },
  /**
   * element to node
   * @param {Element} element
   * @returns {Node}
   */
  create(element) {
    const { create, render, e } = voyage;
    const { check } = voyage.lib;

    if (check(element.type, "function")) {
      const { type, labels } = element;
      return render(type, labels);
    } else if (check(element.type, "string")) {
      let node = document.createElement(element.type);

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
          if (event == "ref") {
            value(node);
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
        if (check(child, "string")) {
          node.appendChild(document.createTextNode(element.content));
        } else if (check(child, "object")) {
          const _ = document.createComment("");
          node.appendChild(_);
          e(() => {
            let childNode = create(child);
            if (check(childNode, "string")) {
              childNode = document.createTextNode(childNode);
            }
            _.parentNode.insertBefore(childNode, _);
            return () => childNode.remove();
          });
        }
      }
      return node;
    }
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
      for (const _ of info.pending) {
        _();
      }
      info.pending = [];
      return node;
    }
  },
  run(app, on) {
    const { render } = voyage;
    const parent = document.querySelector(on);
    parent.appendChild(render(app));
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
    return show(
      () => x() > 10,
      t`${x} is greater than 10`,
      () => x() < 5,
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
  Thing() {
    const { p: props, h } = voyage;
    // `color` is updated whenever the prop value changes...
    let { color } = props();

    // ...but `initial` is fixed upon initialisation
    const initial = color();

    const { p, span } = h();
    return p(
      span({ style: { "background-color": initial } }, "initial"),
      span({ style: { "background-color": current } }, "current")
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

voyage.run(examples.Html, "body");

voyage.run(examples.Counter, "body");
