const { h, p, e, r } = voyage;

const app = () => {
  const data = p({});

  return h(
    "svg",
    { width: "100%", height: "100vh", viewBox: "0 0 100 100" },
    h("circle", { cx: 50, cy: 50, r: 10, fill: "lightblue" })
  );
};

r(app, document.body);
