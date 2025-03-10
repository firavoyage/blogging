## voyage.js

### features

wd

### usage

wd

### status

wip

### motivation

20250214 before dawn

之前写的文字比较多, 删了, 总结在下面.

> 没有完美的框架. 或许每个前端都想写一个框架...
>
> 不妨写一个 fira 最喜欢的, 名之 voyagejs.

首先, 组件化.

每一个组件都有 states...

```
const {state} = ref({state:value})
```

返回一个 proxy, 有 prop value (alias v).

取值是直接获取.

state 变化, 就要进行处理.

voyagejs 要自由, 没有任何限制, 所以可以直接处理.

```
bind(state, updater)
```

前者是 state, 后者是一个函数, 自定义变化后行为.

```
updater(newValue, oldValue, node)
```

对, 直接手动处理, 比如更新 ui...

有些常见的场景: 

比如直接更新整个组件, 不进行 diff, 然后替换上去.

```
store({state:value})
```

太常见了, 不妨起名 store, 然后和 ref 一样, 只不过默认绑定了一个 updater,

就是渲染组件 & 替换.

像 ref 默认是没有任何操作的, 就是不进行处理.

还可以绑定某个 element 的 prop.

然后跨组件同步 state?

直接 pointer. (还是自己直接操作.)

```
pointer(state, ...path)
```

(如果 state 是个 obj, 改里面某个值, 用 path.)

(在看 react reference, learn 好几个月前看过了喵, 不过就前面几章专心看了)

react 有些厉害的优化, 比如 init fn 给 use state.

voyagejs 更直接, 可以直接获取当前状态.

```
status()
```

得到组件的状态 (intial, rerender, creating ...)

(在看 vue tutorial)

(为什么没有 react quick start 一样的! 就教我安装, 一点也不全)

> Welcome to the React documentation! This page will give you an introduction to 80% of the React concepts that you will use on a daily basis.

vue 有 :class

voyagejs 更直接, {class:state}

state 其实是一个 proxy, 但是所有普通的 label 都是字符串.

所以如果创建元素的时候, 用了一个 state, 就是和这个 state 绑定啦!

(如果用了 state.value, 或者 alias state.v 就不会绑定.)

至于什么常见的场景, 比如绑定一个 input.value

最直接的, 就是 eventlistener + set state.value

不过 voyagejs 也有 macro. ({@value:state})

(好像叫这个名字吧)

v-if, v-else 还是太笨了, 不要.

(不如一个 state + 一个三元操作符)

v-for 同理, 这些应该是 js 的工作, 不要框架做

(就是 for of + voyage.lib.each 或者 map)

vue 有 ref, voyagejs 有 $

(这个是一模一样的, 换个名字)

vue 的 key & computed 是 voyagejs 要做的事情.

> Notice how we are also giving each todo object a unique id, and binding it as the special key attribute for each <li>. The key allows Vue to accurately move each <li> to match the position of its corresponding object in the array.

(现在只能自己写 updater, 很麻烦, 交给 voyage 就很简单)

上面说 key, computed 不想要.

不如取地址, 直观. react 也没有 computed 的说法.

说白了还是改 original state, 不管你计算出了啥, 只看原来的有没有被修改.

(套了一个 v-for 给 f 整不明白了.)

其实还是要做 computed, voyagejs 取名 calculation, 好像还不好.

```
key

computed
```

就是绑定一个 label, 要根据 dependency 计算一下的那种. (简单的场景)

onMounted 好像就是 useEffect. 问一下 ai 有什么实际用途.

- data fetching
- dom manipulation
- init libraries
- add ev listener

不过其实没关系, 创建组件时候的 value change 会被自动推迟.

不过还是要给 api 啦! (比如获取组件在屏幕上的位置 offsetw)

就直白一点,

```
getStatus

when(...)
```

一个是获取组件当前状态 (是不是第一次渲染), 另一个是听取状态变化.

vue tut chapter 11 才出现 child comp 吗?

或许是 sfc 入脑了吧, react 和 voyage 都是 fn component 的.

然后 child component 的 prop 也可以是 state

```
feat: check if component prop is state, then bind updateComponent(cid) to it
feat: check if element.content string is state, then bind @text to it
```

之前只 check 了 element, 现在得更多. 改变的话, 就重新渲染 child component.

react 是 one-way 的 prop, vue 是双向的.

这个 voyagejs 就直接取地址了, 虽然其实也是先向下, 再听回声 (改 prop).

感觉 slot 很无聊, 不要.

(什么? chapter 15 of 15? congrats?)

(js-confetti 挺有意思啊)

> Standalone Script​
> 
> Vue can be used as a standalone script file - no build step required! If you have a backend framework already rendering most of the HTML, or your frontend logic isn't complex enough to justify a build step, this is the easiest way to integrate Vue into your stack. You can think of Vue as a more declarative replacement of jQuery in such cases.
> 
> Vue also provides an alternative distribution called petite-vue that is specifically optimized for progressively enhancing existing HTML. It has a smaller feature set, but is extremely lightweight and uses an implementation that is more efficient in no-build-step scenarios.

(看了眼这个)

可能也是 voyage 的主要用法.
