## Title/ Canvas完全指南 #flight.Archives006
> 序: 加油啊! 学习Web前端的xdm!  
> 
> 简介: 哦, 你能用到的Canvas操作, 在这里都是基本操作.

### Tag/ Canvas介绍
```html
<canvas id="myCanvas"></canvas>
```
`<canvas>` 是HTML元素之一, 可以使用JavaScript进行绘制
```javascript
canvas = document.getElementById('myCanvas');
context = canvas.getContext('2d'); //如果要绘制3d图像, 使用canvas.getContext('webgl'), 本章不介绍
```
`getContext('2d')` 方法会返回一个 `CanvasRenderingContext2D` 对象, 我们可以使用这个对象的方法进行绘制!

### Tag/ context 方法 
#### 绘制矩形
1. `clearRect(x, y, width, height)`  
   将矩形范围内的像素变成透明
   
   `x`: 矩形的横坐标  
   `y`: 矩形的纵坐标  
   `width`: 矩形的宽  
   `height`: 矩形的高  
   

2. `fillRect(x, y, width, height)`  
   填充矩形范围内的像素, 填充方式由 `fillStyle` 属性决定
   
   `x`: 矩形的横坐标  
   `y`: 矩形的纵坐标  
   `width`: 矩形的宽  
   `height`: 矩形的高  
   

3. `strokeRect(x, y, width, height)`  
   对指定矩形进行描边, 描边方式由 `strokeStyle` 属性决定
   
   `x`: 矩形的横坐标  
   `y`: 矩形的纵坐标  
   `width`: 矩形的宽  
   `height`: 矩形的高  
   
#### 绘制文本
1. `fillText(text, x, y, [maxWidth])`  
   填充文本, 填充方式由 `fillStyle` 决定,样式由 `font`, `textAlign`, `textBaseline` 和 `direction` 属性决定
   
   `text`: 指定填充的文本  
   `x`: 文本的横坐标  
   `y`: 文本的纵坐标  
   `maxWidth`(可选): 如果超出长度则水平缩放字体  
   
2. `strokeText(text, x, y [maxWidth])`  
   对文本进行描边, 描边方式由 `strokeStyle` 决定, 样式由 `font`, `textAlign`, `textBaseline` 和 `direction` 属性决定
   
   `text`: 指定描边的文本  
   `x`: 文本的横坐标  
   `y`: 文本的纵坐标  
   `maxWidth`(可选): 如果超出长度则水平缩放字体  
   
3. `measureText(text)`  
   测量文本, 返回一个 `TextMetrics`(todo: link) 对象

   `text`: 要测量的文本

#### 创建路径


#### 绘制路径

#### 绘制图像

#### 图像变换

#### 像素控制

#### 创建渐变和图案

#### 绘图状态切换

#### 获取当前样式

### Tag/ context 属性
#### 线型样式

#### 填充和描边样式

#### 文本样式

#### 阴影样式

#### 合成方式

#### 图像平滑处理



### ->> Details
#### -

<!--
### ->> flight.frontendBeautiful
> 待添加

### ->> flight.Player
> 待添加

### ->> flight.QuickDemo
> 待添加
-->

### ->> See also
> CanvasApi中文网(by 张鑫旭) https://www.canvasapi.cn/

### ->> Reference link
> MDN中文文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
>
> MDN 英文文档 https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
>
> CSS-Tricks https://css-tricks.com/tag/canvas/
>
> 廖雪峰 https://www.liaoxuefeng.com/wiki/1022910821149312/1023022423592576

### ->> Version History
> 现在版本为V1.0
> 详见 Github(@flightmakers/flight.Archives)
>
> 2021.8.16 发布V1.0