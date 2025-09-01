const { h, p, e, r } = voyage;

const pre = ({ slides, settings, extensions }) => {
  const container = p();
  const style = p();
  const page = p(1);

  // current settings
  const current = p(
    Object.fromEntries(
      Object.entries(settings).map(([item, value]) => [item, value.default])
    )
  );

  // done: fix flash of unstyled content

  // style loaded
  const loaded = p(false);

  const scroll = p({});

  const range = (min, max) => ({
    [Symbol.hasInstance]: (num) => num >= min && num <= max,
  });

  const actions = {
    navigate(to) {
      window.a = range(1, slides.length - 1)
      console.log(to, 1, slides.length - 1);
      if (to in range(1, slides.length - 1)) {
        // save current page scroll position
        console.log(container().scrollTop);
        scroll(page(), container().scrollTop);

        // set page state
        page(to);
      }
    },
    next() {
      actions.navigate(page() + 1);
    },
    prev() {
      actions.navigate(page() - 1);
    },
    setTheme(theme) {
      style().textContent = theme;
    },
  };

  // listen to keyboard events
  e(() => {
    listen({
      j: actions.next,
      k: actions.prev,
    });
  });

  // apply current settings
  e(() => {
    // todo: apply not only themes
    const theme =
      settings.theme.options[current().theme] +
      settings.codeTheme.options[current().codeTheme];
    actions.setTheme(theme);
    loaded(true);
  }, [current]);

  return h(
    h("style", { ref: style }),
    loaded() &&
      h("div", {
        html: slides[page() - 1],
        class: "pre",
        ref: container,
      })
  );
};

const app = () => h(pre, data);

r(app, document.body);
