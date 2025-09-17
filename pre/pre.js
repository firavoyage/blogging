// todo: flair (react, saba), precious, material, mdx

const { h, p, e, r } = voyage

// todo: make flair a js library

const flair = ({ stylesheet, theme, glossary }) => {
  const has = (obj, ...keys) => {
    if (!obj || typeof obj !== "object") return false;

    let current = obj;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      // Check if current level has the property
      if (!Object.prototype.hasOwnProperty.call(current, key)) {
        return false;
      }

      // Move to next level if there are more keys to check
      if (i < keys.length - 1) {
        current = current[key];
        // If the value isn't an object, we can't traverse further
        if (current === null || typeof current !== "object") {
          return false;
        }
      }
    }

    return true;
  };

  const rules = [];

  // Process each selector in the stylesheet
  for (const [selector, styles] of Object.entries(stylesheet)) {
    // done: support nested stylesheet
    if (typeof styles == "object") {
      if (has(styles, "")) {
        rules.push(
          flair({ stylesheet: { [selector]: styles[""] }, theme, glossary })
        );
        delete styles[""];
      }
      rules.push(
        `${selector}{${flair({ stylesheet: styles, theme, glossary })}}`
      );
      continue;
    }

    const variants = {};

    // Parse each style in the style string
    for (const _style of styles.split(/\s+/)) {
      // done: handle responsive variants with media queries
      let media = "";
      const _variant = _style
        .split(":")
        .slice(0, -1)
        .sort()
        .filter((_) => {
          if (has(theme, "screen", _)) {
            media = `@media (min-width: ${theme.screen[_]})`;
            return false;
          } else {
            return true;
          }
        });

      const variant = `${media}${selector}${["", ..._variant].join(":")}`;
      const style = _style.split(":").at(-1);

      // init variants[variant]
      if (!has(variants, variant)) {
        variants[variant] = {};
      }

      // Parse utility components
      const key = style.split("-")[0];
      const _modvalue = style.split("-").slice(1).join("-");

      let prop;
      let value;

      // resolve prop and value
      if (_modvalue.startsWith("[") && _modvalue.endsWith("]")) {
        // arbitary value
        value = _modvalue.slice(1, -1);

        // resolve the type and css prop based on the type
        if (typeof glossary[key] == "object") {
          let type;
          const _types = Object.keys(glossary[key]);
          if (_types.length == 1) {
            type = _types[0];
          } else {
            // todo: figure out the type by the value
            type = glossary[key].default;
          }

          prop = glossary[key][type];
        } else {
          prop = glossary[key];
        }
      } else {
        // Process modifiers
        const negative = _modvalue.startsWith("-");
        const important = _modvalue.endsWith("!");
        const _value = _modvalue.slice(
          negative ? 1 : 0,
          _modvalue.length - (important ? 1 : 0)
        );

        // done: support style like bg-red-123 when theme.color.red is object
        // done: support bg-red when there is theme.color.red.default
        // only one level of nesting at most

        // lookup prop and value on glossary and theme
        if (has(glossary, key)) {
          const parent = _value.split("-")[0],
            item = _value.split("-")[1];

          // resolve the type and css prop based on the type
          let type;
          if (typeof glossary[key] == "object") {
            const _types = Object.keys(glossary[key]);
            if (_types.length == 1) {
              type = _types[0];
            } else {
              let flag = false;
              for (const test of _types) {
                if (has(theme, test, _value) || has(theme, test, parent)) {
                  type = test;
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                type = glossary[key].default;
              }
            }

            prop = glossary[key][type];
          } else {
            type = key;
            const _prop = glossary[key];
            if (_prop.includes(":")) {
              [prop, value] = _prop.split(":");
            } else {
              prop = _prop;
            }
          }

          // value is yet to be resolved
          if (!value) {
            const lookup = (where) =>
              has(theme, where, _value) &&
              typeof theme[where][_value] != "object"
                ? theme[where][_value]
                : has(theme, where, _value, "default")
                ? theme[where][_value].default
                : has(theme, where, parent, item)
                ? theme[where][parent][item]
                : false;

            // prefer key specific values
            value = lookup(key) || lookup(type) || _value;
          }
        } else {
          value = _value;
        }

        // Apply value modifiers
        if (negative) {
          value = `-${value}`;
        }
        if (important) {
          value = `${value} !important`;
        }
      }

      // handle array prop (like mx: margin left, margin right)
      if (typeof prop == "string") {
        variants[variant][prop] = value;
      } else if (Array.isArray(prop)) {
        const props = prop;
        if (Array.isArray(value)) {
          props.map((prop, index) => {
            variants[variant][prop] = value[index];
          });
        } else {
          props.map((prop, index) => {
            variants[variant][prop] = value;
          });
        }
      }
    }

    // Generate CSS rules from variant groups
    for (const [variant, _body] of Object.entries(variants)) {
      const body = Object.entries(_body)
        .map(([prop, value]) => `${prop}:${value};`)
        .join("");

      // Regular variant rule generation
      rules.push(`${variant}{${body}}`);
    }
  }

  return rules.join("");
};

const stylesheet = {
  ".pre": {
    "": `m-0 px-[15%] md:px-[10%] sm:px-[5%] pt-12
    pos-fixed inset-0 maxw-full box-border
    bg-blue-9
    text-white text-xl font-paragraph leading-relaxed
    overflowx-hidden overflowy-auto`,
    // headers
    "h1,h2,h3,h4,h5,h6": "mt-6 mb-3 leading-tight text-white text-bold",
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    // text
    p: "my-4",
    strong: "weight-bold",
    em: "style-italic",
    // link
    a: "text-lime-4 decoration-none hover:underline",
    // list
    "ul,ol": "my-4 pl-8",
    ul: "list-disc",
    "ul.contains-task-list": "list-none",
    ol: "list-decimal",
    li: "my-2",
    // code
    "pre code": `block mx-0 my-6 p-4 maxw-full 
    bg-gray rounded overflow-auto`,
    code: "mx-1 p-1 rounded text-base font-code bg-gray-1",
    // image
    img: "block my-6 maxw-full h-auto",
    // blockqoute
    blockquote: "my-8 px-10 py-6 bg-card rounded-2xl",
    // table
    table: "my-6 w-full border-collapse",
    "th,td": "px-1 py-2",
    // details summary
    details: "my-6 px-0 py-2 rounded-2xl",
    summary: `inline px-4 py-2 text-base text-bold list-none rounded-full
    bg-card`,
    // math
    ".katex *": "font-math",
  },
};

const generate = (fn, a, b) =>
  Object.fromEntries(
    Array.from({ length: b - a + 1 }, (_, i) => a + i).map((n) => [n, fn(n)])
  );

const theme = {
  color: {
    white: "#F6F7F9",
    blue: {
      9: "#23272F",
    },
    gray: {
      1: "#99a1b31a",
      9: "#16181D",
      default: "#16181D",
    },
    lime: { 4: "#58c4dc" },
    purple: {
      40: "rgb(107 117 219)",
      50: "rgb(87 95 183)",
      60: "rgb(43 52 145 / 20%)",
    },
    card: "#343a46",
  },
  // margin, paddings
  length: {
    ...generate((n) => `${0.25 * n}rem`, 1, 100),
    full: "100%",
    min: "min-content",
    max: "max-content",
    none: "none",
  },
  // font sizes, line heights, border radius... (sm xl...)
  size: {
    ...generate((n) => `${0.25 * n}rem`, 1, 100),
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  // font weight
  weight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  font: {
    paragraph: "Ubuntu, sans-serif",
    code: "Fira Code, monospace",
    math: "XITS Math, math",
  },
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  box: {
    border: "border-box",
    content: "content-box",
  },
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  rounded: {
    "": "0.25rem",
    "2xl": "0rem",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const glossary = {
  // Margin utilities
  mt: {
    length: "margin-top",
  },
  ml: {
    length: "margin-left",
  },
  mr: {
    length: "margin-right",
  },
  mb: {
    length: "margin-bottom",
  },
  mx: {
    length: ["margin-left", "margin-right"],
  },
  my: {
    length: ["margin-top", "margin-bottom"],
  },
  m: {
    length: "margin",
  },

  // Padding utilities
  pt: {
    length: "padding-top",
  },
  pl: {
    length: "padding-left",
  },
  pr: {
    length: "padding-right",
  },
  pb: {
    length: "padding-bottom",
  },
  px: {
    length: ["padding-left", "padding-right"],
  },
  py: {
    length: ["padding-top", "padding-bottom"],
  },
  p: {
    length: "padding",
  },

  // Color utilities
  bg: {
    color: "background-color",
  },
  border: {
    color: "border-color",
  },

  // Typography utilities
  text: {
    color: "color",
    size: "font-size",
    weight: "font-weight",
    default: "color",
  },
  font: "font-family",
  style: "font-style",
  decoration: "text-decoration",
  underline: "text-decoration:underline",
  linethrough: "text-decoration:line-through",
  leading: "line-height",
  tracking: {
    size: "letter-spacing",
  },
  list: "list-style-type",

  // Layout utilities
  w: {
    length: "width",
  },
  h: {
    length: "height",
  },
  minw: {
    length: "min-width",
  },
  maxw: {
    length: "max-width",
  },
  minh: {
    length: "min-height",
  },
  maxh: {
    length: "max-height",
  },
  box: "box-sizing",

  // Flexbox utilities
  flex: "flex",
  justify: "justify-content",
  items: "align-items",
  content: "align-content",
  self: "align-self",

  // Position utilities
  pos: "position",
  top: {
    length: "top",
  },
  right: {
    length: "right",
  },
  bottom: {
    length: "bottom",
  },
  left: {
    length: "left",
  },
  inset: {
    length: ["top", "bottom", "left", "right"],
  },
  insetx: {
    length: ["left", "right"],
  },
  insety: {
    length: ["top", "bottom"],
  },

  // Border utilities
  rounded: "border-radius",

  // Effect utilities
  shadow: "box-shadow",
  opacity: "opacity",

  // Transition utilities
  transition: "transition",
  duration: "transition-duration",
  // <easing-function>
  ease: "transition-timing-function",

  // Display utilities
  display: "display",
  block: "display:block",
  inline: "display:inline",
  hidden: "display:none",
  overflow: {
    overflow: "overflow",
  },
  overflowx: {
    overflow: "overflow-x",
  },
  overflowy: {
    overflow: "overflow-y",
  },
  // Z-index utility
  z: "z-index",
};

const pre = ({ slides, settings, extensions }) => {
  const container = p();
  const style = p();
  const page = p(1);

  const currentSettings = p(
    Object.fromEntries(
      Object.entries(settings).map(([item, value]) => [item, value.default])
    )
  );

  // done: fix flash of unstyled content

  const styled = p(false);
  const scrolled = p(false);

  // scroll position
  const scroll = p(
    Object.fromEntries(
      Array.from({ length: slides.length }, (_, i) => [i + 1, 0])
    )
  );

  const range = (min, max) => ({
    includes(num) {
      return num >= min && num <= max;
    },
  });

  const actions = {
    navigate(index) {
      if (range(1, slides.length).includes(index)) {
        // save the scroll position of current page
        scroll(page(), container().scrollTop);

        // navigate to the page given
        page(index);

        // yet to be scrolled
        scrolled(false);
      }
    },
    next() {
      actions.navigate(page() + 1);
    },
    prev() {
      actions.navigate(page() - 1);
    },
    setTheme(theme) {
      style().textContent = theme;
    },
  };

  // listen to keyboard events
  e(() => {
    listen({
      j: actions.next,
      k: actions.prev,
    });
  });

  // restore scroll position of the current page
  e(() => {
    container().scrollTop = scroll()[page()];
    scrolled(true);
  }, [page]);

  // apply current settings
  e(() => {
    // todo: apply not only themes
    // const _ =
    //   settings.theme.options[currentSettings().theme] +
    //   settings.codeTheme.options[currentSettings().codeTheme];

    // todo: test flair library

    actions.setTheme(flair({ stylesheet, theme, glossary }));

    styled(true);
  }, [currentSettings]);

  return h(
    h("style", { ref: style }),
    h("style", ".pre.loading * {visibility: hidden}"),
    h("div", {
      html: slides[page() - 1],
      class: ["pre", !(styled() && scrolled()) && "loading"],
      ref: container,
    })
  );
};

const app = () => h(pre, data);

r(app, document.body);
