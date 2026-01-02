# life

one in the time

**Created:** 2025.06.20

**Items:** 53

---



# 人为什么会随年龄而保守? Jay哥讲数学

**Author:** Jay哥讲数学  
**Bio:** 清华数学研究生, B站账号: Jay哥讲数学  
**Avatar:** ![](https://pic1.zhimg.com/v2-2bb07090fb75c1c8a8fc0390bf9217e8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/dde64fc50f30d5a335d82e0263e86ee0  
**Published:** 2025.12.29 15:05:18  
**Updated:** 2025.12.29 15:05:18  
**Question:** https://www.zhihu.com/question/357807301  
**Question Created:** 2019.11.26 09:13:23  
**Question Updated:** 2019.11.26 09:13:23  
**Votes:** 3681  
**Comments:** 129  
**Type:** answer  

如果你去过清华大学,就会知道清华的食堂多得离谱.我刚到清华读书的时候,第一个学期几乎每周都会去一个没去过的食堂,即便如此,一个学期下来别说把所有窗口吃一遍了,还有好多食堂根本一次都没去过!

可是现在不一样了.这个学期,我基本只在两三家常去的食堂之间轮换,而且在每个食堂里也只吃固定的那几个窗口.相比刚入学的时候,我变得更保守了吗?至少在吃饭这件事上,的确如此.但我想说,这种"变保守",其实是一种理性的结果——因为探索阶段已经差不多完成,现在轮到专心收获了.

这就引出了探索和收获之间的取舍问题:我们到底应该在什么情况下探索新事物,什么情况下专注于已有的东西?在数学中这叫作"探索与收获的取舍问题(Explore/Exploit Tradeoff)".从本质上来讲,这个问题是说,你到底应该花费精力去探索新的信息,还是专注于从已有的信息中获得收获?

比如你家附近有个餐馆,你已经去过15次,其中9次的体验非常好,有6次的体验不怎么好.今晚你打算出去吃饭,是应该继续去这家熟悉的老餐馆,还是尝试一家从没去过的新餐馆呢?

类似的情形无处不在.你在一个单位工作多年,感受好坏参半.某天猎头找到你,给你推荐一个新机会,你要不要跳槽?你读过一位老作者的七本书,其中四本书写得很好,有三本不太行;还有个新作者,你只读过他两本书,其中一本比较好,一本比较差.现在两个人都出了新书,你只能选一本来读,你会选谁?

这类探索与收获问题是数学上非常难的一类问题,完全不亚于秘书问题,直到上世纪70年代才被数学家基廷斯(Gittins)解决.

当时基廷斯是牛津大学一位年轻的统计学教授,有一家医药公司找到他,请他帮忙优化药物试验.那家公司向基廷斯提出这样一个问题:已知有好几种化合物,怎么用最短的时间确定哪种化合物对疾病最有效?

基廷斯不仅完美解决了这个问题,还顺带解决了探索与收获的问题,他提出了"动态分配指数",现在人们都称之为基廷斯指数.后来别人谈起这项成就时,基廷斯谦虚地说:"这又不是费马大定理."

基廷斯的思路是,把几种化合物看成赌场里一排老虎机.每台老虎机吐钱的概率各不相同,代表不同药物的疗效.但你一开始并不知道这些概率是多少,所以你会在每台机器上都尝试一番,然后专门挑那些最可能吐钱的机器来玩.

我们还得考虑时间因素,医药公司希望尽快确定新药的疗效,因此拖得越晚,回报就越低.于是我们要给未来的收益打折扣——你应该已经想到了,这不就是上一讲我们说过的贴现率吗?在这里,贴现率就反映为未来回报的贬值速度,我们最终的目标,是让未来所有时间的折扣回报之和的期望值尽量大.

具体来说,我们考虑如下多臂老虎机游戏(multi-armed bandit).赌场里共有![](https://www.zhihu.com/equation?tex=K)台老虎机,这些老虎机你可以理解成各种不同的选项,比如不同的餐馆或者不同的工作机会.每一轮游戏,你只能选其中一台机子来玩.如果赢了,你获得一个固定回报,不妨设为![](https://www.zhihu.com/equation?tex=1);输了,回报就是![](https://www.zhihu.com/equation?tex=0).

设第![](https://www.zhihu.com/equation?tex=i)台老虎机的回报服从伯努利分布![](https://www.zhihu.com/equation?tex=%5Ctext%7BBernoulli%7D%28%5Ctheta_i%29),但是参数![](https://www.zhihu.com/equation?tex=%5Ctheta_i)未知.不过,我们给![](https://www.zhihu.com/equation?tex=%5Ctheta_i)赋予一个先验分布,它是我们对机子吐钱概率的先验信念.设![](https://www.zhihu.com/equation?tex=%5Ctheta_i)的先验分布是Beta分布

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5Ctheta_i%5Csim+%5Cmathrm%7BBeta%7D%28%5Calpha%2C%5Cbeta%29%2C%5Cquad+p_%7B%5Ctheta_i%7D%28x%29%3D%5Cfrac%7B%5CGamma%28%5Calpha%2B%5Cbeta%29%7D%7B%5CGamma%28%5Calpha%29%5CGamma%28%5Cbeta%29%7Dx%5E%7B%5Calpha-1%7D%281-x%29%5E%7B%5Cbeta-1%7D%2C%5Cquad+x%5Cin%280%2C1%29%2C+%5Cend%7Bequation%2A%7D%5C%5C)

至于为什么选择Beta分布?原因很简单:它在数学上非常方便.如果参数![](https://www.zhihu.com/equation?tex=%5Ctheta_i)的先验分布是Beta分布,那么在观察到样本数据之后,![](https://www.zhihu.com/equation?tex=+%5Ctheta_i)的后验分布依然是Beta分布(只是参数![](https://www.zhihu.com/equation?tex=%5Calpha%2C%5Cbeta)的值会发生变化).数学上就把Beta分布称为伯努利分布的共轭分布(conjugate distribution).如果你学过一点数理统计,对此应该不会陌生.

先验分布中参数![](https://www.zhihu.com/equation?tex=%28%5Calpha%2C%5Cbeta%29)的一个常见取法是![](https://www.zhihu.com/equation?tex=%281%2C1%29),也就是先验分布是![](https://www.zhihu.com/equation?tex=%280%2C1%29)上的均匀分布.这反映了我们一开始对这台老虎机的态度:既不知道它吐钱的概率大,还是不吐钱的概率大,不妨假定所有可能的吐钱概率都是等可能的.

接下来,每玩一次老虎机,它都会给我们一个"赢/输"的反馈.比如你在某台老虎机上玩了![](https://www.zhihu.com/equation?tex=10)次,其中![](https://www.zhihu.com/equation?tex=9)次都赢了,一次输了.此时你再认为这台老虎机赢和输的概率一样大就不合适了,所以你需要根据经验调整对这台机器的看法,也就是用贝叶斯公式更新信念.

一般地,如果已知第![](https://www.zhihu.com/equation?tex=i)台老虎机玩了![](https://www.zhihu.com/equation?tex=w%2Bl)次,其中赢了![](https://www.zhihu.com/equation?tex=w)次,输了![](https://www.zhihu.com/equation?tex=l)次,那么![](https://www.zhihu.com/equation?tex=%5Ctheta_i)的后验分布是:

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++p_%7B%5Ctheta_i%7D%28x%5C%2C%7C%5C%2C%28w%2Cl%29%29%3D%5Cfrac%7Bp%28%28w%2Cl%29%5C%2C%7C%5C%2C%5Ctheta_i%3Dx%29p_%7B%5Ctheta_i%7D%28x%29%7D%7B%5Cdisplaystyle%5Cint_0%5E1p%28%28w%2Cl%29%5C%2C%7C%5C%2C%5Ctheta_i%3Dt%29p_%7B%5Ctheta_i%7D%28t%29%5C%2C%5Cmathrm%7Bd%7D+t%7D%3DCx%5E%7B%5Calpha%2Bw-1%7D%281-x%29%5E%7B%5Cbeta%2Bl-1%7D%2C+%5Cend%7Bequation%2A%7D%5C%5C)

因此

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5Ctheta_i%5C%2C%7C%5C%2C%28w%2Cl%29%5Csim%5Cmathrm%7BBeta%7D%28%5Calpha%2Bw%2C%5Cbeta%2Bl%29%2C+%5Cend%7Bequation%2A%7D%5C%5C)

于是,下一次玩这台老虎机时,赢钱和空手而归的概率分别为

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++P%28X_i%3D1%5C%2C%7C%5C%2C%28w%2Cl%29%29%3D%5Cfrac%7B%5Calpha%2Bw%7D%7B%5Calpha%2B%5Cbeta%2Bw%2Bl%7D%2C%5Cquad+P%28X_i%3D0%5C%2C%7C%5C%2C%28w%2Cl%29%29%3D%5Cfrac%7B%5Cbeta%2Bl%7D%7B%5Calpha%2B%5Cbeta%2Bw%2Bl%7D.+%5Cend%7Bequation%2A%7D%5C%5C)

现在假设这个多臂老虎机游戏我们会一直玩下去,我们希望找到一个策略,使得折扣化后的收益和的期望值最大.这里的策略![](https://www.zhihu.com/equation?tex=%5Cpi),就是指玩到第![](https://www.zhihu.com/equation?tex=t)轮的时候,根据前![](https://www.zhihu.com/equation?tex=t-1)轮在各个老虎机上的输赢结果,选择一台老虎机![](https://www.zhihu.com/equation?tex=%5Cpi%28t%29).最佳策略就是

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5Cpi%5E%2A%3D%5Cunderset%7B%5Cpi%7D%7B%5Carg%5Csup%7D%5C%2CE_%5Cpi%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Cinfty%5Cdelta%5E%7Bt-1%7DX_%7B%5Cpi%28t%29%2Ct%7D%5Cright%5D%2C+%5Cend%7Bequation%2A%7D%5C%5C)

其中![](https://www.zhihu.com/equation?tex=%5Cdelta)表示贴现率,![](https://www.zhihu.com/equation?tex=+X_%7Bi%2Ct%7D)表示第![](https://www.zhihu.com/equation?tex=t)轮时选择第![](https://www.zhihu.com/equation?tex=i)台老虎机带来的随机回报.

为了找到最佳策略![](https://www.zhihu.com/equation?tex=%5Cpi),基廷斯先从一个更简单的情形入手:只考虑一台老虎机的情况.这台老虎机的回报仍然服从伯努利分布![](https://www.zhihu.com/equation?tex=%5Ctext%7BBernoulli%7D%28%5Ctheta%29),参数![](https://www.zhihu.com/equation?tex=%5Ctheta)的先验分布为![](https://www.zhihu.com/equation?tex=%5Cmathrm%7BBeta%7D%28%5Calpha%2C%5Cbeta%29).假设我们已经在这台老虎机上玩了![](https://www.zhihu.com/equation?tex=w%2Bl)局,赢了![](https://www.zhihu.com/equation?tex=w)局,输了![](https://www.zhihu.com/equation?tex=l)局.我们想知道这台老虎机未来的期望收益如果折合成稳定的现金流应该是多少?

更具体地说,假如给你另外一个选项:只要你答应再也不玩这台老虎机,那么从下一轮开始,每一轮你都可以获得一个固定回报![](https://www.zhihu.com/equation?tex=%5Clambda).那这个![](https://www.zhihu.com/equation?tex=%5Clambda)要大到什么程度,你才愿意立即放弃玩这台老虎机?

如果你暂时不想放弃玩这台老虎机的权利,而是准备再玩![](https://www.zhihu.com/equation?tex=%5Ctau)轮,那么这![](https://www.zhihu.com/equation?tex=%5Ctau)给你带来的折扣化期望收益就是

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7DX_%7Bt%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%2C+%5Cend%7Bequation%2A%7D%5C%5C)

而你因此放弃掉的获取稳定回报的折扣化收益为

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++E%5Cleft%28%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Clambda%5Cright%29%3D%5Clambda+E%5Cleft%28%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%29%2C+%5Cend%7Bequation%2A%7D%5C%5C)

之所以写成和式的期望而不是直接写和式,是因为![](https://www.zhihu.com/equation?tex=%5Ctau)也可以是随机变量,事实上它就是最优停止理论中的停时.

考虑两者比值的最大值:

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5Csup_%5Ctau%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7DX_%7Bt%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+%5Clambda+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%5D%7D%2C+%5Cend%7Bequation%2A%7D%5C%5C)

如果这个值大于![](https://www.zhihu.com/equation?tex=1),意味着存在某个停时![](https://www.zhihu.com/equation?tex=%5Ctau),在你玩了![](https://www.zhihu.com/equation?tex=%5Ctau)轮之后停下所获得的折扣化期望收益,要比一开始就选择稳定现金流方案更高.这种情况下,你当然不会立刻放弃老虎机.让你刚好愿意放弃的临界点![](https://www.zhihu.com/equation?tex=%5Clambda%5E%2A),就是让上述比值等于![](https://www.zhihu.com/equation?tex=1)的那个点,也就是

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5Clambda%5E%2A%3D%5Csup_%5Ctau%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7DX_%7Bt%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%5D%7D%2C+%5Cend%7Bequation%2A%7D%5C%5C)

这里的![](https://www.zhihu.com/equation?tex=%5Clambda%5E%2A)就被称为状态为![](https://www.zhihu.com/equation?tex=%28w%2Cl%29)的老虎机的基廷斯指数(Gittens index),记作![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29).

有了单臂老虎机的基廷斯指数,我们再回到原来的多臂老虎机问题.基廷斯发现多臂老虎机游戏有个简单到不可思议的解法——每一轮都去玩当前基廷斯指数最大的老虎机!

**基廷斯指数定理(Gittins index theorem): 记  表示到第  轮为止,在每台老虎机上赢和输的次数,那么多臂老虎机的最佳策略为**

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++%5Cpi%28t%29%3D%5Cunderset%7B1%5Cleqslant+i%5Cleqslant+K%7D%7B%5Carg%5Cmax%7D%5C%2C+G_%5Cdelta%28w_%7Bi%2Ct%7D%2Cl_%7Bi%2Ct%7D%29.+++++%5Cend%7Bequation%2A%7D%5C%5C)

在具体应用中,人们会事先把各种输赢次数的基廷斯指数计算出来,整理成一张表格.比如,假设先验分布是均匀分布![](https://www.zhihu.com/equation?tex=%5Cmathrm%7BBeta%7D%281%2C1%29),贴现率![](https://www.zhihu.com/equation?tex=%5Cdelta)分别取![](https://www.zhihu.com/equation?tex=99%5C%25)和![](https://www.zhihu.com/equation?tex=90%5C%25),我们就可以得到如下两张基廷斯指数表:

![](https://picx.zhimg.com/v2-cba3468af95a54a13a7aa5def164537f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-0c95ead6960d3380aef464d8a85a212b_r.jpg?source=2c26e567)

简单解释一下这张表的含义.比如在第一张表格中,第4列第3行对应的是![](https://www.zhihu.com/equation?tex=%283%2C2%29)这个格子,数值是![](https://www.zhihu.com/equation?tex=0.7696).这表示已知过去一共玩了5次,其中赢了3次,输了2次,那么在贴现率为![](https://www.zhihu.com/equation?tex=99%5C%25)的前提下,继续玩老虎机的折扣化价值就是![](https://www.zhihu.com/equation?tex=0.7696).

接下来我们看看基廷斯指数![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)的一些性质.

**命题1:  其中  .**

证明: 根据![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)的定义,它是对所有停时![](https://www.zhihu.com/equation?tex=%5Ctau)取比值的上确界,因此令![](https://www.zhihu.com/equation?tex=%5Ctau%5Cequiv1),就有

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++G_%5Cdelta%28w%2Cl%29%5Cgeqslant+E%28X_1%5C%2C%7C%5C%2C%28w%2Cl%29%29%3DP%28X_1%3D1%5C%2C%7C%5C%2C%28w%2Cl%29%29%3D%5Cfrac%7B%5Calpha%2Bw%7D%7B%5Calpha%2B%5Cbeta%2Bw%2Bl%7D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

这就证明了左边的不等式.又因为

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++%26%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7DX_%7Bt%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%5D%7D%5Cleqslant%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5BX_1%2B%5Csum_%7Bt%3D2%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%5D%7D%3D%5Cfrac%7B%5Cdisplaystyle%5Cmu%28w%2Cl%29%2B%5Csum_%7Bt%3D2%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%7D%7B%5Cdisplaystyle%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%7D%5C%5C+++++++++%26%3D%5Cmu%28w%2Cl%29%2B%281-%5Cmu%28w%2Cl%29%29%5Ccdot%5Cfrac%7B%5Cdisplaystyle%5Csum_%7Bt%3D2%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%7D%7B%5Cdisplaystyle%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%7D%5Cleqslant%5Cmu%28w%2Cl%29%2B%281-%5Cmu%28w%2Cl%29%29%5Cdelta.+++++%5Cend%7Balign%2A%7D%5C%5C)

因此对停时![](https://www.zhihu.com/equation?tex=%5Ctau)取上确界,也有上述不等式,这就证明了右边的不等式.

在这里,![](https://www.zhihu.com/equation?tex=+%5Cmu%28w%2Cl%29)是只允许再玩一次老虎机的平均回报,我们看到![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)总是大于等于![](https://www.zhihu.com/equation?tex=%5Cmu%28w%2Cl%29).这多出来的部分

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%2A%7D+++++%5CDelta_%5Cdelta%28w%2Cl%29%3DG_%5Cdelta%28w%2Cl%29-%5Cmu%28w%2Cl%29+%5Cend%7Bequation%2A%7D%5C%5C)

就可以看作探索带来的附加值.如果只能再玩一次,那么探索就没有必要,如果你有权继续玩,那么探索就是值得的,会多出![](https://www.zhihu.com/equation?tex=%5CDelta_%5Cdelta%28w%2Cl%29)这一块价值.

直觉上,贴现率越高,也就是越看重未来的回报,探索的附加值也就越大.反之,如果你只关心眼前的利益,那么探索就不太值钱.

比如我在清华还要待上很久,这时候如果我听说有哪个食堂推出了新窗口,那么我去尝试一下,冒点险是值得的.因为要是那个窗口确实不错,以后还可以去吃很多次.但是假如明天我就从清华毕业了,那最稳妥的做法就是去自己一贯觉得不错的老食堂,哪怕此时有什么新的好吃的,也已经跟我关系不大了.

找工作也是一样,如果你还年轻,那么就应该积极探索,寻找最适合自己的工作.如果再过两个月就退休了,你还跳什么槽?

从前面两张基廷斯指数表我们也能看到这个趋势:贴现率为![](https://www.zhihu.com/equation?tex=90%5C%25)时,表中的数字整体比贴现率为![](https://www.zhihu.com/equation?tex=99%5C%25)时要小.下面我们从数学上严格证明这一观察.

**命题2:  关于  是单调递增函数,并且  .**

证明: 设![](https://www.zhihu.com/equation?tex=%5Cdelta_1%3C%5Cdelta_2),再设![](https://www.zhihu.com/equation?tex=%5Crho%3A%3D%5Cdfrac%7B%5Cdelta_1%7D%7B%5Cdelta_2%7D%5Cin%280%2C1%29),构造几何型随机变量![](https://www.zhihu.com/equation?tex=N)满足

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++P%28N%3Et%29%3D%5Crho%5E%7Bt-1%7D%2C%5Cquad+t%3D1%2C2%2C3%2C%5Ccdots.+++++%5Cend%7Bequation%2A%7D%5C%5C)

对任意停时![](https://www.zhihu.com/equation?tex=%5Ctau),构造与之对应的另外一个停时![](https://www.zhihu.com/equation?tex=%5Ctau%27%3A%3D%5Cmin%5C%7B%5Ctau%2CN%5C%7D).于是由重期望公式

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++%26E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%27%7D%5Cdelta_2%5E%7Bt-1%7DX_t%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta_2%5E%7Bt-1%7D1_%7B%5C%7Bt%5Cleqslant+N%5C%7D%7DX_t%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%5C%5C+++++++++%26%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta_2%5E%7Bt-1%7DE%281_%7B%5C%7Bt%5Cleqslant+N%5C%7D%7DX_t%5C%2C%7C%5C%2C%28w%2Cl%29%29%5C%2C%5CBigg%7C%5C%2C%5Ctau%5Cright%5D%5C%5C+++++++++%26%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta_2%5E%7Bt-1%7DE%281_%7B%5C%7Bt%5Cleqslant+N%5C%7D%7D%29E%28X_t%5C%2C%7C%5C%2C%28w%2Cl%29%29%5C%2C%5CBigg%7C%5C%2C%5Ctau%5Cright%5D%5C%5C+++++++++%26%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Crho%5E%7Bt-1%7D%5Cdelta_2%5E%7Bt-1%7DE%28X_t%5C%2C%7C%5C%2C%28w%2Cl%29%29%5C%2C%5CBigg%7C%5C%2C%5Ctau%5Cright%5D%5C%5C+++++++++%26%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta_1%5E%7Bt-1%7DE%28X_t%5C%2C%7C%5C%2C%28w%2Cl%29%29%5C%2C%5CBigg%7C%5C%2C%5Ctau%5Cright%5D%5C%5C+++++++++%26%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta_1%5E%7Bt-1%7DX_t%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D.+++++%5Cend%7Balign%2A%7D%5C%5C)

类似地,可以证明

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%27%7D%5Cdelta_2%5E%7Bt-1%7D%5Cright%5D%3DE%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta_1%5E%7Bt-1%7D%5Cright%5D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

因此设![](https://www.zhihu.com/equation?tex=%5Ctau_1)是对应于![](https://www.zhihu.com/equation?tex=%5Cdelta_1)的最佳停时,那么

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++G_%7B%5Cdelta_1%7D%28w%2Cl%29%3D%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau_1%7D%5Cdelta_1%5E%7Bt-1%7DX_t%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau_1%7D%5Cdelta_1%5E%7Bt-1%7D%5Cright%5D%7D%3D%5Cfrac%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau_1%27%7D%5Cdelta_2%5E%7Bt-1%7DX_t%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%7D%7B%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau_1%27%7D%5Cdelta_2%5E%7Bt-1%7D%5Cright%5D%7D%5Cleqslant+G_%7B%5Cdelta_2%7D%28w%2Cl%29.+++++%5Cend%7Balign%2A%7D%5C%5C)

于是![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)关于![](https://www.zhihu.com/equation?tex=%5Cdelta)是单调递增的,从而![](https://www.zhihu.com/equation?tex=%5CDelta_%5Cdelta%28w%2Cl%29)也单调递增.至于![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle%5Clim_%7B%5Cdelta%5Cto0%7D%5CDelta_%5Cdelta%28w%2Cl%29%3D0),由前一命题立即可以得到.

这个命题严格证明了我们刚才的直觉:贴现率![](https://www.zhihu.com/equation?tex=%5Cdelta)越大,探索带来的附加值![](https://www.zhihu.com/equation?tex=%5CDelta_%5Cdelta%28w%2Cl%29)也越大;当贴现率趋近于0时,探索的附加值也几乎为零.换回现实生活里就是:你越在乎长远,越应该给自己一些探索的空间;你越只在乎眼前,越没必要折腾.

不过,我觉得基廷斯指数最有意思的启示是:在同等条件下,新选项比老选项更有吸引力.看看贴现率为![](https://www.zhihu.com/equation?tex=99%5C%25)的那张表,你会发现对于从未尝试过的选项(对应![](https://www.zhihu.com/equation?tex=%280%2C0%29)的格子),基廷斯指数竟然也高达![](https://www.zhihu.com/equation?tex=0.87),甚至比已经尝试过10次,其中赢8次输2次的选项(对应![](https://www.zhihu.com/equation?tex=%288%2C2%29)还要高.而沿着对角线往右下角,你会发现基廷斯指数是不断下降的.

一个直观的解释是小样本的统计很可能不准,也许一次不好只是偶然,因此探索的附加值还很高.相比之下,老餐馆你已经去过很多次了,测量结果已经稳定在一个一般的水平,不会再给你带来惊喜.

这个现象总结为更正式的数学命题就是:

**命题3: 如果  满足  ,且  ,那么**

****

**令  ,则有  .**

证明: 我们先证明第二个结论,相对来说容易一些.当![](https://www.zhihu.com/equation?tex=n%3Dw%2Bl)充分大时,无论接下来是赢还是输,对后验分布的改变都非常小(量级约为![](https://www.zhihu.com/equation?tex=O%281%2Fn%29)).从而由重期望公式

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7DX_%7Bt%7D%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%5Cright%5D%26%3DE%5Cleft%5C%7B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta%5E%7Bt-1%7D%5Cleft%5B%5Cmu%28w%2Cl%29%2BO%5Cleft%28%5Cfrac%7B1%7D%7Bn%7D%5Cright%29%5Cright%5D%5C%2C%5CBigg%7C%5C%2C%5Ctau%5Cright%5C%7D%5C%5C+++++++++%26%3D%5Cmu%28w%2Cl%29E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%5Ctau%5Cdelta%5E%7Bt-1%7D%5Cright%5D%2BO%5Cleft%28%5Cfrac%7B1%7D%7Bn%7D%5Cright%29%2C+++++%5Cend%7Balign%2A%7D%5C%5C)

由此可知

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++G_%5Cdelta%28w%2Cl%29%3D%5Cmu%28w%2Cl%29%2BO%281%2Fn%29%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

因此![](https://www.zhihu.com/equation?tex=%5Cdisplaystyle%5Clim_%7Bn%5Cto%5Cinfty%7D%5CDelta_%5Cdelta%28w%2Cl%29%3D0).

第一个结论的证明稍微复杂一些.首先记

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++V_%5Cdelta%28n%2C%5Cmu%3B%5Clambda%29%3D%5Csup_%5Ctau%5Cdisplaystyle+E%5Cleft%5B%5Csum_%7Bt%3D1%7D%5E%7B%5Ctau%7D%5Cdelta%5E%7Bt-1%7D%28X_t-%5Clambda%29%5C%2C%5CBigg%7C%5C%2C%28w%2Cl%29%3Aw%2Bl%3Dn%2C%5Cmu%28w%2Cl%29%3D%5Cmu%5Cright%5D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

容易证明![](https://www.zhihu.com/equation?tex=%5Clambda%5E%2A%3DG%28w%2Cl%29)正是上述函数关于![](https://www.zhihu.com/equation?tex=%5Clambda)的零点.

考虑一步递推,也就是对![](https://www.zhihu.com/equation?tex=X_1)的结果进行分类讨论,如果第一轮赢了,那么后验分布变为

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++%5Cmu_n%5E%2B%3D%5Cfrac%7B%5Calpha%2Bw%2B1%7D%7B%5Calpha%2B%5Cbeta%2Bw%2Bl%2B1%7D%3D%5Cmu%2B%5Cfrac%7B1-%5Cmu%7D%7B%5Calpha%2B%5Cbeta%2Bn%2B1%7D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

如果第一轮输了,那么后验分布为

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++%5Cmu_n%5E-%3D%5Cfrac%7B%5Calpha%2Bw%7D%7B%5Calpha%2B%5Cbeta%2Bw%2Bl%2B1%7D%3D%5Cmu-%5Cfrac%7B%5Cmu%7D%7B%5Calpha%2B%5Cbeta%2Bn%2B1%7D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

因此有

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++V_%5Cdelta%28n%2C%5Cmu%3B%5Clambda%29%3D%5Cmax%5C%7B0%2C%28%5Cmu-%5Clambda%29%2B%5Cdelta%5Cleft%5B%5Cmu+V_%5Cdelta%28n%2B1%2C%5Cmu_n%5E%2B%3B%5Clambda%29%2B%281-%5Cmu%29V_%5Cdelta%28n%2B1%2C%5Cmu_n%5E-%3B%5Clambda%29%5Cright%5D%5C%7D+++++%5Cend%7Balign%2A%7D%5C%5C)

利用向前归纳法,可以证明![](https://www.zhihu.com/equation?tex=V_%5Cdelta%28n%2C%5Cmu%3B%5Clambda%29)是关于![](https://www.zhihu.com/equation?tex=%5Cmu)的凸函数.

构造随机变量![](https://www.zhihu.com/equation?tex=M_n)满足

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++P%28M_n%3D%5Cmu_n%5E%2B%29%3D%5Cmu%2C%5Cquad+P%28M_n%3D%5Cmu_n%5E-%29%3D1-%5Cmu.+++++%5Cend%7Bequation%2A%7D%5C%5C)

从![](https://www.zhihu.com/equation?tex=%5Cmu_n%5E%5Cpm)的表达式可以看出,![](https://www.zhihu.com/equation?tex=+%7C%5Cmu_n%5E%5Cpm-%5Cmu%7C)随![](https://www.zhihu.com/equation?tex=n)单调递减,从而![](https://www.zhihu.com/equation?tex=%5Cmathrm%7BVar%7D%28M_n%29)随n单调递减.于是由Jensen不等式,当![](https://www.zhihu.com/equation?tex=n_1%3Cn_2)时,我们有

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++E%5BV_%5Cdelta%28n_1%2B1%2CM_%7Bn_1%7D%3B%5Clambda%29%5D%5Cgeqslant+E%5BV_%5Cdelta%28n_2%2B1%2CM_%7Bn_2%7D%3B%5Clambda%29%5D%2C+++++%5Cend%7Bequation%2A%7D%5C%5C)

因此

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Balign%2A%7D+++++++++V_%5Cdelta%28n_1%2C%5Cmu%3B%5Clambda%29%26%3D%5Cmax%5C%7B0%2C%28%5Cmu-%5Clambda%29%2B%5Cdelta+E%5BV_%5Cdelta%28n_1%2B1%2CM_%7Bn_1%7D%3B%5Clambda%29%5D%5C%7D%5C%5C+++++++++%26%5Cgeqslant%5Cmax%5C%7B0%2C%28%5Cmu-%5Clambda%29%2B%5Cdelta+E%5BV_%5Cdelta%28n_2%2B1%2CM_%7Bn_2%7D%3B%5Clambda%29%5D%5C%7D%5C%5C+++++++++%26%3DV_%5Cdelta%28n_2%2C%5Cmu%3B%5Clambda%29.+++++%5Cend%7Balign%2A%7D%5C%5C)

也就是说,当![](https://www.zhihu.com/equation?tex=n)较小时,这个状态"赚取正回报"的能力更强,相应的其零点![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)也就更大.因此当![](https://www.zhihu.com/equation?tex=w_1%2Bl_1%3Cw_2%2Bl_2)时,就有![](https://www.zhihu.com/equation?tex=%5CDelta_%5Cdelta%28w_1%2Cl_1%29%3C%5CDelta_%5Cdelta%28w_2%2Cl_2%29).

从这个模型我们至少能获得三个人生智慧.

第一是,年轻时应该多探索.

年轻人有长远的未来,贴现率很高,所以大胆探索才是最优选择.正如你在一座城市要待很多年,那就应该多尝试不同的餐馆,找找哪一家最好吃.

你看小孩子就非常明白这个道理.虽然他们不懂什么是基廷斯指数,但是非常愿意探索.他们会把家里的电器按钮都按一遍,特别喜欢玩新玩具,总是充满好奇心.

2014年美国有一项研究,从职业选择与匹配的框架出发,指出:如果你在二十多岁的时候经常换工作,你会更容易找到适合你的工作.也就是说等你到三四十岁的时候,你会更喜欢你的工作,收入水平也会更高.

所以,年轻人频繁换工作不但不是任性,反而是必要的,这是在探索.很多人担心频繁跳槽会被认为缺乏忠诚,但在今天这个世界里,决定你职业前途的首要因素,是你的能力和声望.在美国硅谷,一个典型的工程师首先追求的是他在整个行业中的声望,其次才是他对某家公司的具体贡献——当然,前者要靠后者来证明.只要你在自己的行业中有足够高的声望,去哪家公司,待遇都不会差.

如果你已经不是二十几岁的年轻人了,那是不是就不用探索了呢?也不一定,如果你从事的是创造性的工作,那你一生都要有战略性的探索期.我们在第9讲中提到过,那些最厉害的科学家,都是"探索+深耕"的模式.科学探索是一项永无止境的事业,即便科学家的寿命是有限的,但是他开辟出的方向还会有后人继续发展和完善.从这个意义上说,科学研究的贴现率其实很高,所以你会看到,有些科学家哪怕年过花甲,依然在不断拓展新方向.

当然,强调探索,就意味着没有那么多收获,所以家庭因素就很重要.一个年轻人要想不断试错,背后需要父母提供强有力的支持!现在很多年轻人执着于考公、考编,热衷于一眼望到头的工作.并不是他们不想探索,而是他们输不起!如果我们希望社会变得更有活力,就需要多一些包容,允许年轻人有试错的机会.

第二个智慧是,随着年龄增长要慢慢专注于收获.

一个一般规律是,人的社交圈子会随着年龄增长逐渐变窄.年纪大了之后,经常见面的总是那几个人,经常做的事情也就那么几件,去的地方也很有限.比如总是去同一家餐馆、点同样的菜,好像已经失去了探索的动力.过去人们认为这是老年人的悲哀.

但是斯坦福有一位心理学教授却不这么认为,他认为这其实是老年人的理性选择,老年人已经完成了探索!他们知道自己最适合做的事情是什么,和哪些人在一起最舒服,哪个餐馆最符合自己口味,他们已经没有冒险探索的必要,只要享受人生就行了.

所以人到了一定阶段,就要慢慢安定下来,开始把以前探索的成果兑现.很多人忙忙碌碌大半生,到头来什么也没得到,这就是不懂得收获的重要性.有些大学教授,在功成名就之后,就跑到企业里当顾问,做技术转化,这就是把资源和能力兑现了.这件事通常在四五十岁以后考虑比较合适,在此之前,探索才刚刚完成,资源和能力还在积累,过早兑现,挣不了多少钱.也有一些人不懂得这个道理,五十岁以后,眼看着自己的资源和能力不断贬值、过时,这是非常可惜的.

第三个智慧是,在慢慢变老的过程中,你的生活其实在变得越来越好.

我们鼓励年轻人多探索,并不是探索本身有很大的好处,而是为了找到那些能够带来丰厚回报的选项.实际上,探索并不像我们想象得那么有趣,大部分的探索都以失败告终,你会不断遭遇挫折,根本没有那么多惊喜.

老年人不再探索,并不是他们不敢探索了,而是他们已经不用探索了,他们可以享用年轻时探索带来的成果.如果你知道自己喜欢什么,你会很乐意被自己喜欢的事物所包围.

下一次当你看到一位老人,每天去同一个公园散步,走同一条路线,跟同一群老伙计聊天,你可能以为他的生活很无趣——殊不知这才是最浪漫的事,他在享受用一生的时间探索出来的成果!


---

# 出国真的可以改变命运吗？ 牙医Dr.Li

**Author:** 牙医Dr.Li  
**Bio:** 加拿大牙医DDS, 中加临床经验20年  
**Avatar:** ![](https://picx.zhimg.com/v2-5a46d4c348725fd729e0c5e957be918c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aa5fd4aa8fa1b7fec5a9ea27a9d76743  
**Published:** 2024.09.29 18:28:41  
**Updated:** 2025.04.02 20:37:07  
**Question:** https://www.zhihu.com/question/682539261  
**Question Created:** 2024.09.29 09:53:08  
**Question Updated:** 2024.09.29 09:53:08  
**Votes:** 263  
**Comments:** 13  
**Type:** answer  

建议不要看国内IP的回答，臆想和道听途说太多（仅从影视剧里看过，或者短期旅游开会学习对国外生活、工作打拼了解也只九牛一毛）；再建议不要看中介的忽悠，利益相关净说广告词。

我过来人的体验是，出国一定会改变命运，结果或好或坏或不知好坏。因为国内外相差太大了，衣食住行、工作、自然、人文，天壤之别，你不可能和国内一样的生活。国内的话，类似的翻天覆地生活改变的机会，有，但是少。

不是，楼主您想问啥？是生活太平淡，或者遇到逆境了，想出来走好运？不一定哦，得结合自己各方面条件包括性格因素，出来也有出来的麻烦事，出来也得奋斗才能有好生活。


---

# 出国真的可以改变命运吗？ 燃烛照痴花

**Author:** 燃烛照痴花  
**Bio:** 翠凤翎毛扎帚叉，闲踏天门扫落花  
**Avatar:** ![](https://pic1.zhimg.com/v2-67500fbf9ed760f4cfb11099dcf6dcd2_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c33f31aca5ef9bc062dff54f7e148382  
**Published:** 2024.10.01 09:44:00  
**Updated:** 2024.10.01 09:44:00  
**Question:** https://www.zhihu.com/question/682539261  
**Question Created:** 2024.09.29 09:53:08  
**Question Updated:** 2024.09.29 09:53:08  
**Votes:** 320  
**Comments:** 17  
**Type:** answer  

小马过河的道理，有的人从小就被父母规划，美高美本常青藤硕博，top实习大牛套磁拉满，背后团队早早规划事无巨细。有的人作为行业精英在国内一线城市无缝连接到北美top公司，两地往返，享受大把大把的离岸利益好不快乐。也有人从大西北花了几百万读书，天天住在地下室里勤工俭学因为渠道关系欠缺前途未卜。还有的人穷尽半生为了拿一张绿卡父母亲戚葬礼都出席不了，道德良心在无数个等待身份的日子里消磨殆尽，甚至还有八十年代第一批出国的人最后在唐人街一亩三分地里当餐馆老鼠，在大学生公寓当廉价保洁，畏首畏尾，压抑而绝望。出国这么多年，我见过一句英语不会说的，专门收割学生和土豪的房地产中介，见过成绩优越的精英，见过当初追逐理想最后被签证与政策拷打除了一纸文凭与满怀不甘灰溜溜回家的，见过不适应社交环境被跨文化生活逼出精神病被学校劝退的，更见过出国后不久死了丈夫，人到中老年面临交叉性歧视最后沦落到家政阿姨的前大陆博士。在大城市夜夜笙歌买醉，靠着无数的中介与代写拿到文凭镀金成功回到中国享受人生的权贵更是见怪不怪。很明显，社会是多样的，没有人能够许诺移民能解决一切社会问题，没有人能保证出国等于换了一条更加简单的赛道。既然在网络上没有人能替你的未来担保，就不要过度美化那些非基于自身经验主义的，未曾选择的道路。从某种方面讲，出国的确能改变命运，但这种改变并一定会通往光辉而胜利的未来，不一定会通往财富的自由，阶级地位的上升，人情社交的稳固。可惜媒体中宣传的，中介口中的只有成功的案例，至于普通乃至落魄的少数人，那些世俗意义上的失败者，他们根本不会被人关注。


---

# 26岁快27岁了，一事无成，这辈子是不是彻底完了？ 梦亦是真

**Author:** 梦亦是真  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-82b386a9ce99fde46a771fdbe456a3e8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/33b61cea3d8346194bc7459e52adea35  
**Published:** 2024.10.06 02:27:35  
**Updated:** 2024.10.06 02:27:35  
**Question:** https://www.zhihu.com/question/602228217  
**Question Created:** 2023.05.21 17:53:40  
**Question Updated:** 2023.05.21 17:53:40  
**Votes:** 10402  
**Comments:** 425  
**Type:** answer  

兄弟，大多数人生下来就他妈完蛋了，20来岁才他妈意识到。


---

# 26岁快27岁了，一事无成，这辈子是不是彻底完了？ 阿尔及米布西亚

**Author:** 阿尔及米布西亚  
**Bio:** 开导型学者法师  
**Avatar:** ![](https://pic1.zhimg.com/v2-b66d046b9bf7abbeb1613513f4845dd8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/36de04e350530d3c930559c90b349617  
**Published:** 2024.07.07 00:06:54  
**Updated:** 2024.07.07 00:06:54  
**Question:** https://www.zhihu.com/question/602228217  
**Question Created:** 2023.05.21 17:53:40  
**Question Updated:** 2023.05.21 17:53:40  
**Votes:** 547  
**Comments:** 8  
**Type:** answer  

相信我，直到你死之前，你每年都会问的

明年你该问 28 一事无成，这辈子是不是快完了

我跟你一样，从毕业 23  岁开始，一直问到现在 33 了

每一年我都觉得人生彻底完了

没啥心灵鸡汤给你

你也不必寻求鼓励和安慰

你要明白你这是正常的，毕竟你以前活在童话的像电影一样的世界里，以为自己是主角

但其实能问这个问题，说明你跟我一样就是普通人，普通人就别问这种问题

但行好事莫问前程，往前走就是了


---

# 如何评价李新野说的清华不公开每年学生自杀人数？ 刘润达

**Author:** 刘润达  
**Bio:** 实名上网  
**Avatar:** ![](https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d554ae7cd10d36ecc42c378f12e15c52  
**Published:** 2025.12.14 13:05:31  
**Updated:** 2025.12.14 13:14:43  
**Question:** https://www.zhihu.com/question/1983498571580985597  
**Question Created:** 2025.12.14 11:28:31  
**Question Updated:** 2025.12.20 15:31:56  
**Votes:** 798  
**Comments:** 83  
**Type:** answer  

每个自杀的人都经过了一段独特的人生经历。对他们个人来说，自杀未必是悲剧，也许是一种解脱。但自杀的主要原因，通常是人生意义的崩塌。

我不熟悉自杀的人是怎么想的。但我认识一些在清华陷入抑郁虚无的人。我自己也曾经在清华陷入抑郁虚无。

悲剧的主要起因是：大量清华学生，因为考上清华，所以就认为自己高人一等、是人上人。或者说，因为其他人觉得清华学生高人一等、是人上人，所以他们就深刻受到这些观念的影响。

这是高中教师为了激励学生努力学习、为自己刷出好的升学率KPI而营造的文化，也是家长相信“考上好学校改变命运”而形成的文化。在大学里，这种文化得到了延续。**这导致一些学生将自己的人生意义主要建构在了“在排名游戏中取胜”之上**。

那么这些清华学生就不可避免的，在输掉排名游戏时，觉得自己低人一等、是人下人。因为运气不好，短时间内输掉了较多的排名游戏、或者在某个排名游戏中输得特别惨，陷入抑郁、虚无乃至自杀，也就不足为奇了。

在清华和社会上，有一大堆各种各样的排名游戏，绩点、金钱、名声、学术、爱情....... 你总能找到一个排名游戏，是你会输掉的。对于任何一个排名游戏，只要你往上看，也永远有排名比你高的人，除非你是世界首富，或者拿到诺贝尔奖/图灵奖之类。

一种重新建立意义自洽的方式是，“只玩那些我会赢的排名游戏”，比如我哪方面强，我就只和别人比我这方面，不考虑我比别人弱的方面。或者，在排名游戏里只向下看，只看各方面比我弱的人，不看各方面比我强的人。但这些本质上都是一种自欺欺人，对清华学生这种聪明人来说，很难通过这种自欺欺人的方式来建立自洽。

但要在社会上生存，找到工作、取得令人满意的生活质量，就需要玩排名游戏。

唯一的出路就是，玩排名游戏，但是不把人生意义建构在排名游戏之上，发自内心地相信，人不论高矮胖瘦、男女老少、聪明蠢笨、富有贫穷，在人格上一律平等。当清华学生不再觉得自己比交大学生高人一等、不再觉得自己比一本学生高人两等、不再觉得自己比大专学生高人三等，他们自然也不会再觉得自己比XXXXX(此处可填入任何合理答案)低人一等，就会活得快乐自洽。


---

# 法国的数学水平那么强，为什么在 IMO 上的成绩却很一般？ 啦啦Calabash

**Author:** 啦啦Calabash  
**Bio:** 游戏开发从业者；古典音乐；业余编曲爱好者；杂七杂八  
**Avatar:** ![](https://pica.zhimg.com/v2-ceda40f3b261e33706eb29b6bb1a840b_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ff659d77d295e1d845c6834d1b4dafba  
**Published:** 2025.06.21 18:24:33  
**Updated:** 2025.06.23 15:40:53  
**Question:** https://www.zhihu.com/question/28126550  
**Question Created:** 2015.02.11 17:06:32  
**Question Updated:** 2018.06.27 02:07:07  
**Votes:** 8472  
**Comments:** 488  
**Type:** answer  

我业余学作编曲学了小几年悟出来一件事:

你想做什么事，你就直接做这件事，找靠这件事吃饭的最好的人当老师。

（ps. 补充一点我想法的来源:

我业余学的东西比较多，不止音乐，绘画也找过老师。我是真的找了好多个老师，看了不同的课之后得出的结论；一般的义务教育和大学教育有比较明显的特点是——学生其实是没得选的。

这大学看起来是你自己考的自己填的，问题是你在填之前，有充分了解学校专业的擅长方向，有充分了解院系的师资储备，有了解各个老师的教学风格以及方向，以及，你跟他们能不能合得来你知道吗？这种填志愿跟瞎填也没啥区别，就像以前校友会聚会换届，说是民主投票，实际上候选人我一个都不认识，哈哈。

上了大学之后，你的任课老师你是没有主动选择的权利的，即便到了大学之后选导师，如果你发现自己选的不适合自己，你也得硬着头皮跟到尾，想换非常麻烦。

而你自己花钱去找老师就不一样了，我实际上是消费者，我花钱购买你的知识传授，我想换人就换人。我可以明确说一个好的且适合你的老师对你的赋能是非常大的，但大部分人在绝大部分的学习生涯中是没有权力主动找老师的。

找老师跟做项目跟同事磨合一样，有合得来的，也有合不来的，上过班的人都懂吧。为什么放到师生关系就不懂了呢~

欧洲那些大音乐家，有哪个是一直跟同一个老师的？海顿跟贝多芬还合不来呢。）

你想做成A，你就直接去做A，找靠A吃饭的大佬当老师。什么意思，同样都是学作曲，你是要考国内音乐学院，还是申国外音乐学院，还是真想靠作曲接单子赚钱吃饭，这不是一件事，这是三件事，你别指望靠学音乐做题就能真的学会作曲，那跟真的作曲是两码事；同理，教人考试的、教人申海校的，和真的靠作曲吃饭的人，对于音乐乐理方面的理解是完全不在一个水平面上的，你别指望靠教人做题的人能教会你作曲。

放到数学上也是同理，初中数学、高中数学、数学竞赛、数学研究，是不同的四件事，擅长的人也都不一样。

老中老想着靠练A然后达成B，你觉得靠刷imo成绩就能提升数学研究的水平，才是搞笑的。法国那是主要在做数学科研的学习，数学科研的副产品顺带偶尔有了个imo也不错的。老中是反过来，老中指望主刷imo竞赛的副产品，能搞出个科研大佬来……

鉴于这一点，王虹本科毕业直接去法国才是真懂了的，而知乎很多人还在玩做题。（看王虹出国后的路径，甚至可以说北大是她不得不走的唯一弯路……）

b站有那种大专考研的数学课，从初中数学开始补，也就是说这门课的对象，是连一元二次方程都还没会的——然后你会发现，哪怕是给这类人补习高数前置知识，所有内容加起来不超过20个小时就学完了，而且你肯定会跳着加速看的，然后就可以直接开始高数的学习了。而初高中数学，按部就班的老中需要学6年。

我记得我以前看爱因斯坦的传记（找本国比较原始的，回忆录，书信之类），事实上爱因斯坦可能从十五六岁就已经有他相对论想法的雏形了，就是他对这个科研方向的直觉十五六岁就有了，你要是像老中一样，先刷题再玩竞赛然后上大学之后再开始正经科研，能到他那个岁数弄出相对论？他十五六岁就有科研的方向了而且有自己是对的笃信感。

做题家读到博士了可能都不知道自己方向是什么，这才是天才和做题家的区别。国内要么把爱因斯坦吹上天的要么把爱因斯坦踩到地的，全是从做题分数角度去说的，十分无语。

反倒是他十五六岁其实就有相对论的想法了才是真的可怕的。

— — — —

ps:

多扯几句，国内为什么会有一种风气——我只有考上清北数院了，我才有资格学习数学。老中很多人学习数学的核心目的是为了证明自己智商上的优越感，还有升学优势，仅此而已。

这个风气是非常令人迷惑的，我一个业余爱好音乐的，为什么会来扯数学问题？

因为我读了很多欧洲音乐家的传记，欧洲的音乐家很多人业余爱好之一就是研究数学，不一定多深，但他们爱好这个。

人家有觉得我没有考上X大数院我就不能研究数学吗？还有就是众所周知的，拿破仑蹲号子的时候拿数学消遣。

莫扎特:哈！我都没上过学！莫扎特去世后，整理出来的遗物，音乐书没多少，代数学的书倒是有两本；海顿也是，业余喜欢研究数学。

这时候就有老中要说了，音乐跟数学是有强相关的！音乐家研究数学对音乐有用！那我问你，贝多芬一辈子没学会乘除法，跟出版商算账的时候251x22，他是真的加了22遍251（他没加251遍22也真是奇迹），导致他一辈子都非常敬佩能算乘除法的人，影响贝多芬是超一流作曲家不？（贝多芬应该来老中，遍地都是他敬佩的人）当然，贝多芬本人是爱好哲学和文学。

我扯这个，是想说，从音乐家传记看他们的业余爱好来看，欧洲也确实有更单纯的数学研究氛围，老中是没有这个氛围的，如果不能证明自己比别人智商高，以及升学有优势，大部分老中就不学数学了。

— — — —

再扯远一点，我关注过一个在法国学习音乐小提琴的博主马蒂斯思，他曾经说过一个教育理念我自己也特别认同，他说无论学习什么音乐都应该赶紧走量，同时他也很反对过度练习练习曲。

首先说练习曲，这玩意儿跟做数学题很类似，比如说车尔尼车尔尼练习曲，那么多练习曲当初其实是钢琴演奏流派和教育理念百家争鸣的时候整出来“吵架”用的，比如说车尔尼是贝多芬那个派系的，他的练习曲其核心目的其实是辅助你能弹好贝多芬的，那问题就来了——**我为什么不直接练贝多芬？**

你想当钢琴家的目的是为了给人演奏车尔尼还是演奏贝多芬？贝多芬的作品里难道没有包含车尔尼练习曲里所针对的技巧？而且，贝多芬的作品不仅包含这些技巧，还是世界上最好的音乐家审美的集中表达，车尔尼就是个三流作曲家，在老中刷题无异于刷车尔尼练习曲，破坏审美。

还有就是走量，老中无论是学音乐学其他的，都一样——学1级曲子，死抠，练几个月，刷题，必须1级达到95分了，然后再学2级；同理，一直下去，这样学了两年了，都没会几个曲子，职业演奏家必须熟练掌握上百首知名经典作品，照这个速度，练一百年都不够。

实际上根本没必要死抠，你1级大差不差能有个60分就能继续接触下一阶段的曲目了，通过学习更高阶的作品自然而然巩固低阶曲目，等你6级能有个60分的时候，1级曲子刚拿到闭眼弹都能有95分，这根本不需要多长时间。

这中间过渡的阶段，频繁的考试测试，实际上是非常浪费时间且打断学习节奏的。

我相信法国人在数学学习的传统思路上跟音乐教育肯定有类似之处——走量，走量不是指刷题，而是真的不断往后学新知识从而巩固前面的。

伽罗瓦2天干完欧式几何，肯定不是2天干完欧式几何就能考老中几何卷子能考100的程度。如果是知识点掌握不考虑老中做题，我不相信老中没人能2天干完欧式几何。


---

#  Felina

**Author:** Felina  
**Bio:** 星星还是要还给宇宙的  
**Avatar:** ![](https://pic1.zhimg.com/v2-99b4577d42061dc5a4cfc498f22a2481_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/09733810a89d25118c12b0514939747f  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 9  
**Type:** pin  

[object Object],[object Object],[object Object]


---

# 为什么现在的人动不动就选择自杀呢？ 你的ZombieMan

**Author:** 你的ZombieMan  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-5d9ab6dd26e8e2b30eff175a44f5d159_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/20991c8e02e6ac8dc4812e13a3e9512d  
**Published:** 2025.12.18 12:50:07  
**Updated:** 2025.12.18 12:54:13  
**Question:** https://www.zhihu.com/question/1964440881676396017  
**Question Created:** 2025.10.22 21:20:03  
**Question Updated:** 2025.10.22 21:20:03  
**Votes:** 669  
**Comments:** 96  
**Type:** answer  

这叫存在主义抑郁症，过去是30岁以上的哲学家，85岁以上的老人才会有的东西，现在因为网络已经下放到未成年了。

我小时候在国企大院生活，大院里全是退休的大爷大妈，都是一辈子按部就班过来的，上班说实话也没啥太大的压力，退休金在那个年代也属于比较好的，不仅能养活自己，还能接济子女。

他们不算老，都有锻炼习惯，很多人都可以每日走很远很远，身体强健，过着打球写书法的生活。

但是就这，很多人都陷入了抑郁，当时还没有这个词语，在当时叫待不住，闹心。因为这些人，直到退休后，人生才头一次面临了无意义的情况，在此之前是一直有路径和存在意义的。

古人说人活一口气，就是指人活着，最重要的是有盼头，有意义，这是最宝贵的东西，有些这些，再大的苦难也能承受，没有了这些，平静的日常生活都像坐牢。

像马老师指出的，劳动是人类的本质，真给你无拘无束的自由生活，你不一定受得了。

现代人，因为智慧，知识，信息的普及，人的认知，见识，思维和过去是完全不同的，因此可以在很早就想到了，认知到了人生虚无，世界混沌无目的无秩序无理由的本质，从矩阵的叙事中跳脱，然后陷入存在主义抑郁症。

就连现代的欧美哲学家们也很难给出一个好的对于存在主义抑郁症的解答，科学，科技，知识让我们知道了太多。

如何面对虚无主义，即将是现代人最大的课题，因为即使禁止使用社交媒体，成年后年轻人也能迅速认知到这些，然后要么陷入抑郁，要么转享乐主义，过去的封建礼教，道德规矩，宏大叙事将在虚无主义，过早的死亡认知前不值一提。

这个世界之所以还能运转，说实话，得归功于现在45岁以上的人，没有这批大哥大爹大爷把控着，世界早乱套了。

我面对存在主义抑郁的办法是，这世界不是我造成的，生命不是我选择的，我的存也没有实际上的意义，我有没有自由意志也很难说。

人生就像去电影院看新片，就算你看到3分之1发现是烂片，可是来都来了，都坐下了，就看完吧，我把它成为看戏主义，看看这癫狂的世界会怎样发展。

话说，随着将要来到的科技大爆发，人们的存在主义抑郁症会更加严重，你过去自以为豪的经验，技能在机器人，AI的效率面前将不值一提，此时，作为一个无用之人，你将如何面对这世界，是一个需要思考的问题。


---

# 为什么年轻人宁愿待业也不找工作? 马超

**Author:** 马超  
**Bio:** 九紫离火  
**Avatar:** ![](https://pic1.zhimg.com/bf94c84a47b08b26f176398710676178_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/8c70a251c131256b371afed9f99b7884  
**Published:** 2025.12.08 18:05:50  
**Updated:** 2025.12.08 18:05:50  
**Question:** https://www.zhihu.com/question/13017747093  
**Question Created:** 2025.02.22 15:04:44  
**Question Updated:** 2025.02.22 15:04:44  
**Votes:** 7858  
**Comments:** 575  
**Type:** answer  

现在东亚的这种环境，堪比养蛊

要应对的方法，只有一个

那就是

无聊一点，迷失一点

12月5日，法国总统马克龙在四川大学登台演讲，除了那些比较官方的话，最后个人随感部分

让人还是蛮有感触的，他是这么说的

“事实上，如果可以的话，除了我刚才讲的合作精神和共同倡议之外，我个人深有感触的是，这对我们这代人而言，或许已经成为现实，对你们来说，我已经很老了，但对你们这一代，我的建议是：无聊一点，迷失一点。

因为你们正处在一个为效率、结果、速度所导致的世界，以至于什么也留不下来，对什么也不能产生深刻印象。让我印象最深刻的词语都是我在字典中迷失方向时学到的，我想你们不再会翻开纸质字典了，你们会在社交媒体上查词。因为在纸质字典中，我们会迷失在书页之间，这和去另一个国家旅行一样，我们会在街头迷路，然后我们会听由偶然，这是一种幸运。

因此如果要我真给你们这代人一个建议，给这代正承受着‘结果、效率和即时性的巨大压力’的人一个建议，就是‘无聊一点，迷失一点’，因为你们会发现，这将成为你们的幸运，我很认真地跟你们说。”

马克龙的意思是说，这样的生活并没有留下个体生命丰富的意义，生活缺乏意义，尽管每天都忙得要死。

他或许还想说，你们年轻人，不必过于在意象征着所谓现代性的功利价值，不要过于注重一个人的外部标签，不要太卷了。

这是接近私人化的表达，他没有说同学们要胸怀大志，或者就像儒家说的”学以成人”，或者国家兴亡与匹夫之间的密切关系之类

而是说，大家没必要这样

世界是平庸的，平庸的标志在于一切以成败作为标准

这一代就是承受高速发展代价，缓冲的一代，但是你们做不了什么，这是时代的必然，所以好好活着，不要想那么多

这段话是对给正承受结果、效率、即时性巨大压力的一代人的建议

鼓励人们不要害怕慢下来，不要急于找答案，适当无聊、迷失，允许自己浪费时间、迷茫，多沉浸在美好的风景中并休息一会，因为这会成为自身的幸运。

其实就是隐晦的告诉我们，这个时代没什么机会了，大家都在苟着，能苟就苟

本质上和张朝阳劝年轻人不要负债一样

躺平不用羞耻，活着就是胜利

马克龙，法国人

在法兰西人的哲学中大多充斥着对人生苦短的见解，迷茫与痛苦时常牵绊人生，人都说巴黎浪漫，但那只是华而不实的表象，法国的文学实际接触一下就不难发现痛苦和悲剧是人生的主旋律，雨果的《巴黎圣母院》或是《悲惨世界》无不透露着人生的无力感，大仲马《基督山伯爵》虽为复仇类文学的典范，但依然充斥着唐泰斯前半生颠沛流离的命途多舛。

但是叔本华有一句“人生摇荡如钟摆，于痛苦和无聊间徘徊”

实际贯彻人生体验的也恰如其分

也许你正在追寻某样东西，也许是谋求学业上的进展，也许是事业上的突破，或者是追求身体素质的进一步提升，或许你正焦虑于未来一年或者两年后的一场关键性的考试，不要过于苛责自己，这里指的是不是让你消极对待，而是不要对自己在这个努力期间的某一天的懈怠而感到自责

真正的坚持是忘记昨天的懈怠，转而走向长期的坚持。

人只有在即将死亡的时候才能够明白这一切

人生其实就是一场骗局，最主要的任务根本不是买房买车，也不是即时行乐，这其实是欲望，不是真相。

人生就是一个梦，虚无缥缈并不真实。我们不要给自己那么多的使命感和过剩的责任感，在这个世界上，活着的我们和一只蚂蚁，一只昆虫，一只蚊子，一只甲壳虫，没有任何区别。当你走到了生命的尾声，就会明白，我们追求的一切都恍若云烟，功名利禄终将变为尘土，恩怨情仇也终将随风飘散，我们在这个世间最真实的需要，不过就是内心的感受而已。

我们最根本的任务不是买房买车，不是让别人羡慕，也不是过的一定要比别人好，而是可以按照自己喜欢的方式度过一生。请记住你透支健康换来的优秀，不过是人事档案里随时可替换的几行宋体字。而单位的运转齿轮从未因此停滞半分。人生不是用红头文件丈量的，而是用看见花开、听见雨声的瞬间拼凑的。毕竟，你熬的夜、拼的命、流的泪，最后都成了档案袋里轻飘飘白A4纸，而你错过的晚霞、失约的晚餐、没牵到的手，才是永远无法补录的人生

一切有为法，如梦幻泡影，如露亦如电，应作如是观；致虚极，守静笃，万物并作，吾以观其复，

花有重开日，人无再少年

![](https://picx.zhimg.com/v2-1d30e30e0d7c3aefbb8138d39edcef6b_r.jpg?source=2c26e567)


---

# 如何看待年轻人现在对北欧、西欧、日本等高福利低收入社会越来越无感? 无聊乐

**Author:** 无聊乐  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-e1b6192aa0d8dcf140ba189dea518a4c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c3cc8331a9c4004a6c341b982c9ec19f  
**Published:** 2025.08.20 10:13:32  
**Updated:** 2025.08.20 10:13:32  
**Question:** https://www.zhihu.com/question/1939291407715144688  
**Question Created:** 2025.08.14 11:45:01  
**Question Updated:** 2025.08.27 13:51:57  
**Votes:** 2612  
**Comments:** 162  
**Type:** answer  

我感觉人类社会就是个骗局。

人为规定的稀缺性并不能代表真实价值。

罗曼尼康帝真的比加冰的可乐好喝吗？

打高尔夫真的比在家玩游戏好玩吗？


---

# 如何看待最近的新梗「爱你老己，明天见」？它为何能迅速引发共鸣？ TIJ

**Author:** TIJ  
**Bio:** 你去休假、睡觉，再坚持一天吧！  
**Avatar:** ![](https://pic1.zhimg.com/55940a8a508e5984ffa1f203600374e1_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2e5b892d1fd2f54fb54d8ef34aea09d9  
**Published:** 2025.12.16 10:34:57  
**Updated:** 2025.12.17 15:55:54  
**Question:** https://www.zhihu.com/question/1982958749170807828  
**Question Created:** 2025.12.12 23:43:27  
**Question Updated:** 2025.12.15 14:13:01  
**Votes:** 2836  
**Comments:** 96  
**Type:** answer  

七个字，把自我和解、自尊自爱、存在主义全包含进去了，就这么轻轻的一句话。

-------------------------------------------------

补充一下吧：“老己”是跳出自己看自己，把自己当成客体，这是自我和解的第一步；“爱你”是重视自己的感受，努力让自己舒适，这是自尊自爱的第一步；“明天见”是许诺会再多活一段时间，这是存在主义的第一步。

以上是我的想法，我真是这么想的，我完全不知道这个梗是怎么演化来的，但这七个字给我的感受就是如此，可以说我过度解读，这没什么好辩驳。

衷心祝福大家都能更喜欢自己，找到内心的平静，再坚持一段时间，希望天天都能见。


---

# 似乎很多独立游戏都是年轻人做出来的，35+的大龄游戏人还能从大厂中跳出来做自己的游戏吗？ 夜神不说话

**Author:** 夜神不说话  
**Bio:** 懒散的游戏爱好者。  
**Avatar:** ![](https://pica.zhimg.com/v2-78f9e96eaebed8a480582707c3659c83_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/1f3102aa14be18369d4faa4b90d775e2  
**Published:** 2025.04.27 23:55:30  
**Updated:** 2025.04.27 23:55:30  
**Question:** https://www.zhihu.com/question/4852845720  
**Question Created:** 2024.11.22 18:58:41  
**Question Updated:** 2024.11.22 18:58:41  
**Votes:** 1726  
**Comments:** 125  
**Type:** answer  

我今天就在这儿讲个暴论了。

现在的国内，能做得出独立游戏的人做出来的独立游戏可以分为三种。

分别是，商业游戏，失业游戏，无业游戏。

做之前想明白我这个游戏到底给谁玩，谁给我花钱，我能赚多少钱，我应该怎么赚更多钱，过去有没有做这个成功的；我要怎么做得跟这个成功的游戏相似来把喜欢他的玩家抓过来玩我的，我要怎么做得跟这个成功的游戏不一样来让喜欢我的玩家比喜欢他的玩家更多；社区要做吗，要花多少人和多少钱去管，几个围绕游戏平台的三方社区平台要怎么去做好评维护；投放要怎么做，是做头部主播还是做腰部矩阵，还是自己做账号直接找平台投流……

如果你立项和项目管理时的思考是这种的，那这就是商业游戏。

那如果你说，我管他个damn，老子做这个游戏就是自己爽的，没钱也做，有钱就多烧点钱做，做成什么样不知道，做到老子高兴为止，玩家这东西多了OK少了随缘，我就是要把手上这个游戏做出来，别问我为什么要做，问就是缪斯女神的安排，我这辈子做完这个游戏啥时候死都行，做完这个游戏干嘛，我管他个锤子，做就完了，哥们儿生来就是干这个的，差评我的人懂个锤子，他不喜欢我做的他自己做去啊，评价冰箱不需要会制冷？狗屁，老子当年就是看不惯人家制冷所以才来自己做的，这么多年一个人干不也做起来了吗？

如果你做游戏的时候整个精神状态是这种的，那这就是无业游戏。

商业游戏是好的，如果你秉持着商业思维，把商业思维在立项的时候就想到极致——你做出来的独立游戏是不可能亏钱的。那些成功的商业独游制作团队，他们首先是在做商业商品，其次才是在商业商品里尝试添加一点独立的味道，那这样就变成了有独特风味的商业作品——市场上就缺这个，你做出来了，你就能到那一年的销量榜单前列，唯一的问题只在于，你能不能出得起这个钱，又有没有这个敏锐的商业嗅觉。

如果你要做商业独游，那你投入的成本绝对是越来越高的，10年前这个成本还能说50-100万就能搞定，5年前这个成本已经在200万以上了，2年前这个平均成本已经突破1000万了，别觉得我说话夸张，真实数据就是这样。你要从零开始做到第一款商业独游成功，就得需要这么多钱，或者你能够有足够的换算办法，比如你的某一个创意真的很惊人，这个创意就值200万，OK那你接下来只要准备800万就能成功了。找准合适的赛道，找准精确的目标群体，拥有充沛的私域流量，等等，都能够作为这个换算的资产。

做无业游戏也是好的，就完全不考虑商业化嘛，我可以游戏做完上线去卖钱，但是这也只是基于我觉得我要给我这么多年的劳动和付出留下一个更完美的句点——如果不是我觉得一个做完的游戏就该上架卖钱，那我连做游戏卖钱都不太想搞，因为我觉得做游戏这件事情在过程中带来的满足感就已经足够了，没钱了怎么办？没钱了就想办法赚钱呗，搞钱的路子千千万，我是来做游戏的，不是来做销售的，我要是想做销售我不用做游戏啊，我去某音做主播推销79块钱的眉笔他不香吗，不都是出卖一部分做人的良知？有太多比做游戏赚钱来钱更快的办法了！

当然了，如果你这么想，你肯定没办法融洽地跟整个游戏行业接轨的，你就只能作为一个整个行业都不认可的边缘人，或者更大的可能性就是在行业里直接查无此人——你甚至可以没进入过游戏行业。但请相信我，真正做独立游戏改变世界的人，都是这种——他们单纯地沉浸在自己的艺术创想里，赚钱只是他们创作后偶然获得的一种附属收益。

与此同时，他们中的绝大多数都是超级怪咖，比如那个坑了多个投资人的钱最后10年才做出《画中世界》的哥们儿；比如因为网友攻击他他就fuck所有网友然后觉得你们不应该玩到我以后做的游戏、把自己的退出当做对行业惩罚的《Fez》制作人；又比如那位近乎认为自己是解密游戏之神（事实上他真的是）的乔纳森布洛……

也同样理所当然的，如果你真的有万分之一的可能性做无业游戏做出头了，把你的车库文化变成了全世界的文化，那你自然而然地就会成为行业的新领袖，但到那个时候，与其说是行业接纳了你，不如说是行业已经无法忽视你，他们必须认可你成为行业的一部分。

聊了这么久终于可以聊到一直绕开的“失业游戏”了。

仅代表我个人观点，我认为，如果你单纯是因为失业在家，觉得“我可以把我在游戏公司里的经验拿来做一款自己的游戏然后卖钱”，或者在此基础上还有一个延伸的跳板想法，即“我做完这个游戏上架之后甚至还可以去拿着这个游戏找游戏公司求职”，如果你拥有上述两种想法的一种或全部，我都觉得你做的是“失业游戏”——你从立项的时候开始思考的就是一种失业者思维，你既不想着成功，也没想着失败，你想的只是找个东西把日子吊着。

这也是我今天在开头说“我要讲一点暴论”的原因，因为上面这段话会刺痛很多人，因为中年失业所以跑到独游行业试图开启人生第二春的朋友太多了，尤其是疫情之后这几年，公开裁员和隐蔽裁员的游戏公司两只手都数不过来，从游戏公司流出以后转而到短视频平台上发布独立游戏开发日记的人也越来越多。

我每天都会逛B站，就专门地去找那些有意思的独立游戏，因为我自己有一个一直在做的节目，推荐一些我喜欢的独游作品，其中的绝大多数推荐作品都是我无偿做的，所以我经常会逛B站，看看有没有新的让我眼前一亮的作品。我很享受这个过程，因为如果能找到，对我来讲也是一种经验的获得，我可以从中学习新的游戏设计经验，来补全我自己的游戏作品。

在这样一个前提下，我真的看到了很多很多很多的“失业开发者”，他们一边任务一样地做着自己的“独立游戏”，一边又觉得自己的游戏如果能做完，自己想象中的事业回春就会到来。但如果连你自己都对你自己做的游戏毫无激情，你又如何能说服你的玩家来玩你的作品呢？

没有热爱就不要开始。也许你过去有，在你刚入行的时候，但仅仅是现在，你的热爱已经消失了，你剩下的只有“经验”而已。

永远不要把自己想象成一个失业者。

保持热爱，保持勇敢，然后我们才能把一切交给时间。


---

# 快抑郁了，人生的意义是什么？ 一之濑

**Author:** 一之濑  
**Bio:** 只是不想昙花一现‖船海工程 数学建模 喜欢 无畏契约和日本文  
**Avatar:** ![](https://pic1.zhimg.com/v2-595dc6dc83239b3f44ea49cb1fb8a080_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cb0adb6f0b7fecf1d2dfcd1bdb940a9f  
**Published:** 2024.05.15 03:48:24  
**Updated:** 2024.07.21 20:08:23  
**Question:** https://www.zhihu.com/question/629459419  
**Question Created:** 2023.11.08 17:41:26  
**Question Updated:** 2023.11.08 17:41:26  
**Votes:** 8291  
**Comments:** 121  
**Type:** answer  

半夜看了这么多

我终于意识到，人生是要来体验万物的，不是来承载万物的

人生本来就是一场徒劳的旅行罢了

谢谢知乎，给我推送了这个问题


---

# 如何评价b站up主戒社? 飞逝

**Author:** 飞逝  
**Bio:** 不断学习，不断进步  
**Avatar:** ![](https://pic1.zhimg.com/v2-4b5899c3fdae8b7115f336c85044649a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cdb7a4fb12cf39323b01c316a28a3312  
**Published:** 2025.04.28 01:03:16  
**Updated:** 2025.09.20 16:59:26  
**Question:** https://www.zhihu.com/question/569612603  
**Question Created:** 2022.11.29 22:43:49  
**Question Updated:** 2022.11.29 22:43:49  
**Votes:** 6173  
**Comments:** 99  
**Type:** answer  

虚假的人生完蛋：没考上想要的大学/没考上研/分手了/碰上渣男or渣女/被上司pua/投资亏了/导师人品很差/找不到工作/买不起房/结不了婚/被家里人嫌弃看不起/被延毕

真实的人生完蛋：戒戒你好




没想到随手发布的回答能得到这么多的赞同，是我第一个破了千赞的回答，感谢各位知友的支持


---

# 如何看待“胖猫”的一生？ 卢诗翰

**Author:** 卢诗翰  
**Bio:** 抖音已入驻，也叫：卢诗翰   
**Avatar:** ![](https://pic1.zhimg.com/v2-e0481881e777428a42f0c4cda9bddf32_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7c50fef397641c8dc3ad935326863aa8  
**Published:** 2024.05.03 22:48:54  
**Updated:** 2024.05.03 22:48:54  
**Question:** https://www.zhihu.com/question/654798998  
**Question Created:** 2024.05.02 22:18:53  
**Question Updated:** 2025.07.01 04:06:52  
**Votes:** 50372  
**Comments:** 1668  
**Type:** answer  

其实讨论区有句话让我很刺眼

你都已经是国标通天代了，一上线就一堆妹子排队求带飞的海王圣体，就这还能被女的PUA了？




那一瞬间我突然意识到，历史居然如此相似，这不就是当年的盖茨比观后感吗？

同样是风起云涌的大时代下，同样是从草根中崛起的新一代，同样是共识破碎迷茫的一代，同样是对爱情抱有幻想却坠入深渊。

以前看盖茨比觉得无法理解，你都是纽约新贵，白手起家创一代了，new money啊，家里开个派对一堆长腿美女看都看不过来，结果居然为了女主给自己弄没了？这太不合理了，纯瞎编。

现在想来这可能不是作者瞎编，可能是作者真的见过那个高速发展时代，真有从草根中走出的年轻人还抱着过去道德观念，幻想着理想爱情，结果被现实教做人的故事。

所以他写下这个故事是在告诉我们：

不论你有什么理想什么追求，当你失去爱自己能力的时候，就是你失去一切的时候。

简称舔狗不得好死。

而当意识到这一点后，我突然想到，其实另一批作品，好像也早就讲了类似的观点。

那就是上世纪的日本动漫。

年少的时候我看头文字D，一直无法理解，天才车手拓海和女同学夏树，这明明是无比美好的一对校园恋人，青梅竹马的王道剧情，按照常理来说，接下来应该是夏树和拓海一起去征战各个赛道，一路奋战一起成长的故事。

怎么剧情突然急转直下，出来一个开奔驰的叔叔了？

直到后来我慢慢猜理解作者的意思，那就是理想必须是纯粹的，纯粹到容不下爱情的患得患失。

夏树带着拓海去海边时，拓海默默的将梦想，未来，人生都和眼前这个女孩规划到了一起。这样的人生，可能会是幸福的，但是太小了，更不适合一位天才。

主角的天赋，对车的热爱，对梦想的执着，都是很纯粹的东西，而爱情，尤其是不成熟女生的爱情，恰恰是不纯粹的。把这几者混为一谈，本身就是不成熟的认知。

当你在“我必须思考这是不是我此生仅有的机会”时，对方在“你究竟是爱车还是爱我”，这必然是无法共存的。

想明白这一点，才能成为一个真正的男人。

甚至，为了怕你看不懂，作者还特意安排了主角父亲这个角色作为对比，告诉你一定一定要追求自己的理想，千万千万不要为了爱情妥协。

所以后来拓海的答案是什么呢？

——“我花了整个秋天都在想一件事情，就连冬天还在想，我的梦想是什么，现在我明白了，我喜欢开车，我要成为最快的车手。”




但这还没玩，最有意思的是，几乎一模一样的话，在另一部家喻户晓的作品里也出现过。那就是灌篮高手。

很多人都记得灌篮高手里樱木热血沸腾的那句“我最辉煌的就是现在”

但我觉得，其实最体现角色成长，最升华整部灌篮高手立意的，是后面那句——“非常喜欢，这次绝不说谎”

灌篮高手故事的开始源于被连甩几十次的不良少年樱木花道遇见了校园女神赤木晴子，晴子是篮球队长的妹妹，本身又喜欢篮球，于是热血少年樱木为了追到对方谎称自己喜欢篮球，还靠着天赋和热情混进了篮球队。

后来樱木花道也确实成为了篮球高手，按照一般剧情，故事从为了追女孩打篮球开始，现在拿下比赛打进全国大赛应该抱得美人归了。

但灌篮高手最画龙点睛的一笔我认为就在这里。

在最终的天王山决战上，曾经的纯爱青年樱木花道看着赤木晴子的眼睛告诉她

——非常喜欢，这次绝不说谎

我曾以为你比篮球重要，为了追你我说谎来打篮球

但现在我明白篮球比你重要，篮球是我真正的理想

如今站在你面前的是篮球运动员樱木花道

不是为了什么女神，也不是为了谁而变得更好，我真正的理想，真正的自我，就是要打篮球。

人的一生最重要的是两天，一天是你出生那天

另一天是你明白自己为何而生的那天

是不是没想到？

以前并不理解作者们想表达什么，现在回头看，美国的盖茨比，日本的头文字D，灌篮高手，不同国家不同题材，连画风都不是一个次元的作品，最后的内核居然惊人的一致。国服美服日服，得出的经验居然如此一致。

——所有的屠龙少年，都拒绝了爱情




人们总说屠龙少年是为了救公主去的，电视剧也总喜欢给屠龙的故事加一堆感情戏。
但真相是，挑战巨龙直面神灵本身就是理想，究竟是谁喜欢在这份理想里去加一段俗不可耐的爱情？

你磨好宝剑练好武艺，穿过高山和峡谷，历经艰辛直面巨龙，然后跑来一个公主和你讨论情绪价值，讨论彩礼多少，告诉你赛车不赚钱，篮球手没前途，屠龙少年就会做梦，通天代收入一般般，或者你究竟爱的是你的剑还是我？

我TM当然爱的是我的剑啊

千万不要因为爱情，委屈了意气风发的自己。


---

# 躺平真的会毁掉年轻人吗？ 小轩

**Author:** 小轩  
**Bio:** 没那么想活，却也不太敢死  
**Avatar:** ![](https://picx.zhimg.com/v2-5e4a82e91d2ee0dc2ab59eaf60048924_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d830e20509f1f57f1306579747f7783a  
**Published:** 2023.11.07 21:21:11  
**Updated:** 2023.11.07 21:21:11  
**Question:** https://www.zhihu.com/question/563720815  
**Question Created:** 2022.10.31 17:05:07  
**Question Updated:** 2022.11.15 21:57:48  
**Votes:** 19813  
**Comments:** 350  
**Type:** answer  

如果一个人在年纪轻轻的时候就安于现状及时享乐，想吃就吃想玩就玩。

那等他老了的时候，你就会发现他，

那基本是没什么遗憾了。


---

# 生命应该还有半年，晚期胃癌，不想治了，手里还有七万块钱，应该去哪里旅游才能不让生命浪费？ 林先生

**Author:** 林先生  
**Bio:** IP:林先生-行藏在我  
**Avatar:** ![](https://pic1.zhimg.com/v2-f18e6f74e19b6568b7543b90b6915874_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/186af5f6ca0b328b772290702ccb0242  
**Published:** 2025.12.10 18:10:27  
**Updated:** 2025.12.10 18:10:27  
**Question:** https://www.zhihu.com/question/1978825276369699716  
**Question Created:** 2025.12.01 13:58:30  
**Question Updated:** 2025.12.20 15:02:02  
**Votes:** 16887  
**Comments:** 727  
**Type:** answer  

这位朋友，您好

当人能够知晓生命终点的时候，还是请对自己说一句恭喜，因为接下来的岁月你将会比这个世界任何一位哲学家活的更通透，无论你是市井里的贩夫走卒，还是身居庙堂之中，你都会体会到，接下来的每一天，你都比别人活的更深刻，更珍贵！

关于这七万怎么花，我觉得这个世界上，除了科技在高速变化，其他的领域，都是天底下都没有新鲜事儿，所以用这些钱尽可能感受这世间的进步吧。

推荐第一站去上海，这是中国开放最早的城市之一，有着中国最前沿的文化和现代化生活，可以去三件套里面的某家餐厅，喝一个下午茶，这个价格没有吃正餐贵，也会有不错的位置，感受一下一览众楼小，或许那一刻你会觉得，人生就是这样子，过去拼命追赶着，盼望着自己能够站的高，看的远，但是当看到这美景以后，一切也不过就是喝完一杯饮料之后的乏味。

上海有个游轮码头，从这个港口出发，会有很多游轮，有日韩线，也有东南亚线，目的地不重要，重要的是船上的日子。

要选新的船，会有很好的科技感，船票基本上是吃住游一价全含，非旺季一万以内够了，穿上有各色皮肤的人为你提供服务，免费的饮食谈不上多精致，但是管饱，带套正装吧，船上会有各种晚会节目，演职人员都很专业敬业，气氛都会很燃，叫服务生给你拍张照，既然来一回，那就尽可能的帅一点，好看一点！

记得别去买wifi服务，你花了1/7积蓄买来的人生，不要让它属于任何过客。

船靠岸以前，你会有一阵不想让梦醒的失落感，不要怕，没坐够可以买票再坐一回另一个船，每当船离开港口，记得热情的跟另一艘船上的人用力的挥挥手，仿佛那艘船上有另一个自己，记住，离别是往复，你永远都在。

离开港口，下一站去香港吧，体验一下同种同根不同文化的环境，去找找年轻时候的那些影视作品里面的记忆，推荐你住两晚文华东方，这家酒店非常有细节，也非常有历史，人生到了这里，有些事情，别亏欠了自己。

文华东方早餐厅通常会有三位迎宾服务人员，通常有两个是老外，带你去吃早饭的餐桌儿，可能一开始你会拘谨，但是大大方方吃，你只是他们服务N多人之一，你们对彼此都是过客，谁对谁都不重要，所以当你吃第二顿早餐时，一定要放的开一点，无所谓一点，在熟悉了的环境里保持松弛，是你最对得起自己的活法。

这家酒店服务是核心，记得给收拾房间的人留个字条，把想说的话对一个陌生人讲几句，然后留个你觉得合适的小费，你享受的地方，她在谋生，过去的很多年可能你也是她的角色，对那个过去的自己留下一笔赞赏吧。

酒店可以带走小扇子和冰箱贴，熊猫玩偶，没有可以大大方方管前台要，尽情开口吧，这些都是你应得的。

在那就可以做天星小轮游来游去，可以坐双层巴士，可以去TVB的场景打卡，可以去迪士尼那里感受，一下小时候的偶像。

然后坐车港珠澳大桥去一趟赌城，拿点小钱儿换点筹码，去押两把，你这辈子可能有太多的步步计算务求精准了，一辈子都在输不起的心理暗示下活着，最后发现，其实不过去罗盘上的骰子蹦蹦跳的结果罢了，学了太多的唯物主义客观真理，眼下时光不如唯心主义的随它去吧。

从澳门出了关，去珠海海边住两天民宿，然后可以去深圳，别去老城就去前海南山，看看路上这些来自于全国各地怀揣创造梦想的人，当你看着他们的忙碌你可能会觉得自己还年轻，毕竟在这里，忙是一种生命力的体现。

做高铁去惠州，那里物价房价都不贵，去惠城区江边租个房子也没多贵，体会一下有钱都是深圳人，没钱都是惠州人的性价比，其实繁华之下，人这一辈子不仅是一日三餐，还可以趁年华，诗酒花茶，在这里住段时间还可以去惠州一个叫双月湾的地方租房子住一段时间，只要别赶上旅游旺季，房租不贵，那是一个很美的地方，观景台望去，不输给境外一些海滨城市。

住一段时间以后，可以去广州吃吃顺德菜，人间珍馐美味，就怕是时间太短吃不完，然后可以报个去塞班的旅行团，那你是门槛最低的美利坚入境，花点钱可以体验一下射击，上天，下海，深蓝色的太平洋的悬崖边，听一首任贤齐的伤心太平洋，也是不错的。当年这座岛上的血雨腥风，已经成为了历史尘埃，你方唱罢我登场，宏达叙事对于后世的生命而言，都付笑谈。

这位朋友，你的盘缠可能不多了，你完成了三个一线城市的打卡和香港高配游，以及美利坚的最低配游。

回到国内，去北京周边找一个郊区卫星城，就去密云吧，房租物价都不贵，去北京中心一个多小时通勤，选择在这里等待那一天，那天如果你走了，这是你作为一个碌碌小民距离这片土地权力核心最近的距离。

这位朋友，我们都生于平凡，年少时基于头上那一片天空许下的理想或许没实现，别怪当初来人间时领到的剧本不好，其实还是给你了很多发挥空间的，也别怪当初那个不懂世故人心的那个本我，他其实才是最懂你这套剧本的。

这位朋友，祝你接下来的日子里，旅途顺利！


---

# 什么促使你走上独立游戏开发者之路？ YORIGAMI上海人形

**Author:** YORIGAMI上海人形  
**Bio:** 00后游戏公司老板，目标3A。专门搞二次元的  
**Avatar:** ![](https://pic1.zhimg.com/v2-c3570665de653b6c331881ed25098e39_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0368436a96c4ba582fba6c6e6ca9ad63  
**Published:** 2025.10.15 14:13:10  
**Updated:** 2025.10.15 14:18:28  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 15  
**Comments:** 8  
**Type:** answer  

读华师一附中最后一年非常迷茫。成绩已经稳入985/211，但是内心已经迷茫了。

内卷激烈的高中，看不到上大学的意义。无非就是去另一所名校再关几年。看不到未来的方向。看不到人生的意义。




2017年，初次接触steam。入手黑暗之魂3。

初见古达，拼尽全力无法战胜。

本来已经决定弃坑了，下午最后一次尝试突然发现古达离远之后有两招必出（并非两招），终于战胜古达BOSS，这也是我游戏生涯的开端。你可能说，游戏制作人，又不一定要玩游戏很厉害，但是如果当时我没有玩进去，就绝不会有后续。

黑暗之魂3这部作品第一次将电子游戏的魅力展现在一个只会读书的学霸面前，其冲击之强烈可想而知。

没错，当初的自己菜的连古达都打不过。但是如今已经是单刷黑夜君临深夜5的实力了。

彼时了解到宫崎英高这位制作人。全网都在玩梗，宫崎英高的阴谋，宫崎英高的微笑。

我当时只看到了小高非凡的实力，宫崎英高必成大事。黑暗之魂3反复打了7周目，意犹未尽。

于是去玩了黑暗之魂2和1。（2是谷村的作品，彼时并不知情，只觉得DLC部分做得最出色）

2017-2019，我把宫崎英高全部作品都玩了一遍。这期间我接触了游戏开发。19年买入PS4只为了玩血源诅咒。

彼时，同年只狼问世，宫崎英高果然斩获TGA年度最佳。

可能有人说，到处都是魂游，不喜欢魂游，不喜欢老贼之类的，但是这很正常，并不是所有人都喜欢魂类游戏，而也不是所有人能理解当初宫崎英高的作品对我的感染力。

人生都已经失去意义了，读书读到不想活了，我觉得这时候，一个能重新赋予你意义的事情，比什么都重要。

2020年疫情，大学时期我的游戏生涯逐步进入高峰期。

在PS5问世之时，直接7000元拿下，就为了玩宫崎英高的恶魔之魂重制版护航作。

2021年受邀拿到艾尔登法环测试资格。2022年年初艾尔登法环问世。同年，艾尔登法环二度斩获TGA年度最佳。

可以说，没有宫崎英高就没有如今的我的职业生涯。一位一路追随的制作人，指引方向。

从他小有名气到2020年获得金摇杆终身成就奖，从一开始就没有看错。

而他后继的模仿者，甚至连夏思源这样的制作人，都获得了商业成功。

宫崎英高为人低调，人格魅力很高。

可以说，这些年宫崎英高一直都在引导着如同我这般的游戏制作人前行。

我们每个人都有自己要表达的世界观，但是，在那之前每个人都是迷惘的。有指引，我们便知道该前往何处。


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ YORIGAMI上海人形

**Author:** YORIGAMI上海人形  
**Bio:** 00后游戏公司老板，目标3A。专门搞二次元的  
**Avatar:** ![](https://pic1.zhimg.com/v2-c3570665de653b6c331881ed25098e39_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0368436a96c4ba582fba6c6e6ca9ad63  
**Published:** 2023.07.07 11:40:31  
**Updated:** 2023.07.07 11:40:31  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 32  
**Comments:** 5  
**Type:** answer  

曲线可能是最快的路径。

有时候这条路线还是需要高人指点，需要大哥带一程，剩下的路再自己走。因为这个世界基本没有笔直一条路通往成功的。

一开始都是穷的，没有资本鲜有经验只有技术。一开始都是看不到希望的，直到第一个作品盈利才稍稍有些自信。然而大多数盈利一开始都是亏本的，成本都 hold 不住的…成功的是极少数。

一位比我年长一圈的游戏行业成功人士问现在给你两百万，你会去做什么？

不用考虑别的，两百万拿去随便挥霍，我要么做日风 ARPG，要么做 东方 Project 之魂。

有理想的人有钱的话，国内早就不是现在这个状况，有想法有才能的年轻人多的是，一个个早就想做 3A ，跃跃欲试。

但现阶段没有条件，那就不要硬扛，曲线可能更快。

这不是我说的，这是前辈说的原话，曲线可能才是最短路径。因此不如先放下内心的高傲，去跟一个项目看看，去帮别人做事，去助力别人的成功。

你看看为什么现在这个行业为什么没有 3A？那些赚到钱的都是休闲游戏，MOBA，自走棋，SLG，其实不难理解，这些公司发展业务有个特性，都是先 hold 住成本，再往外拓。

有的快的像米哈游也就几年，有的慢的十年二十年，我高中那会儿米哈游还是小公司，崩 2 给人感觉非常不错，一个横版射击， 米哈游崩 2 到崩 3，崩 3 到原神的进步每次都是大步子，但人家也没说上来就做开放世界二游。

FromSoftware 老本行可是机甲，人家原本根本不是魂系列游戏公司，只是宫崎英高这个人太厉害了，把魂系列名扬了世界，然后今年回归本心，装甲核心 6，为啥？不忘初心，赚钱只为做机甲，真的。

理想是会变的，很多公司做着做着就改变了方向，如果说你能在经历所有的曲线后，依然保持一开始的梦想，你可以去大胆追梦。

但永远没有什么直线路径，所有伟大的成功毫无例外曲线救国，曲线才是捷径。


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ 陆家贤

**Author:** 陆家贤  
**Bio:** 木七七创始人，公司产品有《冒险与挖矿》、《卡片怪兽》等  
**Avatar:** ![](https://picx.zhimg.com/6471e3b2934a122ff45e6d08db87f36f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/f88518df3c53a2a7d1cfaadac756b14c  
**Published:** 2016.06.23 11:29:50  
**Updated:** 2016.06.23 11:29:50  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 48  
**Comments:** 10  
**Type:** answer  

游戏行业三大幻觉 ：

1、我玩过一百款游戏了，我现在想开始做游戏，我应该从策划入手，我会是个牛逼的策划。

2、我玩过十款网游了，现在的发行商都太坑钱了，我应该从运营入手，我会是个重视用户体验的牛逼运营。

3、最大的幻觉：我从雅利达时代就开始玩游戏，玩过一千款游戏了，我会策划美术编程，我能花三年时间做出一款牛逼的独立游戏，不求赚大钱，活下去应该没问题。


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ Cece Wen

**Author:** Cece Wen  
**Bio:** 硬核屠龙少女  
**Avatar:** ![](https://picx.zhimg.com/v2-521a8728c5f92825c7120681a793a0bd_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7f5e55840bf7ce053d2f83960fd289eb  
**Published:** 2016.04.14 01:41:23  
**Updated:** 2016.04.14 01:45:49  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 42  
**Comments:** 7  
**Type:** answer  

哈？为啥答主会认为走其它道路就一定能结婚生子啊？想太多！

……………

对不起对不起我不是那个意思，重新来。




哈？为啥答主会认为结婚生子后就能有积蓄又有前途？只能更悲催好嘛！同样的钱被分刮的更少了好嘛！

……………

对不起对不起，我瞎说什么大实话。再来啊。




哈？才坚持两年就敢说做一个行业前途渺茫？有这种想法的人好像做别的前途不渺茫了似的。

……………

算了我不说了，求举报我。

![](https://picx.zhimg.com/737ceb0656c0709b63c2961034ff0d75_r.jpg?source=2c26e567)







其实我的意思是，人生就是悲催的，结婚可能也不会幸福，稳定也不代表一定有积蓄。

一无所有的毫无疑义的人生，唯一的幸福就是能坚持自己喜欢的东西了吧。

连这个都不要了，其它的即使都有了又有什么用呢？

请别举报我！


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ 氪老师

**Author:** 氪老师  
**Bio:** 策划，有可能是知乎游戏板块最丧的人。  
**Avatar:** ![](https://picx.zhimg.com/193f84a49_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/84976e1be7b65ec66e94eb5c2209c5f1  
**Published:** 2016.04.13 11:58:47  
**Updated:** 2016.04.14 17:07:09  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 347  
**Comments:** 31  
**Type:** answer  

假如一个人，没上过北影，中戏的导演班，没有受过任何正规培训，也没有从一个剧组的底层干起慢慢积累经验，没有任何相关的行业经验。大学学的专业也跟电影完全无关。毕业后他说“我有一个电影梦想”，然后散尽家财，找了几个经历差不多的人花了好几年拍了一个片子，突然发现无法盈利，片子的质量也没有高到能拿到电影节上拿个奖什么的。

“我的初衷是不想被商业电影资本沾染，只想拍自己想拍的片子。但是现在同学都一个个结婚生子了，我是不是该放弃？”

题主你会如何评价我刚才说的这种人？

为啥大多数人都觉得做游戏这么容易啊？

哎~负能量的答案这么多人点赞，大家还是点一下同楼的

[@姚杨](https://www.zhihu.com/people/afcb05ceaa83f8e0b6f2fd11dd905954)

老师的答案吧，我觉得写得更好。


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ 一郑二郑

**Author:** 一郑二郑  
**Bio:** 微信zhengjintiao  
**Avatar:** ![](https://picx.zhimg.com/v2-7450850f46ce571434836262c7e68072_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c7ea4a83791990952e2cee95f0bebf10  
**Published:** 2016.04.15 20:46:44  
**Updated:** 2016.04.15 20:46:44  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 91  
**Comments:** 2  
**Type:** answer  

这个问题同样是很多受挫的开发者惶惑的问题

一开始毫无疑问都是带着：**热爱、热情和对未来无比执着和憧憬**

觉得要为一份伟大的事业奋斗一生

但唯独缺少两个最关键的环节：**专业度和职业度**

> 没有高度的专业能力，你就会在打造什么样的产品上无比迷茫，起点一旦迷茫必然全线迷茫




> 没有高度的职业态度，任何挫折都能放大为灭顶之灾，没有预料到做任何事必然都是困难重重，而抗住问题是职业精神的一部分。




特别是在一个无比残酷的市场

**市场不仅对小型团队残酷，对那些曾经成功过的大型机构同样毫不手软**




**在产品型环境下，一步踏错，谁都可能说再见。**

所以，

要么学会坚韧，要么尽早放弃。


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ 姚杨

**Author:** 姚杨  
**Bio:** 游戏行业  
**Avatar:** ![](https://picx.zhimg.com/v2-94d0ea104ceb969219b79394106fa404_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/afcb05ceaa83f8e0b6f2fd11dd905954  
**Published:** 2016.04.14 16:07:19  
**Updated:** 2016.04.18 17:43:29  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 1119  
**Comments:** 79  
**Type:** answer  

利益相关：游戏开发者。

你的问题我看完了觉得有点惭愧，还有点惊吓。

国内的媒体、包括这些标榜独立游戏的开发者，谈苦难、谈理想、谈坚持的太多。我都觉得惭愧，这种惭愧更像是臊得慌。感慨有一些。实在见的太多，现在同情都欠奉。

回到问题，描述中有许多非形式谬误，或者说不当的因果推论。都是你的潜台词和注脚。

不想被商业资本所沾染，很怕自己成为他人控制下的傀儡。

如果你不怕被沾染，愿意成为傀儡。商业资本会张开双臂欢迎你。

当初一起毕业的同学们都陆陆续续结婚了，家里也开始催促。

如果你不做独立游戏，你已经结婚了。

做出了一些游戏，可是做出的游戏没有推广途径不知名更不能盈利。

如果有推广途径，你已经盈利了。

以上这些，均无因果。全都是你想太多。拿这些东西，把自己打造成不忘初心坚持理想的悲剧命运，可能你只有这些。潜台词是：如果我放下原则，早就走上人生巅峰赢取白富美了。

是不是真这么想，只有你自己知道，现在你话里话外全是这个意思。

不管坚持什么，是否成功，大都靠自个的道行和本事。韩寒昨天开了个发布会，抛出了对他来讲挺特殊的主题：“要让这个世界更好,更多是靠科学和商业。”

他拥抱商业，或者说导演身份之前。很长一段时间里，是近乎堂吉诃德式的对抗者，我没看到什么贵人襄助，巅也巅了。原因归纳起来就一点，活好。

写东西、做游戏、拍电影都是一样。

请拿作品说话。

你作品好，或者有成绩，爱务虚那是你的个性。

文艺复兴时期早过了，你没见过，我也没见过。

只说今天，书刊、游戏、电影都是文化产业，从创作生产角度甚至是工业。游戏开发是工业、音像是工业，电影也是工业。工业不排斥创意也不排斥理想主义，但必须强调技术和专业性。

泡在论坛学习，吃泡面维持。都是不值得同情的不如意。

不会有人为你的遭遇道歉。要我说，请前后看看，这条路上的失败者过江之鲫，理想比你远大，专业性比你高招，血比你更热。与其自悲自苦，强调穷尽自己财力物力凭借热血和意志力的壮烈…原谅并且放过自己吧。

污名化商业资本，把它比作地狱的使者，是一桩妙事。某些机构行事方式也如出一辙，“进得门来，要放弃一切”为号召，也算爽朗直白。利益交换，你情我愿。

你在门外，离大门不知道还有多远的距离，现在没人喊你进门去。你说这门我绝对不进。自尊自爱不自知的程度，和民科有一拼。

见的多了，我对只会卖弄热血和情怀，拿不出作品的独立开发者一肚子偏见。游戏行业是个迅速造富的行业，没有作品的独立游戏开发者，常常跑到行业论坛或媒体面前，掩盖嫉妒卖弄不甘。

明明是不带你，也轮不到你。

凭什么带你？

回复

[难忘终年](http://www.zhihu.com/people/nan-wang-zhong-nian)




> 虽然现在做独立游戏更多的是一种情怀或者热血,但是谁没有年少轻狂过?最好更多的看到背后隐藏的一些值得鼓励的地方,而不是一味的毒舌,那跟金星之类的有什么区别了?




姚杨（作者） 回复 @难忘终年 查看对话

这篇答案写的很克制。其实圈里人都明白，国内这两三年，出了大把毫无水准可言，打着独立游戏的垃圾，让独立游戏几乎被污名化，背后的大环境是什么。游戏摘电子海洛因的帽子没多久，忽然成了金矿，个个兴高采烈，似乎有取之不尽的财富和盛名，等着去摘取。少年郎受用于自己的梦想，虚掷着尚弄不明白的热血。活到二十多岁，读书时吃穿用度从家里出，毕了业继续啃老。眼见路越走越窄，瞅着快要凋零，就变法出来做戏。戏演的一半海水一半火焰，一半楚楚可怜一半恣睢畅意。我有时觉得，未必是这些人心智不健全。倒是你们这些人，给了他们生存的智慧。非要在一片荒芜的不毛之地里，竖上一块年少轻狂的牌坊，找到“背后隐藏的一些值得鼓励的地方”。愚不可及。


---

# 为什么有人说汉化组是伟大的？ Aki

**Author:** Aki  
**Bio:** 最近有点不太友好  
**Avatar:** ![](https://picx.zhimg.com/v2-07e35d1d8fc2c3a7fc0922c58f7024ab_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ebf6422c9922c311ded87d62729789aa  
**Published:** 2025.06.03 13:32:26  
**Updated:** 2025.06.17 20:41:58  
**Question:** https://www.zhihu.com/question/283471198  
**Question Created:** 2018.07.01 19:42:55  
**Question Updated:** 2018.07.01 19:42:55  
**Votes:** 7775  
**Comments:** 564  
**Type:** answer  

03年-04年，我在极影字幕组，以houhou1982的网名做翻译。

我翻过钢炼，仙境传说，人鱼之森，以及其他我已经想不起名字来的很多动画。

我和我日语系的一位同学搭档，不是我翻她校，就是她翻我校。

我们的工作流程是这样的，字幕组把番剧分成两档，第一档是热门番，要求日本播完，24小时内完成汉化。另一类是其他番，可以在48小时内完成。

我和我同学当时已经大四了，时间充足，所以接了不少热门番。

日本一般在晚上播出，负责片源的组员会在几小时内上传，翻译就守着等。等到下载完，已经接近22-24点了。然后立即翻译。

当年没有ai，全靠耳朵听，一句一句，听不懂就翻来覆去地一遍遍地听。

我和我同学因为是日语专业的，当年已经是字幕组里最专业的翻译了，一部20分钟的动画，也常常要到凌晨3-4点才能完成。

完成后发给校译。校译起床以后就开始工作。校对时间主要看翻译水平。如果是我同学，我只要花1小时校对，如果是其他翻译……我有时甚至感觉自己重新翻了一遍╮(￣▽￣"")╭

校对要在上午把稿子交给时间轴，然后时间轴开始卖力地对着稿子一句一句打轴。一般一部20分钟的番剧时间轴大约2-3小时，视熟练程度。

因为时间轴一般听不懂日语，有时翻译和校对是新人没经验，不知道要断句，时间轴就惨了……

接下来是特效和压制。这两个工作并不复杂，做起来比较快。

这几个环节环环相扣，才可以保证大家在18点前，在论坛上看到最新一集的发布。

非热门番轻松一些，不用守着电脑连夜翻译，只要第二天之内把稿子发给校对就行。

至于报酬，当年的字幕组都有自己的论坛，上面有大量资源可以下载。不过要使用论坛币。

字幕组当年发的“工资”都是论坛币，按“集”计算，翻译的工资是最高的，其次是时间轴，然后是校对和片源。另外，字幕组下载免费。

因为我不要命的工作，所以我当年的“工资”每个月都是最高的，几个月后好像累积了有几十万。

下载又不花币，我就跑去论坛灌水区给人发红包。

论坛普通成员赚论坛币很不容易，只有发帖和收红包两个途径，好像版主也有工资（？）

像我这种揣着几十万论坛币的，简直就好比亿万富翁。

在当年的极影论坛里，有非常多的动漫爱好者注册成为用户，而字幕组成员数量极少，也很少会到处乱逛。

所以当我顶着个“字幕组”的标志，出现在灌水区时，引起了一阵围观。

再加上我拼命发红包，更加引起了骚动。

后来是灌水区的版主，对我这种破坏经济的行为忍无可忍，跑去把字幕组的老大找来，把正在灌水区玩得不亦乐乎的我抓了回去。

后来，我就失去了在论坛里撒币的快乐，只能做一只无情的翻译机器╮(￣▽￣"")╭

04年6月我毕业了，找到了工作，就引退了。

现在有了ai，有了自动听写，也有了自动打轴，汉化的工作想必轻松了许多。不仅如此，现在网络时代的年轻人的外语水平也比我们当时好了很多很多。所以现在的番剧翻译质量都非常高。

只是，如果你们找到了一些那个年代的老番，请不要吐槽老番拙劣的翻译水平。

那真的是大量自学了一两年，两三年日语的爱好者们，抱着词典，一句一句，靠耳朵听下来的。

——————————更新————————

想起一件事，当初钢炼的主题曲里有一句词，我同学翻成了“焦炙的胸臆”。

我在qq上发消息给她，我说，大姐，你能不能通俗点，胸臆是个啥玩意儿。

大姐不乐意了，礼拜一去了学校，冲进我宿舍抓着我理论。

最终鄙人迫于淫威，不得不妥协。

直到今天，我们都40多了，偶尔见面时还会想起这句“焦炙的胸臆”，调侃几句。

大姐现在被她念高中儿子安利，沉迷于《迷宫饭》╮(￣▽￣"")╭

每次见了我都要安利，我说我已经十几年不看动漫了，换回她一个大白眼╮(￣▽￣"")╭

————-再次更新———————

最近重温了一遍漫改剧《交响情人梦》，突然理解了各位在评论区对b站官方翻译的吐槽。

官方翻译居然把日语里的ニ短調（D小调）翻译成了二短调……

我做过官方翻译。2002-2004年，我做过上海电视台的动画片翻译。因为是官方渠道，所以都是有台本的，一集一本。（我当时翻过棋魂中考试部分的十几集，记忆太深刻了，直到现在重温时那些台词都记得很清楚）

对民间字幕组来说，汉化各种剧最难的部分就是听译。一旦听不懂，就各种空耳，急得抓耳挠腮也无济于事，最后只能乱猜。

我后来自己汉化过宝冢的剧，有些找不到歌词，又各种美声空耳，真的是一筹莫展。后来买到了台本，和自己听的一比对，真的是各种笑掉大牙的空耳。

民间字幕组如果翻错了，那真的是有心无力。

但官方翻译的错误是不可饶恕的，因为你们！有！台！本！！！！！！

有台本还特么的把ニ短調翻译成二短调，你们特么连动动手指查一下专业术语都懒得查吗？？？直接照抄台本上的日文汉字吗？

特么抄都抄不对，一个专业翻译，连片假名的ニ和汉字的二都分不清楚吗？？？

特么民间汉化组有多羡慕你们手里的台本你们知道吗？？

真特么滚犊子！


---

# 中国大多数导演和编剧的现状是怎样的？ 匿名用户

**Author:** 匿名用户  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-d41c2ceaed8f51999522f903672a521f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0  
**Published:** 2017.08.20 12:15:09  
**Updated:** 2017.08.20 12:15:09  
**Question:** https://www.zhihu.com/question/64098746  
**Question Created:** 2017.08.18 17:25:45  
**Question Updated:** 2020.02.19 23:44:13  
**Votes:** 300  
**Comments:** 38  
**Type:** answer  

一年以后你可能会发现，北电你也考不上。

一年后考上了北电，你又可能会发现你不出众没天赋。

一年后你作为一个天才考上了北电，你又可能发现身边的人没什么天赋但是有钱，机遇不总是会留给努力的人。

四年后你作为北电毕业生毕业了，你会发现有很多北电的中传的传媒类顶尖学校的毕业生多得数不清，在剧组订盒饭的都是浙传新生代表。

你可能在大学四年没取得了什么成就。

拿了众多没意义的小奖，在面试中说，在亲戚面前说，告诉自己我很厉害。

你可能在大学四年拿了大奖。

被赏识，但到任何一个公司剧组都是从底层干起。

你可能没能迸发出什么灵感。

北电的毕业生哪怕开艺考辅导班一年至少也能赚2、30w，生存无忧。

你可能写出了令人耳目一新的本子。

你可能拍出了令人眼前一亮的片子。

你的名字在报纸上在微博上在头条上昙花一现，可能连几天的热度也维持不了。

当然还有可能，你的创意在初期就被老油条给神不知鬼不觉地拿去，你白白给人铺了路。

十年后，你可能没有混出什么名堂。

拿着名校毕业证叹息伯乐不存，可能开着个辅导班，或者给些不出名的网剧冷门电视剧写你自己也看不上的本子。才华是会被琐屑磨掉的。

十年后，你可能混出了点名堂。

拿了奖，遇到贵人，在业内小有名气。

但在百姓间呢？

普通人知道明星拍了某某电影，不一定知道电影的编剧跟导演。

火起来最快的路不是美名，是骂名。

这已经是最好的结局了。你在每一个节点都走得很成功，你已经是这个行业的顶尖了。接下来对你评判的不是公司不是同行是百姓。你拍的片子，他们可能看不懂。

看不懂。

懒得看。

你可能要迎合市场了。

你算算那些传媒学校一年能培养出多少人。

你数数你认识的知名的编剧导演有几人。

你问问你身边的人知道的编剧导演有几人。

当然，你能赚到钱。

但也就只能赚到钱了。

这个行业跟其他任何行业都没有区别，只是更加残忍，更加看重运气，更加看中天赋，更加看重人脉。

不过这些都是后话，你需要先把北电考上。


---

# 为什么现在很多大学生总是显得无精打采？ rq cen

**Author:** rq cen  
**Bio:** 清华基科，巴黎综合理工硕士，专注分享知识与学习干货  
**Avatar:** ![](https://picx.zhimg.com/v2-91f247a720149571f939d997e5404dd1_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ee7c4d24982ed163415dd3c0f29b44f5  
**Published:** 2025.08.13 12:40:57  
**Updated:** 2025.08.13 12:40:57  
**Question:** https://www.zhihu.com/question/1937471074641109324  
**Question Created:** 2025.08.09 11:11:40  
**Question Updated:** 2025.08.09 11:11:40  
**Votes:** 388  
**Comments:** 18  
**Type:** answer  

没找到自己发自内心认同和热爱的目标。没有动力自然会无精打采，这是现在很多年轻人早早被家长和学校强行规划路线、灌输功利心，缺乏对本心的感受和遵循，无法做出自己认同的选择，成为无情的肉体而非有灵魂的人类的结果。

我十多年前念大学时，包括自己在内的室友和同学们一天到晚一年到头都跟打了鸡血似的，拼命地学习，拼命地科研，拼命地运动，拼命地打dota，总之做什么事情都很拼，关键原因就是因为这些都是我们发自内心认同和热爱的事情，而那些没有认同没有兴趣的事情，干脆做都不会去做，实在违抗不了的就草草应付。

专业是我们自己选的，选择这个专业的几乎唯一原因就是喜欢，根本没考虑过什么就业和赚钱，所以大一大二每天起早贪黑拼命学习，只要是没课的时候绝大时候都是在自学，每天学到晚上一两点充电应急灯没电了才被迫睡觉，第二天又起个一大早去占第一堂课第二排的座位，因为第一排的座位实在占不到。当初没太多好教材和习题册的情况下，很多同学都在刷《吉米多维奇》（虽然不一定都刷完，但也能做掉全部题目的两三成），图书管理能搜刮出来的各路英文原版、翻译版、影印版教材无止境地刷刷刷，跟中学时沉迷dota在网吧没日没夜地开黑没有区别。

有些同学非常喜欢科研，从来没想过什么毕业以后挣大钱或者当人上人，有位室友的原话就是“只要能让我做全合成，饿不死就行”，毕业后申请留学的主要原因是当时美国的科研实力确实强，跟什么大别野、大汽车之类的没有任何关系。大三大四开始接近全职科研的时候，每天朝九晚三四地泡在实验室里刷文献做实验，也没想过什么保研留学之类的，只觉得自己在做的项目很有意思和前景，只要自己在做自己喜欢的的事情，什么保研还是留学又有什么关系呢？并且的确有几位科研非常有成果的室友和同学，因为应届那年没有申请到理想的课题组，硬是拒绝了教授直接帮忙联系的麦吉尔、奥斯汀、新国立的博士项目，坚定地在中科院感兴趣的课题组打了一年工，来年继续申请。

至于运动和dota就更不用说了，足球、篮球、沙排、羽毛球、乒乓球、藤球的各种班队、系队、校队，就是出于好玩才去参加，玩乐是主要目的，锻炼身体是次要目的，被灌个15:50，被踢个0:7，羽毛球只得一分（对方说出于礼貌不能给0分），有时跟室友打一晚上dota被坑得一局都没赢过，也不会觉得不开心不爽厌恶游戏，只会享受运动和dota的乐趣，赢赢赢什么的根本不重要，玩乐本身才是最重要的。

整个大学四年是人生中最快乐的时光，因为可以毫无节制地沉迷于自己热爱的专业和玩乐中，不只是学习和玩乐的时间非常自由，学习和科研的资源平台非常充沛，更是因为出于人生中体力和精力都极端充沛的时候，平均下来每天睡不够6个小时，有时连续十几天每天睡不够4个小时，却仍然像打了鸡血一样精力充沛，还不需要像小时候被家长关着不能学习或打游戏到太晚。

正是延续着这种盲目追随本心的态度，以及对物质条件的极低要求，我们也都各自选择了自己发自内心认可或喜欢的职业发展道路，用世俗眼光看的话，很多人刚毕业的前几年甚至近十年都过得非常“不成功”，但是我们压根不在意这些，反正做的是自己喜欢的事情就能开心，维持基本的生活并不困难，并且随着长时间的努力和积累，若干年后大家的事业都有了起步甚至有的飞升，但是这些也都无所谓，重要的仍然是做自己发自内心喜欢和认同的事情。

我在知乎上分享了很多高中数理化生的知识干货和学习方法，用去了不少的事件和精力，开始的很多年都没什么收益，但是我选择做这件事情，就是因为我觉得帮助学习方法不当和资源不足的学生走上正式学习的正途少走弯路是件很有意义并且能让自己开心的事情，在知乎上分享有用的知识本身就是在娱乐，所以才能坚持这么长时间——不应该用“坚持”，而应该用“沉迷”。现在收到不少网友的认可和平台的支持，并且北京大学出版社帮忙出版成了合法纸质出版物，但这些世俗的结果都只是排在第二第三的因素，排在第一的原因只有一个，就是“我想”。

现在的很多学生要么过早地被家长灌输了“人生征途”，要么过早地世俗化功利化，把自己变成了追求世俗功利价值的机器，用分数、金钱、职务、排名之类的东西来定义自己，而不是自己作为一个有灵魂的人类，发自内心所热爱和认可的事情。如果在“赢赢赢”的道路上不再顺畅或者道路不明，那么的确没有什么动力能够支撑。很多时候，人就是靠一口气撑着，这口气就是自己的内心。

最后分享一部我非常喜欢的电影《搏击俱乐部》的几句台词，这几句台词是我非常认同并且始终坚持的原则。小时候很多动画片、电影、电视剧都会一再强调“遵从内心”，现在感觉越来越少了，不知道是不是越来越少的人如此选择了。但是作为中年人的阅历来看，现实中事业成功的人或虽然事业不行但内心快乐的人，几乎都是选择遵从内心的人。

![](https://pic1.zhimg.com/v2-6c601a0d98efe9d2e521aa5f38ee9375_r.jpg?source=2c26e567)


---

# 程序员最大的悲哀是什么？ hzwer 黄哲威

**Author:** hzwer 黄哲威  
**Bio:** PKU - 阶跃星辰 - github.com/hzwer  
**Avatar:** ![](https://picx.zhimg.com/v2-59cabb5acaf6c8d71a202129508cd7f9_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ae9fbe0842d7c11ccb04a6c89ef32cbe  
**Published:** 2024.11.12 18:58:46  
**Updated:** 2024.11.13 14:55:47  
**Question:** https://www.zhihu.com/question/50327690  
**Question Created:** 2016.09.04 13:57:17  
**Question Updated:** 2017.10.30 08:50:12  
**Votes:** 2135  
**Comments:** 96  
**Type:** answer  

**向复杂性妥协的宿命**

初学算法的感觉很美

递归，背包问题，搜索树，树状数组

好像都是世界运行的本质

后来的高级算法

不可避免要背模板，记边界条件

网络流很美，动态树很美，快速傅立叶变换很美

几个月不写就想不起细节了

各种怪树套树后缀树变异树，模板只能硬记住两周

相关的题都是套路，有时候都都没包装

给你一个序列，请支持如下 ABCDEFG 七种操作

学编译原理、体系结构、网络，一个比一个复杂

分不清哪个是原理，哪个是历史包袱

记住了无数的名词和定义

才走到了现代世界

了解了一些实际工程和科研问题

才发现个体的智慧与时间，在无穷多的难题面前微不足道

写了几年代码，加总起来大概就是在一些问题上做了几次随机梯度下降

从全局优化的角度看来说不定是负贡献

即使知道一个方案的几十种改进，但是实现的时候不断出 bug

只能一直回滚，思考各种细节想到失眠

写很多很多 if else，或者是奇奇怪怪的超参数

收拾祖传代码难上加难，issue 数量都不收敛

日常压不住熵增

偶然做好一点东西，消融不出来自己做对了什么

在甜蜜的梦里，我想出了几条公式，几行代码

它们浑然天成，效果拨云见日

美到一个字符都不用改

美到把一切复杂都还原

但是梦醒了，我什么都没做出来

我都不知道我要解的问题是什么


---

# 很好奇现在的中学生（包括初中生，高中生）流行什么呢？ Abnegazione

**Author:** Abnegazione  
**Bio:** 学生党  
**Avatar:** ![](https://pic1.zhimg.com/v2-28125fb76d34851bedb0487053149d8e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7040988447c6d61885194d6752ca817c  
**Published:** 2025.05.25 14:44:48  
**Updated:** 2025.05.26 00:33:30  
**Question:** https://www.zhihu.com/question/659786782  
**Question Created:** 2024.06.24 20:18:45  
**Question Updated:** 2024.06.24 20:27:48  
**Votes:** 391  
**Comments:** 45  
**Type:** answer  

看了一圈回答

只能感叹年轻真好

才大二20岁就已经内心空虚、精神涣散到，对绝大部分答主如同掉书袋般抖各种小众名词列出的各种东西，什么小说游戏哲学运动电音编程硬件甚至于扩大人脉圈子多社交恋爱，统统完全提不起任何兴趣，有时候甚至对那些故意夹杂英语刻意抖各种抽象名词感到生理不适

哪怕和室友偶尔聊天也只是为了小组任务

只想着下一顿吃什么维持生命和别挂科顺利毕业就已经可以了……

如果我还是个初中生，我肯定热衷于钻研琢磨这些东西……但是现在感觉整个人的精气神完全被抽空了，只想着这些东西能不能换来实际价值，最终活成了自己曾经讨厌的只讲工具理性的牛马……


---

# 程序员的悲哀，是什么？ Code不动man

**Author:** Code不动man  
**Bio:** 哎哟~你干嘛  
**Avatar:** ![](https://picx.zhimg.com/v2-d813bfa0928c2a8090c363988dbbd8eb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/50e706086294f93c0a625351b65e159d  
**Published:** 2023.10.24 00:01:30  
**Updated:** 2023.10.24 00:01:30  
**Question:** https://www.zhihu.com/question/623619789  
**Question Created:** 2023.09.25 05:24:14  
**Question Updated:** 2023.09.25 05:24:14  
**Votes:** 5654  
**Comments:** 190  
**Type:** answer  

几年前，当我花一个月用C语言写完了第一个小游戏时，我的心情无比畅快，以为自己是一个小小世界的上帝；

几年后，当我坐在公司的小小工位，视线在浩如烟海，宛若迷宫的代码中游走时，才发现自己只是现代工业文明中某个巨型码头里，背负着一行又一行代码往返搬运的小小工人。


---

# 谁能告诉我活着是为了什么？ 阿布拉古

**Author:** 阿布拉古  
**Bio:** 自闭，社恐  
**Avatar:** ![](https://picx.zhimg.com/v2-bd1a034fef134920b5c67130feca1ccb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/431257d43509ff2c12a8a76ba9770617  
**Published:** 2023.01.25 10:14:33  
**Updated:** 2023.07.14 09:51:45  
**Question:** https://www.zhihu.com/question/57065901  
**Question Created:** 2017.03.14 00:02:47  
**Question Updated:** 2017.03.14 00:02:47  
**Votes:** 9267  
**Comments:** 607  
**Type:** answer  

我很喜欢王小波的这段话：

“我来这个世界，不是为了繁衍后代。而是来看花怎么开，水怎么流。太阳怎么升起，夕阳何时落下。我活在世上，无非想要明白些道理，遇见些有趣的事。生命是一场偶然，我在其中寻找因果。 ”

还有尼采：

“你要搞清楚自己人生的剧本，你不是你父母的续集，不是你子女的前传，更不是你朋友的外篇。对待生命你不妨大胆一点，因为最终你都要失去它。生命中最难的阶段，不是没有人懂你，而是你不懂你自己。”

“别人说的再好，那都是别人的，

这个问题永远只有自己才能回答。”

后边这句是我说的，哈哈，我就凑个热闹。

![](https://pic1.zhimg.com/v2-e73365a0ed6dcc8e49eda729a1c85805_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-ecad65f0cdee55e0290cf6536b658c63_r.jpg?source=2c26e567)


---

# 谁能告诉我活着是为了什么？ 有光

**Author:** 有光  
**Bio:** 我是有光，我的熊猫很可爱，愿与诸君共勉。  
**Avatar:** ![](https://picx.zhimg.com/v2-a064acbca28c478aea759896ddc4e7f6_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/04ad3d5af845b7be340ecd09f4e1d8e8  
**Published:** 2023.02.01 02:57:47  
**Updated:** 2023.05.11 20:25:52  
**Question:** https://www.zhihu.com/question/57065901  
**Question Created:** 2017.03.14 00:02:47  
**Question Updated:** 2017.03.14 00:02:47  
**Votes:** 13934  
**Comments:** 709  
**Type:** answer  

你晚上躺床上把眼睛闭起来，想象你正在从第三视角去看你自己，把你现在的生活乃至一切当作一个游戏，姑且将这个游戏叫做《地球online》。

在这个游戏里，你所有的体验感都是百分百真实，你的主线任务是一个能够倒计时的沙漏，一般在80年内，如果你现在20岁，那么沙漏倒计时的时间就只剩60年，沙漏清零的那一刻，这款游戏就结束通关了，

## 它不以你在游戏里是何种身份做何种事情为判定游戏作为通关的依据，但自杀除外，自杀意味着游戏失败，你提前退出游戏。

## 现在你想继续这个游戏么？你可能会说这游戏我玩的好痛苦，找不到角色活下去的意义，我想退出游戏，哪怕游戏失败我也接受。

如果你选择退出游戏，显然你依旧是个萌新，还没有理解游戏的精髓，在这款游戏中没有NPC，所有人都是玩家并且处于同一时空，时间线也都是即时的。

因为没有NPC，纯粹依靠玩家自己摸索，这样势必会造成两种空间，安定和动乱，显然你现在处于安定的空间。

## 在一个大体空间确定的情况下，你的人生轨迹也会被相对应的规则束缚，而这也是你迷茫痛苦的根源。

你在这个游戏注册账号登陆时，是通过两个老玩家以“生命大和谐”的名义创造出来的，从此你在游戏中的命运有一大半甚至全部都被这两个老玩家捆绑。

你开始摸索一种叫学习的技能，并且去了一个叫学校的地方，如果你的学习能力差劲，那势必会被玩家瞧不起，而这种行为是直接否定你在游戏中的人格，甚至会让你萌生退游想法的鄙夷。

这是你来到这个游戏后得到的第一份玩家共享攻略：一张纸上的分数能够代表你的一切，分数高的玩家自带光环，完美无缺，处处得到照顾，前途似锦，分数低的玩家则是一无是处的废物，前途渺茫，暗淡无光。

你摇摇头，看着窗外风景，阳光洒在你的脸庞，其实你来这款游戏就是想体验不同的地图和不同的人与事，可现在你却被锁在这里，动弹不得，没办法，这毕竟是玩家共享攻略，你不得不重视。

就这样在这款游戏里，你的沙漏前18年乃至前22年甚至前30年都在为这些分数耗尽时间，你身边的新玩家或者老玩家都在告诉你，学习是一件决定你整个游戏体验感的关键事件，他们称之为“命运”。

你很痛苦，因为你没有在这项叫做学习的技能上拔尖，你只是进入一所普通的大学，甚至没有进入大学。

我们现在加快时间进度，以一个普通玩家的视角将沙漏倒计的时间调整为58年，这也意味着你已经进入游戏22年。

你开始离开学校进入社会，关于之前叫做“学习”的技能正在离你远去，你知道自己再也不可能像高中时代那样废寝忘食，挑灯夜战。

你迎来游戏里的第二个玩家共享攻略，赚钱。

钱决定你以后的命运，没钱你就是一无是处的废物，百分之99.9的玩家一生都在为这件事奋斗。

你的学历似乎无法变现成更多的金钱，你开始恍惚，拼命想要赚钱，同时你也羡慕那些出生好，羡慕那些考上名牌大学，羡慕那些高薪闲工，羡慕所有比你好的玩家。

因为你没有赚到什么钱，每天身心疲惫，被社会毒打，痛苦至极，沙漏倒计时也来到50年，你突然发现自己并没有赚到什么钱，时间反而在加速流失，你仍旧单身，看着镜子里的自己你有些愣神，你不再是以前年轻活泼精力旺盛的你，你还记得你当初登陆账号时随机生成的肉嘟嘟的脸，怎么一下子肚子也有赘肉，挂上两个游泳圈了？

身边的玩家都在暗示你，赚不到钱就是一无是处的废物，这和当初他们告诉你成绩不好就是一无是处的废物一样。

此后你勤勤恳恳996，并且迎来第三个玩家共享攻略，买房买车。

于是你咬牙贷款30年付了首付，买了新车，但还是单身。

因为你打光棍，街坊邻居，亲朋好友都在瞧不起你，笑话你。

身边的玩家都在暗示你，不结婚打光棍的不是无能就是有问题，这个问题可能是身体上也可能是精神上。

这是你的第四个玩家共享攻略，结婚生子。

于是你马不停蹄相亲另一个玩家，你们结婚了，并且正好有新的玩家注册登陆，他来到你的家庭，成为继承你下一任《地球online》的传承者。

此刻沙漏的倒计时还有30年，你不知道为什么时间过得如此之快，好像并没有体验到游戏里的乐趣，你要养家糊口，尤其是新成员的到来让你第一次拥有大展宏图的动力，你把自己在游戏里走过的弯路吃过的苦都告诉新玩家，希望他能够青出于蓝，可是新玩家好像有自己的想法，就像当初你第一次注册登陆时打定主意要去外面的世界看一看，逛逛这款游戏的所有地图，体验不同的人和事。

很可惜，直到沙漏的倒计时还有20年时，你仍旧在某块地图的某个角落偏居一隅，你创造的新玩家也和当初的你一样进入社会，开始重复你走过的路，显然他也在用同样的玩家共享攻略。

你的第五个玩家共享攻略到来，严格意义来说这是个大礼包攻略，囊括与你结婚的玩家是否优秀，你们生下的新玩家成绩是否优秀，出社会后是否赚到大钱，有没有买好婚房，结婚生子……

直到你的沙漏倒计时还有5年，1年时，你看着新玩家和新新玩家突然感到一丝欣慰，游戏马上要通关了，虽然体验感很糟糕，但你最起码来过。

恭喜你通关游戏，你看着游戏回放的录影，心中有些怅然若失，总觉得你不是在玩游戏，而是游戏在玩你，大部分时间你都是苦闷，空虚，迷茫，麻木的。但你转念一想，还有人中途受不了直接退游，连游戏都没通关，你总比他们强一些，你不免有些小得意。

这时身边的兄弟走过来兴高采烈跟你分享《地球online》这款游戏。

他的出生和你差不多，考上的大学跟你也差不多，但是他中学就早恋，会偶尔逃课去参加某个音乐节，会路见不平拔刀相助和人打架，完全是游戏里坏学生的做派，大学时有些收敛并且会尽可能进入社会兼职，走人情世故，当然恋爱也没少谈，但他从未结婚，没有生孩子，没有买房，没有买车，他一人吃饱全家不愁，他去了你从未去过的地图，见识了你从未见识过的风景，遇见了你曾经梦想遇见的人，经历了你曾想象过的事，他的前40年乃至前60年的人生都是非常潇洒自如的，完全没有你在游戏里苦逼的样子。

你意味深长的对他说，你就不考虑考虑你60岁以后的日子？你中学时的做派难道就不怕引起其他玩家的不满？你就不能对创造你的两位老玩家付点责任么？因为你的原因，你断送了他们的传承，你太自私了，你会后悔的……

他目瞪口呆的看着你，询问你是不是玩游戏玩魔怔了，这游戏沙漏清零后，每个玩家都会永远被注销账号，无论你在游戏什么身份，什么经历，拥有各种财富，结局都是一样的，就像现在的人生游戏模拟器一样，每次模拟的最终结局都是死亡，干嘛要按照游戏里玩家们设定好的攻略走副本，重复别的玩家走过的路？我会后悔，我后悔不后悔游戏时间也会清零，谁不是第一次玩这游戏，谁还没做过后悔的事？难道要为未知的后悔断送整个游戏体验么？

你想用游戏里的认知和法则去反驳他，但他摇摇头告诉你，我的人生我做主，我不干预你，你也别干预我，在法则以内，我不会被别的玩家捆绑，因此你说什么对我不重要，我不在乎什么玩家共享攻略，我只知道这游戏我玩的很开心，这就足够了。

你突然想起在游戏里的网络世界，总有一大群玩家会敲着键盘去义正严辞的抨击某个玩家玩游戏的态度有问题，比如不应该早恋，不应该逃课看音乐节，不应该多管闲事路见不平和人打架，你应该跟着玩家共享攻略走……诸如此类最后都会加上一句你会后悔的，我是过来人。

此时此刻，恰如彼时彼刻。

你突然莞尔一笑，似乎明白了什么叫玩家共享攻略。

…

…

…

希望每一个萌生退出《地球online》的玩家，都能够坚强，愿温暖始终相伴与你，愿山林清风始终萦绕与你，愿星光始终指引与你。

我是有光，我的熊猫很可爱，愿与诸君共勉。


---

# 为什么会觉得自己的生活没意思？ NotRealName

**Author:** NotRealName  
**Bio:** w 💊 / wo 🍥  
**Avatar:** ![](https://picx.zhimg.com/v2-2cf16d567a0b890a0a2a441121427c38_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a9186abb3e4994e466dbba93c3c32cb4  
**Published:** 2025.10.04 04:08:33  
**Updated:** 2025.10.04 05:40:20  
**Question:** https://www.zhihu.com/question/310235781  
**Question Created:** 2019.01.25 14:35:57  
**Question Updated:** 2019.04.20 00:05:54  
**Votes:** 31  
**Comments:** 21  
**Type:** answer  

是啊，有什么意思？我的生活和我的人本身一样无趣。

小学以前：不记得了

小学：做题，补课班，成绩名列前茅被老师当标杆整天关注，进入重点初中；开始学习迄今唯一的爱好：下棋。和小棋友们一起打比赛的日子，算是我回忆中为数不多的美好念想吧。

初中：因课业压力逐渐不再下棋，继续做题，补课班，早恋，闹玉玉症自残（伤害自己和家人），冷暴力女友然后分手（给双方留下阴影），中考失利但还是进了某高考工厂

高中：换个地方做题，从此故乡便只有冬夏，再无春秋；没手机，大概3周一放假，放假按小时算；经常睡不着思考人生，偶尔用小刀划墙、指甲扣手，偶尔打电话跟家里哽咽哭诉；实验班中等生，无社交也无人在意的透明人，卷3年考入上海某985信息大类

大学：正在经历，多写点。

几乎无信任朋友，难以维持长久关系，社交少（恐人），懒得出游，除下棋外无其他任何爱好，觉得几乎一切放松（包括下网棋）都是在浪费时间；从小被调教好了（禁止打游戏，充50块钱被骂好几天），现在当然也不打游戏。当然，不是没试过，只是从游戏中也找不到乐趣；

讨厌集体宿舍，对舍友的一举一动、发出的一丁点噪音都过度敏感，早就想租房出去住并且不缺钱，但是行动上一直犹豫。有对校外租房可能面对套路的畏惧，也有“不想让自己过的太安逸”这种莫名其妙、自我折磨的思维作祟；

关于出游：上海算是很包容开放、资源丰富的城市吧？可惜我除了学校那一亩三分地，几乎再未探索其他任何区域。原因：偶尔有心，经常无力，即使有心有力独自探索，大多数时间也都是走马观花，事后便毫无印象；

生涯规划方面：一塌糊涂，直到现在都没确定未来方向，到底本科就业还是出国还是考研。绩点竞赛科研实习全无成果，有人能从上面诸事中找到乐趣，我找不到，也什么都不想争取，无欲无求，随波逐流。

如果按时间线谈的具体点的话，前两年，初识编程，卷了一年分流然后进入码类，再过一年后确认自己并不喜欢写代码，但其他专业更加不喜欢。专业课，太难没兴趣，不想学，现在因为408太难又开始怀疑起考研的决心和价值；写代码，离开AI基本啥也不会，也没耐心从头手搓，只会当vibe coder；稍微有点极客精神，但是折腾的那堆东西对我找工作基本卵用没有，不是别人从小玩剩下的就是计算机科班该有的基本功。

四个月前，染上女装，体验到一些从小就幻想过但从未兑现的快乐；买了第一套之后就又买了好几套，不过只会特意出去住酒店拍照，以及开了个清水推特在上面发图；总自己偷着穿也不是个事对吧，所以最近又开始从零学化妆，打理长发，并且染上容貌焦虑，看见自己满是痘坑痘印男相很重的脸时，甚至会想用刀把脸皮刮下来；看见好看的、天赋异禀的、化妆技术精进的可爱顺直女、男娘甚至药娘时，容貌焦虑也被触发，痛恨自己前二十年为什么不好好打理自己只会当做题蛆；如果上述男娘/药娘还有强大的算法/编程语言/项目能力的话，就在容貌焦虑基础上再叠加技术焦虑，痛恨自己前十八年为什么从未接触过代码，只会瞎玩电脑。

（另外，性别认知和有些两性价值观感觉也有点混乱…）

多的暂时不想写了，只想表述生活事实来论证其无趣，而不是输出一堆情绪价值。私以为，本人生活无趣的主要原因可大致总结为：

- 找不到爱好，没有想做的事
- 躺不平卷不赢，失败做题家
- 不擅长自爱，可能存在自毁倾向
- 难以通过外界（家人、朋友、师长）获取帮助和支持
- 其他极度拧巴的思维模式

所以，如果你有耐心看到现在，你能为我的生活找到乐趣吗？我非常诚恳地请求你帮我找找它，谢谢

![](https://picx.zhimg.com/v2-893c3a14f962565fd0e9850bd1a33983_r.jpg?source=2c26e567)


---

# 辍学的00后都在做什么? Luffy

**Author:** Luffy  
**Bio:** OENPIECE  
**Avatar:** ![](https://pica.zhimg.com/v2-d1fdf6176935fb80c286b067c4ca46a3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3211c093697256c4c8c0aaf1f29394b3  
**Published:** 2025.08.11 17:32:28  
**Updated:** 2025.08.28 16:07:40  
**Question:** https://www.zhihu.com/question/527366558  
**Question Created:** 2022.04.11 23:02:23  
**Question Updated:** 2022.04.11 23:02:23  
**Votes:** 1746  
**Comments:** 350  
**Type:** answer  

06男，已经辍学一年多，坐标广东某18线县城，目前正在上班，淡季非常闲，刷了几天知乎，决定写一写自己。

06年2月，深圳某城中村，魔童降世，当时爸妈做点小生意，小康未满的状态，一家四口其乐融融（有一个姐姐）后来我开始记事的同时，老爸生病失忆，彻底沦为穷逼家庭。

我开始上学，从幼儿园开始展示恶魔之力，极度厌学，为什么呢，不知道，所做所为包括但不限于，我爸硬抗我去幼儿园，我咬我爸肩膀咬出血，终于扛到幼儿园，交接给老师，我开始咬老师，遂被开除，转学，继续咬，再转学，幼儿园结束。

进入小学，依旧厌学，因为家庭经济情况已经完全崩塌，就读于一个很垃圾的私立学校，离家很远，好在我姐在那个学校读高中，每天可以带着我转几趟公交车去学校，然后，一年级的我，为了不去上课，在学校门口，一个完全陌生的地方，没有手机，口袋里只有几块钱硬币，硬生生转几趟公交回家，进不去家门都在上班，在门口坐到我妈下班回家。

由于我实在死性不改，我被打包和我爸一起，回到老家，我妈和我姐留在深圳。

回到老家后，寄住在亲戚家，我爸出生无父，老妈改嫁，孤儿一个，所以我们的老家，并没有我们的家，住下来后，我爸每天都去打工，我在村里一个小学读书，由于兜兜转转已经读了几次一年级，浪费了很多时间，好在我也长大了一点，稍微有些通人性了，不再那么厌学，我开始正常读书，从二年级上册开始读，一个班，8个人，老师种地种一半，过来上一节课，然后继续回去种地，就这样在老家生活了半年，其中当然也少不了故事，例如，被同学打，吃白糖泡饭，还有各种异样目光，说我是孤儿等等…讲几个吧，一个周末，一个高年级正在河边玩水，然后我正好路过，然后他开始骂我，说我孤儿，然后泼了一盆河水在我身上，然后跑，跑回家，我一路追到他家里，在他家客厅和他扭打在一起，然后他奶奶带着他和我，去我寄住的家里告状，后续我道歉了。

还有一次，又是打架，什么原因我忘了，但是这次力量差距太过悬殊，我完全打不过他，这时候我经历了一次人生最最绝望的事，因为我把他的脚打流血了，然后他把我控制住之后，开始把脚上的血往我身上擦，我的妈，我至今依然不愿回忆那个画面。

不过这种生活这持续了一个学期，也就是半年，远在深圳的我姐决定辍学，因为她实在受不了我在电话里哭诉我为什么没有妈妈，让我妈回老家带我，她自己留在深圳工作，于是，我从农村，搬到了老妈年轻上待过的一个县城，居住到现在。

于是我们家搬到了县城的一个出租屋，我插班进一个小学，读二年级下册，直到四年级结束，这几年我没什么印象，只是本本份份上学，然后用压岁钱买了手机，在租住的小区里认识了很多比我大的朋友，晚上放学我们就一起打游戏。但这期间，有一个一直同班的同学，一直在欺负我。

五年级开始，我有深刻记忆并且我个人觉得非常精彩的故事，开始了，首先，我把那个欺负我的同学打了一顿。并且当时由于我年纪偏大原因，相对来说比较成熟，我成了非常耀眼的存在，在学校里，我开始网购，整点小穿搭，时不时就会有女生跳出来说什么暗恋我多久多久，喜欢我，当时我还打篮球，每天放学，旁边全是女孩子围观，与此同时，喔成绩也是不差，属于中等偏上，语文这门科有时候很拔尖，老师也非常重视我，在学校的生活过的好不自在。

再说学校外，和之前打游戏认识的兄弟们晚上开始出去玩，一帮人骑单车，时不时会有兄弟偷偷开家里的摩托车或者电动车出来，我们一到晚上就到处兜风，认识外面的人，也就是现在说的精神小伙，哪个兄弟在学校受欺负了，就约架，打架。

于是五年级的我，开始抽烟，泡妞，拉帮结派……这样的生活持续到小学毕业，我也记不得我去过多少“聚众斗殴”和换过多少女朋友了。

上了初中，由于县城里的小升初不看分数，是根据家庭住址分配，按流程我分配到的是一个叫二中的学校，但当时那个学校据说很差，我不想去，正好妈妈上班地方的老板是当官的，正好跟我想去的那个初中的校长很熟，又正好那个校长最后一年马上要退休，于是大人物微微操作，我如愿以偿去了那所初中，于是，更精彩的故事开始了。

上了新的学校，更大，人更多了，我依然持续五六年级的耀眼，放学就叼着烟在门口等小卖部或奶茶店，带着新换的女朋友和新认识的兄弟吹牛逼，又或是在篮球场上接过某个女孩子送来的饮料，成绩依然中上游，爽的飞起。

（这里插一嘴五六年级包括初一，当时我对自己的年纪其实非常自卑，我平均大半个同学两岁，当然，这不并影响我的逍遥生活，自卑只存在心里，但后来也消失了）

直到初一下册，当时很多兄弟都已经有了一辆摩托车，放学载着女朋友在路上狂奔，别提多帅，那我必须也得拥有才行，于是升初二暑假，我毅然决然去到深圳打工（这里补充一点，从小学到现在，我购买的所有物品，手机，球鞋，衣服，全部都是我自己存下来的钱，红包钱，日常零花钱等等）所以买一辆摩托车，我也不可能向爸妈开口，于是我信心满满去了深圳，暂住在姐姐的出租屋，打地铺睡，坐标是龙岗布吉，由于姐姐白天都上班，我就开始在街上找工作，随便一家店就去问，有招聘就打门口电话，最终我试工了时薪八块钱的正新鸡排，最后的归宿是时薪10块钱的一家手机工厂，里面胶水味道非常臭，实际上我试用的第一天去了一个小时就被臭到头晕回家了，但后来实在找不到其他的工作，我强忍着在工厂干了20来天，赚到了2000块，和自己存的加起来3000块，依然不够买摩托车，后面我妈帮我出了900，拿下了

![](https://picx.zhimg.com/v2-7821946820e39726b6acd168af3be3c4_r.jpg?source=2c26e567)

照片拍摄于21年10月7日，至今保存于我的快手作品。后面的日子就不用说了，初二拥有一个这玩意，除了起飞想不到别的词，当然，随着时间流逝，我已经不局限于泡妞和兄弟吹牛逼了，下册开始我又学会喝酒了，也开始认识很多学校外的人，其间认识了一位大哥，我至今把他视作我的贵人，他非常有钱，是一位县城纨绔富二代，30多岁了，至于为什么会每天带着我这个小屁孩玩，我也不清楚，但从之后时候的生活，就是白天学校睡觉，晚上出去喝酒，大哥座驾宝马M3和X5，可以想象一下我放学直接把自己的电动车丢学校门口，在同学们的注视下上车，是一种什么样的爽感，从那开始就是，县城所有的酒吧，清吧，洗浴，饭店等等等……去遍了，年纪比我大一轮不止的男人因为欠钱给我点烟，花枝招展的女人给我挡酒等等等…，然而我只是一个未成年男孩，当然，这期间我也经常喝到断片，夜不归宿，把我妈气哭， 甚至喝酒喝到一个星期没有食欲，胃疼（此前我活了10几年，从来没胃疼过）总而言之，这期间，我见了太多太多社会上的苦难也好，肮脏也好，什么潜规则啊什么人情世故的，我都见完了。

与此同时，我依然每个寒暑假都出去打工，送外卖，服务员，什么都干过，这里不过多赘述，讲一个代表，在深圳的一个线上超市做搬运工，夜班，晚上8点干到早上8点，一个小时20块钱，工作内容就是搬东西，堆起来比我人还高的一卡车饮料，还有水产区，几百箱鱼，几百箱虾，几百箱牛蛙等…当然，这个时候我依旧是未成年，用的是假身份证，当时是疫情时期，整个布吉街道被封了，我为了赚这份钱，硬是在网吧住了三天，瞒着家里人，结尾就是，那个暑假我从深圳回来，有一万多块钱，换了更好的手机，换了更好的摩托车，还给爸爸妈妈的房间里添了我们家的第一个空调，换掉了老爸的老人机，给爸妈一人买一个手机。在一次次寒暑假工里，我也深刻意识到钱有多难赚，社会的残酷。

与此同时同时白天睡醒的时候，我还会用我寒暑假赚到的本金，在学校里干点小生意，比如卖电子烟弹，莆田鞋（这个是因为我姐在干这些有拿货资源）还有倒卖二手摩托车，当然都是小打小闹，赚包烟钱。

剩余的两年初中，我的生活就是，白天学校睡觉，晚上泡吧喝酒，寒暑假出门打工。尽管如此，我的成绩依然处于中上，我一度感觉我是天才，我的书包里甚至没有书本，倒是有昨晚喝剩下能够兑奖的瓶盖。

就这样，到了中考，我考了554分，我以为一切都稳了，因为我妈那边说，可以动动关系，让我继续在这个学校读书（这个学校属于我考不上的学校），于是我的志愿就填了县里最差高中，原因是我觉得已经内定了，志愿就是兜个底，没有想到，根本就没有任何关系可走，最终我收到了最差高中的录取通知书，我的分数远远超过这所学校，正好够到一开始初中时被我拒绝的那所二中，然而如果说不是我妈开口说有关系，我的心里想法也是填一个二中……

但我很快调整好心态，准备认真的开始我的高中生涯，毕竟这三年初中以来，什么都玩够了，什么都见过了，我认为是时候好好读书了，毕竟还是要为以后着想。没想到，事情远远超出意料。

学校有点远，需要住宿，开学第一天我就带着行李进宿舍，我发誓我没见过那么垃圾宿舍，大夏天没有空调，10人间木板床，木板上有名牌写着生产日期，07年，比我小一岁，9个室友我观察了一波，行吧，我断定基本不可能玩到一块，我这一路过来过的日子，根这帮小屁孩，我想不到能做什么朋友，行吧，没关系，我好好读书，好在高二高三还有几个我当时在外面玩认识的女生，好在也算也个同学，然而住宿第一晚，因为宿管说我的拖鞋没放在床底下，并且非常拽的屌我，我忍不了，于是跟宿管吵架。第二天，住宿费打水漂，我直接退宿，每天通勤20公里开电动车上小学（上面的摩托车已经换了几次换成9号了），几天后，开始军训，军训第一天，跟教官吵架，说让我滚,于是我直接滚回家,放假七天。接下来几个星期，我深刻认识到这所学校有多垃圾，教室没有空调，大热天的上课，教学质量非常之差，同学全是傻逼，怎么说呢，如果我初中时期的精神小伙有等级，那么坐宝马的我如果处于顶级，这群傻逼就属于买不起摩托车，然后只能聚集在一起聊这个摩托车性能怎么样，那个电动车极速是多少的最低级，这种级别往往就是只能在班上欺负一下老实上学的同学，碰见其他级别的精神小伙也得绕道走和被使唤的，但如今我和他们同处一个班级，互不认识，重点是我平时比较沉默寡言，基本上就是上课，然后下课自己去厕所抽根烟，也没什么朋友，所以他们把我当成了他们可以欺负的老实同学，屡次的挑衅我，阴阳怪气我，于是，有一天我实在受不了，打了其中一个傻逼，赔了600检查费，同时我抽烟被发现，手机也被没收，被停课，被通报批评，我认识到，我初中那种逍遥自在，高人一等的错觉不复存在了，我来到了一个新的环境，并且我根本适应不了，我印象中的学校还是白天睡觉，下课抽烟，放学喝酒，然后我成绩很好，老师重视关心我，现在不复存在了，我意识到我完全不可能认识新的朋友，完全凑不进他们的话题，哪怕我已经用我看来最默默无闻的方式在那个校园生活，也无法继续，我完全不想去上学了，于是我休学了，并不是辍学。因为我的成绩始终不算差，家人朋友也都在劝我好好读书，我自己拿不下主意。只能暂时休学。

不用去学校后，我开始找工作，但很快我就不得不承认，社会的残酷远不止我打暑假工看到的那一点点，各种坑人的工作，工资低，工时长，无论如何，我都找不到一份正常的工作，我甚至没办法赚到我暑假工赚到一样的钱，而且我的心里面也极度难过，我开始畏惧看到上学放学的学生，极度怀疑自己，焦虑不安，在家里躺着，什么也做不了，曾经逍遥自在的生活不复存在了，我幻想的高中生活也破灭了，我再也不是那个神气的某某同学，只是一个没有任何技能，找不到工作，还不读书的叛逆孩子，休学到了下一个学期的开始，本该正常回去读书了，但我已经没有办法走进去那一步了，9月1号，我不知所措的做了我人生中的一个重大决定，我不读书了，从此，我再也进不去校园了。

但当时的我管不了这么多，我只想快点开始有收入，不再靠家里，快点结束这种焦虑到极致的生活，月薪3000的麻辣烫店员，底薪2400的服装店销售，2600的电销，卖门窗，送外卖，客服，助播，但毫不意外都干不长久，工资太低，心里落差太大。都让我很不好受，但好在只干几天也有工资，多少有一点收入，不用跟家里面拿钱，让我的焦躁不安稍微好了一些，但时不时就失业，还是让我一惊一乍，忐忑不安。

在这种反反覆覆中，我度过了，我认为人生目前为止最绝望的三个月。直到临近过年，我快19岁了，我找到了一份工作。相比之前的所有工作看起来都好不少，公司有点规模，面试入职也很正式，职位是销售（这里补充一点，虽然我很焦虑，但我也并不是原地踏步，我在一次次的失败中反思自己，在服装店卖衣服时，我只干了一个月，但那一个月我超过了原先的两位老员工成为了销冠，2400底薪我也到手了快4000块，当助播的时候，我也意识到电商这个行业是很不错的，于是拼命的学习了解，对电商行业稍微略知一二，我当时定的目标做一个是销售，或者电商行业，目标是成长为一个运营），说回正题，入职后，我会在公司培训了一个月，学习所卖产品需要的知识，后来公司准备参加展会，我也凭借自身努力学习，每天都通过考核。最终我得到了一张通往上海参加展会的机票，我的第一个销售场景不是门店，而是人流量10倍之多于门店的展会。后来我也超越过其他门店的老员工，成为了全门店的销冠，陆续去了厦门展会，去广州学习，这些地方我都从未踏足过，而这张通往的票，是靠我自己争取而来。为此我非常骄傲，当然，小县城还是小县城，工资还是不高，销冠那个月业绩是30多万，到手也只有6500，当然对比于县城月薪2800每天上班10个钟的大部分工作，已经好很多了。

目前我19岁，早10晚6，单休，月收入4k5到5k，和女朋友住一起，每个月给家里1500左右，能够存下一些钱，计划年后买辆二手小汽车，报了高起本的成人大学，过几年能得到一张非全日制的本科证，对当前的工作和收入依然很不满意，年后也准备辞职，对未来还是非常迷茫。也时常幻想继续读书就是什么样。




距离发布过去了大半个月，又是一个上班无聊的下午，继续写一些东西。

确实想不到，我随手一写居然有那么多人看，都快一千个赞了，真是神奇的感觉。还有好多评论和私信，更是让我感到神奇，就好像哥伦布发现了新大陆，我在知乎评论区发现了新物种。

从在学校，到现在出来社会工作，我见到了形形色色各种各样的人，特别是这份工作，市场里随便一个几平米的档口，都是百万，千万级别的，我平时里所交流接触的客户，也动不动就是多少百万粉丝的大咖，各种各样的老板，淡然也不乏一些刚起步的电商创业者，一些随便逛逛的零售，虽然少不了一些咄咄逼人的客户，但据我观察，可以称之为老板的，每一个都是无比平易近人，顺手请我喝咖啡，派给我我从来没有见过的烟，甚至一些问题我反过来向客户请教，他们也很热心教我。一包烟360块的人，应该可以属于是老板了吧？也许他们对我只是在向下兼容，可我倒是实实在在感受到这些有钱人的平易近人。

对于一些跟我一样的，打工人，或是差不多年纪的，大家也都非常礼貌。

但在评论区，新人种真是让我感到我的见识确实太小，我好奇的是，大家在生活里到底属于哪种阶级的人呢？为何我一个面对天南海北客户的销售，却从来没有见过这么让人讨厌的人种，还是说只要在网络上，就会自动获得最坚硬的盾和最锋利的矛，可以随便捅人？把人性中的恶发挥到极致呢？

原谅我的才疏学浅，想了半天都不知道怎么形容这些人，我想来想去都只能得出一个结论，无论是现实里的我还是网络上的我，对于新人种都只能脱口而出一句伞兵。

回归我的近况，上面有提到由于钱少事多，已经有了离职的想法，但就在上午，领导突然找到我聊天，原来我之前接的一个很牛逼的客户，真的很牛逼。当时情况是我跟客户在微信上聊的很好，次日客户就高铁来门店面谈，只是客户体量相对较大，没有任何话语权的我只好把客户带去总部跟老总聊，后来的事情我就不知道了。我以为已经凉了，因为期间问了几次关于这个客户的事，都没有任何消息，直到今天，原来已经客户下了10万的单，后续还会有更多合作，公司对我开出条件，用1500奖金和这个月满绩效➕算提成（因为勾八公司是有责提成，我这个月业绩低迷，只能吃底薪），让我把这个客户所有权给公司，想到我早晚走人，也不必考虑长期发展，我就同意了。今天也就莫名其妙多赚了两千块，嘿嘿，非常开心。

更开心的是这让我找到了价值感，自从那次销冠之后，我的业绩一直都不太理想，虽然公司实在是很坑，就算有业绩也没多少提成，但是这么长时间没业绩，还是有一些影响到我的心态，这次可算是证明了我依旧是10万级别的选手，嘿嘿。极好极好。

目前已经朝着目标大步迈进，明年就可以买到我心心念念的小汽车。每次想起都无比激动，从电动车摩托车到现在，对于车我真是永远无限向往。

对于到时候辞职后，我也有几个想法。

老家农村那边很缺老师，应该是小学初中，只要考个教资就可以过去教书了，但是我的成人大学学历一时半会好拿不到，好像考不了。

还有就是有点想去摆个摊，我还挺喜欢烹饪，对于二创我妈煮的剩菜是一把好手，还有每天晚上的宵夜环节也是安排的明明白白，卖个小吃啥的应该也不错。


---

# 为什么在中科大感觉身边的人总有些隐隐的绝望？ 伊卡洛斯

**Author:** 伊卡洛斯  
**Bio:** 宇宙的一粒沙  
**Avatar:** ![](https://pic1.zhimg.com/v2-523f683e14c404c2dd02af8f2671037a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2472624f88226267ec10833fe93fdcd7  
**Published:** 2017.03.19 17:50:49  
**Updated:** 2017.03.19 17:50:49  
**Question:** https://www.zhihu.com/question/52233793  
**Question Created:** 2016.11.03 00:29:12  
**Question Updated:** 2017.11.22 20:34:25  
**Votes:** 1740  
**Comments:** 38  
**Type:** answer  

阿平什么都想和阿冲比，但是阿平觉得自己什么都不如阿冲。

这时候有人告诉阿平，你身上有个叫做快活的物件，你割掉了它，努力刷一本叫做GPA的宝典，武功就可以超过阿冲。

阿平割掉了这个叫快活的物件，努力刷宝典，结果还是觉得自己什么都不如阿冲，阿平感到隐隐的绝望。

阿冲说其实武功比我好的人太多了，我根本不想和谁比武功。我之所以练武功，是因为我有一个叫快活的物件，我要用武功保护它，因为只有它才能让我快活。


---

# 什么台词让你记住了一整部游戏? Scotty

**Author:** Scotty  
**Bio:** 我总能找到些被忽视的珍珠  
**Avatar:** ![](https://picx.zhimg.com/v2-dad61e25d1df1ff887178b98f766504b_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a60926abe925360b809cb0a8e93eb158  
**Published:** 2024.10.19 02:01:24  
**Updated:** 2024.11.02 04:47:43  
**Question:** https://www.zhihu.com/question/777764598  
**Question Created:** 2024.10.08 09:53:14  
**Question Updated:** 2024.10.08 09:53:14  
**Votes:** 6941  
**Comments:** 159  
**Type:** answer  

**“你来到这里已经两年了，这几年农场没改变多少......但没关系，只要你享受你新的生活，我就满足了.....”——《星露谷物语》**

![](https://pic1.zhimg.com/v2-3d4bb859077c49ccda954ea70350a3a6_r.jpg?source=2c26e567)

原来我真的可以在这款肝帝游戏里躺平，

哪怕我躺平，啥都不干，每天只在床上睡觉。

只要我真正在享受我的生活，爷爷也不会怪我。




就像他最开始跟我说的那样：

**“有一天你会感到自己被现代生活的重担所压垮，你那曾经充满光明的心灵也会逐渐暗淡，直到空虚把你的心占满。等那一天到来的时候，我亲爱的，你就可以打开这个礼物了。”**

**爷爷没有骗我。**


---

# 原神号为什么都那么贬值啊? 小鱼干

**Author:** 小鱼干  
**Bio:** 技术肥宅  
**Avatar:** ![](https://picx.zhimg.com/v2-2016653cf7ea1d6242e8df2884854d73_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772f7e521b0ea4ce06cc1f689d1f0b64  
**Published:** 2024.08.15 13:08:26  
**Updated:** 2025.05.25 09:49:35  
**Question:** https://www.zhihu.com/question/580399043  
**Question Created:** 2023.01.25 09:21:51  
**Question Updated:** 2023.01.28 22:27:30  
**Votes:** 2801  
**Comments:** 183  
**Type:** answer  

我在路边捡了只小猫咪，喂了三年，前前后后伺候吃喝拉撒外加干碎我东西的价值，不低于1W

猫儿子是富养的，喂的都是进口猫粮，全自动饮水机猫粮机，高端大气猫厕所，当然普通猫粮穷养也能养的很健康，但关键在于我，是我乐意花钱富养的。小猫咪陪我上厕所，陪我看电视，陪我睡觉，我看着小猫咪长大，手机里充斥着猫咪从小到大的照片视频，花点钱怎么了？

突然有一天，由于一些原因我养不了了，我见到题主说想养猫，此刻的我有两种选择

1 我这个猫好啊，养它花了1w多啊，打个折8000出给你好了，唉你别走啊，6000，6000行不行？5000，3000呢。。。不要拉倒，我寻思这猫怎么这么贬值呢？

2 兄弟你要是喜欢猫且不嫌弃，我这只权当送你了，虽说不是名贵的品种猫，但保养的很好，也很可爱，这些饮水机，剩的没拆猫粮猫砂，你看着给个数吧，我打好包都给你，以后对它好一点`(*∩_∩*)

![](https://picx.zhimg.com/v2-783ddce4a1a4ae98d90363982e157f7d_r.jpg?source=2c26e567)

所以你看，角色命座，圣遗物分数，满探索，这些玩意好一点，坏一点，其实都无关紧要的。第一次体验普池抽到的刻晴带我飞天拿神瞳，第一次望见璃月，第一次体验海灯节，第一次基友们组队用4夜兰大战纯水精灵（这个没第二次），第一次捉迷藏30s一穿三，第一次在枫丹城门外和最后一次看到芙芙，太多太多了

真正价值连城的宝物就在眼前

既不要钱，也买不来

对卖家来讲，一个零氪也能通关的剧情向单机游戏，如果沦落到需要卖号，还妄想按抽卡成本卖高价，只能说明他激情抽卡了，他花的钱远超他能为自己情绪价值付出的成本，影响到了现实物质生活

对买家来讲，入一个“成品号”玩游戏，这是DNF这种满级才算开始的游戏模式。原神新玩家入成品号的，估计大概率不是推剧情的理想受众，或多或少有社交或社区PVP的需求







不妨把提瓦特的旅途当成一场歌剧

门票免费，席位收费

感觉不错随时可以升舱，去提升一点点体验，但升舱是个人意愿，同时也是告诉剧组，我的钱和时间是有限的，我看过全世界茫茫多的剧，也知道仍有茫茫多的剧还可以看，但我唯独在你这投入更甚，就是对你十足的认可，就是希望你们剧组赚大钱，多吃点好的，多搬出些我喜闻乐见的作品（崩铁ZZZ以及后续蔡喵天才俱乐部筹划的新项目)。你可给我挺住了，千万别被环境下的各种乌烟瘴气搞下去。我实在给太多游戏充过钱了，换来的多是越来越卡顿服务器，泼天的人气只是他们用于在游戏界面投放更多广告而牟利的工具。

多年以后，歌剧谢幕

巨氪大佬，从歌剧VIP包房悄然离席

中氪玩家，坐在前几排久久不肯离去

坐后边的微氪零氪，喧闹些缓缓退场

全世界所有玩家，不管你氪金多少，都从金钱及人气上，对制作组做了支持，同时即使是后排的观众，也和包厢里的VIP一样享受了一场足以载入游戏史册的高质量演出

没人会觉得这钱花的不值

![](https://picx.zhimg.com/v2-2ae343d7b66d7817fecf3ae2f241334f_r.jpg?source=2c26e567)


---

#  猫娘神

**Author:** 猫娘神  
**Bio:** 关注喵，谢谢喵  
**Avatar:** ![](https://picx.zhimg.com/v2-de67d5ccabfb004ebc28c94fe0705b12_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/77c23df58088f429d053cfa1d6da15c5  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 36  
**Type:** pin  

[object Object],[object Object]


---

# 所以上了大学真的轻松了吗？ ST李笑川

**Author:** ST李笑川  
**Bio:** 我不想说了，我不想说了  
**Avatar:** ![](https://picx.zhimg.com/v2-303c2cb721fad614f3d1f2e9ead127aa_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0eb6155d7a21b20320d716b9c5c08af1  
**Published:** 2023.10.06 16:43:57  
**Updated:** 2025.04.20 08:05:17  
**Question:** https://www.zhihu.com/question/623533420  
**Question Created:** 2023.09.24 07:30:33  
**Question Updated:** 2023.09.24 07:30:33  
**Votes:** 8791  
**Comments:** 197  
**Type:** answer  

东亚人不信来生又惧怕死亡，所以在此生虚构一个完美的彼岸。

深知没有救世主，所以勤劳，肯吃苦，爱过量占有，防患未然。

感叹人生不能重来，所以格外在意得失，凡事精于对比分析，敏于高低排序，追求充实圆满。

**我们生怕自己活错了。**所以要提前认可一种**划算**的人生，离这个人生越远，就越不安越焦虑的，就是传统东亚人。

如果有人不朝这个大方向走，还整天傻乐。那我们就要去关心他，这是一种忠实信徒对于异教徒的关心。

## 因为一种生活方式的可行甚至成功，就是对于其他不可重来的生活的冒犯。


---

# 如何评价北京协和医学院董袭莹事件？ 陈然

**Author:** 陈然  
**Bio:** 流光之人追逐幻影  
**Avatar:** ![](https://picx.zhimg.com/v2-a27dac0f7e9983bad161c64013771b66_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/bf5a8cb89740d809d8f42d98f1302516  
**Published:** 2025.05.01 11:18:19  
**Updated:** 2025.05.01 11:18:19  
**Question:** https://www.zhihu.com/question/1900539734356390396  
**Question Created:** 2025.04.29 13:19:42  
**Question Updated:** 2025.05.04 08:58:59  
**Votes:** 16496  
**Comments:** 1527  
**Type:** answer  

我爷爷副大军区级，差一步副国，享受正省级待遇，进过顾委会。

我父亲文职副军，赶在退休前可以提正军。

我正营职转业。

论能力，我父亲不及我爷爷的十分之一，我不及我父亲的十分之一。

论运气，我爷爷差一步副国，我父亲差一步担任某军区政委，我差一步给扔到后勤去养猪。

我有的大概就是能吃苦这个优点了。

就这，在我爷爷的朋友圈里，我们家算是混的很好的了，再往上数，一大堆比我家强的高干子弟，混的还不如我们呢。

他们在干啥呢？

整天搞什么追思会、纪念会、研究会，实则靠着父辈那点荣光混吃混喝，以求大众不要将他们遗忘……当然，对于这些事情，我们家一般不参与。

换到董的这件事上来，很多人始终想不明白，为什么拥有那么多的资源，还要苦哈哈的去学医？

那对照一下我的例子就知道了，因为别的不是我的资源区啊，我去经商、从政，也没人罩着我啊。

我去当兵好歹算保家卫国，正常我只要干的不差，能混个不错的职位，能受到公平待遇就够了。

唯一一点的不同就是，学医学不明白，真的会害死个人。。。

像我家这种二代家庭，老老实实不折腾、接受阶层下滑，才能在一定程度上避免子孙瞎努力造成的不良后果。

万般皆是命 半点不由人

人要学会认命。。。


---

# 博士生们每天科研时间是多久？ 猫娘神

**Author:** 猫娘神  
**Bio:** 关注喵，谢谢喵  
**Avatar:** ![](https://picx.zhimg.com/v2-de67d5ccabfb004ebc28c94fe0705b12_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/77c23df58088f429d053cfa1d6da15c5  
**Published:** 2025.05.01 00:21:53  
**Updated:** 2025.05.01 11:48:34  
**Question:** https://www.zhihu.com/question/27154943  
**Question Created:** 2014.12.19 14:58:46  
**Question Updated:** 2018.09.21 13:01:35  
**Votes:** 4078  
**Comments:** 155  
**Type:** answer  

## 《数学系博士被资本做局的一天》

一个平静的一天，数学系博士生李田所从他的硬板床上醒来。

他打开了自己的小米手机看了看时间，小米手环自动关闭了睡眠模式，因为一柱擎天得很难受，所以他想撸个管再去实验室。

与此同时，在B市T大的一所大楼内，求真书院院长的办公室传来了紧凑急促的敲门声。

院长：“进。”

秘书：“报告院长，那个年轻人觉醒了。”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“不急，先让我用最顶级的黑客黑进他的手机看看他在做什么。”

院长一声令下，求真书院最顶级的黑客马上黑进了李田所的小米手机，李田所的小米手机顿时变成了暖手宝。

黑客：“报告院长，那个年轻人正在用免费看片网站在线看片。”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“他在看什么片？”

黑客：“好像是SONE-614，现在的进度条正在三位一体的骑乘位。”

院长：“Good！This gay has a good taste!”

院长：“By the gay, I also recommend SONE-615.”

黑客：“报告院长，小米手环显示李田所的呼吸很急促，心率也在加快，他可能马上就要起飞了！顺便一提，这个系列已经出到SONE-638了。”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“马上在他的手机里植入木马，自动播放新葡京娱乐城的广告！”

随着黑客一通紧锣密鼓的操作，木马被成功植入了李田所的手机。

李田所：“啊，我喜欢，我喜欢，嗯啊，啊啊啊啊啊啊！！！！！！”

就在李田所手握操纵杆准备操纵飞机前往东京市之时，飞机却毫无预兆的坠毁在了澳门新葡京娱乐城，飞机上的几亿乘客都没能幸免于难。

看着还在一半的进度条停在了性感美女荷官的广告，李田所无奈地叹了一口气：“资本，你赢了！”

李田所收拾了下床上的纸巾，用冷水冲了把脸，然后准备出门吃午饭。

黑客：“报告院长，目标开始移动！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“预测下他要去哪里。”

黑客：“根据我这几天的观察，他的行动非常规律，每周的星期四都会去学校外面的KFC吃疯狂星期四，而且每次点的都是原味鸡套餐。”

院长：“很好，立刻黑进KFC的后台，让它们的原味鸡套餐售罄。”

随着黑客一通紧锣密鼓的操作，KFC的手机在线点单悄悄下架了原味鸡套餐。

李田所在手机上翻来覆去地寻找原味鸡的影子，他怀疑自己是眼睛花了还是时空穿越了：“奇怪了，我的原味鸡套餐呢？”

在反复打开微信在线点单小程序，肯德基APP，支付宝小程序，美团外卖以后，李田所终于接受了他今天没法吃到原味鸡的事实。

李田所无奈地叹了一口气：“居然煞费苦心至此，资本，你赢了！”

李田所在学校食堂吃完绿色圈圈以后带上电脑准备去实验室。

黑客：“报告院长，目标已经在实验室了！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，让我看看他现在正在干嘛。”

黑客：“目标看起来还没进入学习状态，现在在自己的工位上玩手机。”

黑客：“他打开小红书了！”

院长：“很好，马上在他的手机里植入木马，让他的小红书推送男女对立的文章！”

李田所刷了半天小红书：“不是，我擦边美女呢？我是来看瑜伽裤的，谁要看这些男女对立的推送？”

李田所又刷了半天，终于给刷到美女了，他津津有味地看了起来。

院长勃然大怒：“怎么会有漏网之鱼！”

黑客汗流浃背：“我是用宝宝辅食tag筛选的，可能是有些擦边博主也用了这个tag。”

院长：“马上给我解决，一分钟之内我要他的手机里再也没有女人的照片！”

黑客马上紧锣密鼓地操作了起来。

马上李田所的小红书变成了一堆穿着白袜子的腱子肉体育生。

李田所：“不是，谁他妈的要看这个啊，我的小红书也太难看了吧！”

李田所关闭了小红书：“唉，资本。”

李田所打开实验室的电脑，准备检查邮箱看看最近投稿的论文有没有新进展。

黑客：“报告院长，目标现在正在准备查看邮箱！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，马上黑入他的邮箱，把正面审稿意见改成负面的审稿意见！”

随着黑客一通紧锣密鼓的操作，李田所邮箱里的accept被改成了reject。

李田所打开了邮箱，发现自己的论文被拒稿了，他气愤地砸了桌子：“可恶的资本！”

李田所打开了最近正在读的论文，开始思考一个困扰他很久的数学问题。

黑客：“报告院长，目标现在正在思考问题，他好像马上就要想出结果了！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，今天我就要让这个不自量力的数学系博士尝尝资本的厉害！”

院长：“马上黑入他导师的手机，告诉他您订阅的私密发货紧致仿真自动加热款已经到达菜鸟驿站。”

李田所正在沉浸在数学的海洋，突然接到了导师的电话。

导师：“速来办公室！”

李田所不知所措，马上踉踉跄跄地跑去了导师的办公室。

李田所：“老板，什么事？”

导师一脸严肃：“有件特别重要的事情要交给你，你能完成任务吗？”

李田所心想，反正干不了也得干，不然有自己好果子吃的，先答应下来得了。

李田所：“保证完成任务！”

导师：“很好”

导师拿出手机：“你到这个location，去拿这个delivery，记住，要quite！要careful！”

李田所：“收到收到收到。”

导师摆摆手：“Good，快去快回。”

李田所跑到菜鸟驿站，拿到了导师的包裹，被胶带缠绕着的人形包裹很难不让人联想到一些奇奇怪怪的东西。

将快递送到老师办公室后，李田所拖着疲惫的身子回到了实验室的工位。他发现他刚刚才有点思路的问题，现在已经什么都想不起来了。

李田所瘫倒在椅子上，一遍遍地摇头：“哈哈哈哈，搞笑，事情真的是变得有趣起来了呢。资本，这也在你的算计之内吗？”

李田所突然觉得很委屈，他打开了微信，点进了置顶聊天，想找前女友诉苦，求安慰。

黑客：“报告院长，目标打开了微信准备和前女友聊天，我现在马上就黑入前女友的微信！”

院长：“不，你什么都不用做。”

黑客：“为什么？”

李田所编辑发送了消息，然而却被对方拒收了，他有点歇斯底里。

李田所大吼：“我警告你资本！你不要给我把事情做得太绝了！”

院长：“可是孩子，这真的不怨资本。”

黑客：“所以院长，今天我们这么兴师动众地去给他使绊子到底是为了什么？就是为了让他见识一下资本的厉害吗？”

院长：“哪有什么资本作祟，我们不过是他脑中的假想敌罢了。”

院长：“因为他过得太失败了，失败到他必须说服自己一定是有一股不知名的力量在阻碍他走向成功。”

黑客：“那他能成功吗？”

院长：“他还在痛苦，他还在挣扎，他还在逃避，他还不够努力。”

与此同时，李田所回到了寝室，他点了一份淄博烧烤。

在打开外卖袋的那一刻，他看到了肉少得可怜的羊肉串。

李田所：“哎，淄博。”

## ===番外篇之让Mujica尝尝资本的厉害！===

李田所想起今天Mujica更新了，于是打开了B站准备看Mujica的大结局。

黑客：“报告院长，目标打开了B站，根据我的精密计算，他应该是准备看颂乐人偶了！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，我现在就动用资本的力量，把母鸡卡的结局变成答辩！”

李田所津津有味地看着颂乐人偶，期待着最终话的神回力挽狂澜让Mujica重新登上神番的宝座。然而直到他吃完着最后一坨屎都没能等到所谓的反转。

李田所：“哎，柿本。”

## ===番外篇之先辈恰咯！===

李田所打开了千恋万花准备接着推丛雨线。

黑客：“报告院长，目标打开了Steam，根据我的精密计算，他应该是准备玩千恋万花了！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，我现在就动用资本的力量，把千恋万花的HCG都换成打码版！”

李田所津津有味地擦拭着枪管，终于推倒丛雨了，就在他准备擦枪走火时看到了打码的HCG不小心炸膛了，他看着那块模糊不清的地方痛哭流涕：“我不是已经打了无码补丁吗？”

## ===番外篇之无人在意的春晚===

李田所打开了电脑准备看春节联欢晚会。

黑客：“报告院长，目标正在看春晚，需要我把它变得难看吗？”

院长：“已经很难看了，这是一个下等的视频！”

## ===番外篇之偷走你账号里的原石===

李田所打开了原神准备抽当期UP。

黑客：“报告院长，目标打开了原神，根据我的精密计算，他应该是准备抽当期UP了！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，我现在就动用资本的力量，把抽卡出橙的概率调低！”

只见李田所朝前拜三拜，脖子上挂着玉牌，嘴里念念有词的：“我们这的瘪佬仔，脖子上挂玉牌，中间的不会唱，反正就是要来财，来财，来财，来财。”

李田所一边念着抽卡咒语一边熟练地清空着自己的原石弹夹，他眼巴巴地望着抽卡界面，然而他期待的橙卡一直没来。直到他后面又冲了一个648才在大保底的时候抽出了自己喜欢的二次元小人。

李田所望着手机里的微信支付账单：“微信支付太坏了，偷走了我的648，资本你赢了！”

李田所反思自己，一定是因为没有把香炉放在灶台上摆所以才抽卡失败的，他以为只要自己心里想撸也算是勉强搭边，没想到这里不允许玩谐音梗。

李田所：“哈基资，这也在你的算计之内吗？”

## ===番外篇之推送猫娘神拉的答辩===

李田所打开了知乎准备学习知识。

黑客：“报告院长，目标打开了知乎！”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“很好，我现在就动用资本的力量，让他的首页都是猫娘神的文章！”

李田所看着首页上莫名其妙的推送，尽是一些数学系博士生撸管的日常。他看着这些文章突然觉得感同身受，顿时狠狠和这个叫猫娘神的家伙共情了。还好有一个叫猫娘神的数学系博士比自己还要失败，不然我真的要自尽了。

李田所：“啊，资本，你总算做了一回好事！”

黑客：“报告院长，好像没有达到我们想要的效果。”

院长：“不要叫我院长，要叫我数学皇帝！”

院长：“额......没事！让我再一次运用资本的力量，让猫娘神变成成功的人！”

## ===远在天边的猫娘神===

“得了灯！”猫娘神打开邮箱，什么？我的论文被四大接收了！

“得了灯！”猫娘神打开账户余额，什么？怎么卡里多了一百万！

“得了灯！”猫娘神打开微信，泪目，前女友发来了复合消息！

“得了灯！”猫娘神停下正在扭动的腰，卧槽！怎么突然变大了，救命啊拿不出来了～～～


---

# 博士是怎么废掉的？ 猫娘神

**Author:** 猫娘神  
**Bio:** 关注喵，谢谢喵  
**Avatar:** ![](https://pic1.zhimg.com/v2-de67d5ccabfb004ebc28c94fe0705b12_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/77c23df58088f429d053cfa1d6da15c5  
**Published:** 2023.09.01 00:49:22  
**Updated:** 2023.09.01 00:49:22  
**Question:** https://www.zhihu.com/question/609920887  
**Question Created:** 2023.07.02 14:46:00  
**Question Updated:** 2023.07.02 14:46:00  
**Votes:** 4040  
**Comments:** 146  
**Type:** answer  

## 数学系博士写审稿意见的一天

导师：小x，这篇文章在我邮箱里躺了一个多月了，AML的编委一直在催，但我实在忙得抽不开身，不如你帮我审一下吧。

我：收到收到收到。

导师把文章交给我，而后又故作深沉，做眉头紧锁状：这篇文章是p大y老师的学生写的，他已经延毕一年了。

我倒吸一口凉气，从未在夏日三伏天感受到如此的寒意。透过手上的论文，我仿佛看到了一个呆坐在实验室电脑桌前，头发稀疏，胡子拉碴，用着屏幕满是裂痕的小米手机，眼神充满幽怨和无奈，刚刚同女朋友分手的老博士。

我：我一定会认真审这篇文章的。

导师摆摆手：好了你回去吧，我要接着忙了。

说罢导师把座位转回电脑桌前，掏出手机摆弄着。

我：好的，老师再见。

前脚刚出门，后脚就听到办公室里传来一声清脆的“TiMi”。

## 翌日

虽说论文是有在看，但是审稿意见什么的，完全没有写过啊。

作为一个成熟的博士生，面对未知的事物应当抱有一定的敬畏与敬仰之情，做好万全的准备后再慢慢推进，如此方能成大事。

说服自己这件事得慢慢来以后，心满意足地打开了《闪耀！优俊少女》。

看了看表，离开服还有一小时，不过有些数据要在app里下载，先用手机挂着吧。

下了半天，摸了一下手机发现好烫，没想到我这屏幕满是裂痕的小米手机居然还有充当暖手宝的功效。

十一点开服，赛马娘启动！

速度skip了剧情，马上进入抽卡环节，这里点名批评一款不能跳过剧情的四字游戏。

没刷到好初始，玉玉了！

垃圾赛马娘，毁我青春，不玩了，赛马娘卸载！

## 第三日

我呆坐在实验室电脑桌前，对于如何撰写审稿意见一事依旧一筹莫展。

思量再三还是决定借助于现代科技之搜索引擎的力量。

百度搜索，如何写审稿意见。

随便点进一个链接。

弹出了好多弹窗和小广告。

一个个点x来关闭。

有一个小广告的x在右边做得很大，但是关闭在左边做得很小，不小心点了那个x按钮。

突然蹦出一个页面，老婆不在家男人偷偷玩的游戏。

好不容易关掉了所有的广告，终于可以开始看审稿意见的模板了。

看了一半，剩余部分需购买vip后方可阅读。

恭喜你被惊喜大礼包砸中！现在购买年费会员仅需365元！平均到每天仅需1元！

把浏览器关掉以后，我打开实验室的窗户抽了一支烟。

## 第四日

早上起床时洗脸，我对着镜子里那个头发稀疏且胡子拉碴的男人说道：加油，你可以的，你一定能把审稿意见写出来的，我相信你！

镜子里的人对我重复了同样的话，然而我并没有感觉被鼓励到，脸上反而露出了失望的神色。

也许是因为觉察到自己的鼓励没起什么作用，镜子里的人脸色也很快失落了下来。

我开始意识到执着于范本和模板可能并不是一件好事，它会束缚住自己的思维，写审稿意见还是应当从论文出发，因此我仔细把论文研读了一遍。

总之先打开百度翻译，把摘要和引言丢进去机翻一下。

果然这篇文章的英语就很有问题，连机翻出来的中文都很奇怪，仔细一看发现句子成分太多太杂，逗号和修饰语都太多了。

随便改了几个摘要和引言里很明显的语法错误，正文部分因为公式有点多不太方便机翻，所以假装里面的英文都是对的。

这个公式里的矩阵没有用粗体加粗。

这个地方的公式编号没有用subequation命令。

这一行的两个公式之间没有用quad做间隔，看起来有些起怪。

这个地方的公式忘了加句号了。

这个地方的sin变斜体了，也要改一下。

粗粗罗列了一堆问题，内心正直的责任感告诉我，不能让如此书写草率的论文在期刊上发表，即便它是AML。

## 第五日

我：老师，审稿意见写好了。我觉得这篇文章的问题还是有些多的，英语文法不行，公式也有很多粗心的错误。计算虽然还没验证过，但我觉得里面可能也有一些问题。

导师一脸狐疑，用打量外星人的眼光看着我：你那么认真干吗？

我：啊？

导师：y老师明年就退休了，这是他带的最后一个博士生。

我：是啊，所以呢？

导师：所以要接收啊，要accept，不然咋毕业啊。

导师：不管他写成啥样，给个正面的审稿意见就行了。

我：哦。

导师：哎，总之你写了多少东西，先微信发给我吧，我回头改改就可以提交了。

我：哦。

导师：行了你今天先回去吧。

我：哦。

## 几日后

在实验室打瞌睡时被“叮”的一声给惊醒，比钱包还干净的邮箱收到了之前投稿AML来的审稿意见。

打开邮件，把审稿意见下载下来。

We are pleasant to inform you that your article has been accepted in our journal. This paper presents a comprehensive theory about how Genshin impact acts on mathematicians. Overall, I find your paper is well written in English, but there are still some grammar issues that need to be addressed.

- It should be “Genshin” not“ Genshit”
- It should be “impact” not “yinpa”

口意！我中了！我中了！老子就是天上的文曲星！

巨大的喜悦总是伴随着一种不真实感，我急忙把这个令人激动的消息分享给女朋友，然而消息发出的那一刻却收获了一个红色的感叹号。

定睛一看，前面密密麻麻的聊天记录都是浓墨重彩的绿配着星星点点的红。

哦，原来已经分手了啊，老博士有些恍惚似地说道。


---

# 你从什么时候变得成熟并真正删掉了游戏？ 硬件玩家Nick

**Author:** 硬件玩家Nick  
**Bio:** 魂系游戏死忠粉，黑血仁狼环已白金  
**Avatar:** ![](https://pic1.zhimg.com/v2-d639b5e55c2c999693cc474374275ccf_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d48c8a3074e9e3def94ab50d1e78a029  
**Published:** 2025.04.30 16:01:44  
**Updated:** 2025.12.04 15:10:31  
**Question:** https://www.zhihu.com/question/14623532912  
**Question Created:** 2025.03.10 23:13:45  
**Question Updated:** 2025.03.10 23:13:45  
**Votes:** 14752  
**Comments:** 2150  
**Type:** answer  

删掉游戏就成熟了？

这什么垃圾思想。哦，怎么着，因为有家庭了，有老婆孩子了就有羁绊了， 对吗？

然后就得电子ED了，因为所谓的【社会压力】，玩游戏什么都提不起兴趣了，对吗？

成为了牛马，然后天天只想着赚钱，成为赚钱机器了，是吗？

这就是所谓的【成熟】吗？

**这叫做【被社会强奸】了！是最耻辱、最垃圾、最可悲的一种活法！**







看看我吧，老哥，我对游戏的态度贯穿始终，就是**想尽一切办法达成游戏目标。**

**学生时代，他们（老师、家长）不让我进网吧玩游戏**，我直接画出了我市的网吧地图（用英文对地图加密）。后面甚至标注了地图上哪些网吧可以不用身份证进，哪些必须要用身份证。地图上所有的网吧，我都去过。

![](https://pic1.zhimg.com/v2-f280171eb24062e03cba9e0224c2d9dc_r.jpg?source=2c26e567)

**工作之后，她（我妈）不让我玩游戏**，我通过极限省钱，在我这个二线城市一年只花一万，就为了完成电竞房的梦想。

各位不难想到，在省会城市一年开销一万块多一点，那是一种什么日子。对我而言，这日子就是【15元，有肉有菜的盖码饭】就已经算是改善生活了。平时我都吃5元公司食堂 或者【沙县小吃】里面8元一份的【炒粉】。外卖点的也很少很少。**几乎从来没有花自己的钱出去旅游过，只有跟着公司团建旅游，我才出过省**。

**我过了快十年这样的日子，把所有的资源、所有的梦想、所有的寄托都投入到电竞房当中**。终于！2024年（去年）我创建了自己的电竞房，里面有赛车、有飞行摇杆、有全套的游戏主机。还有御三家超过300盘的盒装正版游戏盘。

![](https://pic1.zhimg.com/v2-8ed2b4829395a02de5c3684ac081c6aa_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3b20a139eaca481a450ef683e71b43da_r.jpg?source=2c26e567)

**恋爱阶段，她（前女友）不让我玩游戏**，逼我考证考研，逼我搞上进。当天中午12点她提出了彩礼考虑结婚的事，当天下午4点我就直接提出分手要她滚蛋，分手堪称神速。后来，我只会找【不反对我的游戏】且【不过分“搞上进”】的女朋友，直到遇到我老婆。

**有家庭后，他们（老人）不让我玩游戏**，我已经规划好了游戏人生的蓝图。那就是等我60岁，如果有能力的话，我就把现在的房子卖了，去郊区搞一个小一点的别墅，建设更大的电竞房。届时，我想我的游戏盘收藏会超过3000张以上，模拟器设备也会有好几个，因此需要的占地面积就要大一些。




我的人生可以说是和那些**胆敢挑战我的游戏的偏见人士**战斗的一生，谁敢借“情”的名义给我PUA，绑架我，给我套枷锁，说我【不成熟】了，动了我的游戏了，我就一定会把他视为头号敌人，一定会不择手段和他战斗到底，绝不姑息。

最后，我已经成功地建设了 我的电竞房，**是的，我得罪了某些人，但我实现了20多年来的梦想。我很自豪！**

**为了一个20多年的梦想，想尽一切办法，挣钱、攒钱、省钱，去实现它，去和那些反对你的人战斗！这才是真正的【成熟】！**




我想，为了更好的电竞房，我再奋斗20年的话，尽管道路曲折，难度很大，但是更大规模的【别墅电竞房】确实是有可能实现的。

**我的人生，就是为了更好，更大的电竞房奋斗的一生**。如果有人说我玩游戏【不成熟】，请你直接出门左拐不送。

–––––––––––––分割线––––––––––––

我的41个白金奖杯 ：）

黑、血、仁、狼、环。魂系游戏，都白金了

![](https://pica.zhimg.com/v2-0c2328643990726e98220ed6ec389e79_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-ea2565e5275bff89c80aee1e98d59d23_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-67fc61c7b862e080ef9ee4820f320fe1_r.jpg?source=2c26e567)

----------2025.11.1更新----------

感谢大家的赞，都一万多赞了，说明很多人十分支持我这种想法。

我93年的，都三十多的大叔了，我也没有电子ED，也不知道网上哪里来那么多电子ED。我就从来不信什么【欲买桂花同载酒，终不似，少年游。】

–––––––––––––分割线––––––––––––

最近趁着2025年618又升级了电竞房装备，国补2000元入手【图马斯特TCA空中客车机长套装飞行摇杆】搞微软模拟飞行2024




![](https://picx.zhimg.com/v2-aa1a13e8b8c8e3f326f14227ed9878c9_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-313c9d84cfe5865cd9471b0c22266575_r.jpg?source=2c26e567)

最后我还想要补充一下，我一路走来，有了这个电竞房是很不容易的

【部分老师、我的家长、一部分社会上的女人，以及那些社会上有传统思想的人】由于这些人打着为我好的名义屡次反对我的游戏，我可以说这些人都是我的敌人。我算是极端叛逆，却也极为自律的性格，也可以说我是为了游戏和所有人反对我的人一路干到底，一路打到底，一条路走到黑的。就如今我30多岁了，也从来没有理解过老师家长，更从来没有释怀过他们的做法。从某种意义上来说，我就是要疯狂地报复。

不让我玩对吗，那我就要十倍，百倍的反推到极致！不惜一切代价，把我的游戏王国做大再做强。很累，但是我觉得很值得，我就是要报复那些童年挡我游戏道路的老师家长和 社会思潮（如陶宏开，杨永信之流）

等我老了，我就要用一间巨大的，富丽堂皇的，塞满游戏的电竞房，告诉我的后代：他爷爷当年为了游戏是怎样去和老师家长干到底，打到底的。是怎样付出了许多的代价，才争取到游戏的权益的。

我打出这些文字的时候是很严肃的，因为我觉得这一点都不是开玩笑，我小时候被压制得特别惨，所以就像是弹簧一样，越是不让我干什么，我就越是要干，而且用尽一切手段，一定要干到极致。有人说：叛逆期只限于青少年。这条逻辑对我则不成立。我三十多岁了，也无法理解老师和家长的做法，只会觉得他们口中的【为你好】就是一种迫害。


---

# 你有哪些不愉快的推galgame经历？ 方汝见之

**Author:** 方汝见之  
**Bio:** 从来就没有什么救世主。  
**Avatar:** ![](https://pic1.zhimg.com/v2-d7a9d5479aaece109baa4944b747bf57_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2647c553252d30069c848cf6c7e675ef  
**Published:** 2023.11.24 12:15:33  
**Updated:** 2023.11.24 16:12:07  
**Question:** https://www.zhihu.com/question/61887839  
**Question Created:** 2017.07.01 21:45:33  
**Question Updated:** 2017.07.05 20:43:36  
**Votes:** 1561  
**Comments:** 139  
**Type:** answer  

人生第一次玩 galgame，是大三时在北邮人上下的盗版 ATRI -My Dear Moments

![](https://picx.zhimg.com/v2-fc38a91de611021f2d8b1e40cb11f254_r.jpg?source=2c26e567)

这个 galgame 一共只有两个问题：

- 第一个问题：要不要把 ATRI 交给讨债的坏姐姐 ？
- 第二个问题：要不要亲 ATRI？

这两个问题都选对了，就进 HE，否则进 BE。

（准确地说，接近结局的部分会有第三个问题，要进 HE 就选择“拿上鞋”。如果之前选错了，那么这个进 HE 的选项是灰掉不能选的，只能进 BE）

注意：这是我第一次玩 galgame，对选项决定结局这件事毫无概念，没有在问题的位置存档。何况选错之后剧情也就这么正常推进了，让我以为这只是增加沉浸感的问题。

第一个问题我顺利答对了。

但是在第二个问题的位置我犹豫了很久。在我虚度的二十余载光阴中，我没有谈过恋爱或是有过暧昧关系，没有牵过同龄异性的手，更遑论 kiss 了。我将其看作是非常神圣的事情。

我没有勇气亲上去——即便我知道这只是虚拟的游戏而已，对面只是纸片人而已，这里没有任何的道德问题。但我没有勇气。

在思考良久后，我选择了不亲上去。

于是到结局部分，我疑惑地看着为什么不能选捡起鞋子（进 HE），然后无助地看着 ATRI 干掉反派，然后停机。我什么都做不到。

我感到疑惑，于是上网查了一下攻略，得知要两个问题都选对才能进 HE。

就那么一刻，我对自己的懦弱感到无尽的悲哀。连这点勇气都没有，我还能干点什么呢？大概孤独终老就是我注定的结局了吧！

我想起类似的经历。在高三寒假（2019 年）的大年初一，我决定给自己放一天假休息一下。我打开华为应用市场，看到一个网易出品的国风解谜游戏（名称已经忘记了）。我用一下午的时间一路推到最后一关。

然后我卡关了。我确信已经点过了所有可交互的物品，但就是找不到推进的方法。于是我去查攻略。

攻略：与桥上的人交谈。

就那么一瞬间我感到头皮发麻。我感到被一个解谜游戏狠狠地嘲讽了：“看！这里有个懦夫，他甚至在游戏里都不敢主动与人交谈！”

然而懦弱本身并不是最可悲的。更加可悲的是，由懦弱导致的悲哀的现实。

高考发挥超常，被 THU 录取。T 大招生组问我想去哪个专业。我没有主见，只听说数学学好了转哪个专业都吃香，遂来到 T 大数学系学习。靠着认真听课写作业好歹拿了看得过去的绩点和排名。

等大三开始考虑保研、就业时却慌了。没有金融知识与实习经历，也没有顶尖的智商，没有勇气选择金融作为从业方向；代码能力一团糟，面对计算机知识与刷题网站不知如何下手，没有勇气选择计算机作为从业方向。

于是，如各位所见（IP 广东），我来到了北京师范大学，于珠海校区读学科教学（数学）专业的研究生，选择成为一名人民教师。考虑到还有三位同学保研去向是华师，我感觉至少不算太差。

我可曾想过可以走上科研道路呢？

大二时我曾有一位非常 nice 的抽代老师，他送给我几本代数学书籍，鼓励我在这条路上前进。但我辜负了他的期望，只从他那里学到用 emacs 来写 LaTeX 而已。

后来我想要参加丘赛，选择了最简单的计算数学方向。我下载了推荐的参考书，但我只读了其中两本（数值分析和数值线性代数），其它的要么过于困难（有限元，ODE）要么浅尝辄止（变分法），最终没有走上丘赛的考场。

至于亲密关系方面，那就更不要想了——不然也不会来玩 galgame 了。

高考后第二天，我和朋友（同性）走在某条小路上，无端感慨“早恋”二字于我们二人竟已经成为历史了。又一个周后，他脱单了，半年后又被甩了。此后与其数学建模队友一直保持某种暧昧关系至毕业。

而我，在 110 周年校庆前夕的某个中午惶恐地醒来，意识到自己的青春已经不多了，再不做些什么就这么过去了。遂去追求实分析课上坐我旁边的女生。但我并不知道应当怎么做。理论上来说应当先成为朋友再追求进一步发展，但实践上我并不知道该如何操作。不出意外的，好人卡++。

在北京时我常与舍友开玩笑，说等我去了 BNU，这个男女比还不是随便脱单。来了之后发现并没有那么简单。条件好的女生早已在本科找到了对象，没有对象的只可能是因为没有脱单的意愿。而我，仍旧不知道如何正确地追求爱情。在猪队友的帮助下光速白给了一次之后，我已心灰意冷，决定躺平等相亲。

可能最近又有了一点想法吧，但不多，并不足以支持我去做些什么。

人生又何尝不是一部 galgame，只不过没有存档功能，而且一步选错就会走向 BE。也许在微观上它充满了有趣的细节，但宏观上，我们终究逃脱不掉既定的无聊的一生。

如果把人生这部 galgame 放到评分网站上，与其它的 galgame 一起分高下，那么毫无疑问的是，大部分人给出的评分都会是垫底的。但你不得不就这么推下去，小心翼翼地去做各种选择，以防哪一个会导向万劫不复的 BE。

最近烦心事比较多，有些悲观。若这些文字是您感到了悲伤，我对此表示深深的歉意。


---

# 是不是学历越高的群体越容易喜欢 ACG 文化? 鱼缸里的沫沫鱼

**Author:** 鱼缸里的沫沫鱼  
**Bio:** 私信必回，欢迎聊天。  
**Avatar:** ![](https://picx.zhimg.com/v2-60c935246f29ebf70d43da3c568d2a85_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2452e1e547fa65b32f1365943337d619  
**Published:** 2021.01.17 10:52:25  
**Updated:** 2021.05.19 17:58:07  
**Question:** https://www.zhihu.com/question/438677613  
**Question Created:** 2021.01.10 06:58:55  
**Question Updated:** 2021.01.11 18:05:47  
**Votes:** 30711  
**Comments:** 1555  
**Type:** answer  

其实这个回答本来就是写着玩的，本意是希望给大家带来欢乐，如果有共鸣就再好不过了。没想到爆红，所以非常谢谢大家。

最后的最后 ，迟来的：图多慎入！！！！




我这么说吧：

如果你说的acg文化

是这指这个

![](https://picx.zhimg.com/v2-864fe66bd2686a4cd51c1fff83d37582_r.jpg?source=2c26e567)

这个

![](https://picx.zhimg.com/v2-a276c8b7bf7dc72df093010d051623e2_r.jpg?source=2c26e567)

这个

![](https://pica.zhimg.com/v2-7bab85bfe687591fb158599f82b4ae3b_r.jpg?source=2c26e567)

这个

![](https://picx.zhimg.com/v2-5a1173f0a1293eb5e65877f3b79385e6_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-fe585affd4af405b97e3915038454b79_r.jpg?source=2c26e567)

和这个东西的话

![](https://picx.zhimg.com/v2-6a36c68b24447dd697acbd22f6b2ed78_r.jpg?source=2c26e567)

我认为有一定的因果关系。







但如果大家acg文化也包括

这个

![](https://picx.zhimg.com/v2-93f737d008180ac70c9b0612e5094c8c_r.jpg?source=2c26e567)

这个

![](https://picx.zhimg.com/v2-beccacfeee9ea3a7ec70d891403df4f9_r.jpg?source=2c26e567)

这个

![](https://picx.zhimg.com/v2-f26ff23628f86082e16227e57552224c_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-12cd8dc0eecf0bea918ac0436be55d56_r.jpg?source=2c26e567)

和这个的话

![](https://picx.zhimg.com/v2-3221cba86fbeac7de6f8e7bce8951336_r.jpg?source=2c26e567)

我认为因果关系就没那么强了

因为就在今天下午，我发现一群小朋友，在玩这个

![](https://picx.zhimg.com/v2-39b7e320484a229fecd8b7fc28b9451f_r.jpg?source=2c26e567)

显然不止是高学历，更多的这个

![](https://picx.zhimg.com/v2-7346bf6e4ca25305dffcfd403a92178f_r.jpg?source=2c26e567)

喜欢下面这些东西







虽然有主动划清界限，把下面那些开除二籍，不是我们的acg文化，你们不是二次元

![](https://pic1.zhimg.com/v2-7b6ee97566c65f7eeca846a9921d6195_r.jpg?source=2c26e567)

但这不能说明上面那些就比下面玩的高端，可能自己眼中自己形象是这个

![](https://pic1.zhimg.com/v2-35ff5df08d3a0663a37dc97e827b44b0_r.jpg?source=2c26e567)




但下面人看到个别上面人玩的东西，可能表情是这个

![](https://picx.zhimg.com/v2-c51007d946aa8cf0f73b66b1f4411a5a_r.jpg?source=2c26e567)

所以各自圈地自萌，鄙视链不可取

![](https://pic1.zhimg.com/v2-96af3b1544a04280717ae1792eaec900_r.jpg?source=2c26e567)







把话题说回来，其实与其说是不是学历越高越容易喜欢二次元，我拿我自己举例子

我原先家里为了我学习，没给我买这个。

![](https://picx.zhimg.com/v2-56f059864a2efa1e98ac5e0c651bf353_r.jpg?source=2c26e567)

更没有这个

![](https://picx.zhimg.com/v2-7b5e6e43cfb2b1af54f2c671ca345293_r.jpg?source=2c26e567)

那个时候，我如果给我爸妈说拿2000块钱，买这个

![](https://picx.zhimg.com/v2-61f802024eea45384a8139fc90f5e32d_r.jpg?source=2c26e567)

迎来的是这个

![](https://picx.zhimg.com/v2-92c9cf132d58370a92b86d629f678b4e_r.jpg?source=2c26e567)

能有个这个

![](https://picx.zhimg.com/v2-128c8554fd86d86ffaa08643675c359a_r.jpg?source=2c26e567)

就开心成这个

![](https://picx.zhimg.com/v2-6dd33d4def5cc407ad0bb50568b33184_r.jpg?source=2c26e567)

我小中学的时候，手机是这个

![](https://picx.zhimg.com/v2-a0a54c925e8fac3ecef5054dd68eb8e5_r.jpg?source=2c26e567)

只能干这个

![](https://picx.zhimg.com/50/v2-41d5dad64492fd64cda29292ea7cab92_720w.jpg?source=2c26e567)

想了解acg，只能靠这个和这个

![](https://picx.zhimg.com/v2-22a5e58b28a37160c15cf3f504d2fbdc_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-83a591c183a9c2c5150821f688c76902_r.jpg?source=2c26e567)

但是那时候的我很缺这个

![](https://pic1.zhimg.com/v2-453fbe03aa6a6e5acae4a74093902218_r.jpg?source=2c26e567)

同时因为出台了这个

![](https://pic1.zhimg.com/v2-11e4032d70a045736621e4f5a894cbc1_r.jpg?source=2c26e567)

我只能在电视上看这个

![](https://pic1.zhimg.com/v2-3bf08e75b5c1993ee02880b0c091a84f_r.jpg?source=2c26e567)

根本不知道有这个

![](https://picx.zhimg.com/v2-67522fe29f0fb9ad75afcd33b33c1c01_r.jpg?source=2c26e567)

后来18岁上了大学，家里才给我买了这个

![](https://picx.zhimg.com/v2-56f059864a2efa1e98ac5e0c651bf353_r.jpg?source=2c26e567)

有了一点这个

![](https://pic1.zhimg.com/v2-453fbe03aa6a6e5acae4a74093902218_r.jpg?source=2c26e567)

以及这个

![](https://pic1.zhimg.com/v2-a677af62c63abd873cf8277e9b92d4cd_r.jpg?source=2c26e567)

18岁了，才第一次知道了原来日本动画不止有这个

![](https://picx.zhimg.com/v2-1bc86816f2064de23ae2c5aaf8bbbd9e_r.jpg?source=2c26e567)

游戏不止有这个

![](https://pic1.zhimg.com/v2-76edc7f28a7195c7a8916794c6b211ab_r.jpg?source=2c26e567)

还有这个

![](https://picx.zhimg.com/v2-03cfb0abdeb3f1f88f0cbffc8b0c1a5a_r.jpg?source=2c26e567)

和这个

![](https://pic1.zhimg.com/v2-d6386c8d6871cb76fcba0d1345c5bfdb_r.jpg?source=2c26e567)

随着年龄的增加，我获取信息逐渐从这个

![](https://picx.zhimg.com/50/v2-be9fbe559c9384faa7ca28cccdd3e93f_720w.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-d00f5d993c5b804b2e2d6ded9684c8db_r.jpg?source=2c26e567)

慢慢变成这个

![](https://picx.zhimg.com/v2-de38297e41f7b0ac31e93f011a4c2655_r.jpg?source=2c26e567)

和这个

![](https://picx.zhimg.com/50/v2-451af0b71cba1c2224d4e2974a85c638_720w.jpg?source=2c26e567)

我了解越来越丰富多彩，积极向上的acg文化

![](https://pica.zhimg.com/50/v2-1dacb8afec46dd9747367c6db2495ca0_720w.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-64490617f03db38320039b62da947b84_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-8d40f8320a1d35e880c892ba3d482cdf_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-65aee6afb3e9bbc3640dd469875e1a3a_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-3fba9c80b910ac2f70cf05892eff2228_r.jpg?source=2c26e567)

后来工作后赚钱，有钱买了这个

![](https://pica.zhimg.com/v2-2d160f6f8a6565e749f7ba2d564264f6_r.jpg?source=2c26e567)

这个

![](https://pic1.zhimg.com/v2-368349b378707783fe446f5c6bc47a8d_r.jpg?source=2c26e567)

以及这个

![](https://picx.zhimg.com/v2-11ef6061790a9c519bb20c0605f1aca5_r.jpg?source=2c26e567)

说来说去，我认为当时想了解acg文化，有一个不算高的这个

![](https://picx.zhimg.com/v2-b7d15b2549dc4b7b78275f4c05695ec6_r.jpg?source=2c26e567)







而现在孩子幸福多了，2012年后有性能越来越强的这个

![](https://picx.zhimg.com/v2-1eb2ef9080bc4af83fce6cabee5388b9_r.jpg?source=2c26e567)

价格越来越便宜，体验内容越来越丰富

即可以干这个，动画多到看不完

![](https://picx.zhimg.com/v2-504fae2ce0741fe653d0f1fbdd6c9aae_r.jpg?source=2c26e567)

又能干这个

![](https://pic1.zhimg.com/v2-4156049c011ea4b3856e13ca4cc35619_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b3872204d4d093d4cc4468ff719e8f6c_r.jpg?source=2c26e567)

而且人硬件成本是这个

![](https://picx.zhimg.com/v2-a59f25734f1e820d23d2e6c50959ddda_r.jpg?source=2c26e567)

不需要这个

![](https://picx.zhimg.com/v2-368349b378707783fe446f5c6bc47a8d_r.jpg?source=2c26e567)

就能玩高仿版的这个

![](https://picx.zhimg.com/v2-27f66f515aae3875ba316de83e888016_r.jpg?source=2c26e567)

你再怎么喷，至少人画面是这个

![](https://picx.zhimg.com/v2-333b649d20b381af989fc248c5047ef5_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-4fd8a8e2b3f8d88ed0e49581b9d72f10_r.jpg?source=2c26e567)

比我小时候玩的这个

![](https://pic1.zhimg.com/v2-76f0399bd98b7ff4abb0c1e8132727c7_r.jpg?source=2c26e567)

强了两个这个

![](https://pic1.zhimg.com/v2-135e674aac7437822992f3e59d1ce0ae_r.jpg?source=2c26e567)

而且对小朋友来说，还不要这个就能玩

![](https://picx.zhimg.com/v2-453fbe03aa6a6e5acae4a74093902218_r.jpg?source=2c26e567)

还能在同学面前装逼，根本把持不住

![](https://picx.zhimg.com/50/v2-e4843090b92e345ff3484b3678c050e0_720w.jpg?source=2c26e567)




同时人家有这个

![](https://picx.zhimg.com/v2-406bd6c05dfb19efc56c449e6d63b94e_r.jpg?source=2c26e567)

不用特意线下

![](https://picx.zhimg.com/v2-aba99ef1360e3fb320d618183a9fbebf_r.jpg?source=2c26e567)

喊几个小伙伴，随时随地就能干这个

![](https://picx.zhimg.com/v2-9624ca915886912f6fc8913097d7b818_r.jpg?source=2c26e567)

走大马路也能看动画，在想想我的童年，真的很这个

![](https://picx.zhimg.com/50/v2-70e07f8eac0166edc102443de2207931_720w.jpg?source=2c26e567)




之前去吃饭，老板孩子也就七八岁的小学生在大厅里，喊了很多小伙伴，拿着大厅的电视，放这个。让我惊愕万分。

![](https://picx.zhimg.com/v2-7a81f0f1c27e0c1bb31f0af4c0824c2d_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-b54b5352b20fc01855b0e6c2b36646ef_r.jpg?source=2c26e567)

遥想我高中只能艰难去下载后，再传输用mp4看海贼王，18岁才算有途径正式接触深夜动画。我估摸着之后acg文化接触的年龄层会越来越小，长此以往下去很小就是这个

![](https://pic1.zhimg.com/v2-1f8f2d0fa20b0c8b0c31c30622212c70_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-8e049f0ff0e03eb731e511b0c7366b20_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-b76ff2e6b56fe98c4deaf9ad5300778a_720w.jpg?source=2c26e567)




哎

![](https://picx.zhimg.com/v2-ae4c23a5a8894b9bc9bbd735a0362342_r.jpg?source=2c26e567)

最后祝福给我点赞的，有越来越多的这个

![](https://pic1.zhimg.com/v2-a756cdfedf51f38e3791c7c8f4da1c50_r.jpg?source=2c26e567)

找了这么多图，我容易吗！

![](https://picx.zhimg.com/v2-b00769797bc8d471dd72b817c92c3b9f_r.jpg?source=2c26e567)


---

# 为什么知乎上优秀的数学答主的头像大都是二次元动漫美女头像呢？ rektboiz

**Author:** rektboiz  
**Bio:** Check my PRL  
**Avatar:** ![](https://picx.zhimg.com/v2-cd4181447ca8d2fa98ac9563d6b35c07_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c9d30957c50290f9138c8c1fa021807b  
**Published:** 2023.08.07 01:48:59  
**Updated:** 2023.08.07 01:55:10  
**Question:** https://www.zhihu.com/question/615351000  
**Question Created:** 2023.08.03 01:55:18  
**Question Updated:** 2023.08.03 01:56:46  
**Votes:** 7964  
**Comments:** 361  
**Type:** answer  

所谓的二次元文化在中国理科高材生中的流行是一个非常有趣的社会学课题，研究这个玩意儿至少可以毕业一个985社科类博士




简单说，二次元文化最初传入中国的时候是有门槛的，最初的受众必须满足这么几个条件，14-18岁，从小有条件看电视，在青春期有稳定的网络接入，在世纪交接那个年代这个要求事实上是很高的，基本上必须是二线以上城市才有相当数量的家庭具备这个条件。小城市也不是没有，但是少，少就不能形成社群，年轻人的爱好形不成社群往往难以持久




那么这个社群在哪里可以形成呢？大城市的名牌高中。通常来说这些高中的学生家境都比较好，中产以上。这其中又以理科竞赛的圈子为甚，原因也很简单，理科竞赛的圈子不仅家境水平普遍比较好，而且男生显著更多，这样最初的动漫社群就形成了。再加上理科竞赛圈子有比较独特的传承关系（通常都会有不同年级一起上课的阶段），同时跨区域的交流又比较多（集中培训），以此种种，这个社群的很多文化现象就存在高度的一致性和延续性。直到现在，竞赛圈子里的二次元画风还是与大众亚文化不太一样




而在世纪头十年，理科竞赛的保送生名额是相当多的，清北华五的理科专业可能百分之二三十甚至更多都是保送生，于是竞赛保送生的二次元社群又向高校扩散，直接影响了头部高校理科的文化氛围，这又解释了为什么时至今日像中科大这种理科大校的二次元浓度仍然特别高，尤其是很多在国内从来没出过圈的古早小众圈子（小众指在国内）在一些理科大校都有很深的留存




而在理科竞赛圈子里数学和计算机又是二次元浓度最高的，主要是这俩确实抱团，计算机还只是高中时代抱团，到了大学就被稀释了；数学那真是特别抱团，从高中数竞到大学数学系整个气质延续性极强




当然一说这个事就会有一些奇怪的后续，因为这种非常怪异的机制，导致中国产生了一个可能是全世界唯一的精英二次元社群（当然你会说东京大学也有二次元，但是他们不会以一种独立的社群认同存在），叠加上中国经济的高速发展，这个社群最终给传统意义上的日本动漫文化带来了巨大的后效，其中的代表就是某个上交校友企业




我就先说这么多，剩下的留给985社科博士去干


---

# 如何评价动画缘之空？ 希依西一

**Author:** 希依西一  
**Bio:** 互联网就是一滩烂泥塘，有什么好介绍的  
**Avatar:** ![](https://picx.zhimg.com/v2-b7d0773cb983542411b4ff290f04a865_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/01182e02acb80f9c8a6e501f2d2fdee3  
**Published:** 2025.06.25 15:10:15  
**Updated:** 2025.06.25 15:10:15  
**Question:** https://www.zhihu.com/question/444531715  
**Question Created:** 2021.02.15 14:35:41  
**Question Updated:** 2025.09.01 12:22:45  
**Votes:** 927  
**Comments:** 116  
**Type:** answer  

我是十六岁那年知道的缘之空。当时的同学们只是在说这部番很エロ，但其实看完之后，我一点没有觉得它エロ。相反，受到很多触动，首先是它教给了我如何对待感情。

诚然，人这一辈子在结婚之前会遇到很多感情，但你最终是要选择一位和你固定下去。年少的我并不懂得这个道理，以为伴侣是可以挥之即来招之即去的，人也是可以同时喜欢上很多人的。

因为并没有人教过我，如何去爱一个人，也包括如何爱自己。

而春日野悠教会了我，你可以在小学的时候就被邻居大姐姐推倒，也可以推倒同班的小妹妹。于是在被推倒和推倒别人的经历中，我也逐渐明白了爱的责任。

sphere（缘之空游戏制作方）也表示，剧情中春日野悠虽然推倒了四个妹纸，但是是发生在平行时空的故事。一次还是只能选一个。

然而最令我动容的，还是悠和穹的故事。

我现在住在穹的老家，足利市桦崎町，一个不知名的小街区，因为动漫剧情中涉及伦理的争议，即便市政府想通过缘之空这部动漫来让这里成为巡礼圣地，也因为制作方不想扩大不良影响而不了了之。但是当我行走在水田中间的石子小路上时，每当我掏出相机想要回忆动漫里的场面，却总是对不上号。

于是我打开了十六岁时保存的动漫op，想要回忆一下动漫里出现的场景，却愕然发现，我所在的每一帧都是动漫中的场景。因此无需捕捉和抓拍，所见即所得。只缘身在此景中。

两岸的水田，低矮的房屋，空旷的街道，和悠远的苍穹，已经默默的构成了这里的全部。

于是我想这时唯有那首《記憶》的钢琴曲才配得上眼下的氛围。我终是到达了这里，但我已经不再是十六岁的少年。即便是十六岁的少女，也早已在八年前就成为了风化般的记忆，在岁月的黄沙中吹散殆尽。吉光片羽的回忆已无法拾掇，就如同破碎的字符也再拼凑不出完整的青春。

我参加过很多场婚礼了。新郎当天最帅，新娘当日最美。觥筹交错间，带着祝福，载着爱人，驶向人生的下一个存档点。直到我二十五岁，却惊觉自己并不会喜欢谁，发现自己不再会想为了谁而拼尽全力，为了谁而辗转反侧。

人生的最高境界，是为了自己而活。重视自己的欢愉。我想我做到了。但人生的更高境界，又何偿不是，你的笑容就是我的欢愉呢。

于是我想，回到缘之空这部作品。悠和穹永远都是为彼此着想的。即便是发现悠在为此烦恼，穹的那句“如果有了那就打掉就好了啊”也成为了经典名句。血浓于水的亲情，又何尝不是肌肤交融的爱情。我想我被震撼到的是作者超绝的视点，和突破伦理束缚的勇气。

此外，在TV动画大结局的时候。苍永梢的那句，“有了感情就可以为所欲为了吗？如果只是因为喜欢就可以为所欲为的话，那我也有很多想要做的事情…”一边说着，一边流着眼泪推着自行车走远。

我在桦崎町见到了很多穿着制服的年轻学生。这里交通不便，没有巴士和电车，通学还是依靠步行和自行车。悠时常载着穹骑着自行车在乡间的道路上，后来在歪脖树的路口和朋友们一起步行上学。渚一叶是大小姐，因此会有管家专车接送。看到桦崎町的孩子们，我就想到，剧作者一定是很懂这里生活的人，因为在这里，没有车确实寸步难行，而自行车很凉爽自在，当然，若是和三五伙伴并肩同行，也很畅快，亦不会觉得路途遥远疲惫。

穹和悠在最后，仍是选择了离开这个小村庄，似乎在西欧的某个国家定居，也有人曾去圣地巡礼。但太过遥远。不过既然这份缘分驱使我从中国的城市来到日本的这个村庄，也许会在某一天，也悄悄驱使我到达西欧的那个安逸的广场，那里也许会有橄榄枝和白鸽，也许会有教堂的钟声和静谧的街灯。

回到缘之空，它带给我了什么。静静思索，也许是一个全新的世界。诚然，我入坑的第一部动漫是《斩赤红之瞳》，因为我的初中朋友杨君告诉我，我曾喜欢的一位姑娘在追这部番剧。《斩赤红之瞳》亦是优秀的作品，但在此不多作赘述。而缘之空作为我观看的第四部作品，却同是对我影响深远。首先是日本的乡下生活，其实很无聊，没有网络，交通不便，没有空调，还有蚊虫。穹到的第一天就在和悠抱怨了，悠在安慰她慢慢都会置办的。于是我想，如果是一个人从城里到这里，应该是很难适应的吧，但是因为有哥哥在，困难就不是困难了。

于是我终是忍不住低声抽泣，倘若我的人生里，也可以存在着那么一个人，让我在觉得，“不行了，承受不了，快要放弃了”的时候，而因为想到ta又觉得“可以坚持一下，因为有ta在还不是那么糟。”，那该有多好。可是并没有。因此相当长一段时间，遇到困难，我的选择就只有，“逃和死。”

…其次，是世俗的眼光。即便所有人都知道了悠和穹已经从兄妹发展成为了不正常的关系，就连悠也为之所困扰，穹却还毅然决然的迸发出惊人的毅力，不仅要安慰迷茫的悠，还要勇敢的面对众人的指点。哪怕最后要沉入湖底，决心让人生重新来过的勇气，也令人肃然起敬。她太勇敢了，勇敢的令人不敢直视。如今这样繁杂的社会，又有多少位性情中人。最近一年同样因为感情沉河而死的少年，又落得怎样的下场了呢？

……我所羡慕的，我所憧憬的，我所倚盼的，我所向往的。都在这片悠远的苍穹之下，被这个故事所书写。我们互相吸引，如落水的人抓住稻草，如坠落的人抓住树枝，如疲惫的旅人得到席枕。纯真的感情，以及面对世界的勇气。

我不知道每个人，会因为什么样的动机，而观看这部作品。但我想，愿意花五个小时的车程来到穹和悠的故乡的人们，一定对着作品有着别样的想法。个中滋味，非经历不能明白。人和人本就是难以共情的生物，但在看到悠和穹的故事，我却久久不能忘怀，2015年至今日，听到那首《記憶》也好，总能唤醒我那个曾经，那个夏天的荒唐和年少。

年轻虽然年轻，但其一去不返。如同奔向那苍穹的列车，驶向何方呢。




吴行

2025.6.24 23:03 桦崎町游历有感




![](https://pic1.zhimg.com/v2-1f73398fea124101e6f4251623f427c3_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-97a7556bdd636ada7565f20b0bc9f8a4_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-cd0971c5dc60cdfa7a42d6a35c4cc51c_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-33d40a74c3a6fe44a196b30f5e97703d_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-abe57b29037d5ecf0c8ee6a351e14cd0_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-5f8752ecf5ff5cc9c3343c46d2a65362_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-83b4c574757089666d8e5728afcdaab0_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-b92365d72026ed14515552c480b0f80c_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-29e567224d87ecc5a71a4384ca65324d_r.jpg?source=2c26e567)


---

# “你能把遗憾写到什么程度”？ 柳三儿

**Author:** 柳三儿  
**Bio:** 内心深处最柔软的情绪  
**Avatar:** ![](https://pic1.zhimg.com/v2-02fa8363e40f7ab1429f92ed7368d95f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7f852fe21f06093df15e8bc4985a3e21  
**Published:** 2023.10.28 13:41:28  
**Updated:** 2024.05.02 23:26:13  
**Question:** https://www.zhihu.com/question/621824115  
**Question Created:** 2023.09.13 13:34:39  
**Question Updated:** 2023.09.13 13:35:48  
**Votes:** 35345  
**Comments:** 619  
**Type:** answer  

![](https://pic1.zhimg.com/v2-30c891d0478cead302a84d574b7bd461_r.jpg?source=2c26e567)

**“老兄，18岁的时候真的对未来一无所知。”**




2023.12.24

发出这篇回答的三个月时间里，看到了知友们各种各样的评论与私信，有些关于年少时错过青涩朦胧爱情的惋惜，有些关于现况与年少时幻想的未来大相径庭而无奈。

正如史铁生在《务虚笔记》中所描述的那样：

**“如果你站在童年的位置瞻望未来，你会说你前途未卜，你会说你前途无量；但要是你站在终点看你生命的轨迹，你看到的只有一条路，你就只能看到一条命定之路。不知道命运是什么，才知道什么是命运。”**

也许，你和我一样正在承受着生活带来的悲伤与迷茫，还请：**相信未来。**

这并不是一句我随口忽悠你的一句空话、套话，我是做了调查的。

四个月前，我在网易云音乐歌曲的热评下，选取了一些多年前的评论，逐一与他们取得联系，询问近况如何：

![](https://picx.zhimg.com/v2-0474b189ef4a1c5954d1a2672f87bac4_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6b0ea0b1f5b57beafcbdd7c05f3476c7_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-06b4e7bbf38f58ade8403d305a6feff7_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a1c3cb3d7ab15c7f5424ead7cd87a04c_r.jpg?source=2c26e567)

**轻松点我的朋友们**

人，本就有选择平庸的权利，拥有碌碌无为的权利。即使想做一个强者也没必要取得某种优越感，不要被功利主义冲昏头脑，永远保持内心的清醒，内心的这片净土只属于你，只要你守护着它，任何外部力量都无法玷污。

[想听听炸裂三观的真事?](https://www.zhihu.com/question/634587886/answer/3473757107?utm_psn=1769507800269766656)


---

# 为什么叔本华认为年轻人很早洞察人事、谙于世故预示着本性平庸？ 曾加

**Author:** 曾加  
**Bio:** 清华本硕|延迟满足|小红书B站上我叫普拉思  
**Avatar:** ![](https://picx.zhimg.com/v2-f7f05f9f315fd9c91f0c3e58b73d2212_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/184d63c15edb58b42e0a02628945fa76  
**Published:** 2019.05.12 15:01:24  
**Updated:** 2019.05.12 15:20:58  
**Question:** https://www.zhihu.com/question/61134374  
**Question Created:** 2017.06.15 16:55:31  
**Question Updated:** 2020.04.15 10:41:03  
**Votes:** 22501  
**Comments:** 983  
**Type:** answer  

有意思的问题，感谢邀请。




这个问题，其实 4 年前我在[很多智商高的人情商低吗？为什么？](https://www.zhihu.com/question/20715561/answer/66302593)的回答中已给出过解释：

> 对于一个很 「普通」 的人来说，情商的习得方式很简单，就是「将心比心」；对于一个有些「特别」 的人来说，情商的习得方式不太容易，更接近于「模式识别」。

类比地说，所谓「洞察世事」，本来就有两种实现方式：

- 第一种是，观察大部分人是怎样做的，并接受和模仿它；
- 第二种是，思考大部分人行为模式的内在原因，试图用逻辑合理化，然后再寻找适合自己的最佳行为模式；

第一种是相对容易的。因为，**我们接受的事实越多，就越容易接受新的事实。**这就好比：在数学中，我们所认同的「公理」越多，推导新的定理就越轻松。

但这种思维方式，真的是正确的吗？

-----

我来举个形象的例子：**为什么 1+1=2？**

绝大部分人，听到这个问题，往往会一愣：这不是大家都认可的事实吗？具体的表现方式有：

- 我小时候，父母/老师就是这么教的；（诉诸于权威）
- 所有人都这么说，没有人反驳过它；（诉诸于多数人的意见）
- 1+1=2 显然就是事实，这是公理吧？
- 我们证明不了它，只能先认同它，陈景润不也才证明 1+2=3 吗？（此处大误：陈景润研究的问题和 1+1=2 没有任何关系）

只有一小部分人，才会更深入一点，去研究 1+1=2 背后真正的原因，那就是**「皮亚诺公理」（Peano axioms）**：

- 0是自然数；
- 每一个确定的自然数a，都具有确定的后继数a' ，a'也是自然数（数a的后继数a'就是紧接在这个数后面的整数（a+1）。例如：1'=2，2'=3等等。）；
- 0不是任何自然数的后继数；
- 不同的自然数有不同的后继数，如果自然数b、c的后继数都是自然数a，那么b=c；
- 设S⊆N，且满足2个条件（i）0∈S；（ii）如果n∈S，那么n'∈S。则S是包含全体自然数的集合，即S=N。

**1+1=2，其实是通过这 5 条公理推论出来的「推论」。**

**-----**

不知道你感受到没有，「皮亚诺公理」才是更接近于事物本质的「真理」，但大部分人并没有这种抽象能力，于是只能先接受 1+1=2。（甚至有不少人，不仅自己没有这种好奇心，还会把这种「打破砂锅问到底」的精神定义为「钻牛角尖」）

很显然，会去研究并意识到「皮亚诺公理」的人，大概率是相对聪明的那一批。

这就好比计算机编程：有些人可以写最底层的「汇编语言」，有些人可以写架构在汇编语言上的「高级语言」 Python、SQL 等，但大部分人，只会用 Word、Excel —— 我不是说后者一定是笨蛋，毕竟对于大部分人来说编程不是必备的技能，但是前者一定具备了相当数理逻辑能力的人，这点大家不会反对吧？

因此，**内心接受「默认前提」越少，这个人是聪明的概率就越大；反过来说，如果一个人是平庸的，那么他必须接受足够多的「默认前提」才能在这个社会中生存下去。**




但正如发现和理解「皮亚诺公理」和「汇编语言」并不是一件轻松的事情，需要很多知识的积累，在不算太小的年纪才能领悟，**真正的、在「理解」世界运作规律下的「洞察人事」也必然需要相当多生存经验的「积累」才能达成，是绝不可能在年纪尚小的时候实现的。如果一个人很早就自以为理解了这个世界的运作规律，那大概率是认同了足够多并不是显然的「前提」，而没有真正理解之。**

从另一方面来说，**在不理解的前提下，一个人认同的「默认前提」越多，他的「创造性」也就越差，行为模式上也就越容易禁锢在一个小的圈子里，沦为平庸；而认同的「默认前提」越少，他的「创造性」就越强，也就越有可能发现全新的、合理的「世界运行模式」，从而改变人类的认知。**




这便是我理解的、叔本华这段话的精髓所在。


---

# “你生孩子，经过孩子同意了吗？”怎么回答？ 神秘的蚂蚱

**Author:** 神秘的蚂蚱  
**Bio:** 八十八线小扑街写手  
**Avatar:** ![](https://picx.zhimg.com/v2-06867da08ebac6d3768c72ac10b6cb5f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3954f838312fd5bbaac8e85d6f331348  
**Published:** 2023.07.05 15:11:29  
**Updated:** 2023.12.13 06:57:19  
**Question:** https://www.zhihu.com/question/605341693  
**Question Created:** 2023.06.07 19:31:21  
**Question Updated:** 2023.06.07 19:31:21  
**Votes:** 2233  
**Comments:** 562  
**Type:** answer  

泻药。

这个问题最吊诡的地方在于，人的心情是会变化的，同意不同意，都会随着你的境遇和想法一直更新。




你三岁的时候，父母带你去游乐场，给你买棒棒糖，问你出生在这世上开不开心，你肯定说开心。

这时候的你是同意出生的；




你六岁的时候，语文数学考了双百，老师给你发了大红花，回家妈妈给你做了糖醋排骨，爸爸给你买了变形金钢。问你开不开心，你是开心的。

这时候的你是同意出生的；




你十岁的时候，考试不及格被爸爸抽了一顿，妈妈说扣你这个月的零花钱。你气得晚饭没吃，他们竟然毫不关心。这时问你开不开心，你是不开心的。

这时候的你也同意出生，但会有点小纠结。




你十六岁的时候，班上的男同学们有新球鞋新衣服，放假可以出国旅行，可以请喜欢女孩喝奶茶去网红店打卡。你也想要新球鞋，爸妈却只能买得起山寨货。你很委屈，爸妈却说，不要跟人比这些，有本事你跟人比比学习。你说学习我也比不了，人家天天有名师辅导，还能去海外夏令营，你爸妈就说隔壁家的谁谁一样没有人辅导，人家怎么上了清华？你很生气。你觉得智商也是遗传父母的，你没有好基因不也是因为他们嘛。

这时候你会希望父母没有生下你，这不是你想要的家庭。




你二十岁的时候，上一所普通大学，终于脱离家庭，奔向自由的怀抱，你逃课打游戏，跟同学去便宜小馆子撸串喝啤酒，交一个长相一般但挺温柔的女朋友，钱不够了找爸妈要，他们骂骂咧咧但也还是会给，偶尔做个兼职，用来给游戏充充值或者买双球鞋。日子虽然抠搜一点，但还算开心。

这时候你是同意出生的，你年轻、健康、日子有盼头，未来有希望。




你二十八岁的时候，在二线城市做一份普通工作，没房没车没有未来。别人介绍一个女朋友，却因为付不起彩礼而只能分手。这时候父亲失业母亲病重。你感受着生活的重重压力，怀疑自己为什么要出生。

这时候你不同意出生，你觉得生活太艰难，活着就是遭罪。







可是




可是




可是

如果这时候你爸忽然中了彩票呢？

如果这时候你家的老房子忽然拆迁了，分到几百万呢？




你分分钟又觉得人间真他妈值得，无比庆幸你爹妈把你生下来了……







少年，人生是流动的，人的际遇也是变化的。

你今天同意的事，明天可能反对，后天可能又同意了。

且不说你父母在生出你之前有没有条件问问你同不同意，就算有，他们要问几岁的你呢？你能保证当时的你的心情就是一定是准确的吗？他们还有办法今天生下你明天把你捏死吗？




不乐意出生的大多无非是嫌家里穷嘛，可问题是，你父母也未必知道他们一辈子都这么穷啊，他们当时只是想要个孩子，那个人碰巧是你，就这么简单。







比如我一个小学同学，他应该算是地狱开局了吧，他爸是个烂赌鬼，喝酒赌博家暴，打完他妈就打他，有一次还生生把他妈妈打住院。

你如果小学时问他愿不愿意出生，他绝壁是不愿意出生的。

但是，后来他初中时，烂赌鬼老爸出车祸被撞死了，人家赔了他家一笔钱，他妈妈一个人带着他生活，日子好过多了。

现在他大学毕业，工作也还可以，结婚生子。看他过得还不错，现在应该是不后悔出生了。

怎么说呢，就世事难料吧大概。




还有个老家的邻居，本来他家里那叫个一贫如洗，都没有人愿意给他说媒，但是后来他们村拆迁了，他家一下获得了五套房，整个人都得瑟起来了，也开始挑剔别人介绍的对象了……

嗐，人呐。







如果是遭受家庭暴力的孩子，我想说，最重要的是不要把自己困在原生家庭的阴影里。18岁以后的你还有更漫长的人生，比如你如果能活到90岁，那前18年只占20%，未来的路与你而言才是更长更重要的。

你不如就当自己是个自由灵魂，只不过借着你父母的身体来到这个世界，成年后你可以摆脱他们冲向广阔天地施展自己的才华创造自己的人生。

谁打你你特么就原样打回去。

至于你到底想不想出生，你的人生值不值得过，现在说了不算，你八十岁时再来看。










最后。

如果你的人生真的完完全全都是至暗时刻，没有一丝光亮，真的这么讨厌生活在这个世界上，不也还有……咳咳咳……的选择嘛……（完全不建议，纯开玩笑的）




最后的最后。

有人说我的描述不够悲惨。

可是比惨这件事是没有尽头的。包括我自己，其实也算地狱开局了，肯定比大多数的都惨，但我不想举自己的例子也是觉得，估计很多人会觉得我是幸存者偏差。




但我也不是最惨啊，惨这件事是没有尽头的。

比如那些被拐卖到山里的，被故意弄残乞讨的，未出生就感染毒瘾的，刚出生就感染HIV的，被故意遗弃的，被家暴打残打死的……




再放眼世界看看，非洲那些一出生就各种疾病饭也吃不饱的孩子们，泰国那些从小就被灌药强迫变性的，还有某些宗教国家被强行割礼的，印度那些被强奸轮奸的，越南老挝那些十几岁就被卖给人当新娘的……




这些人甚至无法问出这种问题。

他们又能问谁去？

所以我没有举极端的例子，因为比惨这件事是没有尽头的，对目前我们大部分人也没有参考意义。

而且那些最惨的难道就不该活着吗？他们难道该一出生就去死吗？

不如他们惨的就不痛苦了吗？

人啊，不能一直钻牛角尖，总盯着暗面，咱们普通人，比上不足，比下有余。还是尽量放平心态吧。




～～～～
（看到有人在纠结变形金刚糖醋排骨和游乐场，觉得普通家庭的孩子就不可能拥有，仿佛只有商场里的正版变形金刚才配称为变形金刚，只有迪士尼和环球影城才配叫游乐场一样……

就无语，变形金刚的动画片九十年代初在电视台热播，我记得当时地摊上的山寨变形金刚两块钱一个，那难道不是变形金刚？县城小公园里的儿童游乐场简陋的旋转木马和海盗船，对我们而言那就是游乐场啊；还有糖醋排骨，就非得纠结字眼吗？不是排骨总会有点别的什么是你父母家人曾经给过你的吧？或许是一顿饺子，或许是一块钱的小蛋糕，或许是一块巧克力、一个炸鸡腿………）


---

# “你生孩子，经过孩子同意了吗？”怎么回答？ Kauti

**Author:** Kauti  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-acc6998ecb43ea44897d7f333b7586fa_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/11755547013f1b3cf9977414a2b98226  
**Published:** 2023.07.06 05:59:21  
**Updated:** 2023.07.06 05:59:21  
**Question:** https://www.zhihu.com/question/605341693  
**Question Created:** 2023.06.07 19:31:21  
**Question Updated:** 2023.06.07 19:31:21  
**Votes:** 21885  
**Comments:** 1425  
**Type:** answer  

胡适曾写过这样一段话：”我养育你，并非恩情，

只是血缘使然的生物本能；

所以，我既然无恩于你，你便无需报答我。

反而，我要感谢你，

因为有你的参与

我的生命才更完整

我只是碰巧成为了你的父亲/母亲

你只是碰巧成为了我的女儿和儿子，

我并不是你的前传，

你也不是我的续篇。

你是独立的个体，

是与我不同的灵魂；

你并不因我而来，

你是因对生命的渴望而来。

你是自由的，

我是爱你的；

但我绝不会“以爱之名”，去掌控你的人生。”

后来胡适离开大陆，想带胡思杜走，胡思杜不愿胡思杜留在大陆并在之后于报纸上与胡适断绝父子关系，1957年离世。


---

# “你生孩子，经过孩子同意了吗？”怎么回答？ 翘沟子的癞瓜子

**Author:** 翘沟子的癞瓜子  
**Bio:** 文静内敛胆小害羞的中年妇女。  
**Avatar:** ![](https://pic1.zhimg.com/v2-dcace08aafed5249ef77f3157293c86e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a24f05ed9ba028319e5dc984ce794e16  
**Published:** 2023.09.02 03:32:31  
**Updated:** 2024.01.18 19:59:47  
**Question:** https://www.zhihu.com/question/605341693  
**Question Created:** 2023.06.07 19:31:21  
**Question Updated:** 2023.06.07 19:31:21  
**Votes:** 4684  
**Comments:** 194  
**Type:** answer  

没有，对不起，我只顾自己爽了。

我现在更过分了兄弟们，现在领导让我干点什么我就说不会，上次让我做个ppt，我直接摆烂了“我一个人中专生，我不会写ppt也很正常吧？”

即使如此，昨天述职，领导们一致认为我是一个很棒的员工哈哈哈哈
