## voyage.js, the web framework

see voyage.js and changelog.md for more info.

### version 1.x

(pasted from voyage1.0)

voyage framework: a sweeter preact

this version is developed during 20250814 ~ 20250817 (utc+8)

features

- core functions: h (html), p (props), e (effect), r (render)
  - h:
    - more freedom of params
    - @${event}
    - utilities (special props)
    - style obj with kebeb case
    - class/classname in both array and object
  - p:
    - prop() -> get the lastest value
    - prop(value) -> set value
    - store support like solidjs
- utilities: bind, html, show.

### version 0.x

the web framework that fira loves

only essential methods included

- component
  - prop (i.e. state)
  - effect
- utilities
  - show (i.e. v-if)
  - each (i.e. v-for)
- styling
