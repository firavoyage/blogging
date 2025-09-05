// update weekly: 2025090x

const { h, p, e, r } = voyage;

const pre = ({ slides, settings, extensions }) => {
  const container = p();
  const style = p();
  const page = p(1);

  const currentSettings = p(
    Object.fromEntries(
      Object.entries(settings).map(([item, value]) => [item, value.default])
    )
  );

  // done: fix flash of unstyled content

  const styled = p(false);
  const scrolled = p(false);

  // scroll position
  const scroll = p(
    Object.fromEntries(
      Array.from({ length: slides.length }, (_, i) => [i + 1, 0])
    )
  );

  const range = (min, max) => ({
    includes(num) {
      return num >= min && num <= max;
    },
  });

  const actions = {
    navigate(index) {
      if (range(1, slides.length).includes(index)) {
        // save the scroll position of current page
        scroll(page(), container().scrollTop);

        // navigate to the page given
        page(index);

        // yet to be scrolled
        scrolled(false);
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

  // restore scroll position of the current page
  e(() => {
    container().scrollTop = scroll()[page()];
    scrolled(true);
  }, [page]);

  // apply current settings
  e(() => {
    // todo: apply not only themes
    const theme =
      settings.theme.options[currentSettings().theme] +
      settings.codeTheme.options[currentSettings().codeTheme];
    actions.setTheme(theme);

    styled(true);
  }, [currentSettings]);

  return h(
    h("style", { ref: style }),
    h("style", ".pre.loading * {visibility: hidden}"),
    h("div", {
      html: slides[page() - 1],
      class: ["pre", !(styled() && scrolled()) && "loading"],
      ref: container,
    })
  );
};

const app = () => h(pre, data);

r(app, document.body);
