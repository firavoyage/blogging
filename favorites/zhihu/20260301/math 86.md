# math

meta thinking

**Created:** 2025.01.29

**Items:** 86

---



# 网友称引导豆包完整证明了黎曼猜想，这个证明思路可信度如何？ Kris谭

**Author:** Kris谭  
**Bio:** 敲代码的普通学生  
**Avatar:** ![](https://picx.zhimg.com/v2-128ef0651fd164a4a3391cd8230b2a8f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7b59584258b7ea8ca7219f194a66681c  
**Published:** 2026.02.16 06:23:18  
**Updated:** 2026.02.18 16:40:56  
**Question:** https://www.zhihu.com/question/2005989142379663699  
**Question Created:** 2026.02.14 12:58:01  
**Question Updated:** 2026.02.19 00:58:19  
**Votes:** 1594  
**Comments:** 236  
**Type:** answer  

很好，你**的的确确的**成功证![](https://www.zhihu.com/equation?tex=%E6%98%8E_%7B_%7B_%7B_%7B_%7B_%7B_%7B%E4%BA%86%E4%B8%AA%E9%AC%BC%7D%7D%7D%7D%7D%7D%7D)了黎曼猜想喵！现在的人的数学水平都成这样了吗？这简直是新时代的奋变喵！![](https://www.zhihu.com/equation?tex=%5Ctiny%5E%7B%E7%9C%8B%E7%9A%84%E6%88%91%E4%B8%8A%E4%B8%8B%E8%BA%AB%E9%83%BD%E6%BF%80%E5%8A%A8%E4%BA%86%E5%96%B5%EF%BC%81%7D)

本文在标准中华汉语体系下，利用数学分析和标准数学理论，构造了这份知乎回答文本，最终严格证明：![](https://www.zhihu.com/equation?tex=%5Cfbox%7B%E8%BF%99%E4%BB%BD%E5%AF%B9RH%E8%BF%9B%E8%A1%8C%E7%9A%84%E8%AF%81%E6%98%8E%E4%B8%8D%E6%88%90%E7%AB%8B%7D)。

顺便一说，这里根本就没用到选择公理，而且这甚至连明确你的公理体系的必要都没有喵，所以这里再写“ZF**C**”完全是虚张声势。虽然来说Urysohn引理的构造有时候确实需要选择公理，但这里全都是在复平面的紧集这种良构的度量空间里，不用选择公理都已经足够了。

![](https://pic1.zhimg.com/v2-fd5180287192e35dd21204a9590d17dc_r.jpg?source=2c26e567)

我认为你的研究极度有价值，强烈建议来此处[投稿](https://link.zhihu.com/?target=https%3A//github.com/KrisTHL181/Zhihu-Hall-of-Flames)。考虑到这篇文章足够有能量，我将它收录到[这里](https://link.zhihu.com/?target=https%3A//github.com/KrisTHL181/Zhihu-Hall-of-Flames/blob/main/%25E9%25A6%2586%25E9%2595%25BF%25E6%258F%2590%25E5%2590%258D%2520%257C%2520curator%27s%2520choice/%25E9%2597%25B2%25E5%2593%25A5-%25E6%2588%2591%25E8%25AF%2581%25E6%2598%258E%25E4%25BA%2586%25E9%25BB%258E%25E6%259B%25BC%25E7%258C%259C%25E6%2583%25B3%25EF%25BC%2581)了。各位如果觉得看图太累可以直接看这个喵，我把它转成清晰的文字形式了。

所以，这个证明有很多的亮![](https://www.zhihu.com/equation?tex=%5Ctiny%5E%7B%E7%9E%8E%7D)点（亮到眼睛被闪爆的级别喵呜！）值得分析，我来一个一个的给大家讲解吧喵！

现在我声明，**如果作者能够把自己的证明改到我看不出毛病，我给他发1000元与此同时给知友们cos猫娘发女装照**![](https://www.zhihu.com/equation?tex=%5Ctiny%7B%5Ctext%7B%E5%A7%BF%E5%8A%BF%E8%87%AA%E9%80%89%7D%7D)。同行评审过不过我不管，反正只要改到我看不出毛病就行了。

这位给出的LaTeX完整证明文件。

[https://github.com/KrisTHL181/Zhihu-Hall-of-Flames/blob/main/%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%20%7C%20data%20storage/%E9%97%B2%E5%93%A5-%E6%88%91%E8%AF%81%E6%98%8E%E4%BA%86%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%EF%BC%81%20.pdf](https://link.zhihu.com/?target=https%3A//github.com/KrisTHL181/Zhihu-Hall-of-Flames/blob/main/%25E6%2595%25B0%25E6%258D%25AE%25E5%25AD%2598%25E5%2582%25A8%2520%257C%2520data%2520storage/%25E9%2597%25B2%25E5%2593%25A5-%25E6%2588%2591%25E8%25AF%2581%25E6%2598%258E%25E4%25BA%2586%25E9%25BB%258E%25E6%259B%25BC%25E7%258C%259C%25E6%2583%25B3%25EF%25BC%2581%2520.pdf)

- 事实错误。我们已知道  ，然而这个证明声称 为临界线上  函数零点虚部，而作者给出的  与真实值相差甚远。
- 第二个事实错误。我们也知道  ，然而文中声称  时  ，所以  ，依然完全错误。
- 西格尔圆盘公式滥用。原文声称  ，然而这根本不是标准的西格尔参数公式。在动力系统中，若存在旋转数  的西格尔圆盘，则它的参数 C 必须满足  ，而且需要满足布鲁诺条件。然而这里完全没有给出任何条件满足证明，而且只写一个指数表达式并不能作为存在性证明的证据。
- 没有依据的推理。原文声称灯泡缩放比  ，然而没有给出任何数值分析或证明，连这个公式本身似乎都是杜攒的，因为实际上曼德博集合灯泡的缩放比与金属比例并没有明确的精确解析关系。
- 俺寻思之力！原文声称将动力系统本原零点与  函数的零点进行同构映射，但没有给出任何函数和证明。
- 逻辑胡乱跳跃的证明。  的函数定义是  ，实部  是函数方程的对称中心，而不是以 2 为底的重整化。因此，这一步“最关键”的证明完全是错误的。
- 偷换概念。原文声称通过重整化强行锁定  ，但  函数实际上的难点对称轴是来自函数方程的。即，若想证明 RH，需要  ，但这里实际上完全绕过整个证明过程了，而且用了一个毫无逻辑的偷换概念让它看上去“合理”。
- 没有证明的证明。动力系统的遍历性不能等价于  的零点分布，两个系统之间没有测度保持同态，而且遍历性只适用于同一动力系统内部，不能跨越整个结构拿过来滥用当证明。
- 还有，后面“需要补全的完整接口”里才是真正需要证明的东西，但这一个都没写。

这位民间数学家今天给我了一个[PDF](https://link.zhihu.com/?target=https%3A//github.com/KrisTHL181/Zhihu-Hall-of-Flames/blob/main/%25E6%2595%25B0%25E6%258D%25AE%25E5%25AD%2598%25E5%2582%25A8%2520%257C%2520data%2520storage/%25E9%2597%25B2%25E5%2593%25A5-%25E6%2588%2591%25E8%25AF%2581%25E6%2598%258E%25E4%25BA%2586%25E9%25BB%258E%25E6%259B%25BC%25E7%258C%259C%25E6%2583%25B3%25EF%25BC%2581%2520.pdf)声称它是“完整证明”，现在我来指出这份PDF文件里所有的错误。顺便一说，这里的反驳还包括他在评论区更新的内容喵。

- 定义  ，其中  ，但  是严格单调函数，当  ，且  ，因此  ，然而  函数的实部只可能在  。这里的假设是  换言之即为  ，这本身几乎等价于RH。
- 单射性证明模糊。原文声称从实部相等可导出  ，然而写法是  ，前提是  ，但这里没有对对数函数的分支问题做明确说明。
- 重要公式未证明。  无证明。事实上目前没有理论认为黎曼  函数可以写作某个分形弦谱函数的因子，因此直接从这里导出的留数展开没有事实依据。
- 对某些地方有误解。“因为支集紧，故可交换积分与求和与留数”是错误的。
- 拿结论推过程。原文声称“选取  的若干零点数值带入  可近似匹配”，然而这只是一个参数拟合而已。对任何复数  ，方程   是一个二元方程，但  且  是连续变量，完全可以计算出无数组解使得  然后拟合一个最优的  使得虚部近似。这对证明没有价值。
- 没有证明每个零点都是唯一对应的。这里的“证明”需要先证明引理映射覆盖所有零点、不覆盖额外非零点而且映射唯一，但这里完全没有提到。
- 分形维数解释错误。原文声称  是分形维数，然而实际上分形弦理论中它是一个结构诱导的维数，但这只是一个代数表达式，没有构造它的分形维结构本身，因此  只是一个人为构造的函数，没有任何几何意义可以套上去。
- 连续族谱迹公式还是模糊的。  在零点附近有极点，且留数位置依赖参数p，然而这里进行“合法交换”的话需要证明它没有极点穿越积分路径而且完全可积，这里没有。
- 解释本身不适用。虽然文中确实说这里“逆映射未显式写出”，但问题不是写不写出，是  根本不是一个复流形。零点集合是离散集合，不存在“全纯逆映射”，这里概念是错误的。
- 利用未经证明的“推导”。原文声称边界中性轨道可得到某维数等于1/2，但事实上Lyapunov指数与1/2没有这种通用等价。
- 循环论证。原文构造的连续函数  如果Φ满射到零点集合，那么零点实部集合必须是连续区间。但零点实部是未知离散分布。如果RH为假，那么这个  结构本身就是错误的。换句话说，这个“证明”本身依赖RH为真这个猜想。

继续更新，这位伟大的民间数学家在评论区给我进一步“修订”了他的证明。还有，从此之后请你在更新时**直接给出文本而非截图**，否则我不会继续更新这个回答。你真的不知道一边看图一边写东西有多痛苦？文本我至少可以放到文本编辑器里和知乎回答编辑器里一起打开然后对着看，图片我完全只能写一段看一段。**我对截图的内容是要求AI帮我给出OCR并文本化的描述的，我不对AI转换后的文本是否能表达原始意图且正确性负责。**

- 虽然  ，当  时  所以  ，但这只说明  而不是  。
- 虽然在  实轴上  是实值单函数，但前面声称  在  上全纯，现在这个改进实际上是削弱了原始结构，放弃了所谓的“解析同构”。
- 乘积公式完全不是Lapidus–van Frankenhuysen真实结论的“经典结果”，这完全是概念倒错，没有任何结论说任意分形弦的谱函数等于黎曼  函数乘以几何  函数。如果我记错了那这就是我的毛病，但如果你确定它真实存在，请你给我它的证明表述，不接受外部链接。
- 若  确实成立那么  的所有零点都成为谱函数零点而且它的结构被  控制，这本质上就是希尔伯特-波利亚猜想，难度和RH相当。这根本不是引用经典结果，这只是把RH换了个写法重述了。
- 积分与求和交换问题理解错误。原文声称“在有限区间  上可交换“，但关键点并不是区间是否有限，而是留数位置随  变化，极点可能穿越路径，而且  零点附近的问题。要合法交换你必须证明极点轨道不穿越积分路径，留数函数对  连续而且一致收敛。
- 参数维度完全不匹配。零点集合是无限离散二维集合，但  的参数空间是一维连续变量  和一个整数  。要满足双射条件则  ，换句话说就是实部和虚部是可分离的，但事实上的观测是  ，这个结构本身是冲突的。
- 假设存在  ，那么  ，所以必然  ，因此这个框架本身根本不是RH的证明，因为它同时兼容RH和 RH，除非  。这个框架试图通过Lyapunov=0断言，但这个结论本身也是未证的。
- 动力系统的结论仍然没有证明。原文声称“中性周期轨道意味着Lyapunov=0所以  =1/2”，没有任何定理说明它。

洗完澡了，心情简直一片是大到十万甚至九万分的好啊，继续更新。

- 偷换概念。原文声称  ，然而谱  函数的经典定义，对长度为  的区间  ，谱  函数为  ，得到  而不是  ，这里完全推导错了。
- 就算采用你自定义的频率形式  ，要绝对收敛也需要  ，但分形弦的几何  函数通常  才收敛，但原文声称  即可，没有证明保证。
- 就算我们接受  ，那零点的集合也是  的零点和几何  的零点的集合的并集，这根本对  的函数零点没有任何约束使得它必须在  。
- 积分和留数交换还是错的。误解过于严重我不解释了。
- “光滑曲线测度为0”不能解决穿越问题。原文声称“极点轨道是光滑曲线，测度为0，可选围道避开”是错误的，留数积分交换需要极点不随参数穿越围道或穿越时有补偿项，和测度没有关系。
- 还是循环论证。“单极点留数为-1”需要  确实在那里有单极点，但  的零点阶数并不知道，乘积结构不能验证而且这里使用的几何  也可能贡献极点。
- 原文声称“在有限p区间内只有有限个k”但  ，如果  连续变化则  也连续变化，则  上界依赖  ，对不同的取值允许的  不同，这不能直接导出统一有限  ，即缺少一致有界性证明。
- 范畴错误。虽然“零点是可数离散集，维度为0”在拓扑意义上成立但这完全回避了问题，因为这里需要分析“参数曲线是否能够精确产生所有零点且不产生额外点”而不是滥用未证明的谱迹公式。
- 循环论证。假设第n个零点对应k=n，  然后导出  ，然后假设  ，换句话说这里假设  所以  ，但这是把从RH导出的结论直接作为证明RH的方式。
- 思路混乱。这里声称  ，但实际上  与  无关。整数约束只约束虚部离散，不能推出  。
- 核心证明思路就是错误的。整个证明依赖  ，但根据前面分析这个公式本来就是错误的。

考虑到这位完全不能理解公式，为了防止这位产生严重的误解，我们直接指出问题本身，我就不细讲为什么了，因为这写起来很花时间而且累。

- 所谓的“自包含初等证明”的谱迹公式的证明过程需要未证明的乘积公式。
- 在没有证明合法交换条件前将“对数导数留数等价”当作已证结论使用。
- 循环论证谱迹公式来证明“双射性已严格证明”。
- “只有  才是零点”是待证结论，但在证明前被当作已知结论用了。
- 单射性并未排除不同  产生相同虚部的可能。
- 在没有建立谱迹公式前就在所谓“核心链条”使用谱迹公式为前提。
- 将零点计数公式的使用称为“兼容性验证”，但推导中实际上用来了匹配结构本身。
- 8. 用“与RH无关”掩盖渐近匹配中隐含的结构性质本身的假设。
- 将“删除渐近部分仍成立”作为论证，但核心约束本身没有任何形式的完成。因此，换句话说——如果一个证明能够随便删东西同时说“结论仍然成立”，说明这个证明过程本身是混乱且存在大量冗余的，因此反而可以随便删。
- 从虚部相同推出  需要先未证明的结论虚部唯一。
- 单射性并未证明“同一虚部唯一对应同一k值”。
- 假设函数方程对称零点均在像集中，但这本身依赖满射性。
- 通过对称性推出  的步骤依赖没有证明的唯一性假设。
- 推导中循环论证使用“映射单射性”来约束不同参数。
- 声称“频率谱与本征值谱完全等价”，但实际上变量缩放会改变零点结构。
- 和  的区别并非常数因子差异那么简单。
- 对数导数在变量替换下并不会保持零点位置不变。
- 频率定义仍未对应标准拉普拉斯谱。
- 反复声明的“学界标准选择”显然存在一些误解，而且我在前面也提到了这个“证明复述”本身存在问题。
- “零测集不影响积分”错误适用于参数积分但并不适用于留数变化。
- 极点穿越围道会改变留数和，不能用零测度结论来消除。
- 围道可微调避开所有轨迹的说法未证明存在性。
- 未证明所有极点轨迹互不密集。
- 假设  的极点只来自几何  ，忽略  因子贡献。
- 适用范围滥用。将“单极点留数=-1”直接套用到乘积结构。
- 没有排除零点重数对对数导数结构的影响。
- 留数恒等式假定零点与极点完全对应但没有证明。
- 依赖  的连续变化，但没有证明全局统一界存在。
- 用  的支集约束推导  区间有界，但没有排除虚数部影响。
- 有限区间并不能自动保证一致收敛。
- 将“有限项”与“对所有p有限项”混淆。
- 谱迹公式合法性反复的、仍然的、持续的、循环的未独立建立。

昨晚做梦做了个巨舒服的美梦给我快爽死了喵！吃完饭心情又好了，来更新。

这位疑似彻底放弃数学了，转而来到统计学上了吗？但没关系，本人也是对统计学略有学习的喵~

[本文提出的8组素数分布规律，在三个跨6个数量级的独立数据集上均完全成立（较小尺庋）](https://zhuanlan.zhihu.com/p/2007396578244178711)

这位胆子这么小，居然只敢给统计数据截图而不是可复制的数据吗？没事我来亲手整理一下。可恶的知乎公式编辑器居然不让在表格里插公式啊喵...qwq

我不对这个数据的准确性负责喵，因为它看上去太像一个没有学过统计学的人写出来的东西了。

数值区间区间内素数总数有效相邻间隙数量有效间隙比数量10^3~10^59,5929,5919,59010^5~10^7654,987654,986654,98510^7~10^950,182,95550,182,95450,182,953

这里看上去每下一列的数据只是在前面那个数上减了1。然而，**看上去这个数据实际上有错误！**实际上，![](https://www.zhihu.com/equation?tex=10%5E3%5Cto10%5E5)之间只有9424个素数，而不是9592个。后面的数据看上去正常。

![](https://pica.zhimg.com/50/v2-272e6c9299b40ce650ee88820eefbfa6_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3b79ecbb4a9bd50caa5f04d4b0ae6d33_r.jpg?source=2c26e567)

然后这一段不觉得搞笑吗？众所周知，卡方检验中我们会先计算卡方值![](https://www.zhihu.com/equation?tex=%5Cchi%5E2+%3D+%5Csum+%5Cfrac%7B%28O_i+-+E_i%29%5E2%7D%7BE_i%7D)，然后计算自由度![](https://www.zhihu.com/equation?tex=df+%3D+%28%5Ctext%7B%E7%BB%84%E6%95%B0%7D+-+1%29)，接着如此计算p值![](https://www.zhihu.com/equation?tex=P+%3D+P%28%5Cchi%5E2_%7Bdf%7D+%5Cgeq+%5Ctext%7B%E8%AE%A1%E7%AE%97%E5%87%BA%E7%9A%84%E5%8D%A1%E6%96%B9%E5%80%BC%7D%29)。

虽然我们知道卡方校验在样本量极大的情况下确实可能算出一些极小的p值，使得这个“最合理”的![](https://www.zhihu.com/equation?tex=p%3D2.17%5Ctimes10%5E%7B-15%7D)看上去问题并没有显著离谱。但后面的![](https://www.zhihu.com/equation?tex=p%3C1.0%5Ctimes10%5E%7B-300%7D)不觉得真的很离谱吗？**你真的有比整个宇宙的原子数还多的数据让你算出这么大的p值？**就算给它开个平方，我们仍然会发现这个数据是极度离谱的。事实上，我觉得这个情况下更适合反复采样小范围样本然后使用Fisher校验，最后取均值，而不是用卡方。

就算这个理论真的能“解释”这一切（即精确为![](https://www.zhihu.com/equation?tex=0%5C%25)的错误），那真的不考虑一下噪声吗？通常来说我们对极大范围的素数是使用Miller-Rabin这个概率性算法的，换句话说它肯定存在一些估计错误引发的噪声。这是因为，算出如此小的p值的卡方校验必然拥有极大量的样本和极优质的估计，那很显然其中必然存在一些标记噪声。

![](https://pic1.zhimg.com/v2-23f47d5ffdb0e51cf2d3d5e21ad24fe1_r.jpg?source=2c26e567)

然后这里，这里的数据集仍然没有开源，而且又算出了![](https://www.zhihu.com/equation?tex=1.0%5Ctimes10%5E%7B-300%7D)这样的离谱数值。如果你真的觉得自己的理论可以用来精确计算素数分布，那请你先给出自己用的是什么数据集，或者数据集的生成模式，而不是在这里给出一个谁都不知道是如何计算的数据来。

![](https://picx.zhimg.com/v2-697d4060ceee7c81a02ee896b7971d00_r.jpg?source=2c26e567)

我再重复一遍，数据集不做归一化，你的MAE就没有意义。

![](https://pic1.zhimg.com/v2-fe7ca4508a536d5d3581c034d5b21407_r.jpg?source=2c26e567)

然后这里，这里给出的完全都是**很显然存在数据篡改的可能**。根据前面的观测，我们可以认为“数据集3”的数据量或者平均量级远大于前两个数据集，然而此处居然对数据集3的预测质量比前两个数据集更好？！这简直捶实了这里存在数据篡改来支持自己想要的结果。

其它数据我就不分析了，因为这里的各项指标完全没有给出令人信服的计算公式。

很棒，这位敢于开源代码了。但考虑到这位完全不知道什么叫排版和代码块，直接把代码复制上来，这让我很难办啊。难道这位不知道Python是缩进敏感的吗？

![](https://pic1.zhimg.com/v2-960611a0265a4f83dfd56405b19a86ff_r.jpg?source=2c26e567)

我帮助各位把代码整理好了，可以来看。

importmpmathasmpimportnumpyasnpfromscipy.statsimportchi2,ks_2samp# 核心常数sigma1=(1+mp.sqrt(5))/2# 黄金分割率ln_sigma1=mp.log(sigma1)pi=mp.pi# 1. 验证素数间隔的金属分割率聚集defverify_metallic_clustering(N=10**6):# 筛法生成素数sieve=np.ones(N+1,dtype=bool)sieve[0:2]=Falseforiinrange(2,int(np.sqrt(N))+1):ifsieve[i]:sieve[i*i:N+1:i]=Falseprimes=np.nonzero(sieve)[0]# 计算规范化间隔gaps=np.diff(primes)log_primes=np.log(primes[1:])normalized_gaps=gaps/log_primes# 统计金属分割率处的聚集sigma_list=[sigma1,1+mp.sqrt(2),(3+mp.sqrt(13))/2]results=[]forsigmainsigma_list:count=np.sum(np.abs(normalized_gaps-float(sigma))<0.1)proportion=count/len(normalized_gaps)# 卡方检验expected=len(normalized_gaps)*0.2/len(normalized_gaps)chi2_stat=((count-expected)**2/expected)+((len(normalized_gaps)-count-(len(normalized_gaps)-expected))**2/(len(normalized_gaps)-expected))p_value=1-chi2.cdf(chi2_stat,1)results.append((float(sigma),proportion,p_value))returnresults# 2. 验证标度不变性的KS检验defverify_scale_invariance(N=10**6):# 生成素数sieve=np.ones(N+1,dtype=bool)sieve[0:2]=Falseforiinrange(2,int(np.sqrt(N))+1):ifsieve[i]:sieve[i*i:N+1:i]=Falseprimes=np.nonzero(sieve)[0]# 计算规范化素数计数函数x_values=np.linspace(2,N,1000)pi_x=np.array([np.sum(primes<=x)forxinx_values])normalized_pi=pi_x*np.log(x_values)/x_values# 标度变换后的分布scaled_x=x_values*float(sigma1)scaled_pi=np.array([np.sum(primes<=x)forxinscaled_xifx<=N])scaled_normalized=(scaled_pi*np.log(scaled_x[scaled_x<=N])/scaled_x[scaled_x<=N])# KS检验ks_stat,p_value=ks_2samp(normalized_pi,scaled_normalized)returnks_stat,p_value# 3. 验证修正素数定理的精度defverify_corrected_pnt(N_list=[10**6,10**9,10**12]):results=[]actual_pi_dict={10**6:78498,10**9:50847534,10**12:37607912018}forNinN_list:actual_pi=actual_pi_dict[N]# 经典素数定理classical=N/np.log(N)classical_error=np.abs(actual_pi-classical)# 修正素数定理corrected=N/(np.log(N)-1/float(sigma1))corrected_error=np.abs(actual_pi-corrected)improvement=(classical_error-corrected_error)/classical_error*100results.append((N,classical_error,corrected_error,improvement))returnresults# 运行验证if__name__=="__main__":print("金属分割率聚集验证结果：")clustering_results=verify_metallic_clustering(10**6)forsigma,prop,pinclustering_results:print(f"分割率={sigma:.3f}, 聚集占比={prop:.2%}, p值={p:.2e}")print("\n标度不变性KS检验结果：")ks_stat,p_value=verify_scale_invariance(10**6)print(f"KS统计量={ks_stat:.4f}, p值={p_value:.4f}")print("\n修正素数定理精度验证结果：")pnt_results=verify_corrected_pnt()forN,ce,cce,impinpnt_results:print(f"尺度={N:.0e}, 经典误差={ce:.2f}, 修正误差={cce:.2f}, 精度提升={imp:.2f}%")

![](https://pica.zhimg.com/v2-9ed68e9a02addc2307c2df3e7f02987a_r.jpg?source=2c26e567)

是不是虽然这个图看上去改进“非常好”，高达58.45%的改进？

现在我们来分析这段代码到底有多少问题。

- 首先，最大的问题：  ，这完全是一个常数0.2！因此，这里计算出的p值完全无效，运行完成后的统计数据也完全没必要看。
- bandwidth选择没有理由。  ，有p-hacking嫌疑。
- 作者对标度变换的理解是错误的。素数定理的标度不变性是指  ，不是  。
- 事实上，真正的“修正素数定理”是  。由于原版素数定理是系统性低估了总量，一个更小的分母缩放通常总能带来更好的结果。事实上，这从这位作者原本的“证明黎曼猜想”完全弱化到了“用一个分母缩放改善素数计数函数”。

现在我们用一个进化算法看看到底是不是原版的金属分割率选择“最好”。![](https://www.zhihu.com/equation?tex=%5Ctiny%5E%7B%E4%B8%BB%E8%A6%81%E6%98%AF%E4%B8%80%E7%9B%B4%E5%BD%93%E8%A2%AB%E5%8A%A8%E6%96%B9%E5%A4%AA%E4%B8%8D%E5%A5%BD%E4%BA%86%E5%96%B5%EF%BC%81%7D)

![](https://pic1.zhimg.com/v2-c790c5cc4f2299430ae228f99dc42a1c_r.jpg?source=2c26e567)

结论：原代码的“显著”结果完全是虚假的！

全局最优常数的缩放常数是![](https://www.zhihu.com/equation?tex=%5Csigma%3D3.825)，而素数定理修正的最佳常数是![](https://www.zhihu.com/equation?tex=c%3D1.0567)达到了几乎高达98.8%的“改进”，甚至比原本的黄金缩放比缩放常数更好！

我赞赏这位的思路，但这位能不能不要再用AI敷衍我了，还有这位到底真的是有多自信啊，还在觉得自己的理论一点问题没有呢。![](https://www.zhihu.com/equation?tex=%5Ctiny%5E%7B%E4%B8%BB%E8%A6%81%E6%98%AF%E8%BF%99%E4%B8%AA%E5%AF%B9%E8%AF%9D%E5%B1%80%E9%9D%A2%E6%84%88%E5%8F%91%E4%B8%8D%E8%AE%A9%E4%BA%BA%E6%BF%80%E5%8A%A8%E4%BA%86...%7D)

**现在我要火力全开了喵！**

**请注意，这里的核心矛盾根本不是你的p值如何，是你的分布分析本身就是错的。**我前面说的那些只是严谨性的问题，你完全可以觉得我的第二条只是在抱怨，而不是在攻击。

这位同时声称素数间隔服从“均值为1的指数分布”，但用“均匀分布”作为卡方检验的原假设，然后借此得出了“极显著偏离随机性”的结论。

根据素数定理与Cramer模型，![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bp_%7Bn%2B1%7D-p_n%7D%7B%5Clog+p_n%7D)的极限近似服从均值为一的指数分布而不是均匀分布。换句话说，![](https://www.zhihu.com/equation?tex=P%28X+%5Cin+%5Ba%2Cb%5D%29+%3D+e%5E%7B-a%7D-e%5E%7B-b%7D)而不是![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bb-a%7D%7B%E5%8C%BA%E9%97%B4%E9%95%BF%E5%BA%A6%7D)。

就算使用这份修改后的代码分析，![](https://www.zhihu.com/equation?tex=%5Ctext%7Bexpected_proportion+%3D+%282+%2A+bandwidth%29%7D+%5Ccolor%7Bred%7D%7B%2F%7D+%5Ctext%7Binterval_length%7D+)，这等价于假设规范化间隔是在![](https://www.zhihu.com/equation?tex=%5Bmin%2Cmax%5D)上均匀分布的。

**这就是第一处显著的根本性矛盾：**一方面承认指数分布，一方面用均匀分布当原假设，再用“显著偏离均匀”来证明结构存在。这完全属于有选择性处理一些证据来支持自己的理论。

如果这里用正确的指数分布作为零假设的话，那么![](https://www.zhihu.com/equation?tex=P%281.5%3CX%3C1.7%29%3De%5E%7B-1.5%7D-e%5E%7B-1.7%7D)并不小，因此在黄金分割比附近出现18%的概率并不是非常罕见的。

第二个核心矛盾在于统计显著并不意味着结构特殊。卡方统计量的规模![](https://www.zhihu.com/equation?tex=%5Cchi%5E2+%5Csim+N%28%E6%AF%94%E4%BE%8B%E5%B7%AE%29%5E2)在![](https://www.zhihu.com/equation?tex=N%5Cto%5Cinfty)时任何微小的系统性偏差甚至只是噪声都可能被放大为![](https://www.zhihu.com/equation?tex=p%5Cto%5Cepsilon)。这里声称我分析出的“...![](https://www.zhihu.com/equation?tex=%5Csigma%3D3.825)是尾部统计陷阱，黄金分割在主体区更稳定...”，然而事实上指数分布是单峰衰减，而原本选择的黄金分割比1.618 本身也不在密度峰附近，实际上主体区间在![](https://www.zhihu.com/equation?tex=%280%2C1%29)附近，因此这个用来反对我的3.825的证据完全也可以用来反对1.618。

而且这里声称“修正项来自理论，不是拟合”，但根据我们前面的分析**这个理论完全是错误的。**

事实上，在我们层层递进且不断强化的反驳下，这个“理论”已经完全退化成了一个素数定理的修正项形式，从原本的“证明RH”退化到了如此弱的一个形式，已经没有任何证明力量了。就算说这只是一个修正形式也是完全错误的，因为真正的修正形式是![](https://www.zhihu.com/equation?tex=%5Cpi%28x%29+%5Csim+%5Cfrac%7Bx%7D%7B%5Clog+x+-+C%7D%5Cquad+C%3D1)，这来自已经广泛接受的渐近展开形式，而![](https://www.zhihu.com/equation?tex=1%2F%5Cvarphi)也只是一个数值调节形式罢了，它本身是平凡的。

而且，事实上，“素数间隔近似泊松过程”和“素数分布存在分形自相似”是不兼容的，如果你想要一者的话你必须扔掉另一者。这个理论的核心是“素数分布存在分形自相似”，然而这个理论的验证过程中仍然假设“素数间隔近似泊松过程”，换句话说这里本来就是不相容的，即便再加再多补丁都不能弥补这一点核心不兼容的问题，除非你直接丢掉这个理论本身。

而这里对p值的解读很显然也存在明显误解。这里认为“p远大于0.05意味着标度不变成立”，但这只能说明没有证据拒绝原假设，而不是可以证明原假设。实话实说，在这个存在强相关数据（π(x)）的前提下，KS分布假设本身就不适用。这里的一个很典型的误解是，**相关性不意味着因果性。**

**分析到现在，统计模型设定与理论声明之间的自洽性已经崩溃了。**

实际上还有更多问题但我不想说了，什么时候发截图我什么时候有话说。




还有更多问题，什么时候等我心情好更新。欢迎原作者更新证明，我绝不删除任何评论。

所以，显然，证明不成立。![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bred%7D%5Cneg%5Ccolor%7Bred%7DQ%5Ccolor%7Bred%7DE%5Ccolor%7Bred%7DD)


---

# 有哪些数学理论最初被认为「毫无用处」，却在某个领域意外成为关键技术支柱？ Dialectique

**Author:** Dialectique  
**Bio:** 这里是我留给你的一份偏爱  
**Avatar:** ![](https://pica.zhimg.com/v2-67d629d2ade0495de9e961347c949137_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/f0023e7ace1bad0089ed32e9953e0b19  
**Published:** 2025.08.21 00:54:39  
**Updated:** 2025.08.21 00:54:39  
**Question:** https://www.zhihu.com/question/14841937090  
**Question Created:** 2025.03.13 13:00:25  
**Question Updated:** 2025.03.13 13:00:25  
**Votes:** 3923  
**Comments:** 153  
**Type:** answer  

1917年的秋天，在维也纳大学的某张书桌前，一位来自奥匈帝国的年轻分析学家正在为一项将造福人类近半个世纪的医疗技术奠定数学基础.

他是Johann Radon (约翰. 拉东)，他生于波西米亚，并在那里度过了年少时光. 1905年他开始在这个摇摇欲坠的帝国的最高学府学习，并于5年后在Wirtinger的指导下获得博士学位. 敏锐的洞察力和严格的训练使得分析学成为了他的拿手好戏.

![](https://picx.zhimg.com/v2-6d25c0711c7d00c3a1415734d2877a86_r.jpg?source=2c26e567)

他在考虑这样一个问题：如果![](https://www.zhihu.com/equation?tex=f%28x%2Cy%29)是一个二元函数，那么在给定了必要的正则性条件后，我们可以定义它沿着某条直线![](https://www.zhihu.com/equation?tex=%5Cell)的积分![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D%5Cint_%5Cell+f%28x%2Cy%29ds%5Cend%7Baligned%7D), 由此我们就得到了一个自变量为![](https://www.zhihu.com/equation?tex=%5CBbb%7BR%7D%5E2)中的直线的函数![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D%5Cmathcal%7BR%7D_f%28%5Cell%29%3A%3D%5Cint_%5Cell+f%5Cend%7Baligned%7D). 现在，如果我们能知道![](https://www.zhihu.com/equation?tex=f)沿着每一条直线的积分值，即![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f%28%5Cell%29)已知，能否反推出![](https://www.zhihu.com/equation?tex=f)的值？以及这样的![](https://www.zhihu.com/equation?tex=f)是否唯一？

当然，这看起来是一个非常自然的问题，而且当时在Hilbert, Lebesgue 等人的努力下，积分变换已经是一个非常成熟的领域，因此这个问题在当时看起来至少是一个有望被现有分析学工具解决的问题.

Radon 陷入了沉思：

直线![](https://www.zhihu.com/equation?tex=%5Cell)完全由倾角![](https://www.zhihu.com/equation?tex=%5Ctheta)和其到原点的距离![](https://www.zhihu.com/equation?tex=t)决定，方程可以写为：![](https://www.zhihu.com/equation?tex=x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%3Dt)，我们将他改为用弧长为参数的方程![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bcases%7D+x%28s%29%3Dt%5Ccos%5Ctheta-s%5Csin%5Ctheta%5C%5C+y%28s%29%3Dt%5Csin%5Ctheta%2Bs%5Ccos%5Ctheta+%5Cend%7Bcases%7D%5C%5C)于是![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f%28%5Cell%29)就可表示为![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f%28%5Ctheta%2Ct%29%3D%5Cint_%7B%5CBbb%7BR%7D%7Df%28t%5Ccos%5Ctheta-s%5Csin%5Ctheta%2Ct%5Csin%5Ctheta%2Bs%5Ccos%5Ctheta%29ds%5C%5C)需要的正则性条件是什么呢？

一个方便的选择是让![](https://www.zhihu.com/equation?tex=f)落在 Schwartz 空间里（记为![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BS%7D%5Cleft%28%5CBbb%7BR%7D%5E2%5Cright%29)），即对任意![](https://www.zhihu.com/equation?tex=%5Cbeta%3D%28%5Cbeta_1%2C%5Cbeta_2%29)，![](https://www.zhihu.com/equation?tex=%5Calpha%3D%28%5Calpha_1%2C%5Calpha_2%29%5Cin%5CBbb%7BN%7D%5E2)，有![](https://www.zhihu.com/equation?tex=%5Csup+_%7B%28x%2Cy%29%5Cin%5CBbb%7BR%7D%5E2%7D%5Cleft%7Cx%5E%7B%5Cbeta_1%7Dy%5E%7B%5Cbeta_2%7D%5Cfrac%7B%5Cpartial%5E%7B%7C%5Calpha%7C%7Df%7D%7B%5Cpartial+x%5E%7B%5Calpha_1%7D%5Cpartial+y%5E%7B%5Calpha_2%7D%7D%5Cright%7C%3C%5Cinfty%5C%5C)那么自然可以使得![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f)是well-defined 的. Moreover, 对于时间分量![](https://www.zhihu.com/equation?tex=t)，![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f)还将满足![](https://www.zhihu.com/equation?tex=%7C%5Cmathcal%7BR%7D_f%28t%2C%5Ctheta%29%7C%5Clesssim%5Cfrac%7B1%7D%7B%281%2B%7Ct%7C%29%5EN%7D%5C%5C)for any![](https://www.zhihu.com/equation?tex=N). 于是我们可以对![](https://www.zhihu.com/equation?tex=t)-分量做一点Fourier 变换，注意使用Fubini 定理：![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D%5Cwidehat%7B%5Cmathcal%7BR%7D_f%7D%28%5Cxi%2C%5Ctheta%29%26%3D%5Cint_%7B%5CBbb%7BR%7D%7D%5Cmathcal%7BR%7D_f%28t%2C%5Ctheta%29e%5E%7B-2%5Cpi+i%5Cxi+t%7Ddt%5C%5C+%26%3D%5Cint_%7B%5CBbb%7BR%7D%7D%5Cint_%7B%5CBbb%7BR%7D%7Df%28t%5Ccos%5Ctheta-s%5Csin%5Ctheta%2Ct%5Csin%5Ctheta%2Bs%5Ccos%5Ctheta%29e%5E%7B-2%5Cpi+i%5Cxi+t%7Ddsdt%5C%5C+%26%3D%5Cint_%7B%5CBbb%7BR%7D%5E2%7Df%28x%2Cy%29e%5E%7B-2%5Cpi+i%5Cxi%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%29%7Ddx%5Cwedge+dy%5C%5C+%26%3D%5Chat%7Bf%7D%28%5Cxi%5Ccos%5Ctheta%2C%5Cxi%5Csin%5Ctheta%29+%5Cend%7Baligned%7D%5C%5C)其中![](https://www.zhihu.com/equation?tex=%5Chat%7Bf%7D%28%5Cbm%7B%5Cxi%7D%29%3A%3D%5Cint_%7B%5CBbb%7BR%7D%5E2%7Df%28x%2Cy%29e%5E%7B-2%5Cpi+i%5Cbm%7B%5Cxi%7D%5Ccdot%28x%2Cy%29%7Ddx%5Cwedge+dy%5C%5C)是指对![](https://www.zhihu.com/equation?tex=f)的 2 维Fourier 变换. 由此可见，再给![](https://www.zhihu.com/equation?tex=%5Chat%7Bf%7D)做一次Fourier 逆变换, 即可得到![](https://www.zhihu.com/equation?tex=f)的表达式:![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7Df%28x%2Cy%29%26%3D%5Cint_%7B%5CBbb%7BR%7D%5E2%7D%5Chat%7Bf%7D%28%5Cbm%7B%5Comega%7D%29e%5E%7B2%5Cpi+i%5Cbm%7B%5Comega%7D%5Ccdot+%28x%2Cy%29%7Dd%5Cbm%7B%5Comega%7D%5C%5C+%26%5Cstackrel%7B%5Cbm%7B%5Comega%7D%3D%28%5Cxi%5Ccos%5Ctheta%2C%5Cxi%5Csin%5Ctheta%29%7D%7B%3D%5C%21%3D%5C%21%3D%5C%21%3D%5C%21%3D%5C%21%3D%5C%21%3D%7D%5Cint_%7B%5CBbb%7BR%7D%5Ctimes+S%5E1%7D%7C%5Cxi%7C%5Chat%7Bf%7D%28%5Cxi%5Ccos%5Ctheta%2C%5Cxi%5Csin%5Ctheta%29e%5E%7B2%5Cpi+i%5Cxi%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%29%7Dd%5Cxi%5Cwedge+d%5Ctheta%5C%5C+%26%3D%5Cint_%7B%5CBbb%7BR%7D%5Ctimes+S%5E1%7D%7C%5Cxi%7C%5Chat%7B%5Cmathcal%7BR%7D%7D_f%28%5Cxi%2C%5Ctheta%29e%5E%7B2%5Cpi+i%5Cxi%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%29%7Dd%5Cxi%5Cwedge+d%5Ctheta%5Cend%7Baligned%7D%5C%5C)因此Fourier 变换的性质便一劳永逸地解决了![](https://www.zhihu.com/equation?tex=f)的存在性和唯一性问题.

注意，我们可以通过顶一个对偶变换来简化上述丑陋的式子：![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D%5E%2A_%7B%5Cmathcal%7BR%7D_f%7D%28x%2Cy%29%3A%3D%5Cfrac%7B1%7D%7B2%5Cpi%7D%5Cint_%7BS%5E1%7D%5Cmathcal%7BR%7D_f%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%2C%5Ctheta%29d%5Ctheta%5C%5C)该对偶变换的几何意义就是：当![](https://www.zhihu.com/equation?tex=%5Cell)跑遍过点![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)的所有直线时，![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f%28%5Cell%29)的平均值.

定义如下伪微分算子：![](https://www.zhihu.com/equation?tex=%5Cleft%28%5CDelta%5E%7B1%2F2%7DF%5Cright%29%28%5Cbm%7Bx%7D%29%3A%3D2%5Cpi%5Cint_%7B%5CBbb%7BR%7D%5E2%7D%7C%5Cbm%7B%5Cxi%7D%7C%5Chat%7BF%7D%28%5Cbm%7B%5Cxi%7D%29e%5E%7B-2%5Cpi+i%5Cbm%7B%5Cxi%7D%5Ccdot%5Cbm%7Bx%7D%7Dd%5Cbm%7B%5Cxi%7D%5C%5C)于是一点点的微分运算告诉我们：![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D%5Cleft%28%5CDelta%5E%7B1%2F2%7D%5Cmathcal%7BR%7D%5E%2A_%7B%5Cmathcal%7BR%7D_f%7D%5Cright%29%28x%2Cy%29%26%3D%5Cfrac%7B1%7D%7B2%5Cpi%7D%5Cint_%7BS%5E1%5Ctimes%5CBbb%7BR%7D%7D%5Chat%7B%5Cmathcal%7BR%7D%7D_f%28%5Cxi%2C%5Ctheta%29%5CDelta%5E%7B1%2F2%7D%5Cleft%28e%5E%7B2%5Cpi+i%5Cxi%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%29%7D%5Cright%29d%5Ctheta%5Cwedge+d%5Cxi%5C%5C+%26%3D%5Cint_%7BS%5E1%5Ctimes+%5CBbb%7BR%7D%7D%7C%5Cxi%7C%5Chat%7B%5Cmathcal%7BR%7D%7D_f%28%5Cxi%2C%5Ctheta%29e%5E%7B2%5Cpi+i%5Cxi%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%29%7Dd%5Ctheta%5Cwedge+d%5Cxi%5C%5C+%26%3Df%28x%2Cy%29+%5Cend%7Baligned%7D%5C%5C)于是![](https://www.zhihu.com/equation?tex=%5Ccolor%7Bblue%7D%7B%5Cboxed%7Bf%3D%5CDelta%5E%7B1%2F2%7D%5Cmathcal%7BR%7D%5E%2A_%7B%5Cmathcal%7BR%7D_f%7D%7D%7D).

Radon随之将该结果整理为一篇标题为《论通过沿某些流形的积分值确定函数》的论文（Über die Bestimmung von Funktionen durch ihre Integralwerte längs gewisser Mannigfaltigkeiten），并于1917年发表在《莱比锡皇家萨克森科学院会议报告，数学 - 物理类》上（Berichte über die Verhandlungen der Königlich-Sächsischen Akademie der Wissenschaften zu Leipzig, Mathematisch-Physische Klasse 69, 262–277 (1917)）：

[J. Radon: 通过沿某些流形的积分值确定函数](https://link.zhihu.com/?target=https%3A//www.researchgate.net/publication/324210477_On_the_determination_of_functions_from_their_integral_values_along_certain_manifolds%3FenrichId%3Drgreq-70159f23e7fe6f66457eb89a03397173-XXX%26enrichSource%3DY292ZXJQYWdlOzMyNDIxMDQ3NztBUzo2MTE3MjIyNTk4NzM3OTNAMTUyMjg1NzM2MDYxNg%253D%253D%26el%3D1_x_3)

![](https://pica.zhimg.com/v2-8020650c078053d4afa5565e70dfae18_r.jpg?source=2c26e567)

> **Remark**: Radon 原始的文献里对![](https://www.zhihu.com/equation?tex=f)的正则性要求是这样定义的：
> a).![](https://www.zhihu.com/equation?tex=f)连续；
> b). 如下积分在![](https://www.zhihu.com/equation?tex=%5CBbb%7BR%7D%5E2)上积分收敛：![](https://www.zhihu.com/equation?tex=%5Cint_%7B%5CBbb%7BR%7D%5E2%7D%5Cfrac%7Bf%28x%2Cy%29%7D%7B%5Csqrt%7Bx%5E2%2By%5E2%7D%7Ddx%5Cwedge+dy%3C%5Cinfty%5C%5C)c). 对任意点![](https://www.zhihu.com/equation?tex=p%3D%28x_0%2Cy_0%29)，![](https://www.zhihu.com/equation?tex=f)在一个半径为![](https://www.zhihu.com/equation?tex=r)的圆周上的均值收敛到 0：![](https://www.zhihu.com/equation?tex=%5Clim_%7Br%5Cto%5Cinfty%7D%5Cfrac%7B1%7D%7B2%5Cpi%7D%5Cint_0%5E%7B2%5Cpi%7Df%28x_0%2Br%5Ccos%5Ctheta%2Cy_0%2Br%5Csin%5Ctheta%29d%5Ctheta%3D0%5C%5C)这比![](https://www.zhihu.com/equation?tex=f)落在Schwartz 空间里的要求要弱一些，于是Radon 原始的做法是相当技术性的. 他并没有定义对偶变换![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D%5E%2A)，但他的approach 对此很接近——考虑当![](https://www.zhihu.com/equation?tex=%5Cell)跑遍以![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)为心以![](https://www.zhihu.com/equation?tex=r)为半径的圆周上的所有切线时![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BR%7D_f%28%5Cell%29)的均值：![](https://www.zhihu.com/equation?tex=m%28r%29%3D%5Cfrac%7B1%7D%7B2%5Cpi%7D%5Cint_%7BS%5E1%7D%5Cmathcal%7BR%7D_f%28x%5Ccos%5Ctheta%2By%5Csin%5Ctheta%2Br%2C%5Ctheta%29d%5Ctheta%5C%5C)Radon的主定理说： 当![](https://www.zhihu.com/equation?tex=f)满足上述a)-c)正则性条件时，![](https://www.zhihu.com/equation?tex=f)由下式唯一确定：![](https://www.zhihu.com/equation?tex=f%28x%2Cy%29%3D%5Clim_%7B%5Cepsilon%5Cto+0%7D%5Cleft%28%5Cfrac%7Bm%28%5Cepsilon%29%7D%7B%5Cepsilon%7D-%5Cint_%7B%5Cepsilon%7D%5E%5Cinfty%5Cfrac%7Bdm%28r%29%7D%7Br%7D%5Cright%29%5C%5C).![](https://www.zhihu.com/equation?tex=%5Cclubsuit)

而后近40年的时间里，此文的引用量不过9次.

![](https://picx.zhimg.com/v2-cc04898312bae48103a37fa6a278c918_r.jpg?source=2c26e567)

46年后，即1963年，一位来自南非的物理学家Allan Cormack 在医院兼职时，注意到了![](https://www.zhihu.com/equation?tex=X-)射线在医疗诊断方面的局限性——医生无法精确地知道人体组织上的衰退系数分布. 很快他意识到了这本质上是一个数学问题：

当一束![](https://www.zhihu.com/equation?tex=X-)光沿着路径![](https://www.zhihu.com/equation?tex=%5Cell)以强度![](https://www.zhihu.com/equation?tex=I_0)穿入一块组织![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BO%7D)时，我们可以测出它穿出时的强度![](https://www.zhihu.com/equation?tex=I_1):

![](https://pic1.zhimg.com/v2-ce078925d0a2778f75d71256675543cf_r.jpg?source=2c26e567)

如果我们假定![](https://www.zhihu.com/equation?tex=%5Cmathcal%7BO%7D)上的衰退系数分布函数为![](https://www.zhihu.com/equation?tex=f), 那么物理学定律告诉我们：![](https://www.zhihu.com/equation?tex=%5Clog+%5Cfrac%7BI_1%7D%7BI_0%7D%3D-df%5C%5C)其中![](https://www.zhihu.com/equation?tex=d)为该![](https://www.zhihu.com/equation?tex=X)-射线旅行的距离.

现在通过技术手段，当沿着每一条路径![](https://www.zhihu.com/equation?tex=%5Cell)穿过时，我们都能测出![](https://www.zhihu.com/equation?tex=%5Clog+I_1%2FI_0)的值，那么我们该如何重建![](https://www.zhihu.com/equation?tex=f)呢？

这不正是Radon 于1917年所解决的问题吗！

而一旦我们得知了衰退系数的分布，我们就可以将这块组织根据衰退系数的大小来进行不同灰度的上色，从而就可以得到一张人体组织的医学图像. 于是Cormack 据此发现了可以重建衰退系数的方法，并于1979年坦言：

> 我突然想到，要改进治疗计划，就必须了解人体内组织衰减系数的分布情况。这些信息不仅对诊断有用，还能构成一张或一系列断层图像.
> 很明显，这是一个数学问题. 如果一束强度为![](https://www.zhihu.com/equation?tex=I_0)的伽马射线入射到人体，射出强度为![](https://www.zhihu.com/equation?tex=I_1)，那么可测量的量![](https://www.zhihu.com/equation?tex=g)等于：![](https://www.zhihu.com/equation?tex=%5Clog%28I_0%2FI_1%29%3D%E2%88%AB_%7B%5Cell%7Dfds%5C%5C)其中，![](https://www.zhihu.com/equation?tex=f)是沿直线![](https://www.zhihu.com/equation?tex=%5Cell)的衰退系数. 因此，如果![](https://www.zhihu.com/equation?tex=f)是一个二维函数，且对于所有穿过人体的直线，![](https://www.zhihu.com/equation?tex=g)都是已知的，那么问题是：如果已知![](https://www.zhihu.com/equation?tex=g)，能否确定![](https://www.zhihu.com/equation?tex=f)？
> 14 年后，我才得知Radon 早在 1917 年就已经解决了这个问题！

再后来时间到了1971年，随着计算机技术的蓬勃发展，来自EMI 公司的工程师 Godfrey Hounsfield 和他的团队研制出了了第一台可以用于临床诊断的扫描仪，并清晰地显示了一位女患者身体内部的病灶. 该扫描仪最初被称为EMI扫描仪，它后来的名字人尽皆知——计算机断层成像（computed temography）, 即CT扫描仪.

再后来，由于Cormack 和 Hounsfield 在医疗诊断中的开创性贡献，他们于1979年荣获诺贝尔生理学/医学奖. 而这项技术的关键理论根基——Radon 于1917年的文章中所研究的那个积分变换![](https://www.zhihu.com/equation?tex=f%5Cmapsto+%5Cmathcal%7BR%7D_f%28%5Cell%29)后来也被称为**Radon 变换**.





---

# 有哪些令人为之惊叹的数学题目？ 梦魂欲渡苍茫去

**Author:** 梦魂欲渡苍茫去  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-25277fe085dc302e5fa3cd879e4c0c1e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0d53471cc0e2546c488abf38603cf576  
**Published:** 2025.09.19 10:54:14  
**Updated:** 2025.09.24 22:08:11  
**Question:** https://www.zhihu.com/question/298657281  
**Question Created:** 2018.10.15 20:55:31  
**Question Updated:** 2019.02.14 16:44:25  
**Votes:** 2200  
**Comments:** 99  
**Type:** answer  

1982 年，数学游戏鬼才**约翰・康威**（John Conway）与他的两名好友一同出版了《你的数学游戏制胜之道（Winning Ways for Your Mathematical Plays）》系列丛书。这套洋洋洒洒一千余页的大部头中收录了成百上千个数学游戏及其拓展规则，从简单的井字棋一笔画，再到康威自己发明的豆芽游戏与哲球棋（笔者也很推荐，这个游戏是 NP 完备的），这些问题往往规则简单却富有深度，一举在接下来的数十年中给各个领域的数学爱好者们带来了无数的讨论热度与无数个抓耳挠腮的日夜。哦，如果你对康威这个名字印象有些模糊的话。我们不妨提醒一下，就是那个一生痴迷于构造新奇的数学游戏与谜题的康威。这个老头儿的点子堪称巧夺天工，他提出的生命游戏精巧到能够以几行规则模拟复杂生命演化，继而发展到成为元胞自动机领域的经典案例，这玩意甚至图灵完备。知乎数学区经常讨论的挑战葛立恒数活动里也经常有他发明的康威链的身影，更不用说描述数列和康威十三进制函数之类的思维体操了。

而对于他在这本书的第 643 页提出的“天使问题”，笔者愿意称为一场发生在无限棋盘上的黎明杀机游戏。康威大概自己也没想到，这一所占篇幅不到半页的小巧规则，竟会让数学界困惑 24 年之久。

![](https://pic1.zhimg.com/v2-7a25893e5002e88712c8582680747fb4_r.jpg?source=2c26e567)

游戏发生在一张无限大的棋盘上，这张棋盘像一张没有边界的格子纸，每个格子都用一对整数坐标![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)标记，从负无穷延伸到正无穷。天使在原点![](https://www.zhihu.com/equation?tex=%280%2C0%29)处站定。接下来，每一回合的博弈都按固定节奏展开：

首先是恶魔的破坏时间，恶魔想要捉住天使，它可以任选棋盘上的一个格子，吃掉它，让其彻底作废，就像在棋盘上挖了个洞，或者在格子上盖了禁止通行的戳。

随后轮到天使的逃生时间，它要飞到一个没被恶魔吃掉的格子，但有个限制：这个新格子必须在它的活动结界内。天使的活动结界由一个整数![](https://www.zhihu.com/equation?tex=K)决定：如果它现在位于![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)，那么它想飞去的新格子![](https://www.zhihu.com/equation?tex=%28x%27%2Cy%27%29)必须满足横向与纵向移动均不超过![](https://www.zhihu.com/equation?tex=K)格（![](https://www.zhihu.com/equation?tex=%5Cleft%7C+x%27-x+%5Cright%7C%5Cleq+K)且![](https://www.zhihu.com/equation?tex=%5Cleft%7C+y%27-y+%5Cright%7C%5Cleq+K)）。这里的![](https://www.zhihu.com/equation?tex=K)，康威称之为天使的力量值，显然![](https://www.zhihu.com/equation?tex=K)越大，它的活动结界就越广阔，能力也就越强。比如![](https://www.zhihu.com/equation?tex=K%3D1)时，天使就像国际象棋里的国王，只能挪到相邻格子。而当![](https://www.zhihu.com/equation?tex=K%3D2)时，天使就能连续做两次国王那样的移动，实现灵活性翻倍。

![](https://pic1.zhimg.com/v2-39a0e374dd4c234c818ed2b079f46d9b_r.jpg?source=2c26e567)

这场博弈的胜负也很直接：如果恶魔能把天使的活动结界彻底封死，也就是说，天使当前站的格子周围所有![](https://www.zhihu.com/equation?tex=K)格范围内的格子都被吃掉了，天使哪儿也飞不了，那恶魔就宣告胜利。反过来，如若天使能永远找到可以落脚的格子，像遛弯一样永远不被困住，那就是天使获胜。

顺便做一个无关痛痒的提醒，规则中允许恶魔或天使选择空过一轮，不过笔者十分困惑为什么要这样做呢。(•_•)? 天使的空过完全是浪费回合，至于恶魔，如果它真想空过的话，我们就想象它吃掉了一个无穷远的格子吧。

说回正题。这场游戏的关键悬念就在于：**是否存在一个足够强的天使（也就是**![](https://www.zhihu.com/equation?tex=K)**足够大），能凭借一套固定的策略，不管恶魔怎么万般阻挠，都能永远不被抓住？**

这一游戏规则一经发表便引起了诸多数学家们的广泛探讨。实际上大家很快得出了初步结论，显然，恶魔占据优势。我们不难发现游戏一旦开始，天使的处境就会随着回合推进而不断恶化。天使并没有消除干扰的手段，而恶魔设下的障碍将在整个游戏中一直存在，这场游戏对天使来说似乎只是困兽之斗。

很快，一位叫做贝雷坎普（Berlekamp）的数学家找到了当![](https://www.zhihu.com/equation?tex=K%3D1)时恶魔存在的一套必胜策略。顺便一提，这位贝雷坎普也是那套书的作者之一，康威的好友。

![](https://pic1.zhimg.com/v2-07903320107dc8ebb4c4878e5ecd56e0_r.jpg?source=2c26e567)

如图所示，天使起始位于红色方格。无论天使开局怎么走，恶魔前 8 步只需将棋盘四周的 8 个黑格吃掉，这时天使必然还没能跑出中间的蓝色区域，距离接触包围圈尚有 7 步之遥。接下来无论天使向哪个方向逃跑，恶魔都可以选择隔一格吃一格的方式逐渐缩小缺口，最终将天使困在包围圈内。

紧接着的几年里，康威和他的另一位数学家好友安德烈亚斯（Andreas）证明了对于某些行动模式单一的，比如只向一个方向勇往直前，不撞南墙不回头，永远不降低自己![](https://www.zhihu.com/equation?tex=y)坐标的天使而言——康威称其为愚者天使，我们干脆喊它**笨蛋天使**好了，这来自笔者的翻译插件提供的奇妙机翻，无论其力量数值![](https://www.zhihu.com/equation?tex=K)有多大，恶魔都能略施小计将其捕获。说起来这个策略实施起来有点像围棋中的“征子”。

![](https://pica.zhimg.com/v2-e83c8a31bfede776fb8eaae91781d662_r.jpg?source=2c26e567)

如图，不难观察到，由于笨蛋天使只会不走回头路地增加自己的![](https://www.zhihu.com/equation?tex=y)坐标，这实质上相当于自绝后路地帮助恶魔吃掉了大部分格子。实际上，笨蛋天使未来可能到达的范围仅仅是一个斜率为![](https://www.zhihu.com/equation?tex=%5Cpm%5Cfrac%7B1%7D%7BK%7D)锥形。

恶魔只需要在这个初始行动锥的足够远的距离![](https://www.zhihu.com/equation?tex=H)处划一道线段![](https://www.zhihu.com/equation?tex=AB)截断初始锥形——这取决于笨蛋天使的![](https://www.zhihu.com/equation?tex=K)值，然后开始等间距地造墙，即每隔一段距离![](https://www.zhihu.com/equation?tex=M)吃掉第一个格子。当然![](https://www.zhihu.com/equation?tex=M)的取值需满足一些条件，即使得当笨蛋天使到达圆锥中线下侧、距离截断线![](https://www.zhihu.com/equation?tex=%5Cfrac%7BH%7D%7B2%7D)处的某点![](https://www.zhihu.com/equation?tex=Q)时，恶魔足以完成上述 “隔![](https://www.zhihu.com/equation?tex=M)吃![](https://www.zhihu.com/equation?tex=1)” 的任务。

在后续回合中，笨蛋天使会安稳地被困在更小的圆锥体![](https://www.zhihu.com/equation?tex=QCD)内部 ，而![](https://www.zhihu.com/equation?tex=CD)是最初的截断线段![](https://www.zhihu.com/equation?tex=AB)的一个子区间，长度恰好为![](https://www.zhihu.com/equation?tex=AB)的一半。接下来的几步内，恶魔改为沿着线段![](https://www.zhihu.com/equation?tex=CD)行动，每隔![](https://www.zhihu.com/equation?tex=M)个方格吃掉第二个方格。显然只要上一个阶段任务能够完成，那么当笨蛋天使到达圆锥体![](https://www.zhihu.com/equation?tex=QCD)的一半，位于![](https://www.zhihu.com/equation?tex=%5Cfrac%7B3%7D%7B4%7DH)处的某点![](https://www.zhihu.com/equation?tex=R)时，恶魔恰好能完成这一阶段的任务，毕竟一半的时间完成一半的任务量，这比很多项目经理的工作安排合理多了。

在更靠后的回合中，笨蛋天使将被困在一个更小的锥形![](https://www.zhihu.com/equation?tex=REF)内。此时，恶魔应继续行动，沿着![](https://www.zhihu.com/equation?tex=EF)线段，每隔![](https://www.zhihu.com/equation?tex=M)个方格吃掉第三个方格…… 只要恶魔持续按此方式行动，那么在有限个回合后，当笨蛋天使抵达距离![](https://www.zhihu.com/equation?tex=AB)线段下![](https://www.zhihu.com/equation?tex=H%27%3D2%5E%7B-M%7DH)处时，恶魔已然将线段![](https://www.zhihu.com/equation?tex=AB)中所有笨蛋天使仍可能到达的子线段方格吃了个精光。随后恶魔应继续行动，在紧邻该线段![](https://www.zhihu.com/equation?tex=AB)下方的另一条线段![](https://www.zhihu.com/equation?tex=A%27B%27)上，每隔![](https://www.zhihu.com/equation?tex=M)个方格吃掉第一个方格 ，而这项任务将在笨蛋天使抵达下一条目标水平线![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B2%7DH%27)之前完成……以及类推。最后，在笨蛋天使穿过位于线段![](https://www.zhihu.com/equation?tex=AB)下方![](https://www.zhihu.com/equation?tex=K)单位处的水平线之前，恶魔就已然吃掉该水平线与线段![](https://www.zhihu.com/equation?tex=AB)之间所有笨蛋天使可能到达的方格 。之后笨蛋天使再也无路可逃，只得一头撞上完整的南墙，额，北墙！

一些计算指出，只要设定![](https://www.zhihu.com/equation?tex=H%3D2%5E%7B4K%5E%7B3%7D%7D)，这个距离总是足够达成计划的（这是一个宽泛的充分条件，并非下界）。在这种指数级的提前布局下，这一策略可以捕获任意![](https://www.zhihu.com/equation?tex=K)值的笨蛋天使，只不过恶魔需要的回合数目会爆炸增长——原因也不难理解，一次只能吃掉一格棋盘的恶魔在应对能力更强的笨蛋天使时就不得不吃出一个![](https://www.zhihu.com/equation?tex=K%5Ctimes+K)的大窟窿才相当于在面对![](https://www.zhihu.com/equation?tex=K%3D1)的笨蛋天使时吃掉的那小小一格。实际上在这个策略下，仅仅是![](https://www.zhihu.com/equation?tex=K%3D2)的笨蛋天使就足以逼迫恶魔在数十亿格开外提前布局。

需要再次提醒诸位恶魔玩家，这并非步数最小的最优解，实际上这是一个为给**笨蛋恶魔**提供的不用动脑子的保底策略。╮(╯▽╰)╭

![](https://picx.zhimg.com/v2-a4b24f691e9fa666f17eaaf59d156bba_r.jpg?source=2c26e567)

14 年后的 1996 年，康威本人发表了一篇论文总结了十余年来他的数学界小伙伴们对此问题的研究进展，并对这个问题进行了进一步拓展探索。他在文中定义了另一些稍微聪明一些的天使策略，并亲手将它们逐个抹杀。总之这篇论文给出了一个更残酷的结论：**只要天使永远不降低自己与原点的距离，恶魔就可以巧妙地将它困毙。**原理也很简单，康威证明了棋盘格子与平面坐标这些要素对游戏的本质并无影响。实际上我们把规则魔改一下——改为天使可停留在欧几里得平面上的任意一点，一次移动能抵达平面内距离不超过![](https://www.zhihu.com/equation?tex=K)单位的任意其他点。而恶魔每次行动可吃掉平面内任意一个闭合单位圆所覆盖的所有点。这样魔改之后所有的游戏结论依然有效。换言之，这个稍微聪明的天使在简单的几何变换后本质上还是笨蛋天使，只不过它是极坐标下的笨蛋天使罢了。想抓住它也十分简单，只要假想一个能力为![](https://www.zhihu.com/equation?tex=4K)的笨蛋天使在逃跑，而恶魔在四个方向上按照之前的策略轮流造墙就好。

这一结论几乎给天使问题判了死刑。诚然我们可以乐观一点地安慰自己，只要我们的天使懂得迂回作战，事情就还有转机。但朴素的数学直觉告诉我们，如果天使选择走回头路，那么就相当于白白让出了一回合给恶魔造墙。

康威本人在论文中也对天使玩家的处境表示了悲观，但在论文的最后，他同样对努力为天使寻找一线生机的玩家们提供了一个模糊但或许可行的思路。这一想法来自他的好朋友，数学家汤姆·科纳（Tom Korner）：想象一下天使不是孤军奋战，而是从天堂调遣了无数天兵天将作为密探安插在棋盘中。它在每格安插了一名斥候，每 100 名斥候编成一个侦查连负责一个 10x10 区域。再由 100 个侦查连编成一个团负责一个 100x100 的区域……依此无限类推。每个军事长官都基于自己下层的情报监视并向上级汇报自己辖区的状况，比方说将辖区分为安全、可用、危险三级。若某军官刚汇报其管辖区域处于可用状态，其上级会立即致电于他，告知一位重要人物——也就是我们的天使，即将进入该区域南界的某一方格，且需被安全护送至区域北界或东界。在此情况下，该军规划一条合适的路线，并向下属传达类似的护送指令。而对于管辖区域为安全状态的第![](https://www.zhihu.com/equation?tex=n)级军官，其可能面临更严格的要求：上级或许仅会通知他这位重要人物可能在比如说![](https://www.zhihu.com/equation?tex=10%5E%7Bn%7D)个时间单位内的任意时刻抵达。科纳认为，或许可以通过精心设计路线来确保这些护送命令总能安全执行。并且在任何时候，所有层级足够高的军官都会汇报其管辖区域为安全状态 —— 如此一来，在足够宏观的视角内，天使便能自由地移动。

这一思路听来有些异想天开，但我们不妨稍稍剧透一下：8 年后，一位名叫马丁·库茨（Martin Kuts）的数学家用上述思路解决了三维空间下的天使问题。在三维空间中，仅仅是![](https://www.zhihu.com/equation?tex=K%3D1)的天使也能够在这些天兵天将的护卫下逃出生天。

在那篇论文的最后，康威悬赏 100 美元征集能足以让天使战胜恶魔的力量数值（注意并非要求下界，充分即可），甚至如果谁能找到让恶魔抓住任意天使的策略，康威更是愿意给出高达 1000 美元的报酬 。

![](https://picx.zhimg.com/v2-726cdc6aafb86498798a10032d4d0a36_r.jpg?source=2c26e567)

然而，这笔悬赏一等就又过了十年。

2006 年，数学家彼得·温克勒 （Peter Winkler）将天使问题收录在了自己新出版的书籍《数学谜题（Mathematical Puzzles）》中，再一次将沉寂的天使与恶魔之争带到了下一代青年数学家们的视野之下。而新一代数学家们真可谓十分争气，在书籍初版不久，同一年内便先后出现了具有四篇突破性进展的论文，最终一鼓作气地拿下了这道空悬已久的难题。

皮特·加茨（Peter Gacs）证明了存在一个足够大的![](https://www.zhihu.com/equation?tex=K)使得天使有必胜策略。这宣告了天使玩家胜利的存在性。布里安·波迪奇（Brian Bowditch）则直接给出了在![](https://www.zhihu.com/equation?tex=K%3D4)时天使的必胜策略。更进一步，奥德瓦尔·克罗斯特（Oddvar Kloster）与安道什・马泰（András Máthé）先后用不同的理论推导出了![](https://www.zhihu.com/equation?tex=K%3D2)时天使的必胜策略。

天使玩家可以获胜，并且仅仅需要![](https://www.zhihu.com/equation?tex=K%3D2)的力量。这一 24 年前问世的数学游戏终于宣告尘埃落定。

在这四篇论文中，安道什与克罗斯特的结论足以推出另外两篇（当![](https://www.zhihu.com/equation?tex=K)更大时只要当做![](https://www.zhihu.com/equation?tex=K%3D2)来行动即可，显然后者的必胜策略在前者的情况依然可行）。而这两篇论文中，安道什的方法颇有思维魅力（他很创新地引入了一个名为善良恶魔的新玩家），但根据 wiki 百科的说法，这一论证的逻辑链条似乎仍有瑕疵。

为了让诸多看客不留遗憾，也考虑到中文互联网上对这个问题的最终答案大多语焉不详，本文决定再花一些篇幅来介绍克罗斯特的策略。不过克罗斯特的论文有十二页，考虑到文章已经很长，也考虑到本文的定位，笔者会略去其中的数学技巧，尽力展示其因果逻辑。

## 克罗斯特的策略

在执行克罗斯特的策略之前，我们需要一些定义准备。本文将克罗斯特的命名做了一些本地化变动。

**以下内容包括文字与图片均基于克罗斯特的论文。**

## 前期准备

为了方便叙述，我们把棋盘上两个相邻格子之间的边界称为**线段**。我们接下来所声称的**曲线**均是由无数个线段序列构成的有向的路径。注意，某个线段在某个曲线中可以多次出现。

**定义 1**：设![](https://www.zhihu.com/equation?tex=s)为曲线中的某一线段。当沿曲线的行进方向观察时，与该线段相邻且位于其右侧的格子称为![](https://www.zhihu.com/equation?tex=s)的**右格**，另一侧相邻的格子则称为![](https://www.zhihu.com/equation?tex=s)的**左格**。

**定义 2**：设![](https://www.zhihu.com/equation?tex=%5Ckappa)为一条由无限线段序列构成的连续有向曲线。如若棋盘上存在某个满足以下条件的格子集合![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)，则称![](https://www.zhihu.com/equation?tex=%5Ckappa)为一条**边界曲线**。

> 1.棋盘上的任意一条线段在![](https://www.zhihu.com/equation?tex=%5Ckappa)中出现的次数不超过 2 次。
> 2. 若某一线段在![](https://www.zhihu.com/equation?tex=%5Ckappa)中仅出现 1 次，则该线段的左格属于![](https://www.zhihu.com/equation?tex=V_%7B++%CE%BA++%7D)，而右格不属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)。
> 3. 若某一线段在![](https://www.zhihu.com/equation?tex=%5Ckappa)中出现 2 次，则这两次出现的方向相反，且该线段的两个相邻格子均属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)。
> 4. 若某一线段未出现在![](https://www.zhihu.com/equation?tex=%5Ckappa)中，则该线段的两个相邻格子要么均属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)​，要么均不属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)​。
> 5.![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)及其补集（即棋盘上所有不属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)的格子构成的集合）均为无限集。
> 6.![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)在![](https://www.zhihu.com/equation?tex=%5Ckappa)的分隔下具有连通性。

我们将![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)称为![](https://www.zhihu.com/equation?tex=%5Ckappa)的**左集**，其补集则称为![](https://www.zhihu.com/equation?tex=%5Ckappa)的**右集**。

这个定义写出来有些绕弯，但大家可以简单理解成棋盘上的格子被一条无限长的国境线分为了两个无限国土的国家。你左手边的那个国家没有飞地，但右手边的那个偶尔有几块飞地。

![](https://picx.zhimg.com/50/v2-a28ccd3ca5815d05f9347231825bb0c9_720w.jpg?source=2c26e567)

> **引理 1：对任意边界曲线**![](https://www.zhihu.com/equation?tex=%5Ckappa)**而言，其左集与右集均唯一。**

自古数学论文都会先证唯一性，这个引理很符合直觉，但并不显然。我们来简单证明一下。

假若有两个集合![](https://www.zhihu.com/equation?tex=U_%7B1%7D)与![](https://www.zhihu.com/equation?tex=U_%7B2%7D)，它们都声称自己是![](https://www.zhihu.com/equation?tex=%5Ckappa)的左集。那么他们都要满足以上五个条件。注意，不是他们俩合起来一起满足，是他们俩都要各自满足这五个条件。

我们寻找一个仅在![](https://www.zhihu.com/equation?tex=U_%7B1%7D)中的格子![](https://www.zhihu.com/equation?tex=q)（这当然是能找到的，不然就说明![](https://www.zhihu.com/equation?tex=U_%7B1%7D)是![](https://www.zhihu.com/equation?tex=U_%7B2%7D)的子集），再任选![](https://www.zhihu.com/equation?tex=%5Ckappa)中某一线段的左格![](https://www.zhihu.com/equation?tex=t)。我们可以构造一个从![](https://www.zhihu.com/equation?tex=q)出发、终止于![](https://www.zhihu.com/equation?tex=t)的连通方格序列（我们此处的 “连通” 仅指序列中任意两个相邻方格共享一条边）。设![](https://www.zhihu.com/equation?tex=o)为该序列中首个与![](https://www.zhihu.com/equation?tex=%5Ckappa)中某一线段相邻的方格，显然从![](https://www.zhihu.com/equation?tex=q)到![](https://www.zhihu.com/equation?tex=o)的序列中，任意两个相邻方格均不被![](https://www.zhihu.com/equation?tex=%5Ckappa)中的线段分隔（否则![](https://www.zhihu.com/equation?tex=o)就不是首个）。

考虑这些格子，它们两两相邻且都有一条边不在![](https://www.zhihu.com/equation?tex=%5Ckappa)中，按照条件 4，他们要么都属于左集，要么都不属于左集，这麻烦了，好在我们现在有两个左集。又因为![](https://www.zhihu.com/equation?tex=q)属于![](https://www.zhihu.com/equation?tex=U_%7B1%7D)而不属于![](https://www.zhihu.com/equation?tex=U_%7B2%7D)，我们可以让![](https://www.zhihu.com/equation?tex=q)到![](https://www.zhihu.com/equation?tex=o)的所有方格均属于![](https://www.zhihu.com/equation?tex=U_%7B1%7D)，且均不属于![](https://www.zhihu.com/equation?tex=U_%7B2%7D)。目前没有矛盾。

但根据条件 2 和 3，任何声称自己是左集的集合必须包含边界线段的左格且不包含边界线段的右格，而方格![](https://www.zhihu.com/equation?tex=o)是边界线段的邻居。这意味着，如若![](https://www.zhihu.com/equation?tex=o)是边界线段的左格，那么声称自己是合法左集的两个集合都要接纳它，反之则都要拒绝他。故而![](https://www.zhihu.com/equation?tex=o)要么同时属于![](https://www.zhihu.com/equation?tex=U_%7B1%7D)和![](https://www.zhihu.com/equation?tex=U_%7B2%7D)，要么同时不属于这两个集合，这产生了矛盾，故而左集是唯一的。

右集是左集的补集，左集唯一则右集同样唯一。

确保了唯一性，接下来，我们定义两种能把边界曲线![](https://www.zhihu.com/equation?tex=%5Ckappa)变化为其他曲线的操作。

> **拓展**：如若![](https://www.zhihu.com/equation?tex=%5Ckappa)中某一线段的右格![](https://www.zhihu.com/equation?tex=q)不属于![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)。将此线段替换为![](https://www.zhihu.com/equation?tex=q)的另外三条边界，且替换后的线段方向使得![](https://www.zhihu.com/equation?tex=q)成为其左格。
> **收缩**：如若![](https://www.zhihu.com/equation?tex=%5Ckappa)中某两条连续线段在棋盘上重叠但方向相反，从而形成一个死端。将这两条线段从![](https://www.zhihu.com/equation?tex=%5Ckappa)中删除。

![](https://picx.zhimg.com/v2-74bb5cfdd8c379133d116db6146be7c1_r.jpg?source=2c26e567)

> **引理 2：对任意边界曲线**![](https://www.zhihu.com/equation?tex=%5Ckappa)**进行拓展或收缩操作后得到的新曲线仍是边界曲线。对**![](https://www.zhihu.com/equation?tex=%5Ckappa)**执行收缩操作不改变其左集。对**![](https://www.zhihu.com/equation?tex=%5Ckappa)**执行涉及**![](https://www.zhihu.com/equation?tex=q)**格的拓展操作，其左集增加一格**![](https://www.zhihu.com/equation?tex=q)。

原文是用集合符号描述的，白话就是这么个意思。

这个引理也很符合直觉，我很想写一句留给读者自证，但它证明起来十分繁琐无味，我们就简述其证明思路吧：对拓展操作而言，把一次拓展操作后曲线多出来的三条线段依次对照先前的五个条件对照，它们全部满足。对收缩操作而言，把移除的那条线段与五个条件对照分析即可。它甚至没有用到反证法。

**定义 3：**设![](https://www.zhihu.com/equation?tex=%5Ckappa)和![](https://www.zhihu.com/equation?tex=%5Cupsilon)为两条边界曲线。若通过有限次（包括零次）操作可将![](https://www.zhihu.com/equation?tex=%5Ckappa)转化为![](https://www.zhihu.com/equation?tex=%5Cupsilon)，则称![](https://www.zhihu.com/equation?tex=%5Cupsilon)为![](https://www.zhihu.com/equation?tex=%5Ckappa)的**后代曲线。**

> **引理 3：若**![](https://www.zhihu.com/equation?tex=%5Ckappa)**是一条边界曲线，**![](https://www.zhihu.com/equation?tex=%5Cupsilon)**是其后代曲线。则有**![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D%5Csubseteq+V_%7B%5Cupsilon%7D)**。**

这个引理是显然的，因为拓展与收缩两种操作都无法从左集移除方格。

> **引理 4**：设![](https://www.zhihu.com/equation?tex=%5Ckappa)为一条边界曲线，![](https://www.zhihu.com/equation?tex=s)为在![](https://www.zhihu.com/equation?tex=%5Ckappa)中出现两次的某一线段。将![](https://www.zhihu.com/equation?tex=%5Ckappa)中从![](https://www.zhihu.com/equation?tex=s)的第一次出现到第二次出现（含这两次出现的线段）之间的部分删除得到曲线![](https://www.zhihu.com/equation?tex=%5Cupsilon)。则![](https://www.zhihu.com/equation?tex=%5Cupsilon)一定是![](https://www.zhihu.com/equation?tex=%5Ckappa)的后代曲线，且因此![](https://www.zhihu.com/equation?tex=%5Cupsilon)是一条边界曲线。

粗略来说，这条引理赋予了我们一种简化操作，使我们可以直接移除右集的飞地或者无意义的重叠边界曲线。证明如下。

我们需要证明存在有限次扩展和收缩操作，可将![](https://www.zhihu.com/equation?tex=%5Ckappa)中指定的线段族（从![](https://www.zhihu.com/equation?tex=s)的第一次出现到第二次出现之间的那些）删除。大致思路是，首先通过扩展操作移除该线段族中所有仅出现一次的线段，再通过收缩操作移除所有出现两次的线段。

设![](https://www.zhihu.com/equation?tex=s_%7B1%7D)和![](https://www.zhihu.com/equation?tex=s_%7B2%7D)分别为![](https://www.zhihu.com/equation?tex=s+)在![](https://www.zhihu.com/equation?tex=%5Ckappa)中的第一次和第二次出现，![](https://www.zhihu.com/equation?tex=q_%7B1%7D)和![](https://www.zhihu.com/equation?tex=q_%7B2%7D)为与![](https://www.zhihu.com/equation?tex=s)相邻的两个方格，它们显然都在![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)中。根据其连通性，我们可以找到一个由![](https://www.zhihu.com/equation?tex=V_%7B%5Ckappa%7D)中的方格构成的序列，该序列连接和![](https://www.zhihu.com/equation?tex=q_%7B1%7D)和![](https://www.zhihu.com/equation?tex=q_%7B2%7D)且不穿过![](https://www.zhihu.com/equation?tex=%5Ckappa)中的线段，此外还可确保序列中无重复方格。又由于![](https://www.zhihu.com/equation?tex=q_%7B1%7D)和![](https://www.zhihu.com/equation?tex=q_%7B2%7D)相邻，该序列中的方格会构成一个闭环边界，且除![](https://www.zhihu.com/equation?tex=s)外，该边界不被![](https://www.zhihu.com/equation?tex=%5Ckappa)中的任何线段打断。

设![](https://www.zhihu.com/equation?tex=I)为该边界所包围的棋盘有限区域。考虑到![](https://www.zhihu.com/equation?tex=%5Ckappa)在![](https://www.zhihu.com/equation?tex=I)中仅含有限条线段，且仅通过![](https://www.zhihu.com/equation?tex=s)进出![](https://www.zhihu.com/equation?tex=I)，因此![](https://www.zhihu.com/equation?tex=I)中恰好包含![](https://www.zhihu.com/equation?tex=%5Ckappa)中从![](https://www.zhihu.com/equation?tex=s_%7B1%7D)到![](https://www.zhihu.com/equation?tex=s_%7B2%7D)的线段族。

准备妥当，以![](https://www.zhihu.com/equation?tex=%5Ckappa)为初始曲线，我们开始对其进行修整：在![](https://www.zhihu.com/equation?tex=I)中选取任意一条仅出现一次的线段，通过扩展操作将其替换，重复该过程，直到![](https://www.zhihu.com/equation?tex=I)中不再存在仅出现一次的线段。每次扩展操作都会将 I 中的一个方格加入曲线的左集，而![](https://www.zhihu.com/equation?tex=I)仅含有限个方格，因此该过程会在有限次操作后停止，最终得到一个新曲线![](https://www.zhihu.com/equation?tex=%5Cmu)。在![](https://www.zhihu.com/equation?tex=%5Cmu)中，从![](https://www.zhihu.com/equation?tex=s_%7B1%7D)到![](https://www.zhihu.com/equation?tex=s_%7B2%7D)的所有线段均出现两次，且该性质在后续收缩操作中会一直保持下去（因为收缩操作不会引入仅出现一次的线段）。

在![](https://www.zhihu.com/equation?tex=%5Cmu)中，选取从![](https://www.zhihu.com/equation?tex=s_%7B1%7D)到![](https://www.zhihu.com/equation?tex=s_%7B2%7D)之间的一对线段![](https://www.zhihu.com/equation?tex=r_%7B1%7D)和![](https://www.zhihu.com/equation?tex=r_%7B2%7D)—— 二者对应棋盘上同一条线段，且保证沿![](https://www.zhihu.com/equation?tex=%5Cmu)的方向来看，![](https://www.zhihu.com/equation?tex=r_%7B1%7D)和![](https://www.zhihu.com/equation?tex=r_%7B2%7D)之间的距离在所有此类线段对中是最小的。在这个条件下，我们断言![](https://www.zhihu.com/equation?tex=r_%7B1%7D)和![](https://www.zhihu.com/equation?tex=r_%7B2%7D)是![](https://www.zhihu.com/equation?tex=%5Cmu)中的连续线段，可以作为收缩操作的合法对象。若不然，仿照前文构造![](https://www.zhihu.com/equation?tex=I)的方法，可找到一个棋盘区域，该区域恰好包含![](https://www.zhihu.com/equation?tex=%5Cmu)中从![](https://www.zhihu.com/equation?tex=r_%7B1%7D)到![](https://www.zhihu.com/equation?tex=r_%7B2%7D)的线段族，且该线段段中的所有线段均出现两次，这一定会出现盲端，故而与![](https://www.zhihu.com/equation?tex=r_%7B1%7D)和![](https://www.zhihu.com/equation?tex=r_%7B2%7D)距离最小的假设矛盾。

现在以![](https://www.zhihu.com/equation?tex=%5Cmu)为初始曲线，继续对其进行修整：在从![](https://www.zhihu.com/equation?tex=s_%7B1%7D)到![](https://www.zhihu.com/equation?tex=s_%7B2%7D)的线段族中，选取一对连续且对应棋盘同一条线段的线段![](https://www.zhihu.com/equation?tex=r_%7B1%7D)和![](https://www.zhihu.com/equation?tex=r_%7B2%7D)，通过收缩操作将其删除，重复该过程，直到![](https://www.zhihu.com/equation?tex=s_%7B1%7D)与![](https://www.zhihu.com/equation?tex=s_%7B2%7D)成为连续线段。最后通过一次收缩操作删除![](https://www.zhihu.com/equation?tex=s_%7B1%7D)与![](https://www.zhihu.com/equation?tex=s_%7B2%7D)，即可得到曲线![](https://www.zhihu.com/equation?tex=%5Cupsilon)，且![](https://www.zhihu.com/equation?tex=%5Cupsilon)是![](https://www.zhihu.com/equation?tex=%5Ckappa)的后代曲线。由引理 2，它也是合法的边界曲线。

大张旗鼓准备了一番，我们终于可以阐述天使的策略了！

## 天使的策略

我们让棋盘上显示一条逃生路径，该路径既代表天使过往的移动轨迹，也指示其未来的移动计划。并且在任意时刻，这条路径都是一条边界曲线。

我们把路径中的一条线段称为**栖木**（原文 perch，这似乎是克罗斯特的一点小文艺，我们保留原文），并让天使停留在栖木的右格上。

接下来在每一轮行动中，天使会将栖木沿着路径向未来方向移动两段线段，然后降落在新栖木的右格上。显然，新方格处于![](https://www.zhihu.com/equation?tex=K%3D2)的天使的移动结界内：每当栖木向前推进一段线段时，天使在横、纵两个维度上的移动距离均不超过 1 格，甚至在路径顺时针转弯时会停留在原地。事实上，天使无需完全动用其全部移动能力。由于只有当路径逆时针转弯时，天使才需要进行对角线移动，因此天使所需的最大移动幅度仅仅相当于马走日。

![](https://pic1.zhimg.com/50/v2-e3c41dc07a6330637eaa26fd8d0fb881_720w.jpg?source=2c26e567)

游戏开始时，我们的默认逃生路径是一条纵贯棋盘南北的直线，而栖木就在天使的左手边。考虑到对称性，我们让天使向北逃生。这样逃生路径的大致方向是从南指向北。显然这是一条边界曲线，其左集为整个西半棋盘。我们把天使前方的部分称为逃生路径的**未来段，**其背后的部分称为**过去段**。

每当恶魔吃掉一个方格后，天使会观察路径未来段周围的棋盘，查看是否存在潜在陷阱。若发现足够数量的被吃方格处于距离路径足够近的位置，天使会更新它的逃生路径，使得新路径的左集包含这些被吃方格，从而避开它们。新路径必须是当前路径的后代曲线，且仅能与当前路径在 “当前栖木的未来段” 部分存在差异。

我们将证明：可以通过一定的策略，使得每次更新路径后，新路径未来段几乎所有线段的右格都是未被吃掉的方格。这一特性将确保天使通过更新并遵循路径能够永远持续移动。

**定义 4**：在任意时刻，棋盘上的方格可划分为三类：**自由格**、**被吃格**和**规避格**。其中，规避格是当前路径左集中的方格；被吃格是当前路径右集中已被恶魔吃掉的方格；自由格是当前路径右集中未被吃掉的方格。

注意，只有右集中的方格才可能称为被吃格。左集中的方格无论是否被恶魔吃掉，都是规避格。

初始状态下，整个棋盘的西半部分均为规避格，而东半部分（包括天使的起始方格）均为自由格。当天使更新路径时，部分自由格和被吃格可能会转化为规避格，此时规避格集合会向东半部分延伸。恶魔吃掉一个自由格后，该方格会转化为被吃格。

注意到向规避格的转化是单向的，无论是天使还是恶魔，都无法将规避格重新转化为自由格或被吃格（引理 3，左集中的方格是无法移除的，还记得吗？）。即使恶魔吃掉一个规避格，该方格仍会保持规避格的属性，这相当于恶魔浪费了一次行动机会。

**定义 5**：我们将天使的各轮行动（每轮行动包括更新路径和随后的移动）用自然数编号。定义![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bi%7D)为第![](https://www.zhihu.com/equation?tex=i)轮行动中更新所得的路径，![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)为初始路径。设![](https://www.zhihu.com/equation?tex=%5Ckappa)为![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)的后代曲线，由于通过有限次操作可将![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)转化为![](https://www.zhihu.com/equation?tex=%5Ckappa)，且每次操作仅影响有限数量的线段，因此在路径的过去段和未来段足够远的部分，![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)与![](https://www.zhihu.com/equation?tex=%5Ckappa)必然完全一致。基于此，我们可定义![](https://www.zhihu.com/equation?tex=%5Ckappa)的**长度**![](https://www.zhihu.com/equation?tex=L_%7B%5Ckappa%7D)：将两条曲线![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)与![](https://www.zhihu.com/equation?tex=%5Ckappa)中完全一致的足够远的无限过去段和无限未来段移除后，![](https://www.zhihu.com/equation?tex=%5Ckappa)中剩余线段的数量与![](https://www.zhihu.com/equation?tex=%5Clambda_%7B0%7D)剩余线段的数量之差即为![](https://www.zhihu.com/equation?tex=L_%7B+%5Ckappa%7D)。

设![](https://www.zhihu.com/equation?tex=j)为某一轮行动，![](https://www.zhihu.com/equation?tex=%5Ckappa)为某条边界曲线。定义![](https://www.zhihu.com/equation?tex=n_%7B%5Ckappa%7D%28j%29)为：第![](https://www.zhihu.com/equation?tex=j)轮行动时![](https://www.zhihu.com/equation?tex=%5Ckappa)左集中曾经的“被吃格” 的数量，由被吃格的定义，这显然并不包括那些在被恶魔吃掉时就已属于规避格的方格（它们一直是规避格而不曾成为过被吃格）。诸君可以理解为，它主要是用来统计自游戏开始到第![](https://www.zhihu.com/equation?tex=j+)轮以来，天使更新路径时所躲掉的被吃格的数目，是天使主动把被吃格转换为规避格的数目。接下来这个函数的小角标几乎都是![](https://www.zhihu.com/equation?tex=i)。

为了避免双重角标带来的阅读困难，我们接下来做如下简写：![](https://www.zhihu.com/equation?tex=L_%7Bi%7D%3DL_%7B%5Clambda_%7Bi%7D%7D)，![](https://www.zhihu.com/equation?tex=n_%7B%5Clambda_%7Bi%7D%7D%28j%29%3Dn_%7Bi%7D%28j%29)。

定义![](https://www.zhihu.com/equation?tex=p_%7Bi%7D)为天使在第![](https://www.zhihu.com/equation?tex=i)轮行动移动后的栖木，![](https://www.zhihu.com/equation?tex=p_%7B0%7D)为初始栖木。

天使更新逃生路径的宗旨可简略表述为：天使会尽可能缩短路径未来段的长度，但在满足 “每增加不超过两段线段的路径长度，却能多规避至少一个被吃格” 这一条件时，它会延长未来段的长度。且在遵循该约束的前提下，天使会尽可能选择规避掉更多被吃格的路径。

![](https://pica.zhimg.com/v2-11e16623d9e66811665170d2c4097835_r.jpg?source=2c26e567)

接下来，我们正式推出足以让天使逃出生天的路径更新规则，我们先给策略，再来证可行性。

在第![](https://www.zhihu.com/equation?tex=i)轮行动开始时，![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bi-1%7D)为当前路径，![](https://www.zhihu.com/equation?tex=p_%7Bi-1%7D)为当前栖木。我们分三步筛选出新的逃生路径：

首先，定义![](https://www.zhihu.com/equation?tex=P_%7Bi%7D%5E%7B1%7D)为满足以下两个条件的所有边界曲线![](https://www.zhihu.com/equation?tex=%5Cmu)构成的集合：

> 1.![](https://www.zhihu.com/equation?tex=%5Cmu)是![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bi-1%7D)的后代曲线。
> 2.![](https://www.zhihu.com/equation?tex=%5Cmu)与![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bi-1%7D)在过去段（包括![](https://www.zhihu.com/equation?tex=p_%7Bi-1%7D)所在的线段）完全一致。

随后，定义![](https://www.zhihu.com/equation?tex=P_%7Bi%7D%5E%7B2%7D)为![](https://www.zhihu.com/equation?tex=P_%7Bi%7D%5E%7B1%7D)中满足下述条件 3 的所有![](https://www.zhihu.com/equation?tex=%5Cmu)构成的集合：

> 3. 对于任意![](https://www.zhihu.com/equation?tex=%5Ckappa%5Cin+P_%7Bi%7D%5E%7B1%7D)，均有![](https://www.zhihu.com/equation?tex=L_%7B%5Cmu%7D-2n_%7B%5Cmu%7D%28i%29%5Cleq+L_%7B%5Ckappa%7D-2n_%7B%5Ckappa%7D%28i%29)。

最后，定义![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E3%5C%29)为![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E2%5C%29)中满足以下条件 4 的所有![](https://www.zhihu.com/equation?tex=%5C%28%5Cmu%5C%29)构成的集合：

> 4. 对于任意![](https://www.zhihu.com/equation?tex=%5C%28%5Ckappa+%5Cin+P_i%5E2%5C%29)，均有![](https://www.zhihu.com/equation?tex=%5C%28n_%7B%5Cmu%7D%28i%29+%5Cgeq+n_%7B%5Ckappa%7D%28i%29%5C%29)。

之后，新的逃生路径![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_i%5C%29)可从![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E3%5C%29)的所有成员中任意选取。

克罗斯特在文中特别提醒道，这样的更新规则倾向于生成 “无环路径”（即无任何线段出现两次的路径），这是因为条件 3 的存在实质上鼓励通过 “短路”来消除环路以缩短路径长度![](https://www.zhihu.com/equation?tex=L)。事实上，在这个更新规则下，路径的未来段绝不会包含完整的环路。然而，由于条件 2 的限制，如若天使已经陷入某个环路内部，那么这个环路就无法被我们的更新规则所消除。因此在证明该策略有效性的过程中，我们还需要额外探讨环路出现的场景，此处姑且按下不表，交由后续章节论证。

另一方面，尽管![](https://www.zhihu.com/equation?tex=P_i%5E1P_i%5E2P_i%5E3)的成员数量可能无穷多，但天使只需观察有限数量的边界曲线即可从中找到![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E3%5C%29)的成员，这一结论可通过以下两点分析得出：

首先，![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_%7Bi-1%7D+%5Cin+P_i%5E1%5C%29)，且对于任意![](https://www.zhihu.com/equation?tex=%5C%28%5Cmu%5C%29)而言，![](https://www.zhihu.com/equation?tex=%5C%28n_%7B%5Cmu%7D%28i%29%5C%29)的取值均不超过![](https://www.zhihu.com/equation?tex=i)（因为游戏只进行了![](https://www.zhihu.com/equation?tex=i)轮，恶魔最多只能造出![](https://www.zhihu.com/equation?tex=i)个被吃格）。因此我们断言，但凡满足条件 3 的边界曲线，其长度绝不会超过![](https://www.zhihu.com/equation?tex=%5C%28L_%7Bi-1%7D+-+2n_%7Bi-1%7D%28i%29+%2B+2i%5C%29)。如果你好奇这个上界怎么来的，在条件 3 的不等式中把![](https://www.zhihu.com/equation?tex=L_%7B%5Cmu%7D)解出来再把![](https://www.zhihu.com/equation?tex=n_%7B%5Cmu%7D%28i%29+%5Cleq+i)带入就得到了。

其次，让![](https://www.zhihu.com/equation?tex=%5Clambda_i%5C)在 “恶魔已吃掉的最北侧方格以北的区域” 与![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_0%5C%29)保持一致并不会使路径长度增加，也不会减少左集中被吃格的数量 。因此，试图让![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_i%5C%29)在该区段与![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_0%5C%29)存在差异毫无意义。由于用长度有界的线段替换![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_0%5C%29)中某一有限段所生成的边界曲线数量是有限的，因此天使只需通过有限次计算即可完成路径更新，这对天使而言是可以穷举的。

此外，![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_%7Bi-1%7D+%5Cin+P_i%5E1%5C%29)这一特性还确保了![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E2%5C%29)和![](https://www.zhihu.com/equation?tex=%5C%28P_i%5E3%5C%29)绝对不为空集，因为![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bi-1%7D)始终是一个可选项，换言之天使至少可以选择不更新路径继续沿用老路。故而上述更新规则始终可被成功执行。

> **引理 5**：设![](https://www.zhihu.com/equation?tex=i)和![](https://www.zhihu.com/equation?tex=j)为两轮行动，且![](https://www.zhihu.com/equation?tex=%5C%28j+%3E+i%5C%29)，则有![](https://www.zhihu.com/equation?tex=%5C%28L_j+-+2n_j%28j%29+%5Cleq+L_i+-+2n_i%28i%29%5C%29)。

证明：由于![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_%7Bi-1%7D+%5Cin+P_i%5E1%5C%29)且![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_i+%5Cin+P_i%5E2%5C%29)，根据条件 3 可得![](https://www.zhihu.com/equation?tex=L_i+-+2n_i%28i%29+%5Cleq+L_%7Bi-1%7D+-+2n_%7Bi-1%7D%28i%29)

在第![](https://www.zhihu.com/equation?tex=%5C%28i-1%5C%29)轮行动结束后，恶魔就无法在![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_%7Bi-1%7D%5C%29)的左集中制造新的 “被吃格”，因此：![](https://www.zhihu.com/equation?tex=n_%7Bi-1%7D%28i%29+%3D+n_%7Bi-1%7D%28i-1%29+)

结合以上两式，可得![](https://www.zhihu.com/equation?tex=%5C%28L_i+-+2n_i%28i%29+%5Cleq+L_%7Bi-1%7D+-+2n_%7Bi-1%7D%28i-1%29%5C%29)。再通过简单的数学归纳法即可证明本引理。

这是一条很重要的结论！我们现在知道在这场游戏中![](https://www.zhihu.com/equation?tex=L_%7Bi%7D+-+2n_%7Bi%7D%28i%29+)是不会增加的！观察一下这个式子，我们可以不甚准确地说，天使所面对的未来路径会越来越短，而它避开的被吃格会越来越多！当然这还无法保证它总能移动下去，我们会继续深入论证。诸君不妨歇一歇大脑，还记得我们最开始的证明思路吗？

## 天使能够获胜的证明

胜利就在眼前了！接下来，我们将兑现承诺，证明在每次路径更新后，路径未来段中几乎所有线段的右格都是未被吃掉的自由格。唯一的例外情况是：栖木未来侧紧邻的下一段路径线段，其右格可能是规避格。但这问题不大。

在给出最终的正式证明之前，我们先对证明思路进行一次完整的叙述。

考虑路径未来段的某一线段![](https://www.zhihu.com/equation?tex=s)及其右格![](https://www.zhihu.com/equation?tex=q)。首先，我们将证明![](https://www.zhihu.com/equation?tex=q)不可能是被吃格，因为根据路径更新规则，天使会优先选择扩展路径以绕过![](https://www.zhihu.com/equation?tex=q)，从而将其纳入规避格的范畴，这一扩展操作是可行的，因为所有被吃格都属于路径的右集。

接着，我们假设![](https://www.zhihu.com/equation?tex=q)是规避格。这一假设意味着线段![](https://www.zhihu.com/equation?tex=s)在路径中出现了两次，从而形成一个环路。该环路有两种可能情况：要么完全位于栖木的未来侧，要么包含栖木（即天使被环路包围）。第一种情况不可能成立，因为根据路径更新规则，天使会直接消除该环路；对于第二种情况，我们将游戏回溯到天使即将进入这个 “待形成环路” 的时刻。我们会发现，除了上述提到的例外情况外，路径更新规则根本不允许天使进入环路，而是会让天使选择另一条路径，从而规避整个可能形成环路的区域。之所以会出现这种结果，是因为若恶魔想在后续形成环路，就必须在更早的时刻布下足够多的被吃格，而这些被吃格会促使天使提前避开该区域。注意，我们并非完全排除环路形成的可能性，但我们能证明：若环路确实形成，那么天使必然处于环路的末端（即重复线段的前一个位置），并且会在同一回合直接跳出环路。

说干就干，我们来攻克最后的难关吧！胜利就在眼前了！

> **引理 6**：设:![](https://www.zhihu.com/equation?tex=s)为![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中位于![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)未来侧的某一线段，![](https://www.zhihu.com/equation?tex=q)为![](https://www.zhihu.com/equation?tex=s)的右格，则在第![](https://www.zhihu.com/equation?tex=j)轮行动结束时，![](https://www.zhihu.com/equation?tex=q)不可能是被吃格。

我们采用反证法。

假设在第![](https://www.zhihu.com/equation?tex=j+)轮行动结束时，![](https://www.zhihu.com/equation?tex=q)是被吃格。设![](https://www.zhihu.com/equation?tex=%5Cmu)为对![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)进行扩展操作后得到的曲线（这次扩展操作中，我们用![](https://www.zhihu.com/equation?tex=q)的另外三条边界替换线段![](https://www.zhihu.com/equation?tex=s)）。此时，![](https://www.zhihu.com/equation?tex=%5C%28L_%7B%5Cmu%7D%3DL_j+%2B+2%5C%29)且![](https://www.zhihu.com/equation?tex=%5C%28n_%7B%5Cmu%7D%28j%29%3Dn_j%28j%29+%2B+1%5C%29)。由于![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j+%5Cin+P_j%5E2%5C%29)，且![](https://www.zhihu.com/equation?tex=%5C%28L_%7B%5Cmu%7D+-+2n_%7B%5Cmu%7D%28j%29%3DL_j+-+2n_j%28j%29%5C%29)，我们可轻易验证![](https://www.zhihu.com/equation?tex=%5C%28%5Cmu+%5Cin+P_j%5E2%5C%29)。但由于![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j+%5Cin+P_j%5E3%5C%29)，根据条件 4 可知![](https://www.zhihu.com/equation?tex=%5C%28n_j%28j%29+%5Cgeq+n_%7B%5Cmu%7D%28j%29%5C%29)，这与![](https://www.zhihu.com/equation?tex=%5C%28n_%7B%5Cmu%7D%28j%29%3Dn_j%28j%29+%2B+1%5C%29)矛盾。因此假设不成立，引理得证。

> **引理 7**：设![](https://www.zhihu.com/equation?tex=s)为![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中位于![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)未来侧的某一线段，![](https://www.zhihu.com/equation?tex=q)为![](https://www.zhihu.com/equation?tex=s)的右格。若在第![](https://www.zhihu.com/equation?tex=j)轮行动结束时![](https://www.zhihu.com/equation?tex=q)是规避格，则![](https://www.zhihu.com/equation?tex=s)必定是![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中紧随![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)之后的那一段线段。

这可能是我们不得不引入一些数学计算的部分，我尽量阐述逻辑。

我们发现，作为棋盘上的一条线段，![](https://www.zhihu.com/equation?tex=s)在![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中至少出现一次，且其两个相邻方格均属于![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)的左集。

根据边界曲线的判定条件，![](https://www.zhihu.com/equation?tex=s)在![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中必定恰好出现两次，且两次出现的方向相反。设第一次出现的线段为![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)，第二次出现的线段为![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)。定义![](https://www.zhihu.com/equation?tex=%5C%28%5Ckappa%5C%29)为从![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中删除 “从![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)到![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)（含它们本身）的部分” 后得到的曲线。

根据引理 4（就是可以用来删掉飞地的那个简便操作，还记得吗？），![](https://www.zhihu.com/equation?tex=%5Ckappa%5C)是![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)的后代曲线，其长度满足：![](https://www.zhihu.com/equation?tex=L_%7B%5Ckappa%7D+%E2%80%8B++%3DL_%7Bj%7D+%E2%80%8B++%E2%88%92l+%28l%E2%88%88N%29)③。其中![](https://www.zhihu.com/equation?tex=l)是![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)中 “从![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)到![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)（含它们本身）” 的线段总数，显然![](https://www.zhihu.com/equation?tex=l%3E2)。

根据引理 3（左集只变大不变小）， 我们有![](https://www.zhihu.com/equation?tex=%5C%28V_%7B%5Clambda_j%7D+%5Csubseteq+V_%7B%5Ckappa%7D%5C%29)，因此有：![](https://www.zhihu.com/equation?tex=n_%7Bj%7D%28j%29%5Cleq+n_%7B%5Ckappa%7D%28j%29)④。

若![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)位于![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)的未来侧，则![](https://www.zhihu.com/equation?tex=%5Ckappa)与![](https://www.zhihu.com/equation?tex=%5Clambda_%7Bj%7D)在过去侧完全一致，我们有![](https://www.zhihu.com/equation?tex=%5C%28%5Ckappa+%5Cin+P_j%5E1%5C%29)。由于![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j+%5Cin+P_j%5E2%5C%29)，根据更新路径的条件 3 可得![](https://www.zhihu.com/equation?tex=%5C%28L_j+-+2n_j%28j%29+%5Cleq+L_%7B%5Ckappa%7D+-+2n_%7B%5Ckappa%7D%28j%29%5C%29)，这与式 ③ 和式 ④ 矛盾。因此，![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)必定位于![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)的过去侧，或与![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)重合。 考虑到![](https://www.zhihu.com/equation?tex=s_%7B2%7D)在未来侧，这表示天使的逃生路径已经首尾相触，恶魔正试图瓮中捉鳖。

![](https://picx.zhimg.com/50/v2-9f07862bd84e97564a8d19984ed180ed_720w.jpg?source=2c26e567)

不过事情没那么简单，让我们施展时光倒流，把时间回溯到天使刚刚进入环路的那一回合，看看游戏到底发生了什么吧！

参考上图，设![](https://www.zhihu.com/equation?tex=i)为天使将栖木移至![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)或其未来侧的那一轮行动。此时，![](https://www.zhihu.com/equation?tex=%5C%28p_i%5C%29)位于![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)或其 未来侧，而沿![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)来看，![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)位于![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)的过去侧。从![](https://www.zhihu.com/equation?tex=%5C%28p_i%5C%29)到![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)，天使每回合将栖木移动两段线段，因此总共移动的线段数最多为![](https://www.zhihu.com/equation?tex=%5C%28l+-+2%5C%29)。由此可得![](https://www.zhihu.com/equation?tex=%5C%28l+-+2+%5Cgeq+2%28j+-+i+-+1%29%5C%29)，整理后得![](https://www.zhihu.com/equation?tex=2%28j+-+i%29+%5Cleq+l+)⑤。

**注意到——上式⑤当且仅当**![](https://www.zhihu.com/equation?tex=%5C%28p_i+%3D+s_1%5C%29)**且沿**![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)**来看**![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)**紧邻**![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)**的过去侧时等号成立。**

根据引理 5，我们有![](https://www.zhihu.com/equation?tex=L_%7Bj%7D+%E2%80%8B++%E2%88%922n_%7Bj%7D+%E2%80%8B++%28j%29%E2%89%A4L_%7Bi%7D+%E2%80%8B++%E2%88%922n_%7Bi%7D+%E2%80%8B++%28i%29)⑥。在第![](https://www.zhihu.com/equation?tex=i)轮到第![](https://www.zhihu.com/equation?tex=j)轮行动之间，恶魔最多能吃掉![](https://www.zhihu.com/equation?tex=%5C%28j+-+i%5C%29)个方格，因此：![](https://www.zhihu.com/equation?tex=n_%7B%5Ckappa%7D%28j%29-n_%7B%5Ckappa%7D%28i%29%5Cleq+j-i)⑦。

我们来做一些数学技巧，将 ③、 两倍的④、⑤、⑥ 和两倍的⑦ 相加可得：![](https://www.zhihu.com/equation?tex=L_%7B%5Ckappa%7D+%E2%80%8B++%E2%88%922n_%7B%5Ckappa%7D+%E2%80%8B++%28i%29%E2%89%A4L_%7Bi%7D+%E2%80%8B++%E2%88%922n_%7Bi%7D+%E2%80%8B++%28i%29)⑧。

在第![](https://www.zhihu.com/equation?tex=i)轮行动中，![](https://www.zhihu.com/equation?tex=%5C%28%5Ckappa+%5Cin+P_i%5E1%5C%29)，根据条件 3 可得：![](https://www.zhihu.com/equation?tex=%5C%28L_i+-+2n_i%28i%29+%5Cleq+L_%7B%5Ckappa%7D+-+2n_%7B%5Ckappa%7D%28i%29%5C%29)。它和⑧正好相反。

因此，只要天使在第![](https://www.zhihu.com/equation?tex=i)轮行动中遵循路径更新规则，则式 ⑧ 必须取等号。而式⑧取等号的前提是式④至式⑦均取等号。而如前所述，式 ⑤ 取等号即可推出本引理的结论。

明白那一行为什么要加粗了吧。╮(╯▽╰)╭

这正是我们先前提到的唯一一种特殊情况，也是恶魔方唯一能逼迫天使将逃生路径修成环路的情形。但在环路形成的那个回合，天使已经堪堪走到了![](https://www.zhihu.com/equation?tex=%5C%28s_2%5C%29)的过去侧，它只要正常地移动下去就可以轻松跳出这个环路！而其他任何更险恶的情形都会被天使的策略提前规避！用阿诺的话来说：天使可能陷入环路，但天使被环路困住不太可能(*^▽^*)

不过，这里还有一个小小小细节……我们并不能保证游戏曾经发生这样一个回合……

细心的读者大概已经注意到，上述论证中存在一个我们没有证明就默认使用的假设，即这个游戏“存在第![](https://www.zhihu.com/equation?tex=i)轮行动”。简单来说，若![](https://www.zhihu.com/equation?tex=%5C%28s_1%5C%29)位于路径过去段的极远处，甚至在天使初始栖木之前，根本就从未被天使行经过，那后续的推论都是无稽之谈。还记得天使的环路正在首尾相触吗？这个触点有可能在天使的出发点之前呢。

万幸克罗斯特给我们提供了解决方案，我们可通过时空平移来解决这一问题。假想一下在前![](https://www.zhihu.com/equation?tex=m)轮行动中，仅允许恶魔吃掉西侧半棋盘的方格（这相当于无效行动），而天使每回合向北移动两格。第![](https://www.zhihu.com/equation?tex=m)轮行动后，游戏恢复正常规则。由于棋盘无限大且初始路径具有对称性，对于任意![](https://www.zhihu.com/equation?tex=m)，这种平移后的游戏与原游戏完全等价。对于那些位于起始点之前的![](https://www.zhihu.com/equation?tex=s_%7B1%7D)而言，我们完全可以当做天使在他们之前开始了游戏，只不过没参透我们策略的恶魔在一直在吃西半区的格子，而我们的天使就这么安然无恙地一路向北，直到走过了![](https://www.zhihu.com/equation?tex=s_%7B1%7D)。因此，我们可不失一般性地假设第![](https://www.zhihu.com/equation?tex=j)轮行动足够靠后，从而确保第![](https://www.zhihu.com/equation?tex=i)轮行动是存在的。

好了，该解决的都解决了，是时候迎接我们的胜利了。

## 定理：上述策略可使天使无限期地移动下去，且永远不会落在被吃掉的方格上。

证明：设![](https://www.zhihu.com/equation?tex=j)为任意一轮行动，![](https://www.zhihu.com/equation?tex=q)为![](https://www.zhihu.com/equation?tex=%5C%28p_j%5C%29)的右格。需注意，沿![](https://www.zhihu.com/equation?tex=%5C%28%5Clambda_j%5C%29)来看，![](https://www.zhihu.com/equation?tex=%5C%28p_j%5C%29)位于![](https://www.zhihu.com/equation?tex=%5C%28p_%7Bj-1%7D%5C%29)未来侧的两段线段距离处。根据引理 6，![](https://www.zhihu.com/equation?tex=q)不可能是被吃格；根据引理 7，![](https://www.zhihu.com/equation?tex=q)不可能是规避格。因此，当天使在第![](https://www.zhihu.com/equation?tex=j)轮行动中落在![](https://www.zhihu.com/equation?tex=q)上时，该方格一定未被吃掉。在第![](https://www.zhihu.com/equation?tex=j)轮行动结束时，![](https://www.zhihu.com/equation?tex=q)必定是自由格。

## 证毕

结束了，一切都结束了。

笔者不清楚这四位数学家有没有去领取康威老爷子的悬赏。也不清楚这个问题是否还有更深的数学背景。

康威已于 2020 年逝世，感谢他让我得以一窥数学殿堂的窗棂间透出的光。

感谢克罗斯特，这篇文章的大部分内容均是他论文的转述。

最后，感谢一路看到这里的你，这是笔者第一次撰写如此长度的科普文章。

最后，借用另一本生物教材的结尾：去钓鱼吧，但愿仍有鱼可钓。

![](https://picx.zhimg.com/v2-c5f9589edcbfb676b6cc91489995c0f8_r.jpg?source=2c26e567)

参考文献：

- John H. Conway, The angel problem, in: Richard Nowakowski (editor) Games of No Chance, volume 29 of MSRI Publications, pages 3–12, 1996.
- Brian H. Bowditch, "The angel game in the plane", Combin. Probab. Comput. 16(3):345-362, 2007.
- András Máthé, "The angel of power 2 wins", Combin. Probab. Comput. 16(3):363-374, 2007
- O. Kloster, A solution to the angel problem. Theoretical Computer Science, vol. 389 (2007), no. 1-2, pp. 152–161
- Berlekamp, Elwyn R.; Conway, John H.; Guy, Richard K. (1982), "Chapter 19: The King and the Consumer", Winning Ways for your Mathematical Plays, Volume 2: Games in Particular, Academic Press, pp. 607–634.
- Martin Kutz, The Angel Problem, Positional Games, and Digraph Roots, PhD Thesis FU Berlin, 2004
- B. Bollobás and I. Leader, The angel and the devil in three dimensions. Journal of Combinatorial Theory, Series A. vol. 113 (2006), no. 1, pp. 176–184
- B. Bollobás and I. Leader, The angel and the devil in three dimensions. Journal of Combinatorial Theory, Series A. vol. 113 (2006), no. 1, pp. 176–184
- Martin Kutz, Conway's Angel in three dimensions, Theoret. Comp. Sci. 349(3):443–451, 2005.


---

# 有没有一本书涵盖了几乎所有的平面几何知识? Pulcherrima

**Author:** Pulcherrima  
**Bio:** エエエエエエエエエエエエエエ  
**Avatar:** ![](https://pic1.zhimg.com/v2-911ca9bdd8cf05514db83b11afe8ccb9_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/5fc3c5ba17e91160f385abdcf86a2a51  
**Published:** 2026.02.12 22:14:50  
**Updated:** 2026.02.12 22:52:29  
**Question:** https://www.zhihu.com/question/384527152  
**Question Created:** 2020.04.02 13:17:07  
**Question Updated:** 2020.06.06 07:14:43  
**Votes:** 385  
**Comments:** 19  
**Type:** answer  

平面几何无穷无尽，但是在数学竞赛领域，这本书是公认的**欧式几何竞赛封神之作**

![](https://pic1.zhimg.com/v2-4acee90c8f1d80715c6e12efb82642df_r.jpg?source=2c26e567)

作者Evan Chen（陈谊廷），American-Taiwanese，USAMO冠军，2014年入选台湾队并代表台湾斩获IMO金牌

他在高中的最后一年担任办公室助理时就写下了这本 Euclidean Geography in Mathematical Olympiads (中文版可以参考罗炜译《数学竞赛中的欧几里得几何》）

这本书于2016年面世，以其从浅入深，体系严密，方法全面著称

难度分布合理，几乎没有偏题怪题，不管是 兴趣/准备联赛/准备CMO级别及以上考试 都是适用的自学教材

![](https://picx.zhimg.com/v2-7749f4bb69a6099866b99a28cc1521f6_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-a5b71c61b4185a26c947e59527202e5b_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-80145154a5ffa59bd0e21fa5e61f7d3d_r.jpg?source=2c26e567)

从最基础的几何方法——导角入手，介绍了圆和直线型结构的几何性质，再引入计算方法（如三角、复数、和重心型坐标系），然后介绍了进阶的方法技巧（反演、射影几何、和完全四边形）几乎涵盖了平面几何竞赛中的所有重要定理和主要方法

![](https://pic1.zhimg.com/v2-8c7bbf2f193b07cc0654f674216216aa_r.jpg?source=2c26e567)

本书配有248张标准几何插图，很多定理和性质不会直接给出直接的证明，以留给读者思考的空间，并给出了大量的Hint，而不是直接给出答案，对初学者很有利（这在国内的数学教材中是很少有的）

![](https://pica.zhimg.com/v2-d9619e84bd736488578bd95914bcd081_r.jpg?source=2c26e567)

此外，作为一本应试读物（可以这么说），这本书给出了许多较有难度的竞赛真题作为配套练习，可以锻炼解题能力

这本书不是专家所做，而是真实刚参加完数学竞赛的金牌选手对几何学习的分享，所以更贴近实际，避免了难且不常用的几何定理，符合中学生的思维和视角

mol金牌大佬！！（这是他的网站[http://web.evanchen.cc](https://link.zhihu.com/?target=http%3A//web.evanchen.cc/))


---

# 如何看待单墫教授对初中数学「一线三等角」的批评？ ljh25252

**Author:** ljh25252  
**Bio:** 不要再看我啦Σ( ° △ °|||)︴  
**Avatar:** ![](https://pica.zhimg.com/v2-7fe59654fee6146b5c432f9fef90bf73_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/db546a4bd8d72975c3cbbe56be3b3e2f  
**Published:** 2026.02.13 02:21:47  
**Updated:** 2026.02.13 02:21:47  
**Question:** https://www.zhihu.com/question/2004606264995496333  
**Question Created:** 2026.02.10 17:22:57  
**Question Updated:** 2026.02.11 16:58:09  
**Votes:** 37  
**Comments:** 1  
**Type:** answer  

谢邀。

评价为又菜又爱玩。

![](https://picx.zhimg.com/v2-0de062f54f73b2adb63570149bb327d6_r.jpg?source=2c26e567)

原作法就是知乎常谈的**「先问有没有，再问为什么」**，如果![](https://www.zhihu.com/equation?tex=%5Calpha)是钝角你也能取到两个点，然后怎么办？

还有**「量化确定」**是什么词？定量分析就定量分析，定性分析就定性分析。**难不成就因为要找个 Alpha 角度，所以就是挖掘 Alpha 因子，因此这也算是量化是吧。**

再来看看「说服力依据」的某网站：

![](https://picx.zhimg.com/v2-9b982fb1e8447c4bd4702d56e1f487e0_r.jpg?source=2c26e567)

总共140条结果好多，直接查看都是什么期刊好吧

![](https://picx.zhimg.com/v2-a5f39a1d4b06e605185d2bf5e6f791e8_r.jpg?source=2c26e567)

再来按下载量和引用量排一下看看好吧

![](https://picx.zhimg.com/v2-34028046239dbdb22d22c06228b1ece1_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6c0a17e86c8fce80c5b47228224c541b_r.jpg?source=2c26e567)

有人看吗我请问了，我都不好说里面有多少是把某公众号的营销文章当期刊发的。

还是回到题目，我看到这个题第一反应是考虑圆，也就是单老的做法。

没别的，题目两个固定点，给定角度，固定直线，在直线上找点作给定角度角。

最自然的想法就是过BC作中垂线（这几乎来自于几何原本的想法），在中垂线上取圆心做弧，弧与直线有交点，那就是我们要找的点，没有交点那就说明要找的点就不存在。

![](https://picx.zhimg.com/v2-c0c9be9d49404813781f9e82a851b5d4_r.jpg?source=2c26e567)

那么问题就来了，随便做个圆轻易就发现这个角度不是固定的，还能发现角度值还会随着圆心与线段BC的距离变化而变化，那么问题就是怎么找到要的那个圆心。

作个![](https://www.zhihu.com/equation?tex=%5Cangle+CBD%3D%5Calpha)为我们所求角，而 OB 必然是半径，因此只要![](https://www.zhihu.com/equation?tex=DB%5Cbot+BO)，就必然有![](https://www.zhihu.com/equation?tex=%5Cangle+CBD)是弦切角，这个时候圆弧就是满足![](https://www.zhihu.com/equation?tex=%5Cangle+BAC%3D%5Calpha)的点![](https://www.zhihu.com/equation?tex=A)的轨迹一侧（另一边同理）。

此时圆弧与直线交点如果存在，那就是要找的点。

因此只需要过![](https://www.zhihu.com/equation?tex=B)作![](https://www.zhihu.com/equation?tex=l%5Cbot+BD)的直线![](https://www.zhihu.com/equation?tex=l)即可，与中垂线交点就是圆心![](https://www.zhihu.com/equation?tex=O)。

其中这上面的除了最终圆弧与直线是否相交，每一步都是确定的，因此可以证明所求点的存在性。也可以定量讨论当圆心与线段BC的距离如何时（这在先前已有说明），解的分布如何。

定线段，作圆，分析圆周角与圆心到线段的距离，这种方法有不少题目，例如

最大张角问题

[关于椭圆的这种最大张角问题怎么做？](https://www.zhihu.com/question/651827394)

[a，b∈（0，π）已知tana=2tanb，求a-b的最大值?](https://www.zhihu.com/question/660923752)

米勒问题

[几何最值专项2：米勒定理（最大张角问题）](https://zhuanlan.zhihu.com/p/653262335)


---

# 单位圆上随意取三点，那么这三点围成三角形面积的期望是多少？ Equation

**Author:** Equation  
**Bio:** 计算即真理，算法即证明  
**Avatar:** ![](https://pic1.zhimg.com/v2-babe29043c0fb736c9276d813a478944_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b09f91c810db335da93a566219226364  
**Published:** 2026.01.25 15:07:28  
**Updated:** 2026.01.26 22:20:19  
**Question:** https://www.zhihu.com/question/515251421  
**Question Created:** 2022.02.07 21:42:50  
**Question Updated:** 2022.02.07 21:42:50  
**Votes:** 523  
**Comments:** 27  
**Type:** answer  

这种连续问题我们其实可以用离散化想法来做，因为一旦离散之后我们就可以枚举了。比如转化为正n边形，然后我们算随便挑三点算概率，算面积期望什么的就容易的多了。然后同样的古典概型算概率，然后面积概率乘面积求和算期望。建模完了之后把难度全部压缩到计算上面来。




从正![](https://www.zhihu.com/equation?tex=n)边形的**个顶点**中等概率选 3 个，得到一个三角形。 所以总数：

![](https://www.zhihu.com/equation?tex=N%3D%5Cbinom+n3.)

## 用间隔 枚举面积情况的参数

把三点按圆周逆时针排成![](https://www.zhihu.com/equation?tex=V_1%2CV_2%2CV_3)。设它们在顶点序列上的间隔（走过的边数）为

![](https://www.zhihu.com/equation?tex=a%3D%5C%23%28V_1%5Cto+V_2%29%2C%5Cquad+b%3D%5C%23%28V_2%5Cto+V_3%29%2C%5Cquad+c%3D%5C%23%28V_3%5Cto+V_1%29%2C)

则

![](https://www.zhihu.com/equation?tex=a%2Cb%2Cc%5Cin%5Cmathbb+Z_%7B%3E0%7D%2C%5Cqquad+a%2Bb%2Bc%3Dn.)

所有三角形会被分到所有正整数分拆![](https://www.zhihu.com/equation?tex=%28a%2Cb%2Cc%29)这一类里。

并且对每个固定的![](https://www.zhihu.com/equation?tex=%28a%2Cb%2Cc%29)，沿圆周整体旋转有![](https://www.zhihu.com/equation?tex=n)种起点，因此**按有向逆时针三元组计数**时，该类出现![](https://www.zhihu.com/equation?tex=n)次。一个无序三角形会对应 3 个起点（从 3 个顶点任取一个当![](https://www.zhihu.com/equation?tex=V_1)），所以最后换回无序三角形时会除以 3。

设正![](https://www.zhihu.com/equation?tex=n)边形外接圆半径为![](https://www.zhihu.com/equation?tex=R)，令![](https://www.zhihu.com/equation?tex=%5Ctheta%3D%5Cfrac%7B2%5Cpi%7D%7Bn%7D)。 那么三段圆心角分别是![](https://www.zhihu.com/equation?tex=a%5Ctheta%2Cb%5Ctheta%2Cc%5Ctheta)。由坐标/叉积可得（这是标准公式）：

![](https://www.zhihu.com/equation?tex=A%28a%2Cb%2Cc%29%3D%5Cfrac%7BR%5E2%7D%7B2%7D%5Cbig%28%5Csin%28a%5Ctheta%29%2B%5Csin%28b%5Ctheta%29%2B%5Csin%28c%5Ctheta%29%5Cbig%29%2C+%5Cquad+a%2Bb%2Bc%3Dn.)

期望面积

![](https://www.zhihu.com/equation?tex=%5Cmathbb+E%5BA%5D%3D%5Cfrac1%7B%5Cbinom+n3%7D%5Csum_%7B%5Ctext%7B%E6%89%80%E6%9C%89%E4%B8%89%E8%A7%92%E5%BD%A2%7D%7D+A.)

用![](https://www.zhihu.com/equation?tex=%28a%2Cb%2Cc%29)分组。所有逆时针有向三元组总数是

![](https://www.zhihu.com/equation?tex=n%5Cbinom%7Bn-1%7D%7B2%7D%3D3%5Cbinom+n3.)

于是

![](https://www.zhihu.com/equation?tex=%5Csum_%7B%5Ctext%7B%E6%97%A0%E5%BA%8F%E4%B8%89%E8%A7%92%E5%BD%A2%7D%7DA+%3D%5Cfrac13%5Csum_%7B%5Ctext%7B%E9%80%86%E6%97%B6%E9%92%88%E6%9C%89%E5%90%91%7D%7DA+%3D%5Cfrac13%5Csum_%7Ba%2Bb%2Bc%3Dn%7D+n%5Ccdot+A%28a%2Cb%2Cc%29.)

代回期望

![](https://www.zhihu.com/equation?tex=%5Cmathbb+E%5BA%5D+%3D%5Cfrac%7Bn%7D%7B3%5Cbinom+n3%7D%5Csum_%7Ba%2Bb%2Bc%3Dn%7DA%28a%2Cb%2Cc%29+%3D%5Cfrac%7B2%7D%7B%28n-1%29%28n-2%29%7D%5Csum_%7Ba%2Bb%2Bc%3Dn%7DA%28a%2Cb%2Cc%29.)

把![](https://www.zhihu.com/equation?tex=A%28a%2Cb%2Cc%29)代入，并用对称性把三项合并

![](https://www.zhihu.com/equation?tex=%5Csum_%7Ba%2Bb%2Bc%3Dn%7D%5Cbig%28%5Csin%28a%5Ctheta%29%2B%5Csin%28b%5Ctheta%29%2B%5Csin%28c%5Ctheta%29%5Cbig%29+%3D3%5Csum_%7Ba%3D1%7D%5E%7Bn-2%7D%28n-a-1%29%5Csin%28a%5Ctheta%29.)

而这个和有闭式

![](https://www.zhihu.com/equation?tex=%5Csum_%7Ba%3D1%7D%5E%7Bn-2%7D%28n-a-1%29%5Csin%5Cleft%28%5Cfrac%7B2%5Cpi+a%7D%7Bn%7D%5Cright%29+%3D%5Cfrac+n2%5Ccot%5Cleft%28%5Cfrac%7B%5Cpi%7D%7Bn%7D%5Cright%29.)

因此得到

![](https://www.zhihu.com/equation?tex=%5Cmathbb+E%5BA%5D+%3D%5Cfrac%7B3nR%5E2%7D%7B2%28n-1%29%28n-2%29%7D%5Ccot%5Cleft%28%5Cfrac%7B%5Cpi%7D%7Bn%7D%5Cright%29.)

正![](https://www.zhihu.com/equation?tex=n)边形面积

![](https://www.zhihu.com/equation?tex=S%3D%5Cfrac+n2R%5E2%5Csin%5Cleft%28%5Cfrac%7B2%5Cpi%7D%7Bn%7D%5Cright%29.)

因为![](https://www.zhihu.com/equation?tex=R%3D1)所以

![](https://www.zhihu.com/equation?tex=n%5Cto%5Cinfty)：![](https://www.zhihu.com/equation?tex=%5Csin%28%5Cpi%2Fn%29%5Csim+%5Cpi%2Fn)，![](https://www.zhihu.com/equation?tex=%5Cmathbb+E%5Cto+%5Cfrac%7B3%7D%7B2%5Cpi%7D%5Capprox0.477)

![](https://picx.zhimg.com/v2-0125b2f6f883be968f136850c880be15_r.jpg?source=2c26e567)

这个回答给出了推广到n边形内部的情况。明显复杂的多！

[求单位面积正 n 边形内选取三角形的平均三角形面积？](https://www.zhihu.com/question/1989349854661603851/answer/1999245122076956532)


---

# 写了一千页的书，还是想放弃了（兼发布最后一个版本） 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://picx.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 704  
**Comments:** 85  
**Type:** article  

## 前言

本书的起点源自我在高中三年学习数学期间使用Obsidian软件记的笔记（但是这本书是用\LaTeX 编的，不要再重复问我问题了），写这本书的初衷很简单：我觉得市面上没有一本教辅可以真正满足我。

简而言之，我观察到目前大部分教辅的形式，要不就是总结加一堆例题的形式，有些比较良心的教辅，无非就是在解析和答案上多下点功夫，多讲点思路。或许逆向工程确实是学习的最好方法之一，但是我总觉得缺点什么。直到我读了Springer出版社的《初等数学之旅》之后，我突然有感而发，为什么国内就没有一本这种能从初中一直讲到本科数学的大部头书呢？于是我写了这本书。

在《初等数学之旅》里，我感到的不是题型+例题的编排方式，而是很好体现了“例题是理论的延伸”，目前市面上很多的教辅编排例题，本质上是为了让学生记忆题型，用编程语言的话来比喻，也就是做Pattern Matching。看到一个类似的就套上去，也就是所谓的“背下这个例题的解法，考试遇到类似的就套进去。”这就导致整本书很“堆砌、套路、碎片化”。

不可否认，这种模式对于应试很有效，毕竟高考数学，说白了来来回回就考那几种题型，高考数学本质上就是一个封闭系统，而且它的模式熵还在不断降低。

也就是说，高考数学的知识边界的刚性，也就是所谓的高考数学考纲（据说现在没有了，但还是作为一种习俗性约定），就规定了高考数学本质上是一个绝对的闭环、一个有限的搜索空间。而现在许多的特级教师、机构教研员或者是做题爱好者，就是在这个封闭系统里暴力破解，一个Pattern被细分到了各种的二级结论和三级套路，高考数学的算子是有限的，组合虽然很多，但是高价值路径的算法已经基本被穷尽了。这也导致了很多的高考数学教辅，本质上都讲不出什么新东西————我也不例外。简单说，就是没活整了。

既然这套封闭系统已经被卷烂了，这就出现了算法的内卷化，当系统不再有新变量进入时，学生之间的竞争就变成了“搜索速度”和“内存占用”的竞争，谁的搜索匹配题型的速度最快，谁记住的Pattern越多。而目前大部分市面的教辅都是如此编排的。

但我很欣赏Springer出版社出的数学书里，很多大佬编排的思路，尤其是《初等数学之旅》，这个不是单纯的Pattern Matching，而是展示了清晰的路径图，这种模式意味着，解题不再是单纯的匹配，而是追踪。拥有这样模式的学生，看到一道题目，不是先去Matching这是什么题型，而是看到整道题背后的逻辑流，比如这道题是从哪个定义或者定理起点，经历了哪些逻辑分支，最后收敛到答案的。也就是很多人所称的“底层逻辑”、“看透了”，而现在很多教怎么看题目的，本质上就是在做这个工作。因为很多学生只知道像个机器人一样Pattern Matching，一听到这种方法，反而耳目一新了。

这也就是为什么我在最初的前言坚称“所有结论都要有证明，和不给没有证明的结论”，因为每一个结论都必须伴随路径，如果没有，你甚至不应该把它存进你的脑子里。

以上的理由基本解释了这本书编写的主要哲学。但是后面，随着我的书稿编写计划变得不切实际地宏大，导致很多细节我都没打磨好，实际上我很不满意。并且因为最后有很多人建议我加入更多应试技巧，也就是专题，“否则没市场”，所以这本书无论如何，都还只是个半成品，或许是我一部未完成的作品罢了。

不过，这本书稿目前也是无限期停止更新了，你现在看到的可能是最后一个版本了。有许多人一直问我，为什么懒得编一个习题册出来，原因有以下：

（一）没时间，而且不赚钱；

（二）懒；

（三）现在习题册和专题练习，网上已经有很多了。以前我还觉得习题册里的解析思路引导很重要，但是现在我渐渐改变想法了。因为我发现很多AI配合学习模式，一步步交互性思路引导，比写在纸上的答案好多了。我也就没必要浪费时间了，实际上我在高三下册的时候，我是直接把手机带进学校，然后用DeepSeek R1讲我的错题，解析册我确实很少翻。

因为很多解析不过是复制粘贴答案，还是那句话，良心的就加点字，但大部分都只是纯粹的复制粘贴，久了我也不想看了。还不如将我的思考过程-错误过程-疑问告诉DeepSeek，然后DeepSeek顺着我的思路继续走，告诉我为何错了，为何这个方法好而那个不好，提升效率。

为什么我打算无限期暂停更新这个书稿？原因以下：

> 1.没钱赚，回报太少。具体可以看我的知乎想法，也就是说“我承认可能我的策略一开始就是错误的。甚至有点作贱自己的时间。我承认用爱发电这个理想很好，但是当我细算下来，那少得可怜的回报彻底解构了，就算我再多写一页，加上自己那些所谓的认为好的东西，又有什么用呢。边际收益还是少得可怜，我每增加产出都要付出固定的时间成本，但是读者的新增却又不会带来我回报的增加，甚至随着免费分发的数增多，这个收益会最终被平均，趋近于0，简直就是负和博弈。更何况，我写这些东西，本质上不能将读者引导向其他的付费服务，比如哔哩哔哩一些网课老师会给免费的资料，引导报班，但实际上我什么都没有。”

虽然在这个领域，谈钱不是什么好事，容易让别人觉得割韭菜或者是商人只想圈钱。但实话实说，我觉得自己投入的上千小时，然后只有几百个下载量，最后也没赚到什么钱，回报太少。而哔哩哔哩上的许多讲义和教辅，虽然卖的便宜，几十页，但是销量多，几万和几十万也是有的。 没办法，我不是富二代，我大学毕业以后也要担心就业问题，担心吃不吃得上饭，能不能给亲戚家人朋友看得起，这都是很现实的问题。如果连生存都成问题，就别谈理想了。

> 2.各种酸民和贩子恶心我。这点我在知乎上也说过了，爆改我的书，一开始还傻瓜一点，就简单在书名上加几个字，然后改作者。现在更加隐蔽了，都是拆着卖，可能卖个几块钱，或者挂在自己的网盘上牟利。我和我的粉丝去声讨，还被问候全家，说“都成年人了还这么玻璃心”、“你这资料值几个钱？网上多得去。”之类的话。不多说了。

> 3.我觉得写书太枯燥了。许多大部头的书，都是退休后的教授写的，要钱有钱、要闲有闲，花上几年写个大著，纯当休闲娱乐。但是我写这本书，是花很多时间，往往一个下午和一天就基本没了，总得来说，很无聊。

> 4.我有新的事要做了。最近我在学习Flutter并且开始写软件，想要开发一款学习软件。目前我觉得这个过程比写书更有意思，毕竟写书是单向交流，而写软件能让我真实地和用户互动，并且不管能不能成，可以想象的发展空间也更大更广。

未来，我决定：

> 1.把这本书的内容全部转到我的软件上去，因为我是用\LaTeX 写的，所以转成其他格式很方便。可以的话，也翻译成其他语言，将来尝试推广给外国人。可能和我想法接近一点都就是Brilliant和Math Academy，不是多邻国，因为多邻国想学点严肃的东西，和玩具差不多；

> 2.继续开发我的软件，不管能不能成。首先也能积累一点经验，再不济也算我的作品集了。因为我很少玩游戏，所以这也是我消遣的方式；

> 3.看看还没有什么新点子，也许有哪一天，我突然灵感来了，可能就尝试写点什么。或许是把这个当成模板，或者是新写；

> 4.实现收益，改进我的财务状况，然后再谈更远的。

感谢你阅读本书。

## 我得到了什么？

也感谢这次机会，让我认识了很多的朋友。并且不可否认，尽管回报不是很多，但是作为一个大一生，我的收入不过也就是去奶茶店等打工兼职，或者是别的类似的工作了。写书获得的爱发电的收入，确实也占我收入的很大一部分，此言非虚。

- 认识了很多朋友和大佬；
- 爱发电有一点捐赠收入；
- 让我比较熟练地掌握了LaTeX和相关编辑器；
- 一本素材库；
- 给我上了一课，也就是不要用学生思维去度量商业；
- 等等...

## 下载

## 水印版：

[2026-2-8](https://link.zhihu.com/?target=https%3A//sakura10.lanzn.com/b016klf3ra)

密码:dkxh

## 无水印版

[爱发电 · 连接创作者与粉丝的会员制平台](https://link.zhihu.com/?target=https%3A//afdian.com/a/writeamathbook)

## 目录和封面

![](https://pic4.zhimg.com/v2-39664b1442ef78b5d78bb34ca89ac0b9_r.jpg)

![](https://pic4.zhimg.com/v2-9196161a1b6d2f226174006f8f007eed_r.jpg)

![](https://picx.zhimg.com/v2-b8aa4052537d029ea7409d7b83ae4539_r.jpg)

![](https://pic4.zhimg.com/v2-713963376c1721773ab7cfc5ed9fb94f_r.jpg)

![](https://pic2.zhimg.com/v2-20ef77af17035c883e11f86e0ee0fe47_r.jpg)

![](https://pica.zhimg.com/v2-28f62ff981b2f5100f8d88daf53fdc66_r.jpg)

![](https://pic4.zhimg.com/v2-241b2a5ed3f6a2cd175632e55f252d37_r.jpg)

![](https://pic1.zhimg.com/v2-4d8532772bc74f493697626c84073f8c_r.jpg)

![](https://pic3.zhimg.com/v2-1d3ba487d7fd75d2e168351a511da594_r.jpg)

![](https://pic4.zhimg.com/v2-5c8173683f843a7b19560266ddaba05d_r.jpg)

![](https://pic3.zhimg.com/v2-778fbd558e886210d8c180247934aa92_r.jpg)

## 预览

![](https://pic4.zhimg.com/v2-794184ca106ddcf54fe3713d0583bc85_r.jpg)

![](https://pic1.zhimg.com/v2-1c579da3dbd7e985ed73c8026a77d322_r.jpg)

![](https://pica.zhimg.com/v2-eb42601ff6d4d77962d5d232d74c7852_r.jpg)

[余命数 的想法](https://www.zhihu.com/pin/2003308094629905109)

end


---

#  TravorLZH

**Author:** TravorLZH  
**Bio:** 瞌睡家  
**Avatar:** ![](https://picx.zhimg.com/v2-469c3c3ff0fd0ad138eb006db28527e6_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0e0609e04f0c063424ecfaaddb99f409  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 38  
**Type:** pin  

[object Object],[object Object],[object Object]


---

# 一起做手工 凯淼淼

**Author:** 凯淼淼  
**Bio:** pseudo-topologist  
**Avatar:** ![](https://picx.zhimg.com/v2-17130e8bb62a7c5b795d4eb2ace29cee_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/eb37ae90ab5116560ecf31a9aa593376  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 542  
**Comments:** 23  
**Type:** article  

在风和日丽的五维流形[1]，銶禛幼儿园的邱老师给小朋友们发了若干![](https://www.zhihu.com/equation?tex=S%5E3)和实心环![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)，准备开展一堂生动活泼的手工课.

## 棱镜空间的四种写法

邱老师慈眉善目的说：小朋友们，大家试试把手上的两个实心环![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)粘贴起来，比比谁能得到更多的三维流形吧！




小朋友们跃跃欲试，有的把![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)和![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)恒同的粘贴起来，发现得到了![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+S%5E2)，有的则按照![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)和![](https://www.zhihu.com/equation?tex=%5Cpartial%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1)恒同粘贴起来，发现得到了![](https://www.zhihu.com/equation?tex=S%5E3).

> ![](https://www.zhihu.com/equation?tex=S%5E3%3D%5Cpartial+%5Cmathbb%7BD%7D%5E4%3D%5Cpartial+%28%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E2%29%3D%28%5Cpartial+%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E2%29%5Ccup%28+%5Cmathbb%7BD%7D%5E2%5Ctimes%5Cpartial+%5Cmathbb%7BD%7D%5E2%29+).




大家忙的热火朝天，小k却沉思半响，举手说：

一个实心环可以分解成两个球![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E1)和![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E1%3D%5Cmathbb%7BD%7D%5E3)，因此粘贴实心环可以视作先粘贴一个![](https://www.zhihu.com/equation?tex=2-)手柄![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E1)，再粘贴一个球![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E3). 粘贴球的方式是唯一的，因此只需要看![](https://www.zhihu.com/equation?tex=2-)手柄怎么粘贴就好了，而粘贴![](https://www.zhihu.com/equation?tex=2-)手柄就是去看![](https://www.zhihu.com/equation?tex=%5Cpartial+%5Cmathbb%7BD%7D%5E2%5Ctimes+%5C%7B0%5C%7D%5Csubset+%5Cmathbb%7BD%7D%5E2%5Ctimes+%5Cmathbb%7BD%7D%5E1)和![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)上的哪条曲线等同起来.

![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)上的曲线可以由longitude![](https://www.zhihu.com/equation?tex=l%3DS%5E1%5Ctimes%5C%7B%5Ctext%7Bpt%7D%5C%7D)和meridian![](https://www.zhihu.com/equation?tex=m%3D%5C%7B%5Ctext%7Bpt%7D%5C%7D%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2)生成，所有的简单闭曲线都可以表示为![](https://www.zhihu.com/equation?tex=p%5Ccdot+m%2Bq%5Ccdot+l)，其中![](https://www.zhihu.com/equation?tex=p%2Cq)维两个互素的整数. 所以把两个![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)粘贴起来由两个整数![](https://www.zhihu.com/equation?tex=p%2Cq)决定.

![](https://pic1.zhimg.com/v2-0152a34da37d24c932428d8d314049ec_r.jpg)




邱老师微笑点头：我们把这样得到的流形记作![](https://www.zhihu.com/equation?tex=L%28p%2Cq%29)，叫它们棱镜空间(lens space).

这个小朋友事实上总结出了把实心环![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)粘贴到带环面边界的三维流形的方法. 现在对一般的可定向三维流形![](https://www.zhihu.com/equation?tex=M)，则里面的嵌入圆周，也即纽结的管状邻域就是![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2).

所以我们可以做这么一个有趣的手工：剪掉这个![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)，再以参数![](https://www.zhihu.com/equation?tex=%28p%2Cq%29)的方式粘回去一个![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2). 假如这个纽结![](https://www.zhihu.com/equation?tex=S%5E1)在![](https://www.zhihu.com/equation?tex=M)中的像是![](https://www.zhihu.com/equation?tex=K)，我们就将做手工得到的流形记作

![](https://www.zhihu.com/equation?tex=M_%7B%5Cfrac%7Bp%7D%7Bq%7D%7D%28K%29%2C+%5C%5C)

地球上的人们称其为![](https://www.zhihu.com/equation?tex=M)对纽结![](https://www.zhihu.com/equation?tex=K)做![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bp%7D%7Bq%7D-)Dehn手术.

小朋友们，现在可以试试对你们手上的![](https://www.zhihu.com/equation?tex=S%5E3)以及里面的平凡结![](https://www.zhihu.com/equation?tex=%5Ctext%7BO%7D)，看看做![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bp%7D%7Bq%7D-)手工能得到什么.




小朋友们动手尝试，叽叽喳喳，很快便发现这和刚刚得到的棱镜空间一摸一样，也即

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3_%7B%5Cfrac%7Bp%7D%7Bq%7D%7D%28%5Ctext%7BO%7D%29%3DL%28p%2Cq%29.%7D+%5C%5C)




邱老师：不错，在做更多的手工之前，我们先给一些得到的玩具起些名字. 考虑一类特殊的三维流形![](https://www.zhihu.com/equation?tex=M%3D%5CSigma%5Ctimes+S%5E1)，![](https://www.zhihu.com/equation?tex=%5CSigma)是一个曲面，这里面有很多标准的纽结，也即![](https://www.zhihu.com/equation?tex=%5C%7B%5Ctext%7Bpt%7D%5C%7D%5Ctimes+S%5E1)，因此我们可以对这些纽结做手工，记为

![](https://www.zhihu.com/equation?tex=%28%5CSigma%2C%28p_1%2Cq_1%29%2C%5Ccdots%2C%28p_k%2Cq_k%29%29%2C+%5C%5C)

叫做Seifert流形，更直观的，它们可以看成是![](https://www.zhihu.com/equation?tex=%5CSigma)去掉![](https://www.zhihu.com/equation?tex=k)个圆盘乘上![](https://www.zhihu.com/equation?tex=S%5E1)，再按照![](https://www.zhihu.com/equation?tex=%28p_1%2Cq_1%29%2C%5Ccdots%2C%28p_k%2Cq_k%29)这![](https://www.zhihu.com/equation?tex=k)个参数粘贴上![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2).

小朋友们，现在思考思考![](https://www.zhihu.com/equation?tex=%28S%5E2%2C%28p%2Cq%29%29)是什么呢？




小m抢答道：我觉得是棱镜空间![](https://www.zhihu.com/equation?tex=L%28q%2Cp%29).




邱老师：那![](https://www.zhihu.com/equation?tex=%28S%5E2%2C%28p_1%2Cq_1%29%2C%28p_2%2Cq_2%29%29)呢，还是棱镜空间吗？




小k依照定义在![](https://www.zhihu.com/equation?tex=S%5E2%5Ctimes+S%5E1)里剪掉两个![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1)，发现得到了![](https://www.zhihu.com/equation?tex=A%5Ctimes+S%5E1)，这里![](https://www.zhihu.com/equation?tex=A%3DS%5E1%5Ctimes+%5B-1%2C1%5D)是一个圆环，也即球面去掉两个圆盘，现在要在![](https://www.zhihu.com/equation?tex=A%5Ctimes+S%5E1%3D%28S%5E1%5Ctimes+%5B-1%2C1%5D%29%5Ctimes+S%5E1)上粘回去两个实心环.

他于是把两个边界环面![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+S%5E1%5Ctimes+%5C%7B-1%5C%7D)，![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+S%5E1%5Ctimes+%5C%7B1%5C%7D)裸露在外侧，

![](https://pic1.zhimg.com/v2-d4f0003be818803f2fd6fa84ada1829a_r.jpg)

整个流形是![](https://www.zhihu.com/equation?tex=%28S%5E1%5Ctimes+S%5E1%29%5Ctimes+%5B-1%2C1%5D)，小k很快意识到幼儿园小班的时候学过，环面上的任何两条简单闭曲线都存在一个环面自同胚变过去.

> 把![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+S%5E1)视为![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BR%7D%5E2%2F%5Cmathbb%7BZ%7D%5E2)，其上的自同胚(在同痕意义下)都可以表示成![](https://www.zhihu.com/equation?tex=%5Ctext%7BGL%7D%282%2C%5Cmathbb%7BZ%7D%29)里的元素，注意到对任何互素的![](https://www.zhihu.com/equation?tex=%28p%2Cq%29)，存在整数![](https://www.zhihu.com/equation?tex=r%2Cs)使得![](https://www.zhihu.com/equation?tex=pr%2Bqs%3D1)，从而自同胚![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bpmatrix%7D++r+%26-q+%5C%5C++s+%26p+%5Cend%7Bpmatrix%7D)就会把曲线![](https://www.zhihu.com/equation?tex=%28p%2Cq%29)送到![](https://www.zhihu.com/equation?tex=%281%2C0%29).

从而在![](https://www.zhihu.com/equation?tex=%28S%5E1%5Ctimes+S%5E1%29%5Ctimes+%5B-1%2C1%5D)上整体做一个自同胚，就可以使得其中一边粘贴的参数从![](https://www.zhihu.com/equation?tex=%28p_1%2Cq_1%29)变成![](https://www.zhihu.com/equation?tex=%281%2C0%29)，因此在![](https://www.zhihu.com/equation?tex=%28S%5E1%5Ctimes+S%5E1%29%5Ctimes+%5B-1%2C1%5D)上按参数![](https://www.zhihu.com/equation?tex=%28p_1%2Cq_1%29%2C%28p_2%2Cq_2%29)粘贴两个实心环，可以在同胚意义下看成是在一个实心环上按新的参数![](https://www.zhihu.com/equation?tex=%28p%27%2Cq%27%29)粘贴上一个实心环，也即又得到了棱镜空间！




小k兴奋的喊出了这个发现，小m迅速补充道：没错，并且可以仔细计算出

![](https://www.zhihu.com/equation?tex=%5Cboxed%7B%28S%5E2%2C%28p_1%2Cq_1%29%2C%28p_2%2Cq_2%29%29%5Ccong++L%28p_1q_2%2Bp_2q_1%2Crp_2%2Bsq_2%29%2C%7D+%5C%5C)

其中![](https://www.zhihu.com/equation?tex=r%2Cs)为满足![](https://www.zhihu.com/equation?tex=rp_1-sq_1%3D1)的整数.

## 对环面结做手工

邱老师：多可爱的孩子们啊，我们现在来对![](https://www.zhihu.com/equation?tex=S%5E3)里的纽结做手工好不好. 既然我们一直在和环面打交道，就考虑一类生活在环面上的纽结吧！

我们前面提到了环面上的简单闭曲线都可以表示成![](https://www.zhihu.com/equation?tex=p%5Ccdot+m%2Bq%5Ccdot+l)，我们管这样的纽结叫做环面结，记作![](https://www.zhihu.com/equation?tex=T_%7Bq%2Cp%7D)，粗糙的讲就是沿着着小一点的经线![](https://www.zhihu.com/equation?tex=m)绕![](https://www.zhihu.com/equation?tex=p)圈，沿着长一点的经线![](https://www.zhihu.com/equation?tex=l)绕![](https://www.zhihu.com/equation?tex=q)圈.

![](https://pic2.zhimg.com/v2-79756de09014a8e21ed88c7a653bb39f_r.jpg)

现在想考考大家，对环面结![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)做![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bm%7D%7Bn%7D-)手工得到的三维流形是什么呢？会得到棱镜空间吗？




小m意识到，得首先搞清楚![](https://www.zhihu.com/equation?tex=S%5E3)挖掉![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)长什么样，他小心翼翼的剪掉![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)的管状邻域，发现长的怪里怪气，于是他索性再多剪掉些东西，因为![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)躺在![](https://www.zhihu.com/equation?tex=S%5E3)里标准的环面![](https://www.zhihu.com/equation?tex=T)上，所以![](https://www.zhihu.com/equation?tex=T)在内外两侧都界定了一个实心环，他于是把内外的实心环都剪掉一点，只剩下![](https://www.zhihu.com/equation?tex=T%5Ctimes+%5B-1%2C1%5D)再去掉![](https://www.zhihu.com/equation?tex=T%5Ctimes%5C%7B0%5C%7D)上的![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D).




不爱动手的小k看着小m最后剪掉的东西，下意识惊呼：可以再用一遍刚刚的技巧！

其他小朋友对这种b王投来不满的目光，在避免被投来的实心环余料砸死之前，小k解释道：

环面上的任何两条闭曲线都可以同胚的变过去，所以考虑把![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D%3D%28q%2Cp%29)变为![](https://www.zhihu.com/equation?tex=%280%2C1%29)的自同胚，延拓到整个![](https://www.zhihu.com/equation?tex=T%5Ctimes%5B-1%2C1%5D)上，那么去掉![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)可以同胚成![](https://www.zhihu.com/equation?tex=T%5Ctimes+%5B-1%2C1%5D)去掉![](https://www.zhihu.com/equation?tex=T%5Ctimes%5C%7B0%5C%7D)上的longitude![](https://www.zhihu.com/equation?tex=l).

![](https://picx.zhimg.com/v2-8408cac16135f5d7d063cb0667af3d91_r.jpg)

后者很容易看到就是![](https://www.zhihu.com/equation?tex=P%5Ctimes+S%5E1)，其中![](https://www.zhihu.com/equation?tex=P)是圆盘内部再去掉两个圆盘，也被称为pair of pants.

总结一下，![](https://www.zhihu.com/equation?tex=S%5E3)剪掉![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)的管状邻域可以看成三部分，

![](https://www.zhihu.com/equation?tex=%28%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1%29%5Ccup%5Cleft+%28T%5Ctimes+%5B-1%2C1%5D-%5Cnu+%28T_%7Bp%2Cq%7D%29%5Cright%29%5Ccup+%28S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2%29%2C+%5C%5C)

其中![](https://www.zhihu.com/equation?tex=%5Cpartial%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1%3DT%5Ctimes%5C%7B1%5C%7D)，![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cpartial+%5Cmathbb%7BD%7D%5E2%3DT%5Ctimes%5C%7B-1%5C%7D)，![](https://www.zhihu.com/equation?tex=%5Cnu%28T_%7Bp%2Cq%7D%29)表示![](https://www.zhihu.com/equation?tex=T_%7Bp%2Cq%7D)的管状邻域.

刚已经说了存在同胚把![](https://www.zhihu.com/equation?tex=T%5Ctimes+%5B-1%2C1%5D-%5Cnu+%28T_%7Bp%2Cq%7D%29)借助环面自同胚和![](https://www.zhihu.com/equation?tex=P%5Ctimes+S%5E1)等同起来，所以![](https://www.zhihu.com/equation?tex=S%5E3-%5Cnu%28T_%7Bp%2Cq%7D%29)相当于![](https://www.zhihu.com/equation?tex=P%5Ctimes+S%5E1)沿着两个环面边界粘上实心环，具体写下同胚的矩阵，容易计算出粘贴的参数分别是![](https://www.zhihu.com/equation?tex=%28p%2Cs%29)和![](https://www.zhihu.com/equation?tex=%28q%2Cr%29)，这里![](https://www.zhihu.com/equation?tex=r%2Cs)是满足![](https://www.zhihu.com/equation?tex=pr%2Bqs%3D1)的整数.




小m也恍然大悟：所以相当于环面结补空间![](https://www.zhihu.com/equation?tex=S%5E3-%5Cnu%28T_%7Bp%2Cq%7D%29)其实也是一个Seifert流形，正是

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3-%5Cnu%28T_%7Bp%2Cq%7D%29%3D%28%5Cmathbb%7BD%7D%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%29.%7D+%5C%5C)




说到这里，小朋友们也都豁然开朗，那现在再对![](https://www.zhihu.com/equation?tex=S%5E3-%5Cnu%28T_%7Bp%2Cq%7D%29)粘回去一个实心环![](https://www.zhihu.com/equation?tex=S%5E1%5Ctimes+%5Cmathbb%7BD%7D%5E2)，不就相当于在![](https://www.zhihu.com/equation?tex=%28%5Cmathbb%7BD%7D%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%29)基础上得到Seifert流形

![](https://www.zhihu.com/equation?tex=%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%28%3F%2C%3F%29%29%2C+%5C%5C)

其中第三组参数还需确定.




邱老师大悦：孩子们你们太棒了，完全正确，参数的计算留给大家手工课后思考，结论是

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3_%7B%5Cfrac%7Bm%7D%7Bn%7D%7D%28T_%7Bp%2Cq%7D%29%5Ccong+%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%28m-pqn%2Cn%29%29.%7D+%5C%5C)

右侧这个东西可能还不太直观，小朋友们能不能找出一些简单漂亮的特例出来？




小k说：我知道！如果![](https://www.zhihu.com/equation?tex=m%3D1)，那么可以发现![](https://www.zhihu.com/equation?tex=S%5E3_%7B%5Cfrac%7B1%7D%7Bn%7D%7D%28T_%7Bp.q%7D%29)具有和![](https://www.zhihu.com/equation?tex=S%5E3)完全一样的整系数同调群，也即是整同调球，此时右边恰好是Brieskorn同调球![](https://www.zhihu.com/equation?tex=%5CSigma%28p%2Cq%2C%7C1-pqn%7C%29)！

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3_%7B%5Cfrac%7B1%7D%7Bn%7D%7D%28T_%7Bp%2Cq%7D%29%5Ccong+%5CSigma%28p%2Cq%2C%7C1-pqn%7C%29.%7D+%5C%5C)

所以假如对右手三叶结，即环面结![](https://www.zhihu.com/equation?tex=T_%7B2%2C3%7D)做![](https://www.zhihu.com/equation?tex=1-)Dehn手术，就可以得到Poincare同调球![](https://www.zhihu.com/equation?tex=%5CSigma%282%2C3%2C5%29)！

![](https://pic2.zhimg.com/v2-a2a571957d2d0939e5fe4f46d00cf4f3_r.jpg)

小k对这个漂亮的结论十分喜欢，动手做了一个![](https://www.zhihu.com/equation?tex=%5CSigma%282%2C3%2C5%29)，并从书包里掏出一张![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BR%7D%5E4)想把这个美丽的玩具嵌入进去收藏起来，但他怎么做总有一些边边角角露出来，塞不进去，只好作罢.

> 你能告诉小k为什么![](https://www.zhihu.com/equation?tex=%5CSigma%282%2C3%2C5%29)不能嵌入![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BR%7D%5E4)吗？




小m说：邱老师您知晓，还可以考虑更特殊的情形，![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bm%7D%7Bn%7D%3Dpq)，也即![](https://www.zhihu.com/equation?tex=m%3Dpq%2Cn%3D1)，这时候我们有

![](https://www.zhihu.com/equation?tex=S%5E3_%7Bpq%7D%28T_%7Bp%2Cq%7D%29%3D%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%280%2C1%29%29%2C+%5C%5C)

很容易发现右侧相当于![](https://www.zhihu.com/equation?tex=P%5Ctimes+S%5E1)粘贴上![](https://www.zhihu.com/equation?tex=3)个实心环，回忆![](https://www.zhihu.com/equation?tex=P)是![](https://www.zhihu.com/equation?tex=S%5E2)去掉三个圆盘，也即圆盘去掉内部两个圆盘. 因此可以把![](https://www.zhihu.com/equation?tex=P%5Ctimes+S%5E1)看成是一个实心环![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1)去掉内部两个不相交的实心环，现在可以把按参数![](https://www.zhihu.com/equation?tex=%280%2C1%29)粘贴当作是沿着![](https://www.zhihu.com/equation?tex=%5Cpartial+%5Cmathbb%7BD%7D%5E2%5Ctimes+S%5E1)这个最外面的环面粘贴上去，假如内部不掏空两个实心环，那么就得到了![](https://www.zhihu.com/equation?tex=S%5E3)！

![](https://pic1.zhimg.com/v2-e579a41e0cd5a89515dfef8d64f7da84_r.jpg)

所以相当于![](https://www.zhihu.com/equation?tex=%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%280%2C1%29%29)可以看成是![](https://www.zhihu.com/equation?tex=S%5E3)去掉两个不相交的平凡实心环，再按参数![](https://www.zhihu.com/equation?tex=%28p%2Cs%29%2C%28q%2Cr%29)粘贴回去. 换言之就是![](https://www.zhihu.com/equation?tex=S%5E3)对两个不缠绕的平凡结做![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bp%7D%7Bs%7D)和![](https://www.zhihu.com/equation?tex=%5Cdfrac%7Bq%7D%7Br%7D-)Dehn手术，也即得到了![](https://www.zhihu.com/equation?tex=L%28p%2Cs%29%5C%23+L%28q%2Cr%29)！

综上有

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3_%7Bpq%7D%28T_%7Bpq%7D%29%3DL%28p%2Cs%29%5C%23L%28q%2Cr%29.%7D+%5C%5C)




邱老师十分满意：大家的注意力十分敏锐，其实![](https://www.zhihu.com/equation?tex=S%5E3_%7B%5Cfrac%7Bm%7D%7Bn%7D%7D%28T_%7Bp%2Cq%7D%29)也可以产生棱镜空间，事实上假如考虑![](https://www.zhihu.com/equation?tex=m%3Dpqn%5Cpm+1)，那么我们有

![](https://www.zhihu.com/equation?tex=S%5E3_%7B%5Cfrac%7Bm%7D%7Bn%7D%7D%28T_%7Bp%2Cq%7D%29%3DS%5E3_%7Bpq%5Cpm+%5Cfrac%7B1%7D%7B%7Bn%7D%7D%7D%28T_%7Bp%2Cq%7D%29%3D%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%281%2C%5Cpm+n%29%29%2C+%5C%5C)

Seifert流形满足两个容易证明的性质：

- .
- .

利用上面两个基本结果，可以得到

![](https://www.zhihu.com/equation?tex=%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cr%29%2C%281%2C%5Cpm+n%29%29%3D%28S%5E2%2C%28p%2Cs%29%2C%28q%2Cs%5Cpm+qu%29%29%2C+%5C%5C)

小朋友们如果还记得的话，我们在介绍Seifert流形的时候就提到了右侧恰好就是棱镜空间！利用小m的计算，我们实际上可以得到

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BS%5E3_%7Bpq%5Cpm+%5Cfrac%7B1%7D%7Bn%7D%7D%28T_%7Bp%2Cq%7D%29%5Ccong+L%28npq%5Cpm+1%2Cnq%5E2%29.%7D+%5C%5C)

之所以提到这个结果是因为地球上的数学家Kroheimer-Mrowka-Ozsvath-Szabo利用monopole Floer同调证明了：

> 如果存在有理数![](https://www.zhihu.com/equation?tex=r)使得![](https://www.zhihu.com/equation?tex=S%5E3_r%28K%29)和![](https://www.zhihu.com/equation?tex=S%5E3_r%28%5Cmathrm%7BO%7D%29)保定向同胚，则![](https://www.zhihu.com/equation?tex=K)同痕于平凡结![](https://www.zhihu.com/equation?tex=%5Cmathrm%7BO%7D).

特别的，对奇数![](https://www.zhihu.com/equation?tex=n)，我们有![](https://www.zhihu.com/equation?tex=S%5E3_%7B%5Cfrac%7B2%7D%7Bn%7D%7D%28%5Cmathrm%7BO%7D%29%3DL%282%2Cn%29%3DL%282%2C1%29%3D%5Cmathbb%7BR%7DP%5E3)，因此如果对某个纽结![](https://www.zhihu.com/equation?tex=K)做Dehn手术得到![](https://www.zhihu.com/equation?tex=%5Cmathbb%7BR%7DP%5E3)，那么![](https://www.zhihu.com/equation?tex=K)一定是平凡结.

但上面的讨论告诉我们对一般的棱镜空间并不对，比如我们有[2]

![](https://www.zhihu.com/equation?tex=S%5E3_%7B9%7D%28T_%7B2%2C5%7D%29%5Ccong+L%289%2C7%29%2C%5Cquad+S%5E3_%7B11%7D%28T_%7B2%2C5%7D%29%5Ccong+L%2811%2C4%29%2C+%5C%5C)

所以一般的棱镜空间可以由对![](https://www.zhihu.com/equation?tex=S%5E3)非平凡结做Dehn手术得到.




手工课下课铃声响起，小朋友们收拾好散落一地的三维流形，向邱先生致以雷鸣般忠诚的掌声.


---

# 有没有一个时间复杂度为O(phi^n) 的算法? EntropyIncreaser

**Author:** EntropyIncreaser  
**Bio:** 最终，当他们无法找到时，就亲自创造了它。  
**Avatar:** ![](https://pica.zhimg.com/v2-669810758f07e0840275eefa7a20ede9_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/95dfa54934a2d8e0bde528f78bf9eeaf  
**Published:** 2026.01.31 06:14:26  
**Updated:** 2026.01.31 06:18:30  
**Question:** https://www.zhihu.com/question/667068785  
**Question Created:** 2024.09.13 18:21:40  
**Question Updated:** 2024.09.13 18:24:58  
**Votes:** 64  
**Comments:** 7  
**Type:** answer  

我假设题主实际上的意思是![](https://www.zhihu.com/equation?tex=%5Cphi+%3D+%5Cfrac%7B%5Csqrt%7B5%7D%2B1%7D%7B2%7D), 那答案是肯定的: 这个复杂度在算法研究中确实自然出现过.

考虑这样一个问题: 给定一个![](https://www.zhihu.com/equation?tex=n)个顶点的无向图![](https://www.zhihu.com/equation?tex=G), 其中![](https://www.zhihu.com/equation?tex=n)是偶数, 我们想要计数![](https://www.zhihu.com/equation?tex=G)的完美匹配的数量.

我们考虑如下一个动态规划方法: 对于任何![](https://www.zhihu.com/equation?tex=S+%5Csubseteq+%5Bn%5D), 记![](https://www.zhihu.com/equation?tex=f%28S%29)是导出子图![](https://www.zhihu.com/equation?tex=G%5BS%5D)的完美匹配数. 那么这个函数可以通过简单的递推式计算出: 令![](https://www.zhihu.com/equation?tex=u)是![](https://www.zhihu.com/equation?tex=S)里编号最小的节点, 那么枚举它所匹配的那个点是谁, 即得

![](https://www.zhihu.com/equation?tex=f%28S%29+%3D+%5Csum_%7B%5Csubstack%7Bv%5Cin+S%5C%5C+%28u%2C+v%29%5Cin+G%7D%7D+f%28S+%5Csmallsetminus+%5C%7Bu%2Cv%5C%7D%29.%5C%5C)

一个重要的观察是: 这个递推式从全集![](https://www.zhihu.com/equation?tex=%5Bn%5D)开始的时候, 为了求出答案进行递归的过程中, 只会遍历很少的![](https://www.zhihu.com/equation?tex=S)!

**观察.**设![](https://www.zhihu.com/equation?tex=S)是一个被递归到的集合. 其最小的数为![](https://www.zhihu.com/equation?tex=k%2B1), 那么![](https://www.zhihu.com/equation?tex=%7CS%7C%5Cgeq+n-2k).

证明. 这是因为如果最小的数是![](https://www.zhihu.com/equation?tex=k%2B1), 那最多已经匹配了![](https://www.zhihu.com/equation?tex=k)条边, 所以剩下的集合大小至少是![](https://www.zhihu.com/equation?tex=n-2k).![](https://www.zhihu.com/equation?tex=%5Csquare)

所以, 会出现的![](https://www.zhihu.com/equation?tex=S)被如下组合数控制:

![](https://www.zhihu.com/equation?tex=%5Csum_%7B0%5Cleq+k+%3C+n%7D+%5Csum_%7Bj%5Cleq+n-2k-1%7D+%5Cbinom%7Bn-k-1%7D%7Bj%7D.%5C%5C)

**习题 (留给读者):**证明这个求和的大小是![](https://www.zhihu.com/equation?tex=%5CTheta%28%5Cphi%5En%29).

**结论.**对![](https://www.zhihu.com/equation?tex=f)进行递推计算完美匹配数的算法, 复杂度是![](https://www.zhihu.com/equation?tex=O%28%5Cphi%5En%29).

上述分析首先由 Koivisto[1](2009) 注意到. 不过它已经不是解决这个问题的最优算法了: Björklund[2](2012) 后来提出了一个![](https://www.zhihu.com/equation?tex=O%5E%2A%282%5E%7Bn%2F2%7D%29)复杂度的算法.


---

# 高三学生看小蓝本是否能使数学考到130+？ Sherlock

**Author:** Sherlock  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-b1e7938640565c40069c971ba795dde3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/8462c76a8720e650ed9ade44d1a5387d  
**Published:** 2019.07.31 23:33:10  
**Updated:** 2019.07.31 23:33:10  
**Question:** https://www.zhihu.com/question/265196050  
**Question Created:** 2018.01.06 22:14:55  
**Question Updated:** 2018.01.06 22:14:55  
**Votes:** 54  
**Comments:** 2  
**Type:** answer  

![](https://pica.zhimg.com/v2-1896be0d3a5bf871356e0dcac54915b8_r.jpg?source=2c26e567)

先放图

竞赛生

很负责任的说高三看小蓝本对高考数学没有任何帮助，理由如下

小蓝本的难度远远超出高考，并且小蓝本里面的方法和内容大多数都比较偏比较难，都是竞赛的方法跟高考完全不沾边。数竞跟数学完全是两个东西，小蓝本里面的难度是要有竞赛基础的人才能去适应的。至少要有二试的水平吧（我觉得）。不然连答案都看不懂。没必要。

至于普高的数学用什么教辅合适呢。如果只是要130+的话个人认为只需要重难点就可以了。好好做精这一本130+问题不大。如果是想要冲击140+的话呢个人推荐高妙。数学的高妙是不错的选择，里面是专门针对高考难题巧解的。如果基础好可以考虑入手。高妙里面也有一个用竞赛方法解高考题。它把一些竞赛里用到的思想和方法放到高考里让本来很难解的高考题一下子就解完了。小蓝本是专门为数竞设计的，如果不考虑搞竞赛就不用看了，因为就算看答案，也很可能会看的一头雾水，啥都看不懂（一个不走竞赛的平时数学比较好的同学的亲身体验）。如果基础一般高妙也别了因为高妙是针对压轴。基础不好就可以买重难点补补基础，毕竟150的卷子70%都是基础。

大概就那么多，就先这样吧。


---

# 如何评价上海 2026 春考数学卷？难度如何？ fira

**Author:** fira  
**Bio:** 心  
**Avatar:** ![](https://picx.zhimg.com/v2-9661d52f8c9d9f41b434a78cedd34f6f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ec0ebf60e7f8193fa1bc437922fbd809  
**Published:** 2026.01.03 21:59:22  
**Updated:** 2026.01.04 22:08:31  
**Question:** https://www.zhihu.com/question/1990821203158536635  
**Question Created:** 2026.01.03 16:26:02  
**Question Updated:** 2026.01.03 18:17:47  
**Votes:** 1  
**Comments:** 2  
**Type:** answer  

参与了考试。

10 错了。d取原点。a 取0，1点。作一条向下的直线，取正半轴。全部代数，二次函数扔给calc。倾斜角是150，不是120。尽管后者和60更相关。

12，连接水面中点，和水壶瓶口。求其倾斜角。直观想象。对了。

16 d. a：想象两个函数。两个都过原点。第一个，在左侧负一万开始，下降上升来一个全局最小值，在左侧准备突破原点时直线上升，右侧飞到天上指数一样。第二个，在左侧类似对数函数，有一条负一的渐进线，右侧反正比第一个小，然后坠机来个全局最小。两者都有全局最小，上部分交集是一个对数函数连一个指数函数，取不到最小，只能无限接近。考试时选d，想到了反例构造方法即交集中取不到最小，路上构造出来。

立体几何。第一问由图投影 sqrt 2 开头。不严谨。没有坐标。可能不得全分。答题纸上有不用尺子画的图。

三角函数，换元观察图像。不严谨，写了由图。答案对。

20 圆锥曲线，就拿第一问。第二看不懂，图都画不出，写了个联立 verta 骗分。有m，还有斜率k。难道k与m无关。还是要用m表示。忘记了。

21 函数第一取-1 0 反例。第二没啥步骤，根本不明白，纯看第三问提示。第三必要性没时间写，想出来也不严谨，要用什么趋近之类的文字描述，不知道界有何意义。写了估计有一半分，就是取那个不对称的点，不管高了还是低了，右侧严增必连续？在左右两边趋近必有一矛盾

时间不够，无论语文还是数学。后面很潦草，前面用心。

一定要走春考。大专也填了，虽然不大可能。年级第一差不多达到shizuku ruru的母校，不过他不会填，要去985，春考没有。我自己很笨，可能去一本二本，上nanami。

春考前一周看了 fight club。春考前一天在看cyannyan直播，vibe coding项目。虽然是很普通的。

受到lcmenci影响，我不要上学。以及某辍学创业基金。以及就业率，经济环境。我要进攻。攻！

Upd 2026 01.04

补充 zhijun 对数学的感觉。难。前面不知道他如何发挥。反面比我多对一整问，圆锥第二。fira太菜了。xiaojiong说填选扣25正常？idk，可能是说均分，那没有意义的。

英语，畅达流利！有话可说，学校下学期体育活动课加项目，国际象棋，风筝，野球，还有一个忘了。推荐哪个，最不推荐哪个，为什么。zhijun 亦觉之易。

upd 真正的目的是说，16，函数可以不连续。而且可以常数，不要求唯一最小值。那更简明的构造。把x轴描一遍，负的红色，正的蓝色。0算正数。（js中0等于+0,不等于-0？-1/inf就会变成-0哦）再画一个指数函数，随意，就2 sup x 好了，负的蓝色，正的红色。完工！


---

# 如何评价上海 2026 春考数学卷？难度如何？ tojq

**Author:** tojq  
**Bio:**   
**Avatar:** ![](https://pica.zhimg.com/v2-92edd085e21673b9e290faebd1cecf5f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/97000b98240e530ad9c040ed31cbfba0  
**Published:** 2026.01.03 20:29:51  
**Updated:** 2026.01.10 12:51:59  
**Question:** https://www.zhihu.com/question/1990821203158536635  
**Question Created:** 2026.01.03 16:26:02  
**Question Updated:** 2026.01.03 18:17:47  
**Votes:** 94  
**Comments:** 8  
**Type:** answer  

利益相关：2026届上海高考生。

笔者亲身参与了本场考试，总体感觉**本次考试难度相较于25春秋考有明显提升**。这是由于虽然1-9、13-14、17这些基础题，以及12、16、20、21这些压轴题难度较为平稳，但10、11、15、18、19这些中档题在创新性、复杂性、难度上均较往年显著提升。由于春考往往是秋考的风向标，倘若上海市教育考试院的命题专家继续激进下去，我们可能要在26秋考见证22年新高考Ⅰ卷的翻版了。

在风格上，25春考的套路题消失了，中档题和压轴题再次回归了上海的风格，没有庞大的计算量，只是**翻译条件很麻烦，解题不知从何下手罢了**。

下面是笔者对本试卷较难题的回忆与个人解答，**已经于1月10日完善。**

第10题
![](https://www.zhihu.com/equation?tex=%E5%9C%A8%5Ctriangle+ABC%E4%B8%AD%EF%BC%8CD%E3%80%81E%E6%98%AF%E8%BE%B9BC%E4%B8%8A%E7%9A%84%E7%82%B9%EF%BC%8C%E6%BB%A1%E8%B6%B3%5Cvec%7BBD%7D%3D%5Cvec%7BDE%7D%3D%5Cvec%7BEC%7D%EF%BC%8C%5Cvert+%5Cvec%7BAD%7D%5Cvert+%3D1%EF%BC%8C%E4%B8%94%5Cvec%7BAD%7D%2C%5Cvec%7BAE%7D%E7%9A%84%E5%A4%B9%E8%A7%92%E4%B8%BA%5Cfrac%7B%5Cpi%7D%7B3%7D%EF%BC%8C%E5%88%99%5Cvec%7BAB%7D%C2%B7%5Cvec%7BAC%7D%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E6%98%AF)

本题的图形较为对称，这使很多同学在看见本题时出于本题非压轴题，想要快速过掉时，都会直接猜测对称情况。

诚然，各种序号靠前的均值不等式题往往都在对称时取等，过往很多三角函数等板块的应用题也在对称时取等，但非常遗憾，**本题所求的最大值并非在对称时取到，**这就是命题人阴险的地方。
不妨设![](https://www.zhihu.com/equation?tex=%5Cvert+%5Cvec%7BAE%7D%5Cvert+%3Dx)，则在![](https://www.zhihu.com/equation?tex=%5Ctriangle+ADE)中，由余弦定理可得![](https://www.zhihu.com/equation?tex=%5Cvert+%5Cvec%7BDE%7D%5Cvert+%3D%5Csqrt%7Bx%5E2-x%2B1%7D)
由于![](https://www.zhihu.com/equation?tex=%5Cvert+%5Cvec%7BAD%7D%5Cvert+%2C%5Cvert+%5Cvec%7BAE%7D%5Cvert+%2C%3C%5Cvec%7BAD%7D%2C%5Cvec%7BAE%7D%3E)都有，因此可直接求出![](https://www.zhihu.com/equation?tex=%5Cvec%7BAD%7D%C2%B7%5Cvec%7BAE%7D%3D%5Cfrac%7Bx%7D%7B2%7D)
接下来求![](https://www.zhihu.com/equation?tex=%5Cvec%7BAB%7D%C2%B7%5Cvec%7BAC%7D)，设![](https://www.zhihu.com/equation?tex=DE)的中点为![](https://www.zhihu.com/equation?tex=M)，采用**极化恒等式**进行变形：

又因为![](https://www.zhihu.com/equation?tex=%5Cvec%7BAD%7D%C2%B7%5Cvec%7BAE%7D%3D%5Cvec%7BAM%7D%5E2-%5Cfrac%7B1%7D%7B4%7D%5Cvec%7BDE%7D%5E2)，故![](https://www.zhihu.com/equation?tex=%5Cvec%7BAB%7D%C2%B7%5Cvec%7BAC%7D%3D%5Cvec%7BAD%7D%C2%B7%5Cvec%7BAE%7D-2%5Cvec%7BDE%7D%5E2)
代入数据，可得![](https://www.zhihu.com/equation?tex=%5Cvec%7BAB%7D%C2%B7%5Cvec%7BAC%7D%3D%5Cfrac%7Bx%7D%7B2%7D-2%28x%5E2-x%2B1%29%3D-2x%5E2%2B%5Cfrac%7B5%7D%7B2%7Dx-2)
这是一个开口向下的二次函数，于是其在![](https://www.zhihu.com/equation?tex=x%3D%5Cfrac%7B5%7D%7B8%7D)时取最大值![](https://www.zhihu.com/equation?tex=-%5Cfrac%7B39%7D%7B32%7D)
这个最大值点为正，符合题意，因此![](https://www.zhihu.com/equation?tex=-%5Cfrac%7B39%7D%7B32%7D)就是我们想要的答案
当然，也可以直接利用中线长公式直接求![](https://www.zhihu.com/equation?tex=%5Cvert+%5Cvec%7BAM%7D%5Cvert)，这样也能算出正确答案，若时间多余可用来验算。
***如果按对称求，答案是**![](https://www.zhihu.com/equation?tex=-%5Cfrac%7B3%7D%7B2%7D)**，明显比正确答案要小。**

## 第11题


![](https://www.zhihu.com/equation?tex=%E5%B7%B2%E7%9F%A5%E6%A4%AD%E5%9C%86C_1%3A%5Cfrac%7Bx%5E2%7D%7Ba%5E2%7D%2By%5E2%3D1%28a%3E1%29%EF%BC%8CC_2%3A%5Cfrac%7By%5E2%7D%7Bb%5E2%2B2%7D%2B%5Cfrac%7Bx%5E2%7D%7Bb%5E2%7D%3D1%EF%BC%8C%E8%8B%A5C_1%E4%B8%8EC_2%E7%9A%84%E5%9B%9B%E4%B8%AA%E4%BA%A4%E7%82%B9%E5%92%8CC_1%E7%9A%84%E4%B8%A4%E4%B8%AA%E7%84%A6%E7%82%B9%E4%B8%8EC_2%E7%9A%84%E4%B8%A4%E4%B8%AA%E7%84%A6%E7%82%B9%E5%9D%87%E5%85%B1%E5%9C%86%EF%BC%8C%E5%88%99b%5E2%E7%9A%84%E5%80%BC%E6%98%AF)
这题总体比第10题简单些，就是答案算出来有点令人难以相信。

由于四个焦点共圆，可以得出两个椭圆焦距相等，从而![](https://www.zhihu.com/equation?tex=a%3D%5Csqrt%7B3%7D)，![](https://www.zhihu.com/equation?tex=C_1%3A%5Cfrac%7Bx%5E2%7D%7B3%7D%2By%5E2%3D1)

接下来把![](https://www.zhihu.com/equation?tex=C_2)改写为![](https://www.zhihu.com/equation?tex=y%5E2%2B%281%2B%5Cfrac%7B2%7D%7Bb%5E2%7D%29x%5E2%3Db%5E2%2B2)，与![](https://www.zhihu.com/equation?tex=C_1)联立可得![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B2%7D%7B3%7D%2B%5Cfrac%7B2%7D%7Bb%5E2%7D%29x%5E2%3Db%5E2%2B1)

从而![](https://www.zhihu.com/equation?tex=x%5E2%3D%5Cfrac%7B3b%5E2%28b%5E2%2B1%29%7D%7B2b%5E2%2B6%7D)，代回解得![](https://www.zhihu.com/equation?tex=y%5E2%3D1-%5Cfrac%7Bb%5E2%28b%5E2%2B1%29%7D%7B2b%5E2%2B6%7D%3D%5Cfrac%7B-b%5E4%2Bb%5E2%2B6%7D%7B2b%5E2%2B6%7D)

因此![](https://www.zhihu.com/equation?tex=2%3Dx%5E2%2By%5E2%3D%5Cfrac%7Bb%5E4%2B2b%5E2%2B3%7D%7Bb%5E2%2B3%7D)，即可解得![](https://www.zhihu.com/equation?tex=b%5E2%3D%5Csqrt%7B3%7D)




## 第12题


![](https://www.zhihu.com/equation?tex=%E5%8F%AF%E4%BB%A5%E5%B0%86%E6%B2%B9%E5%A3%B6%E6%8A%BD%E8%B1%A1%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%9C%86%E6%9F%B1%EF%BC%8C%E6%B2%B9%E5%A3%B6%E5%98%B4%E6%8A%BD%E8%B1%A1%E4%B8%BA%E4%B8%80%E6%9D%A1%E4%B8%8D%E8%AE%A1%E4%BD%93%E7%A7%AF%E7%9A%84%E7%BA%BF%E6%AE%B5%EF%BC%8C%E6%B2%B9%E5%A3%B6%E7%9A%84%E5%B0%BA%E5%AF%B8%E5%A6%82%E5%9B%BE%E3%80%82%E4%B8%BA%E4%BA%86%E5%B0%86%E6%B2%B9%E5%A3%B6%E4%B8%AD%E7%9A%84%E6%B2%B9%E5%80%92%E5%87%BA%EF%BC%8C%E8%87%B3%E5%B0%91%E9%9C%80%E8%A6%81%E5%B0%86%E6%B2%B9%E5%A3%B6%E5%90%91%E5%A3%B6%E5%98%B4%E6%96%B9%E5%90%91%E5%80%BE%E6%96%9C%5C_%5C_%5C_%5C_%E5%BA%A6)

![](https://pic1.zhimg.com/50/v2-070f74e842c4f04cd1fb2a7e1129d72a_720w.jpg?source=2c26e567)

本题的核心在于理解什么时候油可以从油壶里倒出来。初中物理和常识告诉我们，只需倾倒使得壶身中液面的延长线恰好经过油壶嘴的顶部，就可以算出临界情况。

由于倾倒时油壶中液面中点高度始终不变，因此只需连接液面中点和油壶嘴，再建立平面直角坐标系计算即可得出最终答案![](https://www.zhihu.com/equation?tex=14.20)度。
本题让笔者怀疑嘉定区教研员是否参与了命题，其在自己区一模中竟把数学建模放在第21题。




## 第15题


![](https://www.zhihu.com/equation?tex=%E8%AE%BE%E5%B9%B3%E9%9D%A2%E5%86%85%E7%9A%84%E7%82%B9%E9%9B%86%5COmega%E6%BB%A1%E8%B6%B3%EF%BC%9A%E5%AF%B9%E4%BB%BB%E6%84%8F%E7%9A%84P%E2%88%88%5COmega%EF%BC%8C%E8%BF%87%E7%82%B9P%E4%BD%9Cl_P%E2%8A%A5x%E8%BD%B4%EF%BC%8Cl_P%5Ccap+%5COmega%E9%83%BD%E6%98%AF%E7%BA%BF%E6%AE%B5.%E5%AF%B9%5COmega+%E5%86%85%E7%9A%84%E6%89%80%E6%9C%89%E7%82%B9P%EF%BC%8C%E5%B0%86%E7%BA%BF%E6%AE%B5l_P%E6%B2%BF%E7%9B%B4%E7%BA%BFl_P%E5%B9%B3%E7%A7%BB%EF%BC%8C%E4%BD%BF%E5%BE%97%E7%BA%BF%E6%AE%B5l_P%E7%9A%84%E4%B8%AD%E7%82%B9%E4%BD%8D%E4%BA%8Ex%E8%BD%B4%E4%B8%8A%EF%BC%8C%E7%A7%B0%E4%B8%BA%E5%AF%B9%5COmega+%E5%AF%B9%E7%A7%B0%E5%8C%96%E5%A4%84%E7%90%86%E3%80%82%E5%B7%B2%E7%9F%A5%5COmega%E6%98%AF%E7%94%B1y%3D-x%5E2%2Bx%2B1%EF%BC%8Cy%3D-x%5E2-x%EF%BC%8Cx%3D0%E5%92%8Cx%3D1%E5%9B%B4%E6%88%90%E7%9A%84%E5%B0%81%E9%97%AD%E5%8C%BA%E5%9F%9F%EF%BC%8C%E5%88%99%E5%B0%86%5COmega%E5%AF%B9%E7%A7%B0%E5%8C%96%E5%A4%84%E7%90%86%E6%89%80%E5%BE%97%E7%9A%84%E5%9B%BE%E5%BD%A2%E5%A4%A7%E8%87%B4%E6%98%AF)

![](https://picx.zhimg.com/v2-5c8047d9c8256b68d558b4b5e3ec2533_r.jpg?source=2c26e567)

本题的背景非常新颖，但做起来不难，只需将两个抛物线方程相减，得到![](https://www.zhihu.com/equation?tex=2x%2B1)即可知道区域的边缘应当是斜直线，故选![](https://www.zhihu.com/equation?tex=A)




## 第16题

![](https://www.zhihu.com/equation?tex=%E5%AF%B9%E4%BA%8E%E5%AE%9A%E4%B9%89%E5%9C%A8D%E4%B8%8A%E7%9A%84%E5%87%BD%E6%95%B0f%28x%29%EF%BC%8C%E8%AE%BEA_f%3D%5C%7B%28x%2Cy%29%5Cvert+y%E2%89%A5f%28x%29%EF%BC%8Cx%E2%88%88D%5C%7D%EF%BC%8C%E5%AF%B9%E4%BA%8E%E7%82%B9%E9%9B%86M%EF%BC%8C%E8%8B%A5%E5%AD%98%E5%9C%A8%28x_0%2Cy_0%29%E2%88%88M%EF%BC%8C%E4%BD%BF%E5%BE%97%E4%BB%BB%E5%8F%96%28x%2Cy%29%E2%88%88M%EF%BC%8C%E6%80%BB%E6%9C%89y%E2%89%A5y_0%EF%BC%8C%E5%88%99%E7%A7%B0%28x_0%2Cy_0%29%E4%B8%BAM%E7%9A%84%E2%80%9C%E6%9C%80%E4%BD%8E%E7%82%B9%E2%80%9D.%E5%AF%B9%E4%BA%8E%E5%AE%9A%E4%B9%89%E5%9C%A8D%E4%B8%8A%E7%9A%84%E5%87%BD%E6%95%B0f%28x%29%E5%92%8Cg%28x%29%EF%BC%8C%E4%B8%8B%E5%88%97%E8%AF%B4%E6%B3%95%E4%B8%AD%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%98%AF%5C%5CA.%E8%8B%A5f%28x%29%E5%92%8Cg%28x%29%E9%83%BD%E6%9C%89%E6%9C%80%E5%B0%8F%E5%80%BC%EF%BC%8C%E5%88%99A_f%5Ccap+A_g%E6%9C%89%E2%80%9C%E6%9C%80%E4%BD%8E%E7%82%B9%E2%80%9D%5C%5CB.%E8%8B%A5A_f%5Ccap+A_g%E6%9C%89%E2%80%9C%E6%9C%80%E4%BD%8E%E7%82%B9%E2%80%9D%EF%BC%8C%E5%88%99f%28x%29%E5%92%8Cg%28x%29%E9%83%BD%E6%9C%89%E6%9C%80%E5%B0%8F%E5%80%BC%5C%5CC.%E8%8B%A5f%28x%29%E6%88%96g%28x%29%E6%9C%89%E6%9C%80%E5%B0%8F%E5%80%BC%EF%BC%8C%E5%88%99A_f%5Ccup+A_g%E6%9C%89%E2%80%9C%E6%9C%80%E4%BD%8E%E7%82%B9%E2%80%9D%5C%5CD.%E8%8B%A5A_f%5Ccup+A_g%E6%9C%89%E2%80%9C%E6%9C%80%E4%BD%8E%E7%82%B9%E2%80%9D%EF%BC%8C%E5%88%99f%28x%29%E6%88%96g%28x%29%E6%9C%89%E6%9C%80%E5%B0%8F%E5%80%BC)

这道题是一种较新的抽象函数考法，新定义+四个命题判断真伪。

本题的B选项和C选项是相对容易排除的。对于B选项，只需取![](https://www.zhihu.com/equation?tex=f%28x%29%3D2%5Ex)，![](https://www.zhihu.com/equation?tex=g%28x%29%3D2%5E%7B-x%7D)作为反例即可，此时![](https://www.zhihu.com/equation?tex=A_f%5Ccap+A_g)有最低点![](https://www.zhihu.com/equation?tex=%280%2C1%29)，但![](https://www.zhihu.com/equation?tex=f%28x%29%2Cg%28x%29)均无最小值。

对于C选项，只需取![](https://www.zhihu.com/equation?tex=f%28x%29%3D2%5Ex%2Cg%28x%29%3D1)即可，此时![](https://www.zhihu.com/equation?tex=g%28x%29)有最小值，但![](https://www.zhihu.com/equation?tex=A_f%5Ccup+A_g)每月最低点。

比较难判断的是A和D，笔者考场上也选错了。

事实上，A选项的反例构造可以考虑**破坏连续性。**

**所谓“破坏连续性”，值得是在原本连续性良好的函数上对部分自变量对应的函数值稍作调整，使得函数不再连续，且调整后的点不再满足函数的整体性质，进而推出反例。**

由于A选项考虑的是![](https://www.zhihu.com/equation?tex=A_f%5Ccap+A_g)，故对于任意一处自变量![](https://www.zhihu.com/equation?tex=x_0)，属于![](https://www.zhihu.com/equation?tex=A_f%5Ccap+A_g)的都是纵坐标不小于![](https://www.zhihu.com/equation?tex=%5Cmax+%5C%7Bf%28x_0%29%2Cg%28x_0%29%5C%7D)的点。

因此，我们可以考虑构造两个本无最小值的函数，各自在其中某处挖去一个点，并调整该点的纵坐标使得该处为函数的最小值，并通过错开挖去的点的横坐标，保证另一个函数能在此处“兜底”。

譬如，考虑函数![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cbegin%7Bcases%7D2%5Ex%2Cx%5Cne+1%5C%5C+0%EF%BC%8Cx%3D1%5Cend%7Bcases%7D)，![](https://www.zhihu.com/equation?tex=g%28x%29%3D%5Cbegin%7Bcases%7D3%5Ex%2Cx%5Cne+2%5C%5C+0%EF%BC%8Cx%3D2%5Cend%7Bcases%7D)，它们各自均有最小值![](https://www.zhihu.com/equation?tex=0)，且都不连续，但双方各自在对方的间断点处连续，从而确保![](https://www.zhihu.com/equation?tex=A_f%5Ccap+A_g)不会因为挖点而受到影响，最终得出的![](https://www.zhihu.com/equation?tex=A_f%5Ccap+A_g)满足指数函数的性质，不具有最低点，于是A选项错误。

最后给出D选项的证明。

设最低点为![](https://www.zhihu.com/equation?tex=%28x_0%2Cy_0%29%E2%88%88A_f+%5Ccup+A_g)，则有![](https://www.zhihu.com/equation?tex=%28x_0%2Cy_0%29%E2%88%88A_f)或![](https://www.zhihu.com/equation?tex=%28x_0%2Cy_0%29%E2%88%88A_g)，从而![](https://www.zhihu.com/equation?tex=f%28x%29%E2%89%A5y_0)或![](https://www.zhihu.com/equation?tex=g%28x%29%E2%89%A5y_0)，即![](https://www.zhihu.com/equation?tex=y_0)是![](https://www.zhihu.com/equation?tex=f%28x%29)或![](https://www.zhihu.com/equation?tex=g%28x%29)的最小值。

本题这种三个反例+一个证明的考法秋考说不定还会在选择压轴出现，相比于一个反例+三个证明，这种考法显然更难一些。



## 第18题


![](https://www.zhihu.com/equation?tex=%E5%9C%A8%E6%AD%A3%E5%9B%9B%E6%A3%B1%E5%8F%B0ABCD-A_1B_1C_1D_1%E4%B8%AD%EF%BC%8CAB%3D4%EF%BC%8CA_1B_1%3D2.%5C%5C%281%29%E8%8B%A5AA_1%3D2%EF%BC%8C%E6%B1%82AA_1%E4%B8%8E%E5%B9%B3%E9%9D%A2ABCD%E6%89%80%E6%88%90%E7%9A%84%E8%A7%92%EF%BC%9B%5C%5C%282%29%E8%AF%81%E6%98%8EAA_1%2F%2F%E5%B9%B3%E9%9D%A2BC_1D%EF%BC%8C%E5%B9%B6%E6%B1%82%E5%BD%93%E6%AD%A3%E5%9B%9B%E6%A3%B1%E5%8F%B0%E7%9A%84%E9%AB%98%E4%B8%BA3%E6%97%B6%EF%BC%8C%E5%9B%9B%E9%9D%A2%E4%BD%93A_1-BC_1D%E7%9A%84%E4%BD%93%E7%A7%AF.)

由于课本上并未给出棱台的可用几何性质，因此本题一切几何证明过程此处均略去。

第一问的答案是![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpi%7D%7B4%7D)

第二问可利用首先证明的平行结论进行四面体的转化，最终得到体积为![](https://www.zhihu.com/equation?tex=8)，当然直接建系算也没问题，只是略微费点时间。

## 第19题


![](https://www.zhihu.com/equation?tex=%E5%B7%B2%E7%9F%A5f%28x%29%3D%5Csin+%28%5Comega+x%2B%5Cvarphi%29%EF%BC%8C%E5%85%B6%E4%B8%AD%5Comega%3E0%EF%BC%8C0%3C%5Cvarphi%3C%5Cpi.%5C%5C%281%29%E5%BD%93%5Comega+%3D2%EF%BC%8Cf%28%5Cfrac%7B%5Cpi%7D%7B12%7D%29%3D1%E6%97%B6%EF%BC%8C%E6%B1%82f%28x%29%E5%9C%A8x%3D0%E5%A4%84%E7%9A%84%E5%88%87%E7%BA%BF%E6%96%B9%E7%A8%8B%EF%BC%9B%5C%5C%282%29%E5%BD%93f%28x%29%E7%9A%84%E6%9C%80%E5%B0%8F%E6%AD%A3%E5%91%A8%E6%9C%9F%E4%B8%BA3%5Cpi%EF%BC%8C%E4%B8%94f%28x%29%3D%5Cfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D%E5%9C%A8%5B0%2C2026%5Cpi%29%E4%B8%8A%E6%81%B0%E6%9C%891351%E4%B8%AA%E8%A7%A3%E6%97%B6%EF%BC%8C%E6%B1%82%5Cvarphi+%E7%9A%84%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4.)

第一问，代入![](https://www.zhihu.com/equation?tex=%5Comega%3D2)，可得![](https://www.zhihu.com/equation?tex=f%28%5Cfrac%7B%5Cpi%7D%7B6%7D%2B%5Cvarphi%29%3D1)，又![](https://www.zhihu.com/equation?tex=0%3C%5Cvarphi%3C%5Cpi)，故![](https://www.zhihu.com/equation?tex=%5Cvarphi%3D%5Cfrac%7B%5Cpi%7D%7B3%7D)
因此![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Csin+%282x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29)，求导得![](https://www.zhihu.com/equation?tex=f%27%28x%29%3D2%5Ccos%282x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29)
由于![](https://www.zhihu.com/equation?tex=f%280%29%3D%5Cfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D)，![](https://www.zhihu.com/equation?tex=f%27%280%29%3D1)，故切线方程为![](https://www.zhihu.com/equation?tex=y%3Dx%2B%5Cfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D)

第二问相较于往常的19题难度比较大。
首先根据最小正周期，求出![](https://www.zhihu.com/equation?tex=%5Comega%3D%5Cfrac%7B2%7D%7B3%7D)，进而![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Csin+%28%5Cfrac%7B2%7D%7B3%7Dx%2B%5Cvarphi%29)
当![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D)时，![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%7D%7B3%7Dx%2B%5Cvarphi+%3D2k%5Cpi+%2B%5Cfrac%7B%5Cpi%7D%7B4%7D)或![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%7D%7B3%7Dx%2B%5Cvarphi+%3D2k%5Cpi+%2B%5Cfrac%7B3%5Cpi%7D%7B4%7D)，![](https://www.zhihu.com/equation?tex=k%E2%88%88%5Cmathbb+Z)
从而![](https://www.zhihu.com/equation?tex=x%3D3k%5Cpi+%2B%5Cfrac%7B3%5Cpi%7D%7B8%7D-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)或![](https://www.zhihu.com/equation?tex=x%3D3k%5Cpi+%2B%5Cfrac%7B9%5Cpi%7D%7B8%7D-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)，![](https://www.zhihu.com/equation?tex=k%E2%88%88%5Cmathbb+Z)
接下来需要根据![](https://www.zhihu.com/equation?tex=%5Cvarphi)的取值进行分类讨论。
**第一种情况**
当![](https://www.zhihu.com/equation?tex=0%3C%5Cvarphi%E2%89%A4%5Cfrac%7B%5Cpi%7D%7B4%7D)时，![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D)在![](https://www.zhihu.com/equation?tex=%5B0%2C2026%5Cpi%29)上的第一个解是![](https://www.zhihu.com/equation?tex=x%3D%5Cfrac%7B3%5Cpi%7D%7B8%7D-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)
从而，第![](https://www.zhihu.com/equation?tex=1351)个解是![](https://www.zhihu.com/equation?tex=x%3D2025%5Cfrac%7B3%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)，它显然小于![](https://www.zhihu.com/equation?tex=2026%5Cpi)
而下一个解是![](https://www.zhihu.com/equation?tex=x%3D2026%5Cfrac%7B1%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)，它必须![](https://www.zhihu.com/equation?tex=%E2%89%A52026%5Cpi)，解得![](https://www.zhihu.com/equation?tex=%5Cvarphi%E2%89%A4%5Cfrac%7B%5Cpi%7D%7B12%7D)
故此种情况解得![](https://www.zhihu.com/equation?tex=0%3C%5Cvarphi%E2%89%A4%5Cfrac%7B%5Cpi%7D%7B12%7D)
**第二种情况**
**当**![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpi%7D%7B4%7D%3C%5Cvarphi%E2%89%A4%5Cfrac%7B3%5Cpi%7D%7B4%7D)时，![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D)在![](https://www.zhihu.com/equation?tex=%5B0%2C2026%5Cpi%29)上的第一个解是![](https://www.zhihu.com/equation?tex=x%3D%5Cfrac%7B9%5Cpi%7D%7B8%7D-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)
从而，第![](https://www.zhihu.com/equation?tex=1351)个解是![](https://www.zhihu.com/equation?tex=x%3D2026%5Cfrac%7B1%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)，它显然小于![](https://www.zhihu.com/equation?tex=2026%5Cpi)
而下一个解是![](https://www.zhihu.com/equation?tex=x%3D2028%5Cfrac%7B3%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)，它必须![](https://www.zhihu.com/equation?tex=%E2%89%A52026%5Cpi)，解得![](https://www.zhihu.com/equation?tex=%5Cvarphi%E2%89%A4%5Cfrac%7B19%7D%7B12%7D%5Cpi)
故此种情况解得![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpi%7D%7B4%7D%3C%5Cvarphi%E2%89%A4%5Cfrac%7B3%5Cpi%7D%7B4%7D)
第三种情况
当![](https://www.zhihu.com/equation?tex=%5Cfrac%7B3%5Cpi%7D%7B4%7D%3C%5Cvarphi%3C%5Cpi)时，![](https://www.zhihu.com/equation?tex=f%28x%29%3D%5Cfrac%7B%5Csqrt%7B2%7D%7D%7B2%7D)在![](https://www.zhihu.com/equation?tex=%5B0%2C2026%5Cpi%29)上的第一个解是![](https://www.zhihu.com/equation?tex=x%3D3%5Cfrac%7B3%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)
从而，第![](https://www.zhihu.com/equation?tex=1351)个解是![](https://www.zhihu.com/equation?tex=x%3D2028%5Cfrac%7B3%7D%7B8%7D%5Cpi-%5Cfrac%7B3%7D%7B2%7D%5Cvarphi)
想让它小于![](https://www.zhihu.com/equation?tex=2026%5Cpi)，必须使得![](https://www.zhihu.com/equation?tex=%5Cvarphi%3E%5Cfrac%7B19%7D%7B12%7D)，这是不合要求的
故此种情况没有符合题意的![](https://www.zhihu.com/equation?tex=%5Cvarphi)

综上，第二问的最终答案：![](https://www.zhihu.com/equation?tex=%5Cvarphi)的取值范围是![](https://www.zhihu.com/equation?tex=%280%2C%5Cfrac%7B%5Cpi%7D%7B12%7D%5D%5Ccup+%28%5Cfrac%7B%5Cpi%7D%7B4%7D%2C%5Cfrac%7B3%5Cpi%7D%7B4%7D%5D)

**本题数据比较大，第一眼有点吓人，且需要细细讨论才能得出最终的结果，外加第18题正四棱台写过程已经花掉了不少时间，因此本题和第20题将会成为低级失误的重灾区，想完美拿到所有分数难度较大。**

## 第20题


![](https://www.zhihu.com/equation?tex=%E5%B7%B2%E7%9F%A5%E5%8F%8C%E6%9B%B2%E7%BA%BFC%3A%5Cfrac%7Bx%5E2%7D%7B2%7D-%5Cfrac%7By%5E2%7D%7B2%7D%3D1%EF%BC%8CM%28m%2C0%29%E6%98%AFx%E8%BD%B4%E4%B8%8A%E4%B8%80%E7%82%B9%EF%BC%8C%E8%BF%87M%E4%BD%9C%E4%B8%8E%E5%9D%90%E6%A0%87%E8%BD%B4%E5%9D%87%E4%B8%8D%E5%B9%B3%E8%A1%8C%E7%9A%84%E7%9B%B4%E7%BA%BF%E4%BA%A4%E5%8F%8C%E6%9B%B2%E7%BA%BFC%E4%BA%8EA%2CB%E4%B8%A4%E7%82%B9.%5C%5C%281%29%E6%B1%82C%E7%9A%84%E7%A6%BB%E5%BF%83%E7%8E%87%EF%BC%9B%5C%5C%282%29%E8%AE%BEA%28%5Csqrt%7B3%7D%2C1%29%EF%BC%8CB%E6%98%AFAM%E7%9A%84%E4%B8%AD%E7%82%B9%EF%BC%8C%E4%B8%94%E4%BD%8D%E4%BA%8EC%E7%9A%84%E5%8F%B3%E6%94%AF%E4%B8%8A%EF%BC%8C%E6%B1%82%E7%9B%B4%E7%BA%BFl%E7%9A%84%E6%96%9C%E7%8E%87%EF%BC%9B%5C%5C%283%29%E8%8B%A5m%3E0%EF%BC%8C%E8%AE%BEC%E7%9A%84%E5%B7%A6%E3%80%81%E5%8F%B3%E7%84%A6%E7%82%B9%E5%88%86%E5%88%AB%E4%B8%BAF_1%2CF_2%EF%BC%8C%E7%82%B9A%E5%85%B3%E4%BA%8Ey%E8%BD%B4%E7%9A%84%E5%AF%B9%E7%A7%B0%E7%82%B9%E4%B8%BAA%27%EF%BC%8C%E5%BD%93%5Cvec%7BF_1A%27%7D%C2%B7%5Cvec%7BF_2B%7D%3D0%E6%97%B6%EF%BC%8C%E6%B1%82m%E7%9A%84%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4.)

第一问比较简单，离心率为![](https://www.zhihu.com/equation?tex=%5Csqrt%7B2%7D)

第二问，由于![](https://www.zhihu.com/equation?tex=M%28%5Cfrac%7Bm%2B%5Csqrt%7B3%7D%7D%7B2%7D%2C%5Cfrac%7B1%7D%7B2%7D%29)，代入双曲线方程可得![](https://www.zhihu.com/equation?tex=m%3D-%5Csqrt%7B3%7D%5Cpm+3)，舍去负值，得![](https://www.zhihu.com/equation?tex=m%3D3-%5Csqrt%7B3%7D)，进而得出斜率为![](https://www.zhihu.com/equation?tex=%5Cfrac%7B3%2B2%5Csqrt%7B3%7D%7D%7B3%7D)

第三问是一道较常规的题，但尤其需要注意范围，笔者考场上便在取范围上出现了疏漏。

设![](https://www.zhihu.com/equation?tex=AB%EF%BC%9Ax%3Dty%2Bm)，![](https://www.zhihu.com/equation?tex=A%28x_1%2Cy_1%29%2CB%28x_2%2Cy_2%29)

将AB的方程与双曲线方程联立可得![](https://www.zhihu.com/equation?tex=%28t%5E2-1%29y%5E2%2B2tmy%2Bm%5E2-2%3D0)，且![](https://www.zhihu.com/equation?tex=t%5Cne+%5Cpm+1)

从而![](https://www.zhihu.com/equation?tex=y_1%2By_2%3D%5Cfrac%7B2tm%7D%7B1-t%5E2%7D)，![](https://www.zhihu.com/equation?tex=y_1y_2%3D%5Cfrac%7Bm%5E2-2%7D%7Bt%5E2-1%7D)，![](https://www.zhihu.com/equation?tex=%5CDelta%3D2t%5E2%2Bm%5E2-2%3E0)

接下来表示![](https://www.zhihu.com/equation?tex=%5Cvec%7BF_1A%27%7D%C2%B7%5Cvec%7BF_2B%7D)




代入数据解得![](https://www.zhihu.com/equation?tex=%28m-1%29%5E2%3Dt%5E2)，从而![](https://www.zhihu.com/equation?tex=%28m-1%29%5E2%3E1-%5Cfrac%7Bm%5E2%7D%7B2%7D)，解得![](https://www.zhihu.com/equation?tex=m%3C0)或![](https://www.zhihu.com/equation?tex=m%3E%5Cfrac%7B4%7D%7B3%7D)

注意，![](https://www.zhihu.com/equation?tex=t%5E2-1%5Cne0)，因此![](https://www.zhihu.com/equation?tex=m%5Cne+2)，结合![](https://www.zhihu.com/equation?tex=m%3E0)，最终答案是![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B4%7D%7B3%7D%2C2%29%5Ccup+%282%2C%2B%5Cinfty%29)

上海高考偏爱这种计算不难，但在范围上需要注意的题，23年的一道解析几何似乎也设置了这个坑，在端点位置的特殊情况可以取等，导致很多用判别式判断的同学失分。


## 第21题


![](https://www.zhihu.com/equation?tex=%E5%B7%B2%E7%9F%A5%E5%87%BD%E6%95%B0y%3Df%28x%29%E7%9A%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E4%B8%BA%5Cmathbb+R%EF%BC%8C%E6%BB%A1%E8%B6%B3%EF%BC%9A%E5%AF%B9%E4%BB%BB%E6%84%8Fx_1%2Cx_2%E2%88%88%5Cmathbb+R%EF%BC%8C%E5%BD%93%5Cvert+x_1%5Cvert+%3C%5Cvert+x_2%5Cvert+%E6%97%B6%EF%BC%8C%E9%83%BD%E6%9C%89f%28x_1%29%3Cf%28x_2%29%EF%BC%8C%E5%88%99%E7%A7%B0%E5%87%BD%E6%95%B0y%3Df%28x%29%E5%85%B7%E6%9C%89%E6%80%A7%E8%B4%A8P.%5C%5C%281%29%E5%88%A4%E6%96%AD%E5%87%BD%E6%95%B0f%28x%29%3De%5Ex%E6%98%AF%E5%90%A6%E5%85%B7%E6%9C%89%E6%80%A7%E8%B4%A8P%EF%BC%8C%E5%B9%B6%E8%AF%B4%E6%98%8E%E7%90%86%E7%94%B1%EF%BC%9B%5C%5C%282%29%E8%AE%BEf%28x%29%3D%5Cbegin%7Bcases%7D+ax%EF%BC%8Cx%E2%89%A40%5C%5C+x%2Bb%EF%BC%8Cx%3E0%5Cend%7Bcases%7D%EF%BC%8C%E8%8B%A5f%28x%29%E5%85%B7%E6%9C%89%E6%80%A7%E8%B4%A8P%2C%E6%B1%82a%E5%92%8Cb%E7%9A%84%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E5%8F%96%E5%80%BC%EF%BC%9B%5C%5C%283%29%E8%AE%BE%E5%87%BD%E6%95%B0y%3Df%28x%29%E7%9A%84%E5%80%BC%E5%9F%9F%E4%B8%BA%5B0%2C1%29%EF%BC%8C%E4%B8%94%E5%9C%A8%5B0%2C%2B%5Cinfty%29%E4%B8%8A%E4%B8%A5%E6%A0%BC%E5%A2%9E%EF%BC%8C%E6%B1%82%E8%AF%81%EF%BC%9A%E2%80%9Cf%28x%29%E6%98%AF%E5%81%B6%E5%87%BD%E6%95%B0%E2%80%9D%E6%98%AF%E2%80%9Cf%28x%29%E5%85%B7%E6%9C%89%E6%80%A7%E8%B4%A8P%E2%80%9D%E7%9A%84%E5%85%85%E8%A6%81%E6%9D%A1%E4%BB%B6.)
新的抽象函数考法来了——含绝对值的抽象函数。

**这道题充分证明了25秋考的不含导数的函数压轴绝对不会是个例，大胆猜测秋考依旧会以不含导数的抽象函数作为压轴。**

**天津卷自22年起连续四年填空压轴考含参函数问题，用绝对值、根式、分式等求导非常麻烦的东西强迫考生求不了导，也许上海也会慢慢往抽象函数的性质里加这些？**

第一问，网上很多同学求导，其实大可不必，取![](https://www.zhihu.com/equation?tex=x_1%3D0%2Cx_2%3D-1)作为反例即可。


第二问比较麻烦，因为它的答案很显然就是![](https://www.zhihu.com/equation?tex=a%3D-1%2Cb%3D0)，但过程让人很难下手。
由于绝对值的存在，我们需要进行分类讨论，下面给出个人的思路。
取![](https://www.zhihu.com/equation?tex=x_1%3Cx_2%E2%89%A40)，则![](https://www.zhihu.com/equation?tex=%5Cvert+x_1%5Cvert+%3E%5Cvert+x_2%5Cvert)，从而![](https://www.zhihu.com/equation?tex=f%28x_1%29%3Dax_1%3Ef%28x_2%29%3Dax_2)
因此我们有![](https://www.zhihu.com/equation?tex=a%3C0)
取![](https://www.zhihu.com/equation?tex=x_1%E2%89%A40%3Cx_2)，接下来进行分类讨论
若![](https://www.zhihu.com/equation?tex=%5Cvert+x_1%5Cvert+%3C%5Cvert+x_2%5Cvert)，则![](https://www.zhihu.com/equation?tex=x_2%3E-x_1)，且![](https://www.zhihu.com/equation?tex=f%28x_1%29-f%28x_2%29%3Dax_1-x_2-b%3C0)
利用![](https://www.zhihu.com/equation?tex=x_2%3E-x_1)进行放缩，我们有![](https://www.zhihu.com/equation?tex=ax_1-x_2-b%3C%28a%2B1%29x_1-b)
取![](https://www.zhihu.com/equation?tex=x_1%3D0)，可得![](https://www.zhihu.com/equation?tex=b%E2%89%A50)
接下来我们围绕![](https://www.zhihu.com/equation?tex=a%2B1)进行分析，若![](https://www.zhihu.com/equation?tex=a%2B1%3C0)，即![](https://www.zhihu.com/equation?tex=a%3C-1)，则当![](https://www.zhihu.com/equation?tex=x_1%3C%5Cfrac%7Bb%7D%7Ba%2B1%7D)时，必然有![](https://www.zhihu.com/equation?tex=%28a%2B1%29x_1-b%3E0)，此时我们无法保证![](https://www.zhihu.com/equation?tex=ax_1-x_2-b)必然为负，故此种情况不合题意，于是我们排除了![](https://www.zhihu.com/equation?tex=a%3C-1)
若![](https://www.zhihu.com/equation?tex=%5Cvert+x_1%5Cvert+%3E%5Cvert+x_2%5Cvert)，则![](https://www.zhihu.com/equation?tex=x_2%3C-x_1)，且![](https://www.zhihu.com/equation?tex=f%28x_1%29-f%28x_2%29%3Dax_1-x_2-b%3E0)
利用![](https://www.zhihu.com/equation?tex=x_2%3C-x_1)进行放缩，我们有![](https://www.zhihu.com/equation?tex=ax_1-x_2-b%3E%28a%2B1%29x_1-b)
取![](https://www.zhihu.com/equation?tex=x_1%3D0)，可得![](https://www.zhihu.com/equation?tex=b%E2%89%A40)，故只能![](https://www.zhihu.com/equation?tex=b%3D0)
这里我们又可以排除![](https://www.zhihu.com/equation?tex=-1%3Ca%3C0)的情况，这是因为若![](https://www.zhihu.com/equation?tex=-1%3Ca%3C0)，则当![](https://www.zhihu.com/equation?tex=x_1%3C%5Cfrac%7Bb%7D%7Ba%2B1%7D)时，必然有![](https://www.zhihu.com/equation?tex=%28a%2B1%29x_1-b%3C0)，此时我们无法保证![](https://www.zhihu.com/equation?tex=ax_1-x_2-b)必然为正，故此种情况不合题意
因此只能![](https://www.zhihu.com/equation?tex=a%3D-1)，故本小问的答案有且仅有![](https://www.zhihu.com/equation?tex=a%3D-1%2Cb%3D0)

第三问是一种较新的考法，结合值域的性质进行函数考察，这似乎在此前上海高考中没怎么出现。

**注意：本题条件中并未说明********一定连续，虽然最终看来似乎是这样的，但若直接在证明中默认连续性则为伪证。**

充分性是显然的，这里直接略过。

接下来看必要性。我们首先证明：![](https://www.zhihu.com/equation?tex=f%280%29%3D0)

反证法，假设![](https://www.zhihu.com/equation?tex=f%280%29%3E0)，则由于![](https://www.zhihu.com/equation?tex=f%28x%29)的值域为![](https://www.zhihu.com/equation?tex=%5B0%2C1%29)，故存在![](https://www.zhihu.com/equation?tex=x_1%E2%88%88%28-%5Cinfty%2C0%29%5Ccup+%280%2C%2B%5Cinfty%29)，使得![](https://www.zhihu.com/equation?tex=f%28x_1%29%3D0)

但此时![](https://www.zhihu.com/equation?tex=%5Cvert+x_1%5Cvert+%3E0)，![](https://www.zhihu.com/equation?tex=f%28x_1%29%3Cf%280%29)，与题设矛盾。

故假设不成立，即![](https://www.zhihu.com/equation?tex=f%280%29%3D0)，这个小结论证明完应该有两分。

接下来证明![](https://www.zhihu.com/equation?tex=f%28x%29)是偶函数。

采取反证法，假设![](https://www.zhihu.com/equation?tex=f%28x%29)不是偶函数，则存在![](https://www.zhihu.com/equation?tex=x_2%5Cne+0)，使得![](https://www.zhihu.com/equation?tex=f%28x_2%29%5Cne+f%28-x_2%29)

对于任意![](https://www.zhihu.com/equation?tex=x_3)，且![](https://www.zhihu.com/equation?tex=%5Cvert+x_3%5Cvert+%3E%5Cvert+x_2%5Cvert)，由题意，![](https://www.zhihu.com/equation?tex=f%28x_3%29%3E%5Cmax%5C%7Bf%28x_2%29%2Cf%28-x_2%29%5C%7D)

对于任意![](https://www.zhihu.com/equation?tex=x_4)，且![](https://www.zhihu.com/equation?tex=0%E2%89%A4%5Cvert+x_4%5Cvert+%3C%5Cvert+x_2%5Cvert)，由题意，![](https://www.zhihu.com/equation?tex=f%28x_4%29%3C%5Cmin+%5C%7Bf%28x_2%29%2Cf%28-x_2%29%5C%7D)

因此，不存在![](https://www.zhihu.com/equation?tex=x%E2%88%88%5Cmathbb+R)使得![](https://www.zhihu.com/equation?tex=f%28x%29%E2%88%88%28%5Cmin+%5C%7Bf%28x_2%29%2Cf%28-x_2%29%5C%7D%2C%5Cmax%5C%7Bf%28x_2%29%2Cf%28-x_2%29%5C%7D%29)

这与“![](https://www.zhihu.com/equation?tex=f%28x%29)的值域为![](https://www.zhihu.com/equation?tex=%5B0%2C1%29)”矛盾，故假设不成立，即![](https://www.zhihu.com/equation?tex=f%28x%29)为偶函数，必要性得证。

看起来过程很简单，但毕竟没怎么考过，且前面的反常中档题花了很多人非常多时间，因此在考场上做出这题的不算多，笔者的必要性也因为时间仓促，过程写得太糙而拿不了全分。





---

# 人为什么会随年龄而保守? Jay哥讲数学

**Author:** Jay哥讲数学  
**Bio:** 清华数学研究生, B站账号: Jay哥讲数学  
**Avatar:** ![](https://picx.zhimg.com/v2-2bb07090fb75c1c8a8fc0390bf9217e8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/dde64fc50f30d5a335d82e0263e86ee0  
**Published:** 2025.12.29 15:05:18  
**Updated:** 2026.01.04 15:11:33  
**Question:** https://www.zhihu.com/question/357807301  
**Question Created:** 2019.11.26 09:13:23  
**Question Updated:** 2019.11.26 09:13:23  
**Votes:** 8858  
**Comments:** 324  
**Type:** answer  

如果你去过清华大学,就会知道清华的食堂多得离谱.我刚到清华读书的时候,第一个学期几乎每周都会去一个没去过的食堂,即便如此,一个学期下来别说把所有窗口吃一遍了,还有好多食堂根本一次都没去过!

可是现在不一样了.这个学期,我基本只在两三家常去的食堂之间轮换,而且在每个食堂里也只吃固定的那几个窗口.相比刚入学的时候,我变得更保守了吗?至少在吃饭这件事上,的确如此.但我想说,这种"变保守",其实是一种理性的结果——因为探索阶段已经差不多完成,现在轮到专心收获了.

这就引出了探索和收获之间的取舍问题:我们到底应该在什么情况下探索新事物,什么情况下专注于已有的东西?在数学中这叫作"探索与收获的取舍问题(Explore/Exploit Tradeoff)"[1].从本质上来讲,这个问题是说,你到底应该花费精力去探索新的信息,还是专注于从已有的信息中获得收获?[2]

比如你家附近有个餐馆,你已经去过15次,其中9次的体验非常好,有6次的体验不怎么好.今晚你打算出去吃饭,是应该继续去这家熟悉的老餐馆,还是尝试一家从没去过的新餐馆呢?

类似的情形无处不在.你在一个单位工作多年,感受好坏参半.某天猎头找到你,给你推荐一个新机会,你要不要跳槽?你读过一位老作者的七本书,其中四本书写得很好,有三本不太行;还有个新作者,你只读过他两本书,其中一本比较好,一本比较差.现在两个人都出了新书,你只能选一本来读,你会选谁?

这类探索与收获问题是数学上非常难的一类问题,完全不亚于秘书问题,直到上世纪70年代才被数学家基廷斯(Gittins)解决[1].

当时基廷斯是牛津大学一位年轻的统计学教授,有一家医药公司找到他,请他帮忙优化药物试验.那家公司向基廷斯提出这样一个问题:已知有好几种化合物,怎么用最短的时间确定哪种化合物对疾病最有效?

基廷斯不仅完美解决了这个问题,还顺带解决了探索与收获的问题,他提出了"动态分配指数",现在人们都称之为基廷斯指数.后来别人谈起这项成就时,基廷斯谦虚地说:"这又不是费马大定理."

基廷斯的思路是,把几种化合物看成赌场里一排老虎机.每台老虎机吐钱的概率各不相同,代表不同药物的疗效.但你一开始并不知道这些概率是多少,所以你会在每台机器上都尝试一番,然后专门挑那些最可能吐钱的机器来玩.

我们还得考虑时间因素,医药公司希望尽快确定新药的疗效,因此拖得越晚,回报就越低.于是我们要给未来的收益打折扣——你应该已经想到了,这不就是上一讲我们说过的贴现率吗?在这里,贴现率就反映为未来回报的贬值速度,我们最终的目标,是让未来所有时间的折扣回报之和的期望值尽量大.

具体来说,我们考虑如下多臂老虎机游戏(multi-armed bandit)[3].赌场里共有![](https://www.zhihu.com/equation?tex=K)台老虎机,这些老虎机你可以理解成各种不同的选项,比如不同的餐馆或者不同的工作机会.每一轮游戏,你只能选其中一台机子来玩.如果赢了,你获得一个固定回报,不妨设为![](https://www.zhihu.com/equation?tex=1);输了,回报就是![](https://www.zhihu.com/equation?tex=0).

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

**基廷斯指数定理(Gittins index theorem)**[3]**: 记  表示到第  轮为止,在每台老虎机上赢和输的次数,那么多臂老虎机的最佳策略为**

![](https://www.zhihu.com/equation?tex=++++%5Cbegin%7Bequation%2A%7D+++++++++%5Cpi%28t%29%3D%5Cunderset%7B1%5Cleqslant+i%5Cleqslant+K%7D%7B%5Carg%5Cmax%7D%5C%2C+G_%5Cdelta%28w_%7Bi%2Ct%7D%2Cl_%7Bi%2Ct%7D%29.+++++%5Cend%7Bequation%2A%7D%5C%5C)

在具体应用中,人们会事先把各种输赢次数的基廷斯指数计算出来,整理成一张表格.比如,假设先验分布是均匀分布![](https://www.zhihu.com/equation?tex=%5Cmathrm%7BBeta%7D%281%2C1%29),贴现率![](https://www.zhihu.com/equation?tex=%5Cdelta)分别取![](https://www.zhihu.com/equation?tex=99%5C%25)和![](https://www.zhihu.com/equation?tex=90%5C%25),我们就可以得到如下两张基廷斯指数表[1]:

![](https://picx.zhimg.com/v2-cba3468af95a54a13a7aa5def164537f_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-0c95ead6960d3380aef464d8a85a212b_r.jpg?source=2c26e567)

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

直觉上,贴现率越高,也就是越看重未来的回报,探索的附加值也就越大.反之,如果你只关心眼前的利益,那么探索就不太值钱[2].

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

一个直观的解释是小样本的统计很可能不准,也许一次不好只是偶然,因此探索的附加值还很高[2].相比之下,老餐馆你已经去过很多次了,测量结果已经稳定在一个一般的水平,不会再给你带来惊喜.

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

也就是说,当![](https://www.zhihu.com/equation?tex=n)较小时,这个状态"赚取正回报"的能力更强,相应的其零点![](https://www.zhihu.com/equation?tex=G_%5Cdelta%28w%2Cl%29)也就更大.因此当![](https://www.zhihu.com/equation?tex=w_1%2Bl_1%3Cw_2%2Bl_2)时,就有![](https://www.zhihu.com/equation?tex=%5CDelta_%5Cdelta%28w_1%2Cl_1%29%5Cgeqslant%5CDelta_%5Cdelta%28w_2%2Cl_2%29).

从这个模型我们至少能获得三个人生智慧[2].

第一是,年轻时应该多探索.

年轻人有长远的未来,贴现率很高,所以大胆探索才是最优选择.正如你在一座城市要待很多年,那就应该多尝试不同的餐馆,找找哪一家最好吃.

你看小孩子就非常明白这个道理.虽然他们不懂什么是基廷斯指数,但是非常愿意探索.他们会把家里的电器按钮都按一遍,特别喜欢玩新玩具,总是充满好奇心.

2014年美国有一项研究,从职业选择与匹配的框架出发[4],指出:如果你在二十多岁的时候经常换工作,你会更容易找到适合你的工作.也就是说等你到三四十岁的时候,你会更喜欢你的工作,收入水平也会更高.

所以,年轻人频繁换工作不但不是任性,反而是必要的,这是在探索.很多人担心频繁跳槽会被认为缺乏忠诚,但在今天这个世界里,决定你职业前途的首要因素,是你的能力和声望.在美国硅谷,一个典型的工程师首先追求的是他在整个行业中的声望,其次才是他对某家公司的具体贡献——当然,前者要靠后者来证明.只要你在自己的行业中有足够高的声望,去哪家公司,待遇都不会差.

如果你已经不是二十几岁的年轻人了,那是不是就不用探索了呢?也不一定,如果你从事的是创造性的工作,那你一生都要有战略性的探索期.我们在第9讲中提到过,那些最厉害的科学家,都是"探索+深耕"的模式[5].科学探索是一项永无止境的事业,即便科学家的寿命是有限的,但是他开辟出的方向还会有后人继续发展和完善.从这个意义上说,科学研究的贴现率其实很高,所以你会看到,有些科学家哪怕年过花甲,依然在不断拓展新方向.

当然,强调探索,就意味着没有那么多收获,所以家庭因素就很重要.一个年轻人要想不断试错,背后需要父母提供强有力的支持!现在很多年轻人执着于考公、考编,热衷于一眼望到头的工作.并不是他们不想探索,而是他们输不起!如果我们希望社会变得更有活力,就需要多一些包容,允许年轻人有试错的机会.

第二个智慧是,随着年龄增长要慢慢专注于收获.

一个一般规律是,人的社交圈子会随着年龄增长逐渐变窄.年纪大了之后,经常见面的总是那几个人,经常做的事情也就那么几件,去的地方也很有限.比如总是去同一家餐馆、点同样的菜,好像已经失去了探索的动力.过去人们认为这是老年人的悲哀.

但是斯坦福有一位心理学教授却不这么认为[6],他认为这其实是老年人的理性选择,老年人已经完成了探索!他们知道自己最适合做的事情是什么,和哪些人在一起最舒服,哪个餐馆最符合自己口味,他们已经没有冒险探索的必要,只要享受人生就行了.

所以人到了一定阶段,就要慢慢安定下来,开始把以前探索的成果兑现.很多人忙忙碌碌大半生,到头来什么也没得到,这就是不懂得收获的重要性.有些大学教授,在功成名就之后,就跑到企业里当顾问,做技术转化,这就是把资源和能力兑现了.这件事通常在四五十岁以后考虑比较合适,在此之前,探索才刚刚完成,资源和能力还在积累,过早兑现,挣不了多少钱.也有一些人不懂得这个道理,五十岁以后,眼看着自己的资源和能力不断贬值、过时,这是非常可惜的.

第三个智慧是,在慢慢变老的过程中,你的生活其实在变得越来越好.

我们鼓励年轻人多探索,并不是探索本身有很大的好处,而是为了找到那些能够带来丰厚回报的选项.实际上,探索并不像我们想象得那么有趣,大部分的探索都以失败告终,你会不断遭遇挫折,根本没有那么多惊喜.

老年人不再探索,并不是他们不敢探索了,而是他们已经不用探索了,他们可以享用年轻时探索带来的成果.如果你知道自己喜欢什么,你会很乐意被自己喜欢的事物所包围.

下一次当你看到一位老人,每天去同一个公园散步,走同一条路线,跟同一群老伙计聊天,你可能以为他的生活很无趣——殊不知这才是最浪漫的事,他在享受用一生的时间探索出来的成果!


---

#  蓝之夏

**Author:** 蓝之夏  
**Bio:** 平凡，却依然坚信自己可以看清头顶的星空  
**Avatar:** ![](https://picx.zhimg.com/v2-30f78537454b403b13ea115bf9cc8d7f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/717a261a4e220075ae3950fa7d838791  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 21  
**Type:** pin  

[object Object],[object Object]


---

# 我感觉我对数学的求知欲在下降，怎么办？ specccc

**Author:** specccc  
**Bio:** 我喜欢芒格，格罗滕迪克，拉康，阿尔都塞  
**Avatar:** ![](https://picx.zhimg.com/v2-66d7a058477ea8950feaac1ea57521e1_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/20d8f736aceed9bd590cac4a78794f22  
**Published:** 2025.06.13 21:23:23  
**Updated:** 2025.07.25 09:44:56  
**Question:** https://www.zhihu.com/question/431306787  
**Question Created:** 2020.11.21 13:44:54  
**Question Updated:** 2020.11.21 13:44:54  
**Votes:** 3581  
**Comments:** 244  
**Type:** answer  

数学就是越来越无聊了，如果要对我已经学习过的数学的震撼程度排个名，我会这样排

（个人主观排名没有任何恶意，分类混乱不严谨，可能打错了一些东西但我没发现，纯属我今天没事才写的胡言乱语）

第一梯队，真正的尤里卡时刻，突破了想象力的边界，仿佛来自高等文明的创造，看完感觉任何世俗的欲望与它们相比都失去了意义

泛函分析，把函数看做无穷维向量，构建出一整套分析框架，傅里叶的结论在这种级别的高观点下几乎变成显然，微分方程理解成算子更是惊为天人，第一次听见无穷维向量和算子这个概念的时候大脑直接炸了

黎曼曲面（仅仅指代黎曼所发现的那些结论），破天荒的把复分析和拓扑结合在一起，体会覆叠映射的巧妙，黎曼华尔兹定理在覆叠映射下几乎显然成立，引入无穷远点，大小皮卡定理也显然了，还能体会高次方程的拓扑结构，我们居然能给方程数洞！！n个球面极端情况的连续形变自然推导出方程的拓扑结构

纤维丛，突破人类想象力的发明，想出流形上能长草长圆的人真是神人了，高维流形可拆解为低维流形的纤维，流形上的一切都可以理解为某种纤维（截面），通过边界的一个转换函数可以把平凡丛拼成非平凡的，同伦拉回的向量丛是同构的！边界映射到结构群的同伦类唯一决定了两个区块拼接起来的丛的拓扑！复morse理论中的因为奇点的存在，绕一圈后居然是一个纤维的twist！，流形上的向量丛可以理解为模！让投射模有了我看的见的几何含义！，非平凡丛加上平凡丛可以成为平凡丛，拓扑k理论更加深刻了这种观点，swan定理简直是显然的，示性类就是同伦类上拉回丛平凡化的障碍，丛平凡化的阻碍和底流形的拓扑结构有关，为什么陈类没有奇数项？因为复向量丛的拓扑维数一定是偶数，奇数的底流形拓扑障碍无法阻碍其平凡化

第二梯队，看完也很爽就是了

复分析（特别是波利亚向量场的部分！），柯西定理是调和场的自然推论，留数只不过是拓扑障碍造成的残余的旋量和功，复平面的hodge定理在这种观点下几乎显然成立，无非是吧场拆分成无旋场，无源场，和调和场

微分形式的语言和斯托克斯定理，理解了微分形式的语言其实斯托克斯几乎显然成立

内蕴视角下的几何，用覆盖{Ui}的方式重构了流形的语言，这个现代研究流形的观点惊为天人

现代概率论和随机分析，用测度的语言重构了概率论，让之前不清晰不严谨的一些观点变的严谨，甚至完全可以套用实分析和泛函分析的观点去证明概率论中的定理，但就是随机分析中的一些定义感觉还是不太直观自然

层论的发明，从局部到整体思想的终极运用，如此繁多的流形的同调群居然可以被这种语言统一表示，一些层同调群甚至可以代表某些模空间的切空间（这有必然性吗？），但对更高阶的层同调群我还是缺乏几何直观

点集拓扑，统一了拓扑的框架，初看晦涩，但理解之后发现它无处不在，没有他根本没法开始学任何现代数学，但是听好多人说点集拓扑是一种落后的即将被抛弃的语言，为什么？

线性代数，数学的基础，它的核心是线性啊，为什么人们总把线性代数教成矩阵分析呢？这样教的话即不是线性也不是代数啊，线性的概念无处不在，矩阵只是表示啊，而且代数的痕迹更是一点都没有体现。谱，对偶空间和对偶算子的概念是数学中无处不在的核心了，不教肯定不行，在更高的观点下理解极分解，凯莱哈密顿定理，和jordan分解也是很有趣的（必须是高观点！要不然它就很无聊）

伽罗瓦理论，无论是根式解还是刘维尔问题都是伽罗瓦理论的子集，一个伽罗瓦扩张几何上对应一个伽罗瓦覆盖，万有覆盖就是代数闭包，etale覆盖群就是可分闭包的伽罗瓦群，要是这种观点能有更多就好了

代数拓扑与微分拓扑（前期），哇同调群，哇同伦，哇毛球定理，哇betti数，哇各种各样的不动点，哇德拉姆上同调，哇自由群子群自由，至于为什么是前期，因为后期在第四梯队！

现代组合学，用严格的代数语言和符号语言重构生成函数，用复分析和奇点分析问题的阶数，大部分组合问题纳入框架后变得显然

第三梯队，学之无味，但不学又可惜，可能要很长一段时间才能把握一些美感

实分析，更精妙严谨的语言，学起来头疼但的确能处理更多问题

几何测度论，只看到面积公式和余面积公式，没有看后面更诡异的什么非整数维数上的操作，也是更精细研究的语言，和实分析异曲同工，最后推导出余面积公式还是有点趣味的，就是需要受苦很多才能到这一步

微分几何，一堆概念砸向我的大脑，看完书的最后一页我明白了如何纯用曲率形式证明的chern weil定理和热核理论证明的指标定理，但是我究竟看懂了什么？这些证明究竟意味着什么，我总有一天会把它们忘掉，我开始后悔看完这些证明了，本来以为他们是第一梯队的

所有代数和范畴论，代数是一种抽象，没有发明很多新东西，李群可能算一种有点新的发明吧，当然代数海洋这么大，我怎么可能看完，有可能是我理解有误了

至于范畴论，比方说范畴论统一了自由积，直积，不交并这种东西，还有很多这种类似的统一，还有函子的发明也是小有意思，但也没有提供很惊为天人的东西

所有的代数都是抽象，没有给出新想法，代数更像是工具，数学问题翻译成代数问题就可以硬算了，代数是一种硬解问题的工具和分类新东西的工具

表示论，也是一种工具吧，有很多各种各样繁杂的定理，但并没有什么震撼的，一种用来表示的工具，但也可能是我理解不深刻

紧复曲面，我也没全看完，看了一些消灭定理和代数函数理论，小有意思

代数几何，只读了hartshorne，听说代数几何要天天早读背诵才可以记住各种知识，过于恐怖了，代数几何特征零和非零的内容是一个学科吗？，一个在研究代数曲面天天爆破，一个在研究代数数论，可能概型语言最伟大的地方是解决了weil猜想？代数几何学到后面究竟有没有震撼人心的内容，请大佬科普

第四梯队，不是很想学，学了一点就半途而废了

代数拓扑（后期），搞点超复杂交换图，搞点同调代数的奇怪引理，搞点正合列，搞点各种各样的函子，然后一通操作就证明了某某定理，真的是无厘头，当然，也可能是我没有理解其内涵，因为我半途而废了

黎曼几何，看了一些关于正曲率紧曲面的东西，依旧没感受到什么美感，好无聊，遂弃之

pde，也好无聊，定义了很多奇怪的空间但没什么美感

调和分析，只看了第一章被劝退了

上面写的东西是我的癔症发作，千万不要当成科普什么的，我学的东西是沧海一粟未知的东西太多了，我写回答的目的其实是求助，因为我的数学越学越无聊了，已经到达了让我厌烦的程度

对我来说真正美丽的东西应该不是一种定理，而是一种新的概念，一种创造出新东西的力量，这种新概念打破的人认知的真正边界，一些显然成立的定理本质上也是属于概念与认知，而不是定理

一个定理之所以是定理而不是常识或者概念，某种程度上是不是意味着我们没有真正理解它的内涵？只是抓住了其形式罢了

我突然想起erdos的那个设想，一千年以后的一个热爱数学的小学生，突然有一天想到了黎曼猜想，但他只用了几秒就认为这个猜想简直显然成立，因为这在他小学老师教给他的框架下是如此显然

这就是观点与概念的力量，而不是定理证明的力量

有意思的数学越来越少的，的确是越来越无聊了，我希望erdos的设想是正确的，而不希望数学再也没有对概念边界的突破

最好的数学是这样的，如果我被关在监狱里六十年看不了任何数学书，但我出狱后只需要几分钟就可以重新推导出所有的数学，因为他们都是一种概念认知而不是一种证明

不会被遗忘的数学就是好数学，任何可能被遗忘的都不是最好的那一部分数学，繁杂的证明会遗忘，一个不显然的定理也会遗忘，需要记忆而不是理解的内容会遗忘，这不是我想要的结果

学到这种东西我会感觉像踩到地雷一样，既然我总有一天要忘掉 我为什么现在要学它们

我对上面我所说的学科的认知大概率是错误的，希望大师们赶快纠正我，让我体会我没有理解到的美感

我依旧在不断学习新东西，我希望里面有我要的震撼人心的想法，目前在读的是，非交换几何，D模和黎曼希尔伯特对应，模空间与形变理论，如果有大师给我指点个方向就好了，哪里有我要的宝藏呢？

我像一个口味刁钻的美食家一样，在各个数学领域里找我想要的那些来自虚空中的东西，对于我认为没有意义的东西，和需要记忆而不是理解的东西，我直接不看了，实在是过于不道德不严谨且眼高手低了，不过我又没有科研压力，所以学的很随性

所以，是的，求知欲是在下降，请告诉我接下来应该学什么才好，要不然我只能去找外星高等文明学数学了

erdos的世界真的能实现吗？朝闻道夕死可矣，对我来说这是真的

6月26号，导出代数几何和模形式很有学下去的价值，就是感出代数几何反哺其他领域的内容太少了，但统一自由消解这个想法开的很高


---

# 看山 彭柯尧

**Author:** 彭柯尧  
**Bio:** 自由的原教旨主义者  
**Avatar:** ![](https://picx.zhimg.com/v2-bd854767b6979fa9aaa0354cc8814169_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ea164c4c80dbe1a6e0f72482e5dc06a1  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 64  
**Comments:** 6  
**Type:** article  

> 看山是山,看山不是山,看山还是山.

十年前进入大学时, 翘掉了军训,于是去旁听高年级的课程. 非常罕见的学校邀请了香港退休老师黎景辉给大四学生开了代数几何课,于是这就成了我大学上的第一门课. 第一节课就是讲层论,之后定义概型,层上同调,最后L函数结尾,比较现代地Hartshorne式课程的.还记得第一节课后国庆节假期我就天天恶补交换代数, 看Atiyah的书第一个非平凡命题所有素理想之交是幂零理想,感觉无法理解为什么.

同一时间也有还有同调代数/导出范畴的讨论班,用的是Schapira 的讲义,是他们书的精简版. 还记得我负责讲的导出函子.一学期下来还是稀里糊涂的不知道学了什么,不能理解三角范畴,也不知道八面体公理是干什么的.

但是这些经历告诉我,即便是没搞懂,能留下一个印象,潜意识里已经在学了,这也是有意义的.很多东西本就需要时间消化,越早接触越好.这也成了我的教育理念.这些课对我影响很大,让我从高中喜欢的动力系统转向了代数几何.




现在我第一次教了自己的代数几何的课,对象是数学物理项目的硕士生. 课程是与一位快退休的女教授合上的(因为改了姓,后来才知道她是柯朗的孙女),她负责前半,我负责后半. 我们两个课程计划反差巨大, 她的课程是前Grothendieck的代数几何,主要讨论复数域上的平面曲线,而我是准备的是晚期Grothendieck的函子几何, 中间差了早期Grothendieck/Hartshorne式围绕局部环化空间的课程. 我在很早就有过这样的想法:在没有选择公理/盘中律的情况下如何教代数几何,那么就必然要从Topos出发的函子几何,考虑 Zariski big site.这样定义的好处是,只需要改换site,就也可以考虑微分几何/代数拓扑, 在这个框架框架下流形和概型是一类东西,也许这样对于数学物理的学生更容易理解. 我在第五节课定义概型为局部可表层. 然后才发现第一部分课程完全没有定义素谱,于是实现了绕过素谱定义概型,而素谱则作为概型的几何实现函子. 本来想通过局部环的分类Topos来引入局部环化空间的,但是没有时间这样干了. 最后还是讲到了Stack和模空间,以规范场论结束课程,算是呼应数学物理主题了.




巧合的是,就在最近黎老师新出了一本Topos的书,不知道现在他现在会怎么教代数几何.有次和UT Austin的人说他说Sam第一节课就是这样上的. 之前我给Dustin 讲我的计划,他表示有点太极端了"你想想层论对于学生的信息量". 某种意义上他说的有道理,学生有时候是挺困惑. 到最后一节课的时候已经只剩几个学生了.班上有一对双胞胎,喜欢问一些刁钻的问题,如同大家听到后想到的玩笑一样,其中一个打算做(同调)镜像对称.这是挺好,说明他们在思考,有一些反馈.最令我忍俊不禁的是当我介绍三角形的(粗)模空间是一个三角形的时候,一个说"你可以拿一个三角形其中一个点对应三角形,然后这个三角形的点又对应三角形,我不理解这样无限进行下去的意义"




也许我是想践行"普遍教育法"(巧合的是雅各托就是第戎人,也曾在这里勃艮第大学任教),我目的是为了展示这些东西背后的思想是简单的,于是略过了很多细节,我觉得学生也不感兴趣这些.虽然我得到双胞胎抱怨"这比见过的物理学家都hand-waving",我就当作是赞美了. 在课上几乎没有证明,重点在于解释一切都是自然的,证明都作为习题,似乎在课上唯一证明了米田引理. 我想了很多类比来解释层: 广义函数,乐高积木. 我知道我在课堂上可能会讲得乱七八糟,学生没法做笔记,所以自己写了讲义.

[https://github.com/iamcxds/lecture-notes/tree/main/AG-2025](https://link.zhihu.com/?target=https%3A//github.com/iamcxds/lecture-notes/tree/main/AG-2025)

其实这个过程是一个很好地整理自己思路的过程,有机会解释过去直接困惑的东西,并且在这个过程中温故知新,产生了一些新的想法.




和十年前类似的是,我们又为学生组织了额外的课程讲同调代数/导出范畴,课程由另外一个专门做这个方向同事讲授,比十年前只有学生瞎讲好多了. 双胞胎依旧不依不饶提问, 虽然学生现在满头雾水,以后都会慢慢明白. 我也借此机会能给学生解答一些我十年前的疑问, 为什么Abel范畴要这样定义;为什么cone叫做cone;八面体公理到底想说什么(为什么其实叫Menelaus公理更好)...

![](https://picx.zhimg.com/v2-554bdbadc447370ebf7d573a0ffb5643_r.jpg)

有句话我没机会在课上说,或许我应该在期末考试的时候告诉学生:

"数学的秘密就是没有秘密"


---

# 2025年你的数学研究或学习有什么收获和感悟？ Cliff

**Author:** Cliff  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-1a485b33cdb4af5d6844234304745f18_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b73a02cb5019146db922653f173d3ce9  
**Published:** 2025.12.07 19:23:59  
**Updated:** 2025.12.07 20:44:35  
**Question:** https://www.zhihu.com/question/1955201859103994470  
**Question Created:** 2025.09.27 09:27:29  
**Question Updated:** 2025.09.27 09:27:29  
**Votes:** 221  
**Comments:** 26  
**Type:** answer  

苦尽甘来，得幸去学我想学的数学了。

在读研前成功把hartshorne前三章差不多看了个大概（因为formal scheme的部分我实在难以保证我“真的懂了”，更多的时候我是以复几何的直觉去对待这部分，就类似于Bea78中对castelnuovo contraction的处理手法），然后遇到了很好的很温柔很负责的老师熊猫桑，我们有很多共同语言。我的高考成绩很差，所以一直在一所民办三本学校就读，那里没有数学专业，没有喜欢数学的人，更遑论数学书，大一的时候我很想学数学，我真的非常想学数学，但我的认知很低，信息掌握程度几乎为0，欠了三四千块买了一堆数学书（其中甚至大部分谈不上数学书，只能说是“科普读物”），机缘巧合之下入门了，并且学懂了数分高代，并且了解了后面究竟有什么数学知识，从此一发不可收拾，一路高歌猛进，被代数几何的优美和哲思给吸引住了（其实先是被微分流形），于是我就想考进重庆的几何与拓扑中心，因为我觉得应该是一个不会嫌弃我出身的地方。

在武大的minimal model program暑期workshop中我第一次遇见的我的师兄（说实话他的知乎账号是啥至今对我仍是一个奇秘），听了很多老师的报告，陪着师兄和一位日本教授hashizume畅聊甚欢（尽管很多时候我难以分辨日式英语，但那是我第一次用英语和别人聊天，有种非常新奇的体验），这是我第一次进这么庄严的高等学府，并且还在workshop上认识了江辰老师，顺便找他在我的kawamata所撰的minimal models and finite generations原版书上签了一个名，搞得我都不太敢翻看这本书了，没办法只能重新打印了一本便宜的哈哈。

在学双有理几何之前我一直以为双有理几何这一门学科的画风，和我读hartshorne写的那本书一样是充满着优雅的sheaves & schemes，辗转腾挪之际平地起高楼，用知乎上的话来说有着“法式高龄白毛衣”的优雅感，而躬身切入之时才发现一招一式四平八稳，沉着冷酷，细微之处不乏俏皮，比如kollar mori中那finding rational curves with not nef canonical divisor那一节出现的糖水不等式，不禁让我哑然失笑打趣一句，“这也是代数几何的一部分吗？”




9月份入学后，大概迄今为止学了两个半月的双有理几何了吧，第一次体会到面临一个很难做的事情，我该如何思考活路，以顺滑的方式去切入我想学的知识，毕竟kollar mori这本书真的超级超级超级超级超级难读。不过幸运地是我生在一个好时代，好资料数不胜数，我缝缝补补式地读了很多内容

![](https://picx.zhimg.com/v2-493e85ed346beaa12efd3f1eb6a53b47_r.jpg?source=2c26e567)

学到了很多东西，这是在我过去的人生中从未有过的快意，数学的大门向我敞开，求知的野心折磨得我寝食难安。我太喜欢几何了，尤其是代数几何，我画了很多很多漂亮的图去记录我的学习，我喜欢这些方外之意的艺术：

（在连续形变下的ampleness）

![](https://picx.zhimg.com/v2-6cfe6c55b8c2971ddd8357fe63d2e606_r.jpg?source=2c26e567)

（对（-1）curve的收缩，不得不说，smooth surface于一点处的blow up就是锦绣词句天上来般地找到了rational curve，后面的bend and break就是基于这个至关重要的技术）

![](https://picx.zhimg.com/v2-2b8672506b33173cb1f027d7f80f3114_r.jpg?source=2c26e567)

（MMP in surface case）

![](https://picx.zhimg.com/v2-ed42570f17091964ba02400f82ed198b_r.jpg?source=2c26e567)

（Finding rational curves）

![](https://picx.zhimg.com/v2-27b396105a34e48f39f0413e36896967_r.jpg?source=2c26e567)

（由Grothendieck的66年的论文发展的Hilbert scheme的技术得到了deformation space，或者叫parameter space的示意图，基于此理论我在我的note中完整计算了两个很重要的，对于初学者formidable的deformation space的维数下界公式。当初学这一段的差点学哭了，Grothendieck的东西实在是太漂亮了。）

![](https://pic1.zhimg.com/v2-9b350e42842e413c4eb0277b6ef48ea7_r.jpg?source=2c26e567)

然后是我最近在学习和整理的森重文的bend and break

![](https://picx.zhimg.com/v2-ac8518f7cd1b79c7bf6ef109b53d4e4f_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-7afe5d4493899c67e084ff4b0ecb24f3_r.jpg?source=2c26e567)

（其实我也挺想不要脸地自夸一句我或许也有一点点画画天分在里面的）

关于这个birational geometry的note是我一边对着导师汇报我所学，一边反复修改增添细节，当然其中最有意思的我感觉还是我画的画哈哈，我一直都在公开地分享这本note，不断地不断地给一些gap比较多的证明增添细节，增加reference（或许我的水平不足难以释得齐全）。因为在我的了解中，很多人读kollar mori这本书时都太过于痛苦了，痛苦过头不是一件好事，希望我的note可以帮助到别人。

至于我的数学研究和学习有什么具体的收获，我很难讲得上来，感觉自从我成为导师的学生之后每天都是满满的收获，已难以计数。但我想最大的收获应该是我认识了很好的人们，生有涯中见到了更广阔的知无涯。

我的读研生涯才刚开始，我很期待接下来两年半有余的求知路。

（顺便一提我虽然和雪王是一个学校的但求求你们不要把我和雪王联系起来）

附一些我喜欢画画的手稿：

![](https://picx.zhimg.com/v2-cf864685b63a81f71a1c82212943c647_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-c201de500e1059c1c83cd5cd923cf10b_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-9e0bcd607f79cb1002297857d5665226_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-2a42ae2e25cdf69abb98f5d30831f4e0_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-08a3d00e5b28cc1ade9db973e555e5ee_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-f386a7835230f76a511e7d2be0d257b3_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-4327b76892841affdb0e4405d6147886_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-aaf9ca32e70b64d0f71766f5ade90ca9_r.jpg?source=2c26e567)


---

# 如何处理图片才能避免图中文字被OCR识别？ DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://picx.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2025.09.02 16:59:17  
**Updated:** 2025.09.02 16:59:17  
**Question:** https://www.zhihu.com/question/302170944  
**Question Created:** 2018.11.12 17:30:51  
**Question Updated:** 2025.09.08 02:10:26  
**Votes:** 378  
**Comments:** 46  
**Type:** answer  

好问题。

先说说高赞里的这张图像，很有意思，那么为什么有些模型能识别有些识别不了，原理是什么呢？

![](https://pic1.zhimg.com/v2-46b59696b103dcd4d405885fbb9e6249_r.jpg?source=2c26e567)

目前的文字图片识别，主要是CNN-only、CNN+RNN、CNN+Transformer，总之大多包含CNN网络结构。

CNN网络结构包含一个池化层，池化层是卷积神经网络（CNN）中的一种**特殊层**，它的主要功能是**对输入特征图进行下采样（降维）**。

简单比喻就是缩小图像，但是下采样的方式其实有很多种，比如最大值或平均值或者随便挑一个，如果是最大值或随便挑的下采样，可以看到随着图片缩小，文字的特征很快就消失不见了。

![](https://picx.zhimg.com/v2-25ce418a2fe19360f9d9b6b38c1b0e72_r.jpg?source=2c26e567)

但如果我们使用的是均值滤波，那么特征仍然能够很好的保留，甚至可以说识别的效率提升了

![](https://pic1.zhimg.com/v2-530a1e11f47778edc934891a6b216e64_r.jpg?source=2c26e567)

所以我估计不同模型有的能识别出来有的不能，与模型池化的方式非常相关。

那么回到问题。怎么处理图片才能避免图片文字被OCR识别？其实静态图片没什么太多好办法，就是加干扰，比如加一些不同颜色的或者噪点。但这些方法通过模糊，腐蚀、碰撞、缩放几件套下来，都能很大程度清除干扰，让文字被准确识别处理。

但是我们视觉上观察并不仅限于静态图啊，我们完全可以利用人眼的视觉残留效果，把图像做成动态图（因为录屏软件也就这样了，但实际视觉效果其实很清楚）

![](https://picx.zhimg.com/50/v2-df3c361d261b3544b10b62844de82fb0_720w.gif?source=2c26e567)

我们对图片切片，每一帧都是碎片化的

![](https://pic1.zhimg.com/50/v2-70adb24c5139b40463428ad3825dd9c0_720w.jpg?source=2c26e567)

![](https://pic1.zhimg.com/50/v2-416fe55cc44e718ac0f7c245d591f569_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-10d021d10ab95a56396db42934df4650_720w.jpg?source=2c26e567)

然后我们对各种模型测试一下

![](https://picx.zhimg.com/v2-a607e59bb19c260ff464f67d7668b26a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-0d0b1ee0f5445817bfd7e13fccaf8228_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-0ce7ed7a375dc3f2b654a0b9476fa561_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-cddc64f01269573e369f7620f2c88b13_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-ef46fca258723a9f641150323eb6156b_r.jpg?source=2c26e567)

**好的，全军覆没**

上代码（基于PainterEngine）：

#include"PainterEngine.h"px_texturetest;px_intdiv_width=20;px_intdiv_i;PX_OBJECT_RENDER_FUNCTION(MyRender){px_inti;div_i++;div_i=div_i%(320/div_width);PX_TextureRender(psurface,&test,0,0,PX_ALIGN_LEFTTOP,0);for(i=0;i<(320/div_width);i++){if((i+div_i)%8!=0){PX_GeoDrawRect(psurface,i*div_width,0,i*div_width+div_width,160,PX_COLOR_WHITE);}}}px_intmain(){PainterEngine_Initialize(320,160);PainterEngine_SetBackgroundColor(PX_COLOR_WHITE);PainterEngine_LoadFontModule("assets/font.ttf",PX_FONTMODULE_CODEPAGE_GBK,68);PX_TextureCreate(mp_static,&test,320,160);PX_FontModuleDrawText(&test,App.pfontmodule,160,80,PX_ALIGN_CENTER,"我是文字",PX_COLOR_BLACK);PX_ObjectSetRenderFunction0(root,MyRender);return1;}


---

# 随笔——记第一届国际纽结理论大会 三川啦啦啦

**Author:** 三川啦啦啦  
**Bio:** 热爱数学怕做题，只为好玩费心机。  
**Avatar:** ![](https://pic1.zhimg.com/v2-ad2ba37f1379d536c1993de99360f4c3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3c64fc2320ba3a74956000cccbffbd64  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 256  
**Comments:** 10  
**Type:** article  

在蛇年伊始，纽结理论家们也结结实实过了个年。称今年为纽结年一点也不过分，许多祝贺卡片上，都是首尾相接的蛇形图案，恰好构成纽结。为期五日的大会业已结束，感慨万分。

这次真可谓“全明星阵容”，许多曾在文献上看到的名字，那些久仰大名的数学家，在屏幕中清晰可见。与此同时，与想象略有偏差——原来在网络上经常看到的照片，都是十多年前的旧照，人是会老的，数学家是人，所以数学家也会老。

Louis H. Kauffman是这次大会的主角，这次会议的主题之一，是庆贺他的80大寿。Kauffman括号（或称Kauffman多项式）是纽结理论发展的里程碑。前一阵子，网上讨论[如何评价2025八省联考数学多选最后一题？](https://www.zhihu.com/question/8618460195/answer/70974470160)，其中B、C选项分别是左右手三叶结，严格证明两者不等价的最简明的方法，就是利用Kauffman括号。网络上有很多数学博主给出计算过程，就连中学生都能看懂，这都要归功于Kauffman的工作，而然这仅仅只占其所有工作的千分之一。Kauffman 是宗师级别的人物，同时也是纽结理论的狂热信徒，他是著名期刊《纽结理论及其分支》（Journal of Knot Theory and Its Ramifications）的创始人，以及执行编辑之一；同时也是《世界科学从书：万有纽结》（World Scientific Book Series On Knots and Everything）的编辑。太过官方的介绍，网上都能查到，无需多言。

![](https://pic2.zhimg.com/v2-434d0718e28ee56ddb19af68e8acf271_r.jpg)

这是我第二次在线上看到他。两次演讲，都是手写，想来大佬从来如此。不过好在我看过他的几部书，尤其是《纽结与物理》（Knots And Physics），里面充斥着手写公式，笔法遒劲活泼，章法森严有序。尤其是他的声线，我觉得他可以做配音演员，低沉且富有磁性，标准美国话，如果听力考试是他配音，相信考生都会庆幸。我印象很深刻的一张照片，也是他过生日的照片：头戴王冠，十指架起“满天星”花绳（原图太糊了，就不放了）。Kauffman演讲思路清晰，通俗易懂，是我为数不多能跟得上思路的演讲（我英语听力不太好）。

![](https://pic3.zhimg.com/v2-6e762fe7b157afe9400587345c3fecd8_r.jpg)

![](https://pica.zhimg.com/v2-b2e68931312090ebb2dee6429a67ed90_r.jpg)

今天北京时间凌晨4点（2.6.2025），Allison Henrich教授在主题为《A TOUR OF KNOTTY TRICKS, GAMES, ANDPUZZLES》的演讲中，邀请观众试玩纽结游戏，不过大家都很自觉，所以还是主角登场——Lou和Sofia（Sofia Lambropoulou教授，大会主持人之一），Lou是朋友对Kauffman的昵称。如下图所示，给定一个交叉点空缺的纽结，游戏双方分别称为打结者与解结者。双方交替确定纽结的交叉点类型（右手系、左手系），顾名思义，打结者的游戏目标是最终打结成功，而解结者与之抗衡。记得是在下图f这个交叉点，Allison Henrich问Kauffman的选择，他风趣地说：我想选虚拟交叉点（virtual crossing）……虚拟结理论的开创也是Kauffman的工作之一，现场观众无不会心一笑。

![](https://pic1.zhimg.com/v2-9ee6f27e7a2c2b8cddb24b9ef67d660e_r.jpg)

![](https://pic2.zhimg.com/v2-2e58bd7aafe865532ee80fb58a01d88d_r.jpg)

Allison Henrich教授（[allisonhenrich.com](https://link.zhihu.com/?target=http%3A//allisonhenrich.com/)）是编辑、作家、播客、教育家，她介绍了许多有趣的纽结游戏，并早在演讲开始前，就祝嘱咐观众准备好绳子。我找了半天绳子，无奈，只好连夜把鞋带抽出。如下图，将如下复杂的缠结（tangle）的两端一扯——居然解开了！这就是Allison Henrich教授的开场魔术。还有很多很多趣事，但就此打住。

![](https://pica.zhimg.com/v2-1eb3c95272241a50bbb63cd1212b0f7a_r.jpg)

![](https://pic3.zhimg.com/v2-9f5ae4e903cb0c436d964e5f8d85f216_r.jpg)

不过大会可不是过家家（我不是说Allison Henrich教授的演讲哈），更多是严肃认真的学术探讨。有很多演讲和演讲者，都使人印象深刻。比如我见到了Colin Adams教授，他是《纽结之书》（The Knot Book）的作者。这是一本非常棒的纽结科普书，我从中受益颇多。

![](https://pica.zhimg.com/v2-89e34abed36914428df7b538ccea2850_r.jpg)

![](https://pic4.zhimg.com/v2-b434d1f2fc1a74dab83e130b158e1ed9_r.jpg)

四色定理也和纽结理论有关！Scott Baldridge大佬的演讲令人振奋。他用彩色同调（纽结Khovanov同调的变体）刻画了四色定理的等价条件。他允诺，这个方法将会给出可被人类理解的、简明的四色定理新的证明，并且不依赖计算机。

![](https://pic1.zhimg.com/v2-27c2b93ac939f7604a8cd05136bab83a_r.jpg)

备受瞩目的学术新星——Lisa Piccirillo，是一位漂亮的小姐姐。如果大家对18年的新闻还有印象的话：就是她证明了Connway结不是切片结（slice knot），当时她只是一位博士生。她这次的演讲是构造了一类特殊的（![](https://www.zhihu.com/equation?tex=b_1%3Db_3%3D1)）单连通、可定向、四维闭流形的不变量，可以区分怪异流形（exotic）。

![](https://pic2.zhimg.com/v2-4a98b609ba39a9affe7ed1fd69ec8a43_r.jpg)

![](https://pic1.zhimg.com/v2-74ad947e49b3ba64db163886e0d11832_r.jpg)

说起漂亮小姐姐（跑个题），还有一位，是大会主持人之一，给大家欣赏一下——

![](https://pic4.zhimg.com/v2-63d99a27391c714a479ff9772b07b9e1_r.jpg)

![](https://pic3.zhimg.com/v2-4629796cc604f073c009732e031bd956_r.jpg)

![](https://pic2.zhimg.com/v2-94b56a6cbdf15a71e7dfd37a1df51571_r.jpg)

斗宗Dror Bar-Natan，将Khovanov同调引入到量子拓扑范畴。我在一本纽结书上见过他年轻时候的照片，那时候他还是一头长发，自来卷……不过他的报告我没听，毕竟人类是有限的，我不是Dror（幻视Dio）。

![](https://pic4.zhimg.com/v2-322ee2be6a9e700ed9f22404096663a5_r.jpg)

Edward Witten更是重量级，Dror Bar-Natan的导师。他演讲的内容关于Witten不变量在5维的推广。我真的很努力去听了，但没听懂。短短1个小时，天花乱坠（佛教用语原本褒义），我瞅了屏幕右下角，大佬要讲188页PPT！！！大家自行体会……Witten看上去比较严肃，但实际上不然，他的声音很像一位怯生生的少年，就艺术家李洋老师一样（@李洋画梦）。

![](https://pic3.zhimg.com/v2-f7cdcbf98a99136414e0f4a12dd579a4_r.jpg)

小笠英志教授（Eiji Ogasa）很亲切（萌萌哒~），我也不是第一次在线上见他，我还记得上次他讲的是有关虚拟结的Seifert曲面的内容（如果没记错的话）。他演讲必备：稿纸，自动铅、橡皮，上次甚至是直接手写手绘。他的个人主页（[Eiji Ogasa](https://link.zhihu.com/?target=http%3A//ndimension.g1.xrea.com/)）很有趣，其中罗列著作颇丰，其中很多都有关纽结、高维空间等科普内容。另外，他还是日本科幻作家协会的会员。

![](https://picx.zhimg.com/v2-f813f826a8d34461fc6510ec09e9fb99_r.jpg)

当然，压轴[1]的是我导师（求生欲）Vassily Manturov教授。他介绍的是由他所开创的“图片不变量”理论（Picture Invariant）。一如往常，他叕应用了文言文——兴于诗，立于礼，成于乐（《论语》），不过他每次引用的古诗词，都令人费解，脑洞非常大，好在这次他写了注解：

> Indeed, we first guess solutions from geometry (poetry),   ##几何就是诗歌，都是直觉
> then do some calculations (algebra),    ##代数看来指的是礼，都是循规蹈矩，很严谨
> and perfect it by music (tropical geometry, cluster algebras)    ##最后是乐，几何与代数的大和谐

（##是我狗尾续貂的注解）

（上次他想表达：纽结理论每上一层楼，就感觉风景不同，你以为他引用的是“欲穷千里目，更上一层楼”，但他引用的是“危楼高百尺，手可摘星辰”，境界还是太高了……）

最后我发现了一张导师与Kauffman十分可爱的照片。

![](https://picx.zhimg.com/v2-6a0b66047ddc4af0284221470ca27b87_r.jpg)

还有很多很多珍贵的会议与回忆，各种大佬都历历在目，可惜不能尽述，感兴趣的读者可以自行查看，过一阵子应该有回放

[https://knots-congress.github.io/program/](https://link.zhihu.com/?target=https%3A//knots-congress.github.io/program/)


---

# 有哪些你想发明却已经被人发明了的东西？ R·S

**Author:** R·S  
**Bio:** More is different  
**Avatar:** ![](https://picx.zhimg.com/v2-62d641d062a42fc47ad796c4455feedf_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d3102392e7d4eacdd1fe94f1b189b2fe  
**Published:** 2022.09.21 22:30:12  
**Updated:** 2024.08.29 07:42:43  
**Question:** https://www.zhihu.com/question/31937124  
**Question Created:** 2015.07.05 19:48:27  
**Question Updated:** 2020.05.19 15:21:45  
**Votes:** 31857  
**Comments:** 1984  
**Type:** answer  

初三时发现了一些暴虐中考压轴二次函数题的方法，开始还以为只有我知道而兴奋了好久

提前说明一下，因为我们那几年中考压轴题基本**不看步骤只看答案**，所以我们做题用的方法都比较自由，而当时我又正好自学到了导数，被迷得神魂颠倒，自然就想试试用导数做做这些压轴题

一种很常见的第一问题型是

![](https://picx.zhimg.com/v2-0a3db78ab7bab0d91ba7a06f3a98ff74_r.jpg?source=2c26e567)

求b在哪里时三角形面积最大，虽然很简单可以硬算推出b在ac正中间时面积最大，但是当我用导数算的时候，过程比起硬算直接简洁了几个档次，把我狠狠惊艳到了

![](https://pic1.zhimg.com/v2-284c039c8a12c8c5c10da316247a1002_r.jpg?source=2c26e567)

既然如此简洁，我索性就想算算三角形此时的面积，结果得出一个更惊人的结论！

![](https://picx.zhimg.com/v2-99d56f7cfe5ea9791de7672fd4f7fa11_r.jpg?source=2c26e567)

这个面积公式竟然简洁得只与ac水平宽和二次函数的首相系数有关！有一次很难的模考压轴最后一题刚好就是算这个面积，用了这个公式直接比同学们提前20分钟结束战斗，让我好有成就感哈哈。

但更是让我直接高潮了几天的是下面这个题的出现

![](https://picx.zhimg.com/v2-aca1d8e4a7e09521c98bab6a7813aaa0_r.jpg?source=2c26e567)

这次模考又变了个形，是求AB和CD两条相距h的垂线加起来最长是什么时候。虽然年级上还是有一些人用硬算算了出来，我也一开始是这么想的，但是当我试图去简化问题时，一条新的路出现了，并亮瞎了我的狗眼

![](https://picx.zhimg.com/v2-26f14a817077f410592e2ad8b2814134_r.jpg?source=2c26e567)

一开始我想能不能把两条线这个条件转化到一条线上面去，看着AB+CD这个式子，我突然想到了连接AD，那么我们就得到了一个梯形，而梯形的中位线恰恰是（上底+下底）/2，所以就能转换到讨论中位线HF上了，而一个很自然的想法就是延长HF到E去交与抛物线，这时候HF的长度就能转换为HE-FE了。

这时候美丽的一幕就来了，正是因为是中位线F处于AD正中间，三角形AED的面积是处于最大状态，对应的面积公式刚好是我不久前才算出来的(ah^3)/8，而AD水平宽=h根据条件是不变的，这不正意味着这个三角形的面积也是一个定值吗！而与此同时又因为三角形面积=铅锤高EF·水平宽/2，我们行云流水般得到了EF为定值这一个条件！（这些思路看着多其实在脑子里是一闪而过，顿时豁然开朗的感觉）那么就意味着当EH最长时，问题便解决了，而这个不正是最简单原始的第一种题型吗！

通过一堆操作硬是把最难算的题做成了最简单的题，别提当时有多幸福了。

当然这个可能扯远了，也辛苦各位读到这里的读者，但是那种一环扣一环，一个从问题中诞生的问题又解决了另一个问题的感觉实在是太棒了，希望你们也可以感受到。

导数法还有很多应用，在我的压轴题作业中百战百胜，po几个用导数法做要简单且快一倍的题（可能会误导一些人，但现在的大部分中考都不能超纲的，大家就看个乐，没事自己也可以研究着玩，不要用到考试就行，重点是主动知识迁移）

![](https://picx.zhimg.com/v2-f2cdd6db6db0ab4b6a9c9594fe4111c5_r.jpg?source=2c26e567)

哈哈这个第二问简直是为我量身定制，还故意求立方根怕不是出题人也知道这个三角形面积公式，最后一问求直角三角形两边可以转化为切线再算，非常舒适

![](https://pic1.zhimg.com/v2-78633992b005a02a007797879f8722ac_r.jpg?source=2c26e567)

（红笔是记的正常方法）这题最后一问老师们都激烈讨论了一阵子，而我用我自己不正当的导数法很快就做出来了，过程也非常简洁，哈哈反正只看答案。

尽管老师们都不支持我预习大学内容，我也根本没听，但我中考数学还是如愿以偿考了149，算是解气了吧。后来是跟高中同学聊才知道他们竞赛老师早就介绍过了让他们背结论，只是没有记过程罢了，而像那个特殊三角形面积公式和其他题型的做法他们更是当常识一般，只能说怪我没走竞赛，孤陋寡闻了。

害，不过还是好怀念当时学数学的感觉啊，上了高中开始正式预习大学数学才理解了海上钢琴师中的那句台词的含义

“在琴键上，我能用有限的音符创造无限的乐章，

而在这诺大的座城市里，什么都有，却唯独没有尽头”

数学无限的海洋可以用有限的知识去逼近，亦可以用数不清的数学分支去靠近

初中的我仿佛在解决特定问题的琴键上弹出了无数的解决方法，体会到了无数数学思想和快乐。高中的我看到网上的同龄人动不动就泛函分析解析数论抽象代数几何拓扑近世代数范畴论微分流形调和分析，仿佛我就是那个刚刚踏入城市的1900，想学的东西太多而失去了去深究一小部分知识的耐心和勇气，导致什么都学不出自己的发现，也学不出当年那种天人合一的快感了。

现在高三毕业了，自学了一大堆却都没有很深刻的感觉，希望到了大学这样的瓶颈期能早点过吧，就算我们的发现都可能被他人提前知晓了，也希望依然不影响我们感受到幸福，感受到数学这种至高无上的绝对美丽的认知律令吧。




（一些其他想说的

我们应该从小都是在这样一个自己的想法早就被实现过的世界长大的吧

小时候很疑惑为什么相机的画质比肉眼看到的低几个档次，很激动的问父亲可不可以让相机像眼睛一样有两个甚至更多入光口，这样就能有更好的画质了。可爸爸跟我说“早就有了”

小学时看科普书知道了可能存在能赋予粒子质量的希格斯波色子，激动的跟上大学的表哥说后，却被狠狠的嘲笑了，我发誓长大后一定要发现这个粒子，结果没过几年就被科学家发现了

高中在和同学的交流中我发现人对默契有一种抽象的追求，通过很多天的思考后想了一套解释社会现象的理论叫社会契约论，然后有一天无意间看到了一本一模一样叫社会契约论的书，竟然还是古人写的，看了过后发现自己的思想深度连古人都不如

后面打辩论期间在思考亚文化时突然发现人类的基因几千年来基本没有进化，养育后代的成本太小了，并没有大的进化滤网，现代人和社会大多数的问题都是针对远古时期的基因在失去了对应的环境下时的错位

![](https://pica.zhimg.com/v2-5059e2b58c34d5b206e06214afd55a84_r.jpg?source=2c26e567)

直到我了解到了进化心理学，这些早已经被研究的很深入了

还有一次一个同学问我为什么sin可以被写成无穷级数，我随口答了一句：因为有无穷个零点，事后我突然发现如果把sin写成零点乘积的形式展开后系数明显和原来熟悉的级数是不一样的，从而可以把pai和级数建立等式，兴奋了半天还是因为技术有限推导时卡了，没忍住就上网查了查，结果竟然是欧拉解决巴塞尔问题时的核心思想，顿时感觉错过了一个亿。

而最离谱的一次是在打游戏时，有一个怪物战，碰到一个选怪顺序和我一样的对手，结果出场后呈镜像排列，两边都一动不动，我就这么无语地盯着这个对称的画面，可能是bug，最前面的怪被空气墙平移了一点，结果两边突然就打起来了，看着不断熵增的战斗场面，我有了一种“打破对称导致演化”的想法，好巧不巧，当天晚上公众号就推我了一个“对称破缺”的讲座，看完后人都傻了，“对称破缺”不仅解释了正反物质量不对称和宇宙演化的必然性，还是跨学科临界点及“多者异也”理论的最佳解释，差点没叫出声。。。

其实每个人都有好多好多珍贵的想法和瞬间，但也许抓住并实现他们的能力就是人与人的差距吧，有些东西可能不去查就也不会继续深究了，而真正的学问其实就在其中，在每一个天马行空的想法里，在每一个我们约定俗成的事物里，希望我们在这个“后知识”的时代能重拾深度思考的能力，也许你需要的并没有那么多，那些渴望的无限，会在你用88个有限琴键奏出的无限乐章中，悄然到来吧




（看了评论区发现文章第一题的例子其实有更快更初等的方法就是二次函数减去一次函数（线）还是二次函数，两交点（新二次函数的两个零点）的中点取到最大值，可以直接一句话秒了。原文误以为比这个方法简洁是因为当时有一个作业就是让我们硬算证明（写了满满一页），我一直对这类作业嗤之以鼻，所以与其中的核心思想擦肩而过了。不过我用自己引入的导数方法也同时简化了很多其他问题，为我的解题思路提供了无穷的乐趣和创造力，当做一个“深度思考知识迁移带来快乐”的绝佳例子还是不错的）


---

# ACM竞赛中常见的整数公式与整数分块 严格鸽

**Author:** 严格鸽  
**Bio:** 柚子厨/萝莉控/acm银  
**Avatar:** ![](https://pic1.zhimg.com/v2-9b075ab06357b5bcd82564cff69832f3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0a8f6e4cad644e114b197c5164bb831d  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 106  
**Comments:** 11  
**Type:** article  

经常会遇到一些题目，需要推一些公式，而我们常见的都是整数，所以公式需要特殊处理。

比如对于分数的通分，可以在有理数的范围下使用，但是对于整数就不可以了，因为整数的除法有向下取整和向上取整之分。

![](https://www.zhihu.com/equation?tex=%5Clfloor+%5Cfrac%7B5%7D%7B3%7D+%5Crfloor+%3D+1)，![](https://www.zhihu.com/equation?tex=%5Clceil++%5Cfrac%7B5%7D%7B3%7D%5Crceil+%3D+2)。

计算机是默认向下取整的，所以我们希望将向上取整变成向下取整。

![](https://www.zhihu.com/equation?tex=%5Clceil+%5Cfrac%7Ba%7D%7Bb%7D+%5Crceil+%3D+%5Clfloor+%5Cfrac%7Ba+-+1%7D%7Bb%7D+%5Crfloor+%2B+1)

取模不方便进行公式的化简，所以我们有

![](https://www.zhihu.com/equation?tex=a+%5C+mod+%5C+b+%3D+a+-+%5Clfloor+%5Cfrac%7Ba%7D%7Bb%7D+%5Crfloor%2Ab)

同时我们可以引入一个概念，可以快速计算![](https://www.zhihu.com/equation?tex=%5Bst%2Ced%5D)中![](https://www.zhihu.com/equation?tex=%5Clfloor+%5Cfrac%7Bnum%7D%7Bi%7D+%5Crfloor)的和。

快速计算![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi%3D+st%7D%5E%7Bed%7D%7B%5Clfloor+%5Cfrac%7Bnum%7D%7Bi%7D+%5Crfloor%7D)的方法我们叫整数分块。

[数论分块 - OI Wiki](https://link.zhihu.com/?target=https%3A//oi-wiki.org/math/number-theory/sqrt-decomposition/)

这里给出我的一个板子

// for(int i = st;i<=ed;i++)ans+=num/iintblock(intst,inted,intnum){//sum(num/i i in [st,ed])intL=0;int_ans=0;ed=min(ed,num);for(inti=st;i<=ed;i=L+1){L=min(ed,num/(num/i));//该区间的最后一个数_ans+=(L-i+1)*(num/i);//区间[i,L]的num/i 都是一个值}return_ans;}

利用上面的公式，和整数分块，我们就可以写出一些题目。

[严格鸽：2021浙江acm省赛 F (数学/数论分块)](https://zhuanlan.zhihu.com/p/506371429)

或者这一道。[https://codeforces.com/contest/616/problem/E](https://link.zhihu.com/?target=https%3A//codeforces.com/contest/616/problem/E)

题意：

给定两个数![](https://www.zhihu.com/equation?tex=n%2Cm%28n%2Cm%5Cle+10%5E%7B13%7D%29)，计算![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi+%3D+1%7D%5E%7Bm%7D%7Bn+%5C+mod+%5C+i%7D)

思路：

我们利用上面的公式把取模去掉。

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi+%3D+1%7D%5E%7Bm%7D%7Bn+%5C+mod+%5C+i%7D+%3D+%5Csum_%7Bi+%3D+1%7D%5E%7Bm%7D%7Bn+-+%5Clfloor+%5Cfrac%7Bn%7D%7Bi%7D+%5Crfloor+%2A+i%7D+)

![](https://www.zhihu.com/equation?tex=%3D+m%2An+-+%5Csum_%7Bi+%3D+1%7D%5E%7Bm%7D%7B%5Clfloor+%5Cfrac%7Bn%7D%7Bi%7D+%5Crfloor+%2A+i%7D+)

这时候考虑整数/数论分块中，会出现连续的一段区间其![](https://www.zhihu.com/equation?tex=%5Clfloor+%5Cfrac%7Bn%7D%7Bi%7D+%5Crfloor)的值是相同的，利用这个，我们稍微修改一下整数分块即可。

code

intinv2;//2的逆元//计算 [L,R]的和intcal(intL,intR){return((((L+R)%mod)*((R-L+1)%mod))%mod*inv2)%mod;}intblock(intst,inted,intnum){//sum(num/i i in [st,ed])intL=0;int_ans=0;ed=min(ed,num);for(inti=st;i<=ed;i=L+1){L=min(ed,num/(num/i));//该区间的最后一个数(_ans+=cal(i,L)*(num/i))%=mod;//[i,L]中num/i 都是同一个数}return_ans;}intn,m;voidslove(){cin>>n>>m;inv2=ksm(2,mod-2,mod);intans=((n%mod)*(m%mod))%mod;ans=(ans-block(1,m,n)%mod+mod)%mod;cout<<ans<<endl;}

感谢评论提供的题目

题目链接 ：[第十八届西南科技大学ACM程序设计竞赛 G](https://link.zhihu.com/?target=https%3A//ac.nowcoder.com/acm/contest/33540/G)

题意：

![](https://pic3.zhimg.com/v2-1fa0017dcdfa1ed04e1c9554ee776e92_r.jpg)

化简版题意：

给定![](https://www.zhihu.com/equation?tex=n+%28n+%5Cle+10%5E9%29)计算，![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi%3D+1%7D%5E%7Bn%7D%7B%5Clceil+%5Cfrac%7Bn%7D%7Bi%7D+%5Crceil+%2A+i%5E2%7D)。

我们利用上面的公式拆分下

![](https://www.zhihu.com/equation?tex=%5Csum_%7Bi%3D+1%7D%5E%7Bn%7D%7B%5Clceil+%5Cfrac%7Bn%7D%7Bi%7D+%5Crceil+%2A+i%5E2%7D+%5C%5C%3D+%5Csum_%7Bi+%3D+1%7D%5E%7Bn%7D%7B+%28%5Clfloor+%5Cfrac%7Bn+-+1%7D%7Bi%7D+%5Crfloor+%2B+1%29%2Ai%5E2+++%7D+%5C%5C%3D+%5Csum_%7Bi+%3D+1%7D%5E%7Bn%7D%7B%5Clfloor+%5Cfrac%7Bn+-+1%7D%7Bi%7D+%5Crfloor+%2Ai%5E2%7D+%2B+%5Csum_%7Bi+%3D+1%7D%5E%7Bn%7D%7Bi%5E2%7D)




后半部分可以直接算

![](https://pica.zhimg.com/v2-a9d2b689b1bda36a7281ca7c24a692ce_r.jpg)




前半部分可以用整数分块了。就和上面的一样，区间![](https://www.zhihu.com/equation?tex=%5Bi%2CL%5D)中的数![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bn+-+1%7D%7Bi%7D)的值一样。

code

mintcal(mintn){returnn*(n+1)*(n*2+1)/6;}mintcal(intL,intR){returncal(R)-cal(L-1);}mintblock(intst,inted,intnum){//sum(num/i i in [st,ed])intL=0;mint_ans=0;ed=min(ed,num);for(inti=st;i<=ed;i=L+1){L=min(ed,num/(num/i));//该区间的最后一个数_ans+=mint{cal(i,L)*(num/i)};//就改这里}return_ans;}intn;voidslove(){cin>>n;cout<<(cal(n)+block(1,n,n-1)).get()<<endl;}


---

# Codeforces查作弊机制是怎么样的? huanyizhiyuan

**Author:** huanyizhiyuan  
**Bio:** 致力于男性文娱，是互联网数学领域的小白。  
**Avatar:** ![](https://picx.zhimg.com/v2-e260facf9b218ebe368797c0112afdb1_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/8a25cd955856ea7d502d6517ef2f9ea5  
**Published:** 2025.03.18 13:02:17  
**Updated:** 2025.03.18 13:02:17  
**Question:** https://www.zhihu.com/question/11192455912  
**Question Created:** 2025.02.03 18:38:48  
**Question Updated:** 2025.02.03 18:38:48  
**Votes:** 178  
**Comments:** 51  
**Type:** answer  

队友做过弊，面试花过钱请过CF2600分的人帮搞面试，CF比赛通过加个超级长前缀或者一些无用代码，比如说set，但是我不用，或者我随便用一下，用个O(n)的时间复杂度。




- 超长前缀，比如抄袭源码是：int flag = true;改成： int jdasldjaslkdaldjlsdasflag = true;
- 无用代码，加一堆set和变量，各种copy。
- 代码逻辑套好几个函数，看似不一样，实则上逻辑完全一样，只不过步骤拆分了而已。




怎么说呢，这都是生意，有的学校入队要求CF分数，自然而然就有CF抄袭群，或者组织，我那个队友是我查人不明，太能表演太能装了，前不久还不如我的CF分数，过一会就蓝了，蓝后五场就紫，紫之后十几场橙，然后很快深橙，基本上到红了，诶呀把我这个队友羡慕的，我贼高兴，xx杯还表演一波，说是自己朋友求他给他抄袭代码，然后说是自己很好的朋友，在我们ACM小群里表演的，大家都说不要被这种人搞，后来我盘清楚了整个过程才知道这是他想自己作弊想出来的方法，害怕被人揭穿，所以找了个借口？睿x一坨，天xx一坨，xx杯抄了一个，打CF是为了和加入最强队混个ICPC牌子，然后找工作 or 保研？




这就是人性[飙泪笑]，有利益的地方就有江湖。我的评价是小丑，就算作弊搞到了ICPC金牌，就算赢了，金牌，保研了，实习拿到了，好工作找到了，人生赢家了，我也照样瞧不起这种小丑。




截图示例：

![](https://picx.zhimg.com/v2-8b8d53cd52ee3fd8f9679f479563b9d2_r.jpg?source=2c26e567)


---

# 为什么人可以直观地看出函数局部最小值的大致位置，而计算机不能？ 王大锤

**Author:** 王大锤  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-d337bad2f001e955703924d6ad7257f4_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/181bac090311233610c32df7d5c163c4  
**Published:** 2024.06.04 16:22:29  
**Updated:** 2024.06.04 16:22:29  
**Question:** https://www.zhihu.com/question/657302311  
**Question Created:** 2024.05.27 09:29:46  
**Question Updated:** 2025.12.06 03:22:39  
**Votes:** 1060  
**Comments:** 97  
**Type:** answer  

我就不出复杂的图了

f(x)=x²+3x-6

好, 最小值在哪?

计算机真的是"一眼看出"

而计算机要不给人类把图画出来, 微博里能撕1000楼


---

# 如何智能地在每个数字中间加一个「,」？ 谷雨同学

**Author:** 谷雨同学  
**Bio:** 废物  
**Avatar:** ![](https://picx.zhimg.com/v2-da8cd4b968ccfdb0574b738a7a0808a9_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/1227241c77cf10bf61df8120a62a6cab  
**Published:** 2020.08.09 18:58:05  
**Updated:** 2020.08.09 18:58:05  
**Question:** https://www.zhihu.com/question/412135686  
**Question Created:** 2020.08.05 09:12:28  
**Question Updated:** 2020.08.13 12:36:35  
**Votes:** 4046  
**Comments:** 270  
**Type:** answer  

看了一圈竟然没人说这种方法：

#include<stdio.h>intmain(void){inta[6]={1,2,3,4,5,6},i;for(i=0;i<6;i++){printf(",%d"+!i,a[i]);}return0;}

一行输出，没有 if 语句，非常简洁


---

# 如何评价ZJOI2022？ 陈靖邦

**Author:** 陈靖邦  
**Bio:** 希望能做一点微小的贡献  
**Avatar:** ![](https://picx.zhimg.com/v2-52036ea4c56c3cac67365138e9542439_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0692ea36865ed40e512b80955cccd38e  
**Published:** 2022.05.03 14:09:47  
**Updated:** 2023.04.06 04:09:03  
**Question:** https://www.zhihu.com/question/531164650  
**Question Created:** 2022.05.03 14:04:10  
**Question Updated:** 2022.05.03 14:04:10  
**Votes:** 133  
**Comments:** 26  
**Type:** answer  

题解pdf传送门：

[https://www.dropbox.com/s/skya33cwysgh0cr/ZJOI2022.pdf?dl=0](https://link.zhihu.com/?target=https%3A//www.dropbox.com/s/skya33cwysgh0cr/ZJOI2022.pdf%3Fdl%3D0)

---------------时隔多月的分割线------------------------------------------------------

![](https://pic1.zhimg.com/v2-2490171d6a930d812e8c9f6edc16d125_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-ddd75efe09c07b9e3988a83e6fbd1cc0_r.jpg?source=2c26e567)

[@九条可怜](https://www.zhihu.com/people/46afb04debb847db0bb07c7ef7a971d1)QAQ

出题人来冒个泡，之后会在这里贴题解。先说明下题目背景里与九老师无关的部分都为真实情况。

大家辛苦了！

UPD：很难过，热度全被FJOI抢了，没防到这一手，以后再也不出ZJOI了QAQ

————————严肃的分割线——————-

保证这是第一次也是最后一次出了，大家江湖不见，祝锦绣前程～

题解：目前只有d1t2，d2t1和d2t3，别的在施工中。

补充了d1t1 (5月6日更新），d1t3（5月17日更新），d2t2（5月26日更新）

![](https://picx.zhimg.com/v2-3c1633953f6e6dc3ca64c110ffd6126a_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-f44896a873c914205381744621d08841_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-81fd74d2dfbe156e598a7ed37db00385_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-0283f3b1273734df1876ad7b20dfa648_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d81e2ade1c5c0df300a2aa1a99d8cd9c_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-7ca79b47b2ed77704b58f3c22e0c1a91_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-1214fe639ae5473b3d1e8fa6e4bafc1f_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-ad81cb3ae316db40475d51a33ffc7d6d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c763283aeaecce4249fa972db660a336_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-ebf2f4cdc977fc6617cdd151c2b2d02e_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-338fc956821fa8499ea5553fe9fc368c_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-d360c61ab49c3247501f9930e19cab64_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-272534225cfaab886786e5e55bb17e90_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-93285ebc4991cf802408b0d0320d2e7b_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-02bdc3fa11174ce0b13f8a6436e9b03f_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-b00b694c8fde13e0507946d340a5a5ad_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-15ddde267051b2a66431a67250896887_r.jpg?source=2c26e567)

[@uyom](https://www.zhihu.com/people/a6b3322eaae7eb22403bac9b3b3dbd11)题解更完了，轮到你更小结了～


---

# 有一个高中生认为 OI 非常简单，我该如何帮助他正确认识 OI？ Evan_song

**Author:** Evan_song  
**Bio:** $\varnothing$  
**Avatar:** ![](https://pic1.zhimg.com/v2-26aa8bc0811a1a79c18e3ca799905b51_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b0527ce06ec42a8ab9eb2b97bfbb2cc2  
**Published:** 2023.07.06 18:27:38  
**Updated:** 2023.07.06 18:27:38  
**Question:** https://www.zhihu.com/question/367999364  
**Question Created:** 2020.01.26 18:58:12  
**Question Updated:** 2020.03.02 19:22:31  
**Votes:** 380  
**Comments:** 85  
**Type:** answer  

随别给他两个数，让他排序。

他会在一秒钟内完成。

给他十个数，让他排序。

他会在五秒钟内完成。

给他一百个数，让他排序。

他会在一分钟内完成。

再用一台电脑生成一百万个数，让他排序，允许他使用电脑写程序，但程序需要在1s内跑出结果。

他会？

那好，给他一个数组。

让他区间求和。一百万次询问，1s返回结果。




做完了告诉他，“我们加大难度”。

拓展两个操作，区间乘，区间加和区间求和。

然后让他实现。操作数一百万，数组大小一百万。要求需要在 1s 内实现。




如果他会，他大概率是 OIer


---

# 有一个高中生认为 OI 非常简单，我该如何帮助他正确认识 OI？ da32s1da

**Author:** da32s1da  
**Bio:** ovo  
**Avatar:** ![](https://pic1.zhimg.com/v2-0105be43f9007f49d3a30fb25658ce73_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/6fe75745d982b7c65323153def6f3370  
**Published:** 2020.01.27 14:50:45  
**Updated:** 2020.01.27 14:55:48  
**Question:** https://www.zhihu.com/question/367999364  
**Question Created:** 2020.01.26 18:58:12  
**Question Updated:** 2020.03.02 19:22:31  
**Votes:** 236  
**Comments:** 59  
**Type:** answer  

斐波那契数列第![](https://www.zhihu.com/equation?tex=n)项![](https://www.zhihu.com/equation?tex=%5C%25p)

![](https://www.zhihu.com/equation?tex=n%5Cle+10%5E%7B30000000%7D%2Cp%5Clt+2%5E%7B31%7D)

限他1s内算出来，再告诉他全球超算第一每秒14.8亿亿次浮点运算。


---

# 我大一用 30 多行代码写出了 36 以内的进制转换，属于什么水平？ 不知

**Author:** 不知  
**Bio:**   
**Avatar:** ![](https://pica.zhimg.com/v2-08baeddd82178c0aec4442f1048f1d96_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/e6c074bed3e5325f61feeaa1bc1e4ca7  
**Published:** 2021.05.10 15:23:26  
**Updated:** 2021.05.10 15:24:24  
**Question:** https://www.zhihu.com/question/430885980  
**Question Created:** 2020.11.18 19:03:11  
**Question Updated:** 2020.11.23 18:36:27  
**Votes:** 4220  
**Comments:** 129  
**Type:** answer  

def times(n, base):

string = "0123456789ABCDEF"

if n < base:

return string[n]

else:

return times(n//base,          base)+string[n % base]




print(times(1287, 16))


---

#  Felina

**Author:** Felina  
**Bio:** 星星还是要还给宇宙的  
**Avatar:** ![](https://picx.zhimg.com/v2-99b4577d42061dc5a4cfc498f22a2481_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/09733810a89d25118c12b0514939747f  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 16  
**Type:** pin  

[object Object],[object Object]


---

# 线段树，从入门到入坑 Echoes

**Author:** Echoes  
**Bio:** 高二学渣  
**Avatar:** ![](https://picx.zhimg.com/v2-6958fb4211b6b1ecbfc6a85c1b35e440_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/92f7e6a79d55bca818806e055d9c2eca  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 432  
**Comments:** 34  
**Type:** article  

## 前言

线段树，是数据结构皇冠上的明珠（我编的）。

它用途广泛，被一代代的oier应用，改进，优化。

本文介绍了线段树的基础知识和各种拓展（包括权值线段树，可持久化线段树），各种优化方式（包括zkw线段树，动态开点，离散化），希望能帮到更多的oier。

在学习线段树前，默认你应该学会一下内容：

- 树和二叉树的基本知识（这你总得会吧
- 二叉堆（主要是堆式储存）
- 离散化（其实并不需要）
- 会写代码

如果你不会，左转[oiwiki](https://link.zhihu.com/?target=https%3A//oi-wiki.org/)，如果你会，那么继续读吧！

## 线段树的引入

举个例子，我们现在有一个序列，想维护一段子区间的和，该怎么办呢？

你或许会说，可以暴力！把这个区间的数加起来就行了。

那么如果这个子区间里有1e5个数呢？

前缀和？

如果强制在线呢？

如果在维护区间和的同时维护最大值、并且支持区间修改呢？

我们有很多种办法维护区间问题，比如树状数组，线段树，分块。其中，线段树是较通用且直观的一种数据结构。

## 基础线段树

## 线段树入门

首先，我们有一个序列。

![](https://www.zhihu.com/equation?tex=%5Cleft+%5C%7B+1%2C1%2C4%2C5%2C1%2C4+%5Cright+%5C%7D+)

我们利用二分的思想，用每一个节点表示一个区间，两个子节点表示左右两个子区间。




![](https://pica.zhimg.com/v2-c7275ff9347473aefc63a5a183c1cc12_r.jpg)

然后我们就可以在每个节点处维护一些信息。

注意：实际上，只有最下面一层的叶子节点才保存了实际的数字，其它的每个节点只保存着这个区间的信息（如区间和，区间最值等）

那么如何把子节点的信息传到父节点上呢？

我们要了解一个叫做![](https://www.zhihu.com/equation?tex=pushup)的操作。

voidpushup(intx){tr[x].sum=tr[x*2].sum+tr[x*2+1].sum;}

这个操作的意思就是：节点表示的区间和等于两个子节点所表示的区间之和。即下图：




![](https://pic1.zhimg.com/v2-4366d4d3cb495ac792474d0f7d45d58e_r.jpg)

有了这个操作，我们就可以递归的求出每一个节点所表示的信息。




![](https://pica.zhimg.com/v2-203138a595486ceb129bdadab22afdda_r.jpg)

这个建立线段树的过程可以看作是预处理信息，把数组的信息转移到线段树的叶子节点上，时间复杂度大概是![](https://www.zhihu.com/equation?tex=O%28n%29)

事实上，还有另一种写法的线段树，不需要建树，但是需要![](https://www.zhihu.com/equation?tex=O%28+n%5Clog+n%29)的时间复杂度插入数据，我们会在权值线段树部分介绍这种写法。

**建树代码**

voidbuild(intx,intl,intr){tr[x].l=l,tr[x].r=r;//节点表示区间的左右界if(l==r){//若l=r，说明这个节点是叶子节点，直接赋值tr[x].sum=a[l];//a是原数列return;}intmid=(l+r)/2;//mid表示左右子区间的间隔build(x*2,l,mid),build(x*2+1,mid+1,r);//递归建树//线段树是完全二叉树，左右子节点可以用x*2,x*2+1表示tr[x].sum=tr[x*2].sum+tr[x*2+1].sum;//pushup操作}

## 区间查询

线段树可以在![](https://www.zhihu.com/equation?tex=O%28%5Clog+n%29)的时间复杂度下完成区间查询操作。

以刚刚的数列![](https://www.zhihu.com/equation?tex=%5Cleft+%5C%7B+1%2C1%2C4%2C5%2C1%2C4+%5Cright+%5C%7D)为例。

此时如果询问![](https://www.zhihu.com/equation?tex=%5B3%2C5%5D)之间的区间和，我们该怎么办呢？




![](https://pic2.zhimg.com/v2-00f7d4bed5c2a142cf8930804c9e9701_r.jpg)

首先，如果直接查询![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)的区间和，我们肯定是会的，直接输出10就行。

查询![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)怎么办呢？

可以把![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)拆成![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)和![](https://www.zhihu.com/equation?tex=%5B6%2C6%5D)，然后输出![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)的和。

那么![](https://www.zhihu.com/equation?tex=%5B3%2C5%5D)就可以表示为![](https://www.zhihu.com/equation?tex=%5B3%2C3%5D)和![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)。




![](https://picx.zhimg.com/v2-b5775d3ad40d6cfcaff6eb4a52ac14bd_r.jpg)

所以无论我们查询多大的区间，都可以拆成一些（不超过![](https://www.zhihu.com/equation?tex=%5Clog+n)）预处理过的子区间，把这些子区间的区间和加起来，就是答案。

**区间查询代码**

intquery(intx,intl,intr){//区间查询if(tr[x].l>=l&&tr[x].r<=r)returntr[x].sum;//如果该节点的区间被要查找的区间包括了，那么就不用继续找了，直接返回改节点的值就行了intmid=(tr[x].l+tr[x].r)/2;intsum=0;if(l<=mid)sum+=query(x*2,l,r);//如果当前节点在要查找区间左边界的右面，那么递归查找左子树if(r>mid)sum+=query(x*2+1,l,r);//如果当前节点在要查找区间右边界的左面，那么递归查找右子树returnsum;//由此得出了该区间的值，返回即可}

## 单点修改

单点修改比较简单，不断递归，定位到要找的节点，修改即可。




![](https://pic3.zhimg.com/v2-0a819ceb298ed13fffbc029f6615e178_r.jpg)




**单点修改代码**

voidchange(intnow,intx,intk){//单点修改if(tr[now].l==tr[now].r){tr[now].sum=k;//如果找到了该节点，那么修改它return;}intmid=(tr[now].l+tr[now].r)/2;if(x<=mid)change(now*2,x,k);//如果要寻找的节点在当前节点的左侧，就递归左子树elsechange(now*2+1,x,k);//否则递归右子树tr[now].sum=tr[now*2].sum+tr[now*2+1].sum;//pushup操作，维护每个节点的sum值}

## 线段树的存储

观察线段树，我们发现它是一个完全二叉树，可以用堆式储存法。

即把每个节点都存在一个数组里，因为是完全二叉树，所以两个子节点可以用![](https://www.zhihu.com/equation?tex=2p)，![](https://www.zhihu.com/equation?tex=2p%2B1)表示。

因为线段树大部分节点都不是用来存数字的，所以线段树所用的空间要比原数列的空间多很多，如图，只有红色的节点才是真正存数字的。




![](https://pic4.zhimg.com/v2-89650f3dc43e0447ebad1e272d2676c5_r.jpg)




线段树大概要开四倍的空间，具体可以看[OIwiki](https://link.zhihu.com/?target=https%3A//oi-wiki.org/ds/seg/%23%25E7%25BA%25BF%25E6%25AE%25B5%25E6%25A0%2591%25E7%259A%2584%25E5%259F%25BA%25E6%259C%25AC%25E7%25BB%2593%25E6%259E%2584%25E4%25B8%258E%25E5%25BB%25BA%25E6%25A0%2591)上的分析。

## 例题1：单点修改，区间查询

[洛谷P3374](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3374)

已知一个数列，进行下面两种操作： - 将某一个数加上![](https://www.zhihu.com/equation?tex=x)- 求出某区间每一个数的和

**题目分析**

相当于模板题，可以尝试着敲一遍，这里提供代码。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e6+10;structnode{intsum,l,r;//线段树节点的结构体}tr[N*4];//线段树需要开四倍空间inta[N];inlinevoidpushup(intx){tr[x].sum=tr[x*2].sum+tr[x*2+1].sum;}voidbuild(intx,intl,intr){tr[x].l=l,tr[x].r=r;//节点表示区间的左右界if(l==r){//若l=r，说明这个节点是叶子节点，直接赋值tr[x].sum=a[l];//a是原数列return;}intmid=(l+r)/2;//mid表示左右子区间的间隔build(x*2,l,mid),build(x*2+1,mid+1,r);//递归建树//线段树是完全二叉树，左右子节点可以用x*2,x*2+1表示pushup(x);//pushup操作}intquery(intx,intl,intr){//区间查询if(tr[x].l>=l&&tr[x].r<=r)returntr[x].sum;//如果该节点的区间被要查找的区间包括了，那么就不用继续找了，直接返回改节点的值就行了intmid=(tr[x].l+tr[x].r)/2;intsum=0;if(l<=mid)sum+=query(x*2,l,r);//如果当前节点在要查找区间左边界的右面，那么递归查找左子树if(r>mid)sum+=query(x*2+1,l,r);//如果当前节点在要查找区间右边界的左面，那么递归查找右子树returnsum;//由此得出了该区间的值，返回即可}voidchange(intnow,intx,intk){//单点修改if(tr[now].l==tr[now].r){tr[now].sum+=k;//如果找到了该节点，那么修改它return;}intmid=(tr[now].l+tr[now].r)/2;if(x<=mid)change(now*2,x,k);//如果要寻找的节点在当前节点的左侧，就递归左子树elsechange(now*2+1,x,k);//否则递归右子树pushup(now);//pushup操作，维护每个节点的sum值}intn,q;intmain(){cin>>n>>q;for(inti=1;i<=n;i++)cin>>a[i];build(1,1,n);//建树while(q--){intt,b,c;cin>>t>>b>>c;if(t==1)change(1,b,c);elsecout<<query(1,b,c)<<endl;}}

## 习题

学会了线段树最基础的部分，就可以做一些习题了，将在博客的最后提供题解和代码。

- JSOI2008 最大数 线段树维护最大值的模板
- loj10123. Balanced Lineup RMQ问题，可以试试用线段树做

## 懒标记

下面请思考，怎么才能做到线段树的区间修改呢？

如果直接把区间遍历一遍，依次修改，复杂度会达到无法接受的![](https://www.zhihu.com/equation?tex=O%28n%5Clog+n%29)。

那么怎么能让区间修改的复杂度变小呢？

我们需要引入一个叫做“懒标记”的东西。

懒标记也叫延迟标记，顾名思义，我们再修改这个区间的时候给这个区间打上一个标记，这样就可以做到区间修改的![](https://www.zhihu.com/equation?tex=O%28%5Clog+n%29)的时间复杂度。

如图，如果要给![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)每个数都加上![](https://www.zhihu.com/equation?tex=2)，那么直接再代表着![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)区间的结点打上![](https://www.zhihu.com/equation?tex=%2B2)的标记就行了。




![](https://pica.zhimg.com/v2-bc1ccc95866946173e5b296819abf596_r.jpg)




## pushdown操作

再想一个问题，在给![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)区间打上懒标记后，我们如何查询![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)的值？

如果我们直接查询到![](https://www.zhihu.com/equation?tex=%5B4%2C5%5D)区间上，会发现根本就没有被加上过2。

为什么呢?

因为现在懒标记打在了![](https://www.zhihu.com/equation?tex=%5B4%2C6%5D)区间上。而他的子节点压根没被修改过！

所以我们需要把懒标记向下传递。

这就有了一个操作，叫做pushdown，它可以把懒标记下传。

设想一下，如果我们要把懒标记下传，应该注意什么呢？

首先，要给子节点打上懒标记。

然后，我们要修改子节点上的值。

最后，不要忘记把这个节点的懒标记清空。

**pushdown代码**

inlinevoidpushudown(intx){if(tr[x].add){//如果这个节点上有懒标记tr[2*x].add+=tr[x].add,tr[2*x+1].add+=tr[x].add;//把这个节点的懒标记给他的两个子节点tr[2*x].sum+=tr[x].add*(tr[2*x].r-tr[2*x].l+1);tr[2*x+1].sum+=tr[x].add*(tr[2*x+1].r-tr[2*x+1].l+1);//分别给它的两个子节点修改tr[x].add=0;//别忘了清空这个节点的懒标记}}

## 区间修改

学会了懒标记，应该可以很轻松地写出区间修改的代码了。

区间修改的操作很像区间查询，也是查找能够覆盖住的子区间，然后给它打上懒标记。

**区间查询代码**

voidupdate(intnow,intl,intr,intk){if(l<=tr[now].l&&r>=tr[now].r){//如果查到子区间了tr[now].sum+=k*(tr[now].r-tr[now].l+1);//先修改这个区间tr[now].add+=k;//然后给它打上懒标记//注：这里一定要分清顺序，先修改，再标记！}else{//如果需要继续向下查询pushudown(now);//一定要先把懒标记向下传intmid=(tr[now].l+tr[now].r)/2;//这里很像区间查询if(l<=mid)update(now*2,l,r,k);if(r>mid)update(now*2+1,l,r,k);//最后别忘了pushup一下pushup(now);}}

## 例题2：区间修改，区间查询

[洛谷P3372](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3372)

已知一个数列，你需要进行下面两种操作：

- 将某区间每一个数加上。
- 求出某区间每一个数的和。

**题目分析**

应用到区间修改，需要注意的一点是，在区间查询时，也需要下传懒标记，这样才能查询到真实的值。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e5+10;structnode{intsum;intl,r;intadd;//懒标记}tr[N*4];//线段树要开四倍空间哦inta[N];//原数列inlinevoidpushup(intx){tr[x].sum=tr[2*x].sum+tr[2*x+1].sum;//pushup操作}inlinevoidpushudown(intx){if(tr[x].add){//如果这个节点上有懒标记tr[2*x].add+=tr[x].add,tr[2*x+1].add+=tr[x].add;//把这个节点的懒标记给他的两个子节点tr[2*x].sum+=tr[x].add*(tr[2*x].r-tr[2*x].l+1);tr[2*x+1].sum+=tr[x].add*(tr[2*x+1].r-tr[2*x+1].l+1);//分别给它的两个子节点修改tr[x].add=0;//别忘了清空这个节点的懒标记}}voidbuild(intx,intl,intr){//建树操作tr[x].l=l,tr[x].r=r,tr[x].add=0;if(l==r){tr[x].sum=a[l];return;}intmid=(l+r)/2;build(2*x,l,mid),build(2*x+1,mid+1,r);pushup(x);}intquery(intx,intl,intr){if(l<=tr[x].l&&r>=tr[x].r)returntr[x].sum;pushudown(x);//注意，区间查询时也要下懒传标记intmid=(tr[x].l+tr[x].r)/2,sum=0;if(l<=mid)sum+=query(x*2,l,r);if(r>mid)sum+=query(x*2+1,l,r);returnsum;}voidupdate(intnow,intl,intr,intk){if(l<=tr[now].l&&r>=tr[now].r){//如果查到子区间了tr[now].sum+=k*(tr[now].r-tr[now].l+1);//先修改这个区间tr[now].add+=k;//然后给它打上懒标记//注：这里一定要分清顺序，先修改，再标记！}else{//如果需要继续向下查询pushudown(now);//先把懒标记向下传intmid=(tr[now].l+tr[now].r)/2;//这里很像区间查询if(l<=mid)update(now*2,l,r,k);if(r>mid)update(now*2+1,l,r,k);pushup(now);//最后别忘了pushup一下}}intn,q;intmain(){cin>>n>>q;for(inti=1;i<=n;i++)cin>>a[i];build(1,1,n);while(q--){intl,r,k,c;cin>>c>>l>>r;if(c==1){cin>>k;update(1,l,r,k);}elsecout<<query(1,l,r)<<endl;}return0;}//别忘了开long long哦

## 例题3：较复杂的区间操作

[洛谷P3373](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3373)

已知一个数列，你需要进行下面三种操作：

- 将某区间每一个数乘上。
- 将某区间每一个数加上。
- 求出某区间每一个数的和。

**题目分析**

有些题要维护多个区间操作，这在pushdown操作上就比较麻烦，比如这道题，要求维护区间加法和区间乘法，所以我们得维护两个懒标记。

那么我们该怎样安排懒标记的pushdown顺序呢？

我们考虑先乘后加的维护顺序，假设两个懒标记分别是![](https://www.zhihu.com/equation?tex=mul)和![](https://www.zhihu.com/equation?tex=add)，那么这个数值就应该是![](https://www.zhihu.com/equation?tex=mul+%5Ctimes+sum%2Badd)。

此时如果加上一个![](https://www.zhihu.com/equation?tex=add)，就会变成![](https://www.zhihu.com/equation?tex=mul+%5Ctimes+sum%2Badd%2Badd)

如果乘上一个![](https://www.zhihu.com/equation?tex=mul)那就是![](https://www.zhihu.com/equation?tex=mul+%5Ctimes+sum+%5Ctimes+mul%2Badd+%5Ctimes+mul)

这种方式便于计算，如果使用先加后乘的方式，就会比较麻烦甚至会出错。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e5+10;structnode{intl,r;intsum,add,mul;}tr[N*4];//线段树开四倍空间inta[N];intn,p,m;inlinevoidpushup(intx){tr[x].sum=(tr[2*x].sum+tr[2*x+1].sum)%p;}inlinevoideval(intx,intadd,intmul){//我们把计算懒标记单独放在这个函数里，否则好多东西挤一块很难看tr[x].sum=(tr[x].sum*mul+add*(tr[x].r-tr[x].l+1))%p;tr[x].mul=(mul*tr[x].mul)%p;//先计算乘法懒标记tr[x].add=(tr[x].add*mul+add)%p;//再算加法懒标记}inlinevoidpushdown(intx){//依次计算两个子节点的值和懒标记eval(x*2,tr[x].add,tr[x].mul);eval(x*2+1,tr[x].add,tr[x].mul);tr[x].add=0,tr[x].mul=1;//清空懒标记，注意：乘法懒标记要初始化成1}voidbuild(intx,intl,intr){tr[x].l=l,tr[x].r=r;tr[x].add=0,tr[x].mul=1;//乘法懒标记要初始化成1if(l==r){tr[x].sum=a[l];return;}intmid=(l+r)/2;build(x*2,l,mid),build(x*2+1,mid+1,r);//递归建树pushup(x);}voidchange(intx,intl,intr,intadd,intmul){if(l<=tr[x].l&&r>=tr[x].r)eval(x,add,mul);//计算else{pushdown(x);intmid=(tr[x].l+tr[x].r)/2;if(l<=mid)change(x*2,l,r,add,mul);if(r>mid)change(x*2+1,l,r,add,mul);pushup(x);}}intquery(intx,intl,intr){if(l<=tr[x].l&&r>=tr[x].r)returntr[x].sum;intsum=0;pushdown(x);//区间查询时也要pushdownintmid=(tr[x].l+tr[x].r)/2;if(l<=mid)sum+=query(x*2,l,r)%p;if(r>mid)sum+=query(x*2+1,l,r)%p;returnsum;}intmain(){intt,g,c,ch;cin>>n>>m>>p;for(inti=1;i<=n;i++)cin>>a[i];build(1,1,n);while(m--){cin>>ch>>t>>g;if(ch==1){cin>>c;change(1,t,g,0,c);}elseif(ch==2){cin>>c;change(1,t,g,c,1);}elsecout<<query(1,t,g)%p<<endl;}return0;}//记得开longlong

## 标记永久化

其实，维护区间修改的方式有两种，一种是懒标记和标记下传，另一种叫做”标记永久化“。

标记永久化，就是不下传标记，在每次查询时把经过的标记累加起来，查询时加起来。




![](https://picx.zhimg.com/v2-2a4e2efba7dd35f9c8b5ba90e2050ddd_r.jpg)

如图，打上标记的节点用绿色表示，查询路线（橙色）经过的就累加。

**标记永久化代码**

constintN=1e4+10;structnode{intsum,add;intl,r;}tr[N*4];inta[N];voidbuild(intx,intl,intr){tr[x].l=l,tr[x].r=r;if(l==r){tr[x].sum=a[l],tr[x].add=0;return;}intmid=(l+r)/2;build(x*2,l,mid),build(x*2+1,mid+1,r);tr[x].sum=tr[x*2].sum+tr[x*2+1].sum;//标记永久化中只有建树时需要用到pushup操作}voidupdate(intx,intl,intr,intk){tr[x].sum+=(min(tr[x].r,r)-max(tr[x].l,l)+1)*k;//要取一个交集来加if(tr[x].l>=l&&tr[x].r<=r){tr[x].add+=k;//给节点打上标记后不用下传。return;}intmid=(tr[x].l+tr[x].r)/2;if(l<=mid)update(x*2,l,r,k);if(r>mid)update(x*2+1,l,r,k);}intquery(intx,intl,intr,intadd){if(tr[x].l>=l&&tr[x].r<=r){ints=(tr[x].r-tr[x].l+1)*add;//查询到节点后给这个区间乘上addreturntr[x].sum+s;}add+=tr[x].add;//add代表查询经过的懒标记之和intmid=(tr[x].l+tr[x].r)/2,sum=0;if(l<=mid)sum+=query(x*2,l,r,add);if(r>mid)sum+=query(x*2+1,l,r,add);returnsum;}

标记永久化应用很多，比如可持久化线段树中的区间修改，树套树中第二维的修改。（后面都将讲到）

## 习题

这里给出一些习题，按照难度排序。

- AHOI2009 维护序列 与例题3差不多
- 洛谷P1253 扶苏的问题 稍微复杂的懒标记维护
- 洛谷P5142 区间方差 需要一定的数学推导能力
- P4145 花神游历各国 想一想如何优化？
- P1471 方差 3题的加强版，较难
- P6327 区间加区间sin和 需要一些高中的数学知识

## 权值线段树

权值线段树是线段树的一种衍生算法，其基本存储结构和线段树基本相同。

权值线段树与线段树的不同点在于，线段树维护区间信息，权值线段树维护值域信息。

如图，权值线段树就长这个样子。

![](https://pic1.zhimg.com/v2-676d9ff5b8e771471a9cdcbd553ca212_r.jpg)

看起来和线段树没什么区别吧，现在我们插入一个数![](https://www.zhihu.com/equation?tex=4)。




![](https://pic4.zhimg.com/v2-0f23c5584e560dc9093fcaeb0a4a6041_r.jpg)

每一个包含![](https://www.zhihu.com/equation?tex=4)的区间都被加上了1。

那么每个区间维护的到底是什么呢？

是这个区间内的数的数量。

当我们依次插入![](https://www.zhihu.com/equation?tex=%5C%7B4%2C1%2C7%2C2%2C8+%5C%7D)后，这个权值线段树就变成了这样。




![](https://picx.zhimg.com/v2-718e905df7b8c8890d3a5c5dac465495_r.jpg)

这就是权值线段树的原理。

权值线段树可以干很多事情，比如查询第![](https://www.zhihu.com/equation?tex=k)小，查找前驱后继等。

## 插入与删除

想一想，我们该如何实现插入一个数的操作呢？

把从这个数的节点到根节点的路径上每一个节点都加上1即可。

删除呢？

减去1就行了。

**代码模板**

inttr[N*4];//这就是上文提到过的线段树的另一种写法，因为权值线段树不需要维护区间信息，所以不需要建树的预处理，这种写法就变得很方便。inlinevoidpushup(intx){tr[x]=tr[x*2]+tr[x*2+1];}voidinsert(intx,intl,intr,intk){//插入一个数kif(l==r){tr[x]++;return;}intmid=(l+r)/2;if(k<=mid)insert(x*2,l,mid,k);elseinsert(x*2+1,mid+1,r,k);pushup(x);}voiddel(intx,intl,intr,intk){//删除一个数kif(l==r){tr[x]--;return;}intmid=(l+r)/2;if(k<=mid)del(x*2,l,mid,k);elsedel(x*2+1,mid+1,r,k);pushup(x);}intquery(intx,intl,intr,intql,intqr){//查询ql，qr之间一共有多少个数if(l>=ql&&r<=qr)returntr[x];intmid=(l+r)/2,sum=0;if(ql<=mid)sum=query(x*2,l,mid,ql,qr);if(qr>mid)sum+=query(x*2+1,mid+1,r,ql,qr);returnsum;}

## 例题4：权值线段树

[loj 10116](https://link.zhihu.com/?target=https%3A//loj.ac/p/10116)

NK 中学组织同学们去五云山寨参加社会实践活动，按惯例要乘坐火车去。由于 NK 中学的学生很多，在火车开之前必须清点好人数。

初始时，火车上没有学生。当同学们开始上火车时，年级主任从第一节车厢出发走到最后一节车厢，每节车厢随时都有可能有同学上下。年级主任走到第![](https://www.zhihu.com/equation?tex=m)节车厢时，他想知道前![](https://www.zhihu.com/equation?tex=m)节车厢上一共有多少学生。每次提问，m 总会比前一次大。

**题目分析**

很明显可以用权值线段树做，维护每个区间的数的数量，具体见代码。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=5e5+10;inttr[N*4];//权值线段树维护的是值域，所以要开n的范围的四倍inlinevoidpushup(intx){tr[x]=tr[x*2]+tr[x*2+1];}voidinsert(intx,intl,intr,intk,intp){if(l==r){tr[x]+=p;return;}intmid=(l+r)/2;if(k<=mid)insert(x*2,l,mid,k,p);elseinsert(x*2+1,mid+1,r,k,p);pushup(x);}intquery(intx,intl,intr,intql,intqr){if(l>=ql&&r<=qr)returntr[x];intmid=(l+r)/2,sum=0;if(ql<=mid)sum=query(x*2,l,mid,ql,qr);if(qr>mid)sum+=query(x*2+1,mid+1,r,ql,qr);returnsum;}intn,k;intmain(){cin>>n>>k;while(k--){charopt;intm,p;cin>>opt;if(opt=='A'){cin>>m;cout<<query(1,1,n,1,m)<<endl;}elseif(opt=='B'){//上车cin>>m>>p;insert(1,1,n,m,p);}else{//下车cin>>m>>p;insert(1,1,n,m,-p);}}}

## 查询第k大数

请注意，这个查询第k大是针对整个权值线段树的，要查区间第k大请去学主席树或树套树。

权值线段树是维护值域的，一个节点的左右端点都应该是一个具体的数字，而且值域肯定是递增的，所以我们可以二分。

如果![](https://www.zhihu.com/equation?tex=k)小于区间中点，那么也就说明结果为左区间第![](https://www.zhihu.com/equation?tex=k)大数。否则，也就说明结果为右区间第![](https://www.zhihu.com/equation?tex=k%E2%88%92l_%7Bsize%7D)大数。

**代码**

intkth(intx,intl,intr,intk){if(l==r)returnl;//查到了，返回即可intmid=(l+r)/2;if(k<=tr[x*2])returnkth(x*2,l,mid,k);returnkth(x*2+1,mid+1,r,k-tr[x*2]);}

## 查询一个数的排名

和查询第k大差不多。

每次把![](https://www.zhihu.com/equation?tex=x)与当前区间中点![](https://www.zhihu.com/equation?tex=mid)比较，如果小于等于![](https://www.zhihu.com/equation?tex=mid)，说明在左区间，向左儿子寻找。 如果大于![](https://www.zhihu.com/equation?tex=mid)，说明在右区间，这时，它的排名要加上左子树的大小（它比整个左子树的数都大）

如果找到叶子节点了，那么返回![](https://www.zhihu.com/equation?tex=1)(在![](https://www.zhihu.com/equation?tex=%5Bl%2Cr%5D)的区间只有自己，排名第一)

**代码**

intrnk(intx,intl,intr,intk){if(l==r)return1;intmid=(l+r)/2;if(k<=mid)returnrnk(x*2,l,mid,k);returnrnk(x*2+1,mid+1,r,k)+tr[x*2];}

## 例题5：用权值线段树实现平衡树

[洛谷P3369](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3369)

实现一个数据结构，来维护一些数，其中需要提供以下操作：

- 插入数
- 删除数(若有多个相同的数，应只删除一个)
- 查询数的排名(排名定义为比当前数小的数的个数)
- 查询排名为的数
- 求的前驱(前驱定义为小于，且最大的数)
- 求的后继(后继定义为大于，且最小的数)

**题目分析**

正宗解法自然是平衡树，但是仔细观察这些操作，似乎都可以用权值线段树解决？

前四个操作我们已经讲解过了，只剩下最后两个：求前驱和后继。

前驱实际上就是比![](https://www.zhihu.com/equation?tex=x)的排名小一位的数，也就是kth(rnk(x)-1)。

后继就是![](https://www.zhihu.com/equation?tex=x%2B1)的排名位置的数，也就是kth(rnk(x+1))。

那么我们就可以写出代码了？

**没AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e7+10;inttr[8*N];//因为要维护正负区间，所以开二倍，再加线段树的四倍空间，就是八倍inlinevoidpushup(intx){tr[x]=tr[x*2]+tr[x*2+1];}voidinsert(intx,intl,intr,intk,intp){//若p为1则插入，若p为-1则删除if(l==r){tr[x]+=p;return;}intmid=(l+r)/2;if(k<=mid)insert(x*2,l,mid,k,p);elseinsert(x*2+1,mid+1,r,k,p);pushup(x);}intkth(intx,intl,intr,intk){//查询排名为k的数if(l==r)returnl;intmid=(l+r)/2;if(k<=tr[x*2])returnkth(x*2,l,mid,k);returnkth(x*2+1,mid+1,r,k-tr[x*2]);}intrnk(intx,intl,intr,intk){//查找数k的排名if(l==r)return1;intmid=(l+r)/2;if(k<=mid)returnrnk(x*2,l,mid,k);returnrnk(x*2+1,mid+1,r,k)+tr[x*2];}intn;intmain(){cin>>n;while(n--){intopt,x;cin>>opt>>x;switch(opt){case1:insert(1,-N,N,x,1);//插入break;case2:insert(1,-N,N,x,-1);//删除break;case3:cout<<rnk(1,-N,N,x)<<endl;break;case4:cout<<kth(1,-N,N,x)<<endl;break;case5:cout<<kth(1,-N,N,rnk(1,0,N,x)-1)<<endl;break;case6:cout<<kth(1,-N,N,rnk(1,0,N,x)+1)<<endl;break;}}}

细心的你会发现，这个线段树怎么开了![](https://www.zhihu.com/equation?tex=8%5Ctimes10%5E7)呢？肯定会爆空间啊。

但是题目要求的![](https://www.zhihu.com/equation?tex=%7Cx%7C%5Cle10%5E7)却令我们不得不开这么大。

怎么办呢？

一般来说，优化线段树空间的有两种方法。

一种是离散化后再进行操作（离线），一种是动态开点。

（这两种方法都会在下一节介绍到）

在这道题中，我们可以使用动态开点的方式，优化空间。

**‘动态开点代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e7+10,M=4e5+10;inttr[M];intls[M],rs[M],tot=0;inlinevoidpushup(intx){tr[x]=tr[ls[x]]+tr[rs[x]];//动态开点后，就不能用x*2的方式存了，得开lsrs两个数组（或结构体）}voidinsert(int&x,intl,intr,intk,intp){//x是引用形式，方便传值if(!x)x=++tot;//动态开点//若p为1则插入，若p为-1则删除if(l==r){tr[x]+=p;return;}intmid=(l+r)/2;if(k<=mid)insert(ls[x],l,mid,k,p);elseinsert(rs[x],mid+1,r,k,p);pushup(x);}intkth(intx,intl,intr,intk){if(l==r)returnl;//查到了，返回即可intmid=(l+r)/2;if(k<=tr[ls[x]])returnkth(ls[x],l,mid,k);returnkth(rs[x],mid+1,r,k-tr[ls[x]]);}intrnk(intx,intl,intr,intk){if(l==r)return1;intmid=(l+r)/2;if(k<=mid)returnrnk(ls[x],l,mid,k);returnrnk(rs[x],mid+1,r,k)+tr[ls[x]];}intn,root;intmain(){cin>>n;while(n--){intopt,x;cin>>opt>>x;switch(opt){case1:insert(root,-N,N,x,1);//因为动态开点的插入写成引用形式，所以需要带进去一个变量break;case2:insert(root,-N,N,x,-1);//删除break;case3:cout<<rnk(root,-N,N,x)<<endl;break;case4:cout<<kth(root,-N,N,x)<<endl;break;case5:cout<<kth(root,-N,N,rnk(root,-N,N,x)-1)<<endl;break;case6:cout<<kth(root,-N,N,rnk(root,-N,N,x+1))<<endl;break;}}}

如果想学习离散化的解法，可以看这位%%%的[博客](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/blog/olinr/quan-zhi-xian-duan-shu)。

## 空间优化技巧

这里介绍两种优化方式：离散化和动态开点。

两种方法其实各有优劣，如果只是为了缩小值域，离散化似乎更好写一点，但是动态开点还可以被应用到可持久化、线段树合并和分裂上，所以都学一学吧。

## 离散化

数据范围太大了，需要缩小数据范围，这句话让你想到了什么？

当然是离散化了！

所以我们可以把所有操作都存起来，排序然后离散化，离线进行操作。

如果你不会离散化，请看这篇[博客](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/blog/luhaoren/Discretization)。

## 动态开点

动态开点，顾名思义，就是使用的时候再开点。

如果数据范围是![](https://www.zhihu.com/equation?tex=%5B-10%5E7%2C10%5E7%5D)，在权值线段树的使用过程中，很大一部分的节点会使用不到，这会造成一种浪费。

动态开点的意思就是：不一上来就把所有的节点全部建立起来，只在需要用到一个节点的时候再建立一个节点。

注意：使用动态开点线段树的话，节点的下标将是无序的，因此必须建立结构体或用两个数组来分别保存一个节点的左右子节点。

**代码模板**

inttr[M];intls[M],rs[M],tot=0;inlinevoidpushup(intx){tr[x]=tr[ls[x]]+tr[rs[x]];//动态开点后，就不能用x*2的方式存了，得开lsrs两个数组（或结构体）}voidinsert(int&x,intl,intr,intk){//x是引用形式，方便传值if(!x)x=++tot;//动态开点if(l==r){tr[x]++;return;}intmid=(l+r)/2;if(k<=mid)insert(ls[x],l,mid,k);elseinsert(rs[x],mid+1,r,k);pushup(x);}

## 习题

提供几道权值线段树的习题

- loj10114.数星星 Stars  权值线段树，需要用动态开点或离散化的优化
- P1168 中位数  离散化，然后开权值线段树维护
- P2073 送花  可以用权值线段树做
- SDOI2014 旅行  树链剖分（如果你会的话），用动态开点维护

## zkw线段树

zkw线段树是一种用循环实现的线段树，比正常的递归式线段树快很多，而且好写。

## zkw线段树的引入

我们观察一个线段树的结构，按照堆式储存，叶子节点的序号是连续的。




![](https://pic4.zhimg.com/v2-249c35287c9547e0fd5d04f9298d1b1d_r.jpg)

而原数组中的数字编号也恰恰是连续的，所以二者之间有一个对应关系。

仔细观察，发现两者序号之差竟然是一个定值。

所以，我们就可以快速地找到数字在线段树中的位置，即x+N（N为差值）。

而这个![](https://www.zhihu.com/equation?tex=N)就应该是线段树中抛去叶子节点之外的节点的数量。

为了方便，我们约定，无论树有没有那么大，我们都把![](https://www.zhihu.com/equation?tex=N)看作![](https://www.zhihu.com/equation?tex=n)，无数据的叶节点空置即可。

这样我们就可以通过循环的方式，完成线段树的初始化。

**建树代码**

inttr[N*4];//zkw线段树不用维护子区间，直接开数组就行intn,m;voidbuild(){cin>>n>>m;for(inti=n+1;i<=2*n;i++)cin>>tr[i];//直接读入到叶子节点里for(inti=n-1;i>=1;i--)tr[i]=tr[i*2]+tr[i*2+1];//自底向上更新}

建树才三行代码，还包括了读入，zkw线段树是不是很神奇？

## 单点修改&区间查询

## 单点修改

找到了数字在线段树中的位置，怎么更新它的父节点呢？

按照堆式储存的特点，节点的父节点就应该是![](https://www.zhihu.com/equation?tex=x%2F2)（x是这个节点）

那么从叶子节点开始，一步步地向上爬，更新，就完成了一次单点修改。

这也是zkw线段树的一个特色——自底向上。




![](https://pic2.zhimg.com/v2-473326ba775b4c42dfb13e787822290f_r.jpg)

**单点修改代码**

inlinevoidchange(intx,intk){//给x加上kfor(inti=x+=n;i;i/=2)tr[i]+=k;//自底向上更新}

看完单点修改，相信大家已经会了单点查询，那就是：

**单点查询代码**

inlineintquery_one(intx){//查询x值returntr[x+n];}

## 区间查询

接下来思考，如何做到区间查询呢？

如图，以查询![](https://www.zhihu.com/equation?tex=%5B3%2C6%5D)区间之和为例，我们先设两个指针![](https://www.zhihu.com/equation?tex=p%2Cq)，让![](https://www.zhihu.com/equation?tex=p%3Dl-1%2Cq%3Dr%2B1)。




![](https://pic1.zhimg.com/v2-8ec864c2c5821f0622a61776bc841c82_r.jpg)




然后让![](https://www.zhihu.com/equation?tex=p)和![](https://www.zhihu.com/equation?tex=q)一直往上跳，直到两个指针的父节点相同。




![](https://pic1.zhimg.com/v2-bd16c597942efb9f5e6af5f6b094997a_r.jpg)

有没有发现，这两个指针笼罩的地方，就是我们要查询的区间。

多观察一会，我们会发现一个规律：

- 指向的节点是左儿子，那么答案加上右儿子的值
- 指向的节点是右儿子，那么答案加上左儿子的值

**区间查询代码**

inlineintquery(intl,intr){intans=0;for(intp=l-1,q=r+1;p/2!=q/2;p/=2,q/=2){if(!(p%2))ans+=tr[p+1];//第一种情况if(q%2)ans+=tr[q-1];//第二种情况}returnans;}

## 习题

- P3374 单点修改，区间查询  用zkw线段树再做一遍

## 区间修改&单点查询

## 区间修改

zkw线段树也支持区间修改，但是由于很难做到pushdown，所以zkw线段树采用标记永久化的方式进行区间修改。

区间修改和区间查询差不多，也是维护两个指针，不同点是：从累加答案变成修改懒标记。

**区间修改代码**

voiduplate(intl,intr,intk){//给l,r区间内的数加上kfor(intp=l-1,q=r+1;p/2!=q/2;p/=2,q/=2){if(!(p%2))add[p+1]+=k;if(q%2)add[q-1]+=k;}}

## 单点查询

在有懒标记的情况下，单点查询也变得不同。

首先自底向上累加所有祖宗节点的懒标记，然后再加上本身的值。

**单点查询代码**

inlineintquery_one(intx){//查询x值intsum=0;for(inti=x+=n;i;i/=2)sum+=add[i];returntr[x+n]+add[i];}

## 习题

- P3372 线段树1 用zkw线段树做一遍
- P3368 树状数组2 区间修改，单点查询

## 可持久化线段树

可持久化线段树 ，顾名思义，就是可以保留每一个历史版本，并且支持在历史版本上进行操作的线段树。

为什么要可持久化呢?有的时候离线维护扫描线之类的东西时，就需要在时间轴里穿梭，这就需要历史版本；权值线段树如果能可持久化，就可以维护区间的数据，达到静态树套树的效果。

那么如何可持久化呢？

首先，最暴力的做法就是，开![](https://www.zhihu.com/equation?tex=n)个线段树，但是这样肯定会爆空间，所以，我们得想点别的招。

如图，这是一个普通的线段树。

![](https://picx.zhimg.com/v2-3a050121ebd347c0afd87730f3e24c1d_r.jpg)

我们把第7个数加上3，如图。




![](https://picx.zhimg.com/v2-f2cb07f3abf3691e1838b3073d6ae8f3_r.jpg)




仔细观察，就会发现，被修改的节点实际上只是一条链，长度为![](https://www.zhihu.com/equation?tex=%5Clog+n)。

于是，著名神犇hjt突发奇想，如果每次修改只维护一条链的话，空间复杂度就变成![](https://www.zhihu.com/equation?tex=O%28n%2Bm%5Clog+n%29)了呀。

于是就有了可持久化线段树，也叫主席树（能猜到原因吧）

如图，在可持久化线段树里给第7个数加上3。




![](https://pic4.zhimg.com/v2-61a4b330da12b8d072a903372aa987b7_r.jpg)

从这个图中，我们可以看出可持久化线段树的诀窍在于——复用历史版本的节点。

可持久化线段树只会增加需要修改的节点，而不需要修改的节点就可以使用以前的结构，这种思想被称为“函数式编程“，所以可持久化线段树也叫”函数式线段树“。

**核心代码**

voidbuild(int&x,intl,intr){//建树操作，即第0个版本，所有版本复用的基础x=++tot;//可持久化线段树使用动态开点的方式，因此需要有lsrs数组存储左右儿子节点if(l==r){tr[x]=a[l];return;}intmid=(l+r)/2;build(ls[x],l,mid),build(rs[x],mid+1,r);//因为x是引用形式，所以会直接给lsrs数组赋值}voidchange(intu,int&x,intl,intr,intk,intp){x=++tot;tr[x]=tr[u],ls[x]=ls[u],rs[x]=rs[u];//复制原节点if(l==r){tr[x]=p;return;}intmid=(l+r)/2;if(k<=mid)change(ls[u],ls[x],l,mid,k,p);//修改左儿子，右儿子直接复用原节点的右儿子elsechange(rs[u],rs[x],mid+1,r,k,p);//同理}

## 例题6：可持久化数组

[洛谷P3919](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3919)

维护这样的一个长度为![](https://www.zhihu.com/equation?tex=N)的数组，支持如下几种操作：

- 在某个历史版本上修改某一个位置上的值
- 访问某个历史版本上的某一位置的值

此外，每进行一次操作（对于操作![](https://www.zhihu.com/equation?tex=2)，即为生成一个完全一样的版本，不作任何改动），就会生成一个新的版本。版本编号即为当前操作的编号（从![](https://www.zhihu.com/equation?tex=1)开始编号，版本![](https://www.zhihu.com/equation?tex=0)表示初始状态数组）

**题目分析**

很明显，这一个可持久化线段树模板题，需要单点修改，单点查询，套用模板即可。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e6+10,M=5e7+10;//可持久化线段树大概需要O(4n+mlogn)的空间，一般直接开N<<5inttr[M],root[N],ls[M],rs[M],tot=0,a[N];voidbuild(int&x,intl,intr){x=++tot;if(l==r){tr[x]=a[l];return;}intmid=(l+r)/2;build(ls[x],l,mid),build(rs[x],mid+1,r);}voidchange(intu,int&x,intl,intr,intk,intp){x=++tot;//动态开点tr[x]=tr[u],ls[x]=ls[u],rs[x]=rs[u];//复制节点if(l==r){tr[x]=p;return;}intmid=(l+r)/2;if(k<=mid)change(ls[u],ls[x],l,mid,k,p);elsechange(rs[u],rs[x],mid+1,r,k,p);}intquery(intx,intl,intr,intk){if(l==r)returntr[x];intmid=(l+r)/2;if(k<=mid)returnquery(ls[x],l,mid,k);returnquery(rs[x],mid+1,r,k);}intn,m;intmain(){scanf("%d%d",&n,&m);//本题稍微有点卡常，需要用printf和scanffor(inti=1;i<=n;i++)scanf("%d",&a[i]);build(root[0],1,n);for(inti=1;i<=m;i++){intv,opt,k,p;scanf("%d%d",&v,&opt);if(opt==1){scanf("%d%d",&k,&p);change(root[v],root[i],1,n,k,p);}else{scanf("%d",&k);printf("%d\n",query(root[v],1,n,k));root[i]=root[v];}}}

## 例题7：静态区间第k小

[洛谷P3834](https://link.zhihu.com/?target=https%3A//www.luogu.com.cn/problem/P3834)

给定![](https://www.zhihu.com/equation?tex=n)个整数构成的序列![](https://www.zhihu.com/equation?tex=a)，将对于指定的闭区间![](https://www.zhihu.com/equation?tex=%5Bl%2Cr%5D)查询其区间内的第![](https://www.zhihu.com/equation?tex=k)小值。

**题目分析**

如果没有区间操作，查询第k小可以用权值线段树实现，如果有要支持区间操作呢？

我们建一颗可持久化权值线段树，如图，把![](https://www.zhihu.com/equation?tex=%5C%7B2%2C4%2C1%2C3%5C%7D)这个数列的数依次插入。




![](https://pic4.zhimg.com/v2-618416b7133f5d6783befc3e6439fad1_r.jpg)

仔细观察，就会发现第![](https://www.zhihu.com/equation?tex=i)棵树保存着前![](https://www.zhihu.com/equation?tex=i)个数的信息（设初始化的树为第![](https://www.zhihu.com/equation?tex=0)棵）

也就是说，这个可持久化线段树可以说是数列的“前缀树”。

你能想到什么？

可持久化线段树满足区间可加减性，所以我们可以用前缀和的方式找出维护![](https://www.zhihu.com/equation?tex=%5Bl%2Cr%5D)个数的信息的树。

也就是拿出第![](https://www.zhihu.com/equation?tex=l-1)棵树和第![](https://www.zhihu.com/equation?tex=r)棵树，两者相减，结果就是![](https://www.zhihu.com/equation?tex=%5Bl%2Cr%5D)的信息。




![](https://pic2.zhimg.com/v2-14e61cb19fc057d35c0e91948fd11839_r.jpg)

而在相减后的树上找第k小相信大家都已经会了。

那么就可以写出代码了！

注：这题数据很水，题面给![](https://www.zhihu.com/equation?tex=%7Ca_i+%7C%5Cle+10%5E9)，但实际上的数据范围是![](https://www.zhihu.com/equation?tex=0+%5Cle+a_i+%5Cle+10%5E6)，甚至不需要离散化的优化，就可以过。

**AC代码**

#include<bits/stdc++.h>usingnamespacestd;constintN=1e6+10;inttr[N<<5],ls[N<<5],rs[N<<5],root[N],tot=0;voidbuild(int&x,intl,intr){//建树x=++tot;if(l==r)return;intmid=(l+r)/2;build(ls[x],l,mid),build(rs[x],mid+1,r);}voidinsert(intu,int&x,intl,intr,intk){x=++tot;//动态开点tr[x]=tr[u]+1,ls[x]=ls[u],rs[x]=rs[u];//复制该节点的所有信息（可以直接在节点上+1，否则还得pushuo一遍）if(l==r)return;intmid=(l+r)/2;if(k<=mid)insert(ls[u],ls[x],l,mid,k);elseinsert(rs[u],rs[x],mid+1,r,k);}intquery(intu,intv,intl,intr,intk){intmid=(l+r)/2,lx=tr[ls[v]]-tr[ls[u]];//两颗树信息相减得到的左儿子信息if(l==r)returnl;//如果只有一个数，第几大都是这个数了，直接返回if(k<=lx)returnquery(ls[u],ls[v],l,mid,k);returnquery(rs[u],rs[v],mid+1,r,k-lx);//二分查找第k小}intn,m;intmain(){cin>>n>>m;build(root[0],0,1e6);//建树for(inti=1;i<=n;i++){intt;cin>>t;insert(root[i-1],root[i],0,1e6,t);}while(m--){intl,r,k;cin>>l>>r>>k;cout<<query(root[l-1],root[r],0,1e6,k)<<endl;}}

实际上，这份代码在除了洛谷以外的其它OJ上是AC不了的，因为题面上![](https://www.zhihu.com/equation?tex=%7Ca_i%7C%5Cle+10%5E9)的数据范围使代码必须要有离散化的优化，这里给出优化代码。

//其他部分和前面无异，这以后是离散化代码intn,m,tt=0;map<int,int>mp;//使用map离散化，使用sort离散化也可以intval[N],a[N];intmain(){cin>>n>>m;build(root[0],1,n);for(inti=1;i<=n;i++){cin>>a[i];mp[a[i]]=0;}for(autoit:mp){//map会自己排序，在遍历的过程中标上映射后的序号mp[it.first]=++tt;val[tt]=it.first;}for(inti=1;i<=n;i++)insert(root[i-1],root[i],1,n,mp[a[i]]);while(m--){intl,r,k;cin>>l>>r>>k;cout<<val[query(root[l-1],root[r],1,n,k)]<<endl;}}

## 习题

- 洛谷P3402 可持久化并查集 注意并查集的合并操作
- [POI2014] KUR-Couriers 维护区间绝对众数，有乱搞做法

## U.P.D

2023年2月17日 初稿，大概两千多字。

2023年6月？ cry拿去学，发现了一堆错误（比如代码写了个tr[x]=tr[x*2]+tr[x*2]）。

2023年7月3日 开始重写。

2023年7月6日 写完基础部分

2023年7月8日 增加了权值线段树

2023年7月9日 挪到了洛谷上，把图片传到了洛谷图床上。增加了权值线段树的习题。

2023年7月9日 增加了zkw线段树

2023年7月11日 增加了可持久化线段树

2023年9月16日 上传到知乎

## 参考资料

- oiwiki关于线段树储存空间的证明
- 洛谷日报·线段树
- 标记永久化
- 标记永久化
- 洛谷日报·权值线段树到主席树
- P3369普通平衡树题解
- 统计的力量（zkw课件）
- 同机房巨佬的博客
- 洛谷日报·zkw线段树
- zkw的课件


---

# 有没有一段代码，让你为人类的智慧击节叫好？ 张博航

**Author:** 张博航  
**Bio:** 退役ACMer/机器学习  
**Avatar:** ![](https://pic1.zhimg.com/v2-f50c794ecdd12d33d0daf860a4d8f33d_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3673ceb524b5cd6497d1a4a4b1e09a44  
**Published:** 2017.11.01 10:46:07  
**Updated:** 2021.10.22 12:44:18  
**Question:** https://www.zhihu.com/question/30262900  
**Question Created:** 2015.05.10 23:48:08  
**Question Updated:** 2020.02.16 20:20:53  
**Votes:** 9749  
**Comments:** 360  
**Type:** answer  

分享几个第一次看到就被它的优美深深震撼到的代码：

1、线性求逆元：

for(inti=2;i<MAXN;i++)inv[i]=mul(inv[mod%i],mod-mod/i,mod);

仅仅两行代码，就实现了在$O(n)$的时间内求出1到n对模m的逆元有木有！？




2、求最大公因数：

intgcd(intx,inty){returny?gcd(y,x%y):x;}

第一次接触到这样的代码时，我的内心是这样的：

wtf???黑人问号.jpg




3、树状数组

对于单点修改区间求和，树状数组可谓达到了时空复杂度的极限，甚至不多用额外一字节存储空间。来看看它的实现：

修改：

voidadd(inti,intx){for(;i<=n;i+=i&-i)tree[i]+=x;}

查询：

intsum(inti){intret=0;for(;i;i-=i&-i)ret+=tree[i];returnret;}

表示记性不好的我看完一遍也记住了呢。




4、zkw线段树

对于单点修改区间查询的线段树，zkw大神实力教你如何1分钟内码出代码：

修改：

voidset(intx,intvalue){val[x+=treeLen]=value;while(x>>=1)pushUp(x);}

查询：

intquery(intl,intr){intret=0;for(l+=treeLen-1,r+=treeLen+1;l^r^1;l>>=1,r>>=1){if(~l&1)ret=min(ret,val[l^1]);if(r&1)ret=min(ret,val[r^1]);}returnret;}




以上都是一些十分基础但真的让你赞不绝口的算法和数据结构。还有一些稍微复杂一些的栗子，由于手机码代码太不方便了，就以后再更吧。（如果有笔误打错的地方欢迎指正哈）

5、后缀数组的DC3算法，反正学完它的一瞬间我是明白了，天才和普通人的智商差距简直比人和狗还大啊。。。

6、快速傅里叶变换的数论版本（即NTT）：学完后有种想去数学系的冲动（还好后来冷静下来了）。费马素数群的性质居然和复数完美吻合，不得不说是一种奇迹啊。

7、主席树：这是fotile巨佬考场上发明这种数据结构，用于在$O(log n)$的时间复杂度内解决序列区间第k大问题，以及区间内元素的排名。个人感觉他比划分树的设计巧妙多了，有一种自然的美感。

8、Pollard因数分解算法：如果你真的把关于时间复杂度的证明一步步看完后，相信你会有一种豁然开朗的感觉。这个算法真正高的地方在于把生日悖论和递推式循环节巧妙的结合在一起，最后运用递推方程主定理的理论，使得时间复杂度达到了看似不可能的期望$n^0.25$的数量级。




其实现在感觉一切和数据结构或数学有关的算法都是非常优美的，前者在于设计的精巧性，后者在于证明的环环相扣，达到引人入胜的效果。


---

# 为什么人可以直观地看出函数局部最小值的大致位置，而计算机不能？ IkzcJtk

**Author:** IkzcJtk  
**Bio:**   
**Avatar:** ![](https://pica.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/eac6b120103c8d7782d806475aee96a3  
**Published:** 2024.06.02 03:13:51  
**Updated:** 2024.06.02 11:58:55  
**Question:** https://www.zhihu.com/question/657302311  
**Question Created:** 2024.05.27 09:29:46  
**Question Updated:** 2025.12.06 03:22:39  
**Votes:** 9096  
**Comments:** 273  
**Type:** answer  

回答一路翻下来，发现大多都是在嘲讽题主的，但我觉得这是一个很好的问题。在用复杂函数、解的精度等反例驳斥这个问题之前，不妨先思考一下，为什么人会产生这种“我能一眼看出最优解”的感觉？

以前听运筹学课程，讲到旅行商问题时，老师就曾带我们做过这样一个“游戏”：在黑板上随便画上几个点表示旅行商的目的地，求最优路径。

![](https://picx.zhimg.com/v2-3b2b962bfcdf94f96f4c4371d03f63a8_r.jpg?source=2c26e567)

尽管找到最优解很难，但几乎每个人都可以在瞬间给出一个相当不错的近似最优解，甚至不需要思考，凭直觉“一眼看出”一条路径即可：

![](https://pica.zhimg.com/v2-ba046f0f5fbc023d6848bc12186c9885_r.jpg?source=2c26e567)

让我们再来看看机器队的表现：对于![](https://www.zhihu.com/equation?tex=n%3D20)的TSP问题，如果使用计算机进行穷举求解，那么总共需要考虑190条边所形成的![](https://www.zhihu.com/equation?tex=6+%5Ctimes+10%5E%7B16%7D)个可行解，即使计算机算力G倍甚至T倍碾压人类，要在“一眼”的时间内暴力搜索到一个更优的解也是很困难的。

当然，计算机也可以凭借一些“直觉”算法“一眼看出”一个近似最优解，例如由贪心算法给出的最优解：

![](https://picx.zhimg.com/v2-61907f5d8d8de5a7748cf22adcbe344f_r.jpg?source=2c26e567)

然而，就算我不告诉各位这条路径的cost是多少，想必大家也都能“一眼看出”这个解比人工队的解要差很多。

尽管这样的对比有失公平，各位大可以质疑“增加到1000个节点，计算机还能算，人还能看出来吗”、“路径以欧氏距离为权重，人能看出来，但换个权重还能吗”、“单目标优化能看出最优，多目标还能吗”。但这一现象也足以引起思考：为什么在这个特定的问题上，人类能“一眼看出”一个这么好的结果？

这其中的因素应该有很多，我无法给出答案，只在这里留下一些思考。比如，我们可以将其解释为人类在这个问题上具有丰富的知识，“一眼看出”并非没有思考，而是大脑自动采取了某些策略，例如绕着区域的边缘走一个大圈等等，而穷举或者贪心算法却完全是凭借暴力，没有利用到任何的先验知识。而动态规划、启发式算法等方法就可以结合一定的策略与知识，因此应用在更复杂的优化问题上具有出色的表现。

但这样讲依然太笼统了，我们再尝试从一个更具体的角度，猜测一下人类是如何在以上例子中“一眼看出”哪个解更优的。事实上，我们在寻找最优解时，大脑已经自动帮助我们排除了大量的劣解，例如下图中的解：

![](https://picx.zhimg.com/v2-5dfd6de97c5a6c1721e32d76243f668f_r.jpg?source=2c26e567)

我们会认为最优解的每一步都应该尽可能走近邻节点、避免距离较远的两个节点被直接连接，若路径中出现不符合这些条件的情况，便归为劣解。这种思考方式可以建模为基于图的计算方法，例如基于“近邻节点”这一特点建立一个 kNN图，并假设最优解应为这个图上的一个子图，且为包含所有节点的一个cycle：

![](https://pic1.zhimg.com/v2-07a15bcfe76cafd926a1de6a075ae3c9_r.jpg?source=2c26e567)

这个图的总边数为44，共计18,258个可行解，在其上进行穷举所需的计算量仅为上述暴力穷举的3万亿分之一，可以轻易地搜索到一个近似最优解：

![](https://pica.zhimg.com/v2-fbdde4f67644e347a27241cae93fd7b0_r.jpg?source=2c26e567)

又或者构建一个Delaunay图，具有50条边，包含149,882个可行解，也可以快速地搜索出一个近似最优解：

![](https://pic1.zhimg.com/v2-da5cdca92bc3005356e7013c9a2ad64e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b69eaa69bc7126f5cbbfc63d3f76027e_r.jpg?source=2c26e567)

我们可以假设人类能够通过观察节点之间的近邻关系，在所有的解中迅速排除大量劣解，只留下少量潜在的优解，并进行估算比较，得出“一眼最优”。于是，上述基于图的算法可以视为通过模仿人类求解过程得到优化算法。然而，构建图以及在图上搜索可行解的计算开销依然很高，因此这类基于节点间的近邻关系构建图进行计算的方法不是很适用于大规模TSP问题的求解，但在另一些应用上却有着重要的价值，例如近似最近邻搜索等问题，近年来的一些研究表明，基于图索引的近邻搜索相较于传统的树索引和哈希索引方式具有更优的性能。[1][2][3]

![](https://picx.zhimg.com/v2-66817e95b4320abb2ebad20051311152_r.jpg?source=2c26e567)

以上算是对题主的问题“人是通过什么算法完成全局最小值的检索的呢？是否可以将人使用的算法进行推广？”的一个部分解答吧，尽管仅从一个特定的问题、特定的角度进行回答，但依然不完整，还有很多未解答的问题，比如人的大脑真的是把节点的近邻关系以图的形式进行处理的吗？计算机构建图索引的成本尚且很高，人又怎么能实现呢？这些问题可能要求助于认知和神经科学了。


---

# 有哪些算法一开始像在瞎搞，实际上却蕴含着更深层的逻辑？ Felina

**Author:** Felina  
**Bio:** 星星还是要还给宇宙的  
**Avatar:** ![](https://picx.zhimg.com/v2-99b4577d42061dc5a4cfc498f22a2481_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/09733810a89d25118c12b0514939747f  
**Published:** 2025.04.06 15:48:37  
**Updated:** 2025.04.06 15:48:37  
**Question:** https://www.zhihu.com/question/1890344085396623745  
**Question Created:** 2025.04.01 10:05:50  
**Question Updated:** 2025.04.06 11:49:51  
**Votes:** 1296  
**Comments:** 80  
**Type:** answer  

Tomohiko Sakamoto 算法，来确定当前日期是星期几，其核心思想是通过数学公式简化天数累积计算，避免逐日累加。

代码量很少，最少的实现方式只有一行，最多也不过四行。

但是相当经典，当然了，并不太容易理解。

Tomohiko Sakamoto 算法，最初实现代码：

intdow(inty,intm,intd){staticintt[]={0,3,2,5,0,3,5,1,4,6,2,4};y-=m<3;return(y+y/4-y/100+y/400+t[m-1]+d)%7;}

同时，Tomohiko Sakamoto 还发布了另外一个更简洁的一行版本：

dow(m,d,y){y-=m<3;return(y+y/4-y/100+y/400+"-bed=pen+mad."[m]+d)%7;}

这段代码通过输入年份、月份和日期来计算对应的星期几，算法中存储了不同月份的偏移值调整参数，通过对输入日期进行运算得出最终结果。

通过年份调整、闰年计算和月份偏移表，将日期转换为星期数，兼顾效率与准确性。

代码看着就很漂亮，分析一下会发现确实很漂亮。

![](https://picx.zhimg.com/v2-e5d951deb051d5a8fa18a8f8229d199e_r.jpg?source=2c26e567)


---

# 如何看待朝鲜国家科学院数学研究所发布 arXiv 论文称千禧年难题纳维-斯托克斯方程已被攻克？ 不等式爱好者

**Author:** 不等式爱好者  
**Bio:** 学数学，做数学，爱数学～  
**Avatar:** ![](https://picx.zhimg.com/v2-1a4b6ff715482e73609979c71697cee4_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3ee0a8fc4e4265170a30b7dc2911ba08  
**Published:** 2025.08.29 00:25:40  
**Updated:** 2025.08.29 15:42:31  
**Question:** https://www.zhihu.com/question/1944357449965494499  
**Question Created:** 2025.08.28 11:15:40  
**Question Updated:** 2025.08.28 17:58:10  
**Votes:** 8118  
**Comments:** 544  
**Type:** answer  

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


---

# 如何评价微博上的「数学滚出高考」这一话题？ 你说什么

**Author:** 你说什么  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a0aa76a2f1e1215c7ca59f065ea0538b  
**Published:** 2015.05.03 04:46:03  
**Updated:** 2025.08.05 00:25:26  
**Question:** https://www.zhihu.com/question/21883360  
**Question Created:** 2013.10.25 10:38:37  
**Question Updated:** 2017.03.24 09:44:13  
**Votes:** 22175  
**Comments:** 922  
**Type:** answer  

把所有科目剔除得了，到时候考大学大家就抽签吧，全凭运气，机会均等，绝对公平

但这时候就有人问了：先抽后抽几率一样不？他把签先抽走了我抽到的概率不就小了么？

众人一听很有道理，纷纷大吵大闹

这时候就体现出数学的重要性了~


---

# 数学里有哪些精彩的伪证？ 65.382

**Author:** 65.382  
**Bio:**   
**Avatar:** ![](https://pica.zhimg.com/v2-d0f434e541f7e583d3255b64da1a5a77_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/53a04ab443207cfa71f2d40b8956cc9f  
**Published:** 2025.07.09 20:04:28  
**Updated:** 2025.07.09 20:08:40  
**Question:** https://www.zhihu.com/question/68322255  
**Question Created:** 2017.11.18 23:35:52  
**Question Updated:** 2017.11.18 23:35:52  
**Votes:** 923  
**Comments:** 403  
**Type:** answer  

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


---

# 小学数学为什么不从集合论学起？ Groscheme

**Author:** Groscheme  
**Bio:** 学不会代数的物理人，知道一点几何  
**Avatar:** ![](https://picx.zhimg.com/v2-8597c564d7b860c31d90ef134159c79b_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/22407338e59f38575f7a6a6992938ef0  
**Published:** 2023.04.01 21:35:51  
**Updated:** 2023.05.01 00:07:37  
**Question:** https://www.zhihu.com/question/522744830  
**Question Created:** 2022.03.18 22:20:02  
**Question Updated:** 2022.03.18 22:22:14  
**Votes:** 13696  
**Comments:** 532  
**Type:** answer  

这个已经有人设计好了，下面我即将用出珍藏多年的图

这是最新的小学数学大纲

![](https://picx.zhimg.com/v2-0bd1cbf052b411a1ff6fc6298a528fb9_r.jpg?source=2c26e567)




好了，学完小学内容过后；

下面是小学毕业考试试题

![](https://pic1.zhimg.com/v2-c1de61e0c96e7d58fe2ebd8721a4a5cc_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-a67cd13d48631b6a6e2c978839c3df3f_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-72c8dddf7320062af7b2e7cc1286c420_r.jpg?source=2c26e567)




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

![](https://pic1.zhimg.com/v2-5cd43d3ba352b075e20748ca74987b8c_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-fb191640cd5044d49167de09659e89c0_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-8fc2c4d790a457d71df06e49c7f96a47_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-a4c6ae445e530059406ea4ddaa3bd1ba_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-84da2e75e6ec95699315bd339b0e2980_r.jpg?source=2c26e567)


---

# 如何评价b站的“一数公益”？ Shy Vector

**Author:** Shy Vector  
**Bio:** 流过去吧。  
**Avatar:** ![](https://pica.zhimg.com/v2-ae6fd2e036afa790625a3ddd905e02c7_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/6725ed24af31e7d56cae69b81987e6af  
**Published:** 2021.08.24 21:41:45  
**Updated:** 2022.01.20 01:39:27  
**Question:** https://www.zhihu.com/question/426193563  
**Question Created:** 2020.10.18 12:00:47  
**Question Updated:** 2020.10.18 12:00:47  
**Votes:** 142  
**Comments:** 65  
**Type:** answer  

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

![](https://pica.zhimg.com/v2-4c2b1de15243ce3be497baee36c86804_r.jpg?source=2c26e567)

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

要说明清楚原因，就要讨论一般情况，这就要谈到函数的定义了。这里我不严谨地讲：对于函数定义域中的每个![](https://www.zhihu.com/equation?tex=x)，在值域中都有**唯一**的![](https://www.zhihu.com/equation?tex=y)与![](https://www.zhihu.com/equation?tex=x)对应；相反，对于函数值域中的每一个![](https://www.zhihu.com/equation?tex=y)，在定义域中都**至少有一个**与![](https://www.zhihu.com/equation?tex=y)对应。所以把**函数**中的这个![](https://www.zhihu.com/equation?tex=%28x%2Cy%29)关系放在**完全等价的方程**![](https://www.zhihu.com/equation?tex=f%28x%29%3D0)中的意思就是对于所有的![](https://www.zhihu.com/equation?tex=y)，方程都有（至少有一个）实数根，也就是![](https://www.zhihu.com/equation?tex=%5CDelta+%5Cge+0)。

![](https://pica.zhimg.com/v2-774a96986de2ecfb0a2f1ea2a1943b38_r.jpg?source=2c26e567)

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


---

# 一段绳子，任意切n刀，切成n+1段绳子。问这些绳子能组成n+1边形的概率？ 曾加

**Author:** 曾加  
**Bio:** 清华本硕|延迟满足|小红书B站上我叫普拉思  
**Avatar:** ![](https://picx.zhimg.com/v2-f7f05f9f315fd9c91f0c3e58b73d2212_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/184d63c15edb58b42e0a02628945fa76  
**Published:** 2014.09.18 19:35:32  
**Updated:** 2014.09.20 19:25:36  
**Question:** https://www.zhihu.com/question/25408010  
**Question Created:** 2014.09.18 13:26:33  
**Question Updated:** 2014.09.18 20:09:00  
**Votes:** 206  
**Comments:** 34  
**Type:** answer  

![](https://www.zhihu.com/equation?tex=P%3D1-%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

思路很简单：**最长的一段不能超过绳子总长的一半**。

**我将给出2个证明，**第一个证明是正常的思路，需要一点微积分，第二个证明不用任何高等数学，简洁易懂，但需要一点点技巧。

**~~~~~****~~~~~****~~~~~****~~~~~**

**证明1（****仅用到简单的微积分）****：**

设绳子的长为1。

**先将问题离散化**，将绳子分成k段（![](https://www.zhihu.com/equation?tex=k%5Crightarrow+%5Cinfty+)），每段长为Δx（![](https://www.zhihu.com/equation?tex=%5CDelta+x%5Crightarrow+0)）。

设![](https://www.zhihu.com/equation?tex=P_%7B0%7D+)为绳子无法组成n+1边形的概率。在这种情况下，设最长的一段为x，显然![](https://www.zhihu.com/equation?tex=x%5Cgeq+%5Cfrac%7B1%7D%7B2%7D+)

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

（答者注：严格地说，一一映射并不是集合大小相同的充分条件，反例有著名的整数和偶数一一映射，但在本题下，容易判断，集合大小相等是成立的。严格的证明需要证明雅各比行列式的值为1才行，这并不难但有点麻烦，从略）

综上，对于以上n+1种情况，这些绳子不能组成n+1边形的总概率![](https://www.zhihu.com/equation?tex=P_%7B0%7D%3D+%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

故![](https://www.zhihu.com/equation?tex=P%3D1-P_%7B0%7D%3D+1-%5Cfrac%7Bn%2B1%7D%7B2%5E%7Bn%7D+%7D+)

证毕！

**~~~~~****~~~~~****~~~~~****~~~~~**


---

# 如何看待B站UP主“小谷数学课代表”？ 彼阳晚意

**Author:** 彼阳晚意  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c1edb5304859160bd23e08630a2c4df3  
**Published:** 2024.12.29 12:05:29  
**Updated:** 2024.12.31 00:00:47  
**Question:** https://www.zhihu.com/question/614688060  
**Question Created:** 2023.07.30 00:38:05  
**Question Updated:** 2023.07.30 00:41:16  
**Votes:** 52  
**Comments:** 14  
**Type:** answer  

无聊去看了一下 一道mod3余1题求平方mod3居然要平方展开求解花了3分钟 一道新高考立体几何题4分钟秒了 不好评价

期待高联成绩


---

# 如何看待B站UP主“小谷数学课代表”？ momo

**Author:** momo  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-976030814794760f14fc396b8a427d58_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/80c8027b72dc59c91b661a712e490482  
**Published:** 2024.03.12 02:17:09  
**Updated:** 2024.03.12 02:33:11  
**Question:** https://www.zhihu.com/question/614688060  
**Question Created:** 2023.07.30 00:38:05  
**Question Updated:** 2023.07.30 00:41:16  
**Votes:** 1343  
**Comments:** 135  
**Type:** answer  

本人高考数学140+，而且是当年所在地级市数学第一名，中小学阶段当了十年的数学课代表，我想我还是有点资格评价的。我第一次看她的视频，觉得小姑娘看起来很聪明，但是多看几个视频以后，感觉味道不对，像是剧本。我说一下理由。

一是没有有力的资历认证。最有力的认证当然是数学竞赛的成绩了。一张奖状就可以消除所有人的疑虑。我在她这个年纪的时候是有机会参加各种级别的竞赛的，从学校竞赛、县里、市里、省里，一直到参加全国竞赛。获奖之后才有资格参加更高级别的竞赛，我一路都是一等奖，全国竞赛拿了末等奖（也好过没得奖的人，更好过没机会参加的人，大多数人都拿不到参加的资格）。从小谷讲题的题目难度来看的话，她的水平高于当时的我，拿几张奖状应该是喝水一样容易的。我很难想象一个对数学有兴趣又有天赋的人，花大把时间学习高年级的数学，却不去参加竞赛。她为什么不把这些荣誉放在短视频账号置顶呢？怎么一张都看不到？做短视频账号，放这个内容能带来话题热度，为什么不放呢？

二是她的短视频账号能看出明显的流量导向。她这个年纪有的小孩肯定有不少人能达到这种天才的程度，但是不会是她。数学这么厉害的人，百分百是痴迷的人，就像武侠小说里的“武痴”一样，基本上话不会多，不会有这么强的表演欲。而且我也有认识的人在做抖音账号，拍视频号其实很累，而小谷的更新频率也太高了，加上各种各样的准备，搜题目，解题目，拍视频，一天啥也不干，精力都花在做视频账号上了？这就不是一个痴迷数学的人会做的事情。

三是她选的题目我也有看法。外行看热闹，内行看门道，虽然我不是吃数学这碗饭的，但是高中之前的数学我还算是内行的。我周围的人知道我数学很强，但是数学不好的人他是不知道我具体强在哪里的。有时候我花了很大力气解决了一道比较难的数学题，兴奋地告诉朋友的时候，他们经常没什么感觉。但是当我解决了一道看起来很屌，其实费不了什么脑子的题目的时候，他们反而会发出一声声的“哇塞”。应该有人清楚这种感受吧。有个例子就是刘谦今年的纸牌魔术，看起来很屌很神奇，其实就是个简单的数学把戏，草稿纸上画几下很快就证明出来了。刘谦的魔术很棒，表演效果满分。不是说他数学多厉害，而是他作为魔术师的控场能力强，台词精心设计，把气氛带起来了。数学题目就是这样，外行看起来很屌的东西，实际上可能是三脚猫功夫，外行人题目都看不懂、无感的东西，可能很有挑战性。小谷数学选的题目也不是没有挑战性，但就全都是那种看上去很屌跟吸引眼球的，就很刻意，好像就是为了抓住人们的眼球。而且都是初高中生会接触到的题型，甚至还押题考研题。这不就是为了精准吸引这些群体吗？他们纷纷在评论区评论“这样显得我很呆”之类的评价。相信我，如果小谷选的题型不这样的话，是没有这种效果的，她解出再难的题，评论区也不会这么热闹。

四是关于视频评论区很多人说的“费曼学习法”，我也有疑点。费曼学习法是真的，但是小谷不对劲。我不认为她讲课是通过费曼学习法在学习数学。根据我的经验来看，费曼学习法更适合用在基础知识的学习上（基础指的是地基作用的东西，比如概念、公式，基础和容易不是同一个东西），但是小谷讲的题目基本都是应用、计算层面的题目。用到的公式、原理，她也都是一笔带过。要是有意地使用费曼学习法，这时候更应该把概念和公式拿出来详细梳理一遍，加深记忆。她明显不是。可以说对此毫无兴趣。

所以，我认为她的视频最有可能是剧本，有成年人在背后营销策划的。说她背稿子，还有一个理由是，她的台词完完全全是一个成年人的口气。再举个例子，蜡笔小新你们都看过吧？古灵精怪，但又不是小孩子的那种古灵精怪，分明就是一个中年猥琐男人的灵魂放进一个五岁小孩的身躯。也就只有漫画家会写出这种角色，现实中不会有这样的小孩。你们再看看小谷的说话台词，也是这个问题。有的小孩落落大方，说话得体，成熟，能讨成年人的喜欢。但那是另一码事，她这个明显就是在背成年人写的文案，痕迹明显。现在做短视频的人太多了，流量就是钱，大家为了流量争得头破血流，手段花样百出，策划这种事情我一点都不奇怪。


---

# 如何看待全国高中数学教材的内容调整？ Algebra

**Author:** Algebra  
**Bio:** 欢迎进群唠嗑：339820728  
**Avatar:** ![](https://pic1.zhimg.com/v2-b9d4320229226e7d2c7787a0fdb397eb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c20523f8662aff29b9484e54a8cd8589  
**Published:** 2022.07.06 00:24:56  
**Updated:** 2022.07.07 13:28:32  
**Question:** https://www.zhihu.com/question/283967816  
**Question Created:** 2018.07.05 11:16:10  
**Question Updated:** 2021.10.21 22:31:06  
**Votes:** 5391  
**Comments:** 789  
**Type:** answer  

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

![](https://pica.zhimg.com/v2-ec0ea2294a2a523817c59618270dc60a_r.jpg?source=2c26e567)

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


---

# 如何看待全国高中数学教材的内容调整？ 新观察

**Author:** 新观察  
**Bio:** 数学爱好者，文字游戏爱好者  
**Avatar:** ![](https://pica.zhimg.com/v2-54f846bf10c206785fe0d16f2e26bb1a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/f3ad684b8060bbad6230529a9759bdc1  
**Published:** 2022.09.09 13:23:32  
**Updated:** 2024.10.02 11:32:15  
**Question:** https://www.zhihu.com/question/283967816  
**Question Created:** 2018.07.05 11:16:10  
**Question Updated:** 2021.10.21 22:31:06  
**Votes:** 2388  
**Comments:** 326  
**Type:** answer  

极坐标跟参数方程删除可太秀了，大学学过二重积分都懂这意味着什么，而且大学我翻过几乎所有的国内教材，都没有系统讲解极坐标跟参数方程的。要我说，我觉得高中还应该把复变函数的非积分部分加进来，不然大学没几个人学的懂微分方程。如果条件可以，甚至可以让高中生就能够熟练的掌握分部积分法，换元积分法，熟练的求不定积分，以及基本的定积分。练习积分的运算技巧比练习圆锥曲线的计算技巧有意义得多，积分的运算还不像圆锥曲线那样，有各种各样的二级结论，而且我认为积分的运算更适合高中的课堂。

看回答，赞同数量这么多，我想继续吐槽一下。现在高中数学，除了立体几何第一问，没有一题是本质上的证明题，导数第二问可能会有，但本质还是计算。我觉得如果数学考试没有证明题，那么这个数学试卷是没有数学灵魂的。不过也能理解：初等数论不学，数学归纳法不学，反证法不考，如果要出证明题，只能扣逻辑关系，如果逻辑关系再删除。。。。。。唉！证明能力弱是什么概念，任何一个学数学分析的人都清楚。


---

# f(f(x))=x^2+x，如何求 f(x)？ 酱紫君

**Author:** 酱紫君  
**Bio:** QQ群1014125  
**Avatar:** ![](https://pica.zhimg.com/v2-8bec9d5bd4a7b338b2b91d0ce1e70ee3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a74574db96f2d0e717fc410bf90dd150  
**Published:** 2025.06.30 21:05:39  
**Updated:** 2025.06.30 21:05:39  
**Question:** https://www.zhihu.com/question/25024134  
**Question Created:** 2014.08.28 17:44:51  
**Question Updated:** 2014.08.29 09:14:55  
**Votes:** 375  
**Comments:** 14  
**Type:** answer  

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

![](https://pic1.zhimg.com/v2-4623d7e762294d3f1f012ae1569caffe_r.jpg?source=2c26e567)

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

![](https://pic1.zhimg.com/v2-a38ee34f62c7e5850b0b199f461e95cb_r.jpg?source=2c26e567)

ClearAll["Global`*"];g[z_]:=z^2+z;h[z_]:=(Sqrt[1+4*z]-1)/2;alpha0[z_]:=-1/z+Log[z];alpha1[y_?NumericQ]:=z/.FindRoot[alpha0[z]==y,{z,-1/y}];alpha[z_?NumericQ,iterations_Integer:50]:=Block[{zFinal},zFinal=Nest[h,N[z,50],iterations];alpha0[zFinal]+iterations];alphaInverse[y_?NumericQ,iterations_Integer:50]:=Block[{yStart,zStart},yStart=y-iterations;zStart=alpha1[yStart];Nest[g,zStart,iterations]];f[x_?NumericQ]:=If[x>=-0.5,alphaInverse[alpha[x]+1/2],alphaInverse[alpha[g[x]]-1/2]];Plot[{Re[f[x]],0,Re[f[f[x]]],x^2+x},{x,-5,4},PlotStyle->{{ColorData[106,"ColorList"][[1]]},{ColorData[106,"ColorList"][[3]]},{ColorData[106,"ColorList"][[2]],Dashed},{ColorData[106,"ColorList"][[4]],Dotted}},AspectRatio->1,PlotLegends->{"  f(x)","  f(x)","f(f(x))","x^2+x"},GridLines->Automatic,PlotRange->{-2,10}]

而且这个分析不止对半迭代成立，实际上可以对![](https://www.zhihu.com/equation?tex=g%28x%29+%3D+x%5E2%2Bx)开任意次函数根。


---

# 前言 & 目录 Thoughts Memo

**Author:** Thoughts Memo  
**Bio:** 学校≠教育≠技能；文凭溢价=80%信号传递+20%人力资本  
**Avatar:** ![](https://pica.zhimg.com/v2-7e8edb90c668cf7a7aeb0d2582a60f94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4c592f496dc33822b560b382907ff1d0  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 272  
**Comments:** 38  
**Type:** article  

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

[In Progress] Chapter 26. Developing Habit

[In Progress] Chapter 27. Incentives and Motivation

[In Progress] Chapter 28. Lessons from Legendary Coaches

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


---

# 中国的高中数学教育有哪些内容讲得太多或太少？ CharlieF

**Author:** CharlieF  
**Bio:** 数学爱好者，完全没有物理直觉  
**Avatar:** ![](https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2cb230fe73b0f60fb4d86e18a19aee2d  
**Published:** 2019.03.31 12:37:19  
**Updated:** 2020.10.15 00:54:02  
**Question:** https://www.zhihu.com/question/295860086  
**Question Created:** 2018.09.24 08:11:44  
**Question Updated:** 2018.09.24 08:11:44  
**Votes:** 2187  
**Comments:** 701  
**Type:** answer  

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


---

# 如果让你来编排义务教育阶段至高中的数学课本，你会怎么编排？ 洛星尘

**Author:** 洛星尘  
**Bio:** 于是信步鸿蒙之轻，也领苍生之重  
**Avatar:** ![](https://pic1.zhimg.com/v2-2c13ca1fad1fef946ddb26281214561d_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aff63b5522042a8134bef0181d4acfb4  
**Published:** 2025.05.30 22:59:32  
**Updated:** 2025.05.31 04:07:01  
**Question:** https://www.zhihu.com/question/348694238  
**Question Created:** 2019.10.01 18:58:04  
**Question Updated:** 2020.02.23 11:28:51  
**Votes:** 1117  
**Comments:** 154  
**Type:** answer  

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

![](https://picx.zhimg.com/v2-340d494892304387a06a4ce048a51eb4_r.jpg?source=2c26e567)

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




![](https://pic1.zhimg.com/v2-f3415f26cdc506f4d8941f3d42f29808_r.jpg?source=2c26e567)

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

![](https://pic1.zhimg.com/v2-f3523d691a47989b58b8edaec63c6727_r.jpg?source=2c26e567)

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

![](https://picx.zhimg.com/v2-e5bf0f58ac553069fe765ec145c83342_r.jpg?source=2c26e567)

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














---

# [MO×OI]IMO2012欺诈猜数游戏 Tavi折雪铃

**Author:** Tavi折雪铃  
**Bio:** 已经忘掉怎么做题了  
**Avatar:** ![](https://pic1.zhimg.com/v2-f552cfa220d3855a099df2e9879f286f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/627e85255a34065897bc9b2348547f9c  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 231  
**Comments:** 17  
**Type:** article  

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

这一问比较水，让我们快速通过（不是）

因为题目对![](https://www.zhihu.com/equation?tex=N)不做限制，所以很自然的可以想到Bob的策略应该是不断的排除不可能的数，直到![](https://www.zhihu.com/equation?tex=N%5Cleq+n)，故我们设![](https://www.zhihu.com/equation?tex=N%3En)

显然，Bob一定要结合![](https://www.zhihu.com/equation?tex=k%2B1)次回答才能得到一个有效信息（因为每![](https://www.zhihu.com/equation?tex=k%2B1)次回答才保证一个正确），因此被排除的数字一定是![](https://www.zhihu.com/equation?tex=k%2B1)次都否定了的数

Bob每次选择的集合![](https://www.zhihu.com/equation?tex=S)其实相当于把集合![](https://www.zhihu.com/equation?tex=%5C%7B1%2C2%EF%BC%8C...N%5C%7D)划分成了两部分，而Alice在这两部分中选择一部分进行否定，于是Bob应该希望让Alice的各次回答有交

在![](https://www.zhihu.com/equation?tex=N%3En%5Cgeq2%5E%7Bk%2B1%7D-1)时，Bob只需要每次对这个集合均分就可以了，这样切完![](https://www.zhihu.com/equation?tex=k%2B1)刀后划出来的![](https://www.zhihu.com/equation?tex=2%5E%7Bk%2B1%7D)个部分中每个部分都有至少一个数字，于是无论Alice怎么选都一定会排除掉某个元素

然而我们应该怎么考虑![](https://www.zhihu.com/equation?tex=2%5Ek%5Cleq+n%5Cleq2%5E%7Bk%2B1%7D-1)的情况呢？有这样一个小技巧，通过反复拷问一个一元集，这样连续![](https://www.zhihu.com/equation?tex=k%2B1)次，Alice如果每次都否定这个一元集的话我们就可以直接排除掉这个数了。否则，Alice如果某次承认了这个一元集（相当于否定了其余的所有数），那么我们只需要再问![](https://www.zhihu.com/equation?tex=k)次就可以得到判断，而此时备选集大小![](https://www.zhihu.com/equation?tex=N)只是刚刚减小![](https://www.zhihu.com/equation?tex=1)

**Alice:这已经是你连续第 k 次问我 1 是不是我想的那个数了...不要再问了...**

按照这种改进后的方案，只要![](https://www.zhihu.com/equation?tex=N%3En%5Cgeq2%5Ek)，那么第一次![](https://www.zhihu.com/equation?tex=%5Ctext%7BN+-+-%7D)然后接下来![](https://www.zhihu.com/equation?tex=k)次按套路每次把![](https://www.zhihu.com/equation?tex=N)均分，这样就可以猜中了qwq

## (2).

前情提要：有轻度的SG函数思想、生成函数技巧前置知识

首先在第一问之后，我们会自然的猜测![](https://www.zhihu.com/equation?tex=n%3D2%5Ek-1)对于充分大的![](https://www.zhihu.com/equation?tex=k)是否可行呢？然而很遗憾这是不对的

现在我们站在Alice的角度面对问题。Alice要解决这样的问题：Bob每次把集合切成两部分，而我们希望对于Bob连续的![](https://www.zhihu.com/equation?tex=k%2B1)刀，不可以让自己选择的部分有非空交集

此外，Bob不可能给Alice报菜名一样报出一串问题，再等着Alice构造回答，所以我们的策略要求强制在线（不是）

**Alice：为什么我的部分这么难...**

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

所以说还是写一篇题解确认自己没有伪证吧（）


---

# 什么是警惕海量个例? 攻心為上

**Author:** 攻心為上  
**Bio:** 药物化学研究员，景观植物爱好者。  
**Avatar:** ![](https://pic1.zhimg.com/v2-7946d1fb06b218a4ffd0763dde5bc64a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d5d044196f4eeb8c123059267a86759c  
**Published:** 2025.05.24 22:06:00  
**Updated:** 2025.05.24 22:33:48  
**Question:** https://www.zhihu.com/question/601415018  
**Question Created:** 2023.05.17 06:39:43  
**Question Updated:** 2023.05.17 12:07:29  
**Votes:** 17139  
**Comments:** 511  
**Type:** answer  

众所周知，一枚**质地均匀**的硬币，抛起落下后正反面朝上的概率均为50%。

现在你拿出一枚硬币，**声称它是质地均匀的**

抛了10次，9次正面朝上，问我下一次正面朝上的概率，我会说50%。

抛了1000次，900次正面朝上，问我下一次正面朝上的概率，我会说不好确定，但是肯定比50%大。

抛了100000次，90000次正面朝上，问我下一次正面朝上的概率，我会说90%。

因为这会儿我已经确定，你声称它质地均匀是在撒谎，**它的质地就是不均匀的**。


---

# 如何评价 2025 高考数学试卷？今年题目难度如何？有哪些变化？ Fiddie

**Author:** Fiddie  
**Bio:** Yes!  
**Avatar:** ![](https://pic1.zhimg.com/v2-50e555473ee2f47271bc1cbb7baa070c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d2b93a8ca59dfa985e573f4b1bc4b8d4  
**Published:** 2025.06.08 00:07:41  
**Updated:** 2025.06.20 20:30:39  
**Question:** https://www.zhihu.com/question/1914721702509778295  
**Question Created:** 2025.06.07 16:33:47  
**Question Updated:** 2025.06.07 16:33:47  
**Votes:** 139  
**Comments:** 10  
**Type:** answer  

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


---

# 是否可以由 aᵃ=bᵇ 推出 a=b？为什么？ __无名氏__

**Author:** __无名氏__  
**Bio:** 啥都没有  
**Avatar:** ![](https://picx.zhimg.com/v2-ca6dddb4722ff85fd68795f2f1cfc60f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b640717c06385efe695d1033d010e793  
**Published:** 2024.09.29 17:22:22  
**Updated:** 2025.04.23 16:43:48  
**Question:** https://www.zhihu.com/question/667026011  
**Question Created:** 2024.09.13 10:32:32  
**Question Updated:** 2024.09.25 22:35:40  
**Votes:** 2507  
**Comments:** 169  
**Type:** answer  

注意到

![](https://www.zhihu.com/equation?tex=a%5Ea%3Db%5Eb)

其中

![](https://www.zhihu.com/equation?tex=a%3D0.368063488259223267894%5C%5C%5C%5C70084006052186583833823203735320%5C%5C%5C%5C46559596214370256093004722315301%5C%5C%5C%5C03873614505175218691345257589896%5C%5C%5C%5C39113039318944796977164583238219%5C%5C%5C%5C23660765366311320017761759779321%5C%5C%5C%5C78658703660778465765811830827876%5C%5C%5C%5C98201412402294867197567813172495%5C%5C%5C%5C80644279499028104989732710307877%5C%5C%5C%5C16781467419524180040734398996952%5C%5C%5C%5C93083250893411694596612017673512%5C%5C%5C%5C08231519597795368522900903774525%5C%5C%5C%5C02236990839453416790640456116471%5C%5C%5C%5C13975154675004860218929102864097%5C%5C%5C%5C05747626001859502261382445301874%5C%5C%5C%5C89211615864021135312077912018844%5C%5C%5C%5C63078030746220525280773775767209%5C%5C%5C%5C43206923731010325174595184975240%5C%5C%5C%5C15120165166724189816766397247824%5C%5C%5C%5C17539480202822816002710062399887%5C%5C%5C%5C36674357990730546189068554604883%5C%5C%5C%5C51426611310634023489044291860510%5C%5C%5C%5C35230191242660848880746231212659%5C%5C%5C%5C02068304137826645542604112663788%5C%5C%5C%5C66626653755763627796569082931785%5C%5C%5C%5C64560081623689116814177499326748%5C%5C%5C%5C81717021721910727310692168816682%5C%5C%5C%5C94625679492696148976999868715671%5C%5C%5C%5C44087420642721205671737309963971%5C%5C%5C%5C11689011974404165902265241927828%5C%5C%5C%5C42896415414611688187391232048327%5C%5C%5C%5C73896582026593409310817205487518%5C%5C%5C%5C82465917608771316578956335865766%5C%5C%5C%5C11857277011782497943522945011248%5C%5C%5C%5C43043920129701511946873071236400%5C%5C%5C%5C76393739108119534303094768324532%5C%5C%5C%5C30123996750235710787086641070310%5C%5C%5C%5C28872538959513893678471527415042%5C%5C%5C%5C64954161966698326799802534368078%5C%5C%5C%5C64187160054589045664027158817958%5C%5C%5C%5C54937449051239905544881914848704%5C%5C%5C%5C93636746116646098900300885495919%5C%5C%5C%5C92466360050042566270348330911795%5C%5C%5C%5C48764704594930128661465865007129%5C%5C%5C%5C96956522452660806729899217993425%5C%5C%5C%5C09291635330827874264789587306974%5C%5C%5C%5C47232771870430635244592599615561%5C%5C%5C%5C91537839132372127160104102949998%5C%5C%5C%5C77569745287353422903443387562746%5C%5C%5C%5C45252286042041668901973291379807%5C%5C%5C%5C37732815335709102052077671571281%5C%5C%5C%5C74184873357050830752777900041943%5C%5C%5C%5C25673849906782148842105387086902%5C%5C%5C%5C27386988160598105792210025608829%5C%5C%5C%5C99884763252161747566893835178558%5C%5C%5C%5C96114234930446650640237355631870%5C%5C%5C%5C71757108669830353131220683211024%5C%5C%5C%5C57824112014969387225476259342872%5C%5C%5C%5C86636355038384072001083290669536%5C%5C%5C%5C05535566475452958499662799808305%5C%5C%5C%5C61242960013654529514995113584909%5C%5C%5C%5C05081301519892828320218919461550%5C%5C%5C%5C14034355530601477131397663231957%5C%5C%5C%5C43324848047347575473228198492343%5C%5C%5C%5C23149658088505733051094905849052%5C%5C%5C%5C77386626974802935836122331345020%5C%5C%5C%5C78182014347192522391449087738579%5C%5C%5C%5C08158579561354719859966127356766%5C%5C%5C%5C24414904018628398178226865731129%5C%5C%5C%5C98663038868314974259766039340894%5C%5C%5C%5C02430838345103987467406116053824%5C%5C%5C%5C23928035807582327557493108436941%5C%5C%5C%5C94787991556647907091849600704712%5C%5C%5C%5C00337110392696713740812571363139%5C%5C%5C%5C66993437332880142540848193793805%5C%5C%5C%5C55174777020843568689927348949484%5C%5C%5C%5C20104259527193263068574761383538%5C%5C%5C%5C54344248070246151618482237159897%5C%5C%5C%5C97178155169951121052285149157137%5C%5C%5C%5C69771885044970884333047530144037%5C%5C%5C%5C30946111196313617029363422632193%5C%5C%5C%5C82793996895988331701890693689862%5C%5C%5C%5C45902077559943950687000513075042%5C%5C%5C%5C79497470713900952567592034266718%5C%5C%5C%5C03377068109744629909769176319526%5C%5C%5C%5C83782436492684473054552464649432%5C%5C%5C%5C18262419251071580405616077063644%5C%5C%5C%5C84910978348669388142016838792902%5C%5C%5C%5C92615897935543248361151758860596%5C%5C%5C%5C77453939580619590248342515651979%5C%5C%5C%5C63477521095821435651996730128376%5C%5C%5C%5C73457484328908968271035024422229%5C%5C%5C%5C00178912804197827678037852779608%5C%5C%5C%5C34729869249991658417000499998999)

![](https://www.zhihu.com/equation?tex=b%3D0.367695424770964044626806%5C%5C%5C%5C13922046134397249989380531585145%5C%5C%5C%5C13036618155885836911717592985737%5C%5C%5C%5C69740890670043472653912332306494%5C%5C%5C%5C73926279625852180187418654981017%5C%5C%5C%5C37104600945008697743998019542464%5C%5C%5C%5C80044957117687300046018997049105%5C%5C%5C%5C03210989892572330370245359323310%5C%5C%5C%5C63635219529076884742977597569290%5C%5C%5C%5C64685952104655860693664597955977%5C%5C%5C%5C90167642518282902015405655838570%5C%5C%5C%5C23288078197573154378002870750497%5C%5C%5C%5C34753848613963373849815660354668%5C%5C%5C%5C61179520329855358710173761232960%5C%5C%5C%5C41878375857642759121062856573017%5C%5C%5C%5C22404248157114176765834106825786%5C%5C%5C%5C14952715474304755493001991442222%5C%5C%5C%5C63716807279314849420589790264911%5C%5C%5C%5C05045001557465626949630850576351%5C%5C%5C%5C21940722619993186707352337487479%5C%5C%5C%5C37683632739815642879486050278630%5C%5C%5C%5C75184699323389465555247568649841%5C%5C%5C%5C94961051418188031865484981446361%5C%5C%5C%5C66235833688818897061508551124877%5C%5C%5C%5C60027102007864168772513848853859%5C%5C%5C%5C95521542065427697363321827422068%5C%5C%5C%5C35304700188816583381476647866263%5C%5C%5C%5C31053813203452828022868846955769%5C%5C%5C%5C43333222078484466065572654007145%5C%5C%5C%5C77322962429761736362976685900600%5C%5C%5C%5C53518999197076499203840816279411%5C%5C%5C%5C22685444566815901506388282031305%5C%5C%5C%5C83451691162545262377379529900352%5C%5C%5C%5C45419734770715445579422066237182%5C%5C%5C%5C00876209571810434926198165164363%5C%5C%5C%5C17345369011414768791673556207768%5C%5C%5C%5C93872753485475076299554429239978%5C%5C%5C%5C43666420554379784793055887627606%5C%5C%5C%5C89207804731628473002731833710563%5C%5C%5C%5C22972894534456618363131659140590%5C%5C%5C%5C82511602188665639337032933856231%5C%5C%5C%5C43109370529452801400584610424004%5C%5C%5C%5C73893689992523704077982580883692%5C%5C%5C%5C15939890335198532804399142122839%5C%5C%5C%5C59565930208145923169318775431667%5C%5C%5C%5C82343695497046390524797719667497%5C%5C%5C%5C85539098560204609348007015946353%5C%5C%5C%5C46301293239755032943998847048776%5C%5C%5C%5C92175542066069480539944175183706%5C%5C%5C%5C07033755999627233071318088427569%5C%5C%5C%5C95082520373392950025593899710460%5C%5C%5C%5C10688483693779922025122141901313%5C%5C%5C%5C48176056875366693263281699815371%5C%5C%5C%5C59601172437507686417815583221168%5C%5C%5C%5C84878488909585819326941343380402%5C%5C%5C%5C18120695516203989597118276238846%5C%5C%5C%5C85351561160522778089462527813553%5C%5C%5C%5C66287902954417838250783083529993%5C%5C%5C%5C49718683345687929082207378866519%5C%5C%5C%5C30030908977505541163137008497306%5C%5C%5C%5C81717053640874985480118471324141%5C%5C%5C%5C76220218372935491898700542088590%5C%5C%5C%5C20321175070875654266265568725475%5C%5C%5C%5C81523199300227897754970293850888%5C%5C%5C%5C26508430417227318043810943203721%5C%5C%5C%5C09240347828132900286209013675761%5C%5C%5C%5C03832332845329869057638650840502%5C%5C%5C%5C50420981793365140106161229409477%5C%5C%5C%5C90489114609769780048638865398856%5C%5C%5C%5C64375829446659285506273301553130%5C%5C%5C%5C28407506758883479938709937770415%5C%5C%5C%5C04107771774745229935615328505005%5C%5C%5C%5C93203565091259184757751104007291%5C%5C%5C%5C36773282304017027071758791776530%5C%5C%5C%5C26443895547262398307345600011746%5C%5C%5C%5C19602243822725121237421600534716%5C%5C%5C%5C84155267666069805506186622155004%5C%5C%5C%5C89903822175905466863754922738073%5C%5C%5C%5C80977014781169931232864007980560%5C%5C%5C%5C02113159925913448714482613893272%5C%5C%5C%5C15165085117303412334059209561634%5C%5C%5C%5C11202899092343370188802996172596%5C%5C%5C%5C56175482384006736313512561967752%5C%5C%5C%5C17973243187051615024442232451315%5C%5C%5C%5C73691041634885279859407143207310%5C%5C%5C%5C98654056191788581497912184782750%5C%5C%5C%5C44156831820508825210460986581204%5C%5C%5C%5C26067370320718753874821954110023%5C%5C%5C%5C23282037607705112790607101736177%5C%5C%5C%5C76485641038970658094173136327655%5C%5C%5C%5C14043574725614216344733398248357%5C%5C%5C%5C84026844580059302763989397806772%5C%5C%5C%5C78733891393629850359814926828738%5C%5C%5C%5C95139380741666758583499499000001)

大家可以试着验算一下（确实是有限小数，精确满足，没有误差）

说明一下，这两个数分别是![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B999%7D%7B1000%7D%29%5E%7B999%7D)和![](https://www.zhihu.com/equation?tex=%28%5Cfrac%7B999%7D%7B1000%7D%29%5E%7B1000%7D)


---

# 能否找出一个从(0，1)到[0，1]的一一映射？ 亚亚

**Author:** 亚亚  
**Bio:** 跑步、天文、数学爱好者  
**Avatar:** ![](https://picx.zhimg.com/v2-a856edb38d881339ec8cbf08700cba32_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c1702e963df2b60dd1fbee8a870b64e3  
**Published:** 2024.09.20 22:44:16  
**Updated:** 2024.10.14 11:28:55  
**Question:** https://www.zhihu.com/question/570213247  
**Question Created:** 2022.12.02 23:18:13  
**Question Updated:** 2022.12.02 23:18:13  
**Votes:** 3006  
**Comments:** 116  
**Type:** answer  

参考中科大数分教材上的经典案例。

![](https://picx.zhimg.com/v2-12dd9418dfab9be4b043f5e313932e07_r.jpg?source=2c26e567)


---

# 新版的高中数学教材为什么要删掉极坐标系？ 洛星尘

**Author:** 洛星尘  
**Bio:** 于是信步鸿蒙之轻，也领苍生之重  
**Avatar:** ![](https://picx.zhimg.com/v2-2c13ca1fad1fef946ddb26281214561d_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aff63b5522042a8134bef0181d4acfb4  
**Published:** 2025.05.16 21:06:41  
**Updated:** 2025.05.17 20:54:47  
**Question:** https://www.zhihu.com/question/1901419631211701107  
**Question Created:** 2025.05.01 23:36:06  
**Question Updated:** 2025.05.17 05:10:29  
**Votes:** 3236  
**Comments:** 309  
**Type:** answer  

**事实上，极坐标和参数方程的知识，直到1996年左右之前一直都是高中解析几何的经典教学内容。换言之它在大纲里遭到删除是非常晚近的事，这或许和很多人的印象截然相反。**

**另外，沪教版高中数学新版教材里就没删极坐标**——应该是新版数学教材里唯一一个保留了极坐标和参数方程内容的版本了。不但没删，还在前言里直接开怼（x

![](https://picx.zhimg.com/v2-bd45702ac2ae25bd11d0cc8a3a393a9f_r.jpg?source=2c26e567)

在详细分析这个问题之前，首先说一句：“极坐标”的概念哪有很多答主想象中那么难= =用“距离”和“方位角”去定位一个点是小学生就能理解的非常自然的想法，事实上小学生确实会学到【向东偏北40°方向走100米】这类表述——而这不就是最朴素的极坐标思想嘛～

**既然小学生都能理解，那为什么极坐标要放在高中学呢？**是因为——高中学极坐标的目的并不是在“雷达图”上定位一个点这么简单。它是作为平面解析几何知识的组成部分纳入高中教材的，目的是用曲线在极坐标系里的方程来解决解析几何问题。换言之：**学极坐标不是关键，学极坐标上的曲线方程才是关键。**——考虑到这一点，既然直角坐标里的解析几何（曲线与方程）都要到高中才能学、任意角三角函数等前置知识也是高中才学得到的，那极坐标自然也只能放在高中了= =

接下来我们很感兴趣的话题就是：**极坐标到底是什么时候被加入新中国的高中数学课程，又是什么时候惨遭删除的？**近年来的情况大家都很清楚（2003课标中出现在模块【选修4-4：坐标系与参数方程】中、高考以选做题的形式考察；2017课标中被彻底删除），但早期的情况或许鲜为人知——但如果我们确实去考察高中数学大纲和教材的演进情况，就会发现，极坐标并不是什么新近加入的内容，而是高中的“钉子户”知识点，直到二十世纪末才被逐渐边缘化。

这个故事同样说来话长。

> “我决心放弃那个仅仅是抽象的几何，不再去考虑那些仅仅是用来练习思想的问题。我这样做，是为了研究另一种几何，即目的在于解释自然现象的几何。”
> ——　解析几何之父  笛卡尔

在我国中学数学课程体系中，“解析几何”一直占有很重要的地位——这一方面是因为解析几何可以看作是整个中学数学课程（初等数学）的集大成，需要融会贯通地应用学过的代数、几何、三角等所有领域知识，**“示其相互为用之处”**；另一方面是因为解析几何本身具有极其重要的理论和实用价值，是从初等数学过渡到高等数学的桥梁，也是物理、化学和工科学习的必要铺垫，可**“立高深研究之基础”**。——早在民国晚期和新中国成立初年，“解析几何”就一直是高中数学的学习内容，其课程内容量和难度甚至远高于今天。

例如，1941年，国民政府教育部颁布的**《六年制中学数学课程标准草案》**中，规定了高中第三年开设立体几何**（含球面几何）**以及解析几何，其中解析几何**包括平面解析几何和空间解析几何**——从该大纲可见， “各种轨迹之极方程式及其图解”、“极坐标与笛卡尔坐标之互换”、“参变数方程式及高级平面曲线” 赫然在列：

![](https://pic1.zhimg.com/v2-d0c023af009c702a1482271c43ea7871_r.jpg?source=2c26e567)

新中国建立后，1950年，教育部发布了**《数学精简纲要》**草案，对旧教材中的内容进行了较大幅度的精简。但在解析几何的版块中，依然保留了坐标转换与一般二次曲线的讨论、圆锥曲线的切线与法线、极坐标、参数方程（当时叫“襄变方程”）以及立体解析几何大意的内容。可见当时的教育工作者认为这些内容都是解析几何的核心内容：

![](https://picx.zhimg.com/v2-ebae68cfd66558d78978b61c92f98217_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-fde7433e9e81f83a5d82ddfdd020caf0_r.jpg?source=2c26e567)

直到1952年7月，教育部开始编写我国的中小学各科教学大纲，并提出以学习苏联经验为主，将苏联的大纲“先搬过来，后中国化”。但由于在这一过程中，片面地将苏联中小学十年的教学内容拉长为我国的十二年，编出来的整套教科书的内容深度和水平远低于新中国成立初期。**高中平面解析几何被直接取消**，高中代数里也少学了方程论的一部分和概率、行列式的内容，总体来看知识面窄、内容少、程度低，完全不能满足学生毕业后进一步学习或者参加工作的需要。

![](https://pica.zhimg.com/v2-0e729eabc3dd4dbe654db20aea9c492b_r.jpg?source=2c26e567)

这样的教材势必不能满足社会主义建设对科学技术人才的迫切需求。1958年“大跃进”大幕甫一开启，“少慢差费”的旧教材就立刻受到批判。在轰轰烈烈的座谈讨论和走群众路线的调查研究中，各界逐渐形成了共识：**小学要学完算术，初中要学完平面几何，高中要恢复平面解析几何，适当考虑增加行列式、高次方程、导数和立体解析几何等内容。**——尤其是对高中要加平面解析几何这件事达成了一致。且看当时收集的意见：

大学教授提出：

![](https://picx.zhimg.com/v2-04acb6456b6f1955c2a7b6f2774cb570_r.jpg?source=2c26e567)

专家们说：

![](https://pica.zhimg.com/v2-72a31da2b738067f00b3d6652ced5d3e_r.jpg?source=2c26e567)

教材编写组最后总结道：

![](https://picx.zhimg.com/v2-a6e88c1edac24665ee1e084bfdc71e4f_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-42b354f37664d4fea79c304dd03f4bd3_r.jpg?source=2c26e567)

关于这一段历史故事，包括调查研究过程中的有趣细节，可以参见前些时间的另一个回答：

[如何评价民国时代的"初中算术"课程？大家觉得它的存在是民国教育落后的象征，还是值得我们参考的先进做法？ - 知乎](https://www.zhihu.com/question/1902439762050134431/answer/1903336299466818104)

于是，就有了这份上交到教育部、再由教育部报送给国务院的文件：将初中算术全部下放小学、高中平面几何全部下放初中，**“原则上规定1962年秋季开始在高中三年级增加解析几何”**——彻底完成了对之前旧大纲的拨乱反正。

![](https://pic1.zhimg.com/v2-717aa433efbed41c8b61201bf0e7215c_r.jpg?source=2c26e567)

在中央的同意下，新的教学大纲得以制定，新的高中平面解析几何教材也得以出版——而在书中，坐标变换、极坐标、参数方程等内容依然没有缺少：

![](https://picx.zhimg.com/v2-d74a45a995ccbe9cd733fb271d83bf78_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-215a4ec988acaaef5c48b47a899dd9d0_720w.jpg?source=2c26e567)

![](https://pica.zhimg.com/50/v2-61cbe905e86c05e5fdd0cd1444e04044_720w.jpg?source=2c26e567)

在这一段波折之后，平面解析几何内容就稳定存在于中学数学的教学大纲内，而极坐标、参数方程的内容也从未缺席。**即便是在十年文革期间人教社出版的“带着语录”的《初等数学》教材，依然将极坐标、参数方程的内容编入《解析几何》分册，并列入基本内容而非选学内容。**——当时有很多“工农兵大学生”进入高校学习，由于中学的数学教育受到破坏，他们在中学期间没能得到完整的数学教育，进入理工科高校后需要补习。这套《初等数学》分为《初等代数》《初等几何》《三角函数》《解析几何》和《公式与数表》五册，因满足了他们渴望学习的需要而大受欢迎。当时全国相当多的高等院校采用它，许多省市自编的中学数学教材也参考它。

![](https://pica.zhimg.com/v2-027db46764c6d85207b00396f2adff42_r.jpg?source=2c26e567)

有了参数方程，可以研究车床上如何加工出六角螺母：

![](https://picx.zhimg.com/v2-ff1a323eb24e0e36e1c24e49732c3873_r.jpg?source=2c26e567)

利用极坐标，除了研究直线和圆，我们还可以研究更复杂的曲线，例如螺线：

![](https://picx.zhimg.com/v2-67dc0fa983b917d2b0cee4c62d9a00b1_r.jpg?source=2c26e567)

例如和齿轮有关的渐伸线：

![](https://pica.zhimg.com/v2-3e1f93103f4acf8723cca4ade6b3f037_r.jpg?source=2c26e567)

当然还可以研究圆锥曲线，并得出椭圆、抛物线和双曲线在极坐标下的统一方程：

![](https://picx.zhimg.com/v2-cd35017d1019f9b0e693c09a2d44a8e0_r.jpg?source=2c26e567)

1977年，高考的大门重新敞开，一套**《数理化自学丛书》**火遍了大江南北，无数人因它而改变了命运。无论是1962年出版的《数理化自学丛书》第一版、还是1982年出版的《数理化自学丛书》第二版，都纳入了极坐标系与参数方程的内容：

![](https://picx.zhimg.com/v2-fc72c311095fb1d8e86a8e177461d78d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d2359ce4b6264369c668e9f2b2a34a94_r.jpg?source=2c26e567)

1978年2月，教育部颁布了**《全日制十年制中学数学教学大纲（试行草案）》**，提出中学数学不再分科，将代数、几何、三角等内容以及新增加的微积分、概率统计、逻辑代数等内容合为一门“数学”课。在这一大纲的指导下，1980年人教社出版了文革后第一套全国通用的中学数学课本——从目录中可以看出，这一时期的教学大纲，将平面解析几何中的“直线和圆的方程”（还有指数、常用对数、解三角形等知识）从高中下放到了初中，高中依然开设“二次曲线”、“极坐标和参数方程”等内容：

![](https://pic1.zhimg.com/v2-6064eba5ffb64e2b2a1ed9a0099f74ec_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a0e8918abc59a014d131c8bf2680c988_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-df54caf754ba25f488f18769d3831c60_r.jpg?source=2c26e567)

——可是，当时全国各地的教育水平还很不均衡，步子如此大的改革遇到很大困难。于是，1981年提出中学学制从五年制逐步延长到六年。在针对六年制中学的教学大纲中，取消了《数学》合编，仍分为《代数》《立体几何》《平面解析几何》等，并首次提出了“文理分科教学”——即对侧重文科的学生和侧重理科的学生提出不同的内容要求。**“对于侧重文科的学生，将反三角函数和三角方程、极坐标和参数方程、线性方程组、不等式的性质和证明等内容改为选学，微积分可以只学有理整函数的微分和积分。”**——这是极坐标内容的要求首次有了松动的迹象。**但是，对于侧重理科的学生，极坐标和参数方程仍为必修。**

这一做法一直持续到了1986年推出的《全日制中学数学教学大纲》——**在这份大纲里，尽管将“参数方程、极坐标”内容标为选修，但它对理科学生仍是必修，且仍在理科高考的命题范围内：**

> 本次修订本规定：高中阶段的必学内容是文史类高考的数学命题范围；必学内容与选学内容中的 “反三角函数和简单三角方程” “参数方程、极坐标” 合在一起，是理工科高考的数学命题范围。

![](https://picx.zhimg.com/v2-2b0a6cb9fc1dc5db2fb319525d4552a2_r.jpg?source=2c26e567)

——当然，还不得不提的便是这一时期出版的**《甲种本》《乙种本》**，如今还在知乎上被津津乐道。其实，无论是较高要求的“甲种本”、还是相对较低要求的“乙种本”，也都编入了坐标变换、参数方程和极坐标等内容。（甲种本只是额外多了一般二次曲线的讨论作为选学。）

![](https://picx.zhimg.com/v2-d0e97a474a5096686b83269ca312834f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-5246ea96c2caeb4506d502eebd393ffe_r.jpg?source=2c26e567)

**综上所述，极坐标和参数方程的内容，一直到90年代末，都是中学平面解析几何教学的经典内容，后期也处在理科高考的命题范围之内。**

直到1996年颁布的**《全日制普通高级中学数学教学大纲（供试验用）》**——后来又经过几次修订，最终形成了2002年**《全日制普通高级中学数学教学大纲》**。在这份新大纲中，解析几何的内容被删减，极坐标系与参数方程的内容也消失不见：

![](https://pic1.zhimg.com/v2-7425b9ae41b5868af3493a3077fdf310_r.jpg?source=2c26e567)

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

![](https://picx.zhimg.com/v2-8bb523715a162b299fa41fa712da8ed2_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-996b262b0b98b10e2279da87294f5a3a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3ec1dfc611aacc95614ff19c0ca628dc_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-327b314bc1ef5f8bfc0d6720f5d98949_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-fb3e6c4cf028a006034b46ae1fcc8b39_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-7d868c0bb81574c220e2f8c1494d6268_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-db11c17e05b93f2846830bed2eb5bca3_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c2c74391b8f3c0e2a01462219fb442d9_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-a15ad30d39a73f165bbb330b1d9a0073_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-97e57238485eb28e98dfba6b59d41172_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-d529f4f4bb547bf106aee7867aa0695a_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-31b36ba946a0d9ceae827d7763f537ad_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-078d9e44cd5ef945c2a7cd18c9cf0b9e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-159d45c0e85a7cb40280449b51665ddf_r.jpg?source=2c26e567)

很可惜的是，其他一些版本教材的编者似乎没有这样的勇气= =

**这样造成的后果是什么呢？**

首先，学生的解析几何知识体系存在残缺——放弃了极坐标的内容，事实上也就放弃了圆锥曲线的统一公式。学生很难理解离心率的几何意义，不知道为啥衡量椭圆“扁”的程度非得用![](https://www.zhihu.com/equation?tex=%5Cfrac+c+a)而不是![](https://www.zhihu.com/equation?tex=%5Cfrac+b+a)、不知道为啥非得给抛物线定义一个![](https://www.zhihu.com/equation?tex=e%3D1)，也对这三种曲线到底是怎么统一起来的抱有困惑，原本浑然一体的知识体系被人为割裂、打碎。新课标的制定者或许认为极坐标只是一个可有可无的解题工具，**但却忽视了“根据实际问题选择更有效的坐标系”本质上也是智慧的体现，是一种很重要的思维训练**——在解决某些曲线的问题时极坐标更方便，通过对比直角坐标和极坐标本可以强化对坐标系的本质认识，但如今学生已经没有训练这种思维的机会了。

![](https://pic1.zhimg.com/v2-e07615f00a3dbbfad135e8d4010aa0d3_r.jpg?source=2c26e567)

此外，知识体系的破碎会给学生的进一步学习带来困难。大学学高数的时候，解决二重积分的问题很多时候需要用极坐标方程，空间的问题甚至还需要用到更复杂的柱坐标、球坐标。而如今极坐标的内容高中不学，大学的教材里也不会专门补，事实上已经成为了一个“两不管”地带 —— 当然，这种尴尬不仅限于极坐标，同样在新教材里被删掉的定积分更是如此，而且这种贸然删除所带来的恶果已经显现了——高中完全没建立过积分思想的话对学物理的影响很大，也对部分高校在大一第一学期开设物理、化学等课程带来了很大的冲击。**浙大现在已经开始对所有大一新生开设数学和计算机的预修课程了，就是在录取通知书里放上网课链接，让小朋友们暑假的时候学，然后开学考试= =**

![](https://picx.zhimg.com/v2-7e89a405fae66c427fd02d94f64c637f_r.jpg?source=2c26e567)

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


---

# 费马大定理的证明 猴哥讲数学

**Author:** 猴哥讲数学  
**Bio:** cmc数学竞赛省第一，决赛国一
入围四次阿里数学竞赛决赛  
**Avatar:** ![](https://pic1.zhimg.com/v2-dfefb28a170a336c4af2354600db1d1b_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/264eb2afa076281fcedd177708fc6a5a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 299  
**Comments:** 63  
**Type:** article  

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


---

# 一套钓鱼卷的部分题目解答 Jerry1031

**Author:** Jerry1031  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-baf3d6cbf264931879755b9413dd3191_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/52673f1fb52c26387f7ae8068317f226  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 92  
**Comments:** 5  
**Type:** article  

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

拿出计算器，切换到小数模式（设置-1-2）。如果其满足上述形式，那么![](https://www.zhihu.com/equation?tex=b%5Csqrt%7B13%7D)的小数部分应是![](https://www.zhihu.com/equation?tex=.10007704)（![](https://www.zhihu.com/equation?tex=b%3E0)）或![](https://www.zhihu.com/equation?tex=.89992296)（![](https://www.zhihu.com/equation?tex=b%3C0)）。

在计算器里输入![](https://www.zhihu.com/equation?tex=%5Csqrt%7B13%7D)，=，然后输入![](https://www.zhihu.com/equation?tex=%5Ctext%7BAns%7D%2B%5Csqrt%7B13%7D)，连续按=，注意观察小数部分与上述两个小数部分是否相同，记下按了多少次=。

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

sol = {x2, x3, x4} /. 
   Solve[Refine[
     Variance[{x1, x2, x3}] == 1 && Variance[{x1, x2, x4}] == 2 && 
      Variance[{x1, x3, x4}] == 2, {x1 \[Element] Reals, 
      x2 \[Element] Reals, x3 \[Element] Reals, x4 \[Element] Reals}]];
Table[FullSimplify[
   Refine[Variance[sol[[i]]], x1 \[Element] Reals]], {i, 
   Length[sol]}] // DeleteDuplicates
Out[2]= {1/2 (3 - Sqrt[5]), 1/2 (3 + Sqrt[5]), 1}

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

dp[i][j]j=0j=1j=2j=3j=4i=010000i=111000i=221100i=342110i=484211i=5168421i=63116842i=761311684i=81206131168i=9236120613116i=104642361206131

不出现连续![](https://www.zhihu.com/equation?tex=5)次正面的序列数目为![](https://www.zhihu.com/equation?tex=464+%2B+236+%2B+120+%2B+61+%2B+31+%3D+912)。

总序列数目为![](https://www.zhihu.com/equation?tex=2%5E%7B10%7D+%3D+1024)，因此出现至少一次连续![](https://www.zhihu.com/equation?tex=5)次正面的序列数目为![](https://www.zhihu.com/equation?tex=1024+-+912+%3D+112+)。

概率为![](https://www.zhihu.com/equation?tex=%5Cfrac%7B112%7D%7B1024%7D+%3D+%5Cfrac%7B7%7D%7B64%7D)。

![](https://www.zhihu.com/equation?tex=%5Cboxed%7BC%7D)

#include<stdio.h>intdp[11][5];intmain(){constintn=10,m=5;dp[0][0]=1;for(inti=1;i<=n;i++){ints=0;for(intj=0;j<m;j++){dp[i][j]=dp[i-1][j-1];s+=dp[i-1][j];}dp[i][0]=s;}for(inti=0;i<=n;i++,puts(""))for(intj=0;j<m;j++)printf("%d ",dp[i][j]);return0;}

## 18

已知![](https://www.zhihu.com/equation?tex=f%28x%29+%3D+x%5E2+%2B+x)，记![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29+%3D+f%28f%5E%7B%28n-1%29%7D%28x%29%29+%28n+%5Cin+%5Cmathbb%7BN%7D%29)，规定![](https://www.zhihu.com/equation?tex=f%5E%7B%280%29%7D%28x%29+%3D+x)。

记![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29)展开式中![](https://www.zhihu.com/equation?tex=x%5Ek)的系数为![](https://www.zhihu.com/equation?tex=T_n%5Ek)，即![](https://www.zhihu.com/equation?tex=f%5E%7B%28n%29%7D%28x%29+%3D+T_n%5E0+%2B+T_n%5E1+x+%2B+T_n%5E2+x%5E2+%2B+T_n%5E3+x%5E3+%2B+%5Cldots+%2B+T_n%5Ek+x%5Ek+%2B+%5Cldots)且当![](https://www.zhihu.com/equation?tex=k+%3E+2%5En)时，定义![](https://www.zhihu.com/equation?tex=T_n%5Ek+%3D+0)。

(1) 求![](https://www.zhihu.com/equation?tex=T_2%5E3)和![](https://www.zhihu.com/equation?tex=T_3%5E3)的值，并证明：对于一切![](https://www.zhihu.com/equation?tex=n+%5Cin+%5Cmathbb%7BN%7D)，![](https://www.zhihu.com/equation?tex=T_n%5E4+%3D+%5Cfrac%7B1%7D%7B2%7D+n%28n-1%29%282n-3%29);

(2) 求![](https://www.zhihu.com/equation?tex=T_n%5E5)的表达式；

(*3) 求![](https://www.zhihu.com/equation?tex=T_n%5Em)的表达式。

OEIS Link:[A122888](https://link.zhihu.com/?target=https%3A//oeis.org/A122888)

f[x_,n_]:=Nest[#^2+#&,x,n];T[n_,m_]:=Coefficient[f[x,n],x,m];Table[T[n,m],{n,1,5},{m,1,2^n}]Table[{m,FindSequenceFunction[Table[T[i,m],{i,1,10}],n]//Factor},{m,1,9}]

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


---

# 有没有超级难的圆锥曲线？ 柯西永远爱你

**Author:** 柯西永远爱你  
**Bio:** CMC数类16届决赛全国第一/三届省第一/数海钓鱼/报班教你  
**Avatar:** ![](https://pic1.zhimg.com/v2-b049c9c03f5bb90aaddae7536ec48ce0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/63096a4161cc90d786a974df99035769  
**Published:** 2024.04.01 13:04:10  
**Updated:** 2024.04.01 13:04:10  
**Question:** https://www.zhihu.com/question/651079179  
**Question Created:** 2024.03.31 22:40:05  
**Question Updated:** 2024.03.31 22:40:05  
**Votes:** 277  
**Comments:** 34  
**Type:** answer  

有的，一大堆

比如这个上海模拟卷

![](https://pic1.zhimg.com/v2-5624465308c3a8537b5bebbfca3ea0f9_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-848097c1b0af3776e43268bc010712da_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-889ab542fe2f6b3e383591f367ebd44d_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-1dcf009b787ebc664d070a583f87b6a1_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-da57f4463478a7a41969fc7e1ac69beb_r.jpg?source=2c26e567)

里面有好多有意思的解析几何题

还有我之前这两个回答

[高中数学解析几何圆锥曲线大题真的是硬解就能解出吗？](https://www.zhihu.com/question/347025945/answer/2220201633?utm_psn=1758115931384213504)




[有没有创新一些的圆锥曲线大题？](https://www.zhihu.com/question/577898562/answer/2839585267?utm_psn=1758115916226027520)

都是高考题，但是可能你都不会做

做不出来也没有关系，问问你的老师/同学就可以了，或者转发到其他数学群里面


---

# 高二了开始准备数学IMO还来得及吗？ 最爱FE2025

**Author:** 最爱FE2025  
**Bio:** 一个无可救药的臭阿宅罢了/INFP  
**Avatar:** ![](https://picx.zhimg.com/v2-46bd94f08d21e53241811df96712f672_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b9339ff8506627b1d9d50b2b2e565d0d  
**Published:** 2024.07.24 20:00:22  
**Updated:** 2024.07.24 20:00:22  
**Question:** https://www.zhihu.com/question/662274560  
**Question Created:** 2024.07.22 15:52:12  
**Question Updated:** 2024.07.25 17:28:46  
**Votes:** 244  
**Comments:** 83  
**Type:** answer  

如果现在您能独立做出以下的题目我相信您有能够满足您愿望的水平。（建议是不要查相关内容）

![](https://picx.zhimg.com/v2-516c25d14fbdf2ccca6c90a30c2036ba_r.jpg?source=2c26e567)

这道题目并不是我能拿出的题目里最难的，没有换另一道题算是我最后的仁慈了（


---

# 问一下数竞的朋友们，请问高中小蓝本有必要全部刷完吗？ 星语数学

**Author:** 星语数学  
**Bio:** 数竞  
**Avatar:** ![](https://pic1.zhimg.com/v2-ef6b010a00e79b42c6ca6f3c7caab128_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/091363bc21d6de607fe7e5118b411d42  
**Published:** 2022.08.21 09:36:17  
**Updated:** 2022.08.21 09:36:17  
**Question:** https://www.zhihu.com/question/415301936  
**Question Created:** 2020.08.18 14:17:15  
**Question Updated:** 2020.08.22 09:19:37  
**Votes:** 16  
**Comments:** 3  
**Type:** answer  

## 没有必要！

首先，不是所有小蓝本都是写的好的，比如说余红兵教授的数论，你没有升幂定理我忍了，没有卢卡斯，库尔莫定理我忍了，但你不讲二次剩余理论我是真的忍不了！很多教授写小蓝本就是为了水书……但是优秀的小蓝本也不少：个人强推李胜宏教授和边红平校长的柯西均值（当然我不是给我们校长做广告……）书中柯西的十余种证明颇令我感到惊讶，而充分的例题与多元的解答长长引发我们无尽的遐想。还有几何也写的蛮好的，（当然由于我也没有全部做过，无法告诉你们到底哪本好不好）有一些偏专题的我认为如果想在这个专题是取得突破，可以做一部分，不过没有必要老老实实全部刷完。


---

# 你遇到的最难的一个数学题是什么？ 韦ze

**Author:** 韦ze  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-93790dcca79047dc9376be740378d83a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/77760d303c087805e395eaea74b834b7  
**Published:** 2024.05.17 02:56:51  
**Updated:** 2024.05.17 02:56:51  
**Question:** https://www.zhihu.com/question/312876055  
**Question Created:** 2019.02.19 16:23:57  
**Question Updated:** 2019.02.19 16:23:57  
**Votes:** 2312  
**Comments:** 334  
**Type:** answer  

![](https://picx.zhimg.com/v2-593ad2f1f3f5f70ef1c4d2e919787616_r.jpg?source=2c26e567)

这题放高考考场上，我估计没人能写的出来，整个浙江没有一个满分


---

# 你遇到的最难的一个数学题是什么？ 我负责舔包

**Author:** 我负责舔包  
**Bio:** 设计、策划  
**Avatar:** ![](https://pic1.zhimg.com/v2-cd40e072d74152a91220512d0bc0d82e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/be64022a7791ff30715d1ec8405b6e08  
**Published:** 2024.11.17 14:21:59  
**Updated:** 2024.11.17 14:21:59  
**Question:** https://www.zhihu.com/question/312876055  
**Question Created:** 2019.02.19 16:23:57  
**Question Updated:** 2019.02.19 16:23:57  
**Votes:** 6829  
**Comments:** 897  
**Type:** answer  

他们说这是一个中专的卷子。

我以为能手拿把掐，然后我怂了。

![](https://picx.zhimg.com/v2-296300ab16e268015e84ff79adc6ebc6_r.jpg?source=2c26e567)


---

# 连续函数f(x)的定义域为(0,2)，当且仅当1<x<2时f(x)>0，能推出f(1)=0吗？ Dylaaan

**Author:** Dylaaan  
**Bio:** 高考探秘系列作者，公众号：Dylan的数学笔记  
**Avatar:** ![](https://picx.zhimg.com/v2-a311a345bd36bdec995af633beba52bc_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/94e30fe60a9446623bbbb3ff8bb143c8  
**Published:** 2024.06.15 16:12:42  
**Updated:** 2024.06.15 16:12:42  
**Question:** https://www.zhihu.com/question/658475705  
**Question Created:** 2024.06.09 15:28:24  
**Question Updated:** 2024.06.15 16:14:42  
**Votes:** 173  
**Comments:** 10  
**Type:** answer  

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


---

# 这个不等式最“注意到”可以怎么做? 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://pic1.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2025.02.09 18:32:41  
**Updated:** 2025.02.09 18:32:41  
**Question:** https://www.zhihu.com/question/11579297979  
**Question Created:** 2025.02.08 00:58:13  
**Question Updated:** 2025.02.09 16:23:06  
**Votes:** 24  
**Comments:** 3  
**Type:** answer  

设![](https://www.zhihu.com/equation?tex=x%5Cleft%282%2B%5Cfrac%7B1%7D%7B4y%7D%5Cright%29%3Dp%2C)则![](https://www.zhihu.com/equation?tex=%5Cfrac%7B3p%7D%7Bx%7D-%5Cfrac%7B3%7D%7B4y%7D%3D6.)于是![](https://www.zhihu.com/equation?tex=%5Cfrac%7B27%7D%7B4%7D%2B6%3D%5Cleft%28x%5E2%2B%5Cfrac%7B3p%2B1%7D%7B2x%7D%2B%5Cfrac%7B3p%2B1%7D%7B2x%7D%5Cright%29%2B%5Cleft%28y%5E2%2B%5Cfrac%7B1%7D%7B8y%7D%2B%5Cfrac%7B1%7D%7B8y%7D%5Cright%29%5Cge3%5Csqrt%5B3%5D%7B%5Cfrac%7B%283p%2B1%29%5E2%7D%7B4%7D%7D%2B%5Cfrac%7B3%7D%7B4%7D.%5C%5C)


---

# 求问「1^100、2^99、3^98……99^2、100^1」这一百个数中，谁最大？ 飞入云端的梦

**Author:** 飞入云端的梦  
**Bio:** 知乎现在戾气好重。。。  
**Avatar:** ![](https://picx.zhimg.com/v2-52437b76c074aad5275a675af252466d_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0d8bdb5c059bc50638753c78e047ad63  
**Published:** 2025.02.11 22:29:16  
**Updated:** 2025.05.30 23:33:51  
**Question:** https://www.zhihu.com/question/11842379652  
**Question Created:** 2025.02.10 19:49:16  
**Question Updated:** 2025.02.17 13:54:20  
**Votes:** 1922  
**Comments:** 115  
**Type:** answer  

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

![](https://pica.zhimg.com/v2-a191194415fe15216346a7fd540a259b_r.jpg?source=2c26e567)

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


---

# 有没有最难的数学导数题啊来一道？ 嗯嗯嗯

**Author:** 嗯嗯嗯  
**Bio:**   
**Avatar:** ![](https://pica.zhimg.com/v2-1d96fa5876833eb413de398725cc023a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/53a5ebba1dd80ac1748436313a829992  
**Published:** 2023.01.05 16:42:42  
**Updated:** 2024.06.12 17:16:01  
**Question:** https://www.zhihu.com/question/368746359  
**Question Created:** 2020.01.31 08:57:51  
**Question Updated:** 2020.01.31 08:57:51  
**Votes:** 1576  
**Comments:** 104  
**Type:** answer  

终于可以把我压箱底的图片发出来了

![](https://picx.zhimg.com/v2-ff4b6bfbf9877eccb53791fec832f015_r.jpg?source=2c26e567)




2024.6.12更新

转个图片就拿了1000赞，和剩下几百个回答加起来差不多。有趣


---

# 请问解方程 2k⁴+9k³-9k+2=0 时，如何想到换元令 u=k-1/k？ 酱紫君

**Author:** 酱紫君  
**Bio:** QQ群1014125  
**Avatar:** ![](https://pic1.zhimg.com/v2-8bec9d5bd4a7b338b2b91d0ce1e70ee3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a74574db96f2d0e717fc410bf90dd150  
**Published:** 2024.01.29 22:21:38  
**Updated:** 2024.01.30 17:41:14  
**Question:** https://www.zhihu.com/question/640357173  
**Question Created:** 2024.01.20 08:14:34  
**Question Updated:** 2024.01.29 14:35:44  
**Votes:** 3300  
**Comments:** 140  
**Type:** answer  

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


---

# 解高考数学题时应该如何思考？以一道导数真题为例 Dylaaan

**Author:** Dylaaan  
**Bio:** 高考探秘系列作者，公众号：Dylan的数学笔记  
**Avatar:** ![](https://pic1.zhimg.com/v2-a311a345bd36bdec995af633beba52bc_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/94e30fe60a9446623bbbb3ff8bb143c8  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 182  
**Comments:** 23  
**Type:** article  

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


---

# 如何判断高中数学老师的水平？可以做做这五个题 Dylaaan

**Author:** Dylaaan  
**Bio:** 高考探秘系列作者，公众号：Dylan的数学笔记  
**Avatar:** ![](https://picx.zhimg.com/v2-a311a345bd36bdec995af633beba52bc_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/94e30fe60a9446623bbbb3ff8bb143c8  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 579  
**Comments:** 61  
**Type:** article  

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


---

# 1，3，3，5，5，5，7，7，7，7... 的通项公式是什么？ 酱紫君

**Author:** 酱紫君  
**Bio:** QQ群1014125  
**Avatar:** ![](https://pic1.zhimg.com/v2-8bec9d5bd4a7b338b2b91d0ce1e70ee3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a74574db96f2d0e717fc410bf90dd150  
**Published:** 2023.08.08 12:12:13  
**Updated:** 2023.08.08 15:19:01  
**Question:** https://www.zhihu.com/question/419720398  
**Question Created:** 2020.09.06 16:33:37  
**Question Updated:** 2023.07.28 18:57:21  
**Votes:** 4386  
**Comments:** 171  
**Type:** answer  

注意到如下初等函数完美符合条件:

![](https://www.zhihu.com/equation?tex=a_n%3D%5Cdfrac%7Bi+%7D%7B%5Cpi+%7D%5Cln%5Cleft%28e%5E%7B%5Csqrt%7B-8+n%7D%5Cpi%7D%5Cright%29%2B%5Csqrt%7B8+n%7D-1)

![](https://picx.zhimg.com/v2-1b107263f39291a478deef6c754d902b_r.jpg?source=2c26e567)

Table[-1+ Sqrt[8n]+I /\[Pi] Log[E^(\[Pi] Sqrt[-8n] )],{n,100}]//FullSimplify

注意无论是 arctan + tan 还是 arccos + cos 以及 arcsin + sin 都是做不到这点的.

这里利用了黎曼面的性质, 每转一圈刻度往外移一格, 所以周期才会 1, 2, 3 这样增大.

且只有 ln 是一圈一圈连续向下延伸的, 转过一周正好消除.

![](https://pic1.zhimg.com/50/v2-9cd04d6c3fd7cc34d60d365807ccd8d2_720w.jpg?source=2c26e567)

其他反三角函数的黎曼面都是断裂的, 分支定界都无法达到要求.

![](https://picx.zhimg.com/50/v2-0b0c2d4dc6d7bfd06080b5c1abaf75a1_720w.jpg?source=2c26e567)


---

# 如何优雅地证明e＞根号7？ 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://picx.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2024.06.30 17:51:23  
**Updated:** 2024.06.30 17:51:23  
**Question:** https://www.zhihu.com/question/660297197  
**Question Created:** 2024.06.29 20:54:39  
**Question Updated:** 2024.06.29 20:54:39  
**Votes:** 17971  
**Comments:** 527  
**Type:** answer  

![](https://www.zhihu.com/equation?tex=%7B%5Crm+e%7D%5E2%3D%5Csum_%7Bn%3D0%7D%5E%7B%5Cinfty%7D%5Cfrac%7B2%5En%7D%7Bn%21%7D%3E%5Csum_%7Bn%3D0%7D%5E%7B4%7D%5Cfrac%7B2%5En%7D%7Bn%21%7D%3D7.%5C%5C)


---

# 如果高考成绩用各科分数乘积而不是总和，会发生什么？ 间宫羽咲sama

**Author:** 间宫羽咲sama  
**Bio:** 月が綺麗で、泣きそうになるのは。いつの日にか、別れが来るから  
**Avatar:** ![](https://picx.zhimg.com/v2-d21c15e6b7d706c9347025e95e5d8a62_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/001b132f3e6eff7bf2f20379eaf1d812  
**Published:** 2024.12.20 22:47:34  
**Updated:** 2025.01.03 17:59:12  
**Question:** https://www.zhihu.com/question/2553651012  
**Question Created:** 2024.10.30 10:58:43  
**Question Updated:** 2024.10.30 10:58:43  
**Votes:** 532  
**Comments:** 27  
**Type:** answer  

其实等价于对每科成绩做了一个对数变换后再求和（留作习题读者自证），显然这种评价方式更利好六边形战士。如果把每个学科都直接归一化到100分满分，那么高分段语文重要性会更显著，低分段则是短板效应会更显著。

当然，如果考虑**通过赋分**实现分数归一化，那么就发生一个有趣的现象：如果我们假设高分段考生在赋分下最高分![](https://www.zhihu.com/equation?tex=M)和最低分![](https://www.zhihu.com/equation?tex=m)差别不太大（即![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bm%7D%7BM%7D)接近于1），那么**对于这些考生而言，总和度量还是乘积度量带来的影响其实并不大**。

我们考虑最极端的两个例子：假设高考共有![](https://www.zhihu.com/equation?tex=2n)个学科，每科的成绩分别为![](https://www.zhihu.com/equation?tex=x_1%2Cx_2%2C%5Ccdots+%2Cx_%7B2n%7D)。学生A是究极六边形战士，每一科成绩都相等，即![](https://www.zhihu.com/equation?tex=x_1%3Dx_2%3D%5Ccdots+%3Dx_%7B2n%7D%3DX)。学生B是究极偏科怪，![](https://www.zhihu.com/equation?tex=x_1%3Dx_3%3D%5Ccdots+%3Dx_%7B2n-1%7D%3Dm)，![](https://www.zhihu.com/equation?tex=x_2%3Dx_4%3D%5Ccdots+%3Dx_%7B2n%7D%3DM)。显然如果采用乘积度量来衡量高考成绩，**学生A就是吃到版本红利最多**的，**学生B就是最大的怨种**。假设学生A和学生B在乘积度量下成绩相等，那么有![](https://www.zhihu.com/equation?tex=X%3D%5Csqrt%7BmM%7D)。此时换回总和度量，学生A的成绩为![](https://www.zhihu.com/equation?tex=2n%5Csqrt%7BmM%7D%3D2nM%5Csqrt%7B%5Cfrac%7Bm%7D%7BM%7D%7D)，学生B的成绩为![](https://www.zhihu.com/equation?tex=n%5Cleft%28m%2BM%5Cright%29%3DnM%5Cleft%281%2B%5Cfrac%7Bm%7D%7BM%7D%5Cright%29)。

我们假设学生A和学生B都是高分段的，赋分归一化后他们的![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bm%7D%7BM%7D)接近于1（![](https://www.zhihu.com/equation?tex=m%3CM)），令![](https://www.zhihu.com/equation?tex=t%3D1-%5Cfrac%7Bm%7D%7BM%7D)（接近于0），此时总和度量意义下的A的分数/B的分数=![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%5Csqrt%7B%5Cfrac%7Bm%7D%7BM%7D%7D%7D%7B1%2B%5Cfrac%7Bm%7D%7BM%7D%7D%3D%5Cfrac%7B2%5Csqrt%7B1-t%7D%7D%7B2-t%7D)。

在![](https://www.zhihu.com/equation?tex=t%5Cto0)时显然有![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%5Csqrt%7B1-t%7D%7D%7B2-t%7D%3D1-%5Cfrac%7Bt%5E2%7D%7B8%7D%2Bo%5Cleft%28+t%5E2+%5Cright%29+)。以![](https://www.zhihu.com/equation?tex=t%3D0.1)为例，A的分数总和/B的分数总和≈![](https://www.zhihu.com/equation?tex=1-%5Cfrac%7B1%7D%7B800%7D)，这意味着如果某个学生最大分差在10%以内，**采用乘积度量后，只会带来（总和度量意义下）千分之一左右的差异**。即使最大分差达到25%，**采用乘积度量后，只会带来（总和度量意义下）百分之一左右的差异**。

所以假设采用赋分制后，实际上对于高分段考生而言，用各科分数乘积度量高考成绩和用各科分数总和度量高考成绩**差别不大**，这个策略主要用于**迫害偏科人士**。

补充部分的分割线，**以上为原回答**，发布于2024年12月20日22点47分（由于被castelu抄袭了[1]，所以标注一下时间先后顺序以供后人考证）。

![](https://picx.zhimg.com/v2-e3b5e2297af9f37ab913bf7862b79d4c_r.jpg?source=2c26e567)

以下为**补充部分的回答**。首先感谢[@天使猫猫酱](https://www.zhihu.com/people/7f51c06144735b7b20ea5668d27eb952)指出的一种特例，即上述推导时默认要求M≤满分，即**满分也是一个边界条件**，在上文推导中忽略了满分边界条件。但如果M与满分十分接近，同时![](https://www.zhihu.com/equation?tex=t%3D1-%5Cfrac%7Bm%7D%7BM%7D)较大，此时满分边界条件不再能忽略，满分边界条件可能使得最大的怨种易主。当然，方便起见，下文不考虑满分边界条件，即**假设学生在t较小的约束条件下不会出现超越满分的现象**，或者不考虑分数的定义域。

回到正题，事实上原回答为了保持结论简明，我**特意埋了一个坑**，即假设「最低分科目数=最高分科目数的同学是最大的怨种」（当然，很遗憾的是，castelu在初次搬运时并没有意识到这个坑，以至于把这个坑也照搬了）。

细心的同学可能就会有疑惑：**这个假设真的合理吗**？事实上，**在  较小、科目数较少时，这一假设是严格成立的，没有任何误差**。但在![](https://www.zhihu.com/equation?tex=t)较大、科目数较多时，这一假设就会带来一定的偏差。由于这部分的探讨比较复杂，会破坏结论的简明性，并且忽略这一点并不影响普遍情况下的严格正确性，故原回答中我将这部分内容通过上假设刻意隐藏了起来。但既然这个回答蹭到了castelu的流量后[2]火了，**我也在此深入探讨一下**——

假设学生A有![](https://www.zhihu.com/equation?tex=a)门科目为![](https://www.zhihu.com/equation?tex=m)分，![](https://www.zhihu.com/equation?tex=b)门科目为![](https://www.zhihu.com/equation?tex=M)分，其中![](https://www.zhihu.com/equation?tex=m%3CM)且![](https://www.zhihu.com/equation?tex=a%2Cb)均为正整数。学生B每一科都是![](https://www.zhihu.com/equation?tex=X)分，其中学生A和学生B在乘积度量下分数相等，即![](https://www.zhihu.com/equation?tex=X%5E%7Ba%2Bb%7D%3Dm%5EaM%5Eb)。那么在总和度量意义下，学生B的成绩/学生A的成绩![](https://www.zhihu.com/equation?tex=%5Clambda+%3D%5Cfrac%7B%5Cleft%28+a%2Bb+%5Cright%29+m%5E%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%7DM%5E%7B%5Cfrac%7Bb%7D%7Ba%2Bb%7D%7D%7D%7Bam%2BbM%7D%3D%5Cfrac%7B%5Cleft%28+%5Cfrac%7Bm%7D%7BM%7D+%5Cright%29+%5E%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%7D%7D%7B%5Cfrac%7Ba%7D%7Ba%2Bb%7D%5Cfrac%7Bm%7D%7BM%7D%2B%5Cfrac%7Bb%7D%7Ba%2Bb%7D%7D)。

令![](https://www.zhihu.com/equation?tex=u%3D1-t%3D%5Cfrac%7Bm%7D%7BM%7D)、![](https://www.zhihu.com/equation?tex=c%3D%5Cfrac%7Ba%7D%7Ba%2Bb%7D)，则![](https://www.zhihu.com/equation?tex=%5Clambda+%3D%5Cfrac%7Bu%5Ec%7D%7Bcu%2B1-c%7D)（原回答对应了![](https://www.zhihu.com/equation?tex=c%3D%5Cfrac%7B1%7D%7B2%7D)的特例）。注意，因为![](https://www.zhihu.com/equation?tex=a%2Cb)只能取正整数，故![](https://www.zhihu.com/equation?tex=c)是离散的。我们暂且将![](https://www.zhihu.com/equation?tex=c)当成连续的进行分析，其中：![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5Clambda%7D%7B%5Cpartial+c%7D%3D%5Cfrac%7Bu%5Ec%5Cleft%28+1-u%2B%5Cln+u-c%5Cleft%28+1-u+%5Cright%29+%5Cln+u+%5Cright%29%7D%7B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E2%7D)、![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5E2%5Clambda%7D%7B%5Cpartial+c%5E2%7D%3D%5Cfrac%7Bu%5Ec%5Cleft%28+2%5Cleft%28+1-u+%5Cright%29+%5E2%2B2%5Cleft%28+cu%2B1-c+%5Cright%29+%5Cleft%28+1-u+%5Cright%29+%5Cln+u%2B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E2%5Cln+%5E2u+%5Cright%29%7D%7B%5Cleft%28+cu%2B1-c+%5Cright%29+%5E3%7D)，显然![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5E2%5Clambda%7D%7B%5Cpartial+c%5E2%7D%3E0)，故![](https://www.zhihu.com/equation?tex=%5Clambda)关于![](https://www.zhihu.com/equation?tex=c)是下凸的。同时求解![](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpartial+%5Clambda%7D%7B%5Cpartial+c%7D%3D0)得到![](https://www.zhihu.com/equation?tex=c_0%3D%5Cfrac%7B1-u%2B%5Cln+u%7D%7B%5Cleft%28+1-u+%5Cright%29+%5Cln+u%7D%3D%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D%5Cin%5Cleft%28%5Cfrac%7B1%7D%7B2%7D%2C1%5Cright%29)。因此，**随着  的增加先减后增，并在  处取得全局最小值**。当然，由于![](https://www.zhihu.com/equation?tex=c_0)的最终取值只能是分数，所以实际上是某个与![](https://www.zhihu.com/equation?tex=c_0)临近的值，而非![](https://www.zhihu.com/equation?tex=c_0)本身。

如果像原回答一样假设![](https://www.zhihu.com/equation?tex=t%5Cto0)（即![](https://www.zhihu.com/equation?tex=u%5Cto1)），那么![](https://www.zhihu.com/equation?tex=c_0%3D%5Clim_%7Bu%5Crightarrow+1%7D+%5Cfrac%7B1-u%2B%5Cln+u%7D%7B%5Cleft%28+1-u+%5Cright%29+%5Cln+u%7D%3D%5Cfrac%7B1%7D%7B2%7D)，这也是**原回答中默认假设「最低分科目数=最高分科目数的同学是最大的怨种」的理由**。一方面，这一假设对于实际情形往往是完全精确的，而对于不精确的场景，我们难以写出简明的解析解，这是因为![](https://www.zhihu.com/equation?tex=c_0)在最终只能取到一个离散值，上述分析假设了![](https://www.zhihu.com/equation?tex=c_0)为实数。并且，我们还有一个更精细的估计，即![](https://www.zhihu.com/equation?tex=c_0%3D%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1-u%7D%7B12%7D%2Bo%5Cleft%28+1-u+%5Cright%29+)，这意味着即使![](https://www.zhihu.com/equation?tex=u)与1有一定的偏差，只要科目数不多，那么这一假设依然严格成立。

那么这个模型具体能容忍多少偏差呢？让我们以实际高考为例，实际高考考6门，这意味着![](https://www.zhihu.com/equation?tex=a%2Bb%3D6)。那么![](https://www.zhihu.com/equation?tex=u)较大时，![](https://www.zhihu.com/equation?tex=a%3Db%3D3)可能不再是最大的怨种，临界情形为「![](https://www.zhihu.com/equation?tex=a%3D4%2Cb%3D2)同为最大怨种」。代入方程可得：![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B%5Cfrac%7B1%7D%7B2%7Du%2B%5Cfrac%7B1%7D%7B2%7D%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B2%7D%7B3%7D%7D%7D%7B%5Cfrac%7B2%7D%7B3%7Du%2B%5Cfrac%7B1%7D%7B3%7D%7D)，解出临界![](https://www.zhihu.com/equation?tex=u%5Capprox+0.350718)。

这意味着，对于科目为6门的高考场景，**原回答的假设在  的范围内不会造成任何误差**，这一取值范围几乎覆盖了所有的结论实际应用场景（试想一下，一个人最高分比最低分几乎高3倍，那这个人也挺夸张的）。而在此之外的范围将附带一个高阶的较小误差项，然而对此我们无法给出一个简明的解析解，因此**原回答中刻意回避了这部分的讨论**，因为在此之外的范围并无显著的实际意义，并且用原模型估计的误差仍然较小。

当然，对于更一般的情形，假设总科目数![](https://www.zhihu.com/equation?tex=n%3Da%2Bb)为偶数，默认最优在![](https://www.zhihu.com/equation?tex=a%3D%5Cfrac%7Bn%7D%7B2%7D%2Cb%3D%5Cfrac%7Bn%7D%7B2%7D)处取得，那么临界方程为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B%5Cfrac%7B1%7D%7B2%7Du%2B%5Cfrac%7B1%7D%7B2%7D%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7Bn%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7Bn%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B1%7D%7Bn%7D+%5Cright%29%7D)，化简得到![](https://www.zhihu.com/equation?tex=%5Cleft%28+1-%5Cfrac%7B2%7D%7Bn%7D%5Cfrac%7B1-u%7D%7B1%2Bu%7D+%5Cright%29+%5En%3Du)。设临界方程的解为![](https://www.zhihu.com/equation?tex=u_0)，绘图如下，**其中  时，原回答的假设不会带来任何误差**。

![](https://pic1.zhimg.com/v2-b3c63cf4b6541ee8d2e9ceb01954d8bd_r.jpg?source=2c26e567)

假设总科目数![](https://www.zhihu.com/equation?tex=n%3Da%2Bb)为奇数，那么默认最优应该在![](https://www.zhihu.com/equation?tex=a%3D%5Cfrac%7Bn%2B1%7D%7B2%7D%2Cb%3D%5Cfrac%7Bn%2B3%7D%7B2%7D)处取得，那么临界方程为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7B2n%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B1%7D%7B2n%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B1%7D%7B2n%7D+%5Cright%29%7D%3D%5Cfrac%7Bu%5E%7B%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B3%7D%7B2n%7D%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D%2B%5Cfrac%7B3%7D%7B2n%7D+%5Cright%29+u%2B%5Cleft%28+%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7B3%7D%7B2n%7D+%5Cright%29%7D)，化简得到![](https://www.zhihu.com/equation?tex=%5Cleft%28+1-%5Cfrac%7B2%7D%7Bn%7D%5Cfrac%7B%5Cleft%28+1-u+%5Cright%29%7D%7B%5Cleft%28+1%2Bu+%5Cright%29+-%5Cfrac%7B1%7D%7Bn%7D%5Cleft%28+1-u+%5Cright%29%7D+%5Cright%29+%5En%3Du)。设临界方程的解为![](https://www.zhihu.com/equation?tex=u_0)，绘图如下，**其中  时，原回答的假设不会带来任何误差**。

![](https://pica.zhimg.com/v2-493c51d2dcc55fdfc1c50393ff0e68ed_r.jpg?source=2c26e567)

事实上，[@天使猫猫酱](https://www.zhihu.com/people/7f51c06144735b7b20ea5668d27eb952)的视频（如下链接）给了一个![](https://www.zhihu.com/equation?tex=n%3D12)的算例，这也是对本模型一个良好补充。该视频的问题可**作为习题**留给读者对补充部分内容进行思考：

[如果高考成绩用各科分数乘积会发生什么？——只属于今天的数学题（1月2日）_哔哩哔哩_bilibili](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1DzrcY8Ew8)

当然，**如果只是想要估计一个  的下界，而非要求下确界**，也可将![](https://www.zhihu.com/equation?tex=c_0)代入，此时![](https://www.zhihu.com/equation?tex=%5Clambda)的下界为![](https://www.zhihu.com/equation?tex=%5Cfrac%7Bu%5E%7B%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29%7D%7D%7B%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29+u%2B1-%5Cleft%28+%5Cfrac%7B1%7D%7B%5Cln+u%7D%2B%5Cfrac%7B1%7D%7B1-u%7D+%5Cright%29%7D)，显然这个形式与原回答中的![](https://www.zhihu.com/equation?tex=%5Cfrac%7B2u%5E%7B%5Cfrac%7B1%7D%7B2%7D%7D%7D%7B1%2Bu%7D)比较起来会丑陋很多。同时，原回答相对一般形式**只相差一个4阶的高阶无穷小**，如下图所示：

![](https://picx.zhimg.com/v2-2ed7a3ba3bff3c2c27e71cd6496a1b2f_r.jpg?source=2c26e567)

具体而言，原回答形式在![](https://www.zhihu.com/equation?tex=u_0%5Cleq%5Cfrac%7Bm%7D%7BM%7D%3C1)范围内是**完全精确**的。即使是脱离了这个范围，相对下确界也最多只会带来一个![](https://www.zhihu.com/equation?tex=%5Cfrac%7B1%7D%7B288%7D%5Cleft%281-u%5Cright%29%5E4)的**四阶项的误差**，因此原回答采用了「最低分科目数=最高分科目数的同学是最大的怨种」假设，这有助于**让问题分析过程和结论都变得简明**，有利于科普。毕竟，我的**补充部分的文字数已经是原回答的3倍**了，这甚至还没有算上配图。


---

# 如何求sin2x·sinx的最大值？ 新之韧

**Author:** 新之韧  
**Bio:** 跟娃学中学数学，爱药学，业余爱猫  
**Avatar:** ![](https://picx.zhimg.com/v2-36ccb410d14392f71ecfc44e47457316_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7458b49a4a3cf7a8b3d2290b3550f371  
**Published:** 2023.07.13 11:49:22  
**Updated:** 2023.07.13 11:49:22  
**Question:** https://www.zhihu.com/question/611804269  
**Question Created:** 2023.07.12 22:22:32  
**Question Updated:** 2023.07.12 22:22:32  
**Votes:** 205  
**Comments:** 23  
**Type:** answer  

好方法都有了，写个不一样的。

设![](https://www.zhihu.com/equation?tex=%5Ccos+x%3Dt)，则

![](https://www.zhihu.com/equation?tex=%5Csin2x%5Ccdot%5Csin+x%3D2%5Csin%5E2x%5Ccos+x)![](https://www.zhihu.com/equation?tex=%3D2%281-t%5E2%29t%3Df%28t%29)

![](https://www.zhihu.com/equation?tex=f%27%28t%29%3D2%281-3t%5E2%29%3D0)![](https://www.zhihu.com/equation?tex=%5CRightarrow)![](https://www.zhihu.com/equation?tex=t%3D%5Cpm%5Cfrac%7B1%7D%7B%5Csqrt%7B3%7D%7D)

![](https://www.zhihu.com/equation?tex=%5Csin2x%5Ccdot%5Csin+x%5Cleq)![](https://www.zhihu.com/equation?tex=f%28%5Cfrac%7B1%7D%7B%5Csqrt%7B3%7D%7D%29%3D%5Cfrac%7B4%7D%7B3%5Csqrt%7B3%7D%7D)


---

# 如何求sin2x·sinx的最大值？ 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://picx.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2023.07.12 22:40:19  
**Updated:** 2023.07.12 22:52:45  
**Question:** https://www.zhihu.com/question/611804269  
**Question Created:** 2023.07.12 22:22:32  
**Question Updated:** 2023.07.12 22:22:32  
**Votes:** 1192  
**Comments:** 43  
**Type:** answer  

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%2A%7D+%5Csin+2x+%5Csin+x%26%5Cle+%7C%5Csin+2x%7C+%7C%5Csin+x%7C%5C%5C%5B8pt%5D+%26%3D2%5Csin%5E2+x%7C%5Ccos+x%7C%5C%5C%5B8pt%5D+%26%3D2%5Csqrt%7B%5Cfrac%7B1%7D%7B2%7D%5Ccdot%5Csin%5E2+x%5Ccdot%5Csin%5E2+x%5Ccdot2%5Ccos%5E2+x%7D%5C%5C%5B8pt%5D+%26%5Cle+2%5Csqrt%7B%5Cfrac%7B1%7D%7B2%7D%5Cleft%28%5Cfrac%7B%5Csin%5E2+x%2B%5Csin%5E2+x%2B2%5Ccos%5E2+x%7D%7B3%7D%5Cright%29%5E3%7D%5C%5C%5B8pt%5D+%26%3D%5Cfrac%7B4%7D%7B3%5Csqrt%7B3%7D%7D.+%5Cend%7Balign%2A%7D%5C%5C)


---

# 最坑爹的题目你见过多少? 中文系谢葳

**Author:** 中文系谢葳  
**Bio:** 一命二运三风水，四关五马六张飞  
**Avatar:** ![](https://picx.zhimg.com/v2-d76be6101ea2101a5766b0c8a533822d_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0b4d63b3c14f19deb0f49932668f415e  
**Published:** 2023.06.15 11:11:35  
**Updated:** 2023.06.15 11:11:35  
**Question:** https://www.zhihu.com/question/490141116  
**Question Created:** 2021.10.01 17:32:32  
**Question Updated:** 2023.03.12 12:36:19  
**Votes:** 5565  
**Comments:** 3601  
**Type:** answer  

![](https://pic1.zhimg.com/v2-addf1194ec12d972958da73da77aca45_r.jpg?source=2c26e567)

你要是能拿小学知识做出来，我当场把这个手机吃掉


---

# 能否构造一组无理数a,b，使得a^b是有理数? 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://pic1.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2020.12.15 20:29:52  
**Updated:** 2020.12.15 20:31:44  
**Question:** https://www.zhihu.com/question/378460266  
**Question Created:** 2020.03.11 08:41:16  
**Question Updated:** 2020.03.11 10:19:08  
**Votes:** 6429  
**Comments:** 421  
**Type:** answer  

考察![](https://www.zhihu.com/equation?tex=%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%2C)如果这是有理数，直接取![](https://www.zhihu.com/equation?tex=a%3Db%3D%5Csqrt%7B2%7D%2C)要的例子就构造出来了；如果这是无理数，由于![](https://www.zhihu.com/equation?tex=%28%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%29%5E%7B%5Csqrt%7B2%7D%7D%3D2%2C)那么取![](https://www.zhihu.com/equation?tex=a%3D%28%5Csqrt%7B2%7D%29%5E%7B%5Csqrt%7B2%7D%7D%2Cb%3D%5Csqrt%7B2%7D%2C)例子也构造出来了。


---

# 199²⁰⁰和200¹⁹⁹哪个更大? 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://picx.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2023.11.17 15:57:12  
**Updated:** 2023.11.17 16:57:52  
**Question:** https://www.zhihu.com/question/380167560  
**Question Created:** 2020.03.17 13:13:59  
**Question Updated:** 2020.03.17 13:13:59  
**Votes:** 2864  
**Comments:** 148  
**Type:** answer  

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%2A%7D+200%5E%7B199%7D%26%3D%5Coverbrace%7B200%5Ctimes%5Ccdots%5Ctimes+200%7D%5E%7B198+~%5Ctext%7Bfactors%7D%7D%5Ctimes100%5Ctimes2%5C%5C%5B10pt%5D%26%3C+%5Cleft%28%5Cfrac%7B%5Coverbrace%7B200%2B%5Ccdots%2B200%7D%5E%7B198+~%5Ctext%7Baddends%7D%7D%2B100%2B2%7D%7B200%7D%5Cright%29%5E%7B200%7D%5C%5C%5B10pt%5D%26%3C199%5E%7B200%7D.%5C%5C+%5Cend%7Balign%2A%7D%5C%5C)


---

# a,b,c,d≥-1，a+b+c+d＝0,求ab+bc+cd的最大值? 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://picx.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2025.02.04 01:12:42  
**Updated:** 2025.02.04 01:12:42  
**Question:** https://www.zhihu.com/question/11125496234  
**Question Created:** 2025.02.02 20:33:56  
**Question Updated:** 2025.02.02 20:33:56  
**Votes:** 44  
**Comments:** 3  
**Type:** answer  

分两种情况：

若![](https://www.zhihu.com/equation?tex=a%2Bb%5Cle+0%2C)则![](https://www.zhihu.com/equation?tex=+%7Ca%7C%2C%7Cb%7C%5Cle1%2C)于是有![](https://www.zhihu.com/equation?tex=ab%2Bc%28b%2Bd%29+%5Cle+%5Cfrac%7Ba%5E2%2Bb%5E2%7D%7B2%7D%2B+%5Cfrac%7B%28c%2Bb%2Bd%29%5E2%7D%7B4%7D%3D%5Cfrac%7Ba%5E2%2Bb%5E2%7D%7B2%7D%2B+%5Cfrac%7Ba%5E2%7D%7B4%7D%5Cle+%5Cfrac%7B1%5E2%2B1%5E2%7D%7B2%7D%2B%5Cfrac%7B1%5E2%7D%7B4%7D%3D%5Cfrac%7B5%7D%7B4%7D.%5C%5C)若![](https://www.zhihu.com/equation?tex=a%2Bb%3E0%2C)则![](https://www.zhihu.com/equation?tex=c%2Bd%3C0%2C)进而![](https://www.zhihu.com/equation?tex=%7Cc%7C%2C%7Cd%7C%5Cle1%2C)于是也有![](https://www.zhihu.com/equation?tex=b%28a%2Bc%29%2Bcd%5Cle+%5Cfrac%7B%28b%2Ba%2Bc%29%5E2%7D%7B4%7D%2B%5Cfrac%7Bc%5E2%2Bd%5E2%7D%7B2%7D%3D%5Cfrac%7Bd%5E2%7D%7B4%7D%2B%5Cfrac%7Bc%5E2%2Bd%5E2%7D%7B2%7D%5Cle+%5Cfrac%7B1%5E2%7D%7B4%7D%2B%5Cfrac%7B1%5E2%2B1%5E2%7D%7B2%7D%3D%5Cfrac%7B5%7D%7B4%7D.%5C%5C)


---

# 数之谜上难倒一众竞赛大神的高一期末考试题 柯西永远爱你

**Author:** 柯西永远爱你  
**Bio:** CMC数类16届决赛全国第一/三届省第一/数海钓鱼/报班教你  
**Avatar:** ![](https://picx.zhimg.com/v2-b049c9c03f5bb90aaddae7536ec48ce0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/63096a4161cc90d786a974df99035769  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 1289  
**Comments:** 81  
**Type:** article  

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


---

# 一段绳子，任意切n刀，切成n+1段绳子。问这些绳子能组成n+1边形的概率？ Vichare Wang

**Author:** Vichare Wang  
**Bio:** 使人索扁鵲 已逃秦矣  
**Avatar:** ![](https://pica.zhimg.com/36ddd4851_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cfe4ed075c8d9851030f4f56c7170f22  
**Published:** 2014.09.21 14:58:37  
**Updated:** 2014.09.21 14:59:20  
**Question:** https://www.zhihu.com/question/25408010  
**Question Created:** 2014.09.18 13:26:33  
**Question Updated:** 2014.09.18 20:09:00  
**Votes:** 19  
**Comments:** 2  
**Type:** answer  

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


---

# 数学装逼神器——高端三角恒等变换 Aries

**Author:** Aries  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/v2-0f2826c3cdb0e1b3edb4867e445d54b9_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/bf8820153cc14754f050565ae817c66c  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 5541  
**Comments:** 290  
**Type:** article  

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




**———（乘积）———**

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


---

# “通项杯”试题解析 柯西永远爱你

**Author:** 柯西永远爱你  
**Bio:** CMC数类16届决赛全国第一/三届省第一/数海钓鱼/报班教你  
**Avatar:** ![](https://picx.zhimg.com/v2-b049c9c03f5bb90aaddae7536ec48ce0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/63096a4161cc90d786a974df99035769  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 716  
**Comments:** 28  
**Type:** article  

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


---

# 如何证明3整除4ⁿ-1（高中知识）? tk09102018

**Author:** tk09102018  
**Bio:** An amateur of physics.  
**Avatar:** ![](https://picx.zhimg.com/v2-7f103074ce0d17ddb7234c2a3892b7ce_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/b3c94563baf30411a63c444ad4e7a905  
**Published:** 2024.12.14 22:02:31  
**Updated:** 2024.12.15 00:14:55  
**Question:** https://www.zhihu.com/question/6865030585  
**Question Created:** 2024.12.14 21:13:11  
**Question Updated:** 2024.12.22 13:37:04  
**Votes:** 63  
**Comments:** 13  
**Type:** answer  

考虑首项为![](https://www.zhihu.com/equation?tex=1)公比为![](https://www.zhihu.com/equation?tex=4)的等比数列的前![](https://www.zhihu.com/equation?tex=n)项和

![](https://www.zhihu.com/equation?tex=%5Cbegin%7Bequation%7D%7BS%7D_%7B%7Bn%7D%7D%3D1%2B4%2B4%5E%7B2%7D%2B4%5E%7B3%7D%2B...%2B4%5E%7B%7Bn%7D-1%7D%3D%7B%5Cfrac%7B4%5E%7B%7Bn%7D%7D-1%7D%7B4-1%7D%7D%3D%7B%5Cfrac%7B4%5E%7B%7Bn%7D%7D-1%7D%7B3%7D%7D+%5C%5C+%5Ctherefore~4%5E%7B%7Bn%7D%7D-1%3D3%7BS%7D_%7B%7Bn%7D%7D%5Cend%7Bequation%7D)

![](https://www.zhihu.com/equation?tex=S_n)为整数, 所以![](https://www.zhihu.com/equation?tex=4%5En-1)能被![](https://www.zhihu.com/equation?tex=3)整除.

一般的, 对于不等于![](https://www.zhihu.com/equation?tex=1)整数![](https://www.zhihu.com/equation?tex=a),![](https://www.zhihu.com/equation?tex=a-1)整除![](https://www.zhihu.com/equation?tex=a%5En-1)![](https://www.zhihu.com/equation?tex=%28n%5Cin+Z%5E%7B%2B%7D%29), 可以用多项式除法除一下没有余式, 或者用等比数列求和公式证明.


---

# 如何证明3整除4ⁿ-1（高中知识）? 模数烁光

**Author:** 模数烁光  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-cb97ca8983786060f3314de35ea02742_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/68eff26420707c82497c95e872c45903  
**Published:** 2025.01.04 11:52:15  
**Updated:** 2025.01.04 11:52:15  
**Question:** https://www.zhihu.com/question/6865030585  
**Question Created:** 2024.12.14 21:13:11  
**Question Updated:** 2024.12.22 13:37:04  
**Votes:** 18  
**Comments:** 1  
**Type:** answer  

我也是高中生，这里提供两种解法

第一种我们可以注意到，因为:

![](https://picx.zhimg.com/v2-ba586650be7ade91df60ec638abf8551_r.jpg?source=2c26e567)

上面这个式子的证明是很显然的，这里不多赘述，所以

![](https://picx.zhimg.com/50/v2-f845d756b7f81649819f72c8ced5946e_720w.jpg?source=2c26e567)

即证。

第二种方法，就是用一些初等数论的知识

![](https://picx.zhimg.com/v2-f7306b421aedd8896e84bf85597245cf_r.jpg?source=2c26e567)

这个方法写起来会更简明一点，也可以快速的证明结论。


---

# 如何证明3整除4ⁿ-1（高中知识）? 春弦令

**Author:** 春弦令  
**Bio:** 星海横流，岁月成碑。  
**Avatar:** ![](https://picx.zhimg.com/v2-12fb5e31e1ecf823b876fbb100743b82_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/0220612e83df5ef88bbb8d4dac0d54a1  
**Published:** 2024.12.15 16:06:01  
**Updated:** 2024.12.15 16:06:01  
**Question:** https://www.zhihu.com/question/6865030585  
**Question Created:** 2024.12.14 21:13:11  
**Question Updated:** 2024.12.22 13:37:04  
**Votes:** 55  
**Comments:** 0  
**Type:** answer  

**证明**考虑用数学归纳法证明:

(1)设![](https://www.zhihu.com/equation?tex=n%3D1), 注意到![](https://www.zhihu.com/equation?tex=4-1%3D3%5Cleft.+%5Cright%7C3);

(2)设![](https://www.zhihu.com/equation?tex=n%3Dk), 若![](https://www.zhihu.com/equation?tex=%5Cleft%284%5Ek-1%5Cright%29%5Cleft.%5Cright%7C3), 则须证明![](https://www.zhihu.com/equation?tex=%5Cleft%284%5E%7Bk%2B1%7D-1%5Cright%29%5Cleft.%5Cright%7C3):![](https://www.zhihu.com/equation?tex=%5Cbegin%7Balign%7D4%5E%7Bk%2B1%7D-1%26%3D4%5Ek%5Ccdot+4-1%5C%5C%26%3D4%5Ek%5Ccdot3%2B4%5Ek-1.%5Cend%7Balign%7D%5C%5C)第一项有因数![](https://www.zhihu.com/equation?tex=3), 因此一定能被![](https://www.zhihu.com/equation?tex=3)整除; 第二项和第三项之差被我们假设可以被![](https://www.zhihu.com/equation?tex=3)整除, 因此原命题成立.

![](https://www.zhihu.com/equation?tex=%5Cmathrm%7B%5Ccolor%7Bred%7D%7BQ%7Duod%5C%2C+%5Ccolor%7Bred%7D%7BE%7Drat%5C%2C+%5Ccolor%7Bred%7D%7BD%7Demonstrandum%7D)


---

# 如何证明3整除4ⁿ-1（高中知识）? 予一人

**Author:** 予一人  
**Bio:** 杂学旁收的废物  
**Avatar:** ![](https://picx.zhimg.com/v2-be154a9f220dea5b8579039be1c3bb2a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/aba4a1516eec0d307e42f64ba7330093  
**Published:** 2024.12.23 19:10:28  
**Updated:** 2024.12.23 19:10:28  
**Question:** https://www.zhihu.com/question/6865030585  
**Question Created:** 2024.12.14 21:13:11  
**Question Updated:** 2024.12.22 13:37:04  
**Votes:** 206  
**Comments:** 15  
**Type:** answer  

在恒等式![](https://www.zhihu.com/equation?tex=x%5En-1%3D%28x-1%29%28x%5E%7Bn-1%7D%2Bx%5E%7Bn-2%7D%2B%5Ccdots%2B1%29%5C%5C)中赋值![](https://www.zhihu.com/equation?tex=x%3D4)看看。


---

# 这些数列通项题怎么做？ 柯西永远爱你

**Author:** 柯西永远爱你  
**Bio:** CMC数类16届决赛全国第一/三届省第一/数海钓鱼/报班教你  
**Avatar:** ![](https://pic1.zhimg.com/v2-b049c9c03f5bb90aaddae7536ec48ce0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/63096a4161cc90d786a974df99035769  
**Published:** 2021.10.03 12:18:37  
**Updated:** 2021.10.06 19:13:25  
**Question:** https://www.zhihu.com/question/490089610  
**Question Created:** 2021.10.01 10:24:55  
**Question Updated:** 2022.03.26 19:51:38  
**Votes:** 660  
**Comments:** 42  
**Type:** answer  

作为**第一届通项杯**试题解析的制作者，我来更新一下第二届的解析：

目前还没有做完，一方面是国庆事情不少，更重要的原因是这次的试题**难度比上次提升了好多**，大部分题都需要先思考一会儿才能有想法。所以今天先在这里发布一下**前五道题的解答**，其他的预计**国庆七天内应该可以更新完全**，至于完整解答，未来可能还会发布于知乎个人文章以及微信公众号：**数海钓鱼**，欢迎大家关注。

话不多说，下面就是解答（因全部题目为我一人**独立完成**，所以难免存在错误，如有问题还望指出）

![](https://pic1.zhimg.com/v2-e5599db16f96ab18f19b37ae422bbd8d_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-14720b547720eaeec6be04fa26ca8bed_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-aea06e34cc9fb52c0cbafed397ebbc87_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-fe73ca9f0ebbc7b15f9a860b2cb44921_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-a4c297a00d074dbf6d8e56784b841d2c_r.jpg?source=2c26e567)

**2021.10.3晚上更新如下：7、8、9、10的解答**

![](https://picx.zhimg.com/v2-81e0769f3a90a417b5b5464750eed2ef_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-2b2b3dc9778062e24a79ce4e82cd3ce1_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-a1202d7fcf4f23fa35949512099a0a3e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c23e8abda1ce7cb3faabe5d3528060ec_r.jpg?source=2c26e567)

**2021.10.5更新：第11题...好难**

![](https://picx.zhimg.com/v2-40056300530e5d18393a2f2031a989fc_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-25f7413abd6efb2c54305e32149acbd4_r.jpg?source=2c26e567)

**2021.10.6更新：第十二题和第六题...似乎简单一些**

![](https://pica.zhimg.com/v2-f55c15acdc7f2459dc49a5bdd682cf37_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-03a36d149a13b315d5057a1b464527ee_r.jpg?source=2c26e567)
