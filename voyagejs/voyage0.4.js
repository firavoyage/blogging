//20240821
//voyagejs 0.4

let log = console.log;

let voyage = {
  //value
  //the test value
  //tests
  //[{case:true,fn1()},{case:fn(what),fn2},{case:213,fn3},{fndef}]
  //stop
  //can stop at first match
  match(value, tests, stop = true) {
    let { is, isBoolean, isFunction } = voyage;
    for (let test of tests) {
      let keys = Object.keys(test);
      if (is(keys.length, 1)) {
        //default case
        //no need to match value
        test[keys[0]]();
      } else {
        let isMatch = false;
        if (isBoolean(test.case)) {
          //if case is true then call the function
          //else do nothing
          //here we dont try to match the value to a boolean case
          //because you wont switch a boolean
          //for example
          //switch isSomething case true fn1 case false fn2
          //instead you write
          //if(isSomething){fn1}else{fn2}
          isMatch = test.case;
        } else if (isFunction(test.case)) {
          isMatch = test.case(value);
        } else {
          isMatch = is(value, test.case);
        }
        if (isMatch) {
          for (let key of keys) {
            if (!is(key, "case")) {
              //key is the function name
              test[key]();
            }
          }
          if (stop) {
            break;
          }
        }
      }
    }
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
  isBoolean(test) {
    let { is } = voyage;
    return is(typeof test, "boolean");
  },
  isArray(obj) {
    return Array.isArray(obj);
  },
  isObject(test) {
    return test instanceof Object;
  },
  toArray(obj) {
    return Array.from(obj);
  },
  isFunction(obj) {
    let { is } = voyage;
    return is(typeof obj, "function");
  },
  //from
  //[type,labels{},contents[],binds{key:method},states{key:value}]
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
  //[key] -> value
  data: {},
  //key binds on each node
  //[key][nodeid] -> binds[]
  map: {},
  //mark for removal
  //[nodeid] -> keys[]
  removal: {},
  //method library
  //[methodName] -> method
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
  },
  //node states
  //[nodeid][stateName] -> state
  nodes: {},
  //key counter
  //[key] -> count
  counts: { node: 0 },
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
  //way
  //{element,data,where}
  go(way) {
    //init and run and append
    let { init, create, run, select, setMethods } = voyage;
    let { element, data, place, methods } = way;
    //set methods
    if (methods) {
      setMethods(methods);
    }
    //append to dom
    let parent = select(place);
    parent.append(run(create(element)));
    //init data
    if (data) {
      init(data);
    }
  },
  run(element) {
    //render element to node
    let { is, has, match } = voyage;
    let { nodes, lib, data } = voyage;
    let { count } = voyage;
    let { get, getState } = voyage;
    let { runContents } = voyage;
    let { setBind, setStates } = voyage;
    let { type, labels, contents, binds, states } = element;
    //create element
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute("nodeid", nodeid);
    //set states
    if (states) {
      setStates(nodeid, states);
    }
    //set labels and process special labels
    if (labels) {
      for (let labelName in labels) {
        let key = labels[labelName];
        let cases = [
          {
            //@event
            case: is(labelName[0], "@"),
            addOnEventAttribute() {
              let onEvent = labelName.replace("@", "on");
              let handler;
              if (has(lib, key)) {
                //a lib function
                handler = `voyage.lib["${key}"]()`;
              } else {
                //not a lib function
                handler = key;
              }
              node.setAttribute(onEvent, handler);
            },
          },
          {
            case: "$model",
            twoWayDataBinding() {
              //bind key
              setBind(key, nodeid, "value");
              //bind node.value
              node.setAttribute(
                "onchange",
                `voyage.handleInputOnchange("${nodeid}","${key}")`
              );
            },
          },
          {
            case: "$if",
            initIfLabel() {
              setStates(nodeid, { if: key });
              setStates(nodeid, { contents: contents });
              setBind(key, nodeid, "if");
            },
          },
          {
            case: "$text",
            bindText() {
              setBind(key, nodeid, "text");
            },
          },
          {
            case: "$html",
            bindHtml() {
              setBind(key, nodeid, "html");
            },
          },
          {
            case: "$show",
            bindShow() {
              setBind(key, nodeid, "show");
            },
          },
          {
            case: "$class",
            bindClass() {
              setBind(key, nodeid, "class");
            },
          },
          {
            default() {
              //common label
              node.setAttribute(labelName, key);
            },
          },
        ];
        match(labelName, cases);
      }
    }
    //set binds
    if (binds) {
      for (let key in binds) {
        setBind(key, nodeid, binds[key]);
      }
    }
    //set contents
    if (contents) {
      if (has(nodes[nodeid], "if")) {
        //has $if label
        let ifKey = getState(nodeid, "if");
        if (get(ifKey)) {
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
  init(data) {
    let { set } = voyage;
    //set all data
    for (let key in data) {
      set(key, data[key]);
    }
  },
  set(key, newValue) {
    //set data and call binds
    let { is, get, has, getBindedMethods, getBindedNodes, call } = voyage;
    let { data, map } = voyage;
    if (is(get(key), newValue)) {
      //no need to change
    } else {
      //get old value
      let oldValue = get(key);
      //set data
      data[key] = newValue;
      //call binds
      if (has(map, key)) {
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
    let { is } = voyage;
    let { map, removal } = voyage;
    map[key] = map[key] || {};
    map[key][nodeid] = map[key][nodeid] || [];
    if (is(map[key][nodeid].indexOf(bind), -1)) {
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
