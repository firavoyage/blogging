//20241029
//voyagejs 0.9

let voyage = {
  storage: {},
  states: {},
  components: {},
  counter: {
    componentid: 0,
    current: 0,
  },
  is(a, b) {
    return a === b;
  },
  isnt(a, b) {
    return a !== b;
  },
  has(obj, key) {
    const { isnt } = voyage;
    if (isnt(typeof obj, "object")) {
      return false;
    }
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
    const { has } = voyage;
    const { generate } = voyage;
    const { updateComponent } = voyage;
    let { states, counter } = voyage;
    const componentid = generate();
    counter.current = componentid;
    states[componentid] = states[componentid] || [];
    if (!has(states[componentid], "update")) {
      states[componentid].update = function () {
        updateComponent(component, componentid);
      };
    }
    states[componentid].order = 0;
    const node = component();
    states[componentid].order = 0;
    node.setAttribute("componentid", componentid);
    return node;
  },
  createNode(element) {
    const { is } = voyage;
    element = element || [];
    let [tag, labels, children] = element;
    tag = tag || "div";
    labels = labels || {};
    children = children || [];
    let node = document.createElement(tag);
    for (const label in labels) {
      if (is(label[0], "@")) {
        let event = label.slice(1);
        node.addEventListener(event, labels[label]);
      } else {
        node.setAttribute(label, labels[label]);
      }
    }
    if (is(typeof children, "string")) {
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
    const { isnt, has } = voyage;
    const { current } = voyage.counter;
    const { order: here } = states[current];
    const { defineProperty: watch } = Object;
    if (!has(states[current], here)) {
      states[current][here] = initial;
    }
    let result = Object(states[current][here]);
    const eye = {
      get() {
        return states[current][here];
      },
      set(value) {
        if (isnt(states[current][here], value)) {
          states[current][here] = value;
          states[current].update();
        }
      },
    };
    const alias = ["v", "value"];
    for (let key of alias) {
      watch(result, key, eye);
    }
    states[current].order++;
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
  updateComponent(component, componentid) {
    const { select } = voyage;
    let { states, counter } = voyage;
    const node = select(componentid);
    states[componentid] = states[componentid] || [];
    states[componentid].order = 0;
    counter.current = componentid;
    const newComponent = component();
    newComponent.setAttribute("componentid", componentid);
    states[componentid].order = 0;
    node.parentNode.replaceChild(newComponent, node);
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
voyage.run(examples.counter, document.body);
