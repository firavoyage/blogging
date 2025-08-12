# Google 经典编程竞赛题：计算  (3+5)𝑛  的小数点前三位数[](https://github.com/longluo/blog/tree/master/source/_posts/google-code-jam-2008-round-1a-problem-c-numbers.md "编辑")

发表于  2023-03-23   更新于  2025-08-11   分类于  [Math](https://www.longluo.me/categories/Math/)  Waline： [7](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#waline "waline")   阅读次数： 4183  本文字数： 5.8k   阅读时长 ≈ 5 分钟

**_By Long Luo_**

安全界大牛  [袁哥](https://baike.baidu.com/item/%E8%A2%81%E4%BB%81%E5%B9%BF/7203293)  在微博上发布了一道  [数学挑战题](https://weibo.com/6236276241/Myr7nFS6N) ：

计算  (3+5)𝑛  的整数末三位数，给出能口算或者可以用计算器计算的算法的第一个人，免费给一个价值 1000 元的 A9 投资分享群入群名额。

## 我的解答

刷微博时看到这道题目时，我觉得很简单啊，于是马上给出了下面的解答：

令  𝑦\=(3+5)𝑛 ，两边同取对数， log10⁡𝑦\=𝑛log10⁡(3+5) ， 𝑦\=10𝑛log10⁡5.23607 ，log10⁡5≈0.7 ，所以  𝑦≈100.7𝑛 。

但问题没有这么简单，因为上述解答只在  𝑛\=1  是正确的，𝑛\=2 ， 𝑦\=101.4≈25  就不对了，因为精度不够！

之后根据微博评论中其他人给的构造共轭数思路，分析出  3  位数是周期性的，于是又提交了下面的答案：

![图1. 证明周期性](https://www.longluo.me/assets/blog/images/google-code-jam/2008/numbers/google-code-jam-2008-numbers-my-rough-solution.jpeg)

图 1. 证明周期性

但问题仍然没有这么简单，因为即使循环周期  𝑝\=100 ，而  [双精度浮点数](https://www.longluo.me/blog/floating-point/)  的有效位数也只有  15  位，而  5  是无理数，同时由于舍入误差， log10⁡(3+5)  很快就出现精度不够的问题，得到错误的结果。

之后袁哥发布了  [解答](https://weibo.com/6236276241/MyCgz8tEk) ，图片太大，大家可以点开  [图片链接](https://www.longluo.me/assets/blog/images/google-code-jam/2008/numbers/google-code-jam-2008-numbers-yuange-solution.jpg)  查看详细解答。

袁哥的题解省略了很多东西，对数学不熟悉的人可能看不太明白，我当时也没有完全看明白。根据袁哥解答我重新写了份题解，整理了思路及缺失的步骤，外加证明，有中学数学水平即可看懂，题解第一部分如下：

![图2. 详细题解上](https://www.longluo.me/assets/blog/images/google-code-jam/2008/numbers/google-code-jam-2008-numbers-my-solution-1.jpeg)

图 2. 详细题解上

## Google Code Jam 编程竞赛题

这道题其实是 Google Code Jam 2008 Round 1A Problem C: Numbers [1](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn1)  编程竞赛题，是一道极好的编程练习题。原题如下：

Numbers (2008 Round 1A Problem C)

请输出  (3+5)𝑛  整数部分的最后  3  位。如果结果不超过  2  位，请补足前导  0 。

- 限制条件：
  - 时间限制:
    - 每个测试集运行时间不能超过  30𝑠 .
  - 内存限制: 1GB.
    - 1≤𝑇≤100
  - Small dataset (Test set 1 - Visible)
    - 2≤𝑛≤30
  - Large dataset (Test set 2 - Hidden)
    - 2≤𝑛≤2000000000

1.  样例 1

- 输入
  - N = 2
- 输出
  - 027 ( (3+5)2\=27.41640786 ，因此整数部分的最后  3  位补足前导  0  之后是  027 )

2.  样例 2

- 输入
  - N = 5
- 输出
  - 935 ( (3+5)5\=3935.739820 ，因此整数部分的最后  3  位是  935 )

## 如何求解这道题？

这个问题看似简单，但实际上却是一道很难的编程题。对于题目中的小测试集时，比如  2≤𝑛≤30 ，虽然 Java 或 Python 等支持任意精度计算，但直接去计算仍然会失败，大概在  𝑛\>17  之后就无法得到正确的结果了。问题的关键在于需要避免去计算  5 ，因为使用浮点数去计算  5  的会遇到不仅是精度，还有误差累加导致得到错误的结果。

而使用大数据测试集时，则问题更复杂了，当输入值  𝑛  接近  2000000000  时，如果使用之前的方法，你注定会超时而无法 AC 。那么这个问题应该怎么解决呢？

## 利用共轭构造新数列

这个问题的关键在于想到数学上的共轭( Conjugate )[2](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn2) ，注意到对于复数  𝑎+𝑏𝑖 ，其共轭复数为  𝑎−𝑏𝑖 ，那么  3−5  就是  3+5  的共轭。不妨设  𝛼\=3+5 , 𝛽\=3−5 ，构造一个新数列  𝑋𝑛 ：

(1)𝑋𝑛\=𝛼𝑛+𝛽𝑛,𝑛∈𝑁

注意到  𝑋𝑛  是一个整数[3](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn3) ，也很容易证明。我们使用二项式定理( Binomial theorem ) [4](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn4)  展开  𝑋𝑛 ，可得：

(2)𝑋𝑛\=2⋅∑𝑘\=0𝑛/2(𝑛2𝑘)⋅3𝑛−2𝑘⋅5𝑘

可以看出  5  的奇次项相消了，故  𝑋𝑛  为整数得证！

显然有  0<𝛽<1 , 故有  0<𝛽𝑛<1 ，那么  𝑋𝑛−1<𝛼𝑛<𝑋𝑛 ，所以问题转化为求  𝑋𝑛  的小数点前  3  位即可。

下面我们将给出这个问题的  4  种解法，由浅入深，最后的解法肯定会让你 A-Ha 一声的！

## 解法  1: 系数递推法

容易看出  𝛼𝑛\=𝑎𝑛+𝑏𝑛5 ，这里  𝑎𝑛,𝑏𝑛  均为整数。当然有同学会问，哪里容易看出来啊？不急，我们来简单证明下。

(𝑚+𝑛5)⋅(𝑝+𝑞5)\=(𝑚𝑝+5𝑛𝑞)+(𝑚𝑞+𝑝𝑛)5

同理根据二项式定理则有  𝛽𝑛\=𝑎𝑛−𝑏𝑛5 ，那么  𝑋𝑛\=2𝑎𝑛 。

不难得到：

𝛼𝑛+1\=(3+5)(𝑎𝑛+𝑏𝑛5)\=(3𝑎𝑛+5𝑏𝑛)+(3𝑏𝑛+𝑎𝑛)5

于是有：

𝑎𝑛+1\=3𝑎𝑛+5𝑏𝑛, 𝑏𝑛+1\=3𝑏𝑛+𝑎𝑛.

这个递推式有没有想到  [斐波那契数(Fibonacci Numbers)](https://www.longluo.me/blog/program-for-nth-fibonacci-number/#%E7%AE%97%E6%B3%95%E4%B8%83%E7%9F%A9%E9%98%B5%E5%BF%AB%E9%80%9F%E5%B9%82%E5%88%86%E6%B2%BB%E5%BF%AB%E9%80%9F%E5%B9%82%E8%BF%90%E7%AE%97) ，我们将其写成矩阵形式：

\[𝑎𝑛+1𝑏𝑛+1\]\=\[3513\]\[𝑎𝑛𝑏𝑛\]

令矩阵  𝐴\=\[3513\] ，则有：

\[𝑎𝑛𝑏𝑛\]\=𝐴\[𝑎𝑛−1𝑏𝑛−1\]\=𝐴𝑛\[𝑎0𝑏0\]

而  𝛼0\=1 ，有  𝑎0\=1,𝑏0\=0 ，我们可以使用  [快速幂](https://www.longluo.me/blog/leetcode-powx-n/)  算法快速求解，算法实现的 Java 参考代码如下所示：

JAVA

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25  
26  
27  
28  
29  
30  
31  
32  
33  
34  
35  
36  
37  
38  
39  
40  
41  
42  
43  
44  
45  
46  
47  
48  
49  
50

private static int\[\]\[\] matrixMultiplication(int\[\]\[\] A, int\[\]\[\] B) {  
 if (A == null || A\[0\] == null || B == null || B\[0\] == null || A\[0\].length != B.length) {  
 return null;  
 }

    int rowA \= A.length;
    int colA \= A\[0\].length;

    int rowB \= B.length;
    int colB \= B\[0\].length;

    int\[\]\[\] C = new int\[rowA\]\[colB\];

    for (int i \= 0; i < rowA; i++) {
        for (int j \= 0; j < colB; j++) {
            int sum \= 0;
            for (int k \= 0; k < colA; k++) {
                sum += (A\[i\]\[k\] \* B\[k\]\[j\]) % 1000;
                sum = sum % 1000;
            }

            C\[i\]\[j\] = sum % 1000;
        }
    }

    return C;

}

private static int\[\]\[\] fastExponentiation(int\[\]\[\] A, int n) {  
 if (n == 1) {  
 return A;  
 }

    if (n % 2 == 0) {
        int\[\]\[\] A\_m = fastExponentiation(A, n / 2);
        return matrixMultiplication(A\_m, A\_m);
    } else {
        return matrixMultiplication(A, fastExponentiation(A, n - 1));
    }

}

private static String findLast3Digits(int n) {  
 int\[\]\[\] A = {{3, 5}, {1, 3}};

    int\[\]\[\] A\_n = fastExponentiation(A, n);

    int result \= (2 \* A\_n\[0\]\[0\] + 999) % 1000;

    return String.format("%03d", result);

}

## 解法  2: 数列递推公式

由于  𝛼+𝛽\=6,𝛼𝛽\=4 ，由韦达定理( Vieta's formulas ) [5](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn5) ，那么  𝛼,𝛽  是方程  𝑥2−6𝑥+4\=0  的  2  个根。实际上如果数列满足上述形式，很容易证明其递推公式为： 𝑎𝑛+2\=6𝑎𝑛+1−4𝑎𝑛 ，这里也简单证明下：

𝛼𝑛+1+𝛽𝑛+1\=(𝛼+𝛽)(𝛼𝑛+𝛽𝑛)−𝛼𝛽(𝛼𝑛−1+𝛽𝑛−1)

而  𝛼𝛽\=4 ，则有：

𝑋𝑛+2\=6𝑋𝑛+1−4𝑋𝑛

和解法 1 类似，我们令矩阵  𝐵\=\[6−410\] ，则有：

\[𝑋𝑛+1𝑋𝑛\]\=𝐵\[𝑋𝑛𝑋𝑛−1\]\=𝐵𝑛\[𝑋1𝑋0\]

很容易计算  𝑋0\=2 ， 𝑋1\=6 ，那么同样使用  [快速幂](https://www.longluo.me/blog/leetcode-powx-n/)  算法求解，算法实现的 Java 参考代码如下所示：

JAVA

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25  
26  
27

private static int quickMultiply(int n) {  
 if (n == 0) {  
 return 2;  
 } else if (n == 1) {  
 return 6;  
 }

    n -= 2;

    int\[\]\[\] mat = {{6, -4}, {1, 0}};
    int\[\]\[\] smat = mat.clone();

    while (n > 0) {
        if ((n & 1) == 1) {
            mat = matrixMultiplication(mat, smat);
        }
        smat = matrixMultiplication(smat, smat);
        n >>= 1;
    }

    return (6 \* mat\[0\]\[0\] + 2 \* mat\[0\]\[1\]) % 1000;

}

private static String findLast3Digits(int n) {  
 int result \= (quickMultiply(n) + 999) % 1000;  
 return String.format("%03d", result);  
}

## 解法  3: 利用周期性

因为只需要  𝑋𝑛  小数点前  3  位，对结果取模  1000 ，那么最多只有  10002\=106  种可能，所以末尾  3  位数一定是周期性的，严谨证明可以参考之前我的手写题解。

对于这道题来说，利用前面的解法，我们可以写代码验证输出，周期是  100 ，从第  𝑛\=3  开始，所以实际上我们只需要计算前面  103  个数即可。如果  𝑛\>103  的话，直接计算  𝑋𝑛\=𝑋(𝑛−3)mod100+3 。

利用周期性，我们可以解决输入值  𝑛  很大的情况。

## 解法  4: 剩余定理

下面我们来揭晓这道题最绝妙的解法，利用剩余定理( Chinese remainder theorem ) [6](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fn6) ，详细过程如下图 3 所示：

![图3. 详细题解下](https://www.longluo.me/assets/blog/images/google-code-jam/2008/numbers/google-code-jam-2008-numbers-my-solution-2.jpeg)

图 3. 详细题解下

得到的最终表达式：

𝑋𝑛\=3𝑛%100⋅\[752+𝑛(𝑛−1)(200𝑛2+520)\]mod1000

对于这个表达式，我们手算都可以。

## 课后挑战

通过前面的讲解，你学会了这类题的解法了吗？下面是  2  个挑战：

1.  计算  (2+3)3000  的小数点前  3  位数；
2.  计算  (1+2)3000  的小数点后第  500−502  位数。

你学会了吗？

## 参考资料

---

1.  [Google Code Jam 2008 Round 1A : C. Numbers](https://zibada.guru/gcj/2008r1a/problems/)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref1)
2.  [Complex Conjugate 共轭](https://en.wikipedia.org/wiki/Complex_conjugate)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref2)
3.  [The number (3+5)𝑛+(3−5)𝑛 is an integer](https://math.stackexchange.com/questions/906584/the-number-3-sqrt5n3-sqrt5n-is-an-integer)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref3)
4.  [Binomial Theorem 二项式定理](https://en.wikipedia.org/wiki/Binomial_theorem)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref4)
5.  [Vieta’s formulas 韦达定理](https://en.wikipedia.org/wiki/Vieta%27s_formulas)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref5)
6.  [Chinese remainder theorem 中国剩余定理](https://en.wikipedia.org/wiki/Chinese_remainder_theorem)[↩︎](https://www.longluo.me/blog/google-code-jam-2008-round-1a-problem-c-numbers/#fnref6)
