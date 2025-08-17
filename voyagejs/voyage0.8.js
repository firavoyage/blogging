//20241027
//voyagejs 0.8

let voyage = {
  storage: {},
  states: {},
  listeners: {},
  components: {},
  counter: {
    componentid: 0,
  },
  has(obj, key) {
    return obj.hasOwnProperty(key);
  },
  generate() {
    let { counter } = voyage;
    counter.componentid++;
    return counter.componentid;
  },
  select(componentid) {
    const node = document.querySelector(`[componentid="${componentid}"]`);
    return node;
  },
  createComponent(component, parent) {
    const { generate } = voyage;
    let { states } = voyage;
    const componentid = generate();
    states[componentid] = states[componentid] || [];
    states[componentid].order = 0;
    const node = component();
    states[componentid].order = 0;
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
      if (label[0] === "@") {
        let event = label.slice(1);
        node.addEventListener(event, labels[label]);
      } else {
        node.setAttribute(label, labels[label]);
      }
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
    let { states } = voyage;
    const { has } = voyage;
    const { componentid } = voyage.counter;
    const { order: current } = states[componentid];
    const { defineProperty: listen } = Object;
    if (!has(states[componentid], current)) {
      states[componentid][current] = initial;
    }
    let result = Object(states[componentid][current]);
    const ear = {
      get() {
        return states[componentid][current];
      },
      set(value) {
        states[componentid][current] = value;
      },
    };
    listen(result, "v", ear);
    states[componentid].order++;
    return result;
  },
  storeGlobal(key, value) {},
  store(options) {
    const { storeState, storeGlobal } = voyage;
    let { storage, states } = voyage;
    if (options instanceof Array) {
      //states
      let result = [];
      for (const option of options) {
        result.push(storeState(option));
      }
      return result;
    } else if (options instanceof Object) {
      //global
      return storeGlobal(options);
    } else {
      //state
      return storeState(options);
    }
  },
  define() {},
  run(...options) {
    const { createComponent } = voyage;
    let { component, parent } = options[0];
    if (options[1]) {
      [component, parent] = options;
    }
    const node = createComponent(component, parent);
    parent.appendChild(node);
  },
  remove() {},
};

let examples = {
  counter() {
    const { store, create } = voyage;
    let count = store(0);
    const dec = function (arguments) {
      count.v--;
    };
    const inc = function (arguments) {
      count.v++;
    };
    let combined = create("", "", [
      ["button", { "@click": dec }, "-"],
      ["input", { type: "text", value: count }],
      ["button", { "@click": inc }, "+"],
    ]);
    return combined;
  },
};

voyage.run(examples.counter, document.body);
