//20240822
//voyagejs 0.5

let { log } = console;

let voyage = {
  is(a, b) {
    // Checks if two values are strictly equal.
    return a === b;
  },
  has(obj, key) {
    // Checks if an object has a specific property.
    const { isObject } = voyage;
    if (isObject(obj)) {
      return obj.hasOwnProperty(key);
    } else {
      return false;
    }
  },
  remove(obj, key) {
    // Removes a property from an object.
    delete obj[key];
  },
  isBoolean(test) {
    // Checks if a value is a boolean.
    const { is } = voyage;
    return is(typeof test, "boolean");
  },
  isString(test) {
    const { is } = voyage;
    return is(typeof test, "string");
  },
  isArray(test) {
    // Checks if a value is an array.
    return Array.isArray(test);
  },
  isObject(test) {
    // Checks if a value is an object and not null.
    const { is } = voyage;
    if (is(test, null)) {
      return false;
    }
    return is(typeof test, "object");
  },
  isFunction(test) {
    // Checks if a value is a function.
    const { is } = voyage;
    return is(typeof test, "function");
  },
  //value
  //the test value
  //tests
  //[{case:true,fn1()},{case:fn(what),fn2},{case:213,fn3},{fndef}]
  //stop
  //can stop at first match
  match(tests, value, stop = true) {
    // Iterates through a list of tests to find a match for the given value.
    // Executes associated functions if a match is found.
    // If 'stop' is true, it stops further evaluation upon finding the first match.
    const { is, isBoolean, isFunction } = voyage;
    for (let test of tests) {
      let keys = Object.keys(test);
      if (is(keys.length, 1)) {
        // Default case: No need to match value, directly execute the function.
        test[keys[0]]();
      } else {
        let isMatch = false;
        if (isBoolean(test.case)) {
          // If 'case' is a boolean, it directly determines if the function should be called.
          isMatch = test.case;
        } else if (isFunction(test.case)) {
          // If 'case' is a function, it evaluates the value against this function.
          isMatch = test.case(value);
        } else {
          // Otherwise, it checks if the value matches the 'case' directly.
          isMatch = is(value, test.case);
        }
        if (isMatch) {
          for (let key of keys) {
            if (!is(key, "case")) {
              // Executes the function associated with the matched case.
              test[key]();
            }
          }
          if (stop) {
            // Stops further evaluation if 'stop' is true.
            break;
          }
        }
      }
    }
  },
  parseType(type) {
    const { is, isString } = voyage;
    if (!isString(type)) {
      type = "";
    }
    let index = function (str, query, from) {
      //indexOf
      //if not found return inf
      let result = str.indexOf(query, from);
      result = is(result, -1) ? Infinity : result;
      return result;
    };
    let result = { type: "", labels: {} };
    let idIndex = index(type, "#");
    let classIndex = index(type, ".");
    let minIndex = Math.min(idIndex, classIndex);
    //get type
    result.type = type.slice(0, minIndex) || "div";
    //get id label
    if (!is(idIndex, Infinity)) {
      let next = index(type, ".", idIndex + 1);
      result.labels.id = type.slice(idIndex + 1, next);
    }
    //init class labels
    if (!is(classIndex, Infinity)) {
      result.labels.class = "";
    }
    //get class labels
    while (!is(classIndex, Infinity)) {
      let nextId = index(type, "#", classIndex + 1);
      let nextClass = index(type, ".", classIndex + 1);
      let nextMin = Math.min(nextId, nextClass);
      result.labels.class += `${type.slice(classIndex + 1, nextMin)} `;
      classIndex = nextClass;
    }
    return result;
  },
  //from
  //[type,labels{},contents[],binds{key:method},states{key:value}]
  create(from) {
    const { parseType, isArray, isObject, createContents } = voyage;
    let [a, b, c, d, e] = from; //five options
    let { type, labels } = parseType(a);
    let contents, binds, states;
    if (isArray(b)) {
      //[type contents[] ...]
      contents = createContents(b);
      binds = c || {};
      states = d || {};
    } else if (isObject(b)) {
      //[type labels{} ...]
      labels = Object.assign(labels, b);
      if (isArray(c)) {
        //[type labels{} contents[] ...]
        contents = createContents(c);
      } else {
        //[type labels{} contents ...]
        contents = c || [];
      }
      binds = d || {};
      states = e || {};
    } else {
      //[type contents ...]
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
        match(cases, labelName);
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
    let { select, isObject } = voyage;
    let node = select(`[nodeid="${nodeid}"]`);
    if (isObject(node)) {
      return node;
    }
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
    let { getNodeid } = voyage;
    let { removeAllBinds, removeAllStates, removeAllChildren } = voyage;
    for (let child of Array.from(node.children)) {
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
        "div#container",
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
  type() {
    log(voyage.parseType(""));
    log(voyage.parseType("p.a#a.c"));
    log(voyage.parseType("xyz#daf"));
    log(voyage.parseType("xyz.daf.xasdf.afs#123"));
  },
};

unitTests.counter();

//custom component like counter
//ant design voyage
//sr voyage
