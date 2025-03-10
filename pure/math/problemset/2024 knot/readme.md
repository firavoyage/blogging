# editorial

## the problem

![1]

## solution: using imagination

(omitted)

> ![hint]
>
> 对某根绳子翻转, 平移. 经过枚举尝试, 可得 c 正确.
>
> b, c 成手性, 二者其一正确.

## solution: using left right over below

> 这个解法显然不对, 由于幽默得以保留.
>
> 错误原因: 绳结可以部分翻转, 从而改变左右.

![2]

> - `u` up
> - `l` left
> - `r` right
> - `o` over
> - `b` below
> 
> 对于 a, d, 显然不对.
>
> - `choice a` no knot (根本没打结嘛!)
> - `choice d` three ropes (啊不是, 你有几根绳?)
> 
> 对于 b, c, 在绳结边缘随意取点, 向外为上. 从左起, 观察绳从上过还是从下过.
>
> - `original img` l: obo (左起: 上下上)
> - `choice b` l: obo (左起: 上下上)
> - `choice c` l: bob (左起: 下上下)

![3]

> 观察到绳结没有方向, 可以任意旋转. 不失一般性, 可以取最上面的点.

## solution: cut the rope

> 这个解法显然不对, 由于幽默得以保留.
>
> 错误原因: 绳结无左右. 若把 b,c 都从上方剪开, 则 b 正确.

![4]

> 剪开绳子, 拉直.

## fin

(ed)

[1]: <2024 knot problem.jpg>
[2]: <2024 knot problem solution 1.jpg>
[3]: <2024 knot problem solution 2.jpg>
[4]: <2024 knot problem solution 3.jpg>
[hint]: hint.jpg
