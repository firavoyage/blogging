//20241027
//voyagejs 0.8

let voyage = {
  storage: {},
  states: {},
  listeners: {},
  components: {},
  counter: {
    componentid: 0,
    current: 0,
  },
  generate() {
    let { counter } = voyage;
    counter.componentid++;
    counter.current = counter.componentid;
    return counter.componentid;
  },
  select(componentid) {
    const node = document.querySelector(`[componentid="${componentid}"]`);
    return node;
  },
  createNode(element) {
    element = element || [];
    let [tag, labels, children] = element;
    tag = tag || "div";
    labels = labels || {};
    children = children || [];
    let node = document.createElement(tag);
    for (const label in labels) {
      node.setAttribute(label, labels[label]);
    }
    if (typeof children === "string") {
      node.innerText = children;
    } else {
      for (const child of children) {
        if (child instanceof Array) {
          const { createNode } = voyage;
          node.appendChild(createNode(child));
        } else if (child instanceof Node) {
          node.appendChild(child);
        }
      }
    }
    return node;
  },
  create(...options) {
    const { createNode } = voyage;
    if (options[0] instanceof Array) {
      return createNode(options[0]);
    } else {
      return createNode(options);
    }
  },
  storeState(initial) {
    const { current } = voyage.counter;
  },
  storeGlobal(arguments) {},
  store(options) {
    const { storeState, storeGlobal } = voyage;
    let { storage, states } = voyage;
    if(options instanceof Array){
      //states
    }else if (options instanceof Object) {
      //global
      storeGlobal(options)
    }else {
      //state
      storeState(options)
    }
  },
  define() {},
  run(options) {},
  remove() {},
};

let examples = {
  counter() {
    const { store, create } = voyage;
    let count = store(0);
    let dec = create("button", undefined, "-");
    let num = create("input", { type: "text", value: count });
    let inc = create("button", undefined, "+");
    let combined = create("", "", [dec, num, inc]);
    console.log(dec);
    document.body.appendChild(combined);
  },
};

examples.counter();
