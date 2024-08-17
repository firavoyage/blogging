//20240817
//voyage.js 0.2

let voyage = {
  create(type, labels, contents, binds, methods, states) {
    //create element
    if(!type){
      //default type is div
      type="div"
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
  }, //method library
  nodes: {}, //node states [nodeid][stateName] -> "state123"
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
    let { run, count, set, getValue, map, lib } = voyage;
    let { type, labels, contents, binds, methods, states } = element;
    let node = document.createElement(type);
    //set nodeid
    let nodeid = count("node");
    node.setAttribute(nodeid, "");
    //define methods
    if (methods) {
      if(Array.isArray(methods)){
        for (let method of methods) {
          if(lib[method]){
            //already defined
            continue
          }
          else{
            lib[method.name] = method;
          }
        }  
      }
      else{
        for (let methodName of Object.keys(methods)) {
          if(lib[methodName]){
            //already defined
            continue
          }
          else{
            lib[methodName] = methods[methodName];
          }
        }
      }
    }
    //process labels
    if (labels) {
      for (let labelName of Object.keys(labels)) {
        if (labelName[0] == "@") {
          //@event
          let event = labelName.replace("@", "on");
          let handler = labels[labelName];
          if (voyage.lib[labels[labelName]]) {
            //lib function name
            handler = `voyage.lib["${labels[labelName]}"]()`;
          }
          node.setAttribute(event, handler);
        } else if (labelName == "$model") {
          //bind value to node (set value in js -> change value in node)
          let key = labels[labelName];
          map[key] = map[key] || {};
          map[key][nodeid] = map[key][nodeid] || [];
          map[key][nodeid].push("value");
          //bind node to value (node onchange -> set value in js)
          let anonymous = count("anonymous");
          lib[anonymous] = function () {
            let value = getValue(nodeid);
            set(key, value);
          };
          node.setAttribute("onchange", `voyage.lib.${anonymous}()`);
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
        map[key] = map[key] || {};
        map[key][nodeid] = map[key][nodeid] || [];
        map[key][nodeid] = [...map[key][nodeid], binds[key]];
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
  get(key) {
    let { data } = voyage;
    let value = data[key];
    return value;
  },
  getNode(nodeid) {
    let node = document.querySelector(`[${nodeid}]`);
    return node;
  },
  getValue(nodeid) {
    let node = document.querySelector(`[${nodeid}]`);
    let value = node.value;
    return value;
  },
  getKey(element, name) {
    let key = element.states[name];
    return key;
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
    let inc = function () {
      voyage.set("count", voyage.get("count") + 1);
    };
    let dec = function () {
      voyage.set("count", voyage.get("count") - 1);
    };
    let container = voyage.create(
      "div",
      { id: "container" },
      [voyage.create("button",{"@click":"inc"},"+","",[inc]),
      voyage.create("input",{type:"text","$model":"count"}),
      voyage.create("button",{"@click":"dec"},"-","",[dec]),
      ],
    );
    document.body.append(voyage.run(container));
    voyage.set("count", 0o0721);
  },
};

unitTests.input();
