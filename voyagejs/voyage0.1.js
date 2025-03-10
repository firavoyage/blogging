//20240816
//voyage.js 0.1

let voyage = {
  //pure functions
  isString(test) {
    if (typeof test == "string") {
      return true;
    } else {
      return false;
    }
  },
  create(type, labels, contents, binds, methods) {
    //create element
    type = type || "div"; //node tag name
    labels = labels || {}; //node attributes
    contents = contents || []; //node innerText or children
    states = {}; //private states
    let element = { type, labels, contents, binds, methods, states };
    return element;
  },

  //states
  data: {}, //key value data storage
  map: {}, //keys and places and binds
  lib: {}, //methods binded

  counts: { node: 0 },
  count(name) {
    let { counts } = voyage;
    if (!counts[name]) {
      counts[name] = 0;
    }
    counts[name]++;
    let newKey = `${name}${counts[name]}`;
    return newKey;
  },

  //core function
  run(element) {
    //bind element data,get Node
    let { isString, run, count, map, lib } = voyage;
    let { type, labels, contents, binds, methods } = element;
    let node = document.createElement(type);
    for (let i of Object.keys(labels)) {
      node.setAttribute(i, labels[i]);
    }
    if (isString(contents)) {
      node.innerText = contents;
    } else {
      for (let i of contents) {
        child = run(i);
        node.appendChild(child);
      }
    }
    if (binds) {
      let nodeid = count("node");
      node.setAttribute(nodeid, "");
      for (let i of Object.keys(binds)) {
        map[i] = map[i] || {};
        map[i][nodeid] = map[i][nodeid] || [];
        map[i][nodeid] = [...map[i][nodeid], binds[i]];
      }
    }
    if (methods) {
      for (let i of Object.keys(methods)) {
        lib[i] = methods[i];
      }
    }
    return node;
  },

  set(key, value) {
    let { data, map, lib } = voyage;
    data[key] = value;
    if (map[key]) {
      for (let nodeid of Object.keys(map[key])) {
        for (let method of map[key][nodeid]) {
          lib[method](nodeid, value);
        }
      }
    }
  },

  get(key) {
    let { data } = voyage;
    let value = data[key];
    return value;
  },

  getNode(nodeid) {
    let node = document.querySelector(`[${nodeid}]`);
    return node;
  },

  getKey(element, name) {
    let key = element.states[name];
    return key;
  },
};

let unitTest = function () {
  let counter = {
    type: "div",
    labels: {
      onclick: function letsgo() {
        voyage.set("count", voyage.get("count") + 1);
      },
    },
    contents: "abc",
    binds: { count: "process" },
    methods: {
      process(nodeid, value) {
        let node = voyage.getNode(nodeid);
        node.innerText = value;
      },
    },
  };
  document.body.append(voyage.run(counter));
  voyage.set("count", 0o0721);
};

unitTest();
