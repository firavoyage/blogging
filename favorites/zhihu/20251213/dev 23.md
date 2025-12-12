# 如何评价谷歌发布新一代图像生成模型 Nano Banana Pro，有哪些亮点？ Thoughts Memo

**Author:** Thoughts Memo  
**Bio:** 学校≠教育≠技能；文凭溢价=80%信号传递+20%人力资本   
**Avatar:** ![](https://pic1.zhimg.com/v2-4355c018ed124b748dcefede70f34d8a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4c592f496dc33822b560b382907ff1d0  
**Published:** 2025.12.13 00:59:55  
**Updated:** 2025.12.13 01:01:12  
**Question:** https://www.zhihu.com/question/1974981372130116043  
**Question Created:** 2025.11.20 23:24:12  
**Question Updated:** 2025.11.20 23:24:12  
**Votes:** 20  
**Comments:** 0  
**Type:** answer  

中文嵌字终于能用了，我们汉化组终于可以翻手绘板书和手绘漫画了。

原图：

![](https://picx.zhimg.com/v2-0c4e4575e0db30d1967f46190e067ed4_r.jpg?source=2c26e567)

之前我完全搞不定这种嵌字，只能用 PPT 重新做一张图，贼费劲，效果也一般：

![](https://picx.zhimg.com/v2-ee82bb65047dd45da6ddbe252c4b096d_r.jpg?source=2c26e567)

现在直接把翻译和原图提供给 Nano Banana Pro，一句话出图：

![](https://picx.zhimg.com/v2-281bc89a555c597674c3b070eea2a66a_r.jpg?source=2c26e567)

原图：

![](https://pic1.zhimg.com/v2-c06c641b831dc7e7c0c748f59fdfb0f8_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://picx.zhimg.com/v2-736313455bbf9c62ea4b38536a31ebed_r.jpg?source=2c26e567)

原图：

![](https://picx.zhimg.com/v2-18b704d388480aa3a4f14c61d1041b87_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://pica.zhimg.com/v2-9dd59eb78fbac7191624b4b202d2f5c6_r.jpg?source=2c26e567)

原图：

![](https://picx.zhimg.com/v2-e3a15762afe3b65a41de2234f201cf6d_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://picx.zhimg.com/v2-a690211bb18592353b08f258812a4a67_r.jpg?source=2c26e567)

不过贵是真的贵：

![](https://pic1.zhimg.com/v2-195b0c4e15e574f06d0fccb67f5ecba5_r.jpg?source=2c26e567)

这波属于自费给大家提供更好的阅读体验了，点点赞吧各位：

[数学不好是一种怎样的体验](https://zhuanlan.zhihu.com/p/1981300999030346026)

[将心智模型付诸实践（三）：更好的试错法](https://zhuanlan.zhihu.com/p/1973360091374851286)

[将心智模型付诸实践（四）：专家决策](https://zhuanlan.zhihu.com/p/1981679557133243066)


---

# 你见过的最棒的个人博客界面是什么样的？ 柳上川

**Author:** 柳上川  
**Bio:** 宁可清贫自乐，不作浊富多忧  
**Avatar:** ![](https://pic1.zhimg.com/v2-8caa1e2cd271f6f0dcad71aa58f9cc8a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a928d1945cc10699e2a7f6887c1a0b44  
**Published:** 2025.07.01 23:36:42  
**Updated:** 2025.11.30 23:23:40  
**Question:** https://www.zhihu.com/question/29755481  
**Question Created:** 2015.04.21 20:12:40  
**Question Updated:** 2015.04.21 20:12:40  
**Votes:** 519  
**Comments:** 66  
**Type:** answer  

我勉强满意于目前自己全用[Typst](https://link.zhihu.com/?target=https%3A//typst.app/)手撸出来的博客，有空的话我想整理一些关于 typst && HTML 的注意事项, 记得踢我防止我鸽了 (

开头先唠嗑几句，展示的图片在后面哟

个人喜欢简洁大气, 功能齐全的(这里指写作方面，所以用了typst), 很多ui界面与/功能我其实都想要但懒得实现，毕竟感觉也没多少人来看, 我也没多少时间来写, 超多的坑留着没填就没填吧，当作个人知识库罢了 (x)

基于 Typst 带来了无数优点(当然也有坑点, 毕竟 HTML 导出是 0.13 这个当前最新的版本才支持的, 比如不支持batch compilation, 数量多起来每篇加载字体的时间积少成多, 亦或者svg的padding不大对) 所以写起来改起来都很方便, 我可以随心所欲地在局部范围内修改ui, 添加一些helper函数自定义某些强大的功能

因为是 typst, 顺带就支持了各种数学公式, 表格, 图表等(区区 markdown/latex ! !), 虽然说有点坑，比如需要自己手写点 show/set，比如需要手动调整生成的svg的padding，比如当figure里面套个math导出到html你还得注意判断下context, 决定是否要用html.elem/figure，但即使如此, 用在个人博客上仍然是相当灵活与舒服的：其编译速度，错误提示，语法友善度，各个方面都可以称得上是 modern and better, 自定义的能力非常强大, 作为标记语言其实薄纱了各种方言的markdown, 虽然不太能这样比较 (大雾)

再比如有些类似hexo/hugo/zola每篇文章的<front-matter>（即开头的title, data, draft啊啥的)，你可以用诸如下面的typst代码定义，然后用query函数/CLI获取进行处理 (而且下面的这个仅仅只是个例子, 完全可以每个条目配个metadata, 也完全可以被封装为用户层面上来看更加简洁的形式, 是非常灵活的):

// metadata[#metadata((title:"example-02",date:"2025-08-08",update:none,outline:true,series:"example-series",next:#link("/blog/example-03")[example-03],prev:#link("/blog/example-01")[example-01],summary:[哦,这里是神圣的实例页面!#strike[嗯!神圣的哦!]],draft:false,))<front-matter>]

然后比如说你正在做一个基于typst的ssg(静态博客生成器), 你可以手写parser啊IR啊啥的, 亦或者调用typst的CLI然后手动反序列化, 用query命令查你想要的:

typst query --root ./ --font-path ./ --features html --format json example-02.typ "<front-matter>" --field "value"

呃, 比如简单地这样写个?:

#[rustfmt::skip]#[derive(Debug, Serialize, Deserialize, PartialEq, Eq)]#[serde(tag ="func", rename_all ="lowercase")]enumTypstElement{Space,Linebreak,Text{text:String},Strike{text:String},Link{dest:String,body:Box<TypstElement>},Sequence{children:Vec<TypstElement>},#[serde(other)]OtherIgnored,}

你还可以这样生成一个html tag, 然后让ssg解析进行读取：

#let meta(attrs) = html.elem("metadata-for-ssg", attrs: attrs)

#meta((
  title: "post-1",
  date: "2025-02-02",
  outline: true,
  ...
  ...
))

至于css很麻烦? 我直接用tailwind一把梭的, 反正能搞出来不就好了吗? (x)

好啦, 下面是展示, 别奢求太多feature, 自己随便记点东西罢了呜呜呜
可以点击下面链接体验一下(不挂梯子可能进不去)：

[柳上川的博客](https://link.zhihu.com/?target=https%3A//kawayww.com/)

![](https://pic1.zhimg.com/v2-79ed388e0972c5899f23d1b0171bbf0f_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-941a800b3667ad076aef722396ebf383_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-acc5f26c52fd0c2fa10b6dc32ab336c5_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-02cfb4d2125d7db9ec47ac23dcf704b8_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-1295c1926936a7539724686dc03348bd_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-ba273a0321950a7a15f38e1a6ed49055_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-74c0aec23c84afa4a13c50a8c3dd9f1c_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-4df38d4bda41a07bb8d77d8d824b6345_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-9ac9eb7a8448e8330e7ddcb12b3c305d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-98fa7941c82e898e73eb7a47b819cc47_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-36cfc4d9aab03d5d8be35a4e79f9b163_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b9ca4f63d964db61e98b7b75ef29f79f_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-ca68a17e91596e056b25e13685c1f702_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-22571b496eedd3ae4390cae5fae610b0_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-bf764f7c7b8ace632b8c0ce0f914b85d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-8df057950262ba6a0ced8116044c396e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c7c54ce1162e4001e33364c46d4324c4_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-dd1cb9893ccd54b5b503a1a41e66bff5_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-d23b984809c8fe4a78cda1b4961f90d5_r.jpg?source=2c26e567)

上面的图片展示了首页, 表格, 图表. 数学公式, 图片, 视频, 代码高亮, 底部跳转到同系列 next/prev 的 footer, 移动端/手机小屏幕的部分适配等, 已经比较全面地展示了我博客里面有的东东了, 再多就没有了 (x

哦对, 弱弱地问一句, 有人想交换友链吗 QAQ

顺带一提, 如果是内容非常密集, 质量与数量都可以支撑起来的话, 那么我觉得最好的博客是 O 型腿大叔的博客:

[okmij.org](https://link.zhihu.com/?target=https%3A//okmij.org/ftp/)

![](https://picx.zhimg.com/v2-90dbb107cbb8b13bfc6d799b402929a0_r.jpg?source=2c26e567)


---

# 如何处理图片才能避免图中文字被OCR识别？ DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://pica.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2025.09.02 16:59:17  
**Updated:** 2025.09.02 16:59:17  
**Question:** https://www.zhihu.com/question/302170944  
**Question Created:** 2018.11.12 17:30:51  
**Question Updated:** 2025.09.08 02:10:26  
**Votes:** 346  
**Comments:** 43  
**Type:** answer  

好问题。

先说说高赞里的这张图像，很有意思，那么为什么有些模型能识别有些识别不了，原理是什么呢？

![](https://pica.zhimg.com/v2-46b59696b103dcd4d405885fbb9e6249_r.jpg?source=2c26e567)

目前的文字图片识别，主要是CNN-only、CNN+RNN、CNN+Transformer，总之大多包含CNN网络结构。

CNN网络结构包含一个池化层，池化层是卷积神经网络（CNN）中的一种**特殊层**，它的主要功能是**对输入特征图进行下采样（降维）**。

简单比喻就是缩小图像，但是下采样的方式其实有很多种，比如最大值或平均值或者随便挑一个，如果是最大值或随便挑的下采样，可以看到随着图片缩小，文字的特征很快就消失不见了。

![](https://picx.zhimg.com/v2-25ce418a2fe19360f9d9b6b38c1b0e72_r.jpg?source=2c26e567)

但如果我们使用的是均值滤波，那么特征仍然能够很好的保留，甚至可以说识别的效率提升了

![](https://pica.zhimg.com/v2-530a1e11f47778edc934891a6b216e64_r.jpg?source=2c26e567)

所以我估计不同模型有的能识别出来有的不能，与模型池化的方式非常相关。

那么回到问题。怎么处理图片才能避免图片文字被OCR识别？其实静态图片没什么太多好办法，就是加干扰，比如加一些不同颜色的或者噪点。但这些方法通过模糊，腐蚀、碰撞、缩放几件套下来，都能很大程度清除干扰，让文字被准确识别处理。

但是我们视觉上观察并不仅限于静态图啊，我们完全可以利用人眼的视觉残留效果，把图像做成动态图（因为录屏软件也就这样了，但实际视觉效果其实很清楚）

![](https://picx.zhimg.com/50/v2-df3c361d261b3544b10b62844de82fb0_720w.gif?source=2c26e567)

我们对图片切片，每一帧都是碎片化的

![](https://pic1.zhimg.com/50/v2-70adb24c5139b40463428ad3825dd9c0_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-416fe55cc44e718ac0f7c245d591f569_720w.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-10d021d10ab95a56396db42934df4650_720w.jpg?source=2c26e567)

然后我们对各种模型测试一下

![](https://picx.zhimg.com/v2-a607e59bb19c260ff464f67d7668b26a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-0d0b1ee0f5445817bfd7e13fccaf8228_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-0ce7ed7a375dc3f2b654a0b9476fa561_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-cddc64f01269573e369f7620f2c88b13_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-ef46fca258723a9f641150323eb6156b_r.jpg?source=2c26e567)

**好的，全军覆没**

上代码（基于PainterEngine）：

#include"PainterEngine.h"px_texturetest;px_intdiv_width=20;px_intdiv_i;PX_OBJECT_RENDER_FUNCTION(MyRender){px_inti;div_i++;div_i=div_i%(320/div_width);PX_TextureRender(psurface,&test,0,0,PX_ALIGN_LEFTTOP,0);for(i=0;i<(320/div_width);i++){if((i+div_i)%8!=0){PX_GeoDrawRect(psurface,i*div_width,0,i*div_width+div_width,160,PX_COLOR_WHITE);}}}px_intmain(){PainterEngine_Initialize(320,160);PainterEngine_SetBackgroundColor(PX_COLOR_WHITE);PainterEngine_LoadFontModule("assets/font.ttf",PX_FONTMODULE_CODEPAGE_GBK,68);PX_TextureCreate(mp_static,&test,320,160);PX_FontModuleDrawText(&test,App.pfontmodule,160,80,PX_ALIGN_CENTER,"我是文字",PX_COLOR_BLACK);PX_ObjectSetRenderFunction0(root,MyRender);return1;}


---

# 程序员最浪漫的代码是什么? DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://pica.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2022.10.23 10:19:05  
**Updated:** 2022.10.23 14:16:46  
**Question:** https://www.zhihu.com/question/24711491  
**Question Created:** 2014.08.02 23:48:02  
**Question Updated:** 2022.09.26 15:04:49  
**Votes:** 1416  
**Comments:** 75  
**Type:** answer  

代码就是浪漫,更浪漫的是能击败其它程序员的代码.

**三天前笔者发起了一个叫做磁芯大战的编程游戏,简单来说就是编程控制自己的机器人 ,击败对方**

1.  16*16 的棋盘上,每回合中，你可以发出指令让机器人上下左右移动一步，或者放弃移动,朝之前的前进方向发射一枚子弹;
2. 如果你的子弹击中了对方，你获胜，反之如果对方被子弹击中，对方获胜；
3. 你每走一步，都会标记地图为你的颜色色块，对方没有办法走你已经走过的路径，当然反之亦然。
4. 如果在256回合后，仍然没有决出胜负，色块面积大一方赢。
5. 如果两个机器人相撞，或者色块面积一样大，那么为平局。

[DBinary：用代码一决胜负----磁芯大战](https://zhuanlan.zhihu.com/p/575687028)

最开始,AI都还比较简单,笔者放出了3个不太聪明的ai,它们只会按照固定的路径移动,来欺负一下什么都不做的AI

比如这样的(单刀赴会 进攻流)

![](https://pic1.zhimg.com/v2-1047444236a737fa7207c2763720b8d6_r.jpg?source=2c26e567)

这样的(占山为王 走步流)

![](https://picx.zhimg.com/v2-4aa43d86d99a8f9220e4497a02c2334f_r.jpg?source=2c26e567)

这样的(一切随机 随缘流)

![](https://picx.zhimg.com/v2-c54d2a23dc545d919e3a3deba1c2acda_r.jpg?source=2c26e567)

鉴于一代机器人实在不怎么聪明,第一代榜1由作者由@huhu可爱捏 开发的要你命8888系列,解决方案简直简单粗暴,移动到地图中央以后,四个方向开火

![](https://picx.zhimg.com/v2-40147819aa5f5b9956008c0f38c73399_r.jpg?source=2c26e567)

靠着这个暴力打法,解决了不少人

![](https://pic1.zhimg.com/v2-f10e4f21be8cdf75c01a58f41d13b85c_r.jpg?source=2c26e567)

如果说要你命8888还不那么够智能,那下面这个稍微有点智能的,就开始会追着人打了,由@sky 开发的QAQ程序,开始对对手定向蹲点发射子弹

![](https://pica.zhimg.com/v2-31246f6643f327306ac336656c2fca8c_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-db66fff2e157ea9f3064616b22438620_r.jpg?source=2c26e567)

而由[@apatite](https://www.zhihu.com/people/cad967d3e63be935cad946c114247f6e)开发的不太聪明的御坂10086号,选择的是先占格子再适时开火

![](https://picx.zhimg.com/v2-c2bdaec0a3ee7b3377f8f4b42cc0ceae_r.jpg?source=2c26e567)

但目前他两胜率一样,由@Asher 开发的灵狐为我引路,既走格又开火,攻守兼备,很快占据了新的榜1

![](https://picx.zhimg.com/v2-cf5eab66495a1c72689ce2e9dcd7589f_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-65a81de43bedec242d78e2a930c9428a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-79e6cfdcf7d2716eca392cabed96b6bf_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-4ed21a81c72f7ae701798e5a01122ab5_r.jpg?source=2c26e567)

但是,他的榜1并没有坚持太久,很快,有@NianJiu 开发的Nothing Really Matter,很快屠戮了一大群人

![](https://pica.zhimg.com/v2-04e39783432ff36da759ad6fbf975ee9_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-aa0885bf65aa75bf53598c5e5e674cf6_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-63d09bfd55cb33dc489f903667177e32_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-3ee9ffff8cff9151dd3cf3c38bca4706_r.jpg?source=2c26e567)

昨天下午,比赛进入了白热化阶段,现在的榜3(之前的榜1)长时间维持着100%胜率,由@鲤鱼 开发的到底是为什么呢,看她比赛简直是一个视觉盛宴

![](https://picx.zhimg.com/v2-cd5446b0bcd5d26a833a3e0dfabb1271_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-1c096ee7eec619e918293931f5ba99d0_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d46e33245f83fcb1a87cfa09faad0a43_r.jpg?source=2c26e567)

最后也就是现在的榜1,由[@tyvoid](https://www.zhihu.com/people/dfeedacae3ddf4ca20dd7960253ccee7)开发的retreat,他,卷死了所有人

![](https://picx.zhimg.com/v2-a659a4162edc18c1218b58dc5fb85393_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6b81e53c1de05d895ac5986390d31bf8_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c9dd81cfe54f94f6f612660c7670791a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-e7f60dc5a8b86734ca340aff2d038f4c_r.jpg?source=2c26e567)

还有很多比赛我就不一一放了,如果你有自己的想法,欢迎参与到比赛中来


---

# 国内有哪些适合在读大学生参加的独立游戏制作比赛？ 关生丶

**Author:** 关生丶  
**Bio:** 电子游戏  
**Avatar:** ![](https://pic1.zhimg.com/v2-a8b7af6f7698fa8e6cea8a12bb65f60f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/bcde706efc73d529aa193c3cf3994462  
**Published:** 2024.03.28 15:13:25  
**Updated:** 2024.03.28 15:13:25  
**Question:** https://www.zhihu.com/question/66682363  
**Question Created:** 2017.10.15 15:41:49  
**Question Updated:** 2017.10.15 15:41:49  
**Votes:** 34  
**Comments:** 0  
**Type:** answer  

参加比赛最大的问题在哪？

第一，不自信，不敢参加

第二，没有合作的小伙伴，担心拉胯

第三，不知道有哪些渠道适合

这里给大家推荐一些研发性质的游戏比赛，大胆地去尝试，你不迈出第一步，永远也不会有结果。




## 1、CUSGA，全称是中国大学生游戏开发创作大赛

由UGDAP主办、鹰角开拓芯支持的活动。可以是目前国内最大规模的学生游戏开发活动了，该活动从年初开始，会在全国各大城市举办**沙龙巡演**，征集作品完成后会在8月举办线下的**答辩和展会**，可以接触到全国的优秀大学生团队作品。

## 活动时间：

2月-5月8日，作品提交截止

5月底，初赛入围公布

6月，决赛入围名单公布

8月，决赛暨颁奖典礼

## 链接：

[2024CUSGA第四届中国大学生游戏开发创作大赛开启报名！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/QWqfayNpR5XOwkl4Ela2Zw)

**推荐指数**：★★★★★

![](https://picx.zhimg.com/v2-eb18a2092856235ed794183fddfb13c3_r.jpg?source=2c26e567)




## 2、Ludum Dare

这是一个全球gamejam线上活动，利用周末的时间，在72小时完成一个包含核心玩法在内的可运行的游戏demo

该活动一年两次，分别在4月和10月，这不是一个功利性的活动，你可以和全球的开发者共同交流和试玩。

## 活动时间：4月12日

## 链接：

[ldjam.com | Ludum Dare game jam](https://link.zhihu.com/?target=https%3A//ldjam.com/)

**推荐指数**：★★★★

![](https://pica.zhimg.com/50/v2-d8f2d8bd6a01d179ef3b6a4a023052f3_720w.jpg?source=2c26e567)

## 3、BOOOMJAM 游戏创作挑战

BOOOM 每年会固定举办2次，限时开发三周、限定开发主题的游戏创作活动。在开发阶段结束后，面向所有玩家举办线上试玩游戏节，以及在机核的大型线下电子游戏嘉年华上对这些游戏进行展示。

## 活动时间：

3月28日-4月11日 线上报名与组队

4月12日-5月7日  自由创作

5月14日-5月28日 线上评选阶段

5月18日-5月19日  核聚变2024广州站

## 链接：

[2024第一场「BOOOMx开拓芯」游戏创作挑战开启！ | 机核](https://link.zhihu.com/?target=https%3A//site.gcores.com/booom2024/)

**推荐指数**：★★★

![](https://pica.zhimg.com/v2-b9992945267f4bcd12fd4e71d44461e5_r.jpg?source=2c26e567)

## 4、第6届吉比特未来游戏制作人大赛

吉比特，雷霆游戏母公司，有钱，肯花钱，重视年轻创作者，同鹰角开拓芯一样，稳定地支持大学生游戏开发，不管活动办得怎么样，肯花这个钱就值得好评+1。

## 活动时间：

3月4日，报名开启

5月15日，初赛作品提交

6月27日，公布入围奖及决赛晋级名单

7月19日-23日，线下GameJam

## 链接：

[12个奖项，冠军奖8万元，第6届吉比特未来游戏制作人大赛启动！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/jdOPtst44V-twbuDzfkAbQ)

**推荐指数：**★★★

![](https://pic1.zhimg.com/v2-783919401f7698f25fee137948880f1b_r.jpg?source=2c26e567)

## 5、完美世界高校MiniGame开发大赛

完美世界老牌大厂了，知道的都知道，不知道的也没关系。

## 活动时间：

3月22日-4月2日，报名

4月3日-5月5日，游戏开发提交

5月17日，线下试玩及颁奖典礼

## 链接：

[完美世界高校Mini Game大赛来啦！！！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/OXgGT_W7lNbefhFmBoe3ag)

**推荐指数：★★★**

![](https://picx.zhimg.com/v2-cca5165455078c0bc1980035dcf4d402_r.jpg?source=2c26e567)

## 6、维塔士2024校园游戏制作创意大赛

**成都维塔士，外包达人，今年第一次做高校比赛，分创意组和开发组，含金量如何未知，有参与的小伙伴回来留言**

## 活动时间：

3月1日-29日，报名启动

4月7日/16日，初赛提交截止

4月14日/30日，复赛提交截止

5月上旬，决赛路演

## 链接：

[维塔士2024校园游戏制作创意大赛正式启动，等你来报名！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/c33BWHCV-M-pTLemr9fqvw)

![](https://pic1.zhimg.com/v2-c81d063d4e362fcd96cf2bfac0373d2a_r.jpg?source=2c26e567)

本来还有个网易Y3还没出消息，下次再更吧~

![](https://pica.zhimg.com/v2-e198a9aa92a681570db5182afd52df60_r.jpg?source=2c26e567)


---

# 如何评价高一 UP 主「Silence 默不作声」辍学搞独立游戏？ 本羊已老矣

**Author:** 本羊已老矣  
**Bio:** 重度游戏玩家 业余游戏评测员 UE5Gameplay程序  
**Avatar:** ![](https://picx.zhimg.com/ba47d24da7fd9627abe7ab9697936460_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/22038af8818c3826343def7829dbad78  
**Published:** 2023.02.02 00:33:58  
**Updated:** 2023.02.03 13:40:44  
**Question:** https://www.zhihu.com/question/581274163  
**Question Created:** 2023.01.30 12:14:15  
**Question Updated:** 2023.02.02 13:18:48  
**Votes:** 985  
**Comments:** 62  
**Type:** answer  

今天一个策划同事跟我聊天还说到过这个娃儿，然后我去B站看了下他的视频，然后该咋说呢？

一边是觉得很搞笑，另一边是对B站游戏开发圈这个浮躁的风气感到难过吧。

一个入门课能坚持看完的不到1/10就罢了，更别说一些进阶课程，观看量仅有寥寥数千，这些老前辈的精华之作还不如一个16岁初中生录制的噱头视频，可悲！

研三那年的时候(也没过多久），还没想好入不入游戏这行，那年B站正好有个国产“大项目”放了PV，一下子给我魂都勾去了，脑子里想的是我一定要搞这个项目。当时C++也就个leetcode500题的水平，UE呢也就学了个草履虫水平吧，关键是我敢面项目组也敢收，硬是前几个月啥任务也没给我布置，还有导师随时供我问问题，组里每一个前辈后来都变成了我老师，每一天都能学到一些让我“卧槽！还能这样？”的东西。

我：为什么这个背包系统用的是MVVM的设计模式？为啥不直接用MVC？X哥，你这是什么写法？(适配器模式)我没看懂？X哥，你这个值是怎么拿到的啊？没看到哪里绑了委托啊？…

导师：你已经学完了UMG，那么这部分UI就交给你了。你已经学完GAS，那么这个XX系统有没有兴趣来试试？你这里不应该这么写死啊，要解耦啊！弄个回调嘛！…

所以你懂的，学得越多也就对开发技术越敬畏，特别是看到某个10年工作经验的育碧大佬的代码，充分诠释了软件工程那书上写的“高内聚，低耦合”，基类和派生类的层级关系设计棒极了，在设计之初就充分考虑好了后续的拓展迭代。嗨呀，我这练习时常一年的新手游戏程序要学的东西还多着呢！

做游戏如同攀山，团队中每一个人都需要去踏踏实实地去解决一个又一个难题，之后将大家的努力合并成一份未经打分的答卷，最后还要看各位玩家老爷去打分呢！希望B站的游戏开发圈的风气不要像这样继续走歪了，言尽于此！毕竟我一直觉得B站是最好的学习网站，而不是这种沽名钓誉之辈的名利场！

如果你真心想学游戏开发，请去关注如下UP：**谌嘉诚、八层肚、_Nerva、水曜日鸡、QB老师、大咸鱼呵呵、学点程序、开发游戏的老王、技术宅阿棍**等，B站上优秀的老师们可太多了，可他们有些人的粉丝量以及视频的播放量却连这个16岁高中生的噱头视频零头都达不到~


---

# 一个学习数学软件的开发计划——洛书（樱花数谱） 余命数

**Author:** 余命数  
**Bio:** 我的网站https://qed.moe  
**Avatar:** ![](https://picx.zhimg.com/v2-14ecf96d6a022ddec7cdf8f9a7190297_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 92  
**Comments:** 16  
**Type:** article  

![](https://pic2.zhimg.com/v2-fe9d49ef60ee3890d2bcbd73afe948c7_r.jpg)

项目简介

- 软件名：洛书（樱花数谱）；英文名 Sakura Math；
- 软件包名：com.luoshu.math
- 开发语言：Dart（Flutter）
- 计划支持平台：Android、Windows、iOS、网页
- 软件描述：一款学习数学的软件。用户可以使用樱花数谱学习初中数学、高中数学、数学竞赛以及大学数学
- 软件功能：学习数学、练习数学（刷题）、内置番茄钟、题库、讨论等功能
- 项目网站（目前还没上线，包括网页版）：https://qed.moe

## 开发日志

## 重构界面

首页

![](https://pic3.zhimg.com/v2-51a6ffe75787b1429ed4b92a08f7de10_r.jpg)

学习

![](https://pica.zhimg.com/v2-a9a2cff658424110a939c58efb659c1a_r.jpg)

![](https://pic2.zhimg.com/v2-5babf3fc768801546e7206107824f0db_r.jpg)

图书馆

统计

![](https://picx.zhimg.com/v2-27913935950b0c743e0222525ce78821_r.jpg)

![](https://pic2.zhimg.com/v2-e70c54a271665c780934352cb70d8dab_r.jpg)

个人界面

![](https://picx.zhimg.com/v2-5b6d767427958222c8454aa9d8a33af1_r.jpg)

![](https://pica.zhimg.com/v2-80eaadb03a8bcf40081ec28c8909416e_r.jpg)

![](https://picx.zhimg.com/v2-47042a414a16ed621823d572b0048cb9_r.jpg)

题库

![](https://picx.zhimg.com/v2-160cc1e092962a5713de90e20c2561b9_r.jpg)

![](https://pic3.zhimg.com/v2-ae0bd9aeb624578d98ed9a4449231bc8_r.jpg)

![](https://pic1.zhimg.com/v2-156a241b651423bc984362d0048b158e_r.jpg)

讨论

![](https://pic1.zhimg.com/v2-f3cf1dc426240aa0020277d55b5bab28_r.jpg)

![](https://pic1.zhimg.com/v2-3fd1ac4017e2d509362c0852ba4d8678_r.jpg)

数学工作室

![](https://picx.zhimg.com/v2-6d6bf82281b0a2da0e7878bc5be72d8b_r.jpg)

![](https://picx.zhimg.com/v2-a90dbe38c06e1aebdbb145d15807d039_r.jpg)

![](https://picx.zhimg.com/v2-8d53df3eed76521e144d2b714903e9b7_r.jpg)

设置

![](https://pica.zhimg.com/v2-f2122fc224c5db4e540e38ddb0aa0f78_r.jpg)

主题展示

![](https://pica.zhimg.com/v2-56510da4f6da77d085db416accd1b58c_r.jpg)

![](https://pic2.zhimg.com/v2-1abba35e2ea6cb3d4fe6743b44caa455_r.jpg)

## 学习功能

在这部分我还不想谈太多，因为具体实现还有待商讨。目前我打算的学习功能主要有两点，一、是看交互动态电子书学习，学习者可以从图书馆里选择想要学习的教材，然后打开学习界面用于学习。

学习者像看电子书阅读器那样看书，同时，基本的阅读器功能也会有，比如标注、作笔记等。同时，书内的部分名词和地方也会有超链接，哪里不会点哪里，点击即跳转到本软件的数学百科界面，查看对应的条目（词条）解释。

二、通过软件的逐章学习学习，和第一个的区别是，这个不是阅读器看书学习，而是在软件里直接学。并且会引入相应的算法，比如学习者必须在进入软件前通过一项测试，基本判定其水平后，学习对应章节，不可跳章（而第一种看书学习没有限制）。并且也会适当进行间距重复等等，纳入软件的学习统计中。

学习板块分有小学、初中、高中、大学和竞赛，分别对应不同的学习课目。

## 图书馆

这个图书馆不止是单纯的电子书下载器和PDF阅读器，是实在的可交互的电子书（想象你在某小说软件看小说）。

这个图书馆也会有打分、收藏、爱心评论等基本功能。学习者可以从这里选择他想学的任何书加入到自己的学习计划中。

同时，我编写的中学数学之旅也会以交互的方式被录入软件，免费观看。

## 统计图

统计功能包括，学习打卡的天数、累积的花瓣（=经验值）、勋章墙（可以通过学习、贡献解法、题目、书籍等获得）、能力雷达和热力图。随账号同步。

## 整合AI（谱系）

本软件最主要的目标之一就是整合AI，从最开始的目标：题目谱系开始

- 一般的软件：单纯的题目，题目之间并无关联，只是将题目粗略的归类到一个分类下，标注难度等；
- 樱花数谱：题目谱系

也就是说，当使用者拍一道题，或者查到一道题时，在题目的详细描述里，会有一个类似谱系的功能。使用者可以看到这道题的类型的母题，以及母题下的分叉，展示数据库里这道题的演变类型，把握这类问题的演变趋势。

有些问题，每次被发到各大数学题目群问，然而这类题早在几年前，甚至几百年前就被人解决了，有了题目谱系，使用者可以更深地了解这个问题，追根溯源。

> 例子：当使用者上传一道题目，先是运用嵌入模型在现有的题目数据库搜索，交给AI智能分析这道题的考点和类别，并且这道题是否是现有数据库里某道题的变式，或是某两道题的结合，以此搭建这道题的谱系。随着时间的推理，拉起的网络越稠密，题目越多，这个关系网越来越好，效果也更好。

先动用文本嵌入模型，然后转交其他模型搜索，分析每道题目之间是母题、还是变式题、还是两道题目的拼凑题，建立这个关系网，即谱系，是本软件旨在实现的目标之一。

同时，通过积累所有用户的易错点、常见疑惑点等，知道用户最容易卡在哪一步，哪一步是最不好理解的，当用户点击看不懂这里的时候，AI会反问用户是卡在哪一步最常见的步骤上。不直接给学生答案，而是引导。以引导求理解。

## 数学维基

软件内置一个类似于Wikipedia的百科模块，比如，用户在软件里某个地方看到、或是主动搜索“极值点偏移”这个高中数学题型，或者是“矩阵乘法”，会自动跳转到这个名词或是题型专有的条目（~词条），这个目录里面至少包括：

- 简要描述
- 题目历史（谱系）
- 题目的定义、或者是其他高观点的理解
- 解法大全
- 讨论
- 想要了解更多所可以参考的相关文献和书籍
- 等等。。

在百科层面做好信息整理，避免用户需要到处看视频、查文献，才能形成一个系统性认知。

![](https://pic1.zhimg.com/v2-4d587168f14c64fdb1a534466f522ddc_r.jpg)

## 题库

题库包括初中数学、高中数学（近二十年高考真题、高质量的模拟题等）、数学竞赛（类似于AoPS，包括历年IMO等题目，按照谱系排版）以及大学数学（期末题库etc.），用户可以在软件里访问。

## 免费、简洁的界面和无广告。

## 一站式解决方案

本软件的数学工作室功能，用户可以在里面上传题目、导出错题、上传图书、组卷、绘图和运用简单的本地计算器。我也希望藉由“宁缺毋滥”的指导哲学，收集好的和高质量的资源（同时我自己也会编写一点），帮助无论是老师还是学生在内，更好的找到好的资源，整理错题的时候也能得到更好的文档排版。

目前这个软件许多功能仍处于计划之中，同时也有大量内容需要填充，预计在未来适当的时候会发布本软件的预览版，届时各位可以更好的提出建议，说说自己的需求。

12/6

[数学学习软件樱花数谱11/30开发日志：优雅的界面&拓扑排序&间隔重复与穿插练习](https://zhuanlan.zhihu.com/p/1978604559053128049)

[介绍我开发的更现代的数学学习软件项目——樱花数谱](https://zhuanlan.zhihu.com/p/1978095773582382009)


---

# 完全没社交是什么体验？ yyszone

**Author:** yyszone  
**Bio:** 个人网站yys.zone，欢迎友链  
**Avatar:** ![](https://picx.zhimg.com/v2-509cb08c08813176e23d496d69b91490_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2317405c42fb0e31e62f9e140fb13ca1  
**Published:** 2025.12.08 17:17:23  
**Updated:** 2025.12.10 14:03:16  
**Question:** https://www.zhihu.com/question/270034810  
**Question Created:** 2018.03.27 01:36:47  
**Question Updated:** 2018.03.27 01:44:18  
**Votes:** 2160  
**Comments:** 500  
**Type:** answer  

很宅，不出门，不走亲戚，没人情世故，不打电话，只打字，

在家里看哔哩哔哩，看动漫，写代码做网站，做太阳能发电，发呆

![](https://pic1.zhimg.com/v2-567d22cd4ec2f96d166ae3d60be29ad5_r.jpg?source=2c26e567)

[6v太阳能板+水泵做循环水缸https://www.zhihu.com/video/1981402023372011400](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1981402023372011400)

![](https://picx.zhimg.com/v2-35163cb5396d7add0eb0fb06a69035cb_r.jpg?source=2c26e567)

在院子里水龙头边做了个太阳能水缸，水泵只白天流水不需要电池成本低，夜里灯亮电池供电，不养鱼因为养不活，不伤害生物

![](https://picx.zhimg.com/v2-7ec049d85bf0ccaf9b9523ad274fcefe_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-a5fedea2e48dd636c1a4f3745368a625_720w.jpg?source=2c26e567)

用550瓦太阳能板给我房间发电，够一天使用的，esp8266 + ina219 + 30a继电器检测电压,画echarts 图，根据电压自动开关逆变器，防止过充过放，电压警告发送qq邮件，一开始用10a继电器烧坏了，电流太大了，搭建过程:[构建高精度监控的DIY太阳能储能系统220v](https://link.zhihu.com/?target=https%3A//yys.zone/detail/%3Fid%3D470)。




![](https://picx.zhimg.com/v2-5ade801179ecca988f17b3dabf6da6f3_r.jpg?source=2c26e567)

陆陆续续买了不少太阳能板，还有二手单车太阳能板，很便宜。有给12v热桌垫供电的2个18v50w太阳能板并联，有给电车充电600w48v太阳能板 升压60v 直流供电效率高，6v的给风扇、不少灯还有水缸供电。

![](https://pic1.zhimg.com/v2-e450d5287abf9255472e6524e41192b2_r.jpg?source=2c26e567)

做不少网站，有个人博客，日记，笔记，国内外热点，书签。

![](https://pic1.zhimg.com/v2-32a449de9e0f66a7395544461b5426be_r.jpg?source=2c26e567)

热点聚合[https://hot.yysresume.work/](https://link.zhihu.com/?target=https%3A//hot.yysresume.work/)，使用hugo+cloudflare +GitHub制作，5小时更新一次

![](https://pica.zhimg.com/v2-4b14064af673cd3e2bacd25c32d05d98_r.jpg?source=2c26e567)

模仿joplin做的，可以离线同步

![](https://pic1.zhimg.com/v2-6bbcf25a1cecd17c1bb69012e92798cd_r.jpg?source=2c26e567)

为了活150岁，我在楼上弄个简单健身房，每天跑步12分钟。

我就爱这种日子， 不用应付乱七八糟的人和事，守着自己的小空间，折腾代码、网站和太阳能，看看动漫发发呆，偶尔动一动。没有鸡飞狗跳，只有安安稳稳，省钱又省心，活得自在，这就是我的宁静淡泊，简单的幸福。




每天坚持写日记的，记录每天做的事情，大学老师说过每天都没事找事做，无论什么事都算，发呆也算。

为了保存更长久，8年来，换了不少软件，从小米便签到OneNote，然后django，后来go语言做个日记网站[日记](https://link.zhihu.com/?target=https%3A//go.yyszone.dpdns.org/)（因为render免费托管go的性能还不错）

![](https://picx.zhimg.com/v2-ac4ba49fbc0790a4e1673cfb4e109bdb_r.jpg?source=2c26e567)

然后每天23点通过n8n  读取数据库分析每天日记进行想法创新，生成各种各样html报告，把当天生成html文件提交到github

![](https://pica.zhimg.com/v2-7291c79998b8048b318caa5571ffc909_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-510759e1f386f75c87d71456579d159e_r.jpg?source=2c26e567)

最后cloudfare pages+ hugo + github 读取html做个网页，把生成每天报告整理网页，日记网站通过js检测链接通过把当天日记报告链接嵌入日记底部。

![](https://pica.zhimg.com/v2-4bc374fb3ae72e539e631c5aa806cf3e_r.jpg?source=2c26e567)

日子应该做自己喜欢的事情，安稳自在就是最好的。


---

# 介绍我开发的更现代的数学学习软件项目——樱花数谱 余命数

**Author:** 余命数  
**Bio:** 我的网站https://qed.moe  
**Avatar:** ![](https://pic1.zhimg.com/v2-14ecf96d6a022ddec7cdf8f9a7190297_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 426  
**Comments:** 75  
**Type:** article  

**本文仅为介绍本项目以及其目的。**

![](https://pic2.zhimg.com/v2-aa9172f5dd5a28826135508fe12bf611_r.jpg)

## 

[数学学习软件樱花数谱11/30开发日志：优雅的界面&拓扑排序&间隔重复与穿插练习](https://zhuanlan.zhihu.com/p/1978604559053128049?share_code=1rQkPaqdU08hc&utm_psn=1978612196771635498)

## 关键信息：

- 软件名：樱花数谱（Sakura Math）
- 软件包名：com.sakura.math
- 开发语言：Dart（Flutter）
- 计划支持平台：Android，由于软件上架iPhone的App store需要交七百块，故iOS和Windows用户只能使用网页版
- 软件描述：一款学习数学的软件。用户可以使用樱花数谱学习初中数学、高中数学、数学竞赛以及大学数学
- 软件功能：学习数学、练习数学（刷题）、内置番茄钟、题库等功能
- 项目网站（目前还没上线，包括网页版）：

[https://qed.moe](https://link.zhihu.com/?target=http%3A//xn--kdvs9hvr0a8vi/)

## 软件特点

## 题目谱系

- 一般的软件：单纯的题目，题目之间并无关联，只是将题目粗略的归类到一个分类下，标注难度等；
- 樱花数谱：题目谱系

也就是说，当使用者拍一道题，或者查到一道题时，在题目的详细描述里，会有一个类似谱系的功能。使用者可以看到这道题的类型的母题，以及母题下的分叉，展示数据库里这道题的演变类型，把握这类问题的演变趋势。

有些问题，每次被发到各大数学题目群问，然而这类题早在几年前，甚至几百年前就被人解决了，有了题目谱系，使用者可以更深地了解这个问题，追根溯源。

> 例子：当使用者上传一道题目，先是运用嵌入模型在现有的题目数据库搜索，交给AI智能分析这道题的考点和类别，并且这道题是否是现有数据库里某道题的变式，或是某两道题的结合，以此搭建这道题的谱系。随着时间的推理，拉起的网络越稠密，题目越多，这个关系网越来越好，效果也更好。

## 智能引导

通过积累所有用户的易错点、常见疑惑点等，知道用户最容易卡在哪一步，哪一步是最不好理解的，当用户点击看不懂这里的时候，AI会反问用户是卡在哪一步最常见的步骤上。不直接给学生答案，而是引导。以引导求理解。

## 哪里不会点哪里：数学维基

软件内置一个类似于Wikipedia的百科模块，比如，用户在软件里某个地方看到、或是主动搜索“极值点偏移”这个高中数学题型，或者是“矩阵乘法”，会自动跳转到这个名词或是题型专有的条目（~词条），这个目录里面至少包括：

- 简要描述
- 题目历史（谱系）
- 题目的定义、或者是其他高观点的理解
- 解法大全
- 讨论
- 想要了解更多所可以参考的相关文献和书籍
- 等等。。

在百科层面做好信息整理，避免用户需要到处看视频、查文献，才能形成一个系统性认知

## 学习数学

用户可以在软件的学习页阅读精心设计的学习章节，从初中到大学，按章节进行。同时也会将我编写的书籍《中学数学之旅》整合其中，并且提供给读者更进一步了解的渠道。

## 题库

题库包括初中数学、高中数学（近二十年高考真题、高质量的模拟题等）、数学竞赛（类似于AoPS，包括历年IMO等题目，按照谱系排版）以及大学数学（期末题库etc.），用户可以在软件里访问。

## 樱花记忆法

即间隔重复系统，一道题型不会的隔几天考一次。

## 用户界面简洁优雅、无广告（和任何恶心人的弹窗）、免费

## 更多更现代和智能的特点。。

## 现状

目前这个软件的项目也是正式立项了，分别有网页版和Android版本，目前还处于策划阶段。

## 示例

![](https://pica.zhimg.com/v2-e110b024627d6b83c9824ff168ea3ab6_r.jpg)

![](https://pica.zhimg.com/v2-34907d4f9d39593d7b7a652afcaf5f7a_r.jpg)

![](https://picx.zhimg.com/v2-1c0f5f0c3841fefbe6c29586ad5d85e7_r.jpg)

![](https://picx.zhimg.com/v2-37d8fae12f4eb016d2a826cbb01de4f7_r.jpg)

![](https://pic4.zhimg.com/v2-683527f34544a69a726d5ba9db2cae7b_r.jpg)

![](https://picx.zhimg.com/v2-bbe517d95ba8678b9c8efab23815b82f_r.jpg)

## 敬请期待！

[中学数学之旅十一月新书稿（全五卷）](https://zhuanlan.zhihu.com/p/1977408006607114781)

END


---

# 如何评价米哈游新游戏《星布谷地》一测? 坚实的小石板

**Author:** 坚实的小石板  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/4c55f2e8c6fa6f0a707df249ed5b6d6f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/320204868a761fdbc4afa4d96bc3e309  
**Published:** 2025.11.07 18:39:49  
**Updated:** 2025.11.07 18:39:49  
**Question:** https://www.zhihu.com/question/1970057808704705150  
**Question Created:** 2025.11.07 09:19:43  
**Question Updated:** 2025.11.07 09:19:43  
**Votes:** 285  
**Comments:** 34  
**Type:** answer  

酒保 ai npc 的设计，让该终端从 1v1 对话者，转变成 Nv1 旁听者，缓解了 2 个困境：

- 通过预期引导，让玩家对 ai npc 的述求，由类人同伴下调为陪聊工具人，且群体智慧不强求共通，有私域上下文记忆即可。
- 对服务端 ai 进行了局部分割，能将一部分算力挑战，转移至相对不值钱且不稀缺的存储层。

这样消费者的述求，会从算力、能力与理解力等强要求，分流至记忆、情感陪同与话题调动等。介于频道机器人与 ai 数字人之间，算是游戏场景的一种设计思考。

它这咖啡馆功能再优化下，能覆盖私域邮箱、聊天室、备忘录跟情感垃圾桶的场景。挺有意思，不知道一测是否有多 ai npc 的简易互动，哪怕 2-3 人也行，虽然我也想不出啥场景，打牌或下棋？

除此以外。

瞄了眼图鉴累积数，得观察下玩家对游戏内外同步时间锁的接受边界。如果该设定成立，那虚拟物品搜集池就初步成型，奖惩激励框架搭建完成。围绕核心货币周转按需调控，流程上避免取巧甚至作弊漏洞即可。

剩下就是完善，玩家间、玩家与虚拟物品、玩家与场景跟玩家与活动等互动，这部分越丰富，驱动就越顺利，听说谷地也考虑引入 UGC？。

最后就是安全线，围绕游戏内极端恶意行为，搭建一套响应与管控防火墙。

没了。


---

# 如何评价如今的 Bilibili？ 路易斯小石

**Author:** 路易斯小石  
**Bio:** 爱好历史生物 喜欢环保 热爱共产主义 追求理性与正义  
**Avatar:** ![](https://pic1.zhimg.com/v2-344880a07ba4ddd3233baee18cd4fbad_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/46d09acbd02f81765a1c5de43dcd8860  
**Published:** 2025.07.03 15:12:41  
**Updated:** 2025.09.05 17:46:45  
**Question:** https://www.zhihu.com/question/266972664  
**Question Created:** 2018.02.10 18:34:13  
**Question Updated:** 2018.10.01 11:40:41  
**Votes:** 3525  
**Comments:** 101  
**Type:** answer  

PiliPala

[https://github.com/guozhigq/pilipala](https://link.zhihu.com/?target=https%3A//github.com/guozhigq/pilipala)

PiliPala X

[https://github.com/orz12/PiliPalaX](https://link.zhihu.com/?target=https%3A//github.com/orz12/PiliPalaX)

PiliPlus

[https://github.com/bggRGjQaUbCoE/PiliPlus](https://link.zhihu.com/?target=https%3A//github.com/bggRGjQaUbCoE/PiliPlus)

Bilimiao 2

[https://github.com/10miaomiao/bilimiao2](https://link.zhihu.com/?target=https%3A//github.com/10miaomiao/bilimiao2)

Bilidown-Reborn

[https://github.com/MLChinoo/bilidown-reborn](https://link.zhihu.com/?target=https%3A//github.com/MLChinoo/bilidown-reborn)

哔哩助理

[https://github.com/Richasy/Bili.Copilot](https://link.zhihu.com/?target=https%3A//github.com/Richasy/Bili.Copilot)

Wiliwili

[https://github.com/xfangfang/wiliwili/wiki](https://link.zhihu.com/?target=https%3A//github.com/xfangfang/wiliwili/wiki)

JiJiDown

[http://client.jijidown.com/](https://link.zhihu.com/?target=http%3A//client.jijidown.com/)

Downkyi

[https://github.com/yaobiao131/downkyicore](https://link.zhihu.com/?target=https%3A//github.com/yaobiao131/downkyicore)

biliup-app

[https://github.com/biliup/biliup-app](https://link.zhihu.com/?target=https%3A//github.com/biliup/biliup-app)

Bilitools

[https://github.com/btjawa/BiliTools](https://link.zhihu.com/?target=https%3A//github.com/btjawa/BiliTools)

Animeko

[https://github.com/open-ani/animeko](https://link.zhihu.com/?target=https%3A//github.com/open-ani/animeko)

Kazumi

[https://github.com/Predidit/Kazumi](https://link.zhihu.com/?target=https%3A//github.com/Predidit/Kazumi)

Manga Downloader

[https://github.com/lanyeeee/bilibili-manga-downloader](https://link.zhihu.com/?target=https%3A//github.com/lanyeeee/bilibili-manga-downloader)

Manga Watermark Remover

[https://github.com/lanyeeee/bilibili-manga-watermark-remover](https://link.zhihu.com/?target=https%3A//github.com/lanyeeee/bilibili-manga-watermark-remover)

Venera

[https://github.com/venera-app/venera](https://link.zhihu.com/?target=https%3A//github.com/venera-app/venera)

Mihon

[https://github.com/mihonapp/mihon](https://link.zhihu.com/?target=https%3A//github.com/mihonapp/mihon)

BilibiliLiveRecordDownLoader

[https://github.com/HMBSbige/BilibiliLiveRecordDownLoader?tab=readme-ov-file](https://link.zhihu.com/?target=https%3A//github.com/HMBSbige/BilibiliLiveRecordDownLoader%3Ftab%3Dreadme-ov-file)


---

# 如何评价高一 UP 主「Silence 默不作声」辍学搞独立游戏？ 自然妙有猫仙人

**Author:** 自然妙有猫仙人  
**Bio:** 三流程序员写着四流的代码  
**Avatar:** ![](https://pica.zhimg.com/v2-664851353a2af401391d24ed1080d51c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/8b9737900f8279a913b8cd2dddcd252f  
**Published:** 2023.01.31 11:48:52  
**Updated:** 2023.02.02 14:14:34  
**Question:** https://www.zhihu.com/question/581274163  
**Question Created:** 2023.01.30 12:14:15  
**Question Updated:** 2023.02.02 13:18:48  
**Votes:** 1364  
**Comments:** 128  
**Type:** answer  

**B站游戏开发过家家的典型**

先是发个仅包含玩法构思（有些甚至连具体玩法都没有，就只是声称自己要做游戏），没有任何demo演示的视频招人

而能招到的基本也都是一些没有工程实践经验，仅凭业余兴趣学习过相关技能的学生

然后划分出各种策划组、美术组、程序组、翻译组、配音组等等，总之就是突出一个拿不出什么成果但是在组织结构划分上很用心（类似热衷写设定但就是写不出来正文）

就这样招到了几十到几百人，分出了七八个组，建立起十几个群，再起名个XX工作室，角色扮演度拉满

期间再更新几个画饼煽情的视频，buff叠满，流量吸满

然后一开始或许招到的人还会怀有三分钟热情来热烈的参与到游戏开发中

但随着热情的消退以及各种因为缺乏专业度导致的问题的暴露，使得实际能持续参与到开发中的人员能有十分之一就很不错了

最后能做出个包含核心玩法的demo都已经算是很大的进步了，更多的是连demo都做不出来，开发群逐渐变成了没人说话的死群，宣告本次过家家的结束

总而言之，独立游戏开发讲究的是个精兵强将，而不是靠在互联网上东拼西凑出来的团队就能搞定的

——————分割线——————

这个吐槽好像意外火了？？

B站关注洛天依喵，关注洛天依谢谢喵

![](https://picx.zhimg.com/v2-821d7f923b2ffceb8921f4b0e5c5f564_r.jpg?source=2c26e567)


---

# 如何评价独立游戏《神之天平》？ Wraith

**Author:** Wraith  
**Bio:** 沉浸于并不存在的第九艺术之中  
**Avatar:** ![](https://pic1.zhimg.com/86f3472e8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/43fb10c1190636e58e420373d3348756  
**Published:** 2024.07.01 22:01:42  
**Updated:** 2024.07.01 22:01:42  
**Question:** https://www.zhihu.com/question/563800025  
**Question Created:** 2022.11.01 04:42:28  
**Question Updated:** 2023.03.02 11:02:26  
**Votes:** 128  
**Comments:** 15  
**Type:** answer  

## 做出这游戏的独立制作者，真的是神

![](https://pica.zhimg.com/v2-bf2b0d232bf8c2685a9239189dd4c148_r.jpg?source=2c26e567)

久闻Steam上有一款独立游戏神作，然而因为我是个可耻的主机+画面党，所以一直没机会体验——直到Switch上也有了该作，立刻第一时间预购，然后在差不多一年的时间里依靠每次出远门的时间断断续续给打完了。虽然对游戏体量早有预期，但每次看到新的剧情和系统，都不经感慨，这作者怎么还能有新东西？！

![](https://picx.zhimg.com/v2-fc5f9e3104925a0619f0e333a64c29b0_r.jpg?source=2c26e567)

## 精妙复杂的系统

作为2D横板游戏，本作一开始的操作并不复杂——如果你没有提前玩那个试玩版的话。然而随着游戏的进行，本作的系统堪称为JRPG史上之最都不为过：属性加点有衰减、装备有重量、武器有不同的招式类型、法术有6个属性和多个高级版本、技能有上百个之多；这还没算能把几乎所有道具放上去的天平系统，以及二周目新增的装备盘和天平升级……照理来说，一般游戏要是做得如此复杂，那么绝大多数系统都会沦落为鸡肋，或是邪道玩法专用（此处点名几百种宝可梦和几千种招式）；但是神之天平却成功让玩家几乎体验了所有的要素。单从这一点来说，独立开发者KEIZO就是个堪比顶尖游戏制作人的奇才了。

![](https://picx.zhimg.com/v2-615cc9658757dccd7f10b8d4deaa73ff_r.jpg?source=2c26e567)

简单来说，本作的几乎每个装备（除饰品）外都有熟练度的设定，在装备一段时间后大多可以获得独一无二的新技能，所以玩家会有动力在每个场景结束前尽量集齐所有可供购买的装备（含随机掉落的隐藏装备）；而购买本作的几乎每个装备除了钱、都需要怪物掉落的特定素材，这就需要玩家去刷刷刷了——而刷刷刷的过程正好可以给刚刚换来的装备提升熟练度。本作的熟练度和道具掉落概率，恰好能让这个过程循环起来，使得玩家不会感到无聊，总是有着盼头。而在刷刷刷的过程中，玩家还会获得经验值升级、并获得力量晶体提升能力：由于玩家升级加点是完全自由的，为了使本作难度曲线适中，玩家在力量晶体成长盘里被安排加的那些属性才保证了玩家的基本能力可以不断提升并匹配游戏的难度——虽然玩家的目的仅仅是尽快解锁新的魔法。这个设定也是绝了。

![](https://picx.zhimg.com/v2-83700ec7ed71ffd55f4493c8d97eab91_r.jpg?source=2c26e567)

而在精巧设计的数值外，游戏中更有令人发指的技能和魔法可供玩家选择。上百种技能虽然多，但却是靠刷装备熟练度逐渐获得的（到了二周目又可以通过装备盘获得几十种隐藏技能），所以不会一股脑塞给玩家；而游戏中有限的晶体，又逼迫玩家去一一尝试这些技能，而无法全部装上去。类似的魔法技能也是。游戏强制了每种属性只能装备一种魔法，从而不仅限制了游戏快捷键的使用、让玩家形成肌肉记忆，更促使玩家去尝试并比较不同的魔法，选出更适合自己的——二周目更又追加了几十种隐藏魔法，永远不会腻。

![](https://pica.zhimg.com/v2-f37dd321ed4128973ee72383a08bda0f_r.jpg?source=2c26e567)

更有意思的则是天平系统。表面上天平系统只是一个让玩家自由搭配Buff的系统；但天平半强制性地要求两边重量相同的设定，却是神来之笔。它不仅增加了配平的难度，即游戏的趣味性，更让玩家有意识地去关注每一种道具——而一般RPG游戏中，消耗性道具基本就是鸡肋的存在。而道具本身的重量和附加的属性，又巧妙地提高了游戏的平衡性——初期天平托盘较小、道具也较少时，是很难同时装上多个拥有强力属性的超重道具的；而后期由于有了较多的托盘和道具选择，玩家虽然可以选择超重道具，但却要当心重复属性造成的抵消。至于二周目的托盘升级，更是将原本在后期变得鸡肋的初级道具一跃成为了最强道具，又创造了新的可能性。

![](https://pic1.zhimg.com/v2-82793f0a720ffe2b57aa8084563caae0_r.jpg?source=2c26e567)

=========================剧透警告分界线========================

## 一波三折的剧情

![](https://pic1.zhimg.com/v2-3cde9f450f3c47cf839f86ae01de77dc_r.jpg?source=2c26e567)

本作初始的剧情极其传统和王道——主角和青梅竹马被魔兽袭击，醒来时青梅竹马不知去向，只有一只失去记忆但会说话的乌鸦；从此主角踏上了寻找青梅竹马的旅途……如果是正常游戏，那这只看起来色色的乌鸦就应该是女主化身了。但显然被称为神作的作品不会如此简单……

![](https://picx.zhimg.com/v2-e5b40fc3bac7bb1ed192dbd0109a28eb_r.jpg?source=2c26e567)

作为标题的“神之天平”，本来只是主角在接到第一个找草药任务时的“意外”收获，却从此改变了他的命运。接下来的每一章，都是在必死的局面下主角通过天平回溯了时间，虽然也付出了一些代价但总归拯救了相应的人们。相比传统意义上的时空穿越，这里的巧思更多是在主角如何在有限的空间和时间内，靠一己之力扭转命运。之后虽然也有反向穿越去未来的剧情，加入了不少科幻元素，但本质上还是时间之神的设定。

![](https://picx.zhimg.com/v2-1b73e20d3d04ac9bf3c4e83c17975437_r.jpg?source=2c26e567)

然而，神作之所以是神作，无疑在于其中的多重反转。青梅竹马的阿奴莉丝的设定即是如此——虽然玩家隐约从第二章的泊灵猜出了当年的真相、或者说嘉隆的真实身份，不过当揭露出阿奴莉丝是个扮猪吃老虎的AI后，玩家还是不免陷入了道德困境——是继续自己一路上的目标，还是为了新结识的朋友们而大义灭亲。到这里，游戏的确出现了一个分支结局，让玩家可以和青梅竹马一直相依为命；当然，更多的玩家肯定是会起身与命运抗争……

![](https://pic1.zhimg.com/v2-7589f60dd608380790b6fd2de7cd0ef5_r.jpg?source=2c26e567)

但比起阿奴莉丝的身份，游戏的设定更精彩——未来的人类为了争夺有限的资源，利用“天平之神”的力量，把AI的思想和魔兽送到过去，消灭和控制过去人口的数量，来创造出另一个不缺少资源的平行世界。这种脑洞真的是无与伦比；不仅圆了游戏的故事设定，还把剑与魔法、时空穿越和未来科技等多个矛盾的主题给成功融合到了一起。与此同时，依托于这些设定，故事成功也把阿努比斯的本心给洗白了、并搞了大团圆的结局…………

![](https://picx.zhimg.com/v2-8bd1820ac677b6365c6b882a656faada_r.jpg?source=2c26e567)

然而，制作者KEIZO真的是神！在大结局之后，又推出了从系统到剧情都再上一个台阶的新章！系统上面已经提过了，装备盘、技能升格和天平的升级，随便哪个都是在本就近似完美的系统上再次锦上添花。更夸张的是剧情——本来应该很完整的剧情和世界观，硬是也再次得到了合理的升级。

![](https://picx.zhimg.com/v2-74ad489f45fcf73f7e67d68de84696e6_r.jpg?source=2c26e567)

新章不仅通过讨巧的部分，复用了之前的地图和敌人素材，更给玩家机会将之前略带遗憾的剧情进行了完美的重构——当然最巧妙的还是，这种“二周目”竟然还在剧情层面得到了解释。玩家更惊喜地发现，新的世界观在之前的剧情中其实早有伏笔，也就是作者早在最早分章节出该作时，就已经把这条草蛇灰线给埋好了。于是乎，这第N次的剧情反转也是水到渠成……

![](https://pic1.zhimg.com/v2-75bfbe078d6958a5a88e2eb6a2c410c9_r.jpg?source=2c26e567)

虽说玩家到了游戏中期，已经摸清了作者KEIZO的套路，无非就是靠不停的反转来制造新的冲突和遗憾、同时用天平的力量来弥补遗憾；但是每当玩家觉得“我什么没见过.jpg”的时候，新的剧情走向总是成为了“这我真的没见过.jpg”。这么大的脑洞，以及堪比顶尖游戏设计师的系统设计，竟然出自一名独立游戏开发者，不得不说，这真的是神迹啊。

![](https://picx.zhimg.com/v2-a1c9efe78f929288bd70223126a630c3_r.jpg?source=2c26e567)


---

# 通过 TypeScript 类型体操学习日语语法 王译锋

**Author:** 王译锋  
**Bio:** aka 雪碧 | doodlewind@github  
**Avatar:** ![](https://picx.zhimg.com/v2-c93ccdb4ad4b457e97646100ea6add94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c0e2a6c332e573b37d6f5387074ead98  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 499  
**Comments:** 38  
**Type:** article  

尽管一个用于人类交流，一个服务于机器指令，自然语言和编程语言却共享着相似的基本原理。两者均由语法规则、结构限制和组合方式所定义。

举例来说，日语以其严（luo）谨（suo）的语法规则和丰富的变形系统而闻名，而 TypeScript 的类型系统则因其表达能力和灵活性而受到推崇。当我们将这两个领域结合起来，会发生什么呢？本文将探索如何利用 TypeScript 的高级泛型编程来建模日语语法结构，让编程语言成为辅助语言学习的新工具。

由于全文较长，因此这里先预告几个后文中将演示的日语例句：

- 疑问句「为什么要演奏春日影？」
- 条件句「辛美尔的话也会这么做的」
- 组合句「好时代，来临啦」

下面，让我们从基础知识开始循序渐进吧。

## 从命令式编程到类型编程

在深入日语语法之前，我们可以先通过一个简单的英语动词变形例子，来理解如何将常规的 JavaScript 函数转换为 TypeScript 类型级别的实现。

首先，下面是一个简单的 JavaScript 函数，它根据第二个参数决定给英语动词添加"ed"还是"ing"：

functionconjugateEnglishVerb(verb,form){if(form==="past"){returnverb+"ed";}elseif(form==="progressive"){returnverb+"ing";}else{returnverb;}}// 使用示例conjugateEnglishVerb("walk","past");// "walked"conjugateEnglishVerb("talk","progressive");// "talking"

这个函数在运行时接收参数并返回结果。这是典型的命令式编程方法，即通过一系列明确的指令告诉计算机「如何」执行任务。现在，让我们将这个逻辑转换到 TypeScript 的类型系统中：

// 定义可能的变形形式typeEnglishVerbForm="base"|"past"|"progressive";// 类型级别的动词变形函数typeConjugateEnglishVerb<Verbextendsstring,FormextendsEnglishVerbForm>=Formextends"past"?`${Verb}ed`:Formextends"progressive"?`${Verb}ing`:Verb;// 类型级别的使用示例typeWalkedVerb=ConjugateEnglishVerb<"walk","past">;// 结果: "walked"typeTalkingVerb=ConjugateEnglishVerb<"talk","progressive">;// 结果: "talking"

注意这里的关键转换：

- 函数参数变成了泛型参数 <Verb extends string, Form extends EnglishVerbForm>
- if/else 条件语句变成了条件类型 Form extends "past" ? ... : ...
- 字符串拼接 verb + "ed" 变成了模板字符串类型 `${Verb}ed`
- 函数调用变成了类型声明和实例化

这个简单的例子用到了 TypeScript 类型系统中的三个核心工具：

- 泛型：用于参数化类型
- 条件类型：用于根据条件选择不同的类型
- 模板字符串类型：用于在类型级别操作字符串

对比这两个例子可以感受到，声明式的类型编程相比命令式编程，在与计算机沟通的方式上有根本区别：

- 命令式编程告诉计算机「如何做」，即通过一系列明确的步骤执行任务。
- 而类型编程则是在描述「是什么」，即声明类型之间的关系和约束。我们不再发出指令序列，而是构建一个类型关系网络，让编译器在编译时自行推导结果。

这种范式转变使我们能够在程序运行前就验证复杂规则的正确性，将运行时错误转变为编译时错误，非常适合建模人类语法这种（纸面上）具有严格结构约束的系统。

## 扩展语法规则特例

当然，实际的语言规则要比上面的简单变换复杂得多，存在着许多人为规定的特例。让我们稍微扩展英语动词变形的例子，考虑一些特殊规则：

// 更复杂的英语动词变形typeConjugateEnglishVerbAdvanced<Verbextendsstring,FormextendsEnglishVerbForm>=Formextends"past"?Verbextends`${inferBase}e`?`${Base}ed`// 如果以 e 结尾，只加 d:Verbextends`${inferBase}y`?`${Base}ied`// 如果以 y 结尾，变 y 为 ied:`${Verb}ed`:Formextends"progressive"?Verbextends`${inferBase}e`?`${Base}ing`// 如果以 e 结尾，去掉 e 再加 ing:`${Verb}ing`:Verb;// 示例typeMovedVerb=ConjugateEnglishVerbAdvanced<"move","past">;// "moved"，不是 "moveed"typeCriedVerb=ConjugateEnglishVerbAdvanced<"cry","past">;// "cried"，不是 "cryed"typeMovingVerb=ConjugateEnglishVerbAdvanced<"move","progressive">;// "moving"，不是 "moveing"

这里我们使用了infer关键字来从类型表达式（即所谓的「模式」）中抽取出特定的片段，并在结果中重用它。这就是类型系统中名为模式匹配的强大工具。

## 日语动词变形基础：了解五段动词

对于没有接触过日语的读者，这里先简单介绍一下日语动词变形的基本概念。

在日语中，动词会根据时态、语气、礼貌程度等因素发生变形。这与英语中的 "walk/walked/walking" 类似，但日语的变形系统更加系统化且规则丰富。

日语的动词主要分为三类：五段动词、一段动词和不规则动词。其中，五段动词是最常见也是变形规则最复杂的一种。所谓的「五段」来源于传统日语语法中的元音行变化（あ、い、う、え、お五行），意味着这类动词在变形时词尾会在这五个行中变化。

以「買う」（买）这个五段动词为例，它在几种不同形式下的变化如下：

- 基本形（字典形）：買う (kau)
- て形（连接形）：買って (katte)
- た形（过去式）：買った (katta)
- ない形（否定形）：買わない (kawanai)
- 命令形：買え (kae)

如果用 JavaScript 函数来实现这种变形逻辑，大致会是这样：

functionconjugateGodanVerb(stem,ending,form){if(form==="て形"){if(ending==="う"||ending==="つ"||ending==="る"){returnstem+"って";}elseif(ending==="く"){returnstem+"いて";}elseif(ending==="ぐ"){returnstem+"いで";}elseif(ending==="す"){returnstem+"して";}elseif(ending==="ぬ"||ending==="ぶ"||ending==="む"){returnstem+"んで";}}elseif(form==="た形"){if(ending==="う"||ending==="つ"||ending==="る"){returnstem+"った";}elseif(ending==="く"){returnstem+"いた";}elseif(ending==="ぐ"){returnstem+"いだ";}elseif(ending==="す"){returnstem+"した";}elseif(ending==="ぬ"||ending==="ぶ"||ending==="む"){returnstem+"んだ";}}// 其他形式的变形...returnstem+ending;// 默认返回字典形}// 使用示例console.log(conjugateGodanVerb("買","う","て形"));// "買って"console.log(conjugateGodanVerb("書","く","た形"));// "書いた"

这个函数展示了五段动词变形的基本逻辑：根据词尾（ending）和目标形式（form）选择相应的变形规则。虽然它确实能处理五段动词的变形，但这种命令式的if-else实现有一些明显的缺点：

- 首先，它只能在运行时检查并处理错误，无法在编译阶段提供语法正确性保证。
- 其次，这种函数难以与更大的语言结构系统集成，缺乏组合性。
- 最后，随着规则增加，嵌套的条件判断会导致代码复杂度急剧上升，维护困难。

相比之下，TypeScript 的类型系统提供了一种声明式的方法，能够在编译期捕获错误，并以更优雅、更具表达力的方式描述语言规则间的关系。通过将这些变形规则提升到类型级别，我们可以构建一个能静态验证日语语法正确性的系统，这正是下文中将要展示的方法。

## 使用类型编程实现日语动词变形

有了上面这些铺垫，我们现在可以开始构建日语动词变形的类型系统了。我们先从简单的例子开始：

// 定义简化的日语动词类型typeSimpleJapaneseVerb={type:"godan"|"ichidan";stem:string;ending:string;};// 定义变形形式typeJapaneseVerbForm="辞書形"|"て形"|"た形";// 简化的日语动词变形typeConjugateSimpleJapaneseVerb<VextendsSimpleJapaneseVerb,FormextendsJapaneseVerbForm>=Formextends"辞書形"?`${V["stem"]}${V["ending"]}`:Formextends"て形"?V["type"]extends"godan"?V["ending"]extends"う"?`${V["stem"]}って`:V["ending"]extends"く"?`${V["stem"]}いて`:`${V["stem"]}${V["ending"]}`:V["type"]extends"ichidan"?`${V["stem"]}て`:`${V["stem"]}${V["ending"]}`:Formextends"た形"?V["type"]extends"godan"?V["ending"]extends"う"?`${V["stem"]}った`:V["ending"]extends"く"?`${V["stem"]}いた`:`${V["stem"]}${V["ending"]}`:V["type"]extends"ichidan"?`${V["stem"]}た`:`${V["stem"]}${V["ending"]}`:`${V["stem"]}${V["ending"]}`;// 示例typeKauVerb={type:"godan";stem:"買";ending:"う"};typeKauTeForm=ConjugateSimpleJapaneseVerb<KauVerb,"て形">;// "買って"typeKauTaForm=ConjugateSimpleJapaneseVerb<KauVerb,"た形">;// "買った"typeTaberuVerb={type:"ichidan";stem:"食べ";ending:"る"};typeTaberuTeForm=ConjugateSimpleJapaneseVerb<TaberuVerb,"て形">;// "食べて"typeTaberuTaForm=ConjugateSimpleJapaneseVerb<TaberuVerb,"た形">;// "食べた"

现在，我们可以扩展这个模型，以更精确地反映日语动词的分类和变形规则。我们将使用接口继承来表示不同类型的动词及其特性：

// 动词基础接口interfaceVerb{dictionary:string;}// 五段动词interfaceGodanVerbextendsVerb{stem:string;ending:"う"|"く"|"ぐ"|"す"|"つ"|"ぬ"|"ぶ"|"む"|"る";}// 一段动词interfaceIchidanVerbextendsVerb{stem:string;ending:"る";}// 不规则动词interfaceIrregularVerbextendsVerb{dictionary:"する"|"来る";}// 定义变形形式typeConjugationForm="て形"|"た形"|"ない形"|"辞書形"|"命令形";// 更完整的日语动词变形系统typeConjugateVerb<TextendsVerb,FormextendsConjugationForm>=TextendsGodanVerb?GodanConjugation<T,Form>:TextendsIchidanVerb?IchidanConjugation<T,Form>:TextendsIrregularVerb?IrregularConjugation<T,Form>:never;// 示例type買う=GodanVerb&{stem:"買";ending:"う"};type買うて形=ConjugateVerb<買う,"て形">;// 買ってtype買うた形=ConjugateVerb<買う,"た形">;// 買ったtype食べる=IchidanVerb&{stem:"食べ";ending:"る"};type食べるて形=ConjugateVerb<食べる,"て形">;// 食べてtype食べるた形=ConjugateVerb<食べる,"た形">;// 食べた

这种方法展示了 TypeScript 类型系统的强大表达能力。通过使用泛型、条件类型和模板字符串类型，我们可以在编译时验证和转换日语动词，就像在运行时使用函数一样。

在接下来的部分中，我们将继续使用这些基本能力来模拟更复杂的日语句型结构，如疑问句和条件句。

## 疑问句体操：为什么要演奏春日影？

![](https://picx.zhimg.com/v2-a066c9867f40fd53ab43327319b37697_r.jpg)

日语中的疑问句通常由疑问词（如なんで、なぜ、どうして）和句尾的疑问助词（如の、か）构成。观察长崎爽世女士的名言「なんで春日影やったの」，我们可以识别出其结构组成：

- なんで（为什么）- 疑问副词
- 春日影（春日影）- 句子的宾语
- やった（演奏了）- 动词「やる」的过去式形式
- の - 表示疑问的助词

这种结构在日语中非常常见，我们可以抽象出一个通用模式：[疑问词] + [主题/宾语] + [动词变形] + [疑问助词]。为了在类型系统中表示这种模式，我们需要一个专门的泛型类型InterrogativePhrase。

// 按类别分类的疑问词typeWhyInterrogative="なぜ"|"なんで"|"どうして";typeWhenInterrogative="いつ";typeWhereInterrogative="どこ";typeWhoInterrogative="だれ"|"誰";typeWhatInterrogative="何"|"なに";typeHowInterrogative="どう"|"どうして";typeWhatKindInterrogative="どんな";typeWhichInterrogative="どれ";// 疑问副词类型typeInterrogativeAdverb=|WhyInterrogative|WhenInterrogative|WhereInterrogative|WhoInterrogative|WhatInterrogative|HowInterrogative|WhatKindInterrogative|WhichInterrogative;typeInterrogativePhrase<AdvextendsInterrogativeAdverb,Subjectextendsstring,VextendsVerb,VFormextendsConjugationForm,QPextendsParticle="か"// 疑问句一般默认以か为助词，可覆写>=`${Adv}${Subject}${ConjugateVerb<V,VForm>}${QP}`;

这个泛型类型可以接收疑问副词、主题（或宾语）、动词、动词形式和疑问助词作为参数，然后将它们按照日语语法规则组合成一个完整的疑问句类型。

现在，让我们看看如何使用这个类型系统来表示「なんで春日影やったの」这句话：

// 定义动词"やる"（做/演奏）typeやる=GodanVerb&{stem:"や";ending:"る"};// 定义专有名词"春日影"type春日影=ProperNoun<"春日影">;// 构建完整的疑问句typeなんで春日影やったの=InterrogativePhrase<WhyInterrogative,// 疑问词"なんで"（为什么）春日影,// 宾语"春日影"やる,// 动词"やる""た形",// 动词以过去式形式出现"の"// 疑问助词"の">;// 类型检查示例constvalidQuestion:なんで春日影やったの="なんで春日影やったの";// "为什么要演奏春日影？"

通过这种方式，TypeScript 的类型系统不仅可以表示日语疑问句的结构，还能在编译时验证句子的语法正确性。这展示了类型系统能如何帮助我们学习和掌握日语语法规则。

## 条件句体操：辛美尔的话也会这么做的

![](https://pic2.zhimg.com/v2-d87847ec67798ed227684a66b9659a31_r.jpg)

日语中的条件句表达假设或者条件关系，有多种表达方式，如なら、たら、れば、と等。在这些条件表达中，「なら」常用于表示「如果是...的话」，通常接在名词或名词短语之后。

让我们分析芙莉莲女士的名言「ヒンメルならそうした」这个条件句：

- ヒンメル - 人名「辛美尔」，作为条件的主体
- なら - 条件助词，表示「如果是...的话」
- そう - 指示副词，表示「那样」
- した - 动词"する"（做）的过去时态

这个句子的结构可以概括为：[条件主体] + [条件助词なら] + [结果]，其中结果部分是「そうした」（那样做了）。

为了在类型系统中表示这种结构，我们需要使用前面定义的几个关键类型：

// 条件助词类型typeConditionalParticle="なら"|"たら"|"れば"|"と";// 指示词类型（需要补充定义）typeDemonstrative="こう"|"そう"|"ああ"|"どう";// 条件句结构typeConditionalPhrase<Subjectextendsstring,CPextendsConditionalParticle,Resultextendsstring>=`${Subject}${CP}${Result}`;// 指示动作组合typeDemonstrativeAction<Demoextendsstring,VextendsVerb,FextendsConjugationForm="辞書形">=`${Demo}${ConjugateVerb<V,F>}`;

现在，让我们使用这些类型来表示「ヒンメルならそうした」：

// 定义专有名词"ヒンメル"typeヒンメル=ProperNoun<"ヒンメル">;// 定义する动词typeする=IrregularVerb&{dictionary:"する"};// 创建そうした模式（そうする的过去形）typeそうした=DemonstrativeAction<Demonstrative&"そう",する,"た形">;// 创建条件句"ヒンメルならそうした"typeヒンメルならそうした=ConditionalPhrase<ヒンメル,"なら",そうした>;// 类型检查示例constproperExample:ヒンメルならそうした="ヒンメルならそうした";// "辛美尔的话也会这么做的"// const wrongExample: ヒンメルならそうした = "ヒンメルならそうする"; // 错误：动词形式不匹配

这个例子展示了如何使用类型系统精确地表示日语条件句结构，并在编译时检查句子的语法正确性。

## 组合句体操：好时代，来临啦！

![](https://picx.zhimg.com/v2-f73e635dc8bdceb6804fd0aeb59957ad_r.jpg)

日语中常见的一种表达方式是通过逗号连接多个简短的语句，形成一个富有节奏感的组合句。这些短句各自独立，但组合起来传达一个连贯的意思。让我们分析田所浩二前辈的名言「いいよ、来いよ」，它由三个部分组成：

- いいよ - 由形容词「いい」（好）和强调助词「よ」组成
- 日语逗号，用于分隔短句
- 来いよ - 由动词「来る」（来）的命令形「来い」和强调助词「よ」组成

这个句子结构可以概括为：[短句1]、[短句2]，其中每个短句都可以有不同的语法结构。

为了在类型系统中表示这种组合句结构，我们可以使用以下类型：

// 带助词的短语typePhraseWithParticle<Phraseextendsstring,PextendsParticle>=`${Phrase}${P}`;// 通过日语逗号连接的短语typeConnectedPhrases<P1extendsstring,P2extendsstring>=`${P1}、${P2}`;

而对于形容词和动词的变形，只需使用前面定义的变形系统即可：

// 定义い形容词"いい"（好的），注意它是不规则变形typeいい=IAdjective&{stem:"い";ending:"い";irregular:true};typeいいよ=PhraseWithParticle<ConjugateAdjective<いい,"基本形">,"よ">;// 定义不规则动词"来る"（来）type来る=IrregularVerb&{dictionary:"来る"};type来いよ=PhraseWithParticle<ConjugateVerb<来る,"命令形">,"よ">;// 连接两个短句 -> "いいよ、来いよ"typeいいよ来いよ=ConnectedPhrases<いいよ,来いよ>;// 类型检查示例constcorrectPhrase1:いいよ="いいよ";// "真好啊！"constcorrectPhrase2:来いよ="来いよ";// "快来吧！"constcorrectFullPhrase:いいよ来いよ="いいよ、来いよ";// "好时代，来临啦！"// const incorrectPhrase: いいよ来いよ = "いいよ、くるよ"; // 错误：动词形式不匹配

这样，我们就可以用类型系统表示出由多个独立短句组成的组合句了。

## 总结

本文通过 TypeScript 的高级类型系统探索了日语语法结构。我们从基础的动词变形开始，逐步构建了能够表示疑问句、条件句和组合句的类型系统。

TypeScript 的类型系统和日语语法之间存在着有趣的平行关系。两者都是严格的形式系统，有着明确的规则和结构。TypeScript 的条件类型、模板字符串类型和类型推断机制非常适合模拟自然语言的变形规则和组合逻辑。

传统上，这种用复杂类型系统来标注自然语言的代码编写成本极高，基本只能用来炫技。然而，现在的情况已经发生了根本性的变化——只要类型系统设计合理，LLM 已经可以为几乎任何自然语言准确地标注出 TypeScript 类型。这意味着普通人哪怕不懂 TypeScript，也能在学习语言时获得来自 LLM 的强类型提示。更有趣的是，如果你会写 TypeScript，你实际上就可以解读几乎任何一门自然语言的语法！

值得澄清的是，这个项目的范围严格限定在单向地通过 TypeScript 类型系统标注句子，而不涉及将任意字符串 parse 回语法类型——那是 LLM 更擅长的工作。所有纸质语言教材中的例句都是弱类型的，而这种方法可以为学习者提供强类型的指导。

这种借助 TypeScript 类型系统帮助学习语言的方法论，几乎可以推广到所有的自然语言。基于这一理念，我在 GitHub 上建立了 TypedGrammar 组织。目前的日语类型系统代码已经开源在[github.com/typedgrammar/typed-japanese](https://link.zhihu.com/?target=https%3A//githun.com/typedgrammar/typed-japanese)。虽然目前还只是一个技术原型，但要完善到对普通人的语言学习产生实际价值，基本是一个考验耐心的 scalable 的工作。希望后续能一边实践一边分享，与感兴趣的朋友们共同学习进步。后续希望能持续分享相关进展，欢迎感兴趣的读者关注支持，一同探索类型编程与语言学习的交叉领域。

[Typed Japanese](https://link.zhihu.com/?target=https%3A//github.com/doodlewind/typed-japanese)


---

# 按提问修改规范，如何防止编辑日志被删除？ 恶魔梨梨酱OvO

**Author:** 恶魔梨梨酱OvO  
**Bio:** 6723，45！  
**Avatar:** ![](https://picx.zhimg.com/v2-e36701cf807f3f7097225339d2ad0c75_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/5a8c98dff1c891c91234aa3242de58bc  
**Published:** 2025.06.05 17:18:41  
**Updated:** 2025.06.05 17:29:46  
**Question:** https://www.zhihu.com/question/1893051156172887788  
**Question Created:** 2025.04.08 21:22:46  
**Question Updated:** 2025.08.31 08:25:33  
**Votes:** 1002  
**Comments:** 105  
**Type:** answer  

不付费就直接看的破解很难，但想遏制二传不可能

国内几乎没有上widevine/playready的，因为支持的设备太少

没有EME扩展情况下，常规的MSE播放器我早就把通解都告诉过大家了

MSE播放器的实现无非就是把视频比特流append到buffer里面去

js的动态类型非常方便hook，所以直接把指定buffer的append全hook了复制一份比特流，恭喜你已经通杀所有无EME网站的视频下载了

在document-head阶段hook，网页本身的脚本都还没执行呢，没有任何可靠的办法检测是否被hook了

就算有也不难过，三大浏览器内核全是开源的想怎么改都行

反正国内不可能普及EME的，谷歌微软苹果三个大手在国内全是俗手，BAT巨头全是死道友不死贫道的态度，根本不存在行业大一统联盟形成的可能性，反而为dump内容提供了先天的优势

所以只要有一个人看到了就有办法保存就能分享出来一传十十传百




还是那句老话，数字商品最大的特点就是复制成本极低

所以我的态度一直都是DRM无用，数字商品要么薄利多销要么割韭菜

你又不薄利多销又不割韭菜，在DRM上投钱根本没意义

Netflix能赚钱从来不是靠它用了widevine，widevine现在的dump随着hdcp被橄榄也早就成熟了，早就是上线不到一周就4khdr资源满天飞了

Netflix唯一能赚钱的原因就是，你每个月花那么十几块钱，不用折腾bt，不用等下载，不用折腾本地播放器，打开电视按两下遥控就能看

当你的价格低于折腾所需时间对应的中位收入后，你就一定能赚钱

因为那时候除了极少数真正的技术狂热派以外，没人愿意投入大量的时间去做这种入不敷出的事情，而且技术狂热派的钱你本来就赚不到







说难听点，虽然我本人极度厌恶嗯造用户设备资源的行为，但pcdn甚至是国内流媒体平台近些年的创新里唯一能把商业模型跑通的了

至少pcdn真的做到了避免用户投入更多（消耗的是用户现有资源）的情况下降低了成本

其他什么限制登录设备，限制投屏，还有什么超前点播之类，全都是商业模型都跑不通的，以至于让我怀疑某些产品经理是不是友商派来的卧底


---

# 如何评价 Vue.js 纪录片？ 王译锋

**Author:** 王译锋  
**Bio:** aka 雪碧 | doodlewind@github  
**Avatar:** ![](https://pica.zhimg.com/v2-c93ccdb4ad4b457e97646100ea6add94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c0e2a6c332e573b37d6f5387074ead98  
**Published:** 2020.06.01 01:40:49  
**Updated:** 2020.06.01 10:52:02  
**Question:** https://www.zhihu.com/question/398425577  
**Question Created:** 2020.05.30 19:34:17  
**Question Updated:** 2020.05.30 19:34:17  
**Votes:** 4997  
**Comments:** 216  
**Type:** answer  

这问题是我提的，我很惊讶于为什么这么有价值的片子在国内社区却几乎没人讨论。在我看来，这明明才是真正值得「那些口口声声一代不如一代的人」看看的作品。我们的后浪里不只是有 B 站上烧钱的富二代 UP 主和快手上梦想每天挣 300 块的打工小哥，还有 G 站上做开源的开发者们在默默地搞「世界人民大团结万岁」呢！

> 所谓 G 站，即程序员用的 GitHub Site，简称 GHS。像 Vue 就是世界顶级的 GHS 作品。

这片子本身结构挺简单的。毕竟拍纪录片嘛，大致就是依次采访几个还在世的相关人士（咦）。下面带大家过一遍剧情：

全片开始！哇新泽西大 house，大家入关后的梦想：

![](https://picx.zhimg.com/v2-c426241434da16fa5bc59e13eacc40c2_r.jpg?source=2c26e567)

主角[@尤雨溪](https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f)登场：

![](https://picx.zhimg.com/v2-723b1bf8336d85e14c8ce1f105faf370_r.jpg?source=2c26e567)

这个发际线似乎正在变高的男人，开始讲起了自己接触 JavaScript 的缘由，亦即研究生在 Parsons 学 Design & Technology 的故事：

![](https://picx.zhimg.com/v2-d172ca2786af52983bd5b666e7b4f0c1_r.jpg?source=2c26e567)

不难找到片中页面的链接在这：[MFA Design and Technology](https://link.zhihu.com/?target=https%3A//www.newschool.edu/parsons/mfa-design-technology/)。这个学校属于纽约的 The New School，培养出了许多著名时尚设计师。设计品味结合上 STEM 技术，这课程设置对前端来说算是非常「科班出身」了吧。

在学生时代，尤大的作品（用 Web 技术仿 iOS 手势操作的 Clear App Demo）就引发了 Google 的注意，直接被 Google Creative Lab 点名招走了。

> 感觉这里还可以插播一段，当年阿里 HR 以「不好用」为由英明地把尤大拒了。对于 Vue 的诞生，阿里 HR 无疑作出了不可磨灭的贡献。

接下来镜头一转，带你纽约圣地巡礼，跟你说这就是哥梦想的起点：

![](https://picx.zhimg.com/v2-f6acd64189a8c6631d784e8d595c2517_r.jpg?source=2c26e567)

那么 Google Creative Lab 里头都在干啥呢？他们在做各种用技术实现大胆创意的实验。比如这个 Image Cube by Evan You：

![](https://pica.zhimg.com/v2-6b7243915bf251582a77e959b997883b_r.jpg?source=2c26e567)

片中没有继续点开链接。我替大家体验了下，是个支持更换各面图案的魔方。这个系列的入口是这个[Chrome Cube Lab](https://link.zhihu.com/?target=https%3A//www.chrome.com/cubelab%23experiment)，Demo 玩起来像这样：

![](https://picx.zhimg.com/v2-21375242cf5673bab480c8ea153c453f_r.jpg?source=2c26e567)

其实这玩意我也会啊！只是尤大是拿 CSS3 实现的，我是拿 WebGL 实现的。顺便还有篇教程欢迎体验：[Web 魔方模拟器的设计与实现](https://zhuanlan.zhihu.com/p/43049095)。请问 Google 还缺人吗？

有了这些铺垫，下面讲的就是 Vue 诞生的缘由了。这类工作经常需要富交互的部分。但当时的主流前端库里，Backbone 只提供了应用的骨架，无法为 View 层提供足够的支持。而 Angular 虽然提供了数据绑定能力，但侵入性较强，也不太适用于这类非常强调交互的应用。于是发明 Vue 的灵感来了，也就是把 DOM 和 JavaScript 对象同步起来这样子吧：

![](https://pica.zhimg.com/v2-44fc3e74fdaec20a7e80acafd89dc9b8_r.jpg?source=2c26e567)

然后 Vue 就被吭哧吭哧写出来啦。它的第一个 commit 是 2013 年 7 月 27 日提交的，最早想叫 Seed.js 但名字在 NPM 上被占了。下次遇到谁说自己精通 Vue 的，你就问他 Vue 第一次 commit 的哈希值是多少：

![](https://picx.zhimg.com/v2-826dc4c2419d580df8d8a039caefe0ea_r.jpg?source=2c26e567)

这个时期的 Vue 虽然有一小部分人试用，但也纯粹是业余项目，维护起来的心态跟音乐爱好者自己出专辑类似。不过即便没有大红大紫，这也已经足够无需刷题面试换一份 Meteor 的新工作了——开源主义好，开源主义好，开源主义拿到 offer 机会高：

![](https://picx.zhimg.com/v2-10218671704bd839c84e7f1e2d685612_r.jpg?source=2c26e567)

至于离开 Google 的理由嘛，尤大表示大致就是光给 Google 高管做一些「不知道什么时候能成真」的 Demo 不够意思吧。

接下来在 Meteor，Vue 继续被当作个人兴趣项目业余维护，但到 2014 年转机出现了。著名 PHP 框架 Laravel 的作者 Taylor Otwell 某天发了条推特，大意是「React 很复杂，我在学 Vue，感觉不错」。这下有了网红带货，Vue 终于开始进入大众视野了。下面就是采访 Taylor 本人的商业互吹时间：

![](https://pica.zhimg.com/v2-a3013d9423f4dfa39071c2fcd72d1ca1_r.jpg?source=2c26e567)

Taylor 表示当时他想给新的 Laravel Spark 项目挑个前端框架，觉得当时引入那些需要构建工具的产品很麻烦，不像 Vue 直接用记事本就能开发，于是就这么愉快地决定用 Vue 了。这里他指的应该是 Vue 一直以来直接使用 HTML 模板即可在浏览器中「开箱即用」的能力。虽然一直有一些 JSX 爱好者在批评 Template，但这更是 Vue 的「progressive」渐进性设计准则的重要体现之一，对吸纳新手和业余用户群来说其实相当重要。现在 Laravel Spark 已经顺利盈利，人家当然乐意给你站台啦。

在这个阶段，Vue 也面临了一（hen）些（duo）质疑，大概就是「这框架还没 1.0 不靠谱啊，才一个人维护指不定什么时候跑路啊」之类的陈词滥调吧。对此现在就是打脸时间——「**I want to prove these guys wrong**」。爽文就是要这么写，谁还没点小脾气啊：

![](https://picx.zhimg.com/v2-d4be33c5f4fea2fb706cd64a8c6d5796_r.jpg?source=2c26e567)

> 综艺节目里此处应有泪流满面效果，再配合一曲悠扬的二胡煽情 BGM，目测马上收获一批前端迷妹。这时屏幕上再应景地浮现出一个赞助二维码……

打天下的单人秀到此就差不多了，接下来是开源的「世界人民大团结」宣传时间。镜头又一转，我们来到了德国 Mannheim：

![](https://picx.zhimg.com/v2-b8d2e8e3f47ad7c7d6e5f704e034f110_r.jpg?source=2c26e567)

在大 house 里，Vue core team 的[Thorsten Lünborg](https://link.zhihu.com/?target=https%3A//github.com/LinusBorg)开始讲起了自己和 Vue 的故事：

![](https://pic1.zhimg.com/v2-30810bc59cd2940dec202d35867e252c_r.jpg?source=2c26e567)

这故事其实也挺简单的，大意就是 Vue 1.0 出来的时候，核心团队人还很稀缺，官方论坛疏于打理。于是 Thorsten 来论坛上回答了不少问题，做了些外围的周边工作，这些都是他业余完全志愿的活动而已。就这样过了三四个月，某天一个自称 Evan 的神秘人出现了，邀请他加入了一个 Slack 群……

今天 Thorsten 已经是 Vue 生态里多个库的维护者，他在采访里表达了一个重点，**那就是框架并不只是「代码 + 文档」这么简单，更需要人的维护、支持和互动**。这也是很多人在对「开源」的理解里所忽略的。

从这个「框架是给人用的」主题出发，我们就要开始讨论 Vue 框架能成功的理由了。镜头再一转，切换到了美国中部的丹佛：

![](https://picx.zhimg.com/v2-ded2d8147efdac82fb579d8739a515c7_r.jpg?source=2c26e567)

还是大 house，这次接受采访的是 YouTube 技术博主 Scott Tolinski：

![](https://pic1.zhimg.com/v2-5ab192d7bae1d453ab3c190c823222ee_r.jpg?source=2c26e567)

Scott 是对框架「身经百战，见得多了」的老主播了，他探讨的是 Vue 在框架市场上获得成功的缘由。这个叙述简单概括说来是这样的：当时的老大哥 Angular 在从 1 到 2 的时候出现了「shocking different」级别的变化，而 React 对于习惯了 Angular 式框架的用户来说，其理念又太过于新潮。这时候，Vue 兼有更低更友好的入门门槛，又能在组件化支撑中大规模项目时表现良好。于是它就这样填补了市场空白，吸引了不少用户。

> 又是 progressive 理念的胜利啊，敲黑板。

时间线推进到这里时，Vue 已经算是颇有影响力的框架了。这时候剧情回到了对我们主角的采访上。艰难的抉择出现了：要不要全职做开源呢？

![](https://picx.zhimg.com/v2-2f18cd77b56804eda676fe8349f79007_r.jpg?source=2c26e567)

这个决定是怎么做出的呢？尤大表示当时也没有什么别的，大概三件事：

- 建立 Patreon 账号，为支持 Vue 的开发而募款，还确实搞到钱了嘿嘿嘿。
- 向 Strikingly 的朋友申请到了赞助，这样各项加起来就匹配得上当前收入了。
- 权衡了在 Meteor 工作和开发 Vue 的利弊，结果显然是给自己干活爽啊。

好了，哥决定放弃 955，成为偶像下海出道了（咦）

这样 Vue 就进入全职维护状态了，搞的事情自然可以更多。接下就采访了一位之后加入的妹子，Sarah Drasner：

![](https://picx.zhimg.com/v2-d720d9793eda645eed2f7227b2c68224_r.jpg?source=2c26e567)

Sarah 在 CSS Tricks 上写了一系列长篇的教学文章（[Learning Vue](https://link.zhihu.com/?target=https%3A//css-tricks.com/guides/vue/)），这是她贡献 Vue 社区的契机：

![](https://picx.zhimg.com/v2-713b73b1ef7d306f8b0a8a7bfff70c9c_r.jpg?source=2c26e567)

在此之后，她受邀加入 Vue core team，负责 Cookbook 项目，以及团队内与文档相关的会议。受到全职维护的项目，自然专业度就不一样了嘛。

但即便是 CSS Tricks 这样专业的网站，在中国也是有语言门槛的。下面开始探讨的就是 Vue 与中国的关系了：

![](https://picx.zhimg.com/v2-cac7c7bd20ef5ebf6fe9f985bda34b31_r.jpg?source=2c26e567)

接下来给了个 Vue conf 上面尤大演讲的镜头：

![](https://picx.zhimg.com/v2-5aa91073e9553678753501ecd00ca1b0_r.jpg?source=2c26e567)

然后镜头一晃拍起了台下观众。前排大佬好像很多，我只知道玩手机的那位重量级人物目测是[@贺师俊](https://www.zhihu.com/people/3ec3b166992a5a90a1083945d2490d38)老师：

![](https://pica.zhimg.com/v2-bd14da8aaab2c214cbc72f3e4b7b5e87_r.jpg?source=2c26e567)

在镜头切换之间，采访旁白里探讨起了 Vue 在中国推广时的关键因素：首先，英文技术项目的文档一般需要经过翻译，才方便在国内普及。这时候诸如 binding / reference / view model 等新的技术术语，往往会有些难以理解。但这时尤大作为母语使用者自己写的文档，在概念上就更为流畅，也更容易做一些方便理解的 rephrasing 改动：

![](https://picx.zhimg.com/v2-e9be16e154c860acbd13ab77c2aaee17_r.jpg?source=2c26e567)

然后[@知三乎四](https://www.zhihu.com/people/afbd3234a10915bb3436d34e8be0fde9)老师出场助攻，他讲起英语来还是很自信的：

![](https://picx.zhimg.com/v2-baa312de4016c31db0b5bb6061577998_r.jpg?source=2c26e567)

勾股老师讲的是阿里接触 Vue 的渊源。一方面是他们的技术团队希望保证在中国参差不齐的网络环境下页面的可用性，一方面又希望框架能支持得了复杂业务。他偶然发现了 Vue，发现这个框架很契合他们的需求，于是邀请尤大去阿里做了个分享：

![](https://picx.zhimg.com/v2-481a4e1a1ccd0f852f14a85e677521df_r.jpg?source=2c26e567)

这里顺带讨论了一把中文社区的推广，知乎也被 cue 到了。不过 Zhihu 这个词被字幕和谐成 Chinese platform 啦（谁叫你整天和谐别人）：

![](https://pic1.zhimg.com/v2-9acaa7f4350e11e1c20bd46cefdfaa3e_r.jpg?source=2c26e567)

接下来出镜的还有[@顾轶灵](https://www.zhihu.com/people/596c0a5fdd9b36cea06bac348d418824)老师：

![](https://picx.zhimg.com/v2-a5552699e90d7128a29b8b0c8b383b99_r.jpg?source=2c26e567)

以及一位低调的[@米粽粽粽](https://www.zhihu.com/people/myst729)老师：

![](https://picx.zhimg.com/v2-d86b5f9fcbd68c6a326bfd7df9f1aded_r.jpg?source=2c26e567)

一下来了这么多国服高端玩家，大家开始用英语探讨起了国内社区对 Vue 和尤大的态度。大概这么几点：

- Vue 有非常高质量的中文文档，国内的生态和社区都相当完善。
- 很多人不是因为尤大是中国人才接触的 Vue，而是在接触 Vue 后惊讶地发现这居然是国人的作品。
- 当国人发现「我也能成为这其中的一部分」并参与进 Vue 社区的时候，这无形中强化了一种心理上与「自己人」做的项目更亲近的联系。
- 大家在国内是普遍会把尤大当「hero」的。毕竟世界范围上来自中国的顶级开发者并不多，而他确实在开源社区有着「leader」级的影响力。我们有很多的开发者，但是却很缺一位这样的「rock star」。

> 另外，这部片子的原班人马还制作了[The Rise of Open Source Communities in China](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DRFjIBM0TR7U)短片，以外部视角探讨了中国的开源现状。其中尤大和[@题叶](https://www.zhihu.com/people/790dccce26904cdcd11b0fad3bac37b7)老师也有出镜，值得一看。

到这里全片就快结束了。前面出镜的各位开发者们做了一些关于开源「驱动力」的分享，大意大致是这样的：今天的 Vue 并非完全由「仁慈独裁者」控制。既有尤大一个人能 hold 得住全局，core team 内部也有更多的团队合作。这和巨头公司的「委员会设计」不同，因为你并非服务于某个商业目标，也不是在做「别人的」项目，而是有更多机会提出并注入自己的想法。这种驱动力就像追求 Source of Truth 一样，是由社区自发探索出来的。而见证它的成长，自然也相当振奋人心。创造技术历史的说到底并不是商业巨头，而是富有想法、富有创造力的人们——

The company’s not making the rules, people are.

最后就是尤大的自述了。我猜这些话按他现在知乎的人设，目测是挺不好意思自己用中文写出来的（估计这个回答他都不好意思点赞）。这里就替他 & 替大家搬运回来吧：

> 我下定决心离开了朝九晚五的岗位，做着一件基本能让我热情投入的工作，这确实挺让我感到自豪的。有时候我会看看统计数据，比如看下我们有多少用户，多少下载量之类的。但要说什么最能给我对工作的某种成就感，或者说满足感的话，那还是当我看到（自己所影响的）人的时候。尤其是在会议结束以后，很多人会来找我。比如大家经常会跟我握手，说「谢谢 Evan 你做的东西，它真的让我的生活方便了很多」这样子。这些时候我都会感觉到，这就是我做 Vue 的动力。我把它做了出来，我把它分享给了大家，希望它能让大家生活更方便。然后还真的会有人来单独找我，会有人来感谢我所做到的事情。于是整个循环就这样连通起来了。

全片终，完结撒花～

所以，大家看到了现代的「开源」是怎样运行的吗？凭着热情与创造力，世界上素昧平生的几个人可以自发地汇聚到一起，打造出举足轻重的技术产品，切实地惠及许多人。没有什么比这更加「同一个世界，同一个梦想」了。

而且，我个人之所以愿意把这部纪录片不遗余力地「搬运」过来，其实更在于它充分地展示了「**中国程序员可以做到什么**」——我们完全可以具备国际视野，在技术社区里谈笑风生。大家都能加入这个大舞台，大门是向所有人敞开的。对每位有志于「实实在在地做到点什么」并改善自身生活的同学们，我相信在这个开源加持下的计算机相关行业里，大家仍然是能找到非常多机会的。当然，在这个分化与对立日趋激烈的时代，这样的机会也已经越来越珍贵了。

今天，如果你看富二代们在翼装飞行，在帆船深潜，在豪车竞速，你羡慕吗？如果没有背景，你该怎样加入他们，成为他们，超越他们？

洗洗早点睡，祝你做个好梦。

但还是今天，如果你看开源作者们在挥洒创意，在签名售书，在演讲分享，你羡慕吗？如果没有背景，你该怎样加入他们，成为他们，超越他们？

来啊，只要能上网就行，欢迎进来社区一起玩！回头我就试试给 Vue 3.0 弄个魔方渲染器，帮它不忘初心一下。

但说到不忘初心，我更想到的是三十多年前，北京向 CERN 发出的中国第一封电子邮件。那是互联网第一次听到中国的声音。我们常说这封邮件一语成谶。但它的本意，不正是我们昂首挺胸拥抱世界的豪言壮志吗：

> Across the Great Wall we can reach every corner in the world.

那个年代还没有 HTTP，没有浏览器，没有 JavaScript。

而今天，[@尤雨溪](https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f)的 Vue.js 已经成为了 Web 前端技术领域世界公认的 de facto 级框架之一，在互联网技术史上留下了国人的痕迹。

知乎喜欢讲入关，那么我们到底该怎么「入关」呢？




**越过长城，走向世界吧。**


---

# 你为什么选择React而不选择Vue？ Snowflyt

**Author:** Snowflyt  
**Bio:** 24 岁，学生  
**Avatar:** ![](https://picx.zhimg.com/v2-d72d00a6b84b6e3ac5befc958ec12145_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7b0ef8d0ab32d664a36fd98e8f377302  
**Published:** 2024.04.04 01:39:37  
**Updated:** 2024.04.04 01:41:40  
**Question:** https://www.zhihu.com/question/294210442  
**Question Created:** 2018.09.11 14:31:13  
**Question Updated:** 2018.11.01 18:55:09  
**Votes:** 385  
**Comments:** 33  
**Type:** answer  

很老的问题了，2024 年我站在自己的角度谈谈看法吧。（废话警告）

不算很久之前（大概是 2020-2021 年），当我初次在大学中接触前端领域时，周围的人都说想进大厂就学 React，并且互联网上也到处都是解析 React 函数式思想的文章——当时 React Hooks 推出才一两年，仍有大量项目基于 class component，而 Hooks 带来的更“纯粹”的“函数式编程”思想，在当时显得颇为独特与深奥。

显然，这只是前端娱乐圈现状的又一个缩影，在那会儿是“Everyone’s talking about React Hooks and Functional Programming”，前两年是“Everyone’s talking about signals”，今年又是“Everyone’s talking about Drizzle ORM, shadcn/ui, Bun, etc.”. 前端是我见过最有活力的社区，每天都热衷于造个全新的 next-gen game changing library——在许多人眼中，这看上去颇有些滑稽，我却不觉得这是什么坏事，这意味着更多人在“having fun”，而不仅仅是“coding for living”，这对社区的发展总是良性的。

话说回来。当时的 React 用户大多有种隐隐的优越感，毕竟自己在用一个更灵活和更加“功能强大”的框架，且 React 被认为“需要更好的基础才能驾驭”（事实的确如此，至少相比起 Vue 2，但究竟是不是好事就没人知道了），在做同一件事上也有非常多不同的选择，无论是路由、状态管理还是其他什么（相比之下，Vue 团队则把这些常见需求所需的库都一起开发了），挑得人眼花缭乱，UI 组件库也有远多于 Vue 和 Angular 的选择。

React 用户的“高傲”一定程度上是有依据的——这很大程度上要归功于 React 自身的**流行度**。无论你是否接受，React 实际上已经“代表”了 UI 框架（当然，“框架”这个词到底适不适合形容 React 有待考量，但咱们现在也找不到一个更好的词来形容 React、Vue、Angular、Svelte、Solid 这些东西），并且这些年里也成为了欧美前端开发的事实标准。这种“到处都是 React”的流行度是一旦接触英文前端社区就能扑面而来感受到的事情，大概习惯在 Google 上常年拿英文搜问题的人没几个会反驳。

如果你关注那些与 UI 框架相关的新轮子，它们几乎无一例外都优先考虑支持 React（像是 Tanstack 全家桶），甚至限于某个特定的 React 元框架（如 NextAuth.js，如今它成为了 Auth.js），然后它们才考虑逐渐从一个“React 特定”的库变成适用于各个 UI 框架的通用库。这种流行度的确为 React 带来了无与伦比的“**繁荣**”生态——自然也带来了它们质量参差不齐的问题，庞大的数量总是带来更难控制的质量，这并不令人意外。

React 的流行大概是许多偶然因素共同造成的，如今哪个因素发挥了最主要的作用或许已经不得而知了。自然，React 的流行也造成了组件库的多样性，一个国内几乎没什么声音但在英文社区具有相当知名度的新兴组件库 shadcn/ui 就是个 React 组件库，并且大概只考虑官方支持 React，连 Preact 也不打算支持（尽管社区显然可以并且已经开发了针对不同 UI 框架如 Svelte 和 Vue 的非官方 Port）。shadcn/ui 的大体思路是它不作为一个“真正的组件库”，而是提供一个代码生成器，帮助你把组件代码复制到你的项目里，同时绑定 Tailwind CSS. 这种生成的组件提供了高度自定义性——其实不算个很新鲜的思路，但对于快速开发项目相当好用，可以认为是 Tailwind CSS 思路上的进一步扩展，在组件的灵活性和易用性上达成了一个神奇的平衡。

谈到 shadcn/ui 其实只是想举个更具体的例子说明 React 在事实上的流行导致许多新尝试与新技术都优先从 React 开始——其实一个这样的库是很适合一开始就作为通用组件库而不是作为 React-only 组件库开发的（尽管事实上存在不少适用于其他 UI 框架的 Unofficial port）。很大程度上，React 已经成为了一种“**惯性**”，而各种库尝试兼容其他 UI 框架以变成一个“framework-agnostic”的库在某种程度上可能变成了一种“正确”或者纯粹出于造轮子的喜好——如果一个组件库（当然也包括其他非组件库）支持同时包括 React 在内的多个 UI 框架，那你最好不要期待它在其他 UI 框架上的表现，大概率是处于缺胳膊少腿并且没几个人提交 BUG 的状态——支持得好是惊喜，支持不好是常态。

这种“**React 惯性**”真的是正确的吗？前端圈向来很擅长“反思”什么已有的流行的东西并推出一个又一个 next-gen lib 成为“game changer”，React 这边也不例外。

一个批评在于 React Hooks 需要手动传入 deps 带来的**样板代码**问题——React 社区甚至开发了 ESLint 插件来提示你在 deps 中把所有依赖手动加上，可既然 ESLint 都能告诉我要在 deps 中写什么东西，为什么 React 自己不能把依赖给我自动加上？这个问题在过去似乎非常 Trivial——因为useState或其他同类东西拿到的是一个值，在运行时代码中直接跟踪一个值以实现响应性是不可能的，至少得需要个编译器才能完成这项跟踪工作。理所当然的，后来人们发觉让编译器完成这项工作不是唯一的解决方案，也可以干脆换一种写法，与其直接使用值，不如使用一个 Getter，而 Getter 自然就可以在运行时直接被跟踪以实现响应性，而不需要编译器参与，无论 Vue 的.value还是 Solid 直接返回 Getter 的做法都只是这种想法的一个实现，这被称为**Signals**——这其实也只是新瓶装旧酒，Vue 3 一开始就是这个思路，可 Signals 这个说法要到前两年才炒起来。

React 的另一个问题在于组件的**生命周期**初看起来并不那么直观——在 React 中（至少 Hooks 之后），组件 (Component) 只是一个返回组件实例 (Element) 的工厂函数，函数式组件每次渲染时都会从头到尾跑一遍以得到新元素，而不是直觉上的“函数式组件是定义组件的代码，仅在创建实例时运行一次以初始化”——事实上后来 Solid 就是这么做的。这也导致了很多新手一不留神就往组件定义里塞了一些耗时操作导致性能问题，并且也导致创建高性能 React 组件需要时刻留意耗时操作并用useMemo之类的东西将它们惰性化，这导致了更严重的样板代码问题。

还有其他同类的像需要手动memo的问题，也一直以来被诟病为“React 创造的问题”。也有一些较小的点，比如传递ref的复杂性。有时人们会半开玩笑地说“React 先故意把框架做得很烂，然后引入一些小改进解决这些本就不该存在的问题让大家感觉 React 团队又实现了什么巨大进步”——说实话我越来越觉得真是这么回事。

抛开写法上的缺陷，再谈谈一个避不开的的问题——**生态**。React 显然是前端 UI 框架中生态最“繁荣”的一个，这一方面要归功于 React 自身的流行度，另一方面则要归功于 React 团队仅做核心而不参与周边生态开发的做法。这导致 React 生态中仅状态管理和路由两块就有数不清的社区实现，状态管理更是难绷到让 Redux 这么个完全不好用的库统治了许多年——直到以一种不能更简单的方式实现的 Zustand 流行起来大家才发现原来 Redux 这么难用不是因为 React 状态管理本就复杂（在很长一段时间以来这还是个具备统治力的观点），而只是因为 Redux 过度封装把事情搞得太过复杂。

自然的，也产生了许多观点为 React 辩护，以解释“为什么 React 这么烂大公司还是选择它”。我记得前几年有个说法被很多人提及——大公司需要对页面每一次渲染细粒度控制，并且宁愿投入更多人力在这种“开手动档”的事情上，而不是依赖于框架自动管理渲染时机，React 就提供了这种灵活性。这可能（值得怀疑地）部分解释了大公司们采用 React 的原因，但没有解释为什么如今数之不清的小公司仍优先选择 React.

在我的观点中这更多还是源于一种**历史惯性**，并且 React 还没有比其他 UI 框架“明显糟糕”到不能接受的程度，因此大多数公司没有换掉 React 想法，而这造就了 React 生态的继续繁荣——和国内公司习惯于跟着阿里用 MyBatis 比较类似，大公司用什么我就跟着用，只是因为前面的人帮我把坑趟过了，有比较齐全的周边配套代码和大厂退下来熟悉这套技术的员工，小公司没必要选择自己用国内环境里不常用的生态，也是图一个安稳。

在开头，我反复强调了 React 生态有多繁荣，似乎在吹 React，刚才又批评了 React 的一些问题，似乎把它贬得一无是处——其实我只是相对客观地评论着 React，也许带了些主观偏见，但大体应当并不偏激。那么 React 难道没有优点吗？显然也不是的。

不可否认的是，React 的确为前端带来了一些“新”的东西。在 Hooks 之前，“函数式编程”这个如今被说烂了的概念在大多数前端人眼里还只是个“可望而不可及”的东西，它从象牙塔中带来了一些似乎有用的东西，但若你想从一些“先行者”那里了解些更多的东西，则会被他们张口就是 Monad 的热情劝退——或许他们也不是想故意把别人劝退，只是已经习惯了这些外人看来可能颇为晦涩的概念。React 以一种在现在许多人看来颇有些半吊子的方式，将函数式编程的一些基本概念以颇有些炒作的形式带到了大众的眼中（得益于 React 自身的流行度，不管官方是不是有意炒作，React 发布任何一个新功能后总是会看起来像是炒作了一番）——许多人第一次认识到，原来在代码里几乎全用const和只用 Immutable 对象也可以很好地开发应用，区分副作用也可以很好地控制难以预测事件的发生。这些对“函数式编程”的普及或许太过浅显到以至于让许多人觉得“不达本质”而不屑一顾，但至少起到了很不错的引导作用，让许多人第一次知道还存在另一种写代码的方式。

React 这个每次渲染都跑一遍组件定义函数的做法也不是只有坏处。这其实很大程度上让 Hooks 的封装变得简单和透明了，除了useState那几个有限的内置 Hooks，自己封装 Hooks 其实没太多额外的黑魔法在里头，就只是简单的把一段代码替换成一个函数以方便复用，仅此而已。这也带来了其他许多事情的简单性，如子组件只需通过一个没有任何 Magic 的.children就可以直接传递，而 Solid 和 Vue 等都需要额外的手段（childrenhelper function 或<slot>）来高效处理子组件的传递问题。React 的props也不存在解构丢失响应性的问题——每次渲染时组件都会重跑一遍，会有新的不同的值传进来。某种意义上，React 的这个看似别扭的做法维持了一种统一的简单性和一致性，使框架没有在背后做太多难以预测的“魔法”——这又回到了那个老生常谈的问题，框架在背后做了太多工作到底是简化了用户的心智负担还是实质上反而加重了心智负担？框架要做到什么程度才能达到这种心智负担的平衡？这就是个没有答案的见仁见智的问题了。

然后要谈到 React 的另一个特点——JSX，或者说特定于 React 的 JSX. React 在 JSX 上的做法基本就是直接将其一比一与运行时代码替换，编译器在其中只做了一些简单的工作——相比之下，Vue、Svelte 等基于模板方案的 UI 框架则大量依赖编译器实现较复杂的转换工作，尤其是在处理响应性上，而 Solid 尽管使用了 JSX，其编译器仍旧在背后做了不少工作，而不是像 React JSX 基本上只做代码替换。React 这种处理 JSX 的方案其实天生使其和 TS 有很不错的相性，并且带来了 React 最被广泛认同的特性——灵活性。

如果你用过一些 React 组件库，会发现其中不少地方允许你直接传入一个 React Element（也就是一个 JSX 元素）作为参数，例如典型的传递<XxxIcon />. 在模板语法下这则是个不那么容易的事情，因此我们通常在 Vue 中传递组件 (Component) 而非元素 (Element)。对于 React 中的<Button icon={<XxxIcon />}>在 Vue 中的同类写法常常是<Button :icon="XxxIcon">，其中传入组件而非元素——假如这里我们需要传入<Icon icon="carbon:home" />这样的元素，Vue 这边就要复杂一些，变成了<Button :icon="defineComponent({ render: () => h(Icon, { icon: 'carbon:home' }) })">，为了避免这种难绷的语法，在大多数地方其实我们会使用 Slot 以及 Named slot 替代，基于模板的思路大多有这个问题。除此之外，模板也使 Vue 需要引入<component is>来解决在 JSX 不存在的问题。当然，这些都不是 Vue 的问题，只是模板的局限性，Vue 用 JSX 一样可以按我说的 React 组件库的那种思路写，Element Plus 的一些新组件就是这个思路。

模板显然也有自己的优点，很难说 JSX 和模板谁更优越。模板允许框架塞进更多自己提供的语法糖，在很大程度上也能使代码变得更加简洁，同时也使编译器优化变得更容易——对于组件库开发等场景来说，它可能稍微少了点灵活性，但对于应用开发已经足够优秀，并没有比 JSX 缺少什么。就我个人而言，我是更倾向于 JSX 的语法的，更方便在一个文件里封装多个小组件，但我对模板也没什么恶感。

还有个对多数人可能没什么感知，但对我而言感知明显的模板的问题——对 TS 的支持问题。平心而论，Vue 3.4 之后对 TS 基本上已经达到了完全的支持，但在一些边界的类型体操推导上仍存在一些问题，而且估摸着也很难在未来的版本中去支持，比如defineProps对条件类型的支持问题。 我在 VSCode 使用 Volar（现在叫 Vue - Official）插件时也经常遇到 TS 抽风问题，并且 ESLint 在 Vue SFC 中对 TS 的解析常常出问题，如开启@typescript-eslint/recommended-type-check后经常在 SFC 中给我解析出any，但 Volar 却能正常提示类型，我暂时没寻思出来这是 vue-eslint-parser 本来就有的问题还是我哪边配置不对，或者是 Volar 的问题。并且我始终不知道该如何让 Vue 在模板里给未知 tag 的 element 报错而不是推导为 unknown——vue-eslint-plugin 有这个选项，但不支持全局组件，对我来说确实没法用。

基于模板的 UI 框架大多有这个缺点——对于开发来说，它们对 TS 的支持通常限于大致能用而不太考虑优先支持复杂类型体操的解析。Vue 在 TS 支持方面其实已经做得很不错了，Svelte 用过几次，那边对 TS 的支持可以说就完全是“凑合能用”水平了。而 JSX 由于 TS 的内置支持则在类型安全上具有更好的表现，这个优点也是客观存在的。

说了这么多 React，并且似乎有些跑偏了，再回头谈谈 Vue. 要谈 Vue，显然要从 Vue 2 的**Options API**谈起。我至今仍觉得 Options API 有不少可取之处，最大的一点就是其极低的入门门槛和极其直观的语法——对于简单的业务页面开发，Options API 很少需要担心解构和丢失响应性的问题，一切都绑定在this上，默认更新this上的数据就能看到响应性的变化，心智负担其实是很低的。当然，this经常因其迷惑特性而被诟病，以至于现在新库开发都不那么倾向于使用 class，但这不是个很难解决的问题，只需要把原先{ ... }形式的组件定义改成component((self) => ({ ... }))就可以解决了——以一个作为参数传入的self替代this.

Options API 对 TS 其实也有不错的兼容性，即使使用 Vue 2.6，也可以安装@vue/composition-api在组件定义外边包上defineComponent以获得this上的类型提示。同时 Options API 也提供了一个最低限度的约束，data、Lifecycle、computed、methods等必须分门别类放好写在一起，不允许杂七杂八东写一块西写一块——这种强制将可能在功能上相关的data、computed、methods拆分开来的做法可能在老手看来不那么理想，但至少强硬地避免新手将功能和逻辑上都毫无关联的部分胡乱摆放在一起，而这很大程度上也是 React 新手的普遍问题。我很相信 Options API 这些或许是“无意之间”保证代码维持了最低限度整洁性（易读性）和易上手特性（心智负担较低）的特点使 Vue 在 Vue 2 时代于国内被大量使用，并且直到今天大量国内项目还是没有要升级到 Vue 3 的意思，甚至新项目仍用 Vue 2——平心而论，Vue 3 确实不会给这其中很多新项目带来好处，自然也没有升级的必要。

Options API 到底有没有问题，Composition API 是否真的优于 Options API，推出 Vue 3 又到底是不是个正确的决定已经很难说个对错了。总之某一天 Vue 3 确实推出了，站在维护者的角度来说这很容易理解——大多数爱好造轮子的程序员看到多年前的屎山代码总是想做一次彻底的推倒重构的，而甚至还兼容着 IE 并采用了许多老 JS 特性的 Vue 2 在可维护性上显然已经遇到了不小的困难，其设计时未考虑到 TS 也使后续要做不少[可能难度不大但工作量很大的类型体操](https://link.zhihu.com/?target=https%3A//github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts%23L132-L165)来为 Options API 提供类型支持。既然都要推倒重来了，为什么不引入点新的东西？React Hooks 那一套东西不一定说真比 Options API 好，但对 TS 肯定是更友好的，并且看起来没比 Options API 有明显弱点，也能更灵活地组织代码——Composition API 就这么诞生了。

自 Vue 3 以来，Composition API 至少一定程度上带来了**社区的繁荣**——相比起 Mixin，Hooks 具有更简洁灵活的语法，并且在更容易避免冲突覆盖问题，这至少**提高了库开发者的体验**。而 vue-use 这样的项目要是没有 Composition API 也很难出现——Vue 2 中在功能上的扩展更多依赖于 Global methods，这种在全局对象上绑定太多东西的做法显然不够理想。在 Vue 2 生态中显然是很难出现一个质量和规模类似于 vue-use 的代码库的。

有一个流行许久的观点，即 Composition API 更适合大型项目，而 Options API 在中小型项目上可能有一定优势（Vue 3 的文档里也这么说，当然他们到底是不是真这么觉得就不得而知了）。这其实是个比较值得怀疑的论点，毕竟 Composition API 其实也很适合小项目，而 Vue 2 时期使用 Options API 构建的大项目也比比皆是。

Composition API 在提高了灵活性的同时没有很好保证代码质量的下限，因此引起了一些诟病，但对于习惯良好的程序员来说即使在小项目上可能也比起 Options API 编写更直观和易读的代码——在 Composition API 里可以随手拆个 Hook 出来，在 Options API 里难道会有人习惯于随手拆个 Mixin 吗？

可从另一个角度来说，Composition API 带来的能够更好按业务逻辑来组织代码的灵活性真的那么必要吗？如果组件粒度拆得够细，Options API 按功能分组的思路似乎也不坏，而 Composition API 提供的灵活性反而让人有些无所适从。而 Composition API 能随手拆个 Hook 出来的能力似乎也不那么有吸引力，我相信有许多人在真正写业务时是不经常拆 Hook 出来的，但只要代码规整地分块摆在一起也并不影响可维护性——在这种情况下，少数几个 Mixin 是否也已经够用？Mixin 得继承树要在多复杂的应用中才会看到可维护性的显著下降？

以前看过 Ruby on Rails 的纪录片，其中有个观点让我印象深刻——当一个技术流行起来后，人们总是开始讨论它能不能**Scale**，又能 Scale 到何种程度，但大多数人一辈子也碰不到这项技术 Scale 的瓶颈，并且在真遇到 Scale 问题之前采用这项技术的小公司就已经 IPO 了。这里也同样如此，无论说是“Vue 相比于 React 更不适合大项目”还是说“Options API 相比于 Composition API 更不适合大项目”，都近乎源于一种其实没太大根据的刻板印象。

其实 Options API 在“人体工学”上是提供了比较不错的“幸福度”的——在我的观点里一是减少导入，二是敲this.就可以获得当前组件内全部关联数据和方法补全。说真的，“能提供更多补全可能”的设计在人体工程学上其实很重要，至少我是宁愿敲更多字也希望获得更好的补全体验的——而且 Vue 3 中ref的.value相比起this还没让人少敲字，这其实是引起了不少人的诟病的。

——好吧，对 Options API 和 Composition API 的偏题讨论就到此为止，再讨论下去大概也是得不出什么结果的。不过至少从现状来看，大家对 Vue 3 的接受度还不错，生态也在渐渐繁荣。在我的角度来看，这要很大程度归功于 Nuxt——Nuxt 目前对于复杂应用在成熟度上比起 Next.js 还有不少问题，但对于相对静态的公司/项目主页、发布页等应该算是我用过的元框架里 DX 最好的选择了。其实目前有不少大网站都是由 Nuxt 构建的，大家有兴趣可以浏览器装个 Vue Devtools 看下。

然后谈谈组件库的问题。国内和国外的组件库设计思路其实是很不一样的，国内的组件库通常是大而全，将你用得上的用不上的各种功能都封装进去，用起来就会比较省事，会发觉似乎什么场景都能直接用组件库提供的功能应付得来；国外的组件库相对来说更鼓励你造轮子，倾向于只封装基本组件并保留它们的灵活性，以便你自己进一步将它们更好地组成新的组件。其实我觉得国内的这个思路是要优于国外这些组件库的，只是由于审美不同，欧美更倾向于选用符合 Material 风格的缺胳膊少腿组件库，可能压根就没体验过使用国内这些大而全组件库开发的快乐感……例如国内组件库内置 Searchable MultiSelect 可以说就是标配，但诡异的是欧美常用的组件库里内置这东西的据我观察还还真不多。

如今看来，React 和 Vue 其实都有不少还不错的组件库选择，倒也很难说 Vue 这边的组件库生态不行了。如果倾向于大而全，React 选 AntD，Vue 选 Element Plus 应该没什么异议。其他的或许我可以举几个符合我个人审美和用起来不错的组件库说说，React 这边一个是 MUI，这组件库说实话设计得不咋好用但在欧美基本上有着和国内 AntD 类似的流行度，另外一些是 Chakra、Mantine 和近期的 shadcn/ui. Vue 这边，我个人除开 Element Plus 会比较倾向于 Naive UI 或 PrimeVue，另外 Material Design 的 Vue 组件库也有不少，但我不太喜欢这个设计所以就不提了。原题目描述中 Vue 组件库选择太少的问题大概已经不太明显了，并且现在基于 Tailwind CSS 的各种定制方案也挺流行的，手搓组件也没那么麻烦了，现在还有了 shadcn/ui 在各种框架上的版本，复制粘贴组件代码也并不麻烦。

回归问题本身吧。假如现在叫我做一个新项目，我大概还是会出于惯性选择 React——Vue 并没有什么不好，但我在 React 上着实有一些历史代码积累，对这边的生态也相对熟悉一些，并且用 React 整花活和对 TS 的兼容性上都要比 Vue 略微好上一些。但假如是做团队项目，出于对团队中其他人技术栈熟悉程度的考虑，我大概还是更倾向于 Vue——如果合作者都只会 Vue，我也不好叫人来现学 React.

说起来，其实选择 React 很多时候成了一种“潜意识”的做法——当你不管看到什么新轮子都拿如何在一个 React 应用中使用它作为示例，其实自然而然会遵照这种惯例，在没有特别理由的情况下默认选择 React——但仔细想想，又好像确实没有一定要选 React 的理由。并且尽管 React 在许多方面受到批评，但它本身没有比起其他 UI 框架有什么根本性的劣势，自然也没什么换掉它的理由——就像开头就反复提及的，这种庞大的生态和历史惯性大概已经决定了 React 在今日以及未来难以撼动的地位了，无论你对此是否抱有反感。很大程度上，这也是我习惯于使用 React 的理由。

至于其他 UI 框架，说真的 Svelte 和 Solid 那些还很不成熟，能用的组件库很少，基本上只有 Flowbite 这种基于 Tailwind CSS 的“跨框架”组件库兜底，在细致程度和易用性上都很难与专门为某一框架开发的组件库相提并论。除非只是做做那种偏海报展示的项目或者你真有足够耐心去手搓组件库，否则我是不建议在真是项目中上这些新兴框架的。嗯，还有被遗忘的 Angular——这我是真不熟，没法评价。

说来说去，最后还是写成了没啥参考价值的随感吐槽，那就到此为止吧。


---

# 为什么很多以往活跃的前端开发博主都不怎么说话了？ i5ting

**Author:** i5ting  
**Bio:** 狼叔，《浪说播客》主理人，AI，avp新人，Nodejs老人  
**Avatar:** ![](https://picx.zhimg.com/v2-c6c895d0882a2a8a9ff71ff23964911a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c4c5c50b85f217e88e181b19e8afb624  
**Published:** 2025.03.14 11:32:39  
**Updated:** 2025.03.19 10:37:18  
**Question:** https://www.zhihu.com/question/14593370597  
**Question Created:** 2025.03.10 16:41:23  
**Question Updated:** 2025.03.10 16:41:23  
**Votes:** 817  
**Comments:** 99  
**Type:** answer  

你举几个例子。我好说

## 高管派

代表人物：玉伯

他负责蚂蚁体验技术部之后，基本上不怎么出来了。早期seajs，kissy时代也是非常活跃的。现在偶尔能见到是因为他在创业，youmind.ai，大家也可以支持一下

## RIP斯人已逝

代表人物：司徒正美




## 功成名就大厂隐居派

代表人物，朴灵。

阿里Node.js最早的三驾马车之一（另外2个苏千，死马）。在infoq连载深入浅出，并最终结集为九浅一深Node.js，为一时之冠。也曾和阮一峰等因为Eventloop等在微博上大吵，当时很多知名前端都卷入其中，名声大噪。在2015年之后基本上就不怎么出面了，所有大会，媒体邀约基本上都不参加了。

大概是他升了p8左右就不关注前端领域，专注业务，专心带娃，偶尔写一点开源项目，之前听说在阿里云负责api多端生成。我在余杭区贵州黄牛肉店还碰到过他。

其代表作AliNode，在当时通过fork代码，然后打桩的方式。是一个很hardcore的事儿。培养了张秋怡，黄一君等实力派。一君的easymonitor，基于addon去做，更轻量。

可以说朴灵是我最羡慕的人生了。

## 修仙派

代表人物：justjavac

justjavac在成为deno继父之后，就不怎么写文章和参与公开演讲了。在天津呆的很爽，据说还上了电视台。

![](https://picx.zhimg.com/v2-7c89912cf795d5ae82e761249dfc6815_r.jpg?source=2c26e567)

## 转行派

代表人物：张鑫旭

他的css很牛大家都知道，其实他js也非常了得，年前和他做播客，他对Node.js竟然也十分精通。现在主要是工作，写文章，钓鱼。

写文章控制在1周1篇左右。

钓鱼在抖音有一个万粉大号，好像叫最会钓鱼的程序员




## 大课润派

代表人物：winter、花果山大圣

从大厂到讲课，到润。




## 老当益壮派

代表人物：Hax、天猪

hax现在也在卷AI，据说做了1年半了。

猪哥从蚂蚁出来，就加入字节，现在在负责Trae，那是相当的卷啊。把老雷，死月都卷的不出来了。

## 具有钱而退圈派

代表人物：郭宇

赶上2013-2020抖音疯狂时代，28岁退休。现在日本做web3




## 新生代




范文杰，润到sg，在字节flow，目前在和我做播客

神三元小朋友，字节搞ai相关去了

卡颂从字节出去，天天想着卖课呢，现在想弄ai相关这波




以上来自网友提问




——-










![](https://picx.zhimg.com/50/v2-d142701f61bac4e4c92fa63982bf6128_720w.jpg?source=2c26e567)


---

# 怎样看待 AI 三小时做的小游戏 9 天赚了 12 万？会对游戏行业产生怎样的影响？ 桔了个仔

**Author:** 桔了个仔  
**Bio:** 大模型 | 人工智能 | 数据科学 | 机器学习  
**Avatar:** ![](https://picx.zhimg.com/v2-9f4e5c9c9e3fda1b26496f2fbb2a0578_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cc759c5d7c383aa95e7633f06bcf6d82  
**Published:** 2025.03.04 13:18:34  
**Updated:** 2025.03.04 14:06:12  
**Question:** https://www.zhihu.com/question/14003476657  
**Question Created:** 2025.03.04 10:09:51  
**Question Updated:** 2025.03.04 10:09:51  
**Votes:** 729  
**Comments:** 42  
**Type:** answer  

这对游戏行业产生怎样的影响？其实可以说没啥太大影响，AI只是加速了游戏开发过程。

我认为，最大的影响，是来自开发模式的转变。有能力有名气的开发者，可以Build in Public，通过AI的帮助，能快速试错，从而迭代出能赚钱的产品。

**Build in Public是AI时代和自媒体时代融合后的一种开发模式。**

所谓Build in public，即“公开建构”，是一种新兴的产品开发模式，指公司或独立开发者有意识地选择公开分享公司或产品创建的整个过程，通过社交媒体、在线社区等渠道，不断分享创建过程中的见解、想法、进展等，让公众能够看到从项目最初概念到产品迭代等各个阶段的情况。

要走这种开发模式，你需要

- 是网红，有一定的关注量。不然你开发的东西没啥人知道。
- 有较强的开发能力，最好是技术出身。有的人问，我是产品经理，有AI加持，我觉得我也能走这条路，其实不然，毕竟这是在构建产品，而不是做一个demo。AI只是加速开发，并不能完全替代开发，更何况，除了开发，还有售后技术支持，服务器搭建等很多繁琐的事情。
- 随时随地带着电脑。毕竟你卖了服务，就要提供技术支持。

这位AI 三小时做的小游戏 9 天赚了 12 万的老哥，本身就是一个KOL，推特上有60多万粉丝。

![](https://pic1.zhimg.com/v2-61fe01f4464f7b2ce08b30a94163e295_r.jpg?source=2c26e567)

他会公布自己构建产品的过程，以及每个产品收入。

正如他主页说的，他做了70多个产品，只有4个赚钱且在增长，也就是说大概只有5%的成功率。

![](https://pica.zhimg.com/v2-a7bf4166f440d87d7776b3c76768d9c0_r.jpg?source=2c26e567)

当然，由于AI加持，他做这些产品的时间成本大大降低。

他这个飞行模拟器游戏之所以爆火，是因为被银河系著名网上冲浪大师——马斯克刷到了，给他贡献了900多万的曝光。

![](https://pic1.zhimg.com/v2-5d72ad99ccd1d58a5676d4e6259aff6a_r.jpg?source=2c26e567)

而且，除了卖金子，他也卖铲子，他把自己的独立开发经验打包成电子书售卖，70刀的价格。这才是能保证挣钱的方法，毕竟不需要服务器支出。这对于他这种粉丝级别的KOL来说，还是能赚到钱的。当然，这里没说他割韭菜的意思，毕竟他是真有本事。

![](https://pic1.zhimg.com/v2-61c1d7855a776ec1de7316ae0a191a6d_r.jpg?source=2c26e567)




可以看到，Build in Public模式，对于p人来说简直就天堂。但工作强度并不比上班低，只是Build in Public更加好玩，反馈更加及时。那么普通人能不能复刻他的成功？能是能，但要很长时间，而且要把战场放在海外，在国内应用要备案，游戏要版号，这对于需要极速迭代试错的独立开发者而言，很难在国内的平台践行Build in Public。

如果你真要玩build in public，那么我建议你需要经营自己的推特，多参与到开源社区，积累技术名气。经营小红书微博知乎什么的没经营推特重要，毕竟你要做出海的生意。国内比较有名气的独立开发者，例如idoubi，都是做出海的。但目前国内也没有像题中那个博主这么赚钱的，所以，Build in Public虽然看起来很诱人，但其实并不适合多数人，真要玩Build in Public的话，先兼职试试先。


---

# 游戏开发：独立游戏与个人开发者 Feishiko

**Author:** Feishiko  
**Bio:** 兴趣泛  
**Avatar:** ![](https://pic1.zhimg.com/v2-f6b104b09c5ab6b798fa5a08ca98ed32_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/1ca9e43da9aae26a9283dc39b19fe8eb  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 392  
**Comments:** 27  
**Type:** article  

看到今年CUSGA（中国大学生游戏开发大赛）有一个解谜游戏画面很不错，谜题设计也很优秀，之后发现是一个人做的。




![](https://pic3.zhimg.com/v2-0cfd097d0d61da1b41c7599eee014c12_r.jpg)

![](https://pica.zhimg.com/v2-78cee38073e3853ffd95a012b02c3cbe_r.jpg)




比起其他人的游戏，他的游戏更有种统一的美术风格。而且，对于小众类型逻辑解谜而言，并不好找到同好一起来制作。

游戏需要分裂自身，去构建一个刚好能构成两个物体达成结果检测。开始的关卡有一定的引导属性，之后开始出现一些比较线性代数的概念如旋转与缩放，再者出现从一侧进去从反方向出来的机制之后，格子的奇偶性也成了Puzzle Solving的关键。

由于是个Grid-Based加上Turn-Based，对于空间的逻辑能力会非常敏感，需要恰好构建一个刚好的结构去适应结果。游戏整体难度并不轻度，因为卡关了所以没全打完。

同为学生的独立游戏开发者鸵鸟居士对他的评价：

> 这种级别的自洽和一体性，不是solo，不是左脑跟右脑配合，是做不出来的。机制谜题关卡，配色场景构图，浑然一体。如果不是一个人做的，一定会有撕裂感。

如果你对这种Grid-Based Turn-Based的逻辑解谜感兴趣可以尝试一下，Parallel的游戏链接：[https://xexlax.itch.io/parallel](https://link.zhihu.com/?target=https%3A//xexlax.itch.io/parallel)

这种统一的风格除了xexlax的Parallel，还有不少游戏在这个范畴内。




![](https://pic2.zhimg.com/v2-875b5d35c8e206ded9c1d8c5514455ef_r.jpg)







![](https://pic3.zhimg.com/v2-a8d3b9fedba0028aea4ac2c4f0fc7334_r.jpg)




这是独立游戏开发者流贾君的新游戏，超级滑刃战士，目前游戏还没开始发售，不过已经有了Steam界面。

流贾君是一位成熟的独立游戏开发者，而且也是一位个人开发者，它的美术比起很多个人开发者要好，而且它的**游戏画面也做到了统一性**。

超级滑刃战士Steam链接：[https://store.steampowered.com/app/2847740/Super_Drift_Blade/](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/2847740/Super_Drift_Blade/)

当然不止超级滑刃战士，他过去的很多游戏都保持了一贯的风格：

《窗户之外》




![](https://pic4.zhimg.com/v2-ce246bf371e355373283be6801a540ff_r.jpg)







![](https://pica.zhimg.com/v2-97102d5ee52f66e042cc963ac8d082fc_r.jpg)




《平衡100》




![](https://pic3.zhimg.com/v2-817e5bfceb9f874f4c5fcdc435953f96_r.jpg)







![](https://pica.zhimg.com/v2-c3eb918818d046d42ee0b22e3d7f18dc_r.jpg)




对于美术好的游戏看过了，不妨现在再看一些美术“差”的游戏

《A=B》




![](https://pic2.zhimg.com/v2-0b70db1d5a1cea002c8cd7431c2f1be5_r.jpg)




《Understand顿悟》




![](https://pica.zhimg.com/v2-06cf5fdb9d251faf6952a194e5533e2c_r.jpg)




《蜡笔物理学》




![](https://picx.zhimg.com/v2-789cb7f35d7f54315f36cc1eb4a0f683_r.jpg)




这些游戏也都是一个人开发的，比起美术更重视玩法的逻辑解谜领域开发者，Artless Games。

它的游戏或许没有精致的美术，但是它的游戏能引来无数解谜游戏玩家的称赞，因为它是切实去做好逻辑解谜这个类型的。

或许这无法被常人所理解，但是这个世界上永远有一些小众的文化群体，小众的社群，而Artless的用户群体就是它们。不一定要做热，不一定要趋于大众，但一定要在小范围内做好。这是**游戏风格的统一性**。

拿《A=B》举例，虽然界面比起Zachtronics的《SHENZHEN I/O》甚至《TIS-100》简陋，但是你可以在上面的窗口去测试用例，代码编辑器有基本的撤销功能，一个问题有三个档案供选择和调试，调节字体大小，步进和快速运行。这些在玩法上做到了尽可能的人性化。

A=B Steam链接：[https://store.steampowered.com/app/1720850/AB/](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/1720850/AB/)

国内的开发者聊完了，接下来聊点国外的开发者。

《SpelunkyRL》




![](https://pic2.zhimg.com/v2-dd6cc4f37c4822b95828b22c0ca7e001_r.jpg)




《Monster Trainer RL》




![](https://pica.zhimg.com/v2-6c65bbb1b7d06482f6a0fa11012b70a0_r.jpg)




《CvRL2: The Lady of Berkeley》




![](https://picx.zhimg.com/v2-3cb20ddc87d6df1b0aa92ffa7cb39df7_r.jpg)




《Emerald Woods》




![](https://picx.zhimg.com/v2-39c8f6d6315b87e86f9a5f1ea284474d_r.jpg)




这是Roguebasin的站长，忠于传统Roguelike游戏开发者，Slashie，他的游戏代码部分都是自己写的，也是自己策划的，但音乐还有美术会寻求外部力量。

他的游戏绝大部分都是Roguelike，对于现在的很多只玩Hades，Slay the Spire，Binding of Isaac等Roguelite还无法区分like和lite的年轻人来说，Roguelike是个很难接受的类型。

作为一个有20余年的游戏开发者和Roguelike玩家，Slashie的游戏阅历丰富至极。因此他的游戏也深受Roguelike玩家的喜爱。

Slashie的个人网站链接：[https://slashie.net/](https://link.zhihu.com/?target=https%3A//slashie.net/)

Platformer也是个很有趣的类型

《Love》




![](https://pic2.zhimg.com/v2-0f43af92fdf7628b23bdea6623b0f973_r.jpg)




《Nymph's Tower》




![](https://pic4.zhimg.com/v2-c1b91801b9de989e956742ce503b4f93_r.jpg)




Brlka是一个专注于平台跳跃游戏类型的开发者，虽然笔者喜欢精确平台，但他的游戏也非常对胃口。

Platformer也算是个比较小众的类型，特别是精确平台，玩家需要一遍又一遍的尝试，一般难度上会对玩家素质有一定要求。这种负面反馈大于正面反馈的游戏体验放到2024年自然是不会吃香的，当然Thinky Puzzle即逻辑解谜和传统Roguelike也是一样的。

Love就是这样的一个精确平台游戏，没有华丽的画面，只有朴素的一次又一次的尝试。当你成功攻克目前的关卡到达下一个存档点的这种喜悦，是难以描述的。这也让我想起很多I wanna fangame，特别是Gimmick跳刺和综合。

Brlka的itch链接：[https://brlka.itch.io/](https://link.zhihu.com/?target=https%3A//brlka.itch.io/)

在文章的最后，我认为不仅仅是作为一个独立游戏开发者，更是应该作为一个玩家。游戏开发者来源于玩家，应该更多的去融入自己喜欢的社区，去找到自己游戏的受众。

写到最后，发现自己不但写了美术风格上的统一，还写了游戏内容的统一。

作为个人独立游戏开发者，我们有自己的情感，我们有自己想去表达的内容，我们能够分辨出一个完整的物体。这是团队开发难以做到的，特别是小众类型。

玩的游戏不一样，难免会有分歧。就算同是平台跳跃，玩蔚蓝的和玩马里奥的也会有很多分歧。

如果你有一个能和你一起共享喜怒哀乐的团队，大家能够组合成一个整体完成各自的分工，请珍惜他们，这是难能可贵的。


---

# Vue 和 React 的优点分别是什么？ 尤雨溪

**Author:** 尤雨溪  
**Bio:** 开源软件开发者  
**Avatar:** ![](https://pic1.zhimg.com/7be980a0f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f  
**Published:** 2018.12.04 14:25:36  
**Updated:** 2018.12.04 14:25:36  
**Question:** https://www.zhihu.com/question/301860721  
**Question Created:** 2018.11.09 17:01:13  
**Question Updated:** 2019.01.07 12:48:02  
**Votes:** 9614  
**Comments:** 407  
**Type:** answer  

这个问题下面的很多回答太偏激了，其实我淡出知乎就是因为这类破事... 但是作为作者还是认真地说一说吧，希望能以后别再有这种问题了。

这里我可以大方地承认，如果多年以后要论历史地位，React 肯定是高于 Vue 的。事实上，我作为一个开发者，也是由衷地佩服 Jordan Walke, Sebastian Markbage 这样的，能从开发模式层面上提出突破性的新方向的人。

React 从一开始的定位就是提出 UI 开发的新思路。当年 Pete Hunt 最开始推广 React 的时候的一句口号就叫 "Rethinking Best Practices"，这样的定位使得 React 打开了一些全新的思路，吸引了一群喜欢折腾的早期核心用户，并在这个基础上通过社区迭代孵化出了许多今天被 React 开发者当作常识的 pattern。这是 React 伟大的地方，Vue 里面也有很多地方是直接受到了 React 的启发。React 敢做这样的尝试，是因为它是 Facebook。这样的体量的公司，在 infrastructure 层面获得质的提升，收益是巨大的，而且 Facebook 的工程师们足够聪明又要靠工资吃饭，改变他/她们的习惯并不是什么问题。而对外推广，则是一种大公司才有的 “改变业界” 的底气。

Vue 从一开始的定位就是尽可能的降低前端开发的门槛，让更多的人能够更快地上手开发。我以前也说过，开发 Vue 的初衷不是为了搞个大新闻，只是做了个我自己用得舒服的框架。我虽然也在 Google 这样的大公司呆过，但骨子里是一个喜欢自由的人，也一直觉得独立开发者很酷（这也是为什么最终自己也成了一个独立开发者）。很多时候我更希望自己做的东西能帮到那些中小型企业和个人开发者。举个例子来说，美国传统行业里有很多 small business，它们不像大公司那样有专门的 IT 团队来信息化整个流程，很多只能雇一个普通的 contractor 程序员，有些甚至是老板自己兼职研究代码。我收到过好几封这样的感谢信，说因为 Vue 让它们多快好省地做了个内部应用，解决了实际问题，这样的故事是让我觉得特别爽的。

做 React 这样的不迎合用户，而是试图改变用户的设计需要有足够的本钱：你得有足够的资源和背景去强行越过初始推广的那个陡坡。事实上，如果没有 Facebook 作为 React 的推广者，React 很可能最终是一个有着忠实用户群体的小众框架（比如 Elm）。作为一个个人项目的 Vue 没有这样的宣传资源，也并不是为了改变用户。所以从设计的角度上来说，Vue 首先考虑的是假设用户只掌握了 web 基础知识 (HTML, CSS, JS) 的情况下，如何能够最快理解和上手，实现一个看得见摸得着的应用。

一个 API 看得顺不顺眼，用得舒不舒服，很大程度上取决于你跟一个技术的核心用户群体的重合程度。编程语言之间喷来喷去还少么？大家都是图灵完备，然而此之蜜糖，彼之砒霜。Vue 的 API 设计固然有可以商榷的地方，但 React 也不是完美无瑕，不然也不会从 mixins 到 HOC 到 render props 一次次地折腾，更没有 hooks 什么事了。直到 Suspense 出现前，也不存在什么只有 React 才能做到的事情（顺带一提，有意思的是 hooks 基本上废掉了过去大部分基于组件的逻辑抽象模式，抹掉了 JSX vs. 模版的一个优势，也完全可以用在其他框架里，连 Angular 都已经有对应的原型实现...）然而 “不完美” 并没有妨碍在过去的几年内大量的用户用各自选择的技术做出实际的产品 —— 从[State of JS 近两年的数据](https://link.zhihu.com/?target=https%3A//2018.stateofjs.com/front-end-frameworks/overview/)来看，两者的满意率是差不多的，都在 90% 出头，说明两者在 “满足目标用户的需求” 这个衡量标准下，表现是差不多的。可维护性、可读性、优雅程度、生态这些东西嘴上怎么辩都可以，还是数据比较实在。

再说说具体技术层面：从加载速度、运行时性能来说，两者目前综合各种场景应该说是没有什么质的差别。硬要说的话，Vue 在 update 性能优化方面需要的心智负担可能少那么一点 —— React 如果不注意，容易导致过多的组件无用 diff，但是实际上真正会遇到性能瓶颈的应用也是少数... Vue 3 会比 Vue 2 快不少，加上模版编译还有一些可进一步发掘的优化空间，所以性能上会比现在的 React 有一定优势，但 React 那边也在研究基于 prepack 的编译时优化，这个也是挺值得期待的。Vue 3 对于 TS 的支持会有很大改善（包括 TSX），我们也在计划对模版做更好的 IDE 支持（比如补全、类型检查），现在没有不代表以后不能有，有批评我们改进就是了。其实过去大半年 Vue 本身没有什么大更新是因为精力都放在工具链上了，接下来又要回到核心上了。React 那边 time slicing / Concurrent mode 要明年 Q2 才稳定，那个时候应该 Vue 3 的 time slicing 应该也稳定了（原型已实现）。Suspense 在 data-fetching 稳定之前并没什么大用（要 2019 年中），这期间我们也会研究解决同类问题的方案。所以从纯技术层面来说，React 现在比 Vue 牛逼么？不好说。以后一定比 Vue 牛逼么？也不好说。

使用数量方面，有很多文章拿各种数据来比较，有的是 GitHub stars，有的是 npm 下载量，有的是 Google trends，有的是 StackOverflow 的问题数量... 其实这些数据都有很明显的问题，那就是它们跟实际使用者的数量并不一定是正比，会受到其它因素的影响，比如 GitHub stars 跟实际使用没有直接关联；使用者中使用 CI 的比例会影响 npm 的下载量；Google trends 很难完美过滤掉 React 这样的常见词汇的 false positive；文档和本身的上手难易程度会影响 StackOverflow 的问题数量，等等... 所以我自己一直是以 Chrome 开发者插件的使用者数量作为一个比较可靠的数据，因为它的关联度是最直接的，潜在的干扰因素也是最少的。目前 Vue 的开发者插件用户数量约为 70.4 万，而 React 是 136.3 万，大致可以作为参考。React 的使用量还是有明显优势，不过这个数字比起两年前已经很不一样了 —— 那时候大约是 1:7 的比例。从增速来看，Vue 是要快一些的。

说了这么多，无非是希望大家能停下来想想所谓的 ”A 技术比 B 技术牛逼“ 背后到底是在争些什么，我们使用这些技术的初衷又是什么。很多时候你说这方面，他说那方面，鸡同鸭讲，即使说到一起去，也往往缺乏对等的信息量或者基础共识，只是各自表达主观看法，最后变成两个阵营各自抱团取暖... 说到底，就算你证明了 A 比 B 牛逼，也不意味着你或者你的项目就牛逼了... 比起争这个，不如多想想怎么让自己变得更牛逼吧。


---

# Chrome 是怎么判断地址栏输入的东西是不是网址? 紫云飞

**Author:** 紫云飞  
**Bio:** JavaScript 考古学家  
**Avatar:** ![](https://picx.zhimg.com/v2-cb307218899f324598573c2fa634be8c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/49d887d9671861f21479a6cdcca81d51  
**Published:** 2022.10.20 13:28:45  
**Updated:** 2022.10.20 13:34:06  
**Question:** https://www.zhihu.com/question/560616439  
**Question Created:** 2022.10.18 21:13:38  
**Question Updated:** 2022.10.18 21:13:38  
**Votes:** 3079  
**Comments:** 18  
**Type:** answer  

Chrome 的地址栏代号是 Omnibox，omni 是万能、全能的词根，Omnibox 就是全能盒子的意思。在 2008 年 Chrome 发布的时候，其它浏览器都是在一个长的地址栏右侧有个短的搜索框，Omnibox 把搜索和网址输入合二为一是当时一个大的创新。

Omnibox 是个很复杂的东西，远比我们用户想的要复杂，Chrome 就自带一个给他们的开发者调试用的页面，chrome://omnibox：

![](https://pic1.zhimg.com/v2-ba1a9d1c59e5e2103fdbfac92aab4999_r.jpg?source=2c26e567)

最核心的功能就是要判断你输入的东西是什么，是个 query 还是个 url，也就是调试页面里展示出的那个 type = 的值。比如当你输入[http://www.baidu.com](https://link.zhihu.com/?target=http%3A//www.baidu.com)：

![](https://pic1.zhimg.com/v2-7201e221a07a9b85b684c8803b0b4a60_r.jpg?source=2c26e567)

Ominibox 判断出了这个字符串是个 url，所以排在第一位的结果，也就是我们立刻回车执行的那个操作，就是 url-what-you-typed，也就是以网址形式打开你输入的内容，当然，我们的输入其实是缺了 https:// 协议头的，所以实际上它会给补上，也就是倒数第二列展示的那个。

而第二位的结果类型叫 search-other-engine，是因为它判断出了http://www.baidu.com刚好是浏览器内置的谷歌以外的一个搜索引擎，所以它会提示你，按下 TAB 键，就可以输入关键词，从而打开百度搜索。

第三位叫 search-what-you-typed，就是用默认的搜索引擎搜索输入的字符串，拼接好的谷歌网址也展示了出来。

前三个结果在 Omnibox 里展示出来是这样的：

![](https://pic1.zhimg.com/v2-9ce7721b5be9a2347dd7cb0c266b96ef_r.jpg?source=2c26e567)

实际上判断是不是 url 是个非常复杂的逻辑，更何况这里的输入不能期望它是个完整的 url，比如没有协议头的话，JS API 里new URL('www.baidu.com')是可以直接报错说它不是个 url，但这里不行。而且这里还得考虑自己的业务属性，比如不允许的协议类型，xxx:www.baidu.com：

![](https://picx.zhimg.com/v2-aac694c9c85bd2ce33b664a30939fc59_r.jpg?source=2c26e567)

它没有识别成 url 类型，也不是 query 类型，而是 unknown，unknown 类型类似 query，排第一的结果也是默认搜索，但是它和 query 不一样的是，也可以作为网址打开，箭头向下移动到最底部再回车就可以。比如我在之前回答中提到的谷歌公司内部短网址域名 go 的网址，就会被判断成 unknown：

![](https://picx.zhimg.com/v2-d4bc6ea659a9e33242bd9a327c5e198a_r.jpg?source=2c26e567)

而 localhost 就被特殊处理成了 url 类型：

![](https://picx.zhimg.com/v2-cae88d98ce293b86cf016225b3fca0e3_r.jpg?source=2c26e567)

还有这里还得考虑本地路径格式，比如斜杠 / 表示根目录和波浪线 ~ 表示 Home 目录。

还有个有趣的 javascript: 协议，这是从网景时代 Brendan Eich 手里传下来的调试功能，BE 不在 Mozilla 以后，Firefox 已经完全禁掉了它。在 Omnibox 里，javascript:1+1 默认会是搜索，因为被判定成了 unknown：

![](https://picx.zhimg.com/v2-df4f9d17c98835370cf1f4b74513daf1_r.jpg?source=2c26e567)

而 javascript:alert(1+1) 就会被识别成 url，会弹出 2。这是因为很多年前，有人说搜素 JavaScript 犀牛书的名字 JavaScript: The Definitive Guide，结果没有打开谷歌，而是给当成代码执行了：

![](https://pic1.zhimg.com/v2-a6d214eb5f3c43b764a4ed55cdddedde_r.jpg?source=2c26e567)

所以他们加了个简单的正则：

![](https://pica.zhimg.com/v2-9c7cd314142520aaf5a7234b4ad80da8_r.jpg?source=2c26e567)

只有 javascript: 协议后的文本包含一些括号、点、分号等才认为是代码，通常来说，也够了。

我这里只是说一些简单的有趣的 case，其实很多你想都想不到的场景有很多，比如输入 ip，而且还有 ipv4 和 ipv6 的情况，等等。识别这个字符串是不是 url 涉及到的 C++ 代码怎么都有几千行，这不是一个正则能实现的。

现在据说流行一个面试题：

![](https://pic1.zhimg.com/v2-712587ac5324d1ba5269905e044887f6_r.jpg?source=2c26e567)

我这里说的就是这道题的答案的第一步的梗概。


---

# 羊了个羊是不是骗局？ DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://pica.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2022.09.20 14:53:12  
**Updated:** 2022.09.28 18:22:48  
**Question:** https://www.zhihu.com/question/553632083  
**Question Created:** 2022.09.15 03:20:37  
**Question Updated:** 2022.09.15 03:20:37  
**Votes:** 9647  
**Comments:** 583  
**Type:** answer  

不是，这种游戏能火起来，我就觉得很匪夷所思。

做一个这种游戏，比做一个俄罗斯方块还简单，我花了晚上两个钟，自己写了一个“咖波了个咖波”（咖波作者原谅我，咖波太可爱了，侵删）

![](https://picx.zhimg.com/v2-4b89a6ae87639dcbdddcb9882cbe6fe2_r.jpg?source=2c26e567)

这种游戏逻辑写起来不要太简单好么

![](https://pica.zhimg.com/v2-21aef02771a36008bfcf583f92b379f3_r.jpg?source=2c26e567)

而且官方还否认了，羊了个羊不是抄袭（不能说很像，只能说完全一致）

![](https://picx.zhimg.com/50/v2-4569050e85963291f2b4b94c7b3360a0_720w.jpg?source=2c26e567)

嘿嘿，既然如此我也不客气了，我这就把“咖波了个咖波”开个源，大家可以在assets中自己替换成自己喜欢的贴图哈

![](https://pica.zhimg.com/v2-1811bb58cbd4c25016a1359a160d9a91_r.jpg?source=2c26e567)

比如可以“狗了个狗”

![](https://pic1.zhimg.com/v2-efa3c8a65db13c1fd1e693398076496a_r.jpg?source=2c26e567)

“奥特曼了个奥特曼”

![](https://picx.zhimg.com/v2-bc632230573f6bdb7d9fd48b7367779c_r.jpg?source=2c26e567)

“蛇了个蛇”

![](https://picx.zhimg.com/v2-a67fa0d44bdaebb1e691cecbe2895fbb_r.jpg?source=2c26e567)

## 另外敲黑板，划重点了哈，游戏特色：

**1.我没有做游戏胜利界面哈，因为大概率不需要过不了关哈，**只有0.001%的人能通关哈

**2.游戏失败界面当然是做了的**

**3.我摊牌哈，牌子全是随机生成的，不保证能全消哈**

**害，居然忘记做了游戏最重要的功能，看广告，死罪死罪**

![](https://pica.zhimg.com/v2-4df6b1e7e2f089b73d360295d9140996_r.jpg?source=2c26e567)

PS：另外说一句广告要看99999秒哈，毕竟看广告才是这个游戏的玩法

![](https://pic1.zhimg.com/v2-057b2b21bf4038d753748443c220b78e_r.jpg?source=2c26e567)

我编译成了webassembly，激情游戏，在线试玩

[https://www.painterengine.com/main/instances/instance2022092001/index.html](https://link.zhihu.com/?target=https%3A//www.painterengine.com/main/instances/instance2022092001/index.html)

备用链接

[https://www.painterengine.cn/main/instances/instance2022092001/index.html](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/main/instances/instance2022092001/index.html)

源码下载：

[https://www.painterengine.com/example.html](https://link.zhihu.com/?target=https%3A//www.painterengine.com/example.html)

备用链接:

[https://www.painterengine.cn/example.html](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/example.html)

依赖引擎库

[PainterEngine 一个由C语言编写的完整开源的跨平台图形应用框架](https://link.zhihu.com/?target=https%3A//www.painterengine.com/index.html)

备用链接:

[PainterEngine 一个由C语言编写的完整开源的跨平台图形应用框架](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/index.html)

PPS:有人问我广告打开了，不想看完消格子了，要怎么退出啊，这个问题问的好!!来都来了你还想跑？

PPPS：我怕真有人把99999s的广告看完了，提前预告一下，广告时间有负数的哈

![](https://picx.zhimg.com/v2-4d10feede71519a3a3fb05126f9d3990_r.jpg?source=2c26e567)

























## 下面的内容是写给DIY玩家看的

==============================================

本来只是随便写的用来嘲讽一下羊了个羊这个韭菜游戏的回答,没想到大家那么热情,居然想真的上手还要通关.

我坦白,我连胜利过关界面都没做,前面的意思呢,是0.001%的人能(用非正常手段)通关,但事情沦落到这个地部,不得不开放一下教程,把通关庆祝做了,顺便让有些真正想玩这游戏的上手DIY一下.

关于换皮肤这一点,仍然是打开assets文件夹,替换对应png文件哈

![](https://pica.zhimg.com/v2-e50638b57bfdccab6f954db01142ebad_r.jpg?source=2c26e567)

注意一下,png图片的大小一定是48*48的png彩色图片,尺寸不一样不能成功,另外png decoder也是我自己搓的轮子,所以一些灰度之类的非常见png也无法加载,大部分时候应该是没有问题的,那个广告ad2.png也可以换,不过图片大小没有额外要求.

之后是生成布局,因为大多数人不会编译,所以捏,我使用了PainterEngine内部集成的编译型脚本引擎PainterScript,不要慌,很简单的,请用记事本或者Visual studio code之类的文本编辑器打开script.c,就是下面这个

![](https://picx.zhimg.com/50/v2-d7917240994cdb428c4c1571eda4968d_720w.jpg?source=2c26e567)

里面的默认的无法通关的搞笑代码如下:

#name "main"

//创建标签函数,x,y表示其左上角坐标,每个标签必定是48x48大小的,z表示深度,越大则放置的越底下,在标签被上层遮盖时将不能被点击
//id就是你png文件对应的数字,最大支持31个标签,id的范围是1-31,如果没有对应png图片,会创建失败,png图片格式必定是(1.png,2.png,3.png.....31.png)
host void CreateNote(float x,float y,float z,int id);

//取随机数,min为最小值,max为最大值
host int  rand(int min,int max);

//在这个函数里创建标签,surface_width为画布宽度,surface_height为画布高度,note_type_count为标签类型个数(和你放了几个png文件有关)
export int main(int surface_width,int surface_height,int note_type_count)
{
    int x,y,z;//x,y索引,z表示层数,值越大则放在越底下,

    for (z = 0;z < 5; z++ )//一共5层
	{
		for (y = 0; y < 8-z; y++)//最上层8*8,逐层递减
		{
			for (x = 0; x < 8-z; x++)
			{
				float objx = surface_width / 2 - 48 * 4 + 24 * z;//计算标签左上角x坐标
				float objy = 32+24*z;//计算左上角y坐标
				CreateNote(objx + 48 * x, objy + 48 * y, z+1, rand(1,note_type_count));//随机创建一个标签
			}
		}
	}
    
}

在main函数里呢,生成的就是对应的布局,上面呢我把注释都打好了,默认布局代码如上,你可能会说,好复杂我不会编程看不懂啊,咋办,小问题:

我们重点关注

host void CreateNote(float x,float y,float z,int id);

这个函数是创建标签用的,x,y表示要创建标签左上角坐标,每个标签必定是48x48大小的,z表示深度,越大则放置的越底下,在标签被上层遮盖时将不能被点击,id就是你png文件对应的数字,最大支持31个标签,id的范围是1-31,如果没有对应png图片,会创建失败,png图片格式必定是(1.png,2.png,3.png.....),当然你放的png越多,这个游戏就越难.

我举个例子,首先窗口左上角为原点坐标,y轴向下,x轴向右,我现在创建3个标签

#name "main"

host void CreateNote(float x,float y,float z,int id);
host int  rand(int min,int max);


export int main(int surface_width,int surface_height,int note_type_count)
{
    CreateNote(200,200,1,2);
    CreateNote(300,200,1,2);
    CreateNote(400,200,1,2);
}

那么,运行结果就是这样的

![](https://picx.zhimg.com/v2-634d99877392ce0d0f1b85b5b982cd14_r.jpg?source=2c26e567)

或者代码如果是这样的:

#name "main"

host void CreateNote(float x,float y,float z,int id);
host int  rand(int min,int max);


export int main(int surface_width,int surface_height,int note_type_count)
{
    int i;
    for (i = 1; i < 24; i++)
    {
        CreateNote(200+i*12,200,i,rand(1,8));
    }
}

那运行结果就是这样

![](https://picx.zhimg.com/v2-afd872414b8b1acff2c2eadcae989fd8_r.jpg?source=2c26e567)

当然,你也可以学习默认的代码,用代码手段去生成布局,PainterScript是我自己做自己用的一门语言,但用法和C基本很像,大家自行揣摩哈.
