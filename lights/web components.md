### Why I don't use web components

For my first post on dev.to I thought I'd write about a nice, safe topic that's free of controversy: web components.

I'm mostly writing this for my future self, so that I have something to point to next time someone asks why I'm a web component skeptic, and why [Svelte](https://svelte.dev/) doesn't compile to custom elements by default. (It *can* compile to CEs, and it can consume CEs as evidenced by its perfect score on [Custom Elements Everywhere](https://custom-elements-everywhere.com/).)

None of this should be taken as criticism of the hard work that has been done on web components. It's possible that I have made some errors in this post, in which case I'd welcome corrections.

Nor am I saying that you shouldn't use web components. They *do* have valid use cases. I'm just explaining why *I* don't.

#### 1. Progressive enhancement

This may be an increasingly old-fashioned view, but I think that websites should work without JavaScript wherever possible. Web components don't.

That's fine for things that are intrinsically interactive, like a custom form element (`<cool-datepicker>`), but it's not fine for your nav bar. Or consider a simple `<twitter-share>` element that encapsulates all the logic for constructing a [Twitter web intent](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent.html) URL. I could [build it in Svelte](https://svelte.dev/repl/98aa20d4cb3d40dabfef7d8dae183b85?version=3.5.2) and it would generate server-rendered HTML like this:

```html
<a target="_blank" noreferrer href="..." class="svelte-1jnfxx"> Tweet this </a>
```

In other words, a bog-standard `<a>` element, in all its accessible glory.

With JavaScript enabled, it progressively enhances --- rather than opening a new tab, it opens a small popup window instead. But without, it still works fine.

By contrast, the web component HTML would look something like this...

```
<twitter-share text="..." url="..." via="..."/>
```

...which is useless and inaccessible, if JS is disabled or somehow broken, or the user is on an older browser.

The `class="svelte-1jnfxx"` is what enables encapsulated styles without Shadow DOM. Which brings me onto my next point:

#### 2. CSS in, err... JS

If you want to use Shadow DOM for style encapsulation, you have to include your CSS in a `<style>` element. The only practical way to do so, at least if you want to avoid FOUC, is to have the CSS in a string in the JavaScript module that defines the custom element.

This runs counter to the performance advice we've been given, which can be summarised as 'less JavaScript, please'. The CSS-in-JS community in particular has been criticised for not putting CSS in `.css` files, and yet here we are.

In future, we may be able to use [CSS Modules](https://github.com/w3c/webcomponents/issues/759) alongside [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) to solve this problem. And we may be able to use `::theme` and `::part` to style things inside Shadow DOM. But these aren't free of problems either.

#### 3. Platform fatigue

> Rich Harris
>
> @rich_harris
>
> [@calebwilliams12](https://twitter.com/calebwilliams12) This is a pet peeve of mine though --- we've been touting this stuff as The Future for years, but in order to catch up with _the present_ we need to stuff the platform to the gills with all these new features, deepening the moat around existing browsers
>
> 17:55 PM - 19 Jun 2019

At the time of writing, there are 61,000 open issues on [https://crbug.com](https://crbug.com/), the Chromium bug tracker, which reflects the enormous complexity of building a modern web browser.

Every time we add a new feature to the platform, we increase that complexity --- creating new surface area for bugs, and making it less and less likely that a new competitor to Chromium could ever emerge.

It also creates complexity for developers, who are encouraged to learn these new features (some of which, like HTML Imports or the original Custom Elements spec, never catch on outside Google and end up being removed again.)

#### 4. Polyfills

It doesn't help that you need to use polyfills if you want to support all browsers. It *really* doesn't help that the literature on [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets), written by a Googler (hi Jason!), doesn't mention that they're a Chrome-only feature (_edit: this has been fixed after I opened a [pull request](https://github.com/google/WebFundamentals/pull/8212)_). The [three spec editors](https://wicg.github.io/construct-stylesheets/) are all Googlers. Webkit [seem to have some doubts](https://github.com/mozilla/standards-positions/issues/103#issuecomment-494181931) about some aspects of the design.

#### 5. Composition

It's useful for a component to be able to control when (or whether) its slotted content is rendered. Suppose we wanted to use the [`<html-include>` element](https://github.com/justinfagnani/html-include-element) to show some documentation from the network when it became visible:

```html
<p>Toggle the section for more info:</p>
<toggled-section>
  <html-include src="./more-info.html" />
</toggled-section>
```

Surprise! Even though you didn't toggle the section open yet, the browser already requested `more-info.html`, along with whatever images and other resources it links to.

That's because slotted content renders *eagerly* in custom elements. It turns out that most of the time you want slotted content to render *lazily*. Svelte v2 adopted the eager model in order to align with web standards, and it turned out to be a major source of frustration --- we couldn't create an equivalent to React Router, for example. In Svelte v3 we abandoned the custom element composition model and never looked back.

Unfortunately this is just a fundamental characteristic of the DOM. Which brings us to...

#### 6. Confusion between props and attributes

Props and attributes are basically the same thing, right?

```js
const button = document.createElement("button");

button.hasAttribute("disabled"); // false
button.disabled = true;
button.hasAttribute("disabled"); // true

button.removeAttribute("disabled");
button.disabled; // false
```

I mean, almost:

```js
typeof button.disabled; // 'boolean'
typeof button.getAttribute("disabled"); // 'object'

button.disabled = true;
typeof button.getAttribute("disabled"); // 'string'
```

And then there are the names that don't match...

```js
div = document.createElement("div");

div.setAttribute("class", "one");
div.className; // 'one'

div.className = "two";
div.getAttribute("class"); // 'two'
```

...and the ones that just don't seem to correspond at all:

```js
input = document.createElement("input");

input.getAttribute("value"); // null
input.value = "one";
input.getAttribute("value"); // null

input.setAttribute("value", "two");
input.value; // 'one'
```

But we can live with those quirks, because *of course* some things will be lost in translation between a string format (HTML) and the DOM. There's a finite number of them, and they're documented, so at least you can learn about them given enough time and patience.

Web components change that. Not only are there no longer any guarantees about the relationship between attributes and props, but as a web component author, you're (presumably?) supposed to support both. Which means you see this sort of thing:

```js
class MyThing extends HTMLElement {
  static get observedAttributes() {
    return ["foo", "bar", "baz"];
  }

  get foo() {
    return this.getAttribute("foo");
  }

  set foo(value) {
    this.setAttribute("foo", value);
  }

  get bar() {
    return this.getAttribute("bar");
  }

  set bar(value) {
    this.setAttribute("bar", value);
  }

  get baz() {
    return this.hasAttribute("baz");
  }

  set baz(value) {
    if (value) {
      this.setAttribute("baz", "");
    } else {
      this.removeAttribute("baz");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "foo") {
      // ...
    }

    if (name === "bar") {
      // ...
    }

    if (name === "baz") {
      // ...
    }
  }
}
```

Sometimes you see things go the other way --- `attributeChangedCallback` invoking the property accessors instead. Either way, the ergonomics are disastrous.

Frameworks, by contrast, have a simple and unambiguous way to pass data into a component.

#### 7. Leaky design

This point is a bit more nebulous, but it weirds me out that `attributeChangedCallback` is just a method on the element instance. You can literally do this:

```
const element = document.querySelector('my-thing');
element.attributeChangedCallback('w', 't', 'f');
```

No attribute changed, but it will behave as though it did. Of course, JavaScript has always provided plenty of opportunities for mischief, but when I see implementation details poke through like that I always feel as though they're trying to tell us that the design isn't quite right.

#### 8. The DOM is bad

Ok, we've already established that the DOM is bad. But it's hard to overstate what an awkward interface it is for building interactive applications.

A couple of months back, I wrote an article called [Write less code](https://svelte.dev/blog/write-less-code), intended to illustrate how Svelte allows you to build components more efficiently than frameworks like React and Vue. But I didn't compare it against the DOM. I should have.

To recap, here's a simple `<Adder a={1} b={2}/>` component:

```html
<script>
  export let a;
  export let b;
</script>

<input type="number" bind:value="{a}" />
<input type="number" bind:value="{b}" />

<p>{a} + {b} = {a + b}</p>
```

That's the whole thing. Now, let's build the same thing as a web component:

```js
class Adder extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <input type="number">
      <input type="number">
      <p></p>
    `;

    this.inputs = this.shadowRoot.querySelectorAll("input");
    this.p = this.shadowRoot.querySelector("p");

    this.update();

    this.inputs[0].addEventListener("input", (e) => {
      this.a = +e.target.value;
    });

    this.inputs[1].addEventListener("input", (e) => {
      this.b = +e.target.value;
    });
  }

  static get observedAttributes() {
    return ["a", "b"];
  }

  get a() {
    return +this.getAttribute("a");
  }

  set a(value) {
    this.setAttribute("a", value);
  }

  get b() {
    return +this.getAttribute("b");
  }

  set b(value) {
    this.setAttribute("b", value);
  }

  attributeChangedCallback() {
    this.update();
  }

  update() {
    this.inputs[0].value = this.a;
    this.inputs[1].value = this.b;

    this.p.textContent = `${this.a} + ${this.b} = ${this.a + this.b}`;
  }
}

customElements.define("my-adder", Adder);
```

Yeah.

Note also that if you change `a` and `b` in the same instant, it will result in two separate updates. Frameworks don't generally suffer from this issue.

#### 9. Global namespace

We don't need to dwell on this one too much; suffice it to say that the dangers of having a single shared namespace have been well understood for some time.

#### 10. These are all solved problems

The biggest frustration of all is that we already have really good component models. We're still learning, but the basic problem --- keep the view in sync with some state by manipulating the DOM in a component-oriented fashion --- has been solved for years.

Yet we're adding new features to the platform just to bring web components to *parity* with what we can already do in userland.

Given finite resources, time spent on one task means time not spent on another task. Considerable energy has been expended on web components despite a largely indifferent developer population. What could the web have achieved if that energy had been spent elsewhere?
