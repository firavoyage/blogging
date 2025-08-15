/**
 * @file
 * voyage framework
 *
 * some syntax sugars for preact (a lighter version of react)
 *
 * this version is developed during 20250814 ~ (utc+8)
 *
 * @author firavoyage
 * @version 1.0
 * @since 0.1 initiated on 20240816, 1.0 initiated on 20250814
 * @see changelog.md
 */

const { useState, usee } = preact;

let voyage = {
  p(initial) {
    // prop
    const [state, setState] = useState(initial);
    return (..._) => {
      if (_.length == 0) {
        return state;
      } else if (_.length == 1) {
        setState(_[0]);
      }
    };
  },
  e(e, deps) {
    // e
    usee(e, deps);
  },
  h(..._) {
    // html
  },
  r(app, node) {
    // run or render
  },
};

let examples = {
  HelloWorld() {
    const { name } = p({ name: "world" });

    return `hello ${name()}`;
  },
  Label() {
    const { name, src } = p();

    return ["img", { src, alt: t`${name} dancing` }];
  },
  Html() {
    const { content } = p({
      content: `here's some <strong>HTML!!!</strong>`,
    });

    return html(content);
  },
  NodeRef() {
    const { content, parent } = p({
      content: `here's some <strong>HTML!!!</strong>`,
    });

    e(() => {
      parent().innerHTML = content();
    });
    return ["p", { ref: parent }];
  },
  Counter() {
    const count = p(0);

    return h(
      h("button", { "@click": () => count(+count() - 1) }, "-"),
      h("input", { type: "text", bind: count }),
      h("button", { "@click": () => count(+count() + 1) }, "+")
    );
  },
  SimpleCounter() {
    const { count } = p({ count: 0 });

    return [
      "button",
      { "@click": () => count((x) => x + 1) },
      t`clicked ${count} ${() => (count() > 1 ? "times" : "time")}`,
    ];
  },
  DerivedCounter() {
    const { count } = p({ count: 0 });

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
  e() {
    const { count } = p({ count: 0 });

    e(() => {
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
  Intervale() {
    const { count } = p({ count: 0 });

    e(() => {
      interval = setInterval(() => {
        count(count() + 1);
      }, 1000);
      return () => clearInterval(interval);
    });
    return ["p", count];
  },
  Condition() {
    const { x } = p({ x: 7 });

    return show(
      () => x() > 10,
      t`${x} is greater than 10`,
      () => x() < 5,
      t`${x} is less than 5`,
      t`${x} is between 5 and 10`
    );
  },
  ChangeableCondition() {
    const { x } = p({ x: 3 });

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
    const { color } = p();

    // ...but `initial` is fixed upon initialisation
    const initial = color();

    return [
      "p",
      ["span", { style: { "background-color": initial } }, "initial"],
      ["span", { style: { "background-color": color } }, "current"],
    ];
  },
  KeyedList() {
    const { things } = p({
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
  UpdatingStorep() {
    const { p } = p();
    p({ abc: "def" });
    p("abc", "xyz");
    p("foo", "bar");

    return () => JSON.stringify(p());
  },
  eDeps() {
    const { message, parent, child } = p({ parent: false, child: false });
    e(() => {
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

voyage.r(examples.Counter, document.body);
