const { h, p, e, r } = voyage;

const pre = ({ slides }) => {
  const page = p(1);

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
  };

  e(() => {
    listen({
      j: actions.next,
      k: actions.prev,
    });
  });
  return h("div", { html: slides[page() - 1] });
};

const app = () => h(pre, { slides });

r(app, document.body);
