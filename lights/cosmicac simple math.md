# 对于点线距离公式的感性理解

Posted by wyj on May 30, 2019

距离公式： $|Ax0+By0+C|A2+B2$  我之前的感性理解是确定直线和 x 轴，y 轴的交点，然后就是一个叉积，就是要变换很多次符号，并且不能体现$|Ax0+By0+C|$的意义。

今天忽然茅塞顿开，想到了一个绝妙的几何解释。

令平面 a 为$z=Ax+By+C$，根据三垂线，点线距离显然就是点对应的 z 值除以$tan⁡θ$，其中$θ$是 a 和平面$z=0$的夹角。另一方面，把 a 看成一个$x,y$的函数，这个夹角的$tan$值就是 a 的梯度的大小（可以类比为一元函数中斜率就是导数），显然就是 x 方向导数$A$和 y 方向导数$B$的合成，即$A2+B2$。

---

# cos(kx)的求和（重制版）

Posted by wyj on November 18, 2022 / Edited on February 4, 2023

我很久很久以前就写过一篇[coskx 的求和](https://2o181o28.github.io/2020/07/02/cos%E7%9A%84%E6%B1%82%E5%92%8C/)，当时觉得这个复指数函数求和的方法已经算是非常漂亮的了。这个求和在 Fourier 分析里是非常重要的基本内容之一，被称作[Dirichlet kernel](https://en.wikipedia.org/wiki/Dirichlet_kernel)。最近数分在学这个，因此我重新对它产生了兴趣。

但是我今天上物理课的时候突发奇想，自己想出来了一个更漂亮的解释方法。可惜在画这种图时，任何绘图软件的效率都远低于手绘，于是请忍受我丑陋的手绘图。

![](https://s2.loli.net/2022/11/18/ao5EjWBAtPICwLR.png)

当你看懂这张图之后，你就一定会感觉这个公式是显然的。

# 2023-02-04 UPD: 现在不丑啦[](https://2o181o28.github.io/2022/11/18/coskx%E7%9A%84%E6%B1%82%E5%92%8C%E9%87%8D%E5%88%B6%E7%89%88/#2023-02-04-upd-%E7%8E%B0%E5%9C%A8%E4%B8%8D%E4%B8%91%E5%95%A6)

我花了一个下午的时间用[tikz](https://tikz.dev/tikz)重画了这张 5 分钟之内就能手绘完成的图（顺便入门了 tikz，以后熟练了可能就快很多了），成果：

![](https://2o181o28.github.io/img/20230204/1.png)

---

# cos 的求和

Posted by wyj on July 2, 2020

$∑k=0ncos⁡(kx)=ℜ(∑k=0neikx)=ℜ(1−eix(n+1)1−eix)=ℜ(1−cos⁡((n+1)x)−isin⁡((n+1)x)1−cos⁡(x)−isin⁡(x))=(1−cos⁡((n+1)x))(1−cos⁡(x))+sin⁡((n+1)x)sin⁡(x)(1−cos⁡(x))2+sin⁡(x)2=1−cos⁡((n+1)x)−cos⁡(x)+cos⁡(nx)2−2cos⁡(x)=12(1+cos⁡(nx)−cos⁡((n+1)x)1−cos⁡(x))=12+sin⁡((n+12)x)sin⁡(x2)1−cos⁡(x)$

一个相当平凡的推导，然而发现自己对于三角函数那套理论已经几乎忘光了$…$

第一个等号，就是$eix=cos⁡(x)+isin⁡(x)$。  
第二个等号，等比数列求和。  
第三个等号，还是$eix=cos⁡(x)+isin⁡(x)$。  
第四个等号，复数的除法公式，来自维基百科。$(a+bi)(c+di)=(a+bi)(c−di)(c+di)(c−di)=ac+bci−adi−bdi2c2−(di)2=(ac+bd)+(bc−ad)ic2+d2=(ac+bdc2+d2)+(bc−adc2+d2)i$  
第五个等号，分母上是$cos2⁡(x)+sin2⁡(x)=1$，分子上首先展开了前面的乘积，然后使用了$cos⁡(x)cos⁡(y)+sin⁡(x)sin⁡(y)=cos⁡(x−y)$。  
第六个等号，整理一下。  
第七个等号，和差化积，$cos⁡(x)−cos⁡(y)=−2sin⁡(x+y2)sin⁡(x−y2)$，就和常见的答案形式相同了。

---
