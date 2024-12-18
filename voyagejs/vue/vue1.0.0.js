/*!
 * Vue.js v1.0.0
 * (c) 2015 Evan You
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["Vue"] = factory();
  else root["Vue"] = factory();
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};

    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId])
        /******/ return installedModules[moduleId].exports;

      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ exports: {},
        /******/ id: moduleId,
        /******/ loaded: false,
        /******/
      });

      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );

      /******/ // Flag the module as loaded
      /******/ module.loaded = true;

      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }

    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(0);
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var extend = _.extend;

        /**
         * The exposed Vue constructor.
         *
         * API conventions:
         * - public API methods/properties are prefiexed with `$`
         * - internal methods/properties are prefixed with `_`
         * - non-prefixed properties are assumed to be proxied user
         *   data.
         *
         * @constructor
         * @param {Object} [options]
         * @public
         */

        function Vue(options) {
          this._init(options);
        }

        /**
         * Mixin global API
         */

        extend(Vue, __webpack_require__(13));

        /**
         * Vue and every constructor that extends Vue has an
         * associated options object, which can be accessed during
         * compilation steps as `this.constructor.options`.
         *
         * These can be seen as the default options of every
         * Vue instance.
         */

        Vue.options = {
          replace: true,
          directives: __webpack_require__(16),
          elementDirectives: __webpack_require__(50),
          filters: __webpack_require__(53),
          transitions: {},
          components: {},
          partials: {},
        };

        /**
         * Build up the prototype
         */

        var p = Vue.prototype;

        /**
         * $data has a setter which does a bunch of
         * teardown/setup work
         */

        Object.defineProperty(p, "$data", {
          get: function () {
            return this._data;
          },
          set: function (newData) {
            if (newData !== this._data) {
              this._setData(newData);
            }
          },
        });

        /**
         * Mixin internal instance methods
         */

        extend(p, __webpack_require__(55));
        extend(p, __webpack_require__(56));
        extend(p, __webpack_require__(57));
        extend(p, __webpack_require__(60));
        extend(p, __webpack_require__(62));

        /**
         * Mixin public API methods
         */

        extend(p, __webpack_require__(63));
        extend(p, __webpack_require__(64));
        extend(p, __webpack_require__(65));
        extend(p, __webpack_require__(66));

        Vue.version = "1.0.0";
        module.exports = _.Vue = Vue;

        /* istanbul ignore if */
        if (true) {
          if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", Vue);
          }
        }

        /***/
      },
      /* 1 */
      /***/ function (module, exports, __webpack_require__) {
        var lang = __webpack_require__(2);
        var extend = lang.extend;

        extend(exports, lang);
        extend(exports, __webpack_require__(3));
        extend(exports, __webpack_require__(4));
        extend(exports, __webpack_require__(10));
        extend(exports, __webpack_require__(11));
        extend(exports, __webpack_require__(12));

        /***/
      },
      /* 2 */
      /***/ function (module, exports) {
        /**
         * Set a property on an object. Adds the new property and
         * triggers change notification if the property doesn't
         * already exist.
         *
         * @param {Object} obj
         * @param {String} key
         * @param {*} val
         * @public
         */

        exports.set = function set(obj, key, val) {
          if (obj.hasOwnProperty(key)) {
            obj[key] = val;
            return;
          }
          if (obj._isVue) {
            set(obj._data, key, val);
            return;
          }
          var ob = obj.__ob__;
          if (!ob) {
            obj[key] = val;
            return;
          }
          ob.convert(key, val);
          ob.notify();
          if (ob.vms) {
            var i = ob.vms.length;
            while (i--) {
              var vm = ob.vms[i];
              vm._proxy(key);
              vm._digest();
            }
          }
        };

        /**
         * Delete a property and trigger change if necessary.
         *
         * @param {Object} obj
         * @param {String} key
         */

        exports.delete = function (obj, key) {
          if (!obj.hasOwnProperty(key)) {
            return;
          }
          delete obj[key];
          var ob = obj.__ob__;
          if (!ob) {
            return;
          }
          ob.notify();
          if (ob.vms) {
            var i = ob.vms.length;
            while (i--) {
              var vm = ob.vms[i];
              vm._unproxy(key);
              vm._digest();
            }
          }
        };

        /**
         * Check if an expression is a literal value.
         *
         * @param {String} exp
         * @return {Boolean}
         */

        var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;
        exports.isLiteral = function (exp) {
          return literalValueRE.test(exp);
        };

        /**
         * Check if a string starts with $ or _
         *
         * @param {String} str
         * @return {Boolean}
         */

        exports.isReserved = function (str) {
          var c = (str + "").charCodeAt(0);
          return c === 0x24 || c === 0x5f;
        };

        /**
         * Guard text output, make sure undefined outputs
         * empty string
         *
         * @param {*} value
         * @return {String}
         */

        exports.toString = function (value) {
          return value == null ? "" : value.toString();
        };

        /**
         * Check and convert possible numeric strings to numbers
         * before setting back to data
         *
         * @param {*} value
         * @return {*|Number}
         */

        exports.toNumber = function (value) {
          if (typeof value !== "string") {
            return value;
          } else {
            var parsed = Number(value);
            return isNaN(parsed) ? value : parsed;
          }
        };

        /**
         * Convert string boolean literals into real booleans.
         *
         * @param {*} value
         * @return {*|Boolean}
         */

        exports.toBoolean = function (value) {
          return value === "true" ? true : value === "false" ? false : value;
        };

        /**
         * Strip quotes from a string
         *
         * @param {String} str
         * @return {String | false}
         */

        exports.stripQuotes = function (str) {
          var a = str.charCodeAt(0);
          var b = str.charCodeAt(str.length - 1);
          return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
        };

        /**
         * Camelize a hyphen-delmited string.
         *
         * @param {String} str
         * @return {String}
         */

        exports.camelize = function (str) {
          return str.replace(/-(\w)/g, toUpper);
        };

        function toUpper(_, c) {
          return c ? c.toUpperCase() : "";
        }

        /**
         * Hyphenate a camelCase string.
         *
         * @param {String} str
         * @return {String}
         */

        exports.hyphenate = function (str) {
          return str.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
        };

        /**
         * Converts hyphen/underscore/slash delimitered names into
         * camelized classNames.
         *
         * e.g. my-component => MyComponent
         *      some_else    => SomeElse
         *      some/comp    => SomeComp
         *
         * @param {String} str
         * @return {String}
         */

        var classifyRE = /(?:^|[-_\/])(\w)/g;
        exports.classify = function (str) {
          return str.replace(classifyRE, toUpper);
        };

        /**
         * Simple bind, faster than native
         *
         * @param {Function} fn
         * @param {Object} ctx
         * @return {Function}
         */

        exports.bind = function (fn, ctx) {
          return function (a) {
            var l = arguments.length;
            return l
              ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
              : fn.call(ctx);
          };
        };

        /**
         * Convert an Array-like object to a real Array.
         *
         * @param {Array-like} list
         * @param {Number} [start] - start index
         * @return {Array}
         */

        exports.toArray = function (list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        };

        /**
         * Mix properties into target object.
         *
         * @param {Object} to
         * @param {Object} from
         */

        exports.extend = function (to, from) {
          var keys = Object.keys(from);
          var i = keys.length;
          while (i--) {
            to[keys[i]] = from[keys[i]];
          }
          return to;
        };

        /**
         * Quick object check - this is primarily used to tell
         * Objects from primitive values when we know the value
         * is a JSON-compliant type.
         *
         * @param {*} obj
         * @return {Boolean}
         */

        exports.isObject = function (obj) {
          return obj !== null && typeof obj === "object";
        };

        /**
         * Strict object type check. Only returns true
         * for plain JavaScript objects.
         *
         * @param {*} obj
         * @return {Boolean}
         */

        var toString = Object.prototype.toString;
        var OBJECT_STRING = "[object Object]";
        exports.isPlainObject = function (obj) {
          return toString.call(obj) === OBJECT_STRING;
        };

        /**
         * Array type check.
         *
         * @param {*} obj
         * @return {Boolean}
         */

        exports.isArray = Array.isArray;

        /**
         * Define a non-enumerable property
         *
         * @param {Object} obj
         * @param {String} key
         * @param {*} val
         * @param {Boolean} [enumerable]
         */

        exports.define = function (obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true,
          });
        };

        /**
         * Debounce a function so it only gets called after the
         * input stops arriving after the given wait period.
         *
         * @param {Function} func
         * @param {Number} wait
         * @return {Function} - the debounced function
         */

        exports.debounce = function (func, wait) {
          var timeout, args, context, timestamp, result;
          var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            }
          };
          return function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            return result;
          };
        };

        /**
         * Manual indexOf because it's slightly faster than
         * native.
         *
         * @param {Array} arr
         * @param {*} obj
         */

        exports.indexOf = function (arr, obj) {
          var i = arr.length;
          while (i--) {
            if (arr[i] === obj) return i;
          }
          return -1;
        };

        /**
         * Make a cancellable version of an async callback.
         *
         * @param {Function} fn
         * @return {Function}
         */

        exports.cancellable = function (fn) {
          var cb = function () {
            if (!cb.cancelled) {
              return fn.apply(this, arguments);
            }
          };
          cb.cancel = function () {
            cb.cancelled = true;
          };
          return cb;
        };

        /**
         * Check if two values are loosely equal - that is,
         * if they are plain objects, do they have the same shape?
         *
         * @param {*} a
         * @param {*} b
         * @return {Boolean}
         */

        exports.looseEqual = function (a, b) {
          /* eslint-disable eqeqeq */
          return (
            a == b ||
            (exports.isObject(a) && exports.isObject(b)
              ? JSON.stringify(a) === JSON.stringify(b)
              : false)
          );
          /* eslint-enable eqeqeq */
        };

        /***/
      },
      /* 3 */
      /***/ function (module, exports) {
        // can we use __proto__?
        exports.hasProto = "__proto__" in {};

        // Browser environment sniffing
        var inBrowser = (exports.inBrowser =
          typeof window !== "undefined" &&
          Object.prototype.toString.call(window) !== "[object Object]");

        exports.isIE9 =
          inBrowser &&
          navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0;

        exports.isAndroid =
          inBrowser && navigator.userAgent.toLowerCase().indexOf("android") > 0;

        // Transition property/event sniffing
        if (inBrowser && !exports.isIE9) {
          var isWebkitTrans =
            window.ontransitionend === undefined &&
            window.onwebkittransitionend !== undefined;
          var isWebkitAnim =
            window.onanimationend === undefined &&
            window.onwebkitanimationend !== undefined;
          exports.transitionProp = isWebkitTrans
            ? "WebkitTransition"
            : "transition";
          exports.transitionEndEvent = isWebkitTrans
            ? "webkitTransitionEnd"
            : "transitionend";
          exports.animationProp = isWebkitAnim
            ? "WebkitAnimation"
            : "animation";
          exports.animationEndEvent = isWebkitAnim
            ? "webkitAnimationEnd"
            : "animationend";
        }

        /**
         * Defer a task to execute it asynchronously. Ideally this
         * should be executed as a microtask, so we leverage
         * MutationObserver if it's available, and fallback to
         * setTimeout(0).
         *
         * @param {Function} cb
         * @param {Object} ctx
         */

        exports.nextTick = (function () {
          var callbacks = [];
          var pending = false;
          var timerFunc;
          function nextTickHandler() {
            pending = false;
            var copies = callbacks.slice(0);
            callbacks = [];
            for (var i = 0; i < copies.length; i++) {
              copies[i]();
            }
          }
          /* istanbul ignore if */
          if (typeof MutationObserver !== "undefined") {
            var counter = 1;
            var observer = new MutationObserver(nextTickHandler);
            var textNode = document.createTextNode(counter);
            observer.observe(textNode, {
              characterData: true,
            });
            timerFunc = function () {
              counter = (counter + 1) % 2;
              textNode.data = counter;
            };
          } else {
            timerFunc = setTimeout;
          }
          return function (cb, ctx) {
            var func = ctx
              ? function () {
                  cb.call(ctx);
                }
              : cb;
            callbacks.push(func);
            if (pending) return;
            pending = true;
            timerFunc(nextTickHandler, 0);
          };
        })();

        /***/
      },
      /* 4 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var config = __webpack_require__(5);
        var transition = __webpack_require__(9);

        /**
         * Query an element selector if it's not an element already.
         *
         * @param {String|Element} el
         * @return {Element}
         */

        exports.query = function (el) {
          if (typeof el === "string") {
            var selector = el;
            el = document.querySelector(el);
            if (!el) {
              "development" !== "production" &&
                _.warn("Cannot find element: " + selector);
            }
          }
          return el;
        };

        /**
         * Check if a node is in the document.
         * Note: document.documentElement.contains should work here
         * but always returns false for comment nodes in phantomjs,
         * making unit tests difficult. This is fixed byy doing the
         * contains() check on the node's parentNode instead of
         * the node itself.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        exports.inDoc = function (node) {
          var doc = document.documentElement;
          var parent = node && node.parentNode;
          return (
            doc === node ||
            doc === parent ||
            !!(parent && parent.nodeType === 1 && doc.contains(parent))
          );
        };

        /**
         * Get and remove an attribute from a node.
         *
         * @param {Node} node
         * @param {String} attr
         */

        exports.attr = function (node, attr) {
          var val = node.getAttribute(attr);
          if (val !== null) {
            node.removeAttribute(attr);
          }
          return val;
        };

        /**
         * Get an attribute with colon or v-bind: prefix.
         *
         * @param {Node} node
         * @param {String} name
         * @return {String|null}
         */

        exports.getBindAttr = function (node, name) {
          var val = exports.attr(node, ":" + name);
          if (val === null) {
            val = exports.attr(node, "v-bind:" + name);
          }
          return val;
        };

        /**
         * Insert el before target
         *
         * @param {Element} el
         * @param {Element} target
         */

        exports.before = function (el, target) {
          target.parentNode.insertBefore(el, target);
        };

        /**
         * Insert el after target
         *
         * @param {Element} el
         * @param {Element} target
         */

        exports.after = function (el, target) {
          if (target.nextSibling) {
            exports.before(el, target.nextSibling);
          } else {
            target.parentNode.appendChild(el);
          }
        };

        /**
         * Remove el from DOM
         *
         * @param {Element} el
         */

        exports.remove = function (el) {
          el.parentNode.removeChild(el);
        };

        /**
         * Prepend el to target
         *
         * @param {Element} el
         * @param {Element} target
         */

        exports.prepend = function (el, target) {
          if (target.firstChild) {
            exports.before(el, target.firstChild);
          } else {
            target.appendChild(el);
          }
        };

        /**
         * Replace target with el
         *
         * @param {Element} target
         * @param {Element} el
         */

        exports.replace = function (target, el) {
          var parent = target.parentNode;
          if (parent) {
            parent.replaceChild(el, target);
          }
        };

        /**
         * Add event listener shorthand.
         *
         * @param {Element} el
         * @param {String} event
         * @param {Function} cb
         */

        exports.on = function (el, event, cb) {
          el.addEventListener(event, cb);
        };

        /**
         * Remove event listener shorthand.
         *
         * @param {Element} el
         * @param {String} event
         * @param {Function} cb
         */

        exports.off = function (el, event, cb) {
          el.removeEventListener(event, cb);
        };

        /**
         * Add class with compatibility for IE & SVG
         *
         * @param {Element} el
         * @param {Strong} cls
         */

        exports.addClass = function (el, cls) {
          if (el.classList) {
            el.classList.add(cls);
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        };

        /**
         * Remove class with compatibility for IE & SVG
         *
         * @param {Element} el
         * @param {Strong} cls
         */

        exports.removeClass = function (el, cls) {
          if (el.classList) {
            el.classList.remove(cls);
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            el.setAttribute("class", cur.trim());
          }
          if (!el.className) {
            el.removeAttribute("class");
          }
        };

        /**
         * Extract raw content inside an element into a temporary
         * container div
         *
         * @param {Element} el
         * @param {Boolean} asFragment
         * @return {Element}
         */

        exports.extractContent = function (el, asFragment) {
          var child;
          var rawContent;
          /* istanbul ignore if */
          if (
            exports.isTemplate(el) &&
            el.content instanceof DocumentFragment
          ) {
            el = el.content;
          }
          if (el.hasChildNodes()) {
            exports.trimNode(el);
            rawContent = asFragment
              ? document.createDocumentFragment()
              : document.createElement("div");
            /* eslint-disable no-cond-assign */
            while ((child = el.firstChild)) {
              /* eslint-enable no-cond-assign */
              rawContent.appendChild(child);
            }
          }
          return rawContent;
        };

        /**
         * Trim possible empty head/tail textNodes inside a parent.
         *
         * @param {Node} node
         */

        exports.trimNode = function (node) {
          trim(node, node.firstChild);
          trim(node, node.lastChild);
        };

        function trim(parent, node) {
          if (node && node.nodeType === 3 && !node.data.trim()) {
            parent.removeChild(node);
          }
        }

        /**
         * Check if an element is a template tag.
         * Note if the template appears inside an SVG its tagName
         * will be in lowercase.
         *
         * @param {Element} el
         */

        exports.isTemplate = function (el) {
          return el.tagName && el.tagName.toLowerCase() === "template";
        };

        /**
         * Create an "anchor" for performing dom insertion/removals.
         * This is used in a number of scenarios:
         * - fragment instance
         * - v-html
         * - v-if
         * - v-for
         * - component
         *
         * @param {String} content
         * @param {Boolean} persist - IE trashes empty textNodes on
         *                            cloneNode(true), so in certain
         *                            cases the anchor needs to be
         *                            non-empty to be persisted in
         *                            templates.
         * @return {Comment|Text}
         */

        exports.createAnchor = function (content, persist) {
          return config.debug
            ? document.createComment(content)
            : document.createTextNode(persist ? " " : "");
        };

        /**
         * Find a component ref attribute that starts with $.
         *
         * @param {Element} node
         * @return {String|undefined}
         */

        var refRE = /^v-ref:/;
        exports.findRef = function (node) {
          if (node.hasAttributes()) {
            var attrs = node.attributes;
            for (var i = 0, l = attrs.length; i < l; i++) {
              var name = attrs[i].name;
              if (refRE.test(name)) {
                node.removeAttribute(name);
                return _.camelize(name.replace(refRE, ""));
              }
            }
          }
        };

        /**
         * Map a function to a range of nodes .
         *
         * @param {Node} node
         * @param {Node} end
         * @param {Function} op
         */

        exports.mapNodeRange = function (node, end, op) {
          var next;
          while (node !== end) {
            next = node.nextSibling;
            op(node);
            node = next;
          }
          op(end);
        };

        /**
         * Remove a range of nodes with transition, store
         * the nodes in a fragment with correct ordering,
         * and call callback when done.
         *
         * @param {Node} start
         * @param {Node} end
         * @param {Vue} vm
         * @param {DocumentFragment} frag
         * @param {Function} cb
         */

        exports.removeNodeRange = function (start, end, vm, frag, cb) {
          var done = false;
          var removed = 0;
          var nodes = [];
          exports.mapNodeRange(start, end, function (node) {
            if (node === end) done = true;
            nodes.push(node);
            transition.remove(node, vm, onRemoved);
          });
          function onRemoved() {
            removed++;
            if (done && removed >= nodes.length) {
              for (var i = 0; i < nodes.length; i++) {
                frag.appendChild(nodes[i]);
              }
              cb && cb();
            }
          }
        };

        /***/
      },
      /* 5 */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = {
          /**
           * Whether to print debug messages.
           * Also enables stack trace for warnings.
           *
           * @type {Boolean}
           */

          debug: false,

          /**
           * Whether to suppress warnings.
           *
           * @type {Boolean}
           */

          silent: false,

          /**
           * Whether to use async rendering.
           */

          async: true,

          /**
           * Whether to warn against errors caught when evaluating
           * expressions.
           */

          warnExpressionErrors: true,

          /**
           * Internal flag to indicate the delimiters have been
           * changed.
           *
           * @type {Boolean}
           */

          _delimitersChanged: true,

          /**
           * List of asset types that a component can own.
           *
           * @type {Array}
           */

          _assetTypes: [
            "component",
            "directive",
            "elementDirective",
            "filter",
            "transition",
            "partial",
          ],

          /**
           * prop binding modes
           */

          _propBindingModes: {
            ONE_WAY: 0,
            TWO_WAY: 1,
            ONE_TIME: 2,
          },

          /**
           * Max circular updates allowed in a batcher flush cycle.
           */

          _maxUpdateCount: 100,
        };

        /**
         * Interpolation delimiters. Changing these would trigger
         * the text parser to re-compile the regular expressions.
         *
         * @type {Array<String>}
         */

        var delimiters = ["{{", "}}"];
        var unsafeDelimiters = ["{{{", "}}}"];
        var textParser = __webpack_require__(6);

        Object.defineProperty(module.exports, "delimiters", {
          get: function () {
            return delimiters;
          },
          set: function (val) {
            delimiters = val;
            textParser.compileRegex();
          },
        });

        Object.defineProperty(module.exports, "unsafeDelimiters", {
          get: function () {
            return unsafeDelimiters;
          },
          set: function (val) {
            unsafeDelimiters = val;
            textParser.compileRegex();
          },
        });

        /***/
      },
      /* 6 */
      /***/ function (module, exports, __webpack_require__) {
        var Cache = __webpack_require__(7);
        var config = __webpack_require__(5);
        var dirParser = __webpack_require__(8);
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var cache, tagRE, htmlRE;

        /**
         * Escape a string so it can be used in a RegExp
         * constructor.
         *
         * @param {String} str
         */

        function escapeRegex(str) {
          return str.replace(regexEscapeRE, "\\$&");
        }

        exports.compileRegex = function () {
          var open = escapeRegex(config.delimiters[0]);
          var close = escapeRegex(config.delimiters[1]);
          var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
          var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
          tagRE = new RegExp(
            unsafeOpen + "(.+?)" + unsafeClose + "|" + open + "(.+?)" + close,
            "g"
          );
          htmlRE = new RegExp("^" + unsafeOpen + ".*" + unsafeClose + "$");
          // reset cache
          cache = new Cache(1000);
        };

        /**
         * Parse a template text string into an array of tokens.
         *
         * @param {String} text
         * @return {Array<Object> | null}
         *               - {String} type
         *               - {String} value
         *               - {Boolean} [html]
         *               - {Boolean} [oneTime]
         */

        exports.parse = function (text) {
          if (!cache) {
            exports.compileRegex();
          }
          var hit = cache.get(text);
          if (hit) {
            return hit;
          }
          text = text.replace(/\n/g, "");
          if (!tagRE.test(text)) {
            return null;
          }
          var tokens = [];
          var lastIndex = (tagRE.lastIndex = 0);
          var match, index, html, value, first, oneTime;
          /* eslint-disable no-cond-assign */
          while ((match = tagRE.exec(text))) {
            /* eslint-enable no-cond-assign */
            index = match.index;
            // push text token
            if (index > lastIndex) {
              tokens.push({
                value: text.slice(lastIndex, index),
              });
            }
            // tag token
            html = htmlRE.test(match[0]);
            value = html ? match[1] : match[2];
            first = value.charCodeAt(0);
            oneTime = first === 42; // *
            value = oneTime ? value.slice(1) : value;
            tokens.push({
              tag: true,
              value: value.trim(),
              html: html,
              oneTime: oneTime,
            });
            lastIndex = index + match[0].length;
          }
          if (lastIndex < text.length) {
            tokens.push({
              value: text.slice(lastIndex),
            });
          }
          cache.put(text, tokens);
          return tokens;
        };

        /**
         * Format a list of tokens into an expression.
         * e.g. tokens parsed from 'a {{b}} c' can be serialized
         * into one single expression as '"a " + b + " c"'.
         *
         * @param {Array} tokens
         * @return {String}
         */

        exports.tokensToExp = function (tokens) {
          if (tokens.length > 1) {
            return tokens
              .map(function (token) {
                return formatToken(token);
              })
              .join("+");
          } else {
            return formatToken(tokens[0], true);
          }
        };

        /**
         * Format a single token.
         *
         * @param {Object} token
         * @param {Boolean} single
         * @return {String}
         */

        function formatToken(token, single) {
          return token.tag
            ? inlineFilters(token.value, single)
            : '"' + token.value + '"';
        }

        /**
         * For an attribute with multiple interpolation tags,
         * e.g. attr="some-{{thing | filter}}", in order to combine
         * the whole thing into a single watchable expression, we
         * have to inline those filters. This function does exactly
         * that. This is a bit hacky but it avoids heavy changes
         * to directive parser and watcher mechanism.
         *
         * @param {String} exp
         * @param {Boolean} single
         * @return {String}
         */

        var filterRE = /[^|]\|[^|]/;
        function inlineFilters(exp, single) {
          if (!filterRE.test(exp)) {
            return single ? exp : "(" + exp + ")";
          } else {
            var dir = dirParser.parse(exp);
            if (!dir.filters) {
              return "(" + exp + ")";
            } else {
              return (
                "this._applyFilters(" +
                dir.expression + // value
                ",null," + // oldValue (null for read)
                JSON.stringify(dir.filters) + // filter descriptors
                ",false)"
              ); // write?
            }
          }
        }

        /***/
      },
      /* 7 */
      /***/ function (module, exports) {
        /**
         * A doubly linked list-based Least Recently Used (LRU)
         * cache. Will keep most recently used items while
         * discarding least recently used items when its limit is
         * reached. This is a bare-bone version of
         * Rasmus Andersson's js-lru:
         *
         *   https://github.com/rsms/js-lru
         *
         * @param {Number} limit
         * @constructor
         */

        function Cache(limit) {
          this.size = 0;
          this.limit = limit;
          this.head = this.tail = undefined;
          this._keymap = Object.create(null);
        }

        var p = Cache.prototype;

        /**
         * Put <value> into the cache associated with <key>.
         * Returns the entry which was removed to make room for
         * the new entry. Otherwise undefined is returned.
         * (i.e. if there was enough room already).
         *
         * @param {String} key
         * @param {*} value
         * @return {Entry|undefined}
         */

        p.put = function (key, value) {
          var entry = {
            key: key,
            value: value,
          };
          this._keymap[key] = entry;
          if (this.tail) {
            this.tail.newer = entry;
            entry.older = this.tail;
          } else {
            this.head = entry;
          }
          this.tail = entry;
          if (this.size === this.limit) {
            return this.shift();
          } else {
            this.size++;
          }
        };

        /**
         * Purge the least recently used (oldest) entry from the
         * cache. Returns the removed entry or undefined if the
         * cache was empty.
         */

        p.shift = function () {
          var entry = this.head;
          if (entry) {
            this.head = this.head.newer;
            this.head.older = undefined;
            entry.newer = entry.older = undefined;
            this._keymap[entry.key] = undefined;
          }
          return entry;
        };

        /**
         * Get and register recent use of <key>. Returns the value
         * associated with <key> or undefined if not in cache.
         *
         * @param {String} key
         * @param {Boolean} returnEntry
         * @return {Entry|*}
         */

        p.get = function (key, returnEntry) {
          var entry = this._keymap[key];
          if (entry === undefined) return;
          if (entry === this.tail) {
            return returnEntry ? entry : entry.value;
          }
          // HEAD--------------TAIL
          //   <.older   .newer>
          //  <--- add direction --
          //   A  B  C  <D>  E
          if (entry.newer) {
            if (entry === this.head) {
              this.head = entry.newer;
            }
            entry.newer.older = entry.older; // C <-- E.
          }
          if (entry.older) {
            entry.older.newer = entry.newer; // C. --> E
          }
          entry.newer = undefined; // D --x
          entry.older = this.tail; // D. --> E
          if (this.tail) {
            this.tail.newer = entry; // E. <-- D
          }
          this.tail = entry;
          return returnEntry ? entry : entry.value;
        };

        module.exports = Cache;

        /***/
      },
      /* 8 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Cache = __webpack_require__(7);
        var cache = new Cache(1000);
        var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
        var reservedArgRE = /^in$|^-?\d+/;

        /**
         * Parser state
         */

        var str, dir;
        var c, i, l, lastFilterIndex;
        var inSingle, inDouble, curly, square, paren;

        /**
         * Push a filter to the current directive object
         */

        function pushFilter() {
          var exp = str.slice(lastFilterIndex, i).trim();
          var filter;
          if (exp) {
            filter = {};
            var tokens = exp.match(filterTokenRE);
            filter.name = tokens[0];
            if (tokens.length > 1) {
              filter.args = tokens.slice(1).map(processFilterArg);
            }
          }
          if (filter) {
            (dir.filters = dir.filters || []).push(filter);
          }
          lastFilterIndex = i + 1;
        }

        /**
         * Check if an argument is dynamic and strip quotes.
         *
         * @param {String} arg
         * @return {Object}
         */

        function processFilterArg(arg) {
          if (reservedArgRE.test(arg)) {
            return {
              value: arg,
              dynamic: false,
            };
          } else {
            var stripped = _.stripQuotes(arg);
            var dynamic = stripped === arg;
            return {
              value: dynamic ? arg : stripped,
              dynamic: dynamic,
            };
          }
        }

        /**
         * Parse a directive value and extract the expression
         * and its filters into a descriptor.
         *
         * Example:
         *
         * "a + 1 | uppercase" will yield:
         * {
         *   expression: 'a + 1',
         *   filters: [
         *     { name: 'uppercase', args: null }
         *   ]
         * }
         *
         * @param {String} str
         * @return {Object}
         */

        exports.parse = function (s) {
          var hit = cache.get(s);
          if (hit) {
            return hit;
          }

          // reset parser state
          str = s;
          inSingle = inDouble = false;
          curly = square = paren = 0;
          lastFilterIndex = 0;
          dir = {};

          for (i = 0, l = str.length; i < l; i++) {
            c = str.charCodeAt(i);
            if (inSingle) {
              // check single quote
              if (c === 0x27) inSingle = !inSingle;
            } else if (inDouble) {
              // check double quote
              if (c === 0x22) inDouble = !inDouble;
            } else if (
              c === 0x7c && // pipe
              str.charCodeAt(i + 1) !== 0x7c &&
              str.charCodeAt(i - 1) !== 0x7c
            ) {
              if (dir.expression == null) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                dir.expression = str.slice(0, i).trim();
              } else {
                // already has filter
                pushFilter();
              }
            } else {
              switch (c) {
                case 0x22:
                  inDouble = true;
                  break; // "
                case 0x27:
                  inSingle = true;
                  break; // '
                case 0x28:
                  paren++;
                  break; // (
                case 0x29:
                  paren--;
                  break; // )
                case 0x5b:
                  square++;
                  break; // [
                case 0x5d:
                  square--;
                  break; // ]
                case 0x7b:
                  curly++;
                  break; // {
                case 0x7d:
                  curly--;
                  break; // }
              }
            }
          }

          if (dir.expression == null) {
            dir.expression = str.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }

          cache.put(s, dir);
          return dir;
        };

        /***/
      },
      /* 9 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        /**
         * Append with transition.
         *
         * @param {Element} el
         * @param {Element} target
         * @param {Vue} vm
         * @param {Function} [cb]
         */

        exports.append = function (el, target, vm, cb) {
          apply(
            el,
            1,
            function () {
              target.appendChild(el);
            },
            vm,
            cb
          );
        };

        /**
         * InsertBefore with transition.
         *
         * @param {Element} el
         * @param {Element} target
         * @param {Vue} vm
         * @param {Function} [cb]
         */

        exports.before = function (el, target, vm, cb) {
          apply(
            el,
            1,
            function () {
              _.before(el, target);
            },
            vm,
            cb
          );
        };

        /**
         * Remove with transition.
         *
         * @param {Element} el
         * @param {Vue} vm
         * @param {Function} [cb]
         */

        exports.remove = function (el, vm, cb) {
          apply(
            el,
            -1,
            function () {
              _.remove(el);
            },
            vm,
            cb
          );
        };

        /**
         * Apply transitions with an operation callback.
         *
         * @param {Element} el
         * @param {Number} direction
         *                  1: enter
         *                 -1: leave
         * @param {Function} op - the actual DOM operation
         * @param {Vue} vm
         * @param {Function} [cb]
         */

        var apply = (exports.apply = function (el, direction, op, vm, cb) {
          var transition = el.__v_trans;
          if (
            !transition ||
            // skip if there are no js hooks and CSS transition is
            // not supported
            (!transition.hooks && !_.transitionEndEvent) ||
            // skip transitions for initial compile
            !vm._isCompiled ||
            // if the vm is being manipulated by a parent directive
            // during the parent's compilation phase, skip the
            // animation.
            (vm.$parent && !vm.$parent._isCompiled)
          ) {
            op();
            if (cb) cb();
            return;
          }
          var action = direction > 0 ? "enter" : "leave";
          transition[action](op, cb);
        });

        /***/
      },
      /* 10 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var config = __webpack_require__(5);
        var extend = _.extend;

        /**
         * Option overwriting strategies are functions that handle
         * how to merge a parent option value and a child option
         * value into the final value.
         *
         * All strategy functions follow the same signature:
         *
         * @param {*} parentVal
         * @param {*} childVal
         * @param {Vue} [vm]
         */

        var strats = (config.optionMergeStrategies = Object.create(null));

        /**
         * Helper that recursively merges two data objects together.
         */

        function mergeData(to, from) {
          var key, toVal, fromVal;
          for (key in from) {
            toVal = to[key];
            fromVal = from[key];
            if (!to.hasOwnProperty(key)) {
              _.set(to, key, fromVal);
            } else if (_.isObject(toVal) && _.isObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }

        /**
         * Data
         */

        strats.data = function (parentVal, childVal, vm) {
          if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
              return parentVal;
            }
            if (typeof childVal !== "function") {
              "development" !== "production" &&
                _.warn(
                  'The "data" option should be a function ' +
                    "that returns a per-instance value in component " +
                    "definitions."
                );
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
              return mergeData(childVal.call(this), parentVal.call(this));
            };
          } else if (parentVal || childVal) {
            return function mergedInstanceDataFn() {
              // instance merge
              var instanceData =
                typeof childVal === "function" ? childVal.call(vm) : childVal;
              var defaultData =
                typeof parentVal === "function"
                  ? parentVal.call(vm)
                  : undefined;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        };

        /**
         * El
         */

        strats.el = function (parentVal, childVal, vm) {
          if (!vm && childVal && typeof childVal !== "function") {
            "development" !== "production" &&
              _.warn(
                'The "el" option should be a function ' +
                  "that returns a per-instance value in component " +
                  "definitions."
              );
            return;
          }
          var ret = childVal || parentVal;
          // invoke the element factory if this is instance merge
          return vm && typeof ret === "function" ? ret.call(vm) : ret;
        };

        /**
         * Hooks and param attributes are merged as arrays.
         */

        strats.init =
          strats.created =
          strats.ready =
          strats.attached =
          strats.detached =
          strats.beforeCompile =
          strats.compiled =
          strats.beforeDestroy =
          strats.destroyed =
            function (parentVal, childVal) {
              return childVal
                ? parentVal
                  ? parentVal.concat(childVal)
                  : _.isArray(childVal)
                  ? childVal
                  : [childVal]
                : parentVal;
            };

        /**
         * 0.11 deprecation warning
         */

        strats.paramAttributes = function () {
          /* istanbul ignore next */
          "development" !== "production" &&
            _.warn(
              '"paramAttributes" option has been deprecated in 0.12. ' +
                'Use "props" instead.'
            );
        };

        /**
         * Assets
         *
         * When a vm is present (instance creation), we need to do
         * a three-way merge between constructor options, instance
         * options and parent options.
         */

        function mergeAssets(parentVal, childVal) {
          var res = Object.create(parentVal);
          return childVal ? extend(res, guardArrayAssets(childVal)) : res;
        }

        config._assetTypes.forEach(function (type) {
          strats[type + "s"] = mergeAssets;
        });

        /**
         * Events & Watchers.
         *
         * Events & watchers hashes should not overwrite one
         * another, so we merge them as arrays.
         */

        strats.watch = strats.events = function (parentVal, childVal) {
          if (!childVal) return parentVal;
          if (!parentVal) return childVal;
          var ret = {};
          extend(ret, parentVal);
          for (var key in childVal) {
            var parent = ret[key];
            var child = childVal[key];
            if (parent && !_.isArray(parent)) {
              parent = [parent];
            }
            ret[key] = parent ? parent.concat(child) : [child];
          }
          return ret;
        };

        /**
         * Other object hashes.
         */

        strats.props =
          strats.methods =
          strats.computed =
            function (parentVal, childVal) {
              if (!childVal) return parentVal;
              if (!parentVal) return childVal;
              var ret = Object.create(null);
              extend(ret, parentVal);
              extend(ret, childVal);
              return ret;
            };

        /**
         * Default strategy.
         */

        var defaultStrat = function (parentVal, childVal) {
          return childVal === undefined ? parentVal : childVal;
        };

        /**
         * Make sure component options get converted to actual
         * constructors.
         *
         * @param {Object} options
         */

        function guardComponents(options) {
          if (options.components) {
            var components = (options.components = guardArrayAssets(
              options.components
            ));
            var def;
            var ids = Object.keys(components);
            for (var i = 0, l = ids.length; i < l; i++) {
              var key = ids[i];
              if (_.commonTagRE.test(key)) {
                "development" !== "production" &&
                  _.warn(
                    "Do not use built-in HTML elements as component " +
                      "id: " +
                      key
                  );
                continue;
              }
              def = components[key];
              if (_.isPlainObject(def)) {
                components[key] = _.Vue.extend(def);
              }
            }
          }
        }

        /**
         * Ensure all props option syntax are normalized into the
         * Object-based format.
         *
         * @param {Object} options
         */

        function guardProps(options) {
          var props = options.props;
          var i;
          if (_.isArray(props)) {
            options.props = {};
            i = props.length;
            while (i--) {
              options.props[props[i]] = null;
            }
          } else if (_.isPlainObject(props)) {
            var keys = Object.keys(props);
            i = keys.length;
            while (i--) {
              var val = props[keys[i]];
              if (typeof val === "function") {
                props[keys[i]] = { type: val };
              }
            }
          }
        }

        /**
         * Guard an Array-format assets option and converted it
         * into the key-value Object format.
         *
         * @param {Object|Array} assets
         * @return {Object}
         */

        function guardArrayAssets(assets) {
          if (_.isArray(assets)) {
            var res = {};
            var i = assets.length;
            var asset;
            while (i--) {
              asset = assets[i];
              var id = asset.name || (asset.options && asset.options.name);
              if (!id) {
                "development" !== "production" &&
                  _.warn('Array-syntax assets must provide a "name" field.');
              } else {
                res[id] = asset;
              }
            }
            return res;
          }
          return assets;
        }

        /**
         * Merge two option objects into a new one.
         * Core utility used in both instantiation and inheritance.
         *
         * @param {Object} parent
         * @param {Object} child
         * @param {Vue} [vm] - if vm is present, indicates this is
         *                     an instantiation merge.
         */

        exports.mergeOptions = function merge(parent, child, vm) {
          guardComponents(child);
          guardProps(child);
          var options = {};
          var key;
          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent = merge(parent, child.mixins[i], vm);
            }
          }
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!parent.hasOwnProperty(key)) {
              mergeField(key);
            }
          }
          function mergeField(key) {
            var strat = strats[key] || defaultStrat;
            options[key] = strat(parent[key], child[key], vm, key);
          }
          return options;
        };

        /**
         * Resolve an asset.
         * This function is used because child instances need access
         * to assets defined in its ancestor chain.
         *
         * @param {Object} options
         * @param {String} type
         * @param {String} id
         * @return {Object|Function}
         */

        exports.resolveAsset = function resolve(options, type, id) {
          var assets = options[type];
          var camelizedId;
          return (
            assets[id] ||
            // camelCase ID
            assets[(camelizedId = _.camelize(id))] ||
            // Pascal Case ID
            assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
          );
        };

        /***/
      },
      /* 11 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        /**
         * Check if an element is a component, if yes return its
         * component id.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Object|undefined}
         */

        exports.commonTagRE =
          /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
        exports.checkComponent = function (el, options) {
          var tag = el.tagName.toLowerCase();
          var hasAttrs = el.hasAttributes();
          if (!exports.commonTagRE.test(tag) && tag !== "component") {
            if (_.resolveAsset(options, "components", tag)) {
              return { id: tag };
            } else {
              var is = hasAttrs && getIsBinding(el);
              if (is) {
                return is;
              } else if (true) {
                if (
                  tag.indexOf("-") > -1 ||
                  (/HTMLUnknownElement/.test(el.toString()) &&
                    // Chrome returns unknown for several HTML5 elements.
                    // https://code.google.com/p/chromium/issues/detail?id=540526
                    !/^(data|time|rtc|rb)$/.test(tag))
                ) {
                  _.warn(
                    "Unknown custom element: <" +
                      tag +
                      "> - did you " +
                      "register the component correctly?"
                  );
                }
              }
            }
          } else if (hasAttrs) {
            return getIsBinding(el);
          }
        };

        /**
         * Get "is" binding from an element.
         *
         * @param {Element} el
         * @return {Object|undefined}
         */

        function getIsBinding(el) {
          // dynamic syntax
          var exp = _.attr(el, "is");
          if (exp != null) {
            return { id: exp };
          } else {
            exp = _.getBindAttr(el, "is");
            if (exp != null) {
              return { id: exp, dynamic: true };
            }
          }
        }

        /**
         * Set a prop's initial value on a vm and its data object.
         *
         * @param {Vue} vm
         * @param {Object} prop
         * @param {*} value
         */

        exports.initProp = function (vm, prop, value) {
          if (exports.assertProp(prop, value)) {
            var key = prop.path;
            vm[key] = vm._data[key] = value;
          }
        };

        /**
         * Assert whether a prop is valid.
         *
         * @param {Object} prop
         * @param {*} value
         */

        exports.assertProp = function (prop, value) {
          // if a prop is not provided and is not required,
          // skip the check.
          if (prop.raw === null && !prop.required) {
            return true;
          }
          var options = prop.options;
          var type = options.type;
          var valid = true;
          var expectedType;
          if (type) {
            if (type === String) {
              expectedType = "string";
              valid = typeof value === expectedType;
            } else if (type === Number) {
              expectedType = "number";
              valid = typeof value === "number";
            } else if (type === Boolean) {
              expectedType = "boolean";
              valid = typeof value === "boolean";
            } else if (type === Function) {
              expectedType = "function";
              valid = typeof value === "function";
            } else if (type === Object) {
              expectedType = "object";
              valid = _.isPlainObject(value);
            } else if (type === Array) {
              expectedType = "array";
              valid = _.isArray(value);
            } else {
              valid = value instanceof type;
            }
          }
          if (!valid) {
            "development" !== "production" &&
              _.warn(
                "Invalid prop: type check failed for " +
                  prop.path +
                  '="' +
                  prop.raw +
                  '".' +
                  " Expected " +
                  formatType(expectedType) +
                  ", got " +
                  formatValue(value) +
                  "."
              );
            return false;
          }
          var validator = options.validator;
          if (validator) {
            if (!validator.call(null, value)) {
              "development" !== "production" &&
                _.warn(
                  "Invalid prop: custom validator check failed for " +
                    prop.path +
                    '="' +
                    prop.raw +
                    '"'
                );
              return false;
            }
          }
          return true;
        };

        function formatType(val) {
          return val
            ? val.charAt(0).toUpperCase() + val.slice(1)
            : "custom type";
        }

        function formatValue(val) {
          return Object.prototype.toString.call(val).slice(8, -1);
        }

        /***/
      },
      /* 12 */
      /***/ function (module, exports, __webpack_require__) {
        /**
         * Enable debug utilities.
         */

        if (true) {
          var config = __webpack_require__(5);
          var hasConsole = typeof console !== "undefined";

          /**
           * Log a message.
           *
           * @param {String} msg
           */

          exports.log = function (msg) {
            if (hasConsole && config.debug) {
              console.log("[Vue info]: " + msg);
            }
          };

          /**
           * We've got a problem here.
           *
           * @param {String} msg
           */

          exports.warn = function (msg, e) {
            if (hasConsole && (!config.silent || config.debug)) {
              console.warn("[Vue warn]: " + msg);
              /* istanbul ignore if */
              if (config.debug) {
                console.warn((e || new Error("Warning Stack Trace")).stack);
              }
            }
          };

          /**
           * Assert asset exists
           */

          exports.assertAsset = function (val, type, id) {
            if (!val) {
              exports.warn("Failed to resolve " + type + ": " + id);
            }
          };
        }

        /***/
      },
      /* 13 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var config = __webpack_require__(5);

        /**
         * Expose useful internals
         */

        exports.util = _;
        exports.config = config;
        exports.set = _.set;
        exports.delete = _.delete;
        exports.nextTick = _.nextTick;

        /**
         * The following are exposed for advanced usage / plugins
         */

        exports.compiler = __webpack_require__(14);
        exports.FragmentFactory = __webpack_require__(21);
        exports.internalDirectives = __webpack_require__(35);
        exports.parsers = {
          path: __webpack_require__(43),
          text: __webpack_require__(6),
          template: __webpack_require__(19),
          directive: __webpack_require__(8),
          expression: __webpack_require__(42),
        };

        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */

        exports.cid = 0;
        var cid = 1;

        /**
         * Class inheritance
         *
         * @param {Object} extendOptions
         */

        exports.extend = function (extendOptions) {
          extendOptions = extendOptions || {};
          var Super = this;
          var isFirstExtend = Super.cid === 0;
          if (isFirstExtend && extendOptions._Ctor) {
            return extendOptions._Ctor;
          }
          var name = extendOptions.name || Super.options.name;
          var Sub = createClass(name || "VueComponent");
          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.cid = cid++;
          Sub.options = _.mergeOptions(Super.options, extendOptions);
          Sub["super"] = Super;
          // allow further extension
          Sub.extend = Super.extend;
          // create asset registers, so extended classes
          // can have their private assets too.
          config._assetTypes.forEach(function (type) {
            Sub[type] = Super[type];
          });
          // enable recursive self-lookup
          if (name) {
            Sub.options.components[name] = Sub;
          }
          // cache constructor
          if (isFirstExtend) {
            extendOptions._Ctor = Sub;
          }
          return Sub;
        };

        /**
         * A function that returns a sub-class constructor with the
         * given name. This gives us much nicer output when
         * logging instances in the console.
         *
         * @param {String} name
         * @return {Function}
         */

        function createClass(name) {
          return new Function(
            "return function " +
              _.classify(name) +
              " (options) { this._init(options) }"
          )();
        }

        /**
         * Plugin system
         *
         * @param {Object} plugin
         */

        exports.use = function (plugin) {
          /* istanbul ignore if */
          if (plugin.installed) {
            return;
          }
          // additional parameters
          var args = _.toArray(arguments, 1);
          args.unshift(this);
          if (typeof plugin.install === "function") {
            plugin.install.apply(plugin, args);
          } else {
            plugin.apply(null, args);
          }
          plugin.installed = true;
          return this;
        };

        /**
         * Apply a global mixin by merging it into the default
         * options.
         */

        exports.mixin = function (mixin) {
          var Vue = _.Vue;
          Vue.options = _.mergeOptions(Vue.options, mixin);
        };

        /**
         * Create asset registration methods with the following
         * signature:
         *
         * @param {String} id
         * @param {*} definition
         */

        config._assetTypes.forEach(function (type) {
          exports[type] = function (id, definition) {
            if (!definition) {
              return this.options[type + "s"][id];
            } else {
              if (type === "component" && _.isPlainObject(definition)) {
                definition.name = id;
                definition = _.Vue.extend(definition);
              }
              this.options[type + "s"][id] = definition;
              return definition;
            }
          };
        });

        /***/
      },
      /* 14 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        _.extend(exports, __webpack_require__(15));
        _.extend(exports, __webpack_require__(49));

        /***/
      },
      /* 15 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var publicDirectives = __webpack_require__(16);
        var internalDirectives = __webpack_require__(35);
        var compileProps = __webpack_require__(48);
        var textParser = __webpack_require__(6);
        var dirParser = __webpack_require__(8);
        var templateParser = __webpack_require__(19);
        var resolveAsset = _.resolveAsset;

        // special binding prefixes
        var bindRE = /^v-bind:|^:/;
        var onRE = /^v-on:|^@/;
        var argRE = /:(.*)$/;
        var modifierRE = /\.[^\.]+/g;
        var transitionRE = /^(v-bind:|:)?transition$/;

        // terminal directives
        var terminalDirectives = ["for", "if"];

        /**
         * Compile a template and return a reusable composite link
         * function, which recursively contains more link functions
         * inside. This top level compile function would normally
         * be called on instance root nodes, but can also be used
         * for partial compilation if the partial argument is true.
         *
         * The returned composite link function, when called, will
         * return an unlink function that tearsdown all directives
         * created during the linking phase.
         *
         * @param {Element|DocumentFragment} el
         * @param {Object} options
         * @param {Boolean} partial
         * @return {Function}
         */

        exports.compile = function (el, options, partial) {
          // link function for the node itself.
          var nodeLinkFn =
            partial || !options._asComponent ? compileNode(el, options) : null;
          // link function for the childNodes
          var childLinkFn =
            !(nodeLinkFn && nodeLinkFn.terminal) &&
            el.tagName !== "SCRIPT" &&
            el.hasChildNodes()
              ? compileNodeList(el.childNodes, options)
              : null;

          /**
           * A composite linker function to be called on a already
           * compiled piece of DOM, which instantiates all directive
           * instances.
           *
           * @param {Vue} vm
           * @param {Element|DocumentFragment} el
           * @param {Vue} [host] - host vm of transcluded content
           * @param {Object} [scope] - v-for scope
           * @param {Fragment} [frag] - link context fragment
           * @return {Function|undefined}
           */

          return function compositeLinkFn(vm, el, host, scope, frag) {
            // cache childNodes before linking parent, fix #657
            var childNodes = _.toArray(el.childNodes);
            // link
            var dirs = linkAndCapture(function compositeLinkCapturer() {
              if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
              if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
            }, vm);
            return makeUnlinkFn(vm, dirs);
          };
        };

        /**
         * Apply a linker to a vm/element pair and capture the
         * directives created during the process.
         *
         * @param {Function} linker
         * @param {Vue} vm
         */

        function linkAndCapture(linker, vm) {
          var originalDirCount = vm._directives.length;
          linker();
          var dirs = vm._directives.slice(originalDirCount);
          dirs.sort(directiveComparator);
          for (var i = 0, l = dirs.length; i < l; i++) {
            dirs[i]._bind();
          }
          return dirs;
        }

        /**
         * Directive priority sort comparator
         *
         * @param {Object} a
         * @param {Object} b
         */

        function directiveComparator(a, b) {
          a = a.descriptor.def.priority || 0;
          b = b.descriptor.def.priority || 0;
          return a > b ? -1 : a === b ? 0 : 1;
        }

        /**
         * Linker functions return an unlink function that
         * tearsdown all directives instances generated during
         * the process.
         *
         * We create unlink functions with only the necessary
         * information to avoid retaining additional closures.
         *
         * @param {Vue} vm
         * @param {Array} dirs
         * @param {Vue} [context]
         * @param {Array} [contextDirs]
         * @return {Function}
         */

        function makeUnlinkFn(vm, dirs, context, contextDirs) {
          return function unlink(destroying) {
            teardownDirs(vm, dirs, destroying);
            if (context && contextDirs) {
              teardownDirs(context, contextDirs);
            }
          };
        }

        /**
         * Teardown partial linked directives.
         *
         * @param {Vue} vm
         * @param {Array} dirs
         * @param {Boolean} destroying
         */

        function teardownDirs(vm, dirs, destroying) {
          var i = dirs.length;
          while (i--) {
            dirs[i]._teardown();
            if (!destroying) {
              vm._directives.$remove(dirs[i]);
            }
          }
        }

        /**
         * Compile link props on an instance.
         *
         * @param {Vue} vm
         * @param {Element} el
         * @param {Object} props
         * @param {Object} [scope]
         * @return {Function}
         */

        exports.compileAndLinkProps = function (vm, el, props, scope) {
          var propsLinkFn = compileProps(el, props);
          var propDirs = linkAndCapture(function () {
            propsLinkFn(vm, scope);
          }, vm);
          return makeUnlinkFn(vm, propDirs);
        };

        /**
         * Compile the root element of an instance.
         *
         * 1. attrs on context container (context scope)
         * 2. attrs on the component template root node, if
         *    replace:true (child scope)
         *
         * If this is a fragment instance, we only need to compile 1.
         *
         * @param {Vue} vm
         * @param {Element} el
         * @param {Object} options
         * @param {Object} contextOptions
         * @return {Function}
         */

        exports.compileRoot = function (el, options, contextOptions) {
          var containerAttrs = options._containerAttrs;
          var replacerAttrs = options._replacerAttrs;
          var contextLinkFn, replacerLinkFn;

          // only need to compile other attributes for
          // non-fragment instances
          if (el.nodeType !== 11) {
            // for components, container and replacer need to be
            // compiled separately and linked in different scopes.
            if (options._asComponent) {
              // 2. container attributes
              if (containerAttrs && contextOptions) {
                contextLinkFn = compileDirectives(
                  containerAttrs,
                  contextOptions
                );
              }
              if (replacerAttrs) {
                // 3. replacer attributes
                replacerLinkFn = compileDirectives(replacerAttrs, options);
              }
            } else {
              // non-component, just compile as a normal element.
              replacerLinkFn = compileDirectives(el.attributes, options);
            }
          } else if ("development" !== "production" && containerAttrs) {
            // warn container directives for fragment instances
            containerAttrs.forEach(function (attr) {
              if (attr.name.indexOf("v-") === 0 || attr.name === "transition") {
                _.warn(
                  attr.name +
                    " is ignored on component " +
                    "<" +
                    options.el.tagName.toLowerCase() +
                    "> because " +
                    "the component is a fragment instance: " +
                    "http://vuejs.org/guide/components.html#Fragment_Instance"
                );
              }
            });
          }

          return function rootLinkFn(vm, el, scope) {
            // link context scope dirs
            var context = vm._context;
            var contextDirs;
            if (context && contextLinkFn) {
              contextDirs = linkAndCapture(function () {
                contextLinkFn(context, el, null, scope);
              }, context);
            }

            // link self
            var selfDirs = linkAndCapture(function () {
              if (replacerLinkFn) replacerLinkFn(vm, el);
            }, vm);

            // return the unlink function that tearsdown context
            // container directives.
            return makeUnlinkFn(vm, selfDirs, context, contextDirs);
          };
        };

        /**
         * Compile a node and return a nodeLinkFn based on the
         * node type.
         *
         * @param {Node} node
         * @param {Object} options
         * @return {Function|null}
         */

        function compileNode(node, options) {
          var type = node.nodeType;
          if (type === 1 && node.tagName !== "SCRIPT") {
            return compileElement(node, options);
          } else if (type === 3 && node.data.trim()) {
            return compileTextNode(node, options);
          } else {
            return null;
          }
        }

        /**
         * Compile an element and return a nodeLinkFn.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Function|null}
         */

        function compileElement(el, options) {
          // preprocess textareas.
          // textarea treats its text content as the initial value.
          // just bind it as an attr directive for value.
          if (el.tagName === "TEXTAREA") {
            var tokens = textParser.parse(el.value);
            if (tokens) {
              el.setAttribute(":value", textParser.tokensToExp(tokens));
              el.value = "";
            }
          }
          var linkFn;
          var hasAttrs = el.hasAttributes();
          // check terminal directives (for & if)
          if (hasAttrs) {
            linkFn = checkTerminalDirectives(el, options);
          }
          // check element directives
          if (!linkFn) {
            linkFn = checkElementDirectives(el, options);
          }
          // check component
          if (!linkFn) {
            linkFn = checkComponent(el, options);
          }
          // normal directives
          if (!linkFn && hasAttrs) {
            linkFn = compileDirectives(el.attributes, options);
          }
          return linkFn;
        }

        /**
         * Compile a textNode and return a nodeLinkFn.
         *
         * @param {TextNode} node
         * @param {Object} options
         * @return {Function|null} textNodeLinkFn
         */

        function compileTextNode(node, options) {
          var tokens = textParser.parse(node.data);
          if (!tokens) {
            return null;
          }
          var frag = document.createDocumentFragment();
          var el, token;
          for (var i = 0, l = tokens.length; i < l; i++) {
            token = tokens[i];
            el = token.tag
              ? processTextToken(token, options)
              : document.createTextNode(token.value);
            frag.appendChild(el);
          }
          return makeTextNodeLinkFn(tokens, frag, options);
        }

        /**
         * Process a single text token.
         *
         * @param {Object} token
         * @param {Object} options
         * @return {Node}
         */

        function processTextToken(token, options) {
          var el;
          if (token.oneTime) {
            el = document.createTextNode(token.value);
          } else {
            if (token.html) {
              el = document.createComment("v-html");
              setTokenType("html");
            } else {
              // IE will clean up empty textNodes during
              // frag.cloneNode(true), so we have to give it
              // something here...
              el = document.createTextNode(" ");
              setTokenType("text");
            }
          }
          function setTokenType(type) {
            if (token.descriptor) return;
            var parsed = dirParser.parse(token.value);
            token.descriptor = {
              name: type,
              def: publicDirectives[type],
              expression: parsed.expression,
              filters: parsed.filters,
            };
          }
          return el;
        }

        /**
         * Build a function that processes a textNode.
         *
         * @param {Array<Object>} tokens
         * @param {DocumentFragment} frag
         */

        function makeTextNodeLinkFn(tokens, frag) {
          return function textNodeLinkFn(vm, el, host, scope) {
            var fragClone = frag.cloneNode(true);
            var childNodes = _.toArray(fragClone.childNodes);
            var token, value, node;
            for (var i = 0, l = tokens.length; i < l; i++) {
              token = tokens[i];
              value = token.value;
              if (token.tag) {
                node = childNodes[i];
                if (token.oneTime) {
                  value = (scope || vm).$eval(value);
                  if (token.html) {
                    _.replace(node, templateParser.parse(value, true));
                  } else {
                    node.data = value;
                  }
                } else {
                  vm._bindDir(token.descriptor, node, host, scope);
                }
              }
            }
            _.replace(el, fragClone);
          };
        }

        /**
         * Compile a node list and return a childLinkFn.
         *
         * @param {NodeList} nodeList
         * @param {Object} options
         * @return {Function|undefined}
         */

        function compileNodeList(nodeList, options) {
          var linkFns = [];
          var nodeLinkFn, childLinkFn, node;
          for (var i = 0, l = nodeList.length; i < l; i++) {
            node = nodeList[i];
            nodeLinkFn = compileNode(node, options);
            childLinkFn =
              !(nodeLinkFn && nodeLinkFn.terminal) &&
              node.tagName !== "SCRIPT" &&
              node.hasChildNodes()
                ? compileNodeList(node.childNodes, options)
                : null;
            linkFns.push(nodeLinkFn, childLinkFn);
          }
          return linkFns.length ? makeChildLinkFn(linkFns) : null;
        }

        /**
         * Make a child link function for a node's childNodes.
         *
         * @param {Array<Function>} linkFns
         * @return {Function} childLinkFn
         */

        function makeChildLinkFn(linkFns) {
          return function childLinkFn(vm, nodes, host, scope, frag) {
            var node, nodeLinkFn, childrenLinkFn;
            for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
              node = nodes[n];
              nodeLinkFn = linkFns[i++];
              childrenLinkFn = linkFns[i++];
              // cache childNodes before linking parent, fix #657
              var childNodes = _.toArray(node.childNodes);
              if (nodeLinkFn) {
                nodeLinkFn(vm, node, host, scope, frag);
              }
              if (childrenLinkFn) {
                childrenLinkFn(vm, childNodes, host, scope, frag);
              }
            }
          };
        }

        /**
         * Check for element directives (custom elements that should
         * be resovled as terminal directives).
         *
         * @param {Element} el
         * @param {Object} options
         */

        function checkElementDirectives(el, options) {
          var tag = el.tagName.toLowerCase();
          if (_.commonTagRE.test(tag)) return;
          var def = resolveAsset(options, "elementDirectives", tag);
          if (def) {
            return makeTerminalNodeLinkFn(el, tag, "", options, def);
          }
        }

        /**
         * Check if an element is a component. If yes, return
         * a component link function.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Function|undefined}
         */

        function checkComponent(el, options) {
          var component = _.checkComponent(el, options);
          if (component) {
            var descriptor = {
              name: "component",
              expression: component.id,
              def: internalDirectives.component,
              modifiers: {
                literal: !component.dynamic,
              },
            };
            var componentLinkFn = function (vm, el, host, scope, frag) {
              vm._bindDir(descriptor, el, host, scope, frag);
            };
            componentLinkFn.terminal = true;
            return componentLinkFn;
          }
        }

        /**
         * Check an element for terminal directives in fixed order.
         * If it finds one, return a terminal link function.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Function} terminalLinkFn
         */

        function checkTerminalDirectives(el, options) {
          // skip v-pre
          if (_.attr(el, "v-pre") !== null) {
            return skip;
          }
          // skip v-else block, but only if following v-if
          if (el.hasAttribute("v-else")) {
            var prev = el.previousElementSibling;
            if (prev && prev.hasAttribute("v-if")) {
              return skip;
            }
          }
          var value, dirName;
          for (var i = 0, l = terminalDirectives.length; i < l; i++) {
            dirName = terminalDirectives[i];
            /* eslint-disable no-cond-assign */
            if ((value = el.getAttribute("v-" + dirName))) {
              return makeTerminalNodeLinkFn(el, dirName, value, options);
            }
            /* eslint-enable no-cond-assign */
          }
        }

        function skip() {}
        skip.terminal = true;

        /**
         * Build a node link function for a terminal directive.
         * A terminal link function terminates the current
         * compilation recursion and handles compilation of the
         * subtree in the directive.
         *
         * @param {Element} el
         * @param {String} dirName
         * @param {String} value
         * @param {Object} options
         * @param {Object} [def]
         * @return {Function} terminalLinkFn
         */

        function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
          var parsed = dirParser.parse(value);
          var descriptor = {
            name: dirName,
            expression: parsed.expression,
            filters: parsed.filters,
            raw: value,
            // either an element directive, or if/for
            def: def || publicDirectives[dirName],
          };
          var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
            vm._bindDir(descriptor, el, host, scope, frag);
          };
          fn.terminal = true;
          return fn;
        }

        /**
         * Compile the directives on an element and return a linker.
         *
         * @param {Array|NamedNodeMap} attrs
         * @param {Object} options
         * @return {Function}
         */

        function compileDirectives(attrs, options) {
          var i = attrs.length;
          var dirs = [];
          var attr,
            name,
            value,
            rawName,
            rawValue,
            dirName,
            arg,
            modifiers,
            dirDef,
            tokens;
          while (i--) {
            attr = attrs[i];
            name = rawName = attr.name;
            value = rawValue = attr.value;
            tokens = textParser.parse(value);
            // reset arg
            arg = null;
            // check modifiers
            modifiers = parseModifiers(name);
            name = name.replace(modifierRE, "");

            // attribute interpolations
            if (tokens) {
              value = textParser.tokensToExp(tokens);
              arg = name;
              pushDir("bind", publicDirectives.bind, true);
            }

            // special attribute: transition
            else if (transitionRE.test(name)) {
              modifiers.literal = !bindRE.test(name);
              pushDir("transition", internalDirectives.transition);
            }

            // event handlers
            else if (onRE.test(name)) {
              arg = name.replace(onRE, "");
              pushDir("on", publicDirectives.on);
            }

            // attribute bindings
            else if (bindRE.test(name)) {
              dirName = name.replace(bindRE, "");
              if (dirName === "style" || dirName === "class") {
                pushDir(dirName, internalDirectives[dirName]);
              } else {
                arg = dirName;
                pushDir("bind", publicDirectives.bind);
              }
            }

            // normal directives
            else if (name.indexOf("v-") === 0) {
              // check arg
              arg = (arg = name.match(argRE)) && arg[1];
              if (arg) {
                name = name.replace(argRE, "");
              }
              // extract directive name
              dirName = name.slice(2);

              // skip v-else (when used with v-show)
              if (dirName === "else") {
                continue;
              }

              dirDef = resolveAsset(options, "directives", dirName);

              if (true) {
                _.assertAsset(dirDef, "directive", dirName);
              }

              if (dirDef) {
                if (_.isLiteral(value)) {
                  value = _.stripQuotes(value);
                  modifiers.literal = true;
                }
                pushDir(dirName, dirDef);
              }
            }
          }

          /**
           * Push a directive.
           *
           * @param {String} dirName
           * @param {Object|Function} def
           * @param {Boolean} [interp]
           */

          function pushDir(dirName, def, interp) {
            var parsed = dirParser.parse(value);
            dirs.push({
              name: dirName,
              attr: rawName,
              raw: rawValue,
              def: def,
              arg: arg,
              modifiers: modifiers,
              expression: parsed.expression,
              filters: parsed.filters,
              interp: interp,
            });
          }

          if (dirs.length) {
            return makeNodeLinkFn(dirs);
          }
        }

        /**
         * Parse modifiers from directive attribute name.
         *
         * @param {String} name
         * @return {Object}
         */

        function parseModifiers(name) {
          var res = Object.create(null);
          var match = name.match(modifierRE);
          if (match) {
            var i = match.length;
            while (i--) {
              res[match[i].slice(1)] = true;
            }
          }
          return res;
        }

        /**
         * Build a link function for all directives on a single node.
         *
         * @param {Array} directives
         * @return {Function} directivesLinkFn
         */

        function makeNodeLinkFn(directives) {
          return function nodeLinkFn(vm, el, host, scope, frag) {
            // reverse apply because it's sorted low to high
            var i = directives.length;
            while (i--) {
              vm._bindDir(directives[i], el, host, scope, frag);
            }
          };
        }

        /***/
      },
      /* 16 */
      /***/ function (module, exports, __webpack_require__) {
        // text & html
        exports.text = __webpack_require__(17);
        exports.html = __webpack_require__(18);

        // logic control
        exports["for"] = __webpack_require__(20);
        exports["if"] = __webpack_require__(23);
        exports.show = __webpack_require__(24);

        // two-way binding
        exports.model = __webpack_require__(25);

        // event handling
        exports.on = __webpack_require__(30);

        // attributes
        exports.bind = __webpack_require__(31);

        // ref & el
        exports.el = __webpack_require__(32);
        exports.ref = __webpack_require__(33);

        // cloak
        exports.cloak = __webpack_require__(34);

        /***/
      },
      /* 17 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          bind: function () {
            this.attr = this.el.nodeType === 3 ? "data" : "textContent";
          },

          update: function (value) {
            this.el[this.attr] = _.toString(value);
          },
        };

        /***/
      },
      /* 18 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var templateParser = __webpack_require__(19);

        module.exports = {
          bind: function () {
            // a comment node means this is a binding for
            // {{{ inline unescaped html }}}
            if (this.el.nodeType === 8) {
              // hold nodes
              this.nodes = [];
              // replace the placeholder with proper anchor
              this.anchor = _.createAnchor("v-html");
              _.replace(this.el, this.anchor);
            }
          },

          update: function (value) {
            value = _.toString(value);
            if (this.nodes) {
              this.swap(value);
            } else {
              this.el.innerHTML = value;
            }
          },

          swap: function (value) {
            // remove old nodes
            var i = this.nodes.length;
            while (i--) {
              _.remove(this.nodes[i]);
            }
            // convert new value to a fragment
            // do not attempt to retrieve from id selector
            var frag = templateParser.parse(value, true, true);
            // save a reference to these nodes so we can remove later
            this.nodes = _.toArray(frag.childNodes);
            _.before(frag, this.anchor);
          },
        };

        /***/
      },
      /* 19 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Cache = __webpack_require__(7);
        var templateCache = new Cache(1000);
        var idSelectorCache = new Cache(1000);

        var map = {
          _default: [0, "", ""],
          legend: [1, "<fieldset>", "</fieldset>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        };

        map.td = map.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];

        map.option = map.optgroup = [
          1,
          '<select multiple="multiple">',
          "</select>",
        ];

        map.thead =
          map.tbody =
          map.colgroup =
          map.caption =
          map.tfoot =
            [1, "<table>", "</table>"];

        map.g =
          map.defs =
          map.symbol =
          map.use =
          map.image =
          map.text =
          map.circle =
          map.ellipse =
          map.line =
          map.path =
          map.polygon =
          map.polyline =
          map.rect =
            [
              1,
              "<svg " +
                'xmlns="http://www.w3.org/2000/svg" ' +
                'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                'xmlns:ev="http://www.w3.org/2001/xml-events"' +
                'version="1.1">',
              "</svg>",
            ];

        /**
         * Check if a node is a supported template node with a
         * DocumentFragment content.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        function isRealTemplate(node) {
          return _.isTemplate(node) && node.content instanceof DocumentFragment;
        }

        var tagRE = /<([\w:]+)/;
        var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/;

        /**
         * Convert a string template to a DocumentFragment.
         * Determines correct wrapping by tag types. Wrapping
         * strategy found in jQuery & component/domify.
         *
         * @param {String} templateString
         * @return {DocumentFragment}
         */

        function stringToFragment(templateString) {
          // try a cache hit first
          var hit = templateCache.get(templateString);
          if (hit) {
            return hit;
          }

          var frag = document.createDocumentFragment();
          var tagMatch = templateString.match(tagRE);
          var entityMatch = entityRE.test(templateString);

          if (!tagMatch && !entityMatch) {
            // text only, return a single text node.
            frag.appendChild(document.createTextNode(templateString));
          } else {
            var tag = tagMatch && tagMatch[1];
            var wrap = map[tag] || map._default;
            var depth = wrap[0];
            var prefix = wrap[1];
            var suffix = wrap[2];
            var node = document.createElement("div");

            node.innerHTML = prefix + templateString.trim() + suffix;
            while (depth--) {
              node = node.lastChild;
            }

            var child;
            /* eslint-disable no-cond-assign */
            while ((child = node.firstChild)) {
              /* eslint-enable no-cond-assign */
              frag.appendChild(child);
            }
          }

          templateCache.put(templateString, frag);
          return frag;
        }

        /**
         * Convert a template node to a DocumentFragment.
         *
         * @param {Node} node
         * @return {DocumentFragment}
         */

        function nodeToFragment(node) {
          // if its a template tag and the browser supports it,
          // its content is already a document fragment.
          if (isRealTemplate(node)) {
            _.trimNode(node.content);
            return node.content;
          }
          // script template
          if (node.tagName === "SCRIPT") {
            return stringToFragment(node.textContent);
          }
          // normal node, clone it to avoid mutating the original
          var clone = exports.clone(node);
          var frag = document.createDocumentFragment();
          var child;
          /* eslint-disable no-cond-assign */
          while ((child = clone.firstChild)) {
            /* eslint-enable no-cond-assign */
            frag.appendChild(child);
          }
          _.trimNode(frag);
          return frag;
        }

        // Test for the presence of the Safari template cloning bug
        // https://bugs.webkit.org/show_bug.cgi?id=137755
        var hasBrokenTemplate = (function () {
          /* istanbul ignore else */
          if (_.inBrowser) {
            var a = document.createElement("div");
            a.innerHTML = "<template>1</template>";
            return !a.cloneNode(true).firstChild.innerHTML;
          } else {
            return false;
          }
        })();

        // Test for IE10/11 textarea placeholder clone bug
        var hasTextareaCloneBug = (function () {
          /* istanbul ignore else */
          if (_.inBrowser) {
            var t = document.createElement("textarea");
            t.placeholder = "t";
            return t.cloneNode(true).value === "t";
          } else {
            return false;
          }
        })();

        /**
         * 1. Deal with Safari cloning nested <template> bug by
         *    manually cloning all template instances.
         * 2. Deal with IE10/11 textarea placeholder bug by setting
         *    the correct value after cloning.
         *
         * @param {Element|DocumentFragment} node
         * @return {Element|DocumentFragment}
         */

        exports.clone = function (node) {
          if (!node.querySelectorAll) {
            return node.cloneNode();
          }
          var res = node.cloneNode(true);
          var i, original, cloned;
          /* istanbul ignore if */
          if (hasBrokenTemplate) {
            var clone = res;
            if (isRealTemplate(node)) {
              node = node.content;
              clone = res.content;
            }
            original = node.querySelectorAll("template");
            if (original.length) {
              cloned = clone.querySelectorAll("template");
              i = cloned.length;
              while (i--) {
                cloned[i].parentNode.replaceChild(
                  exports.clone(original[i]),
                  cloned[i]
                );
              }
            }
          }
          /* istanbul ignore if */
          if (hasTextareaCloneBug) {
            if (node.tagName === "TEXTAREA") {
              res.value = node.value;
            } else {
              original = node.querySelectorAll("textarea");
              if (original.length) {
                cloned = res.querySelectorAll("textarea");
                i = cloned.length;
                while (i--) {
                  cloned[i].value = original[i].value;
                }
              }
            }
          }
          return res;
        };

        /**
         * Process the template option and normalizes it into a
         * a DocumentFragment that can be used as a partial or a
         * instance template.
         *
         * @param {*} template
         *    Possible values include:
         *    - DocumentFragment object
         *    - Node object of type Template
         *    - id selector: '#some-template-id'
         *    - template string: '<div><span>{{msg}}</span></div>'
         * @param {Boolean} clone
         * @param {Boolean} noSelector
         * @return {DocumentFragment|undefined}
         */

        exports.parse = function (template, clone, noSelector) {
          var node, frag;

          // if the template is already a document fragment,
          // do nothing
          if (template instanceof DocumentFragment) {
            _.trimNode(template);
            return clone ? exports.clone(template) : template;
          }

          if (typeof template === "string") {
            // id selector
            if (!noSelector && template.charAt(0) === "#") {
              // id selector can be cached too
              frag = idSelectorCache.get(template);
              if (!frag) {
                node = document.getElementById(template.slice(1));
                if (node) {
                  frag = nodeToFragment(node);
                  // save selector to cache
                  idSelectorCache.put(template, frag);
                }
              }
            } else {
              // normal string template
              frag = stringToFragment(template);
            }
          } else if (template.nodeType) {
            // a direct node
            frag = nodeToFragment(template);
          }

          return frag && clone ? exports.clone(frag) : frag;
        };

        /***/
      },
      /* 20 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var FragmentFactory = __webpack_require__(21);
        var isObject = _.isObject;
        var uid = 0;

        module.exports = {
          priority: 2000,

          params: ["track-by", "stagger", "enter-stagger", "leave-stagger"],

          bind: function () {
            // support "item in items" syntax
            var inMatch = this.expression.match(/(.*) in (.*)/);
            if (inMatch) {
              var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
              if (itMatch) {
                this.iterator = itMatch[1].trim();
                this.alias = itMatch[2].trim();
              } else {
                this.alias = inMatch[1].trim();
              }
              this.expression = inMatch[2];
            }

            if (!this.alias) {
              "development" !== "production" &&
                _.warn("Alias is required in v-for.");
              return;
            }

            // uid as a cache identifier
            this.id = "__v-for__" + ++uid;

            // check if this is an option list,
            // so that we know if we need to update the <select>'s
            // v-model when the option list has changed.
            // because v-model has a lower priority than v-for,
            // the v-model is not bound here yet, so we have to
            // retrive it in the actual updateModel() function.
            var tag = this.el.tagName;
            this.isOption =
              (tag === "OPTION" || tag === "OPTGROUP") &&
              this.el.parentNode.tagName === "SELECT";

            // setup anchor nodes
            this.start = _.createAnchor("v-for-start");
            this.end = _.createAnchor("v-for-end");
            _.replace(this.el, this.end);
            _.before(this.start, this.end);

            // check ref
            this.ref = _.findRef(this.el);

            // cache
            this.cache = Object.create(null);

            // fragment factory
            this.factory = new FragmentFactory(this.vm, this.el);
          },

          update: function (data) {
            this.diff(data);
            this.updateRef();
            this.updateModel();
          },

          /**
           * Diff, based on new data and old data, determine the
           * minimum amount of DOM manipulations needed to make the
           * DOM reflect the new data Array.
           *
           * The algorithm diffs the new data Array by storing a
           * hidden reference to an owner vm instance on previously
           * seen data. This allows us to achieve O(n) which is
           * better than a levenshtein distance based algorithm,
           * which is O(m * n).
           *
           * @param {Array} data
           */

          diff: function (data) {
            // check if the Array was converted from an Object
            var item = data[0];
            var convertedFromObject = (this.fromObject =
              isObject(item) &&
              item.hasOwnProperty("$key") &&
              item.hasOwnProperty("$value"));

            var trackByKey = this.params.trackBy;
            var oldFrags = this.frags;
            var frags = (this.frags = new Array(data.length));
            var alias = this.alias;
            var iterator = this.iterator;
            var start = this.start;
            var end = this.end;
            var inDoc = _.inDoc(start);
            var init = !oldFrags;
            var i, l, frag, key, value, primitive;

            // First pass, go through the new Array and fill up
            // the new frags array. If a piece of data has a cached
            // instance for it, we reuse it. Otherwise build a new
            // instance.
            for (i = 0, l = data.length; i < l; i++) {
              item = data[i];
              key = convertedFromObject ? item.$key : null;
              value = convertedFromObject ? item.$value : item;
              primitive = !isObject(value);
              frag = !init && this.getCachedFrag(value, i, key);
              if (frag) {
                // reusable fragment
                frag.reused = true;
                // update $index
                frag.scope.$index = i;
                // update $key
                if (key) {
                  frag.scope.$key = key;
                  if (iterator) {
                    frag.scope[iterator] = key;
                  }
                }
                // update data for track-by, object repeat &
                // primitive values.
                if (trackByKey || convertedFromObject || primitive) {
                  frag.scope[alias] = value;
                }
              } else {
                // new isntance
                frag = this.create(value, alias, i, key);
                frag.fresh = !init;
              }
              frags[i] = frag;
              if (init) {
                frag.before(end);
              }
            }

            // we're done for the initial render.
            if (init) {
              return;
            }

            // Second pass, go through the old fragments and
            // destroy those who are not reused (and remove them
            // from cache)
            var removalIndex = 0;
            var totalRemoved = oldFrags.length - frags.length;
            for (i = 0, l = oldFrags.length; i < l; i++) {
              frag = oldFrags[i];
              if (!frag.reused) {
                this.deleteCachedFrag(frag);
                this.remove(frag, removalIndex++, totalRemoved, inDoc);
              }
            }

            // Final pass, move/insert new fragments into the
            // right place.
            var targetPrev, prevEl, currentPrev;
            var insertionIndex = 0;
            for (i = 0, l = frags.length; i < l; i++) {
              frag = frags[i];
              // this is the frag that we should be after
              targetPrev = frags[i - 1];
              prevEl = targetPrev
                ? targetPrev.staggerCb
                  ? targetPrev.staggerAnchor
                  : targetPrev.end || targetPrev.node
                : start;
              if (frag.reused && !frag.staggerCb) {
                currentPrev = findPrevFrag(frag, start, this.id);
                if (currentPrev !== targetPrev) {
                  this.move(frag, prevEl);
                }
              } else {
                // new instance, or still in stagger.
                // insert with updated stagger index.
                this.insert(frag, insertionIndex++, prevEl, inDoc);
              }
              frag.reused = frag.fresh = false;
            }
          },

          /**
           * Create a new fragment instance.
           *
           * @param {*} value
           * @param {String} alias
           * @param {Number} index
           * @param {String} [key]
           * @return {Fragment}
           */

          create: function (value, alias, index, key) {
            var host = this._host;
            // create iteration scope
            var parentScope = this._scope || this.vm;
            var scope = Object.create(parentScope);
            // ref holder for the scope
            scope.$refs = {};
            scope.$els = {};
            // make sure point $parent to parent scope
            scope.$parent = parentScope;
            // for two-way binding on alias
            scope.$forContext = this;
            // define scope properties
            _.defineReactive(scope, alias, value);
            _.defineReactive(scope, "$index", index);
            if (key) {
              _.defineReactive(scope, "$key", key);
            } else if (scope.$key) {
              // avoid accidental fallback
              _.define(scope, "$key", null);
            }
            if (this.iterator) {
              _.defineReactive(scope, this.iterator, key || index);
            }
            var frag = this.factory.create(host, scope, this._frag);
            frag.forId = this.id;
            this.cacheFrag(value, frag, index, key);
            return frag;
          },

          /**
           * Update the v-ref on owner vm.
           */

          updateRef: function () {
            var ref = this.ref;
            if (!ref) return;
            var hash = (this._scope || this.vm).$refs;
            var refs;
            if (!this.fromObject) {
              refs = this.frags.map(findVmFromFrag);
            } else {
              refs = {};
              this.frags.forEach(function (frag) {
                refs[frag.scope.$key] = findVmFromFrag(frag);
              });
            }
            if (!hash.hasOwnProperty(ref)) {
              _.defineReactive(hash, ref, refs);
            } else {
              hash[ref] = refs;
            }
          },

          /**
           * For option lists, update the containing v-model on
           * parent <select>.
           */

          updateModel: function () {
            if (this.isOption) {
              var parent = this.start.parentNode;
              var model = parent && parent.__v_model;
              if (model) {
                model.forceUpdate();
              }
            }
          },

          /**
           * Insert a fragment. Handles staggering.
           *
           * @param {Fragment} frag
           * @param {Number} index
           * @param {Node} prevEl
           * @param {Boolean} inDoc
           */

          insert: function (frag, index, prevEl, inDoc) {
            if (frag.staggerCb) {
              frag.staggerCb.cancel();
              frag.staggerCb = null;
            }
            var staggerAmount = this.getStagger(frag, index, null, "enter");
            if (inDoc && staggerAmount) {
              // create an anchor and insert it synchronously,
              // so that we can resolve the correct order without
              // worrying about some elements not inserted yet
              var anchor = frag.staggerAnchor;
              if (!anchor) {
                anchor = frag.staggerAnchor = _.createAnchor("stagger-anchor");
                anchor.__vfrag__ = frag;
              }
              _.after(anchor, prevEl);
              var op = (frag.staggerCb = _.cancellable(function () {
                frag.staggerCb = null;
                frag.before(anchor);
                _.remove(anchor);
              }));
              setTimeout(op, staggerAmount);
            } else {
              frag.before(prevEl.nextSibling);
            }
          },

          /**
           * Remove a fragment. Handles staggering.
           *
           * @param {Fragment} frag
           * @param {Number} index
           * @param {Number} total
           * @param {Boolean} inDoc
           */

          remove: function (frag, index, total, inDoc) {
            if (frag.staggerCb) {
              frag.staggerCb.cancel();
              frag.staggerCb = null;
              // it's not possible for the same frag to be removed
              // twice, so if we have a pending stagger callback,
              // it means this frag is queued for enter but removed
              // before its transition started. Since it is already
              // destroyed, we can just leave it in detached state.
              return;
            }
            var staggerAmount = this.getStagger(frag, index, total, "leave");
            if (inDoc && staggerAmount) {
              var op = (frag.staggerCb = _.cancellable(function () {
                frag.staggerCb = null;
                frag.remove(true);
              }));
              setTimeout(op, staggerAmount);
            } else {
              frag.remove(true);
            }
          },

          /**
           * Move a fragment to a new position.
           * Force no transition.
           *
           * @param {Fragment} frag
           * @param {Node} prevEl
           */

          move: function (frag, prevEl) {
            frag.before(prevEl.nextSibling, false);
          },

          /**
           * Cache a fragment using track-by or the object key.
           *
           * @param {*} value
           * @param {Fragment} frag
           * @param {Number} index
           * @param {String} [key]
           */

          cacheFrag: function (value, frag, index, key) {
            var trackByKey = this.params.trackBy;
            var cache = this.cache;
            var primitive = !isObject(value);
            var id;
            if (key || trackByKey || primitive) {
              id = trackByKey
                ? trackByKey === "$index"
                  ? index
                  : value[trackByKey]
                : key || value;
              if (!cache[id]) {
                cache[id] = frag;
              } else if (trackByKey !== "$index") {
                "development" !== "production" && this.warnDuplicate(value);
              }
            } else {
              id = this.id;
              if (value.hasOwnProperty(id)) {
                if (value[id] === null) {
                  value[id] = frag;
                } else {
                  "development" !== "production" && this.warnDuplicate(value);
                }
              } else {
                _.define(value, id, frag);
              }
            }
            frag.raw = value;
          },

          /**
           * Get a cached fragment from the value/index/key
           *
           * @param {*} value
           * @param {Number} index
           * @param {String} key
           * @return {Fragment}
           */

          getCachedFrag: function (value, index, key) {
            var trackByKey = this.params.trackBy;
            var primitive = !isObject(value);
            var frag;
            if (key || trackByKey || primitive) {
              var id = trackByKey
                ? trackByKey === "$index"
                  ? index
                  : value[trackByKey]
                : key || value;
              frag = this.cache[id];
            } else {
              frag = value[this.id];
            }
            if (frag && (frag.reused || frag.fresh)) {
              "development" !== "production" && this.warnDuplicate(value);
            }
            return frag;
          },

          /**
           * Delete a fragment from cache.
           *
           * @param {Fragment} frag
           */

          deleteCachedFrag: function (frag) {
            var value = frag.raw;
            var trackByKey = this.params.trackBy;
            var scope = frag.scope;
            var index = scope.$index;
            // fix #948: avoid accidentally fall through to
            // a parent repeater which happens to have $key.
            var key = scope.hasOwnProperty("$key") && scope.$key;
            var primitive = !isObject(value);
            if (trackByKey || key || primitive) {
              var id = trackByKey
                ? trackByKey === "$index"
                  ? index
                  : value[trackByKey]
                : key || value;
              this.cache[id] = null;
            } else {
              value[this.id] = null;
              frag.raw = null;
            }
          },

          /**
           * Get the stagger amount for an insertion/removal.
           *
           * @param {Fragment} frag
           * @param {Number} index
           * @param {Number} total
           * @param {String} type
           */

          getStagger: function (frag, index, total, type) {
            type = type + "Stagger";
            var trans = frag.node.__v_trans;
            var hooks = trans && trans.hooks;
            var hook = hooks && (hooks[type] || hooks.stagger);
            return hook
              ? hook.call(frag, index, total)
              : index * parseInt(this.params[type] || this.params.stagger, 10);
          },

          /**
           * Pre-process the value before piping it through the
           * filters. This is passed to and called by the watcher.
           */

          _preProcess: function (value) {
            // regardless of type, store the un-filtered raw value.
            this.rawValue = value;
            return value;
          },

          /**
           * Post-process the value after it has been piped through
           * the filters. This is passed to and called by the watcher.
           *
           * It is necessary for this to be called during the
           * wathcer's dependency collection phase because we want
           * the v-for to update when the source Object is mutated.
           */

          _postProcess: function (value) {
            if (_.isArray(value)) {
              return value;
            } else if (_.isPlainObject(value)) {
              // convert plain object to array.
              var keys = Object.keys(value);
              var i = keys.length;
              var res = new Array(i);
              var key;
              while (i--) {
                key = keys[i];
                res[i] = {
                  $key: key,
                  $value: value[key],
                };
              }
              return res;
            } else {
              var type = typeof value;
              if (type === "number") {
                value = range(value);
              } else if (type === "string") {
                value = _.toArray(value);
              }
              return value || [];
            }
          },

          unbind: function () {
            if (this.ref) {
              (this._scope || this.vm).$refs[this.ref] = null;
            }
            if (this.frags) {
              var i = this.frags.length;
              var frag;
              while (i--) {
                frag = this.frags[i];
                this.deleteCachedFrag(frag);
                frag.destroy();
              }
            }
          },
        };

        /**
         * Helper to find the previous element that is a fragment
         * anchor. This is necessary because a destroyed frag's
         * element could still be lingering in the DOM before its
         * leaving transition finishes, but its inserted flag
         * should have been set to false so we can skip them.
         *
         * If this is a block repeat, we want to make sure we only
         * return frag that is bound to this v-for. (see #929)
         *
         * @param {Fragment} frag
         * @param {Comment|Text} anchor
         * @param {String} id
         * @return {Fragment}
         */

        function findPrevFrag(frag, anchor, id) {
          var el = frag.node.previousSibling;
          /* istanbul ignore if */
          if (!el) return;
          frag = el.__vfrag__;
          while (
            (!frag || frag.forId !== id || !frag.inserted) &&
            el !== anchor
          ) {
            el = el.previousSibling;
            /* istanbul ignore if */
            if (!el) return;
            frag = el.__vfrag__;
          }
          return frag;
        }

        /**
         * Find a vm from a fragment.
         *
         * @param {Fragment} frag
         * @return {Vue|undefined}
         */

        function findVmFromFrag(frag) {
          return frag.node.__vue__ || frag.node.nextSibling.__vue__;
        }

        /**
         * Create a range array from given number.
         *
         * @param {Number} n
         * @return {Array}
         */

        function range(n) {
          var i = -1;
          var ret = new Array(n);
          while (++i < n) {
            ret[i] = i;
          }
          return ret;
        }

        if (true) {
          module.exports.warnDuplicate = function (value) {
            _.warn(
              'Duplicate value found in v-for="' +
                this.descriptor.raw +
                '": ' +
                JSON.stringify(value) +
                '. Use track-by="$index" if ' +
                "you are expecting duplicate values."
            );
          };
        }

        /***/
      },
      /* 21 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var compiler = __webpack_require__(14);
        var templateParser = __webpack_require__(19);
        var Fragment = __webpack_require__(22);
        var Cache = __webpack_require__(7);
        var linkerCache = new Cache(5000);

        /**
         * A factory that can be used to create instances of a
         * fragment. Caches the compiled linker if possible.
         *
         * @param {Vue} vm
         * @param {Element|String} el
         */

        function FragmentFactory(vm, el) {
          this.vm = vm;
          var template;
          var isString = typeof el === "string";
          if (isString || _.isTemplate(el)) {
            template = templateParser.parse(el, true);
          } else {
            template = document.createDocumentFragment();
            template.appendChild(el);
          }
          this.template = template;
          // linker can be cached, but only for components
          var linker;
          var cid = vm.constructor.cid;
          if (cid > 0) {
            var cacheId = cid + (isString ? el : el.outerHTML);
            linker = linkerCache.get(cacheId);
            if (!linker) {
              linker = compiler.compile(template, vm.$options, true);
              linkerCache.put(cacheId, linker);
            }
          } else {
            linker = compiler.compile(template, vm.$options, true);
          }
          this.linker = linker;
        }

        /**
         * Create a fragment instance with given host and scope.
         *
         * @param {Vue} host
         * @param {Object} scope
         * @param {Fragment} parentFrag
         */

        FragmentFactory.prototype.create = function (host, scope, parentFrag) {
          var frag = templateParser.clone(this.template);
          return new Fragment(
            this.linker,
            this.vm,
            frag,
            host,
            scope,
            parentFrag
          );
        };

        module.exports = FragmentFactory;

        /***/
      },
      /* 22 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var transition = __webpack_require__(9);

        /**
         * Abstraction for a partially-compiled fragment.
         * Can optionally compile content with a child scope.
         *
         * @param {Function} linker
         * @param {Vue} vm
         * @param {DocumentFragment} frag
         * @param {Vue} [host]
         * @param {Object} [scope]
         */

        function Fragment(linker, vm, frag, host, scope, parentFrag) {
          this.children = [];
          this.childFrags = [];
          this.vm = vm;
          this.scope = scope;
          this.inserted = false;
          this.parentFrag = parentFrag;
          if (parentFrag) {
            parentFrag.childFrags.push(this);
          }
          this.unlink = linker(vm, frag, host, scope, this);
          var single = (this.single = frag.childNodes.length === 1);
          if (single) {
            this.node = frag.childNodes[0];
            this.before = singleBefore;
            this.remove = singleRemove;
          } else {
            this.node = _.createAnchor("fragment-start");
            this.end = _.createAnchor("fragment-end");
            this.frag = frag;
            _.prepend(this.node, frag);
            frag.appendChild(this.end);
            this.before = multiBefore;
            this.remove = multiRemove;
          }
          this.node.__vfrag__ = this;
        }

        /**
         * Call attach/detach for all components contained within
         * this fragment. Also do so recursively for all child
         * fragments.
         *
         * @param {Function} hook
         */

        Fragment.prototype.callHook = function (hook) {
          var i, l;
          for (i = 0, l = this.children.length; i < l; i++) {
            hook(this.children[i]);
          }
          for (i = 0, l = this.childFrags.length; i < l; i++) {
            this.childFrags[i].callHook(hook);
          }
        };

        /**
         * Destroy the fragment.
         */

        Fragment.prototype.destroy = function () {
          if (this.parentFrag) {
            this.parentFrag.childFrags.$remove(this);
          }
          this.unlink();
        };

        /**
         * Insert fragment before target, single node version
         *
         * @param {Node} target
         * @param {Boolean} withTransition
         */

        function singleBefore(target, withTransition) {
          this.inserted = true;
          var method = withTransition !== false ? transition.before : _.before;
          method(this.node, target, this.vm);
          if (_.inDoc(this.node)) {
            this.callHook(attach);
          }
        }

        /**
         * Remove fragment, single node version
         *
         * @param {Boolean} [destroy]
         */

        function singleRemove(destroy) {
          this.inserted = false;
          var shouldCallRemove = _.inDoc(this.node);
          var self = this;
          transition.remove(this.node, this.vm, function () {
            if (shouldCallRemove) {
              self.callHook(detach);
            }
            if (destroy) {
              self.destroy();
            }
          });
        }

        /**
         * Insert fragment before target, multi-nodes version
         *
         * @param {Node} target
         * @param {Boolean} withTransition
         */

        function multiBefore(target, withTransition) {
          this.inserted = true;
          var vm = this.vm;
          var method = withTransition !== false ? transition.before : _.before;
          _.mapNodeRange(this.node, this.end, function (node) {
            method(node, target, vm);
          });
          if (_.inDoc(this.node)) {
            this.callHook(attach);
          }
        }

        /**
         * Remove fragment, multi-nodes version
         *
         * @param {Boolean} [destroy]
         */

        function multiRemove(destroy) {
          this.inserted = false;
          var self = this;
          var shouldCallRemove = _.inDoc(this.node);
          _.removeNodeRange(
            this.node,
            this.end,
            this.vm,
            this.frag,
            function () {
              if (shouldCallRemove) {
                self.callHook(detach);
              }
              if (destroy) {
                self.destroy();
              }
            }
          );
        }

        /**
         * Call attach hook for a Vue instance.
         *
         * @param {Vue} child
         */

        function attach(child) {
          if (!child._isAttached) {
            child._callHook("attached");
          }
        }

        /**
         * Call detach hook for a Vue instance.
         *
         * @param {Vue} child
         */

        function detach(child) {
          if (child._isAttached) {
            child._callHook("detached");
          }
        }

        module.exports = Fragment;

        /***/
      },
      /* 23 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var FragmentFactory = __webpack_require__(21);

        module.exports = {
          priority: 2000,

          bind: function () {
            var el = this.el;
            if (!el.__vue__) {
              // check else block
              var next = el.nextElementSibling;
              if (next && _.attr(next, "v-else") !== null) {
                _.remove(next);
                this.elseFactory = new FragmentFactory(this.vm, next);
              }
              // check main block
              this.anchor = _.createAnchor("v-if");
              _.replace(el, this.anchor);
              this.factory = new FragmentFactory(this.vm, el);
            } else {
              "development" !== "production" &&
                _.warn(
                  'v-if="' +
                    this.expression +
                    '" cannot be ' +
                    "used on an instance root element."
                );
              this.invalid = true;
            }
          },

          update: function (value) {
            if (this.invalid) return;
            if (value) {
              if (!this.frag) {
                this.insert();
              }
            } else {
              this.remove();
            }
          },

          insert: function () {
            if (this.elseFrag) {
              this.elseFrag.remove(true);
              this.elseFrag = null;
            }
            this.frag = this.factory.create(
              this._host,
              this._scope,
              this._frag
            );
            this.frag.before(this.anchor);
          },

          remove: function () {
            if (this.frag) {
              this.frag.remove(true);
              this.frag = null;
            }
            if (this.elseFactory) {
              this.elseFrag = this.elseFactory.create(
                this._host,
                this._scope,
                this._frag
              );
              this.elseFrag.before(this.anchor);
            }
          },

          unbind: function () {
            if (this.frag) {
              this.frag.destroy();
            }
          },
        };

        /***/
      },
      /* 24 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var transition = __webpack_require__(9);

        module.exports = {
          bind: function () {
            // check else block
            var next = this.el.nextElementSibling;
            if (next && _.attr(next, "v-else") !== null) {
              this.elseEl = next;
            }
          },

          update: function (value) {
            var el = this.el;
            transition.apply(
              el,
              value ? 1 : -1,
              function () {
                el.style.display = value ? "" : "none";
              },
              this.vm
            );
            var elseEl = this.elseEl;
            if (elseEl) {
              transition.apply(
                elseEl,
                value ? -1 : 1,
                function () {
                  elseEl.style.display = value ? "none" : "";
                },
                this.vm
              );
            }
          },
        };

        /***/
      },
      /* 25 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        var handlers = {
          text: __webpack_require__(26),
          radio: __webpack_require__(27),
          select: __webpack_require__(28),
          checkbox: __webpack_require__(29),
        };

        module.exports = {
          priority: 800,
          twoWay: true,
          handlers: handlers,
          params: ["lazy", "number", "debounce"],

          /**
           * Possible elements:
           *   <select>
           *   <textarea>
           *   <input type="*">
           *     - text
           *     - checkbox
           *     - radio
           *     - number
           */

          bind: function () {
            // friendly warning...
            this.checkFilters();
            if (this.hasRead && !this.hasWrite) {
              "development" !== "production" &&
                _.warn(
                  "It seems you are using a read-only filter with " +
                    "v-model. You might want to use a two-way filter " +
                    "to ensure correct behavior."
                );
            }
            var el = this.el;
            var tag = el.tagName;
            var handler;
            if (tag === "INPUT") {
              handler = handlers[el.type] || handlers.text;
            } else if (tag === "SELECT") {
              handler = handlers.select;
            } else if (tag === "TEXTAREA") {
              handler = handlers.text;
            } else {
              "development" !== "production" &&
                _.warn("v-model does not support element type: " + tag);
              return;
            }
            el.__v_model = this;
            handler.bind.call(this);
            this.update = handler.update;
            this._unbind = handler.unbind;
          },

          /**
           * Check read/write filter stats.
           */

          checkFilters: function () {
            var filters = this.filters;
            if (!filters) return;
            var i = filters.length;
            while (i--) {
              var filter = _.resolveAsset(
                this.vm.$options,
                "filters",
                filters[i].name
              );
              if (typeof filter === "function" || filter.read) {
                this.hasRead = true;
              }
              if (filter.write) {
                this.hasWrite = true;
              }
            }
          },

          unbind: function () {
            this.el.__v_model = null;
            this._unbind && this._unbind();
          },
        };

        /***/
      },
      /* 26 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          bind: function () {
            var self = this;
            var el = this.el;
            var isRange = el.type === "range";
            var lazy = this.params.lazy;
            var number = this.params.number;
            var debounce = this.params.debounce;

            // handle composition events.
            //   http://blog.evanyou.me/2014/01/03/composition-event/
            // skip this for Android because it handles composition
            // events quite differently. Android doesn't trigger
            // composition events for language input methods e.g.
            // Chinese, but instead triggers them for spelling
            // suggestions... (see Discussion/#162)
            var composing = false;
            if (!_.isAndroid && !isRange) {
              this.on("compositionstart", function () {
                composing = true;
              });
              this.on("compositionend", function () {
                composing = false;
                // in IE11 the "compositionend" event fires AFTER
                // the "input" event, so the input handler is blocked
                // at the end... have to call it here.
                //
                // #1327: in lazy mode this is unecessary.
                if (!lazy) {
                  self.listener();
                }
              });
            }

            // prevent messing with the input when user is typing,
            // and force update on blur.
            this.focused = false;
            if (!isRange) {
              this.on("focus", function () {
                self.focused = true;
              });
              this.on("blur", function () {
                self.focused = false;
                self.listener();
              });
            }

            // Now attach the main listener
            this.listener = function () {
              if (composing) return;
              var val = number || isRange ? _.toNumber(el.value) : el.value;
              self.set(val);
              // force update on next tick to avoid lock & same value
              // also only update when user is not typing
              _.nextTick(function () {
                if (self._bound && !self.focused) {
                  self.update(self._watcher.value);
                }
              });
            };

            // apply debounce
            if (debounce) {
              this.listener = _.debounce(this.listener, debounce);
            }

            // Support jQuery events, since jQuery.trigger() doesn't
            // trigger native events in some cases and some plugins
            // rely on $.trigger()
            //
            // We want to make sure if a listener is attached using
            // jQuery, it is also removed with jQuery, that's why
            // we do the check for each directive instance and
            // store that check result on itself. This also allows
            // easier test coverage control by unsetting the global
            // jQuery variable in tests.
            this.hasjQuery = typeof jQuery === "function";
            if (this.hasjQuery) {
              jQuery(el).on("change", this.listener);
              if (!lazy) {
                jQuery(el).on("input", this.listener);
              }
            } else {
              this.on("change", this.listener);
              if (!lazy) {
                this.on("input", this.listener);
              }
            }

            // IE9 doesn't fire input event on backspace/del/cut
            if (!lazy && _.isIE9) {
              this.on("cut", function () {
                _.nextTick(self.listener);
              });
              this.on("keyup", function (e) {
                if (e.keyCode === 46 || e.keyCode === 8) {
                  self.listener();
                }
              });
            }

            // set initial value if present
            if (
              el.hasAttribute("value") ||
              (el.tagName === "TEXTAREA" && el.value.trim())
            ) {
              this.afterBind = this.listener;
            }
          },

          update: function (value) {
            this.el.value = _.toString(value);
          },

          unbind: function () {
            var el = this.el;
            if (this.hasjQuery) {
              jQuery(el).off("change", this.listener);
              jQuery(el).off("input", this.listener);
            }
          },
        };

        /***/
      },
      /* 27 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          bind: function () {
            var self = this;
            var el = this.el;

            this.getValue = function () {
              // value overwrite via v-bind:value
              if (el.hasOwnProperty("_value")) {
                return el._value;
              }
              var val = el.value;
              if (self.params.number) {
                val = _.toNumber(val);
              }
              return val;
            };

            this.listener = function () {
              self.set(self.getValue());
            };
            this.on("change", this.listener);

            if (el.checked) {
              this.afterBind = this.listener;
            }
          },

          update: function (value) {
            this.el.checked = _.looseEqual(value, this.getValue());
          },
        };

        /***/
      },
      /* 28 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          bind: function () {
            var self = this;
            var el = this.el;

            // method to force update DOM using latest value.
            this.forceUpdate = function () {
              if (self._watcher) {
                self.update(self._watcher.get());
              }
            };

            // check if this is a multiple select
            var multiple = (this.multiple = el.hasAttribute("multiple"));

            // attach listener
            this.listener = function () {
              var value = getValue(el, multiple);
              value = self.params.number
                ? _.isArray(value)
                  ? value.map(_.toNumber)
                  : _.toNumber(value)
                : value;
              self.set(value);
            };
            this.on("change", this.listener);

            // if has initial value, set afterBind
            var initValue = getValue(el, multiple, true);
            if (
              (multiple && initValue.length) ||
              (!multiple && initValue !== null)
            ) {
              this.afterBind = this.listener;
            }

            // All major browsers except Firefox resets
            // selectedIndex with value -1 to 0 when the element
            // is appended to a new parent, therefore we have to
            // force a DOM update whenever that happens...
            this.vm.$on("hook:attached", this.forceUpdate);
          },

          update: function (value) {
            var el = this.el;
            el.selectedIndex = -1;
            var multi = this.multiple && _.isArray(value);
            var options = el.options;
            var i = options.length;
            var op, val;
            while (i--) {
              op = options[i];
              val = op.hasOwnProperty("_value") ? op._value : op.value;
              /* eslint-disable eqeqeq */
              op.selected = multi
                ? indexOf(value, val) > -1
                : _.looseEqual(value, val);
              /* eslint-enable eqeqeq */
            }
          },

          unbind: function () {
            /* istanbul ignore next */
            this.vm.$off("hook:attached", this.forceUpdate);
          },
        };

        /**
         * Get select value
         *
         * @param {SelectElement} el
         * @param {Boolean} multi
         * @param {Boolean} init
         * @return {Array|*}
         */

        function getValue(el, multi, init) {
          var res = multi ? [] : null;
          var op, val, selected;
          for (var i = 0, l = el.options.length; i < l; i++) {
            op = el.options[i];
            selected = init ? op.hasAttribute("selected") : op.selected;
            if (selected) {
              val = op.hasOwnProperty("_value") ? op._value : op.value;
              if (multi) {
                res.push(val);
              } else {
                return val;
              }
            }
          }
          return res;
        }

        /**
         * Native Array.indexOf uses strict equal, but in this
         * case we need to match string/numbers with custom equal.
         *
         * @param {Array} arr
         * @param {*} val
         */

        function indexOf(arr, val) {
          var i = arr.length;
          while (i--) {
            if (_.looseEqual(arr[i], val)) {
              return i;
            }
          }
          return -1;
        }

        /***/
      },
      /* 29 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          bind: function () {
            var self = this;
            var el = this.el;

            this.getValue = function () {
              return el.hasOwnProperty("_value")
                ? el._value
                : self.params.number
                ? _.toNumber(el.value)
                : el.value;
            };

            function getBooleanValue() {
              var val = el.checked;
              if (val && el.hasOwnProperty("_trueValue")) {
                return el._trueValue;
              }
              if (!val && el.hasOwnProperty("_falseValue")) {
                return el._falseValue;
              }
              return val;
            }

            this.listener = function () {
              var model = self._watcher.value;
              if (_.isArray(model)) {
                var val = self.getValue();
                if (el.checked) {
                  if (_.indexOf(model, val) < 0) {
                    model.push(val);
                  }
                } else {
                  model.$remove(val);
                }
              } else {
                self.set(getBooleanValue());
              }
            };

            this.on("change", this.listener);
            if (el.checked) {
              this.afterBind = this.listener;
            }
          },

          update: function (value) {
            var el = this.el;
            if (_.isArray(value)) {
              el.checked = _.indexOf(value, this.getValue()) > -1;
            } else {
              if (el.hasOwnProperty("_trueValue")) {
                el.checked = _.looseEqual(value, el._trueValue);
              } else {
                el.checked = !!value;
              }
            }
          },
        };

        /***/
      },
      /* 30 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        // keyCode aliases
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          delete: 46,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
        };

        function keyFilter(handler, keys) {
          var codes = keys.map(function (key) {
            var code = keyCodes[key];
            if (!code) {
              code = parseInt(key, 10);
            }
            return code;
          });
          return function keyHandler(e) {
            if (codes.indexOf(e.keyCode) > -1) {
              return handler.call(this, e);
            }
          };
        }

        function stopFilter(handler) {
          return function stopHandler(e) {
            e.stopPropagation();
            return handler.call(this, e);
          };
        }

        function preventFilter(handler) {
          return function preventHandler(e) {
            e.preventDefault();
            return handler.call(this, e);
          };
        }

        module.exports = {
          acceptStatement: true,
          priority: 700,

          bind: function () {
            // deal with iframes
            if (this.el.tagName === "IFRAME" && this.arg !== "load") {
              var self = this;
              this.iframeBind = function () {
                _.on(self.el.contentWindow, self.arg, self.handler);
              };
              this.on("load", this.iframeBind);
            }
          },

          update: function (handler) {
            // stub a noop for v-on with no value,
            // e.g. @mousedown.prevent
            if (!this.descriptor.raw) {
              handler = function () {};
            }

            if (typeof handler !== "function") {
              "development" !== "production" &&
                _.warn(
                  "v-on:" +
                    this.arg +
                    '="' +
                    this.expression +
                    '" expects a function value, ' +
                    "got " +
                    handler
                );
              return;
            }

            // apply modifiers
            if (this.modifiers.stop) {
              handler = stopFilter(handler);
            }
            if (this.modifiers.prevent) {
              handler = preventFilter(handler);
            }
            // key filter
            var keys = Object.keys(this.modifiers).filter(function (key) {
              return key !== "stop" && key !== "prevent";
            });
            if (keys.length) {
              handler = keyFilter(handler, keys);
            }

            this.reset();
            var scope = this._scope || this.vm;
            this.handler = function (e) {
              scope.$event = e;
              var res = handler(e);
              scope.$event = null;
              return res;
            };
            if (this.iframeBind) {
              this.iframeBind();
            } else {
              _.on(this.el, this.arg, this.handler);
            }
          },

          reset: function () {
            var el = this.iframeBind ? this.el.contentWindow : this.el;
            if (this.handler) {
              _.off(el, this.arg, this.handler);
            }
          },

          unbind: function () {
            this.reset();
          },
        };

        /***/
      },
      /* 31 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        // xlink
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var xlinkRE = /^xlink:/;

        // these input element attributes should also set their
        // corresponding properties
        var inputProps = {
          value: 1,
          checked: 1,
          selected: 1,
        };

        // these attributes should set a hidden property for
        // binding v-model to object values
        var modelProps = {
          value: "_value",
          "true-value": "_trueValue",
          "false-value": "_falseValue",
        };

        // check for attributes that prohibit interpolations
        var disallowedInterpAttrRE =
          /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;

        module.exports = {
          priority: 850,

          bind: function () {
            var attr = this.arg;
            var tag = this.el.tagName;
            // handle interpolation bindings
            if (this.descriptor.interp) {
              // only allow binding on native attributes
              if (
                disallowedInterpAttrRE.test(attr) ||
                (attr === "name" && (tag === "PARTIAL" || tag === "SLOT"))
              ) {
                "development" !== "production" &&
                  _.warn(
                    attr +
                      '="' +
                      this.descriptor.raw +
                      '": ' +
                      "attribute interpolation is not allowed in Vue.js " +
                      "directives and special attributes."
                  );
                this.el.removeAttribute(attr);
                this.invalid = true;
              }

              /* istanbul ignore if */
              if (true) {
                var raw = attr + '="' + this.descriptor.raw + '": ';
                // warn src
                if (attr === "src") {
                  _.warn(
                    raw +
                      'interpolation in "src" attribute will cause ' +
                      "a 404 request. Use v-bind:src instead."
                  );
                }

                // warn style
                if (attr === "style") {
                  _.warn(
                    raw +
                      'interpolation in "style" attribute will cause ' +
                      "the attribute to be discarded in Internet Explorer. " +
                      "Use v-bind:style instead."
                  );
                }
              }
            }
          },

          update: function (value) {
            if (this.invalid) {
              return;
            }
            var attr = this.arg;
            if (inputProps[attr] && attr in this.el) {
              this.el[attr] = value;
            }
            // set model props
            var modelProp = modelProps[attr];
            if (modelProp) {
              this.el[modelProp] = value;
              // update v-model if present
              var model = this.el.__v_model;
              if (model) {
                model.listener();
              }
            }
            // do not set value attribute for textarea
            if (attr === "value" && this.el.tagName === "TEXTAREA") {
              this.el.removeAttribute(attr);
              return;
            }
            // update attribute
            if (value != null && value !== false) {
              if (xlinkRE.test(attr)) {
                this.el.setAttributeNS(xlinkNS, attr, value);
              } else {
                this.el.setAttribute(attr, value);
              }
            } else {
              this.el.removeAttribute(attr);
            }
          },
        };

        /***/
      },
      /* 32 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        module.exports = {
          priority: 1500,

          bind: function () {
            /* istanbul ignore if */
            if (!this.arg) {
              return;
            }
            var id = (this.id = _.camelize(this.arg));
            var refs = (this._scope || this.vm).$els;
            if (refs.hasOwnProperty(id)) {
              refs[id] = this.el;
            } else {
              _.defineReactive(refs, id, this.el);
            }
          },

          unbind: function () {
            var refs = (this._scope || this.vm).$els;
            if (refs[this.id] === this.el) {
              refs[this.id] = null;
            }
          },
        };

        /***/
      },
      /* 33 */
      /***/ function (module, exports, __webpack_require__) {
        if (true) {
          module.exports = {
            bind: function () {
              __webpack_require__(1).warn(
                "v-ref:" +
                  this.arg +
                  " must be used on a child " +
                  "component. Found on <" +
                  this.el.tagName.toLowerCase() +
                  ">."
              );
            },
          };
        }

        /***/
      },
      /* 34 */
      /***/ function (module, exports) {
        module.exports = {
          bind: function () {
            var el = this.el;
            this.vm.$once("hook:compiled", function () {
              el.removeAttribute("v-cloak");
            });
          },
        };

        /***/
      },
      /* 35 */
      /***/ function (module, exports, __webpack_require__) {
        exports.style = __webpack_require__(36);
        exports["class"] = __webpack_require__(37);
        exports.component = __webpack_require__(38);
        exports.prop = __webpack_require__(39);
        exports.transition = __webpack_require__(45);

        /***/
      },
      /* 36 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var prefixes = ["-webkit-", "-moz-", "-ms-"];
        var camelPrefixes = ["Webkit", "Moz", "ms"];
        var importantRE = /!important;?$/;
        var camelRE = /([a-z])([A-Z])/g;
        var testEl = null;
        var propCache = {};

        module.exports = {
          deep: true,

          update: function (value) {
            if (typeof value === "string") {
              this.el.style.cssText = value;
            } else if (_.isArray(value)) {
              this.objectHandler(value.reduce(_.extend, {}));
            } else {
              this.objectHandler(value);
            }
          },

          objectHandler: function (value) {
            // cache object styles so that only changed props
            // are actually updated.
            var cache = this.cache || (this.cache = {});
            var prop, val;
            for (prop in cache) {
              if (!(prop in value)) {
                this.setProp(prop, null);
                delete cache[prop];
              }
            }
            for (prop in value) {
              val = value[prop];
              if (val !== cache[prop]) {
                cache[prop] = val;
                this.setProp(prop, val);
              }
            }
          },

          setProp: function (prop, value) {
            prop = normalize(prop);
            if (!prop) return; // unsupported prop
            // cast possible numbers/booleans into strings
            if (value != null) value += "";
            if (value) {
              var isImportant = importantRE.test(value) ? "important" : "";
              if (isImportant) {
                value = value.replace(importantRE, "").trim();
              }
              this.el.style.setProperty(prop, value, isImportant);
            } else {
              this.el.style.removeProperty(prop);
            }
          },
        };

        /**
         * Normalize a CSS property name.
         * - cache result
         * - auto prefix
         * - camelCase -> dash-case
         *
         * @param {String} prop
         * @return {String}
         */

        function normalize(prop) {
          if (propCache[prop]) {
            return propCache[prop];
          }
          var res = prefix(prop);
          propCache[prop] = propCache[res] = res;
          return res;
        }

        /**
         * Auto detect the appropriate prefix for a CSS property.
         * https://gist.github.com/paulirish/523692
         *
         * @param {String} prop
         * @return {String}
         */

        function prefix(prop) {
          prop = prop.replace(camelRE, "$1-$2").toLowerCase();
          var camel = _.camelize(prop);
          var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
          if (!testEl) {
            testEl = document.createElement("div");
          }
          if (camel in testEl.style) {
            return prop;
          }
          var i = prefixes.length;
          var prefixed;
          while (i--) {
            prefixed = camelPrefixes[i] + upper;
            if (prefixed in testEl.style) {
              return prefixes[i] + prop;
            }
          }
        }

        /***/
      },
      /* 37 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var addClass = _.addClass;
        var removeClass = _.removeClass;

        module.exports = {
          update: function (value) {
            if (value && typeof value === "string") {
              this.handleObject(stringToObject(value));
            } else if (_.isPlainObject(value)) {
              this.handleObject(value);
            } else if (_.isArray(value)) {
              this.handleArray(value);
            } else {
              this.cleanup();
            }
          },

          handleObject: function (value) {
            this.cleanup(value);
            var keys = (this.prevKeys = Object.keys(value));
            for (var i = 0, l = keys.length; i < l; i++) {
              var key = keys[i];
              if (value[key]) {
                addClass(this.el, key);
              } else {
                removeClass(this.el, key);
              }
            }
          },

          handleArray: function (value) {
            this.cleanup(value);
            for (var i = 0, l = value.length; i < l; i++) {
              if (value[i]) {
                addClass(this.el, value[i]);
              }
            }
            this.prevKeys = value.slice();
          },

          cleanup: function (value) {
            if (this.prevKeys) {
              var i = this.prevKeys.length;
              while (i--) {
                var key = this.prevKeys[i];
                if (key && (!value || !contains(value, key))) {
                  removeClass(this.el, key);
                }
              }
            }
          },
        };

        function stringToObject(value) {
          var res = {};
          var keys = value.trim().split(/\s+/);
          var i = keys.length;
          while (i--) {
            res[keys[i]] = true;
          }
          return res;
        }

        function contains(value, key) {
          return _.isArray(value)
            ? value.indexOf(key) > -1
            : value.hasOwnProperty(key);
        }

        /***/
      },
      /* 38 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var templateParser = __webpack_require__(19);

        module.exports = {
          priority: 1500,

          params: ["keep-alive", "transition-mode", "inline-template"],

          /**
           * Setup. Two possible usages:
           *
           * - static:
           *   <comp> or <div v-component="comp">
           *
           * - dynamic:
           *   <component :is="view">
           */

          bind: function () {
            if (!this.el.__vue__) {
              // check ref
              this.ref = _.findRef(this.el);
              var refs = (this._scope || this.vm).$refs;
              if (this.ref && !refs.hasOwnProperty(this.ref)) {
                _.defineReactive(refs, this.ref, null);
              }
              // keep-alive cache
              this.keepAlive = this.params.keepAlive;
              if (this.keepAlive) {
                this.cache = {};
              }
              // check inline-template
              if (this.params.inlineTemplate) {
                // extract inline template as a DocumentFragment
                this.inlineTemplate = _.extractContent(this.el, true);
              }
              // component resolution related state
              this.pendingComponentCb = this.Component = null;
              // transition related state
              this.pendingRemovals = 0;
              this.pendingRemovalCb = null;
              // check dynamic component params
              // create a ref anchor
              this.anchor = _.createAnchor("v-component");
              _.replace(this.el, this.anchor);
              // if static, build right now.
              if (this.literal) {
                this.setComponent(this.expression);
              }
            } else {
              "development" !== "production" &&
                _.warn(
                  'cannot mount component "' +
                    this.expression +
                    '" ' +
                    "on already mounted element: " +
                    this.el
                );
            }
          },

          /**
           * Public update, called by the watcher in the dynamic
           * literal scenario, e.g. <component :is="view">
           */

          update: function (value) {
            if (!this.literal) {
              this.setComponent(value);
            }
          },

          /**
           * Switch dynamic components. May resolve the component
           * asynchronously, and perform transition based on
           * specified transition mode. Accepts a few additional
           * arguments specifically for vue-router.
           *
           * The callback is called when the full transition is
           * finished.
           *
           * @param {String} value
           * @param {Function} [cb]
           */

          setComponent: function (value, cb) {
            this.invalidatePending();
            if (!value) {
              // just remove current
              this.unbuild(true);
              this.remove(this.childVM, cb);
              this.childVM = null;
            } else {
              var self = this;
              this.resolveComponent(value, function () {
                self.mountComponent(cb);
              });
            }
          },

          /**
           * Resolve the component constructor to use when creating
           * the child vm.
           */

          resolveComponent: function (id, cb) {
            var self = this;
            this.pendingComponentCb = _.cancellable(function (Component) {
              self.ComponentName = id;
              self.Component = Component;
              cb();
            });
            this.vm._resolveComponent(id, this.pendingComponentCb);
          },

          /**
           * Create a new instance using the current constructor and
           * replace the existing instance. This method doesn't care
           * whether the new component and the old one are actually
           * the same.
           *
           * @param {Function} [cb]
           */

          mountComponent: function (cb) {
            // actual mount
            this.unbuild(true);
            var self = this;
            var activateHook = this.Component.options.activate;
            var cached = this.getCached();
            var newComponent = this.build();
            if (activateHook && !cached) {
              this.waitingFor = newComponent;
              activateHook.call(newComponent, function () {
                self.waitingFor = null;
                self.transition(newComponent, cb);
              });
            } else {
              this.transition(newComponent, cb);
            }
          },

          /**
           * When the component changes or unbinds before an async
           * constructor is resolved, we need to invalidate its
           * pending callback.
           */

          invalidatePending: function () {
            if (this.pendingComponentCb) {
              this.pendingComponentCb.cancel();
              this.pendingComponentCb = null;
            }
          },

          /**
           * Instantiate/insert a new child vm.
           * If keep alive and has cached instance, insert that
           * instance; otherwise build a new one and cache it.
           *
           * @param {Object} [extraOptions]
           * @return {Vue} - the created instance
           */

          build: function (extraOptions) {
            var cached = this.getCached();
            if (cached) {
              return cached;
            }
            if (this.Component) {
              // default options
              var options = {
                name: this.ComponentName,
                el: templateParser.clone(this.el),
                template: this.inlineTemplate,
                // make sure to add the child with correct parent
                // if this is a transcluded component, its parent
                // should be the transclusion host.
                parent: this._host || this.vm,
                // if no inline-template, then the compiled
                // linker can be cached for better performance.
                _linkerCachable: !this.inlineTemplate,
                _ref: this.ref,
                _asComponent: true,
                _isRouterView: this._isRouterView,
                // if this is a transcluded component, context
                // will be the common parent vm of this instance
                // and its host.
                _context: this.vm,
                // if this is inside an inline v-for, the scope
                // will be the intermediate scope created for this
                // repeat fragment. this is used for linking props
                // and container directives.
                _scope: this._scope,
                // pass in the owner fragment of this component.
                // this is necessary so that the fragment can keep
                // track of its contained components in order to
                // call attach/detach hooks for them.
                _frag: this._frag,
              };
              // extra options
              // in 1.0.0 this is used by vue-router only
              /* istanbul ignore if */
              if (extraOptions) {
                _.extend(options, extraOptions);
              }
              var child = new this.Component(options);
              if (this.keepAlive) {
                this.cache[this.Component.cid] = child;
              }
              /* istanbul ignore if */
              if (
                "development" !== "production" &&
                this.el.hasAttribute("transition") &&
                child._isFragment
              ) {
                _.warn(
                  "Transitions will not work on a fragment instance. " +
                    "Template: " +
                    child.$options.template
                );
              }
              return child;
            }
          },

          /**
           * Try to get a cached instance of the current component.
           *
           * @return {Vue|undefined}
           */

          getCached: function () {
            return this.keepAlive && this.cache[this.Component.cid];
          },

          /**
           * Teardown the current child, but defers cleanup so
           * that we can separate the destroy and removal steps.
           *
           * @param {Boolean} defer
           */

          unbuild: function (defer) {
            if (this.waitingFor) {
              this.waitingFor.$destroy();
              this.waitingFor = null;
            }
            var child = this.childVM;
            if (!child || this.keepAlive) {
              return;
            }
            // the sole purpose of `deferCleanup` is so that we can
            // "deactivate" the vm right now and perform DOM removal
            // later.
            child.$destroy(false, defer);
          },

          /**
           * Remove current destroyed child and manually do
           * the cleanup after removal.
           *
           * @param {Function} cb
           */

          remove: function (child, cb) {
            var keepAlive = this.keepAlive;
            if (child) {
              // we may have a component switch when a previous
              // component is still being transitioned out.
              // we want to trigger only one lastest insertion cb
              // when the existing transition finishes. (#1119)
              this.pendingRemovals++;
              this.pendingRemovalCb = cb;
              var self = this;
              child.$remove(function () {
                self.pendingRemovals--;
                if (!keepAlive) child._cleanup();
                if (!self.pendingRemovals && self.pendingRemovalCb) {
                  self.pendingRemovalCb();
                  self.pendingRemovalCb = null;
                }
              });
            } else if (cb) {
              cb();
            }
          },

          /**
           * Actually swap the components, depending on the
           * transition mode. Defaults to simultaneous.
           *
           * @param {Vue} target
           * @param {Function} [cb]
           */

          transition: function (target, cb) {
            var self = this;
            var current = this.childVM;
            // for devtool inspection
            if (true) {
              if (current) current._inactive = true;
              target._inactive = false;
            }
            this.childVM = target;
            switch (self.params.transitionMode) {
              case "in-out":
                target.$before(self.anchor, function () {
                  self.remove(current, cb);
                });
                break;
              case "out-in":
                self.remove(current, function () {
                  target.$before(self.anchor, cb);
                });
                break;
              default:
                self.remove(current);
                target.$before(self.anchor, cb);
            }
          },

          /**
           * Unbind.
           */

          unbind: function () {
            this.invalidatePending();
            // Do not defer cleanup when unbinding
            this.unbuild();
            // destroy all keep-alive cached instances
            if (this.cache) {
              for (var key in this.cache) {
                this.cache[key].$destroy();
              }
              this.cache = null;
            }
          },
        };

        /***/
      },
      /* 39 */
      /***/ function (module, exports, __webpack_require__) {
        // NOTE: the prop internal directive is compiled and linked
        // during _initScope(), before the created hook is called.
        // The purpose is to make the initial prop values available
        // inside `created` hooks and `data` functions.

        var _ = __webpack_require__(1);
        var Watcher = __webpack_require__(40);
        var bindingModes = __webpack_require__(5)._propBindingModes;

        module.exports = {
          bind: function () {
            var child = this.vm;
            var parent = child._context;
            // passed in from compiler directly
            var prop = this.descriptor.prop;
            var childKey = prop.path;
            var parentKey = prop.parentPath;
            var twoWay = prop.mode === bindingModes.TWO_WAY;

            var parentWatcher = (this.parentWatcher = new Watcher(
              parent,
              parentKey,
              function (val) {
                if (_.assertProp(prop, val)) {
                  child[childKey] = val;
                }
              },
              {
                twoWay: twoWay,
                filters: prop.filters,
                // important: props need to be observed on the
                // v-for scope if present
                scope: this._scope,
              }
            ));

            // set the child initial value.
            _.initProp(child, prop, parentWatcher.value);

            // setup two-way binding
            if (twoWay) {
              // important: defer the child watcher creation until
              // the created hook (after data observation)
              var self = this;
              child.$once("hook:created", function () {
                self.childWatcher = new Watcher(child, childKey, function (
                  val
                ) {
                  parentWatcher.set(val);
                });
              });
            }
          },

          unbind: function () {
            this.parentWatcher.teardown();
            if (this.childWatcher) {
              this.childWatcher.teardown();
            }
          },
        };

        /***/
      },
      /* 40 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var config = __webpack_require__(5);
        var Dep = __webpack_require__(41);
        var expParser = __webpack_require__(42);
        var batcher = __webpack_require__(44);
        var uid = 0;

        /**
         * A watcher parses an expression, collects dependencies,
         * and fires callback when the expression value changes.
         * This is used for both the $watch() api and directives.
         *
         * @param {Vue} vm
         * @param {String} expression
         * @param {Function} cb
         * @param {Object} options
         *                 - {Array} filters
         *                 - {Boolean} twoWay
         *                 - {Boolean} deep
         *                 - {Boolean} user
         *                 - {Boolean} sync
         *                 - {Boolean} lazy
         *                 - {Function} [preProcess]
         *                 - {Function} [postProcess]
         * @constructor
         */

        function Watcher(vm, expOrFn, cb, options) {
          // mix in options
          if (options) {
            _.extend(this, options);
          }
          var isFn = typeof expOrFn === "function";
          this.vm = vm;
          vm._watchers.push(this);
          this.expression = isFn ? expOrFn.toString() : expOrFn;
          this.cb = cb;
          this.id = ++uid; // uid for batching
          this.active = true;
          this.dirty = this.lazy; // for lazy watchers
          this.deps = Object.create(null);
          this.newDeps = null;
          this.prevError = null; // for async error stacks
          // parse expression for getter/setter
          if (isFn) {
            this.getter = expOrFn;
            this.setter = undefined;
          } else {
            var res = expParser.parse(expOrFn, this.twoWay);
            this.getter = res.get;
            this.setter = res.set;
          }
          this.value = this.lazy ? undefined : this.get();
          // state for avoiding false triggers for deep and Array
          // watchers during vm._digest()
          this.queued = this.shallow = false;
        }

        /**
         * Add a dependency to this directive.
         *
         * @param {Dep} dep
         */

        Watcher.prototype.addDep = function (dep) {
          var id = dep.id;
          if (!this.newDeps[id]) {
            this.newDeps[id] = dep;
            if (!this.deps[id]) {
              this.deps[id] = dep;
              dep.addSub(this);
            }
          }
        };

        /**
         * Evaluate the getter, and re-collect dependencies.
         */

        Watcher.prototype.get = function () {
          this.beforeGet();
          var scope = this.scope || this.vm;
          var value;
          try {
            value = this.getter.call(scope, scope);
          } catch (e) {
            if ("development" !== "production" && config.warnExpressionErrors) {
              _.warn(
                'Error when evaluating expression "' +
                  this.expression +
                  '". ' +
                  (config.debug
                    ? ""
                    : "Turn on debug mode to see stack trace."),
                e
              );
            }
          }
          // "touch" every property so they are all tracked as
          // dependencies for deep watching
          if (this.deep) {
            traverse(value);
          }
          if (this.preProcess) {
            value = this.preProcess(value);
          }
          if (this.filters) {
            value = scope._applyFilters(value, null, this.filters, false);
          }
          if (this.postProcess) {
            value = this.postProcess(value);
          }
          this.afterGet();
          return value;
        };

        /**
         * Set the corresponding value with the setter.
         *
         * @param {*} value
         */

        Watcher.prototype.set = function (value) {
          var scope = this.scope || this.vm;
          if (this.filters) {
            value = scope._applyFilters(value, this.value, this.filters, true);
          }
          try {
            this.setter.call(scope, scope, value);
          } catch (e) {
            if ("development" !== "production" && config.warnExpressionErrors) {
              _.warn(
                'Error when evaluating setter "' + this.expression + '"',
                e
              );
            }
          }
          // two-way sync for v-for alias
          var forContext = scope.$forContext;
          if (true) {
            if (
              forContext &&
              forContext.filters &&
              new RegExp(forContext.alias + "\\b").test(this.expression)
            ) {
              _.warn(
                "It seems you are using two-way binding on " +
                  "a v-for alias (" +
                  this.expression +
                  "), and the " +
                  "v-for has filters. This will not work properly. " +
                  "Either remove the filters or use an array of " +
                  "objects and bind to object properties instead."
              );
            }
          }
          if (
            forContext &&
            forContext.alias === this.expression &&
            !forContext.filters
          ) {
            if (scope.$key) {
              // original is an object
              forContext.rawValue[scope.$key] = value;
            } else {
              forContext.rawValue.$set(scope.$index, value);
            }
          }
        };

        /**
         * Prepare for dependency collection.
         */

        Watcher.prototype.beforeGet = function () {
          Dep.target = this;
          this.newDeps = Object.create(null);
        };

        /**
         * Clean up for dependency collection.
         */

        Watcher.prototype.afterGet = function () {
          Dep.target = null;
          var ids = Object.keys(this.deps);
          var i = ids.length;
          while (i--) {
            var id = ids[i];
            if (!this.newDeps[id]) {
              this.deps[id].removeSub(this);
            }
          }
          this.deps = this.newDeps;
        };

        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         *
         * @param {Boolean} shallow
         */

        Watcher.prototype.update = function (shallow) {
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync || !config.async) {
            this.run();
          } else {
            // if queued, only overwrite shallow with non-shallow,
            // but not the other way around.
            this.shallow = this.queued
              ? shallow
                ? this.shallow
                : false
              : !!shallow;
            this.queued = true;
            // record before-push error stack in debug mode
            /* istanbul ignore if */
            if ("development" !== "production" && config.debug) {
              this.prevError = new Error("[vue] async stack trace");
            }
            batcher.push(this);
          }
        };

        /**
         * Batcher job interface.
         * Will be called by the batcher.
         */

        Watcher.prototype.run = function () {
          if (this.active) {
            var value = this.get();
            if (
              value !== this.value ||
              // Deep watchers and Array watchers should fire even
              // when the value is the same, because the value may
              // have mutated; but only do so if this is a
              // non-shallow update (caused by a vm digest).
              ((_.isArray(value) || this.deep) && !this.shallow)
            ) {
              // set new value
              var oldValue = this.value;
              this.value = value;
              // in debug + async mode, when a watcher callbacks
              // throws, we also throw the saved before-push error
              // so the full cross-tick stack trace is available.
              var prevError = this.prevError;
              /* istanbul ignore if */
              if ("development" !== "production" && config.debug && prevError) {
                this.prevError = null;
                try {
                  this.cb.call(this.vm, value, oldValue);
                } catch (e) {
                  _.nextTick(function () {
                    throw prevError;
                  }, 0);
                  throw e;
                }
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
            this.queued = this.shallow = false;
          }
        };

        /**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */

        Watcher.prototype.evaluate = function () {
          // avoid overwriting another watcher that is being
          // collected.
          var current = Dep.target;
          this.value = this.get();
          this.dirty = false;
          Dep.target = current;
        };

        /**
         * Depend on all deps collected by this watcher.
         */

        Watcher.prototype.depend = function () {
          var depIds = Object.keys(this.deps);
          var i = depIds.length;
          while (i--) {
            this.deps[depIds[i]].depend();
          }
        };

        /**
         * Remove self from all dependencies' subcriber list.
         */

        Watcher.prototype.teardown = function () {
          if (this.active) {
            // remove self from vm's watcher list
            // we can skip this if the vm if being destroyed
            // which can improve teardown performance.
            if (!this.vm._isBeingDestroyed) {
              this.vm._watchers.$remove(this);
            }
            var depIds = Object.keys(this.deps);
            var i = depIds.length;
            while (i--) {
              this.deps[depIds[i]].removeSub(this);
            }
            this.active = false;
            this.vm = this.cb = this.value = null;
          }
        };

        /**
         * Recrusively traverse an object to evoke all converted
         * getters, so that every nested property inside the object
         * is collected as a "deep" dependency.
         *
         * @param {Object} obj
         */

        function traverse(obj) {
          var key, val, i;
          for (key in obj) {
            val = obj[key];
            if (_.isArray(val)) {
              i = val.length;
              while (i--) traverse(val[i]);
            } else if (_.isObject(val)) {
              traverse(val);
            }
          }
        }

        module.exports = Watcher;

        /***/
      },
      /* 41 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var uid = 0;

        /**
         * A dep is an observable that can have multiple
         * directives subscribing to it.
         *
         * @constructor
         */

        function Dep() {
          this.id = uid++;
          this.subs = [];
        }

        // the current target watcher being evaluated.
        // this is globally unique because there could be only one
        // watcher being evaluated at any time.
        Dep.target = null;

        /**
         * Add a directive subscriber.
         *
         * @param {Directive} sub
         */

        Dep.prototype.addSub = function (sub) {
          this.subs.push(sub);
        };

        /**
         * Remove a directive subscriber.
         *
         * @param {Directive} sub
         */

        Dep.prototype.removeSub = function (sub) {
          this.subs.$remove(sub);
        };

        /**
         * Add self as a dependency to the target watcher.
         */

        Dep.prototype.depend = function () {
          Dep.target.addDep(this);
        };

        /**
         * Notify all subscribers of a new value.
         */

        Dep.prototype.notify = function () {
          // stablize the subscriber list first
          var subs = _.toArray(this.subs);
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };

        module.exports = Dep;

        /***/
      },
      /* 42 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Path = __webpack_require__(43);
        var Cache = __webpack_require__(7);
        var expressionCache = new Cache(1000);

        var allowedKeywords =
          "Math,Date,this,true,false,null,undefined,Infinity,NaN," +
          "isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI," +
          "encodeURIComponent,parseInt,parseFloat";
        var allowedKeywordsRE = new RegExp(
          "^(" + allowedKeywords.replace(/,/g, "\\b|") + "\\b)"
        );

        // keywords that don't make sense inside expressions
        var improperKeywords =
          "break,case,class,catch,const,continue,debugger,default," +
          "delete,do,else,export,extends,finally,for,function,if," +
          "import,in,instanceof,let,return,super,switch,throw,try," +
          "var,while,with,yield,enum,await,implements,package," +
          "proctected,static,interface,private,public";
        var improperKeywordsRE = new RegExp(
          "^(" + improperKeywords.replace(/,/g, "\\b|") + "\\b)"
        );

        var wsRE = /\s/g;
        var newlineRE = /\n/g;
        var saveRE =
          /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
        var restoreRE = /"(\d+)"/g;
        var pathTestRE =
          /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
        var pathReplaceRE =
          /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
        var booleanLiteralRE = /^(true|false)$/;

        /**
         * Save / Rewrite / Restore
         *
         * When rewriting paths found in an expression, it is
         * possible for the same letter sequences to be found in
         * strings and Object literal property keys. Therefore we
         * remove and store these parts in a temporary array, and
         * restore them after the path rewrite.
         */

        var saved = [];

        /**
         * Save replacer
         *
         * The save regex can match two possible cases:
         * 1. An opening object literal
         * 2. A string
         * If matched as a plain string, we need to escape its
         * newlines, since the string needs to be preserved when
         * generating the function body.
         *
         * @param {String} str
         * @param {String} isString - str if matched as a string
         * @return {String} - placeholder with index
         */

        function save(str, isString) {
          var i = saved.length;
          saved[i] = isString ? str.replace(newlineRE, "\\n") : str;
          return '"' + i + '"';
        }

        /**
         * Path rewrite replacer
         *
         * @param {String} raw
         * @return {String}
         */

        function rewrite(raw) {
          var c = raw.charAt(0);
          var path = raw.slice(1);
          if (allowedKeywordsRE.test(path)) {
            return raw;
          } else {
            path =
              path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
            return c + "scope." + path;
          }
        }

        /**
         * Restore replacer
         *
         * @param {String} str
         * @param {String} i - matched save index
         * @return {String}
         */

        function restore(str, i) {
          return saved[i];
        }

        /**
         * Rewrite an expression, prefixing all path accessors with
         * `scope.` and generate getter/setter functions.
         *
         * @param {String} exp
         * @param {Boolean} needSet
         * @return {Function}
         */

        function compileExpFns(exp, needSet) {
          if (improperKeywordsRE.test(exp)) {
            "development" !== "production" &&
              _.warn("Avoid using reserved keywords in expression: " + exp);
          }
          // reset state
          saved.length = 0;
          // save strings and object literal keys
          var body = exp.replace(saveRE, save).replace(wsRE, "");
          // rewrite all paths
          // pad 1 space here becaue the regex matches 1 extra char
          body = (" " + body)
            .replace(pathReplaceRE, rewrite)
            .replace(restoreRE, restore);
          var getter = makeGetter(body);
          if (getter) {
            return {
              get: getter,
              body: body,
              set: needSet ? makeSetter(body) : null,
            };
          }
        }

        /**
         * Compile getter setters for a simple path.
         *
         * @param {String} exp
         * @return {Function}
         */

        function compilePathFns(exp) {
          var getter, path;
          if (exp.indexOf("[") < 0) {
            // really simple path
            path = exp.split(".");
            path.raw = exp;
            getter = Path.compileGetter(path);
          } else {
            // do the real parsing
            path = Path.parse(exp);
            getter = path.get;
          }
          return {
            get: getter,
            // always generate setter for simple paths
            set: function (obj, val) {
              Path.set(obj, path, val);
            },
          };
        }

        /**
         * Build a getter function. Requires eval.
         *
         * We isolate the try/catch so it doesn't affect the
         * optimization of the parse function when it is not called.
         *
         * @param {String} body
         * @return {Function|undefined}
         */

        function makeGetter(body) {
          try {
            return new Function("scope", "return " + body + ";");
          } catch (e) {
            "development" !== "production" &&
              _.warn(
                "Invalid expression. " + "Generated function body: " + body
              );
          }
        }

        /**
         * Build a setter function.
         *
         * This is only needed in rare situations like "a[b]" where
         * a settable path requires dynamic evaluation.
         *
         * This setter function may throw error when called if the
         * expression body is not a valid left-hand expression in
         * assignment.
         *
         * @param {String} body
         * @return {Function|undefined}
         */

        function makeSetter(body) {
          try {
            return new Function("scope", "value", body + "=value;");
          } catch (e) {
            "development" !== "production" &&
              _.warn("Invalid setter function body: " + body);
          }
        }

        /**
         * Check for setter existence on a cache hit.
         *
         * @param {Function} hit
         */

        function checkSetter(hit) {
          if (!hit.set) {
            hit.set = makeSetter(hit.body);
          }
        }

        /**
         * Parse an expression into re-written getter/setters.
         *
         * @param {String} exp
         * @param {Boolean} needSet
         * @return {Function}
         */

        exports.parse = function (exp, needSet) {
          exp = exp.trim();
          // try cache
          var hit = expressionCache.get(exp);
          if (hit) {
            if (needSet) {
              checkSetter(hit);
            }
            return hit;
          }
          // we do a simple path check to optimize for them.
          // the check fails valid paths with unusal whitespaces,
          // but that's too rare and we don't care.
          // also skip boolean literals and paths that start with
          // global "Math"
          var res = exports.isSimplePath(exp)
            ? compilePathFns(exp)
            : compileExpFns(exp, needSet);
          expressionCache.put(exp, res);
          return res;
        };

        /**
         * Check if an expression is a simple path.
         *
         * @param {String} exp
         * @return {Boolean}
         */

        exports.isSimplePath = function (exp) {
          return (
            pathTestRE.test(exp) &&
            // don't treat true/false as paths
            !booleanLiteralRE.test(exp) &&
            // Math constants e.g. Math.PI, Math.E etc.
            exp.slice(0, 5) !== "Math."
          );
        };

        /***/
      },
      /* 43 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Cache = __webpack_require__(7);
        var pathCache = new Cache(1000);
        var identRE = (exports.identRE = /^[$_a-zA-Z]+[\w$]*$/);

        // actions
        var APPEND = 0;
        var PUSH = 1;

        // states
        var BEFORE_PATH = 0;
        var IN_PATH = 1;
        var BEFORE_IDENT = 2;
        var IN_IDENT = 3;
        var BEFORE_ELEMENT = 4;
        var AFTER_ZERO = 5;
        var IN_INDEX = 6;
        var IN_SINGLE_QUOTE = 7;
        var IN_DOUBLE_QUOTE = 8;
        var IN_SUB_PATH = 9;
        var AFTER_ELEMENT = 10;
        var AFTER_PATH = 11;
        var ERROR = 12;

        var pathStateMachine = [];

        pathStateMachine[BEFORE_PATH] = {
          ws: [BEFORE_PATH],
          ident: [IN_IDENT, APPEND],
          "[": [BEFORE_ELEMENT],
          eof: [AFTER_PATH],
        };

        pathStateMachine[IN_PATH] = {
          ws: [IN_PATH],
          ".": [BEFORE_IDENT],
          "[": [BEFORE_ELEMENT],
          eof: [AFTER_PATH],
        };

        pathStateMachine[BEFORE_IDENT] = {
          ws: [BEFORE_IDENT],
          ident: [IN_IDENT, APPEND],
        };

        pathStateMachine[IN_IDENT] = {
          ident: [IN_IDENT, APPEND],
          0: [IN_IDENT, APPEND],
          number: [IN_IDENT, APPEND],
          ws: [IN_PATH, PUSH],
          ".": [BEFORE_IDENT, PUSH],
          "[": [BEFORE_ELEMENT, PUSH],
          eof: [AFTER_PATH, PUSH],
        };

        pathStateMachine[BEFORE_ELEMENT] = {
          ws: [BEFORE_ELEMENT],
          0: [AFTER_ZERO, APPEND],
          number: [IN_INDEX, APPEND],
          "'": [IN_SINGLE_QUOTE, APPEND, ""],
          '"': [IN_DOUBLE_QUOTE, APPEND, ""],
          ident: [IN_SUB_PATH, APPEND, "*"],
        };

        pathStateMachine[AFTER_ZERO] = {
          ws: [AFTER_ELEMENT, PUSH],
          "]": [IN_PATH, PUSH],
        };

        pathStateMachine[IN_INDEX] = {
          0: [IN_INDEX, APPEND],
          number: [IN_INDEX, APPEND],
          ws: [AFTER_ELEMENT],
          "]": [IN_PATH, PUSH],
        };

        pathStateMachine[IN_SINGLE_QUOTE] = {
          "'": [AFTER_ELEMENT],
          eof: ERROR,
          else: [IN_SINGLE_QUOTE, APPEND],
        };

        pathStateMachine[IN_DOUBLE_QUOTE] = {
          '"': [AFTER_ELEMENT],
          eof: ERROR,
          else: [IN_DOUBLE_QUOTE, APPEND],
        };

        pathStateMachine[IN_SUB_PATH] = {
          ident: [IN_SUB_PATH, APPEND],
          0: [IN_SUB_PATH, APPEND],
          number: [IN_SUB_PATH, APPEND],
          ws: [AFTER_ELEMENT],
          "]": [IN_PATH, PUSH],
        };

        pathStateMachine[AFTER_ELEMENT] = {
          ws: [AFTER_ELEMENT],
          "]": [IN_PATH, PUSH],
        };

        /**
         * Determine the type of a character in a keypath.
         *
         * @param {Char} ch
         * @return {String} type
         */

        function getPathCharType(ch) {
          if (ch === undefined) {
            return "eof";
          }

          var code = ch.charCodeAt(0);

          switch (code) {
            case 0x5b: // [
            case 0x5d: // ]
            case 0x2e: // .
            case 0x22: // "
            case 0x27: // '
            case 0x30: // 0
              return ch;

            case 0x5f: // _
            case 0x24: // $
              return "ident";

            case 0x20: // Space
            case 0x09: // Tab
            case 0x0a: // Newline
            case 0x0d: // Return
            case 0xa0: // No-break space
            case 0xfeff: // Byte Order Mark
            case 0x2028: // Line Separator
            case 0x2029: // Paragraph Separator
              return "ws";
          }

          // a-z, A-Z
          if (
            (code >= 0x61 && code <= 0x7a) ||
            (code >= 0x41 && code <= 0x5a)
          ) {
            return "ident";
          }

          // 1-9
          if (code >= 0x31 && code <= 0x39) {
            return "number";
          }

          return "else";
        }

        /**
         * Parse a string path into an array of segments
         *
         * @param {String} path
         * @return {Array|undefined}
         */

        function parsePath(path) {
          var keys = [];
          var index = -1;
          var mode = BEFORE_PATH;
          var c, newChar, key, type, transition, action, typeMap;

          var actions = [];
          actions[PUSH] = function () {
            if (key === undefined) {
              return;
            }
            keys.push(key);
            key = undefined;
          };
          actions[APPEND] = function () {
            if (key === undefined) {
              key = newChar;
            } else {
              key += newChar;
            }
          };

          function maybeUnescapeQuote() {
            var nextChar = path[index + 1];
            if (
              (mode === IN_SINGLE_QUOTE && nextChar === "'") ||
              (mode === IN_DOUBLE_QUOTE && nextChar === '"')
            ) {
              index++;
              newChar = nextChar;
              actions[APPEND]();
              return true;
            }
          }

          while (mode != null) {
            index++;
            c = path[index];

            if (c === "\\" && maybeUnescapeQuote()) {
              continue;
            }

            type = getPathCharType(c);
            typeMap = pathStateMachine[mode];
            transition = typeMap[type] || typeMap["else"] || ERROR;

            if (transition === ERROR) {
              return; // parse error
            }

            mode = transition[0];
            action = actions[transition[1]];
            if (action) {
              newChar = transition[2];
              newChar =
                newChar === undefined
                  ? c
                  : newChar === "*"
                  ? newChar + c
                  : newChar;
              action();
            }

            if (mode === AFTER_PATH) {
              keys.raw = path;
              return keys;
            }
          }
        }

        /**
         * Format a accessor segment based on its type.
         *
         * @param {String} key
         * @return {Boolean}
         */

        function formatAccessor(key) {
          if (identRE.test(key)) {
            // identifier
            return "." + key;
          } else if (+key === key >>> 0) {
            // bracket index
            return "[" + key + "]";
          } else if (key.charAt(0) === "*") {
            return "[o" + formatAccessor(key.slice(1)) + "]";
          } else {
            // bracket string
            return '["' + key.replace(/"/g, '\\"') + '"]';
          }
        }

        /**
         * Compiles a getter function with a fixed path.
         * The fixed path getter supresses errors.
         *
         * @param {Array} path
         * @return {Function}
         */

        exports.compileGetter = function (path) {
          var body = "return o" + path.map(formatAccessor).join("");
          return new Function("o", body);
        };

        /**
         * External parse that check for a cache hit first
         *
         * @param {String} path
         * @return {Array|undefined}
         */

        exports.parse = function (path) {
          var hit = pathCache.get(path);
          if (!hit) {
            hit = parsePath(path);
            if (hit) {
              hit.get = exports.compileGetter(hit);
              pathCache.put(path, hit);
            }
          }
          return hit;
        };

        /**
         * Get from an object from a path string
         *
         * @param {Object} obj
         * @param {String} path
         */

        exports.get = function (obj, path) {
          path = exports.parse(path);
          if (path) {
            return path.get(obj);
          }
        };

        /**
         * Warn against setting non-existent root path on a vm.
         */

        var warnNonExistent;
        if (true) {
          warnNonExistent = function (path) {
            _.warn(
              'You are setting a non-existent path "' +
                path.raw +
                '" ' +
                "on a vm instance. Consider pre-initializing the property " +
                'with the "data" option for more reliable reactivity ' +
                "and better performance."
            );
          };
        }

        /**
         * Set on an object from a path
         *
         * @param {Object} obj
         * @param {String | Array} path
         * @param {*} val
         */

        exports.set = function (obj, path, val) {
          var original = obj;
          if (typeof path === "string") {
            path = exports.parse(path);
          }
          if (!path || !_.isObject(obj)) {
            return false;
          }
          var last, key;
          for (var i = 0, l = path.length; i < l; i++) {
            last = obj;
            key = path[i];
            if (key.charAt(0) === "*") {
              key = original[key.slice(1)];
            }
            if (i < l - 1) {
              obj = obj[key];
              if (!_.isObject(obj)) {
                obj = {};
                if ("development" !== "production" && last._isVue) {
                  warnNonExistent(path);
                }
                _.set(last, key, obj);
              }
            } else {
              if (_.isArray(obj)) {
                obj.$set(key, val);
              } else if (key in obj) {
                obj[key] = val;
              } else {
                if ("development" !== "production" && obj._isVue) {
                  warnNonExistent(path);
                }
                _.set(obj, key, val);
              }
            }
          }
          return true;
        };

        /***/
      },
      /* 44 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var config = __webpack_require__(5);

        // we have two separate queues: one for directive updates
        // and one for user watcher registered via $watch().
        // we want to guarantee directive updates to be called
        // before user watchers so that when user watchers are
        // triggered, the DOM would have already been in updated
        // state.
        var queue = [];
        var userQueue = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var internalQueueDepleted = false;

        /**
         * Reset the batcher's state.
         */

        function resetBatcherState() {
          queue = [];
          userQueue = [];
          has = {};
          circular = {};
          waiting = internalQueueDepleted = false;
        }

        /**
         * Flush both queues and run the watchers.
         */

        function flushBatcherQueue() {
          runBatcherQueue(queue);
          internalQueueDepleted = true;
          runBatcherQueue(userQueue);
          // dev tool hook
          /* istanbul ignore if */
          if (true) {
            if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
              window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("flush");
            }
          }
          resetBatcherState();
        }

        /**
         * Run the watchers in a single queue.
         *
         * @param {Array} queue
         */

        function runBatcherQueue(queue) {
          // do not cache length because more watchers might be pushed
          // as we run existing watchers
          for (var i = 0; i < queue.length; i++) {
            var watcher = queue[i];
            var id = watcher.id;
            has[id] = null;
            watcher.run();
            // in dev build, check and stop circular updates.
            if ("development" !== "production" && has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > config._maxUpdateCount) {
                queue.splice(has[id], 1);
                _.warn(
                  "You may have an infinite update loop for watcher " +
                    "with expression: " +
                    watcher.expression
                );
              }
            }
          }
        }

        /**
         * Push a watcher into the watcher queue.
         * Jobs with duplicate IDs will be skipped unless it's
         * pushed when the queue is being flushed.
         *
         * @param {Watcher} watcher
         *   properties:
         *   - {Number} id
         *   - {Function} run
         */

        exports.push = function (watcher) {
          var id = watcher.id;
          if (has[id] == null) {
            // if an internal watcher is pushed, but the internal
            // queue is already depleted, we run it immediately.
            if (internalQueueDepleted && !watcher.user) {
              watcher.run();
              return;
            }
            // push watcher into appropriate queue
            var q = watcher.user ? userQueue : queue;
            has[id] = q.length;
            q.push(watcher);
            // queue the flush
            if (!waiting) {
              waiting = true;
              _.nextTick(flushBatcherQueue);
            }
          }
        };

        /***/
      },
      /* 45 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Transition = __webpack_require__(46);

        module.exports = {
          priority: 1000,

          update: function (id, oldId) {
            var el = this.el;
            // resolve on owner vm
            var hooks = _.resolveAsset(this.vm.$options, "transitions", id);
            id = id || "v";
            // apply on closest vm
            el.__v_trans = new Transition(
              el,
              id,
              hooks,
              this.el.__vue__ || this.vm
            );
            if (oldId) {
              _.removeClass(el, oldId + "-transition");
            }
            _.addClass(el, id + "-transition");
          },
        };

        /***/
      },
      /* 46 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var queue = __webpack_require__(47);
        var addClass = _.addClass;
        var removeClass = _.removeClass;
        var transitionEndEvent = _.transitionEndEvent;
        var animationEndEvent = _.animationEndEvent;
        var transDurationProp = _.transitionProp + "Duration";
        var animDurationProp = _.animationProp + "Duration";

        var TYPE_TRANSITION = 1;
        var TYPE_ANIMATION = 2;

        /**
         * A Transition object that encapsulates the state and logic
         * of the transition.
         *
         * @param {Element} el
         * @param {String} id
         * @param {Object} hooks
         * @param {Vue} vm
         */

        function Transition(el, id, hooks, vm) {
          this.id = id;
          this.el = el;
          this.enterClass = id + "-enter";
          this.leaveClass = id + "-leave";
          this.hooks = hooks;
          this.vm = vm;
          // async state
          this.pendingCssEvent =
            this.pendingCssCb =
            this.cancel =
            this.pendingJsCb =
            this.op =
            this.cb =
              null;
          this.justEntered = false;
          this.entered = this.left = false;
          this.typeCache = {};
          // bind
          var self = this;
          ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(
            function (m) {
              self[m] = _.bind(self[m], self);
            }
          );
        }

        var p = Transition.prototype;

        /**
         * Start an entering transition.
         *
         * 1. enter transition triggered
         * 2. call beforeEnter hook
         * 3. add enter class
         * 4. insert/show element
         * 5. call enter hook (with possible explicit js callback)
         * 6. reflow
         * 7. based on transition type:
         *    - transition:
         *        remove class now, wait for transitionend,
         *        then done if there's no explicit js callback.
         *    - animation:
         *        wait for animationend, remove class,
         *        then done if there's no explicit js callback.
         *    - no css transition:
         *        done now if there's no explicit js callback.
         * 8. wait for either done or js callback, then call
         *    afterEnter hook.
         *
         * @param {Function} op - insert/show the element
         * @param {Function} [cb]
         */

        p.enter = function (op, cb) {
          this.cancelPending();
          this.callHook("beforeEnter");
          this.cb = cb;
          addClass(this.el, this.enterClass);
          op();
          this.entered = false;
          this.callHookWithCb("enter");
          if (this.entered) {
            return; // user called done synchronously.
          }
          this.cancel = this.hooks && this.hooks.enterCancelled;
          queue.push(this.enterNextTick);
        };

        /**
         * The "nextTick" phase of an entering transition, which is
         * to be pushed into a queue and executed after a reflow so
         * that removing the class can trigger a CSS transition.
         */

        p.enterNextTick = function () {
          // Importnatn hack:
          // in Chrome, if a just-entered element is applied the
          // leave class while its interpolated property still has
          // a very small value (within one frame), Chrome will
          // skip the leave transition entirely and not firing the
          // transtionend event. Therefore we need to protected
          // against such cases using a one-frame timeout.
          this.justEntered = true;
          var self = this;
          setTimeout(function () {
            self.justEntered = false;
          }, 17);

          var enterDone = this.enterDone;
          var type = this.getCssTransitionType(this.enterClass);
          if (!this.pendingJsCb) {
            if (type === TYPE_TRANSITION) {
              // trigger transition by removing enter class now
              removeClass(this.el, this.enterClass);
              this.setupCssCb(transitionEndEvent, enterDone);
            } else if (type === TYPE_ANIMATION) {
              this.setupCssCb(animationEndEvent, enterDone);
            } else {
              enterDone();
            }
          } else if (type === TYPE_TRANSITION) {
            removeClass(this.el, this.enterClass);
          }
        };

        /**
         * The "cleanup" phase of an entering transition.
         */

        p.enterDone = function () {
          this.entered = true;
          this.cancel = this.pendingJsCb = null;
          removeClass(this.el, this.enterClass);
          this.callHook("afterEnter");
          if (this.cb) this.cb();
        };

        /**
         * Start a leaving transition.
         *
         * 1. leave transition triggered.
         * 2. call beforeLeave hook
         * 3. add leave class (trigger css transition)
         * 4. call leave hook (with possible explicit js callback)
         * 5. reflow if no explicit js callback is provided
         * 6. based on transition type:
         *    - transition or animation:
         *        wait for end event, remove class, then done if
         *        there's no explicit js callback.
         *    - no css transition:
         *        done if there's no explicit js callback.
         * 7. wait for either done or js callback, then call
         *    afterLeave hook.
         *
         * @param {Function} op - remove/hide the element
         * @param {Function} [cb]
         */

        p.leave = function (op, cb) {
          this.cancelPending();
          this.callHook("beforeLeave");
          this.op = op;
          this.cb = cb;
          addClass(this.el, this.leaveClass);
          this.left = false;
          this.callHookWithCb("leave");
          if (this.left) {
            return; // user called done synchronously.
          }
          this.cancel = this.hooks && this.hooks.leaveCancelled;
          // only need to handle leaveDone if
          // 1. the transition is already done (synchronously called
          //    by the user, which causes this.op set to null)
          // 2. there's no explicit js callback
          if (this.op && !this.pendingJsCb) {
            // if a CSS transition leaves immediately after enter,
            // the transitionend event never fires. therefore we
            // detect such cases and end the leave immediately.
            if (this.justEntered) {
              this.leaveDone();
            } else {
              queue.push(this.leaveNextTick);
            }
          }
        };

        /**
         * The "nextTick" phase of a leaving transition.
         */

        p.leaveNextTick = function () {
          var type = this.getCssTransitionType(this.leaveClass);
          if (type) {
            var event =
              type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
            this.setupCssCb(event, this.leaveDone);
          } else {
            this.leaveDone();
          }
        };

        /**
         * The "cleanup" phase of a leaving transition.
         */

        p.leaveDone = function () {
          this.left = true;
          this.cancel = this.pendingJsCb = null;
          this.op();
          removeClass(this.el, this.leaveClass);
          this.callHook("afterLeave");
          if (this.cb) this.cb();
          this.op = null;
        };

        /**
         * Cancel any pending callbacks from a previously running
         * but not finished transition.
         */

        p.cancelPending = function () {
          this.op = this.cb = null;
          var hasPending = false;
          if (this.pendingCssCb) {
            hasPending = true;
            _.off(this.el, this.pendingCssEvent, this.pendingCssCb);
            this.pendingCssEvent = this.pendingCssCb = null;
          }
          if (this.pendingJsCb) {
            hasPending = true;
            this.pendingJsCb.cancel();
            this.pendingJsCb = null;
          }
          if (hasPending) {
            removeClass(this.el, this.enterClass);
            removeClass(this.el, this.leaveClass);
          }
          if (this.cancel) {
            this.cancel.call(this.vm, this.el);
            this.cancel = null;
          }
        };

        /**
         * Call a user-provided synchronous hook function.
         *
         * @param {String} type
         */

        p.callHook = function (type) {
          if (this.hooks && this.hooks[type]) {
            this.hooks[type].call(this.vm, this.el);
          }
        };

        /**
         * Call a user-provided, potentially-async hook function.
         * We check for the length of arguments to see if the hook
         * expects a `done` callback. If true, the transition's end
         * will be determined by when the user calls that callback;
         * otherwise, the end is determined by the CSS transition or
         * animation.
         *
         * @param {String} type
         */

        p.callHookWithCb = function (type) {
          var hook = this.hooks && this.hooks[type];
          if (hook) {
            if (hook.length > 1) {
              this.pendingJsCb = _.cancellable(this[type + "Done"]);
            }
            hook.call(this.vm, this.el, this.pendingJsCb);
          }
        };

        /**
         * Get an element's transition type based on the
         * calculated styles.
         *
         * @param {String} className
         * @return {Number}
         */

        p.getCssTransitionType = function (className) {
          /* istanbul ignore if */
          if (
            !transitionEndEvent ||
            // skip CSS transitions if page is not visible -
            // this solves the issue of transitionend events not
            // firing until the page is visible again.
            // pageVisibility API is supported in IE10+, same as
            // CSS transitions.
            document.hidden ||
            // explicit js-only transition
            (this.hooks && this.hooks.css === false) ||
            // element is hidden
            isHidden(this.el)
          ) {
            return;
          }
          var type = this.typeCache[className];
          if (type) return type;
          var inlineStyles = this.el.style;
          var computedStyles = window.getComputedStyle(this.el);
          var transDuration =
            inlineStyles[transDurationProp] ||
            computedStyles[transDurationProp];
          if (transDuration && transDuration !== "0s") {
            type = TYPE_TRANSITION;
          } else {
            var animDuration =
              inlineStyles[animDurationProp] ||
              computedStyles[animDurationProp];
            if (animDuration && animDuration !== "0s") {
              type = TYPE_ANIMATION;
            }
          }
          if (type) {
            this.typeCache[className] = type;
          }
          return type;
        };

        /**
         * Setup a CSS transitionend/animationend callback.
         *
         * @param {String} event
         * @param {Function} cb
         */

        p.setupCssCb = function (event, cb) {
          this.pendingCssEvent = event;
          var self = this;
          var el = this.el;
          var onEnd = (this.pendingCssCb = function (e) {
            if (e.target === el) {
              _.off(el, event, onEnd);
              self.pendingCssEvent = self.pendingCssCb = null;
              if (!self.pendingJsCb && cb) {
                cb();
              }
            }
          });
          _.on(el, event, onEnd);
        };

        /**
         * Check if an element is hidden - in that case we can just
         * skip the transition alltogether.
         *
         * @param {Element} el
         * @return {Boolean}
         */

        function isHidden(el) {
          return !(
            el.offsetWidth &&
            el.offsetHeight &&
            el.getClientRects().length
          );
        }

        module.exports = Transition;

        /***/
      },
      /* 47 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var queue = [];
        var queued = false;

        /**
         * Push a job into the queue.
         *
         * @param {Function} job
         */

        exports.push = function (job) {
          queue.push(job);
          if (!queued) {
            queued = true;
            _.nextTick(flush);
          }
        };

        /**
         * Flush the queue, and do one forced reflow before
         * triggering transitions.
         */

        function flush() {
          // Force layout
          var f = document.documentElement.offsetHeight;
          for (var i = 0; i < queue.length; i++) {
            queue[i]();
          }
          queue = [];
          queued = false;
          // dummy return, so js linters don't complain about
          // unused variable f
          return f;
        }

        /***/
      },
      /* 48 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var dirParser = __webpack_require__(8);
        var propDef = __webpack_require__(39);
        var propBindingModes = __webpack_require__(5)._propBindingModes;
        var empty = {};

        // regexes
        var identRE = __webpack_require__(43).identRE;
        var settablePathRE =
          /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

        /**
         * Compile props on a root element and return
         * a props link function.
         *
         * @param {Element|DocumentFragment} el
         * @param {Array} propOptions
         * @return {Function} propsLinkFn
         */

        module.exports = function compileProps(el, propOptions) {
          var props = [];
          var names = Object.keys(propOptions);
          var i = names.length;
          var options, name, attr, value, path, parsed, prop;
          while (i--) {
            name = names[i];
            options = propOptions[name] || empty;

            if ("development" !== "production" && name === "$data") {
              _.warn("Do not use $data as prop.");
              continue;
            }

            // props could contain dashes, which will be
            // interpreted as minus calculations by the parser
            // so we need to camelize the path here
            path = _.camelize(name);
            if (!identRE.test(path)) {
              "development" !== "production" &&
                _.warn(
                  'Invalid prop key: "' +
                    name +
                    '". Prop keys ' +
                    "must be valid identifiers."
                );
              continue;
            }

            prop = {
              name: name,
              path: path,
              options: options,
              mode: propBindingModes.ONE_WAY,
            };

            // first check literal version
            attr = _.hyphenate(name);
            value = prop.raw = _.attr(el, attr);
            if (value === null) {
              // then check dynamic version
              if ((value = _.getBindAttr(el, attr)) === null) {
                if ((value = _.getBindAttr(el, attr + ".sync")) !== null) {
                  prop.mode = propBindingModes.TWO_WAY;
                } else if (
                  (value = _.getBindAttr(el, attr + ".once")) !== null
                ) {
                  prop.mode = propBindingModes.ONE_TIME;
                }
              }
              prop.raw = value;
              if (value !== null) {
                parsed = dirParser.parse(value);
                value = parsed.expression;
                prop.filters = parsed.filters;
                // check binding type
                if (_.isLiteral(value)) {
                  // for expressions containing literal numbers and
                  // booleans, there's no need to setup a prop binding,
                  // so we can optimize them as a one-time set.
                  prop.optimizedLiteral = true;
                } else {
                  prop.dynamic = true;
                  // check non-settable path for two-way bindings
                  if (
                    "development" !== "production" &&
                    prop.mode === propBindingModes.TWO_WAY &&
                    !settablePathRE.test(value)
                  ) {
                    prop.mode = propBindingModes.ONE_WAY;
                    _.warn(
                      "Cannot bind two-way prop with non-settable " +
                        "parent path: " +
                        value
                    );
                  }
                }
                prop.parentPath = value;

                // warn required two-way
                if (
                  "development" !== "production" &&
                  options.twoWay &&
                  prop.mode !== propBindingModes.TWO_WAY
                ) {
                  _.warn('Prop "' + name + '" expects a two-way binding type.');
                }
              } else if (options.required) {
                // warn missing required
                "development" !== "production" &&
                  _.warn("Missing required prop: " + name);
              }
            }

            // push prop
            props.push(prop);
          }
          return makePropsLinkFn(props);
        };

        /**
         * Build a function that applies props to a vm.
         *
         * @param {Array} props
         * @return {Function} propsLinkFn
         */

        function makePropsLinkFn(props) {
          return function propsLinkFn(vm, scope) {
            // store resolved props info
            vm._props = {};
            var i = props.length;
            var prop, path, options, value, raw;
            while (i--) {
              prop = props[i];
              raw = prop.raw;
              path = prop.path;
              options = prop.options;
              vm._props[path] = prop;
              if (raw === null) {
                // initialize absent prop
                _.initProp(vm, prop, getDefault(vm, options));
              } else if (prop.dynamic) {
                // dynamic prop
                if (vm._context) {
                  if (prop.mode === propBindingModes.ONE_TIME) {
                    // one time binding
                    value = (scope || vm._context).$get(prop.parentPath);
                    _.initProp(vm, prop, value);
                  } else {
                    // dynamic binding
                    vm._bindDir(
                      {
                        name: "prop",
                        def: propDef,
                        prop: prop,
                      },
                      null,
                      null,
                      scope
                    ); // el, host, scope
                  }
                } else {
                  "development" !== "production" &&
                    _.warn(
                      "Cannot bind dynamic prop on a root instance" +
                        " with no parent: " +
                        prop.name +
                        '="' +
                        raw +
                        '"'
                    );
                }
              } else if (prop.optimizedLiteral) {
                // optimized literal, cast it and just set once
                raw = _.stripQuotes(raw);
                value = _.toBoolean(_.toNumber(raw));
                _.initProp(vm, prop, value);
              } else {
                // string literal, but we need to cater for
                // Boolean props with no value
                value = options.type === Boolean && raw === "" ? true : raw;
                _.initProp(vm, prop, value);
              }
            }
          };
        }

        /**
         * Get the default value of a prop.
         *
         * @param {Vue} vm
         * @param {Object} options
         * @return {*}
         */

        function getDefault(vm, options) {
          // no default, return undefined
          if (!options.hasOwnProperty("default")) {
            // absent boolean value defaults to false
            return options.type === Boolean ? false : undefined;
          }
          var def = options.default;
          // warn against non-factory defaults for Object & Array
          if (_.isObject(def)) {
            "development" !== "production" &&
              _.warn(
                "Object/Array as default prop values will be shared " +
                  "across multiple instances. Use a factory function " +
                  "to return the default value instead."
              );
          }
          // call factory function for non-Function types
          return typeof def === "function" && options.type !== Function
            ? def.call(vm)
            : def;
        }

        /***/
      },
      /* 49 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var templateParser = __webpack_require__(19);
        var specialCharRE = /[^\w\-:\.]/;

        /**
         * Process an element or a DocumentFragment based on a
         * instance option object. This allows us to transclude
         * a template node/fragment before the instance is created,
         * so the processed fragment can then be cloned and reused
         * in v-for.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Element|DocumentFragment}
         */

        exports.transclude = function (el, options) {
          // extract container attributes to pass them down
          // to compiler, because they need to be compiled in
          // parent scope. we are mutating the options object here
          // assuming the same object will be used for compile
          // right after this.
          if (options) {
            options._containerAttrs = extractAttrs(el);
          }
          // for template tags, what we want is its content as
          // a documentFragment (for fragment instances)
          if (_.isTemplate(el)) {
            el = templateParser.parse(el);
          }
          if (options) {
            if (options._asComponent && !options.template) {
              options.template = "<slot></slot>";
            }
            if (options.template) {
              options._content = _.extractContent(el);
              el = transcludeTemplate(el, options);
            }
          }
          if (el instanceof DocumentFragment) {
            // anchors for fragment instance
            // passing in `persist: true` to avoid them being
            // discarded by IE during template cloning
            _.prepend(_.createAnchor("v-start", true), el);
            el.appendChild(_.createAnchor("v-end", true));
          }
          return el;
        };

        /**
         * Process the template option.
         * If the replace option is true this will swap the $el.
         *
         * @param {Element} el
         * @param {Object} options
         * @return {Element|DocumentFragment}
         */

        function transcludeTemplate(el, options) {
          var template = options.template;
          var frag = templateParser.parse(template, true);
          if (frag) {
            var replacer = frag.firstChild;
            var tag = replacer.tagName && replacer.tagName.toLowerCase();
            if (options.replace) {
              /* istanbul ignore if */
              if (el === document.body) {
                "development" !== "production" &&
                  _.warn(
                    "You are mounting an instance with a template to " +
                      "<body>. This will replace <body> entirely. You " +
                      "should probably use `replace: false` here."
                  );
              }
              // there are many cases where the instance must
              // become a fragment instance: basically anything that
              // can create more than 1 root nodes.
              if (
                // multi-children template
                frag.childNodes.length > 1 ||
                // non-element template
                replacer.nodeType !== 1 ||
                // single nested component
                tag === "component" ||
                _.resolveAsset(options, "components", tag) ||
                replacer.hasAttribute("is") ||
                replacer.hasAttribute(":is") ||
                replacer.hasAttribute("v-bind:is") ||
                // element directive
                _.resolveAsset(options, "elementDirectives", tag) ||
                // for block
                replacer.hasAttribute("v-for") ||
                // if block
                replacer.hasAttribute("v-if")
              ) {
                return frag;
              } else {
                options._replacerAttrs = extractAttrs(replacer);
                mergeAttrs(el, replacer);
                return replacer;
              }
            } else {
              el.appendChild(frag);
              return el;
            }
          } else {
            "development" !== "production" &&
              _.warn("Invalid template option: " + template);
          }
        }

        /**
         * Helper to extract a component container's attributes
         * into a plain object array.
         *
         * @param {Element} el
         * @return {Array}
         */

        function extractAttrs(el) {
          if (el.nodeType === 1 && el.hasAttributes()) {
            return _.toArray(el.attributes);
          }
        }

        /**
         * Merge the attributes of two elements, and make sure
         * the class names are merged properly.
         *
         * @param {Element} from
         * @param {Element} to
         */

        function mergeAttrs(from, to) {
          var attrs = from.attributes;
          var i = attrs.length;
          var name, value;
          while (i--) {
            name = attrs[i].name;
            value = attrs[i].value;
            if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
              to.setAttribute(name, value);
            } else if (name === "class") {
              value = to.getAttribute(name) + " " + value;
              to.setAttribute(name, value);
            }
          }
        }

        /***/
      },
      /* 50 */
      /***/ function (module, exports, __webpack_require__) {
        exports.slot = __webpack_require__(51);
        exports.partial = __webpack_require__(52);

        /***/
      },
      /* 51 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var templateParser = __webpack_require__(19);

        // This is the elementDirective that handles <content>
        // transclusions. It relies on the raw content of an
        // instance being stored as `$options._content` during
        // the transclude phase.

        module.exports = {
          priority: 1750,

          params: ["name"],

          bind: function () {
            var host = this.vm;
            var raw = host.$options._content;
            var content;
            if (!raw) {
              this.fallback();
              return;
            }
            var context = host._context;
            var slotName = this.params.name;
            if (!slotName) {
              // Default content
              var self = this;
              var compileDefaultContent = function () {
                self.compile(
                  extractFragment(raw.childNodes, raw, true),
                  context,
                  host
                );
              };
              if (!host._isCompiled) {
                // defer until the end of instance compilation,
                // because the default outlet must wait until all
                // other possible outlets with selectors have picked
                // out their contents.
                host.$once("hook:compiled", compileDefaultContent);
              } else {
                compileDefaultContent();
              }
            } else {
              var selector = '[slot="' + slotName + '"]';
              var nodes = raw.querySelectorAll(selector);
              if (nodes.length) {
                content = extractFragment(nodes, raw);
                if (content.hasChildNodes()) {
                  this.compile(content, context, host);
                } else {
                  this.fallback();
                }
              } else {
                this.fallback();
              }
            }
          },

          fallback: function () {
            this.compile(_.extractContent(this.el, true), this.vm);
          },

          compile: function (content, context, host) {
            if (content && context) {
              var scope = host ? host._scope : this._scope;
              this.unlink = context.$compile(content, host, scope, this._frag);
            }
            if (content) {
              _.replace(this.el, content);
            } else {
              _.remove(this.el);
            }
          },

          unbind: function () {
            if (this.unlink) {
              this.unlink();
            }
          },
        };

        /**
         * Extract qualified content nodes from a node list.
         *
         * @param {NodeList} nodes
         * @param {Element} parent
         * @param {Boolean} main
         * @return {DocumentFragment}
         */

        function extractFragment(nodes, parent, main) {
          var frag = document.createDocumentFragment();
          for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            // if this is the main outlet, we want to skip all
            // previously selected nodes;
            // otherwise, we want to mark the node as selected.
            // clone the node so the original raw content remains
            // intact. this ensures proper re-compilation in cases
            // where the outlet is inside a conditional block
            if (main && !node.__v_selected) {
              append(node);
            } else if (!main && node.parentNode === parent) {
              node.__v_selected = true;
              append(node);
            }
          }
          return frag;

          function append(node) {
            if (
              _.isTemplate(node) &&
              !node.hasAttribute("v-if") &&
              !node.hasAttribute("v-for")
            ) {
              node = templateParser.parse(node);
            }
            node = templateParser.clone(node);
            frag.appendChild(node);
          }
        }

        /***/
      },
      /* 52 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var vIf = __webpack_require__(23);
        var FragmentFactory = __webpack_require__(21);

        module.exports = {
          priority: 1750,

          params: ["name"],

          // watch changes to name for dynamic partials
          paramWatchers: {
            name: function (value) {
              vIf.remove.call(this);
              if (value) {
                this.insert(value);
              }
            },
          },

          bind: function () {
            this.anchor = _.createAnchor("v-partial");
            _.replace(this.el, this.anchor);
            this.insert(this.params.name);
          },

          insert: function (id) {
            var partial = _.resolveAsset(this.vm.$options, "partials", id);
            if (true) {
              _.assertAsset(partial, "partial", id);
            }
            if (partial) {
              this.factory = new FragmentFactory(this.vm, partial);
              vIf.insert.call(this);
            }
          },

          unbind: function () {
            if (this.frag) {
              this.frag.destroy();
            }
          },
        };

        /***/
      },
      /* 53 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        /**
         * Stringify value.
         *
         * @param {Number} indent
         */

        exports.json = {
          read: function (value, indent) {
            return typeof value === "string"
              ? value
              : JSON.stringify(value, null, Number(indent) || 2);
          },
          write: function (value) {
            try {
              return JSON.parse(value);
            } catch (e) {
              return value;
            }
          },
        };

        /**
         * 'abc' => 'Abc'
         */

        exports.capitalize = function (value) {
          if (!value && value !== 0) return "";
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        };

        /**
         * 'abc' => 'ABC'
         */

        exports.uppercase = function (value) {
          return value || value === 0 ? value.toString().toUpperCase() : "";
        };

        /**
         * 'AbC' => 'abc'
         */

        exports.lowercase = function (value) {
          return value || value === 0 ? value.toString().toLowerCase() : "";
        };

        /**
         * 12345 => $12,345.00
         *
         * @param {String} sign
         */

        var digitsRE = /(\d{3})(?=\d)/g;
        exports.currency = function (value, currency) {
          value = parseFloat(value);
          if (!isFinite(value) || (!value && value !== 0)) return "";
          currency = currency != null ? currency : "$";
          var stringified = Math.abs(value).toFixed(2);
          var _int = stringified.slice(0, -3);
          var i = _int.length % 3;
          var head =
            i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
          var _float = stringified.slice(-3);
          var sign = value < 0 ? "-" : "";
          return (
            currency +
            sign +
            head +
            _int.slice(i).replace(digitsRE, "$1,") +
            _float
          );
        };

        /**
         * 'item' => 'items'
         *
         * @params
         *  an array of strings corresponding to
         *  the single, double, triple ... forms of the word to
         *  be pluralized. When the number to be pluralized
         *  exceeds the length of the args, it will use the last
         *  entry in the array.
         *
         *  e.g. ['single', 'double', 'triple', 'multiple']
         */

        exports.pluralize = function (value) {
          var args = _.toArray(arguments, 1);
          return args.length > 1
            ? args[(value % 10) - 1] || args[args.length - 1]
            : args[0] + (value === 1 ? "" : "s");
        };

        /**
         * Debounce a handler function.
         *
         * @param {Function} handler
         * @param {Number} delay = 300
         * @return {Function}
         */

        exports.debounce = function (handler, delay) {
          if (!handler) return;
          if (!delay) {
            delay = 300;
          }
          return _.debounce(handler, delay);
        };

        /**
         * Install special array filters
         */

        _.extend(exports, __webpack_require__(54));

        /***/
      },
      /* 54 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Path = __webpack_require__(43);
        var toArray = __webpack_require__(20)._postProcess;

        /**
         * Filter filter for arrays
         *
         * @param {String} searchKey
         * @param {String} [delimiter]
         * @param {String} dataKey
         */

        exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
          arr = toArray(arr);
          if (search == null) {
            return arr;
          }
          if (typeof search === "function") {
            return arr.filter(search);
          }
          // cast to lowercase string
          search = ("" + search).toLowerCase();
          // allow optional `in` delimiter
          // because why not
          var n = delimiter === "in" ? 3 : 2;
          // extract and flatten keys
          var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
            return prev.concat(cur);
          }, []);
          var res = [];
          var item, key, val, j;
          for (var i = 0, l = arr.length; i < l; i++) {
            item = arr[i];
            val = (item && item.$value) || item;
            j = keys.length;
            if (j) {
              while (j--) {
                key = keys[j];
                if (
                  (key === "$key" && contains(item.$key, search)) ||
                  contains(Path.get(val, key), search)
                ) {
                  res.push(item);
                }
              }
            } else {
              if (contains(item, search)) {
                res.push(item);
              }
            }
          }
          return res;
        };

        /**
         * Filter filter for arrays
         *
         * @param {String} sortKey
         * @param {String} reverse
         */

        exports.orderBy = function (arr, sortKey, reverse) {
          arr = toArray(arr);
          if (!sortKey) {
            return arr;
          }
          var order = reverse && reverse < 0 ? -1 : 1;
          // sort on a copy to avoid mutating original array
          return arr.slice().sort(function (a, b) {
            if (sortKey !== "$key") {
              if (_.isObject(a) && "$value" in a) a = a.$value;
              if (_.isObject(b) && "$value" in b) b = b.$value;
            }
            a = _.isObject(a) ? Path.get(a, sortKey) : a;
            b = _.isObject(b) ? Path.get(b, sortKey) : b;
            return a === b ? 0 : a > b ? order : -order;
          });
        };

        /**
         * String contain helper
         *
         * @param {*} val
         * @param {String} search
         */

        function contains(val, search) {
          var i;
          if (_.isPlainObject(val)) {
            var keys = Object.keys(val);
            i = keys.length;
            while (i--) {
              if (contains(val[keys[i]], search)) {
                return true;
              }
            }
          } else if (_.isArray(val)) {
            i = val.length;
            while (i--) {
              if (contains(val[i], search)) {
                return true;
              }
            }
          } else if (val != null) {
            return val.toString().toLowerCase().indexOf(search) > -1;
          }
        }

        /***/
      },
      /* 55 */
      /***/ function (module, exports, __webpack_require__) {
        var mergeOptions = __webpack_require__(1).mergeOptions;
        var uid = 0;

        /**
         * The main init sequence. This is called for every
         * instance, including ones that are created from extended
         * constructors.
         *
         * @param {Object} options - this options object should be
         *                           the result of merging class
         *                           options and the options passed
         *                           in to the constructor.
         */

        exports._init = function (options) {
          options = options || {};

          this.$el = null;
          this.$parent = options.parent;
          this.$root = this.$parent ? this.$parent.$root : this;
          this.$children = [];
          this.$refs = {}; // child vm references
          this.$els = {}; // element references
          this._watchers = []; // all watchers as an array
          this._directives = []; // all directives

          // a uid
          this._uid = uid++;

          // a flag to avoid this being observed
          this._isVue = true;

          // events bookkeeping
          this._events = {}; // registered callbacks
          this._eventsCount = {}; // for $broadcast optimization
          this._shouldPropagate = false; // for event propagation

          // fragment instance properties
          this._isFragment = false;
          this._fragment = // @type {DocumentFragment}
            this._fragmentStart = // @type {Text|Comment}
            this._fragmentEnd =
              null; // @type {Text|Comment}

          // lifecycle state
          this._isCompiled =
            this._isDestroyed =
            this._isReady =
            this._isAttached =
            this._isBeingDestroyed =
              false;
          this._unlinkFn = null;

          // context:
          // if this is a transcluded component, context
          // will be the common parent vm of this instance
          // and its host.
          this._context = options._context || this.$parent;

          // scope:
          // if this is inside an inline v-for, the scope
          // will be the intermediate scope created for this
          // repeat fragment. this is used for linking props
          // and container directives.
          this._scope = options._scope;

          // fragment:
          // if this instance is compiled inside a Fragment, it
          // needs to reigster itself as a child of that fragment
          // for attach/detach to work properly.
          this._frag = options._frag;
          if (this._frag) {
            this._frag.children.push(this);
          }

          // push self into parent / transclusion host
          if (this.$parent) {
            this.$parent.$children.push(this);
          }

          // set ref
          if (options._ref) {
            (this._scope || this._context).$refs[options._ref] = this;
          }

          // merge options.
          options = this.$options = mergeOptions(
            this.constructor.options,
            options,
            this
          );

          // initialize data as empty object.
          // it will be filled up in _initScope().
          this._data = {};

          // call init hook
          this._callHook("init");

          // initialize data observation and scope inheritance.
          this._initState();

          // setup event system and option events.
          this._initEvents();

          // call created hook
          this._callHook("created");

          // if `el` option is passed, start compilation.
          if (options.el) {
            this.$mount(options.el);
          }
        };

        /***/
      },
      /* 56 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var inDoc = _.inDoc;
        var eventRE = /^v-on:|^@/;

        /**
         * Setup the instance's option events & watchers.
         * If the value is a string, we pull it from the
         * instance's methods by name.
         */

        exports._initEvents = function () {
          var options = this.$options;
          if (options._asComponent) {
            registerComponentEvents(this, options.el);
          }
          registerCallbacks(this, "$on", options.events);
          registerCallbacks(this, "$watch", options.watch);
        };

        /**
         * Register v-on events on a child component
         *
         * @param {Vue} vm
         * @param {Element} el
         */

        function registerComponentEvents(vm, el) {
          var attrs = el.attributes;
          var name, handler;
          for (var i = 0, l = attrs.length; i < l; i++) {
            name = attrs[i].name;
            if (eventRE.test(name)) {
              name = name.replace(eventRE, "");
              handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
              vm.$on(name.replace(eventRE), handler);
            }
          }
        }

        /**
         * Register callbacks for option events and watchers.
         *
         * @param {Vue} vm
         * @param {String} action
         * @param {Object} hash
         */

        function registerCallbacks(vm, action, hash) {
          if (!hash) return;
          var handlers, key, i, j;
          for (key in hash) {
            handlers = hash[key];
            if (_.isArray(handlers)) {
              for (i = 0, j = handlers.length; i < j; i++) {
                register(vm, action, key, handlers[i]);
              }
            } else {
              register(vm, action, key, handlers);
            }
          }
        }

        /**
         * Helper to register an event/watch callback.
         *
         * @param {Vue} vm
         * @param {String} action
         * @param {String} key
         * @param {Function|String|Object} handler
         * @param {Object} [options]
         */

        function register(vm, action, key, handler, options) {
          var type = typeof handler;
          if (type === "function") {
            vm[action](key, handler, options);
          } else if (type === "string") {
            var methods = vm.$options.methods;
            var method = methods && methods[handler];
            if (method) {
              vm[action](key, method, options);
            } else {
              "development" !== "production" &&
                _.warn(
                  'Unknown method: "' +
                    handler +
                    '" when ' +
                    "registering callback for " +
                    action +
                    ': "' +
                    key +
                    '".'
                );
            }
          } else if (handler && type === "object") {
            register(vm, action, key, handler.handler, handler);
          }
        }

        /**
         * Setup recursive attached/detached calls
         */

        exports._initDOMHooks = function () {
          this.$on("hook:attached", onAttached);
          this.$on("hook:detached", onDetached);
        };

        /**
         * Callback to recursively call attached hook on children
         */

        function onAttached() {
          if (!this._isAttached) {
            this._isAttached = true;
            this.$children.forEach(callAttach);
          }
        }

        /**
         * Iterator to call attached hook
         *
         * @param {Vue} child
         */

        function callAttach(child) {
          if (!child._isAttached && inDoc(child.$el)) {
            child._callHook("attached");
          }
        }

        /**
         * Callback to recursively call detached hook on children
         */

        function onDetached() {
          if (this._isAttached) {
            this._isAttached = false;
            this.$children.forEach(callDetach);
          }
        }

        /**
         * Iterator to call detached hook
         *
         * @param {Vue} child
         */

        function callDetach(child) {
          if (child._isAttached && !inDoc(child.$el)) {
            child._callHook("detached");
          }
        }

        /**
         * Trigger all handlers for a hook
         *
         * @param {String} hook
         */

        exports._callHook = function (hook) {
          var handlers = this.$options[hook];
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              handlers[i].call(this);
            }
          }
          this.$emit("hook:" + hook);
        };

        /***/
      },
      /* 57 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var compiler = __webpack_require__(14);
        var Observer = __webpack_require__(58);
        var Dep = __webpack_require__(41);
        var Watcher = __webpack_require__(40);

        /**
         * Setup the scope of an instance, which contains:
         * - observed data
         * - computed properties
         * - user methods
         * - meta properties
         */

        exports._initState = function () {
          this._initProps();
          this._initMeta();
          this._initMethods();
          this._initData();
          this._initComputed();
        };

        /**
         * Initialize props.
         */

        exports._initProps = function () {
          var options = this.$options;
          var el = options.el;
          var props = options.props;
          if (props && !el) {
            "development" !== "production" &&
              _.warn(
                "Props will not be compiled if no `el` option is " +
                  "provided at instantiation."
              );
          }
          // make sure to convert string selectors into element now
          el = options.el = _.query(el);
          this._propsUnlinkFn =
            el && el.nodeType === 1 && props
              ? // props must be linked in proper scope if inside v-for
                compiler.compileAndLinkProps(this, el, props, this._scope)
              : null;
        };

        /**
         * Initialize the data.
         */

        exports._initData = function () {
          var propsData = this._data;
          var optionsDataFn = this.$options.data;
          var optionsData = optionsDataFn && optionsDataFn();
          if (optionsData) {
            this._data = optionsData;
            for (var prop in propsData) {
              if (
                "development" !== "production" &&
                optionsData.hasOwnProperty(prop)
              ) {
                _.warn(
                  'Data field "' +
                    prop +
                    '" is already defined ' +
                    "as a prop. Use prop default value instead."
                );
              }
              if (
                this._props[prop].raw !== null ||
                !optionsData.hasOwnProperty(prop)
              ) {
                _.set(optionsData, prop, propsData[prop]);
              }
            }
          }
          var data = this._data;
          // proxy data on instance
          var keys = Object.keys(data);
          var i, key;
          i = keys.length;
          while (i--) {
            key = keys[i];
            this._proxy(key);
          }
          // observe data
          Observer.create(data, this);
        };

        /**
         * Swap the isntance's $data. Called in $data's setter.
         *
         * @param {Object} newData
         */

        exports._setData = function (newData) {
          newData = newData || {};
          var oldData = this._data;
          this._data = newData;
          var keys, key, i;
          // unproxy keys not present in new data
          keys = Object.keys(oldData);
          i = keys.length;
          while (i--) {
            key = keys[i];
            if (!(key in newData)) {
              this._unproxy(key);
            }
          }
          // proxy keys not already proxied,
          // and trigger change for changed values
          keys = Object.keys(newData);
          i = keys.length;
          while (i--) {
            key = keys[i];
            if (!this.hasOwnProperty(key)) {
              // new property
              this._proxy(key);
            }
          }
          oldData.__ob__.removeVm(this);
          Observer.create(newData, this);
          this._digest();
        };

        /**
         * Proxy a property, so that
         * vm.prop === vm._data.prop
         *
         * @param {String} key
         */

        exports._proxy = function (key) {
          if (!_.isReserved(key)) {
            // need to store ref to self here
            // because these getter/setters might
            // be called by child scopes via
            // prototype inheritance.
            var self = this;
            Object.defineProperty(self, key, {
              configurable: true,
              enumerable: true,
              get: function proxyGetter() {
                return self._data[key];
              },
              set: function proxySetter(val) {
                self._data[key] = val;
              },
            });
          }
        };

        /**
         * Unproxy a property.
         *
         * @param {String} key
         */

        exports._unproxy = function (key) {
          if (!_.isReserved(key)) {
            delete this[key];
          }
        };

        /**
         * Force update on every watcher in scope.
         */

        exports._digest = function () {
          for (var i = 0, l = this._watchers.length; i < l; i++) {
            this._watchers[i].update(true); // shallow updates
          }
        };

        /**
         * Setup computed properties. They are essentially
         * special getter/setters
         */

        function noop() {}
        exports._initComputed = function () {
          var computed = this.$options.computed;
          if (computed) {
            for (var key in computed) {
              var userDef = computed[key];
              var def = {
                enumerable: true,
                configurable: true,
              };
              if (typeof userDef === "function") {
                def.get = makeComputedGetter(userDef, this);
                def.set = noop;
              } else {
                def.get = userDef.get
                  ? userDef.cache !== false
                    ? makeComputedGetter(userDef.get, this)
                    : _.bind(userDef.get, this)
                  : noop;
                def.set = userDef.set ? _.bind(userDef.set, this) : noop;
              }
              Object.defineProperty(this, key, def);
            }
          }
        };

        function makeComputedGetter(getter, owner) {
          var watcher = new Watcher(owner, getter, null, {
            lazy: true,
          });
          return function computedGetter() {
            if (watcher.dirty) {
              watcher.evaluate();
            }
            if (Dep.target) {
              watcher.depend();
            }
            return watcher.value;
          };
        }

        /**
         * Setup instance methods. Methods must be bound to the
         * instance since they might be passed down as a prop to
         * child components.
         */

        exports._initMethods = function () {
          var methods = this.$options.methods;
          if (methods) {
            for (var key in methods) {
              this[key] = _.bind(methods[key], this);
            }
          }
        };

        /**
         * Initialize meta information like $index, $key & $value.
         */

        exports._initMeta = function () {
          var metas = this.$options._meta;
          if (metas) {
            for (var key in metas) {
              _.defineReactive(this, key, metas[key]);
            }
          }
        };

        /***/
      },
      /* 58 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Dep = __webpack_require__(41);
        var arrayMethods = __webpack_require__(59);
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

        /**
         * Observer class that are attached to each observed
         * object. Once attached, the observer converts target
         * object's property keys into getter/setters that
         * collect dependencies and dispatches updates.
         *
         * @param {Array|Object} value
         * @constructor
         */

        function Observer(value) {
          this.value = value;
          this.dep = new Dep();
          _.define(value, "__ob__", this);
          if (_.isArray(value)) {
            var augment = _.hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        }

        // Static methods

        /**
         * Attempt to create an observer instance for a value,
         * returns the new observer if successfully observed,
         * or the existing observer if the value already has one.
         *
         * @param {*} value
         * @param {Vue} [vm]
         * @return {Observer|undefined}
         * @static
         */

        Observer.create = function (value, vm) {
          if (!value || typeof value !== "object") {
            return;
          }
          var ob;
          if (
            value.hasOwnProperty("__ob__") &&
            value.__ob__ instanceof Observer
          ) {
            ob = value.__ob__;
          } else if (
            (_.isArray(value) || _.isPlainObject(value)) &&
            !Object.isFrozen(value) &&
            !value._isVue
          ) {
            ob = new Observer(value);
          }
          if (ob && vm) {
            ob.addVm(vm);
          }
          return ob;
        };

        // Instance methods

        /**
         * Walk through each property and convert them into
         * getter/setters. This method should only be called when
         * value type is Object.
         *
         * @param {Object} obj
         */

        Observer.prototype.walk = function (obj) {
          var keys = Object.keys(obj);
          var i = keys.length;
          while (i--) {
            this.convert(keys[i], obj[keys[i]]);
          }
        };

        /**
         * Observe a list of Array items.
         *
         * @param {Array} items
         */

        Observer.prototype.observeArray = function (items) {
          var i = items.length;
          while (i--) {
            var ob = Observer.create(items[i]);
            if (ob) {
              (ob.parents || (ob.parents = [])).push(this);
            }
          }
        };

        /**
         * Remove self from the parent list of removed objects.
         *
         * @param {Array} items
         */

        Observer.prototype.unobserveArray = function (items) {
          var i = items.length;
          while (i--) {
            var ob = items[i] && items[i].__ob__;
            if (ob) {
              ob.parents.$remove(this);
            }
          }
        };

        /**
         * Notify self dependency, and also parent Array dependency
         * if any.
         */

        Observer.prototype.notify = function () {
          this.dep.notify();
          var parents = this.parents;
          if (parents) {
            var i = parents.length;
            while (i--) {
              parents[i].notify();
            }
          }
        };

        /**
         * Convert a property into getter/setter so we can emit
         * the events when the property is accessed/changed.
         *
         * @param {String} key
         * @param {*} val
         */

        Observer.prototype.convert = function (key, val) {
          defineReactive(this.value, key, val);
        };

        /**
         * Add an owner vm, so that when $set/$delete mutations
         * happen we can notify owner vms to proxy the keys and
         * digest the watchers. This is only called when the object
         * is observed as an instance's root $data.
         *
         * @param {Vue} vm
         */

        Observer.prototype.addVm = function (vm) {
          (this.vms || (this.vms = [])).push(vm);
        };

        /**
         * Remove an owner vm. This is called when the object is
         * swapped out as an instance's $data object.
         *
         * @param {Vue} vm
         */

        Observer.prototype.removeVm = function (vm) {
          this.vms.$remove(vm);
        };

        // helpers

        /**
         * Augment an target Object or Array by intercepting
         * the prototype chain using __proto__
         *
         * @param {Object|Array} target
         * @param {Object} proto
         */

        function protoAugment(target, src) {
          target.__proto__ = src;
        }

        /**
         * Augment an target Object or Array by defining
         * hidden properties.
         *
         * @param {Object|Array} target
         * @param {Object} proto
         */

        function copyAugment(target, src, keys) {
          var i = keys.length;
          var key;
          while (i--) {
            key = keys[i];
            _.define(target, key, src[key]);
          }
        }

        /**
         * Define a reactive property on an Object.
         *
         * @param {Object} obj
         * @param {String} key
         * @param {*} val
         */

        function defineReactive(obj, key, val) {
          var dep = new Dep();
          var childOb = Observer.create(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function metaGetter() {
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                }
              }
              return val;
            },
            set: function metaSetter(newVal) {
              if (newVal === val) return;
              val = newVal;
              childOb = Observer.create(newVal);
              dep.notify();
            },
          });
        }

        // Attach to the util object so it can be used elsewhere.
        _.defineReactive = defineReactive;

        module.exports = Observer;

        /***/
      },
      /* 59 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);

        /**
         * Intercept mutating methods and emit events
         */

        [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse",
        ].forEach(function (method) {
          // cache original method
          var original = arrayProto[method];
          _.define(arrayMethods, method, function mutator() {
            // avoid leaking arguments:
            // http://jsperf.com/closure-with-arguments
            var i = arguments.length;
            var args = new Array(i);
            while (i--) {
              args[i] = arguments[i];
            }
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted, removed;
            switch (method) {
              case "push":
                inserted = args;
                break;
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                removed = result;
                break;
              case "pop":
              case "shift":
                removed = [result];
                break;
            }
            if (inserted) ob.observeArray(inserted);
            if (removed) ob.unobserveArray(removed);
            // notify change
            ob.notify();
            return result;
          });
        });

        /**
         * Swap the element at the given index with a new value
         * and emits corresponding event.
         *
         * @param {Number} index
         * @param {*} val
         * @return {*} - replaced element
         */

        _.define(arrayProto, "$set", function $set(index, val) {
          if (index >= this.length) {
            this.length = index + 1;
          }
          return this.splice(index, 1, val)[0];
        });

        /**
         * Convenience method to remove the element at given index.
         *
         * @param {Number} index
         * @param {*} val
         */

        _.define(arrayProto, "$remove", function $remove(item) {
          /* istanbul ignore if */
          if (!this.length) return;
          var index = _.indexOf(this, item);
          if (index > -1) {
            return this.splice(index, 1);
          }
        });

        module.exports = arrayMethods;

        /***/
      },
      /* 60 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Directive = __webpack_require__(61);
        var compiler = __webpack_require__(14);

        /**
         * Transclude, compile and link element.
         *
         * If a pre-compiled linker is available, that means the
         * passed in element will be pre-transcluded and compiled
         * as well - all we need to do is to call the linker.
         *
         * Otherwise we need to call transclude/compile/link here.
         *
         * @param {Element} el
         * @return {Element}
         */

        exports._compile = function (el) {
          var options = this.$options;

          // transclude and init element
          // transclude can potentially replace original
          // so we need to keep reference; this step also injects
          // the template and caches the original attributes
          // on the container node and replacer node.
          var original = el;
          el = compiler.transclude(el, options);
          this._initElement(el);

          // root is always compiled per-instance, because
          // container attrs and props can be different every time.
          var contextOptions = this._context && this._context.$options;
          var rootLinker = compiler.compileRoot(el, options, contextOptions);

          // compile and link the rest
          var contentLinkFn;
          var ctor = this.constructor;
          // component compilation can be cached
          // as long as it's not using inline-template
          if (options._linkerCachable) {
            contentLinkFn = ctor.linker;
            if (!contentLinkFn) {
              contentLinkFn = ctor.linker = compiler.compile(el, options);
            }
          }

          // link phase
          // make sure to link root with prop scope!
          var rootUnlinkFn = rootLinker(this, el, this._scope);
          var contentUnlinkFn = contentLinkFn
            ? contentLinkFn(this, el)
            : compiler.compile(el, options)(this, el);

          // register composite unlink function
          // to be called during instance destruction
          this._unlinkFn = function () {
            rootUnlinkFn();
            // passing destroying: true to avoid searching and
            // splicing the directives
            contentUnlinkFn(true);
          };

          // finally replace original
          if (options.replace) {
            _.replace(original, el);
          }

          this._isCompiled = true;
          this._callHook("compiled");
          return el;
        };

        /**
         * Initialize instance element. Called in the public
         * $mount() method.
         *
         * @param {Element} el
         */

        exports._initElement = function (el) {
          if (el instanceof DocumentFragment) {
            this._isFragment = true;
            this.$el = this._fragmentStart = el.firstChild;
            this._fragmentEnd = el.lastChild;
            // set persisted text anchors to empty
            if (this._fragmentStart.nodeType === 3) {
              this._fragmentStart.data = this._fragmentEnd.data = "";
            }
            this._fragment = el;
          } else {
            this.$el = el;
          }
          this.$el.__vue__ = this;
          this._callHook("beforeCompile");
        };

        /**
         * Create and bind a directive to an element.
         *
         * @param {String} name - directive name
         * @param {Node} node   - target node
         * @param {Object} desc - parsed directive descriptor
         * @param {Object} def  - directive definition object
         * @param {Vue} [host] - transclusion host component
         * @param {Object} [scope] - v-for scope
         * @param {Fragment} [frag] - owner fragment
         */

        exports._bindDir = function (descriptor, node, host, scope, frag) {
          this._directives.push(
            new Directive(descriptor, this, node, host, scope, frag)
          );
        };

        /**
         * Teardown an instance, unobserves the data, unbind all the
         * directives, turn off all the event listeners, etc.
         *
         * @param {Boolean} remove - whether to remove the DOM node.
         * @param {Boolean} deferCleanup - if true, defer cleanup to
         *                                 be called later
         */

        exports._destroy = function (remove, deferCleanup) {
          if (this._isBeingDestroyed) {
            return;
          }
          this._callHook("beforeDestroy");
          this._isBeingDestroyed = true;
          var i;
          // remove self from parent. only necessary
          // if parent is not being destroyed as well.
          var parent = this.$parent;
          if (parent && !parent._isBeingDestroyed) {
            parent.$children.$remove(this);
            // unregister ref
            var ref = this.$options._ref;
            if (ref) {
              var scope = this._scope || this._context;
              if (scope.$refs[ref] === this) {
                scope.$refs[ref] = null;
              }
            }
          }
          // remove self from owner fragment
          if (this._frag) {
            this._frag.children.$remove(this);
          }
          // destroy all children.
          i = this.$children.length;
          while (i--) {
            this.$children[i].$destroy();
          }
          // teardown props
          if (this._propsUnlinkFn) {
            this._propsUnlinkFn();
          }
          // teardown all directives. this also tearsdown all
          // directive-owned watchers.
          if (this._unlinkFn) {
            this._unlinkFn();
          }
          i = this._watchers.length;
          while (i--) {
            this._watchers[i].teardown();
          }
          // remove reference to self on $el
          if (this.$el) {
            this.$el.__vue__ = null;
          }
          // remove DOM element
          var self = this;
          if (remove && this.$el) {
            this.$remove(function () {
              self._cleanup();
            });
          } else if (!deferCleanup) {
            this._cleanup();
          }
        };

        /**
         * Clean up to ensure garbage collection.
         * This is called after the leave transition if there
         * is any.
         */

        exports._cleanup = function () {
          // remove reference from data ob
          // frozen object may not have observer.
          if (this._data.__ob__) {
            this._data.__ob__.removeVm(this);
          }
          // Clean up references to private properties and other
          // instances. preserve reference to _data so that proxy
          // accessors still work. The only potential side effect
          // here is that mutating the instance after it's destroyed
          // may affect the state of other components that are still
          // observing the same object, but that seems to be a
          // reasonable responsibility for the user rather than
          // always throwing an error on them.
          this.$el =
            this.$parent =
            this.$root =
            this.$children =
            this._watchers =
            this._context =
            this._scope =
            this._directives =
              null;
          // call the last hook...
          this._isDestroyed = true;
          this._callHook("destroyed");
          // turn off all instance listeners.
          this.$off();
        };

        /***/
      },
      /* 61 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Watcher = __webpack_require__(40);
        var expParser = __webpack_require__(42);
        function noop() {}

        /**
         * A directive links a DOM element with a piece of data,
         * which is the result of evaluating an expression.
         * It registers a watcher with the expression and calls
         * the DOM update function when a change is triggered.
         *
         * @param {String} name
         * @param {Node} el
         * @param {Vue} vm
         * @param {Object} descriptor
         *                 - {String} name
         *                 - {Object} def
         *                 - {String} expression
         *                 - {Array<Object>} [filters]
         *                 - {Boolean} literal
         *                 - {String} attr
         *                 - {String} raw
         * @param {Object} def - directive definition object
         * @param {Vue} [host] - transclusion host component
         * @param {Object} [scope] - v-for scope
         * @param {Fragment} [frag] - owner fragment
         * @constructor
         */

        function Directive(descriptor, vm, el, host, scope, frag) {
          this.vm = vm;
          this.el = el;
          // copy descriptor properties
          this.descriptor = descriptor;
          this.name = descriptor.name;
          this.expression = descriptor.expression;
          this.arg = descriptor.arg;
          this.modifiers = descriptor.modifiers;
          this.filters = descriptor.filters;
          this.literal = this.modifiers && this.modifiers.literal;
          // private
          this._locked = false;
          this._bound = false;
          this._listeners = null;
          // link context
          this._host = host;
          this._scope = scope;
          this._frag = frag;
          // store directives on node in dev mode
          if ("development" !== "production" && this.el) {
            this.el._vue_directives = this.el._vue_directives || [];
            this.el._vue_directives.push(this);
          }
        }

        /**
         * Initialize the directive, mixin definition properties,
         * setup the watcher, call definition bind() and update()
         * if present.
         *
         * @param {Object} def
         */

        Directive.prototype._bind = function () {
          var name = this.name;
          var descriptor = this.descriptor;

          // remove attribute
          if (
            (name !== "cloak" || this.vm._isCompiled) &&
            this.el &&
            this.el.removeAttribute
          ) {
            var attr = descriptor.attr || "v-" + name;
            this.el.removeAttribute(attr);
          }

          // copy def properties
          var def = descriptor.def;
          if (typeof def === "function") {
            this.update = def;
          } else {
            _.extend(this, def);
          }

          // setup directive params
          this._setupParams();

          // initial bind
          if (this.bind) {
            this.bind();
          }

          if (this.literal) {
            this.update && this.update(descriptor.raw);
          } else if (
            (this.expression || this.modifiers) &&
            (this.update || this.twoWay) &&
            !this._checkStatement()
          ) {
            // wrapped updater for context
            var dir = this;
            if (this.update) {
              this._update = function (val, oldVal) {
                if (!dir._locked) {
                  dir.update(val, oldVal);
                }
              };
            } else {
              this._update = noop;
            }
            var preProcess = this._preProcess
              ? _.bind(this._preProcess, this)
              : null;
            var postProcess = this._postProcess
              ? _.bind(this._postProcess, this)
              : null;
            var watcher = (this._watcher = new Watcher(
              this.vm,
              this.expression,
              this._update, // callback
              {
                filters: this.filters,
                twoWay: this.twoWay,
                deep: this.deep,
                preProcess: preProcess,
                postProcess: postProcess,
                scope: this._scope,
              }
            ));
            // v-model with inital inline value need to sync back to
            // model instead of update to DOM on init. They would
            // set the afterBind hook to indicate that.
            if (this.afterBind) {
              this.afterBind();
            } else if (this.update) {
              this.update(watcher.value);
            }
          }
          this._bound = true;
        };

        /**
         * Setup all param attributes, e.g. track-by,
         * transition-mode, etc...
         */

        Directive.prototype._setupParams = function () {
          if (!this.params) {
            return;
          }
          var params = this.params;
          // swap the params array with a fresh object.
          this.params = Object.create(null);
          var i = params.length;
          var key, val, mappedKey;
          while (i--) {
            key = params[i];
            mappedKey = _.camelize(key);
            val = _.attr(this.el, key);
            if (val != null) {
              // static
              this.params[mappedKey] = val === "" ? true : val;
            } else {
              // dynamic
              val = _.getBindAttr(this.el, key);
              if (val != null) {
                this._setupParamWatcher(mappedKey, val);
              }
            }
          }
        };

        /**
         * Setup a watcher for a dynamic param.
         *
         * @param {String} key
         * @param {String} expression
         */

        Directive.prototype._setupParamWatcher = function (key, expression) {
          var self = this;
          var called = false;
          var unwatch = (this._scope || this.vm).$watch(
            expression,
            function (val, oldVal) {
              self.params[key] = val;
              // since we are in immediate mode,
              // only call the param change callbacks if this is not the first update.
              if (called) {
                var cb = self.paramWatchers && self.paramWatchers[key];
                if (cb) {
                  cb.call(self, val, oldVal);
                }
              } else {
                called = true;
              }
            },
            {
              immediate: true,
            }
          );
          (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
        };

        /**
         * Check if the directive is a function caller
         * and if the expression is a callable one. If both true,
         * we wrap up the expression and use it as the event
         * handler.
         *
         * e.g. on-click="a++"
         *
         * @return {Boolean}
         */

        Directive.prototype._checkStatement = function () {
          var expression = this.expression;
          if (
            expression &&
            this.acceptStatement &&
            !expParser.isSimplePath(expression)
          ) {
            var fn = expParser.parse(expression).get;
            var scope = this._scope || this.vm;
            var handler = function () {
              fn.call(scope, scope);
            };
            if (this.filters) {
              handler = this.vm._applyFilters(handler, null, this.filters);
            }
            this.update(handler);
            return true;
          }
        };

        /**
         * Set the corresponding value with the setter.
         * This should only be used in two-way directives
         * e.g. v-model.
         *
         * @param {*} value
         * @public
         */

        Directive.prototype.set = function (value) {
          /* istanbul ignore else */
          if (this.twoWay) {
            this._withLock(function () {
              this._watcher.set(value);
            });
          } else if (true) {
            _.warn(
              "Directive.set() can only be used inside twoWay" + "directives."
            );
          }
        };

        /**
         * Execute a function while preventing that function from
         * triggering updates on this directive instance.
         *
         * @param {Function} fn
         */

        Directive.prototype._withLock = function (fn) {
          var self = this;
          self._locked = true;
          fn.call(self);
          _.nextTick(function () {
            self._locked = false;
          });
        };

        /**
         * Convenience method that attaches a DOM event listener
         * to the directive element and autometically tears it down
         * during unbind.
         *
         * @param {String} event
         * @param {Function} handler
         */

        Directive.prototype.on = function (event, handler) {
          _.on(this.el, event, handler);
          (this._listeners || (this._listeners = [])).push([event, handler]);
        };

        /**
         * Teardown the watcher and call unbind.
         */

        Directive.prototype._teardown = function () {
          if (this._bound) {
            this._bound = false;
            if (this.unbind) {
              this.unbind();
            }
            if (this._watcher) {
              this._watcher.teardown();
            }
            var listeners = this._listeners;
            var i;
            if (listeners) {
              i = listeners.length;
              while (i--) {
                _.off(this.el, listeners[i][0], listeners[i][1]);
              }
            }
            var unwatchFns = this._paramUnwatchFns;
            if (unwatchFns) {
              i = unwatchFns.length;
              while (i--) {
                unwatchFns[i]();
              }
            }
            if ("development" !== "production" && this.el) {
              this.el._vue_directives.$remove(this);
            }
            this.vm = this.el = this._watcher = this._listeners = null;
          }
        };

        module.exports = Directive;

        /***/
      },
      /* 62 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        /**
         * Apply a list of filter (descriptors) to a value.
         * Using plain for loops here because this will be called in
         * the getter of any watcher with filters so it is very
         * performance sensitive.
         *
         * @param {*} value
         * @param {*} [oldValue]
         * @param {Array} filters
         * @param {Boolean} write
         * @return {*}
         */

        exports._applyFilters = function (value, oldValue, filters, write) {
          var filter, fn, args, arg, offset, i, l, j, k;
          for (i = 0, l = filters.length; i < l; i++) {
            filter = filters[i];
            fn = _.resolveAsset(this.$options, "filters", filter.name);
            if (true) {
              _.assertAsset(fn, "filter", filter.name);
            }
            if (!fn) continue;
            fn = write ? fn.write : fn.read || fn;
            if (typeof fn !== "function") continue;
            args = write ? [value, oldValue] : [value];
            offset = write ? 2 : 1;
            if (filter.args) {
              for (j = 0, k = filter.args.length; j < k; j++) {
                arg = filter.args[j];
                args[j + offset] = arg.dynamic
                  ? this.$get(arg.value)
                  : arg.value;
              }
            }
            value = fn.apply(this, args);
          }
          return value;
        };

        /**
         * Resolve a component, depending on whether the component
         * is defined normally or using an async factory function.
         * Resolves synchronously if already resolved, otherwise
         * resolves asynchronously and caches the resolved
         * constructor on the factory.
         *
         * @param {String} id
         * @param {Function} cb
         */

        exports._resolveComponent = function (id, cb) {
          var factory = _.resolveAsset(this.$options, "components", id);
          if (true) {
            _.assertAsset(factory, "component", id);
          }
          if (!factory) {
            return;
          }
          // async component factory
          if (!factory.options) {
            if (factory.resolved) {
              // cached
              cb(factory.resolved);
            } else if (factory.requested) {
              // pool callbacks
              factory.pendingCallbacks.push(cb);
            } else {
              factory.requested = true;
              var cbs = (factory.pendingCallbacks = [cb]);
              factory(
                function resolve(res) {
                  if (_.isPlainObject(res)) {
                    res = _.Vue.extend(res);
                  }
                  // cache resolved
                  factory.resolved = res;
                  // invoke callbacks
                  for (var i = 0, l = cbs.length; i < l; i++) {
                    cbs[i](res);
                  }
                },
                function reject(reason) {
                  "development" !== "production" &&
                    _.warn(
                      "Failed to resolve async component: " +
                        id +
                        ". " +
                        (reason ? "\nReason: " + reason : "")
                    );
                }
              );
            }
          } else {
            // normal component
            cb(factory);
          }
        };

        /***/
      },
      /* 63 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var Watcher = __webpack_require__(40);
        var Path = __webpack_require__(43);
        var textParser = __webpack_require__(6);
        var dirParser = __webpack_require__(8);
        var expParser = __webpack_require__(42);
        var filterRE = /[^|]\|[^|]/;

        /**
         * Get the value from an expression on this vm.
         *
         * @param {String} exp
         * @param {Boolean} [asStatement]
         * @return {*}
         */

        exports.$get = function (exp, asStatement) {
          var res = expParser.parse(exp);
          if (res) {
            if (asStatement && !expParser.isSimplePath(exp)) {
              var self = this;
              return function statementHandler() {
                res.get.call(self, self);
              };
            } else {
              try {
                return res.get.call(this, this);
              } catch (e) {}
            }
          }
        };

        /**
         * Set the value from an expression on this vm.
         * The expression must be a valid left-hand
         * expression in an assignment.
         *
         * @param {String} exp
         * @param {*} val
         */

        exports.$set = function (exp, val) {
          var res = expParser.parse(exp, true);
          if (res && res.set) {
            res.set.call(this, this, val);
          }
        };

        /**
         * Delete a property on the VM
         *
         * @param {String} key
         */

        exports.$delete = function (key) {
          _.delete(this._data, key);
        };

        /**
         * Watch an expression, trigger callback when its
         * value changes.
         *
         * @param {String|Function} expOrFn
         * @param {Function} cb
         * @param {Object} [options]
         *                 - {Boolean} deep
         *                 - {Boolean} immediate
         * @return {Function} - unwatchFn
         */

        exports.$watch = function (expOrFn, cb, options) {
          var vm = this;
          var parsed;
          if (typeof expOrFn === "string") {
            parsed = dirParser.parse(expOrFn);
            expOrFn = parsed.expression;
          }
          var watcher = new Watcher(vm, expOrFn, cb, {
            deep: options && options.deep,
            filters: parsed && parsed.filters,
          });
          if (options && options.immediate) {
            cb.call(vm, watcher.value);
          }
          return function unwatchFn() {
            watcher.teardown();
          };
        };

        /**
         * Evaluate a text directive, including filters.
         *
         * @param {String} text
         * @param {Boolean} [asStatement]
         * @return {String}
         */

        exports.$eval = function (text, asStatement) {
          // check for filters.
          if (filterRE.test(text)) {
            var dir = dirParser.parse(text);
            // the filter regex check might give false positive
            // for pipes inside strings, so it's possible that
            // we don't get any filters here
            var val = this.$get(dir.expression, asStatement);
            return dir.filters
              ? this._applyFilters(val, null, dir.filters)
              : val;
          } else {
            // no filter
            return this.$get(text, asStatement);
          }
        };

        /**
         * Interpolate a piece of template text.
         *
         * @param {String} text
         * @return {String}
         */

        exports.$interpolate = function (text) {
          var tokens = textParser.parse(text);
          var vm = this;
          if (tokens) {
            if (tokens.length === 1) {
              return vm.$eval(tokens[0].value) + "";
            } else {
              return tokens
                .map(function (token) {
                  return token.tag ? vm.$eval(token.value) : token.value;
                })
                .join("");
            }
          } else {
            return text;
          }
        };

        /**
         * Log instance data as a plain JS object
         * so that it is easier to inspect in console.
         * This method assumes console is available.
         *
         * @param {String} [path]
         */

        exports.$log = function (path) {
          var data = path ? Path.get(this._data, path) : this._data;
          if (data) {
            data = clean(data);
          }
          // include computed fields
          if (!path) {
            for (var key in this.$options.computed) {
              data[key] = clean(this[key]);
            }
          }
          console.log(data);
        };

        /**
         * "clean" a getter/setter converted object into a plain
         * object copy.
         *
         * @param {Object} - obj
         * @return {Object}
         */

        function clean(obj) {
          return JSON.parse(JSON.stringify(obj));
        }

        /***/
      },
      /* 64 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var transition = __webpack_require__(9);

        /**
         * Convenience on-instance nextTick. The callback is
         * auto-bound to the instance, and this avoids component
         * modules having to rely on the global Vue.
         *
         * @param {Function} fn
         */

        exports.$nextTick = function (fn) {
          _.nextTick(fn, this);
        };

        /**
         * Append instance to target
         *
         * @param {Node} target
         * @param {Function} [cb]
         * @param {Boolean} [withTransition] - defaults to true
         */

        exports.$appendTo = function (target, cb, withTransition) {
          return insert(
            this,
            target,
            cb,
            withTransition,
            append,
            transition.append
          );
        };

        /**
         * Prepend instance to target
         *
         * @param {Node} target
         * @param {Function} [cb]
         * @param {Boolean} [withTransition] - defaults to true
         */

        exports.$prependTo = function (target, cb, withTransition) {
          target = query(target);
          if (target.hasChildNodes()) {
            this.$before(target.firstChild, cb, withTransition);
          } else {
            this.$appendTo(target, cb, withTransition);
          }
          return this;
        };

        /**
         * Insert instance before target
         *
         * @param {Node} target
         * @param {Function} [cb]
         * @param {Boolean} [withTransition] - defaults to true
         */

        exports.$before = function (target, cb, withTransition) {
          return insert(
            this,
            target,
            cb,
            withTransition,
            before,
            transition.before
          );
        };

        /**
         * Insert instance after target
         *
         * @param {Node} target
         * @param {Function} [cb]
         * @param {Boolean} [withTransition] - defaults to true
         */

        exports.$after = function (target, cb, withTransition) {
          target = query(target);
          if (target.nextSibling) {
            this.$before(target.nextSibling, cb, withTransition);
          } else {
            this.$appendTo(target.parentNode, cb, withTransition);
          }
          return this;
        };

        /**
         * Remove instance from DOM
         *
         * @param {Function} [cb]
         * @param {Boolean} [withTransition] - defaults to true
         */

        exports.$remove = function (cb, withTransition) {
          if (!this.$el.parentNode) {
            return cb && cb();
          }
          var inDoc = this._isAttached && _.inDoc(this.$el);
          // if we are not in document, no need to check
          // for transitions
          if (!inDoc) withTransition = false;
          var self = this;
          var realCb = function () {
            if (inDoc) self._callHook("detached");
            if (cb) cb();
          };
          if (this._isFragment) {
            _.removeNodeRange(
              this._fragmentStart,
              this._fragmentEnd,
              this,
              this._fragment,
              realCb
            );
          } else {
            var op = withTransition === false ? remove : transition.remove;
            op(this.$el, this, realCb);
          }
          return this;
        };

        /**
         * Shared DOM insertion function.
         *
         * @param {Vue} vm
         * @param {Element} target
         * @param {Function} [cb]
         * @param {Boolean} [withTransition]
         * @param {Function} op1 - op for non-transition insert
         * @param {Function} op2 - op for transition insert
         * @return vm
         */

        function insert(vm, target, cb, withTransition, op1, op2) {
          target = query(target);
          var targetIsDetached = !_.inDoc(target);
          var op = withTransition === false || targetIsDetached ? op1 : op2;
          var shouldCallHook =
            !targetIsDetached && !vm._isAttached && !_.inDoc(vm.$el);
          if (vm._isFragment) {
            _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
              op(node, target, vm);
            });
            cb && cb();
          } else {
            op(vm.$el, target, vm, cb);
          }
          if (shouldCallHook) {
            vm._callHook("attached");
          }
          return vm;
        }

        /**
         * Check for selectors
         *
         * @param {String|Element} el
         */

        function query(el) {
          return typeof el === "string" ? document.querySelector(el) : el;
        }

        /**
         * Append operation that takes a callback.
         *
         * @param {Node} el
         * @param {Node} target
         * @param {Vue} vm - unused
         * @param {Function} [cb]
         */

        function append(el, target, vm, cb) {
          target.appendChild(el);
          if (cb) cb();
        }

        /**
         * InsertBefore operation that takes a callback.
         *
         * @param {Node} el
         * @param {Node} target
         * @param {Vue} vm - unused
         * @param {Function} [cb]
         */

        function before(el, target, vm, cb) {
          _.before(el, target);
          if (cb) cb();
        }

        /**
         * Remove operation that takes a callback.
         *
         * @param {Node} el
         * @param {Vue} vm - unused
         * @param {Function} [cb]
         */

        function remove(el, vm, cb) {
          _.remove(el);
          if (cb) cb();
        }

        /***/
      },
      /* 65 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);

        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         */

        exports.$on = function (event, fn) {
          (this._events[event] || (this._events[event] = [])).push(fn);
          modifyListenerCount(this, event, 1);
          return this;
        };

        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         */

        exports.$once = function (event, fn) {
          var self = this;
          function on() {
            self.$off(event, on);
            fn.apply(this, arguments);
          }
          on.fn = fn;
          this.$on(event, on);
          return this;
        };

        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         */

        exports.$off = function (event, fn) {
          var cbs;
          // all
          if (!arguments.length) {
            if (this.$parent) {
              for (event in this._events) {
                cbs = this._events[event];
                if (cbs) {
                  modifyListenerCount(this, event, -cbs.length);
                }
              }
            }
            this._events = {};
            return this;
          }
          // specific event
          cbs = this._events[event];
          if (!cbs) {
            return this;
          }
          if (arguments.length === 1) {
            modifyListenerCount(this, event, -cbs.length);
            this._events[event] = null;
            return this;
          }
          // specific handler
          var cb;
          var i = cbs.length;
          while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
              modifyListenerCount(this, event, -1);
              cbs.splice(i, 1);
              break;
            }
          }
          return this;
        };

        /**
         * Trigger an event on self.
         *
         * @param {String} event
         */

        exports.$emit = function (event) {
          var cbs = this._events[event];
          this._shouldPropagate = !cbs;
          if (cbs) {
            cbs = cbs.length > 1 ? _.toArray(cbs) : cbs;
            var args = _.toArray(arguments, 1);
            for (var i = 0, l = cbs.length; i < l; i++) {
              var res = cbs[i].apply(this, args);
              if (res === true) {
                this._shouldPropagate = true;
              }
            }
          }
          return this;
        };

        /**
         * Recursively broadcast an event to all children instances.
         *
         * @param {String} event
         * @param {...*} additional arguments
         */

        exports.$broadcast = function (event) {
          // if no child has registered for this event,
          // then there's no need to broadcast.
          if (!this._eventsCount[event]) return;
          var children = this.$children;
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            child.$emit.apply(child, arguments);
            if (child._shouldPropagate) {
              child.$broadcast.apply(child, arguments);
            }
          }
          return this;
        };

        /**
         * Recursively propagate an event up the parent chain.
         *
         * @param {String} event
         * @param {...*} additional arguments
         */

        exports.$dispatch = function () {
          this.$emit.apply(this, arguments);
          var parent = this.$parent;
          while (parent) {
            parent.$emit.apply(parent, arguments);
            parent = parent._shouldPropagate ? parent.$parent : null;
          }
          return this;
        };

        /**
         * Modify the listener counts on all parents.
         * This bookkeeping allows $broadcast to return early when
         * no child has listened to a certain event.
         *
         * @param {Vue} vm
         * @param {String} event
         * @param {Number} count
         */

        var hookRE = /^hook:/;
        function modifyListenerCount(vm, event, count) {
          var parent = vm.$parent;
          // hooks do not get broadcasted so no need
          // to do bookkeeping for them
          if (!parent || !count || hookRE.test(event)) return;
          while (parent) {
            parent._eventsCount[event] =
              (parent._eventsCount[event] || 0) + count;
            parent = parent.$parent;
          }
        }

        /***/
      },
      /* 66 */
      /***/ function (module, exports, __webpack_require__) {
        var _ = __webpack_require__(1);
        var compiler = __webpack_require__(14);

        /**
         * Set instance target element and kick off the compilation
         * process. The passed in `el` can be a selector string, an
         * existing Element, or a DocumentFragment (for block
         * instances).
         *
         * @param {Element|DocumentFragment|string} el
         * @public
         */

        exports.$mount = function (el) {
          if (this._isCompiled) {
            "development" !== "production" &&
              _.warn("$mount() should be called only once.");
            return;
          }
          el = _.query(el);
          if (!el) {
            el = document.createElement("div");
          }
          this._compile(el);
          this._initDOMHooks();
          if (_.inDoc(this.$el)) {
            this._callHook("attached");
            ready.call(this);
          } else {
            this.$once("hook:attached", ready);
          }
          return this;
        };

        /**
         * Mark an instance as ready.
         */

        function ready() {
          this._isAttached = true;
          this._isReady = true;
          this._callHook("ready");
        }

        /**
         * Teardown the instance, simply delegate to the internal
         * _destroy.
         */

        exports.$destroy = function (remove, deferCleanup) {
          this._destroy(remove, deferCleanup);
        };

        /**
         * Partially compile a piece of DOM and return a
         * decompile function.
         *
         * @param {Element|DocumentFragment} el
         * @param {Vue} [host]
         * @return {Function}
         */

        exports.$compile = function (el, host, scope, frag) {
          return compiler.compile(el, this.$options, true)(
            this,
            el,
            host,
            scope,
            frag
          );
        };

        /***/
      },
      /******/
    ]
  );
});
