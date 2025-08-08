# 万能的数学算法模板库：sympy 的 OI 用法

## 被拒的洛谷日报

Posted by wyj on July 14, 2019

## 简介[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E7%AE%80%E4%BB%8B)

sympy 是一个符号计算的 python 库。他不仅可以像 mathematica 一样进行符号计算，也内置了很多的 OI 实用算法，包括图论、计算几何、数论、多项式等等很多方面。可以节省您码板子的时间。

## 前置知识[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86)

- 基本 python 语法
- 一定的数学能力

## 安装方法[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%AE%89%E8%A3%85%E6%96%B9%E6%B3%95)

```bash
pip install sympy ipython
```

Copy

如果还没有安装 pip 的话，在 Ubuntu 中可以`sudo apt install python3-pip`，否则请自行百度 pip 安装方法。

然后在终端中输入`isympy`回车，就打开了一个使用 IPython 界面的 sympy。

![](https://2o181o28.github.io/img/luogu_img/63636.png)

**虽然本文中的 ascii art 可能稍有变形，但是 Linux 下终端里是不会变形的。** Windows 不能够正确排版，但是仍然可以使用`print`输出。

**直接在函数名后加上`?`，即可查询函数用法。加`??`可以查看源代码。 函数名以及参数可以打 Tab 自动补全。**

使用`cxxcode(s)`即可把 SymPy 表达式`s`转为 C++语言的表达式。  
使用`sympify(s)`即可把字符串`s`转为 SymPy 的表达式，比如说把`"x^y"`替换为`x**y`，把`"8/10"`计算为有理数类型的`4/5`而非浮点数 0.8。  
使用`plot(f)`绘制函数`f`的图像。后面可以接一个区间，比如`plot(x**x,(x,0,1))`表示$xx,x∈[0,1]$

## 基本用法[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)

如求导、积分、级数求和、极限、因式分解、解微分方程等等。

参见[官方英文教程](https://docs.sympy.org/latest/tutorial/index.html#tutorial)和较老的[中文教程](http://www.asmeurer.com/sympy_doc/dev-py3k/tutorial/tutorial.zh.html)，可以代替`Wolfram|Alpha`的大部分功能。

## 数论的函数[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E6%95%B0%E8%AE%BA%E7%9A%84%E5%87%BD%E6%95%B0)

**再次强调在函数名后加上`?`（比如`sum?`），即可查看函数的用法，大多数的函数还有示例，所以下文不会介绍函数的参数。**

- `isprime`：判质数，用的是 Miller-Rabin
- `nextprime(n)`：$≥n$的最小质数，和 mathematica 里同名函数表现相同
- `primepi(n)`：求 n 以内质数个数，**用的是 Min_25 筛的第二部分**，可以在源码中看到优美的 Min_25 筛实现。
- `pollard_rho`：可以指定自己的伪随机函数和种子
- `gcdex`：整数**或者多项式**的 exgcd
- `primitive_root`：最小原根
- `mod_inverse`：求逆
- `discrete_log`：离散对数
- `sqrt_mod`：模意义下开方
- `diophantine`：解各种丢番图方程，比如佩尔方程：

```
In [35]: diophantine(x*x-2*y*y-1)
Out[35]:
⎧⎛                               t                                t
⎪⎜               t   3⋅(3 - 2⋅√2)                 t   3⋅(2⋅√2 + 3)
⎨⎜- √2⋅(3 - 2⋅√2)  + ───────────── + √2⋅(2⋅√2 + 3)  + ─────────────, - (3 - 2⋅
⎪⎝                         2                                2
⎩

                      t                  t              ⎞  ⎛              t
   t   3⋅√2⋅(3 - 2⋅√2)    3⋅√2⋅(2⋅√2 + 3)              t⎟  ⎜  3⋅(3 - 2⋅√2)
√2)  + ──────────────── - ──────────────── - (2⋅√2 + 3) ⎟, ⎜- ───────────── +
              4                  4                      ⎠  ⎝        2


                             t                                    t
             t   3⋅(2⋅√2 + 3)                 t    3⋅√2⋅(3 - 2⋅√2)
√2⋅(3 - 2⋅√2)  - ───────────── - √2⋅(2⋅√2 + 3) , - ──────────────── + (3 - 2⋅√
                       2                                  4


                                   t⎞⎫
  t             t   3⋅√2⋅(2⋅√2 + 3) ⎟⎪
2)  + (2⋅√2 + 3)  + ────────────────⎟⎬
                           4        ⎠⎪
                                     ⎭

```

- `egyptian_fraction`：埃及分数

## 各种数[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%90%84%E7%A7%8D%E6%95%B0)

- `fibonacci`：fibonacci 数
- `catalan`：catalan 数
- `npartitions`：整数拆分函数，就算 n=1e8 都可以秒出，难以置信
- `rf`：上升幂
- `ff`：下降幂
- `binomial`：组合数
- `bell`：Bell 数
- `bernoulli`：伯努利数

## 多项式操作[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%A4%9A%E9%A1%B9%E5%BC%8F%E6%93%8D%E4%BD%9C)

- `div`：多项式除法、取模
- `ntt`，`intt`：NTT
- `fft`，`ifft`：FFT
- `fwht`，`ifwht`：异或的 FWT
- `mobius_transform`，`inverse_mobius_transform`：FMT，如果设置了`subset=False`的话是 AND 的 FWT

什么多项式 exp，多项式 ln，多项式求逆之类的，可以使用`series`，如下:

```
In [77]: exp(1/(log(2*x**2+3*x+1)+5*x+1)-1).series(x,0,5)
Out[77]:
               2         3           4
          197⋅x    3517⋅x    326023⋅x     ⎛ 5⎞
1 - 8⋅x + ────── - ─────── + ───────── + O⎝x ⎠
            2         3          24
```

## 计数题乱搞专用[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E8%AE%A1%E6%95%B0%E9%A2%98%E4%B9%B1%E6%90%9E%E4%B8%93%E7%94%A8)

- `interpolate`：拉格朗日插值
- `rational_interpolate`：有理式插值，直接秒掉[概率论](https://www.luogu.org/problemnew/show/P3978)这样的题  
  参数是一个$(x,y)$列表，然后是分子的次数（这个可能要手动枚举）

```
In [134]: R=Rational #总是输入Rational太长了

In [135]: rational_interpolate([(1,1),(2,1),(3,R(6)/5),(4,R(10)/7)],2)
Out[135]:
  2
 x    x
 ── + ─
 4    4
───────
x - 1/2
```

- `rsolve_hyper`：**非**常系数**非**齐次线性递推求通项  
  第一个参数是一个列表`l`，第二个参数是函数`f`，第三参数是变量`n`，返回$∑k=0len(l)−1lkF(n+k)=f(n)$的解$F$。

```
In [83]: rsolve_hyper([-4,4,-1],0,n) #有重根的线性递推
Out[83]:
 n
2 ⋅(C₀ + C₁⋅n)

In [94]: rsolve_hyper([-4*n-2,n+2],0,n)  #卡特兰数
Out[94]:
 n
4 ⋅C₀⋅RisingFactorial(1/2, n)
─────────────────────────────
    RisingFactorial(2, n)

In [87]: rsolve_hyper([-1,-1,1],0,n) #斐波那契数
Out[87]:
           n              n
   ⎛1   √5⎞       ⎛1   √5⎞
C₀⋅⎜─ - ──⎟  + C₁⋅⎜─ + ──⎟
   ⎝2   2 ⎠       ⎝2   2 ⎠

In [90]: rsolve_hyper([-1,1],1+n,n) #可以用来求前缀和
Out[90]:
     n⋅(n + 1)
C₀ + ─────────
         2
```

## 计算几何[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95)

- `Circle`、`Line`、`Line3D`、`Point`、`Point3D`：各种几何对象
- `convex_hull`：求凸包
- `centroid`：求重心
- `farthest_points`：最远点对
- `closest_points`：最近点对

## 线性代数[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0)

**注：大部分的功能 numpy 已经具备，并且效率远高于 sympy**，所以这里只介绍 numpy 没有或者不完善的功能

- `Matrix`：矩阵类，构造方法类似 numpy 的 array
- `det(m)`：求 m 行列式，**可以带变量**，所以能用来求特征多项式之类的，如下：

```
In [109]: m=Matrix([[0,1,0],[0,0,1],[1,1,1]])

In [110]: det(x*eye(3)-m)
Out[110]:
 2
x ⋅(x - 1) - x - 1

```

- `m.inv_mod(p)`：求 mod p 意义下 m 的逆矩阵
- `m.exp()`：矩阵指数，用封闭形式表示结果
- `m.eigenvals(),m.eigenvects()`：特征值、特征向量，可以用根式表示结果

## 图论[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%9B%BE%E8%AE%BA)

`sympy`此方面功能不多。

- `topological_sort`：拓扑序
- `combinatorics.prufer.Prufer.to_prufer`：树转 prufer 序列
- `combinatorics.prufer.Prufer.to_tree`：prufer 序列转树

## 彩蛋：数学作业用法[](https://2o181o28.github.io/2019/07/14/sympy%E7%9A%84OI%E7%94%A8%E6%B3%95/#%E5%BD%A9%E8%9B%8B%E6%95%B0%E5%AD%A6%E4%BD%9C%E4%B8%9A%E7%94%A8%E6%B3%95)

举几个比较初等的例子，可能对数学作业稍有帮助：

三角函数化简，求周期之类的

```
In [13]: trigsimp(sin(x)+sqrt(3)*cos(x))
Out[13]:
     ⎛    π⎞
2⋅sin⎜x + ─⎟
     ⎝    3⎠

In [14]: expand_trig(cos(2*x+pi/2))
Out[14]: -2⋅sin(x)⋅cos(x)
```

```
In [17]: periodicity(exp(cos(x/3+1)+sin(x)),x)
Out[17]: 6⋅π

```

待定系数法，这里是把斐波那契数拆成两个等比级数之和：

```
In [31]: solve_undetermined_coeffs(Eq(c/(1-a*x)+d/(1-b*x),1/(1-x-x**2)),[a,b,c,d
    ...: ],x)
Out[31]:
⎡⎛1   √5  1   √5  1   √5  √5   1⎞  ⎛1   √5  1   √5  √5   1  1   √5⎞⎤
⎢⎜─ - ──, ─ + ──, ─ - ──, ── + ─⎟, ⎜─ + ──, ─ - ──, ── + ─, ─ - ──⎟⎥
⎣⎝2   2   2   2   2   10  10   2⎠  ⎝2   2   2   2   10   2  2   10⎠⎦

```

高次方程判别式：

```
In [29]: discriminant(x**7-x-1)
Out[29]: -776887

In [30]: discriminant(x**2+4*x+4)
Out[30]: 0

```

还有一些`Parabola`、`Ellipse`之类的圆锥曲线类，我因为不懂圆锥曲线所以不会用。
