const { h, p, e, r } = voyage;

let examples = {
  HelloWorld() {
    const name = p("world");

    return `hello ${name()}`;
  },
  Html() {
    const content = p(`here's some <strong>HTML!!!</strong>`);

    // html can not be set on a fragment
    return h("p", { class: 123, html: content });
  },
  Show() {
    const show = p(true);

    return h("p", { show }, "koko dayo!");
  },
  Ref() {
    const content = p(`here's some <strong>HTML!!!</strong>`);
    const parent = p();

    e(() => {
      parent().innerHTML = content();
    });
    return h("p", { ref: parent });
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
    const count = p(0);

    return h(
      "button",
      { "@click": () => count((x) => x + 1) },
      `clicked ${count()} ${count() > 1 ? "times" : "time"}`
    );
  },
  DerivedCounter() {
    const count = p(0);

    const doubled = () => count() * 2;
    const quadrupled = () => doubled() * 2;

    return h(
      h(
        "button",
        {
          "@click": () => count(count() + 1),
        },
        `Count: ${count()}`
      ),
      h("p", `${count()} * 2 = ${doubled()}`),
      h("p", `${doubled()} * 2 = ${quadrupled()}`)
    );
  },
  Effect() {
    const count = p(0);

    e(() => {
      if (count() >= 10) {
        // count is dangerously high!
        count(9);
      }
    }, [count]);
    return h(
      "button",
      {
        "@click": () => count(count() + 1),
      },
      `clicked ${count()} ${count() > 1 ? "times" : "time"}`
    );
  },
  IntervalEffect() {
    const count = p(0);

    e(() => {
      const interval = setInterval(() => {
        count(count() + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    });
    return h("p", count);
  },
  Condition() {
    const x = p(3);

    e(() => {
      const interval = setInterval(() => {
        x(x() + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    });

    return h(
      "p",
      x() > 10
        ? `${x()} is greater than 10`
        : x() < 5
        ? `${x()} is less than 5`
        : `${x()} is between 5 and 10`
    );

    // return h(
    //   h("p", { show: x() > 10 }, `${x()} is greater than 10`),
    //   h("p", { show: x() < 5 }, `${x()} is less than 5`),
    //   h("p", { show: x() >= 5 && x() <= 10 }, `${x()} is between 5 and 10`)
    // );

    // show(
    //   () => x() > 10,
    //   t`${x} is greater than 10`,
    //   () => x() < 5,
    //   t`${x} is less than 5`,
    //   t`${x} is between 5 and 10`
    // );
  },
  List() {
    const cats = [
      { id: "J---aiyznGQ", name: "Keyboard Cat" },
      { id: "z_AbfPXTKms", name: "Maru" },
      { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];

    return h(
      h("h1", "The Famous Cats of YouTube"),
      h(
        "ul",
        cats.map(({ id, name }, i) =>
          h(
            "li",
            h(
              "a",
              {
                target: "_blank",
                rel: "noreferrer",
                href: `https://www.youtube.com/watch?v=${id}`,
              },
              `${i + 1}: ${name}`
            )
          )
        )
      )
    );
  },
  Store() {
    const store = voyage.p({ abc: "def" });

    voyage.e(() => {
      store("abc", "xyz");
      store("foo", "bar");
    });
    // todo: obj props should be immutable as deps in an effect. (done)
    // todo: fix display error (done)

    return JSON.stringify(store());
  },
};

const Test = () => {
  return Object.entries(examples).map(([name, component]) =>
    h(h("h3", name), h(component))
  );
};

voyage.r(Test, document.body);
