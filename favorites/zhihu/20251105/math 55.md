# 如何看待朝鲜国家科学院数学研究所发布 arXiv 论文称千禧年难题纳维-斯托克斯方程已被攻克？
[](https://www.zhihu.com/question/1944357449965494499/answer/1944556261040436735)

大家可以散了哈～ 目前已经发现了一处错误，凭直觉觉得很难救。不想啃正文的同学，可以直接跳到第3节，看背景知识和八卦哦～

**1. 具体错误**

这里是文章第13页最上面的公式。第一行是关于![](https://www.zhihu.com/equation?tex=k)的求和， 这个求和里面有一个约束![](https://www.zhihu.com/equation?tex=j_0%282+k%29+%5Cin+S%5Cleft%28%5Cleft%5Clceil%5Clog+_2+n%5Cright%5Crceil%2B2%5Cright%29)。这里作者错误地把关于![](https://www.zhihu.com/equation?tex=k)的求和理解成了关于![](https://www.zhihu.com/equation?tex=j_0)的求和所以得到了![](https://www.zhihu.com/equation?tex=%5Cleft%7CS%5Cleft%28%5Cleft%5Clceil%5Clog+_2+n%5Cright%5Crceil%2B2%5Cright%29%5Cright%7C). 如果正确地计算![](https://www.zhihu.com/equation?tex=k)的求和，那么上界应该是![](https://www.zhihu.com/equation?tex=n+%5Clog+%5Clog+n). 所以这里过不去。

![](https://pic1.zhimg.com/v2-02893814490d60f80a2f847594865fcb_r.jpg?source=2c26e567)




**2. 为什么不能修复**

一般来说，在临界空间![](https://www.zhihu.com/equation?tex=%5Cdot%7BH%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D)里最多只能证明形如以下的估计

![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bd%7D%7Bdt%7D+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D+%2B+%5Cnu+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D+%5Cle+C+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D%5E2)

这篇文章的作者声称以上估计可以被加强为

![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bd%7D%7Bdt%7D+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D+%2B+%5Cnu+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D+%5Cle+C+%7C%7Cu%7C%7C_%7BX%5E1%7D+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D%5E2+%5Cqquad+%5Cqquad+%5Cqquad+%28%2A%29)

这里大家可以忘掉![](https://www.zhihu.com/equation?tex=%7C%7Cu%7C%7C_%7BX%5E1%7D+)的具体定义。本质的点在于，在方程的 scaling![](https://www.zhihu.com/equation?tex=u%28x%29+%5Crightarrow+%5Clambda+u%28%5Clambda+x%29)下，![](https://www.zhihu.com/equation?tex=%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D)是不变的，但是![](https://www.zhihu.com/equation?tex=%7C%7Cu%7C%7C_%7BX%5E1%7D+)是会随着![](https://www.zhihu.com/equation?tex=%5Clambda+%5Crightarrow+0)而趋于 0 的。所以在尺度变换下，![](https://www.zhihu.com/equation?tex=%7C%7Cu%7C%7C_%7BX%5E1%7D)会变得足够小![](https://www.zhihu.com/equation?tex=%7C%7Cu%7C%7C_%7BX%5E1%7D+%5Cll+1)。这一项![](https://www.zhihu.com/equation?tex=C+%7C%7Cu%7C%7C_%7BX%5E1%7D+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D%5E2)可以被![](https://www.zhihu.com/equation?tex=%5Cnu+%7C%7Cu%7C%7C_%7B%5Cdot%7BH%7D%5E%7B%5Cfrac%7B3%7D%7B2%7D%7D%7D)吃掉，从而一切事情都变得简单。

笔者至今没见过有人能把一个尺度不变的范数硬生生升级成‘尺度越小越强’的范数，因为这等于说 NS 方程的非线性项在尺度极限下自动消失了——这当然是不可能的！更何况我们在第一节里也指出，他在![](https://www.zhihu.com/equation?tex=%28%2A%29)里最关键的一步其实是错的。所以这大概不是个可以修复的错误。




**3. 问题的背景和目前的研究进展**

**3.1. 3D不可压NS的千禧年问题**

3D 不可压 NS 方程的表达式是

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D+%5Cpartial_t+u+%2B+%28u%5C%21%5Ccdot%5C%21%5Cnabla%29u+%2B+%5Cnabla+p+%3D+%5Cnu%5C%2C%5CDelta+u%EF%BC%8C%5C%5C+%5Cnabla%5C%21%5Ccdot+u+%3D+0%2C%5C%5C+u%7C_%7Bt%3D0%7D%3Du_0%2C%5C+%5Cnabla%5C%21%5Ccdot+u_0%3D0.+%5Cend%7Bcases%7D)

千禧年问题要求证明以下两种情况之一

- (Global Regularity) 证明对任意的光滑紧支初值  ，存在唯一的任意时刻下都光滑的解  。
- (Finite-Time Blow-up) 或者，构造某个光滑能量有界初值  使对应经典解在有限时刻  变得不光滑（产生奇性）。

只要把其中任意一个证明拿下，你就可以直接去领百万美金奖金，还顺便把菲尔兹奖打包带走～这可是连韦神，还有陶哲轩、Bourgain、Fefferman这几位菲尔兹大神都没能搞定的问题！

**3.2. 古典结果**

20年前的数学家倾向于第一种情况是对的，在很多特殊条件下证明了正则性。比如

- Leray-Hopf (1934, 1950)：存在全局能量有界弱解，但解是否光滑未知。这被称作 Leray-Hopf weak solution. 接下来就只需要证明这个弱解是光滑的。[1][2][3]
- Prodi–Serrin 光滑性条件 (1959, 1962)：如果已知解的混合范数有界，解光滑。[4][5]
- Fujita-Kato (1963)：如果已知解的临界范数  或  有界，解短时间光滑。（我们讨论的这篇文章就是在试图加强这个结果。）[6]
- Caffarelli–Kohn–Nirenberg 部分光滑性 (1982)：解不光滑的点的 Hausdorff 维数小于1，所以大部分点光滑。[7]
- Beale–Kato–Majda 光滑性条件 (1984)：如果已知解的 Lipschitz 范数有界，解光滑。由此我们知道 2 维的 NS 方程的解是光滑的。[8]
- Constantin-Fefferman 光滑性条件 (1993): 如果已知解涡旋方向 Hölder 范数有界，解光滑。[9]
- Escauriaza–Seregin–Šverák 光滑性条件 (2003)：如果已知解的临界范数  或  有界，解长时间光滑。[10]

**3.3. 现代结果**

目前的数学家倾向于第二种情况是对的，在很多情况证明了可能没有光滑解（产生奇性）。

- Tao (JAMS 2015)：和 NS 方程很像的一个 toy model 里面，光滑初值就可以产生奇性。[11]
- Buckmaster-Vicol (Annals 2019）和 Albritton-Brué-Colombo (Annals 2022）：Leray-Hopf solution 不是唯一的。（第一个没完全到Leray-Hopf，第二个需要外力。）[12][13]
- Elgindi（Annals 2021）：在  时，用  初值可以产生奇性。[14]
- 陈嘉杰-侯一钊 (Arxiv 2022）：在  时，在存在边界的时候光滑初值就可以产生奇性。如果能去掉边界，那么就解决了千禧年问题。[15][16]
- Buckmaster–Gómez-Serrano-Lai??-Wang（王永吉）??-Deepmind?? (still rumor)：解决了千禧年问题。[17][18]

至于最后这个结果，目前只是江湖上传闻：据说是 Buckmaster 和 Gómez 两位数学大神，在地球物理学家 Lai 和王永吉的帮忙下，借助 DeepMind 的海量算力，用 AI 搜到了可能的奇性解（自相似轮廓 self-similar profile），再配合计算机辅助证明完成的。不过嘛～目前还只是传闻版本，大家要保留自己的判断。

**3.4 结论**

所以就目前来看，NS 的千禧年问题其实已经非常接近被解决了，而且大方向并不是往‘解光滑’走的。这篇文章偏偏要证明光滑性，和主流认知完全对着干，大概率还是站不住脚的。




**4. 致谢**

感谢[@Yu Deng](https://www.zhihu.com/people/ec83252cdfc971eab64da14447f2e112)、@任潇 的讨论，感谢 @吴静 的邀请～

# 如何评价微博上的「数学滚出高考」这一话题？
[](https://www.zhihu.com/question/21883360/answer/46581542)

把所有科目剔除得了，到时候考大学大家就抽签吧，全凭运气，机会均等，绝对公平

但这时候就有人问了：先抽后抽几率一样不？他把签先抽走了我抽到的概率不就小了么？

众人一听很有道理，纷纷大吵大闹

这时候就体现出数学的重要性了~

# 数学里有哪些精彩的伪证？
[](https://www.zhihu.com/question/68322255/answer/1926371132510040880)

X²+X+1=0

按理说是无解的，但那天不知道咋脑血栓了想出一招

X²+X+1=0

两边各加X³得    X³+X²+X+1=X³

然后因式分解    X（X²+X+1）+1=X³

然后又因为X²+X+1=0所以     1=X³

X=1

然后我又整了个变式

X²+X=0

X³+X²+X=X³

X（X²+X）+X=X³

X=X³

X=1，-1，0

# 只学数分高代竟然也可以找到女朋友吗？
[](https://zhuanlan.zhihu.com/p/712265413)

昨天有人问我，只学数分高代可以找到女朋友吗？

答案是肯定的，学数分高代，只要学得足够好，不仅可以让你找到女朋友，而且还可以让你性吸引力爆棚，爆杀一身腱子肉的体育生。

下面让我们来看几个真实案例：

李田所同学是唐小菲大学数学系的研一新生，据本人所说现在有一个非常可爱并且恩爱的女朋友，虽然并没有除了他以外的人有见过她，但这并不妨碍我们对他做一个采访。

记者：那么首先能问一下你的年龄吗？

李田所：24岁

记者：啊，已经工作了吗？

李田所：是研究生（自信）

记者：诶，数分和高代的GPA是多少呢？

李田所：数分折算成绩点是3.8，然后高代也是3.8

记者：现在有在做什么特别的数学训练吗？

李田所：特别的训练倒是没有做什么，但是有在做裴礼文和卓里奇。

记者：有女朋友了吗？（唐突）

李田所：现在，是有的（心虚）

记者：什么时候开始交往的呢？

李田所：去……去年吧（心虚）。

记者：能说一下你们之间的故事吗？

李田所：当时我在图书馆做Artin的Algebra（2nd Edition）的时候，突然有一个可爱的舞蹈生妹妹坐到我身边，非常害羞的给我递了一张小纸条问能不能认识我。

记者：她都没有说她是舞蹈生，你怎么就知道了呢

李田所：额，那个，她当时，是穿着练功服过来找我的

记者：穿着练功服在图书馆学习也太奇怪了吧

李田所：额，因为那个，就是，她的舞蹈室就在图书馆的下面，穿脱衣服太麻烦，所以练完功就直接上来学习了

记者：可是......

李田所：够了！你可是什么可是？你怎么这么喜欢打破砂锅问到底，唧唧歪歪的，你怎么跟个学数学的一样那么喜欢把每一个细节都给搞懂呢！你这样纠缠有意思吗，你这么问我还怎么编，啊不，怎么讲故事呢！都是因为有你们这样的人存在才让数学天才jumping下不来台的！

记者：好好好，你先继续吧

李田所：咳咳，这还差不多。就是，然后，我把那封情书不是就给打开了吗。

记者：不是小纸条吗？

李田所：你闭嘴！那个纸条虽然小，但是里面写了密密麻麻的字，都是充满爱意的，所以是情书。反正就是，拿到情书以后，里面就是充满了各种，对我的赞美之情。说之前经常在图书馆能看到我奋笔疾书的样子，认真的样子非常的man，碰到做不来的题目时候焦急的样子也很可爱，认真的男人实在是太有性吸引力了。然后就是，觉得我一定很持久（嘿嘿），因为每天早上都能看到我在图书馆做题，中午也在做题，晚上也在做题，对于做数学题拥有着惊人的毅力。然后就说很喜欢我，想和我处对象，因为她智商比较低很喜欢高智商的数学做题家

记者：会你写情书那智商确实比较低

李田所：我当时说可以，但是我只能把你排在我心中的第二位，因为我心中的第一位永远只能是数学！后来我们就在一起过上了甜甜蜜蜜的生活，我每天都会花时间给她讲数分和高代是多么的有趣，只要做这样一个构造就能够逼近出极值，啊数学分析实在是太奇妙了。原来数学里定义的每一个收敛性并不是随意定义的，而是因为在不同的数学对象的处理上会有不同的区别。啊，矩阵的行列式的直观化居然如此清晰，哪怕是一个完全不懂数学的人，只有体育生的智商也能从中感受到数学之美！

记者：那你们平时约会的时候也是讲这些吗？

李田所：什么是约会？

好的，今天的采访就到这里了。

我们相信这个世界上一定还有很多像李田所一样不但数分高代学得特别好，而且身边还有一个可爱女朋友的数学系学生。因为本人交际圈实在太小了，所以这样的人只认识一个，但是这并不妨碍数学高手可以找到女朋友。

著名的数学皇帝姚兴腾曾经说过：学习数分高代，可以有效提高你的数学思维，学习到各种奇奇怪怪的构造，充分丰富你的想象力，让你在情场上游刃有余，从而迎来妹妹们欣赏的目光。

最后，无论如何请重视数分高代，这两门课对于数学系学生能不能找到女朋友至关重要，即使你后面的专业课一门也不会，也不会妨碍你找到真心愿意对你付出为你好的舞蹈生妹妹。只怕你享受不完！

# 大学什么专业最好？
[](https://www.zhihu.com/question/309589722/answer/3112272305)

答案：数学专业，理由如下

无知时诋毁数学，懂事时理解数学，选专业追随数学，毕业了诋毁数学！信仰数学会把自己的智商当作一个开集，再怎么努力逼近也触碰不到数学真理的边界，数门！

我语文不好，但我会写“天地有正气，杂然赋流形”；我英语不好，但我会读“LaTex”（拉泰赫）；我物理不好，但我知道1+2+3+...=-1/12；我历史不好，但我知道牛顿和莱布尼茨在十七世纪发明了微积分；我流体力学不好，但我知道牛顿打的脚是非牛顿流体；我地理不好，但我知道哥廷根大学在德国，巴黎高师在法国，剑桥大学在英国；我数学不好，但我知道我数学不好。

数学最漂亮的公式是欧拉公式，数学最知名的定理是费马大定理，数学最基础的专业课是数学分析和高等代数，数学最难的专业课是实变函数和泛函分析，数学家最鄙视的家是物理学家，数学专业鄙视链最底端的是统计，数学系学生最讨厌的教材是同济版高等数学和同济版线性代数，数学系学生最喜欢玩的游戏是原神。

选专业不选数学，就像计算圆周率不用正3*2^n多边形逼近[1]，就像计算根号2不用二分法[2]，就像求导数不用流数符号[3]，就像找文献不用中国知网，就像写数学论文不用word，就像敲数学公式不用mathtype，就像有苹果手机但是不下载原神，就像玩原神不抽阿贝多，就像不用渡火套打蒸发反应，就像打急冻树不带芭芭拉免费复活。说明这个人的数学造诣和游戏水平不足，他理解不了这种阳春白雪般的高雅艺术，他整个人的层次就卡在这里了，注定只能度过一个相对失败的人生。

在这个浮躁的社会，一个高考不选数学专业的人是活的很失败的，不分男女。研究自然哲学的数学原理，是人类自古希腊时期以来便存在的行为，而学习高等数学，则是自十七世纪微积分被发明以来最优雅的消遣，学习数学，是对自己的一种肯定，是精神上的升华。

数学科研工作者总是尽力的在向数学系学生们灌输一个观点。数学家们的定理就是全体数学行业工作者的定理。即便是三本大专的应用统计专业，一想到安德鲁怀尔斯通过谷山志村猜想解决了费马大定理，也会不由自主地挺起胸膛。

[1] 用正多边形周长逼近圆周率是一种收敛但是收敛速度很慢的做法，欧拉和拉马努金都给出过高收敛速度的圆周率计算方法，只要计算几项就可以得到高精度值。
[2] 完全可以用不动点迭代法或者牛顿法。
[3] 牛顿发明的抽象符号，如今还能在某些古早物理教材看到。

# 小学数学为什么不从集合论学起？
[](https://www.zhihu.com/question/522744830/answer/2964068696)

这个已经有人设计好了，下面我即将用出珍藏多年的图

这是最新的小学数学大纲

![](https://picx.zhimg.com/v2-0bd1cbf052b411a1ff6fc6298a528fb9_r.jpg?source=2c26e567)




好了，学完小学内容过后；

下面是小学毕业考试试题

![](https://picx.zhimg.com/v2-c1de61e0c96e7d58fe2ebd8721a4a5cc_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-a67cd13d48631b6a6e2c978839c3df3f_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-72c8dddf7320062af7b2e7cc1286c420_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-63b49524f99409fad691127d0a2bbafc_r.jpg?source=2c26e567)

特别提示：

下面是小学生恋爱需要注意的地方

![](https://picx.zhimg.com/v2-2afc0c87560c97119ce60e6916b2f473_r.jpg?source=2c26e567)

应各位要求，为了更好的体现小学思维，现新增水果和食物的插画题

![](https://pic1.zhimg.com/v2-55dc6c80c511cce01c2b1adeb8b82440_r.jpg?source=2c26e567)




最后小学毕业了，优秀的小学生将荣获荣誉证书：

![](https://picx.zhimg.com/v2-27bf5270d7fc05258049d2d46776f9c1_r.jpg?source=2c26e567)




为什么会有十几条评论被删除，知乎删评论这么厉害吗？

—————————更新一下




看见评论区很多人都在问有没有根据上面的小学大纲编写好的书籍。我刚找到类似这样的书，就推荐给大家。英文版大家可以去看All the mathematics you missed，还有剑桥大学出版，机械工业翻译的《那些年你没学明白的数学》

虽然名字听起来比较幼稚，但是内容却是比较严格的数学内容，以下是该书封面和目录。

![](https://picx.zhimg.com/v2-5cd43d3ba352b075e20748ca74987b8c_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-fb191640cd5044d49167de09659e89c0_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-8fc2c4d790a457d71df06e49c7f96a47_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-a4c6ae445e530059406ea4ddaa3bd1ba_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-84da2e75e6ec95699315bd339b0e2980_r.jpg?source=2c26e567)

# 如何评价b站的“一数公益”？
[](https://www.zhihu.com/question/426193563/answer/2081606072)

准高一，数学基础较好，看了前面部分的我认为**一数在某些思维难度较大的部分并没有讲清楚，即使有弹幕也填不完整这个坑**。（注：难的部分我都看懂了，但弹幕却反应有很多疑问）

当然，我没看后面部分，不能以偏概全，客观上他的课程确实帮助了许多基础较弱的同学，所以我不全反对。

举几个例子吧，比如最前面的证明集合相等他并没有完全讲清楚（后来还补了一期视频，说法差不多，只是驳回一些弹幕错误的想法）

- 已知  ，  ，求证  。（考点精华—集合—集合相等的证明方法，新版合集P9）

一数：

需证![](https://www.zhihu.com/equation?tex=A+%5Csubseteq+B+%5C%2C%5C%2C+%5Cland+%5C%2C%5C%2C+B+%5Csubseteq+A)。

在证![](https://www.zhihu.com/equation?tex=A+%5Csubseteq+B)中，**需证  中任意元素都在  里**，这只需在![](https://www.zhihu.com/equation?tex=A)中令![](https://www.zhihu.com/equation?tex=k%3D7m%2B18n)（注意，严格意义上这里应表述成令![](https://www.zhihu.com/equation?tex=7m%2B18n%3Dk)）即可，因为![](https://www.zhihu.com/equation?tex=7m%2B18n+%5Cin+%5Cmathbb+Z)，满足![](https://www.zhihu.com/equation?tex=B)的条件，所以可以这样令。（翻译：证![](https://www.zhihu.com/equation?tex=%5Cforall+m%2Cn+%28%5Cexists+%5C%2C+k+%28%28m%2Cn%2Ck+%5Cin+%5Cmathbb+Z%29+%5Cland+%287m%2B18n%3Dk%29%29%29)）

在证![](https://www.zhihu.com/equation?tex=B+%5Csubseteq+A)中，**需证**![](https://www.zhihu.com/equation?tex=B)**中任意元素都在**![](https://www.zhihu.com/equation?tex=A)**里**，即证![](https://www.zhihu.com/equation?tex=%5Cforall+k+%28%5Cexists+%5C%2C+m%2Cn+%28%28m%2Cn%2Ck+%5Cin+%5Cmathbb+Z%29+%5Cland+%28k%3D7m%2B18n%29%29%29)（在线翻译），后面证法不是重点，略了。

评价：

一数的讲法是没有太大问题的，但是许多弹幕都反应说听不懂，看看弹幕反应：

①在证![](https://www.zhihu.com/equation?tex=A+%5Csubseteq+B)中，为什么可以令![](https://www.zhihu.com/equation?tex=k)？创造条件？②在证![](https://www.zhihu.com/equation?tex=B+%5Csubseteq+A)中，这不是回到证![](https://www.zhihu.com/equation?tex=A+%5Csubseteq+B)了吗？“讨论的第一类中可以令![](https://www.zhihu.com/equation?tex=k%EF%BC%9D7m%2B18n)，为什么第二类中还要写成带![](https://www.zhihu.com/equation?tex=k)的形式？直接令![](https://www.zhihu.com/equation?tex=k%EF%BC%9D7m%2B18n)不行吗？”③为什么第一类就不用证明![](https://www.zhihu.com/equation?tex=k%EF%BC%9D7m%2B18n)？

没错，这就是**逻辑硬伤**，对于基础差逻辑不好的学生来说这是短时间内无法解决的，需要长时间的思考和领悟。由于课本逻辑用语的内容放在集合的后面，一数应该换一种通俗的讲法，并且不要用令![](https://www.zhihu.com/equation?tex=k)的方法，这很容易引起混淆。

比如把![](https://www.zhihu.com/equation?tex=14m%2B36n)改写成![](https://www.zhihu.com/equation?tex=2%287m%2B18n%29)，然后因为![](https://www.zhihu.com/equation?tex=m%2Cn+%5Cin+%5Cmathbb+Z)，所以显然![](https://www.zhihu.com/equation?tex=7m%2B18n+%5Cin+%5Cmathbb+Z)，由于![](https://www.zhihu.com/equation?tex=B%3D%5C%7Bx%7Cx+%3D+2k%2C+%5C%2C%5C%2C+k%5Cin%5Cmathbb+Z%5C%7D)，对于![](https://www.zhihu.com/equation?tex=2%287m%2B18n%29)来说，满足条件，所以所有的![](https://www.zhihu.com/equation?tex=14m%2B36n)都在![](https://www.zhihu.com/equation?tex=B)里，即证![](https://www.zhihu.com/equation?tex=A+%5Csubseteq+B)。证明![](https://www.zhihu.com/equation?tex=B+%5Csubseteq+A)说法很多，不列举了。

或者我这里整理有证明子集的逻辑思路：

![](https://picx.zhimg.com/v2-4c2b1de15243ce3be497baee36c86804_r.jpg?source=2c26e567)

如果没解决逻辑问题，那么换个集合就很有可能不会证，比如最经典的两个集合：

已知![](https://www.zhihu.com/equation?tex=A%3D%5C%7Bx%7Cx+%3D+2k%2B1%2C+%5C%2C%5C%2C+k+%5Cin+%5Cmathbb+Z+%5C%7D)，![](https://www.zhihu.com/equation?tex=B%3D%5C%7Bx%7Cx+%3D+4k+%5Cpm+1%2C+%5C%2C%5C%2C+k+%5Cin+%5Cmathbb+Z%5C%7D)，求证![](https://www.zhihu.com/equation?tex=A%3DB)

那有人会说，这些高考几乎不会考，关心什么，期中末月考混过去不就完了吗？那我就会说，最根本的逻辑问题不解决，基础肯定不怎么扎实。

再举个例子，讲判别式法求值域。

2. 求![](https://www.zhihu.com/equation?tex=y%3Dx%2B4%5Csqrt%7B%5Cfrac+14x%5E2+-+x+%2B+2%7D)的值域。（考点精华—函数概念与性质—值域考点完全解析（中档），新版合集P38）

一数：

把解析式化为方程![](https://www.zhihu.com/equation?tex=3x%5E2%2B%282y-16%29x-y%5E2%2B32%3D0)

然后这里照搬原话：

> 诶，那我们只需要让这个式子满足什么呢？是不是只需要满足它有解就可以啦？
> 对于这个方程中的每一个![](https://www.zhihu.com/equation?tex=x)，是不都有对应的一个![](https://www.zhihu.com/equation?tex=y)？
> 那我们都有一个![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)不就是这个![](https://www.zhihu.com/equation?tex=y)是可以取到吗？
> 所以跟我们判别式法完全类似（注：到现在他还没讲判别式的具体方法）
> 此时我们是不只需要![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)就可以啦？
> 我们利用![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)可以得到![](https://www.zhihu.com/equation?tex=y)的范围
> 而在这个![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)得到的![](https://www.zhihu.com/equation?tex=y)的范围内的每一个![](https://www.zhihu.com/equation?tex=y)，都有对应的![](https://www.zhihu.com/equation?tex=x)与之对应
> 而我们的任何![](https://www.zhihu.com/equation?tex=x)都是满足条件的，也就不会使得根号下不成立对不对？
> 所以我们就不用担心会产生增根

评价：

说实话，第一次听我也没听懂，后来看了看网上关于判别式法的介绍才明白他在说什么，原来他在这里是直接讲他自己的思路而不深入探究原理，导致弹幕几乎全是云里雾里的。

在这题中首先必须要说明**为什么解析式和方程是完全等价的**。有的人说这不简单嘛？移项，然后两边平方化简不就可以了吗？但是这里有陷阱：平方后![](https://www.zhihu.com/equation?tex=x)的取值范围真的不变吗？在解析式中，一部分关于![](https://www.zhihu.com/equation?tex=x)的式子是放在根号里的，也就意味着![](https://www.zhihu.com/equation?tex=x)的取值范围可能有限制；将平方后化简的方程左边设为新的函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D3x%5E2%2B%282y-16%29x-y%5E2%2B32)，这个函数中![](https://www.zhihu.com/equation?tex=x)的取值范围就没有限制了。原本使得解析式中根号内小于零的![](https://www.zhihu.com/equation?tex=x)，即取值范围之外的![](https://www.zhihu.com/equation?tex=x)，在![](https://www.zhihu.com/equation?tex=f%28x%29)中的![](https://www.zhihu.com/equation?tex=x)却可以取到。解方程![](https://www.zhihu.com/equation?tex=f%28x%29%3D0)得到的根可能在原来的解析式取值范围之外，这就是所谓的**增根**。一数把增根问题放在最后讲不是很合适（不过同学前面没听懂更别谈这里了）当然，原题中根号下的式子![](https://www.zhihu.com/equation?tex=%5Cfrac14x%5E2+-+x+%2B+2)抛物线开口向上，而且![](https://www.zhihu.com/equation?tex=%5CDelta+%3C+0)，所以恒大于零，不用担心增根，解析式和方程完全等价。

接着要说明**为什么要求  的判别式**？一数确实说明了原因，但是他说“![](https://www.zhihu.com/equation?tex=y)是可以取到的，所以![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)”，y1s1跳跃太大了，而且这不是简简单单只讲述![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)的对应关系就能说明白的原理，他只根据这个方程论![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)的关系，一张对应关系图都不画，导致弹幕一堆疑问。

要说明清楚原因，就要讨论一般情况，这就要谈到函数的定义了。这里我不严谨地讲：对于函数定义域中的每个![](https://www.zhihu.com/equation?tex=x)，在值域中都有**唯一**的![](https://www.zhihu.com/equation?tex=y)与![](https://www.zhihu.com/equation?tex=x)对应；。所以把**函数**中的这个![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)关系放在**完全等价的方程**![](https://www.zhihu.com/equation?tex=f%28x%29%3D0)中的意思就是对于所有的![](https://www.zhihu.com/equation?tex=y)，方程都有（至少有一个）实数根，也就是![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)。

![](https://picx.zhimg.com/v2-774a96986de2ecfb0a2f1ea2a1943b38_r.jpg?source=2c26e567)

比如解析式![](https://www.zhihu.com/equation?tex=y%3Dx%5E2)完全等价于方程![](https://www.zhihu.com/equation?tex=x%5E2-y%3D0)，假设函数定义域是![](https://www.zhihu.com/equation?tex=%5Cmathbb+R)，利用![](https://www.zhihu.com/equation?tex=%5CDelta+%3D+0-4+%5Ctimes+1+%5Ctimes+%28-y%29+%3D+4y+%5Cge+0)得到值域![](https://www.zhihu.com/equation?tex=y+%5Cge+0)。

再举个例子，定义法“找零点”讨论单调性。

3. 利用定义法讨论函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Dx%5E2%2B%5Cfrac%7B16%7D%7Bx%7D)的单调性。（考点精华—函数概念与性质—函数单调性解法大全，新版合集P39）

一数：

在定义域中任取![](https://www.zhihu.com/equation?tex=x_1%2C+x_2)，得![](https://www.zhihu.com/equation?tex=f%28x_1%29-f%28x_2%29%3Dx_1%5E2-x_2%5E2%2B16%5Cleft%28%5Cfrac%7Bx_2-x_1%7D%7Bx_1x_2%7D%5Cright%29)，化简得![](https://www.zhihu.com/equation?tex=f%28x_1%29-f%28x_2%29%3D%28x_1-x_2%29%5Cleft%28x_1%2Bx_2-%5Cfrac%7B16%7D%7Bx_1x_2%7D%5Cright%29)

等式右边中，如果我们规定了![](https://www.zhihu.com/equation?tex=x_1)和![](https://www.zhihu.com/equation?tex=x_2)之间的大小关系，因式![](https://www.zhihu.com/equation?tex=%28x_1-x_2%29)就容易判断正负，而因式![](https://www.zhihu.com/equation?tex=%5Cleft%28x_1%2Bx_2-%5Cfrac%7B16%7D%7Bx_1x_2%7D%5Cright%29)却不好判断，“虽然高考不会考但是遇到了也要学会做，我们令![](https://www.zhihu.com/equation?tex=x_1%3Dx_2%3Dx)，有![](https://www.zhihu.com/equation?tex=2x-%5Cfrac%7B16%7D%7Bx%5E2%7D%3D0)，所以![](https://www.zhihu.com/equation?tex=x%3D2)”。这是因为我们要找到![](https://www.zhihu.com/equation?tex=%5Cleft%28x_1%2Bx_2-%5Cfrac%7B16%7D%7Bx_1x_2%7D%5Cright%29)的零点，在这个零点会有一个单调临界点，单调性会改变。后面在实数集中以0, 2为节点分别讨论区间单调性即可。

评价：

。。。不止我一个，弹幕都反应问号：

①为什么要令![](https://www.zhihu.com/equation?tex=x_1%3Dx_2%3Dx)？②为什么有![](https://www.zhihu.com/equation?tex=2x-%5Cfrac%7B16%7D%7Bx%5E2%7D%3D0)？当![](https://www.zhihu.com/equation?tex=x_1%3Dx_2)时![](https://www.zhihu.com/equation?tex=f%28x_1%29-f%28x_2%29%3D0)并且![](https://www.zhihu.com/equation?tex=x_1-x_2%3D0)，此时![](https://www.zhihu.com/equation?tex=2x-%5Cfrac%7B16%7D%7Bx%5E2%7D)不是取任何数都可以吗，为什么等于零？③为什么会有一个单调临界点？……

可以看出，一数在这里是纯属只讲方法不讲原因，导致一片问号。

为什么要令？这涉及到对称式的思想，这东西还是要换种说法。

为什么![](https://www.zhihu.com/equation?tex=2x-%5Cfrac%7B16%7D%7Bx%5E2%7D%3D0)，这里一数不应该写“有”这个字，应该归纳为“令”的范畴。由于![](https://www.zhihu.com/equation?tex=%5Cleft%28x_1%2Bx_2-%5Cfrac%7B16%7D%7Bx_1x_2%7D%5Cright%29)符号难以确定，我们可以找出这个因式何时为零。如果直接令![](https://www.zhihu.com/equation?tex=x_1%2Bx_2-%5Cfrac%7B16%7D%7Bx_1x_2%7D%3D0)会得到一个描述![](https://www.zhihu.com/equation?tex=x_1)和![](https://www.zhihu.com/equation?tex=x_2)关系的方程，而我们需要一组**最简单**的二元解，不妨规定![](https://www.zhihu.com/equation?tex=x_1%3Dx_2)，这样两个未知数，两个方程，这样就解出来了，![](https://www.zhihu.com/equation?tex=x_1%3Dx_2%3D2)，这就是因式为零的临界情况：**如果稍微更动  或者  的值，这个因式就必然会大于零或者小于零。**

我举的例子都是些思维强度较大的题目，一数见到难点的例子如果按照原来的语速继续讲解讲不清楚，就会在某些地方敷衍了事。并且由于是讲题，一数讲的内容注重方法套路，并不注重原理，所以观看门槛在一些考点内容里稍微有点高。

我发现B站视频的评论区大多数内容并不讨论问题本身，而是无脑吹捧，玩梗，反倒给一些人感觉虚伪、反感。弹幕水平参差不齐，有的互相讨论问题，但有的却在某些地方刷类似“哇，我不懂了，我是不是没救了”之类的弹幕、玩梗、吹捧“一哥”，甚至有的初中生在里面吹牛逼。根据这个学习氛围，我认为认真看视频的也没几个，至少不占多数。

最后，这里祝愿一数能越办越好，始终坚持初心和贯彻理念，脚踏实地，让更多同学受益。

# 一段绳子，任意切n刀，切成n+1段绳子。问这些绳子能组成n+1边形的概率？
[](https://www.zhihu.com/question/25408010/answer/30707989)

![](https://www.zhihu.com/equation?tex=P%3D1-%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

思路很简单：**最长的一段不能超过绳子总长的一半**。

**我将给出2个证明，**第一个证明是正常的思路，需要一点微积分，第二个证明不用任何高等数学，简洁易懂，但需要一点点技巧。

**~~~~~****~~~~~****~~~~~****~~~~~**

**证明1（****仅用到简单的微积分）****：**

设绳子的长为1。

**先将问题离散化**，将绳子分成k段（![](https://www.zhihu.com/equation?tex=k%5Crightarrow+%5Cinfty+)），每段长为Δx（![](https://www.zhihu.com/equation?tex=%5CDelta+x%5Crightarrow+0)）。

设![](https://www.zhihu.com/equation?tex=P_%7B0%7D+)为绳子无法组成n+1边形的概率。在这种情况下，设最长的一段为，显然![](https://www.zhihu.com/equation?tex=x%5Cgeq+%5Cfrac%7B1%7D%7B2%7D+)

下面计算**最长的一段恰为x的概率**。有两种情况：

- 假设最长的一段恰在两端

假设最长一段在左端，那么最左边的一刀（可以是n刀的任意1刀）必须切在某个固定的Δx内，剩下的n-1刀必须切在右边的 1-x 内。最长一段在右端同理。

故总概率为![](https://www.zhihu.com/equation?tex=%5CDelta+P_%7B1%7D%3D+2n%5Cleft%28+1-x+%5Cright%29+%5E%7Bn-1%7D+%5CDelta+x)

- 假设最长的一段在中间

则最长一段的左右两刀的距离恰为x

左边那一刀可以选择的位置有![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1-x%7D%7B%5CDelta+x%7D+)种，此时右边一刀位置固定，剩下的 n-2 刀必须在 1-x 内。

左右两刀在刀数的选择有![](https://www.zhihu.com/equation?tex=n%5Cleft%28+n-1+%5Cright%29+)种

故总概率为![](https://www.zhihu.com/equation?tex=%5CDelta+P_%7B2%7D%3D+%5Cfrac%7B1-x%7D%7B%5CDelta+x%7D+n%5Cleft%28+n-1+%5Cright%29+%5Cleft%28+%5CDelta+x+%5Cright%29+%5E%7B2%7D++%5Cleft%28+1-x+%5Cright%29+%5E%7Bn-2%7D%3Dn%5Cleft%28+n-1+%5Cright%29+%5Cleft%28+1-x+%5Cright%29+%5E%7Bn-1%7D%5CDelta+x)

所以对于最长的一段恰为x的情况，绳子无法组成n+1边形的概率：

![](https://www.zhihu.com/equation?tex=%5CDelta+P_%7B0%7D%3D+%5CDelta+P_%7B1%7D%2B%5CDelta+P_%7B2%7D%3Dn%5Cleft%28+n%2B1+%5Cright%29+%5Cleft%28+1-x+%5Cright%29+%5E%7Bn-1%7D%5CDelta+x)

![](https://www.zhihu.com/equation?tex=P_%7B0%7D%3D%5Csum_%7B%5Cfrac%7B1%7D%7B2%7D%5Cleq+x%5Cleq+1+%7D%5E%7B%7D%7B%5CDelta+P_%7B0%7D+%7D+)

**然后再化离散为连续**

![](https://www.zhihu.com/equation?tex=P_%7B0%7D%3D%5Cint_%7B%5Cfrac%7B1%7D%7B2%7D+%7D%5E%7B1%7Dn+%5Cleft%28+n%2B1+%5Cright%29+%5Cleft%28+1-x+%5Cright%29+%5E%7Bn-1%7Ddx%3Dn+%5Cleft%28+n%2B1+%5Cright%29%5Cint_%7B0+%7D%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D+x%5E%7Bn-1%7Ddx%3D%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

故![](https://www.zhihu.com/equation?tex=P%3D1-P_%7B0%7D%3D+1-%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

证毕！

**~~~~~****~~~~~****~~~~~****~~~~~**

当天晚上我又想了一下这道题，根据答案的形式，突然又想到了一个绝妙的方法！

**只需要高中的数学知识就可以证明**。

**~~~~~****~~~~~****~~~~~****~~~~~**

**证明2（仅用高中数学）**：

设绳子的长为1。

切n刀将绳子分成了n+1段，从左到右分别是：![](https://www.zhihu.com/equation?tex=x_%7B0%7D+%2Cx_%7B1%7D%2C+x_%7B2%7D%2C...%2Cx_%7Bn%7D++)

满足：![](https://www.zhihu.com/equation?tex=0%3C+x_%7B0%7D+%2Cx_%7B1%7D%2C+x_%7B2%7D%2C...%2Cx_%7Bn%7D++%3C1),![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi%3D0%7D%5E%7Bn%7D%7Bx_%7Bi%7D+%7D+%3D1)

如果这些绳子不能组成n+1边形，那么存在![](https://www.zhihu.com/equation?tex=x_%7Bi%7D+%5Cleft%28+0%5Cleq+i%5Cleq+n+%5Cright%29+)，![](https://www.zhihu.com/equation?tex=x_%7Bi%7D%5Cgeq+%5Cfrac%7B1%7D%7B2%7D+)

易见，只能恰有一段不小于![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B2%7D+)

- 假设，易见此情况等价于所有的n刀都切在了右边，故所求的概率为

设其中的某一组解为![](https://www.zhihu.com/equation?tex=%5Cleft%28+x_%7B0%2C0%7D%2C+x_%7B1%2C0%7D%2C+x_%7B2%2C0%7D%2C...%2Cx_%7Bn%2C0%7D+%5Cright%29+)

- 假设，设某一组解为,容易发现，对于每一组解，都可以通过轮换的方式，和的解建立一一映射的关系：

![](https://www.zhihu.com/equation?tex=%5Cleft%28+x_%7B0%2C0%7D%2C+x_%7B1%2C0%7D%2C...%2Cx_%7Bn-i%2C0%7D%2Cx_%7Bn-i%2B1%2C0%7D%2C...%2Cx_%7Bn%2C0%7D+%5Cright%29+%5CLeftrightarrow+%5Cleft%28+x_%7Bi%2Ci%7D%2C+x_%7Bi%2B1%2Ci%7D%2C...%2Cx_%7Bn%2Ci%7D%2Cx_%7B0%2Ci%7D%2C...%2Cx_%7Bi-1%2Ci%7D+%5Cright%29+)

故，对于任意![](https://www.zhihu.com/equation?tex=x_%7Bi%7D%5Cgeq+%5Cfrac%7B1%7D%7B2%7D+%5Cleft%28+1%5Cleq+i%5Cleq+n+%5Cright%29+)，所求的概率均为![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B2%5E%7Bn%7D+%7D+)

（）

综上，对于以上n+1种情况，这些绳子不能组成n+1边形的总概率![](https://www.zhihu.com/equation?tex=P_%7B0%7D%3D+%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

故![](https://www.zhihu.com/equation?tex=P%3D1-P_%7B0%7D%3D+1-%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

证毕！

**~~~~~****~~~~~****~~~~~****~~~~~**

# 如何看待B站UP主“小谷数学课代表”？
[](https://www.zhihu.com/question/614688060/answer/66644600217)

无聊去看了一下 一道mod3余1题求平方mod3居然要平方展开求解花了3分钟 一道新高考立体几何题4分钟秒了 不好评价

期待高联成绩

# 如何看待B站UP主“小谷数学课代表”？
[](https://www.zhihu.com/question/614688060/answer/23866611931)

比姜萍强，你甭管她全是自己会的还是靠背剧本，她能脱稿把题讲明白，就说明了她起码能看懂这道题的主要思路，水平有保底。

教学天赋也有，未来再不济，考个教资去当小学数学老师还是绰绰有余的，起码不愁吃饭，这已经超越了绝大多数数学专业的学生，很棒了。

# 如何看待B站UP主“小谷数学课代表”？
[](https://www.zhihu.com/question/614688060/answer/3427049412)

本人高考数学140+，而且是当年所在地级市数学第一名，中小学阶段当了十年的数学课代表，我想我还是有点资格评价的。我第一次看她的视频，觉得小姑娘看起来很聪明，但是多看几个视频以后，感觉味道不对，像是剧本。我说一下理由。

一是没有有力的资历认证。最有力的认证当然是数学竞赛的成绩了。一张奖状就可以消除所有人的疑虑。我在她这个年纪的时候是有机会参加各种级别的竞赛的，从学校竞赛、县里、市里、省里，一直到参加全国竞赛。获奖之后才有资格参加更高级别的竞赛，我一路都是一等奖，全国竞赛拿了末等奖（也好过没得奖的人，更好过没机会参加的人，大多数人都拿不到参加的资格）。从小谷讲题的题目难度来看的话，她的水平高于当时的我，拿几张奖状应该是喝水一样容易的。我很难想象一个对数学有兴趣又有天赋的人，花大把时间学习高年级的数学，却不去参加竞赛。她为什么不把这些荣誉放在短视频账号置顶呢？怎么一张都看不到？做短视频账号，放这个内容能带来话题热度，为什么不放呢？

二是她的短视频账号能看出明显的流量导向。她这个年纪有的小孩肯定有不少人能达到这种天才的程度，但是不会是她。数学这么厉害的人，百分百是痴迷的人，就像武侠小说里的“武痴”一样，基本上话不会多，不会有这么强的表演欲。而且我也有认识的人在做抖音账号，拍视频号其实很累，而小谷的更新频率也太高了，加上各种各样的准备，搜题目，解题目，拍视频，一天啥也不干，精力都花在做视频账号上了？这就不是一个痴迷数学的人会做的事情。

三是她选的题目我也有看法。外行看热闹，内行看门道，虽然我不是吃数学这碗饭的，但是高中之前的数学我还算是内行的。我周围的人知道我数学很强，但是数学不好的人他是不知道我具体强在哪里的。有时候我花了很大力气解决了一道比较难的数学题，兴奋地告诉朋友的时候，他们经常没什么感觉。但是当我解决了一道看起来很屌，其实费不了什么脑子的题目的时候，他们反而会发出一声声的“哇塞”。应该有人清楚这种感受吧。有个例子就是刘谦今年的纸牌魔术，看起来很屌很神奇，其实就是个简单的数学把戏，草稿纸上画几下很快就证明出来了。刘谦的魔术很棒，表演效果满分。不是说他数学多厉害，而是他作为魔术师的控场能力强，台词精心设计，把气氛带起来了。数学题目就是这样，外行看起来很屌的东西，实际上可能是三脚猫功夫，外行人题目都看不懂、无感的东西，可能很有挑战性。小谷数学选的题目也不是没有挑战性，但就全都是那种看上去很屌跟吸引眼球的，就很刻意，好像就是为了抓住人们的眼球。而且都是初高中生会接触到的题型，甚至还押题考研题。这不就是为了精准吸引这些群体吗？他们纷纷在评论区评论“这样显得我很呆”之类的评价。相信我，如果小谷选的题型不这样的话，是没有这种效果的，她解出再难的题，评论区也不会这么热闹。

四是关于视频评论区很多人说的“费曼学习法”，我也有疑点。费曼学习法是真的，但是小谷不对劲。我不认为她讲课是通过费曼学习法在学习数学。根据我的经验来看，费曼学习法更适合用在基础知识的学习上（基础指的是地基作用的东西，比如概念、公式，基础和容易不是同一个东西），但是小谷讲的题目基本都是应用、计算层面的题目。用到的公式、原理，她也都是一笔带过。要是有意地使用费曼学习法，这时候更应该把概念和公式拿出来详细梳理一遍，加深记忆。她明显不是。可以说对此毫无兴趣。

所以，我认为她的视频最有可能是剧本，有成年人在背后营销策划的。说她背稿子，还有一个理由是，她的台词完完全全是一个成年人的口气。再举个例子，蜡笔小新你们都看过吧？古灵精怪，但又不是小孩子的那种古灵精怪，分明就是一个中年猥琐男人的灵魂放进一个五岁小孩的身躯。也就只有漫画家会写出这种角色，现实中不会有这样的小孩。你们再看看小谷的说话台词，也是这个问题。有的小孩落落大方，说话得体，成熟，能讨成年人的喜欢。但那是另一码事，她这个明显就是在背成年人写的文案，痕迹明显。现在做短视频的人太多了，流量就是钱，大家为了流量争得头破血流，手段花样百出，策划这种事情我一点都不奇怪。

# 如何看待全国高中数学教材的内容调整？
[](https://www.zhihu.com/question/283967816/answer/2560485211)

今晚备课的时候，越看课本越生气

逆命题与逆否命题删掉了，我最多觉得遗憾

以前讨论班的时候会问学弟学妹们“我喜欢你”的逆否命题是什么？

回答“你不喜欢我”的通通都算错，因为原命题与逆否命题是等价的，也就是命题真，则逆否命题也是真。

基本上每次都等他们苦思冥想后，再在黑板上写下“如果一个人不喜欢你，那这个人不是我。”

现在这个例子讲不成了，我表示深感遗憾

但这都不算啥，我就想问问编辑，把“映射”这个概念都给删除掉了，你的良心真的不会痛吗？

不说别的，不引入映射的概念，你打算怎么说清楚单射满射甚至双射？

或者说，反函数你打算怎么讲？

![](https://www.zhihu.com/equation?tex=y%3De%5Ex)与![](https://www.zhihu.com/equation?tex=%5C%5By+%3D+%5Cln+x%5C%5D)的关系什么？说一句与直线![](https://www.zhihu.com/equation?tex=y%3Dx)对称？

还有数学归纳法等知识的删除，我是真心觉得心累

前段时间的“毒教材”事件闹得沸沸扬扬，现在我是真的觉得几张丑化国人形象的插图带来的影响相比于这种教材才是真正的小巫见大巫

首先，它足够隐蔽，没有一定的数学功底你根本不知道它的危害性在哪

其次是哪怕你真的有能力看出它的危害性，你估计早已大学毕业了，此时又有几个有兴趣再重头看一遍高中数学呢？

除了我这种从事数学教育方面的人？

再然后，哪怕你真的看出问题，你能把这个话题顶上热搜？你要清楚，和大众说明白这件事基本上是一件不可能的事情。

每年将近一千万的高考考生，就意味着这种新型“毒教材”每年祸害一千万高中生，而这些人无疑是国家未来的希望。

也难怪现在知乎上的数学问题越来越低龄化，我真的无法想象未来中国数学教育会走向何方。

以上为原答案

大家的评论我都看了，首先说明一下，这篇文章是我昨晚相对而言比较生气的情况下写的，所以可能有些主观性，现在对评论区的几个问题作出回应：

1.“我喜欢你”的逆否命题到底是不是我说的那样？

或者说“我喜欢你”这句话到底算不算一个命题？

我觉得吧，这得看你是怎么理解这句话的，如果你认为：

“我喜欢你”与“若一个人是我，则这个人喜欢你”这两句话是一个东西，那我的回答是没问题的。

但你要是觉得“我喜欢你”严格意义上来说并不算一个命题，那我也表示理解，我也确实错了。

2.评论区一些人认为“映射”这个东西并不很重要，因为以前也不咋考，所以删了就删了呗

选一个代表性的回答：

![](https://picx.zhimg.com/v2-ec0ea2294a2a523817c59618270dc60a_r.jpg?source=2c26e567)

我敢肯定，此人最多最多学过高数线代，不可能学过更高一点的数学

因为哪怕你学过一点高等代数，你都会知道“映射”这在数学里究竟意味着什么！

至于所谓的“以前本来就不考”，我就想问一句，以前不考就对了吗？

以前不考，那是教育部的问题，“映射”这么重要的东西高考不考本身就是一种错误，但起码教材上还有，还有得补救，感兴趣的同学还能自己学一学。

现在因为多年不考所以干脆删除，这叫错上加错。

说说我自己吧，当年我的高中由于“映射”讲得比较少，所以大学的时候走了很多弯路才把这条断腿补齐，现在可倒好，直接锯了。

3.最后就是数学归纳法到底有没有删除的问题

我拿了课本仔细看了看，确实是我的疏忽，因为确实没有删除，但是前面加了星号，这意味着高考不考。

这就很尴尬了，高考不考的东西，又有几个老师会给学生讲呢？

或许还是会有一些喜欢数学的学生会尝试自己自学吧，只能这么希望了。

最后就是，希望不要下一版教材因为很多年高考没考过数学归纳法了，所以也干脆把数学归纳法删除掉了，就像“映射”一样。

# 如何看待全国高中数学教材的内容调整？
[](https://www.zhihu.com/question/283967816/answer/2666546923)

极坐标跟参数方程删除可太秀了，大学学过二重积分都懂这意味着什么，而且大学我翻过几乎所有的国内教材，都没有系统讲解极坐标跟参数方程的。要我说，我觉得高中还应该把复变函数的非积分部分加进来，不然大学没几个人学的懂微分方程。如果条件可以，甚至可以让高中生就能够熟练的掌握分部积分法，换元积分法，熟练的求不定积分，以及基本的定积分。练习积分的运算技巧比练习圆锥曲线的计算技巧有意义得多，积分的运算还不像圆锥曲线那样，有各种各样的二级结论，而且我认为积分的运算更适合高中的课堂。

看回答，赞同数量这么多，我想继续吐槽一下。现在高中数学，除了立体几何第一问，没有一题是本质上的证明题，导数第二问可能会有，但本质还是计算。我觉得如果数学考试没有证明题，那么这个数学试卷是没有数学灵魂的。不过也能理解：初等数论不学，数学归纳法不学，反证法不考，如果要出证明题，只能扣逻辑关系，如果逻辑关系再删除。。。。。。唉！证明能力弱是什么概念，任何一个学数学分析的人都清楚。

# f(f(x))=x^2+x，如何求 f(x)？
[](https://www.zhihu.com/question/25024134/answer/1923125038422431386)

这个类型的函数方程难度很大，而且没什么共性，都得特事特办。

首先找不动点，根据定义：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+g%28x%29%3Df%28f%28x%29%29%26%3Dx%5C%5C+x%5E2%2Bx+%26%3D+x%5C%5C+x%26%3D0%5C%5C+%5Cend%7Baligned%7D)

因此![](https://www.zhihu.com/equation?tex=x%3D0)是![](https://www.zhihu.com/equation?tex=g%28x%29)唯一的不动点。

如果![](https://www.zhihu.com/equation?tex=x_0)是![](https://www.zhihu.com/equation?tex=f%28x%29)的不动点，即![](https://www.zhihu.com/equation?tex=f%28x_0%29%3Dx_0)，那么有![](https://www.zhihu.com/equation?tex=f%28f%28x_0%29%29+%3D+f%28x_0%29+%3D+x_0)。

这意味着![](https://www.zhihu.com/equation?tex=f%28x%29)的任何不动点也必须是![](https://www.zhihu.com/equation?tex=g%28x%29)的不动点。

因此![](https://www.zhihu.com/equation?tex=f%28x%29)也拥有一个不动点![](https://www.zhihu.com/equation?tex=x%3D0)，即![](https://www.zhihu.com/equation?tex=f%280%29%3D0)。

直接研究![](https://www.zhihu.com/equation?tex=f%28x%29)的迭代非常复杂，我们希望找到这样一个可逆的变换函数![](https://www.zhihu.com/equation?tex=%5Calpha%28x%29)，使得对![](https://www.zhihu.com/equation?tex=x)应用一次![](https://www.zhihu.com/equation?tex=g%28x%29)迭代，在![](https://www.zhihu.com/equation?tex=%5Calpha)的作用下里，仅仅相当于![](https://www.zhihu.com/equation?tex=%2B1)，这样的话，迭代半次就等价于![](https://www.zhihu.com/equation?tex=%2B%5Cdfrac%7B1%7D%7B2%7D)。

即：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%5Calpha%28g%28x%29%29+%26%3D+%5Calpha%28x%29+%2B+1+%5C%5C+%5Calpha%28f%28x%29%29+%26%3D+%5Calpha%28x%29+%2B+%5Cfrac%7B1%7D%7B2%7D+%5C%5C+%5Cend%7Baligned%7D)

于是我们的函数方程就简化为了：

![](https://www.zhihu.com/equation?tex=+%5Calpha%28x%5E2%2Bx%29+%3D+%5Calpha%28x%29+%2B+1)

这种方程叫做阿贝尔方程。

如果我们能找到![](https://www.zhihu.com/equation?tex=%5Calpha%28x%29)以及它的反函数![](https://www.zhihu.com/equation?tex=%5Calpha%5E%7B-1%7D%28x%29)，那么![](https://www.zhihu.com/equation?tex=f%28x%29)就不再神秘，它可以由以下公式精确定义：

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle++f%28x%29+%3D+%5Calpha%5E%7B-1%7D%5Cleft%28+%5Calpha%28x%29+%2B+%5Cfrac%7B1%7D%7B2%7D+%5Cright%29+)

不过阿贝尔方程![](https://www.zhihu.com/equation?tex=%5Calpha%28x%5E2%2Bx%29%3D%5Calpha%28x%29%2B1)并没有封闭解，我们只能用级数展开获得解析解。

在不动点![](https://www.zhihu.com/equation?tex=x%3D0)附近求导可知![](https://www.zhihu.com/equation?tex=g%27%280%29+%3D+%282x%2B1%29%7C_%7Bx%3D0%7D+%3D+1)。

因此这是一个抛物型不动点，它附近的动力学行为类似于：

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Calpha%28x%29+%5Capprox+-%5Cfrac%7B1%7D%7Bx%7D+%2B+K+%5Ccdot+%5Clog%28x%29+%2B+C_0+%2B+O%28x%29+)

接着直接代入原方程![](https://www.zhihu.com/equation?tex=%5Calpha%28x%5E2%2Bx%29+%3D+%5Calpha%28x%29%2B1)中，

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%5Calpha%28x%5E2%2Bx%29+%26%5Capprox+-%5Cfrac%7B1%7D%7Bx%5E2%2Bx%7D+%2B+K+%5Clog%28x%5E2%2Bx%29%5C%5C+%5Calpha%28x%29%2B1+%26%5Capprox+-%5Cfrac%7B1%7D%7Bx%7D+%2B+K+%5Clog%28x%29+%2B+1%5C%5C+%5Cend%7Baligned%7D)

接着让两边的奇异性抵消，直接在原点使用泰勒展开即可

左边有点复杂：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+-%5Cfrac%7B1%7D%7Bx%5E2%2Bx%7D+%26%3D+-%5Cfrac%7B1%7D%7Bx%281%2Bx%29%7D+%3D+-%5Cfrac%7B1%7D%7Bx%7D%281-x%2Bx%5E2-%5Cdots%29+%3D+-%5Cfrac%7B1%7D%7Bx%7D+%2B+1+-+x+%2B+%5Cdots%5C%5C+%5Clog%28x%5E2%2Bx%29+%26%3D+%5Clog%28x%281%2Bx%29%29+%3D+%5Clog%28x%29+%2B+%5Clog%281%2Bx%29+%3D+%5Clog%28x%29+%2B+x+-+%5Cfrac%7Bx%5E2%7D%7B2%7D+%2B+%5Cdots+%5Cend%7Baligned%7D)

代入就有：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%5Calpha%28x%5E2%2Bx%29++%26%5Capprox+-%5Cfrac%7B1%7D%7Bx%5E2%2Bx%7D+%2B+K+%5Clog%28x%5E2%2Bx%29%5C%5C+%26%5Capprox+%28-%5Cfrac%7B1%7D%7Bx%7D+%2B+1+-+x%29+%2B+K%28%5Clog%28x%29+%2B+x%29+%2B+%5Cdots+%5C%5C+%26%3D+-%5Cfrac%7B1%7D%7Bx%7D+%2B+%5Clog%28x%29+%5Ccdot+K+%2B+1+%2B+%28K-1%29x+%2B+%5Cdots+%5Cend%7Baligned%7D)

右边很简单：

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Calpha%28x%29%2B1%5Capprox+-%5Cfrac%7B1%7D%7Bx%7D+%2B+K+%5Clog%28x%29+%2B+1)

忽略相同部分，为了让等式成立，必须有![](https://www.zhihu.com/equation?tex=K-1%3D0)，所以![](https://www.zhihu.com/equation?tex=%5Cboxed%7BK%3D1%7D)。

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle++%5Calpha%28x%29+%5Capprox+-%5Cfrac%7B1%7D%7Bx%7D+%2B+%5Clog%28x%29+%2B+O%28x%29+)

同理也可以把剩下的一项一项求出来，这种费人的活儿直接编程就行。

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Calpha%28x%29+%3D++-%5Cfrac%7B1%7D%7Bx%7D+%2B+%5Clog+x++-+%5Cfrac%7Bx%7D%7B2%7D+%2B+++%5Cfrac%7Bx%5E2%7D%7B3%7D+-+%5Cfrac%7B13+x%5E3%7D%7B36%7D+%2B+%5Cfrac%7B113+x%5E4%7D%7B240%7D++-+%5Cfrac%7B1187x%5E5%7D%7B1800%7D+%2B+%5Cfrac%7B877x%5E6%7D%7B945%7D++-+%5Cfrac%7B14569x%5E7%7D%7B11760%7D++%2B+%5Cfrac%7B176017x%5E8%7D%7B120960%7D++-+%5Cfrac%7B1745717x%5E9%7D%7B1360800%7D+%2B+%5Cfrac%7B88217x%5E%7B10%7D%7D%7B259875%7D+-+O%28x%5E%7B11%7D%29)

![](https://picx.zhimg.com/v2-4623d7e762294d3f1f012ae1569caffe_r.jpg?source=2c26e567)

然后你会发现，不对啊，这个解怎么只对![](https://www.zhihu.com/equation?tex=x%5Cgeqslant-%5Cdfrac%7B1%7D%7B2%7D)成立？

因为函数![](https://www.zhihu.com/equation?tex=g%28x%29+%3D+x%5E2%2Bx)并非单射，除了顶点![](https://www.zhihu.com/equation?tex=x%3D-%5Cdfrac%7B1%7D%7B2%7D)外，对于任何一个![](https://www.zhihu.com/equation?tex=y)值，都有两个![](https://www.zhihu.com/equation?tex=x)值与之对应，且它们满足![](https://www.zhihu.com/equation?tex=x_1%2Bx_2+%3D+-1)。

这意味着它的半迭代函数![](https://www.zhihu.com/equation?tex=f%28x%29)必须以某种方式继承这种对称性，我们用共轭函数法解阿贝尔方程得到的解实际上是基于![](https://www.zhihu.com/equation?tex=g%28x%29)的一个特定反函数分支![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B%5Csqrt%7B1%2B4y%7D-1%7D%7B2%7D)构建的，这个分支总是将值映射到区间的右半部分。

因此，它只构成了完整解的一部分。

为了构建在整个实数轴上都正确的解，我们需要根据![](https://www.zhihu.com/equation?tex=x)所在的动力学区域来定义![](https://www.zhihu.com/equation?tex=f%28x%29)。

而临界点就是抛物线的顶点![](https://www.zhihu.com/equation?tex=x%3D-0.5)。

对于右半边![](https://www.zhihu.com/equation?tex=x+%5Cgeqslant+-0.5)，此时我们称之为![](https://www.zhihu.com/equation?tex=f_R%28x%29)，这个解在动力学上是稳定的，并且将这个区域映射到自身。

![](https://www.zhihu.com/equation?tex=f_R%28x%29+%3D+%5Calpha%5E%7B-1%7D%28%5Calpha%28x%29+%2B+0.5%29+%5Cquad+%5Ctext%7Bfor+%7D+x+%5Cgeqslant+-0.5+)

对于左半边![](https://www.zhihu.com/equation?tex=x+%3C+-0.5)，设![](https://www.zhihu.com/equation?tex=y+%3D+f%28x%29)，那么根据定义有![](https://www.zhihu.com/equation?tex=f%28y%29+%3D+g%28x%29)。

由于![](https://www.zhihu.com/equation?tex=x+%3C+-0.5)，因此![](https://www.zhihu.com/equation?tex=g%28x%29+%3D+x%5E2%2Bx)的值是落在![](https://www.zhihu.com/equation?tex=y+%5Cgeqslant+-0.25)区间的，这是![](https://www.zhihu.com/equation?tex=f_R%28x%29)的良定义域。

所以我们有![](https://www.zhihu.com/equation?tex=f_R%28y%29+%3D+g%28x%29)，施加反函数解出![](https://www.zhihu.com/equation?tex=y)，我们得到![](https://www.zhihu.com/equation?tex=y+%3D+f_R%5E%7B-1%7D%28g%28x%29%29)。

而![](https://www.zhihu.com/equation?tex=f_R%28x%29)的反函数![](https://www.zhihu.com/equation?tex=f_R%5E%7B-1%7D%28y%29)很容易得到，根据阿贝尔方程定义，直接后退半步即可：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+f_R%5E%7B-1%7D%28y%29+%26%3D+%5Calpha%5E%7B-1%7D%28%5Calpha%28y%29+-+0.5%29++%26%26%5Ctext%7Bfor%7D%5Cquad+y+%3C+-0.25%5C%5C+%5Cend%7Baligned%7D)

因此，完整的、在整个实数轴上正确的函数![](https://www.zhihu.com/equation?tex=f%28x%29)应该定义为：

![](https://www.zhihu.com/equation?tex=f%28x%29+%3D%5Cleft%5C%7B+%5Cbegin%7Baligned%7D+%26%5Calpha%5E%7B-1%7D%5Cleft%28%5Calpha%28x%29+%2B+%5Cfrac%7B1%7D%7B2%7D%5Cright%29+%26+%5Ctext%7Bif+%7D+x+%5Cgeqslant+-%5Cfrac%7B1%7D%7B2%7D+%5C%5C+%26%5Calpha%5E%7B-1%7D%5Cleft%28%5Calpha%28x%5E2%2Bx%29+-+%5Cfrac%7B1%7D%7B2%7D%5Cright%29+%26+%5Ctext%7Bif+%7D+x+%3C+-%5Cfrac%7B1%7D%7B2%7D+%5Cend%7Baligned%7D+%5Cright.)

![](https://pica.zhimg.com/v2-a38ee34f62c7e5850b0b199f461e95cb_r.jpg?source=2c26e567)

而且这个分析不止对半迭代成立，实际上可以对![](https://www.zhihu.com/equation?tex=g%28x%29+%3D+x%5E2%2Bx)开任意次函数根。

# 前言 & 目录
[](https://zhuanlan.zhihu.com/p/26785682466)

本书旨在解答以下问题：

- 在数学教育领域，有哪些能够最大化学生学习效果和才能培养的技术？
- 这些技术为何如此有效？如果它们真的这么有效，为什么在传统课堂中却很少被采用？
- Math Academy 是如何运用这些技术的？

诚然，本书行文冗长，包含大量从文献中摘录的冗长引文，但我们坚信这些「收据」对建立读者信任至关重要。教育领域的著述常存在引用文献与主张脱节的积弊，因此我们面临两难选择：(a) 通过广泛引证文献建立可信度，或 (b) 精简表述。最终我们选择向可信度倾斜——根据经验，若可信度不足，任何沟通都将失效。

本书写作兼顾多元的读者群体：学生、教师、家长、研究者、技术专家、数学爱好者、学术教练等。我们力求为深度阅读者提供丰富信息，同时采用便于快速浏览的架构设计，满足浅层阅读的需求。

本书目前处于编写中的草稿阶段，约完成五成内容。虽经悉心撰写，但尚未进行正式校对。

## 一、绪论

[第一章 两个标准差问题的解决方案](https://zhuanlan.zhihu.com/p/16343054758)

[第二章 学习的科学](https://zhuanlan.zhihu.com/p/16601875270)

[第三章 核心科学：大脑的工作机制](https://zhuanlan.zhihu.com/p/17839729470)

[第四章 核心技术：知识图谱](https://zhuanlan.zhihu.com/p/18159574293)

[第五章 问责与激励](https://zhuanlan.zhihu.com/p/21305809972)

## 二、消除关键误解

[第六章 根深蒂固的神经迷思](https://zhuanlan.zhihu.com/p/21708130345)

[第七章 个体差异：学习过程中的迷思与现实](https://zhuanlan.zhihu.com/p/24164944495)

[第八章 有效练习的迷思与现实](https://zhuanlan.zhihu.com/p/25744478576)

[第九章 关于数学加速的迷思与现实](https://zhuanlan.zhihu.com/p/25955988878)

## 三、认知学习策略

[第十章 主动学习](https://zhuanlan.zhihu.com/p/26983893625)

[In Progress] Chapter 11. Direct Instruction

[第十二章 刻意练习](https://zhuanlan.zhihu.com/p/28179723884)

[第十三章 精熟学习](https://zhuanlan.zhihu.com/p/28954028250)

[第十四章 最小化认知负荷](https://zhuanlan.zhihu.com/p/29101571919)

[第十五章 培养自动性](https://zhuanlan.zhihu.com/p/29760184109)

[第十六章 递进式学习](https://zhuanlan.zhihu.com/p/30567086704)

[第十七章 避免干扰](https://zhuanlan.zhihu.com/p/30839999273)

[第十八章 间隔重复（分散练习）](https://zhuanlan.zhihu.com/p/1895420939283440005)

[第十九章 交错练习（混合练习）](https://zhuanlan.zhihu.com/p/1895806402250905344)

[第二十章 测试效应（提取练习）](https://zhuanlan.zhihu.com/p/1896502230300988542)

[第二十一章 针对性补习](https://zhuanlan.zhihu.com/p/1896508097243104808)

[第二十二章 游戏化](https://zhuanlan.zhihu.com/p/1896510468136341564)

[第二十三章 利用认知学习策略需要技术](https://zhuanlan.zhihu.com/p/1901295431943692756)

## 四、辅导

[In Progress] Chapter 24. Parental Support

[In Progress] Chapter 25. In-Task Coaching

## 五、技术深度剖析

[第二十九章 间隔重复的技术深度剖析](https://zhuanlan.zhihu.com/p/1902336777538245191)

[第三十章 诊断性考试的技术深度剖析](https://zhuanlan.zhihu.com/p/1903424959960843411)

[第三十一章 学习效率的技术深度剖析](https://zhuanlan.zhihu.com/p/1903464003432322809)

[第三十二章 核心主题优先策略的技术深度剖析](https://zhuanlan.zhihu.com/p/1904984795546628821)

## 六、常见问题

[常见问题解答：练习体验](https://zhuanlan.zhihu.com/p/1904986844518684475)

[常见问题解答：学生行为](https://zhuanlan.zhihu.com/p/1905583686872704300)

[常见问题解答：XP（经验值）和练习安排](https://zhuanlan.zhihu.com/p/1905584106550559607)

[常见问题解答：诊断评估与课程体系](https://zhuanlan.zhihu.com/p/1905584201153115679)

[常见问题解答：其他](https://zhuanlan.zhihu.com/p/1905584303947101188)

## 术语表

## 参考文献

> [Thoughts Memo](https://link.zhihu.com/?target=http%3A//paratranz.cn/projects/3131)汉化组译制
> 感谢主要译者 claude-3.7-sonnet，校对 Jarrett Ye
> 原文：[The Math Academy Way: Using the Power of Science to Supercharge Student Learning](https://link.zhihu.com/?target=https%3A//docs.google.com/document/d/1LLZK_34Oer9LwuqAv-pqxfXlR8n7V8zJ_MO323R7egI)

# 中国的高中数学教育有哪些内容讲得太多或太少？
[](https://www.zhihu.com/question/295860086/answer/637239717)

## 一、讲的太少的部分：

【注】答主所界定的“讲的太少”的部分，主要有四方面：

a）高中物理课需要，但是高中数学课没讲的，比如(1)；

b）大学基础数学课默认学生已经较好掌握，但是高中数学课没讲透彻的，比如(3)(4)；

c）大一大二的理工科基础课（如物理、电路、信号与系统等）默认学生已经掌握，但是所用到的数学却安排在高年级讲授，因此必须下放一小部分内容到高中，比如(2)。

d）对大学基础数学课程简化以后下放高中，让学生平稳过渡，比如(5)(6)。

## （1）空间向量。

物理课大量使用矢量（比如位移、速度、加速度、力、动量、角动量、电场、磁场等）以及矢量运算。现在高中数学只讲向量的加减、数乘、正交分解，却不讲**向量积**，这是很有问题的。由于缺乏向量积的概念，高中物理只好舍弃很多内容，比如把力矩按标量来处理，而角动量的概念压根不讲（奇怪的是高中物理不讲角动量，却要讲开普勒第二定律），个人认为这是高中物理的缺憾。高中电磁学讲授安培力、洛伦兹力等概念时，只能让学生死记左手定则右手定则。假如讲了向量积，那物理课就可以省去各种繁琐的左手定则右手定则之类，毕竟记公式比记这些东西快速且准确得多。

【拓展】可以讲一讲混合积，其实就是平行六面体的体积，它跟三阶行列式也有联系。

## （2）复数。

这部分在高中数学课就像是走过场一样，唯一的目的就是高考选择题里出一道简单的复数的四则运算题，没有多大意思。但是，绝大部分理工科生在大一要学习大学物理，涉及用二阶微分方程解决振动问题，另外在大二的电路基础课里也涉及线性电路的微分方程，信号与系统课中大量用到时域-频域变换等等。这些课程都默认学生对复数有一定程度的掌握，不仅仅是复数代数形式的四则运算，更要掌握复数的三角和指数形式以及一元二次方程有复根时如何处理。考虑到大部分学校在大二下或大三才开设复分析（或复变函数）课，答主认为，有必要在高中数学课上讲授复数的代数形式、**指数形式**和**三角形式**及其互相转换。高中数学课应强调**棣莫弗公式**，补充**欧拉公式**。另外，学生会处理实系数一元二次方程有复根的情况。

【拓展】有条件的学校以及学有余力的学生应知道**代数基本定理**以及**实系数方程虚根成对定理**，能够把一些简单的多项式在复数域内**彻底因式分解**为一次多项式之积。

## （3）三角函数和反三角函数。

首先，高中数学课要把六种三角函数讲全。现行教材只讲了sin, cos和tan，对sec, csc和cot只字不提，然而大学的微积分教材从来不避讳后三者。另外，答主始终不能理解为什么现行教材直接把**反三角函数**删得一干二净。首先，这是巩固反函数概念的一个很好的例子；更要紧的是学生在大一微积分课上遇到形如![](https://www.zhihu.com/equation?tex=%5Cint_%7Ba%7D%5E%7Bb%7D%5Cfrac%7B1%7D%7B1%2Bx%5E2%7Ddx)的积分，结果出现了一个奇怪的东西叫![](https://www.zhihu.com/equation?tex=%5Carctan+x)，他们的高中老师却从来没讲过，那他们找谁说理去？难道让大学老师给他们补习反三角函数吗？

## （4）基本的数理逻辑。

要让学生熟练使用与、或、非等**逻辑联结词**，以及存在、存在唯一、对于任意等**量词**。特别需要强化的是**四种命题**，尤其是给出一个含有量词的命题，要求正确写出另外三种命题。高考对此要求低，于是很多老师就忽视了这部分的训练，然而大一微积分课一开始就要用极限的epsilon-N定义证明各种的命题，并且几乎所有的大学数学课程都大量使用反证法。假如学生无法正确写出一个命题的逆、否、逆否形式，那往往第一步就错了。

## （5）微积分。

高中数学对于微分学一直都只讲个皮毛，主要是针对基本初等函数及其和差积商或复合函数做大量求导训练，目的在于分析单调性，求函数的极值、最值。结果就是学生对于求导这件事只记住了几个公式，学了一点套路，但是把微分学给学歪了。一个学生可能对初等函数求导很熟练，但如果你问他导数的定义，或者用定义去求导数，或者问他导数的存在性，他可能根本就不会，这是典型的只死记硬背了几个公式却忘了根本。

高中数学对积分有时压根不讲（如大纲版教材），有时讲得很浅（如新课标教材），2019年新教材似乎又回到大纲版的老路上去了，看样子现在这些教材基本是放弃治疗了。只讲微分不讲积分，可能全世界只有中国的教材编者敢这么做吧，说实话挺搞笑的。要讲微积分就应该把微分和积分讲全。如果能把微分学、积分学简化后下放到高中，有助于高中和大学衔接，能起到平缓学习曲线的作用。高中时第一次接触微积分，会做一点计算，留下一个初步印象；而大学学习微积分乃至数学分析就要强调严谨性，强调微积分的内核逻辑，提高证明题的比重。这是一个螺旋上升的路线。

至于高中阶段微积分应该讲授哪些内容？答主认为，至少应该呈现一元微积分的完整轮廓，主要包括：

**极限**（即使不讲极限的epsilon-delta定义也无妨，但一定要向学生渗透极限思想，做一些简单的极限四则运算）

**连续**（你可以不讲一致连续，但是介值定理高考特别喜欢考，因此可以讲讲）

**微分**（微分中值定理也是高考大题的一个秒杀技巧，如果有条件还可以讲讲泰勒级数、洛必达法则等等）

**积分**（不一定要引入黎曼积分的精确定义，但是分划思想肯定是要讲的；主要的计算内容是定积分、原函数与不定积分，要会简单的换元积分法、分部积分法）。

【拓展】简单的线性常微分方程，级数的初步知识等等。其实在讲等比数列的时候完全可以拓展一下几何级数。

其实，对于学有余力的学生，高一暑假就可以自学微积分了，因为高一数学把基本初等函数都讲完了。有了微积分的工具，对于学习解析几何（需要用到隐函数求导）、连续型随机变量（需要用到定积分）等都有帮助。

## （6）线性代数。

可以先讲一点二阶矩阵和三阶矩阵，特别是借助形象化的**平移、旋转、伸缩等变换**引入课程，不一定一上来就要引入线性空间这种抽象概念。答主非常赞赏选修4-2，不是一上来就讲抽象的东西，而是借助一些几何观念，特别是简单的线性变换在单位正方形上的作用，让学生有一个直观的理解，进而提炼出抽象的理论。用这种几何讲法，**逆变换、方阵的逆**的意义也就比较容易讲清楚。把**行列式**解释成体积的放大因子是很有助于理解的。至于**特征值和特征根、相似标准型**等内容，可以视课时情况而定。

【拓展】答主希望线性代数在高中占有4~5周的学时。进度快的学校能讲一点**二次型**，这样就能对一般二次曲线做分类，和解析几何相呼应。80年代的甲种本教材其实讲到了二次曲线的分类，但他们用的是标量运算，式子特别长。如果用二次型就会更清楚，比如，学生就能明白为什么初中老师说反比例函数![](https://www.zhihu.com/equation?tex=y%3D%5Cfrac%7Bk%7D%7Bx%7D)的图象是双曲线，而且是等轴双曲线。另外，高中数学课讲的“双勾函数”![](https://www.zhihu.com/equation?tex=y%3Dx%2B%5Cfrac%7Ba%7D%7Bx%7D)的图象也是双曲线，根据其渐近线的夹角可以直接求出离心率。

## 二、讲歪了的部分：

## （1）解析几何。

花了大量时间，就是研究一个套路：联立->韦达定理->解决长度、面积、轨迹等问题。一次和二次曲线的交点问题，说深了甚至可以达到代数几何的范畴，但是就高中数学所灌输的这些解析几何套路，一般的工科课程根本用不到，本科数学课程我也不知道哪门课用到这些套路了（如果有知道的请在评论里留言）。高中数学如此强调这个套路无非是因为高考数学的圆锥曲线大题是专门用来考察计算量的。其实，在圆锥曲线这一块，可以拓展的方向有很多，比如：隐函数及其导数（求切线方程）、极坐标系以及圆锥曲线的极坐标方程（极坐标在大学理工科课程中用处很大），还可以拓展到几何变换（平移、旋转、伸缩等）、一般二次曲线的判别。遗憾的是，这些经典内容在高中数学课中被完全无视。

【拓展】高中数学只讲平面解析几何，其实可以拓展一点简单的立体解析几何，比如讲一讲空间直线、平面的方程（和立体几何的坐标系法有很强的关联）和简单的二次曲面方程。

## （2）数列。

数列在十年前的高考中基本处于压轴题的地位（和不等式结合），有大量的题目，由各种千奇百怪的递推公式求通项；或者由各种千奇百怪的通项公式求前n项和，或者用各种奇妙的放缩证明一个不等式。虽说不等式是学习分析的基本功，但答主还是觉得高中数学把数列玩得太花哨了，华而不实。其实，数列有几个优先级更高的拓展方向，其一是**数学归纳法**，我们的高中数学课在这方面的训练是不足的，许多学生不会主动使用这个证明工具；其二是**数列极限**，这是学习分析的基础，其实可以向高中生介绍单调有界数列必收敛、夹逼收敛等判据。

近几年，全国卷从六道大题变为五道大题+一道选考题，数列大题和三角大题变成轮着考，所以对数列的要求下降了。现在的高中数学应该不会在数列这块花那么大精力，算是逐步回归基础。

## 三、讲的太多的部分：

## （1）古典概型。

这部分说实话应该连同排列组合一起下放到初中。像条件概率、全概率公式、贝叶斯公式，以及几何概型，可能初中生理解起来可能稍稍吃力，可以放到高一。高中概率与统计板块的重点还是在于随机变量的分布这一块。特别是学习了积分以后，就可以学习连续型随机变量的分布。

## （2）算法和程序框图。

这部分应该留给信息技术课。评论里有人对于高中数学课剔除算法和程序框图这一章颇有微词。其实，中学数学课也不是完全没讲算法，比如讲“连续函数”时就专门讲授二分法。但是算法之所以没有单独成章，简而言之四个字：课时不够。

前面我已经列举了一些高中数学讲的太少的知识点。这些知识点是必要的，如果学生不知道，到了大学学习基础数学课时就会很困惑。把这些欠缺的知识点补充进去以后，粗略估算一下高中数学大约需要**5个学期的时间才能讲完新课**，最后只剩下不到一个学期做高考总复习。在课时有限的情况下，势必要对课程内容作出取舍，不能无所不包。答主认为高中数学最重要的就是**四大核心板块（分析、代数、几何、概率与统计）**。

算法处于数学和计算机的学科交叉地带，但是一定要在数学课里单独成章做一点“科普”吗？现在信息技术课越来越普及，高中生在信息技术课上学一点算法和程序框图，然后再学一点编程，可谓有理论有实践，浑然一体。所以说，算法和程序框图放在信息技术课里是极其自然的，放到数学课里反而会占用本来就紧张的课时。在课时有限的情况下，应该让数学课专注四大核心板块。

=====================================================

## 4月11日补充：答主对于高中数学课程知识体系以及总体课时安排的建议。

总的来讲，高中数学（除去集合、简易逻辑等预备知识）应分为**四大核心板块**，编排顺序大致为：

**分析**（2.25学期）：不等式、函数的概念、数列、连续函数与介值定理、*简介实数的完备性、在连续性框架下讨论指对幂以及三角函数、一元函数的微积分

**代数**（0.75学期）：平面和空间向量、复数、线性代数初步

**几何**（1.25学期）：解三角形、立体几何、解析几何、常用的曲线坐标系、参数方程

**概率与统计**（0.75学期）：排列组合与二项式定理、典型的离散、连续随机变量及其分布、统计（如果课时允许，可以补充一点最小二乘法、参数估计、假设检验等知识）

当然，不一定要严格按照这四大板块的顺序，也可以相互穿插。比如，可以考虑：

1）学完了三角函数立即学习平面向量和解三角形，高中数学一直是把这两章放在一起讲；

2）立体几何先讲授纯粹的几何方法，之后再辅以空间向量方法；

3）把复数放到极坐标系之后学习，因为二者关联度很高；

4）微积分和线性代数可以放到最后学。高考也应该把微积分和线性代数作为最后两题压轴，毕竟高考是为大学选拔人才，而微积分和线性代数是大学数学的最基础。同时，圆锥曲线不再作为压轴题，可以改变考向（比如改为考曲线坐标系、坐标变换、参数方程）。

=======================================================

## 4月16日补充：答主关于高三一整年只复习、刷题而不学习新知识的评论

评论里有人认为补充内容过多。前面已经估计，讲授这些内容大约需要5学期。因此答主也承认，按照目前高中只讲两年新课，最后一年疯狂刷题的模式，讲授这些内容确实过多了。但是，我们的高中数学课程（教材）有一个严重的弊病，就是**知识点太少，导致高考数学为了维持一定的区分度，只好堆砌技巧，增大计算量**。 貌似难度大，其实知识点“含金量”极低。恐怕没有人认为这是一个好的命题趋势。答主认为唯一的解决办法就是增加高中数学的广度和深度。这样，在高考命题时就无需堆砌技巧和计算量，也可以达到区分和选拔的作用；同时，也许高考总复习的时间也能缩短，因为无须花大力气训练考生的熟练度和次级技巧，省下来的时间就可以用于学习更多真正有用的数学知识。

答主今年才听说北大数院办了英才班，专门招收那些高一、高二就在CMO获奖的同学，直接进入高等数学的学习。答主非常赞赏这种做法。这些同学可以直接跳过高三，少耽误一年的时间。

## 答主关于高中数学课程与教材难度的评论

随着教育产业化，教材越来越简单已经是一种趋势，甚至高考数学题越来越简单也是一种趋势。现在很多名牌高中的教师根本不用教材上课了，不仅仅是因为教材深度不够，更要命的是教材内容编排散乱，不利于教学。教材问题是很多网友的共识，在此我不多谈。

即使这样，在全国范围内仍有一大批学生，高中数学教材对他们而言如同天书。这只能说人与人的差异巨大。在一个班内，有的学生已经可以自学高数，而另一批学生甚至连初中的二次根式还不过关，处于两个极端的学生都无法理解对方的存在。答主认为，**应该为高中数学课程编写多套教材，满足不同层次学生的需要**。比如低级教材参照美国公立学校水平，中级教材参照现行水平，高级教材按照985理工科预备班的标准编写，侧重数学思维的培养，计算与证明兼顾，在内容上甚至可以将复变函数、抽象代数、微分几何、数论、组合数学的入门级内容下放。

但是为什么我们国家没有为高中生编写多套教材呢？说到底，高等学校招生还是以高考为主要参考，其他途径比例极低。而高考的考纲又是单一的，这就决定了全国高中教学标准的单一化，使得因材施教变得困难。

如果一个学生连高中数学课本都无法掌握，那几乎可以肯定他将来与理工科无缘了。假如高考数学是选考，那放弃数学、专注自己擅长的科目，是明智的选择。然而，我国高考制度对于这部分学生是很不友好的，他们没有选择余地，必须硬着头皮学数学。在某种程度上，答主也希望高考**数学不设为必考科目，而应变成数学和逻辑学的二选一**。对数学不是很感冒的同学，可选择逻辑学，对学习人文社科也有好处。而真正有潜力、有志于理工科的学生，现行教材显然是不能让人满意的，我们需要内容更完整、逻辑更严谨的教材，让这部分学生为大学理工科课程做好充分的准备。

=======================================================

## 5月1日补充：

似乎很多数学专业或者数学教育专业的人都反对再往高中数学教材里加东西，甚至还主张减的，这一点让答主感到很奇怪。

第一，课时不够，确实是个理由，但要仔细想想高中数学的那些课时到底干什么了，**有多少课时是浪费在向学生灌输高考技巧，而忽略了更重要的拓展方向上**。比如数列，等差和等比是基础，确实要讲，但后面又来各种花式变形，由递推花式求通项，由通项花式求和，于是数列这块本来两三周就能结束，却洋洋洒洒讲了一个月，真的有用吗？又如平面几何，大讲特讲联立-消元-韦达定理-运算这一个套路，洋洋洒洒讲了半个月，却对平移、旋转、一般二次曲线的判别、直线和圆锥曲线的极坐标方程，这些重要内容都忽视甚至刻意避讳，这样真的好吗？这些“无用”课时能不能省下来，换成真正对学生有益的东西？答主认为首先**要从高考的错误导向性改起**，并发挥其指挥棒作用，指导高中数学课程内容的改革。

第二，考虑到我国目前还难以做到因材施教，主流教材的确是要考虑全国大多数高中生的水平，但这样就会使前20%的学生处于吃不饱的状态。用对这部分人的耽误，来换取后30%的人的“舒适”，是否划得来？国家科技的发展，究竟是靠前20%，还是靠后30%？更何况，就算教材变简单，学生负担就一定减轻吗？当课本的题目难度甚至无法区分前70%的学生，这只会助推高考走向偏、怪、大运算量等邪路，然后再反作用于高中数学教育，形成恶性循环。因此答主从来不认为教材变简单就能减负。**“照顾大多数人”的结果，难保不是“全体跟着遭殃”**。答主认为对于这个问题最好的解法就是开设“逻辑学”课，让对数学不感冒的人改修逻辑，对于学习人文社科以及写文章都是有好处的。让高中数学教材的编者忽略掉处于尾部的学生，更充分地与大学课程衔接。

第三，有人说，高考只是个智商选拔而已，至于学生学了什么知识是无所谓的。当然要承认高考的选拔作用，但假如这些人说的有道理，那干脆我们高中什么都不用讲了，高考直接拼脑筋急转弯，根本不需要什么知识，纯粹拼智商就够了。还有的人说：高考考的是心理因素，那我们考脑筋急转弯也一样啊，你在家里做游戏猜脑筋急转弯，和你在高考的重压下考脑筋急转弯，效果能一样吗？于是我们高中课程什么也不用讲了，难道这就是这些人想要的高中教育？

# 如果让你来编排义务教育阶段至高中的数学课本，你会怎么编排？
[](https://www.zhihu.com/question/348694238/answer/1911919674796545217)

**本回答将展示一份由我自己尝试设计的全新高中数学课程大纲，并附以相应的教材框架构想。**

高中教育和教材改革问题一直是知乎上经久不衰的热点，前段时间刚讨论过不少相关话题，各方见解纷呈，但真正把自己的想法整理成具体的大纲或教材目录的知友似乎还是比较少见。（目前我了解到的有：[@Snorri](https://www.zhihu.com/people/440fa71f3d1bcfb8b239cb86a7cc7a9c)的**《悟数学》**系列教材、[@赛琳娜Selena](https://www.zhihu.com/people/5a46c8c032699b6bcfc14463dbeea262)的**“理想中学数学大纲”**、[@inversioner](https://www.zhihu.com/people/5b05d3f59971a55f88561284fc2d729e)的一些回答等等。）具体的、可见的大纲和教材目录是思想的最直观展现，于是**趁着上周刚投出一篇论文、做完一场报告，稍得余暇，**将过去的想法整理成文，权当抛砖引玉，供大家讨论评判。

这套设想中的教材总共八册，每册的主题分别如下：

- 第一册（基本初等函数）
- 第二册（平面三角）
- 第三册（数列与极限）
- 第四册（立体几何与球面几何初步）
- 第五册（初等数论与线性代数初步）
- 第六册（解析几何初步）
- 第七册（微积分初步）
- 第八册（概率论与统计学初步）

顺手还找了些pixabay上的无版权图片，自己设计了这八本教材的封面：（最开始想过用AI绘画来画二次元风格的封面，不过目前的效果不太让人满意= = 只能暂时用这些写实风格的封面了～）

![](https://pic1.zhimg.com/v2-340d494892304387a06a4ce048a51eb4_r.jpg?source=2c26e567)

**整体设计思路，主要基于以下几点考量：**

- 提供比较完整系统的初等数学内容：高中作为系统学习初等数学的最终阶段，若缺漏某些分支，大学里通常也很难再专门学到了。根据《数学辞海》的界定，“初等数学”包括算术、初等代数、初等几何（平面/立体）、平面三角、解析几何（平面/空间）、球面几何与球面三角等学科。这里面除了算术和平面几何分别在小学和初中学习之外，其余的分支都需要在高中有所包涵。
- 为高等数学的学习打开必要的窗口：主要是为微积分、线性代数、概率论与数理统计三门应用面广泛的数学基础课做铺垫。（另外需要注意：高中数学并不是只为大学数学系准备的，更要考虑到广泛的非数学理工类专业的需求。）
- 每册书的篇幅和分量比较均衡：目前做到了八册书每册都是五个必学章节（总共40个必学章节），后六册每册最后再各自安排一个选学章节（总共6个选学章节），相对均衡。
- 每册书内部能够自成体系、册与册之间又能环环相扣，让整套教材形成一个整体：避免旧教材“模块化”带来的知识碎片化、零散拼盘之弊。编排上，偏代数与分析的内容（1、3、5、7册）与偏几何的内容（2、4、6册）交替穿插安排（也得换换脑子调节思维节奏，防止单调），概统（8）放在最后，相邻两册之间要有一定的逻辑联系，例如第三册的极限为第四册立体几何里的逼近法提供思想基础，第五册的矩阵可以用在研究第六册解析几何里的坐标变换、第七册的微积分则为第八册概率统计里的连续型随机变量提供支撑等等。
- 重视数学与其他学科的联系：既要考虑“为其他学科学习准备好数学知识”的问题，又要考虑“借助其他学科的问题引发数学学习的需要”的问题。

> 另参见：[如何评价网络观点「论教材的『防自学』设计」? - 知乎](https://www.zhihu.com/question/665966876/answer/3634899520)、[如何评价民国时代的"初中算术"课程？大家觉得它的存在是民国教育落后的象征，还是值得我们参考的先进做法？ - 知乎](https://www.zhihu.com/question/1902439762050134431/answer/1903336299466818104)（高中数学内容体系发展史）

**需要说明：由于这里设计的大纲和教材体系纯属自娱自乐，即便未来真的写出书来也大概率只会是个别学生自行阅读的自学教材，99.999%不可能成为全国通用的正式教材——所以本设计并未考虑到任何来自学制、课时、高考制度、高考命题等方面的现实约束。**个人认为理想的学制或许是“5-3-4”（从小学挪一年到高中），那么假定高中不再需要腾出一年乃至更多的时间专门备考，总共有四年的教学时间，那么这八本书恰好一学期一本，比较合理甚至宽松（和上海的教学进度相仿）。如果还是像现在这样只有两年的教学时间，那可能就只能像03课标旧教材那样一学期学两本（总共也是八本），时间会紧凑许多，但也勉强= =  （总之比起大学的课时来说肯定是宽裕的）

欢迎大家讨论与转发，转载请联系作者。**由于本人并非数学专业出身，大学里学过的数学类课程也比较有限，可能对某些数学分支的把握不太准确，欢迎各位提意见。**

下面我们会对每一册的内容进行详细解析：（注意“目录”中的章节名以下是该章知识点大纲的罗列，而不表示具体教材就这么分节）




![](https://picx.zhimg.com/v2-f3415f26cdc506f4d8941f3d42f29808_r.jpg?source=2c26e567)

## 第一册（基本初等函数）

## 目录

- 第一章　数学的语言：集合与逻辑推理
- - 集合：概念与表示、关系与运算
- 逻辑用语：定义、命题（类型/关系）、逻辑连结词、量词、真值表
- 用集合与逻辑语言描述等式与不等式
- 推理与证明：合情推理（归纳/类比）、演绎推理（三段论）、直接证明（综合法/分析法）、间接证明（反证法）
- 第二章　函数的概念与性质
- - 映射与函数基本概念
- 函数的性质：单调性、奇偶性、最值
- 幂函数、多项式函数
- 第三章　指数运算与对数运算
- - 指数概念的推广（有理数指数幂、实数指数幂）
- 对数的概念与运算、对数的历史、对数在简化运算中的作用
- 第四章　指数函数与对数函数
- - 指数函数
- 对数函数
- 反函数的概念
- 函数增长快慢的比较，建立函数模型解决实际问题
- 第五章　函数、方程与不等式
- - 函数零点与方程根的联系（以二次函数与一元二次方程为例）
- 简单指数方程与对数方程的解法
- 二分法求方程近似解（此处渗透算法初步，讲解算法的概念、程序框图和语句）
- 不等式及其与函数和方程的联系（以一元二次不等式为例）
- 基本不等式  和它的几个重要变式

## 说明

**第一册的内容承袭经典，差不多就是旧教材的必修1。**仅有的不同就是将逻辑用语与推理和证明的内容挪到了第一章和集合放在一起作为预备知识，同时将一部分不等式的知识挪到第五章结合函数和方程一起讲解。这一思路类似17新教材，但旗帜鲜明地保留了被新教材删除的内容（如逆命题、否命题、逆否命题，逻辑连结词与/或等），也保留了“推理与证明”的一整章（除了数学归纳法放在后面第三册）**——这些内容不应该弱化，因为它不但是后续数学学习的重要基础，是说话必备的“语言”，还对提高全民逻辑水平和思辨能力、破除迷信愚昧、培养理性公民有关键作用，其价值远超解题技巧。**（从现在知乎上那么多“为什么不教逻辑学”的讨论，也能看出这部分知识的重要性了= =）

尽管新教材保留了全称命题和存在命题，但事实上也只讲了单独的“任意![](https://www.zhihu.com/equation?tex=%5Cforall)”和“存在![](https://www.zhihu.com/equation?tex=%5Cexists)”，对它们的联用（如“对任意……，都存在……”）也弱化了，但这种表述在后续学习中（如![](https://www.zhihu.com/equation?tex=%5Cvarepsilon-%5Cdelta)语言）极为常见，值得讲述。逻辑部分还增加了真值表，这是分析复杂命题的有效工具，未来还可以拓展到布尔代数、数字电路等。

**在函数基本概念之前恢复了“映射”。**

**将指数运算和对数运算独立成章，放在指数函数和对数函数之前，参考了沪教版新教材，是为了强调“运算”本身的重要性，让它不再只是函数的附庸。**尽管计算机发明后，对数在简化运算上的重要作用渐已成为历史，但这种思想方法还是值得让高中生有所体会（历史上对数的引入比指数还早，拉普拉斯认为对数的发明延长了天文学家的寿命）。讲过指数函数和对数函数之后，“反函数”就有了非常好的例子。至于幂函数以及多项式函数则放在第二章（类似人教A版新教材），作为探究函数性质的载体，也可以防止幂函数和指数函数放得太近总有人将它们俩搞混= =

想过是否给“算法初步”专门开一章，后来还是没这样做，转而从二分法开始渗透算法思想（包括框图和语句），后续每一册都在需要的地方渗透算法。因为已经学过了指数函数和对数函数，也比较过几种函数增长的快慢，所以合适的时候或许还可以讲讲算法的时间复杂度～ 例如O(n)、O(log n)、O(n^2)、O(2^n)等。

**关于不等式，本册只是以不等式和函数、方程的联系为切口做了简单的介绍，因此不等式的内容还没有讲完。**在第三册会有专门的不等式章节，一元一次不等式组和线性规划的内容则初步打算放在第六册和直线方程一起介绍（这个处理方法是适合高中教学的，但是也许模糊了线性规划本身是求二元函数极值这一本质，所以具体的位置还可以再斟酌）。

![](https://picx.zhimg.com/v2-740b78ca1cb200bb7a0693cc7383d857_r.jpg?source=2c26e567)

## 第二册（平面三角）

## 目录

- 第一章　三角函数
- - 任意角、弧度制
- 任意角三角函数的定义、基本关系、诱导公式
- 三角函数的图像及性质，函数的周期性
- 正弦型函数  的图像以及各参数的实际意义、利用三角函数给实际问题建模
- 第二章　平面向量
- - 向量的实际背景与基本概念
- 向量的线性运算、投影、数量积（点乘）
- 向量基本定理、向量分解、向量运算的坐标表示
- 向量模型在几何与物理中的应用
- 第三章　三角恒等变换与解三角形
- - 简单的三角恒等变换
- 正弦定理、余弦定理
- 解三角形在实际测量问题中的应用
- 三角形性质的研究（面积、外接圆、内切圆）
- 第四章　反三角函数与三角方程
- - 反三角函数的性质与图像
- 简单三角方程的解法
- 第五章　复数的引入
- - 回顾数系的扩充过程、虚数引入的历史背景
- 复数的基本概念、代数/三角/指数形式，复数的运算与几何意义
- 在复数范围内求解一元二次方程、复数的实际应用

## 说明

**第二册主要讲平面三角（三角函数），也是经典内容。当然平面向量也一起讲，而复数则因其与平面向量的密切联系同样纳入这一册中。**

关于三角和向量内容的组织，不同教材差异很大：新人教A版是先讲三角函数（含三角恒等变换），然后讲向量，解三角形作为向量的应用甚至连个单独的节标题都不配拥有；新人教B版是先讲平面向量的线性运算，然后再讲三角函数（含三角恒等变换），最后才讲数量积和解三角形；新湘教版是先讲三角函数再讲平面向量然后再讲三角恒等变换；新沪教版更是把三角比、三角恒等变换和解三角形合成“三角”一章放在前面，然后下一章才是“三角函数”（同样遵循了之前提到的“运算与函数相分离”的原则）…… 思来想去，最后决定暂时还是采用03课标老教材的顺序，即“三角函数 → 平面向量 → 三角恒等变换 → 解三角形”**——把向量插在中间承前启后，一方面分散难点，另一方面给推导三角恒等式和余弦定理提供工具。**

> **另一个思路是： 第一章 三角比与解三角形；第二章 三角函数与反三角函数；第三章 平面向量；第四章 三角恒等变换与三角方程。**

从突出重点的角度来看，三角函数里重点讲正弦（![](https://www.zhihu.com/equation?tex=%5Csin)）、余弦（![](https://www.zhihu.com/equation?tex=%5Ccos)）和正切（![](https://www.zhihu.com/equation?tex=%5Ctan)）是合适的，从常用性的角度来看可以加入余切（![](https://www.zhihu.com/equation?tex=%5Ccot)），但正割（![](https://www.zhihu.com/equation?tex=%5Csec)）和余割（![](https://www.zhihu.com/equation?tex=%5Ccsc)）至少也需要在教材里有所提及。三角恒等变换中需要推导出积化和差、和差化积、半角公式、辅助角公式，但不要求记忆。

解三角形中新增一节“三角形性质的研究”，例如三角形面积公式、外接圆和内切圆半径等。这东西本来老师应该也会讲，就没必要在课本里藏着掖着了= =

恢复了以往老教材中“反三角函数与三角方程”一章，弥补了删除反三角函数的遗憾。三角方程限于可以求解析解的最简单的几种形式——其实高考里本来也考，不如堂堂正正拿出来归纳解法。至于复杂的三角方程，就用图像法或者计算机进行求解。（同样的思路也适用于上一册的“简单指数方程与对数方程的解法”。）

关于复数，重点在于深入阐述其引入的历史背景与数学必然性，并提供切实的应用实例**（避免直接沦为用来出题的玩具= =）**，尤其是“在复数范围内求解一元二次方程”很有必要专门介绍。**复数的三角形式绝对应该是必修内容（而不是像现行课标一样的选修），否则很难讲清楚复数乘除法的几何意义。**至于指数形式倒可以选学，尽管欧拉公式很优美也很重要，但是复指数的定义要用到指数的级数展开，现阶段暂时无法严谨推导，可以放在第七册微积分初步中再作介绍。

> 另参见：[有哪些数学理论最初被认为「毫无用处」，却在某个领域意外成为关键技术支柱？ - 知乎](https://www.zhihu.com/question/14841937090/answer/128776917467)

![](https://picx.zhimg.com/v2-871acd89a4c026f6fef25ad24b7063e6_r.jpg?source=2c26e567)

## 第三册（数列与极限）

## 目录

- 第一章　从自然数集到实数集
- - 自然数集、整数集、有理数集、实数集
- 自然数的定义（皮亚诺公理）、数学归纳法
- 从度量引入实数（可公度与不可公度）、逼近法
- （选学）实数集的完备性
- 第二章　常用不等式
- - 均值不等式的推广（调和平均≤几何平均≤算术平均≤平方平均）
- 绝对值不等式、三角不等式
- 柯西不等式
- 第三章　数列
- - 数列的一般概念、通项与求和
- 等差数列
- 等比数列
- 递推数列的解法与模型、斐波那契数列与黄金分割
- 第四章　数列的极限
- - 极限思想的历史起源与数列极限的直观定义
- 极限定义的严格化：  语言
- 数列极限的相关定理与四则运算
- 无穷大与无穷小
- 无穷递缩等比数列的求和问题、循环小数化分数
- （选学）无穷级数的概念与收敛性研究
- 第五章　函数的极限
- - 函数极限的直观定义与严格化定义：  语言
- 函数极限的相关定理与四则运算
- 函数的连续性
- 两个重要极限：  、
- （选学）无穷小的比较、等价无穷小
- 第六章*　无限（选学）
- - 有限集合与无限集合
- 可数无限与不可数无限、无限集合的势
- 集合论与现代数学基础

## 说明

**第三册其实是“分析入门”——考虑到极限概念与极限思想对人类深刻认识和表达现实世界的重要性，决定不再非得等到第七册（微积分初步）再去介绍极限了，而是将它提前到第三册，同与它关系紧密的数列合编为单独一册。**当然，实数集和不等式的理论是学习数列和极限的必要基础，也包括在这一册中。如此一来，“自然数集 → 实数集 → 不等式 → 数列 → 数列的极限 → 函数的极限”，逻辑连贯，一气呵成。**提前引入极限思想，也能为下一册立体几何里一些需要用“逼近法”解决的问题提供铺垫。**

第一章是基础，重点有两个：通过自然数公理化定义得来的数学归纳法（这在后面不等式和数列的证明中经常用到），以及实数集的连续性（完备性，为极限的存在性提供理论支撑）。**尽管上一册末尾刚把数系扩充到复数，这一册突然又开始重头讲自然数到实数集，确实有点突兀…… 但这一点上暂时想不到更优美的安排= =**（硬要解决的话，复数后推到第五册，把排列组合或基础统计的内容提前到第二册，但这些和第二册的主题“平面三角”差别就太大了= =）

第二章就是之前第一册没讲完的不等式内容，可以看作是旧教材选修4-5《不等式选讲》的浓缩。除了把第一册浅浅讲过的基本不等式推广到更广义的均值不等式以外，还介绍了绝对值不等式（三角不等式）和柯西不等式——后者因为上一册刚讲过向量的数量积，应该还是好理解的。利用数学归纳法还可以证明更多不等式，如伯努利不等式等。

第三章数列是数学中历久弥新的内容，这里更强调了递推数列的讨论，然后自然引申到第四章“数列的极限”以及第五章“函数的极限”。**对于极限，先讲历史渊源和几何直观，再去做严格化定义（无论是数列极限的**![](https://www.zhihu.com/equation?tex=%5Cvarepsilon-N)**语言还是函数极限的**![](https://www.zhihu.com/equation?tex=%5Cvarepsilon-%5Cdelta+)**语言都是如此）。**在数列极限之中可以通过无穷求和的例子渗透一下无穷级数的概念，探讨一些简单的收敛性或者求和交换性的问题，但点到为止，无需过难。

**“无穷”/“无限”是贯穿本册的核心概念（例如无限数列、无穷级数、无穷大与无穷小），因此设计了第六章“无限”作为选学章节，从另一个角度（集合论的角度）去阐释“无限”，渗透现代数学思想。**在这一章可以聊聊希尔伯特旅馆问题，简单接触下罗素悖论，或者去证明“全体整数与全体偶数一样多”、“全体实数比全体有理数更多”，等等。这一章同时也是对第一章“从自然数集到实数集”的呼应。

![](https://picx.zhimg.com/v2-f3523d691a47989b58b8edaec63c6727_r.jpg?source=2c26e567)

## 第四册（立体几何与球面几何初步）

## 目录

- 第一章　空间中的直线和平面
- - 从空间图形中抽象出基本元素：点、直线、平面
- 平面的基本性质
- 直线与直线、直线与平面、平面与平面的位置关系
- 第二章　简单空间几何体
- - 多面体与旋转体：柱、锥、台、球
- 简单几何体表面积与体积的计算
- 正多面体、欧拉公式（  ）
- 画法几何基础：投影、直观图、三视图
- 第三章　空间向量及其应用
- - 空间直角坐标系
- 将平面向量推广到空间、空间向量的坐标表示与运算
- 空间向量的向量积（叉乘）的概念、坐标表示与几何意义，混合积
- 直线的方向向量与平面的法向量、用空间向量解决立体几何问题
- 空间向量组的投影、分解与线性相关性
- 第四章　球面上的几何图形
- - 球面基本概念：球面直线（大圆）、球面距离、球面角
- 球面几何图形：极与赤道、球面二角形、球面三角形
- 球面与平面的比较、球面几何与欧式平面几何的异同
- 第五章　球面三角形的性质
- - 球面三角形的全等定理
- 球面三角形的内角和（大于180°）与面积公式
- 球面上的正弦定理、余弦定理和勾股定理
- 体会：平面三角是球面三角在球面半径无限增大时的极限
- 第六章*　欧氏几何与非欧几何（选学）
- - 欧氏几何与公理化体系
- 平行公设的争论与非欧几何的诞生（初步了解另一种非欧几何——双曲几何及相应的庞加莱单位圆盘模型）
- 现代几何学的发展、拓扑学简介

## 说明

**第四册可分为前后两部分，前半部分是经典的立体几何内容，后半部分是球面几何的初步引入。**

立体几何部分是很常规的“三部曲”——空间直线与平面、空间几何体、空间向量。关于前两章到底哪个放前面不同教材的处理方式也大有差别，本设计暂定如此，当然如果把空间几何体放前面可能有从直观入手的优势。**因为前一册已经讲过了极限，这一册就可以用极限去推导锥体的体积公式、球的体积和表面积公式等等。**另外新增了正多面体和欧拉公式（另一个欧拉公式了！！！）的内容、恢复了新教材里被删除的投影、视图等画法几何内容——关键是提升空间想象能力，至于什么为大学工图课打基础都是次要的。

因为空间向量不再必须与基础立体几何分开编排（硬要分出个必修选修），所以较复杂的距离、夹角等问题（例如二面角）就不急于在第一章引入，而是能等到第三章用向量方法处理（而且也不宜过深），降低难度梯度。**空间向量这一章的主要变化有两个：（1）正式新增了向量积（叉乘），既为求平面法向量提供了高效手段，也为物理课的学习提供了重要的工具（力矩可以引入了，也不必再纠缠什么左手右手定则了）；（2）初步渗透空间向量组的线性相关性问题，为下一册线性代数的内容埋下伏笔。**

> 另参见：[为什么高中物理取消了对于力矩的学习? - 知乎](https://www.zhihu.com/question/1904632699349598819/answer/1905426327596693119)

关于为什么需要引入球面几何（第四、五章），我觉得一个理由就够了——**我们脚踏地球、头顶天球，球面几何就是研究我们人类生存环境的几何，应用非常广泛，还可以与地理等学科的知识相关联（这样地理也可以上难度了）。**此外，从理论价值来看，球面几何作为最直观的非欧几何模型，是理解几何学多样性的绝佳入口。这部分内容可参考旧教材选修3-3《球面上的几何》。第五章本质是球面三角学，其历史发展甚至早于平面三角。

球面三角里有个关键结论：当球面半径无限增大（或者说球面三角形的边长无限缩小）时，球面三角就趋近于平面三角，例如球面正弦定理![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Csin+a%7D%7B%5Csin+A%7D%3D%5Cfrac%7B%5Csin+b%7D%7B%5Csin+B%7D%3D%5Cfrac%7B%5Csin+c%7D%7B%5Csin+C%7D)趋近于平面正弦定理![](https://www.zhihu.com/equation?tex=%5Cfrac%7Ba%7D%7B%5Csin+A%7D%3D%5Cfrac%7Bb%7D%7B%5Csin+B%7D%3D%5Cfrac%7Bc%7D%7B%5Csin+C%7D)，**这相当于是说在**![](https://www.zhihu.com/equation?tex=a)**很小时**![](https://www.zhihu.com/equation?tex=%5Csin+a)**趋近于**![](https://www.zhihu.com/equation?tex=a)**，恰好能用上一册里引入的重要极限**![](https://www.zhihu.com/equation?tex=%5Cunderset%7Bx%5Crightarrow+0%7D%7B%5Clim%7D%5Cfrac%7B%5Csin+x%7D%7Bx%7D%3D1)**去解释——这也是把极限提前到第三册的原因。**

**最后的选学章节“欧氏几何与非欧几何”主要想对从初中到高中所学的整个论证几何知识体系（包括平面几何、立体几何、球面几何）作一个总结和梳理——一方面通过欧氏几何正式阐述“公理化思想”，将《几何原本》的公理公设原原本本摆出来（初中课本上写的是经过改造的，不是“原本”）；另一方面以平行公设为切口正式介绍非欧几何的概念，也是对前面球面几何内容的推广。**在这之后当然还可以对更现代的几何学乃至拓扑学进行简要的介绍。

![](https://picx.zhimg.com/v2-ffd80f8627d2b626a9b197d7321301be_r.jpg?source=2c26e567)

## 第五册（初等数论与线性代数初步）

## 目录

- 第一章　计数原理
- - 加法原理与乘法原理
- 排列与组合
- 二项式定理
- 第二章　整数的性质
- - 整除、同余、模算术
- 质数、质因数分解、算术基本定理
- 辗转相除法求最大公因数、一次不定方程
- （选学）一次同余方程组（韩信点兵）、大衍求一术、中国剩余定理（孙子定理）
- （选学）费马小定理、欧拉定理
- 数的进位制
- 第三章　多项式与高次方程
- - 多项式的代数运算：加法、乘法、整除与带余除法（利用竖式进行除法计算）
- 余式定理与因式定理、对称多项式与齐次多项式、辗转相除法求最大公因式
- 高次方程根的性质、代数基本定理、实系数方程虚根成对定理
- （选学）特殊高次方程的解法、根与系数的关系
- 插值公式及其应用
- 第四章　矩阵与几何变换
- - 引入二阶矩阵表达平面图形的线性变换（恒等、反射、伸缩、旋转、切变、投影）
- 用线性变换的观点研究矩阵：变换 → 矩阵与向量的乘法、复合变换 → 矩阵与矩阵的乘法、面积缩放 → 行列式、撤销变换 → 逆矩阵、保距变换 → 正交矩阵、不变方向 → 特征向量与特征值、维度改变 → 矩阵的秩、特征方向的缩放 → 矩阵的迹 ……
- 将以上认识初步推广到空间图形的变换与三阶矩阵
- 第五章　矩阵与线性方程组
- - 用变换与映射的观点认识线性方程组
- 系数矩阵与解的结构、有解的判定
- 向量的线性相关和线性无关
- （选学）线性空间
- 线性方程组的求解：逆矩阵法与高斯消元法
- 第六章*　对称与群初步（选学）
- - 感受生活中、数学中和物理中的对称性
- 平面和空间中的对称变换与等距变换
- 变换群的概念
- 抽象群的概念与应用
- 现代数学、科学和艺术中的群论

## 说明

**第五册应该是比较大胆的突破，整合了组合学（计数原理）、初等数论、多项式理论、高次方程、矩阵理论、线性方程和群论，或许可以看作是“代数专册”——很多人吐槽过目前中学数学教材以函数为纲而忽视了代数，连带着大学数学系也“重分析轻代数”，这应该也算是一种纠偏或回归。**

这一册的内容看起来比较散乱，但其实逻辑还是明确的，可以分前三章和后三章两部分。

**前三章：（计数原理 → 整数的性质 → 多项式与高次方程）**

计数原理、排列组合的知识，以往的教材中一般认为是概率统计的前置知识，这里把它提前，主要是因为二项式定理本身是个纯代数的内容。人之初，学数数，这是第一章的内容；接下来数（shǔ）出的“数”（shù）究竟有什么性质，那就是第二章初等数论。

第二章参考了旧教材选修4-6《初等数论初步》，但由于我们安排数论内容的核心目的是作为下一章多项式理论的基础**（整数和多项式具有极其相似的数学结构）**，所以只精选了核心内容作为必学，而更深入的拓展（同余方程、费马小定理、欧拉定理）则作为选学。因此，这一章也不太好意思起名叫“初等数论”，只能低调一点，叫“整数的性质”了= =   （此外这一章还增加了进位制，要求至少掌握二进制和十进制的互化）

第三章的多项式其实也是老教材里有的内容，这里予以恢复。它和第二章的联系主要通过整数和多项式的类比展开，如带余除法、“质数”vs“不可约多项式”、“最大公因数”vs“最大公因式”等等**——尽管暂时不引入“环”的术语，但也能为学生提供“不同数学对象可共享相同运算规则与结构性质”的初步印象。**在此基础上就可以研究高次方程，包括代数基本定理和实系数方程虚根成对定理（之前已经学过复数了）。作为高次方程应用，本章新增深受知乎用户青睐的拉格朗日插值公式。

**后三章：（矩阵与几何变换 → 矩阵与线性方程组 → 对称与群初步*）**

矩阵、行列式、线性方程组的内容同样也是老教材里的经典内容，后来才被取消。但老教材讲这些内容通常也是从线性方程组或行列式起手，往往比较抽象和枯燥。（很多大学里用的《线性代数》课本也是如此= =）**于是这里借鉴了旧教材选修4-2《矩阵与变换》（非常推荐！）的精华，以几何变换起手引入矩阵，在讲解每个矩阵概念时都突出其对应的几何意义，然后再去结合线性方程组。**不同的是，旧教材选修4-2里研究的矩阵仅限于二阶，但我们有了上一册里立体几何和空间向量的基础（那里还初步渗透了线性相关等等概念），就可以推广到三阶。这样的讲法应该是一气呵成、顺畅自然的，同时也为下一册解析几何里的坐标变换提供基础。

> 注：本册探讨的方程组、矩阵与行列式最高只到三次（阶）。由于四阶及以上的矩阵已经脱离了几何直观，四阶及以上的行列式展开计算也过于繁琐（通常没有手算的必要性，在数学上也没有特别的趣味），要么就必须得引入克拉默法则和代数余子式等概念，要么就得引入逆序数、全排列等等，因此决定不再继续延伸。只在书中进行简要提示：**四阶及以上的行列式求值不能简单套用对角线法则。**

最后一个选学章节“对称与群初步”其实巧妙地汇合了前面两条支线：**矩阵变换中有对称，从等距变换引入群；多项式和方程理论里也有对称，把伽罗瓦解决高次方程可解性的问题作为群论的应用。**（事实上数论和组合里也能找到群的影子，例如模算术中的整数元素也构成一个群。）此外还可以拓展到现代科学中更多的群论应用，如物理学中的转动群、化学中的分子点群等。教材编写可以在旧教材选修3-4《对称与群》的基础上适当加深，也许这本教材编写起来比较困难，但也值得去做。

![](https://pic1.zhimg.com/v2-e5bf0f58ac553069fe765ec145c83342_r.jpg?source=2c26e567)

## 第六册（解析几何初步）

## 目录

- 第一章　直线的方程
- - 坐标法与解析几何思想、距离与中点公式
- 直线的倾斜角和斜率、直线的方程
- 直线的平行、垂直、夹角、交点、距离问题
- 二元一次不等式组表示的区域和简单的线性规划问题
- 第二章　圆的方程与轨迹初步
- - 圆的标准方程和一般方程
- 圆和直线、圆和圆的位置关系
- 曲线的方程和方程的曲线
- 第三章　圆锥曲线的方程
- - 圆锥曲线的实际背景
- 椭圆的标准方程和几何性质
- 双曲线的标准方程和几何性质
- 抛物线的标准方程和几何性质
- （选学）圆锥曲线的切线与法线、光学性质
- 第四章　坐标变换与一般二次曲线
- - 用矩阵表达坐标轴的平移与旋转、矩阵的相似
- 二次曲线的标准式与分类
- （选学）二次型
- 第五章　极坐标系与参数方程
- - 极坐标系、极坐标与直角坐标的互化
- 圆锥曲线的统一定义与极坐标统一方程
- 螺线（等速螺线、对数螺线）
- 参数方程、参数方程和普通方程的互化
- （选学）圆的渐开线、摆线、其他曲线欣赏
- 第六章*　空间解析几何初步（选学）
- - 平面的方程
- 空间直线的方程
- 常见二次曲面与空间曲线
- 柱坐标系、球坐标系

## 说明

**第六册原本想叫“平面解析几何与空间解析几何初步”的，后来感觉太啰嗦了，遂直接叫“解析几何初步”。前五章都是经典的平面解析几何内容，第六章空间解析几何初步作为选学。**

第一章和第二章相比现行教材没有太大变化，除了把线性规划作为直线方程的应用放到了这个位置——之前说过这样做不见得妥当，也许还需要调整。从第二章开始渗透方程与曲线的关系以及“轨迹”的概念，为第三章圆锥曲线做铺垫。

圆锥曲线还是有很重要的意义的，但要力求弱化繁冗的运算，关键是要从实际背景（例如行星轨道、探照灯、各种截面）出发，把重点放在**“用坐标法能更简洁地研究曲线的几何性质上”**——这才是笛卡尔创立解析几何的真正思想。新湘教版数学教材的“数学实验：生活中的圆锥曲线”栏目就是一个很好的参考：

> 参见：[湘教版数学教材为什么那么厚？ - 知乎](https://www.zhihu.com/question/1889272854845036000/answer/1891661882600952367)

简化所谓直线与圆锥曲线的位置关系内容，以切线和法线为主，用光学性质统帅这个主题。我们学圆锥曲线旨在把握其优美性质与重要应用，而不是沉溺在机械的代数游戏里。关于曲线切线，照理来说到现在为止学生只有初中学过关于圆的切线的定义（与圆只有一个公共点的直线是圆的切线），这个定义可以推广到椭圆上，但是显然不能推广到抛物线和双曲线上，否则会有悖于几何直观。**借此契机，恰好就可以逐渐渗透以割线在两端点无限靠近时的极限来定义曲线切线的思想（极限是学过的），为下一册的导数埋下伏笔。**

因为上一册已经从几何变换的角度引入了矩阵，这一册就可以自然地用矩阵来描述坐标变换，从而对一般二次曲线进行讨论。老教材（如“甲种本”）中确实也有这方面内容，但是因为没引入矩阵，导致计算非常繁琐复杂。**“线性代数就是为解析几何而生的，两者的关系本就水乳交融。”——这也就是我们将线性代数放在第五册而将解析几何放在紧随其后的第六册的原因。**如果背离了这个思想，那解析几何的意义就会折损大半，很容易沦为暴力硬算。在这里还可以拓展二次型的知识，这一章具体该怎么编写还可以进行更多讨论。

至于极坐标和参数方程，之前已经说过，它们有重要的理论和实用意义，不能缺席。在这里我们就可以给出几种圆锥曲线的统一定义，并且研究更多种类的曲线。

> 参见：[新版的高中数学教材为什么要删掉极坐标系？ - 知乎](https://www.zhihu.com/question/1901419631211701107/answer/1906817844961838907)

第六章空间解析几何同样是选学内容，平面和直线的方程因为有了空间向量作为基础，是比较容易扩展的；空间曲线和曲面的方程则只需要简单了解，从几何直观上认识几种常见的曲面就够了。最后需要介绍柱坐标系和球坐标系，这在物理、地理等学科里都有广泛的应用。

![](https://pica.zhimg.com/v2-1e2bcf31ace8151e56cbe8fa1ff7c01a_r.jpg?source=2c26e567)

## 第七册（微积分初步）

## 目录

- 第一章　一元函数的导数与微分
- - 变化率的数学模型（瞬时速度与切线斜率）
- 导数的定义、函数的可导性
- 基本初等函数求导、导数的运算
- 复合函数求导、反函数求导、隐函数求导、高阶导数
- 微分的概念与运算
- 第二章　导数与微分的应用
- - 拉格朗日中值定理
- 利用一阶导数研究函数（单调性、极值、最值），以三次函数为例
- （选学）利用二阶导数研究函数（凹凸、拐点、曲率）
- 利用导数求函数极限（洛必达法则）
- 利用导数解决问题（几何中的切线问题、物理中的瞬时变化率问题、实际生活中的优化问题）
- 利用微分进行近似计算（泰勒展开式）
- 第三章　一元函数的不定积分
- - 原函数与不定积分
- 基本积分公式、不定积分的运算法则
- （选学）换元积分、分部积分
- 第四章　一元函数的定积分及其应用
- - 定积分的实际背景与基本概念
- 微积分基本定理（牛顿-莱布尼茨公式）
- 定积分在几何上的应用（求平面图形的面积、旋转体的体积、平面曲线的弧长等）
- 定积分在物理上的应用（求变速运动的路程或位移、求变力做功、求质心位置等）
- 反常积分
- 第五章　微分方程初步
- - 常微分方程概念
- 一阶微分方程、分离变量法
- 二阶线性常系数微分方程
- 线性与非线性系统
- 动力系统与混沌现象简介
- 第六章*　多元函数微积分初步（选学）
- - 多元函数的概念
- 偏导数与全微分、二元函数的驻点与极值
- 二重与三重积分、雅可比行列式
- 曲线积分与曲面积分
- 场论初步：梯度/散度/旋度，格林/高斯/斯托克斯公式
- 偏微分方程概念简介

## 说明

**在高中引入微积分的探索由来已久。第七册在第三册已经引入极限的基础上介绍一元函数微分学、积分学及简单的常微分方程，而多元函数微积分则作为最后一章的选学内容。**

因为之前已经讲过了极限，那么这一册讲微分和积分就有了相对严格的基础。不过，高中数学毕竟不是数学分析，所以这一册尽管补充了拉格朗日中值定理等内容作为理论的衔接，但仍然应该主要依靠物理模型和几何直观的角度引入微积分概念，并且更强调微积分的应用价值而不是单纯拿它去出一些莫名其妙的难题——关键是努力让学生更深刻体会到：**微积分是划时代的数学革命，是描述运动与变化的普适语言，是一大半高等数学的基础，是一切自然科学和工程技术学科不可或缺的工具。**（现行课标里的导数完全沦为了函数题里玩弄代数技巧的工具，定积分则彻底删了，这很糟糕，因为高中如果完全没建立过积分思想的话对学物理的影响是很大的。）

对微积分的讲解一定要体现和数学其他分支的关联。例如关于切线定义的问题本身就可以从上一册解析几何中引出（解析几何是微积分创立的基础）、泰勒展开式则可以同不等式、数列、级数等联系到一起（而且是物理里常用的近似手段）。**高中数学深入讲微积分，最大的受益者是高中物理——终于可以起飞了。**此外，有了微积分工具，对解决更深入的解析几何问题（例如用隐函数求导来求圆的切线）以及下一册学习概率统计（连续型随机变量）都会有不少帮助。

第五章常微分方程和第六章多元函数微积分（选学）同样主要是为了满足物理的进阶需要——过去，即使是甲种本的《微积分初步》，也往往只包括一元函数微积分的内容，但其实思维稍微一延伸就可以走得更远，所以增加了这更深入的两章。因此，这两章更要强调主要从物理和几何直观的角度去介绍，不必苛求过分的严谨。**“线性”和“非线性”的概念、动力系统和混沌现象、场论初步以及偏微分方程的最核心思想，都可以通过物理实例，以直观的方式向高中生渗透，激发他们进一步学习、探索大千世界的愿望。**

> 另参见：[广义上的动力学是什么？ - 知乎](https://www.zhihu.com/question/10696813224/answer/1896284705940293600)

![](https://picx.zhimg.com/v2-33fff0c3e089fce6632e1817f815cf26_r.jpg?source=2c26e567)

## 第八册（概率论与统计学初步）

## 目录

- 第一章　统计活动
- - 数据的收集：调查设计、随机抽样
- 数据的整理：样本的数字特征（均值、中位数、众数、百分位数、标准差、方差、极差）、用样本估计总体
- 数据的描述与可视化：调查报告、统计图表
- 第二章　概率论基础
- - 样本空间、随机事件
- 频率与概率、大数定律
- 概率的计算与性质、古典概型
- 条件概率、独立事件、全概率公式与贝叶斯公式
- 几何概型简介
- 第三章　随机变量的分布与特征
- - 离散型随机变量的分布列、期望与方差
- 二项分布、泊松分布、几何分布、超几何分布
- 连续型随机变量的分布函数、期望与方差
- 均匀分布、正态分布、指数分布
- （选学）二维随机变量的分布函数、期望、方差、协方差、相关系数
- 第四章　统计推断
- - 中心极限定理
- 抽样分布：t分布、χ²分布
- 参数估计：点估计（极大似然估计、矩估计）、区间估计
- 假设检验：两类错误（弃真/取伪）、参数检验（z/t/χ²检验）、非参数检验（独立性检验、拟合优度检验）
- 第五章　回归分析与预测模型
- - 一元线性回归模型、最小二乘法、显著性检验
- 二元线性回归模型
- 一元非线性回归模型
- （选学）正交试验设计
- 统计陷阱与伦理（相关≠因果、多重共线性、过拟合、幸存者偏差、统计欺诈、算法偏见）
- 第六章*　随机过程与时间序列分析初步（选学）
- - 随机过程
- 马尔可夫链
- 时间序列分析
- 聚类分析与时序聚类
- 机器学习简介

## 说明

**第八册的主题是概率论与数理统计，在如今的数据时代，概率统计知识日益成为现代公民的基本素养，这部分内容在数学课程中的地位也越来越突出。**

概率和统计虽然都是研究随机现象规律性的数学，但是二者的进行方式是恰好相反的——**概率是从总体到样本的推理（演绎），强调如何从已知简单事件的概率推出复杂事件的概率；统计是从样本到总体的推理（归纳），强调如何从观测到的样本信息推断总体特征。**概率作为演绎推理，其结果总是可靠的；统计作为归纳推理，其结果的可靠性就只能借助概率描摹，只能说“好不好”而不能说“对不对”**——由此，概率是统计的理论基础，统计是概率的应用。**从这个逻辑来看，应该先讲概率再讲统计。（大学里的《概率论和数理统计》教科书通常就是这么编的。）但是，考虑到高中生的生活经验，还是决定把比较直观、贴近生活的“描述统计”基础部分（即第一章“统计活动”）提到最前面，这样更有利于学生建立起对数据随机性的感性认识。

第二和第三章概率论部分，恢复了几何概型，与现行课标相比主要是完善了连续型随机变量的知识，恰好能够应用到上一册的定积分。**（现在的教材孤零零讲一个正态分布确实很奇怪，更诡异的是把同时还把定积分给删了= =）**因为多元微积分是选学内容，所以二维随机变量也就只能相应地设为选学内容了。尽管增加了几种分布，但正态分布依然是绝对的重点。

**第四章“统计推断”相比现行教材有较大加强，比较系统地介绍了中心极限定理、抽样分布、参数估计和假设检验，体现了由样本推断总体、辅助决策的核心思想。**（现行教材中这部分其实只有一个孤零零的2×2列联表……）当然，这部分教材具体怎么编依然有待探索，为了控制难度删去了一些枝节，例如F分布与F检验等。

第五章回归分析也算是经典知识，可以介绍下多项式“拟合”，与第五册学到的多项式“插值”进行对比。“**统计陷阱与伦理”这一节意义重大——之所以没放在第一章“统计活动”而是挂靠在第五章，是因为其中有些原理需要足够的知识储备才能讲清楚。**

按惯例第八册最后也得有一个选学章节，感觉这个“随机过程与时间序列分析初步”会是一个比较合适的主题。




## 总结

写到这里，这个高中数学大纲的初步结构就已经比较明晰了。完工之后偶然翻到知乎上于高中数学课程体系的一些古老讨论，例如[@CharlieF](https://www.zhihu.com/people/2cb230fe73b0f60fb4d86e18a19aee2d)的这篇古老回答，发现想法还是多有不谋而合之处：

[中国的高中数学教育有哪些内容讲得太多或太少？ - 知乎](https://www.zhihu.com/question/295860086/answer/637239717)

总体上来讲，以上课程体系比较全面地覆盖了初等数学各个分支的内容，同时给高等数学以及其他学科的进一步学习打开了足够的窗口。对大学内容的下放做到这一步基本也就是极限了，至于更进一步的内容，例如复变函数、偏微分方程、抽象代数、微分几何之类，引进到高中目前看来是不太现实的= =   硬要说还可以加点什么的话，之前设想过作为选修的**“第九册”（计算机与离散数学初步）**，具体讲讲算法、密码学、布尔代数、图论、数值计算、博弈论、运筹学、数理逻辑等等内容，但这堆东西太零散了…… 所以最后也没放进来。

目前的八册体系比较让我这样的强迫症满意的一点，便是做到了最初的设想：**各册的分量大体均衡，每册本身能够自成体系，册与册之间也能做到环环相扣，整套教材浑然一体。**至少自己看起来还是比较舒服的～ 例如下面这张图梳理了“相邻两册之间”一些可以称作铺垫或者伏笔的关联之处：

![](https://picx.zhimg.com/v2-dfc36c9f852529bf0d34c642e117a4cb_r.jpg?source=2c26e567)

最后，这份大纲只是一个初步的构想和讨论的起点。至于什么时候能将其真正编写成教材呢…… 嗯，只能说尚需时日，前路漫漫= =   此外，未来如果有空，或许还会继续设计物理、化学、生物、地理、历史、政治等课程的大纲和教材。

值此端午佳节，祝能看到这里、看完这篇接近一万五千字长文的你假期安康愉快，**也祝所有即将参加2025高考的学子们旗开得胜、心想事成、终能来到更加广阔的知识天空。**欢迎一切讨论和建议～













# [MO×OI]IMO2012欺诈猜数游戏
[](https://zhuanlan.zhihu.com/p/1916971016766353949)

十分精巧与震撼的好题，感觉6.5星虚低了（）

以及这个游戏十分好玩，提供一组数据让您和您的同学在晚自习时颓废方式++（不是）
(N,k,n)=(4,2,3)保证猜数方获胜，(N,k,n)=(3,2,2)保证藏数方获胜
或者(N,k,n)=(3,1,2)保证猜数方获胜，(N,k,n)=(6,3,5)保证藏数方获胜

## 题面

Alice和Bob在玩一个游戏。他们约定了一个数![](https://www.zhihu.com/equation?tex=N)（可以任意大），然后Alice想好一个![](https://www.zhihu.com/equation?tex=1%5Ctext%7B~%7DN)以内的自然数![](https://www.zhihu.com/equation?tex=x)，让Bob来猜这个数。每次猜数Bob可以选定一个有若干个数的集合![](https://www.zhihu.com/equation?tex=S)，而Alice需要回答自己想好的数![](https://www.zhihu.com/equation?tex=x)是否在集合![](https://www.zhihu.com/equation?tex=S)中出现过（只答是或否）。

Bob可以问任意多的问题并决定是否结束提问，同时Alice可以对提问说假话，只需要保证连续![](https://www.zhihu.com/equation?tex=k%2B1)次回答中有至少一次是真话就可以了。提问结束后Bob需要指出不超过![](https://www.zhihu.com/equation?tex=n)个数，让Alice所想的数被包含在这里面

现在Alice和Bob都知道![](https://www.zhihu.com/equation?tex=N%2Ck%2Cn)的值，请你试着

(1).证明在![](https://www.zhihu.com/equation?tex=n%5Cgeq2%5Ek)时Bob必胜

(2).证明在![](https://www.zhihu.com/equation?tex=n%5Cleq1.99%5Ek)时，存在无限多的![](https://www.zhihu.com/equation?tex=k)让Alice必胜

## 解答

## (1).

因为题目对![](https://www.zhihu.com/equation?tex=N)不做限制，所以很自然的可以想到Bob的策略应该是不断的排除不可能的数，直到![](https://www.zhihu.com/equation?tex=N%5Cleq+n)，故我们设![](https://www.zhihu.com/equation?tex=N%3En)

显然，Bob一定要结合![](https://www.zhihu.com/equation?tex=k%2B1)次回答才能得到一个有效信息（因为每![](https://www.zhihu.com/equation?tex=k%2B1)次回答才保证一个正确），因此被排除的数字一定是![](https://www.zhihu.com/equation?tex=k%2B1)次都否定了的数

Bob每次选择的集合![](https://www.zhihu.com/equation?tex=S)其实相当于把集合![](https://www.zhihu.com/equation?tex=%5C%7B1%2C2%EF%BC%8C...N%5C%7D)划分成了两部分，而Alice在这两部分中选择一部分进行否定，于是Bob应该希望让Alice的各次回答有交

在![](https://www.zhihu.com/equation?tex=N%3En%5Cgeq2%5E%7Bk%2B1%7D-1)时，Bob只需要每次对这个集合均分就可以了，这样切完![](https://www.zhihu.com/equation?tex=k%2B1)刀后划出来的![](https://www.zhihu.com/equation?tex=2%5E%7Bk%2B1%7D)个部分中每个部分都有至少一个数字，于是无论Alice怎么选都一定会排除掉某个元素

然而我们应该怎么考虑![](https://www.zhihu.com/equation?tex=2%5Ek%5Cleq+n%5Cleq2%5E%7Bk%2B1%7D-1)的情况呢？有这样一个小技巧，通过反复拷问一个一元集，这样连续![](https://www.zhihu.com/equation?tex=k%2B1)次，Alice如果每次都否定这个一元集的话我们就可以直接排除掉这个数了。否则，Alice如果某次承认了这个一元集（相当于否定了其余的所有数），那么我们只需要再问![](https://www.zhihu.com/equation?tex=k)次就可以得到判断，而此时备选集大小![](https://www.zhihu.com/equation?tex=N)只是刚刚减小![](https://www.zhihu.com/equation?tex=1)

按照这种改进后的方案，只要![](https://www.zhihu.com/equation?tex=N%3En%5Cgeq2%5Ek)，那么第一次![](https://www.zhihu.com/equation?tex=%5Ctext%7BN+-+-%7D)然后接下来![](https://www.zhihu.com/equation?tex=k)次按套路每次把![](https://www.zhihu.com/equation?tex=N)均分，这样就可以猜中了qwq

## (2).

首先在第一问之后，我们会自然的猜测![](https://www.zhihu.com/equation?tex=n%3D2%5Ek-1)对于充分大的![](https://www.zhihu.com/equation?tex=k)是否可行呢？然而很遗憾这是不对的

现在我们站在Alice的角度面对问题。Alice要解决这样的问题：Bob每次把集合切成两部分，而我们希望对于Bob连续的![](https://www.zhihu.com/equation?tex=k%2B1)刀，不可以让自己选择的部分有非空交集

此外，Bob不可能给Alice报菜名一样报出一串问题，再等着Alice构造回答，所以我们的策略要求强制在线（不是）

可以观察到，Bob要进行下一步构造的话，一定是结合最近![](https://www.zhihu.com/equation?tex=i)次回答得出的(![](https://www.zhihu.com/equation?tex=0%5Cleq+i%5Cleq+k%2B1))。那么我们就直接设最近![](https://www.zhihu.com/equation?tex=i)次二分选择的交集大小为数组![](https://www.zhihu.com/equation?tex=%28a_%7Bk%2B1%7D%2Ca_%7Bk%7D%2Ca_%7Bk-1%7D...a_%7B1%7D%2Ca_0%29)，且![](https://www.zhihu.com/equation?tex=a_%7Bk%2B1%7D%5Cleq+a_k%5Cleq+a_%7Bk-1%7D%5Cleq...%5Cleq+a_1)
（解释：如果我们最近两次分别选择否定{1,2}和{2,3}，那么数组就是(1,2)，因为最近2次选择了{2}大小为1，最近1次选择了{2,3}大小为2）

每一次，Bob新提出一个二择问题，数组就会被划成两部分![](https://www.zhihu.com/equation?tex=%28a%27_%7Bk%2B1%7D%2Ca%27_%7Bk%7D%2Ca%27_%7Bk-1%7D...a%27_%7B1%7D%2Ca%27_0%29)和![](https://www.zhihu.com/equation?tex=%28a%27%27_%7Bk%2B1%7D%2Ca%27%27_%7Bk%7D%2Ca%27%27_%7Bk-1%7D...a%27%27_%7B1%7D%2Ca%27%27_0%29)(因为新划的一刀会把之前各个部分一分为二)，其中![](https://www.zhihu.com/equation?tex=a%27_i%2Ba%27%27_i%3Da_%7Bi-1%7D)(因为两边互补)，此外原来的![](https://www.zhihu.com/equation?tex=a_%7Bk%2B1%7D)直接被丢掉了(新来的一刀会挤掉之前连续![](https://www.zhihu.com/equation?tex=k%2B1)刀)，![](https://www.zhihu.com/equation?tex=a_0%3DN)(最近的0刀自然是全集本身)，而我们需要在这两种走向中选择一条

现在我们有了一棵决策树，我们很自然的想用用SG函数的思想算算必胜态。我们反向思考，从结束的最终局面开始，假如某时刻Bob可以排除掉某个数，那么此时的局面![](https://www.zhihu.com/equation?tex=a_%7Bk%2B1%7D%5Cgeq1)，数组至少为![](https://www.zhihu.com/equation?tex=%281%2C1%2C1%2C...%2C1%2C1%29)（当然可以任意一位比这个数组大）。此外，两个决策叶子满足某种“加法运算” 得到他们的父节点![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle%28a%27_%7Bk%2B1%7D%2Ca%27_k%2Ca%27_%7Bk-1%7D%2C...%2Ca%27_1%2Ca%27_0%29%5Coplus%28a%27%27_%7Bk%2B1%7D%2Ca%27%27_k%2Ca%27%27_%7Bk-1%7D%2C...%2Ca%27%27_1%2Ca%27%27_0%29%3D%28a_%7Bk%2B1%7D%5Ccolor%7Bred%7D%7B%28%5Cgeq0%29%7D%2Ca%27_%7Bk%2B1%7D%2Ba%27%27_%7Bk%2B1%7D%2Ca%27_k%2Ba%27%27_k%2C...%2Ca%27_2%2Ba%27%27_2%2Ca%27_1%2Ba%27%27_1%29)
而![](https://www.zhihu.com/equation?tex=N)的最小值就是所有决策节点中![](https://www.zhihu.com/equation?tex=a_0)的最大值，最终的根节点一定形如![](https://www.zhihu.com/equation?tex=%280%2C0%2C0%2C...%2C0%2CN%29)

Bob希望尽可能的把![](https://www.zhihu.com/equation?tex=N_%7Bmin%7D)往小压，对Bob来讲其实就是用一堆的![](https://www.zhihu.com/equation?tex=%281%2C1%2C1%2C...%2C1%2C1%29)做“加法”，让![](https://www.zhihu.com/equation?tex=a_%7B0_%7Bmax%7D%7D)最小

可以发现，这种“加法”有进位和同位相加的感觉，这启发我们把它看成![](https://www.zhihu.com/equation?tex=z)进制下的一个数，其中每个数组对应的数为![](https://www.zhihu.com/equation?tex=%5Csum+a_iz%5Ei)，这就引出了我们的生成函数![](https://www.zhihu.com/equation?tex=f%28z%29%3D%5Csum+a_iz%5Ei)，其中两个节点相加就是![](https://www.zhihu.com/equation?tex=f%28z%29%3D%5Cfrac%7Bf_1%28z%29%2Bf_2%28z%29-a%27_0-a%27%27_0%7D%7Bz%7D)，Bob拥有的就是若干个![](https://www.zhihu.com/equation?tex=f_0%28z%29%3D%5Csum+z%5Ei)，我们就可以通过这个半不变量估计![](https://www.zhihu.com/equation?tex=N)的下界了，以下提供一种估计的方式

> 取![](https://www.zhihu.com/equation?tex=z%5Cin%281%2C2%29%2CN%3D%28z-%5Cfrac%7B1%7D%7BG%2864%29%7D%29%5Ek)，如果Bob可以做到对于这个![](https://www.zhihu.com/equation?tex=N)有策略的话，归纳证明![](https://www.zhihu.com/equation?tex=f%28z%29%5Cgeq+f_0%28z%29).
> 因为![](https://www.zhihu.com/equation?tex=a%27_0%2Ba%27%27_0%5Cleq2N)所以存在充分大的![](https://www.zhihu.com/equation?tex=k)使得![](https://www.zhihu.com/equation?tex=%282-z%29f_0%28z%29%3E2N)(这里因为![](https://www.zhihu.com/equation?tex=f_0%28z%29%3Ez%5Ek%3E%5Cfrac%7B2%7D%7B2-z%7D%28z-%5Cfrac%7B1%7D%7BG%2864%29%7D%29%5Ek)的![](https://www.zhihu.com/equation?tex=k)存在)
> 故![](https://www.zhihu.com/equation?tex=f%28z%29%3D%5Cfrac%7Bf_1%28z%29%2Bf_2%28z%29-a%27_0-a%27%27_0%7D%7Bz%7D%3Ef_0%28z%29)，也就是根节点的生成函数![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%28z%29%3D%5Csum_%7Bi%3D1%7D%5E%7Bk%2B1%7D0%5Ccdot+z%5Ei%2BN%5Ccdot+z%5E0%3DN%5Cgeq+f_0%28z%29)
> 然而这对于充分大的![](https://www.zhihu.com/equation?tex=k)是不成立的，就是说此时Bob并不能做到保证猜对

后记

本校某数竞生曾暴论：这题不配放6.5，难度实际上只有4

此同学一个学期后想写一篇这个的题解时：完了完了完了，自己好像伪证了...
啊啊啊啊啊好难啊qaq，我要看题解呜呜

同学：

> 这题不配放6.5，难度实际上只有4




原来是此同学以为![](https://www.zhihu.com/equation?tex=n%3D2%5Ek-1)是可行的（）

# 什么是警惕海量个例?
[](https://www.zhihu.com/question/601415018/answer/1909731875242615705)

众所周知，一枚**质地均匀**的硬币，抛起落下后正反面朝上的概率均为50%。

现在你拿出一枚硬币，**声称它是质地均匀的**

抛了10次，9次正面朝上，问我下一次正面朝上的概率，我会说50%。

抛了1000次，900次正面朝上，问我下一次正面朝上的概率，我会说不好确定，但是肯定比50%大。

抛了100000次，90000次正面朝上，问我下一次正面朝上的概率，我会说90%。

因为这会儿我已经确定，你声称它质地均匀是在撒谎，**它的质地就是不均匀的**。

# 如何评价 2025 高考数学试卷？今年题目难度如何？有哪些变化？
[](https://www.zhihu.com/question/1914721702509778295/answer/1914835928054202490)

随着《普通高中数学课程标准(2017年版)》(2020年修订) 的全面覆盖，2003年《普通高中课程方案(实验)》和《普通高中数学课程标准(实验)》彻底退出了舞台．于是，今年教育部官方将新高考全国卷由 “新课标Ⅰ卷”、“新课标Ⅱ卷” 分别改名为了**“全国一卷”、“全国二卷”**．详见

[教育部教育考试院：2025年高考数学全国卷试题评析](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/Wg4j_oFxEV6q3DpoujsEFA)

本回答谈谈全国一卷压轴题带来的一些风向解读．

## 一、2025 全国一卷第 19 题（回忆版）

> **【2025全国一，19】**
> 设函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D5%5Ccos+x-%5Ccos+5x)．
> （1）求![](https://www.zhihu.com/equation?tex=f%28x%29)在区间![](https://www.zhihu.com/equation?tex=%5B0%2C%5Cdfrac%7B%5Cpi%7D%7B4%7D%5D)的最大值；
> （2）给定![](https://www.zhihu.com/equation?tex=%5Ctheta%5Cin%280%2C%5Cpi%29)和![](https://www.zhihu.com/equation?tex=a%5Cin%5Cmathbf%7BR%7D)，证明：存在![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，使得![](https://www.zhihu.com/equation?tex=%5Ccos+y%5Cleqslant+%5Ccos%5Ctheta)；
> （3）若存在![](https://www.zhihu.com/equation?tex=%5Cvarphi)使得对任意![](https://www.zhihu.com/equation?tex=x%5Cin%5Cmathbf%7BR%7D)都有![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos%285x%2B%5Cvarphi%29%5Cleqslant+b)，求![](https://www.zhihu.com/equation?tex=b)的最小值．

## 点评

2024 年新课标Ⅰ卷的新定义题配置是 “一小一大”，分别是第 11 题、第 19 题．而今年全国一卷将新定义放在了第 6 题．第 19 题没有像去年考数列新定义，而是换成了一个三角函数与导数结合的问题．按照当前全国绝大多数模拟卷命题人的尿性，如果连续两年都考同样的题型，那么接下来一年备考做的就全是这种题型了．

我相信教育部也意识到了高考出太多新定义容易导致接下来一年的备考形势群魔乱舞，所以转换了问法．很多老师命制的新定义题完全不堪入目，要么是陈旧套皮题，要么是高等下放题．很多学生做到的新定义题都是本科微积分都不过关的老师出的，比如

[Fiddie：不要随便拿你浅薄的微积分知识瞎扯“无穷”](https://zhuanlan.zhihu.com/p/1895768542936299452)

和

[Fiddie：高中数学模拟卷上总能“创造”出“新的数学”来](https://zhuanlan.zhihu.com/p/24352986672)

这对学生学习数学没有丝毫帮助，所以可以理解为什么教育部要减少新定义题的比重．

即便如此，这个第 19 题还是让人感到耳目一新的．在考场上，学生面对的是一个从没见过的新问题，解题思路也无法从“题海”中通过刷题得知，而必须用自己扎实的基础知识，结合题中所给的提示，通过冷静思考和分析一步步完成题目的解答．

> 数学试卷创新设问方式，进一步增强试题的探索性和综合性，增强解法的开放性，为考生提供多种解题途径，着力考查学生的学科关键能力和思维品质，鼓励学生运用创造性、发散性思维多角度分析解决问题，激发学生创新意识，同时**引导中学摒弃细分试题类型、总结解题套路等固化的复习备考模式**，将教学重点放到提高学生的素养和能力上来．
> ——教育部教育考试院：2025年高考数学全国卷试题评析
> 

2024年新课标Ⅰ卷第19题和2025年全国一卷第19题的共同点是——**三小问之间层层递进，最后一问要用到前两问中的结论或提示**．

纵观往年高考真题，满足这个的三问函数解答题并不多，即便是前些年的江苏卷和最近的上海卷，很多函数压轴题都不满足这一点．然而，这种题目或许才是未来新高考的导向．

建议模拟卷命题人在命制一套试卷时，优先命制第 19 题，不管是否为新定义，都需要是满足下面几个条件的题目：**① 几个小问之间层层递进，不割裂；② 仅用《课程标准》范围内的知识就可解决；③ 问题或方法是学生从没见过的；④ 未在教辅书上被整理成固定题型；⑤ 篇幅和难度合适．**

即使是 2024、2025 两届的模拟题，又有多少新定义压轴题是符合上述四点要求中的 ① 呢？

> 强调融会贯通，增强同一主题必修模块与选择性必修模块间的联系、增强不同主题之间的联系，在知识网络的交汇点设计题目，促进各分支知识本身的纵向延伸，同时增强知识分支间的横向拓展。试题侧重检测学生数学知识体系的构建程度，**要求学生在面对具体问题时，能将学习到的各个模块的知识有机结合并综合应用，引导学生构建自身的整体数学知识网络，而不是简单地将各个知识模块割裂**．
> ——教育部教育考试院：2025年高考数学全国卷试题评析

## 类似题目

**一、含多个量词的函数解答题**

> **1．【2021天津，20】**
> 已知![](https://www.zhihu.com/equation?tex=a%3E0)，函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Dax-x%5Cmathrm%7Be%7D%5Ex)．
> （1）求曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在点![](https://www.zhihu.com/equation?tex=%280%2Cf%280%29%29)处的切线方程；
> （2）证明![](https://www.zhihu.com/equation?tex=f%28x%29)存在唯一的极值点；
> （3）若存在![](https://www.zhihu.com/equation?tex=a)，使得![](https://www.zhihu.com/equation?tex=f%28x%29%5Cle+a%2Bb)对任意![](https://www.zhihu.com/equation?tex=x%5Cin%5Cmathbf%7BR%7D)成立，求实数![](https://www.zhihu.com/equation?tex=b)的取值范围．
> 
> **2．【2005全国Ⅲ，22】**
> 已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cdfrac%7B4x%5E2-7%7D%7B2-x%7D)，![](https://www.zhihu.com/equation?tex=x%5Cin%5B0%2C1%5D)．
> （1）求![](https://www.zhihu.com/equation?tex=f%28x%29)的单调区间和值域；
> （2）设![](https://www.zhihu.com/equation?tex=a%5Cge+1)，函数![](https://www.zhihu.com/equation?tex=g%28x%29%3Dx%5E3-3a%5E2x-2a)，![](https://www.zhihu.com/equation?tex=x%5Cin%5B0%2C1%5D)．若对于任意![](https://www.zhihu.com/equation?tex=x_1%5Cin%5B0%2C1%5D)，总存在![](https://www.zhihu.com/equation?tex=x_0%5Cin%5B0%2C1%5D)，使得![](https://www.zhihu.com/equation?tex=g%28x_0%29%3Df%28x_1%29)成立，求![](https://www.zhihu.com/equation?tex=a)的取值范围．
> 
> **3．【2003上海，22】**
> 已知集合![](https://www.zhihu.com/equation?tex=M)是满足下列性质的函数![](https://www.zhihu.com/equation?tex=f%28x%29)的全体：存在非零常数![](https://www.zhihu.com/equation?tex=T)，对任意![](https://www.zhihu.com/equation?tex=x%5Cin%5Cmathbf%7BR%7D)，有![](https://www.zhihu.com/equation?tex=f%28x%2BT%29%3DTf%28x%29)成立．
> 若函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Csin+kx%5Cin+M)，求实数![](https://www.zhihu.com/equation?tex=k)的取值范围．
> 

**二、层层递进的函数解答题**

除了文理分科时期天津卷的一些函数压轴题比较好之外（个人认为天津卷进入新高考之后，函数压轴题就拉了起来），这里再列举一些．

> **4．【2007浙江，22】**
> 设![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cdfrac%7Bx%5E3%7D%7B3%7D)，对任意实数![](https://www.zhihu.com/equation?tex=t)，记![](https://www.zhihu.com/equation?tex=g_t%28x%29%3Dt%5E%7B%5Cfrac%7B2%7D%7B3%7D%7Dx-%5Cdfrac%7B2%7D%7B3%7Dt)．
> （1）求函数![](https://www.zhihu.com/equation?tex=y%3Df%28x%29-g_8%28x%29)的单调区间；
> （2）求证：
> （ⅰ）当![](https://www.zhihu.com/equation?tex=x%3E0)时，![](https://www.zhihu.com/equation?tex=f%28x%29%5Cge+g_t%28x%29)对任意正实数![](https://www.zhihu.com/equation?tex=t)成立；
> （ⅱ）有且仅有一个正实数![](https://www.zhihu.com/equation?tex=x_0)，使得![](https://www.zhihu.com/equation?tex=g_8%28x_0%29%5Cge+g_t%28x_0%29)对任意正实数![](https://www.zhihu.com/equation?tex=t)成立．
> 
> **5．【2010湖北，文21】**
> 设函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cdfrac%7B1%7D%7B3%7Dx%5E3-%5Cdfrac%7Ba%7D%7B2%7Dx%5E2%2Bbx%2Bc)，其中![](https://www.zhihu.com/equation?tex=a%3E0)，曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在点![](https://www.zhihu.com/equation?tex=P%280%2Cf%280%29%29)处的切线方程为![](https://www.zhihu.com/equation?tex=y%3D1)．
> （1）确定![](https://www.zhihu.com/equation?tex=b)，![](https://www.zhihu.com/equation?tex=c)的值；
> （2）设曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在点![](https://www.zhihu.com/equation?tex=%28x_1%2Cf%28x_1%29%29)及![](https://www.zhihu.com/equation?tex=%28x_2%2Cf%28x_2%29%29)处的切线都过点![](https://www.zhihu.com/equation?tex=%280%2C2%29)，证明：当![](https://www.zhihu.com/equation?tex=x_1%5Cne+x_2)时，![](https://www.zhihu.com/equation?tex=f%27%28x_1%29%5Cne+f%27%28x_2%29)；
> （3）若过点![](https://www.zhihu.com/equation?tex=%280%2C2%29)可作曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)的三条不同的切线，求![](https://www.zhihu.com/equation?tex=a)的取值范围．
> 

补充题：

[2023年剑桥大学 STEP3 “高考” 的复数+函数综合的解答题](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/FWgff1P-pRsQ7f70sVO2Qg)

## 解答

（1）![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D-5%5Csin+x%2B5%5Csin+5x%3D5%28%5Csin+5x-%5Csin+x%29)．

**思路1：**当![](https://www.zhihu.com/equation?tex=x%5Cin%280%2C%5Cdfrac%7B%5Cpi%7D%7B10%7D%5D)时，![](https://www.zhihu.com/equation?tex=0+%3C+x+%3C+5x+%5Cleqslant+%5Cdfrac%7B%5Cpi%7D%7B2%7D)，由![](https://www.zhihu.com/equation?tex=y%3D%5Csin+x)在区间![](https://www.zhihu.com/equation?tex=%280%2C%5Cdfrac%7B%5Cpi%7D%7B2%7D%29)单调递增得![](https://www.zhihu.com/equation?tex=f%27%28x%29+%3E+0)．

当![](https://www.zhihu.com/equation?tex=x%5Cin%28%5Cdfrac%7B%5Cpi%7D%7B10%7D%2C%5Cdfrac%7B%5Cpi%7D%7B6%7D%29)时，![](https://www.zhihu.com/equation?tex=%5Csin+5x+%3E+%5Cdfrac%7B1%7D%7B2%7D+%3E+%5Csin+x)，所以![](https://www.zhihu.com/equation?tex=f%27%28x%29+%3E+0)；

当![](https://www.zhihu.com/equation?tex=x%5Cin%28%5Cdfrac%7B%5Cpi%7D%7B6%7D%2C%5Cdfrac%7B%5Cpi%7D%7B4%7D%29)时，![](https://www.zhihu.com/equation?tex=%5Csin+5x+%3C+%5Cdfrac%7B1%7D%7B2%7D+%3C+%5Csin+x)，所以![](https://www.zhihu.com/equation?tex=f%27%28x%29+%3C+0)．

因此![](https://www.zhihu.com/equation?tex=f%28x%29)在区间![](https://www.zhihu.com/equation?tex=%280%2C%5Cdfrac%7B%5Cpi%7D%7B6%7D%29)单调递增，在![](https://www.zhihu.com/equation?tex=%28%5Cdfrac%7B%5Cpi%7D%7B6%7D%2C%5Cdfrac%7B%5Cpi%7D%7B4%7D%29)单调递减，则![](https://www.zhihu.com/equation?tex=f%28x%29)在区间![](https://www.zhihu.com/equation?tex=%5B0%2C%5Cdfrac%7B%5Cpi%7D%7B4%7D%5D)的最大值是![](https://www.zhihu.com/equation?tex=f%28%5Cdfrac%7B%5Cpi%7D%7B6%7D%29%3D5%5Ctimes%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D+%2B+%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D+%3D+3%5Csqrt%7B3%7D)．

**思路2：**用和差化积公式处理![](https://www.zhihu.com/equation?tex=%5Csin+5x-%5Csin+x)．略．

（2）**【思路分析】**分平凡的情形与没那么平凡的情形讨论，给出构造性证明．平凡的情形是![](https://www.zhihu.com/equation?tex=%5Ctheta%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)．不平凡的情形是用三角函数的对称性来找合适的![](https://www.zhihu.com/equation?tex=y)，如注意到![](https://www.zhihu.com/equation?tex=%5Ccos+y+%3D+%5Ccos%28%5Cpm+y%2Bk%5Cpi%29%28k%5Cin%5Cmathbf%7BZ%7D%29)等等．这里考虑![](https://www.zhihu.com/equation?tex=2%5Cpi-%5Ctheta)．下面的解答分三种情况讨论：![](https://www.zhihu.com/equation?tex=0%5Cleqslant+a%5Cleqslant+2%5Ctheta)，![](https://www.zhihu.com/equation?tex=2%5Ctheta+%3C+a+%5Cleqslant+2%5Cpi-2%5Ctheta)，![](https://www.zhihu.com/equation?tex=2%5Cpi-2%5Ctheta+%3C+a+%3C+2%5Cpi)进行讨论．

**【解答】**设![](https://www.zhihu.com/equation?tex=a%5Cin%5B0%2C2%5Cpi%29)，否则可考虑让![](https://www.zhihu.com/equation?tex=a)加上![](https://www.zhihu.com/equation?tex=2%5Cpi)的整数倍．

**思路1：**（ⅰ）若![](https://www.zhihu.com/equation?tex=%5Ctheta%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，即![](https://www.zhihu.com/equation?tex=0%5Cleqslant+a%5Cleqslant+2%5Ctheta)，则存在![](https://www.zhihu.com/equation?tex=y%3D%5Ctheta%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)使得![](https://www.zhihu.com/equation?tex=%5Ccos+y+%3D+%5Ccos%5Ctheta)．

（ⅱ）若![](https://www.zhihu.com/equation?tex=2%5Ctheta+%3C+a+%3C+2%5Cpi)，则![](https://www.zhihu.com/equation?tex=2%5Cpi-%5Ctheta+%3E+a-%5Ctheta)．

**情况一：**若![](https://www.zhihu.com/equation?tex=2%5Cpi-%5Ctheta+%5Cleqslant+a%2B%5Ctheta)，即![](https://www.zhihu.com/equation?tex=a+%5Cgeqslant+2%5Cpi-2%5Ctheta)，取![](https://www.zhihu.com/equation?tex=y%3D2%5Cpi-%5Ctheta)，此时![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，且![](https://www.zhihu.com/equation?tex=%5Ccos+y+%3D+%5Ccos%5Ctheta)，故在情况一下欲证命题成立；

**情况二：**若![](https://www.zhihu.com/equation?tex=2%5Ctheta+%3C+a+%5Cleqslant+2%5Cpi-2%5Ctheta)，由![](https://www.zhihu.com/equation?tex=%5Ctheta%5Cin%280%2C%5Cpi%29)及![](https://www.zhihu.com/equation?tex=2%5Ctheta+%3C+2%5Cpi-2%5Ctheta)得![](https://www.zhihu.com/equation?tex=0+%3C+%5Ctheta+%3C+%5Cdfrac%7B%5Cpi%7D%7B2%7D)，![](https://www.zhihu.com/equation?tex=%5Ccos%5Ctheta+%3E+0)．

下面用反证法．若对任意![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，![](https://www.zhihu.com/equation?tex=%5Ccos+y+%3E+%5Ccos%5Ctheta)，则

①![](https://www.zhihu.com/equation?tex=%5Ccos%28a-%5Ctheta%29+%3E+%5Ccos%5Ctheta)，即![](https://www.zhihu.com/equation?tex=%5Ccos+a%5Ccos+%5Ctheta%2B%5Csin+a%5Csin+%5Ctheta+%3E+%5Ccos%5Ctheta)​．

②![](https://www.zhihu.com/equation?tex=%5Ccos%28a%2B%5Ctheta%29+%3E+%5Ccos%5Ctheta)，即![](https://www.zhihu.com/equation?tex=%5Ccos+a%5Ccos+%5Ctheta-%5Csin+a%5Csin+%5Ctheta+%3E+%5Ccos%5Ctheta)．

由①![](https://www.zhihu.com/equation?tex=%2B)②得![](https://www.zhihu.com/equation?tex=%5Ccos+a%5Ccos%5Ctheta+%3E+%5Ccos%5Ctheta)，即![](https://www.zhihu.com/equation?tex=%28%5Ccos+a-1%29%5Ccos%5Ctheta+%3E+0)，得![](https://www.zhihu.com/equation?tex=%5Ccos+a-1+%3E+0)，这是不可能的．

因此存在![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，使得![](https://www.zhihu.com/equation?tex=%5Ccos+y+%5Cleqslant+%5Ccos%5Ctheta)．故在情况二下欲证命题也成立．

综上，存在![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，使得![](https://www.zhihu.com/equation?tex=%5Ccos+y%5Cleqslant+%5Ccos%5Ctheta)

（3）**【思路分析】**没有“新定义”就是最好的新定义．一个命题中含多个量词，是当前绝大部分高中学生和部分高中老师都欠缺的部分．

定义命题![](https://www.zhihu.com/equation?tex=P%28b%29)为：存在![](https://www.zhihu.com/equation?tex=%5Cvarphi)使得对任意![](https://www.zhihu.com/equation?tex=x)，都有![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos%285x%2B%5Cvarphi%29%5Cleqslant+b)，题目改写为：设![](https://www.zhihu.com/equation?tex=P%28b%29)是真命题，求![](https://www.zhihu.com/equation?tex=b)的最小值．

首先由（1）知命题![](https://www.zhihu.com/equation?tex=P%283%5Csqrt%7B3%7D%29)成立：这是因为存在![](https://www.zhihu.com/equation?tex=%5Cvarphi%3D0)使得对任意![](https://www.zhihu.com/equation?tex=x)都有![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos+5x+%5Cleqslant+3%5Csqrt%7B3%7D)．

下面说明![](https://www.zhihu.com/equation?tex=b)的最小值确实是![](https://www.zhihu.com/equation?tex=3%5Csqrt%7B3%7D)，只需证明当![](https://www.zhihu.com/equation?tex=b+%3C+3%5Csqrt%7B3%7D)时![](https://www.zhihu.com/equation?tex=P%28b%29)是假命题，

即证：当![](https://www.zhihu.com/equation?tex=b+%3C+3%5Csqrt%7B3%7D)时，对任意![](https://www.zhihu.com/equation?tex=%5Cvarphi)，存在![](https://www.zhihu.com/equation?tex=x)使得![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos%285x%2B%5Cvarphi%29+%3E+b)．

**【解答】**

当![](https://www.zhihu.com/equation?tex=b%3D3%5Csqrt%7B3%7D)时，由（1）知存在![](https://www.zhihu.com/equation?tex=%5Cvarphi%3D0)使得对任意![](https://www.zhihu.com/equation?tex=x%5Cin%5B0%2C%5Cdfrac%7B%5Cpi%7D%7B4%7D%5D)都有![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos+5x+%5Cleqslant+3%5Csqrt%7B3%7D)．

当![](https://www.zhihu.com/equation?tex=x%5Cin%5B%5Cdfrac%7B%5Cpi%7D%7B4%7D%2C%5Cpi%5D)时，![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos+5x+%5Cleqslant+5%5Ctimes+%5Cdfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D%2B1+%5Cleqslant+3%5Csqrt%7B3%7D)．

由于![](https://www.zhihu.com/equation?tex=f%28x%29)是偶函数，则当![](https://www.zhihu.com/equation?tex=x%5Cin%5B-%5Cpi%2C0%5D)时，![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos+5x%5Cleqslant+3%5Csqrt%7B3%7D)．

由于![](https://www.zhihu.com/equation?tex=f%28x%29)是周期为![](https://www.zhihu.com/equation?tex=2%5Cpi)的周期函数，所以对任意![](https://www.zhihu.com/equation?tex=x%5Cin%5Cmathbf%7BR%7D)都有![](https://www.zhihu.com/equation?tex=+5%5Ccos+x-%5Ccos+5x+%5Cleqslant+3%5Csqrt%7B3%7D)．

下证：若![](https://www.zhihu.com/equation?tex=b+%3C+3%5Csqrt%7B3%7D)，则对任意![](https://www.zhihu.com/equation?tex=%5Cvarphi)，存在![](https://www.zhihu.com/equation?tex=x)使得![](https://www.zhihu.com/equation?tex=5%5Ccos+x-%5Ccos%285x%2B%5Cvarphi%29+%3E+b)．（*）

事实上，设![](https://www.zhihu.com/equation?tex=b+%3C+3%5Csqrt%7B3%7D)．对任意![](https://www.zhihu.com/equation?tex=%5Cvarphi)，在（2）中取![](https://www.zhihu.com/equation?tex=a%3D%5Cvarphi)，![](https://www.zhihu.com/equation?tex=%5Ctheta%3D%5Cdfrac%7B5%5Cpi%7D%7B6%7D)，则存在![](https://www.zhihu.com/equation?tex=y%5Cin%5Ba-%5Ctheta%2Ca%2B%5Ctheta%5D)，使得![](https://www.zhihu.com/equation?tex=%5Ccos+y+%5Cleqslant+%5Ccos%5Ctheta+%3D+-%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D)．

再取![](https://www.zhihu.com/equation?tex=x)满足![](https://www.zhihu.com/equation?tex=5x%2B%5Cvarphi%3Dy)，即![](https://www.zhihu.com/equation?tex=x%3D%5Cdfrac%7By-%5Cvarphi%7D%7B5%7D)，得![](https://www.zhihu.com/equation?tex=-%5Cdfrac%7B%5Cpi%7D%7B6%7D%5Cleqslant+x+%5Cleqslant%5Cdfrac%7B%5Cpi%7D%7B6%7D)，所以![](https://www.zhihu.com/equation?tex=%5Ccos+x+%5Cgeqslant+%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D)，因此

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+5%5Ccos+x-%5Ccos%285x%2B%5Cvarphi%29+%26%3D5%5Ccos+x-%5Ccos+y+%5C%5C+%26%5Cgeqslant+5%5Ctimes+%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D+%2B+%5Cdfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D+%5C%5C+%26+%3D+3%5Csqrt%7B3%7D+%3E+b.+%5Cend%7Baligned%7D+%5C%5C)

因此断言（*）成立．

综上，![](https://www.zhihu.com/equation?tex=b)的最小值是![](https://www.zhihu.com/equation?tex=3%5Csqrt%7B3%7D)．




## 二、屎上雕花——2025 年天津卷第 20 题

> **【2025天津，20】（回忆版）**
> 已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Dax-%28%5Cln+x%29%5E2)．
> （Ⅰ）当![](https://www.zhihu.com/equation?tex=a%3D1)时，求曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在点![](https://www.zhihu.com/equation?tex=%281%2Cf%281%29%29)处的切线方程；
> （Ⅱ）已知![](https://www.zhihu.com/equation?tex=f%28x%29)有 3 个零点![](https://www.zhihu.com/equation?tex=x_1)，![](https://www.zhihu.com/equation?tex=x_2)，![](https://www.zhihu.com/equation?tex=x_3)，且![](https://www.zhihu.com/equation?tex=x_1+%3C+x_2+%3C+x_3)．
> （ⅰ）求![](https://www.zhihu.com/equation?tex=a)的取值范围；
> （ⅱ）求证：![](https://www.zhihu.com/equation?tex=%28%5Cln+x_2-%5Cln+x_1%29%5Ccdot+%5Cln+x_3+%3C+%5Cdfrac%7B4%5Cmathrm%7Be%7D%7D%7B%5Cmathrm%7Be%7D-1%7D)．

## 解答

（Ⅰ）略．

（Ⅱ）（ⅰ）设![](https://www.zhihu.com/equation?tex=u%3D%5Cln+x)，![](https://www.zhihu.com/equation?tex=u_i%3D%5Cln+x_i%28i%3D1%2C2%2C3%29)．因为![](https://www.zhihu.com/equation?tex=f%28x_i%29%3D0%28i%3D1%2C2%2C3+%29)，所以![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bu_i%7D-u_i%5E2%3D0%28i%3D1%2C2%2C3%29)，即![](https://www.zhihu.com/equation?tex=u_i%5E2%5Cmathrm%7Be%7D%5E%7B-u_i%7D-a%3D0)．

设函数![](https://www.zhihu.com/equation?tex=g%28x%29%3Dx%5E2%5Cmathrm%7Be%7D%5E%7B-x%7D-a)​，则![](https://www.zhihu.com/equation?tex=g%27%28x%29%3D%282x-x%5E2%29%5Cmathrm%7Be%7D%5E%7B-x%7D%3Dx%282-x%29%5Cmathrm%7Be%7D%5E%7B-x%7D)​．

![](https://www.zhihu.com/equation?tex=f%28x%29)有 3 个零点![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2Cx_3)等价于![](https://www.zhihu.com/equation?tex=g%28x%29)有 3 个零点![](https://www.zhihu.com/equation?tex=u_1%2Cu_2%2Cu_3)．

当![](https://www.zhihu.com/equation?tex=x)变化时，![](https://www.zhihu.com/equation?tex=g%28x%29)，![](https://www.zhihu.com/equation?tex=g%27%28x%29)的变化情况如下表．

![](https://pic1.zhimg.com/v2-a4eb5ed1791bcf8cbfe6d662202322fa_r.jpg?source=2c26e567)

若![](https://www.zhihu.com/equation?tex=a+%5Cgeqslant+g%282%29%3D4%5Cmathrm%7Be%7D%5E%7B-2%7D)或![](https://www.zhihu.com/equation?tex=a%5Cleqslant+g%280%29+%3D+0)，则![](https://www.zhihu.com/equation?tex=g%28x%29)的零点个数不超过![](https://www.zhihu.com/equation?tex=2)个．不合题意．

因此![](https://www.zhihu.com/equation?tex=0+%3C+a+%3C+4%5Cmathrm%7Be%7D%5E%7B-2%7D)，此时![](https://www.zhihu.com/equation?tex=g%280%29+%3D-a+%3C+0)，![](https://www.zhihu.com/equation?tex=g%282%29+%3D+4%5Cmathrm%7Be%7D%5E%7B-2%7D-a+%3E+0)．

利用不等式![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5Ex+%5Cgeqslant+%5Cmathrm%7Be%7Dx+%3E+2x)，得当![](https://www.zhihu.com/equation?tex=x%3E0)时，![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5Ex+%5Cgeqslant+%28%5Cmathrm%7Be%7D%5E%7B%5Cfrac%7Bx%7D%7B3%7D%7D%29%5E3+%3E+%282%5Ccdot%5Cdfrac%7Bx%7D%7B3%7D%29%5E3+%3D+%5Cdfrac%7B8x%5E3%7D%7B27%7D)．

则当![](https://www.zhihu.com/equation?tex=x+%3E+%5Cdfrac%7B27%7D%7B8a%7D+%3E+%5Cdfrac%7B27%7D%7B32%7D%5Cmathrm%7Be%7D%5E2+%3E+2)时，![](https://www.zhihu.com/equation?tex=g%28x%29+%3C+%5Cdfrac%7B27%7D%7B8x%7D-a+%3C+0)．

当![](https://www.zhihu.com/equation?tex=x+%3C+-1)且![](https://www.zhihu.com/equation?tex=x+%3C+-%5Cln+%281%2Ba%29+%3C+0)时，![](https://www.zhihu.com/equation?tex=g%28x%29+%3E+%5Cmathrm%7Be%7D%5E%7B-x%7D+-a+%3E+%28a%2B1%29-a++%3E+0)．

因此![](https://www.zhihu.com/equation?tex=g%28x%29)在区间![](https://www.zhihu.com/equation?tex=%28-%5Cinfty%2C0%29)，![](https://www.zhihu.com/equation?tex=%280%2C2%29)，![](https://www.zhihu.com/equation?tex=%282%2C%2B%5Cinfty%29)均有一个零点．

综上，![](https://www.zhihu.com/equation?tex=a)的取值范围是![](https://www.zhihu.com/equation?tex=%280%2C4%5Cmathrm%7Be%7D%5E%7B-2%7D%29)．

（ⅱ）**【思路分析】**![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2Cx_3)是![](https://www.zhihu.com/equation?tex=a)的函数，

![](https://www.zhihu.com/equation?tex=%28%5Cln+x_2-%5Cln+x_1%29%5Ccdot+%5Cln+x_3+%3D+%28u_2-u_1%29u_3)．

其中，![](https://www.zhihu.com/equation?tex=%28u_2-u_1%29)随着![](https://www.zhihu.com/equation?tex=a)的增大而增大，但![](https://www.zhihu.com/equation?tex=u_3)随着![](https://www.zhihu.com/equation?tex=a)的增大而减小，并不好直接分析，故考虑将![](https://www.zhihu.com/equation?tex=u_1%2Cu_2%2Cu_3)写成![](https://www.zhihu.com/equation?tex=a)或其它自变量的函数．

**【解答】**由（ⅰ），![](https://www.zhihu.com/equation?tex=-1+%3C+u_1+%3C+0+%3C+u_2+%3C+2+%3C+u_3+%3C+%5Cdfrac%7B27%7D%7B8a%7D)．

由![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bu_1%7D%3Du_1%5E2)，![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bu_3%7D+%3D+u_3%5E2)，两式相除可得![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7Bu_3-u_1%7D+%3D+%5Cdfrac%7Bu_3%5E2%7D%7Bu_1%5E2%7D)．得![](https://www.zhihu.com/equation?tex=u_3-u_1%3D%5Cln%5Cdfrac%7Bu_3%5E2%7D%7Bu_1%5E2%7D)．

设![](https://www.zhihu.com/equation?tex=u_1%3D-ku_3)（![](https://www.zhihu.com/equation?tex=k%3E0)），得![](https://www.zhihu.com/equation?tex=u_3-u_1%3D-%5Cln+k%5E2%3D-2%5Cln+k)，且![](https://www.zhihu.com/equation?tex=u_3%3D%5Cdfrac%7B2%5Cln+k%7D%7Bk%2B1%7D)，![](https://www.zhihu.com/equation?tex=u_1%3D-%5Cdfrac%7B2k%5Cln+k%7D%7Bk%2B1%7D)．

由![](https://www.zhihu.com/equation?tex=u_3+%3E+0)得![](https://www.zhihu.com/equation?tex=k+%3E+1)．

由![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bu_1%7D%3Du_1%5E2)，![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bu_3%7D+%3D+u_2%5E3)，两式相除可得![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7Bu_3-u_2%7D+%3D+%5Cdfrac%7Bu_3%5E2%7D%7Bu_2%5E2%7D)．得![](https://www.zhihu.com/equation?tex=u_3-u_2%3D%5Cln%5Cdfrac%7Bu_3%5E2%7D%7Bu_2%5E2%7D)．

设![](https://www.zhihu.com/equation?tex=u_2%3Dpu_3)（![](https://www.zhihu.com/equation?tex=0+%3C+p+%3C+1)），得![](https://www.zhihu.com/equation?tex=u_3-u_2%3D-%5Cln+p%5E2%3D-2%5Cln+p)，且![](https://www.zhihu.com/equation?tex=u_3%3D%5Cdfrac%7B2%5Cln+p%7D%7Bp-1%7D)，![](https://www.zhihu.com/equation?tex=u_2%3D%5Cdfrac%7B2p%5Cln+p%7D%7Bp-1%7D)．

因此，

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%28u_2-u_1%29u_3%26%3Du_2u_3-u_1u_3+%5C%5C+%26%3D%5Cdfrac%7B4p%5Cln%5E2p%7D%7B%28p-1%29%5E2%7D%2B%5Cdfrac%7B4k%5Cln%5E2k%7D%7B%28k%2B1%29%5E2%7D.+%5Cend%7Baligned%7D+%5C%5C)

下证![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bp%5Cln%5E2p%7D%7B%28p-1%29%5E2%7D+%3C+1)，只需证![](https://www.zhihu.com/equation?tex=%5Csqrt%7Bp%7D%5Cln+p+%3C+1-p)，即![](https://www.zhihu.com/equation?tex=%5Cln+p+%3C+%5Cdfrac%7B1%7D%7B%5Csqrt%7Bp%7D%7D-%5Csqrt%7Bp%7D)．

事实上，因为函数![](https://www.zhihu.com/equation?tex=u%28x%29%3D%5Cln+x-%5Cdfrac%7B1%7D%7B%5Csqrt%7Bx%7D%7D%2B%5Csqrt%7Bx%7D)在区间![](https://www.zhihu.com/equation?tex=%280%2C1%29)单调递增，所以当![](https://www.zhihu.com/equation?tex=p%5Cin%280%2C1%29)时，![](https://www.zhihu.com/equation?tex=u%28p%29+%3C+u%281%29+%3D+0)．

下面只需证![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B4k%5Cln%5E2k%7D%7B%28k%2B1%29%5E2%7D+%3C+%5Cdfrac%7B4%5Cmathrm%7Be%7D%7D%7B%5Cmathrm%7Be%7D-1%7D-4+%3D+%5Cdfrac%7B4%7D%7B%5Cmathrm%7Be%7D-1%7D)．

即证：当![](https://www.zhihu.com/equation?tex=k+%3E+1)时，![](https://www.zhihu.com/equation?tex=%5Cln+k+%3C+%5Cdfrac%7B1%7D%7B%5Csqrt%7B%5Cmathrm%7Be%7D-1%7D%7D%5Cleft%28%5Csqrt%7Bk%7D%2B%5Cdfrac%7B1%7D%7B%5Csqrt%7Bk%7D%7D%5Cright%29)．

只需证：当![](https://www.zhihu.com/equation?tex=k+%3E+1)时，![](https://www.zhihu.com/equation?tex=%5Cln+k+%3C+%5Cdfrac%7B1%7D%7B%5Csqrt%7B2%7D%7D%5Cleft%28%5Csqrt%7Bk%7D%2B%5Cdfrac%7B1%7D%7B%5Csqrt%7Bk%7D%7D%5Cright%29)．

设![](https://www.zhihu.com/equation?tex=v%28x%29%3D%5Cln+x-%5Cdfrac%7B1%7D%7B%5Csqrt%7B2%7D%7D%5Cleft%28%5Csqrt%7Bx%7D%2B%5Cdfrac%7B1%7D%7B%5Csqrt%7Bx%7D%7D%5Cright%29)，

则![](https://www.zhihu.com/equation?tex=v%27%28x%29%3D%5Cdfrac%7B1%7D%7Bx%7D-%5Cdfrac%7B1%7D%7B%5Csqrt%7B2%7D%7D%5Cleft%28%5Cdfrac%7B1%7D%7B2%5Csqrt%7Bx%7D%7D-%5Cdfrac%7B1%7D%7B2x%5Csqrt%7Bx%7D%7D%5Cright%29)．

整理得![](https://www.zhihu.com/equation?tex=v%27%28x%29+%3D+%5Cdfrac%7B2%5Csqrt%7B2%7D%5Csqrt%7Bx%7D-x%2B1%7D%7B2%5Csqrt%7B2%7Dx%5Csqrt%7Bx%7D%7D%3D%5Cdfrac%7B-%28%5Csqrt%7Bx%7D-%5Csqrt%7B2%7D%29%5E2%2B3%7D%7B2%5Csqrt%7B2%7Dx%5Csqrt%7Bx%7D%7D)．

所以![](https://www.zhihu.com/equation?tex=v%28x%29)在![](https://www.zhihu.com/equation?tex=%281%2C%28%5Csqrt%7B3%7D%2B%5Csqrt%7B2%7D%29%5E2%29)单调递增，在![](https://www.zhihu.com/equation?tex=%28%28%5Csqrt%7B3%7D%2B%5Csqrt%7B2%7D%29%5E2%2C%2B%5Cinfty%29)单调递减．

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+v%28k%29%26%5Cle+v%28%5Csqrt%7B3%7D%2B%5Csqrt%7B2%7D%29+%5C%5C+%26%3D2%5Cln%28%5Csqrt%7B3%7D%2B%5Csqrt%7B2%7D%29+-%5Csqrt%7B6%7D+%5C%5C+%26+%3C+2%5Cln%282%5Csqrt%7B%5Cmathrm%7Be%7D%7D%29+-%5Csqrt%7B6%7D+%5C%5C+%26%3D1%2B2%5Cln+2-%5Csqrt%7B6%7D+%5C%5C+%26+%3C+1%2B2%5Ctimes+0.70-2.44+%3C+0.+%5Cend%7Baligned%7D+%5C%5C)

综上，

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%28%5Cln+x_2-%5Cln+x_1%29%5Cln+x_3+%26%3D%28u_2-u_1%29u_3+%5C%5C++%26%3D%5Cdfrac%7B4p%5Cln%5E2p%7D%7B%28p-1%29%5E2%7D%2B%5Cdfrac%7B4k%5Cln%5E2k%7D%7B%28k%2B1%29%5E2%7D+%5C%5C+%26+%3C+4%2B%5Cdfrac%7B4%7D%7B%5Cmathrm%7Be%7D-1%7D+%5C%5C+%26%3D%5Cdfrac%7B4%5Cmathrm%7Be%7D%7D%7B%5Cmathrm%7Be%7D-1%7D+%5Cend%7Baligned%7D+%5C%5C)

## 点评

用 Geogebra 画了一下，如果将![](https://www.zhihu.com/equation?tex=u_i)看成![](https://www.zhihu.com/equation?tex=a)的函数，则![](https://www.zhihu.com/equation?tex=%28u_2-u_1%29u_3)关于![](https://www.zhihu.com/equation?tex=a)大概是先增后减的，且

![](https://www.zhihu.com/equation?tex=%5Cmax_%7Ba%5Cin%280%2C%5Cfrac%7B4%7D%7B%5Cmathrm%7Be%7D%5E2%7D%29%7D%28u_2-u_1%29u_3+%5Capprox+5.32+%5Ctext%7B%EF%BC%88%E4%B8%8D%E4%B8%80%E5%AE%9A%E5%87%86%E7%A1%AE%EF%BC%89%7D%2C+%5C%5C)

然而![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B4%5Cmathrm%7Be%7D%7D%7B%5Cmathrm%7Be%7D-1%7D%5Capprox+6.33)，我真的不知道设置这个非最优上界的目的是什么，也不知道出题人的解法是什么样的，能刚刚好凑出这个上界．

另外，今年直接考的是被总结得非常系统、在模拟卷上也非常泛滥的零点、极值点相关的变形处理技巧，不仅如此，命题人还在这个技巧上进行 “屎上雕花”，以前的套路是两个零点，现在他改成了三个零点，我认为这实在是非常无聊．这种技巧**在天津卷中早在 2014 年第 20 题就已经被出过了，而其它地方卷更早还可以追溯到 2005 年湖南卷**．当年那道题刚出的时候确实大部分人都没见过，非常新颖，然而现在已经很泛滥了．

对于《课程标准》和教材的制订者、高考试卷的命题人，你与其让学生内卷各种解题技巧，还不如鼓励学生提升数学知识的广度，在提升学生的数学品味上多下功夫．**数学不该是现在这样**．

进入新高考以来，天津卷的函数压轴题的质量一年比一年差，表现在套路题横行或者高等下放．前年是拿数学分析中 Stirling 公式证明过程进行高等下放，去年是直接拿某一本数学分析书上的现成结论：当![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%5Cin%280%2C1%29)时，![](https://www.zhihu.com/equation?tex=%7Cx_1%5Cln+x_1-x_2%5Cln+x_2%7C%5Cle+%7Cx_1-x_2%7C%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D)．

附：一些高考真题

> **【2014天津，20】**
> 设![](https://www.zhihu.com/equation?tex=f%28x%29%3Dx-a%5Cmathrm%7Be%7D%5Ex)(![](https://www.zhihu.com/equation?tex=a%5Cin%5Cmathbf%7BR%7D))，![](https://www.zhihu.com/equation?tex=x%5Cin%5Cmathbf%7BR%7D)．已知函数![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)有两个零点![](https://www.zhihu.com/equation?tex=x_1)，![](https://www.zhihu.com/equation?tex=x_2)，且![](https://www.zhihu.com/equation?tex=x_1+%3C+x_2)．
> （Ⅰ） 求![](https://www.zhihu.com/equation?tex=a)的取值范围；
> （Ⅱ） 证明![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bx_2%7D%7Bx_1%7D)随着![](https://www.zhihu.com/equation?tex=a)的减小而增大；
> （Ⅲ） 证明![](https://www.zhihu.com/equation?tex=x_1%2Bx_2)随着![](https://www.zhihu.com/equation?tex=a)的减小而增大．
> 
> **【2024天津，20】**
> 已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Dx%5Cln+x)．
> （1）求曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在点![](https://www.zhihu.com/equation?tex=%281%2Cf%281%29%29)处的切线方程；
> （2）若![](https://www.zhihu.com/equation?tex=f%28x%29%5Cge+a%28x-%5Csqrt%7Bx%7D%29)对任意![](https://www.zhihu.com/equation?tex=x%5Cin%280%2C%2B%5Cinfty%29)成立，求实数![](https://www.zhihu.com/equation?tex=a)的值；
> （3）若![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%5Cin%280%2C1%29)，求证：![](https://www.zhihu.com/equation?tex=%7Cf%28x_1%29-f%28x_2%29%7C+%5Cle+%7Cx_1-x_2%7C%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D)．
> 
> **【2023天津，20】**
> 已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cleft%28%5Cdfrac%7B1%7D%7Bx%7D%2B%5Cdfrac%7B1%7D%7B2%7D%5Cright%29%5Cln%28x%2B1%29).
> （1）求曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)在![](https://www.zhihu.com/equation?tex=x%3D2)处的切线斜率；
> （2）求证：当![](https://www.zhihu.com/equation?tex=x+%3E+0)时，![](https://www.zhihu.com/equation?tex=f%28x%29+%3E+1)；
> （3）求证：![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B5%7D%7B6%7D+%3C+%5Cln%28n%21%29-%5Cleft%28n%2B%5Cdfrac%7B1%7D%7B2%7D%5Cright%29%5Cln+n+%2B+n+%5Cle+1)（![](https://www.zhihu.com/equation?tex=n%5Cin%5Cmathbf%7BN%7D%5E%2A)）．
> 
> **【2022浙江，22】**
> 设函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cdfrac%7B%5Cmathrm%7Be%7D%7D%7B2x%7D%2B%5Cln+x%28x%3E0%29)．
> （1） 求![](https://www.zhihu.com/equation?tex=f%28x%29)的单调区间；
> （2） 已知![](https://www.zhihu.com/equation?tex=a%2Cb%5Cin%5Cmathbf%7BR%7D)，曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)上不同的三点![](https://www.zhihu.com/equation?tex=%28x_1%2Cf%28x_1%29%29),![](https://www.zhihu.com/equation?tex=%28x_2%2Cf%28x_2%29%29),![](https://www.zhihu.com/equation?tex=%28x_3%2Cf%28x_3%29%29)处的切线都经过点![](https://www.zhihu.com/equation?tex=%28a%2Cb%29)．证明：
> （ⅰ）若![](https://www.zhihu.com/equation?tex=a%3E%5Cmathrm%7Be%7D), 则![](https://www.zhihu.com/equation?tex=0+%3C+b-f%28a%29+%3C+%5Cdfrac%7B1%7D%7B2%7D%28%5Cdfrac%7Ba%7D%7B%5Cmathrm%7Be%7D%7D-1%29)；
> （ⅱ）若![](https://www.zhihu.com/equation?tex=0+%3C+a+%3C+%5Cmathrm%7Be%7D)，![](https://www.zhihu.com/equation?tex=x_1+%3C+x_2+%3C+x_3)，则![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B2%7D%7B%5Cmathrm%7Be%7D%7D%2B%5Cdfrac%7B%5Cmathrm%7Be%7D-a%7D%7B6%5Cmathrm%7Be%7D%5E2%7D+%3C+%5Cdfrac%7B1%7D%7Bx_1%7D%2B%5Cdfrac%7B1%7D%7Bx_3%7D+%3C+%5Cdfrac%7B2%7D%7Ba%7D-%5Cdfrac%7B%5Cmathrm%7Be%7D-a%7D%7B6%5Cmathrm%7Be%7D%5E2%7D)．
> （注：![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%3D2.71828%5Ccdots)是自然对数的底数）
> 

## 三、2025北京高考第 21 题

详见

[2025北京高考中的骑士巡游问题（Knight's Tour Problem）](https://zhuanlan.zhihu.com/p/1919484233510020014)

# 是否可以由 aᵃ=bᵇ 推出 a=b？为什么？
[](https://www.zhihu.com/question/667026011/answer/3787354462)

注意到

![](https://www.zhihu.com/equation?tex=a%5Ea%3Db%5Eb)

其中

![](https://www.zhihu.com/equation?tex=a%3D0.368063488259223267894%5C%5C%5C%5C70084006052186583833823203735320%5C%5C%5C%5C46559596214370256093004722315301%5C%5C%5C%5C03873614505175218691345257589896%5C%5C%5C%5C39113039318944796977164583238219%5C%5C%5C%5C23660765366311320017761759779321%5C%5C%5C%5C78658703660778465765811830827876%5C%5C%5C%5C98201412402294867197567813172495%5C%5C%5C%5C80644279499028104989732710307877%5C%5C%5C%5C16781467419524180040734398996952%5C%5C%5C%5C93083250893411694596612017673512%5C%5C%5C%5C08231519597795368522900903774525%5C%5C%5C%5C02236990839453416790640456116471%5C%5C%5C%5C13975154675004860218929102864097%5C%5C%5C%5C05747626001859502261382445301874%5C%5C%5C%5C89211615864021135312077912018844%5C%5C%5C%5C63078030746220525280773775767209%5C%5C%5C%5C43206923731010325174595184975240%5C%5C%5C%5C15120165166724189816766397247824%5C%5C%5C%5C17539480202822816002710062399887%5C%5C%5C%5C36674357990730546189068554604883%5C%5C%5C%5C51426611310634023489044291860510%5C%5C%5C%5C35230191242660848880746231212659%5C%5C%5C%5C02068304137826645542604112663788%5C%5C%5C%5C66626653755763627796569082931785%5C%5C%5C%5C64560081623689116814177499326748%5C%5C%5C%5C81717021721910727310692168816682%5C%5C%5C%5C94625679492696148976999868715671%5C%5C%5C%5C44087420642721205671737309963971%5C%5C%5C%5C11689011974404165902265241927828%5C%5C%5C%5C42896415414611688187391232048327%5C%5C%5C%5C73896582026593409310817205487518%5C%5C%5C%5C82465917608771316578956335865766%5C%5C%5C%5C11857277011782497943522945011248%5C%5C%5C%5C43043920129701511946873071236400%5C%5C%5C%5C76393739108119534303094768324532%5C%5C%5C%5C30123996750235710787086641070310%5C%5C%5C%5C28872538959513893678471527415042%5C%5C%5C%5C64954161966698326799802534368078%5C%5C%5C%5C64187160054589045664027158817958%5C%5C%5C%5C54937449051239905544881914848704%5C%5C%5C%5C93636746116646098900300885495919%5C%5C%5C%5C92466360050042566270348330911795%5C%5C%5C%5C48764704594930128661465865007129%5C%5C%5C%5C96956522452660806729899217993425%5C%5C%5C%5C09291635330827874264789587306974%5C%5C%5C%5C47232771870430635244592599615561%5C%5C%5C%5C91537839132372127160104102949998%5C%5C%5C%5C77569745287353422903443387562746%5C%5C%5C%5C45252286042041668901973291379807%5C%5C%5C%5C37732815335709102052077671571281%5C%5C%5C%5C74184873357050830752777900041943%5C%5C%5C%5C25673849906782148842105387086902%5C%5C%5C%5C27386988160598105792210025608829%5C%5C%5C%5C99884763252161747566893835178558%5C%5C%5C%5C96114234930446650640237355631870%5C%5C%5C%5C71757108669830353131220683211024%5C%5C%5C%5C57824112014969387225476259342872%5C%5C%5C%5C86636355038384072001083290669536%5C%5C%5C%5C05535566475452958499662799808305%5C%5C%5C%5C61242960013654529514995113584909%5C%5C%5C%5C05081301519892828320218919461550%5C%5C%5C%5C14034355530601477131397663231957%5C%5C%5C%5C43324848047347575473228198492343%5C%5C%5C%5C23149658088505733051094905849052%5C%5C%5C%5C77386626974802935836122331345020%5C%5C%5C%5C78182014347192522391449087738579%5C%5C%5C%5C08158579561354719859966127356766%5C%5C%5C%5C24414904018628398178226865731129%5C%5C%5C%5C98663038868314974259766039340894%5C%5C%5C%5C02430838345103987467406116053824%5C%5C%5C%5C23928035807582327557493108436941%5C%5C%5C%5C94787991556647907091849600704712%5C%5C%5C%5C00337110392696713740812571363139%5C%5C%5C%5C66993437332880142540848193793805%5C%5C%5C%5C55174777020843568689927348949484%5C%5C%5C%5C20104259527193263068574761383538%5C%5C%5C%5C54344248070246151618482237159897%5C%5C%5C%5C97178155169951121052285149157137%5C%5C%5C%5C69771885044970884333047530144037%5C%5C%5C%5C30946111196313617029363422632193%5C%5C%5C%5C82793996895988331701890693689862%5C%5C%5C%5C45902077559943950687000513075042%5C%5C%5C%5C79497470713900952567592034266718%5C%5C%5C%5C03377068109744629909769176319526%5C%5C%5C%5C83782436492684473054552464649432%5C%5C%5C%5C18262419251071580405616077063644%5C%5C%5C%5C84910978348669388142016838792902%5C%5C%5C%5C92615897935543248361151758860596%5C%5C%5C%5C77453939580619590248342515651979%5C%5C%5C%5C63477521095821435651996730128376%5C%5C%5C%5C73457484328908968271035024422229%5C%5C%5C%5C00178912804197827678037852779608%5C%5C%5C%5C34729869249991658417000499998999)

![](https://www.zhihu.com/equation?tex=b%3D0.367695424770964044626806%5C%5C%5C%5C13922046134397249989380531585145%5C%5C%5C%5C13036618155885836911717592985737%5C%5C%5C%5C69740890670043472653912332306494%5C%5C%5C%5C73926279625852180187418654981017%5C%5C%5C%5C37104600945008697743998019542464%5C%5C%5C%5C80044957117687300046018997049105%5C%5C%5C%5C03210989892572330370245359323310%5C%5C%5C%5C63635219529076884742977597569290%5C%5C%5C%5C64685952104655860693664597955977%5C%5C%5C%5C90167642518282902015405655838570%5C%5C%5C%5C23288078197573154378002870750497%5C%5C%5C%5C34753848613963373849815660354668%5C%5C%5C%5C61179520329855358710173761232960%5C%5C%5C%5C41878375857642759121062856573017%5C%5C%5C%5C22404248157114176765834106825786%5C%5C%5C%5C14952715474304755493001991442222%5C%5C%5C%5C63716807279314849420589790264911%5C%5C%5C%5C05045001557465626949630850576351%5C%5C%5C%5C21940722619993186707352337487479%5C%5C%5C%5C37683632739815642879486050278630%5C%5C%5C%5C75184699323389465555247568649841%5C%5C%5C%5C94961051418188031865484981446361%5C%5C%5C%5C66235833688818897061508551124877%5C%5C%5C%5C60027102007864168772513848853859%5C%5C%5C%5C95521542065427697363321827422068%5C%5C%5C%5C35304700188816583381476647866263%5C%5C%5C%5C31053813203452828022868846955769%5C%5C%5C%5C43333222078484466065572654007145%5C%5C%5C%5C77322962429761736362976685900600%5C%5C%5C%5C53518999197076499203840816279411%5C%5C%5C%5C22685444566815901506388282031305%5C%5C%5C%5C83451691162545262377379529900352%5C%5C%5C%5C45419734770715445579422066237182%5C%5C%5C%5C00876209571810434926198165164363%5C%5C%5C%5C17345369011414768791673556207768%5C%5C%5C%5C93872753485475076299554429239978%5C%5C%5C%5C43666420554379784793055887627606%5C%5C%5C%5C89207804731628473002731833710563%5C%5C%5C%5C22972894534456618363131659140590%5C%5C%5C%5C82511602188665639337032933856231%5C%5C%5C%5C43109370529452801400584610424004%5C%5C%5C%5C73893689992523704077982580883692%5C%5C%5C%5C15939890335198532804399142122839%5C%5C%5C%5C59565930208145923169318775431667%5C%5C%5C%5C82343695497046390524797719667497%5C%5C%5C%5C85539098560204609348007015946353%5C%5C%5C%5C46301293239755032943998847048776%5C%5C%5C%5C92175542066069480539944175183706%5C%5C%5C%5C07033755999627233071318088427569%5C%5C%5C%5C95082520373392950025593899710460%5C%5C%5C%5C10688483693779922025122141901313%5C%5C%5C%5C48176056875366693263281699815371%5C%5C%5C%5C59601172437507686417815583221168%5C%5C%5C%5C84878488909585819326941343380402%5C%5C%5C%5C18120695516203989597118276238846%5C%5C%5C%5C85351561160522778089462527813553%5C%5C%5C%5C66287902954417838250783083529993%5C%5C%5C%5C49718683345687929082207378866519%5C%5C%5C%5C30030908977505541163137008497306%5C%5C%5C%5C81717053640874985480118471324141%5C%5C%5C%5C76220218372935491898700542088590%5C%5C%5C%5C20321175070875654266265568725475%5C%5C%5C%5C81523199300227897754970293850888%5C%5C%5C%5C26508430417227318043810943203721%5C%5C%5C%5C09240347828132900286209013675761%5C%5C%5C%5C03832332845329869057638650840502%5C%5C%5C%5C50420981793365140106161229409477%5C%5C%5C%5C90489114609769780048638865398856%5C%5C%5C%5C64375829446659285506273301553130%5C%5C%5C%5C28407506758883479938709937770415%5C%5C%5C%5C04107771774745229935615328505005%5C%5C%5C%5C93203565091259184757751104007291%5C%5C%5C%5C36773282304017027071758791776530%5C%5C%5C%5C26443895547262398307345600011746%5C%5C%5C%5C19602243822725121237421600534716%5C%5C%5C%5C84155267666069805506186622155004%5C%5C%5C%5C89903822175905466863754922738073%5C%5C%5C%5C80977014781169931232864007980560%5C%5C%5C%5C02113159925913448714482613893272%5C%5C%5C%5C15165085117303412334059209561634%5C%5C%5C%5C11202899092343370188802996172596%5C%5C%5C%5C56175482384006736313512561967752%5C%5C%5C%5C17973243187051615024442232451315%5C%5C%5C%5C73691041634885279859407143207310%5C%5C%5C%5C98654056191788581497912184782750%5C%5C%5C%5C44156831820508825210460986581204%5C%5C%5C%5C26067370320718753874821954110023%5C%5C%5C%5C23282037607705112790607101736177%5C%5C%5C%5C76485641038970658094173136327655%5C%5C%5C%5C14043574725614216344733398248357%5C%5C%5C%5C84026844580059302763989397806772%5C%5C%5C%5C78733891393629850359814926828738%5C%5C%5C%5C95139380741666758583499499000001)

大家可以试着验算一下（确实是有限小数，精确满足，没有误差）

说明一下，这两个数分别是![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B999%7D%7B1000%7D%29%5E%7B999%7D)和![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B999%7D%7B1000%7D%29%5E%7B1000%7D)

# 能否找出一个从(0，1)到[0，1]的一一映射？
[](https://www.zhihu.com/question/570213247/answer/3631148165)

参考中科大数分教材上的经典案例。

![](https://pic1.zhimg.com/v2-12dd9418dfab9be4b043f5e313932e07_r.jpg?source=2c26e567)

# 新版的高中数学教材为什么要删掉极坐标系？
[](https://www.zhihu.com/question/1901419631211701107/answer/1906817844961838907)

**事实上，极坐标和参数方程的知识，直到1996年左右之前一直都是高中解析几何的经典教学内容。换言之它在大纲里遭到删除是非常晚近的事，这或许和很多人的印象截然相反。**

**另外，沪教版高中数学新版教材里就没删极坐标**——应该是新版数学教材里唯一一个保留了极坐标和参数方程内容的版本了。不但没删，还在前言里直接开怼（x

![](https://pic1.zhimg.com/v2-bd45702ac2ae25bd11d0cc8a3a393a9f_r.jpg?source=2c26e567)

在详细分析这个问题之前，首先说一句：“极坐标”的概念哪有很多答主想象中那么难= =用“距离”和“方位角”去定位一个点是小学生就能理解的非常自然的想法，事实上小学生确实会学到【向东偏北40°方向走100米】这类表述——而这不就是最朴素的极坐标思想嘛～

**既然小学生都能理解，那为什么极坐标要放在高中学呢？**是因为——高中学极坐标的目的并不是在“雷达图”上定位一个点这么简单。它是作为平面解析几何知识的组成部分纳入高中教材的，目的是用曲线在极坐标系里的方程来解决解析几何问题。换言之：**学极坐标不是关键，学极坐标上的曲线方程才是关键。**——考虑到这一点，既然直角坐标里的解析几何（曲线与方程）都要到高中才能学、任意角三角函数等前置知识也是高中才学得到的，那极坐标自然也只能放在高中了= =

接下来我们很感兴趣的话题就是：**极坐标到底是什么时候被加入新中国的高中数学课程，又是什么时候惨遭删除的？**近年来的情况大家都很清楚（2003课标中出现在模块【选修4-4：坐标系与参数方程】中、高考以选做题的形式考察；2017课标中被彻底删除），但早期的情况或许鲜为人知——但如果我们确实去考察高中数学大纲和教材的演进情况，就会发现，极坐标并不是什么新近加入的内容，而是高中的“钉子户”知识点，直到二十世纪末才被逐渐边缘化。

这个故事同样说来话长。

> “我决心放弃那个仅仅是抽象的几何，不再去考虑那些仅仅是用来练习思想的问题。我这样做，是为了研究另一种几何，即目的在于解释自然现象的几何。”
> ——　解析几何之父  笛卡尔

在我国中学数学课程体系中，“解析几何”一直占有很重要的地位——这一方面是因为解析几何可以看作是整个中学数学课程（初等数学）的集大成，需要融会贯通地应用学过的代数、几何、三角等所有领域知识，**“示其相互为用之处”**；另一方面是因为解析几何本身具有极其重要的理论和实用价值，是从初等数学过渡到高等数学的桥梁，也是物理、化学和工科学习的必要铺垫，可**“立高深研究之基础”**。——早在民国晚期和新中国成立初年，“解析几何”就一直是高中数学的学习内容，其课程内容量和难度甚至远高于今天。

例如，1941年，国民政府教育部颁布的**《六年制中学数学课程标准草案》**中，规定了高中第三年开设立体几何**（含球面几何）**以及解析几何，其中解析几何**包括平面解析几何和空间解析几何**——从该大纲可见， “各种轨迹之极方程式及其图解”、“极坐标与笛卡尔坐标之互换”、“参变数方程式及高级平面曲线” 赫然在列：

![](https://picx.zhimg.com/v2-d0c023af009c702a1482271c43ea7871_r.jpg?source=2c26e567)

新中国建立后，1950年，教育部发布了**《数学精简纲要》**草案，对旧教材中的内容进行了较大幅度的精简。但在解析几何的版块中，依然保留了坐标转换与一般二次曲线的讨论、圆锥曲线的切线与法线、极坐标、参数方程（当时叫“襄变方程”）以及立体解析几何大意的内容。可见当时的教育工作者认为这些内容都是解析几何的核心内容：

![](https://pic1.zhimg.com/v2-ebae68cfd66558d78978b61c92f98217_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-fde7433e9e81f83a5d82ddfdd020caf0_r.jpg?source=2c26e567)

直到1952年7月，教育部开始编写我国的中小学各科教学大纲，并提出以学习苏联经验为主，将苏联的大纲“先搬过来，后中国化”。但由于在这一过程中，片面地将苏联中小学十年的教学内容拉长为我国的十二年，编出来的整套教科书的内容深度和水平远低于新中国成立初期。**高中平面解析几何被直接取消**，高中代数里也少学了方程论的一部分和概率、行列式的内容，总体来看知识面窄、内容少、程度低，完全不能满足学生毕业后进一步学习或者参加工作的需要。

![](https://picx.zhimg.com/v2-0e729eabc3dd4dbe654db20aea9c492b_r.jpg?source=2c26e567)

这样的教材势必不能满足社会主义建设对科学技术人才的迫切需求。1958年“大跃进”大幕甫一开启，“少慢差费”的旧教材就立刻受到批判。在轰轰烈烈的座谈讨论和走群众路线的调查研究中，各界逐渐形成了共识：**小学要学完算术，初中要学完平面几何，高中要恢复平面解析几何，适当考虑增加行列式、高次方程、导数和立体解析几何等内容。**——尤其是对高中要加平面解析几何这件事达成了一致。且看当时收集的意见：

大学教授提出：

![](https://pica.zhimg.com/v2-04acb6456b6f1955c2a7b6f2774cb570_r.jpg?source=2c26e567)

专家们说：

![](https://pic1.zhimg.com/v2-72a31da2b738067f00b3d6652ced5d3e_r.jpg?source=2c26e567)

教材编写组最后总结道：

![](https://picx.zhimg.com/v2-a6e88c1edac24665ee1e084bfdc71e4f_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-42b354f37664d4fea79c304dd03f4bd3_r.jpg?source=2c26e567)

关于这一段历史故事，包括调查研究过程中的有趣细节，可以参见前些时间的另一个回答：

[如何评价民国时代的"初中算术"课程？大家觉得它的存在是民国教育落后的象征，还是值得我们参考的先进做法？ - 知乎](https://www.zhihu.com/question/1902439762050134431/answer/1903336299466818104)

于是，就有了这份上交到教育部、再由教育部报送给国务院的文件：将初中算术全部下放小学、高中平面几何全部下放初中，**“原则上规定1962年秋季开始在高中三年级增加解析几何”**——彻底完成了对之前旧大纲的拨乱反正。

![](https://pica.zhimg.com/v2-717aa433efbed41c8b61201bf0e7215c_r.jpg?source=2c26e567)

在中央的同意下，新的教学大纲得以制定，新的高中平面解析几何教材也得以出版——而在书中，坐标变换、极坐标、参数方程等内容依然没有缺少：

![](https://pica.zhimg.com/v2-d74a45a995ccbe9cd733fb271d83bf78_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-215a4ec988acaaef5c48b47a899dd9d0_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-61cbe905e86c05e5fdd0cd1444e04044_720w.jpg?source=2c26e567)

在这一段波折之后，平面解析几何内容就稳定存在于中学数学的教学大纲内，而极坐标、参数方程的内容也从未缺席。**即便是在十年文革期间人教社出版的“带着语录”的《初等数学》教材，依然将极坐标、参数方程的内容编入《解析几何》分册，并列入基本内容而非选学内容。**——当时有很多“工农兵大学生”进入高校学习，由于中学的数学教育受到破坏，他们在中学期间没能得到完整的数学教育，进入理工科高校后需要补习。这套《初等数学》分为《初等代数》《初等几何》《三角函数》《解析几何》和《公式与数表》五册，因满足了他们渴望学习的需要而大受欢迎。当时全国相当多的高等院校采用它，许多省市自编的中学数学教材也参考它。

![](https://picx.zhimg.com/v2-027db46764c6d85207b00396f2adff42_r.jpg?source=2c26e567)

有了参数方程，可以研究车床上如何加工出六角螺母：

![](https://pic1.zhimg.com/v2-ff1a323eb24e0e36e1c24e49732c3873_r.jpg?source=2c26e567)

利用极坐标，除了研究直线和圆，我们还可以研究更复杂的曲线，例如螺线：

![](https://pica.zhimg.com/v2-67dc0fa983b917d2b0cee4c62d9a00b1_r.jpg?source=2c26e567)

例如和齿轮有关的渐伸线：

![](https://pic1.zhimg.com/v2-3e1f93103f4acf8723cca4ade6b3f037_r.jpg?source=2c26e567)

当然还可以研究圆锥曲线，并得出椭圆、抛物线和双曲线在极坐标下的统一方程：

![](https://picx.zhimg.com/v2-cd35017d1019f9b0e693c09a2d44a8e0_r.jpg?source=2c26e567)

1977年，高考的大门重新敞开，一套**《数理化自学丛书》**火遍了大江南北，无数人因它而改变了命运。无论是1962年出版的《数理化自学丛书》第一版、还是1982年出版的《数理化自学丛书》第二版，都纳入了极坐标系与参数方程的内容：

![](https://pica.zhimg.com/v2-fc72c311095fb1d8e86a8e177461d78d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d2359ce4b6264369c668e9f2b2a34a94_r.jpg?source=2c26e567)

1978年2月，教育部颁布了**《全日制十年制中学数学教学大纲（试行草案）》**，提出中学数学不再分科，将代数、几何、三角等内容以及新增加的微积分、概率统计、逻辑代数等内容合为一门“数学”课。在这一大纲的指导下，1980年人教社出版了文革后第一套全国通用的中学数学课本——从目录中可以看出，这一时期的教学大纲，将平面解析几何中的“直线和圆的方程”（还有指数、常用对数、解三角形等知识）从高中下放到了初中，高中依然开设“二次曲线”、“极坐标和参数方程”等内容：

![](https://picx.zhimg.com/v2-6064eba5ffb64e2b2a1ed9a0099f74ec_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a0e8918abc59a014d131c8bf2680c988_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-df54caf754ba25f488f18769d3831c60_r.jpg?source=2c26e567)

——可是，当时全国各地的教育水平还很不均衡，步子如此大的改革遇到很大困难。于是，1981年提出中学学制从五年制逐步延长到六年。在针对六年制中学的教学大纲中，取消了《数学》合编，仍分为《代数》《立体几何》《平面解析几何》等，并首次提出了“文理分科教学”——即对侧重文科的学生和侧重理科的学生提出不同的内容要求。**“对于侧重文科的学生，将反三角函数和三角方程、极坐标和参数方程、线性方程组、不等式的性质和证明等内容改为选学，微积分可以只学有理整函数的微分和积分。”**——这是极坐标内容的要求首次有了松动的迹象。**但是，对于侧重理科的学生，极坐标和参数方程仍为必修。**

这一做法一直持续到了1986年推出的《全日制中学数学教学大纲》——**在这份大纲里，尽管将“参数方程、极坐标”内容标为选修，但它对理科学生仍是必修，且仍在理科高考的命题范围内：**

> 本次修订本规定：高中阶段的必学内容是文史类高考的数学命题范围；必学内容与选学内容中的 “反三角函数和简单三角方程” “参数方程、极坐标” 合在一起，是理工科高考的数学命题范围。

![](https://picx.zhimg.com/v2-2b0a6cb9fc1dc5db2fb319525d4552a2_r.jpg?source=2c26e567)

——当然，还不得不提的便是这一时期出版的**《甲种本》《乙种本》**，如今还在知乎上被津津乐道。其实，无论是较高要求的“甲种本”、还是相对较低要求的“乙种本”，也都编入了坐标变换、参数方程和极坐标等内容。（甲种本只是额外多了一般二次曲线的讨论作为选学。）

![](https://pic1.zhimg.com/v2-d0e97a474a5096686b83269ca312834f_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-5246ea96c2caeb4506d502eebd393ffe_r.jpg?source=2c26e567)

**综上所述，极坐标和参数方程的内容，一直到90年代末，都是中学平面解析几何教学的经典内容，后期也处在理科高考的命题范围之内。**

直到1996年颁布的**《全日制普通高级中学数学教学大纲（供试验用）》**——后来又经过几次修订，最终形成了2002年**《全日制普通高级中学数学教学大纲》**。在这份新大纲中，解析几何的内容被删减，极坐标系与参数方程的内容也消失不见：

![](https://pica.zhimg.com/v2-7425b9ae41b5868af3493a3077fdf310_r.jpg?source=2c26e567)

根据这份新大纲编出的**“大纲版”教材**，自然就没有极坐标的位置了：

![](https://pic1.zhimg.com/v2-0cfa75004cce7032909856433c87b383_r.jpg?source=2c26e567)

而到了大家熟悉的2003年**《普通高中数学课程标准（实验）》**时代，大家都知道——极坐标和参数方程的内容得以回归，并作为选修模块出现，即**选修4-4《坐标系与参数方程》**——不过，即使单独编出了一本书，但要求也是明显降低了。只要求了直线和圆的极坐标方程，连圆锥曲线的极坐标方程都没有要求，就更不用说螺线之类更加复杂的曲线了= =

![](https://picx.zhimg.com/v2-7d3f4ae14483ec81f76179b817f2dc00_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-184bef14b3b5df9f4f8f1758113bbf99_r.jpg?source=2c26e567)

在很长一段时间以来，或许由于比较好出题（~），这个模块的内容是作为全国卷高考的一道“选做题”出现的（在个别省份例如广东则纳入必考内容）。而且由于一般来说比不等式或者几何证明好拿分，选考比例大概不低，导致这本选修多少还算是有点地位或者说牌面的。至少比它那些“无人问津”的兄弟们要好上不少～（有的甚至胎死腹中，从未出版）  同时，也是因为选考率相对较高，大部分高中学校都会讲，所以在老课标教材时代的绝大部分高中生也都是学习过极坐标与参数方程的知识的，没有给大学的教学带来太多障碍。

![](https://pica.zhimg.com/v2-437783b2b197f61fb39c39cf6dbd42c3_r.jpg?source=2c26e567)

**——这一局面直到17课标，戛然而止。**

**那么，为什么会这样？**

首先，高考中的所谓“选考题”无疑是个鸡肋的设计，这一点在[@阿西呀呀](https://www.zhihu.com/people/902e4ae770db3975b7b52bd2cb97ea92)的回答中已有论述。除了公平性得不到保障外，还容易助长投机取巧的风气，同时也人为造就了知识点的割裂和残缺——当年的理综时代，物理可以3-3、3-4、3-5三选一（后来改成二选一），导致很多学校事实上只选一本教，讲了热学就不讲光学等等，很多学生甚至高中没学过动量，总之总有那么一两个版块是缺失的；化学也是在结构化学和有机化学之中选一本，人为造成了二者的“互斥”，但问题是结构和有机本来应该是要联系在一起才能融会贯通的……  所以，17课标取消了所谓“选考题”，改为人人都要学完整的“选择性必修”，一定程度上解决了版块割裂的问题，也让很多本来没法出的“模块间综合题”可以出现了。

那按理说，取消了选考题，就应该直接加入必考部分才对（就和物化生政史地的做法相同）。但是正如[@Cyano](https://www.zhihu.com/people/d41e5b8d013627c7adf1114cac6bd853)的回答里所说：新高考改革取消文理分科后，数学课程被迫承载着既要降低难度又要保证选拔性的双重使命，不得“向下看齐”、削足适履。也许觉得极坐标本来是个“边缘”的内容，砍了就砍了吧——因为曾经“大纲时期”就删减过极坐标，所以或许也是某种路径依赖。（就像知乎上有个问题：为什么高中物理偏要把动量放在选择性必修？答案只能是从某版教材开始就是这样的，然后大家习惯了= =）

但我想补充可能是很重要的一点：众所周知，2019年，教育部宣布逐步取消高考“考试大纲”，以后高考不再发布考试大纲。这看起来当然是好事，所谓从“考什么就学什么”从“学什么就考什么”转变，但是却又很乌龙地引发了一个悖论，那就是：**在高考取消考试大纲后，课程标准和课本成了事实意义上的“考试大纲”，反过来限制了课本的编写。**以前高考还有考纲的时候，课本的编者不介意在课本上写点拓展内容，反正高考不考也不会增加学生负担。但现在没有考纲了，课本上只要有就可能会考，而且有些知识点本身不难但是可能被命题组玩出花来（正如前面所说的，极坐标本身没啥难理解的，但是它的存在有可能会诱导命题人设计需要坐标系转换的复杂题型），**那么为了防止命题人瞎发挥出难题，课本编写只能预先进行“自我阉割”，能回避的就完全回避。**之前我提到过现在的教材必须**“依标编写”**，本来按理说课标只是一个最低标准，但在有些审查中却执行成了“完全对照”，课标删了就一定不能写——只能说，在这种情况下，还坚持写拓展内容的课本主编和出版社都是需要勇气的= =

[如何评价网络观点「论教材的『防自学』设计」? - 知乎](https://www.zhihu.com/question/665966876/answer/3634899520)

例如之前夸过的湘教版数学教材，用“多知道一点”这个栏目，让很多本身被删减了的内容重新在课本里呈现：

[湘教版数学教材为什么那么厚？ - 知乎](https://www.zhihu.com/question/1889272854845036000/answer/1891661882600952367)

再例如最开始提到的沪教版数学教材，在前言里直接开怼：

> **“同时，数学学科是一个有机联系的整体，一定要避免知识的碎片化，从根本上改变单纯根据‘知识点’来安排教学的做法，人为地将知识链条打断，或将一些关键内容以‘减负’的名义删去，只会造成学生思维的混乱，影响学生对有关知识的认识与理解，实际上反而会加重学生学习的负担，是不值得效法的。”**

而沪教版教材也是新教材中唯一一个把极坐标和参数方程的内容加到教材正文中的版本（当然也打了星号），以下这一整节摘自沪教版选择性必修一：

![](https://pic1.zhimg.com/v2-8bb523715a162b299fa41fa712da8ed2_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-996b262b0b98b10e2279da87294f5a3a_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-3ec1dfc611aacc95614ff19c0ca628dc_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-327b314bc1ef5f8bfc0d6720f5d98949_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-fb3e6c4cf028a006034b46ae1fcc8b39_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-7d868c0bb81574c220e2f8c1494d6268_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-db11c17e05b93f2846830bed2eb5bca3_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c2c74391b8f3c0e2a01462219fb442d9_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a15ad30d39a73f165bbb330b1d9a0073_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-97e57238485eb28e98dfba6b59d41172_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d529f4f4bb547bf106aee7867aa0695a_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-31b36ba946a0d9ceae827d7763f537ad_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-078d9e44cd5ef945c2a7cd18c9cf0b9e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-159d45c0e85a7cb40280449b51665ddf_r.jpg?source=2c26e567)

很可惜的是，其他一些版本教材的编者似乎没有这样的勇气= =

**这样造成的后果是什么呢？**

首先，学生的解析几何知识体系存在残缺——放弃了极坐标的内容，事实上也就放弃了圆锥曲线的统一公式。学生很难理解离心率的几何意义，不知道为啥衡量椭圆“扁”的程度非得用![](https://www.zhihu.com/equation?tex=%5Cfrac+c+a)而不是![](https://www.zhihu.com/equation?tex=%5Cfrac+b+a)、不知道为啥非得给抛物线定义一个![](https://www.zhihu.com/equation?tex=e%3D1)，也对这三种曲线到底是怎么统一起来的抱有困惑，原本浑然一体的知识体系被人为割裂、打碎。新课标的制定者或许认为极坐标只是一个可有可无的解题工具，**但却忽视了“根据实际问题选择更有效的坐标系”本质上也是智慧的体现，是一种很重要的思维训练**——在解决某些曲线的问题时极坐标更方便，通过对比直角坐标和极坐标本可以强化对坐标系的本质认识，但如今学生已经没有训练这种思维的机会了。

![](https://picx.zhimg.com/v2-e07615f00a3dbbfad135e8d4010aa0d3_r.jpg?source=2c26e567)

此外，知识体系的破碎会给学生的进一步学习带来困难。大学学高数的时候，解决二重积分的问题很多时候需要用极坐标方程，空间的问题甚至还需要用到更复杂的柱坐标、球坐标。而如今极坐标的内容高中不学，大学的教材里也不会专门补，事实上已经成为了一个“两不管”地带 —— 当然，这种尴尬不仅限于极坐标，同样在新教材里被删掉的定积分更是如此，而且这种贸然删除所带来的恶果已经显现了——高中完全没建立过积分思想的话对学物理的影响很大，也对部分高校在大一第一学期开设物理、化学等课程带来了很大的冲击。**浙大现在已经开始对所有大一新生开设数学和计算机的预修课程了，就是在录取通知书里放上网课链接，让小朋友们暑假的时候学，然后开学考试= =**

![](https://pica.zhimg.com/v2-7e89a405fae66c427fd02d94f64c637f_r.jpg?source=2c26e567)

**另一方面，考试范围的窄化本身也是如今的高考圆锥曲线题沦为“雕花式爆算”的原因。**放弃了有趣的解析几何思想后，圆锥曲线题事实上只剩下了暴力的代数计算和机械的公式套用，与真正的数学思维背道而驰。你现在去问一个高中生，问他对“圆锥曲线”这个板块的印象，他大概不会对这里面的几何美感有任何感悟，只记得熟练运用韦达定理爆破联立方程，甚至涌现出了所谓“圆锥曲线硬解定理”这种荒谬的应试技巧。当然，这种异化反过来又成为删减派的弹药，说既然圆锥曲线只剩下这种刻意构造的繁琐计算了，不如进一步彻底给删除掉——**这有点像先给一个人下毒，然后再声称病情严重已经没有救治希望了，应该彻底放弃治疗= =**

![](https://picx.zhimg.com/v2-ce886ff526efef9ba66e9fba635587d3_r.jpg?source=2c26e567)

**——而我的观点是：高中数学不但不应该删减解析几何，反而应该增加“真正的解析几何”，将极坐标、参数方程、坐标变换和二次曲线的一般讨论等内容重新加回来，甚至引入射影几何乃至矩阵和二次型的概念去探讨二次曲线，这样才能真正体现解析几何的思想与意义。也唯有如此，才能让那些被应试扭曲的“雕花题”自然失去存在的土壤。**

真正的简化不是删除内容，而是建立更深层的联系；真正的教育也不是让学生躲避难题，而是赋予他们征服高峰的工具。

**参考文献：**

> **《20世纪中国中小学课程标准 · 教学大纲汇编：数学卷》**（人民教育出版社）
> **《新中国中小学教材建设史（1949—2000）研究丛书：数学卷》**（人民教育出版社）
> **《中小学数学教材五十年：1950—2000》**（人民教育出版社）
> **《新中国中小学教科书图文史：数学》**（广东教育出版社）

**另一个类似问题：**

[为什么高中物理取消了对于力矩的学习? - 知乎](https://www.zhihu.com/question/1904632699349598819/answer/1905426327596693119)

# 费马大定理的证明
[](https://zhuanlan.zhihu.com/p/1902240738508529873)

对于任意整数![](https://www.zhihu.com/equation?tex=n+%5Cgeq+3)，不存在正整数![](https://www.zhihu.com/equation?tex=%28+x%2C+y%2C+z+%29)满足方程：

![](https://www.zhihu.com/equation?tex=x%5En+%2B+y%5En+%3D+z%5En+%5C%5C)

## 解答

![](https://pic1.zhimg.com/v2-c2e1cb9e7bf835f505792ec6e842934c_r.jpg)

![](https://pica.zhimg.com/v2-9e2ec2c5d13e8e9287dc58cfe38fd3b4_r.jpg)

![](https://pic2.zhimg.com/v2-1f1185c64ff14e0639c57f25c678ddff_r.jpg)

![](https://picx.zhimg.com/v2-74aea4db37375af935a51b617b407685_r.jpg)

![](https://pic3.zhimg.com/v2-2075cafb2b7c7a92490c1f0bb66c5384_r.jpg)

![](https://pica.zhimg.com/v2-41cb4393ff675957aa1631b2345bedec_r.jpg)

![](https://pic2.zhimg.com/v2-edd9242ceeaa374d79d685e1da151583_r.jpg)

![](https://pic2.zhimg.com/v2-d069ce3b4a1929b5efc60488fbe4d2db_r.jpg)

![](https://pic1.zhimg.com/v2-3f0184b462df1c31451226c046906f36_r.jpg)

![](https://pic1.zhimg.com/v2-983128ab6d9443fe6845a4b891caa172_r.jpg)

![](https://pic1.zhimg.com/v2-e9c32bb87da33849db741ed73115ec56_r.jpg)

![](https://pica.zhimg.com/v2-9cd754aa212de69a90d6d10f541bb35a_r.jpg)

![](https://pica.zhimg.com/v2-7e3ee7e8d5c2b5c56134637edf339d9c_r.jpg)

![](https://pic4.zhimg.com/v2-d35152593039adfe92cda13bb239b3e5_r.jpg)

![](https://pic4.zhimg.com/v2-35681984dedbeec0430ebb8f16ee791b_r.jpg)

![](https://pic4.zhimg.com/v2-5e1d88b6e520aad1d40987ba2edd2f51_r.jpg)

![](https://picx.zhimg.com/v2-1a2d2642a83ad66276168cad8b633887_r.jpg)

![](https://pic2.zhimg.com/v2-4f5f3979fbf98976281e9a20d3dfe2cf_r.jpg)

![](https://pica.zhimg.com/v2-9947273a41e6bdda9d078d1824f5ff98_r.jpg)

![](https://picx.zhimg.com/v2-0e8bdfe499589cff8a9dec84ef6980e1_r.jpg)

![](https://pica.zhimg.com/v2-9f449c370cd6fbd710c383d9fb9379d8_r.jpg)

![](https://pic2.zhimg.com/v2-8cbac9eb7f65c5bc37e1c9d21c0428e3_r.jpg)

![](https://picx.zhimg.com/v2-7b243e3b2f781af5362223d616cea2b1_r.jpg)

![](https://pica.zhimg.com/v2-db281f48663da165f85e507dfb21178e_r.jpg)

![](https://pic2.zhimg.com/v2-bfed37cd5d29fd30bef21fa20bb80287_r.jpg)

![](https://pica.zhimg.com/v2-6a0032a2414b3360a71523e392176b4c_r.jpg)

![](https://pica.zhimg.com/v2-c52068a56bdd85b3c7ebdf036d57b772_r.jpg)

![](https://pic1.zhimg.com/v2-be6d2ca6d0941d5f4a418c31f38e7fc6_r.jpg)

![](https://pic2.zhimg.com/v2-448d39b32a63c4d5ce4d4f16a1422201_r.jpg)

![](https://pic1.zhimg.com/v2-02502f88673b7c695cff6caf455bca8a_r.jpg)

![](https://pic2.zhimg.com/v2-1078f7838582c619b55eeb5e2d53acf9_r.jpg)

![](https://pica.zhimg.com/v2-42cf5aa1ec989adf88416f241665934a_r.jpg)

![](https://pica.zhimg.com/v2-8101cc7ed55d51f92a056f4213a2c5b4_r.jpg)

![](https://pic2.zhimg.com/v2-23bf58cb5db9742daa77db9889ad4875_r.jpg)

![](https://pic4.zhimg.com/v2-6fd89a16b60d82b8c99865dd3af4dec5_r.jpg)

![](https://pica.zhimg.com/v2-7639b2f8a47f89882175f72770a3e55a_r.jpg)

![](https://pic1.zhimg.com/v2-f82e160829e73d4a106dc0868220b87a_r.jpg)

![](https://pic1.zhimg.com/v2-e8dfcd0cc917b546199855c044b80502_r.jpg)

![](https://pic2.zhimg.com/v2-0c9e30de46cff140640553459bb11b5d_r.jpg)

![](https://pic4.zhimg.com/v2-26473a8b889ec99af2a6294cd0073cb9_r.jpg)

![](https://pic1.zhimg.com/v2-e874ee9d0e4f0969baf091d773ffdb7e_r.jpg)

![](https://pic4.zhimg.com/v2-77d9d81490b0a6caf4282fe7a3598feb_r.jpg)

![](https://pic4.zhimg.com/v2-cd4ad3b05f44cb1bfc80c574f8e01bff_r.jpg)

![](https://pic2.zhimg.com/v2-ce80401d3e3e6ac22060536de2ec726d_r.jpg)

![](https://pic1.zhimg.com/v2-ef5b30c707ab72595321736e9f71cc20_r.jpg)

![](https://pica.zhimg.com/v2-df86385de1dfe93cfdd86707f5c1707a_r.jpg)

![](https://picx.zhimg.com/v2-7613d8204af5d2fed15c701a51740397_r.jpg)

![](https://pic3.zhimg.com/v2-33a56aaa02265ba3fa81fe02c5a5bf2e_r.jpg)

![](https://pic2.zhimg.com/v2-f1b25b89dad2c4f122c729c5688c4f51_r.jpg)

![](https://pic1.zhimg.com/v2-253e5c19e88a5ab38001edd8f88d9c14_r.jpg)

![](https://pic1.zhimg.com/v2-20fa28af84ed7cea195ac8bb4d034b5a_r.jpg)

![](https://pic2.zhimg.com/v2-0af04e54a35af213bd1e77a69041b763_r.jpg)

![](https://pic1.zhimg.com/v2-5469aeddc2822e1f48bd2aea1449b61c_r.jpg)

![](https://pic1.zhimg.com/v2-b472a032c1966d1d6e608d9d32d95a9c_r.jpg)

![](https://pic2.zhimg.com/v2-7f3cebfeb6986ace2ad8e5642d2c1a7d_r.jpg)

![](https://pic3.zhimg.com/v2-17c44e76cb18a2c5a0d85ec1aed86f0c_r.jpg)

![](https://pic4.zhimg.com/v2-392d590cf3a9196f32abf9ecfcde8b15_r.jpg)

![](https://pic1.zhimg.com/v2-990b9371a5a20f377a2b83e84d77e0cc_r.jpg)

![](https://pic2.zhimg.com/v2-d6ec3ed88a21953957b973e01c2586b7_r.jpg)

![](https://pic1.zhimg.com/v2-bd4cb689d61c3e98b9e9707e046f4008_r.jpg)

![](https://pic1.zhimg.com/v2-10213bdef5b41cefbe16aedde7856b44_r.jpg)

![](https://pic3.zhimg.com/v2-cc2371f70287e8b295771b4cae132ea6_r.jpg)

![](https://pica.zhimg.com/v2-8a1a07b4155acf9a137f6815c832bf9c_r.jpg)

![](https://pic2.zhimg.com/v2-2b25457d65cb2411ef5ed273b7cf8605_r.jpg)

![](https://pic3.zhimg.com/v2-fd2425744d7ff74230ba96c1323b21c0_r.jpg)

![](https://picx.zhimg.com/v2-570c4168cc086b79f7df51ccd9b479ab_r.jpg)

![](https://pic2.zhimg.com/v2-7b158759b77fdf19619bc5d296a85453_r.jpg)

![](https://pica.zhimg.com/v2-dce5992e2af1d4a0cf9fb45c6a4c732a_r.jpg)

![](https://pic1.zhimg.com/v2-bc0025ad77b6a0d8cbff691e87e089f4_r.jpg)

![](https://pic2.zhimg.com/v2-502cb527635e31d589a9dfa0d135ab05_r.jpg)

![](https://pic4.zhimg.com/v2-63d7832349a514cce8235d99eaa44ceb_r.jpg)

![](https://pic3.zhimg.com/v2-20dc3fc334dcfd0fbee0928e2bc26f2a_r.jpg)

![](https://picx.zhimg.com/v2-f05f1ecd94cec10d43a67b477f2ec5eb_r.jpg)

![](https://pic1.zhimg.com/v2-0f9b5f958cbd0401e3d097d0533b5aac_r.jpg)

![](https://pic1.zhimg.com/v2-47403e13fa7e89bf20bffb7bd761293c_r.jpg)

![](https://pic4.zhimg.com/v2-27dfb26a7a51b5157d7a2010ecc66d8f_r.jpg)

![](https://pica.zhimg.com/v2-173cf279972330c8bee298b98c64b280_r.jpg)

![](https://picx.zhimg.com/v2-ef9bc2a602774427b806147b374364f1_r.jpg)

![](https://picx.zhimg.com/v2-a0f0d4e5fccd8ef564c53b06be4c6035_r.jpg)

![](https://pic2.zhimg.com/v2-5f697cab6304756141c73848d3a425a7_r.jpg)

![](https://picx.zhimg.com/v2-cb2a432fc1ae3af703a132345ab21a73_r.jpg)

![](https://pic2.zhimg.com/v2-58370baa458c6a33437e5d31d72e2279_r.jpg)

![](https://pic3.zhimg.com/v2-69eb11e2154eb7222057aea34c01a52e_r.jpg)

![](https://pic3.zhimg.com/v2-be9de7754df10a574b2e800d20930a7c_r.jpg)

![](https://pic2.zhimg.com/v2-38b03d50c62c9e3c014430d885a60fc7_r.jpg)

![](https://picx.zhimg.com/v2-6ac53a88d4c268d7a6ae50b5afa22601_r.jpg)

![](https://picx.zhimg.com/v2-2105fc29b1c8f8750787c96ef9ae7ae5_r.jpg)

![](https://pic2.zhimg.com/v2-1d4b77be2cf915284d19797e6fd8d8e9_r.jpg)

![](https://pic1.zhimg.com/v2-06e9356dc1d0da26d8f1d71f7c820478_r.jpg)

![](https://pic4.zhimg.com/v2-33f789bf8f7c2a1b658493f4aba0d521_r.jpg)

![](https://pic1.zhimg.com/v2-8a25cb969c1e7edff6fd8fd29e9af9fe_r.jpg)

![](https://picx.zhimg.com/v2-1c605c07eacc301f7ae2cdcc6a5e1383_r.jpg)

![](https://pic4.zhimg.com/v2-fc8271d1826ba623e8f957b44508bb69_r.jpg)

![](https://pic3.zhimg.com/v2-c67a0a8e58f4eab70ae919121d86158c_r.jpg)

![](https://picx.zhimg.com/v2-82d46c041d0c3b8622fce8417b094151_r.jpg)

![](https://pic4.zhimg.com/v2-47687c3af09bd28c1eee3f2568440da9_r.jpg)

![](https://pica.zhimg.com/v2-5b98732a0df09b5af77830c5bd36ea88_r.jpg)

![](https://picx.zhimg.com/v2-9808ebfffb6eba026c11f31b5339507b_r.jpg)

![](https://pic1.zhimg.com/v2-a0daacb24638a1fcc8737e181559abf6_r.jpg)

![](https://pic4.zhimg.com/v2-9f6fadb4ecca2e8c8f72928fda657531_r.jpg)

![](https://picx.zhimg.com/v2-237a38ae485013337f552f67238edb99_r.jpg)

![](https://pica.zhimg.com/v2-a5f5fda0e757a6dd87bcaed3b1d74ec6_r.jpg)

![](https://pic4.zhimg.com/v2-67cc311765d8a96da8aa4199a476fe19_r.jpg)

![](https://pic2.zhimg.com/v2-f51e133055d90bffdb18c0bf8bc30a75_r.jpg)

![](https://pic1.zhimg.com/v2-148768efde5747ee1384e98db048ef14_r.jpg)

![](https://pic1.zhimg.com/v2-948837105b32ab18b0daeb70c40e15e8_r.jpg)

![](https://pic2.zhimg.com/v2-d86731deb1418e1d315f61debb970ad7_r.jpg)

# 一套钓鱼卷的部分题目解答
[](https://zhuanlan.zhihu.com/p/1899907731562934988)

[有没有超级难的圆锥曲线？ - 柯西永远爱你的回答 - 知乎 https://www.zhihu.com/question/651079179/answer/3450700448](https://www.zhihu.com/question/651079179/answer/3450700448)

[@柯西永远爱你](https://www.zhihu.com/people/63096a4161cc90d786a974df99035769)

## 题目

- 若集合 ，则  中的元素个数为__。
- 函数  的定义域为__。
- 数列  的中位数为__。
- 已知数列  满足 ，若 ，则正整数  __。
- 化简： __（用最简根式表示）。
- 若圆锥的全面积为 ，则圆锥体积的最大值为__。
- 椭圆  的动弦  长为 ，则弦  的中点  横坐标的最大值为__。
- 设  分别是一个正五边形五边所在直线的斜率，其中  存在且非零，则  的取值范围是__。
- 已知  为四个实数，若  的方差为 ， 的方差为 ， 的方差为 ，则  的方差的取值范围是__。
- 椭圆 ， 为椭圆外一定点，点  在椭圆上。过  作直线  交椭圆  于  两点，若存在过  的定直线  满足直线  始终关于直线  对称，则直线  的斜率为__。
- 已知数列  满足  为奇数时 ， 为偶数时 。记 ，，数列 ， 的前  项和分别为 。若实数  满足对一切 ，均有 ，则  的最小值为____。
- 已知有  个数 ，满足对于任意正整数 ，均存在正整数 ，使得  成立，则正整数  的最大值为__。
- 若  表示命题  成立且命题  不成立，则对于命题 ，下列说法正确的有（ ）① “ 是  的充要条件” 是 “ 是  的充要条件” 的充分不必要条件② “ 是  的必要不充分条件” 是 “ 是  的充要条件” 的充分不必要条件③ “ 是  的充分不必要条件” 是 “ 是  的充要条件” 的必要不充分条件A.  个 B.  个 C.  个 D.  个
- 依次连续抛  次硬币，出现连续  次及以上正面朝上的概率为（ ）A.  B.  C.  D.
- 已知集合  不是空集，且满足对于任意 ，均有 ，。下列结论正确的有（ ）① 若 ，则  ② 正有理数集  ③ 若 ，则  ④ 存在集合 ，使得  ⑤ 存在集合 ，使得  ⑥ 存在集合 ，使得  A. 2 个 B. 4 个 C. 5 个 D. 6 个
- 已知椭圆 ， 分别为左、右焦点。 为平面内一点，过  作椭圆  的一条切线，切点为点 。若  恒成立，则满足条件的  的轨迹为（ ）A. 椭圆 B. 两个圆 C. 圆 D. 双曲线的一部分
- 已知函数 。(1) 求  的定义域和最小正周期；(2) 若  且 ，试证明：。
- 已知 ，记 ，规定 。 记  展开式中  的系数为 ，即  且当  时，定义 。(1) 求  和  的值，并证明：对于一切 ，；(2) 求  的表达式。
- 在高考中，小丁同学顺利考上了清华大学，他的父母赠予了他一块正方形白金片（厚度不记，不可弯折）以示奖励。小丁同学十分喜爱，为了防止被盗，他打算将其保存于一个保险箱中。他选择了一家可以定制保险箱大小的店铺，该店生产的保险箱均为完美正方体，且价格和表面积成正比。为了省钱，小丁同学打算探究最小多大的保险箱能装下该白金片。经测量，白金片的面积为 。(1) 小丁同学设计了一种摆放方式，如下图所示：正方体  为保险箱，白金片  的四个顶点分别在棱  上。请你帮小丁同学求出该情况下保险箱棱长的最小值 ，并判断保险箱的中心  是否在白金片上；(2) 试证明：棱长小于  的保险箱一定无法装下该白金片。
- 已知椭圆   的焦距为 ，左右焦点分别为 。 为  轴上一定点，过  作不水平的直线  交  于  两点，过  分别作  的两条切线，两切线交于  点。记直线  交于点 ， 点的轨迹为曲线 。(1) 若记  点横坐标为 ，试证明： 为一定值，并求出当  时  的方程；(2) 在第 (1) 问的条件下，求  的方程；(3) 试证明：直线  始终与  相切。
- 对于 ，定义连乘符号 ，如 ， 记 。(1) 化简：；(2) 求证：；(3) 记  是多项式  展开式中  的系数，则集合  中是否只有有限个元素？若是，请证明；若不是，请说明理由。

以下为个人解析，大题仅给出答案（有时间再补）。

## 1 【2*】

若集合![](https://www.zhihu.com/equation?tex=A%3D%5C%7Bx%7Cx%3D%5Ccos%5Cfrac%7Bk%5E3%5Cpi%7D%7B7%7D%2Ck%5Cin%5Cmathbb+Z%5C%7D)，则![](https://www.zhihu.com/equation?tex=A)中的元素个数为**_**_

**考点：模余性质 三角函数的周期**

![](https://www.zhihu.com/equation?tex=%5Ccos)函数以![](https://www.zhihu.com/equation?tex=2%5Cpi)为周期，可知![](https://www.zhihu.com/equation?tex=%5Ccos%5Cfrac%7Bk%5E3%5Cpi%7D%7B7%7D)以![](https://www.zhihu.com/equation?tex=14)项为周期。经验算，当![](https://www.zhihu.com/equation?tex=k%3D14m%2C14m%2B1%2C%5Cdots%2C14m%2B13)时![](https://www.zhihu.com/equation?tex=%5Ccos%5Cfrac%7Bk%5E3%5Cpi%7D%7B7%7D%3D1%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-1%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29)![](https://www.zhihu.com/equation?tex=A%3D%5Cleft%5C%7B-1%2C1%2C-%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%2C%5Ccos+%5Cleft%28%5Cfrac%7B%5Cpi+%7D%7B7%7D%5Cright%29%5Cright%5C%7D)

![](https://www.zhihu.com/equation?tex=A)中共有![](https://www.zhihu.com/equation?tex=%5Cboxed+4)个元素。

## 2 【1*】

函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Clog_x%28%5Csin+x%29)的定义域为**_**_

**考点：定义域 不等式求解**

解不等式![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7Dx%3E0%5C%5Cx%5Cneq1%5C%5C%5Csin+x%3E0%5Cend%7Bcases%7D)

得![](https://www.zhihu.com/equation?tex=0%3Cx%3C1%5Clor+1%3Cx%3C%5Cpi+%5Clor+2k+%5Cpi++%3Cx%3C2k+%5Cpi++%2B%5Cpi%2Ck%5Cin%5Cmathbb+N%5E%2A)

定义域为![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%280%2C1%29%5Ccup%281%2C%5Cpi%29%5Ccup%282k%5Cpi%2C2k%5Cpi%2B%5Cpi%29%2Ck%5Cin%5Cmathbb+N%5E%2A%7D)

## 3 【1*】

数列![](https://www.zhihu.com/equation?tex=C_2%5E1%2CC_3%5E2%2CC_4%5E2%2CC_4%5E3%2CC_5%5E2%2CC_5%5E4)的中位数为**_**_

**考点：中位数 组合数计算**

计算可知，数列为![](https://www.zhihu.com/equation?tex=2%2C3%2C6%2C4%2C10%2C5)排序得![](https://www.zhihu.com/equation?tex=2%2C3%2C4%2C5%2C6%2C10)中位数为![](https://www.zhihu.com/equation?tex=%5Cfrac%7B4%2B5%7D%7B2%7D%3D%5Cboxed%7B%5Cfrac%7B9%7D%7B2%7D%7D)

## 4 【1*】

已知数列![](https://www.zhihu.com/equation?tex=%5C%7Ba_n%5C%7D)满足![](https://www.zhihu.com/equation?tex=a_1%3Di%2Ca_%7Bn%2B1%7D%3Di%2B%5Cfrac%7Bi%7D%7Ba_n%7D)，若![](https://www.zhihu.com/equation?tex=a_k%3D%5Cfrac%7B5%7D%7B8%7D%2B%5Cfrac%7B13%7D%7B10%7Di)，则正整数![](https://www.zhihu.com/equation?tex=k%3D)**_**_

**考点：计算器的使用**

是时候解封计算器了。

- 掏出你的 CASIO fx991-CN X，切换至复数模式（点 菜单，按 2）。
- 输入 ENG(i)，按 =。
- 输入 i+i÷Ans，数数你按了几次 =，并把你数的数  即为答案。

![](https://www.zhihu.com/equation?tex=a_n%3A%5Cleft%5C%7Bi%2C1%2Bi%2C%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B3+i%7D%7B2%7D%2C%5Cfrac%7B3%7D%7B5%7D%2B%5Cfrac%7B6+i%7D%7B5%7D%2C%5Cfrac%7B2%7D%7B3%7D%2B%5Cfrac%7B4+i%7D%7B3%7D%2C%5Cfrac%7B3%7D%7B5%7D%2B%5Cfrac%7B13+i%7D%7B10%7D%2C%5Cfrac%7B26%7D%7B41%7D%2B%5Cfrac%7B53+i%7D%7B41%7D%2C%5Cfrac%7B53%7D%7B85%7D%2B%5Cfrac%7B111+i%7D%7B85%7D%2C%5Cfrac%7B111%7D%7B178%7D%2B%5Cfrac%7B231+i%7D%7B178%7D%2C%5Cfrac%7B77%7D%7B123%7D%2B%5Cfrac%7B160+i%7D%7B123%7D%2C%5Cfrac%7B480%7D%7B769%7D%2B%5Cfrac%7B1000+i%7D%7B769%7D%2C%5Cfrac%7B5%7D%7B8%7D%2B%5Cfrac%7B13+i%7D%7B10%7D%2C%5Cdots%5Cright%5C%7D)

![](https://www.zhihu.com/equation?tex=k%3D%5Cboxed%7B12%7D.)

## 5 【3*】

化简：![](https://www.zhihu.com/equation?tex=%5Ctan%5E2%5Cfrac%7B%5Cpi%7D%7B13%7D%5Ccdot%5Ctan%5E2%5Cfrac%7B3%5Cpi%7D%7B13%7D%5Ccdot%5Ctan%5E2%5Cfrac%7B4%5Cpi%7D%7B13%7D%3D)**_**_

**考点：三角函数恒等变形 计算器的使用**

上难度了。

先拿出计算器算一下，![](https://www.zhihu.com/equation?tex=%5Ctan%5E2%5Cfrac%7B%5Cpi%7D%7B13%7D%5Ccdot%5Ctan%5E2%5Cfrac%7B3%5Cpi%7D%7B13%7D%5Ccdot%5Ctan%5E2%5Cfrac%7B4%5Cpi%7D%7B13%7D%5Capprox0.1000770416)

猜想上式可能与![](https://www.zhihu.com/equation?tex=%5Csqrt%7B13%7D)有关，具有![](https://www.zhihu.com/equation?tex=a%2Bb%5Csqrt%7B13%7D)的形式，其中![](https://www.zhihu.com/equation?tex=a%2Cb)可能为整数。

拿出计算器，切换到小数模式（）。如果其满足上述形式，那么![](https://www.zhihu.com/equation?tex=b%5Csqrt%7B13%7D)的小数部分应是![](https://www.zhihu.com/equation?tex=.10007704)（![](https://www.zhihu.com/equation?tex=b%3E0)）或![](https://www.zhihu.com/equation?tex=.89992296)（![](https://www.zhihu.com/equation?tex=b%3C0)）。

在计算器里输入![](https://www.zhihu.com/equation?tex=%5Csqrt%7B13%7D)，，然后输入![](https://www.zhihu.com/equation?tex=%5Ctext%7BAns%7D%2B%5Csqrt%7B13%7D)，连续按，注意观察小数部分与上述两个小数部分是否相同，记下按了多少次。

在按到第![](https://www.zhihu.com/equation?tex=18)次时，小数部分恰好为![](https://www.zhihu.com/equation?tex=.89992296)，与结果相同。这时我们就知道![](https://www.zhihu.com/equation?tex=b%3D-18)，此时![](https://www.zhihu.com/equation?tex=a%3D65)。验算，![](https://www.zhihu.com/equation?tex=65-18%5Csqrt%7B13%7D)刚好与原式相等。现在你一定可以**注意到**：

> 注意到![](https://www.zhihu.com/equation?tex=65-18%5Csqrt%7B13%7D)恰好与上式结果相同，因此结果为![](https://www.zhihu.com/equation?tex=%5Cboxed%7B65-18%5Csqrt%7B13%7D%7D)。

## 6 【2*】

若圆锥的全面积为![](https://www.zhihu.com/equation?tex=6%5Cpi)，则圆锥体积的最大值为**_**_

**考点：圆锥的表面积与体积**

设![](https://www.zhihu.com/equation?tex=r)是底面半径，![](https://www.zhihu.com/equation?tex=l)是斜高，![](https://www.zhihu.com/equation?tex=h)是高，则![](https://www.zhihu.com/equation?tex=S+%3D+%5Cpi+r+l+%2B+%5Cpi+r%5E2%3D6%5Cpi)![](https://www.zhihu.com/equation?tex=r+l+%2B+r%5E2+%3D+6)

有![](https://www.zhihu.com/equation?tex=l+%3D+%5Csqrt%7Bh%5E2+%2B+r%5E2%7D)

代入表面积公式![](https://www.zhihu.com/equation?tex=+r+%5Csqrt%7Bh%5E2+%2B+r%5E2%7D+%2B+r%5E2+%3D+6+)![](https://www.zhihu.com/equation?tex=+%5Csqrt%7Bh%5E2+%2B+r%5E2%7D+%3D+%5Cfrac%7B6+-+r%5E2%7D%7Br%7D+)

两边平方![](https://www.zhihu.com/equation?tex=+h%5E2+%2B+r%5E2+%3D+%5Cleft%28%5Cfrac%7B6+-+r%5E2%7D%7Br%7D%5Cright%29%5E2%3D%5Cfrac%7B36+-+12r%5E2+%2B+r%5E4%7D%7Br%5E2%7D+)

化简得![](https://www.zhihu.com/equation?tex=+h%5E2+%3D+%5Cfrac%7B36+-+12r%5E2+%2B+r%5E4-+r%5E4%7D%7Br%5E2%7D+%3D+%5Cfrac%7B36+-+12r%5E2%7D%7Br%5E2%7D+%3D+%5Cfrac%7B12%283+-+r%5E2%29%7D%7Br%5E2%7D+)

因此![](https://www.zhihu.com/equation?tex=+h+%3D+%5Cfrac%7B%5Csqrt%7B12%283+-+r%5E2%29%7D%7D%7Br%7D+%3D+%5Cfrac%7B2%5Csqrt%7B3%7D%5Csqrt%7B3+-+r%5E2%7D%7D%7Br%7D+)

体积公式![](https://www.zhihu.com/equation?tex=+V%28r%29+%3D+%5Cfrac%7B1%7D%7B3%7D+%5Cpi+r%5E2+h+%3D+%5Cfrac%7B1%7D%7B3%7D+%5Cpi+r%5E2+%5Ccdot+%5Cfrac%7B2%5Csqrt%7B3%7D%5Csqrt%7B3+-r%5E2%7D%7D%7Br%7D+%3D+%5Cfrac%7B2%5Cpi+r+%5Csqrt%7B9+-+3r%5E2%7D%7D%7B3%7D+)

求导![](https://www.zhihu.com/equation?tex=+V%27%28r%29+%3D+%5Cfrac%7B2%5Cpi%7D%7B3%7D+%5Cleft%5B+%5Csqrt%7B9+-+3r%5E2%7D+%2B+r+%5Ccdot+%5Cfrac%7B1%7D%7B2%7D+%289+-+3r%5E2%29%7B-1%2F2%7D+%5Ccdot+%28-6r%29+%5Cright%5D+%3D+%5Cfrac%7B2%5Cpi%7D%7B3%7D+%5Cleft%5B+%5Csqrt%7B9+-+3r%5E2%7D+-+%5Cfrac%7B3r%5E2%7D%7B%5Csqrt%7B9+-+3r%5E2%7D%7D%5Cright%5D+%3D+%5Cfrac%7B2%5Cpi%7D%7B3%7D+%5Ccdot+%5Cfrac%7B9+-+6r%5E2%7D%7B%5Csqrt%7B9+-+3r%5E2%7D%7D+)

令![](https://www.zhihu.com/equation?tex=V%27%28r%29+%3D+0)：![](https://www.zhihu.com/equation?tex=+%5Cfrac%7B2%5Cpi+%289+-+6r%5E2%29%7D%7B3+%5Csqrt%7B9+-+3r%5E2%7D%7D+%3D+0+%5Cimplies+9+-+6r%5E2+%3D+0+%5Cimplies+r+%3D+%5Cfrac%7B%5Csqrt%7B6%7D%7D%7B2%7D+)![](https://www.zhihu.com/equation?tex=+h+%3D+%5Cfrac%7B2%5Csqrt%7B3%7D+%5Csqrt%7B3+-+%5Cfrac%7B3%7D%7B2%7D%7D%7D%7B%5Cfrac%7B%5Csqrt%7B6%7D%7D%7B2%7D%7D+%3D+2%5Csqrt%7B3%7D+)![](https://www.zhihu.com/equation?tex=+V+%3D+%5Cfrac%7B1%7D%7B3%7D+%5Cpi+r%5E2+h+%3D+%5Cfrac%7B1%7D%7B3%7D+%5Cpi+%5Cleft%28+%5Cfrac%7B3%7D%7B2%7D+%5Cright%29+%5Ccdot2%5Csqrt%7B3%7D+%3D+%5Cboxed%7B%5Csqrt%7B3%7D%5Cpi%7D+)

## 7 【3*】

椭圆![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bx%5E2%7D%7B5%7D%2By%5E2%3D1)的动弦![](https://www.zhihu.com/equation?tex=AB)长为![](https://www.zhihu.com/equation?tex=1)，求弦![](https://www.zhihu.com/equation?tex=AB)的中点![](https://www.zhihu.com/equation?tex=M)横坐标的最大值。

**考点：椭圆的参数方程**

椭圆的参数方程![](https://www.zhihu.com/equation?tex=+x%3D%5Csqrt5%5Ccos%5Ctheta%2Cy%3D%5Csin%5Ctheta+)设![](https://www.zhihu.com/equation?tex=+A%3D%28%5Csqrt5%5Ccos%5Calpha%2C%5Csin%5Calpha%29%2CB%3D%28%5Csqrt5%5Ccos%5Cbeta%2C%5Csin%5Cbeta%29+)

则中点![](https://www.zhihu.com/equation?tex=M)的横坐标为![](https://www.zhihu.com/equation?tex=+m%3D%5Cfrac%7B%5Csqrt5%28%5Ccos%5Calpha%2B%5Ccos%5Cbeta%29%7D%7B2%7D+)

利用和差公式，有![](https://www.zhihu.com/equation?tex=+%5Ccos%5Calpha%2B%5Ccos%5Cbeta%3D2%5Ccos%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%5Ccos%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D+)

因此![](https://www.zhihu.com/equation?tex=+m%3D%5Csqrt5%5Ccos%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%5Ccos%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D+)令![](https://www.zhihu.com/equation?tex=+A%3D%5Ccos%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%2CB%3D%5Ccos%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D+)则![](https://www.zhihu.com/equation?tex=+m%3D%5Csqrt5+AB+)

弦![](https://www.zhihu.com/equation?tex=AB)的长度为![](https://www.zhihu.com/equation?tex=1)，有![](https://www.zhihu.com/equation?tex=+AB%5E2%3D1+)

计算![](https://www.zhihu.com/equation?tex=AB%5E2)（差化积）可得

![](https://www.zhihu.com/equation?tex=+%5Cbegin%7Baligned%7D+AB%5E2+%26%3D+%5Cbigl%5B%5Csqrt5%28%5Ccos%5Calpha-%5Ccos%5Cbeta%29%5Cbigr%5D%5E2%2B%28%5Csin%5Calpha-%5Csin%5Cbeta%29%5E2%5C%5C+%26%3D5%5Cbigl%5B2%5Csin%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%5Csin%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D%5Cbigr%5D%5E2+%2B+%5Cbigl%5B2%5Ccos%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%5Csin%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D%5Cbigr%5D%5E2%5C%5C+%26%3D4%5Csin%5E2%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D%5CBigl%5B5%5Csin%5E2%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%2B%5Ccos%5E2%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D%5CBigr%5D+%5Cend%7Baligned%7D+)记![](https://www.zhihu.com/equation?tex=+S%3D%5Csin%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D%2CC%3D%5Ccos%5Cfrac%7B%5Calpha%2B%5Cbeta%7D%7B2%7D+)

注意到![](https://www.zhihu.com/equation?tex=S%5E2%3D1-%5Ccos%5E2%5Cfrac%7B%5Calpha-%5Cbeta%7D%7B2%7D%3D1-B%5E2)，则有![](https://www.zhihu.com/equation?tex=+4S%5E2%5CBigl%5B5%5Cbigl%281-C%5E2%5Cbigr%29%2BC%5E2%5CBigr%5D%3D4S%5E2%5CBigl%285-4C%5E2%5CBigr%29%3D1+)

即![](https://www.zhihu.com/equation?tex=+S%5E2%5C%2C%285-4A%5E2%29%3D%5Cfrac%7B1%7D%7B4%7D%5Cimplies1-B%5E2%3D%5Cfrac%7B1%7D%7B4%285-4A%5E2%29%7D+)

因此![](https://www.zhihu.com/equation?tex=+m%5E2%3D5A%5E2B%5E2%3D5A%5E2%5Cleft%281-%5Cfrac%7B1%7D%7B4%285-4A%5E2%29%7D%5Cright%29+)

令![](https://www.zhihu.com/equation?tex=t%3DA%5E2)![](https://www.zhihu.com/equation?tex=%280%5Cle+t%5Cle1%29)，则![](https://www.zhihu.com/equation?tex=+m%5E2%3D%5Cfrac%7B5t%5CBigl%284%285-4t%29-1%5CBigr%29%7D%7B4%285-4t%29%7D+%3D%5Cfrac%7B5t%5C%2C%2819-16t%29%7D%7B4%285-4t%29%7D+)

问题转化为在![](https://www.zhihu.com/equation?tex=0%5Cle+t%5Cle1)内求![](https://www.zhihu.com/equation?tex=+F%28t%29%3D%5Cfrac%7B5t%5C%2C%2819-16t%29%7D%7B4%285-4t%29%7D+)的最大值，![](https://www.zhihu.com/equation?tex=m_%7B%5Cmax%7D%3D%5Csqrt%7BF%28t_%7B%5Cmax%7D%29%7D).

![](https://www.zhihu.com/equation?tex=F%28t%29%3D%5Cfrac%7B5t%5C%2C%2819-16t%29%7D%7B4%285-4t%29%7D)

![](https://www.zhihu.com/equation?tex=F%27%28t%29%3D%5Cfrac%7B5+%5Cleft%2864+t%5E2-160+t%2B95%5Cright%29%7D%7B4+%284+t-5%29%5E2%7D)

令![](https://www.zhihu.com/equation?tex=F%27%28t%29%3D0)，得![](https://www.zhihu.com/equation?tex=t%3D%5Cfrac%7B10%5Cpm%5Csqrt5%7D%7B8%7D)

舍去不符![](https://www.zhihu.com/equation?tex=0%5Cle+t%5Cle1)范围者，得![](https://www.zhihu.com/equation?tex=t%3D%5Cfrac%7B10-%5Csqrt5%7D%7B8%7D)![](https://www.zhihu.com/equation?tex=F_%7B%5Cmax%7D%28t%29%3DF%5Cleft%28%5Cfrac%7B10-%5Csqrt5%7D%7B8%7D%5Cright%29%3D%5Cfrac%7B5%7D%7B16%7D+%5Cleft%2821-4+%5Csqrt%7B5%7D%5Cright%29)

![](https://www.zhihu.com/equation?tex=+m_%7B%5Cmax%7D%3D%5Csqrt%7BF_%7B%5Cmax%7D%28t%29%7D%3D%5Cfrac%7B5%7D%7B2%7D-%5Cfrac%7B%5Csqrt%7B5%7D%7D%7B4%7D.+)

## 8 【1/4】

设![](https://www.zhihu.com/equation?tex=k_1%2Ck_2%2Ck_3%2Ck_4%2Ck_5)分别是一个正五边形五边所在直线的斜率，其中![](https://www.zhihu.com/equation?tex=k_1%2Ck_2%2Ck_3%2Ck_4%2Ck_5)存在且非零，则![](https://www.zhihu.com/equation?tex=%5Cleft%28k_1%2Bk_2%2Bk_3%2Bk_4%2Bk_5%5Cright%29%5Cleft%28k_1%5E%7B-1%7D%2Bk_2%5E%7B-1%7D%2Bk_3%5E%7B-1%7D%2Bk_4%5E%7B-1%7D%2Bk_5%5E%7B-1%7D%5Cright%29)的取值范围是**_**_

**考点：三角函数恒等变形 计算器的使用**

设![](https://www.zhihu.com/equation?tex=k_1)边的倾斜角为![](https://www.zhihu.com/equation?tex=%5Calpha)，即转化为求![](https://www.zhihu.com/equation?tex=%5Csum+_k%5E5+%5Ctan++%5Cleft%28%5Calpha+%2B%5Cfrac%7Bk%5Cpi%7D%7B5%7D%5Cright%29+%5Csum+_k%5E5+%5Ccot++%5Cleft%28%5Calpha+%2B%5Cfrac%7Bk%5Cpi%7D%7B5%7D%5Cright%29)的范围。

拿出你的计算器，随便代入一个值（例如![](https://www.zhihu.com/equation?tex=%5Calpha%3D1%2C2%2C114514)）进去，你会发现结果刚好等于![](https://www.zhihu.com/equation?tex=25)。因此，取值范围就是![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%5C%7B25%5C%7D%7D)。

现证明一个更强的结论： 当![](https://www.zhihu.com/equation?tex=n)为奇数时，![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D+%5Ctan++%5Cleft%28%5Calpha+%2B%5Cfrac%7B%5Cpi++k%7D%7Bn%7D%5Cright%29+%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D+%5Ccot++%5Cleft%28%5Calpha+%2B%5Cfrac%7B%5Cpi++k%7D%7Bn%7D%5Cright%29%3Dn%5E2)

对于奇数![](https://www.zhihu.com/equation?tex=n)，有![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bk%3D0%7D%5E%7Bn-1%7D+%5Ccos%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29+%3D+%5Cfrac%7B%5Ccos%28n%5Calpha%29%7D%7B2%5E%7Bn-1%7D%7D)![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bk%3D0%7D%5E%7Bn-1%7D+%5Csin%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29+%3D+%5Cfrac%7B%5Csin%28n%5Calpha%29%7D%7B2%5E%7Bn-1%7D%7D)（常见结论，这里不再说明）

令![](https://www.zhihu.com/equation?tex=F%28%5Calpha%29%3D%5Cln%5CBiggl%5B%5Cprod_%7Bk%3D0%7D%5E%7Bn-1%7D+%5Ccos%5CBigl%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5CBigr%29%5CBiggr%5D+%3D%5Cln%5Ccos%28n%5Calpha%29-%28n-1%29%5Cln2)![](https://www.zhihu.com/equation?tex=F%27%28%5Calpha%29%3D%5Cfrac%7B-n%5Csin%28n%5Calpha%29%7D%7B%5Ccos%28n%5Calpha%29%7D%3D-n%5Ctan%28n%5Calpha%29)

同时![](https://www.zhihu.com/equation?tex=F%27%28%5Calpha%29%3D%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Cfrac%7Bd%7D%7Bd%5Calpha%7D%5Cln%5Ccos%5CBigl%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5CBigr%29+%3D-%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Ctan%5CBigl%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5CBigr%29)

所以有![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Ctan%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29+%3D+n%5Ctan%28n%5Calpha%29)

同理有![](https://www.zhihu.com/equation?tex=G%28%5Calpha%29%3D%5Cln%5CBiggl%5B%5Cprod_%7Bk%3D0%7D%5E%7Bn-1%7D%5Csin%5CBigl%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5CBigr%29%5CBiggr%5D+%3D%5Cln%5Csin%28n%5Calpha%29-%28n-1%29%5Cln2)

因此![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Ccot%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29+%3D+n%5Ccot%28n%5Calpha%29)

得![](https://www.zhihu.com/equation?tex=+%5CBiggl%28%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Ctan%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29%5CBiggr%29+%5CBiggl%28%5Csum_%7Bk%3D0%7D%5E%7Bn-1%7D%5Ccot%5Cleft%28%5Calpha%2B%5Cfrac%7Bk%5Cpi%7D%7Bn%7D%5Cright%29%5CBiggr%29+%3D+%5Cbigl%28n%5Ctan%28n%5Calpha%29%5Cbigr%29%5Cbigl%28n%5Ccot%28n%5Calpha%29%5Cbigr%29+%3D+n%5E2%5C%2C%5Ctan%28n%5Calpha%29%5Ccot%28n%5Calpha%29%3Dn%5E2+)证毕。

因此，令![](https://www.zhihu.com/equation?tex=n%3D5)，有![](https://www.zhihu.com/equation?tex=%5Cleft%28k_1%2Bk_2%2Bk_3%2Bk_4%2Bk_5%5Cright%29%5Cleft%28k_1%5E%7B-1%7D%2Bk_2%5E%7B-1%7D%2Bk_3%5E%7B-1%7D%2Bk_4%5E%7B-1%7D%2Bk_5%5E%7B-1%7D%5Cright%29%3D%5Csum+_k%5E5+%5Ctan++%5Cleft%28%5Calpha+%2B%5Cfrac%7Bk%5Cpi%7D%7B5%7D%5Cright%29+%5Csum+_k%5E5+%5Ccot++%5Cleft%28%5Calpha+%2B%5Cfrac%7Bk%5Cpi%7D%7B5%7D%5Cright%29%3D5%5E2%3D25.)

## 9 【4*】

已知![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2Cx_3%2Cx_4)为四个实数，若![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2Cx_3)的方差为![](https://www.zhihu.com/equation?tex=1)，![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2Cx_4)的方差为![](https://www.zhihu.com/equation?tex=2)，若![](https://www.zhihu.com/equation?tex=x_1%2Cx_3%2Cx_4)的方差为![](https://www.zhihu.com/equation?tex=2)，则![](https://www.zhihu.com/equation?tex=x_2%2Cx_3%2Cx_4)的方差的取值范围是**_**_。

**考点：方差**

暂时没想到好的方法，就解方程吧。注意![](https://www.zhihu.com/equation?tex=x_1)的取值对结果无影响，可以令![](https://www.zhihu.com/equation?tex=x_1%3D0)。

代入方差公式，得

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D%5Cfrac%7B1%7D%7B6%7D+%28%7Bx_2%7D+%282+%7Bx_2%7D-%7Bx_3%7D%29%2B%7Bx_3%7D+%282+%7Bx_3%7D-%7Bx_2%7D%29%29%3D1%5C%5C+%5Cfrac%7B1%7D%7B6%7D+%28%7Bx_2%7D+%282+%7Bx_2%7D-%7Bx_4%7D%29%2B%7Bx_4%7D+%282+%7Bx_4%7D-%7Bx_2%7D%29%29%3D2%5C%5C+%5Cfrac%7B1%7D%7B6%7D+%28%7Bx_3%7D+%282+%7Bx_3%7D-%7Bx_4%7D%29%2B%7Bx_4%7D+%282+%7Bx_4%7D-%7Bx_3%7D%29%29%3D2%5Cend%7Bcases%7D)

化简，![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D%7Bx_2%7D%5E2%2B%7Bx_3%7D%5E2%3D%7Bx_2%7D+%7Bx_3%7D%2B3%5C%5C%7Bx_2%7D%5E2%2B%7Bx_4%7D%5E2%3D%7Bx_2%7D+%7Bx_4%7D%2B6%5C%5C%7Bx_3%7D%5E2%2B%7Bx_4%7D%5E2%3D%7Bx_3%7D+%7Bx_4%7D%2B6%5Cend%7Bcases%7D)

解出来一共![](https://www.zhihu.com/equation?tex=8)组解。

![](https://www.zhihu.com/equation?tex=D%28%5C%7Bx_2%2Cx_3%2Cx_4%5C%7D%29%3D%5Cfrac%7B1%7D%7B3%7D+%5Cleft%28%7Bx_2%7D%5E2-%7Bx_2%7D+%28%7Bx_3%7D%2B%7Bx_4%7D%29%2B%7Bx_3%7D%5E2-%7Bx_3%7D+%7Bx_4%7D%2B%7Bx_4%7D%5E2%5Cright%29%3D-%5Cfrac13%28x_2%5E2%2Bx_3%5E2%2Bx_4%5E2%29%2B5)

可知![](https://www.zhihu.com/equation?tex=x_2%2Cx_3%2Cx_4)的正负性不影响结果，将![](https://www.zhihu.com/equation?tex=x_2)与![](https://www.zhihu.com/equation?tex=x_3)互换位置不影响结果。可知本质不同的解有以下![](https://www.zhihu.com/equation?tex=3)组：![](https://www.zhihu.com/equation?tex=x_2%3Dx_3%3D%5Csqrt%7B3%7D%2Cx_4%3D%5Cfrac%7B%5Csqrt%7B3%7D%2B%5Csqrt%7B15%7D%7D%7B2%7D)![](https://www.zhihu.com/equation?tex=x_2%3Dx_3%3D%5Csqrt%7B3%7D%2Cx_4%3D%5Cfrac%7B%5Csqrt%7B3%7D-%5Csqrt%7B15%7D%7D%7B2%7D)![](https://www.zhihu.com/equation?tex=x_2%3D%5Cfrac%7B1%7D%7B2%7D%5Csqrt%7B9%2B3%5Csqrt%7B5%7D%7D%2Cx_3%3D%5Cfrac%7B1%7D%7B2%7D%5Csqrt%7B9-3%5Csqrt%7B5%7D%7D%EF%BC%8Cx_4%3D%5Cfrac%7B%5Csqrt%7B30%7D%7D%7B2%7D)

代入得![](https://www.zhihu.com/equation?tex=D%28%5C%7Bx_2%2Cx_3%2Cx_4%5C%7D%29%3D%5Cfrac%7B1%7D%7B2%7D+%5Cleft%283-%5Csqrt%7B5%7D%5Cright%29%2C%5Cfrac%7B1%7D%7B2%7D+%5Cleft%283%2B%5Csqrt%7B5%7D%5Cright%29%2C1)

因此取值范围是![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%5Cleft%5C%7B%5Cfrac%7B1%7D%7B2%7D+%5Cleft%283-%5Csqrt%7B5%7D%5Cright%29%2C%5Cfrac%7B1%7D%7B2%7D+%5Cleft%283%2B%5Csqrt%7B5%7D%5Cright%29%2C1%5Cright%5C%7D%7D)

## 10 【4*】

椭圆![](https://www.zhihu.com/equation?tex=%5CGamma%3A+%5Cfrac%7Bx%5E2%7D%7B4%7D+%2B+y%5E2+%3D+1)，![](https://www.zhihu.com/equation?tex=A%5Cleft%286%2C+%5Cfrac%7B1%7D%7B6%7D%5Cright%29)为椭圆外一定点，点![](https://www.zhihu.com/equation?tex=P)在椭圆上。过![](https://www.zhihu.com/equation?tex=A)作直线![](https://www.zhihu.com/equation?tex=l_1)交椭圆![](https://www.zhihu.com/equation?tex=%5CGamma)于![](https://www.zhihu.com/equation?tex=B%2C+C)两点，若存在过![](https://www.zhihu.com/equation?tex=P)的定直线![](https://www.zhihu.com/equation?tex=l_2)满足直线![](https://www.zhihu.com/equation?tex=BP%2C+CP)始终关于直线![](https://www.zhihu.com/equation?tex=l_2)对称，则直线![](https://www.zhihu.com/equation?tex=l_2)的斜率为**_**_。

不会。

## 11 【2*】

已知数列![](https://www.zhihu.com/equation?tex=%5C%7Ba_n%5C%7D)满足![](https://www.zhihu.com/equation?tex=n)为奇数时![](https://www.zhihu.com/equation?tex=a_n+%3D+0)，![](https://www.zhihu.com/equation?tex=n)为偶数时![](https://www.zhihu.com/equation?tex=a_n+%3D+a_%7Bn%2F2%7D+%2B+1)。记![](https://www.zhihu.com/equation?tex=b_n+%3D+%5Cfrac%7Ba_n%7D%7B2%5En%7D)，![](https://www.zhihu.com/equation?tex=c_n+%3D+%5Cfrac%7Ba_n%7D%7B4%5En%7D)，数列![](https://www.zhihu.com/equation?tex=%5C%7Bb_n%5C%7D)，![](https://www.zhihu.com/equation?tex=%5C%7Bc_n%5C%7D)的前![](https://www.zhihu.com/equation?tex=n)项和分别为![](https://www.zhihu.com/equation?tex=S_n%2C+T_n)。若实数![](https://www.zhihu.com/equation?tex=%5Clambda)满足对一切![](https://www.zhihu.com/equation?tex=n+%5Cin+%5Cmathbb%7BN%7D%5E%2B)，均有![](https://www.zhihu.com/equation?tex=S_n+%3C+T_n+%2B+%5Clambda)，则![](https://www.zhihu.com/equation?tex=%5Clambda)的最小值为**_**___。

**考点：数列 类错位相减法的应用**

先列出![](https://www.zhihu.com/equation?tex=%5C%7Ba_n%5C%7D)的前几项：![](https://www.zhihu.com/equation?tex=0%2C1%2C0%2C2%2C0%2C1%2C0%2C3%2C0%2C1%2C0%2C2%2C0%2C1%2C0%2C4%2C%5Cdots)

可知![](https://www.zhihu.com/equation?tex=a_n)代表![](https://www.zhihu.com/equation?tex=n)的质因数分解中![](https://www.zhihu.com/equation?tex=2)的幂次，即：若![](https://www.zhihu.com/equation?tex=n%3D12%3D2%5E2%5Ctimes3)，则![](https://www.zhihu.com/equation?tex=a_n%3D2)。

我们列出![](https://www.zhihu.com/equation?tex=S_n)与![](https://www.zhihu.com/equation?tex=T_n)（注意到奇数项为![](https://www.zhihu.com/equation?tex=0)对![](https://www.zhihu.com/equation?tex=S_n)与![](https://www.zhihu.com/equation?tex=T_n)无影响）：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%2A%7D+%26S_n%3D%5Cfrac%7B0%7D%7B2%5E1%7D%2B%26%26%5Cfrac%7B1%7D%7B2%5E2%7D%2B%5Cfrac%7B0%7D%7B2%5E3%7D%26%26%2B%5Cfrac%7B2%7D%7B2%5E4%7D%2B%5Cfrac%7B0%7D%7B2%5E5%7D%26%26%2B%5Cfrac%7B1%7D%7B2%5E6%7D%2B%5Cfrac%7B0%7D%7B2%5E7%7D%26%26%2B%5Cfrac%7B3%7D%7B2%5E8%7D%2B%5Cdots%5C%5C+%26T_n%3D%26%26%5Cfrac%7B0%7D%7B2%5E2%7D%26%26%2B%5Cfrac%7B1%7D%7B2%5E4%7D%26%26%2B%5Cfrac%7B0%7D%7B2%5E6%7D%26%26%2B%5Cfrac%7B2%7D%7B2%5E8%7D%2B%5Cdots+%5Cend%7Balign%2A%7D)

观察到![](https://www.zhihu.com/equation?tex=S_n)与![](https://www.zhihu.com/equation?tex=T_n)中有相同分母的两项分子差![](https://www.zhihu.com/equation?tex=1)，而其余项为![](https://www.zhihu.com/equation?tex=0)。这是因为![](https://www.zhihu.com/equation?tex=T_n)对应了![](https://www.zhihu.com/equation?tex=S_%7B2n%7D)，而将![](https://www.zhihu.com/equation?tex=n)乘![](https://www.zhihu.com/equation?tex=2)的操作正好对应了将![](https://www.zhihu.com/equation?tex=n)中![](https://www.zhihu.com/equation?tex=2)的幂次加![](https://www.zhihu.com/equation?tex=1)，即把![](https://www.zhihu.com/equation?tex=a_n)加![](https://www.zhihu.com/equation?tex=1)。

所以![](https://www.zhihu.com/equation?tex=S_n-T_n%3D%5Cfrac%7B1%7D%7B2%5E2%7D%2B%5Cfrac%7B1%7D%7B2%5E4%7D%2B%5Cfrac%7B1%7D%7B2%5E6%7D%2B%5Cfrac%7B1%7D%7B2%5E8%7D%2B%5Cdots%3C%5Cfrac%7B1%7D%7B3%7D)

因此![](https://www.zhihu.com/equation?tex=%5Clambda_%7B%5Cmin%7D%3D%5Cboxed%7B%5Cfrac13%7D)。

## 12 【4*】

已知有![](https://www.zhihu.com/equation?tex=n)个数![](https://www.zhihu.com/equation?tex=a_1%2C+a_2%2C+a_3%2C+%5Cldots%2C+a_n)，满足对于任意正整数![](https://www.zhihu.com/equation?tex=x+%5Cin+%5B1%2C+n%5D%2C+y+%5Cin+%5B1%2C+x%5D)，均存在正整数![](https://www.zhihu.com/equation?tex=i+%5Cin+%5B1%2C+x%5D)，使得![](https://www.zhihu.com/equation?tex=a_i+%5Cin+%5Cleft%5B%5Cfrac%7By-1%7D%7Bx%7D%2C+%5Cfrac%7By%7D%7Bx%7D%5Cright%29)成立，则正整数![](https://www.zhihu.com/equation?tex=n)的最大值为**_**_。

当 n=4 时，构造如下：![](https://www.zhihu.com/equation?tex=+a_1%3D%5Cfrac%7B1%7D%7B8%7D%2C%5Cquad+a_2%3D%5Cfrac%7B7%7D%7B8%7D%2C%5Cquad+a_3%3D%5Cfrac%7B3%7D%7B8%7D%2C%5Cquad+a_4%3D%5Cfrac%7B5%7D%7B8%7D.+)检验知构造成立。

若 n=5，则在 x=5 时需将 [0,1) 平分为五个区间![](https://www.zhihu.com/equation?tex=+I_j%3D%5CBigl%5B%5Ctfrac%7Bj-1%7D%7B5%7D%2C%5C%3B%5Ctfrac+j5%5CBigr%29%2C%5Cquad+j%3D1%2C2%2C3%2C4%2C5%2C+)并要求![](https://www.zhihu.com/equation?tex=a_1%2C%5Cdots%2Ca_5)恰好各落入一个不同的![](https://www.zhihu.com/equation?tex=I_j)，即![](https://www.zhihu.com/equation?tex=a_i)为这五个子区间的一一对应。

但是，当我们再看 x=4 的要求：把 [0,1) 分成![](https://www.zhihu.com/equation?tex=+J_k%3D%5CBigl%5B%5Ctfrac%7Bk-1%7D%7B4%7D%2C%5C%3B%5Ctfrac+k4%5CBigr%29%2C%5Cquad+k%3D1%2C2%2C3%2C4%2C+)这样 4 个区间。由于这 5 个小区间要分配给 5 个 a_i，对于前 4 项![](https://www.zhihu.com/equation?tex=a_1%2C%5Cdots%2Ca_4)而言，必定漏掉其中某一个 I_j；而那个被“漏掉”的 I_j 又落入某个 J_k 中，这就导致该 J_k 在前 4 项里无任何点落入，与题意“每个 J_k 中都要有一个点”矛盾。

更形式地说： 1. x=5 时，![](https://www.zhihu.com/equation?tex=a_1%2C%5Cdots%2Ca_5)必须恰好各处在 5 个等分子区间![](https://www.zhihu.com/equation?tex=I_1%2C%5Cdots%2CI_5)内。
2. 在这 5 个区间里任选去掉一个（比如 I_j），剩下的 4 个 a 值只能落在其余 4 个区间中。
3. 而这些 5 个 I 区间分布在 4 个更大的等分区间![](https://www.zhihu.com/equation?tex=J_1%2C%5Cdots%2CJ_4)里——必有一个 J_k 完全只包含那个被去掉的 I_j（或包含它的大部分），因此在前 4 项里再也没有任何数落在 J_k 上，违背了 x=4 时对所有 4 个小区间都要有“至少一个点”的要求。

由此得知：不存在满足题意的 n=5 序列。

因此，![](https://www.zhihu.com/equation?tex=n_%7B%5Cmax%7D%3D%5Cboxed%7B4%7D)。

## 13【3*】

若![](https://www.zhihu.com/equation?tex=X%5Cotimes+Y)表示命题![](https://www.zhihu.com/equation?tex=X)成立且命题![](https://www.zhihu.com/equation?tex=Y)不成立，则对于命题![](https://www.zhihu.com/equation?tex=A%2C+B%2C+C)，下列说法正确的有（ ）
① “![](https://www.zhihu.com/equation?tex=A+%5Cotimes+B)是![](https://www.zhihu.com/equation?tex=C)的充要条件” 是 “![](https://www.zhihu.com/equation?tex=B+%5Cotimes+C)是![](https://www.zhihu.com/equation?tex=B)的充要条件” 的充分不必要条件
② “![](https://www.zhihu.com/equation?tex=A+%5Cotimes+B)是![](https://www.zhihu.com/equation?tex=C)的必要不充分条件” 是 “![](https://www.zhihu.com/equation?tex=A+%5Cotimes+C)是![](https://www.zhihu.com/equation?tex=B)的充要条件” 的充分不必要条件
③ “![](https://www.zhihu.com/equation?tex=A+%5Cotimes+B)是![](https://www.zhihu.com/equation?tex=C)的充分不必要条件” 是 “![](https://www.zhihu.com/equation?tex=A+%5Cotimes+C)是![](https://www.zhihu.com/equation?tex=B)的充要条件” 的必要不充分条件
A.![](https://www.zhihu.com/equation?tex=0)个 B.![](https://www.zhihu.com/equation?tex=1)个 C.![](https://www.zhihu.com/equation?tex=2)个 D.![](https://www.zhihu.com/equation?tex=3)个

**考点：命题的充要关系**

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BB%7D)

## 14【3*】

依次连续抛![](https://www.zhihu.com/equation?tex=10)次硬币，出现连续![](https://www.zhihu.com/equation?tex=5)次及以上正面朝上的概率为（ ）
A.![](https://www.zhihu.com/equation?tex=%5Cfrac%7B15%7D%7B128%7D)B.![](https://www.zhihu.com/equation?tex=%5Cfrac%7B29%7D%7B256%7D)C.![](https://www.zhihu.com/equation?tex=%5Cfrac%7B7%7D%7B64%7D)D.![](https://www.zhihu.com/equation?tex=%5Cfrac%7B5%7D%7B32%7D)

**考点：排列组合**

正难则反，考虑不出现连续![](https://www.zhihu.com/equation?tex=5)次正面朝上的情况。

定义状态  dp[i][j]  表示前 i 次抛硬币中，最后 j 次都是正面，并且从未出现过连续![](https://www.zhihu.com/equation?tex=5)次正面的情况。其中  j  的取值范围为![](https://www.zhihu.com/equation?tex=0)到![](https://www.zhihu.com/equation?tex=4)（因为一旦出现5次连续正面，该序列将被排除）。

递推关系如下：

- （第  次抛反面，连续正面次数归零）
- 对于   ，  （第  次抛正面，连续正面次数加1）

初始条件：

- （未抛硬币时，连续正面次数为0）
- 对于其他   ，

不出现连续![](https://www.zhihu.com/equation?tex=5)次正面的序列数目为![](https://www.zhihu.com/equation?tex=464+%2B+236+%2B+120+%2B+61+%2B+31+%3D+912)。

总序列数目为![](https://www.zhihu.com/equation?tex=2%5E%7B10%7D+%3D+1024)，因此出现至少一次连续![](https://www.zhihu.com/equation?tex=5)次正面的序列数目为![](https://www.zhihu.com/equation?tex=1024+-+912+%3D+112+)。

概率为![](https://www.zhihu.com/equation?tex=%5Cfrac%7B112%7D%7B1024%7D+%3D+%5Cfrac%7B7%7D%7B64%7D)。

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BC%7D)

## 18

已知![](https://www.zhihu.com/equation?tex=f%28x%29+%3D+x%5E2+%2B+x)，记![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29+%3D+f%28f%5E%7B%28n-1%29%7D%28x%29%29+%28n+%5Cin+%5Cmathbb%7BN%7D%29)，规定![](https://www.zhihu.com/equation?tex=f%5E%7B%280%29%7D%28x%29+%3D+x)。

记![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29)展开式中![](https://www.zhihu.com/equation?tex=x%5Ek)的系数为![](https://www.zhihu.com/equation?tex=T_n%5Ek)，即![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29+%3D+T_n%5E0+%2B+T_n%5E1+x+%2B+T_n%5E2+x%5E2+%2B+T_n%5E3+x%5E3+%2B+%5Cldots+%2B+T_n%5Ek+x%5Ek+%2B+%5Cldots)且当![](https://www.zhihu.com/equation?tex=k+%3E+2%5En)时，定义![](https://www.zhihu.com/equation?tex=T_n%5Ek+%3D+0)。

(1) 求![](https://www.zhihu.com/equation?tex=T_2%5E3)和![](https://www.zhihu.com/equation?tex=T_3%5E3)的值，并证明：对于一切![](https://www.zhihu.com/equation?tex=n+%5Cin+%5Cmathbb%7BN%7D)，![](https://www.zhihu.com/equation?tex=T_n%5E4+%3D+%5Cfrac%7B1%7D%7B2%7D+n%28n-1%29%282n-3%29);

(2) 求![](https://www.zhihu.com/equation?tex=T_n%5E5)的表达式；

(*3) 求![](https://www.zhihu.com/equation?tex=T_n%5Em)的表达式。

OEIS Link:[A122888](https://link.zhihu.com/?target=https%3A//oeis.org/A122888)

![](https://www.zhihu.com/equation?tex=+%5Cbegin%7Barray%7D%7Bcc%7D++n+%26+T_n%5Em+%5C%5C++1+%26+1+%5C%5C++2+%26+n+%5C%5C++3+%26+%28n-1%29+n+%5C%5C++4+%26+%5Cdfrac%7B1%7D%7B2%7D+%28n-1%29+n+%282+n-3%29+%5C%5C++5+%26+%5Cdfrac%7B1%7D%7B3%7D+%28n-2%29+%28n-1%29+n+%283+n-4%29+%5C%5C++6+%26+%5Cdfrac%7B1%7D%7B12%7D+%28n-2%29+%28n-1%29+n+%5Cleft%2812+n%5E2-41+n%2B31%5Cright%29+%5C%5C++7+%26+%5Cdfrac%7B1%7D%7B30%7D+%28n-2%29+%28n-1%29+n+%5Cleft%2830+n%5E3-171+n%5E2%2B302+n-157%5Cright%29+%5C%5C++8+%26+%5Cdfrac%7B1%7D%7B60%7D+%28n-2%29+%28n-1%29+n+%284+n-11%29+%5Cleft%2815+n%5E3-81+n%5E2%2B131+n-59%5Cright%29+%5C%5C++9+%26+%5Cdfrac%7B1%7D%7B1260%7D+%28n-3%29+%28n-2%29+%28n-1%29+n+%5Cleft%281260+n%5E4-9756+n%5E3%2B26339+n%5E2-28293+n%2B9427%5Cright%29+%5Cend%7Barray%7D+)

**解答：**

记
![](https://www.zhihu.com/equation?tex=+f%5E%7B%28n%29%7D%28x%29%3D%5Csum_%7Bk%3D0%7D%5E%7B2%5En%7DT_n%5Ek%5C%2Cx%5Ek%2C+)
且![](https://www.zhihu.com/equation?tex=T_n%5Ek%3D0)，当![](https://www.zhihu.com/equation?tex=k%3E2%5En)。

由关系
![](https://www.zhihu.com/equation?tex=+f%5E%7B%28n%29%7D%28x%29%5C%3B%3D%5C%3Bf%5Cbigl%28f%5E%7B%28n-1%29%7D%28x%29%5Cbigr%29+%5C%3B%3D%5C%3B%5Cbigl%28f%5E%7B%28n-1%29%7D%28x%29%5Cbigr%29%5E2%5C%3B%2B%5C%3Bf%5E%7B%28n-1%29%7D%28x%29%2C+)
可得系数的基本递推：对于![](https://www.zhihu.com/equation?tex=k%5Cge1)，因为![](https://www.zhihu.com/equation?tex=T_%7Bn-1%7D%5E0%3D0)，有![](https://www.zhihu.com/equation?tex=+T_n%5Ek+%5C%3B%3D%5C%3BT_%7Bn-1%7D%5Ek+%5C%3B%2B%5C%3B%5Csum_%7Bi%3D0%7D%5Ek+T_%7Bn-1%7D%5Ei%5C%2CT_%7Bn-1%7D%5E%7B%5C%2Ck-i%7D+%5C%3B%3D%5C%3B+T_%7Bn-1%7D%5Ek%5C%3B%2B%5C%3B%5Csum_%7Bi%3D1%7D%5E%7Bk-1%7DT_%7Bn-1%7D%5Ei%5C%2CT_%7Bn-1%7D%5E%7B%5C%2Ck-i%7D.+)

## (1)

- n=1 时
- n=2 时   .
- n=3 时，用递推
- 故 .

对 k=4 的递推有

![](https://www.zhihu.com/equation?tex=++++T_n%5E4++++%3DT_%7Bn-1%7D%5E4++++%5C%3B%2B%5C%3B%5Csum_%7Bi%3D1%7D%5E3T_%7Bn-1%7D%5Ei%5C%2CT_%7Bn-1%7D%5E%7B4-i%7D++++%3DT_%7Bn-1%7D%5E4++++%2B2%5C%2CT_%7Bn-1%7D%5E1T_%7Bn-1%7D%5E3%2B%28T_%7Bn-1%7D%5E2%29%5E2.++++)

已知![](https://www.zhihu.com/equation?tex=T_%7Bn-1%7D%5E1%3D1%2C%5C%3BT_%7Bn-1%7D%5E2%3D%28n-1%29%2C%5C%3BT_%7Bn-1%7D%5E3%3D%28n-1%29%28n-2%29)，![](https://www.zhihu.com/equation?tex=++++2T_%7Bn-1%7D%5E1T_%7Bn-1%7D%5E3%2B%28T_%7Bn-1%7D%5E2%29%5E2++++%3D2%5C%2C%28n-1%29%28n-2%29%2B%28n-1%29%5E2++++%3D%28n-1%29%5C%2C%283n-5%29.++++)

因此![](https://www.zhihu.com/equation?tex=++++T_n%5E4++++%3DT_%7Bn-1%7D%5E4%2B%5C%2C%28n-1%29%283n-5%29%2C++++)且![](https://www.zhihu.com/equation?tex=T_1%5E4%3D0)。

对该递推从 2 累加到 n，![](https://www.zhihu.com/equation?tex=++++T_n%5E4++++%3D%5Csum_%7Bk%3D2%7D%5En+%28k-1%29%283k-5%29++++%3D%5Cfrac%7B%28n-1%29n%282n-3%29%7D2%2C++++)完成证明。

## （2）

仍由递推![](https://www.zhihu.com/equation?tex=+T_n%5E5+%3DT_%7Bn-1%7D%5E5+%5C%3B%2B%5C%3B%5Csum_%7Bi%3D1%7D%5E%7B4%7DT_%7Bn-1%7D%5Ei%5C%2CT_%7Bn-1%7D%5E%7B5-i%7D+%3D+T_%7Bn-1%7D%5E5+%5C%3B%2B%5C%3B2T_%7Bn-1%7D%5E1T_%7Bn-1%7D%5E4+%5C%3B%2B%5C%3B2T_%7Bn-1%7D%5E2T_%7Bn-1%7D%5E3.+)

代入已知：

![](https://www.zhihu.com/equation?tex=+T_%7Bn-1%7D%5E1%3D1%2C%5Cquad+T_%7Bn-1%7D%5E2%3Dn-1%2C%5Cquad+T_%7Bn-1%7D%5E3%3D%28n-1%29%28n-2%29%2C%5Cquad+T_%7Bn-1%7D%5E4%3D%5Ctfrac12%28n-1%29%28n-2%29%282n-5%29%2C+)

得

![](https://www.zhihu.com/equation?tex=+%5Cbegin%7Baligned%7D+%5CDelta+T%5E5_n+%26%3D2%5Ccdot1%5Ccdot%5Cfrac%7B%28n-1%29%28n-2%29%282n-5%29%7D2+%5C%3B%2B%5C%3B2%5C%2C%28n-1%29%5C%2C%28n-1%29%28n-2%29%5C%5C+%26%3D%28n-1%29%28n-2%29%282n-5%29%5C%3B%2B%5C%3B2%28n-1%29%5E2%28n-2%29%5C%5C+%26%3D%28n-1%29%28n-2%29%5Cbigl%5B%282n-5%29%2B2%28n-1%29%5Cbigr%5D+%3D%28n-1%29%28n-2%29%284n-7%29.+%5Cend%7Baligned%7D+)

于是![](https://www.zhihu.com/equation?tex=+T_n%5E5+%3DT_%7Bn-1%7D%5E5%2B%28n-1%29%28n-2%29%284n-7%29%2C+%5Cquad+T_2%5E5%3D0.+)

对从 3 到 n 累加：![](https://www.zhihu.com/equation?tex=+T_n%5E5+%3D%5Csum_%7Bk%3D3%7D%5En+%28k-1%29%28k-2%29%284k-7%29+%3D%5Cfrac%7Bn%28n-1%29%5Cbigl%283n%5E2-10n%2B8%5Cbigr%29%7D3.+)

## （3）

由上一节所用的思路，可得通用递推：![](https://www.zhihu.com/equation?tex=+T_n%5Em+%3DT_%7Bn-1%7D%5Em+%5C%3B%2B%5C%3B%5Csum_%7Bi%3D1%7D%5E%7Bm-1%7DT_%7Bn-1%7D%5Ei%5C%2CT_%7Bn-1%7D%5E%7B%5C%2Cm-i%7D%2C+)并取初值![](https://www.zhihu.com/equation?tex=+T_0%5Em%3D%5Cbegin%7Bcases%7D1%2C%26m%3D1%2C%5C%5C0%2C%26m%5Cne1.%5Cend%7Bcases%7D+)

于是通项公式可写作：![](https://www.zhihu.com/equation?tex=+%5Cboxed%7B+T_n%5Em+%3D%5Csum_%7Bk%3D1%7D%5En%5C%3B%5Csum_%7Bi%3D1%7D%5E%7Bm-1%7D+++++T_%7Bk-1%7D%5Ei%5C%3BT_%7Bk-1%7D%5E%7B%5C%2Cm-i%7D.+%7D+)

将上式展开，对每一个![](https://www.zhihu.com/equation?tex=1%5Cle+k%5Cle+n)， 将![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi%3D1%7D%5E%7Bm-1%7DT_%7Bk-1%7D%5EiT_%7Bk-1%7D%5E%7Bm-i%7D)再递归展开，即得：

![](https://www.zhihu.com/equation?tex=+T_n%5Em+%3D%5Csum_%7Br%3D1%7D%5E%7B%5Cmin%28n%2Cm%29%7D%5C%3B+%5Csum_%7B%5Csubstack%7Bi_1%2B%5Ccdots%2Bi_r%3Dm%5C%5Ci_j%5Cge1%7D%7D+%5C%3B%5Cprod_%7Bj%3D1%7D%5Er+%5Cbinom%7B2%5E%7B%5C%2Ck_j-1%7D%7D%7B%5C%2Ci_j%7D%5C%2C%2C+)其中![](https://www.zhihu.com/equation?tex=k_1%3Ck_2%3C%5Ccdots%3Ck_r)遍历所有长度为 r 的严格增序列。

其他题目待补……

# 有没有超级难的圆锥曲线？
[](https://www.zhihu.com/question/651079179/answer/3450700448)

有的，一大堆

比如这个上海模拟卷

![](https://picx.zhimg.com/v2-5624465308c3a8537b5bebbfca3ea0f9_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-848097c1b0af3776e43268bc010712da_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-889ab542fe2f6b3e383591f367ebd44d_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-1dcf009b787ebc664d070a583f87b6a1_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-da57f4463478a7a41969fc7e1ac69beb_r.jpg?source=2c26e567)

里面有好多有意思的解析几何题

还有我之前这两个回答

[高中数学解析几何圆锥曲线大题真的是硬解就能解出吗？](https://www.zhihu.com/question/347025945/answer/2220201633?utm_psn=1758115931384213504)




[有没有创新一些的圆锥曲线大题？](https://www.zhihu.com/question/577898562/answer/2839585267?utm_psn=1758115916226027520)

都是高考题，但是可能你都不会做

做不出来也没有关系，问问你的老师/同学就可以了，或者转发到其他数学群里面

# 高二了开始准备数学IMO还来得及吗？
[](https://www.zhihu.com/question/662274560/answer/3572364805)

如果现在您能独立做出以下的题目我相信您有能够满足您愿望的水平。（建议是不要查相关内容）

![](https://pica.zhimg.com/v2-516c25d14fbdf2ccca6c90a30c2036ba_r.jpg?source=2c26e567)

这道题目并不是我能拿出的题目里最难的，没有换另一道题算是我最后的仁慈了（

# 问一下数竞的朋友们，请问高中小蓝本有必要全部刷完吗？
[](https://www.zhihu.com/question/415301936/answer/2637314455)

## 没有必要！

首先，不是所有小蓝本都是写的好的，比如说余红兵教授的数论，你没有升幂定理我忍了，没有卢卡斯，库尔莫定理我忍了，但你不讲二次剩余理论我是真的忍不了！很多教授写小蓝本就是为了水书……但是优秀的小蓝本也不少：个人强推李胜宏教授和边红平校长的柯西均值（当然我不是给我们校长做广告……）书中柯西的十余种证明颇令我感到惊讶，而充分的例题与多元的解答长长引发我们无尽的遐想。还有几何也写的蛮好的，（当然由于我也没有全部做过，无法告诉你们到底哪本好不好）有一些偏专题的我认为如果想在这个专题是取得突破，可以做一部分，不过没有必要老老实实全部刷完。

# 你遇到的最难的一个数学题是什么？
[](https://www.zhihu.com/question/312876055/answer/3500859529)

![](https://picx.zhimg.com/v2-593ad2f1f3f5f70ef1c4d2e919787616_r.jpg?source=2c26e567)

这题放高考考场上，我估计没人能写的出来，整个浙江没有一个满分

# 你遇到的最难的一个数学题是什么？
[](https://www.zhihu.com/question/312876055/answer/33635756970)

他们说这是一个中专的卷子。

我以为能手拿把掐，然后我怂了。

![](https://picx.zhimg.com/v2-296300ab16e268015e84ff79adc6ebc6_r.jpg?source=2c26e567)

# 连续函数f(x)的定义域为(0,2)，当且仅当1<x<2时f(x)>0，能推出f(1)=0吗？
[](https://www.zhihu.com/question/658475705/answer/3531389396)

这似乎就是**2024年新高考I卷导数题**的中间步骤。

在高中课本上，连续的定义是“函数的图像是连续的”。而在大学数学中，所谓的函数在定义域![](https://www.zhihu.com/equation?tex=I)上连续，指的是对任意的![](https://www.zhihu.com/equation?tex=x_0%5Cin+I)，都有![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle%5Clim_%7Bx%5Cto+x_0%7Df%28x%29%3Df%28x_0%29)。

假设定义在![](https://www.zhihu.com/equation?tex=%280%2C+2%29)上的函数![](https://www.zhihu.com/equation?tex=f%28x%29)是连续的，且![](https://www.zhihu.com/equation?tex=f%28x%29%3E0)当且仅当![](https://www.zhihu.com/equation?tex=1%3Cx%3C2)，我们事实上是容易推出![](https://www.zhihu.com/equation?tex=f%281%29%3D0)的。

根据“当且仅当”，我们可以得到以下两个事实：

- 当且仅当  ；
- 当且仅当  。

因此，根据函数![](https://www.zhihu.com/equation?tex=f%28x%29)的连续性，以及极限的保序性，有：

- 如果从右侧接近  ，有  ；
- 如果从左侧接近  ，有  。

综上，得到![](https://www.zhihu.com/equation?tex=f%281%29%3D0)。

附上2024年新高考I卷导数题及其解析。

本题收录到了我今年即将出版的书**《高考导数探秘：解题技巧与策略》**中。

**题目**已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cln%5Cdfrac%7Bx%7D%7B2-x%7D%2Bax%2Bb%28x-1%29%5E3)。

（1）若![](https://www.zhihu.com/equation?tex=b%3D0)，且![](https://www.zhihu.com/equation?tex=f%27%28x%29%5Cgeqslant+0)，求![](https://www.zhihu.com/equation?tex=a)的最小值；

（2）证明：曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)是中心对称图形；

（3）若![](https://www.zhihu.com/equation?tex=f%28x%29%3E-2)当且仅当![](https://www.zhihu.com/equation?tex=1%3Cx%3C2)，求![](https://www.zhihu.com/equation?tex=b)的取值范围。

本题的函数![](https://www.zhihu.com/equation?tex=f%28x%29)带有位置参数![](https://www.zhihu.com/equation?tex=a)和![](https://www.zhihu.com/equation?tex=b)，看起来非常复杂。并且，本题的第三问和一般的“恒成立问题”不太一样，给出了一个不等式成立的充分必要条件。

如果能反应过来当![](https://www.zhihu.com/equation?tex=0%3Cx%3C1)时![](https://www.zhihu.com/equation?tex=f%28x%29%5Cleqslant+-2)，便能找到简化本题的关键。

**解答**（1）由![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bx%7D%7B2-x%7D%3E0%5Ciff+x%282-x%29%3E0)，解得![](https://www.zhihu.com/equation?tex=f%28x%29)的定义域为![](https://www.zhihu.com/equation?tex=%280%2C+2%29)。

当![](https://www.zhihu.com/equation?tex=b%3D0)时，![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cln+x-%5Cln+%282-x%29%2Bax)，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D%5Cdfrac%7B1%7D%7Bx%7D%2B%5Cdfrac%7B1%7D%7B2-x%7D%2Ba)。

令![](https://www.zhihu.com/equation?tex=f%27%28x%29_%7B%5Cmin%7D%3Df%27%281%29%3D2%2Ba%5Cgeqslant+0)，解得![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+-2)。

（2）曲线![](https://www.zhihu.com/equation?tex=y%3D%5Cln%5Cdfrac%7Bx%7D%7B2-x%7D)关于![](https://www.zhihu.com/equation?tex=%281%2C+0%29)对称，直线![](https://www.zhihu.com/equation?tex=y%3Dax)关于![](https://www.zhihu.com/equation?tex=%281%2C+a%29)对称，曲线![](https://www.zhihu.com/equation?tex=y%3Db%28x-1%29%5E3)关于![](https://www.zhihu.com/equation?tex=%281%2C+0%29)对称，知曲线![](https://www.zhihu.com/equation?tex=y%3Df%28x%29)关于![](https://www.zhihu.com/equation?tex=%281%2C+a%29)对称。

（3）计算得![](https://www.zhihu.com/equation?tex=f%281%29%3Da)，且根据题意知，当![](https://www.zhihu.com/equation?tex=1%3Cx%3C2)时![](https://www.zhihu.com/equation?tex=f%28x%29%3E-2)，当![](https://www.zhihu.com/equation?tex=0%3Cx%3C1)时![](https://www.zhihu.com/equation?tex=f%28x%29%3C-2)，**结合本回答前面过程**，可以得到![](https://www.zhihu.com/equation?tex=f%281%29%3Da%3D-2)。

当![](https://www.zhihu.com/equation?tex=a%3D-2)时，![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cln+x-%5Cln%282-x%29-2x%2Bb%28x-1%29%5E3)。

在此基础上, 计算得

![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D%5Cdfrac%7B1%7D%7Bx%7D%2B%5Cdfrac%7B1%7D%7B2-x%7D-2%2B3b%28x-1%29%5E2%3D%5Cdfrac%7B%28x-1%29%5E2%5B2%2B3bx%282-x%29%5D%7D%7Bx%282-x%29%7D.)

考虑二次函数![](https://www.zhihu.com/equation?tex=g%28x%29%3D2%2B3bx%282-x%29)，其中![](https://www.zhihu.com/equation?tex=1%3Cx%3C2)。

计算得![](https://www.zhihu.com/equation?tex=g%281%29%3D3b%2B2)，因此讨论的分界点是![](https://www.zhihu.com/equation?tex=b%3D-%5Cdfrac%7B2%7D%7B3%7D)。

![](https://www.zhihu.com/equation?tex=g%28x%29)的对称轴是![](https://www.zhihu.com/equation?tex=x%3D1), 开口方向由![](https://www.zhihu.com/equation?tex=b)的正负决定。以下进行分类讨论。

（i）若![](https://www.zhihu.com/equation?tex=b%3C-%5Cdfrac%7B2%7D%7B3%7D)，则![](https://www.zhihu.com/equation?tex=g%28x%29)开口向上，又![](https://www.zhihu.com/equation?tex=g%281%29%3D3b%2B2%3C0)，![](https://www.zhihu.com/equation?tex=g%282%29%3D2%3E0)，因此存在![](https://www.zhihu.com/equation?tex=x_0%5Cin%281%2C+2%29)，使得![](https://www.zhihu.com/equation?tex=g%28x_0%29%3D0)。

事实上，在这里可以具体地由二次函数的求根公式解出![](https://www.zhihu.com/equation?tex=x_0)，但是这不是必要的。

当![](https://www.zhihu.com/equation?tex=1%3Cx%3Cx_0)时，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3C0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递减；当![](https://www.zhihu.com/equation?tex=x_0%3Cx%3C1)时，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3E0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递增。

因此，对任意的![](https://www.zhihu.com/equation?tex=%5Cboxed%7Bx%5Cin%281%2C+x_0%29%7D)，都有![](https://www.zhihu.com/equation?tex=f%28x%29%3Cf%281%29%3D-2)，此与![](https://www.zhihu.com/equation?tex=f%28x%29%3E-2)矛盾。

（ii）若![](https://www.zhihu.com/equation?tex=-%5Cdfrac%7B2%7D%7B3%7D%5Cleqslant+b%3C0)，则![](https://www.zhihu.com/equation?tex=g%28x%29)开口向上，且![](https://www.zhihu.com/equation?tex=g%281%29%3D3b%2B2%5Cgeqslant+0)。

因此当![](https://www.zhihu.com/equation?tex=1%3Cx%3C2)时，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3E0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递增。

对任意的![](https://www.zhihu.com/equation?tex=x%5Cin%281%2C+2%29)，都有![](https://www.zhihu.com/equation?tex=f%28x%29%3Ef%281%29%3D-2)。

（ii）若![](https://www.zhihu.com/equation?tex=b%5Cgeqslant+0)，则![](https://www.zhihu.com/equation?tex=f%27%28x%29%3E0)，类似（ii），![](https://www.zhihu.com/equation?tex=f%28x%29)单调递增,。

对任意的![](https://www.zhihu.com/equation?tex=x%5Cin%281%2C+2%29)，都有![](https://www.zhihu.com/equation?tex=f%28x%29%3Ef%281%29%3D-2)。

综上，实数![](https://www.zhihu.com/equation?tex=b)的取值范围是![](https://www.zhihu.com/equation?tex=%5Cleft%5B-%5Cdfrac%7B2%7D%7B3%7D%2C%2B%5Cinfty%5Cright%29)。![](https://www.zhihu.com/equation?tex=%5Cblacksquare)

在上面的解答过程中，出现分类讨论时常用的“矛盾区间法”。当![](https://www.zhihu.com/equation?tex=b%3C-%5Cdfrac%7B2%7D%7B3%7D)时，要说明不满足题意，所找的矛盾区间是![](https://www.zhihu.com/equation?tex=%281%2C+x_0%29)。

另外值得一提的是，解答过程中还涉及了对二次函数![](https://www.zhihu.com/equation?tex=g%28x%29%3D2%2B3bx%282-x%29)的分析，这也是在解答导数题时常用的技巧。

# 这个不等式最“注意到”可以怎么做?
[](https://www.zhihu.com/question/11579297979/answer/96690880377)

设![](https://www.zhihu.com/equation?tex=x%5Cleft%282%2B%5Cfrac%7B1%7D%7B4y%7D%5Cright%29%3Dp%2C)则![](https://www.zhihu.com/equation?tex=%5Cfrac%7B3p%7D%7Bx%7D-%5Cfrac%7B3%7D%7B4y%7D%3D6.)于是![](https://www.zhihu.com/equation?tex=%5Cfrac%7B27%7D%7B4%7D%2B6%3D%5Cleft%28x%5E2%2B%5Cfrac%7B3p%2B1%7D%7B2x%7D%2B%5Cfrac%7B3p%2B1%7D%7B2x%7D%5Cright%29%2B%5Cleft%28y%5E2%2B%5Cfrac%7B1%7D%7B8y%7D%2B%5Cfrac%7B1%7D%7B8y%7D%5Cright%29%5Cge3%5Csqrt%5B3%5D%7B%5Cfrac%7B%283p%2B1%29%5E2%7D%7B4%7D%7D%2B%5Cfrac%7B3%7D%7B4%7D.%5C%5C)

# 求问「1^100、2^99、3^98……99^2、100^1」这一百个数中，谁最大？
[](https://www.zhihu.com/question/11842379652/answer/98567039228)

考虑函数![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%28x%29%3D%5Cleft%28+101-x+%5Cright%29%5Cln+x)

则![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%27%28x%29%3D-%5Cln+x%2B%5Cfrac%7B101%7D%7Bx%7D-1)

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%27%27%28x%29%3D-%5Cfrac%7B1%7D%7Bx%7D-%5Cfrac%7B101%7D%7Bx%5E2%7D%3C0)

因此函数![](https://www.zhihu.com/equation?tex=f%27%28x%29)单调递减，注意到

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%27%28%5Cfrac%7B47%7D%7B2%7D%29f%27%28%5Cfrac%7B49%7D%7B2%7D%29%3D%5Cleft%28+%5Cfrac%7B155%7D%7B47%7D-%5Cln%5Cfrac%7B47%7D%7B2%7D+%5Cright%29%5Cleft%28+%5Cfrac%7B153%7D%7B49%7D-%5Cln%5Cfrac%7B49%7D%7B2%7D+%5Cright%29%3C0)

因此![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cexists+x_0%5Cin%5Cleft%28+%5Cfrac%7B47%7D%7B2%7D%2C+%5Cfrac%7B49%7D%7B2%7D+%5Cright%29%2Cf%27%28x_0%29%3D0)

当![](https://www.zhihu.com/equation?tex=x%3Cx_0)时，![](https://www.zhihu.com/equation?tex=f%27%28x_0%29%3E0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递增

当![](https://www.zhihu.com/equation?tex=x%3Ex_0)时，![](https://www.zhihu.com/equation?tex=f%27%28x_0%29%3C0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递减

因此![](https://www.zhihu.com/equation?tex=f%28x%29)在![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cleft%28+%5Cfrac%7B47%7D%7B2%7D%2C%5Cfrac%7B49%7D%7B2%7D+%5Cright%29)上取得极大值

又![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cleft%28+%5Cfrac%7B47%7D%7B2%7D%2C%5Cfrac%7B49%7D%7B2%7D+%5Cright%29)上仅有唯一整数![](https://www.zhihu.com/equation?tex=24)（事学生

故![](https://www.zhihu.com/equation?tex=f%28x%29_%7B%5Cmax%7D%3Df%2824%29%3D77%5Cln24)

因此一百个数中最大的是![](https://www.zhihu.com/equation?tex=e%5E%7Bf%2824%29%7D%3D24%5E%7B77%7D)

好家伙，十年做题无人问，一朝恶臭天下知（

看到评论区有人提出这个问题的一种推广：

![](https://picx.zhimg.com/v2-a191194415fe15216346a7fd540a259b_r.jpg?source=2c26e567)

为了解决这个问题，同样的，我们可以构造函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%28N-x%29%5Cln+x%28N%5Cin%5Cmathbb%7BN%7D_%2B%29)

则![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%27%28x%29%3D-%5Cln+x%2B%5Cfrac%7BN%7D%7Bx%7D-1)

由于![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%27%27%28x%29%3D-%5Cfrac%7B1%7D%7Bx%7D-%5Cfrac%7BN%7D%7Bx%5E2%7D%3C0)，因此![](https://www.zhihu.com/equation?tex=f%27%28x%29)单调递减

令![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D0)，

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cln+x%2B1%3D%5Cfrac%7BN%7D%7Bx%7D)

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+xe%3De%5E%7B%5Cfrac%7BN%7D%7Bx%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+eN%3D%5Cfrac%7BN%7D%7Bx%7De%5E%7B%5Cfrac%7BN%7D%7Bx%7D%7D)

这里需要使用Lambert-W函数![](https://www.zhihu.com/equation?tex=W%28x%29)，它定义为![](https://www.zhihu.com/equation?tex=y%3Dxe%5Ex)的反函数。

则

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cfrac%7BN%7D%7Bx%7D%3DW%28eN%29)

解得![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+x%3D%5Cfrac%7BN%7D%7BW%28eN%29%7D)

至此我们获得了函数的极大值点。

因此极大值为![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+%5Cmax%5Cleft%5C%7B+%5Cleft+%5Clfloor+%5Cfrac%7BN%7D%7BW%28eN%29%7D+%5Cright+%5Crfloor%5E%7BN-%5Cleft+%5Clfloor+%5Cfrac%7BN%7D%7BW%28eN%29%7D+%5Cright+%5Crfloor%7D%2C%5Cleft+%5Clceil+%5Cfrac%7BN%7D%7BW%28eN%29%7D+%5Cright+%5Crceil%5E%7BN-%5Cleft+%5Clceil+%5Cfrac%7BN%7D%7BW%28eN%29%7D+%5Cright+%5Crceil%7D+%5Cright%5C%7D)。

# 有没有最难的数学导数题啊来一道？
[](https://www.zhihu.com/question/368746359/answer/2831065630)

终于可以把我压箱底的图片发出来了

![](https://picx.zhimg.com/v2-ff4b6bfbf9877eccb53791fec832f015_r.jpg?source=2c26e567)




2024.6.12更新

转个图片就拿了1000赞，和剩下几百个回答加起来差不多。有趣

# 请问解方程 2k⁴+9k³-9k+2=0 时，如何想到换元令 u=k-1/k？
[](https://www.zhihu.com/question/640357173/answer/3380518541)

还是注意力不够集中, 这种变换是解高次方程的基操, 没什么溜的.

从伽罗瓦理论的角度来讲![](https://www.zhihu.com/equation?tex=2x%5E4%2B9x%5E3-9x%2B2)满足对称群![](https://www.zhihu.com/equation?tex=S_4), 他必然有个满足![](https://www.zhihu.com/equation?tex=C_2)循环群的变换来降次, 也就是![](https://www.zhihu.com/equation?tex=t%5Crightarrow+x%5Cpm+x%5E%7B-1%7D)

所以一看见系数对称, 首先就要尝试![](https://www.zhihu.com/equation?tex=t%5Crightarrow+x%5Cpm+x%5E%7B-1%7D), 而不是什么套求根公式.

求根公式也只是伽罗瓦理论的外在表现形式之一罢了.

而且我之前也说过, 所谓的求根公式, 若不写成矩阵形式, 其实都是肤浅的.

比如这个六次方程:

![](https://www.zhihu.com/equation?tex=x%5E6-22+x%5E5-97+x%5E4%2B300+x%5E3-97+x%5E2-22+x%2B1%3D0)

难道看到六次方程就认为不可解?

事实上一看系数对称, 首先就应该注意到若令![](https://www.zhihu.com/equation?tex=t%5Crightarrow+x%2Bx%5E%7B-1%7D)

原式可化为三次方程![](https://www.zhihu.com/equation?tex=t%5E%7B3%7D-22t%5E%7B2%7D-100t%2B344%3D0)

剩下的步骤可以看这个

[如何求该根式可解的六次方程？](https://www.zhihu.com/question/618978654/answer/3181069114)

解高次方程各种设中间变量看似鬼斧神工, 但是说穿了, 也就是根据伽罗瓦群找子群降次罢了.

这是正统的高次方程轨道降链解法的初等表达形式, 找到适当的子群就能构造出根式变换

具体步骤可以看这个回答

[如何证明 sin(π/17) 等于这个？](https://www.zhihu.com/question/446890128/answer/2524124870?utm_psn=1735718533223448576)

看到高次方程, 不应该缴械投降, 一句高次方程不可解

首先你要观测系数是否对称. 系数对称或者局部对称, 那变量和变量之间的种种耦合关系就可以更轻易地交换, 因此有更大的概率是可解群.

比如这种多半就是可解的

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+x%5E7-7x%5E4-14x%5E3-7%26%3D0%5C%5C+x%5E8%2Bx%5E7%2B29x%5E2%2B29%26%3D0%5C%5C+x%5E9-27x%5E4-9x%5E3-9%5E2%26%3D0+%5Cend%7Baligned%7D)

还可以再离谱一点, 这种也是可解的

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+x%5E7%2B7%5Cleft%28%5Ctfrac%7B1-%5Csqrt%7B-7%7D%7D2%5Cright%29x%5E4%2B7%5Cleft%28%5Ctfrac%7B1%2B%5Csqrt%7B-7%7D%7D2%5Cright%29%5E3x+%3D+-640320)

伽罗瓦群为![](https://www.zhihu.com/equation?tex=%5Crm%7BPSL%7D_2%28%5Cmathbb%7BZ%7D%2F7%5Cmathbb%7BZ%7D%29+), 它可以降到一个三次方程

现在可以开始锻炼你的注意力了, 猜一下什么样的变换才能把它变成三次方程.

# 解高考数学题时应该如何思考？以一道导数真题为例
[](https://zhuanlan.zhihu.com/p/706576257)

我写的书《高考导数探秘》已经出版啦，有需要的同学可以在京东购买。

[]()

本篇文章所讲的这道题目，是2020年新高考I卷的导数题。在我看来是非常经典的题目，同时也是我最喜欢的题目。

我到底有多喜欢这道题目呢？如果有家教的学生或者培训机构，想要让我试讲的话，我十有八九会讲这道题目。

尽管所谓的数学的“思维方式”是比较抽象的，很难用语言来描述。但是本篇文章想借这道题目，谈论高中数学的解题过程中**应该如何思考**。

不过或许有不少读者在读这篇文章之前已经会做这道题目了。但是会做未必会讲，会讲也未必会多种讲法，读完这篇文章也许还是会有所收获。**读完这篇文章，就相当于免费上了我一节课。**

**例题**（2020年新高考I卷）已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a)。若不等式![](https://www.zhihu.com/equation?tex=f%28x%29%5Cgeqslant+1)恒成立，求![](https://www.zhihu.com/equation?tex=a)的取值范围。

## 解法1：求函数的最小值，设而不求

单看题目，这是一个非常经典的不等式恒成立问题。根据之前处理这类问题的经验，要使![](https://www.zhihu.com/equation?tex=f%28x%29%5Cgeqslant+1)恒成立，只需要![](https://www.zhihu.com/equation?tex=f%28x%29)的最小值大于等于![](https://www.zhihu.com/equation?tex=1)，即![](https://www.zhihu.com/equation?tex=f%28x%29_%7B%5Cmin%7D%5Cgeqslant+1)。**这有什么难的？**

所以，我们第一个解法的重心，便放在了求![](https://www.zhihu.com/equation?tex=f%28x%29)的最小值上。

首先，函数![](https://www.zhihu.com/equation?tex=f%28x%29)的定义域是![](https://www.zhihu.com/equation?tex=%280%2C+%2B%5Cinfty%29)。根据式子中的![](https://www.zhihu.com/equation?tex=%5Cln+a)，得到![](https://www.zhihu.com/equation?tex=a%3E0)。要求最小值，应该先对函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a)求导，判断出它的单调性。计算得

![](https://www.zhihu.com/equation?tex=f%27%28x%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cdfrac%7B1%7D%7Bx%7D%3D%5Cdfrac%7Bax%5Cmathrm%7Be%7D%5E%7Bx-1%7D-1%7D%7Bx%7D.)

进一步，考虑![](https://www.zhihu.com/equation?tex=f%27%28x%29)的分子![](https://www.zhihu.com/equation?tex=g%28x%29%3Dax%5Cmathrm%7Be%7D%5E%7Bx-1%7D-1)，计算得

![](https://www.zhihu.com/equation?tex=g%27%28x%29%3Da%28x%2B1%29%5Cmathrm%7Be%7D%5E%7Bx-1%7D%3E0%2C)

因此![](https://www.zhihu.com/equation?tex=g%28x%29)单调递增。再进一步计算得![](https://www.zhihu.com/equation?tex=g%280%29%3D-1%3C0)，![](https://www.zhihu.com/equation?tex=g%5Cleft%28%5Cdfrac%7B1%7D%7Ba%7D%2B1%5Cright%29%3D%281%2Ba%29%5Cmathrm%7Be%7D%5E%7B%5Cfrac%7B1%7D%7Ba%7D%7D-1%3E0)。

根据零点存在性定理，我们知道存在![](https://www.zhihu.com/equation?tex=x_0%5Cin%5Cleft%280%2C%5Cdfrac%7B1%7D%7Ba%7D%2B1%5Cright%29)，使得![](https://www.zhihu.com/equation?tex=g%28x_0%29%3D0)。

当![](https://www.zhihu.com/equation?tex=0%3Cx%3Cx_0)时，![](https://www.zhihu.com/equation?tex=g%28x%29%3C0)，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3C0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递减；当![](https://www.zhihu.com/equation?tex=x%3Ex_0)时，![](https://www.zhihu.com/equation?tex=g%28x%29%3E0)，![](https://www.zhihu.com/equation?tex=f%27%28x%29%3E0)，![](https://www.zhihu.com/equation?tex=f%28x%29)单调递增，这便得到了函数![](https://www.zhihu.com/equation?tex=f%28x%29)的单调性。

根据上面的分析，我们得到

![](https://www.zhihu.com/equation?tex=f%28x%29_%7B%5Cmin%7D%3Df%28x_0%29%3Da%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D-%5Cln+x_0%2B%5Cln+a.)

只需要让![](https://www.zhihu.com/equation?tex=f%28x_0%29%5Cgeqslant+1)即可。然而，![](https://www.zhihu.com/equation?tex=x_0)的值解得出来吗？上面得到的![](https://www.zhihu.com/equation?tex=x_0)满足![](https://www.zhihu.com/equation?tex=g%28x_0%29%3D0)，即![](https://www.zhihu.com/equation?tex=%5Cboxed%7Bax_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%3D1%7D)，我们是没办法求出![](https://www.zhihu.com/equation?tex=x_0)具体的值是多少的。

但是，求不出来![](https://www.zhihu.com/equation?tex=x_0)的值，并不影响我们使用![](https://www.zhihu.com/equation?tex=x_0)有关的信息。这就是数学中**设而不求**的基本思想。我们可以借助方程![](https://www.zhihu.com/equation?tex=ax_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%3D1)，消去![](https://www.zhihu.com/equation?tex=x_0)或者消去![](https://www.zhihu.com/equation?tex=a)，并代入![](https://www.zhihu.com/equation?tex=f%28x_0%29)，从而简化问题。

那么，下一个问题是，**应该消去哪个变量呢？**

- 既然题目要求的是  的取值范围，我们可以先尝试消去  。如果尝试消去  ，例如先把  消掉，那么会得到  最后一行的式子包含  和  ，让它大于等于  还是解不出任何的取值范围。
- 现在，我们尝试先消去  ，上面的方程可以整理得到  ，代入得  最后一行的式子仅包含  ，我们要让  ，等价于让  ，这就可以确定  的范围了。

为了方便，令![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x%29%3D%5Cdfrac%7B1%7D%7Bx%7D-x-2%5Cln+x%2B1)，则![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x_0%29%5Cgeqslant+1)。

为了解这个不等式得到![](https://www.zhihu.com/equation?tex=x_0)的范围，我们还需要判断![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x%29)的单调性，可以用两种方法。

- 直接无脑求导，计算得
- 多看一眼，就可以注意到  、  和  都是单调递减函数，因此  也单调递减。

最后，根据![](https://www.zhihu.com/equation?tex=%5Cvarphi%281%29%3D1)，可得![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x_0%29%5Cgeqslant+1)当且仅当![](https://www.zhihu.com/equation?tex=0%3Cx_0%5Cleqslant+1)。

我们现在得到了![](https://www.zhihu.com/equation?tex=x_0)的范围，可是题目要求的是![](https://www.zhihu.com/equation?tex=a)的范围，**接下来应该怎么办？**

别忘了，在消去![](https://www.zhihu.com/equation?tex=a)的过程中，我们应用了![](https://www.zhihu.com/equation?tex=%5Cboxed%7Ba%3D%5Cdfrac%7B1%7D%7Bx_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%7D%7D)，现在我们知道![](https://www.zhihu.com/equation?tex=0%3Cx_0%5Cleqslant+1)，要得到![](https://www.zhihu.com/equation?tex=a)的取值范围，

只需要得到当![](https://www.zhihu.com/equation?tex=0%3Cx_0%5Cleqslant+1)时函数![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B1%7D%7Bx_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%7D)的值域。

容易验证![](https://www.zhihu.com/equation?tex=x_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D)是关于![](https://www.zhihu.com/equation?tex=x_0)的单调递增函数，

因此![](https://www.zhihu.com/equation?tex=x_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%5Cin%280%2C+1%5D)，这便得到了![](https://www.zhihu.com/equation?tex=a)的取值范围是![](https://www.zhihu.com/equation?tex=%5B1%2C+%2B%5Cinfty%29)。

**总结**上面的解法的想法非常“朴素”，既然要求最小值，我就直接把最小值点找出来代进去。

如果最小值点很好找，那直接代入就行了。如果最小值点是像上面不可解的方程![](https://www.zhihu.com/equation?tex=%5Cboxed%7Bax_0%5Cmathrm%7Be%7D%5E%7Bx_0-1%7D%3D1%7D)，那我也可以直接用“设而不求”的方式代入，这种方法也被叫做“隐零点”。

后面这种情况分为两类：如果方程里面没有未知参数![](https://www.zhihu.com/equation?tex=a)，采取的办法是直接消去![](https://www.zhihu.com/equation?tex=x_0)，尽量把复杂的指数和对数都消掉；如果方程里带有未知参数![](https://www.zhihu.com/equation?tex=a)（就如上面的方程），那么应该优先消去![](https://www.zhihu.com/equation?tex=a)，这也体现了数学里最基本的消元思想。

“隐零点”的方法是我今年即将出版的书《高考导数探秘》里会展开介绍的，同时也是我上课必讲的内容。

[Dylaaan：【导数压轴题】“隐零点”的处理策略](https://zhuanlan.zhihu.com/p/57071380)

## 解法2：先用必要性探路，再消元

上面的做法虽然容易理解，但是实际做起来还是挺麻烦的。对于这道题，有没有什么技巧可以简化解题？当然有。

我们讨论的是不等式

![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1%2C)

这个不等式对任意的![](https://www.zhihu.com/equation?tex=x%5Cin%280%2C+%2B%5Cinfty%29)都是成立的。

那么，这个命题的一个必要条件是：这个不等式对![](https://www.zhihu.com/equation?tex=x%3D1)是成立的。

代入![](https://www.zhihu.com/equation?tex=x%3D1)可以得到![](https://www.zhihu.com/equation?tex=a%2B%5Cln+a%5Cgeqslant+1)，其中![](https://www.zhihu.com/equation?tex=a)和![](https://www.zhihu.com/equation?tex=%5Cln+a)都是关于![](https://www.zhihu.com/equation?tex=a)的单调递增函数，因此![](https://www.zhihu.com/equation?tex=a%2B%5Cln+a)也是关于![](https://www.zhihu.com/equation?tex=a)的单调递增函数，又因为当![](https://www.zhihu.com/equation?tex=a%3D1)时不等式取等，因此![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)是上述不等式恒成立的**必要条件**。

可能会有读者觉得，这样是不是已经把这道题做完了？毕竟解法1中，我们得到的![](https://www.zhihu.com/equation?tex=a)的取值范围也是![](https://www.zhihu.com/equation?tex=%5B1%2C+%2B%5Cinfty%29)。然而，就这么结束了总觉得哪里不太对劲。不太对劲的地方在于：上面仅仅得到了![](https://www.zhihu.com/equation?tex=a)要满足的必要条件是![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)，但是也有可能真正“精确”的取值范围是![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+2)或者![](https://www.zhihu.com/equation?tex=a%5Cgeqslant%5Cmathrm%7Be%7D)。

所以接下来，我们要说明![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)是不等式成立的**充分条件。**也就是证明：当![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)时，证明不等式![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1)对任意的![](https://www.zhihu.com/equation?tex=x%5Cin%280%2C+%2B%5Cinfty%29)成立。

为了证明不等式，我们可以求导判断单调性。然而，这个时候不等式有两个变量![](https://www.zhihu.com/equation?tex=a)和![](https://www.zhihu.com/equation?tex=x)，应该对哪个变量求导呢？

- 如果对  求导，那就和解法1一样，同样面临解不出极值点的“困境”。
- 如果固定变量  ，对  求导，

令![](https://www.zhihu.com/equation?tex=g%28a%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a)，注意到![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D)是关于![](https://www.zhihu.com/equation?tex=a)单调递增的一次函数，

![](https://www.zhihu.com/equation?tex=%5Cln+a)也关于![](https://www.zhihu.com/equation?tex=a)单调递增，因此![](https://www.zhihu.com/equation?tex=g%28a%29)关于![](https://www.zhihu.com/equation?tex=a)单调递增。

这里的最后一个不等式，也有两种处理方法，在这里简要描述：

- 令  ，其中  ，计算得  因此  单调递增，又  ，因此  在  内单调递减，在  内单调递增，  。
- 应用不等式 ，用  代替  可得  ，再用  代替  可得  ，因此  取等时当且仅当上面的两个不等式取等，即  。

由此，我们证明了![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)是不等式![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1)对任意的![](https://www.zhihu.com/equation?tex=x%5Cin%280%2C+%2B%5Cinfty%29)成立的充分必要条件，因此![](https://www.zhihu.com/equation?tex=a)的取值范围是![](https://www.zhihu.com/equation?tex=%5B1%2C+%2B%5Cinfty%29)。

**总结**必要性探路是解决导数问题时非常好用的技巧，有时候可以极大地缩小分类讨论的范围，从而大大简化题目。同时，必要性探路在处理未知参数是整数时是非常好用的，这里暂且不展开介绍。

同时，最后用到了常用的函数不等式![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7Bx%7D%5Cgeqslant+x%2B1%28x%5Cin%5Cmathbb%7BR%7D%29)和![](https://www.zhihu.com/equation?tex=x-1%5Cgeqslant+%5Cln+x%28x%3E0%29)，这在我的书《高考导数探秘》中称为基本不等式。我还会介绍更多常见的不等式，例如![](https://www.zhihu.com/equation?tex=%5Cln+x%5Cgeqslant1-%5Cdfrac%7B1%7D%7Bx%7D%28x%3E0%29)和![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B2%28x-1%29%7D%7Bx%2B1%7D%5Cleqslant+%5Cln+x%5Cleqslant%5Cdfrac%7B1%7D%7B2%7D%5Cleft%28x-%5Cdfrac%7B1%7D%7Bx%7D%5Cright%29%28x%5Cgeqslant+1%29)。上面的这些也是我上课必讲的内容。

[Dylaaan：【导数压轴题】所谓“放缩”——简单函数不等式](https://zhuanlan.zhihu.com/p/104644989)

[Dylaaan：【导数压轴题】再谈“放缩”——几个进阶不等式](https://zhuanlan.zhihu.com/p/105112553)

## 解法3：指数与对数互化的技巧

仍然讨论不等式![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1)，

参数![](https://www.zhihu.com/equation?tex=a)的位置非常奇怪：有一个以![](https://www.zhihu.com/equation?tex=a)的形式出现，而有一个以![](https://www.zhihu.com/equation?tex=%5Cln+a)的形式出现。

如果能把![](https://www.zhihu.com/equation?tex=a)和![](https://www.zhihu.com/equation?tex=%5Cln+a)统一在一起，这道题也许会简单很多。

怎么统一在一起呢？我们有**指数和对数互化**的技巧，即![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D%3D%5Cmathrm%7Be%7D%5E%7Bx-1%2B%5Cln+a%7D)。

这样，原不等式变成了![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7Bx-1%2B%5Cln+a%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1)。

再把指数上的![](https://www.zhihu.com/equation?tex=%7B%5Ccolor%7Bred%7D%7Bx-1%2B%5Cln+a%7D%7D)凑出来，得到![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7B%5Ccolor%7Bred%7D%7Bx-1%2B%5Cln+a%7D%7D%2B%7B%5Ccolor%7Bred%7D%7Bx-1%2B%5Cln+a%7D%7D%5Cgeqslant+x%2B%5Cln+x)。

也许眼尖的读者会看出上面的不等式左边和右边很像。如果

构造函数![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x%29%3D%5Cmathrm%7Be%7D%5Ex%2Bx)，那么上面的不等式就变成了![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x-1%2B%5Cln+a%29%5Cgeqslant+%5Cvarphi%28%5Cln+x%29)。

并且，根据![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5Ex)和![](https://www.zhihu.com/equation?tex=x)是单调递增的，我们知道函数![](https://www.zhihu.com/equation?tex=%5Cvarphi%28x%29%3D%5Cmathrm%7Be%7D%5E%7Bx%7D%2Bx)在![](https://www.zhihu.com/equation?tex=%28-%5Cinfty%2C%2B%5Cinfty%29)上是单调递增的。

要让上述不等式成立，只需要![](https://www.zhihu.com/equation?tex=x-1%2B%5Cln+a%5Cgeqslant+%5Cln+x%5Ciff%5Cln+a%5Cgeqslant+%5Cln+x-x%2B1)。

我们这下把原问题复杂的“皮”都扒掉了，只留下了最简单的“内核”。最后我们只需要求上面右式的最大值，这也不难，有两种处理思路：

- 构造函数  ，计算得  因此  在  内单调递增，在  内单调递减，  。因此  ，解得  。
- 如果熟悉不等式  的话，就可以直接得到 ，取等时当且仅当  。因此  ，解得  。

因此![](https://www.zhihu.com/equation?tex=a)的取值范围是![](https://www.zhihu.com/equation?tex=%5B1%2C+%2B%5Cinfty%29)。

**总结**上面的解法最重要的是指数和对数互化的技巧，需要灵活地应用![](https://www.zhihu.com/equation?tex=%5Cmathrm%7Be%7D%5E%7B%5Cln+x%7D%3D%5Cln%5Cmathrm%7Be%7D%5Ex%3Dx)，事实上，这种技巧在不少高考题和模拟题中都出现过，我也在《高考导数探秘》一书里举了不少例子。

## 解法4：有没有“秒杀”的技巧？

有些学生可能比较着急，迫切地想学会怎么“秒杀”这个题目，用最快的时间做完这道题目。这道题目恰好是有更快的技巧的。

这需要对本题的不等式

![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a%5Cgeqslant+1%5Ciff+a%5Cmathrm%7Be%7D%5E%7Bx-1%7D%5Cgeqslant+%5Cln+x-%5Cln+a%2B1)

如果令![](https://www.zhihu.com/equation?tex=y%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D)，尝试反解![](https://www.zhihu.com/equation?tex=x)的话，就会得到![](https://www.zhihu.com/equation?tex=x%3D%5Cln+y-%5Cln+a%2B1)。

这说明了不等式两边的表达式互为**反函数**。

反函数有一个非常重要的性质，是关于![](https://www.zhihu.com/equation?tex=y%3Dx)对称。因此要使上述不等式成立，只需

![](https://www.zhihu.com/equation?tex=a%5Cmathrm%7Be%7D%5E%7Bx-1%7D%5Cgeqslant+x%5Cgeqslant+%5Cln+x-%5Cln+a%2B1.)

取右边的不等式，得![](https://www.zhihu.com/equation?tex=%5Cln+a%5Cgeqslant%28%5Cln+x-x%2B1%29_%5Cmax%3D0)，因此![](https://www.zhihu.com/equation?tex=a%5Cgeqslant+1)。




**总结**上面应用反函数来思考的技巧非常有意思，还可以用在一些类似的题目中。当然，并不是说学会了怎么“秒杀”后，前面的解题方法就没有意义了，因为总有题目是不能秒杀的。遇到这种题目时，应该“见招拆招”，应用恰当的方法解题。

# 如何判断高中数学老师的水平？可以做做这五个题
[](https://zhuanlan.zhihu.com/p/708273921)

2024年新高考又一次改革，其中高考数学最重要的变化是：题目数量改为了19题，最后两道题的分值是17分。也就是说，**如果最后两道题几乎不得分的话，最多只能考120分。**要带好优秀的学生，让学生冲击高分，对于高中老师来说是不小的挑战。

然而，有不少水平堪忧的老师，只会照着答案解题，或者教学生按套路解题，几乎没有自己的思考。这种老师甚至还会**收取高额的课时费**（没错，这就是我最气的点），狠狠割家长和学生的韭菜。我这篇文章写出来后，可能会得罪不少这样的老师。

本篇文章列举了一些**我个人认为值得思考的五个题目**，无论是学生还是老师都可以做一做。在我看来，要测试一个老师的水平如何，可以让他讲一讲下面的这些题目。当然，并不是“做不出题目”就不是好老师了。我认为真正的好老师，应该对这些题目有自己的思考。即使最开始没做出来，也能找到合适的切入点。

## 题目

**例题1（2011年陕西卷）**叙述并证明余弦定理。

**例题2（旧教材必修二例题）**已知![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)的面积为![](https://www.zhihu.com/equation?tex=S)，外接圆半径为![](https://www.zhihu.com/equation?tex=R)，![](https://www.zhihu.com/equation?tex=%5Cangle+A%2C+%5Cangle+B%2C+%5Cangle+C)的对边分别为![](https://www.zhihu.com/equation?tex=a%2C+b%2C+c)，用解析几何的方法证明：![](https://www.zhihu.com/equation?tex=R%3D%5Cdfrac%7Babc%7D%7B4S%7D)。

**例题3（2020年新高考I卷节选）**已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a)。若不等式![](https://www.zhihu.com/equation?tex=f%28x%29%5Cgeqslant+1)恒成立，求![](https://www.zhihu.com/equation?tex=a)的取值范围。

**例题4（2023-2024学年海淀区期末节选）**对于给定的奇数![](https://www.zhihu.com/equation?tex=m%28m%5Cgeqslant+3%29)，设![](https://www.zhihu.com/equation?tex=A)是由![](https://www.zhihu.com/equation?tex=m%5Ctimes+m)个实数组成的![](https://www.zhihu.com/equation?tex=m)行![](https://www.zhihu.com/equation?tex=m)列的数表，且![](https://www.zhihu.com/equation?tex=A)中所有数不全相同，![](https://www.zhihu.com/equation?tex=A)中第![](https://www.zhihu.com/equation?tex=i)行第![](https://www.zhihu.com/equation?tex=j)列的数![](https://www.zhihu.com/equation?tex=a_%7Bij%7D%5Cin%5C%7B-1%2C+1%5C%7D)，记![](https://www.zhihu.com/equation?tex=r%28i%29)为![](https://www.zhihu.com/equation?tex=A)的第![](https://www.zhihu.com/equation?tex=i)行各数之和，![](https://www.zhihu.com/equation?tex=c%28j%29)为![](https://www.zhihu.com/equation?tex=A)的第![](https://www.zhihu.com/equation?tex=j)列各数之和，其中![](https://www.zhihu.com/equation?tex=i%2C+j%5Cin%5C%7B1%2C+2%2C%5Ccdots%2C+m%5C%7D)。设集合

![](https://www.zhihu.com/equation?tex=H%3D%5Cleft%5C%7B%28i%2C+j%29%5Cmiddle%7Ca_%7Bij%7D%5Ccdot+r%28i%29%3C0%5Ctext%7B%E6%88%96%7D+a_%7Bij%7D%5Ccdot+c%28j%29%3C0%2Ci%2Cj%5Cin%5C%7B1%2C2%2C%5Ccdots%2Cm%5C%7D%5Cright%5C%7D%2C)

记![](https://www.zhihu.com/equation?tex=H%28A%29)为集合![](https://www.zhihu.com/equation?tex=H)所含元素的个数。若![](https://www.zhihu.com/equation?tex=r%281%29%2C+r%282%29%2C%5Ccdots%2C+r%28m%29)中恰有![](https://www.zhihu.com/equation?tex=s)个正数，![](https://www.zhihu.com/equation?tex=c%281%29%2C+c%282%29%2C+%5Ccdots%2C+c%28m%29)中恰有![](https://www.zhihu.com/equation?tex=t)个正数，求证：![](https://www.zhihu.com/equation?tex=H%28A%29%5Cgeqslant+mt%2Bms-2ts)。

**例题5（2019年江苏卷节选）**定义首项为![](https://www.zhihu.com/equation?tex=1)且公比为正数的等比数列为“![](https://www.zhihu.com/equation?tex=M)-数列”。已知数列![](https://www.zhihu.com/equation?tex=%5C%7Bb_n%5C%7D)的通项公式是![](https://www.zhihu.com/equation?tex=b_n%3Dn)，设![](https://www.zhihu.com/equation?tex=m)是正整数，若存在“![](https://www.zhihu.com/equation?tex=M)-数列”![](https://www.zhihu.com/equation?tex=%5C%7Bc_n%5C%7D)，对任意的正整数![](https://www.zhihu.com/equation?tex=k)，当![](https://www.zhihu.com/equation?tex=k%5Cleqslant+m)时，都有![](https://www.zhihu.com/equation?tex=c_k%5Cleqslant+b_k%5Cleqslant+c_%7Bk%2B1%7D)成立，求![](https://www.zhihu.com/equation?tex=m)的最大值。

## 解答

## 例题1

**例题1（2011年陕西卷）**叙述并证明余弦定理。

对于只会教学生背结论，而不理解余弦定理背后的原理的老师来说，让他写余弦定理的证明，是写不出来的。

所谓的余弦定理，在高中大家都接触过：在![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)中，设![](https://www.zhihu.com/equation?tex=%5Cangle+A%2C%5Cangle+B%2C%5Cangle+C)的对边分别为![](https://www.zhihu.com/equation?tex=a%2C+b%2C+c)，则有

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D+a%5E2%3Db%5E2%2Bc%5E2-2bc%5Ccos+A%2C+%5C%5C+b%5E2%3Dc%5E2%2Ba%5E2-2ca%5Ccos+B%2C+%5C%5C+c%5E2%3Da%5E2%2Bb%5E2-2ab%5Ccos+C.+%5Cend%7Bcases%7D)

上面三个式子是对称的，因此只需证明![](https://www.zhihu.com/equation?tex=a%5E2%3Db%5E2%2Bc%5E2-2bc%5Ccos+A)。

如果考虑到![](https://www.zhihu.com/equation?tex=bc%5Ccos+A%3D%7CAC%7C%5Ccdot%7CAB%7C%5Ccdot%5Ccos+A)的形式很像向量的内积，就可以写出下面的证明。

**证明**根据![](https://www.zhihu.com/equation?tex=%5Coverrightarrow%7BBC%7D%3D%5Coverrightarrow%7BAC%7D-%5Coverrightarrow%7BAB%7D)，两边平方得

![](https://www.zhihu.com/equation?tex=%7C%5Coverrightarrow%7BBC%7D%7C%5E2%3D%7C%5Coverrightarrow%7BAC%7D-%5Coverrightarrow%7BAB%7D%7C%5E2%3D%7C%5Coverrightarrow%7BAC%7D%7C%5E2%2B%7C%5Coverrightarrow%7BAB%7D%7C%5E2-2%5Coverrightarrow%7BAC%7D%5Ccdot+%5Coverrightarrow%7BAB%7D%2C)

即![](https://www.zhihu.com/equation?tex=a%5E2%3Db%5E2%2Bc%5E2-2bc%5Ccos+A)。

## 例题2

**例题2（旧教材必修二例题）**已知![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)的面积为![](https://www.zhihu.com/equation?tex=S)，外接圆半径为![](https://www.zhihu.com/equation?tex=R)，![](https://www.zhihu.com/equation?tex=%5Cangle+A%2C+%5Cangle+B%2C+%5Cangle+C)的对边分别为![](https://www.zhihu.com/equation?tex=a%2C+b%2C+c)，用解析几何的方法证明：![](https://www.zhihu.com/equation?tex=R%3D%5Cdfrac%7Babc%7D%7B4S%7D)。

解析几何特别是圆锥曲线的“套路题”很多。许多老师都会教学生“联立韦达”，然后往下无脑算。稍微厉害一点的老师，会教学生一些常见的模型和二级结论。但是在我看来，最厉害的老师应该让学生明白“算什么，怎么算”。因此我在这里选的，并不是常规的圆锥曲线大题，而是应用解析几何来解决平面几何问题。

这个题目的做法很多，计算量略大，但是花一些时间还是可以做出来的。在做的过程中应该思考，**应该怎么建系、怎么计算才能减小计算量。**我在这里提出我的做法。

**证明**建立坐标系，设![](https://www.zhihu.com/equation?tex=A%280%2C+0%29)，![](https://www.zhihu.com/equation?tex=B%28x_1%2C+y_1%29)，![](https://www.zhihu.com/equation?tex=C%28x_2%2C+y_2%29)，且不妨设![](https://www.zhihu.com/equation?tex=B)在直线![](https://www.zhihu.com/equation?tex=AC)下方。接下来求![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)的外心![](https://www.zhihu.com/equation?tex=O)。

线段![](https://www.zhihu.com/equation?tex=AB)的中点为![](https://www.zhihu.com/equation?tex=%5Cleft%28%5Cdfrac%7Bx_1%7D%7B2%7D%2C%5Cdfrac%7By_1%7D%7B2%7D%5Cright%29)，斜率为![](https://www.zhihu.com/equation?tex=%5Cdfrac%7By_1%7D%7Bx_1%7D)，因此线段![](https://www.zhihu.com/equation?tex=AB)的垂直平分线的方程为

![](https://www.zhihu.com/equation?tex=l_1%3Ay-%5Cdfrac%7By_1%7D%7B2%7D%3D-%5Cdfrac%7Bx_1%7D%7By_1%7D%5Cleft%28x-%5Cdfrac%7Bx_1%7D%7B2%7D%5Cright%29%5Ciff+2x_1x%2B2y_1y%3Dx_1%5E2%2By_1%5E2.)

根据对称性，可以得到线段![](https://www.zhihu.com/equation?tex=AC)的垂直平分线的方程为

![](https://www.zhihu.com/equation?tex=l_2%3A2x_2x%2B2y_2y%3Dx_2%5E2%2By_2%5E2.)

联立![](https://www.zhihu.com/equation?tex=l_1)与![](https://www.zhihu.com/equation?tex=l_2)的方程

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D+2x_1x%2B2y_1y%3Dx_1%5E2%2By_1%5E2%2C+%5C%5C+2x_2x%2B2y_2y%3Dx_2%5E2%2By_2%5E2%2C+%5Cend%7Bcases%7D)

解得![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)的外心

![](https://www.zhihu.com/equation?tex=O%5Cleft%28%5Cdfrac%7B%28x_1%5E2%2By_1%5E2%29y_2-%28x_2%5E2%2By_2%5E2%29y_1%7D%7B2%28x_1y_2-x_2y_1%29%7D%2C%5Cdfrac%7B%28x_2%5E2%2By_2%5E2%29x_1-%28x_1%5E2%2By_1%5E2%29x_2%7D%7B2%28x_1y_2-x_2y_1%29%7D%5Cright%29.)

根据题目条件，有

![](https://www.zhihu.com/equation?tex=c%5E2%3D%7CAB%7C%5E2%3Dx_1%5E2%2By_1%5E2%2C%5Cquad+b%5E2%3D%7CAC%7C%5E2%3Dx_2%5E2%2By_2%5E2.)

另外，还有三角形的面积公式

![](https://www.zhihu.com/equation?tex=S%3D%5Cdfrac%7B1%7D%7B2%7D%28x_1y_2-x_2y_1%29.)

因此![](https://www.zhihu.com/equation?tex=%5Ctriangle+ABC)的外心![](https://www.zhihu.com/equation?tex=O%5Cleft%28%5Cdfrac%7Bc%5E2y_2-b%5E2y_1%7D%7B4S%7D%2C%5Cdfrac%7Bb%5E2x_1-c%5E2x_2%7D%7B4S%7D%5Cright%29)。最后，计算外接圆的半径

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+R%5E2%26%3D%7COA%7C%5E2%3D%5Cdfrac%7B1%7D%7B16S%5E2%7D%5Cleft%5B%28c%5E2y_2-b%5E2y_1%29%5E2%2B%28b%5E2x_1-c%5E2x_2%29%5E2%5Cright%5D%5C%5C+%26%3D%5Cdfrac%7B1%7D%7B16S%5E2%7D%5Cleft%5Bb%5E4%28x_1%5E2%2By_1%5E2%29%2Bc%5E4%28x_2%5E2%2By_2%5E2%29-2b%5E2c%5E2%28x_1x_2%2By_1y_2%29%5Cright%5D%5C%5C+%26%3D%5Cdfrac%7B1%7D%7B16S%5E2%7D%5Cleft%28b%5E4c%5E2%2Bc%5E4b%5E2-2b%5E2c%5E2%5Ccdot+bc%5Ccos+A%5Cright%29%5C%5C+%26%3D%5Cdfrac%7Bb%5E2c%5E2%7D%7B16S%5E2%7D%5Cleft%28b%5E2%2Bc%5E2-2bc%5Ccos+A%5Cright%29%3D%5Cdfrac%7Ba%5E2b%5E2c%5E2%7D%7B16S%5E2%7D%2C+%5Cend%7Baligned%7D)

其中应用了

![](https://www.zhihu.com/equation?tex=x_1x_2%2By_1y_2%3D%5Coverrightarrow%7BAB%7D%5Ccdot%5Coverrightarrow%7BAC%7D%3Dbc%5Ccos+A%2C)

以及前面所讲的余弦定理![](https://www.zhihu.com/equation?tex=a%5E2%3Db%5E2%2Bc%5E2-2bc%5Ccos+A)。

## 例题3

**例题3（2020年新高考I卷节选）**已知函数![](https://www.zhihu.com/equation?tex=f%28x%29%3Da%5Cmathrm%7Be%7D%5E%7Bx-1%7D-%5Cln+x%2B%5Cln+a)。若不等式![](https://www.zhihu.com/equation?tex=f%28x%29%5Cgeqslant+1)恒成立，求![](https://www.zhihu.com/equation?tex=a)的取值范围。

这道题目是一个非常经典的导数题，从不同的角度出发，可以得到不同的解法，具体可以看我下面的文章。

[Dylaaan：解高考数学题时应该如何思考？以一道导数真题为例](https://zhuanlan.zhihu.com/p/706576257)

为什么这道题目会出现在这里呢？因为这个题目没办法用许多老师最喜欢用的“洛必达法则”。在做导数题的时候，许多老师喜欢套用各种高等数学的结论或者高端的名词，却往往忽略了本质。

## 例题4

**例题4（2023-2024学年海淀区期末节选）**对于给定的奇数![](https://www.zhihu.com/equation?tex=m%28m%5Cgeqslant+3%29)，设![](https://www.zhihu.com/equation?tex=A)是由![](https://www.zhihu.com/equation?tex=m%5Ctimes+m)个实数组成的![](https://www.zhihu.com/equation?tex=m)行![](https://www.zhihu.com/equation?tex=m)列的数表，且![](https://www.zhihu.com/equation?tex=A)中所有数不全相同，![](https://www.zhihu.com/equation?tex=A)中第![](https://www.zhihu.com/equation?tex=i)行第![](https://www.zhihu.com/equation?tex=j)列的数![](https://www.zhihu.com/equation?tex=a_%7Bij%7D%5Cin%5C%7B-1%2C+1%5C%7D)，记![](https://www.zhihu.com/equation?tex=r%28i%29)为![](https://www.zhihu.com/equation?tex=A)的第![](https://www.zhihu.com/equation?tex=i)行各数之和，![](https://www.zhihu.com/equation?tex=c%28j%29)为![](https://www.zhihu.com/equation?tex=A)的第![](https://www.zhihu.com/equation?tex=j)列各数之和，其中![](https://www.zhihu.com/equation?tex=i%2C+j%5Cin%5C%7B1%2C+2%2C%5Ccdots%2C+m%5C%7D)。设集合

![](https://www.zhihu.com/equation?tex=H%3D%5Cleft%5C%7B%28i%2C+j%29%5Cmiddle%7Ca_%7Bij%7D%5Ccdot+r%28i%29%3C0%5Ctext%7B%E6%88%96%7D+a_%7Bij%7D%5Ccdot+c%28j%29%3C0%2Ci%2Cj%5Cin%5C%7B1%2C2%2C%5Ccdots%2Cm%5C%7D%5Cright%5C%7D%2C)

记![](https://www.zhihu.com/equation?tex=H%28A%29)为集合![](https://www.zhihu.com/equation?tex=H)所含元素的个数。若![](https://www.zhihu.com/equation?tex=r%281%29%2C+r%282%29%2C%5Ccdots%2C+r%28m%29)中恰有![](https://www.zhihu.com/equation?tex=s)个正数，![](https://www.zhihu.com/equation?tex=c%281%29%2C+c%282%29%2C+%5Ccdots%2C+c%28m%29)中恰有![](https://www.zhihu.com/equation?tex=t)个正数，求证：![](https://www.zhihu.com/equation?tex=H%28A%29%5Cgeqslant+mt%2Bms-2ts)。

最后两道题目的风格接近新高考的最后一题，最大的特点是没有套路可循。但是如果能想清楚“应该怎么做”，难度就不会特别大。

**解答（或者说解析？）**集合![](https://www.zhihu.com/equation?tex=H)里面的元素![](https://www.zhihu.com/equation?tex=%28i%2C+j%29)有这样的特点：与![](https://www.zhihu.com/equation?tex=%28i%2C+j%29)对应的![](https://www.zhihu.com/equation?tex=a_%7Bij%7D)，要么与行和![](https://www.zhihu.com/equation?tex=r%28i%29)异号，要么与列和![](https://www.zhihu.com/equation?tex=c%28j%29)异号。

根据题目条件，![](https://www.zhihu.com/equation?tex=m)是奇数，因此![](https://www.zhihu.com/equation?tex=r%28i%29)与![](https://www.zhihu.com/equation?tex=c%28j%29)不可能是![](https://www.zhihu.com/equation?tex=0)。如果![](https://www.zhihu.com/equation?tex=r%281%29%2C+r%282%29%2C%5Ccdots%2C+r%28m%29)中恰有![](https://www.zhihu.com/equation?tex=s)个正数，那么就有![](https://www.zhihu.com/equation?tex=m-s)个负数；如果![](https://www.zhihu.com/equation?tex=c%281%29%2C+c%282%29%2C+%5Ccdots%2C+c%28m%29)中恰有![](https://www.zhihu.com/equation?tex=t)个正数，那么就有![](https://www.zhihu.com/equation?tex=m-t)个负数，因此可以列出这样的一个表格：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Barray%7D%7Bc%7Ccc%7Cc%7D+%5Chline+%26+r%28i%29%3E0+%26+r%28i%29%3C0+%26+%5Ctextbf%7B%E5%90%88%E8%AE%A1%7D+%5C%5C+%5Chline+c%28j%29%3E0+%26+st+%26+%28m-s%29t+%26+mt+%5C%5C+c%28j%29%3C0+%26+s%28m-t%29+%26+%28m-s%29%28m-t%29+%26+m%28m-t%29+%5C%5C+%5Chline+%5Ctextbf%7B%E5%90%88%E8%AE%A1%7D+%26+ms+%26+m%28m-s%29+%26+m%5E2+%5C%5C+%5Chline+%5Cend%7Barray%7D)

也就是说，使得![](https://www.zhihu.com/equation?tex=r%28i%29)与![](https://www.zhihu.com/equation?tex=c%28j%29)异号的![](https://www.zhihu.com/equation?tex=%28i%2C+j%29)一共有![](https://www.zhihu.com/equation?tex=%28m-s%29t%2Bs%28m-t%29%3Dmt%2Bms-2ts)个。

而如果![](https://www.zhihu.com/equation?tex=r%28i%29)与![](https://www.zhihu.com/equation?tex=c%28j%29)异号，那无论![](https://www.zhihu.com/equation?tex=a_%7Bij%7D)是正数还是负数，它一定会与其中一个异号，也就是说，![](https://www.zhihu.com/equation?tex=%28i%2C+j%29%5Cin+H)。

所以集合![](https://www.zhihu.com/equation?tex=H)所含元素的个数![](https://www.zhihu.com/equation?tex=H%28A%29%5Cgeqslant+mt%2Bms-2ts)。

## 例题5

**例题5（2019年江苏卷节选）**定义首项为![](https://www.zhihu.com/equation?tex=1)且公比为正数的等比数列为“![](https://www.zhihu.com/equation?tex=M)-数列”。已知数列![](https://www.zhihu.com/equation?tex=%5C%7Bb_n%5C%7D)的通项公式是![](https://www.zhihu.com/equation?tex=b_n%3Dn)，设![](https://www.zhihu.com/equation?tex=m)是正整数，若存在“![](https://www.zhihu.com/equation?tex=M)-数列”![](https://www.zhihu.com/equation?tex=%5C%7Bc_n%5C%7D)，对任意的正整数![](https://www.zhihu.com/equation?tex=k)，当![](https://www.zhihu.com/equation?tex=k%5Cleqslant+m)时，都有![](https://www.zhihu.com/equation?tex=c_k%5Cleqslant+b_k%5Cleqslant+c_%7Bk%2B1%7D)成立，求![](https://www.zhihu.com/equation?tex=m)的最大值。

这道题看起来非常难入手，其实仔细把题目读清楚，并且回忆一下如何处理不等式恒成立问题，就能解决该题。

**解答（或者说解析？）**考虑到数列![](https://www.zhihu.com/equation?tex=%5C%7Bc_n%5C%7D)是首项为![](https://www.zhihu.com/equation?tex=1)且公比为正数的等比数列，可以设![](https://www.zhihu.com/equation?tex=c_n%3Dq%5E%7Bn-1%7D%28q%3E0%29)。

那么，原问题就转化为：存在![](https://www.zhihu.com/equation?tex=q%3E0)，对任意的正整数![](https://www.zhihu.com/equation?tex=k%5Cleqslant+m)，都有![](https://www.zhihu.com/equation?tex=q%5E%7Bk-1%7D%5Cleqslant+k%5Cleqslant+q%5Ek)成立，求![](https://www.zhihu.com/equation?tex=m)的最大值。

取![](https://www.zhihu.com/equation?tex=k%3D1)，可得![](https://www.zhihu.com/equation?tex=1%5Cleqslant+1%5Cleqslant+q)；再取![](https://www.zhihu.com/equation?tex=k%3D2)，可得![](https://www.zhihu.com/equation?tex=q%5Cleqslant+2%5Cleqslant+q%5E2)；再取![](https://www.zhihu.com/equation?tex=k%3D3)，可得![](https://www.zhihu.com/equation?tex=q%5E2%5Cleqslant+3%5Cleqslant+q%5E3)。

因此只要随便取![](https://www.zhihu.com/equation?tex=q%5Cin%5B%5Csqrt%5B3%5D%7B3%7D%2C%5Csqrt%7B3%7D%5D)，那么![](https://www.zhihu.com/equation?tex=k%3D1%2C2%2C+3)一定满足上面的不等式。因此在下面的讨论中，不妨设![](https://www.zhihu.com/equation?tex=m%5Cgeqslant+3)。

（1）存在![](https://www.zhihu.com/equation?tex=q%3E0)，对任意的正整数![](https://www.zhihu.com/equation?tex=k%5Cleqslant+m)，都有![](https://www.zhihu.com/equation?tex=q%5E%7Bk-1%7D%5Cleqslant+k%5Ciff%5Cln+q%5Cleqslant%5Cdfrac%7B%5Cln+k%7D%7Bk-1%7D%281%3Ck%5Cleqslant+m%29)。

要使得上述不等式成立，只需![](https://www.zhihu.com/equation?tex=%5Cln+q%5Cleqslant%5Cleft%28%5Cdfrac%7B%5Cln+k%7D%7Bk-1%7D%5Cright%29_%7B%5Cmin%7D)，要考虑右式当![](https://www.zhihu.com/equation?tex=1%3Ck%5Cleqslant+m)时何时取最小值，可以构造函数。

令![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cdfrac%7B%5Cln+x%7D%7Bx-1%7D)，其中![](https://www.zhihu.com/equation?tex=1%3Cx%5Cleqslant+m)，计算得![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D%5Cdfrac%7B1-%5Cdfrac%7B1%7D%7Bx%7D-%5Cln+x%7D%7B%28x-1%29%5E2%7D)。

再令![](https://www.zhihu.com/equation?tex=g%28x%29%3D1-%5Cdfrac%7B1%7D%7Bx%7D-%5Cln+x)，熟悉不等式的老师或者同学也许可以直接得到![](https://www.zhihu.com/equation?tex=g%28x%29%5Cleqslant+0)。

不熟悉也没事，可以求导得到![](https://www.zhihu.com/equation?tex=g%27%28x%29%3D%5Cdfrac%7B1-x%7D%7Bx%5E2%7D)，因此![](https://www.zhihu.com/equation?tex=g%28x%29%5Cleqslant+g%281%29%3D0)。

因此$f(x)$在![](https://www.zhihu.com/equation?tex=%281%2C+%2B%5Cinfty%29)内单调递减，![](https://www.zhihu.com/equation?tex=f%28x%29_%7B%5Cmin%7D%3Df%28m%29%3D%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D)，所以我们得到了![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%5Cln+q%5Cleqslant%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D%7D)。

（2）存在![](https://www.zhihu.com/equation?tex=q%3E0)，对任意的正整数![](https://www.zhihu.com/equation?tex=k%5Cleqslant+m)，都有![](https://www.zhihu.com/equation?tex=k%5Cleqslant+q%5Ek%5Ciff%5Cln+q%5Cgeqslant%5Cdfrac%7B%5Cln+k%7D%7Bk%7D)。

类似（1）中的分析，我们只需![](https://www.zhihu.com/equation?tex=%5Cln+q%5Cgeqslant%5Cleft%28%5Cdfrac%7B%5Cln+k%7D%7Bk%7D%5Cright%29_%7B%5Cmax%7D)，要考虑右式当![](https://www.zhihu.com/equation?tex=1%3Ck%5Cleqslant+m)时何时取最小值，可以构造函数。

令![](https://www.zhihu.com/equation?tex=h%28x%29%3D%5Cdfrac%7B%5Cln+x%7D%7Bx%7D)，其中![](https://www.zhihu.com/equation?tex=1%3Cx%5Cleqslant+m)，计算得![](https://www.zhihu.com/equation?tex=h%27%28x%29%3D%5Cdfrac%7B1-%5Cln+x%7D%7Bx%5E2%7D)，因此![](https://www.zhihu.com/equation?tex=h%28x%29)在![](https://www.zhihu.com/equation?tex=%281%2C+%5Cmathrm%7Be%7D%29)内单调递增，在![](https://www.zhihu.com/equation?tex=%28%5Cmathrm%7Be%7D%2C+%2B%5Cinfty%29)内单调递减。

因此![](https://www.zhihu.com/equation?tex=%5Cleft%28%5Cdfrac%7B%5Cln+k%7D%7Bk%7D%5Cright%29_%7B%5Cmax%7D%3D%5Cmax%5Cleft%5C%7B%5Cdfrac%7B%5Cln+2%7D%7B2%7D%2C%5Cdfrac%7B%5Cln+3%7D%7B3%7D%5Cright%5C%7D%3D%5Cdfrac%7B%5Cln+3%7D%7B3%7D)，我们这个时候得到了![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%5Cln+q%5Cgeqslant%5Cdfrac%7B%5Cln+3%7D%7B3%7D%7D)。

结合（1）和（2），要存在![](https://www.zhihu.com/equation?tex=q%3E0)满足（1）和（2），我们只需要![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%5Cdfrac%7B%5Cln+3%7D%7B3%7D%5Cleqslant%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D%7D)。

在（1）中，我们得到了![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D)关于![](https://www.zhihu.com/equation?tex=m)是单调递减的，因此我们只需要找到最大的![](https://www.zhihu.com/equation?tex=m)，使上述不等式成立。

取![](https://www.zhihu.com/equation?tex=m%3D5)得![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D%3D%5Cdfrac%7B%5Cln+5%7D%7B4%7D%3E%5Cdfrac%7B%5Cln+3%7D%7B3%7D)，取![](https://www.zhihu.com/equation?tex=m%3D6)得![](https://www.zhihu.com/equation?tex=%5Cdfrac%7B%5Cln+m%7D%7Bm-1%7D%3D%5Cdfrac%7B%5Cln+6%7D%7B5%7D%3C%5Cdfrac%7B%5Cln+3%7D%7B3%7D)，因此![](https://www.zhihu.com/equation?tex=m)的最大值是![](https://www.zhihu.com/equation?tex=5)。

# 1，3，3，5，5，5，7，7，7，7... 的通项公式是什么？
[](https://www.zhihu.com/question/419720398/answer/3155540572)

注意到如下初等函数完美符合条件:

![](https://www.zhihu.com/equation?tex=a_n%3D%5Cdfrac%7Bi+%7D%7B%5Cpi+%7D%5Cln%5Cleft%28e%5E%7B%5Csqrt%7B-8+n%7D%5Cpi%7D%5Cright%29%2B%5Csqrt%7B8+n%7D-1)

![](https://picx.zhimg.com/v2-1b107263f39291a478deef6c754d902b_r.jpg?source=2c26e567)

注意无论是 arctan + tan 还是 arccos + cos 以及 arcsin + sin 都是做不到这点的.

这里利用了黎曼面的性质, 每转一圈刻度往外移一格, 所以周期才会 1, 2, 3 这样增大.

且只有 ln 是一圈一圈连续向下延伸的, 转过一周正好消除.

![](https://picx.zhimg.com/50/v2-9cd04d6c3fd7cc34d60d365807ccd8d2_720w.jpg?source=2c26e567)

其他反三角函数的黎曼面都是断裂的, 分支定界都无法达到要求.

![](https://picx.zhimg.com/50/v2-0b0c2d4dc6d7bfd06080b5c1abaf75a1_720w.jpg?source=2c26e567)

# 如何优雅地证明e＞根号7？
[](https://www.zhihu.com/question/660297197/answer/3547070781)

![](https://www.zhihu.com/equation?tex=%7B%5Crm+e%7D%5E2%3D%5Csum_%7Bn%3D0%7D%5E%7B%5Cinfty%7D%5Cfrac%7B2%5En%7D%7Bn%21%7D%3E%5Csum_%7Bn%3D0%7D%5E%7B4%7D%5Cfrac%7B2%5En%7D%7Bn%21%7D%3D7.%5C%5C)

# 如果高考成绩用各科分数乘积而不是总和，会发生什么？
[](https://www.zhihu.com/question/2553651012/answer/60181892651)

其实等价于对每科成绩做了一个对数变换后再求和（留作习题读者自证），显然这种评价方式更利好六边形战士。如果把每个学科都直接归一化到100分满分，那么高分段语文重要性会更显著，低分段则是短板效应会更显著。

当然，如果考虑**通过赋分**实现分数归一化，那么就发生一个有趣的现象：如果我们假设高分段考生在赋分下最高分![](https://www.zhihu.com/equation?tex=M)和最低分![](https://www.zhihu.com/equation?tex=m)差别不太大（即![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bm%7D%7BM%7D)接近于1），那么**对于这些考生而言，总和度量还是乘积度量带来的影响其实并不大**。

我们考虑最极端的两个例子：假设高考共有![](https://www.zhihu.com/equation?tex=2n)个学科，每科的成绩分别为![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2C%5Ccdots+%2Cx_%7B2n%7D)。学生A是究极六边形战士，每一科成绩都相等，即![](https://www.zhihu.com/equation?tex=x_1%3Dx_2%3D%5Ccdots+%3Dx_%7B2n%7D%3DX)。学生B是究极偏科怪，![](https://www.zhihu.com/equation?tex=x_1%3Dx_3%3D%5Ccdots+%3Dx_%7B2n-1%7D%3Dm)，![](https://www.zhihu.com/equation?tex=x_2%3Dx_4%3D%5Ccdots+%3Dx_%7B2n%7D%3DM)。显然如果采用乘积度量来衡量高考成绩，**学生A就是吃到版本红利最多**的，**学生B就是最大的怨种**。假设学生A和学生B在乘积度量下成绩相等，那么有![](https://www.zhihu.com/equation?tex=X%3D%5Csqrt%7BmM%7D)。此时换回总和度量，学生A的成绩为![](https://www.zhihu.com/equation?tex=2n%5Csqrt%7BmM%7D%3D2nM%5Csqrt%7B%5Cfrac%7Bm%7D%7BM%7D%7D)，学生B的成绩为![](https://www.zhihu.com/equation?tex=n%5Cleft%28m%2BM%5Cright%29%3DnM%5Cleft%281%2B%5Cfrac%7Bm%7D%7BM%7D%5Cright%29)。

我们假设学生A和学生B都是高分段的，赋分归一化后他们的![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bm%7D%7BM%7D)接近于1（![](https://www.zhihu.com/equation?tex=m%3CM)），令![](https://www.zhihu.com/equation?tex=t%3D1-%5Cfrac%7Bm%7D%7BM%7D)（接近于0），此时总和度量意义下的A的分数/B的分数=![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%5Csqrt%7B%5Cfrac%7Bm%7D%7BM%7D%7D%7D%7B1%2B%5Cfrac%7Bm%7D%7BM%7D%7D%3D%5Cfrac%7B2%5Csqrt%7B1-t%7D%7D%7B2-t%7D)。

在![](https://www.zhihu.com/equation?tex=t%5Cto0)时显然有![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%5Csqrt%7B1-t%7D%7D%7B2-t%7D%3D1-%5Cfrac%7Bt%5E2%7D%7B8%7D%2Bo%5Cleft%28+t%5E2+%5Cright%29+)。以![](https://www.zhihu.com/equation?tex=t%3D0.1)为例，A的分数总和/B的分数总和≈![](https://www.zhihu.com/equation?tex=1-%5Cfrac%7B1%7D%7B800%7D)，这意味着如果某个学生最大分差在10%以内，**采用乘积度量后，只会带来（总和度量意义下）千分之一左右的差异**。即使最大分差达到25%，**采用乘积度量后，只会带来（总和度量意义下）百分之一左右的差异**。

所以假设采用赋分制后，实际上对于高分段考生而言，用各科分数乘积度量高考成绩和用各科分数总和度量高考成绩**差别不大**，这个策略主要用于**迫害偏科人士**。

补充部分的分割线，**以上为原回答**，发布于2024年12月20日22点47分（由于被castelu抄袭了，所以标注一下时间先后顺序以供后人考证）。

![](https://picx.zhimg.com/v2-e3b5e2297af9f37ab913bf7862b79d4c_r.jpg?source=2c26e567)

以下为**补充部分的回答**。首先感谢[@天使猫猫酱](https://www.zhihu.com/people/7f51c06144735b7b20ea5668d27eb952)指出的一种特例，即上述推导时默认要求M≤满分，即**满分也是一个边界条件**，在上文推导中忽略了满分边界条件。但如果M与满分十分接近，同时![](https://www.zhihu.com/equation?tex=t%3D1-%5Cfrac%7Bm%7D%7BM%7D)较大，此时满分边界条件不再能忽略，满分边界条件可能使得最大的怨种易主。当然，方便起见，下文不考虑满分边界条件，即**假设学生在t较小的约束条件下不会出现超越满分的现象**，或者不考虑分数的定义域。

回到正题，事实上原回答为了保持结论简明，我**特意埋了一个坑**，即假设「最低分科目数=最高分科目数的同学是最大的怨种」（当然，很遗憾的是，castelu在初次搬运时并没有意识到这个坑，以至于把这个坑也照搬了）。

细心的同学可能就会有疑惑：**这个假设真的合理吗**？事实上，**在  较小、科目数较少时，这一假设是严格成立的，没有任何误差**。但在![](https://www.zhihu.com/equation?tex=t)较大、科目数较多时，这一假设就会带来一定的偏差。由于这部分的探讨比较复杂，会破坏结论的简明性，并且忽略这一点并不影响普遍情况下的严格正确性，故原回答中我将这部分内容通过上假设刻意隐藏了起来。但既然这个回答蹭到了castelu的流量后火了，**我也在此深入探讨一下**——

假设学生A有![](https://www.zhihu.com/equation?tex=a)门科目为![](https://www.zhihu.com/equation?tex=m)分，![](https://www.zhihu.com/equation?tex=b)门科目为![](https://www.zhihu.com/equation?tex=M)分，其中![](https://www.zhihu.com/equation?tex=m%3CM)且![](https://www.zhihu.com/equation?tex=a%2Cb)均为正整数。学生B每一科都是![](https://www.zhihu.com/equation?tex=X)分，其中学生A和学生B在乘积度量下分数相等，即![](https://www.zhihu.com/equation?tex=X%5E%7Ba%2Bb%7D%3Dm%5EaM%5Eb)。那么在总和度量意义下，学生B的成绩/学生A的成绩![](https://www.zhihu.com/equation?tex=%5Clambda+%3D%5Cfrac%7B%5Cleft%28+a%2Bb+%5Cright%29+m%5E%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%7DM%5E%7B%5Cfrac%7Bb%7D%7Ba%2Bb%7D%7D%7D%7Bam%2BbM%7D%3D%5Cfrac%7B%5Cleft%28+%5Cfrac%7Bm%7D%7BM%7D+%5Cright%29+%5E%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%7D%7D%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%5Cfrac%7Bm%7D%7BM%7D%2B%5Cfrac%7Bb%7D%7Ba%2Bb%7D%7D)。

令![](https://www.zhihu.com/equation?tex=u%3D1-t%3D%5Cfrac%7Bm%7D%7BM%7D)、![](https://www.zhihu.com/equation?tex=c%3D%5Cfrac%7Ba%7D%7Ba%2Bb%7D)，则![](https://www.zhihu.com/equation?tex=%5Clambda+%3D%5Cfrac%7Bu%5Ec%7D%7Bcu%2B1-c%7D)（原回答对应了![](https://www.zhihu.com/equation?tex=c%3D%5Cfrac%7B1%7D%7B2%7D)的特例）。注意，因为![](https://www.zhihu.com/equation?tex=a%2Cb)只能取正整数，故![](https://www.zhihu.com/equation?tex=c)是离散的。我们暂且将![](https://www.zhihu.com/equation?tex=c)当成连续的进行分析，其中：![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5Clambda%7D%7B%5Cpartial+c%7D%3D%5Cfrac%7Bu%5Ec%5Cleft%28+1-u%2B%5Cln+u-c%5Cleft%28+1-u+%5Cright%29+%5Cln+u+%5Cright%29%7D%7B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E2%7D)、![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5E2%5Clambda%7D%7B%5Cpartial+c%5E2%7D%3D%5Cfrac%7Bu%5Ec%5Cleft%28+2%5Cleft%28+1-u+%5Cright%29+%5E2%2B2%5Cleft%28+cu%2B1-c+%5Cright%29+%5Cleft%28+1-u+%5Cright%29+%5Cln+u%2B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E2%5Cln+%5E2u+%5Cright%29%7D%7B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E3%7D)，显然![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5E2%5Clambda%7D%7B%5Cpartial+c%5E2%7D%3E0)，故![](https://www.zhihu.com/equation?tex=%5Clambda)关于![](https://www.zhihu.com/equation?tex=c)是下凸的。同时求解![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5Clambda%7D%7B%5Cpartial+c%7D%3D0)得到![](https://www.zhihu.com/equation?tex=c_0%3D%5Cfrac%7B1-u%2B%5Cln+u%7D%7B%5Cleft%28+1-u+%5Cright%29+%5Cln+u%7D%3D%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D%5Cin%5Cleft%28%5Cfrac%7B1%7D%7B2%7D%2C1%5Cright%29)。因此，**随着  的增加先减后增，并在  处取得全局最小值**。当然，由于![](https://www.zhihu.com/equation?tex=c_0)的最终取值只能是分数，所以实际上是某个与![](https://www.zhihu.com/equation?tex=c_0)临近的值，而非![](https://www.zhihu.com/equation?tex=c_0)本身。

如果像原回答一样假设![](https://www.zhihu.com/equation?tex=t%5Cto0)（即![](https://www.zhihu.com/equation?tex=u%5Cto1)），那么![](https://www.zhihu.com/equation?tex=c_0%3D%5Clim_%7Bu%5Crightarrow+1%7D+%5Cfrac%7B1-u%2B%5Cln+u%7D%7B%5Cleft%28+1-u+%5Cright%29+%5Cln+u%7D%3D%5Cfrac%7B1%7D%7B2%7D)，这也是**原回答中默认假设「最低分科目数=最高分科目数的同学是最大的怨种」的理由**。一方面，这一假设对于实际情形往往是完全精确的，而对于不精确的场景，我们难以写出简明的解析解，这是因为![](https://www.zhihu.com/equation?tex=c_0)在最终只能取到一个离散值，上述分析假设了![](https://www.zhihu.com/equation?tex=c_0)为实数。并且，我们还有一个更精细的估计，即![](https://www.zhihu.com/equation?tex=c_0%3D%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1-u%7D%7B12%7D%2Bo%5Cleft%28+1-u+%5Cright%29+)，这意味着即使![](https://www.zhihu.com/equation?tex=u)与1有一定的偏差，只要科目数不多，那么这一假设依然严格成立。

那么这个模型具体能容忍多少偏差呢？让我们以实际高考为例，实际高考考6门，这意味着![](https://www.zhihu.com/equation?tex=a%2Bb%3D6)。那么![](https://www.zhihu.com/equation?tex=u)较大时，![](https://www.zhihu.com/equation?tex=a%3Db%3D3)可能不再是最大的怨种，临界情形为「![](https://www.zhihu.com/equation?tex=a%3D4%2Cb%3D2)同为最大怨种」。代入方程可得：![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B%5Cfrac%7B1%7D%7B2%7Du%2B%5Cfrac%7B1%7D%7B2%7D%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B2%7D%7B3%7D%7D%7D%7B%5Cfrac%7B2%7D%7B3%7Du%2B%5Cfrac%7B1%7D%7B3%7D%7D)，解出临界![](https://www.zhihu.com/equation?tex=u%5Capprox+0.350718)。

这意味着，对于科目为6门的高考场景，**原回答的假设在  的范围内不会造成任何误差**，这一取值范围几乎覆盖了所有的结论实际应用场景（试想一下，一个人最高分比最低分几乎高3倍，那这个人也挺夸张的）。而在此之外的范围将附带一个高阶的较小误差项，然而对此我们无法给出一个简明的解析解，因此**原回答中刻意回避了这部分的讨论**，因为在此之外的范围并无显著的实际意义，并且用原模型估计的误差仍然较小。

当然，对于更一般的情形，假设总科目数![](https://www.zhihu.com/equation?tex=n%3Da%2Bb)为偶数，默认最优在![](https://www.zhihu.com/equation?tex=a%3D%5Cfrac%7Bn%7D%7B2%7D%2Cb%3D%5Cfrac%7Bn%7D%7B2%7D)处取得，那么临界方程为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B%5Cfrac%7B1%7D%7B2%7Du%2B%5Cfrac%7B1%7D%7B2%7D%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7Bn%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7Bn%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B1%7D%7Bn%7D+%5Cright%29%7D)，化简得到![](https://www.zhihu.com/equation?tex=%5Cleft%28+1-%5Cfrac%7B2%7D%7Bn%7D%5Cfrac%7B1-u%7D%7B1%2Bu%7D+%5Cright%29+%5En%3Du)。设临界方程的解为![](https://www.zhihu.com/equation?tex=u_0)，绘图如下，**其中  时，原回答的假设不会带来任何误差**。

![](https://picx.zhimg.com/v2-b3c63cf4b6541ee8d2e9ceb01954d8bd_r.jpg?source=2c26e567)

假设总科目数![](https://www.zhihu.com/equation?tex=n%3Da%2Bb)为奇数，那么默认最优应该在![](https://www.zhihu.com/equation?tex=a%3D%5Cfrac%7Bn%2B1%7D%7B2%7D%2Cb%3D%5Cfrac%7Bn%2B3%7D%7B2%7D)处取得，那么临界方程为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7B2n%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7B2n%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B1%7D%7B2n%7D+%5Cright%29%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B3%7D%7B2n%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B3%7D%7B2n%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B3%7D%7B2n%7D+%5Cright%29%7D)，化简得到![](https://www.zhihu.com/equation?tex=%5Cleft%28+1-%5Cfrac%7B2%7D%7Bn%7D%5Cfrac%7B%5Cleft%28+1-u+%5Cright%29%7D%7B%5Cleft%28+1%2Bu+%5Cright%29+-%5Cfrac%7B1%7D%7Bn%7D%5Cleft%28+1-u+%5Cright%29%7D+%5Cright%29+%5En%3Du)。设临界方程的解为![](https://www.zhihu.com/equation?tex=u_0)，绘图如下，**其中  时，原回答的假设不会带来任何误差**。

![](https://picx.zhimg.com/v2-493c51d2dcc55fdfc1c50393ff0e68ed_r.jpg?source=2c26e567)

事实上，[@天使猫猫酱](https://www.zhihu.com/people/7f51c06144735b7b20ea5668d27eb952)的视频（如下链接）给了一个![](https://www.zhihu.com/equation?tex=n%3D12)的算例，这也是对本模型一个良好补充。该视频的问题可**作为习题**留给读者对补充部分内容进行思考：

[如果高考成绩用各科分数乘积会发生什么？——只属于今天的数学题（1月2日）_哔哩哔哩_bilibili](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1DzrcY8Ew8)

当然，**如果只是想要估计一个  的下界，而非要求下确界**，也可将![](https://www.zhihu.com/equation?tex=c_0)代入，此时![](https://www.zhihu.com/equation?tex=%5Clambda)的下界为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29+u%2B1-%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29%7D)，显然这个形式与原回答中的![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2u%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B1%2Bu%7D)比较起来会丑陋很多。同时，原回答相对一般形式**只相差一个4阶的高阶无穷小**，如下图所示：

![](https://picx.zhimg.com/v2-2ed7a3ba3bff3c2c27e71cd6496a1b2f_r.jpg?source=2c26e567)

具体而言，原回答形式在![](https://www.zhihu.com/equation?tex=u_0%5Cleq%5Cfrac%7Bm%7D%7BM%7D%3C1)范围内是**完全精确**的。即使是脱离了这个范围，相对下确界也最多只会带来一个![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B288%7D%5Cleft%281-u%5Cright%29%5E4)的**四阶项的误差**，因此原回答采用了「最低分科目数=最高分科目数的同学是最大的怨种」假设，这有助于**让问题分析过程和结论都变得简明**，有利于科普。毕竟，我的**补充部分的文字数已经是原回答的3倍**了，这甚至还没有算上配图。

# 如何求sin2x·sinx的最大值？
[](https://www.zhihu.com/question/611804269/answer/3116571917)

好方法都有了，写个不一样的。

设![](https://www.zhihu.com/equation?tex=%5Ccos+x%3Dt)，则

![](https://www.zhihu.com/equation?tex=%5Csin2x%5Ccdot%5Csin+x%3D2%5Csin%5E2x%5Ccos+x)![](https://www.zhihu.com/equation?tex=%3D2%281-t%5E2%29t%3Df%28t%29)

![](https://www.zhihu.com/equation?tex=f%27%28t%29%3D2%281-3t%5E2%29%3D0)![](https://www.zhihu.com/equation?tex=%5CRightarrow)![](https://www.zhihu.com/equation?tex=t%3D%5Cpm%5Cfrac%7B1%7D%7B%5Csqrt%7B3%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Csin2x%5Ccdot%5Csin+x%5Cleq)![](https://www.zhihu.com/equation?tex=f%28%5Cfrac%7B1%7D%7B%5Csqrt%7B3%7D%7D%29%3D%5Cfrac%7B4%7D%7B3%5Csqrt%7B3%7D%7D)

# 如何求sin2x·sinx的最大值？
[](https://www.zhihu.com/question/611804269/answer/3115894330)

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%2A%7D+%5Csin+2x+%5Csin+x%26%5Cle+%7C%5Csin+2x%7C+%7C%5Csin+x%7C%5C%5C%5B8pt%5D+%26%3D2%5Csin%5E2+x%7C%5Ccos+x%7C%5C%5C%5B8pt%5D+%26%3D2%5Csqrt%7B%5Cfrac%7B1%7D%7B2%7D%5Ccdot%5Csin%5E2+x%5Ccdot%5Csin%5E2+x%5Ccdot2%5Ccos%5E2+x%7D%5C%5C%5B8pt%5D+%26%5Cle+2%5Csqrt%7B%5Cfrac%7B1%7D%7B2%7D%5Cleft%28%5Cfrac%7B%5Csin%5E2+x%2B%5Csin%5E2+x%2B2%5Ccos%5E2+x%7D%7B3%7D%5Cright%29%5E3%7D%5C%5C%5B8pt%5D+%26%3D%5Cfrac%7B4%7D%7B3%5Csqrt%7B3%7D%7D.+%5Cend%7Balign%2A%7D%5C%5C)

# 最坑爹的题目你见过多少?
[](https://www.zhihu.com/question/490141116/answer/3074721130)

![](https://picx.zhimg.com/v2-addf1194ec12d972958da73da77aca45_r.jpg?source=2c26e567)

你要是能拿小学知识做出来，我当场把这个手机吃掉

# 能否构造一组无理数a,b，使得a^b是有理数?
[](https://www.zhihu.com/question/378460266/answer/1628660295)

考察![](https://www.zhihu.com/equation?tex=%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%2C)如果这是有理数，直接取![](https://www.zhihu.com/equation?tex=a%3Db%3D%5Csqrt%7B2%7D%2C)要的例子就构造出来了；如果这是无理数，由于![](https://www.zhihu.com/equation?tex=%28%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%29%5E%7B%5Csqrt%7B2%7D%7D%3D2%2C)那么取![](https://www.zhihu.com/equation?tex=a%3D%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%2Cb%3D%5Csqrt%7B2%7D%2C)例子也构造出来了。

# 199²⁰⁰和200¹⁹⁹哪个更大?
[](https://www.zhihu.com/question/380167560/answer/3292433186)

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%2A%7D+200%5E%7B199%7D%26%3D%5Coverbrace%7B200%5Ctimes%5Ccdots%5Ctimes+200%7D%5E%7B198+~%5Ctext%7Bfactors%7D%7D%5Ctimes100%5Ctimes2%5C%5C%5B10pt%5D%26%3C+%5Cleft%28%5Cfrac%7B%5Coverbrace%7B200%2B%5Ccdots%2B200%7D%5E%7B198+~%5Ctext%7Baddends%7D%7D%2B100%2B2%7D%7B200%7D%5Cright%29%5E%7B200%7D%5C%5C%5B10pt%5D%26%3C199%5E%7B200%7D.%5C%5C+%5Cend%7Balign%2A%7D%5C%5C)

# a,b,c,d≥-1，a+b+c+d＝0,求ab+bc+cd的最大值?
[](https://www.zhihu.com/question/11125496234/answer/92267100709)

分两种情况：

若![](https://www.zhihu.com/equation?tex=a%2Bb%5Cle+0%2C)则![](https://www.zhihu.com/equation?tex=+%7Ca%7C%2C%7Cb%7C%5Cle1%2C)于是有![](https://www.zhihu.com/equation?tex=ab%2Bc%28b%2Bd%29+%5Cle+%5Cfrac%7Ba%5E2%2Bb%5E2%7D%7B2%7D%2B+%5Cfrac%7B%28c%2Bb%2Bd%29%5E2%7D%7B4%7D%3D%5Cfrac%7Ba%5E2%2Bb%5E2%7D%7B2%7D%2B+%5Cfrac%7Ba%5E2%7D%7B4%7D%5Cle+%5Cfrac%7B1%5E2%2B1%5E2%7D%7B2%7D%2B%5Cfrac%7B1%5E2%7D%7B4%7D%3D%5Cfrac%7B5%7D%7B4%7D.%5C%5C)若![](https://www.zhihu.com/equation?tex=a%2Bb%3E0%2C)则![](https://www.zhihu.com/equation?tex=c%2Bd%3C0%2C)进而![](https://www.zhihu.com/equation?tex=%7Cc%7C%2C%7Cd%7C%5Cle1%2C)于是也有![](https://www.zhihu.com/equation?tex=b%28a%2Bc%29%2Bcd%5Cle+%5Cfrac%7B%28b%2Ba%2Bc%29%5E2%7D%7B4%7D%2B%5Cfrac%7Bc%5E2%2Bd%5E2%7D%7B2%7D%3D%5Cfrac%7Bd%5E2%7D%7B4%7D%2B%5Cfrac%7Bc%5E2%2Bd%5E2%7D%7B2%7D%5Cle+%5Cfrac%7B1%5E2%7D%7B4%7D%2B%5Cfrac%7B1%5E2%2B1%5E2%7D%7B2%7D%3D%5Cfrac%7B5%7D%7B4%7D.%5C%5C)

# 数之谜上难倒一众竞赛大神的高一期末考试题
[](https://zhuanlan.zhihu.com/p/714024274)

数之谜上这道题最近似乎很火，已经在各大高中竞赛群，高考群，还有考研和CMC群里传遍了，昨天竞赛班中也有好多人问：

![](https://pic4.zhimg.com/v2-f8b0069d8f58f3a68df09701a5f1b507_r.jpg)

![](https://pic4.zhimg.com/v2-358b73cb5bfe7acace163d1f63500fe7_r.jpg)

> 我发现这种题面简洁+结论优美+表述初等的问题，特别受欢迎而且很符合传播学，总是能在第一时间火遍全网，比那些形如代数几何、表示论、拓扑之类的抽象同时没什么用的东西要受欢迎多了，与其天天钻研那些，不如做点实在的题。

## 问题

> 计算![](https://www.zhihu.com/equation?tex=%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B90%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cleft%28+%7B%7Bk%5E2%7D%7D+%5Cright%29%5E%5Ccirc+%7D%7D%7B%7B%5Csin+k%5E%5Ccirc+%7D%7D%7D+)，这里单位是角度而非弧度。

角度制显然不方便处理，我们应当将其转化为弧度制，再想进一步的方案，于是等价的变成

> 证明：![](https://www.zhihu.com/equation?tex=%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B90%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+%7Bk%5E2%7D%7D%7D%7B%7B180%7D%7D%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+k%7D%7D%7B%7B180%7D%7D%7D%7D%7D++%3D+45%5C%5C)

这题也没有那么平凡，不是简单的利用周期性做一个抵消就能消出来的，需要一定的技巧，当然本题不涉及任何超纲知识，甚至连高斯和，二次剩余，欧拉公式这些工具都不需要。

> 本题只需要用最基本的三角函数公式就能变换出来，高一期末考试题水平。因此只要你上过高中，就应该能轻松做出来，不会做的话建议再读一年高一。

## 解答

- 下面讲解两个方法，方法一是我今天早上自己做的，大概想了半小时，这个方法毫无门槛，只要高中数学必修一课本上的三角函数公式你有印象，就能快速解决。方法二则来自我们竞赛班的答疑老师，用到了欧拉公式和单位根，这也是很好的方法，只是门槛高些，同时需要你理解能力强一些。
- 文末我们给出一个推广命题

## 方法一

根据三角函数的和差化积公式，显然有

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Barray%7D%7Bl%7D+%5Cdisplaystyle+1.%5Cfrac%7B%7B%5Csin+2nx%7D%7D%7B%7B%5Csin+x%7D%7D+%3D+2%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7B%5Ccos+%5Cleft%28+%7B2k+-+1%7D+%5Cright%29x%7D+%5C%5C+%5Cdisplaystyle+2.%5Cfrac%7B%7B%5Csin+%5Cleft%28+%7B2n+%2B+1%7D+%5Cright%29x%7D%7D%7B%7B%5Csin+x%7D%7D+%3D+1+%2B+2%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7B%5Ccos+%5Cleft%28+%7B2kx%7D+%5Cright%29%7D++%5Cend%7Barray%7D%5C%5C)

进而

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Barray%7D%7Bl%7D+%5Cdisplaystyle+%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B90%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+%7Bk%5E2%7D%7D%7D%7B%7B180%7D%7D%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+k%7D%7D%7B%7B180%7D%7D%7D%7D%7D++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cleft%28+%7B2n+%5Ccdot+%5Cfrac%7B%7B2%5Cpi+n%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7B2%5Cpi+n%7D%7D%7B%7B180%7D%7D%7D%7D%7D++%2B+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cleft%28+%7B%5Cleft%28+%7B2n+-+1%7D+%5Cright%29+%5Ccdot+%5Cfrac%7B%7B%5Cpi+%5Cleft%28+%7B2n+-+1%7D+%5Cright%29%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+%5Cleft%28+%7B2n+-+1%7D+%5Cright%29%7D%7D%7B%7B180%7D%7D%7D%7D%7D+%5C%5C+%5Cdisplaystyle++%3D+2%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7B%5Ccos+%5Cleft%28+%7B%5Cleft%28+%7B2k+-+1%7D+%5Cright%29+%5Ccdot+%5Cfrac%7B%7B2%5Cpi+n%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D+%7D++%2B+2%5Csum%5Climits_%7Bn+%3D+2%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7Bn+-+1%7D+%7B%5Ccos+%5Cleft%28+%7B2k+%5Ccdot+%5Cfrac%7B%7B%5Cpi+%5Cleft%28+%7B2n+-+1%7D+%5Cright%29%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D+%7D++%2B+45+%5Cend%7Barray%7D%5C%5C)

记

![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle+f%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29+%3D+%5Ccos+%5Cleft%28+%7B%5Cleft%28+%7B2k+-+1%7D+%5Cright%29+%5Ccdot+%5Cfrac%7B%7B2%5Cpi+n%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29+%3D+%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%5Cpi+%7D%7B%7B90%7D%7Dn%5Cleft%28+%7B2k+-+1%7D+%5Cright%29%7D+%5Cright%29+%5C%5C)

则有

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Barray%7D%7Bl%7D+%5Cdisplaystyle+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7B%5Ccos+%5Cleft%28+%7B%5Cleft%28+%7B2k+-+1%7D+%5Cright%29+%5Ccdot+%5Cfrac%7B%7B2%5Cpi+n%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D+%7D++%2B+%5Csum%5Climits_%7Bn+%3D+2%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7Bn+-+1%7D+%7B%5Ccos+%5Cleft%28+%7B2k+%5Ccdot+%5Cfrac%7B%7B%5Cpi+%5Cleft%28+%7B2n+-+1%7D+%5Cright%29%7D%7D%7B%7B180%7D%7D%7D+%5Cright%29%7D+%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D++%2B+%5Csum%5Climits_%7Bn+%3D+2%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7Bn+-+1%7D+%7Bf%5Cleft%28+%7Bk%2Cn%7D+%5Cright%29%7D+%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D++%2B+%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B44%7D+%7B%5Csum%5Climits_%7Bn+%3D+k+%2B+1%7D%5E%7B45%7D+%7Bf%5Cleft%28+%7Bk%2Cn%7D+%5Cright%29%7D+%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D++%2B+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B44%7D+%7B%5Csum%5Climits_%7Bk+%3D+n+%2B+1%7D%5E%7B45%7D+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D+%2C%5Cleft%28+%7Bf%5Cleft%28+%7B45%2Ck%7D+%5Cright%29+%3D+%5Ccos+%5Cfrac%7B%7B%5Cpi+%5Cleft%28+%7B2k+-+1%7D+%5Cright%29%7D%7D%7B2%7D+%3D+0%7D+%5Cright%29%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D++%2B+%5Csum%5Climits_%7Bk+%3D+n+%2B+1%7D%5E%7B45%7D+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B45%7D+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29%7D+%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B%5Cleft%28+%7Bf%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29+%2B+f%5Cleft%28+%7Bn%2C46+-+k%7D+%5Cright%29%7D+%5Cright%29%7D++%2B+f%5Cleft%28+%7Bn%2C23%7D+%5Cright%29%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle+%5Cleft%28+%5Cbegin%7Barray%7D%7Bl%7D+f%5Cleft%28+%7Bn%2Ck%7D+%5Cright%29+%2B+f%5Cleft%28+%7Bn%2C46+-+k%7D+%5Cright%29%5C%5C+%5Cdisplaystyle++%3D+%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%5Cpi+%7D%7B%7B90%7D%7Dn%5Cleft%28+%7B2k+-+1%7D+%5Cright%29%7D+%5Cright%29+%2B+%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%5Cpi+%7D%7B%7B90%7D%7Dn%5Cleft%28+%7B91+-+2k%7D+%5Cright%29%7D+%5Cright%29%5C%5C+%5Cdisplaystyle++%3D+2%5Ccos+%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B2%7D%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B90%7D%7D%5Cleft%28+%7B2k+-+46%7D+%5Cright%29%7D+%5Cright%29+%5Cend%7Barray%7D+%5Cright%29%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B2%5Ccos+%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B2%7D%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B90%7D%7D%5Cleft%28+%7B2k+-+46%7D+%5Cright%29%7D+%5Cright%29%7D++%2B+%5Ccos+%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B2%7D%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B45%7D+%7B%5Ccos+%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B2%7D%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B2%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B90%7D%7D%5Cleft%28+%7B2k+-+46%7D+%5Cright%29%7D+%5Cright%29%7D++%2B+1%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%5Ccos+%5Cleft%28+%7Bn%5Cpi+%7D+%5Cright%29%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B2%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B45%7D%7D%5Cleft%28+%7B2k+-+46%7D+%5Cright%29%7D+%5Cright%29%7D++%2B+1%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle++%3D+%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%7B%7B%5Cleft%28+%7B+-+1%7D+%5Cright%29%7D%5En%7D%5Cleft%28+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B2%7B%7B%5Cleft%28+%7B+-+1%7D+%5Cright%29%7D%5En%7D%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B45%7D%7D%5Cleft%28+%7B2k+-+1%7D+%5Cright%29%7D+%5Cright%29%7D++%2B+1%7D+%5Cright%29%7D+%5C%5C+%5Cdisplaystyle++%3D+2%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B%5Ccos+%5Cleft%28+%7B%5Cfrac%7B%7B%5Cpi+n%7D%7D%7B%7B45%7D%7D%5Cleft%28+%7B2k+-+1%7D+%5Cright%29%7D+%5Cright%29%7D+%7D+%5C%5C+%5Cdisplaystyle+%5Cleft%28+%7B%5Cfrac%7B%7B%5Csin+2nx%7D%7D%7B%7B%5Csin+x%7D%7D+%3D+2%5Csum%5Climits_%7Bk+%3D+1%7D%5En+%7B%5Ccos+%5Cleft%28+%7B2k+-+1%7D+%5Cright%29x%7D++%5CRightarrow+%5Cfrac%7B%7B%5Csin+44x%7D%7D%7B%7B%5Csin+x%7D%7D+%3D+2%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B22%7D+%7B%5Ccos+%5Cleft%28+%7B2k+-+1%7D+%5Cright%29x%7D+%7D+%5Cright%29%5C%5C+%5Cdisplaystyle++%3D+2%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cfrac%7B%7B44%7D%7D%7B%7B45%7D%7Dn%5Cpi+%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7Bn%5Cpi+%7D%7D%7B%7B45%7D%7D%7D%7D%7D++%3D+2%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cleft%28+%7Bn%5Cpi++-+%5Cfrac%7B%7Bn%5Cpi+%7D%7D%7B%7B45%7D%7D%7D+%5Cright%29%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7Bn%5Cpi+%7D%7D%7B%7B45%7D%7D%7D%7D%7D+%5C%5C+%5Cdisplaystyle++%3D+2%5Csum%5Climits_%7Bn+%3D+1%7D%5E%7B22%7D+%7B%7B%7B%5Cleft%28+%7B+-+1%7D+%5Cright%29%7D%5E%7Bn+%2B+1%7D%7D%7D+%5C%5C+%5Cdisplaystyle++%3D+0+%5Cend%7Barray%7D%5C%5C)

这就得到了![](https://www.zhihu.com/equation?tex=+%5Cdisplaystyle+%5Csum%5Climits_%7Bk+%3D+1%7D%5E%7B90%7D+%7B%5Cfrac%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+%7Bk%5E2%7D%7D%7D%7B%7B180%7D%7D%7D%7D%7B%7B%5Csin+%5Cfrac%7B%7B%5Cpi+k%7D%7D%7B%7B180%7D%7D%7D%7D%7D++%3D+45%5C%5C)

> 你看，是不是高一期末考试题水平？考察必修一课本中的三角函数基本公式。

## 方法二

![](https://pic1.zhimg.com/v2-5c2d4b9e2b5b97f5fac557c0c85be60e_r.jpg)

![](https://pic2.zhimg.com/v2-42bbe6db5c74dc4451d4ebdd483cff3d_r.jpg)

![](https://pic3.zhimg.com/v2-6493639c687c675a2d4962fbc6e8e088_r.jpg)

> 这个方法看起来好像简短，实际上可不好想，我们答疑老师想出来这个解法，用了很久很久......可比前面我的方法一要难注意到多了。
> 单位根是处理三角函数求和/求乘积问题的一大神器，因为转为单位根后，通常就能用等比数列求和化简，而且单位根写起来，结构也比用三角函数要清晰，方便观察和进一步处理。

下面来看这类问题的一个推广

## 推广

![](https://pic3.zhimg.com/v2-01c1297e39d3042fbf74b77518d1a4bc_r.jpg)

其实出现这样“奇怪”的结果完全是情理之中，从我的方法一种就能看出来，因为方法一中，求和上标最开始本来是![](https://www.zhihu.com/equation?tex=90)，但是到最后化简的时候，不仅出现了![](https://www.zhihu.com/equation?tex=45)，还出现了![](https://www.zhihu.com/equation?tex=22)，这就说明我们应该以求和上标![](https://www.zhihu.com/equation?tex=%5Cmod+4)进行分类，所以出现这样的两个取整号以及分母![](https://www.zhihu.com/equation?tex=4)，就丝毫不奇怪了

我的方法一可以直接迁移过来，解决这个推广命题，不再重复写了

## 图片版（法一）

为了方便阅读，贴一下方法一的图片版解析（转发分享请注明出处！！！By ：数海钓鱼，作者柯西永远爱你）

![](https://picx.zhimg.com/v2-91fb0d485b3c630e29c09d07912e5ba1_r.jpg)

# 一段绳子，任意切n刀，切成n+1段绳子。问这些绳子能组成n+1边形的概率？
[](https://www.zhihu.com/question/25408010/answer/30818853)

我来给一个简洁一点的证明吧。第一名

[@曾加](https://www.zhihu.com/people/184d63c15edb58b42e0a02628945fa76)

的答案是正确的，但是我看了好几遍才看懂。。。

[@简言](https://www.zhihu.com/people/2ce7800688141a3e758ca98d18c652f4)

的答案我认为是错误的。

首先要把这个题目等价成：

给一个圆环状的绳子，切n+1刀，每个切口都是均匀分布，问每一段都小于1/2圆周的概率。

因为第一刀不管切在哪里，都会把绳子切成一条，余下的部分显然等价。

然后我们求至少有一段大于1/2圆周的概率。我们用![](https://www.zhihu.com/equation?tex=A_i)表示最长的一段绳子大于1/2圆周，并且右端点恰好是第i刀这个事件。那![](https://www.zhihu.com/equation?tex=A_i)发生的概率是![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B2%5En%7D)。因为不管第i刀切在哪，余下的那些刀一定要落在这一刀往右的半个圆周内，并且反过来也成立。

然后我们知道![](https://www.zhihu.com/equation?tex=A_1),![](https://www.zhihu.com/equation?tex=A_2),……,![](https://www.zhihu.com/equation?tex=A_%7Bn%2B1%7D)之间是互斥的，概率都是![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B2%5En%7D)，那总的概率就是![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bn%2B1%7D%7B2%5En%7D)。

再反过来，题目的答案就是![](https://www.zhihu.com/equation?tex=1-%5Cfrac%7Bn%2B1%7D%7B2%5En%7D)

# 数学装逼神器——高端三角恒等变换
[](https://zhuanlan.zhihu.com/p/161360664)

我们先来看几个式子：

![](https://www.zhihu.com/equation?tex=%5Ctan%5E810%5E%5Ccirc%2B%5Ctan%5E850%5E%5Ccirc%2B%5Ctan%5E870%5E%5Ccirc%3D3251)

![](https://www.zhihu.com/equation?tex=%5Csin%5E8%5Cfrac%5Cpi7%2B%5Csin%5E8%5Cfrac%7B2%5Cpi%7D7%2B%5Csin%5E8%5Cfrac%7B3%5Cpi%7D7%3D%5Cfrac%7B245%7D%7B256%7D)

![](https://www.zhihu.com/equation?tex=%5Ctan%5E21%5E%5Ccirc%2B%5Ctan%5E22%5E%5Ccirc%2B%5Ctan%5E23%5E%5Ccirc%2B...%2B%5Ctan%5E289%5E%5Ccirc%3D%5Cfrac%7B15931%7D%7B3%7D)

![](https://www.zhihu.com/equation?tex=%5Csec%5E4%5Cfrac%7B%5Cpi%7D%7B11%7D%2B%5Csec%5E4%5Cfrac%7B2%5Cpi%7D%7B11%7D%2B%5Csec%5E4%5Cfrac%7B3%5Cpi%7D%7B11%7D%2B%5Csec%5E4%5Cfrac%7B4%5Cpi%7D%7B11%7D%2B%5Csec%5E4%5Cfrac%7B5%5Cpi%7D%7B11%7D%3D2480)

……

我第一次见到它们时的反应是这样：

![](https://pic1.zhimg.com/v2-f13bf15618a0ac8c83bc3b04cff047a6_r.jpg)

![](https://pica.zhimg.com/v2-d37d3a13816e8aebf3e126b1c51084a0_1440w.jpeg)

不过它们确确实实激发了我的好奇心，最终导致了这篇文章的诞生……

（收藏别忘点赞哦~   (๑>◡<๑)

## —— sin ——

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B2%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2n%2B1%7D4)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B4%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B6n%2B3%7D%7B16%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B6%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B10n%2B5%7D%7B32%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B8%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B70n%2B35%7D%7B256%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B2%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7Bn-1%7D%7B2%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B4%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B3n-4%7D%7B8%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B6%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B5n-8%7D%7B16%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B8%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B35n-64%7D%7B128%7D)




证明：

由正弦的降幂公式

![](https://www.zhihu.com/equation?tex=%5Csin%5E%7B2r%7Dx+%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft+%28+2r-2k+%5Cright+%29x+%2B%5Cfrac%7B1%7D%7B4%5E%7Br%7D%7D%7B2r%5Cchoose+r%7D)

可得

![](https://www.zhihu.com/equation?tex=%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D+%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%5D+%2B%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D)

![](https://www.zhihu.com/equation?tex=%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D+%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%5Cright%5D+%2B%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D)

又由余弦的基本等差求和公式：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%7B%5Ccos+2mx%7D%3D%5Cfrac%7B%5Csin%282n%2B1%29x%7D%7B2%5Csin+x%7D-%5Cfrac12)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%7B%5Ccos+2mx%7D%3D%5Cfrac%7B%5Csin%282n-1%29x%7D%7B2%5Csin+x%7D-%5Cfrac12)

可得

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%5D+%3D%5Cfrac%7B%5Csin%5Cdfrac%7B%282r-2k%29%5Cpi%7D2%7D%7B2%5Csin%5Cdfrac%7B%282r-2k%29%5Cpi%7D%7B2%282n%2B1%29%7D%7D-%5Cfrac12%3D-%5Cfrac12)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%5Cright%5D+%3D%5Cfrac%7B%5Csin%5Cdfrac%7B%282r-2k%29%282n-1%29%5Cpi%7D%7B4n%7D%7D%7B2%5Csin%5Cdfrac%7B%282r-2k%29%5Cpi%7D%7B4n%7D%7D-%5Cfrac12%3D%5Cfrac12%5Cleft%28%28-1%29%5E%7Br-k%2B1%7D-1%5Cright%29)

所以

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B1%7D%7B4%5Er%7D%5Cleft%5B%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%2B1%7D%7B2r%5Cchoose+k%7D%2B%7B2r%5Cchoose+r%7Dn%5Cright%5D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D+%3D%5Cfrac%7B1%7D%7B4%5E%7Br%7D%7D%5Cleft%5B%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%7D%7B2r%5Cchoose+k%7D%5Cleft%28%28-1%29%5E%7Br-k%2B1%7D-1%5Cright%29+%2B%7B2r%5Cchoose+r%7D%28n-1%29%5Cright%5D)

进一步化简：

利用公式![](https://www.zhihu.com/equation?tex=%7Bn+%5Cchoose+k%7D%3D%7Bn-1%5Cchoose+k%7D%2B%7Bn-1%5Cchoose+k-1%7D)可得

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%2B1%7D%7B2r%5Cchoose+k%7D)

![](https://www.zhihu.com/equation?tex=%3D%28-1%29%5E%7Br%2B1%7D%2B%5Csum_%7Bk%3D1%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2B1%2Bk%7D%5Cleft%5B%7B2r-1%5Cchoose+k%7D%2B%7B2r-1%5Cchoose+k-1%7D%5Cright%5D)

![](https://www.zhihu.com/equation?tex=%3D+%28-1%29%5E%7Br%2B1%7D%2B%5Csum_%7Bk%3D1%7D%5E%7Br-1%7D%5Cleft%5B%28-1%29%5E%7Br%2B1%2Bk%7D%7B2r-1%5Cchoose+k%7D-%28-1%29%5E%7Br%2B1%2Bk-1%7D%7B2r-1%5Cchoose+k-1%7D%5Cright%5D)

![](https://www.zhihu.com/equation?tex=%3D%28-1%29%5E%7Br-1%7D-%28-1%29%5E%7Br-1%7D%2B%7B2r-1%5Cchoose+r-1%7D+%3D%5Cfrac%7B%282r-1%29%21%7D%7B%28r-1%29%21r%21%7D)

![](https://www.zhihu.com/equation?tex=%3D%5Cfrac%7Br%21%282r-1%29%21%7D%7B%28r-1%29%21%282r%29%21%7D%5Ccdot%5Cfrac%7B%282r%29%21%7D%7B%28r%21%29%5E2%7D%3D%5Cfrac12%7B2r%5Cchoose+r%7D+)

又有

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%3D%5Cfrac12%5Cleft%5B%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%2B%5Csum_%7Bk%3Dr%2B1%7D%5E%7B2r%7D%7B2r%5Cchoose+k%7D%5Cright%5D)

![](https://www.zhihu.com/equation?tex=%3D%5Cfrac12%5Cleft%5B%5Csum_%7Bk%3D0%7D%5E%7B2r%7D%7B2r%5Cchoose+k%7D-%7B2r%5Cchoose+r%7D%5Cright%5D%3D%5Cfrac124%5Er-%5Cfrac12%7B2r%5Cchoose+r%7D)

所以

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D%28n%2B%5Cfrac12%29%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac1%7B4%5Er%7D%7B2r%5Cchoose+r%7Dn-%5Cfrac12%7D)




## —— cos ——

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B2%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2n-1%7D%7B4%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B4%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B6n-5%7D%7B16%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B6%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B10n-11%7D%7B32%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B8%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B70n-93%7D%7B256%7D)


![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B2%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7Bn-1%7D%7B2%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B4%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B3n-4%7D%7B8%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B6%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B5n-8%7D%7B16%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B8%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B35n-64%7D%7B128%7D)


证明：

由余弦的降幂公式

![](https://www.zhihu.com/equation?tex=%5Ccos%5E%7B2r%7Dx+%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft+%28+2r-2k+%5Cright+%29x+%2B%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D)

可得

![](https://www.zhihu.com/equation?tex=%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%5D+%2B%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D+)

![](https://www.zhihu.com/equation?tex=%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B1%7D%7B2%5E%7B2r-1%7D%7D%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%5Cright%5D+%2B%5Cfrac%7B1%7D%7B4%5Er%7D%7B2r%5Cchoose+r%7D+)

而我们已知道

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%5D+%3D-%5Cfrac12)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5Cleft%5B%5Cleft+%28+2r-2k+%5Cright+%29%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%5Cright%5D+%3D%5Cfrac12%5Cleft%28%28-1%29%5E%7Br-k%2B1%7D-1%5Cright%29)

所以

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B1%7D%7B4%5E%7Br%7D%7D%5Cleft%5B%7B2r%5Cchoose+r%7Dn-%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D+%5Cright%5D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B1%7D%7B4%5E%7Br%7D%7D%5Cleft%5B%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%5Cleft%28%28-1%29%5E%7Br-k%2B1%7D-1%5Cright%29+%2B%7B2r%5Cchoose+r%7D%28n-1%29+%5Cright%5D)

我们还知道：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%28-1%29%5E%7Br%2Bk%2B1%7D%7B2r%5Cchoose+k%7D%3D%5Cfrac12%7B2r%5Cchoose+r%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5E%7Br-1%7D%7B2r%5Cchoose+k%7D%3D%5Cfrac124%5Er-%5Cfrac12%7B2r%5Cchoose+r%7D)

代入可得：

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B1%7D%7B4%5Er%7D+%7B%7B2r%5Cchoose+r%7D%28n%2B%5Cfrac12%29%7D-%5Cfrac12%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac1%7B4%5Er%7D%7B2r%5Cchoose+r%7Dn-%5Cfrac12%7D)

可以发现![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D)，不难由级数的“区间再现”![](https://www.zhihu.com/equation?tex=%5Csum_%7Bn%3Da%7D%5Ebf%28n%29%5Crightarrow%5Csum_%7Bn%3Da%7D%5Ebf%28a%2Bb-n%29)验证。

我们如果将![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D)与![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D)相减，便能得到这个有趣的公式：

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Csum_%7Bm%3D1%7D%5En%5Csin%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D-%5Csum_%7Bm%3D1%7D%5En%5Ccos%5E%7B2r%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D+%3D%5Cfrac12%7D)




## —— tan ——

正切就比较猛了：


![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D2n%5E2%2Bn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn%7D%5Ctan%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B8%7D%7B3%7Dn%5E%7B4%7D%2B%5Cfrac%7B16%7D%7B3%7Dn%5E%7B3%7D%2B%5Cfrac%7B4%7D%7B3%7Dn%5E%7B2%7D-%5Cfrac%7B1%7D%7B3%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn%7D%5Ctan%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B64%7D%7B15%7Dn%5E%7B6%7D%2B%5Cfrac%7B64%7D%7B5%7Dn%5E%7B5%7D%2B%5Cfrac%7B32%7D%7B3%7Dn%5E%7B4%7D-%5Cfrac%7B14%7D%7B15%7Dn%5E%7B2%7D%2B%5Cfrac%7B1%7D%7B5%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn%7D%5Ctan%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2176%7D%7B315%7Dn%5E%7B8%7D%2B%5Cfrac%7B8704%7D%7B315%7Dn%5E%7B7%7D%2B%5Cfrac%7B1664%7D%7B45%7Dn%5E%7B6%7D%2B%5Cfrac%7B128%7D%7B9%7Dn%5E%7B5%7D-%5Cfrac%7B208%7D%7B45%7Dn%5E%7B4%7D-%5Cfrac%7B32%7D%7B45%7Dn%5E%7B3%7D%2B%5Cfrac%7B232%7D%7B315%7Dn%5E%7B2%7D-%5Cfrac%7B1%7D%7B7%7Dn)




![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-n%2B%5Cfrac%7B1%7D%7B3%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D-%5Cfrac%7B8%7D%7B9%7Dn%5E%7B2%7D%2Bn-%5Cfrac%7B13%7D%7B45%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D-%5Cfrac%7B16%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B46%7D%7B45%7Dn%5E%7B2%7D-n%2B%5Cfrac%7B251%7D%7B945%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D-%5Cfrac%7B512%7D%7B2835%7Dn%5E%7B6%7D%2B%5Cfrac%7B352%7D%7B675%7Dn%5E%7B4%7D-%5Cfrac%7B352%7D%7B315%7Dn%5E%7B2%7D%2Bn-%5Cfrac%7B3551%7D%7B14175%7D)

证明：

> **Lemma ：**
> 若![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5Ena_kx%5E%7Bn-k%7D%3D%5Cprod_%7Bk%3D1%7D%5En%28x%2Bb_k%29)
> 设![](https://www.zhihu.com/equation?tex=S_k%3D%5Csum_%7Bm%3D1%7D%5Enb%5Ek_m)
> 则![](https://www.zhihu.com/equation?tex=S_1%3Da_1),![](https://www.zhihu.com/equation?tex=S_j%3D%5Csum_%7Bk%3D1%7D%5E%7Bj-1%7D%28-1%29%5E%7Bk%2B1%7Da_kS_%7Bj-k%7D%2B%28-1%29%5E%7Bj%2B1%7Dja_j)
> **Proof ：**
> The proof is left as an exercise.

先证第一堆公式。

由宇宙第一的欧拉公式![](https://www.zhihu.com/equation?tex=e%5E%7Bi%5Ctheta%7D%3D%5Ccos%5Ctheta%2Bi+%5Csin%5Ctheta)与欧拉恒等式![](https://www.zhihu.com/equation?tex=e%5E%7Bi%5Cpi%7D%2B1%3D0)可得：

![](https://www.zhihu.com/equation?tex=%28-1%29%5Em%3De%5E%7Bim%5Cpi%7D+%3D%5Cleft%28e%5E%7Bi%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%7D%5Cright%29%5E%7B2n%2B1%7D)

![](https://www.zhihu.com/equation?tex=%3D%5Cleft%28%5Ccos%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%2Bi+%5Csin%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7B2n%2B1%7D)

![](https://www.zhihu.com/equation?tex=%3D%5Csum_%7Bk%3D0%7D%5E%7B2n%2B1%7D%7B2n%2B1%5Cchoose+k%7D%5Ccos%5Ek%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cleft%28i%5Csin%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7B2n-k%2B1%7D+)

两端取虚部并同除![](https://www.zhihu.com/equation?tex=%5Ccos%5E%7B2n%2B1%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D)得：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%28-%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bn-k%7D%3D0)

显然![](https://www.zhihu.com/equation?tex=-%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D~%2C~1%5Cleq+m%5Cleq+n)是多项式![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7Dx%5E%7Bn-k%7D)的全部根，所以

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7Dx%5E%7Bn-k%7D%3DC%5Cprod_%7Bk%3D1%7D%5En%5Cleft%28x%2B%5Ctan%5E2%5Cfrac%7Bk%5Cpi%7D%7B2n%2B1%7D%5Cright%29)

比较![](https://www.zhihu.com/equation?tex=n)次项系数可得![](https://www.zhihu.com/equation?tex=C%3D1)，于是

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7Dx%5E%7Bn-k%7D%3D%5Cprod_%7Bk%3D1%7D%5En%5Cleft%28x%2B%5Ctan%5E2%5Cfrac%7Bk%5Cpi%7D%7B2n%2B1%7D%5Cright%29)

令![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_k%3D%5Csum_%7Bm%3D1%7D%5En%5Ctan%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%7D)

由**Lemma**可得：

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_1%3D%7B2n%2B1%5Cchoose+2%7D%3D2n%5E2%2Bn%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_j%3D%5Csum_%7Bk%3D1%7D%5E%7Bj-1%7D%28-1%29%5E%7Bk%2B1%7D%7B2n%2B1%5Cchoose2k%7DS_%7Bj-k%7D%2B%28-1%29%5E%7Bj%2B1%7Dj%7B2n%2B1%5Cchoose2j%7D%7D)

然后不停地套套套就行了。

至于第二堆公式，方法类似，**留做习题**。

结论是这个：

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_k%3D%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_1%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-n%2B%5Cfrac%7B1%7D%7B3%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_j%3D%5Cfrac1%7B2n%7D%5Cleft%5B%5Csum_%7Bk%3D1%7D%5E%7Bj-1%7D%28-1%29%5E%7Bk%2B1%7D%7B2n%5Cchoose2k%2B1%7DS_%7Bj-k%7D%2B%28-1%29%5E%7Bj%2B1%7Dj%7B2n%5Cchoose2j%2B1%7D%5Cright%5D%7D)




## —— cot ——

余切跟正切类似：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccot%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-%5Cfrac%7B1%7D%7B3%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccot%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B16%7D%7B45%7Dn%5E%7B3%7D-%5Cfrac%7B28%7D%7B45%7Dn%5E%7B2%7D%2B%5Cfrac%7B1%7D%7B5%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccot%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D%2B%5Cfrac%7B64%7D%7B315%7Dn%5E%7B5%7D-%5Cfrac%7B32%7D%7B315%7Dn%5E%7B4%7D-%5Cfrac%7B512%7D%7B945%7Dn%5E%7B3%7D%2B%5Cfrac%7B58%7D%7B105%7Dn%5E%7B2%7D-%5Cfrac%7B1%7D%7B7%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccot%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D%2B%5Cfrac%7B512%7D%7B4725%7Dn%5E%7B7%7D%2B%5Cfrac%7B128%7D%7B14175%7Dn%5E%7B6%7D-%5Cfrac%7B1664%7D%7B4725%7Dn%5E%7B5%7D-%5Cfrac%7B176%7D%7B4725%7Dn%5E%7B4%7D%2B%5Cfrac%7B9056%7D%7B14175%7Dn%5E%7B3%7D-%5Cfrac%7B776%7D%7B1575%7Dn%5E%7B2%7D%2B%5Cfrac%7B1%7D%7B9%7Dn)




![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-n%2B%5Cfrac%7B1%7D%7B3%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D-%5Cfrac%7B8%7D%7B9%7Dn%5E%7B2%7D%2Bn-%5Cfrac%7B13%7D%7B45%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D-%5Cfrac%7B16%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B46%7D%7B45%7Dn%5E%7B2%7D-n%2B%5Cfrac%7B251%7D%7B945%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D-%5Cfrac%7B512%7D%7B2835%7Dn%5E%7B6%7D%2B%5Cfrac%7B352%7D%7B675%7Dn%5E%7B4%7D-%5Cfrac%7B352%7D%7B315%7Dn%5E%7B2%7D%2Bn-%5Cfrac%7B3551%7D%7B14175%7D)




它的证明方法跟正切的那一堆的非常像，不再赘述。

不过有另一种巧妙的方法：

我们已知道

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%28-%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bn-k%7D%3D0)

两端同除![](https://www.zhihu.com/equation?tex=-%5Ctan%5E%7B2n%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D)得：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%28-%5Ccot%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bk%7D%3D0)

“区间再现”：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%2B1%7D%5Cleft%28-%5Ccot%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bn-k%7D%3D0)

然后同样的操作得出：

![](https://www.zhihu.com/equation?tex=%5Cfrac1%7B2n%2B1%7D%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%2B1%7Dx%5E%7Bn-k%7D%3D%5Cprod_%7Bk%3D1%7D%5E%7Bn%7D%5Cleft%28x%2B%5Ccot%5E2%5Cfrac%7Bk%5Cpi%7D%7B2n%2B1%7D%5Cright%29)

令![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_k%3D%5Csum_%7Bm%3D1%7D%5En%5Ccot%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%7D)

则![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_1%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-%5Cfrac%7B1%7D%7B3%7Dn%7D)

![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7BS_j%3D%5Cfrac1%7B2n%2B1%7D%5Cleft%5B%5Csum_%7Bk%3D1%7D%5E%7Bj-1%7D%28-1%29%5E%7Bk%2B1%7D%7B2n%2B1%5Cchoose2k%2B1%7DS_%7Bj-k%7D%2B%28-1%29%5E%7Bj%2B1%7Dj%7B2n%2B1%5Cchoose2j%2B1%7D%5Cright%5D%7D)

至于第二堆，不难证明：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D)




## —— sec ——

依然很猛：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csec%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D2n%5E2%2B2n)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csec%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac83n%5E%7B4%7D%2B%5Cfrac%7B16%7D3n%5E%7B3%7D%2B%5Cfrac%7B16%7D3n%5E%7B2%7D%2B%5Cfrac83n)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csec%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B64%7D%7B15%7Dn%5E%7B6%7D%2B%5Cfrac%7B64%7D%7B5%7Dn%5E%7B5%7D%2B%5Cfrac%7B56%7D%7B3%7Dn%5E%7B4%7D%2B16n%5E%7B3%7D%2B%5Cfrac%7B136%7D%7B15%7Dn%5E%7B2%7D%2B%5Cfrac%7B16%7D%7B5%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Csec%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2176%7D%7B315%7Dn%5E%7B8%7D%2B%5Cfrac%7B8704%7D%7B315%7Dn%5E%7B7%7D%2B%5Cfrac%7B2432%7D%7B45%7Dn%5E%7B6%7D%2B%5Cfrac%7B2944%7D%7B45%7Dn%5E%7B5%7D%2B%5Cfrac%7B2432%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B1408%7D%7B45%7Dn%5E%7B3%7D%2B%5Cfrac%7B4096%7D%7B315%7Dn%5E%7B2%7D%2B%5Cfrac%7B128%7D%7B35%7Dn)




![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-%5Cfrac%7B2%7D%7B3%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B4%7D%7B9%7Dn%5E%7B2%7D-%5Cfrac%7B28%7D%7B45%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D%2B%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B16%7D%7B45%7Dn%5E%7B2%7D-%5Cfrac%7B568%7D%7B945%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D%2B%5Cfrac%7B256%7D%7B2835%7Dn%5E%7B6%7D%2B%5Cfrac%7B112%7D%7B675%7Dn%5E%7B4%7D%2B%5Cfrac%7B32%7D%7B105%7Dn%5E%7B2%7D-%5Cfrac%7B8336%7D%7B14175%7D)




实际上，求出正切那一堆后，就能通过![](https://www.zhihu.com/equation?tex=%5Csec%5E2%5Ctheta%3D1%2B%5Ctan%5E2%5Ctheta)求出这些了，过程略。




## —— csc ——

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccsc%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D%2B%5Cfrac%7B2%7D%7B3%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccsc%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B16%7D%7B45%7Dn%5E%7B3%7D%2B%5Cfrac%7B32%7D%7B45%7Dn%5E%7B2%7D%2B%5Cfrac%7B8%7D%7B15%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccsc%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D%2B%5Cfrac%7B64%7D%7B315%7Dn%5E%7B5%7D%2B%5Cfrac%7B136%7D%7B315%7Dn%5E%7B4%7D%2B%5Cfrac%7B496%7D%7B945%7Dn%5E%7B3%7D%2B%5Cfrac%7B24%7D%7B35%7Dn%5E%7B2%7D%2B%5Cfrac%7B16%7D%7B35%7Dn)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5En%5Ccsc%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D%2B%5Cfrac%7B512%7D%7B4725%7Dn%5E%7B7%7D%2B%5Cfrac%7B3968%7D%7B14175%7Dn%5E%7B6%7D%2B%5Cfrac%7B2176%7D%7B4725%7Dn%5E%7B5%7D%2B%5Cfrac%7B2944%7D%7B4725%7Dn%5E%7B4%7D%2B%5Cfrac%7B8576%7D%7B14175%7Dn%5E%7B3%7D%2B%5Cfrac%7B1024%7D%7B1575%7Dn%5E%7B2%7D%2B%5Cfrac%7B128%7D%7B315%7Dn)




![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B2%7D%7B3%7Dn%5E%7B2%7D-%5Cfrac%7B2%7D%7B3%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5E4%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B4%7D%7B9%7Dn%5E%7B2%7D-%5Cfrac%7B28%7D%7B45%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5E6%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B64%7D%7B945%7Dn%5E%7B6%7D%2B%5Cfrac%7B8%7D%7B45%7Dn%5E%7B4%7D%2B%5Cfrac%7B16%7D%7B45%7Dn%5E%7B2%7D-%5Cfrac%7B568%7D%7B945%7D)

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5E8%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B128%7D%7B4725%7Dn%5E%7B8%7D%2B%5Cfrac%7B256%7D%7B2835%7Dn%5E%7B6%7D%2B%5Cfrac%7B112%7D%7B675%7Dn%5E%7B4%7D%2B%5Cfrac%7B32%7D%7B105%7Dn%5E%7B2%7D-%5Cfrac%7B8336%7D%7B14175%7D)

同样，这些式子可用![](https://www.zhihu.com/equation?tex=%5Ccsc%5E2%5Ctheta%3D1%2B%5Ccot%5E2%5Ctheta)推出。

可以发现![](https://www.zhihu.com/equation?tex=%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Csum_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5E%7B2k%7D%5Cfrac%7Bm%5Cpi%7D%7B2n%7D)




![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Csin%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B%5Csqrt%7B2n%2B1%7D%7D%7B2%5En%7D)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ccos%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac1%7B2%5En%7D)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ctan%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Csqrt%7B2n%2B1%7D)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ccot%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac1%7B%5Csqrt%7B2n%2B1%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Csec%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D2%5En)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ccsc%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Cfrac%7B2%5En%7D%7B%5Csqrt%7B2n%2B1%7D%7D)




![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csin%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccos%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B%5Csqrt+n%7D%7B2%5E%7Bn-1%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ctan%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccot%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D1)

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Csec%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cprod_%7Bm%3D1%7D%5E%7Bn-1%7D%5Ccsc%5Cfrac%7Bm%5Cpi%7D%7B2n%7D%3D%5Cfrac%7B2%5E%7Bn-1%7D%7D%7B%5Csqrt+n%7D)

证明：

我们前面已得出![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7Dx%5E%7Bn-k%7D%3D%5Cprod_%7Bk%3D1%7D%5En%5Cleft%28x%2B%5Ctan%5E2%5Cfrac%7Bk%5Cpi%7D%7B2n%2B1%7D%5Cright%29)

比较常数项可得：

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%7B2n%2B1%5Cchoose+2n%7D%3D2n%2B1)

即![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Ctan%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D%5Csqrt%7B2n%2B1%7D)

为了求出其他的乘积，我们再来看看这个式子：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%28-%5Ctan%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bn-k%7D%3D0)

稍作变形：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%281-%5Csec%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%5Cright%29%5E%7Bn-k%7D%3D0)

显然![](https://www.zhihu.com/equation?tex=-%5Csec%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D~~%281%5Cleq+m%5Cleq+n%29)是多项式![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%281%2Bx%5Cright%29%5E%7Bn-k%7D%3D0)的全部根，且多项式中n次项系数为1，所以

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%281%2Bx%5Cright%29%5E%7Bn-k%7D%3D%5Cprod_%7Bk%3D1%7D%5En%5Cleft%28x%2B%5Csec%5E2%5Cfrac%7Bk%5Cpi%7D%7B2n%2B1%7D%5Cright%29)

将左端中的![](https://www.zhihu.com/equation?tex=%281%2Bx%29%5E%7Bn-k%7D)展开：

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose+2k%7D%5Cleft%281%2Bx%5Cright%29%5E%7Bn-k%7D%3D%5Csum_%7Bk%3D0%7D%5En%5Csum_%7Bm%3D0%7D%5E%7Bn-k%7D%7B2n%2B1%5Cchoose2k%7D%7Bn-k%5Cchoose+m%7Dx%5E%7Bn-%28k%2Bm%29%7D)

现在考察它的常数项：此时![](https://www.zhihu.com/equation?tex=k%2Bm%3Dn)，即![](https://www.zhihu.com/equation?tex=m%3Dn-k)，代入可得它的常数项为：

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%7D%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7D%7Bn-k%5Cchoose+n-k%7D%26%3D%5Csum_%7Bk%3D0%7D%5En%7B2n%2B1%5Cchoose2k%7D%5C%5C%26+%3D%5Cfrac12%5Csum_%7Bk%3D0%7D%5E%7B2n%2B1%7D%281%2B%28-1%29%5Ek%29%7B2n%2B1%5Cchoose+k%7D%5C%5C%26+%3D%5Cfrac12%281%2B1%29%5E%7B2n%2B1%7D%2B%5Cfrac12%281-1%29%5E%7B2n%2B1%7D%5C%5C%26+%3D4%5En+%5Cend%7Balign%7D)

通过比较最初式子两端中的常数项可得：

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Csec%5E2%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D4%5En)

所以

![](https://www.zhihu.com/equation?tex=%5Cprod_%7Bm%3D1%7D%5En%5Csec%5Cfrac%7Bm%5Cpi%7D%7B2n%2B1%7D%3D2%5En)

通过现在已求出的两个乘积可推出全部第一堆中的乘积。

至于第二堆乘积，**留作习题**。




## —— 其他 ——

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%5Cpi%7B11%7D%2B4%5Csin%5Cfrac%7B3%5Cpi%7D%7B11%7D%3D%5Csqrt%7B11%7D)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B2%5Cpi%7D%7B11%7D-4%5Csin%5Cfrac%7B5%5Cpi%7D%7B11%7D%3D-%5Csqrt%7B11%7D)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B3%5Cpi%7D%7B11%7D%2B4%5Csin%5Cfrac%7B2%5Cpi%7D%7B11%7D%3D%5Csqrt%7B11%7D)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B4%5Cpi%7D%7B11%7D%2B4%5Csin%5Cfrac%7B%5Cpi%7D%7B11%7D%3D%5Csqrt%7B11%7D)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B5%5Cpi%7D%7B11%7D-4%5Csin%5Cfrac%7B4%5Cpi%7D%7B11%7D%3D%5Csqrt%7B11%7D)




![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B%5Cpi%7D9%2B4%5Csin%5Cfrac%7B%5Cpi%7D9%3D%5Csqrt3)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B2%5Cpi%7D9-4%5Csin%5Cfrac%7B2%5Cpi%7D9%3D-%5Csqrt3)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B4%5Cpi%7D9-4%5Csin%5Cfrac%7B4%5Cpi%7D9%3D%5Csqrt3)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B6%5Cpi%7D9%2B4%5Csin%5Cfrac%7B6%5Cpi%7D9%3D%5Csqrt3)




![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B%5Cpi%7D7-4%5Csin%5Cfrac%7B2%5Cpi%7D7%3D-%5Csqrt7)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B2%5Cpi%7D7-4%5Csin%5Cfrac%7B3%5Cpi%7D7%3D-%5Csqrt7)

![](https://www.zhihu.com/equation?tex=%5Ctan%5Cfrac%7B3%5Cpi%7D7-4%5Csin%5Cfrac%7B%5Cpi%7D7%3D%5Csqrt7)

这些的证明过程参见：

[https://pan.baidu.com/disk/pdfview?path=%2F0709.3755v1.pdf](https://link.zhihu.com/?target=https%3A//pan.baidu.com/disk/pdfview%3Fpath%3D%252F0709.3755v1.pdf)

最后，再留个小习题

证明文章开头第一个式子：![](https://www.zhihu.com/equation?tex=%5Ctan%5E810%5E%5Ccirc%2B%5Ctan%5E850%5E%5Ccirc%2B%5Ctan%5E870%5E%5Ccirc%3D3251)

![](https://pic3.zhimg.com/v2-f6ae0019d2898afb75b9cde21918c03c_1440w.jpg)

# “通项杯”试题解析
[](https://zhuanlan.zhihu.com/p/408546712)

这是一份迟来的解析，因为我真的好懒hhh

**先看看题目（最近网上传的挺火的，试卷来源应该是贴吧，至于里面题目的具体来源可以前往贴吧查看）**

![](https://pic3.zhimg.com/v2-011ac8df9cfd26d1a1559a61c493bd4a_r.jpg)

可能细心的朋友会发现下面这份解析似乎和公众号“数海钓鱼”的两篇推文有着99.999...的相似度，那是因为实际上我就是数海钓鱼公众号的创立者**（快来关注我们吧球球了）**，只是打算在这里氵一篇文章而已（）

另外呢，[@ljh25252](https://www.zhihu.com/people/db546a4bd8d72975c3cbbe56be3b3e2f)巨佬已经在前几天发布了他的解析，恰好本人最近开学也没什么事情做，就随便算了算，反正难度也还行，而且都可以做出来（换句话说就是没有钓鱼题）不过这个解答为本人独立完成且没有经过任何审核，所以可能存在错误

**注：一个数列的通项公式可以有多种形式，所以看到不同的通项公式时并不意味着一定有一个人做错了，当然假如确实存在错误还望指出。**

**话不多说先放解析：**

![](https://picx.zhimg.com/v2-88aaabfceff2158f57a734dde0bda29d_r.jpg)

![](https://picx.zhimg.com/v2-6eed79d1632dde16f32b524a782172df_r.jpg)

![](https://picx.zhimg.com/v2-e6b956b0adfb7e6e013b01f27346f72b_r.jpg)

![](https://pic1.zhimg.com/v2-0b538d471598ceafc95826f5bdc60828_r.jpg)

![](https://pica.zhimg.com/v2-ef39da35bd52088c906f335f0a471bea_r.jpg)

![](https://pic2.zhimg.com/v2-493c261bd5a7c1b731e92938245151a5_r.jpg)

![](https://picx.zhimg.com/v2-7a065a53ce52213a9bf91681712ea941_r.jpg)

![](https://pic3.zhimg.com/v2-079c3f98fcb4c702df33ba0de722a0ce_r.jpg)

![](https://pic4.zhimg.com/v2-2c78c38fa4565bbc180240b9c89f55cb_r.jpg)

这里面加了一些难度的评价，不同的人感觉肯定不一样，我这里的评价是统一站在高考生的角度考虑的。

这份解答其实并没有什么“妙解”“秒杀方法”，几乎都是朴素的解法或者通法，并且讲述了一些步骤或者处理方式的来龙去脉，所以会显得比较冗长。当然考试的话写出最关键的步骤就可以了。

至于[@ljh25252](https://www.zhihu.com/people/db546a4bd8d72975c3cbbe56be3b3e2f)的解析，可以查看下面的链接

[ljh25252：“通项杯”趣味解答](https://zhuanlan.zhihu.com/p/407534999)

然后再附上楼上大佬对于最后一题的妙解

![](https://pic4.zhimg.com/v2-b4d602bb93a98bcbbdeacd6e45a59727_r.jpg)

听说通项杯要出第二份试题了？很期待呀！

**最后再宣传一波“数海钓鱼”公众号，欢迎关注我们，让读者第一时间接收到网上各类阴间题的解析[doge]**

emmm封面真的懒得找图了，就随手抓了一张二次元壁纸

[]()

以上。

# 如何证明3整除4ⁿ-1（高中知识）?
[](https://www.zhihu.com/question/6865030585/answer/55469931443)

考虑首项为![](https://www.zhihu.com/equation?tex=1)公比为![](https://www.zhihu.com/equation?tex=4)的等比数列的前![](https://www.zhihu.com/equation?tex=n)项和

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%7D%7BS%7D_%7B%7Bn%7D%7D%3D1%2B4%2B4%5E%7B2%7D%2B4%5E%7B3%7D%2B...%2B4%5E%7B%7Bn%7D-1%7D%3D%7B%5Cfrac%7B4%5E%7B%7Bn%7D%7D-1%7D%7B4-1%7D%7D%3D%7B%5Cfrac%7B4%5E%7B%7Bn%7D%7D-1%7D%7B3%7D%7D+%5C%5C+%5Ctherefore~4%5E%7B%7Bn%7D%7D-1%3D3%7BS%7D_%7B%7Bn%7D%7D%5Cend%7Bequation%7D)

![](https://www.zhihu.com/equation?tex=S_n)为整数, 所以![](https://www.zhihu.com/equation?tex=4%5En-1)能被![](https://www.zhihu.com/equation?tex=3)整除.

一般的, 对于不等于![](https://www.zhihu.com/equation?tex=1)整数![](https://www.zhihu.com/equation?tex=a),![](https://www.zhihu.com/equation?tex=a-1)整除![](https://www.zhihu.com/equation?tex=a%5En-1)![](https://www.zhihu.com/equation?tex=%28n%5Cin+Z%5E%7B%2B%7D%29), 可以用多项式除法除一下没有余式, 或者用等比数列求和公式证明.

# 如何证明3整除4ⁿ-1（高中知识）?
[](https://www.zhihu.com/question/6865030585/answer/71275519174)

我也是高中生，这里提供两种解法

第一种我们可以注意到，因为:

![](https://pica.zhimg.com/v2-ba586650be7ade91df60ec638abf8551_r.jpg?source=2c26e567)

上面这个式子的证明是很显然的，这里不多赘述，所以

![](https://picx.zhimg.com/50/v2-f845d756b7f81649819f72c8ced5946e_720w.jpg?source=2c26e567)

即证。

第二种方法，就是用一些初等数论的知识

![](https://picx.zhimg.com/v2-f7306b421aedd8896e84bf85597245cf_r.jpg?source=2c26e567)

这个方法写起来会更简明一点，也可以快速的证明结论。

# 如何证明3整除4ⁿ-1（高中知识）?
[](https://www.zhihu.com/question/6865030585/answer/55903920705)

**证明**考虑用数学归纳法证明:

(1)设![](https://www.zhihu.com/equation?tex=n%3D1), 注意到![](https://www.zhihu.com/equation?tex=4-1%3D3%5Cleft.+%5Cright%7C3);

(2)设![](https://www.zhihu.com/equation?tex=n%3Dk), 若![](https://www.zhihu.com/equation?tex=%5Cleft%284%5Ek-1%5Cright%29%5Cleft.%5Cright%7C3), 则须证明![](https://www.zhihu.com/equation?tex=%5Cleft%284%5E%7Bk%2B1%7D-1%5Cright%29%5Cleft.%5Cright%7C3):![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%7D4%5E%7Bk%2B1%7D-1%26%3D4%5Ek%5Ccdot+4-1%5C%5C%26%3D4%5Ek%5Ccdot3%2B4%5Ek-1.%5Cend%7Balign%7D%5C%5C)第一项有因数![](https://www.zhihu.com/equation?tex=3), 因此一定能被![](https://www.zhihu.com/equation?tex=3)整除; 第二项和第三项之差被我们假设可以被![](https://www.zhihu.com/equation?tex=3)整除, 因此原命题成立.

![](https://www.zhihu.com/equation?tex=%5Cmathrm%7B%5Ccolor%7Bred%7D%7BQ%7Duod%5C%2C+%5Ccolor%7Bred%7D%7BE%7Drat%5C%2C+%5Ccolor%7Bred%7D%7BD%7Demonstrandum%7D)

# 如何证明3整除4ⁿ-1（高中知识）?
[](https://www.zhihu.com/question/6865030585/answer/62123789889)

在恒等式![](https://www.zhihu.com/equation?tex=x%5En-1%3D%28x-1%29%28x%5E%7Bn-1%7D%2Bx%5E%7Bn-2%7D%2B%5Ccdots%2B1%29%5C%5C)中赋值![](https://www.zhihu.com/equation?tex=x%3D4)看看。

# 这些数列通项题怎么做？
[](https://www.zhihu.com/question/490089610/answer/2152125068)

作为**第一届通项杯**试题解析的制作者，我来更新一下第二届的解析：

目前还没有做完，一方面是国庆事情不少，更重要的原因是这次的试题**难度比上次提升了好多**，大部分题都需要先思考一会儿才能有想法。所以今天先在这里发布一下**前五道题的解答**，其他的预计**国庆七天内应该可以更新完全**，至于完整解答，未来可能还会发布于知乎个人文章以及微信公众号：**数海钓鱼**，欢迎大家关注。

话不多说，下面就是解答（因全部题目为我一人**独立完成**，所以难免存在错误，如有问题还望指出）

![](https://picx.zhimg.com/v2-e5599db16f96ab18f19b37ae422bbd8d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-14720b547720eaeec6be04fa26ca8bed_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-aea06e34cc9fb52c0cbafed397ebbc87_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-fe73ca9f0ebbc7b15f9a860b2cb44921_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a4c297a00d074dbf6d8e56784b841d2c_r.jpg?source=2c26e567)

**2021.10.3晚上更新如下：7、8、9、10的解答**

![](https://pica.zhimg.com/v2-81e0769f3a90a417b5b5464750eed2ef_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-2b2b3dc9778062e24a79ce4e82cd3ce1_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a1202d7fcf4f23fa35949512099a0a3e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c23e8abda1ce7cb3faabe5d3528060ec_r.jpg?source=2c26e567)

**2021.10.5更新：第11题...好难**

![](https://picx.zhimg.com/v2-40056300530e5d18393a2f2031a989fc_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-25f7413abd6efb2c54305e32149acbd4_r.jpg?source=2c26e567)

**2021.10.6更新：第十二题和第六题...似乎简单一些**

![](https://picx.zhimg.com/v2-f55c15acdc7f2459dc49a5bdd682cf37_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-03a36d149a13b315d5057a1b464527ee_r.jpg?source=2c26e567)
