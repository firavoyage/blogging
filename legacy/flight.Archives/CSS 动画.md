## Title/ CSS 动画完全指南 #flight.Archives008
> 序: 持续日更第8天! 加油吧,学习前端的xdm. 我是 `忘我思考`, 共同进步!
>
> 简介: 一篇最简洁高效的CSS 动画教程, 包括Transition和Animation属性的完整使用方法.

### Tag/ Transition介绍
CSS有个属性叫 `transition`, 中文翻译过来就是 "过渡".

`transition` 可以让元素指定的某些属性变化的时候以柔和的方式过渡. 
```css
element {
    transition: background-color 1s, font-size 2s ease-in, margin-left 1s 2s;
}
```
这段代码中 element 的背景颜色,字体大小和左边距属性变化的时候, 都会有柔和的过渡.

其中 `background-color` 的过渡动画时长一秒,   
`font-size` 的过渡动画时长两秒, 并且有"缓入"的效果,   
`margin-left` 的时长一秒, 并且会有两秒的延时.

### Tag/ Transition相关属性
1. `transition`
   
   指定元素的过渡方式.

   可取值:
   ```
   transition: background-color 2s; /* 元素名 时长 */
   transition: margin-left 2s 1s; /* 元素名 时长 延时 */
   transition: margin-left 2s ease-in-out; /* 元素名 时长 过渡函数 */
   transition: margin-left 2s ease-in-out 1s; /* 元素名 时长 过渡函数 延时 */
   transition: margin-left 2s, color 1s; /* transition 支持同时定义多个属性 */
   transition: all 1s ease-out; /* 元素名中 all 关键字可以代表所有属性, none 关键字可以代表无属性 */
   transition: all 1s ease-out; /* 过渡函数中 all 关键字可以代表所有属性, none 关键字可以代表无属性 */
   transition: margin-left 2s cubic-bezier(0.4, 0, 1, 1); /* 过渡函数可以是关键字, 也可以使用cubic-bezier()函数 */
   transition: margin-left 2s steps(4, end); /* 过渡函数也可以使用steps()函数 */
   ```

   关于 `<timing-function>`(过渡函数) 的具体介绍, 参见 https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function 和 https://css-tricks.com/almanac/properties/t/transition-timing-function/

   关于 `cubic-bezier()` 函数的具体介绍, 参见 https://www.w3schools.com/cssref/func_cubic-bezier.asp
   
   交互式体验 `cubic-bezier` 函数, 前往 https://cubic-bezier.com/
   
2. `transition-duration`
   
   指定过渡时长, 和在 `transition` 中用法相同.

3. `transition-timing-function`

   指定过渡函数, 和在 `transition` 中用法相同.

4. `transition-delay`

   指定过渡延时, 和在 `transition` 中用法相同.

5. `transition-property`

   指定元素名, 和在 `transition` 中用法相同.

### Tag/ Animation介绍
todo

### Tag/ Animation相关属性

<!--
### ->> Details
#### - 

### ->> flight.frontendBeautiful
> 待添加

### ->> flight.Player
> 待添加

### ->> flight.Playground
> 待添加

### ->> flight.QuickDemo
> 待添加
-->

### ->> See also
> MDN - `<easing-function>` https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
> 
> MDN - Using CSS Transitions https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

### ->> Reference link
> #### Transition:
> 
> MDN中文文档  https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions
>
> MDN英文文档 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
> 
> W3Schools https://www.w3schools.com/css/css3_transitions.asp
> 
> Josh Comeau https://www.joshwcomeau.com/animation/css-transitions/
>
> Sara Cope https://css-tricks.com/almanac/properties/t/transition/
> 
> #### Animation:
> 
> MDN中文文档 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
> 
> MDN英文文档 https://developer.mozilla.org/en-US/docs/Web/CSS/animation
> 
> W3Schools https://www.w3schools.com/css/css3_animations.asp
> 
> Chris Coyier https://css-tricks.com/almanac/properties/a/animation/

### ->> Version History
> 现在版本为V1.0 下一版预计添加flight.Anything&将transition每个属性分开写 而不是聚集在一个transition中
> 详见 Github(@flightmakers)
>
> 2021.8.18 在掘金发布V0.1