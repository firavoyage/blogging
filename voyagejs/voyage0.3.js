//20240820
//voyagejs 0.3

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
  //from [type,labels{},contents[],binds{key:method},states{key:value}]
  create(from) {
    let { isArray, isObject, createContents } = voyage;
    let [a, b, c, d, e] = from; //five options
    let type,
      labels = {},
      contents = [],
      binds = [],
      states = [];
    if (!a) {
      //nothing given
      type = "div";
    } else if (!b) {
      //only type given
      type = a;
    } else if (isArray(b)) {
      //type and contents given and contents is children
      type = a;
      labels = {};
      contents = createContents(b);
      binds = c || {};
      states = d || {};
    } else if (isObject(b)) {
      //type and labels given
      type = a;
      labels = b;
      if (isArray(c)) {
        //contents
        contents = createContents(c);
      } else {
        contents = c || [];
      }
      binds = d || {};
      states = e || {};
    } else {
      //type and contents given and contents is text node
      type = a;
      labels = {};
      contents = b || [];
      binds = c || {};
      states = d || {};
    }
    let element = { type, labels, contents, binds, states };
    return element;
  },
  createContents(children) {
    let { create } = voyage;
    let result = [];
    for (let child of children) {
      result.push(create(child));
    }
    return result;
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
    class(nodeid, value) {
      let { getNode } = voyage;
      let node = getNode(nodeid);
      node.setAttribute("style", value);
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
    let { init, create, run, select, setMethods } = voyage;
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
    parent.append(run(create(element)));
  },
  run(element) {
    //render element to node
    let { is, handle } = voyage;
    let { hasState, hasMethod, hasKey } = voyage;
    let { count } = voyage;
    let { get, getState } = voyage;
    let { runContents } = voyage;
    let { setBind, setStates } = voyage;
    let { type, labels, contents, binds, states } = element;
    //create element
    type = type || "div";
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute("nodeid", nodeid);
    //set states
    if (states) {
      setStates(nodeid, states);
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
              setStates(nodeid, { if: key });
              setStates(nodeid, { contents: contents });
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
  setMethods(methods) {
    //for methods setMethod
    let { lib } = voyage;
    Object.assign(lib, methods);
  },
  setStates(nodeid, states) {
    let { nodes } = voyage;
    nodes[nodeid] = nodes[nodeid] || {};
    nodes[nodeid] = { ...nodes[nodeid], ...states };
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
  removeAllBinds(nodeid) {
    let { map, remove } = voyage;
    let { removal, has } = voyage;
    //for removal removeBind(key,nodeid)
    if (has(removal, nodeid)) {
      for (let key of removal[nodeid]) {
        remove(map[key], nodeid);
      }
    }
  },
  removeAllStates(nodeid) {
    //for removal removeBind(key,nodeid)
    let { nodes, has, remove } = voyage;
    if (has(nodes, nodeid)) {
      remove(nodes, nodeid);
    }
  },
  removeAllChildren(node) {
    let { toArray } = voyage;
    let { getNodeid } = voyage;
    let { removeAllBinds, removeAllStates, removeAllChildren } = voyage;
    for (let child of toArray(node.children)) {
      //recursively remove all children
      removeAllChildren(child);
      //remove binds and states of the child
      let nodeid = getNodeid(child);
      removeAllBinds(nodeid);
      removeAllStates(nodeid);
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
    let { parseInt: toInt } = window;
    voyage.go({
      element: [
        "div",
        { id: "container" },
        [
          ["button", { "@click": "inc" }, "+"],
          ["input", { type: "text", $model: "count" }],
          ["button", { "@click": "dec" }, "-"],
        ],
      ],
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
};

unitTests.counter();

//todo
//id class and attr in tag
//div#id.class[great123][attr="attr"]
//parse type
//first is tag and second is obj arr or obj or arr

//custom component like counter
//ant design voyage
//sr voyage
