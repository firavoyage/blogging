# 编写 2048 小游戏

Posted by wyj on February 25, 2020 / Edited on March 20, 2021

今天是没有训练的，所以昨天晚上和今天上午除了以撒之外，一直在写这个 2048。

我曾经写过一个控制台版本，是在我初中的最后几天。那天上午的训练题我全都不会做，就无聊地写了一个 2048 自己玩。我那时还是一个 Windows 用户，所以使用的全是 Windows 的 API 以及`conio.h`（现在我学了`ncurses`，但是一样很垃圾）。当时我曾经把它放进过[MyProg](https://github.com/2o181o28/MyProg)，然而那时我不是 linux 用户也不会用`git`，所以高一时由于 U 盘坏了就丢失了。

我的计划是按照两年前的逻辑写模拟部分，UI 就参考[原版 2048](https://play2048.co/)，这样最不用动脑子。

# 模拟部分[](https://2o181o28.github.io/2020/02/25/2048/#%E6%A8%A1%E6%8B%9F%E9%83%A8%E5%88%86)

由于我已经很久没有写题了，熟练度为 0，模拟的逻辑写错了好几次。为了好写，我不可能把四个方向的移动各写一遍，而是先旋转到一个统一的方向，合并，然后再旋转回去。我两年前就是这么写的。说起来简单，其实细节挺多，首先是判断有没有死局，第二是循环上界的问题，有的地方循环到 3 就溢出了，有的地方循环到 2 又不够（我是从 0 到 3 编号的）。

# UI 部分[](https://2o181o28.github.io/2020/02/25/2048/#ui%E9%83%A8%E5%88%86)

用一个居中`<div>`框住所有的游戏部件，左上角有一个`<p>`,`<p>`里面有`<span>`是成绩，右上角有一个`<button>`用来重开。下面有一个`<div>`里面放着$4×4$的格子`<canvas>`，使用`margin-top`与上方控件保持距离。

这个 UI 不全是 CSS，因为格子我用了`<canvas>`画。因为`canvas`实在是太符合我的使用习惯了，从 Free Pascal 的`graph`单元，Lazarus 的`TGraph`类，到`windows.h`里面的`wingdi`，再到 Qt 的`QPainter`，都是同一套函数，可以用`bash`的展开标记为`{Set,Fill,Draw..}{Rect,Pixel,Text..}`，`canvas`也很类似。

#### 4x4 的格子[](https://2o181o28.github.io/2020/02/25/2048/#4x4%E7%9A%84%E6%A0%BC%E5%AD%90)

我觉得$450=(4+1)×10+4×100$是一个不错的排布，都是整数，就把`<canvas>`画成了$450×450$。

唯一我不太清楚的是如何得到字体的高度(宽度是`width`)，用 Chrome 看了一下`ctx.measureText()`的成员，找到了一个`actualBoundingBoxAscent`，貌似是高度，我就试着把它当成高度用，貌似也没有问题。为什么不叫`height`呢？不懂这套命名逻辑。还有一个有趣的问题是指定字体格式的字符串里，`bold`必须加在`??px`的前面，不能调换位置。最后我用的字体是`bold arial`，这个貌似和原版最像。

框架已经完全摆好了，就差颜色了。我打算直接使用原版的颜色。然而我没听说过什么可以直接取屏幕像素点 rgb 值的方法。曾经在 windows 下我造过这个轮子，再造一个太烦了，不值得。

于是按照老套路，先找到我那几张从$2$一直到$16384$都有的截图，`convert`成 ppm，写一个 c++程序支持输入坐标输出该点颜色。大概是这样的：

```cpp
#include<bits/stdc++.h>
using namespace std;
using ll=long long;
int m,n,x,y;
unsigned char c[2010][2010][3];
int main(){
	auto F=fopen("1.ppm","rb");
	fscanf(F,"P6\n%d %d\n255\n",&m,&n);
	for(int i=0;i<n;i++)
		for(int j=0;j<m;j++)
			fread(c[i]+j,1,3,F);
	while(~scanf("%d%d",&x,&y))
		printf("#%02x%02x%02x\n",c[x][y][0],c[x][y][1],c[x][y][2]);
	return 0;
}
```

Copy

再开一个`KolourPaint`支持读取鼠标的坐标，把读到的坐标输入到程序里得出 rgb，最后用`gedit`的”颜色拾取器”插件检验成果。

Update 2020-05-23：完全不用这么麻烦，今天看了[baby WOGUE 的视频](https://www.youtube.com/watch?v=PyjmfrFUZ_4)，**我才发现 Gtk3 自带屏幕颜色拾取器**。使用方法：先启用 gedit 的”颜色拾取器”插件，再在 gedit 的“工具”菜单里选择”Pick Color…“一项。点击左下角的加号，会出来一个新的窗口，再在新窗口里点左上角的注射器符号，点击屏幕上你想拾取颜色的位置。就可以获得颜色的 RGB 了。

#### 上方文字[](https://2o181o28.github.io/2020/02/25/2048/#%E4%B8%8A%E6%96%B9%E6%96%87%E5%AD%97)

不得不说 html 默认的按钮样式真丑，一点也不扁平化。我把边框去掉了，改了下字体和大小，才勉强变得可看了一点。

我试验了很久才搞懂如何让一个`button`和一个`p`左右并排显示，原来一个设成`float:left`一个设成`float:right`就行了，亏我还学了半天的绝对定位相对定位。

# 一些杂碎的问题[](https://2o181o28.github.io/2020/02/25/2048/#%E4%B8%80%E4%BA%9B%E6%9D%82%E7%A2%8E%E7%9A%84%E9%97%AE%E9%A2%98)

关于出$2$/出$4$的概率，我随手定了一个 80%出$2$。这个只是遵循我两年前的传统，没有什么理由。

我打算让网页加载时自动滚动到游戏部分，隐藏标题栏，在[这里](https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript)找到了解决方案。

原计划是在游戏结束时`alert`一个窗口，然后自动重开的，然而一是`alert`出的窗口太丑了，二是不知道为什么`alert`出窗口时我对 html 的修改尚未执行，肯定又是 js 假多线程的锅。于是我改变了计划，改成了在左上角显示`Game over`，冻结游戏界面直到重开，这个逻辑是和原版一样的。

然而又遇到了新问题，我不会在不影响子节点的前提下改变一个节点的文本。在[这里](https://segmentfault.com/q/1010000006059816)我找到了简单粗暴的解决方案：先用临时变量保存下来它的子节点，然后把它删了重建一个节点。虽然粗暴了点，但是总归比把子节点硬编码在 js 里然后每次都重写一遍子节点内容好多了。

用上下左右控制时网页会乱动，用[这里](https://www.zhihu.com/question/21971199)的方案解决了。

<span class="MathJax" id="MathJax-Element-9-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot; display=&quot;block&quot;><mstyle mathsize=&quot;1.44em&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mtext>&amp;#x66F4;&amp;#x65B0;&amp;#x7684;&amp;#x5206;&amp;#x5272;&amp;#x7EBF;</mtext></mrow></mrow></mstyle></math>" role="presentation" style="box-sizing: border-box; display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 16px; text-indent: 0px; text-align: center; text-transform: none; letter-spacing: normal; word-spacing: normal; overflow-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;"><nobr aria-hidden="true" style="box-sizing: border-box; transition: none 0s ease 0s; border: 0px; padding: 0px; margin: 0px; max-width: none; max-height: none; min-width: 0px; min-height: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; white-space: nowrap !important;"><span class="math" id="MathJax-Span-41" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline-block; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; width: 8.648em;"><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline-block; position: relative; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; width: 7.19em; height: 0px; font-size: 19.2px;"><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: absolute; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; clip: rect(1.461em, 1007.19em, 3.232em, -999.997em); top: -2.758em; left: 0em;"><span class="mrow" id="MathJax-Span-42" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="mstyle" id="MathJax-Span-43" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="mrow" id="MathJax-Span-44" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="texatom" id="MathJax-Span-45" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="mrow" id="MathJax-Span-46" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="texatom" id="MathJax-Span-47" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="mrow" id="MathJax-Span-48" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><span class="mtext" id="MathJax-Span-49" style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-size: 27.648px;"><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">更</span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">新</span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">的</span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">分</span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">割</span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; font-family: STIXGeneral, &quot;Arial Unicode MS&quot;, serif; font-size: 22.9478px; font-style: normal; font-weight: normal;">线</span></span></span></span></span></span></span></span></span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline-block; position: static; border: 0px; padding: 0px; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none; width: 0px; height: 2.763em;"></span></span></span><span style="box-sizing: content-box; transition: none 0s ease 0s; display: inline-block; position: static; border-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: solid; border-color: initial; border-image: initial; padding: 0px; margin: 0px; vertical-align: -0.434em; line-height: normal; text-decoration: none; overflow: hidden; width: 0px; height: 1.878em;"></span></span></nobr><span class="MJX_Assistive_MathML MJX_Assistive_MathML_Block" role="presentation" style="box-sizing: content-box; top: 0px; left: 0px; clip: rect(1px, 1px, 1px, 1px); user-select: none; position: static; padding: 0px; border: 0px; height: 1px !important; width: 138.367px; overflow: hidden !important; display: inline; transition: none 0s ease 0s; margin: 0px; vertical-align: 0px; line-height: normal; text-decoration: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mstyle mathsize="1.44em"><mrow class="MJX-TeXAtom-ORD"><mrow class="MJX-TeXAtom-ORD"><mtext>更新的分割线</mtext></mrow></mrow></mstyle></math></span></span>

---

# 更新：动画效果[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C)

我两年前写的控制台版本和此网站上的初始版本有一个共同的缺陷：没有动画。我曾经装过`gnome-2048`，这个版本只有新数字和合并结果的强调效果，没有数字移动的动画，我也不太习惯。这样我经常不能觉察到数字的移动与新数字的出现，从而会操作失误，并且显示也很不自然。于是晚上我打算添加动画效果。

我在网上搜了一圈`canvas`怎么做动画。大多数的搜索结果都是使用`requestAnimationFrame`，我首先使用这个写了一份，效果很失败。因为这个函数是异步的，除非全部包在`Promise`里，我是没有办法在主循环里等待它返回的，而全部使用`Promise`让代码过于冗长。而且通过递归来完成一个循环就能做到的事，我觉得是真的丑。

于是我使用了传统方法，把`setTimeout`包在`Promise`里用来模仿其他语言中`sleep`的行为。然后加上一些`async`和`await`就可以完成任务。

首先是移动，我们要额外开一个数组记录每一个位置的终点，并且在旋转和合并的时候维护它，绘制时就线性地移动。然后是强调合并数字，再开一个数组记录哪些格子是合并的结果，绘制时只要把格子先放大几像素再缩小回去就行了。至于强调新数字，由于这个和移动后绘制是不能同时完成的，实际操作时会有些卡，我就没加。现在已经随着 Bug 修复一起加上了。

说起来简单，实际上这个是要加上几百行代码才能完整实现的功能。

# 更新：本地存储[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8)

原版的记忆功能是真的好评，而且**可以多开**从而起到“可持久化”的功效，这比撤销操作 nb 多了。我搜了一下，这个比较简单，只要使用`localStorage`即可。有一个奇怪的限制是这个对象里面只能放字符串，连数字都不行，不知道为什么。所以把数据放进去之前需要`JSON.stringify`，提取时用`JSON.parse`。

另外今天又去搜索了一下真正的出$4$概率，应该是$110$，我顺手修改了一下。

# 更新：兼容性[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0%E5%85%BC%E5%AE%B9%E6%80%A7)

我在 Firefox 和 windows 中的 Edge 里面尝试打开游戏，却发现`<canvas>`中的字体无法显示。调试了一下，发现是因为`actualBoundingBoxAscent`这个属性只在 Chrome 里面存在。又去搜了一圈解决方案，没有。只有一个按照字体大小乘上常数确定字体高度的方案，虽然丑陋，但是挺实用的。Chrome 里面字体大小是$60px$时高度返回$45$，所以我直接乘上$0.75$。别的浏览器现在也可以正常显示了。

# 更新：触摸屏支持[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0%E8%A7%A6%E6%91%B8%E5%B1%8F%E6%94%AF%E6%8C%81)

为了在手机上也能愉快的颓废，我增加了手势支持。使用了现成的轮子[Hammer.js](https://hammerjs.github.io/)，只要增加$10$行代码就可以识别`swipe`手势了。唯一需要注意的是要先设置`hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL});`，这是教程里貌似没有讲的。

然而这个更新我是无法在电脑上测试效果的。使用`jekyll`只能在本机查看网站（ip 是`127.0.0.1`而不是`0.0.0.0`）。我不会用最常见的工具`iptables`做端口转发，所以只好在生成的`_site/`目录下运行`python3 -m http.server`，然后手机上访问局域网网址测试。

# 更新：Bug 修复[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0bug%E4%BF%AE%E5%A4%8D)

**Bug #1**：对于$4096$以上的数字显示成白方块。  
**Fix**：在`animate()`函数中把数字大小对$12$取`Math.min`。

**Bug #2**：动画中数字不对。  
**Fix**：把一个 a 数组打成了 b 数组。

**Bug #3**：多个动画一起播放，出现混乱。  
**Fix**：这个特别烦。首先是添加时间戳，在动画每帧播放结束后判断一下当前动画是否为最新的，如果有更新的动画开始播放了就直接退出。我之前是每次移动之后播放一次动画，然而下一次按键时如果动画还没有放完，生成新数字就不会执行，这个问题很大。所以我把移动完成之后的环境缓存下来，做完一切操作最后才放动画，这样动画中断也不会有任何影响了。这样也可以同时模拟新方块的生成了。

# 更新：移动设备兼容性[](https://2o181o28.github.io/2020/02/25/2048/#%E6%9B%B4%E6%96%B0%E7%A7%BB%E5%8A%A8%E8%AE%BE%E5%A4%87%E5%85%BC%E5%AE%B9%E6%80%A7)

今天 Google Search Console 提示我的网页对于移动设备支持不够良好，所以我花了点时间改了下 CSS 增强兼容性。首先需要把`<header>`改短一点，然而 header 的高度是由内部的元素高度自动确定的，所以我要把标题下方的 padding 改小一点，header 就可以缩短了。其次，需要让`<canvas>`显示不超出屏幕范围。这个简单，只需要加个`width:100%`的 css 就好了。并且这些修改应该只对移动端生效。我翻了下自己博客的 CSS 源代码，了解到应该使用这样的代码块：

```css
@media only screen and (max-width: 767px) {
  ...;
}
```
