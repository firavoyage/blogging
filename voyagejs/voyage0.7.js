//20241026
//voyagejs 0.7

let voyage = {
  storage: {},
  states: {},
  listeners: {},
  components: {},
  counter: {
    componentid: 0,
  },
  generate() {
    let { counter } = voyage;
    counter.componentid++;
    return counter.componentid;
  },
  select(componentid) {
    let node = document.querySelector(`[componentid="${componentid}"]`);
    return node;
  },
  create(element) {
    if (!element) {
      element = [];
    }
    let [tag, labels, children] = element;
    if (!tag) {
      tag = "div";
    }
    if (!labels) {
      labels = {};
    }
    if (!children) {
      children = [];
    }
    let node = document.createElement(tag);

    for (const label in labels) {
      node.setAttribute(label, labels[label]);
    }

    if (typeof children === "string") {
      node.innerText = children;
    } else {
      for (const child of children) {
        if (child instanceof Array) {
          const { create } = voyage;
          node.appendChild(create(child));
        } 
        else if (child instanceof Node) {
          node.appendChild(child);
        }
      }
    }
  },
  storeState(){
    const {componentid} = voyage.counter
  },
  storeGlobal(arguments) {
    
  },
  store(options) {
    const {storeState,storeGlobal} =voyage
    let {storage,states} = voyage
    
  },
  define() {},
  run(options) {},
  remove() {},
};

//unit tests
let examples = {
  counter() {},
};

examples.counter();
