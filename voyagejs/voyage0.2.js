//20240817
//voyagejs 0.2

let log = console.log;

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
    let { isObject } = voyage;
    if (isObject(obj)) {
      return obj.hasOwnProperty(key);
    } else {
      return false;
    }
  },
  remove(obj, key) {
    delete obj[key];
  },
  isObject(test) {
    return test instanceof Object;
  },
  isArray(obj) {
    return Array.isArray(obj);
  },
  toArray(obj) {
    return Array.from(obj);
  },
  isFunction(obj) {
    return obj instanceof Function;
  },
  create(type, labels, contents, binds, methods, states) {
    //create element
    let element = { type, labels, contents, binds, methods, states };
    return element;
  },
  //data storage
  data: {}, //[key] -> value
  //key binds on each node
  map: {}, //[key][nodeid] -> binds[]
  //mark for removal
  removal: {}, //[nodeid] -> keys[]
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
      let { runContents, getNode, getState, removeAllChildren } = voyage;
      let node = getNode(nodeid);
      if (value) {
        removeAllChildren(node);
        let contents = getState(nodeid, "contents");
        runContents(node, contents);
      } else {
        removeAllChildren(node);
      }
    },
  }, //[methodName] -> method
  //node states
  nodes: {}, //[nodeid][stateName] -> state
  //key counter
  counts: { node: 0 }, //[key] -> count
  count(key) {
    let { counts } = voyage;
    if (!counts[key]) {
      //init
      counts[key] = 0;
    }
    counts[key]++;
    return counts[key];
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
    let { is, handle } = voyage;
    let { hasState, hasMethod, hasKey } = voyage;
    let { count } = voyage;
    let { get, getState } = voyage;
    let { runContents } = voyage;
    let { setMethods, setBind, setState } = voyage;
    let { type, labels, contents, binds, methods, states } = element;
    //create element
    type = type || "div";
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute("nodeid", nodeid);
    //set methods
    if (methods) {
      setMethods(methods);
    }
    //set states
    if (states) {
      let { nodes } = voyage;
      for (let stateName in states) {
        nodes[nodeid][stateName] = states[stateName];
      }
    }
    //set binds
    if (binds) {
      for (let key in binds) {
        setBind(key, nodeid, binds[key]);
      }
    }
    //set labels and process special labels
    if (labels) {
      for (let labelName in labels) {
        let cases = [
          [
            function isEvent(labelName) {
              return is(labelName[0], "@");
            },
            function () {
              //@event
              let event = labelName.replace("@", "on");
              let handler;
              if (hasMethod(labels[labelName])) {
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
                `voyage.handleInputOnchange("${nodeid}","${key}")`
              );
              if (hasKey(key)) {
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
              setState(nodeid, "if", key);
              setState(nodeid, "contents", contents);
              setBind(key, nodeid, "if");
            },
          ],
          [
            //default case
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
      if (hasState(nodeid, "if")) {
        if (get(getState(nodeid, "if"))) {
          runContents(node, contents);
        } else {
          //do not run contents
        }
      } else {
        runContents(node, contents);
      }
    }
    return node;
  },
  runContents(node, contents) {
    let { isArray, run } = voyage;
    if (isArray(contents)) {
      //children[]
      for (let child of contents) {
        node.append(run(child));
      }
    } else {
      //number or string
      node.innerText = contents;
    }
  },
  //someData [key] -> value
  init(someData) {
    //set all data wihout calling binds
    let { data } = voyage;
    //set all data
    for (let key in someData) {
      let value = someData[key];
      data[key] = value;
    }
  },
  hasState(nodeid, state) {
    //has(nodes,state)
    let { has, nodes } = voyage;
    return has(nodes[nodeid], state);
  },
  hasMethod(methodName) {
    //has(lib,methodName)
    let { has, lib } = voyage;
    return has(lib, methodName);
  },
  hasKey(key) {
    //has(data, key)
    let { has, data } = voyage;
    return has(data, key);
  },
  hasBind(key) {
    //has(map,key)
    let { has, map } = voyage;
    return has(map, key);
  },
  hasRemoval(nodeid) {
    //has(removal,nodeid)
    let { has, removal } = voyage;
    return has(removal, nodeid);
  },
  set(key, newValue) {
    //set data and call binds
    let { is, get, hasBind, getBindedMethods, getBindedNodes, call } = voyage;
    let { data } = voyage;
    if (is(get(key), newValue)) {
      //no need to change
    } else {
      //get old value
      let oldValue = get(key);
      //set data
      data[key] = newValue;
      //call binds
      if (hasBind(key)) {
        for (let nodeid in getBindedNodes(key)) {
          for (let method of getBindedMethods(key, nodeid)) {
            call(method, nodeid, newValue, oldValue);
          }
        }
      }
    }
  },
  call(method, nodeid, newValue, oldValue) {
    //lib[method](nodeid, newValue, oldValue)
    let { lib } = voyage;
    lib[method](nodeid, newValue, oldValue);
  },
  setMethod(methodName, method) {
    //lib[methodName]=method
    let { lib } = voyage;
    if (lib[methodName]) {
      //already defined
    } else {
      //define method
      lib[methodName] = method;
    }
  },
  setMethods(methods) {
    //for methods setMethod
    let { setMethod } = voyage;
    for (let methodName in methods) {
      setMethod(methodName, methods[methodName]);
    }
  },
  setState(nodeid, stateName, state) {
    //nodes[nodeid][stateName]=state
    let { nodes } = voyage;
    nodes[nodeid] = nodes[nodeid] || {};
    nodes[nodeid][stateName] = state;
  },
  setBind(key, nodeid, bind) {
    //map[key][nodeid].push(bind);
    let { map, removal } = voyage;
    map[key] = map[key] || {};
    map[key][nodeid] = map[key][nodeid] || [];
    if (map[key][nodeid].indexOf(bind) >= 0) {
      //already binded
    } else {
      //define bind
      map[key][nodeid].push(bind);
    }
    //mark for removal
    removal[nodeid] = removal[nodeid] || [];
    removal[nodeid].push(key);
  },
  get(key) {
    //data[key]
    let { data } = voyage;
    let value = data[key];
    return value;
  },
  getBindedNodes(key) {
    //map[key]
    let { map } = voyage;
    return map[key];
  },
  getBindedMethods(key, nodeid) {
    //map[key][nodeid]
    let { map } = voyage;
    return map[key][nodeid];
  },
  getState(nodeid, stateName) {
    //nodes[nodeid][stateName]
    let { nodes } = voyage;
    let state = nodes[nodeid][stateName];
    return state;
  },
  getNode(nodeid) {
    //select `[${nodeid}]`
    let { select } = voyage;
    let node = select(`[nodeid="${nodeid}"]`);
    return node;
  },
  getNodeid(node) {
    //node.getAttribute("nodeid")
    return node.getAttribute("nodeid");
  },
  getValue(nodeid) {
    //node.value
    let { getNode } = voyage;
    let node = getNode(nodeid);
    let value = node.value;
    return value;
  },
  removeBind(key, nodeid) {
    let { map, remove } = voyage;
    remove(map[key], nodeid);
  },
  removeAllBinds(nodeid) {
    //for removal removeBind(key,nodeid)
    let { removal, hasRemoval, removeBind } = voyage;
    if (hasRemoval(nodeid)) {
      for (let key of removal[nodeid]) {
        removeBind(key, nodeid);
      }
    }
  },
  removeAllChildren(node) {
    let { toArray } = voyage;
    let { getNodeid } = voyage;
    let { removeAllBinds, removeAllChildren } = voyage;
    for (let child of toArray(node.children)) {
      //recursively remove all children
      removeAllChildren(child);
      //remove binds of the child
      let nodeid = getNodeid(child);
      removeAllBinds(nodeid);
      //remove the child itself
      child.remove();
    }
  },
  handleInputOnchange(nodeid, key) {
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
    let { parseInt: toInt } = window;
    let inc = function () {
      voyage.set("count", toInt(voyage.get("count")) + 1);
    };
    let dec = function () {
      voyage.set("count", toInt(voyage.get("count")) - 1);
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
    let { parseInt: toInt } = window;
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
          voyage.set("count", toInt(voyage.get("count")) + 1);
        },
        dec() {
          voyage.set("count", toInt(voyage.get("count")) - 1);
        },
      },
    });
  },
  if() {
    let { parseInt: toInt } = window;
    voyage.go({
      element: voyage.create("div", { id: "container", $if: "display" }, [
        voyage.create("button", { "@click": "inc" }, "+", ""),
        voyage.create("input", { type: "text", $model: "count" }),
        voyage.create("button", { "@click": "dec" }, "-", ""),
      ]),
      data: { count: 0o0721, display: 1 },
      place: "body",
      methods: {
        inc() {
          voyage.set("count", toInt(voyage.get("count")) + 1);
        },
        dec() {
          voyage.set("count", toInt(voyage.get("count")) - 1);
        },
      },
    });
  },
};

unitTests.if();
