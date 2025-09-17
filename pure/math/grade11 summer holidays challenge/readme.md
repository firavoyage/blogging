# grade 11 summer holidays math challenge

> 探究解锁高中数学能力题的密钥

> from the live on the school private network on 2025.8.12
>
> problems are from shanghai uee and mock exam papers in recent years
> 
> sensei: taffy
>
> gakusei: fira

## 1

```precious
z = 1 + bi, b != 0. z + 2/z = m. m in R. 

求 m.
```

> 尝试巧算

<details>
  <summary>1</summary>

  观察, 化简为二次函数, 使用共轭虚根定理

  ```precious
  z^2 - mz + 2 = 0
  z_1 = 1+bi, z_2 = 1-bi (共轭虚根定理)
    z_1 + z_2 = 2
    z_1 + z_2 = - (-m)/(1) (verta)
  m = 2
  ```
</details>

<details>
  <summary>2</summary>

  计算虚数除法, 使用复数相等定理

  ```precious
  m = z+2/z
  = 1+bi + 2/(1+bi)
  = 1+bi + 2(1-bi)/(1+bi)(1-bi)
  = (1+2/(1+b^2)) + (b- 2b/(1+b^2))i
  
  (b- 2b/(1+b^2))=0
  1-2/(1+b^2) = 0 (b!=0)
  b^2 = 1

  m = 2
  ```

</details>

## 2

```precious
x,y in R
10^x - 10^y = 10
求 min (2x-y).
```

<details>
  <summary>1</summary>

  换元, 求二次函数最值

  ```precious
  let r = 2x-y ("result")
  10^x - 10^(2x-r) = 10
  let t = 10^x in (0, +inf)
  r = lg(t^2/(t-10)) = lg(1/(-10(1/t)^2 + (1/t)))
  r_min = lg4 + 1
  ```

</details>

<details>
  <summary>2</summary>

  消元, 求导

  ```precious
  y = lg(10^x - 10)
  f(x) = 2x-y
  f'(x) = 2 - 10^x/(10^x-10)
  f'(x) = 0, x = lg20
  f(x)_min = f(lg20) = lg4 + 1 (开区间极值点 in 驻点)
  ```

</details>

## 3

```precious
a>0, a != 1
f(x) = log(a, ax+2), g(x) = log(a, 1/(2x+a))
f(x), g(x) 关于 l 对称
求 f(x) cap g(x) cap l
```

<details>
  <summary>1</summary>

  化简, 观察, 猜测

  ```precious
  f(x)=log(a, ax+2)
  g(x)=-log(a, 2x+a)

  (观察, 猜测 a=2 为唯一解)

  f(x)=g(x)
  log(2, 2x+2) = 0
  x = -1/2
  f(x) cap g(x) cap l = (-1/2, 0)
  ```
</details>

<details>
  <summary>proof</summary>

  对 1 猜想的证明

  <details>
    <summary>1</summary>

    渐近线与对称性质
  
    ```precious
    f(x) 渐近线: x = -2/a
    g(x) 渐近线: x = -a/2
    f(x), g(x) 都有竖渐近线.
    两函数关于 l 对称, 其渐近线也关于 l 对称.
    case(1) 两渐近线不重合
    显然不成立. (l 为两渐近线正中间的竖线. 翻折后定义域不同.)
    case(2) 两渐近线重合
    ```
  </details>
    
  <details>
    <summary>2</summary>
    
    - 两对称函数交点在对称轴上
    - 增斜线最终超过对数

    ```precious
    f(x) up, g(x) down. 
    abs(f(x) cap g(x)) = 1
    f(x) cap g(x) in l (对称性质)
    abs(f(x) cap g(x) cap l) = 1
    若 l 为斜线
    不妨设 l 增. (否则换 g(x))
    l 显然不为 f(x) 切线. (f 在一侧, g 在两侧, 不对称.)
    abs(f(x) cap g(x) cap l) != 1, 不成立. (证明: 在对数远处求导作切线)
    so l 为横线 (l 显然不为竖线)
    ```
  </details>
  

</details>

## 4

```precious
f(x)=log(4, 4^x+m) - 1/2 x. D = R
forall a in R f(a)>=f(-a) 
求 m.
```

```precious
forall x in R
{
  f(x) >= f(x)
  f(-x)>=f(x)
}
=> forall x in R, f(x) = f(-x)
偶 f.
m = 1
```

## 5

```precious
两钟在正方体相邻两面上. 时间相同. 
求 0~12 点, 时针垂直的次数.
```

```precious
想象. 
猜测 3点, 9点是全部解.
```

```precious
(image...)
```

```precious
v(l_1) = (cosa, 0, sina)
v(l_2) = (0, cosa, sina)
v(l_1) * v(l_2) = 0
a = k pi, k in Z
```

## 6

```precious
forall x in [0, +inf), f(x) = f(1/(x+1))
{f(x)|x in [0,a]} = {f(x)|x in [0,+inf)}
求 a 范围.
```

```precious
(image...)
```

## 7


