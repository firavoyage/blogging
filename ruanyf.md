# ruanyf weekly

## .

> reading [ruanyf weekly archive](https://www.ruanyifeng.com/blog/weekly/)

- taken
  - creative apps
  - startup stories
  - inspiring quotes
  - design theorems
  - programming guides
  - useful libraries
  - ...
- ignored
  - business news
  - useless stylish hardwares
  - proof of concept tools
  - biological & astronomical findings
  - ...

> tags for searching

- `dev` crafts
- `css` vistas
- `js` frameworks
- `py` toys
- `algorithms` steps of math calculation
- `library` chapters
- `info` resources
- `guide` tutorials
- `app` creators and viewers
- `image` stylers
- `text` editors
- `feed` trackers
- `game` diversions
- `retro` good old days
- `design` beauties
- `art` opuses
- `view` thoughts
- `theory` insights
- `quote` aftertastes
- `meme` posts
- `weather` under the expanse
- `career` endeavours
- `society` phenomena
- `story` stones from other hills
- `history` legacies
- `editorial` clarity
- `literary` flowers
- `ref` masterpieces
- `misc` from elsewhere
- ...

## ruanyf weekly mission

`career` `retro` `ref`

1

这里记录过去一周，我看到的值得分享的东西。

长久以来，我一直用各种方式，尝试整理我的收藏夹。最近想到，把它写成文章，共享出来，也许效果更好。

2

上周发了第一期以后，有朋友问为什么写这个专栏？

我想了想，除了整理收藏夹，主要原因还是我希望自己多发声。长久以来，我一直努力，每周更新博客，但是现在做不到：简单的题材不值得写，复杂的题材一周时间不够准备。有了这个专栏，就能保证每周都有新内容发布。

而且，这个专栏可以写任何东西，方便我对一些事情发表看法。这个世界正在剧烈变化，每个人的命运都是那么的不确定，我想让自己的声音传播出去，让尽可能多的人听到，团结志同道合的人，也许将来可以在一起做一些有意义的事情。

3

本周开始，这个专栏每周五发布，希望为大家的周末提供一些阅读材料。另一个考虑是，我希望这个专栏有可读性，不要太偏向机器，而要偏向人。放到周五发，就是为了提醒自己，要写得轻松一点。

我当学生的时候，最流行的读物是《读者》和《女友》，最高时全国发行 1000 万册。我当时就想，如果有类似的工程师杂志该多好，专门发表介绍科学和技术的那种小品文，肯定会大受欢迎，至少我很愿意看。这么多年过去了，梦想中的这本杂志一直没有问世，那么现在我来尝试做做看。

## basic theoretical concepts of react js

`js` `guide` `theory`

React - Basic Theoretical Concepts

React 官方关于 React 原始设计思想的解释。

https://github.com/reactjs/react-basic

---

### React - Basic Theoretical Concepts

This document is my attempt to formally explain my mental model of React. The intention is to describe this in terms of deductive reasoning that lead us to this design.

There may certainly be some premises that are debatable and the actual design of this example may have bugs and gaps. This is just the beginning of formalizing it. Feel free to send a pull request if you have a better idea of how to formalize it. The progression from simple -> complex should make sense along the way without too many library details shining through.

The actual implementation of React.js is full of pragmatic solutions, incremental steps, algorithmic optimizations, legacy code, debug tooling and things you need to make it actually useful. Those things are more fleeting, can change over time if it is valuable enough and have high enough priority. The actual implementation is much more difficult to reason about.

I like to have a simpler mental model that I can ground myself in.

#### Transformation

The core premise for React is that UIs are simply a projection of data into a different form of data. The same input gives the same output. A simple pure function.

```js
function NameBox(name) {
  return { fontWeight: "bold", labelContent: name };
}
```

```js
'Sebastian Markbåge' ->
{ fontWeight: 'bold', labelContent: 'Sebastian Markbåge' };
```

#### Abstraction

You can't fit a complex UI in a single function though. It is important that UIs can be abstracted into reusable pieces that don't leak their implementation details. Such as calling one function from another.

```js
function FancyUserBox(user) {
  return {
    borderStyle: "1px solid blue",
    childContent: ["Name: ", NameBox(user.firstName + " " + user.lastName)],
  };
}
```

```js
{ firstName: 'Sebastian', lastName: 'Markbåge' } ->
{
  borderStyle: '1px solid blue',
  childContent: [
    'Name: ',
    { fontWeight: 'bold', labelContent: 'Sebastian Markbåge' }
  ]
};
```

#### Composition

To achieve truly reusable features, it is not enough to simply reuse leaves and build new containers for them. You also need to be able to build abstractions from the containers that *compose* other abstractions. The way I think about "composition" is that they're combining two or more different abstractions into a new one.

```js
function FancyBox(children) {
  return {
    borderStyle: "1px solid blue",
    children: children,
  };
}

function UserBox(user) {
  return FancyBox(["Name: ", NameBox(user.firstName + " " + user.lastName)]);
}
```

#### State

A UI is NOT simply a replication of server / business logic state. There is actually a lot of state that is specific to an exact projection and not others. For example, if you start typing in a text field. That may or may not be replicated to other tabs or to your mobile device. Scroll position is a typical example that you almost never want to replicate across multiple projections.

We tend to prefer our data model to be immutable. We thread functions through that can update state as a single atom at the top.

```js
function FancyNameBox(user, likes, onClick) {
  return FancyBox([
    "Name: ",
    NameBox(user.firstName + " " + user.lastName),
    "Likes: ",
    LikeBox(likes),
    LikeButton(onClick),
  ]);
}

// Implementation Details

var likes = 0;
function addOneMoreLike() {
  likes++;
  rerender();
}

// Init

FancyNameBox(
  { firstName: "Sebastian", lastName: "Markbåge" },
  likes,
  addOneMoreLike
);
```

_NOTE: These examples use side-effects to update state. My actual mental model of this is that they return the next version of state during an "update" pass. It was simpler to explain without that but we'll want to change these examples in the future._

#### Memoization

Calling the same function over and over again is wasteful if we know that the function is pure. We can create a memoized version of a function that keeps track of the last argument and last result. That way we don't have to reexecute it if we keep using the same value.

```js
function memoize(fn) {
  var cachedArg;
  var cachedResult;
  return function (arg) {
    if (cachedArg === arg) {
      return cachedResult;
    }
    cachedArg = arg;
    cachedResult = fn(arg);
    return cachedResult;
  };
}

var MemoizedNameBox = memoize(NameBox);

function NameAndAgeBox(user, currentTime) {
  return FancyBox([
    "Name: ",
    MemoizedNameBox(user.firstName + " " + user.lastName),
    "Age in milliseconds: ",
    currentTime - user.dateOfBirth,
  ]);
}
```

#### Lists

Most UIs are some form of lists that then produce multiple different values for each item in the list. This creates a natural hierarchy.

To manage the state for each item in a list we can create a Map that holds the state for a particular item.

```js
function UserList(users, likesPerUser, updateUserLikes) {
  return users.map((user) =>
    FancyNameBox(user, likesPerUser.get(user.id), () =>
      updateUserLikes(user.id, likesPerUser.get(user.id) + 1)
    )
  );
}

var likesPerUser = new Map();
function updateUserLikes(id, likeCount) {
  likesPerUser.set(id, likeCount);
  rerender();
}

UserList(data.users, likesPerUser, updateUserLikes);
```

_NOTE: We now have multiple different arguments passed to FancyNameBox. That breaks our memoization because we can only remember one value at a time. More on that below._

#### Continuations

Unfortunately, since there are so many lists of lists all over the place in UIs, it becomes quite a lot of boilerplate to manage that explicitly.

We can move some of this boilerplate out of our critical business logic by deferring execution of a function. For example, by using "currying" ([`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) in JavaScript). Then we pass the state through from outside our core functions that are now free of boilerplate.

This isn't reducing boilerplate but is at least moving it out of the critical business logic.

```js
function FancyUserList(users) {
  return FancyBox(UserList.bind(null, users));
}

const box = FancyUserList(data.users);
const resolvedChildren = box.children(likesPerUser, updateUserLikes);
const resolvedBox = {
  ...box,
  children: resolvedChildren,
};
```

#### State Map

We know from earlier that once we see repeated patterns we can use composition to avoid reimplementing the same pattern over and over again. We can move the logic of extracting and passing state to a low-level function that we reuse a lot.

```js
function FancyBoxWithState(
  children,
  stateMap,
  updateState
) {
  return FancyBox(
    children.map(child => child.continuation(
      stateMap.get(child.key),
      updateState
    ))
  );
}

function UserList(users) {
  return users.map(user => {
    continuation: FancyNameBox.bind(null, user),
    key: user.id
  });
}

function FancyUserList(users) {
  return FancyBoxWithState.bind(null,
    UserList(users)
  );
}

const continuation = FancyUserList(data.users);
continuation(likesPerUser, updateUserLikes);
```

#### Memoization Map

Once we want to memoize multiple items in a list memoization becomes much harder. You have to figure out some complex caching algorithm that balances memory usage with frequency.

Luckily, UIs tend to be fairly stable in the same position. The same position in the tree gets the same value every time. This tree turns out to be a really useful strategy for memoization.

We can use the same trick we used for state and pass a memoization cache through the composable function.

```js
function memoize(fn) {
  return function (arg, memoizationCache) {
    if (memoizationCache.arg === arg) {
      return memoizationCache.result;
    }
    const result = fn(arg);
    memoizationCache.arg = arg;
    memoizationCache.result = result;
    return result;
  };
}

function FancyBoxWithState(children, stateMap, updateState, memoizationCache) {
  return FancyBox(
    children.map((child) =>
      child.continuation(
        stateMap.get(child.key),
        updateState,
        memoizationCache.get(child.key)
      )
    )
  );
}

const MemoizedFancyNameBox = memoize(FancyNameBox);
```

#### Algebraic Effects

It turns out that it is kind of a PITA to pass every little value you might need through several levels of abstractions. It is kind of nice to sometimes have a shortcut to pass things between two abstractions without involving the intermediates. In React we call this "context".

Sometimes the data dependencies don't neatly follow the abstraction tree. For example, in layout algorithms you need to know something about the size of your children before you can completely fulfill their position.

Now, this example is a bit "out there". I'll use [Algebraic Effects](http://math.andrej.com/eff/) as [proposed for ECMAScript](https://esdiscuss.org/topic/one-shot-delimited-continuations-with-effect-handlers). If you're familiar with functional programming, they're avoiding the intermediate ceremony imposed by monads.

```js
function ThemeBorderColorRequest() { }

function FancyBox(children) {
  const color = raise new ThemeBorderColorRequest();
  return {
    borderWidth: '1px',
    borderColor: color,
    children: children
  };
}

function BlueTheme(children) {
  return try {
    children();
  } catch effect ThemeBorderColorRequest -> [, continuation] {
    continuation('blue');
  }
}

function App(data) {
  return BlueTheme(
    FancyUserList.bind(null, data.users)
  );
}
```

## css pro tips

`css` `guide` `library`

css-protips

https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-CN

一个收集 CSS 使用技巧的库。

## json founder's namecard

`dev` `design` `meme`

Douglas Crockford 的名片

![](https://seriot.ch/json/json_business_card.png)

http://seriot.ch/parsing_json.php

2001 年，Douglas Crockford 发明了 JSON 格式。他声称这种格式极其简单，全部语法可以印在一张名片上，而且所有应该有的语法都有了，以后也不需要再增订，因此 JSON 格式没有版本号。上面就是他的名片的背面图案。

但是，我们现在知道，JSON 格式的解析器很难写，因为它没有规定如何处理各种边界情况。

## the internet no longer feels wonderful

`quote` `retro`

十八年前刚刚接触网络，常常有世界触手可及的奇妙感觉。如今技术越来越先进，那种感觉却越来越少。（网友）

## revenue of writing an oreilly book

`career`

写一本 O'Reilly 书籍是什么体验？

https://medium.com/@rothgar/the-economics-of-writing-a-technical-book-689d0c12fe39

---

作者回顾了他为 O'Reilly 写书的整个历程。看过美国的技术书籍作者，收入也不是想象的那么高。

这本书原计划 250 页，定价 59.99 美元。完成时，它只有 160 页，定价 39.99 美元。由于我们两个作者合写了这本书，我们每个人可以拿到每本书收入的 5％，电子书是 12.5％（个别作者可以拿到 10％和 25％）。这相当于我们每个人从实体书得到 0.99 美元，从电子书得到 0.46 美元。

从 2017 年 12 月到 2018 年 3 月，这本书售出了 1337 份。截止 2018 年 4 月份，我已经赚取了 11,554.15 美元。

## eventually we got static type checker

`quote` `dev` `history`

Facebook 公司推出 Pyre，用来检查 Python 程序的静态类型错误，下面是一个网友的评论。

十多年前，Java 的繁琐让很多人仇恨类型系统，他们改用 Python、Ruby 等动态类型语言，这使我们能够快速而松散地完成工作。经过大约十年的热血编程，我们最终发现，动态语言编写的巨大单体项目是非常脆弱的。

## buttons on dribbble becoming simpler and flatter

`design` `history`

Dribble 的按钮

https://www.toptal.com/designers/ui/button-design-dribbble-timeline

有人回顾了过去八年，设计网站 Dribbble 主页按钮的变化。图一是 2009 年的按钮，图二是 2017 年的按钮。八年的图片放在一起，可以看到设计的趋势变得越来越简单和平面化。

## geometry background image creator for social sharing

`app` `image`

Cool Backgrounds

https://coolbackgrounds.io/

自动生成背景图片的工具网站，现在提供五种风格，每种都可以定制，看上去赏心悦目。

## algorithms and data structures in js with detailed explanation

`js` `algorithms` `guide` `library` `ref`

30 algorithms with readme file and links

https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md

## beautiful platformer maze game with webgl

`game` `design`

zelda-like art

https://heraclosgame.com/

## why only tech contents are on ruanyf weekly

`career` `view`

本周话题：周刊为什么只谈技术？
自从我认定，未来二三十年，人类社会将有天翻地覆的大变。我的所有时间，就都投在技术领域了。因为变化是技术引起的，只有了解技术，才可能应对变化。

我相信，未来最大的那些机会，一定是技术带来的机会。底层的年轻人要想翻身，当工程师是比较可能的途径。当然，医生和律师依然可以赚钱，但我觉得前景不如工程师，因为将来一定是机器帮你看病，帮你打官司。

这个《每周分享》系列只谈技术的原因就在这里，因为其他东西没有那么重要。

## google reader web app copy

`app` `feed` `retro` `design` `ref`

Google Reader 怀旧版

http://readerisdead.com/reader/view/

Google Reader 是谷歌的线上 RSS 阅读器，2013 年关闭。现在，有人复制了一个一模一样的，让大家体验一下当年的感觉。

## ruanyf weekly source

`career` `info`

很多网友问，《每周分享》的来源是什么，你从哪里得知这些消息？

我的消息来源主要是下面几个。

Hacker News https://news.ycombinator.com/

GitHub https://github.com/explore

RSS 订阅

Twitter 和 Facebook

多年来，我每天都会浏览这些消息来源，了解资讯，看到有意思的东西，就会写入《每周分享》。我从学生时代就有做笔记的习惯，《每周分享》只是把个人笔记公开了而已。

这些消息来源大部分是英语，中文的内容比较少，因为中文信息来源很难找。国内的媒体往往只报道，谁融到了多少钱、谁上市了、哪位高管又跳槽了......技术本身的报道是非常少的。另一方面，国内的氛围是，独家技术都不太愿意曝光，更别说写得清晰易懂了。

我希望，国内也能有 Hacker News 那样的技术资讯网站。《每周分享》只是第一步，看看有多少人对这类东西感兴趣。如果有那么一批读者，经常来看，那么进一步就可以做社区，共同创造一些更有意义和价值的东西。

## full featured image editor using web canvas

`app` `image` `ref`

tui.image-editor

https://github.com/nhnent/tui.image-editor

---

开源的在线图像编辑器。

## fast fibonacci calculation in python

`algorithms`

斐波那契数列的计算公式（英文）

https://blog.paulhankin.net/fibonacci/

如果不用递归，直接算出斐波那契数列的任意项，应该怎么计算？

## linkedin is a multi player role playing game

`career` `view` `literary`

LinkedIn 是一种游戏

https://theoutline.com/post/5495/how-to-beat-linked-in-the-game?zd=1&zi=4ysmx4oy

---

2002 年成立以来，LinkedIn 已迅速成为有史以来最受欢迎的游戏之一。它目前拥有约 5.3 亿用户，并于 2016 年以 262 亿美元被微软收购。

对于那些不熟悉的人来说，LinkedIn 是一款角色扮演类的 MMORPG 游戏，玩家身处危险的商业世界，可以从数十个角色类别（例如，企业家，教师，财务总监）中进行选择，每个角色都有自己的技能和特殊动作。他们通过各种工作经历获得经验值，还能获得其他用户的认可。

LinkedIn 游戏的总体目标是在网站上找到尽可能多的人并与之建立联系，以确保你的社交资本和进一步的职业生涯。对于初学者来说，游戏似乎是开放式的，并且不存在那种传统意义上的被其他人"击败"的可能。

下面是用户在 LinkedIn 赢得胜利的一些技巧。

赢得 LinkedIn 最重要的部分是创造完美的个人简历。将您的位置设为纽约、旧金山或洛杉矶（唯一重要的三个城市） ，或者更好的是，将自己描述为东海岸和西海岸都有工作经历，如果加入金融行业和常春藤联盟学校的经历，那就更好了。并要插入你与人们握手和参加会议的照片。

一旦你的个人简历填写完毕，你就可以开始与陌生人联系。不幸的是，LinkedIn 限制用户只有 30,000 个连接和 3,000 个连接请求，因此请谨慎使用。

你需要每天花几个小时与人交往。首先，搜索 Google 和 Facebook 等大公司的员工，向他们发出请求。当其他用户接受您的连接请求时，您的等级将上升。起初，有些人可能拒绝您的请求，但最终一旦您的社交网络不断增长，别人会看到他们认识的其他人已经与你建立联系，就将毫无疑问地接受您的请求。

## one hundred million people's choice cant be wrong

`dev` `quote` `history` `meme`

杯子的背面写着"一亿人的选择不会错"。

杯子的正面表明这是 Flash 的广告。（推特@jenna）

## reading in spare time inspired me and made me a better programmer

`quote` `dev` `weather`

有一个诀窍，让我成为一个更好的程序员，那就是我常常休息，大量的休息，我的新想法都是在休息时产生的。

休息的时候，我阅读，大量阅读任何我有兴趣的内容，这样我才可能产生新想法。（推特@brucel）

## behind the microsoft solitaire game

`story` `retro`

Windows 纸牌游戏的历史

https://www.filfre.net/2018/08/the-games-of-windows/

---

1988 年的夏天，一位名叫 Wes Cherry 的大学生在微软担任实习生。为了搞懂 Windows，他决定改写 Macintosh 电脑的一个纸牌游戏，写出一个 Windows 版本。根据 Cherry 本人的说法，他写的游戏代码"没有什么特别之处"，并不比其他纸牌游戏更好。对他来说，这个软件最特别之处仅仅在于，纸牌背面的图案由他的女友 Leslie Kooy 绘制。

被问到开发这个游戏最困难的是什么，他说是游戏胜利后纸牌不断弹跳的场景。

暑期实习结束时，他将自己的纸牌游戏放在一个微软内部的服务器上，然后又回到了大学。

几个月后，微软的一位产品经理发现了这个游戏。当时，微软已经开始寻找即将推出的 Windows 3.0 的内置游戏，他们决定把这个纸牌游戏放进去。对这个游戏进行了测试之后，他们让 Wes Cherry 解决发现的各种错误，报酬是一台全新的计算机。

1990 年 5 月，Windows 3.0 发布时，纸牌游戏包括在内。这个游戏很快就风靡全球，成为人们最常玩的电脑游戏，直到今天还是如此。微软很快就宣布，它是"最常用"的 Windows 应用程序。全世界办公室的咖啡时间和休息时间，都有人在玩这个游戏。1994 年，华盛顿邮报的一篇文章半开玩笑地说，这个游戏正在播下"美国资本主义崩溃"的种子。2007 年芬兰的一项研究发现，它是 36％的女性和 13％的男性最喜欢的游戏，没有其他任何游戏接近这些数字。

Wes Cherry 是上班时间在微软办公室开发这个游戏，因此知识产权属于微软。他创造了历史上最受欢迎的电脑游戏，但是除了一台免费电脑之外，他从来没有得到任何报酬。他说他不介意。他早已离开计算机行业，现在西雅图附近的 Vashon 岛拥有并经营一家苹果酒酿酒厂。

## we read in the way of f

`dev` `editorial` `theory` `ref`

写作技术文档的技巧

https://blog.stoplight.io/writing-documentation-when-you-arent-a-technical-writer-part-one-ef08a09870d1

---

用户阅读网页内容的热力图是下面这样。

这就是说，用户以 F 状的方式阅读网页，先看前三行，然后垂直向下阅读，只看每一行的前几个字。

所以，写作的时候，应该注意下面几点。

第一段和第二段必须给出最重要的信息，而且第一句话最重要。
标题、段落、列表的开头，都应该立即给出信息。
通过字型的变化（大小、黑体、链接），把用户的注意力吸引到重点句子。

## buying goods with allowance from next generations

`quote` `meme`

我们购买任何商品时，支付价格不包括商品的全部成本。我们没有支付商品回收处理的成本，也没有支付修复环境的成本，更没有支付应对生产过程中排放的二氧化碳的成本。换句话说，每一件商品里面都包含后代支付给我们的大量补贴。

-- 一个读者对各国政府没有有效控制温室气体的评论

https://news.ycombinator.com/item?id=17900833

## wealth inheritance makes gamblers

`society` `view`

很多人都说，当今社会趋向阶级固化，贫穷世袭。这种说法有根据吗？

纽约大学的社会学家就做了一次调查，企图给出实证数据。最近，他们公布了结果。

社会学家按照收入，把所有美国的职业分成 100 个等级。收入最高的职业为 100 分，收入最低的职业为 1 分。在这个体系里面，医生是 93 分，空姐是 53 分，擦鞋工是 9 分。

一共调查了 2 万多个人，结果发现，子女的等级与父母的等级，呈现明显的正相关。如果父母的职业在 76 分以上，子女的职业往往也是这个等级；如果父母的职业在 25 分以下，子女很可能也是如此。概率在 50%以上。

调查报告写道：

"人们总说，美国是一块充满机会的大陆。事实并非如此，美国人的职业发展，最大的决定因素可能是父母。"

注意，这是美国的调查结果，那个地方号称有"美国梦"，人们相信奋斗就能改变人生。如果在中国调查，我想正相关肯定更明显，父母因素的决定性将更大。一个表现就是，由于太缺乏改变人生的正常途径，才导致我们这里任何可能暴富的东西，都异乎寻常的流行，比如彩票、传销、互联网金融和加密货币。

## web design museum

`design` `history` `retro`

网页设计博物馆

https://www.webdesignmuseum.org/all-websites

https://www.webdesignmuseum.org/apps

该博物馆展出了 900 多个精心挑选和分类的网站，展示了 1995 年至 2005 年间的网页设计趋势。上图是苹果公司 2001 年的主页。

## death reminder on twitter

`weather` `meme`

死亡提醒

《乔布斯传》提到，古罗马时代，将军凯旋都会举行胜利大游行。为了提醒将军不可得意忘形、勿忘心存谦卑，背后总有仆人负责不断对他喊"人终有一死"。

现在有人做了一个推特账号 @death_reminder ，每天向你发一条死亡提醒。

## hand drawn style data visualization in 1985

`retro` `design` `meme`

1985 年的数据可视化

https://medium.economist.com/data-visualisation-from-1987-to-today-65d0609c6017

---

1985 年个人 PC 刚刚诞生，那时报纸上的饼图都是手绘的。

## code to image creator for social sharing

`app` `image` `dev`

Carbon

https://carbon.now.sh/

将代码保存成图片的开源服务，可以用来上传到社交媒体。

## tutorial, guide, explanation and reference, not just "documentation"

`dev` `editorial` `guide` `theory` `ref`

如何撰写技术文档（英文）

https://www.divio.com/blog/documentation/

https://docs.divio.com/documentation-system/

---

技术文档（documents）分成四种：教程（tutorial）、指导（guide）、解释（explanation）和参考（reference）。本文解释了每一种文档的特点，并给出了写作建议。

![](https://docs.divio.com/assets/images/overview-8b21327c9a55ca08c6712f26bda2113c.png)

## google search text adventure console game

`game` `meme` `ref`

谷歌搜索的彩蛋

https://www.rockpapershotgun.com/2018/09/29/recently-discovered-google-easter-egg-is-a-browser-based-text-adventure-game/

---

国外用户发现了一个谷歌搜索的彩蛋，搜索 text adventure 后，打开开发者工具，会看到提示，问你要不要玩游戏。回答 yes，就可以开始玩了。

这是一个文字游戏，探索加利福尼亚州山景城的谷歌总部。玩一次游戏，走完整个过程，大约需要 30 分钟到一个小时。

## before the success of instagram

`quote` `story` `literary`

最早，我们做的是一个地理位置应用，人们到了一个地点，可以签到和发照片。我们发现，人们对位置不太在乎，只是希望将照片放在那里。

后来，由于发展得不好，我们决定简化功能，只保留照片、评论，以及给照片标识位置，应用的名字改成了 Instagram。

-- 《Instagram 的故事》

## the sense of probability in social statistics perspective

`society` `theory`

感知概率

http://blog.sciencenet.cn/blog-420554-1139743.html

---

平时在交谈中，我们会使用"可能"、"很可能"、"极有可能"、"大概"、"不肯定"、"不太可能"等等词语来描述一个事件的可能性。但是，这些词语到底表示多大的概率？每个人都有不一样的理解。

比如，有的人心目中，"可能"就意味着 50%的概率，"很可能"就意味着 70%的概率，而"不太可能"就是 30%的概率。另一些人可能会认为，"很可能"应该是 75%的概率。

耶鲁大学教授谢尔曼·肯特（Sherman Kent）做过一个统计调查。他询问许多人，将得到的数据做成了下图，给出了每一个用词所代表的概率区间。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102615.jpg)

可以看到，在他的调查中，"probable"、"likely"、"probably"和"we believe"的区间都大约是 62-85%。

有人在 reddit 上重新做了一次统计，然后用 R 语言程序计算出每个短语的箱形图（box plot），再用 ggplot2 绘图包制作出漂亮的图表。

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102616.jpg)

![](https://www.wangbase.com/blogimg/asset/201810/bg2018102617.jpg)

## left google after a long vacation in loneliness

`quote` `career`

长假回来时，我意识到，一群我不知道是谁的人，正在告诉我做一些我不关心的事情。我觉得是时候离开了。

-- Gmail 创造者 Paul Buchheit 谈为什么离开谷歌

## essential concepts of javascript

`js` `guide` `library` `ref`

33 个 JS 程序员需要知道的概念

https://github.com/leonardomso/33-js-concepts

按照主题，收集 JS 学习资源的仓库。

## mindmap editor on web

`app` `image`

Process On

https://www.processon.com/

---

免费在线作图，可以实时协作。ProcessOn 支持流程图、思维导图、原型图、UML、网络拓扑图、组织结构图等。（@wuzhenda\_ \_投稿）

## bus waiting paradox

`theory` `meme`

等待时间悖论（英文）

http://jakevdp.github.io/blog/2018/09/13/waiting-time-paradox/

公共汽车的间隔时间为 10 分钟，那么平均等待时间应该为 5 分钟，但是如果进行抽样，你会发现抽样得到的平均时间为 10 分钟，这是为什么？简单说，原因就是等待时间越长的人，越容易被抽样到。

## oi wiki

`algorithms` `guide` `library`

OI-wiki

https://github.com/24OI/OI-wiki

收集编程竞赛的基础知识、常见题型、解题思路以及常用工具等内容。

## buying time makes the best use of money

`career` `view`

金钱最有价值的用途就是购买时间。

-- 有人提到，自己已经有不少钱了，但还是拼命想赚更多的钱。一个网友做了上面的回应，钱的意义在于它可以换来更多时间，让你去做自己想做的事情。

https://news.ycombinator.com/item?id=18373002

---

First, realize that you're probably making at least double the median US income. If you have a house with no loan and that income, you're doing way, way, way better than average.
I see two possible paths forward.

The less likely is to read and internalize https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/ and realize how quickly you can reach financial independence at a reduced spending level (but one that still affords an amazing life). Buying time is the most valuable use of money, IMO.

The second is to stay miserable for a while, striving for something ambiguous yet out of reach, until you get older and this feeling fades.

Path #1 (or a variant) is probably healthier and happier.

## opensource photoshop on web

`app` `image`

Photopea

https://www.photopea.com/

在线图像编辑器，免费，可以替代 PhotoShop 的一部分功能。

## graphgl is just applying sql on json

`dev` `meme`

GraphQL 的本质是程序员想对 JSON 使用 SQL。

-- 推特@kellybyte

https://twitter.com/kellabyte/status/1059970357430341632

## javascript transcompiling languages library

`js` `info`

可以编译成 JS 的语言列表

https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS

许多语言可以编译成 JavaScript，从而在浏览器运行，这张列表收集所有已经有编译工具的语言。提醒，这是一张很长的列表。

## behind a popular decorative painting of ikea

`story`

一张宜家装饰画的故事

https://petapixel.com/2018/11/20/the-story-behind-that-ikea-photo-of-amsterdam/

（原始网页将下面的故事拍成 15 分钟的纪录片，比文字更有意思，推荐观看。）

我家有一张宜家买来的装饰画《阿姆斯特丹街头》。

朋友问我，这张照片到底好看在哪里，看上去很普通的一张风景照，为什么全世界到处都有人买去，挂在自己的屋子里。我于是就很想搞清楚它背后的故事，宜家为什么会选中这张照片。

宜家网站显示，这张照片的作者是费尔南多（Fernando Bengoechea）。我查了这个摄影师，很不幸，他在 2004 年印度洋大海啸期间失踪了。然后，我设法联系了他的兄弟马塞洛，了解到失踪时他是纽约市最好的摄影师之一，曾为杂志工作。他走遍了世界各地，拍摄各种主题。

马塞洛把我介绍给室内设计师 Nate Berkus，他是费尔南多当时的男朋友，海啸期间，他们在一起。Berkus 说，这张照片是费尔南多为前男友阿夫卡米（Ahmad Sardar Afkami）拍的。他把阿夫卡米的联系方式给了我，那是一位纽约的建筑师。

阿夫卡米回忆道，这张照片是在 1999 年 3 月拍摄的。他们一起去荷兰旅行，但是途中发生了争吵，费尔南多一人在阿姆斯特丹的街头散心，随手拍了一些照片，用它们向阿夫卡米道歉。

费尔南多在印度洋海啸中过世以后，他的所有未发表的照片作为遗物，都放在 Corbis.com 网站上出售。宜家就是在那里购买照片版权的。

最后，我找到了宜家瑞典总部的装饰画部门的负责人。我问他为什么选择这张照片，他说他们最主要考虑的是价格，这张照片非常非常便宜，这就是他们选择它的原因。

## things are always being complained about once they gain popularity

`dev` `quote`

只有两种计算机语言：一种是人们不停抱怨的语言，另一种是没人用的语言。

-- C++ 之父 Bjarne Stroustrup

## programmers surplus concern

`dev` `career` `history`

美国一个编程培训班的老板，写了一篇文章。他说自己很担忧。现在，那么多人学习编程，他的公司全靠培训赚钱，将来会不会程序员过剩？

https://www.forbes.com/sites/rajatbhageria/2017/09/10/is-learning-how-to-code-still-worth-it/

培训班的目的，就是让那些没有受过四年计算机教育的人，经过四个月的培训，找到一份软件开发的工作。某种程度上，这种做法是可行的，大量的程序员就是通过这种模式生产出来。

但是，人工智能正变得越来越强，终有一天，简单代码都会由计算机自已生成，低级程序员的需求将会大量减少。另一方面，云服务的兴起，使得很多任务不需要自己编程，可以购买云服务，这也减少了程序员的需求。

同时，由于不断的抽象和封装，应用层的软件开发正变得越来越简单，如果只是简单地遵循在线教程，就能编写软件，或者将一系列 API 混合在一起，就能做出一个服务，有必要向开发人员支付高额薪水吗？毕竟开发过程是那么简单。

他认为，学习编程是值得的，它可以帮助你理解世界。但是，梦想仅仅学会软件开发，就能解决你的人生问题是不现实的。"只是能够编写一个安卓程序，不会为你赢得竞争优势，也没法在这个超级饱和的科技世界里，获得自己的一席之地。这个世界里，每个想法都已由十位企业家在你前面完成了。"

由于其他行业不景气，大量年轻人正在转向软件业就业。但是，程序员的淘汰也很厉害，上车的人多，下车的人也多。大家应该对这一点有清醒的认识。

## game background patterns in 80s

`retro` `design` `art`

80 年代的游戏背景图案

https://vgdensetsu.tumblr.com/post/179656817318/designing-2d-graphics-in-the-japanese-industry

上个世纪 80 年代，电脑游戏的图案一般先是手绘，然后再用数字转换仪转成像素图。

## the sunlight sharing project

`story` `literary` `meme`

2006 年，两名美国学生完成了一个名为"发送阳光"的项目。如果手机发现，你的朋友在天气不好的地方，而你在天气很好的地方，那么手机就会提示你，拍一张照片发送给朋友，让他们振作起来。

后来，两人当中的 Mike Krieger 创建了 Instagram。

-- 《经济学人》

https://www.1843magazine.com/features/the-scientists-who-make-apps-addictive

## the time when everyone reads

`retro` `history`

前些日子，武侠小说泰斗金庸先生去世了。

他可能是影响最大的中国当代作家，几代人都是读他的武侠小说长大的。但是我认为，他很可能也是最后一个影响力这么大的作家。

以前没有那么多的娱乐方式，武侠小说是主要的消遣。我们常常是关灯以后，津津有味读到半夜，因为也没有其他事情可干。那个年代，电视台一到晚上 10 点，就会显示"今天的节目已经播放完毕，观众朋友们明天再见"。

到了今天，娱乐方式越来越多，小说已经变成了一种小众行为。大家都是在手机上玩游戏、看视频、发消息......读书的人只占一部分，而且比例会越来越小。金庸先生的武侠小说，要是现在写出来，我认为绝不可能有这么多读者。写得再好也不可能，以前是全民读书的年代，现在不是了。我印象中，全民阅读的小说，最早是金庸，后来是路遥的《平凡的世界》，再后来是《三体》，然后就没有了。为什么？因为《三体》出版以后，电脑游戏、互联网、智能手机开始普及了。

无独有偶，世界最畅销小说《哈利波特》也是在智能手机流行之前问世的。我认为，以后也不会有《哈利波特》那种级别的流行小说了。

通过小说对一代人产生影响，这种事情可能永久地结束了。以后，对一代人有影响的可能将是某个游戏、某个视频节目、某个网红。

## categorized sites for programmers

`dev` `guide` `info`

Best-websites-a-programmer-should-visit

https://github.com/sdmg15/Best-websites-a-programmer-should-visit

该仓库收集对程序员有用的网址，包含问题查找、技术新闻、技术博客、开源社区、英文提升、新奇的玩意儿、视频教程、在线工具等数十个方向的内容。（@qiurenbo 投稿）

## the problem is no one really knows how awful new technologies are

`dev` `quote` `retro`

有时，我们想用新技术解决旧技术的包袱，问题是新技术会带来更多的包袱。新技术的一个问题是，人们还不知道它到底有多糟糕。

-- 《选择乏味的技术》

http://boringtechnology.club/

## bash shortcut functions guide

`dev` `guide`

让你的生活更轻松的 9 个 Bash 快捷别名（英文）

https://remykarem.medium.com/9-bash-aliases-to-make-your-life-easier-3e5855aa95fa

本文介绍 9 个实用的 Bash 函数，你可以参考他的方式，将自己常用的操作封装成函数，然后设置别名。

## opensource book css animation for beginner

`css` `guide`

CSS Animation 101

https://github.com/cssanimation/css-animation-101

开源电子书《CSS Animation 101》，从零开始介绍 CSS 动画。

## image framer with exif shown for social sharing on web

`app` `image`

ExifShot

https://exifshot.com/

一个以美观的形式展示照片 EXIF 信息的在线工具。

## the public apology letter written by steve jobs

`editorial` `theory` `ref`

新年的 1 月 2 日，苹果公司发布了一份公开信，长达 1400 字。主要内容是，由于大中华市场的销售额下滑，该公司预计 2019 年第一季度，收入会低于预期 7%。

https://www.apple.com/newsroom/2019/01/letter-from-tim-cook-to-apple-investors/

有人找出，苹果公司上一次发布收益预警，还是在 2002 年 6 月 18 日，一共只有 100 多个词。

https://daringfireball.net/2019/01/steve_jobs_and_apples_last_previous_earnings_warning

"苹果公司预计第二季度的收入将达到约 14 亿美元～ 14.5 亿美元，低于此前约 16 亿美元的预期。收入低于预期主要是由于消费者和创意市场（如广告和出版）的需求疲软。从地理位置来看，欧洲和日本的收入变得特别薄弱。由于成本降低，毛利率高于预期，预计收入不足将被大幅抵消。因此，公司已将盈利预测修订为每股 0.08 美元至 0.10 美元，而之前的指引为 0.11 美元或略高。"

"与我们行业的其他人一样，本季度我们的销售额正在放缓。因此，我们将低于收入预测约 10％，导致利润略微下降，"苹果首席执行官史蒂夫乔布斯说。"我们有一些令人惊叹的新产品正在开发中，所以我们对未来一年感到兴奋。作为目前在 PC 业务中获利的少数几家公司之一，我们对苹果长期增长的前景仍持乐观态度。"

如果你仔细阅读上面这份公告，那一次的收入下滑是 10%，比这一次的幅度 7%还大。但是，公告写得非常巧妙，导致你完全感受不到悲观，仿佛你正在阅读的不是一个坏消息，读后反而还感到振奋。第一段开门见山，直接给出数字，但也说不利影响"已被大幅抵消"；第二段告诉你，这是整个行业的问题，不是我们的问题，而且我们有"惊人的新产品"；最后，才是最厉害的一句话，"作为目前在 PC 业务中获利的少数公司之一......"。这时你感觉到的不是担心，而是对苹果公司良好的信心。

这种差异的真正原因在于，上次的作者是史蒂夫·乔布斯，这次的作者是蒂姆·库克。这一次的信太长了，辩解太多，这会让人感到作者很心虚，故意在掩饰，完全没有给人信心，所以一发出来，苹果股价就跌了 10%。如果乔布斯还在，他可能会这样写这封信：

"我们都知道中国市场出了问题，一半是因为中国自己的原因，一半是因为愚蠢的贸易战。这个季度的 iPhone 销售比我们预期差，但完全是中国市场的原因，其他所有市场都正常。全球客户都喜欢 iPhone XS、XS Max 和 XR，iPhone 占全世界整个手机行业利润的 90％。我们预计利润份额还会增长，因为竞争对手的产品高度同质化。"

好了，公开信到此结束。

## keep things there and do minimal work

`dev` `quote`

一家公司想装修办公室地板，结果发现下面是蜿蜒曲折的通信电缆。如果彻底装修，必须更换并重新连接电缆。他们这样做了吗？没有，当他们看到复杂的电缆后，就没有碰任何东西，只是小心地更换了地板。谁知道每根电缆的作用和连接方式？最好保持原样。

-- 《如何维护复杂系统》

https://unintendedconsequenc.es/dont-touch-anything/

## a little printf: become a "real" programmer

`dev` `meme`

什么是真正的程序员（中文）

https://www.cnblogs.com/xueweihan/p/5220513.html

本文是一篇译文，作者仿照《小王子》中的情节，通过小 printf 遇见的不同类型的程序员，最后悟出什么才是真正的程序员！（@LanjianNUll\_ \_投稿）

---

http://ferd.ca/the-little-printf.html

## fizzbuzz in 10 programming languages

`dev` `info`

FizzBuzz 的 10 种语言解答（英文）

http://iolivia.me/posts/fizzbuzz-in-10-languages/

FizzBuzz 是考验编程初学者的经典题目，本文用 10 种语言写出答案，比较各种语言的不同。

## working as a programmer abroad in sweden

`dev` `career`

去瑞典当工程师，是否值得？（英文）

http://hongchao.me/living-and-working-in-sweden-as-engineers/

一个中国开发者移居到瑞典当工程师。十年之后，他对自己这个决定的看法，留在国内好，还是去瑞典好？

## euclid geometry book on web

`app` `library` `retro`

《几何原本》在线版

https://www.c82.net/euclid/

在线还原 1847 年的欧几里得《几何原本》的彩色版本。（@arbeitandy 投稿）

## github in twitter timeline style

`app`

devhub

https://github.com/devhubapp/devhub

将 GitHub 动态以 TweetDeck 形式展示的开源工具。

## medium has become awful

`view` `retro`

你不应该把内容发布在 Medium

https://bts.nomadgate.com/medium-evergreen-content

很多人选择在 Medium 发布内容。但是，现在的 Medium 已经跟以前不一样了，发布之前你应该三思。

（1）Medium 允许你为文章设置原文链接，以前这个链接是可以修改的，现在一旦设置了，就不再允许修改。

（2）Medium 不再允许绑定自定义域名，自己的域名无法指向它的网站。

（3）Medium 以前允许某些网站以 iFrame 形式嵌入，比如统计表单，现在不行了。

（4）Medium 不再允许第三方广告，也就是说，你不再能够在自己的文章里接广告。

（5）Medium 的阅读体验已经变得糟糕。以前读者打开文章，看到的是下面的样子。

现在，看到的是下面这样。

(sign up splashscreen)

## logos are getting flat

`design` `history`

Logo 的改变

https://boingboing.net/2018/12/13/interesting-logos-are-being-re.html

下图上排是以前的 logo，下排是现在的 logo。各公司都不约而同，选择了加粗的直线式无衬线字体，这样是为了更醒目、辨识度更高吗？

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011829.jpg)

网友 @chun1iu 评论："不是更加醒目，而是更加中庸，更容易被所有人接受。不会很喜欢，也不会很反感，就是很大众。这些公司的成长过了标新立异的阶段而已。"

## interactive javascript guide

`app` `js` `guide`

JavaScript 互动教程

https://learnjavascript.online/

一份简短的入门课程，直接在浏览器里编写代码，学习 JavaScript 语言的基本语法。

## most mispronounced words of chinese programmers

`dev` `info`

chinese-programmer-wrong-pronunciation

https://github.com/shimohq/chinese-programmer-wrong-pronunciation

中国程序员容易发音错误的单词。（@taoweicn\* \*投稿）

## provide tools for popular industry, not works

`dev` `quote`

当市场出现大的热潮时，最好的策略通常不是参与这个热潮，而是成为工具提供者。

-- wolfejosh@twitter

https://twitter.com/wolfejosh/status/981017179897376770

## one without parachute wont jump for experiment

`theory`

上图是一架小飞机停在草地，一个人从上面跳下来。

这张图取自一篇 2018 年 12 月发表的正式论文，作者单位是哈佛大学医学院，论文题目叫做《从飞机跳下时，降落伞防止伤亡的作用研究》。

https://www.bmj.com/content/363/bmj.k5094

研究小组让一组人带着降落伞，另一组人不带（就像上图），都从停在草坪上的小飞机跳下来。可想而知，所有人都平安无事，因此论文经过模型分析，一本正经地得出结论：降落伞没有明显作用。

这篇论文不是恶搞。它想用一个讽刺的实证研究来证明，医学界传统的双盲测试有重大弊端。医生当中流传着一句名言：没有降落伞，谁愿意从飞机跳出来？意思是只有那些有降落伞的病人（即知道自己死不了的人），才会参加双盲测试。

这是因为，如果不考虑那些无药可救的绝症，一般来说，风险比较小的病人，更可能参加双盲测试，因为就算被抽到对照组，天天吃安慰剂，也不怕被耽误。但是，如果测试对象都是风险小的病人，试验结果很可能就是新药无效，因为病人本来就会康复。

这篇论文就是用实验证明：如果你想让没有降落伞的人，参加双盲测试，他们只会愿意从停着的小飞机上跳下来，因此你会得到降落伞（新发明）没用的结论。这是我看过的最好玩的论文之一，推荐大家看看，它完全采用最严谨的学术语言和论证过程，写得一丝不苟，最后得出了一个荒谬的结论。

## all dev news on one kanban

`app` `feed`

科技资讯的聚合网站

https://devurls.com/

https://techurls.com/

该网页聚合多个英文科技咨询网站的消息，一个地方就能看到所有资讯。（@shouldsimple 投稿）

## leetcode problem solutions animated

`algorithms` `guide` `library` `ref`

LeetCode Animation

https://github.com/MisterBooo/LeetCodeAnimation

使用动画的形式呈现解 LeetCode 题目的思路。（@nivance 投稿）

## overestimating a day while underestimating a year

`career` `quote`

大多数人都高估了他们一天能做的事情，但低估了他们一年能做的事情。

-- 《关于"我没有足够的时间"》

https://blog.stephsmith.io/you-dont-need-to-quit-your-job-to-make/

## algorithms visualization web app

`algorithms` `guide` `library`

algorithm-visualizer

https://github.com/algorithm-visualizer/algorithm-visualizer

一个直观的算法可视化工具，你可以自由选择自己想学习的算法，每个算法它都清晰描绘了其原理和运作过程。（@nivance 投稿）

## life without working in over developed country

`society` `view`

如果你长期看这个周刊，可能知道我的观点：人工智能将导致大量失业，因为算法将取代大部分白领工作。

https://www.ruanyifeng.com/blog/2016/01/white-collar.html

很多人不同意，认为未来不会有大量失业，因为新的工作岗位可以容纳就业。但是，到底什么岗位可以让大部分人就业呢？没人说得出来。有一点是显然的，这种岗位不可能是程序员、工程师、算法专家，因为大部分人达不到岗位要求，就像你没法让大部分人学会《高等数学》一样。

前一段时间，我读完了一本书《未来地图》，作者是 O'Reilly 出版社的老板。他也同意，人工智能会让很多人失业。但是他说不担心，因为大家会去干别的工作。他举了一个例子，未来大家会拍视频，你拍我看，我拍你看，所以无数人当"视频主""直播主"，以拍视频为生。

https://book.douban.com/subject/30282615/

这看上去说得通，现在不就已经有很多这样的人了，甚至有人天天直播吃饭，靠打赏赚钱。英语里面有一个专门的词 Mukbang，来自韩语的音译，指的就是这种吃吃喝喝的直播。你去百度搜一下图片，就知道 Mukbang 有多流行了。

https://en.wikipedia.org/wiki/Mukbang

但是我还是疑惑，如果将来的工作都是拍这种视频，那有多大的意思呢？卡辛斯基曾经提到过这种情况。未来生产力大发展，物质极大丰富，人类无所事事，只能"把时间花在互相擦皮鞋上面，或者用出租车带着彼此到处瞎转，互相为对方做手工艺品，互相给对方端盘子等等。"说实话，我看不出来，大家互相拍视频，直播吃饭、购物、打游戏，跟互相擦皮鞋，有什么本质的不同。

https://www.ruanyifeng.com/blog/2017/09/unabomber.html

## mapping emotions to voices

`app` `theory`

声音地图

https://s3-us-west-1.amazonaws.com/vocs/map.html#

https://www.researchgate.net/publication/329824563_Mapping_24_Emotions_Conveyed_by_Brief_Human_Vocalization

该网站将不同情绪对应的声音，画成一幅地图。鼠标移到每个点上，都会听到声音，比如包含了 50%的敬爱、33%的同情、17%满意的声音。

## tracker of popular repos on github hackernews reddit

`app` `feed`

GitNews

https://git.news/

该网站实时显示 GitHub 趋势、HackerNews 和 Reddit 里面出现的热门代码仓库。

## give up worthless projects asap

`dev` `view`

一个美国程序员分享自己的工作方法，其中有一条是 "要么不做，要做就做完"。

https://briancasel.com/impatient-execution/

他的意思是，不要给自己留下做了一半的活。因为这意味着你需要再回来，继续把它做完；你会挂念这件事情，它就像一个钟摆，过一段时间就会重新出现在你的脑海，时不时烦扰着你。

你的目标应该是，当天就把这件事情做完，从此不必再去碰它，第二天继续做下一件事就行了。如果遇到一天做不完的大项目，那就把它分解成一个个小步骤，每天完成一个步骤。

我觉得他说得很好，但是这句话比较重要的，其实是前半句：有些事情不要去做。事情是做不完的，而你的时间和精力是有限的，不要只想着如何才能把事情做完，还要学会不做那些不应该做的事情。

某种程度上，不做比做完更困难。因为通常来说，做完一件事，多多少少都有一些好处，不做意味着你要放弃一些眼前的好处，这并不容易。

最糟糕的一种情况是，某个项目不值得做，但是你已经做了，为了不要浪费已经投入的成本，于是你进一步投入，在泥坑里面越陷越深。等到项目最后失败的时候，你大伤元气，一蹶不振。项目管理有一个很重要的原则，叫做"尽快失败"，就是为了防止这种情况。胡适先生原来学农科，专业是果树栽培，他觉得实在没意思，大学读到一半就改学哲学，后来当上了北大校长。如果他没有放弃，想着拿完农科文凭再说，那他大概就不会有以后的成就了。总之，对于那些没希望的项目，放弃得越早越好。

https://www.ruanyifeng.com/blog/2007/02/hushih_s_switch_part_i.html

## the cost of code abstraction

`dev` `view`

抽象的成本（英文）

http://250bpm.com/blog:86

重复的代码通常会被抽象掉，本文讨论抽象带来的额外成本。

---

### The Cost of Abstraction

The cost of duplicating code, of accumulating technical debt, of not having tests and so on is often discussed and written about. The cost of abstracting things is almost never mentioned though, despite it being a major factor in keeping any project maintainable.

As an example, imagine that your program often increases two variables in sequence:

```
i++;
j++;
```

So you decide that the functionality deserves a dedicated function:

```
template<typename T> inc_pair(T &i, T &j) {
    i++;
    j++;
}
```

By doing so you've removed some duplicated code but also --- and that's a thing that's rarely mentioned --- you've added a new abstraction called "inc_pair".

In this particular case, almost everybody will agree that adding the abstraction was not worth it. But why? It was a tradeoff between code duplication and increased level of abstraction. But why would one decide that the well known cost of code duplication is lower than somewhat fuzzy "cost of abstraction"?

To answer that question we have to look at what "cost of abstraction" really means.

One obvious cost is that an abstraction is adding to the cognitive load of whoever works with the code: They will have to keep one more fact in mind, namely, that inc_pair is a function that increases both of its arguments by one.

However, the main cost of abstraction is in separating the implementation from the specification, or, to put it in a different way, the letter of the function from the spirit of the function. The former being what the function does, the latter being what everybody believes it should do.

The important word in the above sentence is "everybody". Once you make an abstraction, it's not longer about what YOU believe it should do. You are entering the domain of social consensus. It's about what EVERYBODY involved thinks it does. And, as everybody knows, social consensus is hard.

Let's look at a practical example: What if type T for our inc_pair function is "Duration"? What will the function do? Will it increase the duration by one second? One day? One nanosecond? Individual users may disagree.

Another example: What if operator ++ on type T throws an exception while doing j++ ? Sould the function leave i and j in inconsistent state? Or should it try to keep the change atomic by doing i--- ? And what if i--- throws an exception while doing that? Maybe the function is supposed to copy the old values of the variables and set them back in case of an error? Nobody really knows.

In short, the decision about creating an abstraction should not be taken lightly. There's a large social cost to every abstraction and if you are churning them out without even thinking about it you are on the way towards making the project unmaintainable. If the abstractions leak to the user you are also making it unusable.

That being said, most of the projects out there are already so abstraction heavy that they are almost unmaintainable. Thus, the programmers are accustomed to the state of unmaintainability, consider it the normal state of affairs and they happily contribute to the mess by adding more and more abstraction.

I've already shown one example of adding a new abstraction for no particularly good reason: Programmer notices that two pieces of code are somewhat similar and creates a function to de-duplicate it. The cost of doing so is rarely taken into account.

Another example, a systemic one rather than an accidental one, is the use of mocking in tests. While tests are definitely useful, they often require certain piece of code to be abstracted so that it can be mocked --- for example by creating an interface, then having both actual and mock implementation of the interface. Creation of an additional abstraction is just an collateral damage.

Yet another example are inheritance hierarchies. Say we want 4 classes: Egg laying fish, live bearing fish, egg laying mammals (echidna) and live-bearing mammals. The intuitive reaction is to create an inheritance hierarchy topped by class Animal, with intermediary nodes Fish and Mammal. It is often done that way even if there's no use case for directly working with Animal, Fish or Mammal class. Thus, future maintainers are left to scratch their heads about how should those abstract classes behave.

In the end I would like to look at what anti-abstraction tools we have at our disposal.

First of all, we have scoping. If a C function is declared as "static" it is visible only within that file. That limits the amount of damage it can cause. It is still an abstraction but it is prevented from leaking to the wider audience. Same can be said of Java's "private" modifier. Of course, it's not a panacea. If source file is 10,000 lines long the scope of a static function is greatly extended and it becomes almost as dangerous as a non-static function.

We also have unnamed objects (e.g. lambdas). It turns out it's hard to treat something with no name as an abstraction. (I wonder what Plato would say about that!) If the only way to refer to a function is by writing it down the letter and the spirit of the function become much more entangled.

It also seems that Go's implicit interfaces were designed to avoid unnecessary abstraction. Given that interfaces are not defined when object is implemented but rather they can be created on the fly as needed by the user, their scope can be significantly limited thus keeping the number of people affected by the abstraction lower.

My final question is whether we are doing enough to limit the amount of abstraction we have to deal with. And do we have sufficient tools to do such limiting? While in many cases it seems that it's only a question of programmer's attitude, at least in the case of mocking it's the tooling itself that contributes to the problem.

**Nov 7th, 2016**

## stop reading contemporary news

`weather` `view` `society`

为什么你应该停止阅读新闻？

https://fs.blog/2013/12/stop-reading-news/

今天的新闻业与以前有很大不同。

（1）新闻传播的速度大大提高。现在，新闻在发生后的几秒内，就开始传播，每个人在很短时间内，就会知道发生了什么事。

（2）新闻的产出成本大幅下降。现在，有人可以每天写 12 篇报道，一年就是近 3000 篇，这还只是一个人的产量。这么快的产出速度，几乎不可能在一个主题有一些深思熟虑的东西。由于产出成本已降至接近零，因此新闻业存在很多竞争。

（3）新闻业企图给读者洗脑。今天的新闻不再强调客观，而是充满了主观看法，企图用个性吸引读者。

（4）点击量成了主要目标。由于竞争激烈，大多数新闻媒体都不得不提供免费新闻，因此必须依靠广告产生收入。广告收入的高低直接依赖于点击量。创造很多耸人听闻的新闻，最容易获得点击。

总之，今天网上的大部分新闻都毫无意义，对你的生活并不重要，不会帮助你做出更好的决定，也不会帮助你理解世界，与周围的人建立联系。它们只会消耗你的注意力，造成你的注意力不足。你被大量信息包围，感到不知所措，为了赶上这一切，内心承受了压力。完全不看新闻，可能是更好的做法。

## the problem of never ending now on social media

`weather` `quote` `society` `view` `ref`

社交媒体的问题是永不结束。它只让你看最新的东西，就像在轮子上奔跑的仓鼠一样，我们生活在消耗短暂内容的无限循环中，结果我们失去了历史感。

-- 《此时此刻永无止尽》

http://www.perell.com/blog/never-ending-now

---

### The Never-Ending Now

I once attended a comedy show with a group of friends. Since the venue was across town, we split an SUV. I sat in the back. You know... all the way in the rear, where the seats get so narrow that you have to do gymnastics just to get back there.

From the moment the driver hit the gas pedal, everybody was on their phones. From the back row, I watched my friends scroll their social media feeds with ferocious intensity. One thing stuck out: the people in front of me only consumed content created within the last 24 hours.

No exceptions.

I succumb to the same impulse. Chances are, so do you.

The structure of our social media feeds place us in a Never-Ending Now. Like hamsters running on a wheel, we live in an endless cycle of ephemeral content consumption --- a merry-go-round that spins faster and faster but barely goes anywhere. Stuck in the fury of the present, we're swept up in dizzying chaos like leaves in a gale-force wind. Even though on the Internet, we're just a click away from the greatest authors of all time, from Plato to Tolstoy, we default to novelty instead of timelessness.

We're trapped in a Never-Ending Now --- blind to our place in history, engulfed in the present moment, overwhelmed by the slightest breeze of chaos.

Here's the bottom line: How can you prioritize the accumulated wisdom of humanity over the impulses of the past 24 hours?

## dont work like a taxi driver

`career` `view` `ref`

前几天，我听一个广播节目。主持人问，现在很多人开网约车，这样能赚多少钱，能够赚到大钱吗？

这个问题很容易回答，答案就是不能。出租车司机的收入，主要由营业时间的长短决定。基本上，一天开 12 个小时，就是比开 6 个小时，收入高出一倍。每天只有 24 个小时，因此收入存在上限，不可能偏离平均水平很远。

出租车是"时间换收入"的典型行业，投入的时间越多，收入越高，在家休息就没收入。很多行业都属于"时间换收入"，所有此类行业都赚不到大钱。因为你能用来交换的时间是有限的，而且进入中年以后，你就拿不出更多的时间来交换。开出租车赚零花钱，或者作为短期过渡，这是没问题的，但作为终身职业是很糟糕的。

我觉得，越来越多的程序员正在落入这个陷井，用编码的时间换取收入。只有不停地做项目，才能拿到钱。项目做得越多，收入越高。这个项目开发完了，公司又让他去干下一个项目。 忙了好几年，项目完成了一大堆，但是自己什么也没留下，以后的收入还要取决于从零开始的新项目。这样的话，你跟出租车司机有何两样，哪一天你不写代码了，不是照样没收入。

那些赚到大钱的人，没有一个是靠时间换取收入的。他们要么通过积累资产致富，要么购买他人的时间，为自己创造财富。你应该警惕，不要落入"时间换取收入"的陷井，不要只顾着为别人生产代码，而要注意积累自己的资产，以及适时开展属于自己的业务。

## 30 days of react for beginner

`js` `guide`

React 教程

https://github.com/fullstackreact/30-days-of-react

一个 React 的 30 天开源教程。（@CharlesCCC 投稿）

## the old laptop just works well

`dev` `weather` `theory`

![](https://cdn.beekka.com/blogimg/asset/201904/bg2019041201.jpg)

一个程序员的 Macbook 送修了，他只好重新使用 10 年前的笔记本电脑（上图）。结果意外地发现，虽然有点慢，但是不影响使用。10 年前的电脑依然能够满足日常工作。

https://geoff.greer.fm/2017/01/23/oldest-viable-laptop/

如果 2009 年的时候，让你去使用 1999 年的电脑，那是不可想象的，根本没有实用性。但是，2019 年的时候，去使用 2009 年的电脑，却是完全可行的。

这说明，过去十年的硬件进展不太大，导致 10 年前的硬件不是那么过时。过去十年，进展主要体现在软件上面：软件功能更强大、使用更友好、界面更美观。

经济有一个定理，叫做"边际收益递减"，意思是，发展到比较成熟的阶段以后，以后每一步的进展会越来越小。硬件就是如此，摩尔定理到了尽头以后，就已经开始慢下来了。我估计，硬件之后就是软件，随着软件开发技术的成熟，以后软件的进展也会放缓，总有一天，我们使用十年以前的软件，也会觉得还可以接受，当然现在还没到这一步。

软件之后的发展重点，我认为将是算法和数据，以后的进步更多会体现在算法优化和数据训练上面。

---

### Oldest Viable Laptop

23 Jan 2017

What's the oldest laptop you could reasonably do your job with? 3 years old? 5 years? 10? And if asked the same question 10 years ago, would your number be higher or lower? Thanks to a failing battery in [my 12" MacBook](https://geoff.greer.fm/2015/04/19/2015-macbook-review/), I discovered my answer.

For the 10 days it took to repair my MacBook, I had to use my backup laptop:

![ThinkPad X61s](https://geoff.greer.fm/photos/pics/thinkpad_x61s.jpg)

This is a [ThinkPad X61s](http://www.thinkwiki.org/wiki/Category:X61s). Despite being made in 2007, it's been fine for work. Yes, everything about it is worse than my MacBook. It's slower and heavier. It lacks a trackpad. The screen is a mere 1024×768, causing some websites to show their mobile layout.^[1](https://geoff.greer.fm/2017/01/23/oldest-viable-laptop/#fn:font)^ Still, the experience has been significantly better than I predicted. The only major hardware drawback is the lack of video camera. The main sources of frustration have been software. Ubuntu 16.04 doesn't have a built-in dictionary or thesaurus. The default calendar app is a joke. ~~And Thunderbird doesn't have a unified inbox view.~~ (Edit: [It does](http://kb.mozillazine.org/Global_Inbox#Unified_Folders). Thanks To Brendan Long for pointing this out.)

Had a similar circumstance happened 10 years ago, my oldest viable laptop would not be so old. That is to say: There's no way that in 2007, I'd be able to get by with a laptop from 1997. The performance issues would be insurmountable.

Growing up, I never thought I'd be able to use decade-old hardware without issue. Either laptop improvements are well into diminishing returns, or progress in hardware has stagnated, or both.

Update: It's been two weeks since I got my MacBook back, and I still tend to use my ThinkPad more. I'm not sure if I'll stick with it, but there's something about this machine that causes me to favor it.

Update (6 months later): I bought a [Thinkpad X62](https://geoff.greer.fm/2017/07/16/thinkpad-x62/), which is an X61 with modern internals.

Update (2 years later): [I've upgraded to an X210](https://geoff.greer.fm/2019/03/04/thinkpad-x210/), which is an X201s with better specs than the X62.

## paste anything to markdown

`app` `text` `ref`

Paste to Markdown

https://euangoddard.github.io/clipboard2markdown/

粘贴到该窗口的任何文本内容，都会自动转为 Markdown 格式。（@AidySun 投稿）

## the workspace without window is killing my soul

`career` `weather` `quote`

我的工位几乎看不到外面，我觉得这座建筑物真的开始吃掉我整天盯着墙壁的灵魂。

-- HN 读者留言

https://news.ycombinator.com/item?id=19249036

## to high revenue is scaling

`career` `theory`

能够获得暴利的职业，都有一个共同特点：可扩展性（scaling），一次劳动可以服务成千上万的人。

软件、电影、游戏行业都具有可扩展性，作品的生产成本是固定的，但可以被消费无数次，所以有巨大的获利空间，创造出许许多多的富豪。另一方面，理发师、厨师、出租车司机一次劳动，只能服务少数几个人，就不具有可扩展性，很难获得暴利，生存得很辛苦。

最近，我读到美国一个风险投资家的文章。他说了一句发人深思的话：

https://andrewchen.co/professional-blogging/

"写作是最具可扩展性的活动。你呆在家里，不去参加活动/会议，只是在网上写下自己的想法，然后你就具有了最好的可扩展性。"

我想了一下，还真是这样。你写了一篇文章，想让其他人看到，只要到处张贴就行了。每次转贴，就是扩展了一次。这比其他产品的扩展容易多了。面包师傅想要更多的人尝到自己的面包，只能多开面包店；网站要扩展，只能购买更多的服务器。相比之下，文字的扩展简直是零成本。

大公司每年花费数十亿美元用于广告，以求人们关注他们的产品。但是，一个好的作家可以免费获得这种扩展性。这就是为什么你应该把自己的想法写下来的原因，这么好的免费传播渠道，为什么不用呢？你以为，写下来不会有人看。错，其实是有人会看到的，如果他们觉得有价值，就会帮你传播出去。

## stackoverflow documentation as books

`dev` `guide` `library`

Programming Notes for Professionals books

https://goalkicker.com/

该网站提供各种免费计算机教程下载。（@zhjp0 投稿）

## before a project could get published

`dev` `story` `view` `ref`

那些没有发布的项目

https://styts.com/cycle-of-side-projects/

作为一个程序员，我有 100 多个没有发布的个人项目。

它们通常是这样开始的：我对一个想法感到兴奋，估计可以在较短的时间内完成，比如一个周末或几周。结果也差不太多，我疯狂地工作一段时间，项目或多或少都写好了。

但是它能够发布了吗？它是否算完成了呢？有趣和令人兴奋的部分确实是基本完成了，能够证明某个概念是有效的。但是，又好像缺少了一些东西，不是特别能引起别人的兴趣，有一些乏味。项目缺乏设计或视觉呈现，这算不上很重要，功能才比较重要，项目确实能工作。

它也没有登陆页面和介绍页面，这些将对新用户非常友好。但我不是一个好的作家，写不出太多文字。我甚至讨厌写作，我害怕被别人评判，所以我选择不写。

最后一个缺失的部分是营销。世界上几乎没有任何事情，比一个内向的人想到一个创意更糟糕，因为他不得不向全世界推销自己的想法。如果世界批评你的项目怎么办？如果你了解到，别人已经做过了怎么办？世界也可能完全沉默不加理睬，就像以前的许多人一样，你的项目将沉没在互联网的深处。

这些缺失的部分不算多，可能还需要投入整个项目时间的 20％。但是这最后的 20％，对你来说，比 80％用在编码的时间更难做到。因此，你可能会让项目就停在那里。何况世界上又出现了新的闪亮的东西，你又可以急切地在新东西上工作了。

再过一会，你就会去拥抱新项目，忘了旧项目。让那些没做完的事情继续保持没做完，让这样的周期变成永久化。

## learning literature in a society without the need of independent thinking

`career` `society` `view`

一篇新闻报道提到，美国就业行情最好的十种工作，八种是 STEM 岗位。

https://blogs.scientificamerican.com/observations/on-pi-day-lets-disrupt-our-narrow-notions-of-stem/

所谓 STEM，就是科学（Science）、技术（Technology）、工程（Engineering）、机械（Machine）的缩写。也就是说，就业最好的工作，80%是理工科岗位。这跟我的感觉一致，理工科的就业远远好于文科。

现在是信息社会，大量的工作都是技术岗，需要技术工人和工程师，而传统的办公室文秘和管理岗位，由于被软件替代，正在不断减少。这种趋势以后将会越来越明显。理工科学生往往有好几个 offer 可以挑选，文科学生想要一个 offer 都很难，很多人不得不选择考研和考公务员。

所以，中学生选择大学专业的时候，为了就业，建议尽量选择理工科，不要选择文史哲和理论经济学，否则毕业以后，找工作很困难。

除了就业难，文科学生的发展前景也不好。文科培养的其实不是技能，而是思想。但是国内的社会环境，根本不允许你有独立的思想，能做的只是诠释领导的政策。一个例证就是，我国现在培养出了各种各样的人才，但是似乎就是没有思想家。

## why object oriented programming language sucks

`dev` `view` `theory` `ref`

为什么面向对象编程糟透了？（英文）

http://www.cs.otago.ac.nz/staffpriv/ok/Joe-Hates-OO.htm

这是 Erlang 语言的发明人 Joe Armstrong 的一篇短文，解释他为什么不喜欢面向对象编程。不过他也承认，面向对象编程的流行是有道理的。

---

### Why OO Sucks

by Joe Armstrong (joe@bluetail.com)

When I was first introduced to the idea of OOP I was sceptical but didn't know why---it just felt "wrong". After its introduction OOP became very popular (I will explain why later) and criticising OOP was rather like "swearing in church". OOness became something that every respectable language just had to have.

As Erlang became popular we were often asked "Is Erlang OO"---well, of course the true answer was "No of course not"---but we didn't care to say this out loud---so we invented a serious of ingenious ways of answering the question that were designed to give the impression that Erlang was (sort of) OO (If you waved your hands a lot) but not really (if you listened to what we actually said, and read the small print *carefully*).

At this point I am reminded of the keynote speech of the then boss of IBM in France who addressed the audience at the 7th IEEE Logic programming conference in Paris. IBM Prolog had added a lot of OO extensions. When asked why he replied:

> _Our customers wanted OO Prolog so we made OO Prolog_

I remember thinking "How simple, no qualms of conscience, no soul-searching, no asking 'Is this the right thing to do' ..."

#### Why OO sucks

My principal objection to OOP goes back to the basic ideas involved, I will outline some of these ideas and my objections to them.

#### Objection 1.  Data structure and functions should not be bound together

Objects bind functions and data structures together in indivisible units. I think this is a fundamental error since functions and data structures belong in totally different worlds. Why is this?

- Functions do things. They have inputs and outputs. The inputs and outputs are data structures, which get changed by the functions. In most languages functions are built from sequences of imperatives: "Do this and then that ...". To understand functions you have to understand the order in which things get done. (In lazy FPLs and logical languages this restriction is relaxed.)
- Data structures just are. They don't do anything. They are intrinsically declarative. "Understanding" a data structure is a lot easier than "understanding" a function.

Functions are understood as black boxes that transform inputs to outputs. If I understand the input and the output then I have understood the function. *This does not mean to say that I could have written the function*.

Functions are usually "understood" by observing that they are the things in a computational system whose job is to transfer data structures of type *T1* into data structure of type *T2*.

**Since functions and data structures are completely different types of animal it is fundamentally incorrect to lock them up in the same cage.**

#### Objection 2.  Everything has to be an object.

Consider "time". In an OO language a "time" has to be an object. (In Smalltalk, even "3" is an object.) But in a non OO language a "time" is a instance of a data type. For example, in Erlang there are lots of different varieties of time, which can be clearly and unambiguously specified using type declarations, as follows:

```rs
-deftype day()     = 1..31.
-deftype month()   = 1..12.
-deftype year()    = int().
-deftype hour()    = 1..24.
-deftype minute()  = 1..60.
-deftype second()  = 1..60.
-deftype abstime() = {abstime,year(),month(),day(),hour(),min(),sec()}.
-deftype hms()     = {hms,hour(),min(),sec()}.
...
```

Note that these definitions do not belong to any particular object. they are ubiquitous and data structures representing times can be manipulated by any function in the system.

There are no associated methods.

#### Objection 3.  In an OOPL data type definitions are spread out all over the place.

In an OOPL data type definitions belong to objects. So I can't find all the data type definition in one place. In Erlang or C I can define all my data types in a single include file or data dictionary. In an OOPL I can't---the data type definitions are spread out all over the place.

Let me give an example of this. Suppose I want to define a ubiquitous data structure. A *ubiquitous* data type is a data type that occurs "all over the place" in a system.

As Lisp programmers have know for a long time it is better to have a smallish number of ubiquitous data types and a large number of small functions that work on them, than to have a large number of data types and a small number of functions that work on them.

A ubiquitous data structure is something like a linked list, or an array or a hash table or a more advanced object like a time or date or filename.

In an OOPL I have to choose some base object in which I will define the ubiquitous data structure. All other objects that want to use this data structure must inherit this object. Suppose now I want to create some "time" object, where does this belong and in which object...

#### Objection 4.  Objects have private state.

State is the root of all evil. In particular functions with side effects should be avoided.

While state in programming languages is undesirable, in the real world state abounds. I am highly interested in the state of my bank account, and when I deposit or withdraw money from my bank I expect the state of my bank account to be correctly updated.

Given that state exists in the real world what facilities should programming language provide for dealing with state?

- OOPLs say "hide the state from the programmer". The state is hidden and visible only through access functions.
- Conventional programming languages (C, Pascal) say that the visibility of state variables is controlled by the scope rules of the language.
- Pure declarative languages say that there is no state. The global state of the system is carried into all functions and comes out from all functions. Mechanisms like monads (for FPLs) and DCGs (logic languages) are used to hide state from the programmer so they can program "as if state didn't matter" but have full access to the state of the system should this be necessary.

The "hide the state from the programmer" option chosen by OOPLs is the worst possible choice. Instead of revealing the state and trying to find ways to minimise the nuisance of state, they hide it away.

#### Why was OO popular?

- Reason 1. It was thought to be easy to learn.
- Reason 2. It was thought to make code reuse easier.
- Reason 3. It was hyped.
- Reason 4. It created a new software industry.

I see no evidence of 1 and 2. Reasons 3 and 4 seem to be the driving force behind the technology. If a language technology is so bad that it creates a new industry to solve problems of its own making then it must be a good idea for the guys who want to make money.

This is is the real driving force behind OOPs.

## how rust implements compile time memory safety

`dev` `view` `theory`

Rust 语言的编译时内存安全（英文）

https://kkimdev.github.io/posts/2019/04/22/Rust-Compile-Time-Memory-Safety.html

Rust 语言不会发生内存错误，都能在编译时发现。本文通过几个简单的例子，解释为什么这项功能很有用。

---

### Rust - Compile Time Memory Safety

Apr 22, 2019

In this post, I will explain why Rust is interesting by making an analogy between "dynamic vs static typing" and "C++ vs Rust's static memory safety" without going into too much detail.

#### Preventing type errors at compile time

Static typing prevents type errors at compile time, for example,

- Python

```py
def square(x):
    return x * x

square("5")
# Runtime error: Can't multiply sequence by non-int of type 'str'
```

- C++

```cpp
int square(int x) {
    return x * x;
}

square("5");
// Compile error: Invalid conversion from 'const char*' to 'int'
```

Static typing has the following benefits (taken from [Guido Rossum's Stanford seminar](https://www.youtube.com/watch?v=GiZKuyLKvAA&t=702)).

- Catches (certain) bugs earlier
- Refactor with confidence
- Helps human reader navigate large code bases
- Better than (certain) comments: compiler keeps you honest

In fact, all popular dynamic languages have static typing projects, often backed by big corporations as the benefit of static typing becomes more significant for larger projects.

- Python: [PEP 484 Type Hints](https://www.python.org/dev/peps/pep-0484/), [Dropbox Mypy](http://mypy-lang.org/index.html)
- Javascript: [Microsoft Typescript](https://www.typescriptlang.org/), [Google Closure](https://developers.google.com/closure/compiler/), [Facebook Flow](https://flow.org/)
- Ruby: [Stripe Sorbet](https://sorbet.org/)
- PHP: [Facebook Hack](https://hacklang.org/)
- Lua: [Ravi](https://github.com/dibyendumajumdar/ravi)

#### Preventing memory errors at compile time

Since memory safety in C++ is a major practical issue, it would be great if we can check them statically in a similar manner that static typing does.

Yes, this was one of the main motivations behind the creation of Rust. Just like C++ compiler tracks type information for each variable, Rust compiler tracks ownership, lifetime, and aliasing for each variable in addition.

Here is a small list of memory issues that can be statically verified with Rust.

#### Using uninitialized variable

- C++

```cpp
int x;
int y = square(x);
// Passing a garbage value at runtime.
```

- Rust

```rs
let mut x: i32;
let mut y = square(x);
// Compile error
// error[E0381]: use of possibly uninitialized variable: `x`
//   |
//   | let mut y = square(x);
//   |                    ^ use of possibly uninitialized `x`
```

#### Invalid memory access

- C++

```cpp
int* x = (int*)1234;
*x = 5;
// Runtime invalid memory access
// Segmentation fault (core dumped)
```

- Rust

```rs
let x = 1234 as *mut i32;
*x = 5;
// Compile error
// error[E0133]: dereference of raw pointer is unsafe and requires unsafe function or block
//   |
//   | *x = 5;
//   | ^^^^^^ dereference of raw pointer
//   |
//   = note: raw pointers may be NULL, dangling or unaligned; they can violate aliasing rules and cause data races: all of these are undefined behavior
```

#### Dangling pointer / variable

- C++

```cpp
std::string_view get_extension(std::string filename) {
    return filename.substr(filename.find_last_of('.') + 1);
    // Returning dangling std::string_view at runtime.
}
```

- Rust

```rs
fn get_extension(filename: String) -> &'static str {
    return &filename[filename.rfind('.').unwrap()+1..];
    // Compile error
    // error[E0515]: cannot return value referencing function parameter `filename`
    //   |
    //   | return &filename[filename.rfind('.').unwrap()+1..];
    //   |        ^--------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //   |        ||
    //   |        |`filename` is borrowed here
    //   |        returns a value referencing data owned by the current function
    //   }
    //
}
```

#### Incorrectly using a moved object

- C++

```cpp
std::vector<int> x = {1, 2, 3};
process(std::move(x));
x.push_back(4);
// Using an unspecified state object at runtime
```

- Rust

```rs
let mut x = vec![1, 2, 3];
process(x);
x.push(4);
// Compile error
// error[E0382]: borrow of moved value: `x`
//   |
//   | let mut x = vec![1, 2, 3];
//   |     ----- move occurs because `x` has type `std::vec::Vec<i32>`, which does not implement the `Copy` trait
//   | process(x);
//   |         - value moved here
//   | x.push(4);
//   | ^ value borrowed here after move
```

#### Data race in multithreading

- C++

```cpp
#include<iostream>
#include<thread>
#include<vector>

static int MONEY = 0;

void deposit_money(int amount) {
    for (int i = 0; i < amount; ++i)
        ++MONEY;
        // Runtime data race. Some increments can be ignored.
}

int main() {
    std::vector<std::thread> threads;

    for(int i = 0; i < 100; ++i)
        threads.emplace_back(deposit_money, 10000);

    for(int i = 0; i < 100; ++i)
        threads[i].join();

    // The result might not be 1000000 due to the data race.
    std::cout << MONEY;
}
```

- Rust

```rs
static mut MONEY: i32 = 0;

fn deposit_money(amount: i32) {
    for _ in 0..amount {
        MONEY += 1;
        // Compile error
        // error[E0133]: use of mutable static is unsafe and requires unsafe function or block
        //   |
        //   |     MONEY += 1;
        //   |     ^^^^^^^^^^ use of mutable static
        //   |
        //   = note: mutable statics can be mutated by multiple threads: aliasing violations or data races will cause undefined behavior
    }
}

fn main() {
    let mut threads = vec![];

    for _ in 0..100 {
        let thread = std::thread::spawn(|| deposit_money(10000));
        threads.push(thread);
    }

    for thread in threads {
        let _ = thread.join();
    }

    println!("{}", MONEY);
}
```

To make these static memory checks possible, Rust enforces single mutable ownership or multiple read-only aliases at a time. In fact, they are very good idioms to structure large codebase anyways, and normally they do not get in the way for ordinary applications. For libraries that require fine-grained memory control like data containers, e.g., vector, list, and hash map, [`unsafe` keyword](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html) is available to bypass the restrictions.

To be fair, there are compiler options or external tools that we can use to detect C++ memory issues, but it's nowhere close to the completeness of Rust due to the implementation complexity and the inherent language spec limitations.

- `-Wall -Wextra` compiler options: Even for the above trivial examples, GCC 8.3 and Clang 8.0 could only detect the one case, uninitialized variable, out of the five cases.
- External tools, e.g., Valgrind, Address/Memory/Thread Sanitizers: They are great tools. However in practice, being able to detect at compile time vs runtime is a big difference as the detection is limited to the specific test cases that we have. Otherwise, there would be no need for static typing for correctness as we can run tests to catch the type errors.

## world video games hall of fame including microsoft solitaire

`info` `story` `retro`

微软纸牌游戏

https://www.theverge.com/2019/5/6/18530946/microsoft-solitaire-world-video-game-hall-of-fame

2019 年 5 月，微软纸牌游戏入选世界电子游戏名人堂，跻身 Doom、俄罗斯方块、魔兽世界、神奇宝贝和塞尔达传说的行列。

https://www.worldvideogamehalloffame.org/games/microsoft-solitaire

![](https://www.wangbase.com/blogimg/asset/201905/bg2019053105.jpg)

1990 年，纸牌游戏首次发布，与 Windows 3.0 捆绑在一起，然后 Windows 的几乎所有版本都带有它。它是世界上游戏人数最多的游戏。

![](https://www.wangbase.com/blogimg/asset/201905/bg2019053106.jpg)

## unsplash monthly maintenance cost

`info`

Unsplash 的运营成本是多少？（英文）

https://medium.com/unsplash/what-does-unsplash-cost-in-2019-f499620a14d0

Unsplash 是最流行的高清图片分享网站，创始人披露，2019 年 2 月该网站的运营成本：服务器 + 带宽大约 7 万多美元，数据处理 + 监控 2 万多美元，总费用 10 万美元。

## build in public solopreneur experiment by timqian

`dev` `story` `career`

我的透明创业实验（中文）

https://blog.t9t.io/transparent-startup-experiment-2019-05-20/

https://blog.t9t.io/t9t-year1-2020-05-18/

https://blog.t9t.io/star-history-2021-01-21/

一个正在进行的创业实验，一年时间做 10 个小产品，看看能否达到每月被动收入 1000 美元的目标。（@timqian 投稿）

---

### 我的透明创业实验

2019-05-20 by [timqian](https://timqian.com/)

Hello world, 我是  [timqian](https://github.com/timqian), 正在进行为期一年的[透明创业实验](https://t9t.io/). 这是关于这个实验的介绍以及第一周的实验记录.

研究生毕业马上两年了, 算上实习的经历, 我做过 1 年多的前端, 4 年多的后端工程师, 待过 5 家不同的互联网公司. 这 5 家公司从初创到世界 500 强各个阶段的都有. 但我都没有找到那种百分百投入的热情. 究其原因, 主要是自己在其中身份都是类似的. 是一个工具属性, 公司花钱买你的时间. 在某个"工程师"岗位上, 让别人告诉你该做什么, 要解决什么问题. 不管是被一些书籍文章([穷爸爸, 富爸爸](https://www.zhihu.com/question/20528677), [阮一峰的博客](http://www.ruanyifeng.com/survivor/startup/why-startup.html)  等)洗脑也好, 还是自己的梦想也罢, 我希望拥有自己的"资产", 而不是一直拿时间去换钱.

我辞职了, 没有太多"人脉", "资源", "合伙人", 更不用说什么 "投资" 之类. 幸运的是我有足够生活一年的存款和支持我的家人和朋友. 我想要试试给自己一年的时间来做一个实验, 看看一个机灵程度中上的会写几行代码的普通人, 给他一年时间让他自由创造, 是否可以做出产出 1000 美元每月的被动收入的产品.

#### 实验条件

- 一年时间
- 一个全干工程师
- 无服务(serverless)的开发方式, 让服务器和维护成本趋近于 0

#### 实验目标

- 至少 10 款主要产品
- 1000 美元每月的被动收入

#### 实验特点

完全透明: 不管是我的思考过程, 产品的源代码, 还是产品的收入情况, 完全公开在互联网上.

#### 为什么要完全透明

- 希望对有类似想法的人提供最大的参考意义
- 对自己有一个督促作用, 所有人都可以看到你的工作状态, 自然会做的更用心些
  - 独立开发者一个很大的问题是孤独, 遇到问题容易走入死胡同, 整个过程完全透明, 更有可能获得他人的指点
- 是一种推广手段
  - 当今社会, 信息爆炸, 最贵的是人们的注意力. 注意力也是产品获得用户的第一步. 希望借由实验经历的分享, 获得一些宝贵的注意力.

## ruan yifeng from a literature graduate to a frontend dev

`dev` `career`

上月的周刊提到，文科生不容易就业，理工科的就业远远好于文科。

https://www.ruanyifeng.com/blog/2019/05/weekly-issue-56.html

我是有感而发，自己就是文科毕业，后来改做互联网开发，部分原因就是本专业看不到前景。我改做了前端工程师，其实个人兴趣不在前端，但是前端的难度相对最低，外行容易入门。一个文科生改行成为后端工程师，难度太大了。

我改行的时候，正赶上手机互联网兴起，迫切需要解决手机 App 的 UI 问题，这刺激了前端工程师这个行业，成为整个软件业的热点，市场的招聘需求非常旺盛。

现在，情况完全变了。一方面，手机 App 的 UI 已经有了比较成熟的解决方案，不再是一个瓶颈，一般页面的开发难度都不高，跟着教程就能做出来，剩下没解决的问题都是技术硬骨头。另一方面，手机上网人口增长趋缓，导致前端工程师的需求不再像以前那样爆炸式增长。

现在对前端工程师的技术要求，大大超过以往。我刚进这个行业的时候，最主要的工具库是 jQuery，跟现在相比，完全是小儿科，都被淘汰了。此外，整个软件开发的瓶颈，附加值最高的部分，正在往后端转移。AI 工程师、算法工程师、系统工程师、Devops 工程师变成最紧俏的岗位。这些岗位的技术难度更大，外行更不容易入门，以后文科生再想转软件工程师，怕是没有那么容易了。

## github repo collection for programming beginners

`app` `feed`

Hello GitHub

https://hellogithub.com/

跟踪收集 GitHub 新项目的《Hello GitHub》的官网。（@Salmonberry 投稿）

## 100 days of python for beginner

`py` `guide` `library`

Python-100-Days

https://github.com/jackfrued/Python-100-Days

一个 Python 中文教程库，从最基础的知识讲起。（@Y024 投稿）

## web components from svelte author's perspective

`js` `view`

我为什么不使用 Web Components？（英文）

https://dev.to/richharris/why-i-don-t-use-web-components-2cia

Svelte 框架的作者谈 Web Components 方案的一些问题。

---

### Why I don't use web components

For my first post on dev.to I thought I'd write about a nice, safe topic that's free of controversy: web components.

I'm mostly writing this for my future self, so that I have something to point to next time someone asks why I'm a web component skeptic, and why [Svelte](https://svelte.dev/) doesn't compile to custom elements by default. (It *can* compile to CEs, and it can consume CEs as evidenced by its perfect score on [Custom Elements Everywhere](https://custom-elements-everywhere.com/).)

None of this should be taken as criticism of the hard work that has been done on web components. It's possible that I have made some errors in this post, in which case I'd welcome corrections.

Nor am I saying that you shouldn't use web components. They *do* have valid use cases. I'm just explaining why *I* don't.

#### 1. Progressive enhancement

This may be an increasingly old-fashioned view, but I think that websites should work without JavaScript wherever possible. Web components don't.

That's fine for things that are intrinsically interactive, like a custom form element (`<cool-datepicker>`), but it's not fine for your nav bar. Or consider a simple `<twitter-share>` element that encapsulates all the logic for constructing a [Twitter web intent](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent.html) URL. I could [build it in Svelte](https://svelte.dev/repl/98aa20d4cb3d40dabfef7d8dae183b85?version=3.5.2) and it would generate server-rendered HTML like this:

```html
<a target="_blank" noreferrer href="..." class="svelte-1jnfxx"> Tweet this </a>
```

In other words, a bog-standard `<a>` element, in all its accessible glory.

With JavaScript enabled, it progressively enhances --- rather than opening a new tab, it opens a small popup window instead. But without, it still works fine.

By contrast, the web component HTML would look something like this...

```
<twitter-share text="..." url="..." via="..."/>
```

...which is useless and inaccessible, if JS is disabled or somehow broken, or the user is on an older browser.

The `class="svelte-1jnfxx"` is what enables encapsulated styles without Shadow DOM. Which brings me onto my next point:

#### 2. CSS in, err... JS

If you want to use Shadow DOM for style encapsulation, you have to include your CSS in a `<style>` element. The only practical way to do so, at least if you want to avoid FOUC, is to have the CSS in a string in the JavaScript module that defines the custom element.

This runs counter to the performance advice we've been given, which can be summarised as 'less JavaScript, please'. The CSS-in-JS community in particular has been criticised for not putting CSS in `.css` files, and yet here we are.

In future, we may be able to use [CSS Modules](https://github.com/w3c/webcomponents/issues/759) alongside [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) to solve this problem. And we may be able to use `::theme` and `::part` to style things inside Shadow DOM. But these aren't free of problems either.

#### 3. Platform fatigue

> Rich Harris
>
> @rich_harris
>
> [@calebwilliams12](https://twitter.com/calebwilliams12) This is a pet peeve of mine though --- we've been touting this stuff as The Future for years, but in order to catch up with _the present_ we need to stuff the platform to the gills with all these new features, deepening the moat around existing browsers
>
> 17:55 PM - 19 Jun 2019

At the time of writing, there are 61,000 open issues on [https://crbug.com](https://crbug.com/), the Chromium bug tracker, which reflects the enormous complexity of building a modern web browser.

Every time we add a new feature to the platform, we increase that complexity --- creating new surface area for bugs, and making it less and less likely that a new competitor to Chromium could ever emerge.

It also creates complexity for developers, who are encouraged to learn these new features (some of which, like HTML Imports or the original Custom Elements spec, never catch on outside Google and end up being removed again.)

#### 4. Polyfills

It doesn't help that you need to use polyfills if you want to support all browsers. It *really* doesn't help that the literature on [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets), written by a Googler (hi Jason!), doesn't mention that they're a Chrome-only feature (_edit: this has been fixed after I opened a [pull request](https://github.com/google/WebFundamentals/pull/8212)_). The [three spec editors](https://wicg.github.io/construct-stylesheets/) are all Googlers. Webkit [seem to have some doubts](https://github.com/mozilla/standards-positions/issues/103#issuecomment-494181931) about some aspects of the design.

#### 5. Composition

It's useful for a component to be able to control when (or whether) its slotted content is rendered. Suppose we wanted to use the [`<html-include>` element](https://github.com/justinfagnani/html-include-element) to show some documentation from the network when it became visible:

```html
<p>Toggle the section for more info:</p>
<toggled-section>
  <html-include src="./more-info.html" />
</toggled-section>
```

Surprise! Even though you didn't toggle the section open yet, the browser already requested `more-info.html`, along with whatever images and other resources it links to.

That's because slotted content renders *eagerly* in custom elements. It turns out that most of the time you want slotted content to render *lazily*. Svelte v2 adopted the eager model in order to align with web standards, and it turned out to be a major source of frustration --- we couldn't create an equivalent to React Router, for example. In Svelte v3 we abandoned the custom element composition model and never looked back.

Unfortunately this is just a fundamental characteristic of the DOM. Which brings us to...

#### 6. Confusion between props and attributes

Props and attributes are basically the same thing, right?

```js
const button = document.createElement("button");

button.hasAttribute("disabled"); // false
button.disabled = true;
button.hasAttribute("disabled"); // true

button.removeAttribute("disabled");
button.disabled; // false
```

I mean, almost:

```js
typeof button.disabled; // 'boolean'
typeof button.getAttribute("disabled"); // 'object'

button.disabled = true;
typeof button.getAttribute("disabled"); // 'string'
```

And then there are the names that don't match...

```js
div = document.createElement("div");

div.setAttribute("class", "one");
div.className; // 'one'

div.className = "two";
div.getAttribute("class"); // 'two'
```

...and the ones that just don't seem to correspond at all:

```js
input = document.createElement("input");

input.getAttribute("value"); // null
input.value = "one";
input.getAttribute("value"); // null

input.setAttribute("value", "two");
input.value; // 'one'
```

But we can live with those quirks, because *of course* some things will be lost in translation between a string format (HTML) and the DOM. There's a finite number of them, and they're documented, so at least you can learn about them given enough time and patience.

Web components change that. Not only are there no longer any guarantees about the relationship between attributes and props, but as a web component author, you're (presumably?) supposed to support both. Which means you see this sort of thing:

```js
class MyThing extends HTMLElement {
  static get observedAttributes() {
    return ["foo", "bar", "baz"];
  }

  get foo() {
    return this.getAttribute("foo");
  }

  set foo(value) {
    this.setAttribute("foo", value);
  }

  get bar() {
    return this.getAttribute("bar");
  }

  set bar(value) {
    this.setAttribute("bar", value);
  }

  get baz() {
    return this.hasAttribute("baz");
  }

  set baz(value) {
    if (value) {
      this.setAttribute("baz", "");
    } else {
      this.removeAttribute("baz");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "foo") {
      // ...
    }

    if (name === "bar") {
      // ...
    }

    if (name === "baz") {
      // ...
    }
  }
}
```

Sometimes you see things go the other way --- `attributeChangedCallback` invoking the property accessors instead. Either way, the ergonomics are disastrous.

Frameworks, by contrast, have a simple and unambiguous way to pass data into a component.

#### 7. Leaky design

This point is a bit more nebulous, but it weirds me out that `attributeChangedCallback` is just a method on the element instance. You can literally do this:

```
const element = document.querySelector('my-thing');
element.attributeChangedCallback('w', 't', 'f');
```

No attribute changed, but it will behave as though it did. Of course, JavaScript has always provided plenty of opportunities for mischief, but when I see implementation details poke through like that I always feel as though they're trying to tell us that the design isn't quite right.

#### 8. The DOM is bad

Ok, we've already established that the DOM is bad. But it's hard to overstate what an awkward interface it is for building interactive applications.

A couple of months back, I wrote an article called [Write less code](https://svelte.dev/blog/write-less-code), intended to illustrate how Svelte allows you to build components more efficiently than frameworks like React and Vue. But I didn't compare it against the DOM. I should have.

To recap, here's a simple `<Adder a={1} b={2}/>` component:

```html
<script>
  export let a;
  export let b;
</script>

<input type="number" bind:value="{a}" />
<input type="number" bind:value="{b}" />

<p>{a} + {b} = {a + b}</p>
```

That's the whole thing. Now, let's build the same thing as a web component:

```js
class Adder extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <input type="number">
      <input type="number">
      <p></p>
    `;

    this.inputs = this.shadowRoot.querySelectorAll("input");
    this.p = this.shadowRoot.querySelector("p");

    this.update();

    this.inputs[0].addEventListener("input", (e) => {
      this.a = +e.target.value;
    });

    this.inputs[1].addEventListener("input", (e) => {
      this.b = +e.target.value;
    });
  }

  static get observedAttributes() {
    return ["a", "b"];
  }

  get a() {
    return +this.getAttribute("a");
  }

  set a(value) {
    this.setAttribute("a", value);
  }

  get b() {
    return +this.getAttribute("b");
  }

  set b(value) {
    this.setAttribute("b", value);
  }

  attributeChangedCallback() {
    this.update();
  }

  update() {
    this.inputs[0].value = this.a;
    this.inputs[1].value = this.b;

    this.p.textContent = `${this.a} + ${this.b} = ${this.a + this.b}`;
  }
}

customElements.define("my-adder", Adder);
```

Yeah.

Note also that if you change `a` and `b` in the same instant, it will result in two separate updates. Frameworks don't generally suffer from this issue.

#### 9. Global namespace

We don't need to dwell on this one too much; suffice it to say that the dangers of having a single shared namespace have been well understood for some time.

#### 10. These are all solved problems

The biggest frustration of all is that we already have really good component models. We're still learning, but the basic problem --- keep the view in sync with some state by manipulating the DOM in a component-oriented fashion --- has been solved for years.

Yet we're adding new features to the platform just to bring web components to *parity* with what we can already do in userland.

Given finite resources, time spent on one task means time not spent on another task. Considerable energy has been expended on web components despite a largely indifferent developer population. What could the web have achieved if that energy had been spent elsewhere?

## declaration of digital independence

`society` `view`

数字独立宣言

https://larrysanger.org/2019/06/declaration-of-digital-independence/

维基百科联合创始人之一撰写的互联网领域的权利宣言，摘录两段。

"人类被巨大的数字帝国轻蔑地对待。因此，现在有必要用独立个体的分散网络取代这些帝国，就像互联网的早期一样。"

"我们声明，我们拥有不可剥夺的数字权利。由于目前互联网的专有集中式架构已经促使大多数人放弃这些权利，我们应该要求一个能够尊重它们的新系统。"

## the restaurant asking for one star rating

`story`

要求一星评价的餐厅

https://thehustle.co/botto-bistro-1-star-yelp/

2014 年，厨师 Davide Cerretini 宣布了一个永远改变其命运的政策：任何他的顾客离开餐厅时，在 Yelp 上面进行一星评价，都可以享受五折的披萨折扣。

Yelp 是美国最大的餐厅点评网站，由 PayPal 前员工 Jeremy Stoppelman 于 2004 年推出。它允许顾客对餐厅打分，五星是最高分，一星是最低分。这对餐厅影响很大，有时半颗星的差距会让高峰时段的人流量相差 19％。

Davide Cerretini 的餐厅 2009 年开业后几个月，就开始收到 Yelp 销售人员的几十个电话，他们要求他购买广告。他拒绝了，然后就发现自己餐厅新增的五星好评被删除了。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019061101.jpg)

他说："我是意大利移民，完全知道黑手党敲诈勒索的样子。Yelp 正在操纵评论，并希望我支付保护费。我来美国工作 25 年，现在却被硅谷的一些白痴敲诈勒索。"

Yelp 否认 Cerretini 的指控，表示删除正面评价是因为该平台的算法。算法通常根据一系列非公开标准过滤评论。这些"过滤"掉的评论仍然可供客户看到，但不会影响企业的整体星级评分。

面对评价下降，Davide Cerretini 决定做出反应。"我写了自己餐厅的五星好评，"他承认。"我不是一个好人。我写的是假评价，以弥补他们删除的真实评价。"但是，这很快就被算法发现，然后全部删除。

最终，他屈服了，每月花费 270 美元在 Yelp 上面做广告。但是 6 个月之后，他发现这项服务"毫无用处"，就取消了它。结果，他的星级评价再一次暴跌。

2014 年春天，拒绝了另一位 Yelp 销售人员后，Davide Cerretini 声称他的页面中又有四条 5 星好评被过滤掉了，顶部的三个评价全部是一星的。

"这些一星评价来自那些从未来过我餐厅的人，" Cerretini 说。"有人抱怨我们的服务员......我们甚至没有服务员，顾客要自己取餐！"

他忍无可忍，决定采取极端措施进行反抗。他在餐厅门口的黑板上，宣布只要在 Yelp 上打下一星评价，批萨价格就可以对折。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019061102.jpg)

没想到，这个措施发布后，他一天的营业额相当于以前一个月。很多人打了一星评价，但是文字写的却是好评。所有那些痛恨 Yelp 的餐厅主，都纷纷表示对他的支持。

几天之后，他的 Yelp 页面已经有超过 2,300 个一星级评级（占评论总数的 95％），其中大部分是赞扬。这使得该餐厅成为 Yelp 上评价最差的餐厅。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019061103.jpg)

他也因此成为名人。在媒体眼里，他象征着单枪匹马与科技巨头对抗的孤独骑士。他趁机推出了私人的烹饪课程，售价高达 3000 美元。

## quiting the twitter restricting third party clients

`society` `view` `quote`

推特宣布限制第三方客户端时，我就决定不再使用它了。这种服务要求用户投入大量时间，却不提供个人数据的所有权和控制权。

-- 《我相信 IndieWeb》

https://fogknife.com/2018-05-04-i-believe-in-the-indieweb-it-needs-to-believe-in-itself.html

## simple english guidelines

`editorial` `guide`

简单英语指南

https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/

美国政府的官方网页，有几百条单词建议，指导你怎么写出简单的文章，不要用复杂的单词。比如说，"a 和 b 可以同时使用，也可以单独使用"，不要用 a and/or b，而要用 a or b or both。

---

https://www.plainlanguage.gov/media/FederalPLGuidelines.pdf

## jokenpo (rock paper scissors) game with machine learning

`app` `theory`

jokenpo

https://github.com/victorqribeiro/jokenpo

一个网页游戏，使用机器学习算法，让玩家与计算机进行"剪刀石头布"游戏。

## most web apps are just showing data

`dev` `quote`

90%的 Web 应用是数据库前端。

-- HN 读者留言

https://news.ycombinator.com/item?id=20642038

## last days of a once lion king

`literary`

饿死的狮子王

https://travelguideandphotography.com/2018/04/23/the-death-of-a-king/

我们参观南非的克鲁格国家公园（Kruger National Park），看到一只巨大的雄狮蹲在河岸边。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073102.jpg)

他瘦得皮包骨头，几乎站不起来。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073103.jpg)

他慢慢地离开河边，摇摇晃晃地好像喝醉了一样。每走几步，他就会停下来喘口气，低着头，直到他有足够的力量再走几步。走到一半的时候，他突然倒在路上。很明显，他已经在生命的最后阶段了。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073104.jpg)

一只大象靠近他，他努力站起来，试图逃跑。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073105.jpg)

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073106.jpg)

当天晚些时候，我们发现他躺在草地上，筋疲力尽无法动弹。我离他不到五英尺，看着他的眼睛。我只是想让他知道，他不会独自死去。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073107.jpg)

他的胸部一上一下，不停地抽搐，一个小时之后，他死了。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019073108.jpg)

多年来，作为一名摄影记者，我拍摄过失去一切的人、受伤的人、正在死去的人，但从来没有拍过像这只雄伟的动物那样悲伤的东西。他是真正的野兽之王，但是老了以后，可怜地饿死了。

后来我们才知道，这只高贵狮子的名字是 Skybed Scar，他在克鲁格国家公园以其漫游和统治多年而闻名。他自由地生活，自由地死去。

## sketchy style chart and table components

`js` `image`

chart.xkcd

https://github.com/timqian/chart.xkcd

一个 XKCD 漫画风格的网页图表库。（@timqian 投稿）

## sketchy style svg renderer

`js` `image`

Rough.js

https://github.com/pshihn/rough/

生成手绘风格图片的 JS 库。

## python interesting tricky features

`py` `meme` `library`

wtfpython-cn

https://github.com/leisurelicht/wtfpython-cn

这个仓库收集一些有趣且鲜为人知的 Python 特性，内容是从英语翻译而来的。（@fengrussell 投稿）

---

https://github.com/satwikkansal/wtfpython

## create a successful side project story theory

`dev` `story` `app` `image` `ref`

我如何创建一个盈利的副业项目？（英文）

https://blog.pixelixe.com/2019/09/19/how-a-facebook-rejection-pushed-me-to-start-and-grow-a-profitable-business-in-12-months/

作者在面试 Facebook 被拒以后，决定做一个项目证明自己。本文记录他构思、开发、推广的过程，发布后 4 个月产生了 1000 美元的收入。

---

### How a Facebook rejection pushed me to start and grow a profitable business in 12 months

![](https://pixelixe.com/blog/images/18/pixelixe-studio-graphic-creation.jpg)

_Here is the story behind the creation of [Pixelixe.com](https://pixelixe.com/), an online graphic creation tool I started creating in my free time 12 months ago after an interview failure at Facebook. The project quickly reached profitability, discover below how all started._

The 23th of January 2018 (which was also exactly my birth day), I received the first email from Facebook. In brief, the Facebook London office was recruiting a tech team for the Paris office and they wanted to interview me to potentially become one of their Solutions Engineering Manager.

Here is the first email I received :

```
Hello Thomas,
My name is XXX XXXX from the EMEA recruiting team in Facebook, I'm keen to connect with you in relation to a role we currently have open in our Paris office - Solutions Engineering Manager, Southern Europe, please see link to the role below.
https://www.facebook.com/careers/jobs/xxxxxxxxxxxxx
Your experience looks very interesting and relevant as we are particularly interested in talent who have demonstrated engineering management experience combined with coding capability. I would love the opportunity to have an informal chat with you so I could provide you with more context on the role and share more details with you as to what the team do.
I look forward to hearing from you.
Kind regards,
XXXX xxxx
Technical Recruitment at Facebook*
```

After reading the above email, I knew I had to say "Yes"! First reason, even if I was quite happy with my current job, it was hard for me to refuse an opportunity to work for one of the hottest companies in the world. Second reason, I have to admit I was very flattered they were impressed by my CV and reached out to me. Who wouldn't??

It is important to be aware than in my current job at that time, even if I had a software engineering background, I didn't code that much. I was and still am the Data CTO for a large retail company based in 16 countries worldwide and I spend most of my days doing mostly management and strategy meetings. I was interacting with engineers but almost three years had passed since I really coded.

Basically, apart from the management skills, this job opportunity at Facebook required to be a computer science expert. And as you already know, companies such as Google or Facebook propose a quite sharp hiring process.

In 3 steps, here is how it works :

- Stage 1 : Phone call interview

- Stage 2 : Coding screen interview with one of their software engineer leads.

- Stage 3 : On site interview

The first phone interview went perfectly well, the recruiter was confident I was a potential good fit for the team. She also added in our conversation that the basis salary for such position within Facebook started at 150.000 Euros and we both agreed we should quickly organise the coding interview.

Even if I built software for a decade prior to this first contact with Facebook, I did my homework dutifully. I read a ton of articles about how to prepare for a software engineering interview at Facebook. I spent days revising basic data structure courses, Big O Notations, recursive functions and so on to increase my chances of success. I even did a lot of fake coding interviews to make sure I will be ready.

The next week, I sat down in front of my laptop, ready to tackle this software engineering interview and guess what?? I failed!

I suppose I was too stressed out, even if the stakes were not high at all, I already had a great job and my life didn't depend on this interview. But still, I lost my ability to focus.

As you may know, during on screen coding interview, your recruiter asks you to solve problems and you have to write code on a shared live document meanwhile explaining your choices and your approach to solve the problem. English is not my mother tongue (I am French) and I struggled coding and speaking complex technical english simultaneously.

To be honest, I do not blame Facebook at all, both recruiters I talked with were really kind and professional.

Moreover, I have always admired companies that select their employees carefully and tend to attract the best profiles. There are too many companies out there that do not raise the bar high enough and have poor or weak level and ends up never being "innovation" driven.

Anyway, it was exciting to take this little challenge and I do not regret anything. As Gary Vaynerchuck always says, "Have zero regrets", right?

But, I ended up being really frustrated. Was I that bad as a software engineer? Did I lose my computer science skills? I started doubting myself and my technical abilities. So badly, that I decided to do something about it to regain them. I didn't want to become one of those high level executive directors that are too far away from operational teams.

A few years ago, I read an article explaining that Werner Vogels, the CTO of Amazon coded at least one day each month even being a busy man in a huge organisation such as Amazon. This article always resonated with me. How a CTO can be efficient and productive for its organization if he loses the link with technical topics and does not understand the suffering of his technical teams?

What a better way to stay updated on computer science evolution and to understand issues met by engineering teams than by keeping coding regularly throughout your career?

So, in April 2018, I started being motivated to code again in my free time (evenings, weekends, holidays). This Facebook rejection motivated me so much, I wanted to prove to myself that I was, not only, able to code but also to built an entire product and launch it all by myself.

#### Step 1 : Find a product idea challenging enough from a technical point of view

The challenge I decided to face was to develop a fully working product, as a side project (keeping my full time job). I won't be in a hurry if I kept working full time (no money stress), meaning I will always have my job to pay the bills.

Also, when I was young, I have always been a huge fan of Gyro Gearloose (inventing stuff by himself in his garage) and when I grew up, I was fascinated by startups that was born in garages with nothing apart a single guy working on his passion project.

![](https://pixelixe.com/blog/images/18/startup-garage.png)

Find below conditions I decided to follow for my side project :

Condition 1 : I decided I wanted to do everything by myself, from the idea, to conception and design and to develop every line of code alone: databases, middleware, APIs, website, defining UX/UI, everything!!! I just wanted to keep fit and sharpen my technical skills.

Condition 2 : I didn't want to build something too easy. I wanted it to be fun, complex with a lot of calculus problems to solve (to revise mathematics simultaneously with coding), maybe a bit of 3D, something that people would use with pleasure and that I will be proud of.

Condition 3 : It was obvious from the start, I wanted to create a Saas product with a freemium model. As it will be a side project, I couldn't afford to start a business where I would have to meet people face to face (salesman way) to turn them into potential users or buyers. The plan was to create a tool accessible 100% online. Users will be able to use the free plan or upgrade with their credit cards without any human intervention whatsoever. That way keeping my full time job won't be a problem at all.

Condition 4 : Finally, I decided to spend no money at all on this project. (Except for buying a domain name which is mandatory) Bootstrapping was the way to go. I wanted to persuade myself that on the Internet in 2019, you could still build something from the ground up with no money. (Like in the 70s/80s/90s, when geeks started profitable businesses directly from their garage).

#### Step 2 : find a business idea

The next step was to find a business idea. I made some research on Google, Reddit, Quora to find ideas. But nothing really popped up and motivated me.

I then spent two weeks interviewing some friends and my network that had jobs in small and medium businesses. I quickly noticed asking a bunch of questions that a lot of small businesses struggled to get or create graphics to promote their services on social and digital platform (Existing solutions were too complex or too expensive). The tools available were not only complicated, but they were incredibly time-consuming. Hiring a graphic designer was also out of the question for SMBs.

I then decided to create an easier way to design graphics and images for non-designers.

Moreover, this idea was motivating me a lot, I decided to build the most easy to use and accessible graphic design studio on the market. Developing a WYSIWYG (What You See Is What You Get) editor was complex enough to challenge my computer engineering skills. A lot of mathematics and calculus would be involved, perfect. I was excited as hell!

To summarize, the plan was to develop a design studio, conceived for non-designers (SMBs with limited resources and budgets), startups, bloggers and marketers willing to launch simple marketing and social media campaigns without spending tons of money with agencies.

I started developing the first line of code in May 2018.

![](https://pixelixe.com/blog/images/18/office-macbook.jpg)

#### Step 3 : There is no such thing as finding a startup name, In reality, the trick is to find a free domain name that looks like a startup name

I quickly realised that instead of trying to find a startup name, the main difficulty was to find an available and cheap domain name. This process took me almost two entire days. It was painful, exhausting and I disliked it. My approach was to brainstorm to find words that resonated with graphic/image/design/pixel and spent my time searching if my domain ideas "smartpixels", "pixelsmart", "pixelgraphic" and few other hundreds were available or not and was the cheapest as possible. I wanted a ".com", not a ".io", or ".ai" or something else.

After two days, I finally found "Pixelixe.com" and I purchased it for $13/year from Google Domains. Yes, only $13 and since then, I didn't spend anything else on the project.

For the record, I launched the first version of the website in September 2018 but I haven't tried at that moment to acquire traffic. I was still developing the major features of the product.

Finally, one year later, the app is now live for 4 months and is already profitable

Almost one year after I started coding my graphic studio, I released the first version of the product the 25th of March on Product Hunt.

https://www.producthunt.com/posts/pixelixe

Since then, I focus my energy on growing traffic and fixing small bugs.

So far, thousands of users created and downloaded a graphic with Pixelixe Studio.

I had my first paying customers the day after the launch. I was so thrilled, it was a really exciting moment for me and a huge milestone for Pixelixe. I felt so rewarded after the ton of hours I put into the project.

After spending a lot of time focusing on SEO optimisations on the website, organic traffic starting to grow every week steadily.

![](https://pixelixe.com/blog/images/18/pixelixe-google-search-console.png)

I learned a lot about coding but also, communication, marketing and I am ready to share few tips with you in next articles.

#### Conclusion 12 months after starting the project

Profitability for a side project can be, I suppose, controversial. I do not rely on Pixelixe, my side project to live and get a full salary. The only expense Pixelixe had so far is $13 to get the domain name "pixelixe.com" from Google Domain last September. In 4 months since the launch, Pixelixe Studio generated around $1000 of positive income. Not bad for a side project start, right?

I did a lot of effort to reduce expenses as low as possible optimizing codes and favorising client-side processing instead of server-side processing to avoid hosting costs. (In another article, I will explain how I did it).

Today, gains are almost 100% bigger than expenses. Therefore, I consider the project as profitable in the sense, it generates enough cash flow to sustain itself (and even more). I do not plan yet to reinvest part or totality of profits into the project, I am still trying to validate pricing, business model and get more organic growth.

I am glad I went out of my comfort zone accepting this Facebook interview. I learned and grew a lot since then.

I am proud to say I regain my coding abilities, design abilities, web marketing abilities and I can carry on as there are so many skills required to launch a startup as a side project.

## confused design of the task management app jira

`app` `meme`

为什么 Jira 难用透了（英文）

https://medium.com/@jtomaszewski/15-reasons-why-jira-and-confluence-suck-37507361cbdf

Jira 是常用的项目管理工具，本文使用大量图片解释这个工具是多么难用。

## questions for reverse interview

`dev` `career` `guide` `info` `ref`

反向面试

https://github.com/yifeikong/reverse-interview-zh

这个中文仓库收集反向面试的问题，一共 50 多个，你可以用来问面试官。（@ifrontend-xyz 投稿)

---

### 反向面试

> 大部分翻译自：https://github.com/viraptor/reverse-interview ，亦有其他网友补充。

> 译者总结的一份适合突击记忆的简洁版 LeetCode 题解和面试问题，也欢迎 Star。<https://github.com/yifeikong/interview>

下面列表里的问题对于参加技术面试的人来说可能有些用。 列表里的问题并不一定适用于某个特定的职位或者工作类型，也没有排序 最开始的时候这只是我自己的问题列表，但是慢慢地添加了一些我觉得可能让我对这家公司亮红牌的问题。 我也注意到被我面试的人提问我的问题太少了，感觉他们挺浪费机会的。

如果你问过的问题没有被列出来，请提交一个 PR。

翻译：

[English](https://github.com/viraptor/reverse-interview) [Korean](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/blob/master/Reverse_Interview/README.md) [Portuguese](https://github.com/viraptor/reverse-interview/blob/master/translations/PORTUGUESE.md) [繁體中文](https://github.com/NeroCube/reverse-interview-zh-tw/blob/master/README.md)

#### 预期使用方式

- 检查一下哪些问题你感兴趣
- 检查一下哪些是你可以自己在网上找到答案的
- 找不到的话就向面试官提问

绝对不要想把这个列表里的每个问题都问一遍。(尊重面试官的时间，而且你可以通过查找已经发布的答案来显示 你的主动性)

请记住事情总是灵活的，组织的结构调整也会经常发生。拥有一个 bug 追踪系统并不会保证高效处理 bug。 CI/CD (持续集成系统) 也不一定保证交付时间会很短。

#### 职责

- On-call (电话值班)的计划或者规定是什么？值班或者遇到问题加班时候有加班费吗？
- 我的日常工作是什么？
- 有给我设定的特定目标吗？
- 团队里面初级和高级工程师的比例是多少？(有计划改变吗)
- 入职培训 (onboarding) 会是什么样的？
- 每个开发者有多大的自由来做出决定？
- 在你看来，这个工作做到什么程度算成功？
- 你期望我在最初的一个月 / 三个月能够完成什么？
- 试用期结束的时候，你会怎么样衡量我的绩效？
- 自己单独的开发活动和按部就班工作的比例大概是怎样的？
- 一个典型的一天或者一周的工作是怎样安排的？
- 对我的申请你有什么疑虑么？
- 在这份工作上，我将会和谁紧密合作？
- 我的直接上级他们的上级都是什么样的管理风格？(事无巨细还是着眼宏观)
- 我在这个岗位上应该如何发展？会有哪些机会？
- 每天预期 / 核心工作时间是多少小时？
- 我入职的岗位是新增还是接替之前离职的同事？(是否有技术债需要还)？(zh)
- 入职之后在哪个项目组，项目是新成立还是已有的？(zh)

#### 技术

- 公司常用的技术栈是什么？
- 你们怎么使用源码控制系统？
- 你们怎么测试代码？
- 你们怎么追踪 bug?
- 你们怎样监控项目？
- 你们怎么集成和部署代码改动？是使用持续集成和持续部署吗 (CI/CD)？
- 你们的基础设施搭建在版本管理系统里吗？或者是代码化的吗？
- 从计划到完成一项任务的工作流是什么样的？
- 你们如何准备故障恢复？
- 有标准的开发环境吗？是强制的吗？
- 你们需要花费多长时间来给产品搭建一个本地测试环境？(分钟 / 小时 / 天)
- 你们需要花费多长时间来响应代码或者依赖中的安全问题？
- 所有的开发者都可以使用他们电脑的本地管理员权限吗？
- 介绍一下你们的技术原则或者展望。
- 你们的代码有开发文档吗？有没有单独的供消费者阅读的文档？
- 你们有更高层次的文档吗？比如说 ER 图，数据库范式
- 你们使用静态代码分析吗？
- 你们如何管理内部和外部的数字资产？
- 你们如何管理依赖？
- 公司是否有技术分享交流活动？有的话，多久一次呢？(zh)
- 你们的数据库是怎么进行版本控制的？(zh)
- 业务需求有没有文档记录？是如何记录的？(zh)
- 你们是如何面对和解决技术债的？是否有专门的时间或者预算用于重构？
- 你们如何进行单元测试呢，是否都有单元测试的习惯?

#### 团队

- 工作是怎么组织的？
- 团队内 / 团队间的交流通常是怎样的？
- 你们使用什么工具来做项目组织？你的实际体会是什么？
- 如果遇到不同的意见怎样处理？
- 谁来设定优先级 / 计划？
- 如果团队没能赶上预期发布日期怎么办？
- 每周都会开什么类型的会议？
- 会有定期的和上级的一对一谈话吗？
- 产品 / 服务的规划是什么样的？(n 周一发布 / 持续部署 / 多个发布流 / ...)
- 生产环境发生事故了怎么办？是否有不批评人而分析问题的文化？
- 有没有一些团队正在经历还尚待解决的挑战？
- 你们如何跟踪进度？
- 预期和目标是如何设定的？谁来设定？
- Code Review 如何实施？
- 给我介绍下团队里一个典型的 sprint
- 你们如何平衡技术和商业目标？
- 你们如何共享知识？
- 团队有多大？
- 公司技术团队的架构和人员组成？(zh)
- 团队内开发、产品、运营哪一方是需求的主要提出方？哪一方更强势？(zh)

#### 问未来的同事

- 开发者倾向于从哪里学习？
- 你对在这里工作最满意的地方是？
- 最不满意的呢？
- 如果可以的话，你想改变哪里？
- 团队最老的成员在这里多久了？
- 在小团队中，有没有出现成员性格互相冲突的情况？最后是如何解决的？

#### 公司

- 公司为什么在招人？(产品发展 / 新产品 / 波动...)
- 有没有会议 / 旅行预算？使用的规定是什么？
- 晋升流程是怎样的？要求 / 预期是怎样沟通的？
- 绩效评估流程是怎样的？
- 技术和管理两条职业路径是分开的吗？
- 对于多元化招聘的现状或者观点是什么？
- 有公司级别的学习资源吗？比如电子书订阅或者在线课程？
- 有获取证书的预算吗？
- 公司的成熟度如何？(早期寻找方向 / 有内容的工作 / 维护中 / ...)
- 我可以为开源项目做贡献吗？是否需要审批？
- 你认为公司未来五年或者十年会发展成什么样子？
- 公司的大多数员工是如何看待整洁代码的？
- 你上次注意到有人成长是什么时候？他们在哪方面成长了？
- 在这里成功的定义是什么？如何衡量成功？
- 有体育活动或者团建么？
- 有内部的黑客马拉松活动吗？
- 公司支持开源项目吗？
- 有竞业限制或者保密协议需要签吗？
- 你们认为公司文化中的空白是什么？
- 能够跟我说一公司处于不良情况，以及如何处理的故事吗？
- 您在这工作了多久了？您觉得体验如何？(zh)
- 大家为什么会喜欢这里？(zh)
- 公司的调薪制度是如何的？(zh)
- 公司有没有申请调岗的制度？
- 公司对于员工的心理健康和福祉有什么具体措施？
- 你对在这里工作最满意的地方是？你为什么留在这家公司？

#### 社会问题

- 你们关于多元化招聘什么看法？
- 你们的公司文化如何？你认为有什么空白么？
- 这里的工作生活平衡地怎么样？
- 公司对气候变化有什么态度吗？

#### 冲突

- 不同的意见如何处理？
- 如果被退回了会怎样？("这个在预计的时间内做不完")
- 当团队有压力并且在超负荷工作的时候怎么处理？
- 如果有人注意到了在流程或者技术等其他方面又改进的地方，怎么办？
- 当管理层的预期和工程师的绩效之间有差距的时候如何处理？
- 能给我讲一个公司深处有毒环境以及如何处理的故事吗？
- 如果在公司内你的同事因涉嫌性侵犯他人而被调查，请问你会如何处理？
- 假设我自己很不幸是在公司内被性侵的受害者，在公司内部有没有争取合法权益的渠道？

#### 商业

- 你们现在盈利吗？
- 如果没有的话，还需要多久？
- 如果有的话，年度营业额是大概有多少？(我现在的公司年度营业额是 5 亿)
- 公司的资金来源是什么？谁影响或者制定高层计划或方向？
- 你们如何挣钱？
- 什么阻止了你们挣更多的钱？
- 公司未来一年的增长计划怎样？五年呢？
- 你们认为什么是你们的竞争优势？
- 你们的竞争优势是什么？
- 公司未来的商业规划是怎样的？有上市的计划吗？(zh)
- 都在做副业吗？

#### 远程工作

- 远程工作和办公室工作的比例是多少？
- 公司提供硬件吗？更新计划如何？
- 使用自己的硬件办公可以吗？现在有政策吗？
- 额外的附件和家具可以通过公司购买吗？这方面是否有预算？
- 有共享办公或者上网的预算吗？
- 多久需要去一次办公室？
- 公司的会议室是否一直是视频会议就绪的？

#### 办公室布局

- 办公室的布局如何？(开放的 / 小隔间 / 独立办公室)
- 有没有支持 / 市场 / 或者其他需要大量打电话的团队在我的团队旁边办公？

#### 终极问题

- 该职位为何会空缺？
- 公司如何保证人才不流失？
- 这份工作 / 团队 / 公司最好和最坏的方面是？
- 你最开始为什么选择了这家公司？
- 你为什么留在这家公司？

#### 待遇

- 如果有奖金计划的话，奖金如何分配？
- 如果有奖金计划的话，过去的几年里通常会发百分之多少的奖金？
- 有五险一金(zh)/401k(us)或者其他退休养老金等福利吗？
- 五险一金中，补充公积金一般交多少比例？/401k 一般交多少比例？我可以自己选择这一比例吗？
- 有什么医疗保险吗？如果有的话何时开始？
- 有额外商业保险吗？例如人寿保险和额外的养老/医疗保险？
- 商业保险可以给家人办理吗？成年人/未成年人？
- 更换工作地点，公司付费吗？
- 是否可以申请更换工作地点？
- 是否愿意协助海外应聘者申请工作签证？

#### 休假

- 带薪休假时间有多久？
- 病假和事假是分开的还是一起算？
- 我可以提前使用假期时间吗？也就是说应休假期是负的？
- 假期的更新策略是什么样的？也就是说未休的假期能否滚入下一周期
- 照顾小孩的政策如何？
- 无薪休假政策是什么样的？
- 学术性休假政策是怎么样的？
- 孕产假政策具体是怎样的？

#### 福利

- 公司提供 mac 开发吗？
- 使用自带电脑有补贴吗？
- 公积金多少比例缴纳？
- 公司是否有食堂，是否有餐饮福利补贴？
- 是否提供租房补贴？
- 是否提供话费补贴？
- 是否有交通补贴？

#### 人才培养

- 升职加薪条件是否量化?
- 每年给团队安排多少费用用于学习培训?
- 每年组织多少次关于技术能力提升的讲座/论坛？

#### 其他资源

Find more inspiration for questions in:

- [The Joel Test: 12 Steps to Better Code](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) by Joel Spolsky
- [Questions I'm asking in interviews](https://jvns.ca/blog/2013/12/30/questions-im-asking-in-interviews/) by Julia Evans

## mobile apps always crash on error

`dev` `meme`

错误响应代码

https://twitter.com/webperftips/status/405760114499395584

```
window.onerror = window.close;
```

上面这行代码，可以让网页应用有手机 App 的体验。

## personal homepage showing code of itself

`app` `design`

Strml.net

https://www.strml.net/

一个很有意思的网站，会一行行显示自己的源码，页面跟着代码实时变化。实现方法可以参考这里。

https://codepen.io/jakealbaugh/pen/PwLXXP

## powerful image editor with webgl

`app` `image` `ref`

doka

https://pqina.nl/doka/image-editor/

一个使用 WebGL 技术搭建的在线图像编辑器，使用非常流畅。

---

https://pqina.nl/pintura/

https://edit.photo/

## quiting pku cs graphic because the industry is all done

`dev` `career`

我为什么北大计算机图形学直博第五年退学（中文）

https://www.zhihu.com/question/27479057/answer/834579040

作者刚刚博士肄业，计算机图形学直博第五年退学，没有硕士学位。读博读到怀疑人生，所以就退了。退学之前作者问了自己五个问题，在全部想清楚回答之后，就毅然选择退学。

---

![](https://picx.zhimg.com/v2-f48ecb281ab004d0a91777d641c27860.webp)

这个月刚刚肄业。计算机图形学直博第五年退学，没有硕士学位。

读博读到怀疑人生，所以就退了。

退学之前我问了自己下面五个问题，在全部想清楚回答之后，就毅然选择退学。

1. 当年为什么想要读计算机图形学的直博？

实际上我一直以来希望从事游戏开发方面的研究，翻出 13 年申请直博的个人陈述备份（https://rpg.blue/home.php?mod=space&uid=57889&do=blog&id=11951），我发现我的目标一直没有变。但是在中国目前没有好的游戏设计专业，所以当年推免保研的时候，我在计算机专业里选择了一个与游戏最接近的方向：计算机图形学。当时对硕士与博士的区别并没有什么概念，家人都觉得5年读个直博比3年读个硕士，看起来更有性价比；再加上自己本科连续四年都是中南大学的年级专业第一，自己也有些飘了。学长学姐们苦口婆心地劝我不要直博，我偏偏不信这个邪，觉得只要努力，一定能把博士学位拿下。所以在浙大硕士、清华硕士与北大博士三个offer中，选择了最难的那个。

2.  自己是靠什么被北大录取直博？

凭借体面的本科成绩单，以及不错的算法、编程能力，我顺利进入了北大计算机研究所。我是山东学生，最不怕的就是吃苦。从小就信奉天道酬勤，读书学习与应试是我的强项，所以在北大读研期间，我的成绩在所里依然首屈一指。还拿过学习优秀奖。

3.  这几年直博我都做了什么，为什么不顺利？

直博的前两年主要是上课与做横向项目，这两年非常顺利。我的成绩与编程能力都不错，所以很得心应手。但是从第二年下学期开始，我感觉越发不对劲起来。导师在学术方面并没有展现出作为一个北大教授应有的科研素质，有很多次与他讨论课题，都让我感觉他已经脱离学术圈很久，却日益骄固，对待学生专横暴躁。在北大这五年，身边的学姐学长学弟学妹全部都是不敢言而敢怒。另外，我的导师是收割型教育，在北大的这五年，导师只有在需要我做横向的时候才对我表现出一丝尊重。但是每当我遇到了问题，导师就只有一句：你自己看着办。除了催进度与非常大非常空的批评（比如他会批评我科研能力差，学术水平低。我心里会很委屈：如果我本科毕业就能达到很高的学术水平发出顶会论文，我直接去微软亚研院工作去了，干嘛来您这读博？），几乎给不出实质性能够落地帮到我的指导。之前论文投稿，导师压根没看就让我投出去，让我一度感觉连盲审的审稿老师对我的论文都比我的导师更上心更负责。修行在个人的前提是要先让师傅领进门。但是我直博了五年，在科研方面丝毫感觉不到自己有任何长进。我一直感觉自己是在搞民科。

4.  读博不顺，是个人原因导致，还是非个人的不可控原因导致？

导师把我们实验室不出成果全部归咎为招的学生不努力。但是我能够看到眼里：能考到或者保研到北大的学生，都是很有才华很努力的学生。

纵向比较实验室的其他人：我读博一时，一名延毕的学姐退学了；我读博二时，一位大我一级的学长因为开题时与导师的意见产生了分歧，所以换了导师。（当时我的导师说这个学长所做的课题是"粪坑"，结果学长在新实验室里频频发顶会，出国交换一年，今年顺利毕业了）。一名已经发够了论文、达到毕业要求的硕士学姐由于跟导师关系不好被导师穿了小鞋，导致这位学姐在条件够的情况下答辩没过，一年之后再次回学校答辩才拿到学位。在我读博期间，同门的博士里只有一位博七的博士毕业了，而这位博士在读博期间所承受的来自导师的污名化与延毕的压力我们也是有目共睹的。让我更加难过的是，这位博士师兄即使这么努力，他最后的毕业论文，在我看来也是不堪卒读的------他但凡接收过好一点的科研指导，也不至于写出这种水平的论文。

种种迹象让我相信，读博不顺并不是我出了问题。

5.  我未来的职业规划是什么，如果退学对我将来的规划是否有不利影响？

未来我还是希望能在游戏设计方面有所建树，但是自从我来到这个实验室后，导师给我安排的选题都是他感兴趣的方向。另一方面，就像王妙一在《为什么中国不会有 3A 游戏》（http://web.archive.org/web/20180419234123/https://www.vgtime.com/forum/946714.jhtml）里所说的，真实感渲染技术在游戏这个领域已经非常成熟了。每次看图形学顶会里的一些论文，感觉大家都是已经没有新鲜东西可发，在找一些边边角角的Show case 进行凑数。在这种情况下，我认为即使勉强读完博士学位，对我将来的人生规划也没有太大帮助，徒有博士头衔的虚名而已。

综上所述，我不是一个沽名钓誉的人。我的导师可以混日子，混时间，但是我不行。我还年轻，我还有很多重要的事情去做。所以，我选择了退学。

...

2019.09.27 修改二稿

第 3 问下的"在科研方面丝毫感觉不到自己没有任何长进"有语病，已改为"在科研方面丝毫感觉不到自己有任何长进"。

第 4 问下第二段中的"不忍卒读"意思为："不忍心读完，常用以形容内容悲惨动人"，用在这里不准确，已修改为"不堪卒读"。

第 5 问下第一段中的"我认为即时勉强读完博士学位......"中含有错别字，"即时"已改为"即使"。

感谢大家的校正！

## before the snake game was created

`story` `retro`

贪吃蛇游戏

https://melmagazine.com/en-us/story/snake-nokia-6110-oral-history-taneli-armanto

1995 年，芬兰诺基亚公司的软件工程师 Taneli Armanto 接到一个任务：为即将推出的诺基亚 6110 手机开发"一些很酷的小游戏" 。他以前有一点游戏背景，所以任务派到他头上。

当时，手机尚未在全球普及，业界刚刚开始推出更小、更便宜、更易于使用的手机。诺基亚在 1993 年发布 2110 后，开始研发 6110，希望这部新手机更小更快，具有更长的电池时间和通话时间。它将带有一个全新的用户界面，允许用户在各个功能之间轻松切换。

![](https://www.wangbase.com/blogimg/asset/201909/bg2019091308.jpg)

最初，Taneli Armanto 想移植俄罗斯方块。但是，俄罗斯方块公司希望从每部手机收取授权费，诺基亚不可能同意这个要求。于是，Taneli Armanto 不得不自己发明一个全新的游戏。

6110 的规格很不利于游戏：屏幕非常小，用于游戏操作的按键必须很少，编程存储空间也很小......到底什么游戏才能满足这些条件，人们还会爱玩？

Taneli Armanto 想到，自己在苹果的 Macintosh 电脑上玩过一个叫做"蛇"的游戏，用户使用键盘控制一条蛇。他觉得，这个游戏应该在手机上可行。

游戏中，用户可以控制蛇前进的方向，但是不能让蛇碰到自己的身体，随着蛇越变越长，这会变得越来越难。每次游戏，用户只有一次生命，必须全神贯注，否则很快就会死去。

![](https://www.wangbase.com/blogimg/asset/201909/bg2019091309.jpg)

6110 在 1997 年 12 月发布，这个游戏由于规则简洁，而大受欢迎。人们开始盯着他们的手机，长时间玩游戏。现在，"贪吃蛇"游戏（snake）公认是有史以来第一款重要的手机游戏。

## downloading all fruit identity cards

`py` `guide` `info`

Python 爬虫保存美国农业部网站的水果数据库

https://github.com/jwenjian/ghiblog/issues/114

![](https://www.wangbase.com/blogimg/asset/201910/bg2019101020.jpg)

美国农业部为全世界已知水果制作了 7500 幅水彩"证件照"，并提供高清下载。作者讲述自己如何编写 Python 爬虫，抓取这些图片。（@jwenjian 投稿）

## chinese indie blog catalog

`app` `info` `feed` `ref`

中文独立博客列表

https://github.com/timqian/chinese-independent-blogs

该仓库根据 feedly 的 RSS 订阅数，列出了主要的中文独立博客。（@timqian 投稿）

## we dont want to run this ad by basecamp

`story`

Basecamp 广告

https://www.seroundtable.com/basecamp-google-ad-28161.html

![](https://www.wangbase.com/blogimg/asset/201910/bg2019102104.jpg)

Basecamp 公司最近在谷歌的搜索页上，做了一个广告，题目叫做"我们不想投放此广告"。

我们是这个搜索词排名第一的公司，但谷歌允许其他公司在我们上面做广告。所以我们在这里页面，一家很小的独立公司向一家大型科技公司支付赎金。"

## leaving pointless arguements on the phone

`weather` `quote` `ref`

我口袋里有一个小设备，可以访问几乎全部的人类知识。我却用它与不认识的人进行毫无意义的争论，并看猫的照片。

-- HN 读者

https://news.ycombinator.com/item?id=21360284

---

I have a small device in my pocket that provides access to nearly the sum total of human knowledge. I use it to get into pointless arguments with people I don't know and look at pictures of cats. (I wish I could claim that as original but it is something I read on the Internet. Between cats. :-/ )

## road to reusable stylesheets of tailwind css

`css` `guide` `theory` `ref`

如何写出可复用的 CSS 样式表？（英文）

https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

Tailwind CSS 框架的作者谈自己如何一步步探索，写出与 HTML 代码彻底分离的、可以复用的 CSS 样式表。

---

### CSS Utility Classes and "Separation of Concerns"

Over the last several years, the way I write CSS has transitioned from a very "semantic" approach to something much more like what is often called "functional CSS."

Writing CSS this way can evoke [a pretty visceral reaction](https://twitter.com/mezzoblue/status/794419442272714752) from a lot of developers, so I'd like to explain how I got to this point and share some of the lessons and insights I've picked up along the way.

#### Phase 1: "Semantic" CSS

One of the best practices you'll hear about when you're trying to learn how to CSS good is "separation of concerns."

The idea is that your HTML should only contain information about your *content*, and all of your styling decisions should be made in your CSS.

Take a look at this HTML:

```html
<p class="text-center">Hello there!</p>
```

See that `.text-center` class? Centering text is a design decision, so this code violates "separation of concerns" because we've let styling information bleed into our HTML.

Instead, the recommended approach is to give your elements class names based on their content, and use those classes as *hooks* in your CSS to style your markup:

```html
<style>
  .greeting {
    text-align: center;
  }
</style>

<p class="greeting">Hello there!</p>
```

The quintessential example of this approach has always been [CSS Zen Garden](http://www.csszengarden.com/); a site designed to show that if you "separate your concerns", you can completely redesign a site just by swapping out the stylesheet.

My workflow looked something like this:

1. Write the markup I needed for some new UI *(an author bio card in this case)*:

```html
<div>
  <img
    src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k."
    alt=""
  />
  <div>
    <h2>Adam Wathan</h2>
    <p>
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with
      cheese. He also hosts a decent podcast and has never had a really great
      haircut.
    </p>
  </div>
</div>
```

2. Add a descriptive class or two based on the content:

```diff
- <div>
+ <div class="author-bio">
    <img src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k." alt="">
    <div>
      <h2>Adam Wathan</h2>
      <p>
        Adam is a rad dude who likes TDD, Active Record, and garlic bread with cheese. He also hosts a decent podcast and has never had a really great haircut.
      </p>
    </div>
  </div>
```

3. Use those classes as "hooks" in my CSS/Less/Sass to style my new markup:

```css
.author-bio {
  background-color: white;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  > img {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    padding: 1rem;
    > h2 {
      font-size: 1.25rem;
      color: rgba(0, 0, 0, 0.8);
    }
    > p {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.75);
      line-height: 1.5;
    }
  }
}
```

Here's a demo of the final result:

See the Pen ["Semantic" mapping layer (terrible idea!)](https://codepen.io/adamwathan/pen/ZJeWBY/) by Adam Wathan ([@adamwathan](https://codepen.io/adamwathan)) on [CodePen](https://codepen.io/).

This approach intuitively made sense to me, and for a while this is how I wrote HTML and CSS.

Eventually though, something started to feel a bit off.

I had "separated my concerns", but there was still a very obvious coupling between my CSS and my HTML. Most of the time my CSS was like a mirror for my markup; perfectly reflecting my HTML structure with nested CSS selectors.

My markup wasn't concerned with styling decisions, but my CSS was very concerned with my markup structure.

Maybe my concerns weren't so separated after all.

#### Phase 2: Decoupling styles from structure

After looking around for a solution to this coupling, I started finding more and more recommendations towards adding more classes to your markup so you could target them directly; keeping selector specificity low and making your CSS less dependent on your particular DOM structure.

The most well-known methodology that advocates this idea is [Block Element Modifer](http://getbem.com/introduction/), or *BEM* for short.

Taking a BEM-like approach, the markup for our author bio might look more like this:

```html
<div class="author-bio">
  <img
    class="author-bio__image"
    src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k."
    alt=""
  />
  <div class="author-bio__content">
    <h2 class="author-bio__name">Adam Wathan</h2>
    <p class="author-bio__body">
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with
      cheese. He also hosts a decent podcast and has never had a really great
      haircut.
    </p>
  </div>
</div>
```

...and our CSS would look like this:

```css
.author-bio {
  background-color: white;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.author-bio__image {
  display: block;
  width: 100%;
  height: auto;
}
.author-bio__content {
  padding: 1rem;
}
.author-bio__name {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.8);
}
.author-bio__body {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.5;
}
```

_[View on CodePen](https://codepen.io/adamwathan/pen/ZJepYj)_

This felt like a huge improvement to me. My markup was still "semantic" and didn't contain any styling decisions, and now my CSS felt decoupled from my markup structure, with the added bonus of avoiding unnecessary selector specificity.

But then I ran into a dilemma.

#### Dealing with similar components

Say I needed to add a new feature to the site: displaying a preview of an article in a card layout.

Say this article preview card had a full bleed image on the top, a padded content section below, a bold title, and some smaller body text.

Say it looked exactly like an author bio.

![](https://user-images.githubusercontent.com/4323180/29088772-342696c0-7c48-11e7-877d-9f28b52a7a51.png)

What's the best way to handle this while still separating our concerns?

We can't apply our `.author-bio` classes to our article preview; that wouldn't be semantic. So we definitely need to make `.article-preview` its own component.

Here's what our markup could look like:

```html
<div class="article-preview">
  <img
    class="article-preview__image"
    src="https://i.vimeocdn.com/video/585037904_1280x720.webp"
    alt=""
  />
  <div class="article-preview__content">
    <h2 class="article-preview__title">
      Stubbing Eloquent Relations for Faster Tests
    </h2>
    <p class="article-preview__body">
      In this quick blog post and screencast, I share a trick I use to speed up
      tests that use Eloquent relationships but don't really depend on database
      functionality.
    </p>
  </div>
</div>
```

But how should we handle the CSS?

#### Option 1: Duplicate the styles

One approach would be to straight up duplicate our `.author-bio` styles and rename the classes:

```css
.article-preview {
  background-color: white;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.article-preview__image {
  display: block;
  width: 100%;
  height: auto;
}
.article-preview__content {
  padding: 1rem;
}
.article-preview__title {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.8);
}
.article-preview__body {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.5;
}
```

This works but of course it's not very *DRY*. It also makes it a bit too easy for these components to differ in slightly different ways (maybe a different padding, or font color) which can lead to an inconsistent looking design.

#### Option 2: `@extend` the author bio component

Another approach is to use the `@extend` feature of your preprocessor of choice; letting you piggy-back off of the styles already defined in our `.author-bio` component:

```css
.article-preview {
  @extend .author-bio;
}
.article-preview__image {
  @extend .author-bio__image;
}
.article-preview__content {
  @extend .author-bio__content;
}
.article-preview__title {
  @extend .author-bio__name;
}
.article-preview__body {
  @extend .author-bio__body;
}
```

_[View on CodePen](https://codepen.io/adamwathan/pen/ZJepLq)_

Using `@extend` at all is [generally not recommended](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/), but that aside, this feels like it solves our problem right?

We've removed the duplication in our CSS, and our markup is still free of styling decisions.

But let's examine one more option...

#### Option 3: Create a content-agnostic component

Our `.author-bio` and `.article-preview` components have nothing in common from a "semantic" perspective. One is the bio of an author, the other is a preview of an article.

But as we've already seen, they have a *lot* in common from a design perspective.

So if we wanted to, we could create a new component named after what they *do* have in common, and reuse that component for both types of content.

Let's call it a `.media-card`.

Here's the CSS:

```css
.media-card {
  background-color: white;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.media-card__image {
  display: block;
  width: 100%;
  height: auto;
}
.media-card__content {
  padding: 1rem;
}
.media-card__title {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.8);
}
.media-card__body {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.5;
}
```

...here's what the markup for our author bio would look like:

```html
<div class="media-card">
  <img
    class="media-card__image"
    src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k."
    alt=""
  />
  <div class="media-card__content">
    <h2 class="media-card__title">Adam Wathan</h2>
    <p class="media-card__body">
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with
      cheese. He also hosts a decent podcast and has never had a really great
      haircut.
    </p>
  </div>
</div>
```

...and here's the markup for our article preview:

```html
<div class="media-card">
  <img
    class="media-card__image"
    src="https://i.vimeocdn.com/video/585037904_1280x720.webp"
    alt=""
  />
  <div class="media-card__content">
    <h2 class="media-card__title">
      Stubbing Eloquent Relations for Faster Tests
    </h2>
    <p class="media-card__body">
      In this quick blog post and screencast, I share a trick I use to speed up
      tests that use Eloquent relationships but don't really depend on database
      functionality.
    </p>
  </div>
</div>
```

This approach also removes the duplication from our CSS, but aren't we "mixing concerns" now?

Our markup all of a sudden knows that we want both of these pieces of content to be styled as media cards. What if we wanted to change how the author bio looked without changing how the article preview looks?

Before, we could just open up our stylesheet and choose new styles for either of the two components. Now we'd need to edit the HTML! *Blasphemy!*

But let's think about the flip side for a minute.

What if we needed to add *a new type of content* that also needed the same styling?

Using a "semantic" approach, we'd need to write the new HTML, add some content-specific classes as styling "hooks", open up our stylesheet, create a new CSS component for the new content type, and apply the shared styles, either through duplication or using `@extend` or a mixin.

Using our content-agnostic `.media-card` class, all we'd need to write is the new HTML; we wouldn't have to open the stylesheet at all.

If we're really "mixing concerns", shouldn't we need to make changes in multiple places?

#### "Separation of concerns" is a straw man

When you think about the relationship between HTML and CSS in terms of "separation of concerns", it's very black and white.

You either have separation of concerns *(good!)*, or you don't *(bad!)*.

This is not the right way to think about HTML and CSS.

Instead, think about *dependency direction.*

There are two ways you can write HTML and CSS:

1. ~~_"Separation of Concerns"_~~CSS that depends on HTML.

Naming your classes based on your content (like `.author-bio`) treats your HTML as a dependency of your CSS.

The HTML is independent; it doesn't care how you make it look, it just exposes *hooks* like `.author-bio` that *the HTML controls.*

Your CSS on the other hand is not independent; it needs to know what classes your HTML has decided to expose, and it needs to target those classes to style the HTML.

In this model, your HTML is restyleable, but your CSS is not reusable.

2. ~~_"Mixing Concerns"_~~HTML that depends on CSS.

Naming your classes in a content-agnostic way after the repeating patterns in your UI (like `.media-card`) treats your CSS as a dependency of your HTML.

The CSS is independent; it doesn't care what content it's being applied to, it just exposes a set of building blocks that you can apply to your markup.

Your HTML is not independent; it's making use of classes that have been provided by the CSS, and it needs to know what classes exist so that it combine them however it needs to to achieve the desired design.

In this model, your CSS is reusable, but your HTML is not restyleable.

CSS Zen Garden takes the first approach, while UI frameworks like [Bootstrap](http://v4-alpha.getbootstrap.com/) or [Bulma](http://bulma.io/) take the second approach.

Neither is inherently "wrong"; it's just a decision made based on what's more important to you in a specific context.

For the project you're working on, what would be more valuable: restyleable HTML, or reusable CSS?

#### Choosing reusability

The turning point for me came when I read Nicolas Gallagher's [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).

I won't reiterate all of his points here, but needless to say I came away from that blog post fully convinced that optimizing for reusable CSS was going to be the right choice for the sorts of projects I work on.

#### Phase 3: Content-agnostic CSS components

My goal at this point was to *explicitly avoid* creating classes that were based on my content, instead trying to name everything in a way that was as reusable as possible.

That resulted in class names like:

- `.card`
- `.btn`, `.btn--primary`, `.btn--secondary`
- `.badge`
- `.card-list`, `.card-list-item`
- `.img--round`
- `.modal-form`, `.modal-form-section`

...and so on and so forth.

I noticed something else when I started focusing on creating reusable classes:

The more a component does, or the more specific a component is, the harder it is to reuse.

Here's an intuitive example.

Say we were building a form, with a few form sections, and a submit button at the bottom.

If we thought of all of the form contents as part of a `.stacked-form` component, we might give the submit button a class like `.stacked-form__button`:

```html
<form class="stacked-form" action="#">
  <div class="stacked-form__section">
    <!-- ... -->
  </div>
  <div class="stacked-form__section">
    <!-- ... -->
  </div>
  <div class="stacked-form__section">
    <button class="stacked-form__button">Submit</button>
  </div>
</form>
```

But maybe there's another button on our site that's *not* part of a form that we need to style the same way.

Using the `.stacked-form__button` class on that button wouldn't make a lot of sense; it's not part of a stacked form.

Both of these buttons are primary actions on their respective pages though, so what if we named the button based on what the components have in common and called it `.btn--primary`, removing the `.stacked-form__` prefix completely?

```diff
  <form class="stacked-form" action="#">
    <!-- ... -->
    <div class="stacked-form__section">
- <button class="stacked-form__button">Submit</button>
+     <button class="btn btn--primary">Submit</button>
    </div>
  </form>
```

Now say we wanted this stacked form to look like it was in a floated card.

One approach would be to create a modifier and apply it to this form:

```diff
- <form class="stacked-form" action="#">
+ <form class="stacked-form stacked-form--card" action="#">
    <!-- ... -->
  </form>
```

But if we already have a `.card` class, why don't we *compose* this new UI using our existing card and stacked form?

```diff
+ <div class="card">
    <form class="stacked-form" action="#">
      <!-- ... -->
    </form>
+ </div>
```

By taking this approach, we have a `.card` that can be a home for any content, and an unopinionated `.stacked-form` that can be used inside of any container.

We're getting more reuse out of our components, and we didn't have to write any new CSS.

#### Composition over subcomponents

Say we needed to add another button to the bottom of our stacked form, and we wanted it to be spaced out a little from the existing button:

```html
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <button class="btn btn--secondary">Cancel</button>
    <!-- Need some space in here -->
    <button class="btn btn--primary">Submit</button>
  </div>
</form>
```

One approach would be to create a new subcomponent, like `.stacked-form__footer`, add an additional class to each button like `.stacked-form__footer-item`, and use descendant selectors to add some margin:

```diff
  <form class="stacked-form" action="#">
    <!-- ... -->
- <div class="stacked-form__section">
+   <div class="stacked-form__section stacked-form__footer">
- <button class="btn btn--secondary">Cancel</button>
- <button class="btn btn--primary">Submit</button>
+     <button class="stacked-form__footer-item btn btn--secondary">Cancel</button>
+     <button class="stacked-form__footer-item btn btn--primary">Submit</button>
    </div>
  </form>
```

Here's what the CSS might look like:

```css
.stacked-form__footer {
  text-align: right;
}
.stacked-form__footer-item {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
}
```

But what if we had this same problem in a subnav somewhere, or a header?

We can't reuse the `.stacked-form__footer` outside of a `.stacked-form`, so maybe we make a new subcomponent inside of our header:

```diff
  <header class="header-bar">
    <h2 class="header-bar__title">New Product</h2>
+   <div class="header-bar__actions">
+     <button class="header-bar__action btn btn--secondary">Cancel</button>
+     <button class="header-bar__action btn btn--primary">Save</button>
+   </div>
  </header>
```

...but now we have to duplicate the effort we put into building our `.stacked-form__footer` in our new `.header-bar__actions` components.

This feels a lot like the problem we ran into way back at the beginning with content-driven class names doesn't it?

One way to solve this problem is to come up with an entirely *new* component that's easier to reuse, and use composition.

Maybe we make something like an `.actions-list`:

```css
.actions-list {
  text-align: right;
}
.actions-list__item {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
}
```

Now we can get rid of the `.stacked-form__footer` and `.header-bar__actions` components completely, and instead use an `.actions-list` in both situations:

```html
<!-- Stacked form -->
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <div class="actions-list">
      <button class="actions-list__item btn btn--secondary">Cancel</button>
      <button class="actions-list__item btn btn--primary">Submit</button>
    </div>
  </div>
</form>

<!-- Header bar -->
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="actions-list">
    <button class="actions-list__item btn btn--secondary">Cancel</button>
    <button class="actions-list__item btn btn--primary">Save</button>
  </div>
</header>
```

But what if one of these actions lists was supposed to be left justified, and the other was supposed to be right justified? Do we make `.actions-list--left` and `.actions-list--right` modifiers?

#### Phase 4: Content-agnostic components + utility classes

Trying to come up with these component names all of the time is exhausting.

When you make modifiers like `.actions-list--left`, you're creating a whole new component modifier just to assign a single CSS property. It's already got `left` in the name, so you're not going to fool anyone that it's "semantic" in any way either.

What if we had another component that needed left-align and right-align modifiers, would we create new component modifiers for that as well?

This gets back to same problem we were facing when we decided to kill `.stacked-form__footer` and `.header-bar__actions` and replace them with a single `.actions-list`:

We prefer composition to duplication.

So if we had two actions lists, one that needed to be left aligned and another that needed to be right aligned, how could we solve that problem with composition?

#### Alignment utilities

To solve this problem with composition, we need to be able to add a new reusable class to our component that gives us the desired effect.

We were already going to call our modifers `.actions-list--left` and `.actions-list--right`, so there's no reason not to call these new classes something like `.align-left` and `.align-right`:

```css
.align-left {
  text-align: left;
}
.align-right {
  text-align: right;
}
```

Now we can use composition to make our stacked form buttons left-aligned:

```html
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <div class="actions-list align-left">
      <button class="actions-list__item btn btn--secondary">Cancel</button>
      <button class="actions-list__item btn btn--primary">Submit</button>
    </div>
  </div>
</form>
```

...and our header buttons right-aligned:

```html
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="actions-list align-right">
    <button class="actions-list__item btn btn--secondary">Cancel</button>
    <button class="actions-list__item btn btn--primary">Save</button>
  </div>
</header>
```

#### Don't be afraid

If seeing the words "left" and "right" in your HTML makes you feel uncomfortable, remember we have been using components named after visual patterns in our UI for ages at this point.

There's no pretending that `.stacked-form` is any more "semantic" than `.align-right`; they're both named after how they affect the presentation of the markup, and we are using those classes in our markup to achieve a specific presentational result.

We're writing CSS-dependent HTML. If we want to change our form from a `.stacked-form` to a `.horizontal-form`, we do it in the markup, not the CSS.

#### Deleting useless abstractions

The interesting thing about this solution is that our `.actions-list` component is now basically useless; all it did before was align the contents to the right.

Let's delete it:

```diff
- .actions-list {
- text-align: right;
- }
  .actions-list__item {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
```

But now it's a little weird to have an `.actions-list__item` without an `.actions-list`. Is there another way we can solve our original problem without creating an `.actions-list__item` component?

If you think back, the whole reason we created this component was to add a little bit of margin between two buttons. `.actions-list` was a pretty decent metaphor for a list of buttons because it was generic and fairly reusable, but certainly there could be situations where we need the same amount of spacing between items that aren't "actions" right?

Maybe a more reusable name would be something like `.spaced-horizontal-list`? We already deleted the actual `.actions-list` component though, because it's only the children that really need any styling.

#### Spacer utilities

If only the children need styling, maybe it would be simpler to style the children independently instead of using fancy pseudo-selectors to style them as group?

The most reusable way to add some spacing next to an element would be a class that let's us say "this element should have some space next to it".

We already added utilities like `.align-left` and `.align-right`, what if we made a new utility just for adding some right margin?

Let's create a new utility class, something like `.mar-r-sm`, for adding a small amount of margin to the right of an element:

```diff
- .actions-list__item {
- margin-right: 1rem;
- &:last-child {
- margin-right: 0;
- }
- }
+ .mar-r-sm {
+   margin-right: 1rem;
+ }
```

Here's what our form and header would look like now:

```html
<!-- Stacked form -->
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section align-left">
    <button class="btn btn--secondary mar-r-sm">Cancel</button>
    <button class="btn btn--primary">Submit</button>
  </div>
</form>

<!-- Header bar -->
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="align-right">
    <button class="btn btn--secondary mar-r-sm">Cancel</button>
    <button class="btn btn--primary">Save</button>
  </div>
</header>
```

The entire concept of an `.actions-list` is nowhere to be seen, our CSS is smaller, and our classes are more reusable.

#### Phase 5: Utility-first CSS

Once this clicked for me, it wasn't long before I had built out a whole suite of utility classes for common visual tweaks I needed, things like:

- Text sizes, colors, and weights
- Border colors, widths, and positions
- Background colors
- Flexbox utilities
- Padding and margin helpers

The amazing thing about this is that before you know it, you can build entirely new UI components without writing any new CSS.

Take a look at this sort of "product card" component from a project of mine:

![](https://user-images.githubusercontent.com/4323180/29088813-62ff9b86-7c48-11e7-9854-9c966ffbf9c4.png)

Here's what my markup looks like:

```html
<div class="card rounded shadow">
  <a href="..." class="block">
    <img class="block fit" src="..." />
  </a>
  <div class="py-3 px-4 border-b border-dark-soft flex-spaced flex-y-center">
    <div class="text-ellipsis mr-4">
      <a href="..." class="text-lg text-medium"> Test-Driven Laravel </a>
    </div>
    <a href="..." class="link-softer"> @icon('link') </a>
  </div>
  <div class="flex text-lg text-dark">
    <div class="py-2 px-4 border-r border-dark-soft">
      @icon('currency-dollar', 'icon-sm text-dark-softest mr-4')
      <span>$3,475</span>
    </div>
    <div class="py-2 px-4">
      @icon('user', 'icon-sm text-dark-softest mr-4')
      <span>25</span>
    </div>
  </div>
</div>
```

The number of classes used here might make you balk at first, but say we did want to make this a real CSS component instead of composing it out of utilities. What would we call it?

We don't want to use content-specific names because then our component could only be used in one context.

Maybe something like this?

```css
.image-card-with-a-full-width-section-and-a-split-section {
  ...;
}
```

Of course not, that's ridiculous. Instead we'd probably want to compose it out of smaller components, like we've talked about before.

What might those components be?

Well maybe it's housed in a card. Not all cards have a shadow though so we could have a `.card--shadowed` modifier, or we could create a `.shadow` utility that could be applied to any element. That sounds more reusable, so let's do that.

It turns out some of the cards on our site don't have rounded corners, but this one does. We could make it `.card--rounded`, but we have other elements on the site that are sometimes rounded the same amount too, and those aren't cards. A `rounded` utility would be more reusable.

What about the image at the top? Maybe that's something like a `.img--fitted`, so it fills the card? Well there's a few other spots on the site where we need to fit something to it's parent width, and it's not always an image. Maybe just a `.fit` helper would be better.

...you can see where I'm going with this.

If you follow that trail far enough with a focus on reusability, building this component out of reusable utilities is the natural destination.

#### Enforced consistency

One of the biggest benefits of using small, composable utilities is that every developer on your team is always choosing values from a fixed set of options.

How many times have you needed to style some HTML and thought, *"this text needs to be a little darker,"* then reached for the `darken()` function to tweak some base `$text-color`?

Or maybe, *"this font should be a little smaller,"* and added `font-size: .85em` to the component you're working on?

It feels like you're doing things "right", because you're using a relative color or a relative font size, not just arbitrary values.

But what if you decide to darken the text by 10% for your component, and someone else darkens it by 12% for their component? Before you know it you end up with [402 unique text colors in your stylesheet](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fe5349db6f1ccbd175f7dd7c581e061b4d49c1ff4%2Fgitlab.css).

This happens in every codebase where the way you style something is to write new CSS:

- [GitLab](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fe5349db6f1ccbd175f7dd7c581e061b4d49c1ff4%2Fgitlab.css): 402 text colors, 239 background colors, 59 font sizes
- [Buffer](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fd560c4dadb9e85197d6e33ac0cb55c2435c45c65%2Fbuffer.css): 124 text colors, 86 background colors, 54 font sizes
- [HelpScout](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2F1a12773f211891f4199d03c59bde97e814e044f0%2Fhelpscout.css): 198 text colors, 133 background colors, 67 font sizes
- [Gumroad](http://cssstats.com/stats?link=https%3A%2F%2Fstatic-1.gumroad.com%2Fres%2Fgumroad%2Fassets%2Fapplication-f7ade6b83ca73dcd02cc9762068df43c4ea824e0c94babde8e4c9ecfc2653acb.css): 91 text colors, 28 background colors, 48 font sizes
- [Stripe](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2Fca146a9dbe99754159c07c6599ea45d2%2Fraw%2F90d64ed31422e9c4fc8b08b035b47ea048275ad1%2Fstripe.css): 189 text colors, 90 background colors, 35 font sizes
- [GitHub](http://cssstats.com/stats?url=http%3A%2F%2Fgithub.com&name=GitHub): 163 text colors, 147 background colors, 56 font sizes
- [ConvertKit](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F4ca6aafc50342ad87a98970204053b71%2Fraw%2Fbb42e4fda01d9933afff7225b33e77dbfbd559ff%2Fconvertkit.css): 128 text colors, 124 background colors, 70 font sizes

This is because every new chunk of CSS you write is a blank canvas; there's nothing stopping you from using whatever values you want.

You could try and enforce consistency through variables or mixins, but every line of new CSS is still an opportunity for new complexity; adding more CSS will never make your CSS simpler.

If instead, the solution to styling something is to *apply existing classes,* all of a sudden that blank canvas problem goes away.

Want to mute some dark text a little? Add the `.text-dark-soft` class.

Need to make the font size a little smaller? Use the `.text-sm` class.

When everyone on a project is choosing their styles from a curated set of limited options, your CSS stops growing linearly with your project size, and you get consistency for free.

#### You should still create components

One of the areas where my opinion differs a bit from some of the really die-hard functional CSS advocates is that I don't think you should build things out of utilities *only.*

If you look at some of the popular utility-based frameworks like [Tachyons](http://tachyons.io/) (which is a fantastic project), you'll see they create even button styles out of pure utilities:

```html
<button class="f6 br3 ph3 pv2 white bg-purple hover-bg-light-purple">
  Button Text
</button>
```

*Whoa.* Let me break this one down:

- `f6`: Use the sixth font size in the font size scale (.875rem in Tachyons)
- `br3`: Use the third border radius in the radius scale (.5rem)
- `ph3`: Use the third size in the padding scale for horizontal padding (1rem)
- `pv2`: Use the second size in the padding scale for vertical padding (.5rem)
- `white`: Use white text
- `bg-purple`: Use a purple background
- `hover-bg-light-purple`: Use a light purple background on hover

If you need multiple buttons that have this same combination of classes, the recommended approach with Tachyons is to create an abstraction through templating rather than through CSS.

If you were using [Vue.js](https://vuejs.org/) for example, you might create a component that you would use like this:

```html
<ui-button color="purple">Save</ui-button>
```

...and be defined something like this:

```html
<template>
  <button class="f6 br3 ph3 pv2" :class="colorClasses">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ["color"],
    computed: {
      colorClasses() {
        return {
          purple: "white bg-purple hover-bg-light-purple",
          lightGray: "mid-gray bg-light-gray hover-bg-light-silver",
          // ...
        }[this.color];
      },
    },
  };
</script>
```

This is a great approach for a lot of projects, but I still think there are a lot of use cases where it's more practical to create a CSS component than it is to create a template-based component.

For the sort of projects I work on, it's usually simpler to create a new `.btn-purple` class that bundles up those 7 utilities than it is to commit to templatizing every tiny widget on the site.

#### ...but build them using utilities first

The reason I call the approach I take to CSS utility-*first* is because I try to build everything I can out of utilities, and only extract repeating patterns as they emerge.

If you're using [Less](http://lesscss.org/) as your preprocessor, you can use existing classes as mixins. That means that creating this `.btn-purple` component takes only a bit of multi-cursor wizardry in your editor:

![](https://user-images.githubusercontent.com/4323180/29084097-f16c97c6-7c38-11e7-92dd-d20c1364d869.gif)

Unfortunately you can't do this in Sass or Stylus without creating a separate mixin for every utility class, so it's a bit more work there.

It's not always possible for every single declaration in a component to come from a utility of course. Complex interactions between elements like changing a child's property when hovering over a parent are hard to do with utilities-only, so use your best judgment and do whatever feels simpler.

#### No more premature abstraction

Taking a component-first approach to CSS means you create components for things even if they will never get reused. This premature abstraction is the source of a lot of bloat and complexity in stylesheets.

Take a navbar for example. How many times in your app do you rewrite the markup for your main nav?

In my projects I typically only do that once; in my main layout file.

If you build things with utilities first and only extract components when you see worrisome duplication, you probably never need to extract a navbar component.

Instead, your navbar might look something like this:

```html
<nav class="bg-brand py-4 flex-spaced">
  <div><!-- Logo goes here --></div>
  <div>
    <!-- Menu items go here -->
  </div>
</nav>
```

There's just nothing there worth extracting.

#### Isn't this just inline styles?

It's easy to look at this approach and think it's just like throwing style tags on your HTML elements and adding whatever properties you need, but in my experience it's very different.

With inline styles, there are no constraints on what values you choose.

One tag could be `font-size: 14px`, another could be `font-size: 13px`, another could be `font-size: .9em`, and another could be `font-size: .85rem`.

It's the same blank canvas problem you face when writing new CSS for every new component.

Utilities force you to choose:

Is this `text-sm` or `text-xs`?

Should I use `py-3` or `py-4`?

Do I want `text-dark-soft` or `text-dark-faint`?

You can't just pick any value want; you have to choose from a curated list.

Instead of 380 text colors, you end up with 10 or 12.

My experience is that building things utility-first leads to *more* consistent looking designs than working component-first, as unintuitive as it might sound at first.

#### Where to start

If this approach sounds interesting to you, here's a few frameworks worth checking out:

- [Tachyons](http://tachyons.io/)
- [Basscss](http://basscss.com/)
- [Beard](http://buildwithbeard.com/)
- [turretcss](http://turretcss.com/)

Recently, I also released my own free open-source PostCSS framework called [Tailwind CSS](https://tailwindcss.com/) that's designed around this idea of working utility-first and extracting components from repeated patterns:

![](https://tailwindcss.com/img/twitter-large-card.png)

If you're interested in checking it out, [head over to the Tailwind CSS website](https://tailwindcss.com/) and give it a try.

## diy a react like web framework

`js` `guide` `ref`

如何自己实现一个 React 框架（英文）

https://pomb.us/build-your-own-react/

本文一步步用简单的代码讲解，如何自己从头实现 React 框架。

---

### Build your own React

November 13, 2019

We are going to rewrite React from scratch. Step by step. Following the architecture from the real React code but without all the optimizations and non-essential features.

If you've read any of [my previous "build your own React" posts](https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5), the difference is that this post is based on React 16.8, so we can now use hooks and drop all the code related to classes.

You can find the history with the old blog posts and the code on the [Didact repo](https://github.com/pomber/didact). There's also a [talk covering the same content](https://youtu.be/8Kc2REHdwnQ). But this is a self-contained post.

Starting from scratch, these are all the things we'll add to our version of React one by one:

- Step I: The `createElement` Function
- Step II: The `render` Function
- Step III: Concurrent Mode
- Step IV: Fibers
- Step V: Render and Commit Phases
- Step VI: Reconciliation
- Step VII: Function Components
- Step VIII: Hooks

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}​
const container = document.getElementById("root")​
const node = document.createElement(element.type)
node["title"] = element.props.title​
const text = document.createTextNode("")
text["nodeValue"] = element.props.children​
node.appendChild(text)
container.appendChild(node)
```

#### Step Zero: Review

But first let's review some basic concepts. You can skip this step if you already have a good idea of how React, JSX and DOM elements work.

We'll use this React app, just three lines of code. The first one defines a React element. The next one gets a node from the DOM. The last one renders the React element into the container.

Let's remove all the React specific code and replace it with vanilla JavaScript.

On the first line we have the element, defined with JSX. It isn't even valid JavaScript, so in order to replace it with vanilla JS, first we need to replace it with valid JS.

JSX is transformed to JS by build tools like Babel. The transformation is usually simple: replace the code inside the tags with a call to `createElement`, passing the tag name, the props and the children as parameters.

`React.createElement` creates an object from its arguments. Besides some validations, that's all it does. So we can safely replace the function call with its output.

And this is what an element is, an object with two properties: `type` and `props` (well, [it has more](https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111), but we only care about these two).

The `type` is a string that specifies the type of the DOM node we want to create, it's the `tagName` you pass to `document.createElement` when you want to create an HTML element. It can also be a function, but we'll leave that for Step VII.

`props` is another object, it has all the keys and values from the JSX attributes. It also has a special property: `children`.

`children` in this case is a string, but it's usually an array with more elements. That's why elements are also trees.

The other piece of React code we need to replace is the call to `ReactDOM.render`.

`render` is where React changes the DOM, so let's do the updates ourselves.

First we create a node\* using the element `type`, in this case `h1`.

Then we assign all the element `props` to that node. Here it's just the title.

\*_ To avoid confusion, I'll use "element" to refer to React elements and "node" for DOM elements._

Then we create the nodes for the children. We only have a string as a child so we create a text node.

Using `textNode` instead of setting `innerText` will allow us to treat all elements in the same way later. Note also how we set the `nodeValue` like we did it with the `h1` title, it's almost as if the string had `props: {nodeValue: "hello"}`.

Finally, we append the `textNode` to the `h1` and the `h1` to the `container`.

And now we have the same app as before, but without using React.

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object" ? child : createTextElement(child)),
    },
  }
}​
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}​
function render(element, container) {
  const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)​ const isProperty = key => key !== "children"
  Object.keys(element.props).filter(isProperty).forEach(name => {
    dom[name] = element.props[name]
  })​ element.props.children.forEach(child => render(child, dom))​ container.appendChild(dom)
}​
const Didact = {
  createElement,
  render,
}​ /** @jsx Didact.createElement */
const element = ( < div id = "foo" > < a > bar < /a>    <b / > < /div>)const container = document.getElementById("root")Didact.render(element, container)
```

#### Step I: The `createElement` Function

Let's start again with another app. This time we'll replace React code with our own version of React.

We'll start by writing our own `createElement`.

Let's transform the JSX to JS so we can see the `createElement` calls.

As we saw in the previous step, an element is an object with `type` and `props`. The only thing that our function needs to do is create that object.

We use the *spread operator* for the `props` and the *rest parameter syntax* for the `children`, this way the `children` prop will always be an array.

For example, `createElement("div")` returns:

```js
{
  "type": "div",
  "props": {
    "children": []
  }
}
```

`createElement("div", null, a)` returns:

```js
{
  "type": "div",
  "props": {
    "children": [a]
  }
}
```

and `createElement("div", null, a, b)` returns:

```js
{
  "type": "div",
  "props": {
    "children": [a, b]
  }
}
```

The `children` array could also contain primitive values like strings or numbers. So we'll wrap everything that isn't an object inside its own element and create a special type for them: `TEXT_ELEMENT`.

_React doesn't wrap primitive values or create empty arrays when there aren't `children`, but we do it because it will simplify our code, and for our library we prefer simple code than performant code._

We are still using React's `createElement`.

In order to replace it, let's give a name to our library. We need a name that sounds like React but also hints its *didactic* purpose.

We'll call it Didact.

But we still want to use JSX here. How do we tell babel to use Didact's `createElement` instead of React's?

If we have a comment like this one, when babel transpiles the JSX it will use the function we define.

#### Step II: The `render` Function

Next, we need to write our version of the `ReactDOM.render` function.

For now, we only care about adding stuff to the DOM. We'll handle updating and deleting later.

We start by creating the DOM node using the element type, and then append the new node to the container.

We recursively do the same for each child.

We also need to handle text elements, if the element type is `TEXT_ELEMENT` we create a text node instead of a regular node.

The last thing we need to do here is assign the element props to the node.

And that's it. We now have a library that can render JSX to the DOM.

Give it a try on [codesandbox](https://codesandbox.io/s/didact-2-k6rbj).

#### Step III: Concurrent Mode

But... before we start adding more code we need a refactor.

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object" ? child : createTextElement(child)),
    },
  }
}​
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}​
function render(element, container) {
  const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)​
  const isProperty = key => key !== "children"
  Object.keys(element.props).filter(isProperty).forEach(name => {
    dom[name] = element.props[name]
  })​
  element.props.children.forEach(child => render(child, dom))​
  container.appendChild(dom)
}​
let nextUnitOfWork = null​
function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}​
requestIdleCallback(workLoop)​
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}​
const Didact = {  createElement,  render,}
​/** @jsx Didact.createElement */
const element = (  <div id="foo">    <a>bar</a>    <b />  </div>)
const container = document.getElementById("root")
Didact.render(element, container)
```

There's a problem with this recursive call.

Once we start rendering, we won't stop until we have rendered the complete element tree. If the element tree is big, it may block the main thread for too long. And if the browser needs to do high priority stuff like handling user input or keeping an animation smooth, it will have to wait until the render finishes.

So we are going to break the work into small units, and after we finish each unit we'll let the browser interrupt the rendering if there's anything else that needs to be done.

We use `requestIdleCallback` to make a loop. You can think of `requestIdleCallback` as a `setTimeout`, but instead of us telling it when to run, the browser will run the callback when the main thread is idle.

_React [doesn't use `requestIdleCallback` anymore](https://github.com/facebook/react/issues/11171#issuecomment-417349573). Now it uses the [scheduler package](https://github.com/facebook/react/tree/master/packages/scheduler). But for this use case it's conceptually the same._

`requestIdleCallback` also gives us a deadline parameter. We can use it to check how much time we have until the browser needs to take control again.

_As of November 2019, Concurrent Mode isn't stable in React yet. The stable version of the loop looks more like this:_

```js
while (nextUnitOfWork) {
  nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
}
```

To start using the loop we'll need to set the first unit of work, and then write a `performUnitOfWork` function that not only performs the work but also returns the next unit of work.

#### Step IV: Fibers

To organize the units of work we'll need a data structure: a fiber tree.

We'll have one fiber for each element and each fiber will be a unit of work.

Let me show you with an example.

![Fiber Tree 3](https://pomb.us/static/c8bdcc17706e9ab06233c980ed9cf007/d3fa7/fiber3.png "Fiber Tree 3")

![Fiber Tree 4](https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/d3fa7/fiber4.png "Fiber Tree 4")

Suppose we want to render an element tree like this one:

```js
Didact.render(
  <div>
    {" "}
    <h1>
      {" "}
      <p />
      <a />{" "}
    </h1>
    <h2 />{" "}
  </div>,
  container
);
```

In the `render` we'll create the root fiber and set it as the `nextUnitOfWork`. The rest of the work will happen on the `performUnitOfWork` function, there we will do three things for each fiber:

1. add the element to the DOM
2. create the fibers for the element's children
3. select the next unit of work

One of the goals of this data structure is to make it easy to find the next unit of work. That's why each fiber has a link to its first child, its next sibling and its parent.

When we finish performing work on a fiber, if it has a `child` that fiber will be the next unit of work.

From our example, when we finish working on the `div` fiber the next unit of work will be the `h1` fiber.

If the fiber doesn't have a `child`, we use the `sibling` as the next unit of work.

For example, the `p` fiber doesn't have a `child` so we move to the `a` fiber after finishing it.

And if the fiber doesn't have a `child` nor a `sibling` we go to the "uncle": the `sibling` of the `parent`. Like `a` and `h2` fibers from the example.

Also, if the `parent` doesn't have a `sibling`, we keep going up through the `parent`s until we find one with a `sibling` or until we reach the root. If we have reached the root, it means we have finished performing all the work for this `render`.

Now let's put it into code.

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object" ? child : createTextElement(child)),
    },
  }
}​
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}​
function createDom(fiber) {
  const dom = fiber.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type)​
  updateDom(dom, {}, fiber.props)​
  return dom
}​
const isEvent = key => key.startsWith("on")
const isProperty = key => key !== "children" && !isEvent(key)
const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = "";
    });
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });
  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot;
  wipRoot = null;
}
function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  const domParent = fiber.parent.dom;
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    domParent.removeChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
function render(element, container) {
  wipRoot = {
    dom: container,
    props: { children: [element] },
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}
let nextUnitOfWork = null;
let currentRoot = null;
let wipRoot = null;
let deletions = null;
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}
requestIdleCallback(workLoop);
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  const elements = fiber.props.children;
  reconcileChildren(fiber, elements);
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;
  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;
    const sameType = oldFiber && element && element.type == oldFiber.type;
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      };
    }
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      };
    }
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
}
const Didact = { createElement, render };
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    {" "}
    <a>bar</a> <b />{" "}
  </div>
);
const container = document.getElementById("root");
Didact.render(element, container);
```

First, let's remove this code from the `render` function.

We keep the part that creates a DOM node in its own function, we are going to use it later.

In the `render` function we set `nextUnitOfWork` to the root of the fiber tree.

Then, when the browser is ready,it will call our `workLoop` and we'll start working on the root.

First, we create a new node and append it to the DOM.

We keep track of the DOM node in the `fiber.dom` property.

Then for each child we create a new fiber.

And we add it to the fiber tree setting it either as a child or as a sibling, depending on whether it's the first child or not.

Finally we search for the next unit of work. We first try with the child, then with the sibling, then with the uncle, and so on.

And that's our `performUnitOfWork`.

#### Step V: Render and Commit Phases

We have another problem here.

We are adding a new node to the DOM each time we work on an element. And, remember, the browser could interrupt our work before we finish rendering the whole tree. In that case, the user will see an incomplete UI. And we don't want that.

So we need to remove the part that mutates the DOM from here.

Instead, we'll keep track of the root of the fiber tree. We call it the work in progress root or `wipRoot`.

And once we finish all the work (we know it because there isn't a next unit of work) we commit the whole fiber tree to the DOM.

We do it in the `commitRoot` function. Here we recursively append all the nodes to the dom.

#### Step VI: Reconciliation

So far we only *added* stuff to the DOM, but what about updating or deleting nodes?

That's what we are going to do now, we need to compare the elements we receive on the `render` function to the last fiber tree we committed to the DOM.

So we need to save a reference to that "last fiber tree we committed to the DOM" after we finish the commit. We call it `currentRoot`.

We also add the `alternate` property to every fiber. This property is a link to the old fiber, the fiber that we committed to the DOM in the previous commit phase.

Now let's extract the code from `performUnitOfWork` that creates the new fibers...

...to a new `reconcileChildren` function.

Here we will reconcile the old fibers with the new elements.

We iterate at the same time over the children of the old fiber (`wipFiber.alternate`) and the array of elements we want to reconcile.

If we ignore all the boilerplate needed to iterate over an array and a linked list at the same time, we are left with what matters most inside this while: `oldFiber` and `element`. The `element` is the thing we want to render to the DOM and the `oldFiber` is what we rendered the last time.

We need to compare them to see if there's any change we need to apply to the DOM.

To compare them we use the type:

- if the old fiber and the new element have the same type, we can keep the DOM node and just update it with the new props
- if the type is different and there is a new element, it means we need to create a new DOM node
- and if the types are different and there is an old fiber, we need to remove the old node

_Here React also uses keys, that makes a better reconciliation. For example, it detects when children change places in the element array._

When the old fiber and the element have the same type, we create a new fiber keeping the DOM node from the old fiber and the props from the element.

We also add a new property to the fiber: the `effectTag`. We'll use this property later, during the commit phase.

Then for the case where the element needs a new DOM node we tag the new fiber with the `PLACEMENT` effect tag.

And for the case where we need to delete the node, we don't have a new fiber so we add the effect tag to the old fiber.

But when we commit the fiber tree to the DOM we do it from the work in progress root, which doesn't have the old fibers.

So we need an array to keep track of the nodes we want to remove.

And then, when we are commiting the changes to the DOM, we also use the fibers from that array.

Now, let's change the `commitWork` function to handle the new `effectTags`.

If the fiber has a `PLACEMENT` effect tag we do the same as before, append the DOM node to the node from the parent fiber.

If it's a `DELETION`, we do the opposite, remove the child.

And if it's an `UPDATE`, we need to update the existing DOM node with the props that changed.

We'll do it in this `updateDom` function.

We compare the props from the old fiber to the props of the new fiber, remove the props that are gone, and set the props that are new or changed.

One special kind of prop that we need to update are event listeners, so if the prop name starts with the "on" prefix we'll handle them differently.

If the event handler changed we remove it from the node.

And then we add the new handler.

Try the version with reconciliation on [codesandbox](https://codesandbox.io/s/didact-6-96533).

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  updateDom(dom, {}, fiber.props);
  return dom;
}

const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);

function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = "";
    });

  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });

  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot;
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParentFiber = fiber.parent;
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.dom;

  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    commitDeletion(fiber, domParent);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null;
let currentRoot = null;
let wipRoot = null;
let deletions = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  const isFunctionComponent = fiber.type instanceof Function;
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }

  return fiber.child ? fiber.child : null;
}

let wipFiber = null;
let hookIndex = null;

function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];

  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

function useState(initial) {
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}

function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  reconcileChildren(fiber, fiber.props.children);
}

function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;

  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;
    const sameType = oldFiber && element && element.type == oldFiber.type;

    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      };
    }

    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      };
    }

    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
}

const Didact = {
  createElement,
  render,
  useState,
};

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

const element = <Counter />;
const container = document.getElementById("root");
Didact.render(element, container);
```

#### Step VII: Function Components

The next thing we need to add is support for function components.

First let's change the example. We'll use this simple function component, that returns an `h1` element.

Note that if we transform the jsx to js, it will be:

```js
function App(props) {
  return Didact.createElement("h1", null, "Hi ", props.name);
}
const element = Didact.createElement(App, {
  name: "foo",
});
```

Function components are differents in two ways:

- the fiber from a function component doesn't have a DOM node
- and the children come from running the function instead of getting them directly from the `props`

We check if the fiber type is a function, and depending on that we go to a different update function.

In `updateHostComponent` we do the same as before.

And in `updateFunctionComponent` we run the function to get the children.

For our example, here the `fiber.type` is the `App` function and when we run it, it returns the `h1` element.

Then, once we have the children, the reconciliation works in the same way, we don't need to change anything there.

What we need to change is the `commitWork` function.

Now that we have fibers without DOM nodes we need to change two things.

First, to find the parent of a DOM node we'll need to go up the fiber tree until we find a fiber with a DOM node.

And when removing a node we also need to keep going until we find a child with a DOM node.

#### Step VIII: Hooks

Last step. Now that we have function components let's also add state.

Let's change our example to the classic counter component. Each time we click it, it increments the state by one.

Note that we are using `Didact.useState` to get and update the counter value.

Here is where we call the `Counter` function from the example. And inside that function we call `useState`.

We need to initialize some global variables before calling the function component so we can use them inside of the `useState` function.

First we set the work in progress fiber.

We also add a `hooks` array to the fiber to support calling `useState` several times in the same component. And we keep track of the current hook index.

When the function component calls `useState`, we check if we have an old hook. We check in the `alternate` of the fiber using the hook index.

If we have an old hook, we copy the state from the old hook to the new hook, if we don't we initialize the state.

Then we add the new hook to the fiber, increment the hook index by one, and return the state.

`useState` should also return a function to update the state, so we define a `setState` function that receives an action (for the `Counter` example this action is the function that increments the state by one).

We push that action to a queue we added to the hook.

And then we do something similar to what we did in the `render` function, set a new work in progress root as the next unit of work so the work loop can start a new render phase.

But we haven't run the action yet.

We do it the next time we are rendering the component, we get all the actions from the old hook queue, and then apply them one by one to the new hook state, so when we return the state it's updated.

And that's all. We've built our own version of React.

You can play with it on [codesandbox](https://codesandbox.io/s/didact-8-21ost) or [github](https://github.com/pomber/didact).

#### Epilogue

Besides helping you understand how React works, one of the goals of this post is to make it easier for you to dive deeper in the React codebase. That's why we used the same variable and function names almost everywhere.

For example, if you add a breakpoint in one of your function components in a real React app, the call stack should show you:

- `workLoop`
- `performUnitOfWork`
- `updateFunctionComponent`

We didn't include a lot of React features and optimizations. For example, these are a few things that React does differently:

- In Didact, we are walking the whole tree during the render phase. React instead follows some hints and heuristics to skip entire sub-trees where nothing changed.
- We are also walking the whole tree in the commit phase. React keeps a linked list with just the fibers that have effects and only visit those fibers.
- Every time we build a new work in progress tree, we create new objects for each fiber. React recycles the fibers from the previous trees.
- When Didact receives a new update during the render phase, it throws away the work in progress tree and starts again from the root. React tags each update with an expiration timestamp and uses it to decide which update has a higher priority.
- And many more...

There are also a few features that you can add easily:

- use an object for the style prop
- [flatten children arrays](https://github.com/pomber/didact/issues/11)
- useEffect hook
- reconciliation by key

If you add any of these or other features to Didact send a pull request to the [GitHub repo](https://github.com/pomber/didact), so others can see it.

Thanks for reading!

## the changing ideal opponents of america

`history` `quote`

20 年前，美国政府宣传说，对手是日本，现在说对手是中国。我毫不怀疑，2040 年，我们将被告知对手是印度，2060 年对手则是一些成长中的非洲国家。

-- HN 读者

https://news.ycombinator.com/item?id=21382036

## building and monetizing informative sites as a solopreneur

`dev` `story` `app` `info` `ref`

我的创业产品如何被 2.2 万美元收购？（英文）

https://web.archive.org/web/20200407233212/https://mohddanish.me/my-bootstrapped-micro-startup-got-acquired-for-usd22k-10

一个印度大学毕业生自述，他如何找到创业的点子，做了一个小产品，然后把它卖掉。

---

### My Bootstrapped Micro-Startup got acquired for $22k

Building my 9th bootstrapped micro-startup product in 2019.

The journey took me 9 months while I was nomading in India, Singapore & Indonesia.

Working remotely from my laptop and traveling was the best thing I enjoyed doing for work & lifestyle balance.

It was really exciting to start building things when you spark an idea!

I joined the indie-makers communities 9 months ago on product hunt, maker's kitchen slack community, makerlog community & also Ramadan Makers community.

There were many other communities like WIP, IndieHackers & DEV.to for those who want their side projects to turn to a profitable startup business.

Not long ago in 2017, I graduated with a master's degree where I studied computer science at Aligarh Muslim University in India.

Right after I graduated, I was very blessed to land myself as a CTO(Chief Technology Officer) at one of the startup tech companies in the co-working space industry.

My dream was to build my own company before I graduated, but I know I did not have any experience to start one, so I started working for another company first.

In my first job role as a CTO, I was maintaining the company website servers and building internal tools to do automation. It was a very repetitive task almost every day for me. I've always love challenges and also new disruptive ideas that could benefit from solving technical problems.

I left the job, after working for 10 months. Till then I started to bootstrapped [my products](https://web.archive.org/web/20200407233212/https://mohddanish.me/projects).

So, here I'll talk about Public APIs project how it started, How it ranked #2 on google for top keywords and Story behind the Acquisition.

#### Why I build it?

I quit my job to build a resume builder projects and for that, I was looking at some Public APIs on google. I found a GitHub repo([https://github.com/public-apis/public-apis](https://web.archive.org/web/20200407233212/https://github.com/public-apis/public-apis)) and this was a good collective of 800+ APIs and I found the API for that I was looking for. After that, I found that this repo doesn't have a simple interface where users can easily filter, sort & advanced search to find APIs. So, I decided to build a simple interface with basic features like sort by recently added, category navigation, advanced search feature.

#### When I build it?

In Jan'2019 I pause working on resume builder because the Public APIs Interface project seems an interesting project to build. I scrap all the APIs from that GitHub repository and parse data into JSON according to UI requirements. I quickly build a simple MVP with a login system. So, users can also save the API into their profile.

#### Where I launch this?

I finish the MVP in 4 days with $0 but I was not aware of the places where to share this and at that time I was active on Twitter. So, from the twitter feed, I got to know about ProductHunt and it's free. I signup there and just click on the "Post a Product" button without knowing the best time of posting there and I watched the page after 1 hour and only 4 upvotes. I was shocked that who are these people but these were genuine upvotes. and I sleep after that. The next day I checked after 00:01 San Francisco time and What I see that it's #1 on PH. I wrote a complete blog post on my PH launch experience If you are interested to read then [here](https://web.archive.org/web/20200407233212/https://mohddanish.me/story-my-first-product-shipped-on-producthunt-3).

#### What were the challenges?

Hmm. Yes, after 4 months keep working on this project like Advanced Search, Comment System, Dashboard to add new APIs, etc. I was surviving on my saving and the money was going to use in my accommodations, food, co-working, and transportation. Now, I realize that I'm good to make MVP but I don't know how to monetize these projects. So, for a time being, I get one freelancer project to survive for the next 1 month.

#### What made me kept going?

There are some factors was keep me motivated to work on this project.

- Website traffic
- Users love through email and DM
- Loving to explore tools related to APIs and companies are working on APIs products

I was getting 30k+ page views per month and 20% traffic from Google only for the homepage because the website was SPA(single page application). So, someone suggests me to convert SPA to static pages.

Finally, the time comes to learn Gatsby and it's easy because this is React based technology to build static pages and best to optimize for SEO.

I build Public APIs 2.0 with Gatsby in June 2019 and this time I launch on multiple platforms like ProductHunt, twitter, dev.to, Reddit, etc. Yes! in the next 1 month I double my traffic from 30k pageview to 60k+.

#### Now I got some sales.

In version 2.0 I add some sponsor ads that are $200/month and I add an option to add API on my platform for $29/per API. So, I got 3 sponsor sales after launch that are $600 and 4 people paid to add API on the platform.

So, I make $716 in one month and I was so motivated to work. I also got an email that month. Here is the screenshot.

![Public APIs Acquire Email](https://web.archive.org/web/20200407233212im_/https://user-images.githubusercontent.com/9165019/70633901-4b57d000-1c57-11ea-9ab3-0cd190c2a023.png)

After reading this email I got more confidence that this project has a lot of potentials.

He offers me $8k for this and I replied "No" because I earned that month $716 and I do the calculation that I can earn that money or more in less than 10 months. Here is what I reply and trying to sell some sponsor slots for their APIs products. 😂😂😂

![](https://web.archive.org/web/20200407233212im_/https://paper-attachments.dropbox.com/s_83E94F336352DDA430504CC1D1574F2D0F4BEBA85C1E6DA29602E6038FC5FD84_1574966326374_Screenshot+2019-11-29+at+2.37.49+AM.png)

#### When I tired, what I did?

Next month I send 50+ emails to the companies running API products to sponsor the website in exchange to market their products. But I made $0 sale after lots of follow up.

At that time I was reading the buyer email and regretting to accept the offer. So, I was also thinking to apply for a job because it's so hard to survive without money.

My mind always finds a product idea in every case. Someone tweet job vacancies 10 minutes ago on twitter and where I trigger the idea to build tweetjobs.dev(Search engine to find job from twitter) and I build this simple MVP in 11 hours and launch the next day. And I got 60k+ through twitter, HN and PH launch.

![](https://web.archive.org/web/20200407233212im_/https://paper-attachments.dropbox.com/s_83E94F336352DDA430504CC1D1574F2D0F4BEBA85C1E6DA29602E6038FC5FD84_1574967042315_Screenshot+2019-11-29+at+2.50.09+AM.png)

But again everyone is appreciating the idea and got lots of emails, DM but I'm so bad to Monetize products.

After 7 days of tweetjobs.dev launch I got a message on LinkedIn from the same buyer and he offered me $15k this time.

Yess! I decided this time is to sale this project and invest the money into my new IDEA that is NoCodeAPI. But I gave him my price that is $22k and after 1 hour he replied and deal done.

Yess! the deal is done. Money in the account and I handover codebase and domain to them.

## video games will become visual novels

`game` `view`

这段假期，我在家常常玩电子游戏。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020509.jpg)

有人说过，世界上有两种游戏。一种是追求明确目标的游戏，比如战胜所有对手，完成目标就取得了游戏胜利；另一种是没有明确目标的游戏，只是为了讲一个故事，或者体验在游戏世界的漫游。

我发现，我对第一种游戏越来越厌倦，对不停地"打怪、升级、做任务、收集宝物"这种模式，尤其没有兴趣。我更喜欢在游戏中漫游和探索，好比在一个陌生的城市观光，没有一定要做的任务，也没有一定要克服的障碍，不需要收集任何东西，不必与任何人作战，也不担心哪个角落会跳出敌人，如果看到感兴趣的东西，就停下来好好欣赏。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020503.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020504.jpg)

有一个很老的游戏，叫做[《亲爱的艾丝特：爱与死之书》](https://www.douban.com/game/19974701/)（Dear Esther），据说是文学性最强的游戏，甚至有的评论家说，这不是游戏，而是一部可以玩的小说，"这是压抑、孤独、沉寂以及心如灰烬的表白或遗书"。玩家身处一个无人海岛，景色优美而荒凉，背景音乐伴着海风时断时续，你在这个岛上漫游，没有目标，耳边是一个陌生男人在不停朗读，他写给亡妻的信。你根据这些信，以及现场发现的线索，自己去推测到底发生了什么。这种游戏很对我的胃口。

在我心目中，好的游戏应该是这样的：玩家处在一个故事之中，漂亮的虚拟世界使得这个故事引人入胜。它会吸引你想留在其中，探索各个角落，等着知道故事的结局。游戏过程就是一次旅行，与周围的物体互动，大部分时间你就是悠闲地探索环境，等待将要发生的情节。

我想，未来会有越来越多这一类游戏，就是一本实境化的数字小说。表面上，你在玩游戏，实际上是在读小说，把自己变成小说人物、亲身体验小说世界、参与其中的情节。

## internet archive wayback machine chromium extension

`app`

Wayback Machine 插件

https://blog.archive.org/2017/01/13/wayback-machine-chrome-extension-now-available/

Chrome 浏览器插件，互联网档案馆的官方版本，可以查看一个网页的历史版本，包括那些已经无法访问的网页。

## what will the interesting courses online become

`career` `view` `ref`

上海市教委[通知](https://m.yicai.com/news/100510391.html)，本市中小学 3 月 2 日开学，但是不到校，在家收看线上课程。

这些课程都是由教委[统一录制](https://mp.weixin.qq.com/s/DegoMgMA6AEenxC9yY4y3Q)，动员"全市各学科一千多名优秀骨干教师，共分为 12 个频道，涵盖小学一年级到高中三年级。"

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022613.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022614.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022615.jpg)

上面是录制现场的照片。看上去跟平时讲课没有区别，就是单纯的课堂录像。大家觉得，这样的听课效果会好吗？依我看，现场讲课效果都未必很好，何况在家看录像呢！

教育类的视频，一般都要带有一点趣味性，最好加入大量的动画、图片或短视频，才能吸引人，否则就太枯燥了。干巴巴的讲解课本，一张张展示幻灯片，成年人都看不进去，小朋友的听课效果就可想而知了。

我觉得，网课肯定是未来的趋势，大多数知识将来都是线上学，这样才能做到随时随地学习，而且成本也足够低。但是，前提是不能把课堂教学拍成录像放上网，而是要做到知识性与娱乐性的结合，才能成功。

我心目中的范例有两个，都是国外的视频作者，一个是  [3Brown1Blue](https://www.3blue1brown.com/)，专拍数学视频；另一个是  [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt/)，专拍科普短视频。他们都做得非常棒，可以当作榜样。下面是 Kurzgesagt 的[《世界最危险的药是什么》](https://v.qq.com/x/page/b06577jvtnj.html)，大家感受一下吸引人的网课是什么风格。

## sightseeing on xbox guide

`story` `ref`

Xbox 美景指南

https://www.creativereview.co.uk/plan-your-next-trip-inside-xbox/

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020701.jpg)

旅游指南 Rough Guides 丛书，最近出版了[《Xbox 美景指南》](https://www.roughguides.com/article/introduction-to-the-rough-guide-to-xbox/)，专门收入出现在 Xbox 游戏的各种美丽景点，供游戏爱好者前往体验。该书定价 20 英镑，在微软商店出售。

游戏创造的虚拟世界越来越精美，值得人们专程前往观赏，并且还能在其中漫游，不用购买飞机票，只需打开游戏机的按钮。下图是游戏《刺客信条：奥德赛》里面的吉萨金字塔场景。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020702.jpg)

---

https://cdn2.hubspot.net/hubfs/2424135/RG_Xbox_v4.pdf

## react component creator on web

`app` `js`

craft.js

https://github.com/prevwong/craft.js

一个可以通过拖拽生成 React 应用的可视化框架。（@ifrontend-xyz 投稿）

## lists make writing clearer than essays

`editorial` `guide` `theory` `ref`

我们经常需要表达自己的想法，怎样才能清晰地说出来，让别人记住你要表达的意思？

请看下面这段话，你对它留下深刻印象吗？

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031101.jpg)

修改一下，是不是效果好了很多。

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031102.jpg)

这里不是推荐大家使用问答体，而是想要展示两个小技巧，可以快速提升表达效果。

（1）拆分。内容尽量拆分成一系列简短而明确的小观点，粒度要细到每个观点都可以让人快速地、一目了然地领会。 
（2）反复。开头的几点用来吸引读者的注意力，然后进入核心部分时，采用各种形式反复展示，就是翻来覆去地讲，力求给人留下深刻印象。

只要用好这两个小技巧，一定可以取得不错的效果。你一点一点地展示，让别人跟得上你。即使他们没有跟你一直走到底，只看了一半，也好于一点没看进去。

## the world around him will be one's fate

`weather` `guide` `theory` `quote`

改变生活最持久、最有效的方法就是改变周围的人。所以，你应该明智地选择你的朋友、你的工作，他们会成为你的命运。

-- HN 读者

https://news.ycombinator.com/item?id=22102726

## higher education is becoming pointless for personal growth

`society`

这几天，[教育部](http://edu.people.com.cn/n1/2020/0302/c1053-31612535.html)公布了 2020 年研究生招生规模，今年会多招 18.9 万人，比去年增长 20%。

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031819.jpg)

这是为了落实国务院的要求，因为今年有疫情，高校毕业生的就业形势非常严峻，扩大研究生招生，可以减少就业压力。

这固然是不得已的措施，但也反映了我们国家的现实：高等教育的目的，并不完全是培养学术人才，很大程度上充当了就业缓冲层。

一旦就业不好，高校就会扩招。由于一再的扩招，研究生的培养质量下滑得很厉害。我建议，大家考研一定要慎重，如果不打算追求学术，轻易不要考研。否则等到两三年后毕业，拿到一张含金量有限的硕士文凭，你会发现工作同样难找，还白白浪费了好几年的宝贵光阴。

这些年已经司空见惯了，博士研究生去参加公务员考试、去应聘中小学教师。几乎任何一个有学历要求的招聘岗位，都有博士生在应聘。学历贬值的程度可见一斑。

在我看来，读研越来越不值得，研究生文凭在贬值，而学到的那些知识完全可以在互联网上自学。一边工作一边学习，会比读研的成本小很多。工作中提高技能，了解社会，更重要的是可以有收入；下班后，再通过网络自学，补充知识，思考自己未来要走的方向。总之，中国的研究生教育不是出路，学到的东西太少，浪费的时间太多。

## jira app clone with react and node

`js` `guide`

[jira_clone](https://github.com/oldboyxx/jira_clone)

![](https://cdn.beekka.com/blogimg/asset/202001/bg2020012901.jpg)

使用 React + Node.js 写的项目管理工具 Jira 的克隆。

## we will all be writing code for android 4.4 whatever new api is released

`dev` `meme` `quote`

我意识到，无论谷歌发布多么新的、文档完善的、功能强大的新 API，我们余生都将为安卓 4.4 编写代码。

-- [HN 读者](https://news.ycombinator.com/item?id=22153034)  回答提问《作为手机开发者，你有没有什么遗憾？》

---

On the iOS side, I regret not knowing how horrible Xcode is and how horrible Apple's documentation is. On the Android side, I regret not realizing that no matter what kind of slick new well documented APIs Google releases we will all be writing code for Android 4.4 for the rest of our lives. Also, I wish I knew mobile developers are some of the lowest paid developers other than game industry peons.

## intuitive sketchy blackboard on web

`app` `image`

[Excalidraw](https://excalidraw.com/)

![](https://www.wangbase.com/blogimg/asset/202003/bg2020032106.jpg)

一个非常简单易用的白板绘图开源工具。

---

[Excalidraw](https://excalidraw.com/)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052901.jpg)

流程图工具 Excalidraw 可以做出上图这样的图示效果，可惜中文没有手写效果。如果一定要加，需要自己克隆代码，再安装中文字体。

## sleep is what impacts coding efficiency the most, not language

`dev` `meme` `weather` `quote`

影响编程效率最大的因素，不是使用何种编程语言，而是昨晚你的睡眠是否充足。

-- [《我的软件工程信念》](https://blog.wesleyac.com/posts/engineering-beliefs)

## lacking support of web app is just of business consideration

`dev` `quote`

手机操作系统不愿意全力支持 Web App ，是故意的。因为他们要通过应用商店赚钱，让应用只能通过应用商店安装，就可以保证获得庞大的收入。

-- [HN 读者](https://news.ycombinator.com/item?id=22185250)

## letter to myself as a fresh programmer

`dev` `career` `guide` `literary` `ref`

[写给新软件工程师的一封信](https://www.florio.dev/20200328-letter-to-myself/)（英文）

![](https://www.wangbase.com/blogimg/asset/202004/bg2020040114.jpg)

作者给进入这个行业的新人，提供了几点建议（上图），我觉得说得相当好。新人对这些建议肯定没有很深的体会，但是工作几年以后，再回头看，你会觉得这才是正确的路。

---

### A letter to myself as a fresh software engineer

Dear Self, these are some tips I wish someone has given me when I started my career. With love, (a more experienced) you.

March 28, 2020

Dear Self,

You just graduated and you are ready to start your career in the IT field. I cannot spoiler anything, but I assure you it will be an interesting ride. I'm writing you this letter because I want to give you some advice that will help you be a better professional. Nothing you won't learn by yourself in the next few years, but it is something that I wish someone had told me when I started my career. They are not ordered by any means and are **all equally important**.

![letter-to-myself](https://www.florio.dev/posts/20200328-letter-to-myself/img/letter-to-myself.png)

#### Run a marathon, not a sprint.

The road to becoming a good software engineer is a long one. **Don't rush on stuff**, and don't give up just because you are not getting an easy and fast win. Take your time to learn and become good in the topics you are interested in. Remember that this is a marathon, not a sprint.

#### Be humble, not stupid.

It is good -- sorry, it is **fundamental** -- to be humble. There is always something to learn from others, even when you are an experienced professional. But this doesn't mean that everyone is better than you. You have to **respect yourself and your skills**. When you don't respect yourself you become stupid, not humble.

#### Compare with yourself, not others.

There is no point in comparing yourself with others. There will always be someone better than you in your job. And there will always be someone better than the one that is better than you. And there will... ok, you got the point. **Just do your best**. If you think someone is a better engineer than you are, learn from him/her. Keep doing your best, and eventually, you will be a reference for someone else.

#### Respect people, not titles.

During your career, you will work with exceptional professional. Most important, you will meet exceptional human beings. **Respect people for who they are**, not for the title they have. If `foo` is "Principal Senior Lead Engineering Chief Architect" doesn't mean that he deserves more respect than `bar` that is a junior software developer.

#### Choose the challenge, not comfort.

The road will be full of crossroads. There may be multiple choices, but everything boils down to a choice between your comfort zone, or go outside your comfort zone. There may be a moment in your life -- hopefully after decades of work -- when you will feel the need to cool down a bit because you will be satisfied with what you achieved. Until that moment, try to go out of your comfort zone. It will make you a better professional and you will feel more satisfied with your career. Remember that **the best things often happen outside the comfort zone**.

#### Jump on the whiteboard, not on the keyboard.

When you have to design a new feature or a new system, don't jump on the keyboard to start coding. The "muscle" you have to train and use as an engineer is your brain, not your fingers. **Always think before act**. For this reason, jump on the whiteboard instead of the keyboard, and start thinking of what you should implement. Better if you have a sparring partner to challenge your thoughts. Oh, when I say "the whiteboard" I mean "every object that can help you think", be it pen and paper, a notebook application, [draw.io](https://app.diagrams.net/), etc.

#### Deliver value, not code.

Please don't be affected by the [NIH syndrome](https://en.wikipedia.org/wiki/Not_invented_here). There is no point in reinventing the wheel. **Avoid wasting time in something that is already out there**. If you can achieve your goal simply glueing together some tools, just do it. What you should deliver as a software engineer is value to your business, not lines of code.

#### Choose life, not work.

In the IT field, it is easy to focus too much on work. After all, for most of us, it is not just a job, it is passion. Remember that **work is important, but life is more**. Live a meaningful and rich life. Play sports, read books, find hobbies, travel and see the beautiful world we are living in. Hangout with friends, find a partner for your life and give to your partner all the love, attention, and support that you can. You'll be surprised how much having a rich life will improve you as a professional.

That's all I can tell you right now. I still have a lot to learn.

One last thing: **enjoy the ride**! 🚀

With love,

(a more experienced) You.

## shallow water is always roaring

`society` `quote`

浅水是喧哗的，深水是沉默的。（Shallow water is roaring, deep water is silent.）

-- 雪莱

## have meetings with animals on the farm

`weather` `meme`

[动物参加视频会议](https://www.sweetfarm.org/goat-2-meeting)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041802.jpg)

疫情期间，视频会议变得非常流行。美国加州的一个农场，推出了一项服务，让农场的动物参加视频会议。会议进行时，一个动物会加入直播，仿佛是会议的一个参加者。

这项服务是有偿的，所有收费用来资助农场的运作。用户最低交纳 65 美元，并发送会议的时间和链接，就可以让一个动物远程出席 20 分钟会议。目前，可选的动物主要是山羊，以后可能会有其他动物。农场特别声明，不保证山羊有很好的开会状态，它在睡觉也是有可能的。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041804.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041803.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041805.jpg)

## phone os for kids with serif text based fresh and cool ui

`design` `ref`

[儿童手机系统](https://techless.com/news-posts/kid-safe-smartphone-launch)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020043004.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020043005.jpg)

美国一家创业公司推出儿童的手机操作系统 KidOS，只能用来打电话、发短信和拍照，不能上网和看视频，其他还包括一些小工具，比如时钟和计算器。

它基于安卓系统，可以在现有的安卓手机上安装。界面相当简洁，连图标都没有，看上去让人感到很清爽。

## leverage like app and personal media nowadays is way to get rich

`career` `view` `ref`

美国风险投资家 Naval Ravikant 有一个很有名的长推特，一共 40 条，题目叫做[《如何致富，不靠运气》](https://threadreaderapp.com/thread/1002103360646823936.html)，谈了他的商业观。

和菜头翻译过[中文版](https://new.qq.com/omn/20200413/20200413A0U72C00.html)。另外，Naval Ravikant 后来还有一篇[长文](https://nav.al/rich)，详细解释这些观点。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051404.jpg)

他认为，致富其实只需要两步。

第一步：找到"个人-市场-产品"这三者交叉的那个定位。你问问自己，你的竞争力在哪里？市场需要的哪一种产品，可以用到你的这种竞争力？这就是你的定位。

第二步：使用各种杠杆（leverage），使得你的产品可以服务尽可能大的市场。

只要做到上面这二步，就会赚到大钱。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051405.jpg)

我觉得，他总结得很精辟。赚大钱的奥秘就是定位和杠杆这两件事。当市场需要你的产品时，如果有办法"放大"产品，服务更多的人，你就成功了。

Naval Ravikant 说，传统的杠杆是劳动力和资本。通过雇佣更多的员工和借贷更多的钱，把业务放大。但是，互联网时代，新的杠杆出现了，那就是软件和自媒体。

只要服务器开着，软件（包括网站和 App）就能帮你开展业务，服务更多的人。媒体杠杆更简单，只要写文章、拍视频、录播客，放到网上就可以了。只要别人看到这些内容，就等于帮你放大了业务。

这两种新杠杆，成本更低，限制条件更少（不需要大量雇人，也不需要跟银行打交道），因此是更好的杠杆。如果你把四种杠杆结合起来，就能发挥最大的威力。事实上，那些互联网巨头都是这四种杠杆的结合，难怪它们都赚到了大钱。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051406.jpg)

在我看来，这个周刊也是一种杠杆。一方面，我通过周刊，把自己的想法、看到的东西，传递出去，接触到更多的人；另一方面，周刊反过来督促我每周大量的阅读，去找到能帮到我的技术、创意、趋势和故事。

从某个角度看，人生的成就其实取决于你能影响到多少人。祝愿大家都能找到自己的人生杠杆。

## philosophy razors

`theory`

[哲学剃刀](https://zh.wikipedia.org/wiki/%E5%93%B2%E5%AD%A6%E5%89%83%E5%88%80)

"剃刀"（razor）这个词，在哲学里面有特殊含义，指的是一种经验法则，可以对某种现象做出简洁的解释，消除了其他的解释。

常常被引用的"剃刀"（经验法则）有下面这些。

奥卡姆剃刀：更简单的解释更可能是正确的。引申为某个命题成立，所需要的假设越少越好。

汉隆剃刀：可以归咎于愚蠢的事情，不要归咎于恶意。

希钦斯剃刀：凡是无证据的断言，也可以无证据地驳回。

休谟剃刀：从一样东西是什么，无法推导出它应该是什么，即无法从事实推导出价值判断。

牛顿剃刀：无法通过实验或观察解决的问题，不值得争论。

萨根标准：非同寻常的主张，需要非同寻常的证据。

波普原则：一个理论被认为是正确的，前提必须是有可能证明它是错误的，即必须是可证伪的。

---

Razors include:

- [Alder's razor](https://en.wikipedia.org/wiki/Mike_Alder#Newton's_flaming_laser_sword "Mike Alder") (also known as Newton's flaming laser sword): If something cannot be settled by experiment or observation, then it is not worthy of debate.
- [Einstein's](https://en.wikipedia.org/wiki/Albert_Einstein "Albert Einstein") razor: "The supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience."
- [Grice's](https://en.wikipedia.org/wiki/Paul_Grice "Paul Grice") razor (also known as Giume's razor): As a principle of [parsimony](https://en.wikipedia.org/wiki/Occam%27s_razor "Occam's razor"), conversational [implicatures](https://en.wikipedia.org/wiki/Implicature "Implicature") are to be preferred over semantic context for [linguistic](https://en.wikipedia.org/wiki/Linguistics "Linguistics") explanations.
- [Hanlon's razor](https://en.wikipedia.org/wiki/Hanlon%27s_razor "Hanlon's razor"): Never attribute to malice that which can be adequately explained by stupidity.
- [Hitchens's razor](https://en.wikipedia.org/wiki/Hitchens%27s_razor "Hitchens's razor"): That which can be asserted without evidence can be dismissed without evidence.
- [Hume's guillotine](https://en.wikipedia.org/wiki/Hume%27s_Guillotine "Hume's Guillotine"): What ought to be cannot be deduced from what is; prescriptive claims cannot be derived solely from descriptive claims, and must depend on other prescriptions. "If the cause, assigned for any effect, be not sufficient to produce it, we must either reject that cause, or add to it such qualities as will give it a just proportion to the effect."
- [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor "Occam's razor"): Explanations which require fewer unjustified assumptions are more likely to be correct; avoid unnecessary or improbable assumptions.
- [Popper](https://en.wikipedia.org/wiki/Karl_Popper "Karl Popper")'s [falsifiability](https://en.wikipedia.org/wiki/Falsifiability "Falsifiability") principle: For a theory to be considered scientific, it must be falsifiable.
- [Sagan standard](https://en.wikipedia.org/wiki/Sagan_standard "Sagan standard"): Extraordinary claims require extraordinary evidence.

## basic income experiment by andrew yang

`story`

[基本收入实验](https://www.yahoo.com/entertainment/twitter-jack-dorsey-giving-andrew-090025479.html)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052115.jpg)

推特公司 CEO、亿万富翁杰克-多尔西（Jack Dorsey，上图）最近向杨安泽捐款 500 万美元，要求用这些钱进行"基本收入"的实验。所谓"基本收入"，是杨安泽参加去年美国总统民主党初选时的主张，他希望向每个美国成年公民每月无条件发放 1000 美元。这个主张在美国引起了巨大反响。

杰克-多尔西说，基本收入是一件"早就该做的事情"，"我们改变政策的唯一方法是通过试验，提供它的有效案例。" 杨安泽表示，这些钱将立刻无条件发掉，以每人 250 美元的小额现金赠款的形式，送给因 Covid-19 失业或遭受损失的 2 万个人。

## limitation of dmca on opensource softwares enriching piracy

`dev` `story` `theory` `ref`

[盗版工具是否有版权？](https://torrentfreak.com/github-reinstates-popcorn-time-code-despite-mpa-threat-200520/)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052408.jpg)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052409.jpg)

开源软件["爆米花时间"](https://github.com/popcorn-official/popcorn-desktop)（Popcorn Time）是一个 BT 下载客户端，集成了媒体播放器，可以一边下载一边观看。毋庸讳言，它的主要用途是观看盗版的电影和电视剧。

最近，美国电影协会 MPA 向 GitHub 发了一个 DMCA 通知，声称该软件侵害版权，必须立刻下架，GitHub 就将源码下架了。大多数情况下，这就是故事的结局，但"爆米花时间"不接受这个结局，提交了 DMCA 反通知，认为 MPA 的请求不合法，因为该源码不侵犯 MPA 版权，"该代码是我们 100％的劳动成果，不包含任何版权材料，请再次检查，" 开发人员写道。结果，GitHub 恢复了源码的访问权限。

现在还不清楚，美国电影协会将如何反应。这里的问题就是，如果代码不直接侵犯版权，也不直接链接到侵犯版权的材料，而是被用作侵犯版权的用途，那么 DMCA 通是否适用？这些代码是否可以自由传播？

## freedom of speech in america doesn't affect personal companies

`society` `theory`

美国宪法第一修正案保障言论自由，但是只适用于政府机关（不得限制言论），不适用于私人公司。

私人公司可以审查其平台上的内容。所以，即使在美国，媒体平台删除你的言论也是合法的。

-- [《美国法院判决，Youtube 审查用户上传的内容合法》](https://www.swissinfo.ch/chi/afp/%E7%A7%81%E4%BA%BA%E7%BD%91%E8%B7%AF%E4%B8%8D%E5%8F%97%E8%A8%80%E8%AE%BA%E8%87%AA%E7%94%B1%E9%99%90%E5%88%B6-%E6%B3%95%E5%AE%98%E8%A3%81%E8%83%BD%E5%AE%A1%E6%9F%A5%E5%86%85%E5%AE%B9/45582646)

## freedom of speech on copying donald trump twitter

`society` `meme` `theory`

[模仿特朗普的实验](https://www.businessinsider.com/twitter-donald-trump-suspendthepres-experiment-policies-suspension-glorifying-violence-2020-6)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020060505.jpg)

一个推特用户做了一个实验，注册了一个帐号，特拉普发什么推特，他就发一样的内容，不是转发，而是原文复制，除此以外不发其他内容。

结果，推特官方三天就注意到了他，关闭帐号 12 小时，要求他在这段时间内删除违规言论。同样的话，特朗普可以说，你说就不行。媒体报道这件事以后，推特恢复了这个账号，并说关闭帐号是一个"失误"。

## the father kept in xbox

`story` `literary`

[Xbox 里面的父亲](https://www.facebook.com/Coyoter.Huang/posts/10216945532563571)

一篇 2014 年的感人故事，儿子在 Xbox 里面发现了过世父亲的身影，故事发生在国外：

Well, when i was 4, my dad bought a trusty XBox.\
我 4 岁的时候，父亲买了一台 Xbox

you know, the first, ruggedy, blocky one from 2001.\
你知道的，是那台坚硬、结实，2001 年推出的 Xbox

we had tons and tons and tons of fun playing all kinds of games together\
我们一起玩了许多游戏，而且玩得非常开心....

until he died, when i was just 6.\
...直到他去世为止，那年我才 6 岁

i couldnt touch that console for 10 years.\
在往后十年，我没有办法碰那台游戏机

but once i did, i noticed something.\
直到有一次我打开它，我发现了一件事情

we used to play a racing game, Rally Sports Challenge.\
过去我曾与父亲玩过一款叫做《越野挑战赛》的赛车游戏

actually pretty awesome for the time it came.\
实际上在当年，它真的很好玩

and once i started meddling around... i found a GHOST.literaly.\
而当我开始在这款游戏中四处浏览时，我遇到了货真价实的"幽灵"。

you know, when a time race happens,\
在这款赛车游戏的计时赛中

that the fastest lap so far gets recorded as a ghost driver?\
最佳纪录保持者的记录将会以幽灵车手状态出来与你一同赛车

yep, you guessed it\
是的，你猜到了！

his ghost still rolls around the track today.\
父亲的灵魂至今仍在赛车场上奔驰着

and so i played and played,and played,\
于是我一遍又一遍的挑战

untill i was almost able to beat the ghost.\
我慢慢的可以追上这位幽灵车手

until one day i got ahead of it,i surpassed it, and...\
终于有一天，我成功了！我超越祂了！然后...

i stopped right in front of the finish line,\
我在终点线前停下来

just to ensure i wouldnt delete it.\
确保我不会就这样删除"父亲的记录"。

## sea turtle back home after 20 years

`story` `literary`

[海龟回家](https://www.abc.net.au/news/2020-03-07/yoshi-turtle-journey-tracked-37000km-from-cape-town-to-australia/12024088)

![](https://www.wangbase.com/blogimg/asset/202003/bg2020030803.jpg)

两年前，南非一家水族馆放生了一只 180 公斤的大海龟，它已经在水族馆生活了 20 年。科学家在海龟身上安装了卫星追踪装置，看它去了哪里。

它先去了非洲西部，然后调头横渡印度洋，用了两年时间游到了澳大利亚。总行程 37000 公里，平均每天前进 50 公里，这是相当快的速度，应该借助了洋流。科学家认为，这只海龟是想回到她出生的地方，进行繁殖和筑巢。在被关了 20 年之后，她依然记得回家的路。

![](https://www.wangbase.com/blogimg/asset/202003/bg2020030804.jpg)

## ikea's marketing using popular tv shows

`design` `meme`

[宜家公司](https://twitter.com/mkobach/status/1133798525739970560)利用热门电视剧的场景装潢，展示他们的家具产品。

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061105.jpg)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061106.jpg)

## comment or not comment by google testing on the toilet

`dev` `guide` `editorial` `ref`

[何时写注释？](https://testing.googleblog.com/2017/07/code-health-to-comment-or-not-to-comment.html)（英文）

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061306.jpg)

谷歌的厕所里面贴的是各种编程知识，这篇就是谷歌的"厕所文"之一，谈什么时候应该写注释，并提供海报下载。

## adobe photoshop camera using ai trained by art photos

`app` `image`

[Photoshop Camera](https://www.adobe.com/products/photoshop-camera.html)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061307.jpg)

Adobe 公司推出的手机拍照软件，只要按下快门，就可以拍出具有艺术风格的照片。它的艺术风格不是来自滤镜，而且来自其他人拍的艺术照或明星照，通过 AI 套用在当前场景。

## elegant react component system library

`js` `design` `library`

[Chakra UI](https://chakra-ui.com/)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061414.jpg)

一个 React 组件库，UI 很优雅。

## meaning of all math symbols

`info` `editorial`

[Mathematical Symbols](https://mathvault.ca/hub/higher-math/math-symbols)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061415.jpg)

这个网页列出各种数学符号的含义。

## material design icons

`design` `library`

[material-design-icons](https://github.com/google/material-design-icons)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062006.jpg)

谷歌的官方开源图标库，谷歌和安卓就采用这一套图标。Material Design 官方网站可以查看[所有图标](https://material.io/resources/icons/)。

## image converter from webp to jpg

`app` `image`

[webp2jpg](https://github.com/renzhezhilu/webp2jpg-online)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062810.jpg)

一个纯前端的在线图片格式转换工具，可以快速将图片转为另一种格式，并且提供多个参数可以调节。（[@renzhezhilu](https://github.com/ruanyf/weekly/issues/1312)  投稿）

## issue management app linear as jira reduced

`app` `info`

[Linear](https://linear.app/)

![](https://cdn.beekka.com/blogimg/asset/202007/bg2020070106.jpg)

一个在线的项目管理软件，用于 Bug 管理，比 Jira 用法简单。

## generate geometry patterns with js

`js` `art` `image` `guide`

[JavaScript 生成艺术图形教程](https://generativeartistry.com/tutorials/)

这个教程介绍 JavaScript 如何生成 8 种艺术图形。

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062403.jpg)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062404.jpg)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062405.jpg)

## tools like clocks and mirrors made ourselves

`quote` `literary`

时钟和镜子改变了人类社会。

时钟创造了一种焦虑文化。

镜子创造了一种自恋文化。

-- David Perell

## visual essay on just javascript course landing page

`literary` `design` `art` `ref`

[Just JavaScript 课程](https://justjavascript.com/)

著名程序员 Dan Abramov 正在撰写的 JavaScript 教程，他还没有写完。只要在上面网址报名，每写好一部分就会通过邮件发给你。（[@hacker0limbo](https://github.com/ruanyf/weekly/issues/1326)  投稿）

## linus torvald as opensource maintainer reading emails

`dev` `view`

[Linus 不再编程了](https://linux.slashdot.org/story/20/07/03/2133201/linus-torvalds-i-do-no-coding-any-more)

2020 年 5 月，Linux 基金会一年一度的峰会上，Linux 创始人莱纳斯-托瓦尔兹（Linus Torvalds）与 VMware 公司副总裁兼首席开源官 Dirk Hohndel 进行了对话。

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070605.jpg)

Dirk Hohndel 问 Linus，现在的工作流程是怎样的。

Linus 说，我现在整天就是读 Email，写 Email，再也不编程了。

我现在写的大部分代码，都是在 Email 里面。某人给我发来一个补丁，或者一个 Pull Request，或者跟我讨论，我就写一段伪代码，不编译也不测试，发给对方看，然后在邮件里加上一句"我觉得应该这么写"。

我现在就干这些事，我不再是程序员了。

我每天读的 Email，要比写的多得多。 因为我的工作说到底，就是拒绝其他人的代码。总是需要有一个人来拒绝其他人，其他开发者知道代码写得不好，会被我拒绝，就会更小心。为了能够有说服力地拒绝他人，我不得不知道事情的前因后果，否则我就不称职了。所以基本上，我的所有时间都用来读其他人的 Email，必须知道他们在干嘛......这工作很有意思，但是你不得不把大部分时间用来读 Email。

对于开发者，我希望大家不仅只是写出好的代码，还必须很善于解释自己的代码。代码的提交信息，对我来说，几乎跟代码本身一样重要。有时，代码的意图非常明显，不需要解释，但是这种情况极其少。我对开发者的一个希望就是，能够更好地解释他们的代码是干嘛的，为什么需要变更以前的代码。这样的话，我管理起来就比较容易，如果你能够解释清楚，我就能信任这些代码。

开源软件的一大部分其实是交流，而交流包括提交信息，也包括来来回回的 Email。告诉别人你想做什么，为什么原来的代码你觉得要改，真的是非常重要的一件事。

## anchoring bias in marketing

`theory`

锚定偏差（anchoring bias）指的是决策时严重依赖第一个可用的信息。

比如，你走进一家体育用品商店，发现的第一件商品，是一条价值 500 美元的运动裤。接着，你看到另一条价格为 300 美元的运动裤时，就会觉得它很便宜，实际上如果首先看到这条 300 美元的裤子，你会觉得它根本不便宜。

-- [《锚定偏差》](https://models.substack.com/p/why-are-we-anchored-often)

## react component library of adobe

`js` `design` `library`

[React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072402.jpg)

Adobe 公司的 React 组件库，用法非常简单干净。

---

https://react-spectrum.adobe.com/react-spectrum/getting-started.html

## virtual city generated from openstreet map

`app` `image`

[OSM City](http://stinaflodstrom.com/projects/osm/osm.html)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072803.jpg)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072804.jpg)

丹麦艺术家根据开源地图 OpenStreetMap 的数据，让建模软件 Unity 3D 引擎基于真实城市的面貌，自动生成一座虚拟城市。

## solid web framework as react reduced

`js` `library`

[solid](https://github.com/ryansolid/solid)

一个借鉴 React 思想和用法的前端框架，但是不使用虚拟 DOM，也没有那些复杂的 API，用起来比较轻盈。

## hacker news daily top 10 scrap

`app` `feed`

[hackernews-daily](https://github.com/headllines/hackernews-daily)

![](https://www.wangbase.com/blogimg/asset/202009/bg2020090207.jpg)

订阅 Hacker News 每日排名最高的 10 条新闻。具体方法是，通过 GitHub Actions 定时执行脚本，获取帖子，记录到了项目的 issue 里，用户通过 watch GitHub 仓库或者 RSS 订阅。（[@timqian](https://github.com/ruanyf/weekly/issues/1398)  投稿）

## sync tool from instagram to twitter

`dev` `story`

[我的业余作品如何以 3 万美元出售](https://marc.io/tweet-photo-acquired)（英文）

![](https://www.wangbase.com/blogimg/asset/202009/bg2020090105.jpg)

作者最初写了一篇文章，介绍如何将 Instagram 图片同步到推特，结果发现浏览量很高。有人还写信，愿意付费使用该功能。作者就把它做成一个小服务，结果被 3 万美元收购。

## not being updated because it's done, not dead

`js` `library` `story`

它还没有死，但确实已经写完了。

-- [Moment.js](https://momentjs.com/docs/#/-project-status/)  宣布停止开发，进入维护状态。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020091508.jpg)

---

**We now generally consider Moment to be a legacy project in maintenance mode. It is not *dead*, but it is indeed *done*.**

In practice, this means:

- We will not be adding new features or capabilities.
- We will not be changing Moment's API to be immutable.
- We will not be addressing tree shaking or bundle size issues.
- We will not be making *any* major changes (no version 3).
- We may choose to not fix bugs or behavioral quirks, especially if they are long-standing known issues.

## python tutorial with a lesson on each page

`py` `guide` `editorial` `ref`

[一页 Python](http://damiantgordon.com/PythonMonday/)

一个英文的 Python 初学者教程，特点是每一讲的讲义都只有一页 A4 纸。

---

http://damiantgordon.com/PythonMonday/PythonMonday-1-70.pdf

## programming in the future wont be way of today

`dev` `view`

本周话题：未来人人开发软件，几乎没人编码

现在，少儿编程培训班很流行，一到周末，家长们就送孩子去学计算机。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092805.jpg)

虽然我很赞成从小学习计算机，但总感到有点疑惑：编程正变得越来越容易，门槛越来越低，小朋友们真有必要牺牲周末的睡眠和体育时间，专门去学编程语言（比如 Python）吗？

上个世纪要当程序员，你必须懂汇编语言。到了如今，编程几乎已经没有门槛了，大多数人一天内就能学会，怎么写一个简单的网页 JavaScript 脚本。那么，你告诉我，未来会怎样？

再过 15 年或 20 年，等到现在的小孩进入就业市场，编程可能已经变得极其傻瓜化、智能化，也许只需要动动嘴，说出你想要什么程序，人工智能就自动生成了代码。

那时还会有程序员，但是人数应该很少，而且只负责编写底层代码，就像今天的汇编语言程序员非常少一样。因此我怀疑，孩子们没必要专门去学编程，因为未来可能根本不是今天这样编程。

大家知道吗，世界上用户最多的编程工具是什么软件？

答案是 Excel。无数财务人员、管理人员、销售人员都在用它，解决各种问题，尽管他们根本不懂编程。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092806.jpg)

我觉得，这就是未来编程工具的趋势，你不需要或者只需要懂一点点代码，就能做出软件，解决你的问题。最近正在兴起的"低代码"（low code）和"无代码"（no code）工具，正好呼应了这种趋势。未来人人都是软件工程师，都能够做出自己需要的软件，但是几乎没人知道如何编程。

## airbnb data visualization component library with d3 and react

`js` `design` `library`

[visx](https://airbnb.io/visx/)

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092401.jpg)

Airbnb 推出的一套数据可视化组件库，基于 D3 和 React。

## math expression of milliseconds in one day

`meme`

[一天的毫秒数](https://twitter.com/3blue1brown/status/1282480577036251136)

下面计算式的结果，就是一天的毫秒数。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092218.jpg)

这个式子的来历如下。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092219.jpg)

## sketchy text styler with ai

`app` `image` `design`

[Calligrapher.ai](https://www.calligrapher.ai/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100902.jpg)

一个在线工具，可以将英文输入变成手写体，并具有动画效果，提供 SVG 格式下载。上图是输入 Google 的效果。

## wikipedia items shown on map

`app` `info` `meme`

[WikiMap](https://wikimap.wiki/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102203.jpg)

在地图上显示维基百科的条目，非常酷。

## a letter to worrying indian youth being 4gotten

`society` `weather` `story` `ref`

[给印度年轻人的一封公开信](https://timesofindia.indiatimes.com/blogs/The-underage-optimist/the-4gotten-generation-an-open-letter-to-indias-youth-get-off-that-smartphone-it-can-destroy-you/)

印度年轻人的失业率极高，约 30％。与此同时，这些年轻人在 Facebook 和 Instagram 上花费了大量时间，印度人在 Facebook 和 Instagram 花费的时间在所有国家/地区排名第一。印度互联网广告业的收入却极低，广告主根本找不到对这些人有价值的广告，他们没有购买力。

最近，印度最著名的作家之一的[切坦-巴加特](https://en.wikipedia.org/wiki/Chetan_Bhagat)（Chetan Bhagat）在《印度时报》上发表了这封公开信，呼吁印度年轻人不要沉溺于手机。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102503.jpg)

亲爱的年轻朋友们，

这封公开信尽管在大报纸上发表，但是我不知道你是否会看到它。你们中的许多人都忙于使用手机，观看视频，玩视频游戏，与朋友聊天，在社交媒体上发表评论，或者只是滚动浏览名人新闻。你们顾不上阅读文章。

但是，如果你碰巧遇到了这篇文章，请完整读完它。这很重要，这关系到你的生活。你正在手机上浪费生命。

你们是印度历史上第一代可以使用智能手机和廉价数据流量的人。你们每天在手机上花费大量时间，对于年轻人来说，每天平均达到 5 到 7 个小时。

五小时是你每天清醒时间的三分之一。就像香烟或其他毒品一样，这种手机成瘾正在吞噬你生命的一部分，损害你的职业前景，并弄乱你的大脑。如果这样下去，整个一代印度年轻人将成为被 4G 毁掉的一代人，这一代人全都沉迷于 4G，他们的生活毫无目标，对国家一无所知。

首先，手机成瘾绝对浪费时间，这些时间本可以用于生活中更具生产力的事物。想象一下，每天从手机上节省三个小时，花在任何其他事情上，比如健身，学习技能，找工作，开办企业。如果你始终如一地这样做，它将带你到何处。

第二，手机成瘾会使大脑变钝。当你观看垃圾时，大脑会放松并且运转较少，你很快将变得缺乏逻辑思考、推理或争论的能力。你将不再看到不同的观点，不再能处理不同的问题、评估利弊或做出正确的决定。

由于大脑麻木，你会变得被情绪主导，出现两极分化的情绪，对名人或政客强烈狂热或强烈仇恨。一代人都变得情绪化，失去理性。

最后，连续三个小时以上玩手机，消磨你的动力和精力。生活中的成功来自于设定目标，保持动力并为实现目标而努力。但是，看着手机屏幕会让你失去动力，每天划着屏幕消磨时间。

年轻人将决定印度的未来。想象一下，让印度独立的那一代年轻人，他们关心国家问题，为解放印度而战。今天，年轻人真的在乎影响国家命运的事情吗？还是更在乎轰动的新闻，忙于对娱乐性事件或疯狂性事情做出情绪性反应？

当务之急是使印度的经济再次增长。中国比我们富裕五倍。请在互联网上搜一下中国城市的照片。为了让印度也这样发展，我们必须做很多事情。我们应该集中精力发展经济，还是继续对那些宗教广告表达愤怒？你应该专注于自己的职业，还是应该将时间浪费在永无止境的印度教－穆斯林的历史问题上？你想过上幸福的生活，还是希望搞清楚宝莱坞明星的各种混乱新闻？

你，今天的年轻人，将决定这些问题的答案。没有其他人会为你做这件事，你必须对自己和这个国家的命运负责。印度的贫穷和强烈的民族情绪并不值得自豪，你们的目标应该是让印度和你自己变得富有而谦虚。放下你的手机，将你的思想投入到那些富有成效和创造力的事情中，为自己的生活和国家做出改变。

你们应该使用 4G 成为印度领先的一代人，而不要最终成为被 4G 毁掉的一代人。

爱你们的，

切坦-巴加特

---

### The 4Gotten generation: An open letter to India's youth: Get off that smartphone. It can destroy you

October 24, 2020, 7:28 AM IST

Dear friends,

I don't know if this letter will even reach you, despite being published in a big newspaper. Many of you are so busy with your phones, watching videos, playing video games, chatting with your friends, commenting on social media, or just scrolling through the feeds of beautiful celebrities, reading an article falls way down on the priority list.

However, if you do happen to chance on this, please read this fully. This is important and this is about your life. You are wasting your life on your phone. Yes, you are the first young generation in India's history that has access to smartphones and cheap data, and you are spending hours on it, every day.

Check your screen time, which often averages 5-7 hours a day for young people. Retired or established people can spend so many hours on their devices. A young person, who has to build his/ her life, just can't.

![](https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2020/10/4GGeneration.jpg)

Chad Crowe

Five hours is one-third of your productive waking hours, or one-third of your life. Like cigarettes or other drugs, this phone addiction is eating away a part of your life. It's damaging your career prospects and messing up your brain. If it stays this way, your entire generation will become a 4Gotten generation, an entire generation addicted to 4G, aimless in their life and clueless about the nation.

These are the top three negative effects of this phone addiction.

Number one, of course, is the absolute waste of time, which could be utilised on more productive things in life. Imagine saving three hours a day from your phone, and spending it on anything -- fitness, learning a skill, studying more, a more intense job search, opening a business. Imagine if you did this consistently, where it would take you.

Two, watching mindless stuff dulls your cognitive brain. Our brain has two areas -- cognitive and emotional. A good mind is where both work well. When you watch junk, the cognitive brain disengages and is used less. You soon lack the ability to think, reason or argue something logically. You can no longer see different points of view, process multiple scenarios, evaluate pros and cons or make the right decisions.

You function with your emotional brain alone as your cognitive brain is numb. The constant anger on social media, the polarisation, the intense fandom and intense hate for celebrities or politicians, the popularity of certain screaming TV anchors all point to a generation where the emotional brain is in control, and the reasoning mind is not engaged.

People who work only with an emotional brain don't do well in life. The only way out -- stop numbing your brain and engage your mind in more productive things.

Three, constant hours on the screen kill your motivation and energy. Success in life comes from setting goals, staying motivated and working hard towards your goals. However, watching a screen makes us lazy. Deep down, a fear of failure sets in as you're not sure if you can put in the work anymore.

To cope, you try to find a reason why you can't find success in life. You try to find an enemy -- bad current politicians, bad past politicians, Muslims, Bollywood nepotism, rich people, famous people, any villain to be made responsible for your life not being what it could be. Yes, the system is unfair and rigged. However, wasting time venting on social media won't help you. Working on yourself will.

Stop complaining. Start creating. Create a better life for yourself, and create a better person. Are you doing your maximum? Are you working as hard as you possibly can? Keep that wretched phone away until you make something of your life. Winners find a way out of the unfairness. You can too.

Unlike hard drugs, 4G phones are legal. Kids can keep one in their pocket. The phone is also immensely useful -- for information, shopping or online classes. It can be used to grow and learn. But it can also literally destroy a young person's life, and even an entire generation.

For it's up to the youth to take India where they want to take it. Imagine the generation that got us Independence. How cool were they? They were out there, fighting to make India free. I still remember the Mandal Commission protests, or the 2011 Anna protests. The youth cared about national issues. Today, does the youth actually care about what truly impacts us? Or do they emotionally react to news based on how sensational, entertaining or crazy it is?

The super important, urgent priority is to make our economy grow again. China is five times richer than us. Google pictures of Chinese cities on the Internet. We have to do so much to get there. Should we focus on that? Or should we outrage over harmless ads that show an inter-religious couple? Should you focus on your career, or should you waste your time on never ending historical Hindu-Muslim issues? You want to build a good life or solve Bollywood conspiracies?

You, the youth of today, will decide the answers to these questions. No leader, no actor, no celebrity will do it for you. Take yourself and this country where you want it to go. Don't aim to make India poor and proud. Aim to make India and yourself rich and humble. Get off that stupid phone, engage your mind in productive and creative things and make something of your life and country.

Be the generation that 4Ges India ahead. Don't end up as the 4Gotten generation.

Love,

Chetan Bhagat

## google made a design update resulting in confusing app icons

`design` `meme` `ref`

[谷歌 App 的新图标](https://twitter.com/danidonovan/status/1322356167063031814)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110101.jpg)

谷歌最近将旗下 App 的图标，全部改成统一的色彩风格。很多用户抱怨，新图标的配色完全一样，简直是一场灾难，根本分不清谁是谁（上图）。强烈的颜色压倒了其他信息。

原来的图标明明更易辨识，更有个性（下图是对比），结果上层一拍脑袋，一夜之间就都消失了。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110102.jpg)

现在一堆图标里面找一个 App，成了一件有难度的事情。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110103.jpg)

## photoshop applied frontier ai into lastest filter pack

`app` `image`

[Photoshop 的 AI 滤镜](https://www.jiqizhixin.com/articles/2020-10-23-8)（中文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110705.jpg)

Photoshop 22.0 版推出了一个新的滤镜包----Neural Filters，实现了很多 AI 论文的研究成果，包括老照片上色、换表情、修改年龄、提升画质、普通图像一键变梵高风格等。

## apple big sur design changes

`design` `ref`

Big Sur

本周，苹果公司发布了 macOS 的新版本 Big Sur，值得关注的新闻真不少。

[UI 比较](https://www.andrewdenty.com/blog/2020/07/01/a-visual-comparison-of-macos-catalina-and-big-sur.html)

与 上一个版本 Catalina 相比，Big Sur 明显更平面化，减少了对比度和阴影，颜色也更活泼。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111406.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111405.jpg)

## fourier transformation interative explanation

`algorithms` `guide` `editorial` `ref`

[傅立叶变换的交互式介绍](http://www.jezzamon.com/fourier/index.html)（英文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111501.jpg)

通过一系列动画，解释什么是傅立叶变换。

## the tao of programming paired with chinese

`dev` `literary` `quote` `ref`

[《编程之道》中英双语版](https://github.com/yikeke/tao-of-programming)

美国资深程序员 Geoffrey James 在 1987 年写了《编程之道》（The Tao of Programming），曾一度成为美国程序员圈的文化热点，书中的佳句和故事被大家津津乐道。（[@yikeke](https://github.com/ruanyf/weekly/issues/1513)  投稿）

## photo competition winner in 2020

`art`

2020 年度照片

2020 年即将结束，各种年度照片的评选也纷纷揭晓。

[年度特写摄影比赛](https://www.theatlantic.com/photo/2020/11/winners-close-up-photographer-year/617070/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111303.jpg)

冬日的清晨，蘑菇的菌盖上结满了霜。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111304.jpg)

一只黑蚂蚁正在搬运飞蛾的卵。

[天气摄影比赛](https://www.rmets.org/wpoty-2020-shortlist)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111305.jpg)

孟加拉国的严重干旱。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111306.jpg)

贝加尔湖的冰面在阳光下，反射宝石般的颜色。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111308.jpg)

克罗地亚城市上方锅子倒扣般的云。

## overview summary of css used on a site

`css` `info`

[Chrome 浏览器的 CSS 概览面板](https://umaar.com/dev-tips/240-css-overview-improved/)（英文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111905.jpg)

Chrome 浏览器引入了一项试验性功能，在开发者工具里面提供 CSS 样式表的概况统计。

## floating ui component library for popups staying in view

`js` `design` `library`

[Popper](https://popper.js.org/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111702.jpg)

一个工具提示和弹出框的 JS 库。

---

https://floating-ui.com/

## minecraft with webgl and wasm

`game` `misc` `ref`

https://mc.js.cool/

---

https://b.mc.js.cool/

https://g.mc.js.cool/

## cross platform bookmark management app raindrop

`app` `feed`

[Raindrop](https://raindrop.io/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111810.jpg)

一个跨平台的网络书签管理器。

## perl tutorial in 150 minutes

`dev` `guide` `editorial`

[150 分钟学会 Perl 语言](https://qntm.org/perl_en)（英文）

这篇 Perl 教程写过那些不想读官方文档的人，目标是写得尽量短，但又不会太短，包括了足够的学习内容。

---

https://qntm.org/perl

https://qntm.org/perl_cn

## js13k games competition 2020 top 10 winners

`game` `design` `ref`

[2020 年度 JS13K Games 竞赛](https://github.blog/2020-10-11-top-ten-games-from-the-js13k-2020-competition/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111906.jpg)

JS13K Games 竞赛要求使用 JavaScript 语言，写一个不超过 13KB 的 HTML5 游戏。一共有 220 多个作品参赛，这里是前 10 名。大家可以去玩一下，效果非常惊艳。

---

https://js13kgames.com/2020/games

---

### Ninja vs. Evilcorp

[Ninja vs EVILCORP](https://js13kgames.com/entries/ninja-vs-evilcorp) is a platformer inspired by games like [Super Meat Boy](https://store.steampowered.com/app/40800/Super_Meat_Boy/) and [Stealth B\*$#@rd Deluxe](https://store.steampowered.com/app/209190/Stealth_Bastard_Deluxe/). Use your ninja skills to scale the tower and find the evil plans, but be careful to avoid the security cameras and guards.

[View source](https://github.com/remvst/ninja) [Play](https://js13kgames.com/games/ninja-vs-evilcorp/index.html)

_"This game is amazingly good! So smooth! I love the motion blur, the cloth simulation, the raycasting view cones for security camera, the awesome levels, everything!"_

### Edge Not Found

[Edge Not Found](https://js13kgames.com/entries/edge-not-found) is a Sokoban-style game with more than 20 puzzles set on an infinitely repeating grid.

[View source](https://github.com/Auroriax/js13k-2020) [Play](https://js13kgames.com/games/edge-not-found/index.html)

_"A unique concept for a game that plays on the 404 them well."_

### CHOCH

You play as [CHOCH](https://js13kgames.com/entries/choch), a little web crawler on the hunt for a missing page. Navigate the server, and avoid the elaborate intrusion prevention systems in place, and you'll be 200 OK.

[View source](https://github.com/kostik1337/CHOCH) [Play](https://js13kgames.com/games/choch/index.html)

_"Excellent visual effect, game character, and the background music! Loves the old CRT and plasma effect!"_

### Track not found?!

In [Track Not Found?!](https://js13kgames.com/entries/track-not-found), the train has to cross the river, but you'll have to play with dimensions, perspectives, and optical illusions to actually make it.

[View source](https://github.com/xem/track-not-found) [Play](https://js13kgames.com/games/track-not-found/index.html)

_"What an innovative game! Brilliant idea!"_

### Stolen Sword

Overcome the demons, and reclaim the [Stolen Sword](https://js13kgames.com/entries/stolen-sword) by dragging, jumping, or slashing on your desktop or mobile device.

[View source](https://github.com/chiaogu/stolen-sword) [Play](https://js13kgames.com/games/stolen-sword/index.html)

_"\*\*Amazing work. Runs smooth, animations are superb, environment looks awesome and it plays well on mobile too. "_

### The Last Spartan

[The Last Spartan](https://js13kgames.com/entries/the-last-spartan) is an arcade hack 'n' slash survival game set in the procedurally generated battlefields of ancient Sparta, 404 B.C.

[View source](https://github.com/ferronsays/js13k-TheLastSpartan) [Play](https://js13kgames.com/games/the-last-spartan/index.html)

### FOURFOLD

[FOURFOLD](https://js13kgames.com/entries/fourfold) is a fun-filled puzzle game with very satisfying and therapeutic audio.

[View source](https://github.com/rottencandy/js13k2020) [Play](https://js13kgames.com/games/fourfold/index.html)

_"**A great puzzler, with its design creating a lot of neat little red herrings for the solution.**"_

### I want to Google the Game

Point your browser (literally) to the search engine and navigate obstacles, like paywalls and dark patterns as you search for the game.

[View source](https://github.com/mvasilkov/js13k2020) [Play](https://js13kgames.com/games/i-want-to-google-the-game/index.html)

_"This short-but-sweet game has it all: some music to set the mood, snappy controls, and thematically appropriate visual gags to make the experience worthwhile."_

### Highway 404

Survive [Highway 404](https://js13kgames.com/entries/highway-404), which is a [Spyhunter](https://www.youtube.com/watch?v=93ds1VldZGI)-style game featuring your favorite HTTP status codes. Yup, there's even a 418 -- Teapot not Found!

[View source](https://github.com/herebefrogs/highway-404) [Play](https://js13kgames.com/games/highway-404/index.html)

_"Excellent integration of theme and gameplay -- controls are snappy and the gameplay loop is solid."_

### MINIPUNK

The evil 404 Megacorp threatens to take over the internet. Only you can stop them in this short 3D action game.

[View source](https://github.com/codyebberson/js13k-minipunk) [Play](https://js13kgames.com/games/minipunk/index.html)

_"Nice! I like the neon drenched cyber punk aesthetics, it works really well."_

### databases are optional for light softwares

`dev` `quote`

如果数据不多，最好避免使用数据库，纯文本文件或数据存储在内存中就可以了。数据库确实有一些优势，比如结构化数据、文件锁定、原子性操作等等，但是会让软件变得沉重。

-- [《追求轻盈的软件》](https://www.arp242.net/stupid-light.html)

### the programming guideline behind awkward uppercases

`dev` `quote` `retro`

当年，微软规定的编码风格是，（变量名里面）2 个或 3 个字母的缩写词必须全部大写，4 个或 4 个以上字母的缩写词必须首字母大写。

-- [Chris Wilson](https://twitter.com/brendaneich/status/1316377408027594753)（前微软员工）回答为什么 XMLHttpRequest 会有如此奇葩的大小写组合。

## nobody ever got fired for choosing java

`dev` `quote` `story`

本周话题：Slack 被收购，以及企业的技术选型

Slack 是一个非常优秀的团队通信协作软件，如果你没用过，我很推荐试试看。

它在全世界有众多的用户，去年的收入是 8.33 亿美元。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120807.jpg)

上周，它把自己卖给了 Salesforce，售价高达 277 亿美元（约 1800 亿人民币）。从此，Slack 不再作为独立公司运行，而成为 Salesforce 的一个部门。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120808.jpg)

这其实是一件有点奇怪的事情。Slack 的发展势头非常好，疫情期间正流行远程办公，它却在这时选择不当独角兽了，套现离场，这是为什么？

[最主要的原因](https://mattstoller.substack.com/p/an-economy-of-godzillas-salesforce)大概是，它有一个强劲的对手 Microsoft Teams。这是微软模仿 Slack 推出的团队协作软件，可以跟 Office 绑在一起使用，Slack 感到极大的竞争压力。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120809.jpg)

Teams 是 2016 年 10 月发布的，到现在的四年间，用户从零变成了 1.15 亿。同样这段时间，Slack 的用户从 400 万增加到 1200 万。也就是说，Teams 的增长速度大概是 Slack 的十几倍！

这其实很容易理解。企业软件的背后有没有巨头支持，销售结果是完全不一样的。两个软件的功能完全相同，一家出自创业公司，另一家背后是微软，你说企业会选择谁的产品？

以前有一种说法，第一线程序员可以自由选择软件工具，然后"自下而上"推动整个企业采用，我也曾经信以为真。但是，这种想法是不现实的，  第一线程序员影响不了技术选型和采购决策，而决策者害怕承担决策错误的责任。  你选择了一个小软件，万一没有很好地支持业务，或者软件本身有缺陷，你是要负责的。

软件业有一句名言，"没人因为选择 Java 而被开除"。  选择有大公司支持的技术，可以得到某种保证。那些技术可以不先进、不完美，甚至很乏味，但是它能保证得到积极维护和开发，具有庞大的生态系统和社区，并已经在大型业务环境经受了实战考验。企业就喜欢这样的技术，可以减少技术选型的风险，万一出事就不是决策者的责任。

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120810.jpg)

微软在 Teams 上投入重金，并且还有庞大的销售部门在推销，Slack 怎么可能竞争得过！并非巧合的是，Slack 选择卖身的 Salesforces，技术能力也许不属于世界最强之列，但一定是世界上销售能力最强的软件公司之一。

顺便说一下，前端的技术选型也是如此。企业选择不知名的 JS 框架是有风险的，可以预言，最终赢的还是 React。它是世界排名第一的前端框架，背后有 Facebook 的支持，所以"没人因为选择 React 而被开除"。

## 20 controversial programming opinions on stack overflow

`dev` `view`

[20 个有争议的编程观点](https://programmers.blogoverflow.com/2012/08/20-controversial-programming-opinions/)（英文）

本文总结了 StackOverflow 上面 20 个最有争议的编程观点，比如"对于优秀的软件设计，使用设计模式弊大于利"。

---

August 29, 2012 by [Yannis Rizos](). [109 comments]()

One of the very first ideas we had for this blog was to convert some of the wonderful gems of the early era of our site, the undisciplined period, to blog posts. Questions that were once enthusiastically received by the community, but no longer fit Programmer's scope.

The first deleted question I've chosen is [Jon Skeet's](http://programmers.stackexchange.com/users/8958/jon-skeet) "What's your most controversial programming opinion?" question (available only to 10K+ users, sorry), a +391 scored question that was originally asked on Stack Overflow on January 2, 2009. What follows are twenty of the highest voted answers, in random order...

1.  Programmers who don't code in their spare time for fun will never become as good as those that do.

    I think even the smartest and most talented people will never become truly good programmers unless they treat it as more than a job. Meaning that they do little projects on the side, or just mess with lots of different languages and ideas in their spare time.

    _by rustyshelf_

2.  Unit testing won't help you write good code.

    The only reason to have Unit tests is to make sure that code that already works doesn't break. Writing tests first, or writing code to the tests is ridiculous. If you write to the tests before the code, you won't even know what the edge cases are. You could have code that passes the tests but still fails in unforeseen circumstances. And furthermore, good developers will keep cohesion low, which will make the addition of new code unlikely to cause problems with existing stuff.

    _by Chad Okere_

3.  The only "best practice" you should be using all the time is "Use Your Brain".

    Too many people jumping on too many bandwagons and trying to force methods, patterns, frameworks, etc. onto things that don't warrant them. Just because something is new, or because someone respected has an opinion, doesn't mean it fits all.

    _by Steven Robbins_

4.  Most comments in code are in fact a pernicious form of code duplication.

    We spend most of our time maintaining code written by others (or ourselves) and poor, incorrect, outdated, misleading comments must be near the top of the list of most annoying artifacts in code. I think eventually many people just blank them out, especially those flowerbox monstrosities. Much better to concentrate on making the code readable, refactoring as necessary, and minimising idioms and quirkiness. On the other hand, many courses teach that comments are very nearly more important than the code itself, leading to the this next line adds one to invoiceTotal style of commenting.

    _by [Ed Guiness](http://programmers.stackexchange.com/users/2381/ed-guiness)_

5.  "Googling it" is okay!

    Yes, I know it offends some people out there that their years of intense memorization and/or glorious stacks of programming books are starting to fall by the wayside to a resource that anyone can access within seconds, but you shouldn't hold that against people that use it. Too often I hear googling answers to problems the result of criticism, and it really is without sense. First of all, it must be conceded that everyone needs materials to reference. You don't know everything and you will need to look things up. Conceding that, does it really matter where you got the information? Does it matter if you looked it up in a book, looked it up on Google, or heard it from a talking frog that you hallucinated? No. A right answer is a right answer. What is important is that you understand the material, use it as the means to an end of a successful programming solution, and the client/your employer is happy with the results.

    _by PhoenixRedeemer_

6.  Not all programmers are created equal.

    Quite often managers think that DeveloperA == DeveloperB simply because they have same level of experience and so on. In actual fact, the performance of one developer can be 10x or even 100x that of another. It's politically risky to talk about it, but sometimes I feel like pointing out that, even though several team members may appear to be of equal skill, it's not always the case. I have even seen cases where lead developers were 'beyond hope' and junior devs did all the actual work -- I made sure they got the credit, though.

    _by Dmitri Nesteruk_

7.  I fail to understand why people think that Java is absolutely the best "first" programming language to be taught in universities.

    For one, I believe that first programming language should be such that it highlights the need to learn control flow and variables, not objects and syntax. For another, I believe that people who have not had experience in debugging memory leaks in C / C++ cannot fully appreciate what Java brings to the table. Also the natural progression should be from "how can I do this" to "how can I find the library which does that" and not the other way round.

    _by Learning_

8.  If you only know one language, no matter how well you know it, you're not a great programmer.

    There seems to be an attitude that says once you're really good at C# or Java or whatever other language you started out learning then that's all you need. I don't believe it- every language I have ever learned has taught me something new about programming that I have been able to bring back into my work with all the others. I think that anyone who restricts themselves to one language will never be as good as they could be. It also indicates to me a certain lack of inquistiveness and willingness to experiment that doesn't necessarily tally with the qualities I would expect to find in a really good programmer.

    _by [glenatron](http://programmers.stackexchange.com/users/4027/glenatron)_

9.  It's OK to write garbage code once in a while.

    Sometimes a quick and dirty piece of garbage code is all that is needed to fulfill a particular task. Patterns, ORMs, SRP, whatever... Throw up a console or web application, write some inline SQL (feels good), and blast out the requirement.

    _by [jfar](http://programmers.stackexchange.com/users/6101/jfar)_

10. Print statements are a valid way to debug code.

    I believe it is perfectly fine to debug your code by littering it with System.out.println (or whatever print statement works for your language). Often, this can be quicker than debugging, and you can compare printed outputs against other runs of the app. Just make sure to remove the print statements when you go to production (or better, turn them into logging statements).

    _by [David](http://programmers.stackexchange.com/users/58440/david)_

11. Your job is to put yourself out of work.

    When you're writing software for your employer, any software that you create is to be written in such a way that it can be picked up by any developer and understood with a minimal amount of effort. It is well designed, clearly and consistently written, formatted cleanly, documented where it needs to be, builds daily as expected, checked into the repository, and appropriately versioned. If you get hit by a bus, laid off, fired, or walk off the job, your employer should be able to replace you on a moment's notice, and the next guy could step into your role, pick up your code and be up and running within a week tops. If he or she can't do that, then you've failed miserably. Interestingly, I've found that having that goal has made me more valuable to my employers. The more I strive to be disposable, the more valuable I become to them.

    _by Mike Hofer_

12. Getters and Setters are highly overused.

    I've seen millions of people claiming that public fields are evil, so they make them private and provide getters and setters for all of them. I believe this is almost identical to making the fields public, maybe a bit different if you're using threads (but generally is not the case) or if your accessors have business/presentation logic (something 'strange' at least). I'm not in favor of public fields, but against making a getter/setter (or Property) for everyone of them, and then claiming that doing that is encapsulation or information hiding... ha!

    _by Pablo Fernandez_

13. SQL is code. Treat it as such.

    That is, just like your C#, Java, or other favorite object/procedure language, develop a formatting style that is readable and maintainable. I hate when I see sloppy free-formatted SQL code. If you scream when you see both styles of curly braces on a page, why or why don't you scream when you see free formatted SQL or SQL that obscures or obfuscates the JOIN condition?

    _by MustStayAnonymous_

14. UML diagrams are highly overrated.

    Of course there are useful diagrams e.g. class diagram for the Composite Pattern, but many UML diagrams have absolutely no value.

    _by Ludwig Wensauer_

15. Readability is the most important aspect of your code.

    Even more so than correctness. If it's readable, it's easy to fix. It's also easy to optimize, easy to change, easy to understand. And hopefully other developers can learn something from it too.

    _by [Craig P. Motlin](http://programmers.stackexchange.com/users/8731/craig-p-motlin)_

16. XML is highly overrated.

    I think too many jump onto the XML bandwagon before using their brains... XML for web stuff is great, as it's designed for it. Otherwise I think some problem definition and design thoughts should preempt any decision to use it.

    _by Over Rated_

17. Software development is just a job.

    I enjoy software development a lot. I've written a blog for the last few years on the subject. I've spent enough time on here to have >5000 reputation points. And I work in a start-up doing typically 60 hour weeks for much less money than I could get as a contractor because the team is fantastic and the work is interesting. But in the grand scheme of things, it is just a job. It ranks in importance below many things such as family, my girlfriend, friends, happiness etc., and below other things I'd rather be doing if I had an unlimited supply of cash such as riding motorbikes, sailing yachts, or snowboarding. I think sometimes a lot of developers forget that developing is just something that allows us to have the more important things in life (and to have them by doing something we enjoy) rather than being the end goal in itself.

    _by Greg Beech_

18. If you're a developer, you should be able to write code.

    I did quite a bit of interviewing last year, and for my part of the interview I was supposed to test the way people thought, and how they implemented simple-to-moderate algorithms on a white board. I'd initially started out with questions like:

    > Given that Pi can be estimated using the function 4 \* (1 -- 1/3 + 1/5 -- 1/7 + ...) with more terms giving greater accuracy, write a function that calculates Pi to an accuracy of 5 decimal places.

    It's a problem that should make you think, but shouldn't be out of reach to a seasoned developer (it can be answered in about 10 lines of C#). However, many of our (supposedly pre-screened by the agency) candidates couldn't even begin to answer it, or even explain how they might go about answering it. So after a while I started asking simpler questions like:

    > Given the area of a circle is given by Pi times the radius squared, write a function to calculate the area of a circle.

    Amazingly, more than half the candidates couldn't write this function in any language (I can read most popular languages so I let them use any language of their choice, including pseudo-code). We had "C# developers" who could not write this function in C#. I was surprised by this. I had always thought that developers should be able to write code. It seems that, nowadays, this is a controversial opinion. Certainly it is amongst interview candidates!

    _by Greg Beech_

19. Design patterns are hurting good design more than they're helping it.

    Software design, especially good software design is far too varied to be meaningfully captured in patterns, especially in the small number of patterns people can actually remember -- and they're far too abstract for people to really remember more than a handful. So they're not helping much. And on the other hand, far too many people become enamoured with the concept and try to apply patterns everywhere -- usually, in the resulting code you can't find the actual design between all the (completely meaningless) Singletons and Abstract Factories.

    _by Michael Borgwardt_

20. Less code is better than more!

    If the users say "that's it?", and your work remains invisible, it's done right. Glory can be found elsewhere.

    _by [Jas Panesar](http://programmers.stackexchange.com/users/51315/jas-panesar)_

What do you think? And more importantly, what's *your* most controversial programming opinion?

**Update**

A few more controversial programming opinions:

- [Hopefully More Controversial Programming Opinions](http://prog21.dadgum.com/149.html), by James Hague,
- [12 (Really) Controversial Programming Opinions](http://billthelizard.com/2012/09/12-really-controversial-programming.html), by Bill the Lizard.

## recaptcha auto solver by voice challenge with speech to text model

`dev` `theory` `app` `ref`

[buster](https://github.com/dessant/buster)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112706.jpg)

浏览器插件，使用语音识别完成 reCAPTCHA 验证码。

---

https://chrome.google.com/webstore/detail/mpbjkejclgfgadiemmefgebjfooflfhl

## regex to image with explanation

`app` `image` `editorial`

[RegExper](https://regexper.com/)

![](https://www.wangbase.com/blogimg/asset/202012/bg2020120108.jpg)

该网站可以将正则表达式转成解释图片。

## collection of this x does not exist sites

`app` `info` `ref`

[This X Does Not Exist](https://thisxdoesnotexist.com/)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020112204.jpg)

这个网站收集各种 AI 生成的仿真项目，比如不存在的人、不存在的猫、不存在的房间等等。

## mosaic remover for text based images

`dev` `theory`

[Depix](https://github.com/beurtschipper/Depix)

![](https://cdn.beekka.com/blogimg/asset/202012/bg2020120701.jpg)

发布图片时，很多人喜欢使用马赛克隐去敏感信息，这个工具可以将打马赛克的文字还原。所以，隐藏信息尽量不要使用马赛克，最好是覆盖掉。

## rss reader by substack

`app` `feed`

[Substack Reader](https://reader.substack.com/)

![](https://cdn.beekka.com/blogimg/asset/202012/bg2020121701.jpg)

Substack 刚刚发布的在线 RSS 阅读器。

## comments are apologies for not making the code self explanatory

`dev` `quote` `ref`

代码注释是一种道歉，为未选择更清晰的名称或更合理的参数而道歉，为代码无法维护而道歉，为不使用知名算法而道歉，为编写"聪明"代码而道歉，为没有良好的版本控制系统而道歉，为未完成代码编写工作而道歉，为留下漏洞或代码中的缺陷而道歉。

-- [Uncle Bob](https://critter.blog/2020/09/15/dont-comment-your-code-refactor-it/)

## 

`app` `info`

[BrowserTime](https://github.com/seanmiller802/BrowserTime)

![](https://cdn.beekka.com/blogimg/asset/202012/bg2020121707.jpg)

Chrome 浏览器的插件，显示一个仪表盘，分析你的浏览历史，显示你在哪些网站花费最多时间。

##

##

##

##

##

##

##
