/**
 * @file
 * voyage framework: a sweeter preact
 *
 * this version is developed during 20250814 ~ 20250817 (utc+8)
 *
 * features
 * - core functions: h (html), p (props), e (effect), r (render)
 *   - h:
 *     - more freedom of params
 *     - @${event}
 *     - utilities (special props)
 *     - style obj with kebeb case
 *     - class/classname in both array and object
 *   - p:
 *     - prop() -> get the lastest value
 *     - prop(value) -> set value
 *     - store support like solidjs
 * - utilities: bind, html, show.
 *
 * @author firavoyage
 * @version 1.3
 * @since 0.1 initiated on 20240816, 1.0 initiated on 20250814
 * @see changelog.md
 */

const preact = {
  ...window.preact,
  ...window.preactHooks,
  ...window.preactCompat,
};

let voyage = {
  h(..._) {
    // html
    const { createElement, Fragment, memo } = preact;

    // done: support more patterns of _
    // done: support Fragment

    let tag = "",
      props = {},
      children = [];

    for (const [index, item] of _.entries()) {
      const type = typeof item;
      if ((type == "string" || type == "function") && index == 0) {
        tag = item;
      } else if (type == "object" && !Array.isArray(item)) {
        if (item.constructor) {
          // props have a constructor like object
          props = item;
        } else {
          // for children created by preact.createElement()
          // constructor == undefined
          children.push(item);
        }
      } else if (type == "object" && Array.isArray(item)) {
        // fragment
        children.push(createElement(Fragment, {}, ...item));
      } else if (type == "function") {
        // components should be wrapped in createElement

        // () => item() instead of item to support props
        // such components couldnt have params
        children.push(createElement(() => item()));
      } else {
        children.push(item);
      }
    }

    // fragment
    if (tag == "") {
      // "" and Fragment are considered the same
      tag = Fragment;
    } else if (typeof tag == "function") {
      // memo all components
      tag = memo(tag);
    }

    const has = (a, b) => Object.prototype.hasOwnProperty.call(a, b);

    /**
     * Converts kebab-case CSS props to camelCase for React/Preact.
     * Example: { "background-color": "red" } → { backgroundColor: "red" }
     */
    const normalizeStyles = (styleObj) => {
      if (!styleObj || typeof styleObj !== "object") return styleObj;

      const normalized = {};
      for (const key in styleObj) {
        const camelKey = key.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        normalized[camelKey] = styleObj[key];
      }
      return normalized;
    };

    /**
     * Normalizes class input (string, array, object) into a string.
     * @example
     * normalizeClass("btn") → "btn"
     * normalizeClass(["btn", "active"]) → "btn active"
     * normalizeClass({ "btn": true, "active": false }) → "btn"
     */
    function normalizeClass(value) {
      if (!value) return "";
      if (typeof value == "string") return value;
      if (Array.isArray(value)) return value.filter(Boolean).join(" ");
      if (typeof value == "object") {
        return Object.entries(value)
          .filter(([_, shouldApply]) => shouldApply)
          .map(([cls]) => cls)
          .join(" ");
      }
      return "";
    }

    for (const [key, prop] of Object.entries(props)) {
      if (key.startsWith("@")) {
        // this is the only condition
        // where function values should not be considered as props
        const newKey = `on${key.slice(1, 2).toUpperCase()}${key.slice(2)}`;
        props[newKey] = props[key];
        delete props[key];

        continue;
      } else if (key == "ref") {
        // ref is one of the special props that only requires a setter
        // no need to process it or call its getter

        // done: fix ref cause unnecessary rerenders

        if (has(prop, "mutate")) {
          props[key] = (element) => {
            prop.mutate(element);
          };
        }

        continue;
      }

      // if prop is reactive, call its getter
      const value = typeof prop == "function" ? prop() : prop;
      const utilities = {
        html() {
          props.dangerouslySetInnerHTML = { __html: value };
        },
        bind() {
          // one of the utilities where a setter is passed
          props.value = prop();
          props.onChange = (e) => prop(e.target.value);
        },
        show() {
          // Only modify display if this is the first render or visibility changed
          if (!props.__originalDisplay) {
            // Capture the element's default display type (like Vue does)
            props.ref = (el) => {
              if (el && !props.__originalDisplay) {
                props.__originalDisplay = window.getComputedStyle(el).display;
              }
            };
          }

          props.style = {
            ...props.style,
            display: value ? props.__originalDisplay || "block" : "none",
          };
        },
      };
      if (has(utilities, key)) {
        utilities[key]();
        delete props[key];
      } else if (key == "style") {
        // Normalize style object (supports both camelCase and kebab-case)
        props.style = normalizeStyles(value);
      } else if (key == "class" || key == "className") {
        // Normalize class/className (supports arrays/objects)
        props.className = normalizeClass(value);
        if (key == "class") delete props.class; // Prefer className for Preact
      }
    }

    return createElement(tag, props, ...children);
  },
  p(initial) {
    const { useRef, useReducer } = preact;

    // force update
    const rerender = useReducer(() => ({}), {})[1];

    // Efficient deep clone function
    const deepClone = (obj) => {
      if (obj === null || typeof obj !== "object") return obj;

      if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
          arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
      }

      const objCopy = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepClone(obj[key]);
        }
      }
      return objCopy;
    };

    // Fast shallow equality check
    const shallowEqual = (a, b) => {
      if (a === b) return true;
      if (
        typeof a !== "object" ||
        a === null ||
        typeof b !== "object" ||
        b === null
      )
        return false;

      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;

      for (const key of keysA) {
        if (
          !Object.prototype.hasOwnProperty.call(b, key) ||
          a[key] !== b[key]
        ) {
          return false;
        }
      }
      return true;
    };

    // Helper for structural sharing
    const clonePath = (obj, path, newValue) => {
      const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
      if (path.length === 0) return newValue;

      let current = newObj;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        current[key] = Array.isArray(current[key])
          ? [...current[key]]
          : { ...current[key] };
        current = current[key];
      }

      current[path[path.length - 1]] = newValue;
      return newObj;
    };

    // initial can be a function
    initial = typeof initial == "function" ? initial() : initial;

    // useref instead of usestate under the hood.
    // manually decide whether to rerender.
    const ref = useRef(initial);

    const prop = (...args) => {
      if (args.length == 0) {
        // do nothing
      } else if (args.length == 1) {
        const newValue =
          typeof args[0] == "function" ? args[0](ref.current) : args[0];

        // done: fix infinite loop when there is a ref prop

        // if (!shallowEqual(newValue, current)) {
        //   current = deepClone(newValue); // Store clone as current
        //   setState(current);
        // }
        if (ref.current !== newValue) {
          ref.current = newValue;
          rerender();
        }
      } else if (args.length >= 2) {
        // Path + value case
        const path = args.slice(0, -1);
        const valueOrUpdater = args[args.length - 1];

        const targetValue = path.reduce((obj, key) => obj?.[key], ref.current);
        const newValue =
          typeof valueOrUpdater == "function"
            ? valueOrUpdater(targetValue)
            : valueOrUpdater;

        if (!shallowEqual(targetValue, newValue)) {
          ref.current = clonePath(ref.current, path, newValue);
          rerender();
        }
      }
      return ref.current; // Now returns current directly
    };

    // direct mutation without rerenders
    prop.mutate = (newValue) => {
      ref.current = newValue;
    };

    prop.produce = (fn) => {
      const newState = deepClone(ref.current);
      fn(newState);
      if (!shallowEqual(newState, ref.current)) {
        ref.current = newState; // newState is already a clone
        rerender();
      }
      return ref.current; // Now returns current directly
    };

    prop.reconcile = (...args) => {
      const options =
        typeof args[args.length - 1] == "object" ? args.pop() : {};
      const path = args.slice(0, -1);
      const value = args[args.length - 1];

      const target = path.reduce((obj, key) => obj?.[key], ref.current);
      if (!target) return ref.current;

      let newValue;
      if (options.key) {
        // Array reconciliation
        const arr = target ? [...target] : [];
        const searchKey = value[options.key];
        if (searchKey !== undefined) {
          const index = arr.findIndex((item) => item[options.key] == searchKey);
          if (index >= 0) {
            newValue = [...arr];
            newValue[index] = { ...arr[index], ...value };
          } else {
            newValue = [...arr, value];
          }
        }
      } else {
        // Object reconciliation
        newValue = { ...target, ...value };
      }

      if (newValue && !shallowEqual(target, newValue)) {
        ref.current = clonePath(ref.current, path, newValue);
        rerender();
      }
      return ref.current;
    };

    return prop;
  },
  e(e, deps = []) {
    // effect

    // for safety reason, deps should not be empty in any case

    // done: for fn (prop) in deps, call it.

    const { useEffect } = preact;

    deps.map((dep) => (typeof dep == "function" ? dep() : dep));
    useEffect(e, deps);
  },
  r(app, parent, replaceNode) {
    // render
    const { render, createElement } = preact;

    // done: for fn apps, wrap it with h()

    if (typeof app == "function") {
      app = createElement(app);
    }

    render(app, parent, replaceNode);
  },
};
