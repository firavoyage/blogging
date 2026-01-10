# 我是如何使用 AI 辅助创作的

13 天前

技术

957

7

当前 2 人正在阅读手作

AI·GEN

### 关键洞察

作者说明近期文章中使用了 AI 辅助，技术类写作能提升效率并生成流程图与示例代码；但生活类写作因需讲述经历，反而更耗时。作者在年终总结中使用 AI 进行故事整理、结构优化与标题生成，并强调 AI 是辅助而非替代，最终文章仍需人工审阅与调整。

# 我是如何使用 AI 辅助创作的

如标题所见，在最近的编写的一些文章中，我使用了 AI 的辅助。其实早在过去一年编写的手记中，也常规的使用这个方式，只不过更多的用于标题的生成，我对文章的取名一直非常头疼，后来就写完整篇之后让 AI 综合全文的内容帮我提取几个关键字来取几个文艺点的标题。

在最近编写的文章中，如那篇「回头看见自己」中基本都是 AI 辅助编写的。我在「此站点」中增加了一个 Q&A：

> 在 25.11 月发布的文章都会公开：在编写文章时是否使用了 AI 的辅助。
>
> 可能很多人会反对使用 AI 进行创作，编写博客等等。那么当你看到文章顶部的 AI 声明之后你有权利选择直接关闭。
>
> 我个人并不反对使用 AI 辅助写作，当编写技术文章时，我可以借助 AI 帮我快速根据相关实现绘制流程图，以便读者更加清晰的理解，而在前 AI 时代，则往往需要花费大量的时间，或者因为这个理由而放弃绘图。当编写生活记录时，我往往借助 AI 帮我取一个标题，我承认我不是一个大作家，写不出更好的文笔或者叙事结构，我想记录故事，而 AI 帮我整理故事。

编写这篇文章首先是澄清关于 AI 的使用，另外也同时分享如何使用 AI 写出更好的文章。

## 提效 or 咬文嚼字[](https://innei.in/posts/tech/how-to-use-ai-for-assisted-creation#0__%E6%8F%90%E6%95%88-or-%E5%92%AC%E6%96%87%E5%9A%BC%E5%AD%97)

首先是一个问题，你认为使用 AI 辅助创作会节省大量时间吗？至少对我来说，需要分为两个维度。

在编写技术类文章时，确实会大幅节省，而且比手作的内容会更加完整。正如前面所说，在手作的时候，在画流程图会花费大量时间，往往会因为时间成本而放弃；在内容结构上也会精简掉很多。而借助 AI ，它可以阅读项目的代码，再加上你告诉他当时的实现思路，它可以很迅速的分析然后编写出叙事清晰的文字、流程，甚至使用 excalidraw 绘制图表。

在编写手记生活类文章，并不会节省时间，甚至会花费很多的时间，至少对我来说是这样。AI 并不知道你的生活发生了什么，生活不是代码，无从读起。我会把所有的经历说给 AI 听，这个过程中，相当于我已经完成了一遍文章的编写。在没有借助 AI 之前，差不多到这个时间就截稿了。取上标题和分段，就直接发布了。而现在，需要让 AI 结构，整理，调整上下文过度。然后我还要校对几次确保没有把我需要表达的内容曲解。有些措辞我感觉不好，就会多次询问 AI 修改等等。花的时间不止一点。

## 技术类文章辅助[](https://innei.in/posts/tech/how-to-use-ai-for-assisted-creation#1__%E6%8A%80%E6%9C%AF%E7%B1%BB%E6%96%87%E7%AB%A0%E8%BE%85%E5%8A%A9)

在编写  ![](https://innei.in/innei-dark.svg)[Better Auth 的多租户用户鉴权的构想](https://innei.in/posts/tech/better-auth-multi-tenant-auth-concept)  文章时，初次使用借助 AI 辅助作图的能力。比如解释为什么的时候，可以画一个图：

![](https://innei.in/_next/image?url=https%3A%2F%2Fobject.innei.in%2Fbed%2F2025%2F12%2F28%2F1766912702472.jpg&w=3840&q=75)

![](https://innei.in/_next/image?url=https%3A%2F%2Fobject.innei.in%2Fbed%2F2025%2F12%2F28%2F1766912702472.jpg&w=3840&q=75)

![不得不说这图画的比我好太多了](https://object.innei.in/bed/2025/12/28/1766912745622.jpg)

---

不得不说这图画的比我好太多了

再加上文章中有很多 Demo 代码，实际上都是实际业务中的代码抽离出来删掉很多多余的逻辑的，这个过程如果手动去改的话还挺容易删出问题，而且还需要增加注释和删除代码后的格式化问题，之前很多 demo 代码我都懒得管。而 AI 通过读项目，可以非常快速的写完 demo 代码，并且加上注释：

![](https://object.innei.in/bed/2025/12/28/1766912914022.jpg)

## 生活类文章辅助[](https://innei.in/posts/tech/how-to-use-ai-for-assisted-creation#2__%E7%94%9F%E6%B4%BB%E7%B1%BB%E6%96%87%E7%AB%A0%E8%BE%85%E5%8A%A9)

在今年的年终总结  ![](https://innei.in/innei-dark.svg)[2025 · 仍在路上，半径之外](https://innei.in/notes/205)  中，使用了  [LobeHub](https://lobehub.com/)  进行故事整理。

在开始之前我使用内置的 Agent Builder 构建了一个专门的写作助手：

![](https://object.innei.in/bed/2025/12/28/1766923461667.jpg)

![](https://object.innei.in/bed/2025/12/28/1766923511268.jpg)

随后在文档中进行内容创作：

![和 Agent 讲故事](https://object.innei.in/bed/2025/12/28/1766923850766.jpg)

---

和 Agent 讲故事

我会分段的和 Agent 讲故事，他会把故事写到文章里。你会发现这个过程中，我自己也会完全写作一遍，我的陈述和最后的插入的内容基本也是一致的。

在最后的过程中，可以进行小标题的重构：

![](https://object.innei.in/bed/2025/12/28/1766924152499.jpg)

然后进行一次 review，把很多段落重新调整，阅读一遍，发现有些措辞不太好，但是也不知道怎么改会比较好，我会询问 GPT。

![](https://object.innei.in/bed/2025/12/28/1766924302868.jpg)

找到一种我想要表达的方式，而不是过分的曲解。

再比如取名：

![](https://object.innei.in/bed/2025/12/28/1766924405268.jpg)

在这个案例看来，这篇年终总结所花费的时间比往年的更长，故事叙述大概花了 4 个多小时，然后是结构整理，改一些过度承接，取名等等。

感谢你能看到这里，此篇文章为手作。

文章标题：我是如何使用 AI 辅助创作的

文章作者：Innei

文章链接：https://innei.in/posts/tech/how-to-use-ai-for-assisted-creation \[复制\]

最后修改时间:  暂没有修改过

---

商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。  
本文采用  [CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

使用社交账号登录

- ![](https://authjs.dev/img/providers/google.svg)

免登录评论

- ![ami? who's avatar](https://cravatar.cn/avatar/ece862b9f3933a68f028654f0da7eac8?d=retro)

  ami? who6 天前#5 来自：台湾 Changhua 彰化

  佬，不好意思，找不到地方反馈问题，这里可能直接点。 感觉轻后台有点问题了，不清楚是不是这两天出现的，具体表现为： https://XXXX/dashboard -首页-正常， dashboard/posts/list——宇航员图案 /dashboard/notes/list ——宇航员图案 /dashboard/comments?tab=0 -评论-正常 /dashboard/passkey-正常。

  不正常的包括以下： 博文，手记，页面，分类的菜单都会出现宇航员。 难道我哪里配置错了。。刚开始用的时候感觉是正常的。

- ![Innei's avatar](https://cravatar.cn/avatar/6e08b60f32277bc359aacdac2712dd0f?d=retro)

  [Innei](https://innei.ren/)6 天前#5#1

  turbopack 害的，已经修复

- ![ami? who's avatar](https://cravatar.cn/avatar/ece862b9f3933a68f028654f0da7eac8?d=retro)

  ami? who6 天前#5#1#1

  谢谢，刚刚拉了最新的现在可以了，我就寻思半天呢，还以为 Nginx 又抽风了

- ![游钓四方's avatar](https://cravatar.cn/avatar/4eeae7ceae2cffa782ff314386ea11be?d=retro)

  [游钓四方](https://blog.lhasa.icu/)11 天前#4 来自：香港 Tsuen Wan DistrictTsuen Wan

  Claude Code 编程，Antigravity 交互，Gemini 看文档，改文字。这一套组合拳下来，没有解决不了的事情

- ![阿杰 Jack's avatar](https://cravatar.cn/avatar/7a41a0e8e1df8e964fa1268193b03508?d=retro)

  [阿杰 Jack](https://veryjack.com/)12 天前#3 来自：美国加州洛杉矶

  我用 AI 辅助写作只会让他帮我检查语句是否流畅通顺，其余保持自己的风格（虽然我文笔也不好 🙈）。

- ![koko's avatar](https://cravatar.cn/avatar/9404fe0d9b1b4c6e2dd4ab70f8670246?d=retro)

  koko12 天前#2 来自：新加坡 Central Singapore 新加坡

  👍

- ![去年夏天's avatar](https://cravatar.cn/avatar/8be7bc54866d836b42b2d57c6a1a6e39?d=retro)

  [去年夏天](https://www.tjsky.net/)12 天前#1 来自：香港 Kowloon 香港

  AI 辅助写作其实有点需要注意：尽量不要让 AI 发表主观观点，因为 AI 过于客观了，以至于会和其他文章形成人设的割裂。

- ![Innei's avatar](https://cravatar.cn/avatar/6e08b60f32277bc359aacdac2712dd0f?d=retro)

  [Innei](https://innei.ren/)12 天前#1#1

  所以我都是讲故事的方式写的 ai 不会发表观点
