let a = {
  b: { c: 1 },
  run() {
    let { b } = a;
    let after = { d: "changed" };
    b = { ...b, ...after };
  },
};
a.run();
console.log(a); //not changed

// let a = {
//   b: { c: {} },
//   run() {
//     let { b } = a;
//     let after = { d: "changed" };
//     b.c = { ...b.c, ...after };
//   },
// };
// a.run();
// console.log(a); //not changed


