let a = {
  b: { c: 1 },
  run() {
    let { b } = a;
    let after = { d: "changed" };
    b = { ...b, ...after };
  },
};
a.run();
console.log(a); //where is a.b.d
