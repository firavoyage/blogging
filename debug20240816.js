let a = {
  b: { c: 1 },
  run() {
    let { b } = a;
    let after = { d: "changed" };
    b = { ...b, ...after };
    console.log(b)
  },
};
a.run();
console.log(a); //wtf! where is a.b.d


