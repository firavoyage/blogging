const { h, p, e, r } = voyage;

const pre = ({ slides, settings, extensions }) => {
  const page = p(1);
  const current = p({});

  // fix flash of unstyled content
  const loaded = p(false);

  const actions = {
    next() {
      if (page() <= slides.length - 1) {
        page((x) => x + 1);
      }
    },
    prev() {
      if (page() >= 2) {
        page((x) => x - 1);
      }
    },
    setTheme(theme) {
      const style = document.getElementById("theme");
      style.textContent = theme;
    },
  };

  // listen to keyboard events
  e(() => {
    listen({
      j: actions.next,
      k: actions.prev,
    });
  });

  // set current settings to default
  e(() => {
    current.produce((current) => {
      for (const item in settings) {
        current[item] = settings[item].default;
      }
    });
  });

  // apply current settings
  e(() => {
    // todo: apply not only themes
    const theme =
      settings.theme.options[current().theme] +
      settings.codeTheme.options[current().codeTheme];
    actions.setTheme(theme);
  }, [current]);

  // trigger loaded event
  e(() => {
    loaded(true);
  });

  return loaded() && h("div", { html: slides[page() - 1], class: "pre" });
};

const app = () => h(pre, data);

r(app, document.body);
