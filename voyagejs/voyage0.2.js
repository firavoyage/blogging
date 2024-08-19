//20240817
//voyage.js 0.2

let voyage = {
  //tests [[is1(),good()],[2,bad()],[is3(),ugly()]]
  handle(value, tests) {
    //another switch statement
    //return first match or undefined
    let { is, isFunction } = voyage;
    let result = undefined;
    for (let test of tests) {
      if (test[1]) {
        //[query,match]
        let query = test[0];
        let match = test[1];
        let isMatch;
        if (isFunction(query)) {
          isMatch = query(value);
        } else {
          isMatch = is(query, value);
        }
        if (isMatch) {
          result = match();
          break;
        }
      } else {
        //[match]
        //the default case
        let match = test[0];
        result = match();
      }
    }
    return result;
  },
  is(a, b) {
    return a === b;
  },
  has(obj, key) {
    //hasOwnProperty
    return obj.hasOwnProperty(key);
  },
  isArray(obj) {
    //Array.isArray
    return Array.isArray(obj);
  },
  isFunction(obj) {
    return obj instanceof Function;
  },
  create(type, labels, contents, binds, methods, states) {
    //create element
    type = type || "div";
    let element = { type, labels, contents, binds, methods, states };
    return element;
  },
  //data storage
  data: {}, //[key] -> value
  //key binds on each node
  map: {}, //[key][nodeid] -> binds[]
  //method library
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
      if (value) {
        node.style.display = "unset";
      } else {
        node.style.display = "none";
      }
    },
    if(nodeid, value) {
      let { run, getNode, getState } = voyage;
      let node = getNode(nodeid);
      if (value) {
        let contents = getState(nodeid, "contents");
        if (typeof contents != "object") {
          //number or string 123 "abc"
          node.innerText = contents;
        } else {
          //array children[]
          for (let child of contents) {
            node.append(run(child));
          }
        }
      } else {
        //remove all children
        node.innerHTML = "";
      }
    },
  }, //[methodName] -> method
  //node states
  nodes: {}, //[nodeid][stateName] -> state
  //key counter
  counts: { node: 0 }, //[key] -> count
  count(name) {
    let { counts } = voyage;
    if (!counts[name]) {
      counts[name] = 0;
    }
    counts[name]++;
    let newKey = `${name}${counts[name]}`;
    return newKey;
  },
  select(selector) {
    //let { querySelector: select } = document; //!Uncaught TypeError: Illegal invocation
    return document.querySelector(selector);
  },
  //way {element,data,where}
  go(way) {
    //init and run and append
    let { init, run, select, setMethods } = voyage;
    let { element, data, place, methods } = way;
    //set data
    if (data) {
      init(data);
    }
    //set methods
    if (methods) {
      setMethods(methods);
    }
    let parent = select(place);
    parent.append(run(element));
  },
  run(element) {
    //render element to node
    let { lib, data } = voyage;
    let { is, isArray, has, handle } = voyage;
    let { run, count, get, setMethods, setBind, setState } = voyage;
    let { type, labels, contents, binds, methods, states } = element;
    //process type and create element
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute(nodeid, "");
    //set methods
    if (methods) {
      setMethods(methods);
    }
    //set states
    if (states) {
      let { nodes } = voyage;
      for (let stateName of Object.keys(states)) {
        nodes[nodeid][stateName] = states[stateName];
      }
    }
    //set binds
    if (binds) {
      for (let key of Object.keys(binds)) {
        setBind(key, nodeid, binds[key]);
      }
    }
    //set labels and process special labels
    if (labels) {
      for (let labelName of Object.keys(labels)) {
        let cases = [
          [
            function isEvent(labelName) {
              return is(labelName[0], "@");
            },
            function () {
              //@event
              let event = labelName.replace("@", "on");
              let handler;
              if (has(lib, labels[labelName])) {
                //a lib function
                handler = `voyage.lib["${labels[labelName]}"]()`;
              } else {
                //not a lib function
                handler = labels[labelName];
              }
              node.setAttribute(event, handler);
            },
          ],
          [
            "$model",
            function () {
              //two way data binding
              let key = labels[labelName];
              //bind value change to node
              setBind(key, nodeid, "value");
              //bind node change to value
              node.setAttribute(
                "onchange",
                `voyage.handleInput("${nodeid}","${key}")`
              );
              if (has(data, key)) {
                //data inited
                node.value = get(key);
              }
            },
          ],
          [
            "$if",
            function () {
              //run children or not
              let key = labels[labelName];
              setState(nodeid, "contents", contents);
              setBind(key, nodeid, "if");
            },
          ],
          [
            function () {
              //ordinary label
              node.setAttribute(labelName, labels[labelName]);
            },
          ],
        ];
        handle(labelName, cases);
      }
    }
    //set contents
    if (contents) {
      if (isArray(contents)) {
        //children[]
        for (let child of contents) {
          node.append(run(child));
        }
      } else {
        //number or string
        node.innerText = contents;
      }
    }
    return node;
  },
  //someData [key] -> value
  init(someData) {
    //set all data wihout calling binds
    let { data } = voyage;
    //set all data
    for (let key of Object.keys(someData)) {
      let value = someData[key];
      data[key] = value;
    }
  },
  set(key, value) {
    //set data and call binds
    let { is } = voyage;
    let { data, map, lib } = voyage;
    if (is(data[key], value)) {
      //no change
      //do nothing
    } else {
      //set data
      data[key] = value;
      //call binds
      if (map[key]) {
        for (let nodeid of Object.keys(map[key])) {
          for (let method of map[key][nodeid]) {
            lib[method](nodeid, value);
          }
        }
      }
    }
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
  setMethods(methods) {
    //voyage.setMethod
    let { setMethod } = voyage;
    for (let methodName of Object.keys(methods)) {
      setMethod(methodName, methods[methodName]);
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
      //do nothing
    } else {
      //define bind
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
    let { select } = voyage;
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
  handleInput(nodeid, key) {
    let { getValue, set } = voyage;
    let value = getValue(nodeid);
    set(key, value);
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
      voyage.set("count", int(voyage.get("count")) + 1);
    };
    let dec = function () {
      voyage.set("count", int(voyage.get("count")) - 1);
    };
    let container = voyage.create("div", { id: "container" }, [
      voyage.create("button", { "@click": "inc" }, "+", "", { inc }),
      voyage.create("input", { type: "text", $model: "count" }),
      voyage.create("button", { "@click": "dec" }, "-", "", { dec }),
    ]);
    document.body.append(voyage.run(container));
    voyage.set("count", 0o0721);
  },
  go() {
    let { parseInt: int } = window;
    voyage.go({
      element: voyage.create("div", { id: "container" }, [
        voyage.create("button", { "@click": "inc" }, "+", ""),
        voyage.create("input", { type: "text", $model: "count" }),
        voyage.create("button", { "@click": "dec" }, "-", ""),
      ]),
      data: { count: 0o0721 },
      place: "body",
      methods: {
        inc() {
          voyage.set("count", int(voyage.get("count")) + 1);
        },
        dec() {
          voyage.set("count", int(voyage.get("count")) - 1);
        },
      },
    });
  },
  if() {},
};

unitTests.go();

//todo fix bug in if
//bug when changing display between false and true
//should copy more states not just contents
