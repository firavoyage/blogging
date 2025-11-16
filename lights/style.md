# 中文技术文档的写作规范

作者： [阮一峰](https://www.ruanyifeng.com/)

日期： [2016 年 10 月 18 日](https://www.ruanyifeng.com/blog/2016/10/)

很多人说，不知道怎么写文档，都是凭着感觉写。

网上也很少有资料，教你写文档。这已经影响了中文软件的发展。

![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101801.jpg)

英语世界里，文档非常受重视，许多公司和组织都有自己的文档规范，清楚地规定写作要求，比如[微软](https://www.microsoftpressstore.com/store/microsoft-manual-of-style-9780735648715)、[MailChimp](http://styleguide.mailchimp.com/)、[Apple](https://help.apple.com/asg/mac/2013/ASG_2013.pdf)、[Yahoo](https://www.amazon.com/dp/B003P8QDFU/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)、[docker](https://docs.docker.com/opensource/doc-style/)、[Struts](https://struts.apache.org/docs/documentation-style-guide.html)  等等（维基百科有一份完整的[清单](https://en.wikipedia.org/wiki/List_of_style_guides)）。[中文的](https://github.com/ruanyf/document-style-guide/blob/master/docs/reference.md)也有不少，但都不令人满意，要么太简单，要么不太适用。

我就动手，参考上面的规范，也结合自己的实践，总结了一份简单的[《中文技术文档的写作规范》](https://github.com/ruanyf/document-style-guide)。

> 1.  [标题](https://github.com/ruanyf/document-style-guide/blob/master/docs/title.md)
> 2.  [文本](https://github.com/ruanyf/document-style-guide/blob/master/docs/text.md)
> 3.  [段落](https://github.com/ruanyf/document-style-guide/blob/master/docs/paragraph.md)
> 4.  [数值](https://github.com/ruanyf/document-style-guide/blob/master/docs/number.md)
> 5.  [标点符号](https://github.com/ruanyf/document-style-guide/blob/master/docs/marks.md)
> 6.  [章节结构](https://github.com/ruanyf/document-style-guide/blob/master/docs/structure.md)

我希望，这样可以抛砖引玉，让更多人重视文档，进而真正出现大家普遍接受的文档规范。

下面是关于写作风格的一个片段。欢迎提交  [Issue](https://github.com/ruanyf/document-style-guide/issues)  和  [PR](https://github.com/ruanyf/document-style-guide/pulls)  补充。

\=================================

## 写作风格

（摘自[《中文技术文档的写作规范》](https://github.com/ruanyf/document-style-guide)）

![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101802.jpg)

如果使用了被动语态，应考虑更改为主动语态。

> ```markup
>
> 错误：假如此软件尚未被安装，
>
> 正确：假如尚未安装这个软件，
> ```

不使用非正式的语言风格。

> ```markup
>
> 错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！
>
> 正确：无法参加本次活动，我深感遗憾。
> ```

用对"的"、"地"、"得"。

> ```markup
>
> 她露出了开心的笑容。
> （形容词＋的＋名词）
>
> 她开心地笑了。
> （副词＋地＋动词）
>
> 她笑得很开心。
> （动词＋得＋副词）
> ```

使用代词时（比如"其"、"该"、"此"、"这"等词），必须明确指代的内容，保证只有一个含义。

> ```markup
>
> 错误：从管理系统可以监视中继系统和受其直接控制的分配系统。
>
> 正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
> ```

名词前不要使用过多的形式词。

> ```markup
>
> 错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。
>
> 正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。
> ```

句子的长度尽量保持在 20 个字以内；20 ～ 29 个字的句子，可以接受；39 ～ 39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，在任何情况下都不能接受。

> ```markup
>
> 错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。
>
> 正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
> ```

同样一个意思，尽量使用肯定句表达，不使用否定句表达。

> ```markup
>
> 错误：请确认没有接通装置的电源。
>
> 正确：请确认装置的电源已关闭。
> ```

避免使用双重否定句。

> ```markup
>
> 错误：没有删除权限的用户，不能删除此文件。
>
> 正确：用户必须拥有删除权限，才能删除此文件。
> ```

（正文完）

\====================================

下面是推广时间。不过我想先说一些题外话。

![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101504.jpg)

如果你经常来这里，可能会注意到，有的文章结尾有市场推广信息。[上一篇文章](https://www.ruanyifeng.com/blog/2016/10/online_education.html)就是这样，我的《财新周刊》专栏写到了 Udacity，他们正好在推广纳米学位，就在那篇文章后面做了一个广告。有的朋友因此指责我写"软文"，这不是事实。

事实是，我的博客上没有一篇是"软文"，尽管一直有人来问价格。所有的文章都是真实想法，都是我真心想分享的东西。每一个来访问的读者，我都当作是朋友，不会把一篇广告伪装成正常的文章，去欺骗朋友。这一直是我做人的信条，不会为了一点点钱，就把这么多年的坚持都抛弃了。

推广活动都放在文章的结尾，明确注明是推广，并且我只接受那些我认可的产品。对我来说，这点收入可以补贴服务器支出；对许多读者来说，有些信息可能非常有用，比如下面这条。

\====================================

今天推广的主角是["海棠学院"](http://apeclass.cn/)，一个前端开发的在线教育平台。

[![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101501.jpg)](http://apeclass.cn/)

创始人小河就是培训班出身，通过自身努力进入百度，深知自学者的苦恼：企业不愿意要培训班出来的学生，而学生不知道应该选哪一家培训机构。他创业的时候，立志要做一家靠谱的、有信誉、有口碑的在线教育公司。

"海棠学院"的很多讲师都有百度背景，开发过用户上亿的产品。为了做出最容易学会的课程，他们反复尝试，不惜放弃已经录好的 500 多个课时，推倒重来。功夫不负有心人，"海棠学院"现在已经取得了很好的成绩。

> - 两门免费课在腾讯课题排名和，已经稳定了两个月。
> - 在[网易云课堂](http://study.163.com/course/courseMain.htm?courseId=1003225036)，[百度传课](http://www.chuanke.com/v7521771-188496-1055254.html)等平台也是名列前茅。
> - 区别于别家，他们免费课的评价与报名人数真真实实，没有水分。

更难得的是，"海棠学院"是工程师的创业项目，甚至都没有市场销售人员，完全靠用户的口碑来推广。如果课程质量不好，他们马上就完蛋了。

[![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101502.jpg)](http://apeclass.cn/99/index.html)

现在，为了发展更多的用户，也是因为对课程很有信心，他们搞了一个[活动](http://apeclass.cn/99/index.html)，抛弃 "先付费、再学习" 的模式，让用户零成本体验他们提供高质量培训。

> 1.  只需要缴纳 99 元，即可感受海棠学院一周的课程，与正式学员享受一模一样的待遇（录播+直播+教学监管+技术辅导）。
> 2.  一周后，如果觉得不满意，99 元可以退款。
> 3.  如果想继续学下去，已经缴纳的 99 元可以抵扣学费，并且学费还可以再优惠 900 元。也就是说，参加这个活动比起直接报名，可以一共节省 999 元的学费。
> 4.  **我的读者还可以使用独家优惠码"ruanyifeng"，学费再抵扣 300 元。**

整个课程一共需要 4.5 个月左右，涉及前端开发的各个方面，目标是通过一次系统的培训，你就能从事前端开发这项工作。遇到不懂的地方，可以重学，他们保证让你学会。

想从事前端开发，却不知道从何学起的朋友，不要错过这个机会。只需 99 元，就可以感受一下专业级、全方位的培训服务，如果不满意，99 元还可以退款。

这个活动 10 月 31 日截止，因为当天就开课了，后面就恢复原价了。现在 就点击[这里](http://apeclass.cn/99/index.html)了解详情吧。

![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016101503.jpg)

（完）

### 文档信息

- 版权声明：自由转载-非商用-非衍生-保持署名（[创意共享 3.0 许可证](http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）
- 发表日期： 2016 年 10 月 18 日

## 相关文章

- **2025.07.24: [扣子空间网页设计，是在挑战 V0 吗？](https://www.ruanyifeng.com/blog/2025/07/coze-space-web-design.html)**

  一、 扣子（coze.cn）大概是字节旗下最不好定义的产品。

- **2025.06.24: [国产 AI 网页开发工具：豆包 AI 编程简单测评](https://www.ruanyifeng.com/blog/2025/06/doubao-ai-coding.html)**

  一、引言 AI 编程（AI coding）是眼下的热点，但它其实不是单一功能，而是分成不同的方向。

- **2025.05.01: [谷歌的 NotebookLM 能生成中文播客了](https://www.ruanyifeng.com/blog/2025/05/notebooklm.html)**

  两天前，谷歌发了一个公告。

- **2025.04.22: [巨头的新战场：AI 编程 IDE（暨 字节 Trae 调用 MCP 教程）](https://www.ruanyifeng.com/blog/2025/04/trae-mcp.html)**

  一、引言 本周，我要加写一篇文章。

## 留言（57 条）

asdf  说：

这个厉害了， 兼收并蓄， 中文强大指日可待

2016 年 10 月 18 日 08:38 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366522) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用asdf的这条留言")

hadeser  说：

这个要

2016 年 10 月 18 日 08:43 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366523) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用hadeser的这条留言")

MGhostSoft  说：

中文字符和阿拉伯数字之间有空格不是必须的吧？尤其是表示日期的时候，我没见过任何中文本地化的软件在数字和“年月日”这几个字之间添加空格。

2016 年 10 月 18 日 09:01 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366525) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用MGhostSoft的这条留言")

Kevin  说：

干货

2016 年 10 月 18 日 09:05 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366526) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Kevin的这条留言")

MGhostSoft  说：

“表示数值范围时，用～连接。”  
这个波浪线应该是全角～还是半角 ~ ？

《标点符号》一节中有如下正确例子：  
正确：关于文件的输出，请参照第 1.3 节（见第 26 页）。

为什么此处的半角阿拉伯数字与中文字符之间没有空格？

2016 年 10 月 18 日 09:07 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366527) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用MGhostSoft的这条留言")

余创雄   说：

阮老师，能否将您编写的《中文技文档的写作规范》发电子版给我呢?  
我看了你的文章，觉得普通的办公室人员都应按此规范写作——我不是搞技术的。  
149286228@qq.com

P.s.上一篇文章关于网络文凭的讨论获益匪浅，推荐的课程也非常好，已转可能有需要的朋友。

2016 年 10 月 18 日 09:15 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366528) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用余创雄的这条留言")

bobbyworm  说：

“数值”一章的第一个例子“XXX 公司的实收资本为 RMB 1,258,000。”  
如果按“文本”一章的要求，RMB 与前面的汉字之间应该有空格。

2016 年 10 月 18 日 09:17 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366529) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用bobbyworm的这条留言")

Ts  说：

神奇的土地上，动不动就说自己有 BAT 背景。。。

2016 年 10 月 18 日 09:19 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366530) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Ts的这条留言")

阮一峰   说：

@MGhostSoft：

中文单位与数字之间是否要有空格？可以开个 issue，讨论一下。

句子一：体重是 68 公斤。

句子二：体重是 68 公斤。

句子三：今年是 2016 年。

句子四：现在是 8 点 36 分。

哪种写法更规范一些？

2016 年 10 月 18 日 09:21 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366531) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用阮一峰的这条留言")

文雨   说：

总金额是 6499  
我估计不少人都是想问这个的

2016 年 10 月 18 日 09:22 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366532) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用文雨的这条留言")

Kevin  说：

> 引用余创雄的发言：
>
> 阮老师，能否将您编写的《中文技文档的写作规范》发电子版给我呢?  
> 我看了你的文章，觉得普通的办公室人员都应按此规范写作——我不是搞技术的。  
> 149286228@qq.com
>
> P.s.上一篇文章关于网络文凭的讨论获益匪浅，推荐的课程也非常好，已转可能有需要的朋友。

这个是 Github 上的动态项目，不是 PDF 之类的，直接看连接就可以了。

2016 年 10 月 18 日 09:23 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366533) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Kevin的这条留言")

阮一峰   说：

@MGhostSoft：波浪线应该占据一个全角字符的位置。这句例子，已经改掉了。

@bobbyworm：这是 bug，已经改掉了。

@余创雄：等规范稳定下来，再做成 pdf 文件。

2016 年 10 月 18 日 09:26 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366534) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用阮一峰的这条留言")

阮一峰   说：

《数值与中文单位之间是否要加空格？》请到下面的 issue 讨论。

[https://github.com/ruanyf/document-style-guide/issues/2](https://github.com/ruanyf/document-style-guide/issues/2)

2016 年 10 月 18 日 09:41 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366535) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用阮一峰的这条留言")

ray  说：

新语文大纲里"的"、"地"早就统一成“的”，现在的中学生应该不区分两者了

2016 年 10 月 18 日 09:44 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366536) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用ray的这条留言")

Louis  说：

期待您关于微信小程序的文章

2016 年 10 月 18 日 11:10 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366542) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Louis的这条留言")

ciwei  说：

峰哥牛逼，能把简单的事情规范起来。我原来怕写作，从你博客中收益良多，现在开始有兴趣了，我在学习用类似 markdown 的简易排版写文章

2016 年 10 月 19 日 14:43 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366669) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用ciwei的这条留言")

行者自若   说：

另外还要考虑的是中文的独有特点，某些词语既可名词也可动词的时候，可以优先考虑动词。比如：「请对 XXX 做一些修改」--->「请稍微修改 XXX」。

2016 年 10 月 19 日 15:54 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366671) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用行者自若的这条留言")

陆   说：

文中“39 ～ 39 个字的句子”,应该为“30~39 个字的句子”吧

2016 年 10 月 20 日 08:48 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366690) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用陆的这条留言")

xin  说：

正好用到，昨天整了一天的技术文档，还没有整理完，感觉最麻烦的地方还是在 word 的目录结构上，经常突发性地发现标题顺序都不对了，然后那么长的文档要来回检查几遍。不知道阮老师平时是怎么处理文档目录结构的？

2016 年 10 月 20 日 09:41 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366691) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用xin的这条留言")

riclava  说：

厉害了，我的哥~

2016 年 10 月 21 日 09:33 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366765) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用riclava的这条留言")

willizm  说：

大神这篇写得有点短

2016 年 10 月 21 日 13:03 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366783) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用willizm的这条留言")

小小人   说：

阮老师广告费赚了不少了吧

2016 年 10 月 21 日 17:04 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366822) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用小小人的这条留言")

李仙   说：

阮老师，您好，一直有关注您写的文章，写的真的是很试用的内容。我是 51CTO 的运用工作人员，希望能转载您的文章到我们的网站，您看可以吗？

2016 年 10 月 23 日 17:03 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366954) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用李仙的这条留言")

jacketli  说：

写得真好！有些翻译的教程，就是需要提高这些基础文字功底。让读者更容易理解。

2016 年 10 月 24 日 10:57 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-366958) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用jacketli的这条留言")

macarole  说：

阮老师怎么没有 webpack 优化教程呀

2016 年 10 月 26 日 11:26 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367124) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用macarole的这条留言")

zzl  说：

这个事做的真是功德无量。

2016 年 10 月 26 日 21:40 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367153) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用zzl的这条留言")

豪翔天下   说：

确实很强大，也很正确，但是中文的语法在实际运用中，特别是用得较少的场景，很难养成习惯的

2016 年 10 月 27 日 14:41 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367189) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用豪翔天下的这条留言")

肖一林   说：

很及时啊，最近想写博客，但是发现语言太难组织了。没想到这篇文章会在这时候出现。感谢

2016 年 10 月 28 日 15:14 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367270) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用肖一林的这条留言")

木易   说：

我觉得标点符号一定要用好，避免一大整段下来都是逗号加句号。

2016 年 10 月 30 日 00:51 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367357) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用木易的这条留言")

seagate  说：

段落的开头不能留有空格。  
－－－－－－－－－－  
话说，写作文是不是要空两格吗？

2016 年 11 月 2 日 19:03 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367622) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用seagate的这条留言")

facade  说：

我对写作的标点符号非常的烦恼，编码过程中必然需要使用半角/英文，而写技术文档过程中，又存在大量的英文和中文的结合，需要中文标点，英文标点的结合。  
不知道大家是如何办到的。

2016 年 11 月 6 日 17:30 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-367877) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用facade的这条留言")

陆崖   说：

本来觉得文章最后那个推广还不错,但是说道百度背景就意兴阑珊了,百度给我的体验实在是差,特别是手机版

2016 年 11 月 14 日 11:35 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-368343) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用陆崖的这条留言")

茶小调   说：

以前写文档都是逗号逗号逗号逗号句号，完了。现在终于有一丢丢入门的感觉了。

2016 年 11 月 14 日 18:21 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-368378) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用茶小调的这条留言")

ZetaChow  说：

这篇文章的内容太好了。  
已经转发公司所有部门负责文档编写的人员。  
感谢！

2016 年 11 月 25 日 15:43 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-369175) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用ZetaChow的这条留言")

Melon 丶   说：

我觉得阮大神有点推广什么的完全可以理解，甚至是应该的，因为大神发布的一直都是免费而有用的干货，知识不仅是力量，说得现实点，现在知识就是金钱，中国软件发展的一个问题就是大部分国人没有为知识付费的习惯，支持你 阮大神

2016 年 11 月 28 日 18:32 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-369380) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Melon丶的这条留言")

LarryZeal  说：

本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。

改成：

本产品适用于多种体系结构：无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。

是否更恰当？

2016 年 12 月 7 日 12:44 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-369986) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用LarryZeal的这条留言")

hudk  说：

句子的长度尽量保持在 20 个字以内；20 ～ 29 个字的句子，可以接受；39 ～ 39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，在任何情况下都不能接受。

应该是 30 ～ 39

2016 年 12 月 14 日 23:36 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-370403) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用hudk的这条留言")

SnowOnion  说：

@ray  
不信。请求来源

\>>ray 说：  
\>>新语文大纲里"的"、"地"早就统一成“的”，现在的中学生应该不区分两者了

2016 年 12 月 22 日 22:38 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-370875) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用SnowOnion的这条留言")

yinfei  说：

> 引用 SnowOnion 的发言：
>
> @ray  
> 不信。请求来源

“的”的释义

\[5\]副词尾，同“地 2”。

2016 年 12 月 23 日 17:16 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-370939) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用yinfei的这条留言")

国栋   说：

好东西，争取向规范靠拢。

2017 年 1 月 6 日 16:51 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-371669) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用国栋的这条留言")

张森 Vinson  说：

支持峰哥。  
英文的规范可以拿来参考：  
1，数字后面跟单位的话，空一格。  
如：桌子长 8 米。  
2，标点符号紧跟前面中文文字，无空格。（这个需要加上与否？）

2017 年 1 月 18 日 16:06 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372062) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用张森Vinson的这条留言")

李星阳   说：

感谢阮老师的分享

2017 年 1 月 19 日 14:44 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372119) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用李星阳的这条留言")

Jacky  说：

> 引用 MGhostSoft 的发言：
>
> 中文字符和阿拉伯数字之间有空格不是必须的吧？尤其是表示日期的时候，我没见过任何中文本地化的软件在数字和“年月日”这几个字之间添加空格。

个人习惯，纯数字的话，我一般不加空格，如果有英文字母，我会在和中文字之间都加入空格。也就是说，遵循微软和苹果操作系统的习惯。

2017 年 2 月 4 日 11:13 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372351) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Jacky的这条留言")

Jacky  说：

> 引用 facade 的发言：
>
> 我对写作的标点符号非常的烦恼，编码过程中必然需要使用半角/英文，而写技术文档过程中，又存在大量的英文和中文的结合，需要中文标点，英文标点的结合。  
> 不知道大家是如何办到的。

我个人习惯：在中文中，全部使用中文全角标点；在英文中，全部使用英文半角标点。

1\. 大量的代码快，本身是独立的，麻烦不大。  
2\. 两种混杂的，在哪种语境中就用哪种符号。如：

> 博主（ruanyifeng）的个人主页是：http://www.ruanyifeng.com。欢迎大家常来访问。

上面这个例子，括号和冒号我用中文，网址部分则全部使用英文。

> Microsoft Corporation (中文名：微软公司) is one of the world's most valuable companies.

上面这个例子，括号我用英文，括号里面则使用中文冒号。

3\. 中英文位居不同的行或段落，遵循各自的标准。

> 从指定的网络 URL 下载文件到本机路径。
>
> Downloading a file from the specified internet URL to a local path.

以上内容仅用于演示符号使用习惯，内容和语法不作为文档编写标准参考。

2017 年 2 月 4 日 11:14 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372352) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Jacky的这条留言")

Izual_Yang  说：

> 引用阮一峰的发言：
>
> @MGhostSoft：
>
> 中文单位与数字之间是否要有空格？可以开个 issue，讨论一下。
>
> 句子一：体重是 68 公斤。
>
> 句子二：体重是 68 公斤。
>
> 句子三：今年是 2016 年。
>
> 句子四：现在是 8 点 36 分。
>
> 哪种写法更规范一些？

从美观角度来看，前后都加上空格比较对称。从含义的连贯性和文本编辑器自动折行角度来看，前面加个空格似乎也就够了

2017 年 2 月 5 日 23:35 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372416) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Izual_Yang的这条留言")

蓝栩液枫   说：

看了好几篇了，感觉受益非浅，留个言以示谢意。。。

2017 年 2 月 14 日 22:14 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372943) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用蓝栩液枫的这条留言")

猪头哥   说：

去海棠学院的主页看了，真的比较丑，随手点了几个链接，居然还有 404 页面......

2017 年 2 月 16 日 14:59 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-372978) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用猪头哥的这条留言")

Song  说：

好文章，有兴趣的朋友也话可以看看[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)

2017 年 3 月 6 日 00:34 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-374024) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Song的这条留言")

哇咔咔！  说：

你好，今天刚刚关注！！！

2017 年 4 月 12 日 18:13 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-376218) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用哇咔咔！的这条留言")

杨廷兴   说：

非常佩服您的坚持、对事物的追求，技术的精湛！  
好榜样！

2017 年 4 月 19 日 16:40 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-376456) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用杨廷兴的这条留言")

owl  说：

最近在了解 docker,偶然间看到你的博客。有条理很清晰，点到为止又紧扣主题。你太厉害了。

2019 年 4 月 13 日 17:10 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-410552) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用owl的这条留言")

吕涛   说：

阮老师，海棠学院已经下架了吗？

2019 年 6 月 6 日 18:11 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-411634) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用吕涛的这条留言")

Tara  说：

这个赞，补充语文知识

2019 年 6 月 14 日 13:25 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-411744) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用Tara的这条留言")

郑钰   说：

请问阮老师，有没有哪种工具，可以帮助技术写作人员在编写文档的时候自动提醒他们不符合规范了（比如使用 Oxygen XML Editor）？ 就想程序员敲代码有用于检查代码规范的软件一样？

2021 年 3 月 19 日 17:17 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-426036) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用郑钰的这条留言")

h3c  说：

> 引用 facade 的发言：
>
> 我对写作的标点符号非常的烦恼，编码过程中必然需要使用半角/英文，而写技术文档过程中，又存在大量的英文和中文的结合，需要中文标点，英文标点的结合。  
> 不知道大家是如何办到的。

你需要换一个输入法，好的输入法会在输入英文时使用英文标点输中文时使用中文标点。

2023 年 4 月 25 日 09:51 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-437820) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用h3c的这条留言")

bing98  说：

老师对我的影响有点大，感觉虽然还不明确方向，但已经找到路了

2023 年 6 月 1 日 18:04 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-438268) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用bing98的这条留言")

阎一鸣   说：

有时候直接去掉"被"字也能表达被动.

错误：假如此软件尚未被安装，

正确：假如此软件尚未安装，

2023 年 6 月 9 日 11:58 | [#](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-438390) | [引用](https://www.ruanyifeng.com/blog/2016/10/document_style_guide.html#comment-text "引用阎一鸣的这条留言")
