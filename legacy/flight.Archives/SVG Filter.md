## Title/ SVG Filter 详细指南 #flight.Archives005
> 序 :  
> 最近看到Anyway的年度总结很秀啊!  
> 不研(mo)究(yu)一下这个 `SVG Filter` 我肯定是坐不住了!  
> 秉承着不让大家裤子都脱了, 就给看这个, 我一定先上图... 考虑到傲娇的gif太刺眼,直接给链接吧!  
> 请狠狠地点这里! ->> https://anyway.fm/2018/ or https://anyway.fm/2019/ 注意可能要`onmousemove`才行!   
> 
> 简介 :   
> 看东西:  
> <img style="width: 50%; " src="https://img2020.cnblogs.com/blog/2451762/202108/2451762-20210815114953849-456870300.png" alt="Anyway2019"><img style="width: 50%;" src="https://img2020.cnblogs.com/blog/2451762/202108/2451762-20210815115950772-1611498342.png" alt="Anyway2018">
> 这个SVG是会动的!!!  
> (当然关于这几个属性我觉得应该是JS在控制了,毕竟Animation只能设置Style)
> ![](https://img2020.cnblogs.com/blog/2451762/202108/2451762-20210815115219809-773138141.png)  
> 
> 让这几个SVG炫来炫去,关键就是这个 `filter`标签 了!  
> ![](https://img2020.cnblogs.com/blog/2451762/202108/2451762-20210815120952349-916699221.png)
> 而这个SVG Filter相当的奇妙, 连MDN都"待定", 所以只好我自己写一篇了!...

### Tag/ SVG Filter介绍
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
    <defs>
        <filter id="filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.1800887671017414 0.00026862418311374516" numOctaves="1" result="warp" seed="145"></feTurbulence>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="123" in="SourceGraphic" in2="warp"></feDisplacementMap>
        </filter>
    </defs>
    <g filter="url(#filter)">
        <image class="distort__img" x="0" y="0" xlink:href="https://s.anw.red/anyway.fm/2018-summary.png" height="2000" width="2000"></image>
    </g>
</svg>
```
上面是我从Anyway搬下来的代码, `defs` 里定义了一个 `filter` 标签, 然后就可以用 `filter="url(#filter)"` 直接引用了.  

当然不用 `defs` 也是阔以的, 比如MDN就给了一个Demo:  
```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
 <filter id="blurMe">
   <feGaussianBlur stdDeviation="5"/>
 </filter>
 <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

接下来将介绍 `<filter>` 的各个滤镜使用方法. 

### Tag/ `<filter>` 标签
#### `<filter>`标签 - `<feBlend>`滤镜
属性 | 可取值 | 作用
--- | --- | ---
`mode` | `normal`, `multiply`, `screen`, `darken`, `lighten` | 

`<feColorMatrix>` |  |
`<feComponentTransfer>` |  |
`<feComposite>` |  |
`<feConvolveMatrix>` |  |
`<feDiffuseLighting>` |  |
`<feDisplacementMap>` |  |
`<feDropShadow>` |  |
`<feFlood>` |  |
`<feGaussianBlur>` |  |
`<feImage>` |  |
`<feMerge>` |  |
`<feMorphology>` |  |
`<feOffset>` |  |
`<feSpecularLighting>` |  |
`<feTile>` |  |
`<feTurbulence>` |  |

### ->> Details
#### -

<!--
### ->> flight.frontendBeautiful
> 待添加

### ->> flight.Player
> 待添加

### ->> Demos
> 待添加

### ->> See also
> 待添加
-->

### ->> Reference link
> MDN中文文档 https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter
>
> MDN 英文文档 https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter 
>
> W3.org https://www.w3.org/TR/SVG11/filters.html

### ->> Version History
> 现在版本为V1.0, 接下来应该要扩展为SVG完整教程
> 详见 Github(@flightmakers)
>
> 2021.8.15 发布V1.0