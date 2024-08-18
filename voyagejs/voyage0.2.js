//20240817
//voyage.js 0.2

let voyage = {
  create(type, labels, contents, binds, methods, states) {
    //create element
    if (!type) {
      //default type is div
      type = "div";
    }
    let element = { type, labels, contents, binds, methods, states };
    return element;
  },
  data: {}, //data storage [key] -> value
  map: {}, //key binds on each node [key][nodeid] -> binds[]
  lib: {
    text(nodeid, text) {
      let { getNode } = voyage;
      let node = getNode(nodeid);
      node.innerText = text;
    },
    html(nodeid, html) {
      let { getNode } = voyage;
      let node = getNode(nodeid);
      node.innerHTML = html;
    },
    value(nodeid, value) {
      let { getNode } = voyage;
      let node = getNode(nodeid);
      node.value = value;
    },
    show(nodeid, value) {
      let { getNode } = voyage;
      let node = getNode(nodeid);
      if (value == true) {
        node.style.display = "unset";
      } else {
        node.style.display = "none";
      }
    },
    if(nodeid, value) {
      let { run, getNode, getState } = voyage;
      let node = getNode(nodeid);
      if (value == true) {
        let contents = getState(nodeid, "contents");
        if (typeof contents != "object") {
          //number or string 123 "abc"
          node.innerText = contents;
        } else {
          //array children[]
          for (let child of contents) {
            node.appendChild(run(child));
          }
        }
      } else {
        //remove all children
        node.innerHTML = "";
      }
    },
  }, //method library
  nodes: {}, //node states [nodeid][stateName] -> state
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
  run(element) {
    //render element to node
    let { run, count, set, hasMethod, setMethod, setBind, setState, getValue } =
      voyage;
    let { isArray } = Array;
    let { type, labels, contents, binds, methods, states } = element;
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute(nodeid, "");
    //define methods
    if (methods) {
      if (isArray(methods)) {
        for (let method of methods) {
          setMethod(method.name, method);
        }
      } else {
        for (let methodName of Object.keys(methods)) {
          setMethod(methodName, methods[methodName]);
        }
      }
    }
    //process labels
    if (labels) {
      for (let labelName of Object.keys(labels)) {
        if (labelName[0] == "@") {
          //alias of event binding
          //@event
          let event = labelName.replace("@", "on");
          if (hasMethod(labels[labelName])) {
            //a lib function
            handler = `voyage.lib["${labels[labelName]}"]()`;
          } else {
            //not a lib function
            let handler = labels[labelName];
          }
          node.setAttribute(event, handler);
        } else if (labelName == "$model") {
          //two way data binding
          //bind value to node (set value in js -> change value in node)
          let key = labels[labelName];
          setBind(key, nodeid, "value");
          //bind node to value (node onchange -> set value in js)
          let anonymous = count("anonymous");
          setMethod(anonymous, function () {
            let value = getValue(nodeid);
            set(key, value);
          });
          node.setAttribute("onchange", `voyage.lib.${anonymous}()`);
        } else if (labelName == "$if") {
          //run children or not
          let key = labels[labelName];
          setState(nodeid, "contents", contents);
          setBind(key, nodeid, "if");
        } else {
          node.setAttribute(labelName, labels[labelName]);
        }
      }
    }
    //process contents
    if (contents) {
      if (typeof contents != "object") {
        //number or string 123 "abc"
        node.innerText = contents;
      } else {
        //array children[]
        for (let child of contents) {
          node.appendChild(run(child));
        }
      }
    }
    //process binds
    if (binds) {
      for (let key of Object.keys(binds)) {
        setBind(key, nodeid, binds[key]);
      }
    }
    //process states
    if (states) {
      let { nodes } = voyage;
      for (let stateName of Object.keys(states)) {
        nodes[nodeid][stateName] = states[stateName];
      }
    }
    return node;
  },
  set(key, value) {
    let { data, map, lib } = voyage;
    if (data[key] == value) {
      return;
    }
    data[key] = value;
    if (map[key]) {
      for (let nodeid of Object.keys(map[key])) {
        for (let method of map[key][nodeid]) {
          lib[method](nodeid, value);
        }
      }
    }
  },
  hasMethod(methodName) {
    //voyage.lib.hasOwnProperty(methodName)
    let { lib } = voyage;
    let has = lib.hasOwnProperty(methodName);
    return has;
  },
  setMethod(methodName, method) {
    //voyage.lib[methodName]=method
    let { lib } = voyage;
    if (lib[methodName]) {
      //already defined
    } else {
      //define method
      lib[methodName] = method;
    }
  },
  setState(nodeid, stateName, state) {
    //voyage.nodes[nodeid][stateName]=state
    let { nodes } = voyage;
    nodes[nodeid] = nodes[nodeid] || {};
    nodes[nodeid][stateName] = state;
  },
  setBind(key, nodeid, bind) {
    let { map } = voyage;
    map[key] = map[key] || {};
    map[key][nodeid] = map[key][nodeid] || [];
    if (map[key][nodeid].indexOf(bind) >= 0) {
      //already binded
    } else {
      //bind
      map[key][nodeid].push(bind);
    }
  },
  get(key) {
    //voyage.data[key]
    let { data } = voyage;
    let value = data[key];
    return value;
  },
  getState(nodeid, stateName) {
    //voyage.nodes[nodeid][stateName]
    let { nodes } = voyage;
    let state = nodes[nodeid][stateName];
    return state;
  },
  getNode(nodeid) {
    //select `[${nodeid}]`
    let select = function (selector) {
      //let { querySelector: select } = document;
      //!Uncaught TypeError: Illegal invocation
      return document.querySelector(selector);
    };
    let node = select(`[${nodeid}]`);
    return node;
  },
  getValue(nodeid) {
    //node.value
    let { getNode } = voyage;
    let node = getNode(nodeid);
    let value = node.value;
    return value;
  },
};

//examples
let unitTests = {
  counter() {
    let inc = function () {
      voyage.set("count", voyage.get("count") + 1);
    };
    let counter = voyage.create(
      "div",
      { "@click": "inc" },
      "",
      { count: "text" },
      { inc }
    );
    document.body.append(voyage.run(counter));
    voyage.set("count", 0o0721);
  },
  input() {
    let { parseInt: int } = window;
    let inc = function () {
      voyage.set("count", int(voyage.data["count"]) + 1);
    };
    let dec = function () {
      voyage.set("count", int(voyage.get("count")) - 1);
    };
    let container = voyage.create("div", { id: "container" }, [
      voyage.create("button", { "@click": "inc" }, "+", "", [inc]),
      voyage.create("input", { type: "text", $model: "count" }),
      voyage.create("button", { "@click": "dec" }, "-", "", [dec]),
    ]);
    document.body.append(voyage.run(container));
    voyage.set("count", 0o0721);
  },
  if() {
    let inc = function () {
      voyage.set("count", voyage.get("count") + 1);
    };
    let counter = voyage.create(
      "div",
      { "@click": "inc", $if: "display" },
      "",
      { count: "text" },
      { inc }
    );
    document.body.append(voyage.run(counter));
    voyage.set("count", 0o0721);
  },
};

unitTests.if();

//todo fix bug in if
//bug when changing display between false and true
//should copy more states not just contents

