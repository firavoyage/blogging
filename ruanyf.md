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
- `algorithms` steps of math calculation
- `library` resources
- `guide` tutorials
- `app` creators and viewers
- `game` diversions
- `retro` good old days
- `design` beauties
- `theory` insights
- `quote` aftertastes
- `meme` posts
- `weather` days and nights
- `career` endeavours
- `society` phenomena
- `story` stones from other hills
- `history` legacies
- `literary` masterpieces
- `view` thoughts
- `ref` ideas
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

## react js basic theoretical concepts

`js` `theory`

React - Basic Theoretical Concepts

React 官方关于 React 原始设计思想的解释。

https://github.com/reactjs/react-basic

---

### React - Basic Theoretical Concepts

This document is my attempt to formally explain my mental model of React. The intention is to describe this in terms of deductive reasoning that lead us to this design.

There may certainly be some premises that are debatable and the actual design of this example may have bugs and gaps. This is just the beginning of formalizing it. Feel free to send a pull request if you have a better idea of how to formalize it. The progression from simple -> complex should make sense along the way without too many library details shining through.

The actual implementation of React.js is full of pragmatic solutions, incremental steps, algorithmic optimizations, legacy code, debug tooling and things you need to make it actually useful. Those things are more fleeting, can change over time if it is valuable enough and have high enough priority. The actual implementation is much more difficult to reason about.

I like to have a simpler mental model that I can ground myself in.

### Transformation

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

### Abstraction

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

### Composition

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

### State

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

### Memoization

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

### Lists

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

### Continuations

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

### State Map

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

### Memoization Map

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

### Algebraic Effects

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

`app`

Cool Backgrounds

https://coolbackgrounds.io/

自动生成背景图片的工具网站，现在提供五种风格，每种都可以定制，看上去赏心悦目。

## algorithms and data structures in js with detailed explanation

`js` `algorithms` `guide` `library` `ref`

30 algorithms with readme file and links

https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md

## platformer maze game with webgl

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

`app` `retro` `design` `ref`

Google Reader 怀旧版

http://readerisdead.com/reader/view/

Google Reader 是谷歌的线上 RSS 阅读器，2013 年关闭。现在，有人复制了一个一模一样的，让大家体验一下当年的感觉。

## ruanyf weekly source

`career` `library` `weather`

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

`app` `ref`

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

`quote` `history` `meme`

杯子的背面写着"一亿人的选择不会错"。

杯子的正面表明这是 Flash 的广告。（推特@jenna）

## reading in spare time inspired me and made me a better programmer

`quote` `dev` `weather`

有一个诀窍，让我成为一个更好的程序员，那就是我常常休息，大量的休息，我的新想法都是在休息时产生的。

休息的时候，我阅读，大量阅读任何我有兴趣的内容，这样我才可能产生新想法。（推特@brucel）

## behind the microsoft solitaire game

`dev` `story` `career`

Windows 纸牌游戏的历史

https://www.filfre.net/2018/08/the-games-of-windows/

---

1988 年的夏天，一位名叫 Wes Cherry 的大学生在微软担任实习生。为了搞懂 Windows，他决定改写 Macintosh 电脑的一个纸牌游戏，写出一个 Windows 版本。根据 Cherry 本人的说法，他写的游戏代码"没有什么特别之处"，并不比其他纸牌游戏更好。对他来说，这个软件最特别之处仅仅在于，纸牌背面的图案由他的女友 Leslie Kooy 绘制。

被问到开发这个游戏最困难的是什么，他说是游戏胜利后纸牌不断弹跳的场景。

暑期实习结束时，他将自己的纸牌游戏放在一个微软内部的服务器上，然后又回到了大学。

几个月后，微软的一位产品经理发现了这个游戏。当时，微软已经开始寻找即将推出的 Windows 3.0 的内置游戏，他们决定把这个纸牌游戏放进去。对这个游戏进行了测试之后，他们让 Wes Cherry 解决发现的各种错误，报酬是一台全新的计算机。

1990 年 5 月，Windows 3.0 发布时，纸牌游戏包括在内。这个游戏很快就风靡全球，成为人们最常玩的电脑游戏，直到今天还是如此。微软很快就宣布，它是"最常用"的 Windows 应用程序。全世界办公室的咖啡时间和休息时间，都有人在玩这个游戏。1994 年，华盛顿邮报的一篇文章半开玩笑地说，这个游戏正在播下"美国资本主义崩溃"的种子。2007 年芬兰的一项研究发现，它是 36％的女性和 13％的男性最喜欢的游戏，没有其他任何游戏接近这些数字。

Wes Cherry 是上班时间在微软办公室开发这个游戏，因此知识产权属于微软。他创造了历史上最受欢迎的电脑游戏，但是除了一台免费电脑之外，他从来没有得到任何报酬。他说他不介意。他早已离开计算机行业，现在西雅图附近的 Vashon 岛拥有并经营一家苹果酒酿酒厂。

## writing tech docs in "f" style

`dev` `guide` `theory` `ref`

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

`meme`

死亡提醒

《乔布斯传》提到，古罗马时代，将军凯旋都会举行胜利大游行。为了提醒将军不可得意忘形、勿忘心存谦卑，背后总有仆人负责不断对他喊"人终有一死"。

现在有人做了一个推特账号 @death_reminder ，每天向你发一条死亡提醒。

## hand drawn style data visualization in 1985

`retro` `meme`

1985 年的数据可视化

https://medium.economist.com/data-visualisation-from-1987-to-today-65d0609c6017

---

1985 年个人 PC 刚刚诞生，那时报纸上的饼图都是手绘的。

## code to image creator for social sharing

`app`

Carbon

https://carbon.now.sh/

将代码保存成图片的开源服务，可以用来上传到社交媒体。

## tutorial, guide, explanation and reference, not just "documentation"

`dev` `guide` `theory` `ref`

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

`quote` `story` `meme`

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

`app`

Process On

https://www.processon.com/

---

免费在线作图，可以实时协作。ProcessOn 支持流程图、思维导图、原型图、UML、网络拓扑图、组织结构图等。（@wuzhenda\_ \_投稿）

## when programmers should consider retirement view

计算机科学家 Tim Bray 最近写了一篇博客，他觉得自己可能应该退休了。

https://www.tbray.org/ongoing/When/201x/2018/10/25/On-Retirement

他列出了下面几个理由。

1、好多个早晨，我想继续睡觉，而不是起床。

2、就算起床，我想做的第一件事，是去看新闻，而不是去工作。

3、夏天到了，我想待在自己的度假小屋。

4、工作时，我的强度依然很大，不比年青时差太多。但是，结束工作以后，我感到极累，有时候连说话的力气也没有。

5、我越来越想做一些自己感兴趣的东西。它们肯定不会带来钱，但我毫不在意。

我觉得，这几个特征也许可以作为测试标准，如果你也满足这几点，可能也到了应该考虑退休，去干一点其他事情的时候了。

说到退休，这个问题对于程序员尤其有现实意义。因为程序员的退休年龄要早于其他行业，可能早早就会满足上面特征。

为什么程序员退休比较早？原因很简单，程序员的工作强度大，技术更新快，几乎不可能像公务员那样，轻松悠闲得熬到六十几岁退休。程序员其实也是机器，而且是"被操得很猛"的机器。机器都有报废年限，一旦折旧完了，就要报废。使用强度越大，折旧越快，报废越早。普通汽车的折旧年限一般是十年，长途汽车的折旧年限就短得多。为什么很少看到高龄程序员，因为他们都被用到报废了。

年轻程序员应该对自己的人生有一个规划。你的编程技能具有经济价值的年限是很短的，不可能一直在第一线编程的。折旧差不多以后，你的人生角色就会发生变化，应该多想想下一步要做的事情。

## bus station waiting time survey fault view

等待时间悖论（英文）

http://jakevdp.github.io/blog/2018/09/13/waiting-time-paradox/

公共汽车的间隔时间为 10 分钟，那么平均等待时间应该为 5 分钟，但是如果进行抽样，你会发现抽样得到的平均时间为 10 分钟，这是为什么？简单说，原因就是等待时
间越长的人，越容易被抽样到。

## american freelancer stats

美国的自由职业者达到 5760 万，三个劳动力里面就有一个自由职业者。技术使得找工作变得更容易，64％的自由职业者在网上找工作。

https://www.upwork.com/press/2018/10/31/freelancing-in-america-2018/

## oi wiki guide library

OI-wiki

https://github.com/24OI/OI-wiki

收集编程竞赛的基础知识、常见题型、解题思路以及常用工具等内容。

## crash course education library

crushcourse.club

https://crashcourse.club/category

Crash Course 是一个 Youtube 的教育频道。B 站上面有很多翻译小组。他们组成了一个联盟防止翻译重复，并提供了索引。（@showerc 投稿）

## morning writing quote

许多有名的作家，都是每天早上安排 3-4 小时的写作，一天的其余时间进行散步、通信、午睡和其他智力要求较低的活动。

--《早晨写作》

https://www.gwern.net/Morning-writing

## money is of best use to buy time quote theory

金钱最有价值的用途就是购买时间。

-- 有人提到，自己已经有不少钱了，但还是拼命想赚更多的钱。一个网友做了上面的回应，钱的意义在于它可以换来更多时间，让你去做自己想做的事情。

https://news.ycombinator.com/item?id=18373002

---

First, realize that you're probably making at least double the median US income. If you have a house with no loan and that income, you're doing way, way, way better than average.
I see two possible paths forward.

The less likely is to read and internalize http://www.mrmoneymustache.com/2012/01/13/the-shockingly-sim... and realize how quickly you can reach financial independence at a reduced spending level (but one that still affords an amazing life). Buying time is the most valuable use of money, IMO.

The second is to stay miserable for a while, striving for something ambiguous yet out of reach, until you get older and this feeling fades.

Path #1 (or a variant) is probably healthier and happier.

## two people and a swimming pool artwork

大卫·霍克尼（David Hockney）1972 年的油画《两个人的游泳池》，11 月 15 日拍卖出了 9030 万美元，创下了还活着的艺术家的最高价格。

http://www.latimes.com/la-et-em-david-hockney-painting-20181116-story.html

## horizonal kanban ui design

水平看板（英文）

http://philippe.bourgau.net/vertical-kanban-board-setup/

看板（kanban）是管理 issue 的流行方式，一般的看板是垂直的。本文提出，这是因为日本文字是直排的，而看板是日本人发明的，西方文字是横排的，所以看板应该改成水平。

## photoshop web app

Photopea

https://www.photopea.com/

在线图像编辑器，免费，可以替代 PhotoShop 的一部分功能。

## benefits of british measurement system story

英制度量衡的便利之处

https://news.ycombinator.com/item?id=18473014

英美使用英制度量衡，而不是公制度量衡。这种度量衡有它的便利之处。

首先，英制度量衡采用十二进制。1 英尺等于 12 英寸。十二进制的方便在于，它可以很容易地四等分、三等分和二等分；十进制只能二等分。另外，1 英寸（2.54 厘米）大约等于成人大拇指的宽度，用起来也非常方便。

其次，表示温度的华氏度比摄氏度更便于使用。100 华氏度（37.8 摄氏度）等于人的体温。所以，0 华氏度（-17.8 摄氏度）表示非常冷的天气，100 华氏度表示很热的天气，50 华氏度表示需要穿毛衣的天气。另外，水在 212°F 沸腾，在 32°F 时结冰，之间有 180 度，又是一个 12 的倍数。

## silicon valley salary decrease story

除了软件工程师，加州的工资都在下降

https://www.mercurynews.com/2018/11/18/silicon-valley-wages-have-dropped-for-all-except-highest-paying-jobs-report/

美国的经济正处在繁荣期，失业率是多年来最低的。但是很难相信，除了软件工程师，加州其他工作岗位的工资竟然不如 1997 年的水平。一项研究发现，调整通货膨胀以后，过去 20 年，软件工程师的工资增长了 32%，而普通加州人的工资下降了 12％～ 14％。那些低收入和中等收入工作的工人，比如教师和消防员，保姆和厨师，工资都在下降。

不仅工资水平在下降，而且低工资工人的比例在过去 20 年增长了 25％。中高薪的工作岗位越来越少。

但是，过去 20 年加州的 GDP 一直在快速增长，人均 GDP 增加了 74％。比全国速度快了五倍多。这表明绝大多数财富都没有落入工人的口袋，谷歌和 Facebook 这样的大型科技公司在市场中占据主导地位，它们将更多的收入分配给投资者和一些顶级员工。

经济学家认为，加州经济不是沙漏型（两端大，中间小），而是正从梨型（下面大，上面小）变成图钉型：顶部在萎缩，底部在膨胀。

## pink color prison lowered violence rate story

贝克米勒粉红色

https://en.wikipedia.org/wiki/Baker-Miller_pink

1979 年，美国西雅图的海军监狱需要油漆房间。监狱的两位所长贝克和米勒，咨询心理学家亚历山大·绍斯（Alexander Schauss）。后者根据自己的研究，建议将监狱墙壁油漆为粉红色（#FF91AF），这种颜色有助于减少暴力和攻击。

监狱采纳了他的建议。因此，这种粉红色后来就被称为"贝克米勒粉红色"。根据海军后来的研究，这种颜色确实降低了监狱内的暴力行为。

## the essense of graphql quote

GraphQL 的本质是程序员想对 JSON 使用 SQL。

-- 推特@kellybyte

https://twitter.com/kellabyte/status/1059970357430341632

## employers steal employees quote

2012 年，美国的盗窃案总金额是 3.4 亿美元，但是同年雇员投诉雇主克扣工资、加班费短缺，并补发成功的总金额是 9.3 亿美元。雇主偷窃员工应得工资的现象非常普遍。

-- 《工资偷窃是最大的偷窃》

https://www.epi.org/publication/wage-theft-bigger-problem-forms-theft-workers/

## solitude renaissance story

媒体报道，50 岁以上的日本男性每四人就有一人独自生活，女性每七人就有一人独自生活。由于独居人口越来越多，日本开始推出"一人份"的服务，专门针对独自一人就餐、娱乐、旅行的消费者。

经营卡拉 OK 连锁店的"腰高公司"6 年前注意到，三成顾客独自来唱歌。公司于是推出"1 卡拉"包厢，专供独自唱歌的消费者使用，相当受消费者欢迎。日本一些电影院、拉面馆和主题公园也纷纷推出带隔板的单人座位，确保独自前来的消费者"个人空间"不受打扰。

可能有人看了上面的报道，会觉得这表示日本人很孤独。可是，我觉得"一人份"难道不是未来的趋势吗？人类以前没有这种条件，享受一个人的自由，现在互联网科技终于让我们可以一个人行动了。

以前，无论做什么，你都必须与其他人互动。现在不用了，互联网大大减轻了我们对他人的依赖：购物也好，娱乐也好，办事也好，手机点几下就可以了......至于孤独，这其实跟你是否一个人无关，有时候你待在人群里，也会感到强烈的孤独。科技使得普通人也有了独自行动的自由，即使远离人群，也能随时跟他人保持联系。

以后，"一人份"服务可能会越来越多，反倒是我们自己，太习惯了跟他人待在一起，忘了大多数事情你都可以一个人去做。

## redesigned gmail web app ui,programs seem awkward story

新版 Gmail 代码一瞥（英文）

https://medium.com/@boriscoder/peeking-under-the-hood-of-redesigned-gmail-dd84b532e0f5

新版的 Gmail 用谷歌自家的 Lighthouse 评估性能，100 分里面只得了 2 分。下载的脚本有 6MB，完全渲染需要 9 秒，其中一半代码可能根本用不到。有人分析了代码，发现过时的早期代码都还在。猜测由于过于复杂，现有团队可能没有能力升级底层，只做了一些样式的更新。

## minimalist programmer statement web app

极简主义软件工程师宣言（英文）

http://minifesto.org/

作者解释了什么是极简主义的态度开发软件。

## state of javascript 2018 story

2018 年 JavaScript 开发者调查（英文）

https://2018.stateofjs.com/

2018 年 JS 开发者的调查报告，主要是各种框架、工具的使用情况。

## javascript transcompiling languages library

可以编译成 JS 的语言列表

https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS

许多语言可以编译成 JavaScript，从而在浏览器运行，这张列表收集所有已经有编译工具的语言。提醒，这是一张很长的列表。

## influencers advertising industry history

网红经济

https://www.wired.com/story/pricey-war-influence-your-instagram-feed/

2017 年，洛蒂开了一家假睫毛公司。一位懂行的投资者跟她说，产品质量不重要，客户满意度也不重要，重要的是对消费者有影响力的网红，她应该付钱请 YouTube 和 Instagram 的网红谈论她的假睫毛。

洛蒂认为这个建议太夸张了，那些网红并不便宜，每人要收费 5 万到 7 万美元。这对创业公司来说是一大笔钱，而这些钱只是为了让那些网红的粉丝听到她公司的名字。她觉得不太值得，就没有支付。

但是，后来她发现，她太天真了，网红是推广新产品唯一有效的方法，没有办法绕过它。

网红是社交媒体上面有影响力的人。他们的影响力远远超出了人们的想象，很多行业的营销人员都发现网红能够带动销售。随着公司对社交媒体广告的热情，网红营销已经发展成为一个价值数十亿美元的行业。许多用户不会将网红视为付费代言人或销售人员，而是把他们当作值得信赖的专家或朋友。这就是为什么品牌愿意花这么多钱，以换取 Instagram 上面的曝光。

品牌通常会花费超过 60,000 美元换取一条社交媒体的视频介绍，或者 85,000 美元换取一次公开贬低竞争对手的产品。曝光不限于直接评论，还包括网红将产品放在他们的桌子上，或者放在他们后面的布景里面，任何可以巧妙地在屏幕上显示几秒钟的地方，都可以用来做广告。

桑德斯·肯尼迪是一个受欢迎的 YouTuber，拥有超过 20 万名订阅者。他接受了几千美元，条件是拍摄时将特定的饮料留在他的桌子上。他不知道这个品牌，但是助理告诉他，只需要确保饮料出现在桌上就可以了，并且不需要提到这个品牌。

对于带有产品的单张照片，Instagram 有百万粉丝的网红起价为 10,000 美元。YouTube 更贵，拥有 300 万订阅者的内容创建者通常每个视频收费至少 40,000 美元。如果该公司希望 YouTuber 对竞争对手的产品进行负面评价，则需要额外花费 10,000 美元到 30,000 美元以上。当然，费率随着网红的追随者数量而增加。

网红的报价有不断上涨的趋势。2016 年顶级网红的收费大约是 5,000 到 10,000 美元，现在他们的报价可能会"超过 100,000 美元"。

很多网红并没有披露，他们收到了赞助，发布的内容实际是推销。美国联邦贸易委员会提出，如果网红已收到了任何东西 - 无论是现金，免费产品还是其他东西 - 可能影响观众看待他们提及的品牌或产品，他们就必须披露。

## ikea decorative painting story

一张宜家装饰画的故事

https://petapixel.com/2018/11/20/the-story-behind-that-ikea-photo-of-amsterdam/

（原始网页将下面的故事拍成 15 分钟的纪录片，比文字更有意思，推荐观看。）

我家有一张宜家买来的装饰画《阿姆斯特丹街头》。

朋友问我，这张照片到底好看在哪里，看上去很普通的一张风景照，为什么全世界到处都有人买去，挂在自己的屋子里。我于是就很想搞清楚它背后的故事，宜家为什么会选中这张照片。

宜家网站显示，这张照片的作者是费尔南多（Fernando Bengoechea）。我查了这个摄影师，很不幸，他在 2004 年印度洋大海啸期间失踪了。然后，我设法联系了他的兄弟马塞洛，了解到失踪时他是纽约市最好的摄影师之一，曾为杂志工作。他走遍了世界各地，拍摄各种主题。

马塞洛把我介绍给室内设计师 Nate Berkus，他是费尔南多当时的男朋友，海啸期间，他们在一起。Berkus 说，这张照片是费尔南多为前男友阿夫卡米（ Ahmad Sardar Afkami）拍的。他把阿夫卡米的联系方式给了我，那是一位纽约的建筑师。

阿夫卡米回忆道，这张照片是在 1999 年 3 月拍摄的。他们一起去荷兰旅行，但是途中发生了争吵，费尔南多一人在阿姆斯特丹的街头散心，随手拍了一些照片，用它们向阿夫卡米道歉。

费尔南多在印度洋海啸中过世以后，他的所有未发表的照片作为遗物，都放在 Corbis.com 网站上出售。宜家就是在那里购买照片版权的。

最后，我找到了宜家瑞典总部的装饰画部门的负责人。我问他为什么选择这张照片，他说他们最主要考虑的是价格，这张照片非常非常便宜，这就是他们选择它的原因。

## toilet foot-lifting chair story

Squatty Potty

https://www.theguardian.com/news/2018/nov/30/bowel-movement-change-the-way-you-poo-squatty-potty-toilet

2011 年，Squatty Potty 作为新发明，进入美国市场。它是一款 7 英寸高的塑料凳子，让你坐在马桶上大便的时候，双脚踩在上面，使得你的膝盖高于臀部，更接近人类原始的排泄姿势。

据说，这种姿势可以展开你的结肠，加快排便过程，减轻腹胀，减少便秘和痔疮的发病。这款产品的美国销售量已经超过了 500 万个。

## the language you love is the language you complain about quote

只有两种计算机语言：一种是人们不停抱怨的语言，另一种是没人用的语言。

-- C++ 之父 Bjarne Stroustrup

## life as a program quote

每个人的一生就是一次程序运行。

-- 某网友的 ID

## programmers over crowded history

美国一个编程培训班的老板，写了一篇文章。他说自己很担忧。现在，那么多人学习编程，他的公司全靠培训赚钱，将来会不会程序员过剩？

https://www.forbes.com/sites/rajatbhageria/2017/09/10/is-learning-how-to-code-still-worth-it/

培训班的目的，就是让那些没有受过四年计算机教育的人，经过四个月的培训，找到一份软件开发的工作。某种程度上，这种做法是可行的，大量的程序员就是通过这种模式生产出来。

但是，人工智能正变得越来越强，终有一天，简单代码都会由计算机自已生成，低级程序员的需求将会大量减少。另一方面，云服务的兴起，使得很多任务不需要自己编程，可以购买云服务，这也减少了程序员的需求。

同时，由于不断的抽象和封装，应用层的软件开发正变得越来越简单，如果只是简单地遵循在线教程，就能编写软件，或者将一系列 API 混合在一起，就能做出一个服务，有必要向开发人员支付高额薪水吗？毕竟开发过程是那么简单。

他认为，学习编程是值得的，它可以帮助你理解世界。但是，梦想仅仅学会软件开发，就能解决你的人生问题是不现实的。"只是能够编写一个安卓程序，不会为你赢得竞争优势，也没法在这个超级饱和的科技世界里，获得自己的一席之地。这个世界里，每个想法都已由十位企业家在你前面完成了。"

由于其他行业不景气，大量年轻人正在转向软件业就业。但是，程序员的淘汰也很厉害，上车的人多，下车的人也多。大家应该对这一点有清醒的认识。

## indie game soli dev succeed story

一个人如何开发游戏《星露谷》（英文）

https://www.gq.com/story/stardew-valley-eric-barone-profile

畅销游戏《星露谷》（Stardew Valley）作者只有一个人埃里克·巴罗恩，从编码到美术音乐都靠自己。大学毕业后，他没找工作，而是待在公寓写了四年游戏。唯一收入是晚上打工，在电影院门口收电影票。

上线前，唯一测试就是女朋友玩了几天。如果卖不出去（绝大多数游戏的结局），四年就浪费了，幸好成功了。不过，这个游戏借鉴了任天堂的《牧场物语》，有人认为他抄袭了。

## retro game background images

80 年代的游戏背景图案

https://vgdensetsu.tumblr.com/post/179656817318/designing-2d-graphics-in-the-japanese-industry

上个世纪 80 年代，电脑游戏的图案一般先是手绘，然后再用数字转换仪转成像素图。

## sunlight sending app story

2006 年，两名美国学生完成了一个名为"发送阳光"的项目。如果手机发现，你的朋友在天气不好的地方，而你在天气很好的地方，那么手机就会提示你，拍一张照片发送给朋友，让他们振作起来。

后来，两人当中的 Mike Krieger 创建了 Instagram。

-- 《经济学人》

https://www.1843magazine.com/features/the-scientists-who-make-apps-addictive

## everyone is a reader retro history

前些日子，武侠小说泰斗金庸先生去世了。

他可能是影响最大的中国当代作家，几代人都是读他的武侠小说长大的。但是我认为，他很可能也是最后一个影响力这么大的作家。

以前没有那么多的娱乐方式，武侠小说是主要的消遣。我们常常是关灯以后，津津有味读到半夜，因为也没有其他事情可干。那个年代，电视台一到晚上 10 点，就会显示"今天的节目已经播放完毕，观众朋友们明天再见"。

到了今天，娱乐方式越来越多，小说已经变成了一种小众行为。大家都是在手机上玩游戏、看视频、发消息......读书的人只占一部分，而且比例会越来越小。金庸先生的武侠小说，要是现在写出来，我认为绝不可能有这么多读者。写得再好也不可能，以前是全民读书的年代，现在不是了。我印象中，全民阅读的小说，最早是金庸，后来是路遥的《平凡的世界》，再后来是《三体》，然后就没有了。为什么？因为《三体》出版以后，电脑游戏、互联网、智能手机开始普及了。

无独有偶，世界最畅销小说《哈利波特》也是在智能手机流行之前问世的。我认为，以后也不会有《哈利波特》那种级别的流行小说了。

通过小说对一代人产生影响，这种事情可能永久地结束了。以后，对一代人有影响的可能将是某个游戏、某个视频节目、某个网红。

## english grammar decoding guide theory

解密英语语法 （中文）

http://www.yinwang.org/blog-cn/2018/11/23/grammar

王垠老师的《解密计算机科学》还没写完，又开始写第二本书《解密英语语法》。发布第一章以后，第二天他又把这个计划取消了，"我曾经想过把这写成一本完整的语法书，可是后来发现似乎一篇文章足矣。"（@wblovezqy\_ \_投稿）

---

### 解谜英语语法

我发现很多人仍然在为语法的枯燥繁琐而头痛。市面上好像不存在一本深入本质的语法教材。语法对于我来说已经早就不是问题，所以我萌生了写这样一篇文章的念头，帮助那些正在为学习语法而痛苦挣扎的人们。

这篇文章里包含了一些我自己保留多年的关于英语学习的秘密。我曾经想过把这写成一本完整的语法书，可是后来发现似乎一篇文章足矣。

### 句子的核心地位

直到几百年前，各个不同大陆上的人还从来没见过面，他们的语言里却不约而同出现了同样的结构：句子。这似乎说明句子的出现是一种自然规律，必然结果，而不只是巧合。

句子是人类语言最核心的构造。为什么呢？因为人和人说话终究是为了一个目的：描述一件事。

这件事也许只有一个字：吃！

也许可以很长：昨天晚上在上海某路边餐厅吃的**鹅肝**，**是**我吃遍全世界**最好的**。

一个句子表达的就是一件事，或者叫一个"事件"。人与人交流，无非就是讲述一个个的事件。

许多人学英语，一来就背单词，背了很多单词，仍然写不出像样的句子来。只见树木不见森林，因为他们没有意识到句子才是最关键的部分。我们应该一开头就理解句子是什么，如何造出句子，而不是背单词。单词是树木，句子才是森林。

### 你需要的能力

所以掌握一门语言，基本就是要掌握句子。有了句子就有了一切。

掌握句子包括两种能力：

1. 能够迅速地**造出**正确的句子，准确地**表达**自己的意思。
2. 能够迅速地**分析**别人的句子，准确地**理解**别人的意思。

这两件事，一个是表达（发送），一个是理解（接收）。因为语言是沟通（或者叫"通讯"）的工具，所以它就只包含这两件事。

### 句子的本质

假设我们是原始人，还没有语言。我想告诉同伴"我吃苹果"这件事，该怎么表达呢？没有语言，那我可以先画个图嘛：

![](http://www.yinwang.org/images/i-eat-apple.png)

画图是很麻烦的，笔画太多不说，还可能有歧义。到后来，部落里的人聪明了一点，发明了"符号"这种东西，只需要几笔就能表示一个概念。他们给事物起了简单的符号名字，不再需要画图了。于是我们有了 I, apple 这样的词用来指代事物。有了 eat 这样的词，用来代表动作。所以画面变成这个样子：

![](http://www.yinwang.org/images/i-eat-apple-symbol.png)

后来干脆连框也不画了，直接写出这些符号来，这就是我们现在看到的"句子"：

> I eat apples.

注意，虽然没有了上面的框图，这句话其实隐含了这幅图。写这个句子的人假设阅读者能够从一串**符号**还原出一个**画面**（或者叫结构）来。

有些人不能理解别人的话，看书看不懂，就是没能从符号还原出结构来。很多语法书列举出千奇百怪的"组合情况"，为的只是帮助你从这串符号还原出结构来。在现代语言学和计算机科学里面，这个过程就叫做"语法分析"（parsing）。

### 动词是句子的核心

那么，你觉得"我吃苹果"这个事，里面最关键的部分是什么呢？是"我"，"苹果"，还是"吃"呢？

稍微想一下，你也许会发现，关键在于"吃"这个动作。因为那是我和苹果之间发生的**事件**。这句话是说"吃"这件事，而"我"或者"苹果"，只是"吃"的组成部分。

用 eat 这个词，你不但可以表达"我吃苹果"，还可以表达"他吃面条"，"猫吃老鼠"之类的很多事情。于是，聪明一点的人就把 eat 这个词提取出来，做成一个"模板"：

![](http://www.yinwang.org/images/eat-verb.png)

这个模板就是所谓"动词"。eat 这个动词给你留下两个空，填进去之后，左边的东西吃右边的。

句子是语言的核心，而动词就是句子的核心。动词是事件的关键，比如 eat。

> A eat B.

我们可以选择空格里的 A 或者 B 是什么。但不管怎么换，事情仍然是"吃"。为了描述方便，我们把 A 和 B 这两个空格叫做**参数**（parameter）。

这跟数学函数的参数（f(x) 里面那个 x）类似，也跟程序函数的参数类似。用数学或者程序的方式来表示这个句子，就是这样：

> eat(A, B)

其中 A 和 B，是动作 eat 的参数。我只是打个比方帮助你理解，当然我们不会这样写英语。如果你完全不懂数学或者编程，可以忽略这个比方。

动词决定了它可以有几个参数，它们可以在什么位置，参数可以是什么种类的成分。比如 eat，它可以有两个参数。这两个参数只能是某种"物体"。你不能放另一个动作（比如 walk）进去，也不能放一个形容词（比如 red）进去。这种动词对参数的约束，叫做参数的"类型"。

在这个例子里，eat 可以接受两个"名词"（noun），所以它的两个参数，类型都是 noun。

你可能注意到了，I eat apples 里面的"I"并不是名词，而是"代词"。我解释一下。我这里所说的"名词"，是泛指一切物体以及指代物体的名字。所以我叫做"名词"的东西，也包括了代词，比如 I, you, he, she, it。如果你回想一下代词的英文是 pronoun，就会意识到它和名词（noun）之间的关系。

![](http://www.yinwang.org/images/pronoun-def.png)

你会发现这种扩展的"名词"，会大大方便我们的理解。在本书中除非特别指明，所谓"名词"包括了代词，以及一切可以被作为名词使用的结构（比如从句，动名词）。

一个句子除了动词，好像就只剩下动词的参数了。动词对它的参数具有决定性的作用，动词就是句子的核心。准确理解一个动词"想要什么参数"，什么样的结构可以出现在参数的位置，就是造出正确句子的关键。

使用不同的动词可以造出不同的句子。所以要理解语法，你在应该把大部分精力放在各种各样的动词身上，而不是花几个月时间去背名词和形容词。我并不是说名词和形容词不重要，只是它们并不是核心或者骨架。

没有人会怪你不认识某种恐龙的名字，但如果你不能理解"I am not used to eating garbage food." 是什么意思，那你可能就有麻烦了。

### 具有三个参数的动词

现在举个复杂点的例子：

> Coffee **makes** me happy. （咖啡使我快乐）

这里的动词是 make。跟 eat 不大一样，make 可以接受三个参数：coffee, me, happy。它的模板可以表示为：

> A make B C\
> 意思是：A 使得 B 具有性质 C。

比如 Coffee makes me happy，其中 A 是  *coffee*，B 是  *me*，C 是  *happy*。

再来一个例子：

> I told you everything. （我告诉了你一切）

这里动词 tell 也有三个参数，它的模板是这样：

> A tell B C.\
> 意思是：A 告诉 B 一件事 C。

比如 I told you everything，其中 A 是  *I*，B 是  *you*，C 是  *everything*。

### 扯个淡：什么是宾补

说到这里我想扯个淡。初学者不知道什么是"宾补"的，可以跳过这一节，你不会损失什么。

在传统语法里，上面一节的  *A make B C*  和  *A tell B C*  被看做是不同的语法现象，前者被称为含有"宾语补足语"，后者含有"双宾语"。可是在我们的框架下，这两者都不过是"接受三个参数的动词"。你只需要熟悉  *A make B C*  和  *A tell B C*  是什么意思就可以了。

*A make B C*  里的 C 参数，其实就是传统语法叫做"宾语补足语"（宾补）的东西。然而跟传统语法不同，我不把它叫做"宾补"。这个成分没有任何特殊的名字和地位，而只是动词 make 的第三个参数。

有的动词可以有三个参数，有的动词只能有两个参数，有的动词只有一个参数。有的动词有时有两个参数，有时只有一个参数...... 就是这么简单，没有什么道理好讲，因为人们就是那么说话的。

人们约定俗成的说话方式，决定了 make 可以有三个参数，决定了这三者之间的关系：A 使得 B 变得 C。这就像数学的"定义"一样，是没有道理可讲的。你只需要多多练习，按照这个模板造句，知道它**具体**的意思就可以了。

模板"A make B C"，精确地决定了动词 make 可以产生的句型，定义了参数 A，B 和 C 之间的关系。你不需要把 C 叫做"宾补"就能明白这个句子在说什么。实际上，我认为"宾语补足语"，"补足语"这些术语，基本是子虚乌有的。它们来源于一种古板的观念，认为句子只有主谓宾三种成分，所以多出来一个东西，就只能叫做"补足语"了。他们没有意识到，有的动词可以有三个参数，就是这么简单。

### 如何造出正确的句子

我已经提到，对于人的语言能力，"造句"能力占了一半。很多人不知道复杂的长句是怎么造出来的，所以他们也很难看懂别人写的长句。

我并不是说一味追求长句是好事，正好相反。如果你能用短句表达出你的意思，就最好不要用长句。虽说如此，拥有造长句的"能力"是很重要的。这就像拥有制造核武器的能力是重要的，虽然我们可能永远不会用到核武器。

当然，长句不可能有核武器的难度。造长句其实挺容易。你先造出一个正确的短句，然后按照规则，一步步往上面添加成分，就可以逐渐"生成"一个长句。

这就像造一个房子，你首先打稳地基，用钢板造一个架子，然后往上面添砖加瓦。你可以自由地选择你想要的窗户的样式，瓦片的颜色，墙壁的材质，浴缸的形状...... 好像有点抽象了，我举个例子吧。

首先，我造一个最简单的句子。最简单的句子是什么呢？我们已经知道动词是句子的核心，有些动词自己就可以是一个句子。所以我们的第一个句子就是：

> eat.

它适用于这样的场景：你在碗里放上狗粮，然后对狗儿说："吃。" 当然，你体会到了，这句话缺乏一些爱意，或者你只是早上起来还比较迷糊，不想多说一个字，但它至少是一个正确的句子。

接下来，我们知道 eat 可以加上两个参数，所以我就给它两个参数：I 和 apples。

> **I** eat **apples**. （我吃苹果）

这个句子适用于这样的场景：别人问我："你一般吃什么水果呢？" 我说："我吃苹果。"

有点单调，所以我再加点东西上去。

> I eat **Fuji apples**. （我吃富士苹果）

Fuji 被我加在了 apples 前面，它给 apples 增加了一个"修饰"或者"限定"。它只能是富士苹果，而不是其它种类的苹果。

但我并不总是吃富士苹果，我有时不吃苹果。我想表达我只是"有时"吃富士苹果，所以句子又被我扩充了：

> I **sometimes** eat Fuji apples. （我有时吃富士苹果）

你觉得这个 sometimes 是在修饰（限制）句子的哪个部分呢？它在修饰"我"，"苹果"，还是"吃"？实际上，它是在限制"吃"这个动作发生的频率，所以它跟 eat 的关系紧密一些，也就是说它是在修饰 eat，而不是 I 或者 apples。

以此类推，我们可以把它发展得很长：

> **I** sometimes **eat** fresh Fuji **apples** from a nearby grocery store.

我有时候吃从附近杂货店买来的新鲜富士苹果。注意，虽然这句子挺长，但它的"骨架"仍然是 I eat apples.

我已经演示了一个长句是怎么"生成"的。先造一个短句，然后往上面添砖加瓦。正确的短句，按照规则加上一些成分，就成为正确的长句。从正确走向正确，这样你的语法就会一直是正确的。

当然，扩展句子的时候，你不能随意往上加东西，它们必须满足一定的规则才能正确的衔接。比如，你只能把 Fuji 放在 apple 前面，而不是后面，from 之类的词不可少。这就像造房子，你不能在该放窗户的地方放一道门，你不能用错配件，漏掉胶水。所谓语法，很多时候就是在告诉你这些部件要怎么样才能接的上，就跟做木工活一样。

### 如何理解句子

人与人交流的另一个部分就是"接收"。如果书上有很长一句话，你要怎么才能理解它呢？许多人看到长句就头痛，不知道该怎么办。这是因为他们不明白长句都是从短句扩展出来的，是有结构的。许多人理解长句失败的原因，在于他们总是从左到右，一个个的扫描单词。开头几个词感觉还认识，再多看几个词，就不知道是怎么回事了。

其实理解长句的方法，都隐含在了上一节介绍的造长句的方法里面。造句的时候我们先勾画出一个框架，然后往里面填修饰的成分。理解的时候如果有困难，我们可以用类似的办法。我们首先分析出句子的**主干**，把这个框架理解了，然后再把其它成分放回去，逐步把握整个句子的含义。

这个分析主干的过程，往往是"跳跃式"的，而不是"顺序式"的扫描单词。

比如之前的那个例子：

> **I** sometimes **eat** fresh Fuji **apples** from a local grocery store.

你需要跳过修饰的成分，分析出句子的主干是短句"I eat apples"。如果你觉得一下子找不到主干，那么你可以挨个找到"修饰成分"，把它们逐个删掉，最后留下来的就是主干了。

注意，主干"I eat apples" 本身就是一个语法正确的句子，它满足所有的语法规则。于是你理解了它在说"我吃苹果"。然后你返回去再看几遍，逐渐加上细节，知道是什么样的苹果，从哪里买来的，什么时候吃。

漏掉或者误解了细节，你可能会误解一部分意思，但抓住了主干，你就不会完全不理解这个句子在说什么。

再次强调，每一个复杂的长句，里面都藏着一个非常短的，语法正确的短句。理解长句的关键，就在于找到这个核心的短句。

如何获得识别修饰成分，找到主干短句的能力，也在于你对具体的语法规则的理解。

### 句子的树状结构

之前，我们的原始人画了这样一个图：

![](http://www.yinwang.org/images/i-eat-apple-symbol.png)

它表示这样一个英语句子：

> I eat apples.

很多人觉得后者是更简洁，更先进的方法。然而他们没有意识到，原始人的图片里，其实包含了关键而本质的东西。被转换成一串符号之后，里面的结构看不见了，反而需要费一些脑筋才能理解。这个简单的情况也许不能说明问题，等句子复杂起来之后，你就能体会到这一点。

从现代语言学，计算机自然语言处理（NLP）的观点看来，句子并不是一串符号，而是一个"树状"的结构。我们把这种树叫做"语法树"。

比如 I eat apples，其实表示的是下图这样的结构：

![](http://www.yinwang.org/images/i-eat-apple-tree.png)

你可以把这个图看成是一棵倒着长的树。你把屏幕旋转 180 度，就会看到一棵树。树干 eat 发出两个"分支"，连接着它的两个参数：I 和 apples。为了表达清晰，我用红色圆圈来表示动词，而用蓝色方形表示名词。

动词 eat 需要两个名词参数，我们给它 I 和 apples，就成了一个完整的句子。再次声明，我这里的"名词"，包括了像"I"这样的"代词"。

### 扩展一棵树

之前我们通过扩充 I eat apples 这句话，得到了一个逐渐变长的句子。现在有了"语法树"的概念，我们来重新演示一下这个扩充句子的过程，看看它对应的语法树是怎么变化的。

首先，我们给苹果加上"富士"（Fuji）的修饰：

> I eat **Fuji** apples.

Fuji 是对 apples 的修饰，或者说是它的"属性"，所以我们在树上把它和 apples 连在一起。

![](http://www.yinwang.org/images/i-eat-fuji-apples-tree.png)

对于这种"修饰"成分，我们用绿色方框来表示。它们通过灰色箭头指向它们所修饰的部分。

接着，我们加上一个时间修饰 sometimes：

> I **sometimes** eat Fuji apples.

由于 sometimes 是修饰 eat 动作的频率，我们把它指向 eat 动词节点。

![](http://www.yinwang.org/images/i-sometimes-eat-fuji-apples-tree.png)

最后那个复杂点的句子：

> I sometimes eat fresh Fuji apples from a nearby grocery store.

它的语法树大概是这个样子：

![](http://www.yinwang.org/images/i-eat-apple-complex-tree.png)

之所以说"大概"，是因为我没有把"from a nearby grocery store"完全表示成一棵树结构。当我们觉得暂时没必要深入理解一个部分的时候，我们可以把它合在一起。所以"from a nearby grocery store"一起放在了一个节点里，表示对 apples 的另一个修饰成分。

### 树的作用

从上面的扩展过程，你也许发现了语法树在造句时用处。它帮助你快速的"定位"需要扩展的部分。如果你的句子只是一串字符，那么你得先用眼睛找到你需要的部分，把它和旁边的文字分离开。

在理解句子的时候，它的用处就更加明显了。树结构把句子之间相关的部分都直接连在了一起，所以你能清晰地看到它的结构。哪个词在修饰哪一部分，都一目了然。看看上面最复杂的那个句子，你可以一眼就能看出它的主干是什么：

![](http://www.yinwang.org/images/i-eat-apples-trunk.png)

对比一下原来短句的语法树，你发现虽然句子变长了，然而它的主干其实一点都没有变，仍然是 I eat apples。如果把句子写成一行，你就需要通过一阵子分析才能知道主干是什么。

这就是为什么我跟你讲语法树这个概念，因为它可以简化你对句子结构的理解。帮助你造句，帮助你理解复杂的句子。如果有长句看不懂，你可以使用语法树对其进行分解。

### 如何培养真正的语言能力

这一章我只是介绍了你需要的两种能力，可是如何培养这两种能力呢？其实它们两者是相辅相成的。造句的能力可以帮助你理解别人的句子，而阅读别人的句子，分析其结构，可以帮助你获得造出类似句子的能力。

所以我给你开的处方是这样：

1. 练习造句。每学一个动词，要先看例句，然后用它造出多个句子来。这样你就获得了灵活运用的能力。
2. 分析句子。看到一个复杂的句子，觉得理解有难度，你就把它抄下来。按照我介绍的"造句方法"，把它分解成主干和修饰成分。不久，你就会发现理解能力和造句能力都提高了。

要注意的是，分析句子的时候，没必要去纠结一个句子成分"叫什么"，对应什么术语。比如它是表语还是宾语，还是宾补...... 这没有意义。

你可以理解任何英语句子，你可以成为很好的记者或者作家，却仍然不知道什么叫做"宾补"。你只需要造句的能力和理解句子的能力，而你不需要术语就能做到这两点。

另外，你分析的句子来源，最好是真正的，有良好风格的英文书籍，而不是来自中国人写的语法书。比如，你可以选一本通俗易懂的英文小说，比如《哈利波特》的第一部。或者你可以用英文杂志（比如《TIME》）上的文章。很有趣的是，中国人写的语法书里面，为了演示各种语法规则，经常是"没有困难，制造困难也要上"，造出一些外国人根本不会用的，容易让人误解的句子。这种句子，就算你分析清楚了，反而是有害的。这种丑陋的句子会破坏人的语感，而且让你觉得语法无比困难，打击你的信心。你受到影响之后，就会写出类似的，让外国人看了翻白眼的丑陋句子。

最后可能有人问，你这是提高实际的英语能力，可是我需要应付标准化考试，这样学能行吗？当然行，而且你做语法题的速度会非常快。托福，雅思，GRE 之类的考试，不可能变态到要你"找出句子里的宾补成分来"。实际上，题目里根本不可能出现"宾补"这类词。他们只会在某个位置留一个空，让你选择合适的内容填进去。也就是说，你不需要知道那个成分叫"宾补"，就能做对题。

实际上，做题的时候，你的头脑里根本不应该出现"宾补"这样的术语。具有了真正的英语能力，做语法选择题的时候，你会一眼就选对正确的答案，却说不出这道题在考你哪方面的能力。是时态呢，还是某种句子成分？我不知道，因为那毫无意义。我就是感觉其它答案都不"顺口"，我根本不会写那样的句子，而正确的选项一眼看起来就是"通的"。

所以不管是实际的交流还是做题，死抠语法术语都没有什么意义。你去问问每一个英国人，美国人，他们是怎么做对语法题的，你会得到同样的答案。你应该努力得到这种母语级别的能力，而不是记住一些纸上谈兵的术语。

## sites for programmers library

Best-websites-a-programmer-should-visit

https://github.com/sdmg15/Best-websites-a-programmer-should-visit

该仓库收集对程序员有用的网址，包含问题查找、技术新闻、技术博客、开源社区、英文提升、新奇的玩意儿、视频教程、在线工具等数十个方向的内容。（@qiurenbo 投稿）

## how awful are new tech quote

有时，我们想用新技术解决旧技术的包袱，问题是新技术会带来更多的包袱。新技术的一个问题是，人们还不知道它到底有多糟糕。

-- 《选择乏味的技术》

http://boringtechnology.club/

## bash shortcut functions guide

让你的生活更轻松的 9 个 Bash 快捷别名（英文）

https://remykarem.medium.com/9-bash-aliases-to-make-your-life-easier-3e5855aa95fa

本文介绍 9 个实用的 Bash 函数，你可以参考他的方式，将自己常用的操作封装成函数，然后设置别名。

## css animation beginner guide

CSS Animation 101

https://github.com/cssanimation/css-animation-101

开源电子书《CSS Animation 101》，从零开始介绍 CSS 动画。

## react short video 45 episodes guide library

React 视频课程（英文）

https://scrimba.com/g/glearnreact

React 的短视频课程，几分钟一集，共有 45 集。

## rejected great programmers story

rejected.us

https://rejected.us/

该网站收集优秀程序员面试没通过的经历，用来鼓励面试失败者不要灰心。

## simple programming interview problems library

30 秒系列

https://github.com/30-seconds/30-seconds-of-code

https://www.30secondsofcode.org/js/p/1/

该系列专门收集 30 秒以内可以解答的问题。目前有以下 6 个库：（1）30 秒 JS 问题；（2）30 秒 CSS 问题；（3）30 秒面试问题；（4）30 秒 React 问题；（5）30 秒 Python 问题；（6）30 秒 PHP 问题。

## beautiful image exif card web app

ExifShot

https://exifshot.com/

一个以美观的形式展示照片 EXIF 信息的在线工具。

## premium mediocre marketing trick history

优质平庸

2017 年，有人发明了"优质平庸"（Premium Mediocre）这个词。它指的是一种营销手段，让消费者认为他们正在消费奢侈品，而实际上只是在消费普通商品，比如"精酿"啤酒、"手工"比萨饼、"烘焙师签名"汉堡等等都是"优质平庸"的例子。

这种做法很简单，就是用一些额外的手段，让平庸的东西看上去更加优质，让消费者产生一种幻想，认为自己正在购买高级产品。营销人员通常采用的手段是，为商品名加上"首选"、"手工"、"收藏级"等词语。

许多公司希望消费者愿意付出较高的价格，就用"负担得起的奢侈品"的定位来推销自己的产品。当然，他们销售的并不是奢侈品，而是把奢侈品的光环像面包粉一样，洒一点在平庸商品上面。这里的重点是，必须让消费者觉得，平庸的商品一点不平庸。

"优质平庸"也延伸到了真正的奢侈品品牌。普通消费者买不起这些奢侈品，但是奢侈品公司仍然想赚他们的钱，就设法提供一些入门级的产品系列，将一些低成本的产品贴上自家的奢侈品品牌，比如 Prada 尼龙背包、路易威登帆布包、Gucci 的塑料凉鞋等等。这个策略很成功，优质平庸市场的利润非常高，据统计，2015 年小型皮具奢侈品的销售额达到 57 亿美元，预计到 2020 年将达到 75 亿美元。对于消费者来说，只要几百美元，就能买到奢侈品牌，很多人愿意尝试。

这件事情的启示就是，商品的徽标比产品本身更重要，普通鸡蛋只能卖一块钱，但是标上"天然土鸡蛋"就能卖一块五。"优质平庸"的关键，就是商品有一个独一无二、消费者认同的徽标。

## big tech companies income source image

主要技术公司收入来源图

https://medium.com/zerotomastery/programmers-guide-to-the-big-tech-companies-1bfc078e5a76

苹果：iPhone 占 63% 的收入
谷歌：广告占 88% 的收入
微软：Office 占 28% 的收入
亚马逊：商品销售占 72% 的收入
脸书：广告占 97% 的收入

## great public apology letter writing approach history

新年的 1 月 2 日，苹果公司发布了一份公开信，长达 1400 字。主要内容是，由于大中华市场的销售额下滑，该公司预计 2019 年第一季度，收入会低于预期 7%。

https://www.apple.com/newsroom/2019/01/letter-from-tim-cook-to-apple-investors/

有人找出，苹果公司上一次发布收益预警，还是在 2002 年 6 月 18 日，一共只有 100 多个词。

https://daringfireball.net/2019/01/steve_jobs_and_apples_last_previous_earnings_warning

"苹果公司预计第二季度的收入将达到约 14 亿美元～ 14.5 亿美元，低于此前约 16 亿美元的预期。收入低于预期主要是由于消费者和创意市场（如广告和出版）的需求疲软。从地理位置来看，欧洲和日本的收入变得特别薄 ​​ 弱。由于成本降低，毛利率高于预期，预计收入不足将被大幅抵消。因此，公司已将盈利预测修订为每股 0.08 美元至 0.10 美元，而之前的指引为 0.11 美元或略高。"

"与我们行业的其他人一样，本季度我们的销售额正在放缓。因此，我们将低于收入预测约 10％，导致利润略微下降，"苹果首席执行官史蒂夫乔布斯说。"我们有一些令人惊叹的新产品正在开发中，所以我们对未来一年感到兴奋。作为目前在 PC 业务中获利的少数几家公司之一，我们对苹果长期增长的前景仍持乐观态度。"

如果你仔细阅读上面这份公告，那一次的收入下滑是 10%，比这一次的幅度 7%还大。但是，公告写得非常巧妙，导致你完全感受不到悲观，仿佛你正在阅读的不是一个坏消息，读后反而还感到振奋。第一段开门见山，直接给出数字，但也说不利影响"已被大幅抵消"；第二段告诉你，这是整个行业的问题，不是我们的问题，而且我们有"惊人的新产品"；最后，才是最厉害的一句话，"作为目前在 PC 业务中获利的少数公司之一......"。这时你感觉到的不是担心，而是对苹果公司良好的信心。

这种差异的真正原因在于，上次的作者是史蒂夫·乔布斯，这次的作者是蒂姆·库克。这一次的信太长了，辩解太多，这会让人感到作者很心虚，故意在掩饰，完全没有给人信心，所以一发出来，苹果股价就跌了 10%。如果乔布斯还在，他可能会这样写这封信：

"我们都知道中国市场出了问题，一半是因为中国自己的原因，一半是因为愚蠢的贸易战。这个季度的 iPhone 销售比我们预期差，但完全是中国市场的原因，其他所有市场都正常。全球客户都喜欢 iPhone XS、XS Max 和 XR，iPhone 占全世界整个手机行业利润的 90％。我们预计利润份额还会增长，因为竞争对手的产品高度同质化。"

好了，公开信到此结束。

## maintaining complex system like decorating office floor quote

一家公司想装修办公室地板，结果发现下面是蜿蜒曲折的通信电缆。如果彻底装修，必须更换并重新连接电缆。他们这样做了吗？没有，当他们看到复杂的电缆后，就没有碰任何东西，只是小心地更换了地板。谁知道每根电缆的作用和连接方式？最好保持原样。

-- 《如何维护复杂系统》

https://unintendedconsequenc.es/dont-touch-anything/

## about "a real programmer" a little printf story

什么是真正的程序员（中文）

https://www.cnblogs.com/xueweihan/p/5220513.html

本文是一篇译文，作者仿照《小王子》中的情节，通过小 printf 遇见的不同类型的程序员，最后悟出什么才是真正的程序员！（@LanjianNUll\_ \_投稿）

## 10 fizzbuzz solutions in 10 lang

FizzBuzz 的 10 种语言解答（英文）

http://iolivia.me/posts/fizzbuzz-in-10-languages/

FizzBuzz 是考验编程初学者的经典题目，本文用 10 种语言写出答案，比较各种语言的不同。

## go to sweden as a programmer story

去瑞典当工程师，是否值得？（英文）

http://hongchao.me/living-and-working-in-sweden-as-engineers/

一个中国开发者移居到瑞典当工程师。十年之后，他对自己这个决定的看法，留在国内好，还是去瑞典好？

## most popular tech stacks discussion

现在最流行的网站技术栈是什么？（英文）

https://news.ycombinator.com/item?id=18829557

这是一个论坛的讨论帖，有人问这个问题，下面一堆回答，流行的技术基本上都提到了。

## the elements of euclid colorized web app

《几何原本》在线版

https://www.c82.net/euclid/

在线还原 1847 年的欧几里得《几何原本》的彩色版本。（@arbeitandy 投稿）

## page loading animations library

页面加载动画

https://medium.com/@ann.green/loading-indicators-e9d9ac9680b

这篇文章收集了近 20 个加载页面的优秀动画效果。

## github status newspaper-like web app

devhub

https://github.com/devhubapp/devhub

将 GitHub 动态以 TweetDeck 形式展示的开源工具。

## medium getting awful history

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

## population mountain-like map image

人口山

https://pudding.cool/2018/12/3d-cities-story/index.html

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011827.jpg)

如果将人口的聚集状况，以柱状图叠加在地图上，就形成了"人口山"。上图是中国的人口山地图。下图是美国东北部的人口山。

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011828.jpg)

## flattening change of logos history

Logo 的改变

https://boingboing.net/2018/12/13/interesting-logos-are-being-re.html

下图上排是以前的 logo，下排是现在的 logo。各公司都不约而同，选择了加粗的直线式无衬线字体，这样是为了更醒目、辨识度更高吗？

![](https://www.wangbase.com/blogimg/asset/201901/bg2019011829.jpg)

网友 @chun1iu 评论："不是更加醒目，而是更加中庸，更容易被所有人接受。不会很喜欢，也不会很反感，就是很大众。这些公司的成长过了标新立异的阶段而已。"

## what is midlife crisis quote

中年人是艰难的。青年时代的理想主义已经消退，健康和活力也不可避免地有一点降低，但是承担的责任却在增长，再加上一些对死亡的恐惧和一些对活着的恐惧，你就有了叫做中年危机的东西。

-- Bryan Cantrill（dtrace 的作者）

http://dtrace.org/blogs/bmc/2018/12/14/open-source-confronts-its-midlife-crisis/

## the internet industry is never ever depressed view

有几个网友留言问我，怎么看互联网"裁员潮"。我就来谈几句。

首先，到底有没有"裁员潮"？企业进行人员优化，很正常啊，从哪里可以看出，今年是全面的行业萎缩？某几家公司的失败，不代表整个行业都失败了。相反，从互联网赚到钱的人，今年并不少。至于媒体的报道，不用太认真，它们不夸大耸动，就没有点击率。

退一步说，就算整个行业今年不太景气，那也只是宏观经济的问题。互联网还是朝阳产业，前景比传统行业要好得多。要是互联网行业完蛋了，中国没完蛋的行业，大概也剩不下几个。

其次，优秀的技术人才，从来都是稀缺的，根本不担心找工作，企业都求之若渴。互联网行业那么缺人，如果你还担心会失业，找不到工作，那跟经济景气或所谓的裁员潮，一点都没关系，而是你的技术还不行，达不到市场的需要。就算现在是经济的繁荣期，你的前景也是不妙的。

最后，对于雇佣制度，你应该有正确的理解。企业愿意付给你 5 万，前提是你可以帮它赚到 10 万。现在它赚不到 10 万了，为什么它还要雇佣你？我在《未来世界的幸存者》这本书里面，详细地讨论过这个问题。你可以读读这本书，它是免费的。

"如果你在大公司工作，就一定要有个明确的职业发展方向，不要以为进大公司就前途一片光明。如果在大公司里面，想要技术上有造诣，工作经验的积累只是一方面，真正的突破要靠自己业余深造！不然，路就会越走越窄，公司迟早会让你来承担成本，通过摆脱你来降低成本。"

## silicon valley default life story theory

硅谷如何对待老员工？

http://rachelbythebay.com/w/2018/12/29/age/

硅谷默认的人生模式是这样的：你进入这个行业，赚到了钱，然后离开（也就是退休）。你卖掉你的公司或股份，环游世界，并在 Medium 上写写帖子。

如果你不年轻了，却还在第一线工作。人们认定，只有两种可能。

第一种可能是，你已经发财了，不在乎钱了。工作对你只是一种消遣，你不想干的时候，就会走。

第二种可能是，由于种种原因，你错过了套现的机会，没有赚到钱。你很依赖这份薪水，真的需要这份工作。

我有一个 50 多岁还在上班的朋友，告诉我不久前他与经理对话，经理直接问他：

你为什么还在工作？ 经理的言下之意就是，首先你被视为"老人"了，其次，你为什么不离职呢，为什么不环游世界呢？你已经工作了这么多年，到底是什么原因，让你没有赚到钱呢？

## earth journey feeling quote

我在这颗行星上度过了不同寻常的一生， 同时用思维和物理定律遨游着宇宙。 我到过我们星系的最远端， 在黑洞的内部旅行过， 也回到过时间的起点...... 但如果不是因为有那些爱我以及我爱的人， 宇宙其实是空的。 没有他们， 我将失去所有的精彩。

-- 《霍金遗著》

https://www.changhai.org/articles/science/misc/BigQuestions.php

## iq is false quote

智商测验的发明目的，不是为了衡量哪些人比较聪明，而是为了识别哪些孩子有学习困难，智力有问题。

-- 《智商是伪科学诈骗》

https://medium.com/incerto/iq-is-largely-a-pseudoscientific-swindle-f131c101ba39

## the intersection of two top 25% areas is a successful job view

呆伯特漫画的作者亚当斯（Scott Adams），有一次谈到自己的成功秘诀。

他的经历其实很普通。小时候喜欢画画，画得还可以，但远远不算优秀。长大以后，在一家公司当经理，管理企业，也是业绩平平。无论是选择当画家，或者继续当公司经理，也许都能够干下去，但应该都不会很成功。于是，他灵机一动，把自己的这两个特点结合起来，选择了另一条路：专门画讽刺企业管理的漫画，结果走红了，成了世界闻名的漫画家。

他说，任何领域最优秀的前 5%的人，都能拿到很好的报酬，比如，最优秀的那 5%的程序员、面包师、钢琴家、美发师都是高收入的。但是，想要挤进这 5%，是很不容易的，需要拼掉其他 95%的人。但是，如果标准放宽一点，挤进前 25%，普通人经过努力，还是很有希望达到的。

成功的秘诀就是，你必须有两个能达到前 25%水平的领域，这两个领域的交集就是你的职业方向。

简单计算就可以知道，两个领域都是前 25%，那么交集就是 25% 乘以 25%，等于 6.25%，即很有可能挤进前 5%。更进一步，如果在两个领域里面，你都属于前 10%的优秀人才，那么在交集里面，就可以达到顶尖的 1%。总之，选择交集作为职业方向，你的竞争力会提升一个量级，收入也会随之大涨。

举例来说，袁腾飞是一个中学历史老师，但是表达能力非常好，特别能说，简直能当脱口秀演员。如果他一直当中学历史老师，或者选择说脱口秀（就像黄西那样），可能都不会很成功，竞争者太多了。但是他把两者结合起来，专门在网上视频说历史，讲得就很有意思，非常受欢迎，另一方面这个领域的竞争者也很少。

## interactive beginner javascript tut web app

JavaScript 互动教程

https://learnjavascript.online/

一份简短的入门课程，直接在浏览器里编写代码，学习 JavaScript 语言的基本语法。

## most confused words pronunciation library

chinese-programmer-wrong-pronunciation

https://github.com/shimohq/chinese-programmer-wrong-pronunciation

中国程序员容易发音错误的单词。（@taoweicn\* \*投稿）

## be a tool provider in a boom quote

当市场出现大的热潮时，最好的策略通常不是参与这个热潮，而是成为工具提供者。

-- wolfejosh@twitter

https://twitter.com/wolfejosh/status/981017179897376770

## only those with parachute will jump theory

上图是一架小飞机停在草地，一个人从上面跳下来。

这张图取自一篇 2018 年 12 月发表的正式论文，作者单位是哈佛大学医学院，论文题目叫做《从飞机跳下时，降落伞防止伤亡的作用研究》。

https://www.bmj.com/content/363/bmj.k5094

研究小组让一组人带着降落伞，另一组人不带（就像上图），都从停在草坪上的小飞机跳下来。可想而知，所有人都平安无事，因此论文经过模型分析，一本正经地得出结论：降落伞没有明显作用。

这篇论文不是恶搞。它想用一个讽刺的实证研究来证明，医学界传统的双盲测试有重大弊端。医生当中流传着一句名言：没有降落伞，谁愿意从飞机跳出来？意思是只有那些有降落伞的病人（即知道自己死不了的人），才会参加双盲测试。

这是因为，如果不考虑那些无药可救的绝症，一般来说，风险比较小的病人，更可能参加双盲测试，因为就算被抽到对照组，天天吃安慰剂，也不怕被耽误。但是，如果测试对象都是风险小的病人，试验结果很可能就是新药无效，因为病人本来就会康复。

这篇论文就是用实验证明：如果你想让没有降落伞的人，参加双盲测试，他们只会愿意从停着的小飞机上跳下来，因此你会得到降落伞（新发明）没用的结论。这是我看过的最好玩的论文之一，推荐大家看看，它完全采用最严谨的学术语言和论证过程，写得一丝不苟，最后得出了一个荒谬的结论。

## wikipedia most busy editor story

维基百科的编辑

https://www.cbsnews.com/news/meet-the-man-behind-a-third-of-whats-on-wikipedia/

Steven Pruitt 是维基百科最忙碌的编辑，他在 13 年的时候里面，一共完成了近 300 万次编辑，并撰写了 35,000 篇原创条目。维基百科英文版现在有 570 万条目，其中三分之一都被他编辑过。《时代》杂志将他评为互联网上最有影响力的 25 个人之一。他的维基用户名是 Ser Amantio Di Nicolao。

他没有从这些工作里面赚到一分钱， 他说："知识自由的想法让我着迷。我的母亲在苏联长大......所以我非常清楚，知识自由意味着什么。"

## google loon internet project

Loon 项目

https://spectrum.ieee.org/telecom/wireless/loons-balloons-will-fly-over-kenya-in-first-commercial-telecom-tryout

Loon 是谷歌的母公司 Alphabet 发起的一个实验项目。它为那些没有 4G 网络的地区发射气球，信号基站就设置在气球上，因此人们就可以使用 4G 服务了。比起地面基站，气球基站的覆盖范围更大，而且没有障碍物阻挡信号。

气球会飞到距离地面 18 公里～ 25 公里的平流层，那里没有上下气流，所以气球会停留在同一个高度上。但是，横向的风是很大的问题。为了防止气球被吹走，Loon 带有风向观察功能，一旦发现有风吹来，它会自动上升或下降，避开风，尽量停留在同一个地点。

每个 Loon 气球实际上包含了两个气球。外层是一个充满氦气的气球，为整个产品提供所需的升力；内层是一个充满空气的内部气球，可以抽空或进气。当内层气球膨胀时，外层气球的氦被挤压到密度更高，从而降低升力，开始下降，反之开始上升。通过这种方式，Loon 的工程师可以控制气球的高度，也可以利用不同高度的风，使气球向需要的方向前进。

利用这种导航方式，气球已经可以长距离发射。工程师在新西兰发射气球，然后操纵它飘到阿根廷和澳大利亚的目标地区。该项目计划 2019 年在肯尼亚提供 4G 通信服务，气球就将在波多黎各发射，然后飘过大西洋，到达肯尼亚。

气球通过自带的太阳能板获取电力，每只气球可以使用几百天。2017 年，波多黎各飓风时期，地面通信都被摧毁了，Loon 气球成功地为灾区提供了手机信号。

## impact of functional programming to objective programmers quote

学习函数式编程对我产生的影响是，让我更加关注哪些概念自然地被视为"对象"，哪些概念是不可变的"值"。

我还会更加注意，我的代码是否包含副作用，从而更谨慎地隔离这些地方，使代码更多是"纯的"，这大大提高了我的面向对象代码的可测试性。

-- 《函数式编程对面向对象的程序员有什么用？》

https://softwareengineering.stackexchange.com/questions/45231/does-learning-a-functional-language-make-a-better-oop-programmer/45236#45236

## criminals of the aged in japan story

日本的老年犯罪

https://www.bbc.com/news/stories-47033704

日本 65 岁以上的老年人犯罪正在快速增长，部分原因是越来越多的老人陷于贫穷，无路可走。 69 岁的高雄敏夫无钱付房租，他就想到监狱里免费住，于是就是偷东西，然后到警察局自首。日本法律对小偷小摸的处罚很严，他被判处一年徒刑。

监狱不仅提供了住处，还提供了免费的三餐。由于入狱不会影响犯人的退休金，所以很多老人认为，住在监狱还有利于储蓄，离开的时候会节省出一笔钱。一位 80 岁的老妇人说："我无法与丈夫相处。我无处可居，无处可去，无法找到食物和金钱。所以偷窃成了我唯一的选择。"2016 年被判有罪的 2,500 多名 65 岁以上的犯人中，超过三分之一的人有超过五次的犯罪记录。

## wealth are divided not by bloodline only when productivity leap quote theory

只有在生产力取得巨大进步的时期，财富的分配才不是由血统决定。

-- DHH 《我在 2018 年读过的书》

https://m.signalvnoise.com/the-books-i-read-in-2018/

---

**The Gift of Fear** by Gavin de Becker shares a bunch of anecdotes from violent attacks, how the victims often knew per instinct that something wasn't right, but suppressed that instinct for fear of seeming rude or silly or whatever. He also presents a bunch of analytical frameworks for evaluating threats, stalkers, and other menaces.

But it's not a dry textbook. Gavin had a violent upbringing and brings a lot of personal anecdotes and perspectives to bear as well.

About a quarter into Thomas Piketty's **Capital in the Twenty-First Century**. This is the book that was catapulted by it's conclusion: r > g. That the rate of return on capital is greater than the growth rate of the economy. Which means that capital, and the people who own it, will end up with a larger and larger share of all wealth and income in the economy as time goes on.

It's a dense dive into the historical data on wealth, income, and economic growth from the optic of inequality. It's fascinating to realize just how little economic growth there was before the industrial revolution (<0.1% at times). Centuries would pass where societies got almost no more productive, and thus saw no per-capita growth.

The historical backdrop serves mainly to setup the thesis that the period from 1914 to 1980 (or so) was a historical anomaly. That so much of capital was destroyed by the world wars while at the same time society saw massive steps forward in productivity. Which in turn meant that hereditary wealth was at its least influential in history.

In the past few decades, we've moved closer to the historical norm. Real growth through productivity improvements is down a lot since that former golden period, most western societies aren't growing their population as rapidly as they were, and thus hereditary wealth and privileges are coming back as prime determinants of inequality.

Despite the dense approach, the book isn't in anyway unapproachable. It's well told and easily read. And it's about as timely as it gets. Highly recommend it so far.

## dev news kanban web app

科技资讯的聚合网站

https://devurls.com/

https://techurls.com/

该网页聚合多个英文科技咨询网站的消息，一个地方就能看到所有资讯。（@shouldsimple 投稿）

(only timeln of each site,no value or popularity ranking,no tags or categories)

## leetcode animation guide library

LeetCode Animation

https://github.com/MisterBooo/LeetCodeAnimation

使用动画的形式呈现解 LeetCode 题目的思路。（@nivance 投稿）

## overestimate and underestimate our time quote

大多数人都高估了他们一天能做的事情，但低估了他们一年能做的事情。

-- 《关于"我没有足够的时间"》

https://blog.stephsmith.io/you-dont-need-to-quit-your-job-to-make/

## russian great fire wall history

俄罗斯断开互联网

https://www.technologyreview.com/the-download/612933/russia-plans-to-temporarily-disconnect-the-entire-country-from-the-internet/

俄罗斯政府打算通过一部新的法律，要求俄罗斯互联网服务商确保，即使外国侵略者断开互联网网关，俄罗斯的网络也能继续运行。该法律草案于 2018 年 12 月在俄罗斯议会提出，其中还要求俄罗斯电信公司将所有互联网流量，重新路由到俄罗斯电信监管机构批准的交换机。

为了测试该法案是否可行，俄罗斯将进行一次测试，暂时断开外部互联网，测试网络流量可以全部留在俄罗斯国内，而不是在国际上进行路由。确切的测试日期尚未公布，但计划在 2019 年 4 月 1 日之前进行。

## algorithms visualization web app

algorithm-visualizer

https://github.com/algorithm-visualizer/algorithm-visualizer

一个直观的算法可视化工具，你可以自由选择自己想学习的算法，每个算法它都清晰描绘了其原理和运作过程。（@nivance 投稿）

## who runs china cool data visualization web app

人大代表的可视化

https://news.cgtn.com/event/2019/whorunschina/index.html

第十三届全国人民代表大会的代表数据可视化。（@jdk137 投稿）

## perplexing subscription mode user story

订阅模式让我困扰

我为一些服务支付月费，比如 Netflix、亚马逊、有线电视、电子邮件、备份存储、软件、音乐、健身房会员......。但是，我的生活是"不定期"的，没法知道什么时候会去用这些服务。有些服务我很少使用，为它们支付月费，对我来说很不划算。

结婚时，我订阅了 Photoshop CC 为妻子制作一些图像效果。我就使用过一次，然后被困在一年的合约中，我忘记了到期时间，结果自动续约了另一年。我支付了 2 年的费用（约 200 英镑），但是只使用了一次。现在 2 年到了，我再想用就没法用了。

我有一个 IDE，每年使用 3-4 次，但我必须支付月费，并且保证至少购买满一年。在那之后，你所保存的东西，就没法用它打开了。

越来越多的服务正在转向这种模式，对于像我这样经常使用的人来说，没有替代模式。但是我也不想每周、每月、甚至每年都使用同样的东西。

我不介意这个模式用于某些我经常使用的东西。但是，我希望有另一种模式，我乐意为某些软件支付少量费用，因为我的使用量很少。一旦支付了费用，我就可以无限期地（在合理范围内）保留和使用我的文件。

对于内容服务来说，我觉得 Twitch / youtube / patreon 的订阅模式才是未来。你向平台支付月费，然后可以收看所有想看的内容。而不是订阅某几家报纸（你不关心上面 90％的内容）。

## what is a knowledge densed company quote

什么叫知识密集型企业？就是这家企业的大部分支出是工资。

-- 某网络财经节目

## death is unconcerned with nowaday people quote

当代社会让死亡变得不容易注意到。现在，大多数死亡发生在医院和养老院，而过去常常发生在家中，年轻人的死亡也比以前少见。当代人甚至连屠宰动物都很少看到，而直接吃处理好的食品。总之，大多数人对死亡没有第一手经验，死亡变成了一件无关的事情。

-- HN 读者留言

https://news.ycombinator.com/item?id=19176502

## too developed material life history

如果你长期看这个周刊，可能知道我的观点：人工智能将导致大量失业，因为算法将取代大部分白领工作。

https://www.ruanyifeng.com/blog/2016/01/white-collar.html

很多人不同意，认为未来不会有大量失业，因为新的工作岗位可以容纳就业。但是，到底什么岗位可以让大部分人就业呢？没人说得出来。有一点是显然的，这种岗位不可能是程序员、工程师、算法专家，因为大部分人达不到岗位要求，就像你没法让大部分人学会《高等数学》一样。

前一段时间，我读完了一本书《未来地图》，作者是 O'Reilly 出版社的老板。他也同意，人工智能会让很多人失业。但是他说不担心，因为大家会去干别的工作。他举了一个例子，未来大家会拍视频，你拍我看，我拍你看，所以无数人当"视频主""直播主"，以拍视频为生。

https://book.douban.com/subject/30282615/

这看上去说得通，现在不就已经有很多这样的人了，甚至有人天天直播吃饭，靠打赏赚钱。英语里面有一个专门的词 Mukbang，来自韩语的音译，指的就是这种吃吃喝喝的直播。你去百度搜一下图片，就知道 Mukbang 有多流行了。

https://en.wikipedia.org/wiki/Mukbang

但是我还是疑惑，如果将来的工作都是拍这种视频，那有多大的意思呢？卡辛斯基曾经提到过这种情况。未来生产力大发展，物质极大丰富，人类无所事事，只能"把时间花在互相擦皮鞋上面，或者用出租车带着彼此到处瞎转，互相为对方做手工艺品，互相给对方端盘子等等。"说实话，我看不出来，大家互相拍视频，直播吃饭、购物、打游戏，跟互相擦皮鞋，有什么本质的不同。

https://www.ruanyifeng.com/blog/2017/09/unabomber.html

## too much stupid homework social problem story

写字机器人

https://www.thepaper.cn/newsDetail_forward_2998361

《钱江晚报》报道，哈尔滨市的张女士发现，初三的女儿在网上买了一台"写字机器人"，它不仅可以模仿孩子的笔迹抄课文、抄生字，还能画手抄报，女儿的语文作业就是机器人帮着写的。她一怒之下摔碎了"机器人"，还骂了女儿一顿。

据网店客服介绍，"写字机器人"实为一组杆状的电子金属套件，只需简单组装、下载软件，让机器人识别使用者的笔迹，导入需要书写的文字内容，再在前端安置一支笔，它就能在纸上模仿使用者笔迹书写指定内容，书写速度比较快，每分钟 40 个字左右，连笔字更快。

## emotion voice map library web app

声音地图

https://s3-us-west-1.amazonaws.com/vocs/map.html#

https://www.researchgate.net/publication/329824563_Mapping_24_Emotions_Conveyed_by_Brief_Human_Vocalization

该网站将不同情绪对应的声音，画成一幅地图。鼠标移到每个点上，都会听到声音，比如包含了 50%的敬爱、33%的同情、17%满意的声音。

## frontend daily library

前端开发技术日报

https://github.com/kujian/frontendDaily

每日分享互联网上的前端技术、前端资讯。（@kujian 投稿）

## trending program repos web app

GitNews

https://git.news/

该网站实时显示 GitHub 趋势、HackerNews 和 Reddit 里面出现的热门代码仓库。

## claiming busy is nothing quote

如果没有完成项目，你再忙碌，也无法掩饰没有成效。

-- Jack Bruce Simpson

http://jacksimpson.co/finishing-being-productive-busy/

## popular tech itself is useless quote

技术本身并不重要，公司只是希望工程师团队不知疲倦地应用最新的流行技术，做出很炫的东西。

-- James Beswick

https://itnext.io/the-cloud-skills-shortage-and-the-unemployed-army-of-the-certified-bd405784cef1

## orange color history

橙色的历史（英文）

https://mymodernmet.com/history-color-orange/

![](https://cdn.beekka.com/blogimg/asset/201903/bg2019032213.jpg)

欧洲人直到 16 世纪才开始使用这种颜色。橙色象征着生育和富饶，上图是 1895 年的油画，反映了穿着橙色长袍的青年女性。

## indie ios dev apps library

中国独立 iOS 和 macOS 开发者的作品

https://josephchang10.github.io/chinese-indie-hackers/

该仓库收集个人开发者提交的作品。（@Y024 投稿）

## getting locked by amazon web server quote

如果你每月在 AWS 花费 10 万美元，亚马逊会向你提供折扣。如果你一个月的花费超过 100 万美元，他们将不再理会你。因为他们知道你已经被锁在他们的服务里面，去不了别的地方。

-- 《Lambda 和 无服务器将锁定你》

## investors dont care 150% revenue quote

如果你跟风险投资家说，你的项目将使得他们三年内获得 3 倍的回报，他们可能根本不会进行投资。每年 50％的回报率不值得他们花时间。

这是因为所有风投项目如果有 1/3 提供 3 倍的回报，其余的都失败了，那么这个风投基金将一无所获。

-- 《我们未能建立一个 10 亿美元的公司》

## dont afraid of giving up view

一个美国程序员分享自己的工作方法，其中有一条是 "要么不做，要做就做完"。

https://briancasel.com/impatient-execution/

他的意思是，不要给自己留下做了一半的活。因为这意味着你需要再回来，继续把它做完；你会挂念这件事情，它就像一个钟摆，过一段时间就会重新出现在你的脑海，时不时烦扰着你。

你的目标应该是，当天就把这件事情做完，从此不必再去碰它，第二天继续做下一件事就行了。如果遇到一天做不完的大项目，那就把它分解成一个个小步骤，每天完成一个步骤。

我觉得他说得很好，但是这句话比较重要的，其实是前半句：有些事情不要去做。事情是做不完的，而你的时间和精力是有限的，不要只想着如何才能把事情做完，还要学会不做那些不应该做的事情。

某种程度上，不做比做完更困难。因为通常来说，做完一件事，多多少少都有一些好处，不做意味着你要放弃一些眼前的好处，这并不容易。

最糟糕的一种情况是，某个项目不值得做，但是你已经做了，为了不要浪费已经投入的成本，于是你进一步投入，在泥坑里面越陷越深。等到项目最后失败的时候，你大伤元气，一蹶不振。项目管理有一个很重要的原则，叫做"尽快失败"，就是为了防止这种情况。胡适先生原来学农科，专业是果树栽培，他觉得实在没意思，大学读到一半就改学哲学，后来当上了北大校长。如果他没有放弃，想着拿完农科文凭再说，那他大概就不会有以后的成就了。总之，对于那些没希望的项目，放弃得越早越好。

https://www.ruanyifeng.com/blog/2007/02/hushih_s_switch_part_i.html

## the cost of abstraction theory

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

## 996 icu social problem history

996.icu

https://996.icu/#/

一个程序员制作的抗议 996 工作制的网站。（@9527q 投稿）

## why should you stop reading news view

为什么你应该停止阅读新闻？

https://fs.blog/2013/12/stop-reading-news/

今天的新闻业与以前有很大不同。

（1）新闻传播的速度大大提高。现在，新闻在发生后的几秒内，就开始传播，每个人在很短时间内，就会知道发生了什么事。

（2）新闻的产出成本大幅下降。现在，有人可以每天写 12 篇报道，一年就是近 3000 篇，这还只是一个人的产量。这么快的产出速度，几乎不可能在一个主题有一些深思熟虑的东西。由于产出成本已降至接近零，因此新闻业存在很多竞争。

（3）新闻业企图给读者洗脑。今天的新闻不再强调客观，而是充满了主观看法，企图用个性吸引读者。

（4）点击量成了主要目标。由于竞争激烈，大多数新闻媒体都不得不提供免费新闻，因此必须依靠广告产生收入。广告收入的高低直接依赖于点击量。创造很多耸人听闻的新闻，最容易获得点击。

总之，今天网上的大部分新闻都毫无意义，对你的生活并不重要，不会帮助你做出更好的决定，也不会帮助你理解世界，与周围的人建立联系。它们只会消耗你的注意力，造成你的注意力不足。你被大量信息包围，感到不知所措，为了赶上这一切，内心承受了压力。完全不看新闻，可能是更好的做法。

## stupid overconfident ones is problem of the time quote theory

我们这个时代的痛苦在于，那些愚蠢的人都非常自信，那些有想象力和理解能力的人充满了怀疑和犹豫不决。

-- 《关于愚蠢》

http://nautil.us/blog/the-case-for-professors-of-stupidity

---

### The Case for Professors of Stupidity

The greatest problem facing the world today is a rule system.

on this past International Holocaust Remembrance Day, I reread a bit of Bertrand Russell. In 1933, dismayed at the Nazification of Germany, the philosopher wrote "The Triumph of Stupidity," attributing the rise of Adolf Hitler to the organized fervor of stupid and brutal people---two qualities, he noted, that "usually go together." He [](https://books.google.com/books?id=awXsxB5HPv0C&printsec=frontcover#v=onepage&q=)[went on](https://books.google.com/books?id=awXsxB5HPv0C&lpg=PP1&pg=PA27#v=onepage&q&f=false) to make one of his most famous observations, that the "fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt."

Russell's quip prefigured the scientific discovery of a cognitive bias---the Dunning--Kruger effect---that has been so resonant that it has penetrated popular culture, inspiring, for example, [an opera song](https://www.youtube.com/watch?v=BdnH19KsVVc) (from Harvard's annual Ig Nobel Award Ceremony): "Some people's own incompetence somehow gives them a stupid sense that anything they do is first rate. They think it's great." No surprise, then, that psychologist [Joyce Ehrlinger](https://scholar.google.com/citations?hl=en&user=m3ORNxEAAAAJ&view_op=list_works&gmla=AJsN-F4AVH91NUYLSZrIvY76gGBBy5gxOGn8iqx3lZe_py-CHwMaxUD5uSJrThir3YU_Fxre4_84zBKUiAR9i6tNC5J6NrCgqjT-m3ao7GHocptZIG79yx4) prefaced a 2008 [paper](https://www.sciencedirect.com/science/article/pii/S074959780700060X?via=ihub) she wrote with David Dunning and Justin Kruger, among others, with Russell's comment---the one he later made in his 1951 book, *New Hopes for a Changing World*: "One of the painful things about our time is that those who feel certainty are stupid, and those with any imagination and understanding are filled with doubt and indecision." "By now," Ehrlinger noted in that paper, "this phenomenon has been demonstrated even for everyday tasks, about which individuals have likely received substantial feedback regarding their level of knowledge and skill." Humans have shown a tendency, in other words, to be a bit thick about even the most mundane things, like how well they drive.

> Stupidity is not simply the opposite of intelligence.

Russell, who died in 1970 at 97 years of age, probably would not be surprised to hear news of this new [study](https://www.nature.com/articles/s41562-018-0520-3), published in *Nature Human Behaviour*: "Extreme opponents of genetically modified foods know the least but think they know the most." The researchers, led by Philip Fernbach, cognitive scientist and co-author of *The Knowledge Illusion: Why We Never Think Alone*, analyzed survey responses from a nationally representative sample of U.S. adults. They obtained similar results, they write, "in a parallel study with representative samples from the United States, France and Germany, and in a study testing attitudes about a medical application of genetic engineering technology (gene therapy)."

Fernbach called their result "perverse." It was nevertheless consistent with prior work exploring the Dunning--Kruger effect and the psychology of extremism, he [said](https://phys.org/news/2019-01-genetically-food-opponents.html?utm_source=nwletter&utm_medium=email&utm_campaign=weekly-nwletter). "Extreme views often stem from people feeling they understand complex topics better than they do." Now as ever, societies need to know how to combat this.

But what exactly is stupidity? David Krakauer, the President of the Santa Fe Institute, [told](https://nautil.us/issue/23/dominoes/ingenious-david-krakauer) interviewer Steve Paulson, for *Nautilus*, stupidity is not simply the opposite of intelligence. "Stupidity is using a rule where adding more data doesn't improve your chances of getting [a problem] right," Krakauer said. "In fact, it makes it more likely you'll get it wrong." Intelligence, on the other hand, is using a rule that allows you to solve complex problems with simple, elegant solutions. "Stupidity is a very interesting class of phenomena in human history, and it has to do with rule systems that have made it harder for us to arrive at the truth," he said. "It's an interesting fact that, whilst there are numerous individuals who study intelligence---there are whole departments that are interested in it---if you were to ask yourself what's the greatest problem facing the world today, I would say it would be stupidity. So we should have professors of stupidity---it would just be embarrassing to be called the stupid professor."

## the never ending problem of social medias quote theory

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

## cocacola never getting bored design view

可乐不会形成味道的记忆。你可以在上午 9 点，上午 11 点，下午 5 点各喝一杯，而不会对它的味道厌倦，其他饮料都做不到，一段时间后你会厌倦它们。普通人每天饮用 64 盎司的液体，你可以将所有 64 盎司的液体都换成可乐。

-- 巴菲特解释他为什么投资可口可乐

https://twitter.com/naval/status/1094005693818884096

## dont earn at the cost of time view

前几天，我听一个广播节目。主持人问，现在很多人开网约车，这样能赚多少钱，能够赚到大钱吗？

这个问题很容易回答，答案就是不能。出租车司机的收入，主要由营业时间的长短决定。基本上，一天开 12 个小时，就是比开 6 个小时，收入高出一倍。每天只有 24 个小时，因此收入存在上限，不可能偏离平均水平很远。

出租车是"时间换收入"的典型行业，投入的时间越多，收入越高，在家休息就没收入。很多行业都属于"时间换收入"，所有此类行业都赚不到大钱。因为你能用来交换的时间是有限的，而且进入中年以后，你就拿不出更多的时间来交换。开出租车赚零花钱，或者作为短期过渡，这是没问题的，但作为终身职业是很糟糕的。

我觉得，越来越多的程序员正在落入这个陷井，用编码的时间换取收入。只有不停地做项目，才能拿到钱。项目做得越多，收入越高。这个项目开发完了，公司又让他去干下一个项目。 忙了好几年，项目完成了一大堆，但是自己什么也没留下，以后的收入还要取决于从零开始的新项目。这样的话，你跟出租车司机有何两样，哪一天你不写代码了，不是照样没收入。

那些赚到大钱的人，没有一个是靠时间换取收入的。他们要么通过积累资产致富，要么购买他人的时间，为自己创造财富。你应该警惕，不要落入"时间换取收入"的陷井，不要只顾着为别人生产代码，而要注意积累自己的资产，以及适时开展属于自己的业务。

## redesign ui is a waste of time view

重新设计 UI 基本上是浪费时间（英文）

https://debugandrelease.blogspot.com/2019/03/ui-redesigns-are-mostly-waste-of-time.html

作者认为，95%情况下，你不需要重新设计 UI。

## 30 days react beginner guide library

React 教程

https://github.com/fullstackreact/30-days-of-react

一个 React 的 30 天开源教程。（@CharlesCCC 投稿）

## 7 days roguelike game dev challenge library

7DRL Challenge 2019

https://itch.io/jam/7drl-challenge-2019

这是一个地图探险类（rogue like）游戏的比赛，全世界开发者都可以将自己的作品上传，唯一的条件是该游戏必须是在七天内开发完成。目前，已经有 100 多个作品，各个平台都有，其中将近一半可以在浏览器里面运行，都可以免费下载。

## pure css lemonage image web app

纯 CSS 图片

https://codepen.io/ivorjetski/pen/xMJoYO

下面图片不是照片，而是纯粹用 CSS 生成的。（@beiyeqingteng 投稿）

## dev well using an really old laptop story theory

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

## paste anything to markdown web app

Paste to Markdown

https://euangoddard.github.io/clipboard2markdown/

粘贴到该窗口的任何文本内容，都会自动转为 Markdown 格式。（@AidySun 投稿）

## google graveyard library

Killed by Google

https://killedbygoogle.com/

该网站收集谷歌关闭的所有自家产品。（@murongsihua 投稿）

## generative mediation music web app

Generative.fm

https://generative.fm/

该网站专门收集软件生成的音乐。比较奇特的是，这些音乐可以无限播放，并且每次听都不一样。暂停以后重新播放，你会听到跟前面不同的音乐。

## why i refused highly-paid job at amazon story

为什么我放弃 Amazon 年薪 50 万美元的工作？

https://www.indiehackers.com/@dvassallo/why-i-quit-a-500k-job-at-amazon-to-work-for-myself-36639e3975

上周，我辞掉了 8 年的亚马逊工作。尽管一再得到奖励和表彰，但我没有足够的动力再干一年。

当年，加入亚马逊时，我是初级工程师。5 年内，我晋升了两次，现在是高级工程师。如果我留下来，几乎可以肯定今年会再次晋升，成为首席工程师。我被告知，我在公司有很大的潜力。公司里，人们对我的尊重不断增长，我被视为所在领域的专家和领导者。

我在亚马逊的第一年赚了 75,000 美元。去年，我赚了 511,000 美元。如果再呆几年，我的年薪应该可以到 100 万美元。

我的工作不算很忙，也不再需要证明自己。我可以在一周 40 小时内完成所有工作，而且我的团队每周一天在家工作。晚上或周末，我很少打开笔记本电脑。我总共有三位主管，他们人都很好，有很多同理心。

尽管一切都很好，但每天早上，我上班的动机都在减少。

最初的几年，我主要与另一个同事，一起开发一个内部工具。各种限制很少，我有很大的独立性，直接与用户交谈，然后发布更新，开展测试等等。只要我觉得这件事是重要的，通常就可以去做。大多数时候，工作的方向是我们自己控制的。

后面的几年却完全不同。我领导着部门历史上最重要的项目，有许多利益相关者和复杂的目标。我能做的事情受到了很大的限制，通常取决于我能否说服所有相关人员，而我想做的是实现目标的最佳方式，却不一定能做。

我在公司总是处理其他人的要求或条件，开始时很简单，但随着时间的流逝而变得越来越复杂，因为必须满足所有利益相关者。这种情况迫使我做一些不愿意做的事情，或者我愿意做的事情没法做。

## youtube most popular channel stats map theory

Youtube 的热门频道统计

https://brandmaxima.com/blog/87-youtube-channels-with-million-subscribers-who-how-they-got/

Youtube 有 2000 多万个活跃频道，2018 年底，359 个频道有超过 1000 万个订阅者。其中，87 个频道是 2018 年创建的，在一年内就达到了 1000 万订阅，相比 2017 年的 47 个频道增长了 185%。

这 87 个频道平均需要 167 天才能达到 1000 万订户。其中，最快的是墨西哥的 Kenia OS 只用了 5 天，其次是另一个墨西哥频道 Juki Dog，花了 20 天。这 87 个频道的国籍分布是，14 个墨西哥频道，12 个美国频道，11 个印度频道，5 个土耳其，4 个印度尼西亚频道。

娱乐类频道（电影和娱乐，音乐）是增长最快的频道，其次是生活频道和游戏频道。烹饪、健康、体育类频道也有快速增长。

根据统计，这些热门频道在周五和周六上传了更多视频，这两天发布的视频在观看和订阅方面，要比其他时间更高。

## difference between thoughts and words quote

思考某事和讲述某事是不同的事情。我们思考事物的方式很复杂，有时甚至是不连贯的，而且经常是矛盾的。但是讲述时，我们必须把某事表达得很清晰，可以在很短的时间内说得出来。

-- 《马尔科姆·格拉德威尔的写作课》

https://taimur.me/posts/notes-from-malcolm-gladwell-s-writing-masterclass-part-1

## tech is self governed quote

技术正在发展一定程度的自治，它好像正在以某种方式利用人类来创造它自己。

-- Paul Kingsnorth

http://paulkingsnorth.net/2015/10/23/planting-trees-in-the-anthropocene/

## about internet archive story

什么是 Wayback Machine？（英文）

https://www.256kilobytes.com/content/show/4808/what-is-the-wayback-machine-how-the-internet-archive-uses-web-crawlers-to-preserve-internet-history

Wayback Machine 是一个庞大的网页数字档案库，为全世界的网页存档。该项目于 1996 年启动，目前保存了 100 亿个快照，数据量达到 30PB，另外还有 30PB 备份。

## type moving right(type after variable name) history theory

类型正在向右移动（英文）

https://medium.com/@elizarov/types-are-moving-to-the-right-22c0ef31dd4a

以前的编程语言，类型声明都是写在变量的左边，比如 int count 。但是，现在越来越多的编程语言，将类型声明写在变量的右边，比如 count:int ，这是为什么？

---

### Types are moving to the right

If you take a look at statically-typed programming languages that are still popular today but were designed in the previous century, before the turn of the millennium, you'd notice that most of them and, at the same time, the more popular and mainstream ones, like C (circa 1972), C++ (1985), and Java (1995), write types to the left of names:

```
Dog   fido = ...
^^^   ^^^^
Type  Name
```

It reads nicely when you write a lot of declarations, too:

```
int count  = ...
double average  = ...
List<String> strings  = ...
Map<Warehouse, List<OrderItem>> items  = ...
```

However, if you take a look at modern languages, designed in 21st Century, you cannot help but notice that the languages with some popularity increasingly put types to the *right* of names[¹](https://elizarov.medium.com/types-are-moving-to-the-right-22c0ef31dd4a#ecf6):

![](https://miro.medium.com/v2/resize:fit:1400/1*c4glYoRWwPRaYWpj9aCtgQ.png)

Why is it happening? It might seem strange and inconvenient to any developer who got used to the last-century type-name style, but modern language designers still do it despite the risk of breaking with tradition. Are they all Pascal fans or what?

Here is a plausible explanation. First of all, it has nothing to do with legacy of Pascal (circa 1970) or even with Visual Basic (1991) for that matter. The real answer is that we have entered the age of* type inference*.

Type inference, which used to be a niche feature in programming language design, is now entering mainstream. It is appearing in our old programming languages where we can now omit types using `var` and `auto` keywords, too[²](https://elizarov.medium.com/types-are-moving-to-the-right-22c0ef31dd4a#b7cd). Even in established programming languages we start seeing code like this:

```
var count  = ...
var average  = ...
var strings  = ...
var items  = ...
```

Woot! That's nice and aligns, pleasure for our eyes to see. But what happens when the type is too complex for type inference or when it needs to be *occasionally* spelled out for human reader to understand? Behold:

```
var count  = ...
var average  = ...
var strings  = ...
Map<Warehouse, List<OrderItem>> items  = ...
```

Uh... that breaks the whole code-reading flow. So, if you are designing a programming language in the age of type inference from scratch, then you solve it by putting an optional type annotation to the right of the name:

```
var count  = ...
var average  = ...
var strings  = ...
var items: Map<Warehouse, List<OrderItem>> = ...
```

Now it looks great again. That is essentially the way it is done in Scala (2004), F# (2005), Go (2009), Rust (2010), Kotlin (2011), TypeScript (2012), and Swift (2014) programming languages. There are many syntactic differences between them, but one thing is common --- name-type order:

```
fido   Dog
^^^^   ^^^
Name   Type
```

This way of writing code is on the rise now. Is it going to become mainstream in the future? That is hard to tell for sure, but the trend does look so.

## chromium extensions library

Chrome 插件英雄榜

https://github.com/zhaoolee/ChromeAppHeroes

该项目收集优秀的 Chrome 浏览器插件，并为它们写中文说明书。（@zhaoolee 投稿）

## anxious building closure quote

我的工位几乎看不到外面，我觉得这座建筑物真的开始吃掉我整天盯着墙壁的灵魂。

-- HN 读者留言

https://news.ycombinator.com/item?id=19249036

## to earn or to cut cost quote

一般来说，帮企业赚钱的系统好卖，帮企业省钱的不好卖，因为省钱的系统基本上都要动到既得利益者。

-- 子柳

## openstreetmap web app

OpenStreetMap 获奖

https://www.fsf.org/news/openstreetmap-and-deborah-nicholson-win-2018-fsf-awards

2019 年 3 月 23 日，自由软件基金会 FSF 正式将 2018 年的自由软件奖，颁发给 OpenStreetMap。理查德·斯托曼亲自颁奖。该奖项表彰显著造福社会、或者表达了自由软件运动理念的自由软件。

OpenStreetMap 是一个协作项目，用于创建可自由编辑的世界地图。它创立于 2004 年，目前拥有超过一百万社区成员参与编辑，已经有数千个网站、手机 App 和硬件设备上使用了它。它是唯一真正不受限制，可以自由使用的全球地图服务。

## full featured video cut laptop app

Kdenlive

https://kdenlive.org/en/

一个功能强大的开源的视频编辑器，主要针对 Linux 系统，但是 Mac 和 Windows 也可以安装。

## famous people fake resume library

此简历不存在

https://thisresumedoesnotexist.com/

该网站使用人工智能生成不存在的简历。

## leetcode solutions guide library

leetcode

https://github.com/azl397985856/leetcode

记录个人 leecode 解题之路的笔记库，使用 JS 语言。（@azl397985856 投稿）

## companies without overworking library

955.WLB

https://github.com/formulahendry/955.WLB

该仓库收集国内不加班的 IT 公司名单。（@ifrontend-xyz\* \*投稿）

## the to b industry pain problem story

谈谈 To B 业务的难点

https://xw.qq.com/partner/hwbrowser/20190128A0BHUQ/20190128A0BHUQ00?ADTAG=hwb&pgv_ref=hwb&appid=hwbrowser&ctype=news

为什么 To B （企业服务）业务在中国很难做？

首先，很多人可以影响企业客户的购买决策。一个企业要买一套管理系统，决策的可能是业务负责人，也可能是主管信息化的副总裁。他们的诉求很可能不是企业利益最大化，而是他自己及他的部门在企业内的话语权、存在感。如果你连诉求都没搞清楚，你怎么可能拿到订单？

再举一个例子，你认为销售部门使用了你的软件，老板能更容易地掌握他们的业绩和效率，因此销售部门会赞成购买你的软件。但是，销售骨干不一定希望老板掌握他的实际情况。为了自己的利益，他抵触你的系统，最终你就无法完成这个系统的实施。

一个大企业的决策负责人，往往是企业高管或中层。选择 To B 产品的时候，他并不只是从业绩出发，还会考虑自己的风险。我选择上市巨头 A 公司的产品，如果出了问题，那是 A 公司的问题，不是我的问题，因为人家是上市公司，行业领先者，老板不会说我什么。但如果我选了创业企业 B 公司的产品，如果出了问题，那肯定是我的问题，老板会觉得你怎么选这么一个不靠谱的产品，你是不是拿了人家好处什么的。所以，决策者评估这种信用风险的时候，他们宁可选择对他们而言，风险最低的产品和服务方案。

大部分 To B 产品都是为了老板服务的，而对员工来说，这意味着更多负担和约束，所以他们不喜欢、也不感兴趣你的产品。我知道有不少老板抱怨，他们员工非常不喜欢用钉钉。对于普通人而言，他们为了游戏、娱乐所投入的时间和精力，远大于为了工作和学习投入的时间和精力，也就是说，你不能指望公司职员用玩游戏的精神去研究你的产品。

## why we love paper book quote

有些人说，他们更喜欢纸书，而不是电子书。这可能因为纸书是有机物质组成的，那些物质包含了热、光、水分，在生产过程中发生化学反应，产生独特的旧书气味。纸张释放出数百种挥发性有机化合物，让人觉得有大自然的感觉。

-- 《为什么旧书有味道》

https://www.bookofjoe.com/2019/03/why-do-old-books-smell.html

## why functional programming not objectward programming quote theory

面向对象编程的问题是，默认带有环境。你只想要一个香蕉，但是得到了一只拿着香蕉的大猩猩，甚至还有整个丛林。

-- 计算机语言大师 Joe Armstrong，2019 年 4 月 20 日去世。他非常不喜欢面向对象编程，发明了函数式语言 Erlang。

http://www.defprogramming.com/quotes-by/joe-armstrong/

---

The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.

## high revenue is high scalability view

能够获得暴利的职业，都有一个共同特点：可扩展性（scaling），一次劳动可以服务成千上万的人。

软件、电影、游戏行业都具有可扩展性，作品的生产成本是固定的，但可以被消费无数次，所以有巨大的获利空间，创造出许许多多的富豪。另一方面，理发师、厨师、出租车司机一次劳动，只能服务少数几个人，就不具有可扩展性，很难获得暴利，生存得很辛苦。

最近，我读到美国一个风险投资家的文章。他说了一句发人深思的话：

https://andrewchen.co/professional-blogging/

"写作是最具可扩展性的活动。你呆在家里，不去参加活动/会议，只是在网上写下自己的想法，然后你就具有了最好的可扩展性。"

我想了一下，还真是这样。你写了一篇文章，想让其他人看到，只要到处张贴就行了。每次转贴，就是扩展了一次。这比其他产品的扩展容易多了。面包师傅想要更多的人尝到自己的面包，只能多开面包店；网站要扩展，只能购买更多的服务器。相比之下，文字的扩展简直是零成本。

大公司每年花费数十亿美元用于广告，以求人们关注他们的产品。但是，一个好的作家可以免费获得这种扩展性。这就是为什么你应该把自己的想法写下来的原因，这么好的免费传播渠道，为什么不用呢？你以为，写下来不会有人看。错，其实是有人会看到的，如果他们觉得有价值，就会帮你传播出去。

## linus torvards interview after 25 years story

25 年后重新采访 Linus Torvalds（中文）

https://mp.weixin.qq.com/s/KWC43nTsL134n6VkSD2x4w

Linux Journal 杂志 1994 年创刊号采访了 Linus Torvalds，为了庆祝杂志诞生 25 周年又重新采访了他（英语原文）。上一次采访时，他还没结婚，现在有三个小孩，老大马上就要大学毕业。上一次，杂志问他有何梦想，他说希望 Linux 统治世界。现在，他说早就不开这种玩笑了，因为这话已经不像玩笑了。（@Y024 投稿）

https://linuxjournal.com/content/25-years-later-interview-linus-torvalds

## microsoft news web app

微软新闻

https://www.microsoft.com/en-us/newsapp

![](https://www.wangbase.com/blogimg/asset/201905/bg2019050325.jpg)

微软最新推出的个性化新闻的 App，有繁体中文版，底层是微软为旗下所有产品统一的新闻引擎。

## stackoverflow documentation programming notes guide library

Programming Notes for Professionals books

https://goalkicker.com/

该网站提供各种免费计算机教程下载。（@zhjp0 投稿）

## creative commons image search library

创意共享图像搜索引擎

https://search.creativecommons.org/

创意共享基金会推出的官方图像搜索引擎，索引了 3 亿张图片，都可以免费使用。素材主要来自 Flickr 和 Behance，下一步会把维基百科的图片放进来。

## great physicist blackhole research story

费曼的故事

http://nautil.us/blog/the-day-feynman-worked-out-black_hole-radiation-on-my-blackboard

有一天，物理学家艾伦·莱特曼和他的两个研究生，在加州理工学院的食堂一起吃饭，谈论他们刚刚做的计算：如果把一束光照向一个正在旋转的黑洞，根据计算，角度合适的话，光有可能从黑洞反弹出来，并且带有比进入黑洞时更多的能量。

费曼在旁边听到了谈话，插话说："你们描述的那个过程，听起来非常像量子的受激发射。"

吃完饭，大家边走边谈，来到艾伦·莱特曼的办公室，一个小小的房间。费曼走到黑板前，开始研究黑洞发射能量的方程式。到目前为止，人们一直认为所有的黑洞都是全黑的，因为黑洞本身不会释放任何能量。但费曼在午餐时听了谈话之后假设，如果旋转的黑洞能够随着光的进入发光，那么根据量子力学，它也可以在没有任何物质的情况下发射能量。

几分钟后，费曼已经在黑板上，写出了黑洞释放能量的方程式。他没有兴趣抄下他写的东西。他只是想知道大自然是如何运作的，而他刚刚得出结论，考虑到量子效应时，孤立的黑洞能够发射能量。他完成了计算后，拍了拍手，把粉笔灰弄掉，然后走出了办公室。

费曼离开后，艾伦·莱特曼和学生看着黑板，一致认为这可能很重要，但是不知道有多重要。学生还有事，不得不离开了办公室。过了一会儿，艾伦·莱特曼也离开了。但是那天晚上，他意识到这是费曼的重大成果，他需要快点回到办公室，把方程式抄写下来。但是当第二天早上，他回到办公室时，清洁工已经把黑板擦干净了。

第二年，斯蒂芬·霍金发表了同样的结论，因此一举成名。没有人知道，费曼在一年前就得出了这个结论。

## it's better not to startup in silicon valley quote

我认为，2017 年的时候，硅谷已经不再适合创业公司了。但是由于廉价种子资金的大量增加，使得这一点不那么明显。

-- Sam Altman，创业孵化器 YC 的总裁

https://twitter.com/sama/status/1096822724217827328

## dont waste time thinking about opponents quote

根据我的个人经历，用来思考竞争对手的每一分钟，都是浪费掉的。

-- Paul Graham

https://twitter.com/paulg/status/1109220781035307009

## why they think about opponents quote

有些公司希望做能够在两三年内获利的事情，如果一件事在两三年内不见效，他们就会转向其他事情。所以，他们专注的主要是竞争对手，而不是客户。

-- Jeff Bezos

https://news.ycombinator.com/item?id=19468288

## the donald trump worm story

特朗普蠕虫

https://en.wikipedia.org/wiki/Dermophis_donaldtrumpi

最近，巴拿马丛林发现了一种新的蠕虫，长度约 10 厘米，表皮光滑有粘液。它是一种穴居物种，几乎完全生活在地下，基本没有视力，眼睛只能分辨光暗。

一家建筑公司的老板以 2.5 万美元，拍卖得到该物种的命名权，然后他将该蠕虫命名为"特朗普蠕虫"。原因是特朗普拒绝承认气候变化，并且采取了很多极端化的措施，好像这种蠕虫只能看出黑白，无法看到更多的颜色。

## a great alarm clock app ui design view

Nokia N9 的闹钟设计（英文）

http://nition.momentstudio.co.nz/2014/08/the-nokia-n9-alarm-clock/

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051010.jpg)

Nokia N9 手机的闹钟 App 的设计非常出色，作者介绍这个设计的优秀之处。

## use typescript or native javascript view

何时使用 TypeScript？（英文）

https://khalilstemmler.com/articles/when-to-use-typescript-guide/

TypeScript 正变得越来越流行，本文作者谈了自己的看法，何时应该使用 TypeScript，何时应该使用 Native JavaScript。

## github rank web app

github-rank

https://github.com/jaywcjlove/github-rank

https://wangchujiang.com/github-rank/

Github 中国用户排名。（@xurui3762791 投稿）

## the rise of never getting married rate history

终生不婚率

以下摘自日本纪实书籍《无缘社会》（上海译文出版社，2014）。

社会学把五十岁时仍未结过一次婚的人的比率称为"终生不婚率"，一般认为这个比率今后会呈增长趋势。

（日本）男子的终生不婚率 2005 年时为 16%，预计 2030 年将上升到大约三个男子就有一个。女子 2030 年将为 23%，虽然略低于男子，然而与 2005 年相比，则相当于增加了两倍以上。今后社会中，终生不结婚的现象将会司空见惯。

我们就终生不婚率急剧攀升，对专家进行了采访。藤森克彦是瑞穗信息综合研究所的首席研究员，他很早就关注单身化的进展。藤森君认为，不结婚者增加的原因，有以下几项：

一、便于独立生活的城市基础设施日趋完备（诸如便利店的普及等），独自一人生活的不方便越来越少；

二、终生职业急剧减少，收入不稳定的非正规雇佣越来越普遍。

三、生活方式发生了变化，到了某个年龄必须结婚的社会观念正在弱化。

四、人们对婚姻质量的要求提高，而且女性经济实力上升，不结婚也能够生活的人增加了。

他说其中第二项的原因尤为重要。大多数人要结婚成家时，会想到要增加住宅费用和子女教育费等支出。如果此人从事的是工资和待遇均不稳定的非正规雇佣工作，他势必会心中不安，担心将来这些费用无法筹措，从而想结婚也结不了婚。

## those projects never getting published story

那些没有发布的项目

https://styts.com/cycle-of-side-projects/

作为一个程序员，我有 100 多个没有发布的个人项目。

它们通常是这样开始的：我对一个想法感到兴奋，估计可以在较短的时间内完成，比如一个周末或几周。结果也差不太多，我疯狂地工作一段时间，项目或多或少都写好了。

但是它能够发布了吗？它是否算完成了呢？有趣和令人兴奋的部分确实是基本完成了，能够证明某个概念是有效的。但是，又好像缺少了一些东西，不是特别能引起别人的兴趣，有一些乏味。项目缺乏设计或视觉呈现，这算不上很重要，功能才比较重要，项目确实能工作。

它也没有登陆页面和介绍页面，这些将对新用户非常友好。但我不是一个好的作家，写不出太多文字。我甚至讨厌写作，我害怕被别人评判，所以我选择不写。

最后一个缺失的部分是营销。世界上几乎没有任何事情，比一个内向的人想到一个创意更糟糕，因为他不得不向全世界推销自己的想法。如果世界批评你的项目怎么办？如果你了解到，别人已经做过了怎么办？世界也可能完全沉默不加理睬，就像以前的许多人一样，你的项目将沉没在互联网的深处。

这些缺失的部分不算多，可能还需要投入整个项目时间的 20％。但是这最后的 20％，对你来说，比 80％用在编码的时间更难做到。因此，你可能会让项目就停在那里。何况世界上又出现了新的闪亮的东西，你又可以急切地在新东西上工作了。

再过一会，你就会去拥抱新项目，忘了旧项目。让那些没做完的事情继续保持没做完，让这样的周期变成永久化。

## abstracted competition between windows and linux quote

20 年前，每个人都使用 Windows，只有一小部分人在业余时间浪费生命编译 Linux。

Windows 用户看到以后，感到很困惑："你们已经拥有了所需的一切，能够完成工作并且易于使用，为什么还要这样折腾？！"

-- 《AWS vs K8s 是新形式的 Windows vs Linux》

https://zwischenzugs.com/2019/03/25/aws-vs-k8s-is-the-new-windows-vs-linux/

## behind the success of stack overflow quote

Stack Overflow 已经成立 11 年了，现在，世界上每个开发者实际上都使用它。我经常看到开发者编写代码时，他们就会在一个浏览器窗口中打开 Stack Overflow。

嘿！我们保证，你不用注册或付钱，就能看到答案。

-- Joel Spolsky，Stack Overflow 的联合创始人

https://www.joelonsoftware.com/2019/03/28/the-next-ceo-of-stack-overflow/

## you may not popular web frameworks quote

原型产品或者第一个版本，几乎总是不需要那些时髦的 Web 框架。你需要的是以最快的速度推向市场，忽略那些花哨的潮流，确保第一次出货。

-- 《你可能不需要时髦的 Web 框架》

https://char.gd/blog/2019/you-dont-need-that-hipster-web-framework

## abstracted from the popularity of printing tech quote

十六世纪，欧洲普及印刷术以后，一个意外不到的后果是，大学教授的薪水急剧上升，开始远远高于技术工人。

-- 《印刷术推动欧洲》

## china is no literature and idea view

一篇新闻报道提到，美国就业行情最好的十种工作，八种是 STEM 岗位。

https://blogs.scientificamerican.com/observations/on-pi-day-lets-disrupt-our-narrow-notions-of-stem/

所谓 STEM，就是科学（Science）、技术（Technology）、工程（Engineering）、机械（Machine）的缩写。也就是说，就业最好的工作，80%是理工科岗位。这跟我的感觉一致，理工科的就业远远好于文科。

现在是信息社会，大量的工作都是技术岗，需要技术工人和工程师，而传统的办公室文秘和管理岗位，由于被软件替代，正在不断减少。这种趋势以后将会越来越明显。理工科学生往往有好几个 offer 可以挑选，文科学生想要一个 offer 都很难，很多人不得不选择考研和考公务员。

所以，中学生选择大学专业的时候，为了就业，建议尽量选择理工科，不要选择文史哲和理论经济学，否则毕业以后，找工作很困难。

除了就业难，文科学生的发展前景也不好。文科培养的其实不是技能，而是思想。但是国内的社会环境，根本不允许你有独立的思想，能做的只是诠释领导的政策。一个例证就是，我国现在培养出了各种各样的人才，但是似乎就是没有思想家。

## drawing a vivid painting is designing a great program view

如何画一幅栩栩如生的画（英文）

https://www.scotthyoung.com/blog/2019/04/17/7-realistic-drawing-skills/

作者讲了七个让作品变得更真实的绘画技巧/技术。它们与软件开发有相似之处，可以借鉴，比如顶层设计、一开始不要过分关注细节等。（@BIT-zhaoyang 投稿）

## america future presidents web ui design theory

美国 2020 总统大选参选人的网站设计（英文）

https://practicaltypography.com/typography-2020.html

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051722.jpg)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051723.jpg)

![](https://www.wangbase.com/blogimg/asset/201905/bg2019051724.jpg)

本文介绍评论了美国 2020 年总统大选的参选人的网站设计，目前一共有几十个参选人。

## why oo(object oriented programming language) sucks view theory

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

### Why OO sucks

My principal objection to OOP goes back to the basic ideas involved, I will outline some of these ideas and my objections to them.

### Objection 1.  Data structure and functions should not be bound together

Objects bind functions and data structures together in indivisible units. I think this is a fundamental error since functions and data structures belong in totally different worlds. Why is this?

- Functions do things. They have inputs and outputs. The inputs and outputs are data structures, which get changed by the functions. In most languages functions are built from sequences of imperatives: "Do this and then that ...". To understand functions you have to understand the order in which things get done. (In lazy FPLs and logical languages this restriction is relaxed.)
- Data structures just are. They don't do anything. They are intrinsically declarative. "Understanding" a data structure is a lot easier than "understanding" a function.

Functions are understood as black boxes that transform inputs to outputs. If I understand the input and the output then I have understood the function. *This does not mean to say that I could have written the function*.

Functions are usually "understood" by observing that they are the things in a computational system whose job is to transfer data structures of type *T1* into data structure of type *T2*.

**Since functions and data structures are completely different types of animal it is fundamentally incorrect to lock them up in the same cage.**

### Objection 2.  Everything has to be an object.

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

### Objection 3.  In an OOPL data type definitions are spread out all over the place.

In an OOPL data type definitions belong to objects. So I can't find all the data type definition in one place. In Erlang or C I can define all my data types in a single include file or data dictionary. In an OOPL I can't---the data type definitions are spread out all over the place.

Let me give an example of this. Suppose I want to define a ubiquitous data structure. A *ubiquitous* data type is a data type that occurs "all over the place" in a system.

As Lisp programmers have know for a long time it is better to have a smallish number of ubiquitous data types and a large number of small functions that work on them, than to have a large number of data types and a small number of functions that work on them.

A ubiquitous data structure is something like a linked list, or an array or a hash table or a more advanced object like a time or date or filename.

In an OOPL I have to choose some base object in which I will define the ubiquitous data structure. All other objects that want to use this data structure must inherit this object. Suppose now I want to create some "time" object, where does this belong and in which object...

### Objection 4.  Objects have private state.

State is the root of all evil. In particular functions with side effects should be avoided.

While state in programming languages is undesirable, in the real world state abounds. I am highly interested in the state of my bank account, and when I deposit or withdraw money from my bank I expect the state of my bank account to be correctly updated.

Given that state exists in the real world what facilities should programming language provide for dealing with state?

- OOPLs say "hide the state from the programmer". The state is hidden and visible only through access functions.
- Conventional programming languages (C, Pascal) say that the visibility of state variables is controlled by the scope rules of the language.
- Pure declarative languages say that there is no state. The global state of the system is carried into all functions and comes out from all functions. Mechanisms like monads (for FPLs) and DCGs (logic languages) are used to hide state from the programmer so they can program "as if state didn't matter" but have full access to the state of the system should this be necessary.

The "hide the state from the programmer" option chosen by OOPLs is the worst possible choice. Instead of revealing the state and trying to find ways to minimise the nuisance of state, they hide it away.

### Why was OO popular?

- Reason 1. It was thought to be easy to learn.
- Reason 2. It was thought to make code reuse easier.
- Reason 3. It was hyped.
- Reason 4. It created a new software industry.

I see no evidence of 1 and 2. Reasons 3 and 4 seem to be the driving force behind the technology. If a language technology is so bad that it creates a new industry to solve problems of its own making then it must be a good idea for the guys who want to make money.

This is is the real driving force behind OOPs.

### See The Third Manifesto

[This section added in 2000 for COSC345 by R. A. O'Keefe.]

The book "The Third Manifesto" by Date and Darwen is about how to design object data bases "right". In the appendices, they treat SQL3 rather ungently, but no more ungently than the muddled giant deserves. They are even more critical of ODMG; if the industry cannot, after spending large amounts of time and money, produce a logically coherent object model for object data base systems, perhaps OO is not as simple or as usable as it seems.

## rust is cult of god view theory

Rust 语言的编译时内存安全（英文）

https://kkimdev.github.io/posts/2019/04/22/Rust-Compile-Time-Memory-Safety.html

Rust 语言不会发生内存错误，都能在编译时发现。本文通过几个简单的例子，解释为什么这项功能很有用。

---

### Rust - Compile Time Memory Safety

Apr 22, 2019

In this post, I will explain why Rust is interesting by making an analogy between "dynamic vs static typing" and "C++ vs Rust's static memory safety" without going into too much detail.

### Preventing type errors at compile time

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

### Preventing memory errors at compile time

Since memory safety in C++ is a major practical issue, it would be great if we can check them statically in a similar manner that static typing does.

Yes, this was one of the main motivations behind the creation of Rust. Just like C++ compiler tracks type information for each variable, Rust compiler tracks ownership, lifetime, and aliasing for each variable in addition.

Here is a small list of memory issues that can be statically verified with Rust.

### Using uninitialized variable

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

### Invalid memory access

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

### Dangling pointer / variable

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

### Incorrectly using a moved object

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

### Data race in multithreading

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

### How Rust is received

Rust has been consistently ranked #1 in [Stack Overflow developer survey's most loved programming languages category](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages) for 4 years in a row, followed by Python #2, Typescript #3, and Kotlin #4 in 2019.

Also, it got favorable comments from some of the highly regarded C/C++ programmers:

- [John Carmack](https://en.wikipedia.org/wiki/John_Carmack): ["...writing Rust code feels very wholesome."](https://twitter.com/id_aa_carmack/status/1094419108781789184?lang=en)
- [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds): ["...We've had the system people who used Modula-2 or Ada, and I have to say Rust looks a lot better than either of those two disasters."](https://www.infoworld.com/article/3109150/linux-at-25-linus-torvalds-on-the-evolution-and-future-of-linux.html)
- [Miguel Icaza](https://en.wikipedia.org/wiki/Miguel_de_Icaza): ["...I have been following an OS written entirely in Rust, and it has great idioms."](https://www.reddit.com/r/programmerchat/comments/4dxpcp/i_am_miguel_de_icaza_i_started_xamarin_mono_gnome/d1ve1k5?utm_source=share&utm_medium=web2x)

### Rust in production

- [Google Chrome Crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/)
- [Facebook's new Mercurial server](https://www.theregister.co.uk/2016/10/18/facebook_mercurial_devs_forget_git/)
- [Amazon AWS Firecracker](https://www.reddit.com/r/rust/comments/a0rph0/aws_firecracker_microvm_is_all_rust/)
- [Microsoft Azure IoT Edge](https://github.com/Azure/iotedge/tree/master/edgelet)
- [Red Hat Stratis storage](https://github.com/stratis-storage)
- [Dropbox storage optimization](https://qconsf.com/sf2016/sf2016/presentation/going-rust-optimizing-storage-dropbox.html)
- [Mozilla Servo](https://servo.org/)
- [Cloudflare's QUIC protocol implementation](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/)
- [NPM](https://www.youtube.com/watch?v=GCsxYAxw3JQ)
- [Unity data engineering](https://twitter.com/bltroutwine/status/1002234680949719040)
- [Twitter build team](https://twitter.com/stuhood/status/978410393944047617?s=19)
- [Reddit comment parsing](https://www.reddit.com/r/rust/comments/7utj4t/reddit_is_hiring_a_senior_rust_engineer/)

### Conclusion

This is just one example why Rust is compelling, and there are so many other things that Rust got it right. Hopefully it was interesting enough for you to read more about Rust!

### References

- [https://www.jonathanturner.org/2017/10/fun-facts-about-rust-growth.html](https://www.jonathanturner.org/2017/10/fun-facts-about-rust-growth.html)
- [https://www.jonathanturner.org/2018/07/snapshot-of-rust-popularity.html](https://www.jonathanturner.org/2018/07/snapshot-of-rust-popularity.html)
- [https://users.rust-lang.org/t/rust-quotes-and-press/5405](https://users.rust-lang.org/t/rust-quotes-and-press/5405)
- [https://www.rust-lang.org/production/users](https://www.rust-lang.org/production/users)

## 300 loved posts is who you are quote

据说，只要你在 Facebook 上面按过 300 个"赞"，它就会比你自己更了解你。

-- 《电脑会拥有一切吗？》

https://medium.com/swlh/can-a-computer-own-something-510295d72f82

## why programmers share ideas view

前些日子，一个运营的女同学问我："为什么程序员喜欢分享？"

我说，整个程序员社区都是这样啊，把自己知道的东西告诉别人，也从别人那里学习新知识。她回答，我就不喜欢分享，我的运营计划一说出去，所有人都知道了，好不容易想出来的东西，马上就被别人拷贝了，我什么好处也拿不到。别的运营也是这样，都不愿意分享自己的成果。

我想了想，发现真的是这样：除了程序员以外，好像没有别的行业，流行分享自己的知识。相反的，这个世界上大部分行业，强调的都是保密，千万不能让别人知道我的独家信息和知识。

由此看来，程序员世界的开源和分享，其实是例外。正常情况下，这些东西都应该是标价出售的，花了钱才能拿到手。

经济学有一个假定，每个人都是自私的，追求自己的利益最大化，从而才能让这个世界变得有效率。那么，当我们鼓励开源和分享的时候，可不可以说我们正在做一件反人性的事情呢？

## why we are over working view

为什么我们的工作时间越来越长？

https://www.ljsw.io/knowl/article/FH.html

中国社科院曾经发布过一个报告，说 2017 年我国每天工作时间超过 8 小时的人，占了 42.2%。而且这不仅仅是中国的情况，日本，美国这些发达国家也普遍存在过劳。

这种现象虽然普遍，而且我们都身在其中。但仔细想想就会发现，其实"过劳"这件事，不太符合逻辑。

我们都知道，近两百年，人类整体的生产效率，那是一飞冲天啊。按说，生产效率上去了，单位工作时间的产出高了，那相应的工作时间应该减少才对啊。所以经济学家凯恩斯在 1930 年曾经做出一个有名的预测，他认为到 2030 年，人类的劳动时间每周 15 小时，就足够了。

现实是，很多互联网公司甚至开创了 996 模式，上午 9 点上班，下午 9 点下班，一周工作 6 天。我们还有 724 模式，一周 7 天 24 小时随时待命。你看，凯恩斯在 1930 年的预测错了。错的离谱，方向都错了。

问题是：他为什么错了？工具越高级，应该干活越省力才对。那为什么我们反而更累了呢？

《过劳时代》这本书里提供了很多解释。比如，全球化把所有人拉到了同一个竞争平面上。你是在一个地方工作，但你不是在和一个地方的人竞争。一个美国的工人是和一个中国的工人，甚至是非洲的工人在竞争。所以，竞争强度增大了。再比如，消费主义盛行。你和身边的人越来越多的攀比，比房子比车比包包比度假酒店，你想挣钱的欲望就越大，所以只能拼命干活。等等。

但是，我觉得最有说服力的解释，不是这些。问题的根子不在别的，就在于生产工具本身。它越进化、越高级、效率越高、越好用，我们就用得越多，所以工作时间就越长。

这是一个很有意思的悖论。举个例子，过去我们上班，必须得到单位才行，和同事见了面，才能展开协作。很不方便，后来有了电脑，有了邮件，有了微信，按说是更方便、更省时间了。但是结果呢？你知道的，老板能随时在微信群里抓到我们说事，周末也行，深更半夜也行。你上班的时间能不更长吗？

表面上看，工具的发明，总是解决一个现实问题的。有了斧头，砍树就更快。有了汽车，走得就更远。这是工具给我们提供的第一样东西，叫便利性。

但是，如果你只看到这一面，就忽略了一个更重要的东西，这也是工具带来的。你要解决问题，任何问题都是有它的时间空间边界的，工具一升级，边界内的问题，是被更高效的解决了，但是，这个时空边界本身也被打破了。于是，会出现新的问题，而且是更大的问题。

比如说，当年人们用马车，非常慢。后来，给车装上了发动机，这就成了汽车，速度提上去了。在有限的时空边界内，这就是一项改善。确定无疑的改善吧？那你说，会因为速度提上去了，所以，人旅行用的时间少了，所以车就会变少吗？当然不是啊。因为汽车打破了原来的时空限制，出现了全新的可能性。你就想，原来坐马车，你至少要带一个马车夫。现在呢？可以开汽车，一个人就可以开车，没有马车夫打扰了。车不仅是交通工具，它还是一个移动的私人空间了。所以就出现了一种新的行为方式，没有确定目的的开车兜风，这种行为模式就出现了。不去哪儿，就是带上女朋友开车去看看诗和远方。车的使用当然就越来越多。

当然，现实中远远不止是这一种情况了。因为车可以走得更远，所以，就一定会走得更远。因为可以走得更远，所以，整个社会的假设就变了，汽车旅馆就出现了，郊区景点和度假村就出现了，远离城区的购物中心，像奥特莱斯就出现了。这就反过来逼迫，你如果不能有汽车，你不能走得更远，你就没有办法享受社会基础设施提供的便利。它就会走到这个程度。

你看，这个过程就是：工具不仅为你解决了问题。工具还在你始料未及的地方，推开了一扇新的可能性的大门。这扇大门一旦推开，就再也关不上了，后面的人就会一涌而出，只会把门撑得越来越宽。这就是工具对人的反向塑造。

有句话叫，身怀利刃杀心自起。你身上有把刀，看见什么都想用上。对，工具虽然只是提供了某种可能，但是人性使然，我们总是倾向于要把这种可能性变成现实性。工具在可能性上推开了多大的空间，我们就一定会倾向于把这个空间填满。

理解了这个逻辑，再回到今天的主题，为什么劳动工具效率越来越高，我们却越来越忙呢？这么看来，答案就非常简单了。和全球化，消费主义有关，但关系没那么大。因为劳动工具让我们工作的可能性越来越高，我们就一定会把这个可能性填满，我们当然就会一直工作，所以越来越忙。

《过劳时代》这本书的解读人，李南南老师还开了一个脑洞。他说，假如未来，你的工资不是按月计算，而是按秒计算。在你的面前，有一个计时器，你每多工作一秒，你的账上马上就会多一毛钱。结果会是什么？表面看起来，这对你只有好处没有坏处。首先，每天工作 8 小时，这就是一天 2880 块钱，不少吧？你收入提高了。更重要的是，你碎片时间的工作，比如，吃饭间歇、睡觉前给同事回个工作微信，也能计算报酬了，对你更公平了。好事吧？好工具。

但这是在你现在的时空边界下看问题。真实情况可能是，这个可能性的大门一旦打开，大多数人因为碎片时间也能挣钱，会工作到筋疲力尽才会停。如果不信，你现在到网吧里去看看那些打游戏挣积分通宵不睡的人，你就知道，如果真有那么一天，工作到筋疲力尽那就是我们的未来。

## microsoft solitaire in world video games hall of fame story

微软纸牌游戏

https://www.theverge.com/2019/5/6/18530946/microsoft-solitaire-world-video-game-hall-of-fame

2019 年 5 月，微软纸牌游戏入选世界电子游戏名人堂，跻身 Doom、俄罗斯方块、魔兽世界、神奇宝贝和塞尔达传说的行列。

https://www.worldvideogamehalloffame.org/games/microsoft-solitaire

![](https://www.wangbase.com/blogimg/asset/201905/bg2019053105.jpg)

1990 年，纸牌游戏首次发布，与 Windows 3.0 捆绑在一起，然后 Windows 的几乎所有版本都带有它。它是世界上游戏人数最多的游戏。

![](https://www.wangbase.com/blogimg/asset/201905/bg2019053106.jpg)

## unsplash monthly cost stats

Unsplash 的运营成本是多少？（英文）

https://medium.com/unsplash/what-does-unsplash-cost-in-2019-f499620a14d0

Unsplash 是最流行的高清图片分享网站，创始人披露，2019 年 2 月该网站的运营成本：服务器 + 带宽大约 7 万多美元，数据处理 + 监控 2 万多美元，总费用 10 万美元。

## goldendict laptop app

goldendict

https://github.com/goldendict/goldendict

![](https://www.wangbase.com/blogimg/asset/201905/bg2019053117.jpg)

一个基于 QT 的桌面词典，支持 Windows / Mac / Linux 平台。（@circleapps 投稿）

## how will a good or a bad tech die view

学习 Dart 语言的 10 个理由（英文）

https://hackernoon.com/10-good-reasons-why-you-should-learn-dart-4b257708a332

Dart 语言本来已经死掉了，就是因为 Flutter 这个非常有前景的业务绑定了它，所以又活过来了。说到底，还是业务重要。好的技术不一定能活，坏的技术不一定会死，取决于有没有业务。

## four basic design priciples theory

非设计师需要知道的设计原则（英文）

https://medium.freecodecamp.org/fundamental-design-principles-for-non-designers-ad34c30caa7

如果你的团队没有专业设计师，那么这篇文章教你四个基本的设计原则。只要你遵循这四个原则，就会取得不错的效果。

---

MARCH 5, 2019/[#DESIGN](https://www.freecodecamp.org/news/tag/design/)

### Fundamental design principles for non-designers

![Fundamental design principles for non-designers](https://cdn-media-1.freecodecamp.org/images/1*FOsR41GXae-KPlvQM1vWpg.png)

by Anna 4erepawko Mészáros

_This one is for all the content creators out there who can't afford to pay a professional designer, as well as for non-designers on a team where designers are always too busy to help. If you can follow these simple steps, I guarantee your designs will look better._

This list was born out of years of observing my non-designer friends, family and colleagues struggle with designing things they need in their everyday life. Personal newsletters, CVs and portfolios, pictures for posts on Facebook or Instagram, video thumbnails for YouTube and so on.

All of these people came to me for help and advice on how to make things look better. I'm a firm believer in the whole "teach a person to fish" idea, so rather than designing things FOR them, I tried to give them valuable advice that could help with similar issues in the future.

As time went on, I realised I've been giving people all the same tips over and over again. I have worded them differently each time, but all of my advice I can distill down to these four principles.

I am aware that there are thousands of lists just like this one out there, but I find these lists to be too excessive. You can't really consistently follow a list of 25 "simple" (nothing containing 25 parts can be truly "simple") steps as a non-designer. And you don't have to.

Will this help you create shiny beautiful designs? No. Will this help you create great, clear and comprehensible designs that everyone can easily understand and interact with? Absolutely. So, without further ado, I present to you:

### 4 Fundamental Design Principles Anyone Can Follow To Achieve Great Results

### Contrast

Make sure there is enough contrast between all elements.

Why? Because things that are slightly different, but not different enough, create a kind of [Uncanny Valley](https://en.wikipedia.org/wiki/Uncanny_valley). They feel eerie and repulsive to a human eye, and/or are difficult to comprehend. Now we don't want that in our designs, do we?

Elements of your design should be either exactly the same, or significantly different.

Issues with contrast mostly manifest themselves in 4 different ways:

1. Colour: use dark on light colours and vice versa.

_Example: \*\*Never use combinations like grey on a slightly darker grey or light pink on light blue --- they are extremely difficult to read/interact with._

![](https://cdn-media-1.freecodecamp.org/images/1*1c9lIQ_y0Cz82vs4uF05ZA.png)

2. Size: only put elements next to each other that are either exactly the same size, or a considerably different size.

_Example: \*\*Don't put 32pt and 36pt text lines next to each other. 18pt and 36pt, on the other hand, will work great together._

![](https://cdn-media-1.freecodecamp.org/images/1*Vy_CjoiJ4s3_U3jNW9JZlA.png)

3. Weight: same as with Size, only put elements next to each other that are either exactly the same weight, or a considerably different weight.

_Example: \*\*Don't put "Bold" and "Black" weights of the same typeface next to each other --- because they look too similar. "Light" and "Bold" weights, on the other hand, will work great together._

![](https://cdn-media-1.freecodecamp.org/images/1*WibV_UOHFJxjD1EUbs2sxQ.png)

4. Style: don't put one italic type next to another italic type, or one serif typeface next to another serif typeface. Combine things that are different.

_Example:\*\* Don't put "Times New Roman" and "Georgia" next to each other --- they look too similar. Combine fonts that have considerably different styles._

![](https://cdn-media-1.freecodecamp.org/images/1*kYKhe2rzZkyB8Oi84a6euQ.png)

### Consistency

Make sure similar elements appear in similar ways.

Why? First of all, by keeping things consistent (and, therefore, simple), you allow people to focus their attention on important aspects of your design rather than being distracted by things changing all the time.

Second, consistency increases trust and makes things look actually designed, rather than just quickly thrown together.

Things to stick to once you have selected them:

- Typeface/font
- Colour palette/shade of colour
- Grid
- Alignment
- Style of decorative elements

And so on...

![](https://cdn-media-1.freecodecamp.org/images/1*W843TWXVVLson0ME-6crWQ.png)

Placeholder text courtesy of [Batman Ipsum](http://batman-ipsum.com/)

When you are working on many different pieces that appear next to each other (for example, video thumbnails for your YouTube channel, or covers for your Medium articles), choose one overall style for all of them and stick to it as well.

### Occam's Razor

aka Reduce Visual Noise

The fewer the number of elements you use in your design, the better.

Why? It's hard for the human brain to process information and make decisions with an overload of input. Use as few decorative elements (typefaces, colours, shadows, frames, strokes, icons, patterns and so on) as possible.

Apply a design version of [Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor) to everything:

_If something can be achieved with just 2 elements, don't use 3. If something can be achieved with 10 elements, don't use 20. You get it._

![](https://cdn-media-1.freecodecamp.org/images/1*Bjh-mMQ5VQ99TvHPyCCmNQ.png)

Placeholder text courtesy of [Batman Ipsum](http://batman-ipsum.com/)

If you don't like old English scholastic philosophers and prefer things you can see on Netflix, sure: be the [Marie Kondo](https://konmari.com/) of your own designs. Whatever doesn't spark joy (or isn't a useful part of a design), has to go.

### Space

The way things are positioned sends a meta-level message about their meaning.

Why is this important? Because minding how you position things and how much space you add around them helps reduce the complexity of a design, and, therefore, makes it both more pleasing to look at AND easier to interact with.

To use space in your design to convey meaning mind these 3 things:

1. Proximity = Relatedness

_Things that are closer to each other than to the other elements, are perceived as being related more to each other than to the other elements._

This one is the most important because I feel like it's being ignored too often (even by some people claiming to be professional designers, not to name any names).

It can be applied in many different ways, for example:

- There should be more space between the lines than between each word in a line --- and, similarly, more space between different paragraphs than between the lines inside a paragraph.

![](https://cdn-media-1.freecodecamp.org/images/1*HQyTLidmveDLqN7su2evmg.png)

- Elements of a design should have less space between each other than between those elements and the edges of the composition.

![](https://cdn-media-1.freecodecamp.org/images/1*Wb5mwX_UEIn0Wwsp7ObCNQ.png)

- Labels and supporting information should be positioned near the elements that they describe/relate to.

![](https://cdn-media-1.freecodecamp.org/images/1*zNbzNX9H9GBkfNz2EO5qww.png)

2. Negative Space

In combination with Occam's Razor, give your designs as much negative space as you possibly can, to declutter them and make their meaning more obvious.

Putting too many elements into a limited amount of space is like trying to listen to three different songs at once. It's hard to understand what is being said.

![](https://cdn-media-1.freecodecamp.org/images/1*mNNmcsVmOooLRgtF3CJw1g.png)

Look at Apple's website. One can very clearly understand what is being said (or, rather, sold).

3. Importance and order

This one is extremely common sense but I feel like I still have to mention it here.

Things that matter most, you put first, and/or make them take up the most amount of space. Use sequences of things to convey order. Et cetera. You can definitely figure out the rest.

### The End

Congrats! If you have followed all these steps while making whatever it is you are making, it most likely looks very good by the industry standards.

For everything else, there is always a designer.

## transparent entrepreneur experiment story theory

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

### 实验条件

- 一年时间
- 一个全干工程师
- 无服务(serverless)的开发方式, 让服务器和维护成本趋近于 0

### 实验目标

- 至少 10 款主要产品
- 1000 美元每月的被动收入

### 实验特点

完全透明: 不管是我的思考过程, 产品的源代码, 还是产品的收入情况, 完全公开在互联网上.

### 为什么要完全透明

- 希望对有类似想法的人提供最大的参考意义
- 对自己有一个督促作用, 所有人都可以看到你的工作状态, 自然会做的更用心些
  - 独立开发者一个很大的问题是孤独, 遇到问题容易走入死胡同, 整个过程完全透明, 更有可能获得他人的指点
- 是一种推广手段
  - 当今社会, 信息爆炸, 最贵的是人们的注意力. 注意力也是产品获得用户的第一步. 希望借由实验经历的分享, 获得一些宝贵的注意力.

## librian galgame generator traditional chinese hentai web app

Librian

https://github.com/RimoChan/Librian

https://librian.net/

https://test.librian.net/Librian%E6%9C%AC%E9%AB%94/%E5%89%8D%E7%AB%AF/adv.html

根据准备好的背景图片和剧本，自动生成 Galgame 游戏图景的工具。（@RimoChan 投稿）

## to be a frontend engineer story

上月的周刊提到，文科生不容易就业，理工科的就业远远好于文科。

https://www.ruanyifeng.com/blog/2019/05/weekly-issue-56.html

我是有感而发，自己就是文科毕业，后来改做互联网开发，部分原因就是本专业看不到前景。我改做了前端工程师，其实个人兴趣不在前端，但是前端的难度相对最低，外行容易入门。一个文科生改行成为后端工程师，难度太大了。

我改行的时候，正赶上手机互联网兴起，迫切需要解决手机 App 的 UI 问题，这刺激了前端工程师这个行业，成为整个软件业的热点，市场的招聘需求非常旺盛。

现在，情况完全变了。一方面，手机 App 的 UI 已经有了比较成熟的解决方案，不再是一个瓶颈，一般页面的开发难度都不高，跟着教程就能做出来，剩下没解决的问题都是技术硬骨头。另一方面，手机上网人口增长趋缓，导致前端工程师的需求不再像以前那样爆炸式增长。

现在对前端工程师的技术要求，大大超过以往。我刚进这个行业的时候，最主要的工具库是 jQuery，跟现在相比，完全是小儿科，都被淘汰了。此外，整个软件开发的瓶颈，附加值最高的部分，正在往后端转移。AI 工程师、算法工程师、系统工程师、Devops 工程师变成最紧俏的岗位。这些岗位的技术难度更大，外行更不容易入门，以后文科生再想转软件工程师，怕是没有那么容易了。

## python a battery included programming language theory

Python 清理过时的标准库（英文）

https://www.python.org/dev/peps/pep-0594/

Python 的设计哲学是"自带电池"（battery-included），就是把需要的功能都包括在标准库里面。但是，随着 PyPI 越来越方便，Python 社区正在检讨这种哲学是否正确。缩减标准库可能是必要的，能让 Python 发行版更精简和灵活，第一步就是把过时的功能移出标准库。

## 15 years of legend pirate bay story

十五年了，海盗湾依然存在（英文）

https://melmagazine.com/en-us/story/after-15-years-the-pirate-bay-still-cant-be-killed

海盗湾成立至今，已经十五年了。无数次被告，服务器被抄家，域名被封锁，甚至四个创始人都关进监狱一年，但是直到今天，它依然在正常运作。

## full-featured markdown presentation web app

fusuma

https://github.com/hiroppy/fusuma

将 Markdown 文件转成幻灯片的工具，功能很强大，在本地起一个 HTTP 服务，完成很多后端功能。

## github repo recommendation web app

Hello GitHub

https://hellogithub.com/

跟踪收集 GitHub 新项目的《Hello GitHub》的官网。（@Salmonberry 投稿）

## meaning of internet archive story

你的互联网数据正在腐烂

https://theconversation.com/your-internet-data-is-rotting-115891

如果有一家互联网公司告诉你，它可以永久保存你的数据，千万不要相信。

据估计，互联网目前可以访问的数据，大约是 15 个 ZB（zettabytes），并且每秒增加 70TB。

那么大的数据量，如果把它们都保留下来，可想而知要付出怎样艰苦的努力。就算保留下来了，那么要保留多久呢，10 年还是 50 年？

一家名为 The Internet Archive 的非营利性组织，正在持续保存网络快照，不过只针对主要网站的网页。截至去年秋天，它保存了超过 4500 亿张网页，总的数据量 25PB，只占互联网总量的 0.0003％。

存储成本其实很低，每 GB 不到 0.05 美元。但是，存储只占保存成本的一小部分，收集、管理、维护、联网都需要大量昂贵的人力劳动，这才是大头。

有一种说法是，数据是新的石油，所以互联网企业为了利用这种资源，会好好保存数据。但是，如果数据对于企业来说价值较低，那么他就没有动机保存数据。所有大型互联网公司放在心上的，不是你的利益，而是他们自己的利益。一项调查表明，互联网 3%的网址会报 404 错误。互联网的数据增长速度远远快于保存的速度。

所以毫不奇怪，你的互联网数据正在腐烂，最终将丢失。你应该始终保留一份你自己数据的备份。

互联网既不安全也不永久。它不可能永远保存数据，用户不应该有这种想法。

## a decade of a remote worker story theory

一家公司要么全部人员都是远程办公，要么根本就没有远程办公，不太可能有中间状态。

很多公司吹嘘自己的员工可以自由选择远程办公，其实做不到，因为办公室工作的团队成员，不可避免地会具有信息优势，能够更早更多地得知信息，特别是如果领导层都在公司办公的话。

-- 《我的十年远程工作经验》

https://vpetersson.com/remote-work/2019/05/18/a-decade-of-remote.html

---

### A Decade of Remote Work

18 MAY - 2019
15 minutes

### Intro

While still in college (go [Broncos](https://www.santaclarabroncos.com/)!), I teamed up with Alex ([@slevenbits](https://mobile.twitter.com/slevenbits)) to create a startup. We were young, inexperienced and naive. Our first project was called YippieMail and it was an email aggregator. Simply put, YippieMail could display all your webmail accounts (i.e. Hotmail, Yahoo and Gmail etc) in the same web interface (this was before most email providers supported IMAP, so you couldn't use an email client). Looking back at it, YippieMail was a pretty stupid idea, but it did land us meetings with Sequoia Capital and few other VCs on Sand Hill Road. Keep in mind that this was around the time [Meebo](https://en.m.wikipedia.org/wiki/Meebo) raised many millions from Sequia and DFJ to do the same thing but for Instant Messaging (IM), so at the time it probably did not seem as such of a bad idea.

It was in the early days of YippieMail, which was pivoted into [YippieMove](https://www.yippiemove.com/) (RIP 2008-2019) my now decade-long remote experience began (some of which as a digital nomad).

When we began working on YippieMail, Alex was living in San Jose, and I was living in Mountain View. For those of you not familiar with the Bay Area, these two cities are not very far apart, but when you factor in the horrendous traffic conditions, it can easily take well over an hour to drive between the two (while it might only take 20-30 minutes without traffic). It was then we decided to work remotely rather than getting an office somewhere in between. Ever since, in all our subsequent ventures ([Blotter](https://www.wireload.net/products/blotter/), and then [Screenly](https://www.screenly.io/)) have been remote-only.

To this day, even though both Alex and I both live in London, we only get together every other month or so in person to catch up.

So what have I learned over this decade of working and running remote teams? Let's dive in.

### Remote is not for everyone

The first thing that I would like to point out is that remote working is not for everyone. Over the years, we have had a few team members that could not work remotely. In some cases these people discovered this themselves and chose to leave, and in some other cases it became clear that it was not a match.

Usually, people who fail at remote work tend to either lack the self-discipline it requires, or they are simply socially oriented and thrive being around other people. In the latter case, working from a shared office can help, but even then, if you lack the self-discipline and habits required, you are likely not going to thrive. While there are plenty of exceptions to this rule, young people (early 20s) tend to struggle more with this than people who have reach their late 20s and early 30s.

The bottom line is that some people excel while working remotely, while others work better in a regular office environment. It's hard to screen for this in an interview, but it usually becomes evident during the first year. It is important to look out for this in team members as a manager.

### Either you're remote or you're not

Either you're remote-only or you don't do remote at all. Lots of companies brag about giving their staff the freedom to work remotely. However, the reality is that unless it is in your company's DNA to be a remote company, it will inevitably favor the team members that are working in the office (in particular if this is where the leadership is). The reason for this is largely related to the flow of information. People chat over the water cooler, over coffee or over drinks after work. This leads to unevenly distributed information, which easily can make people feel left out or that other team members simply assume everyone else knows about something despite it never made it to the official channels. In a remote-only culture however, the information flow tends to happen in a more organized fashion either over email or in the company chat rooms (or even in GitHub Issues).

### Company and team summits

Company summits matter a lot. Even if you're a remote team, having everyone get together in person every year (or twice a year) can make a huge difference. While video chats is a [higher context](https://en.m.wikipedia.org/wiki/High-context_and_low-context_cultures) medium than email or chat, it still isn't a full substitute for meeting face-to-face. When we did our very first summit for Screenly at the lovely [Villa Lava](https://www.villalavacroatia.com/) in Croatia (a great place for company summits), it was the first time our team members got to meet each other in person, despite having worked together for years. In retrospect, it was a big mistake to not be doing summits earlier, as we could see a big difference in *how* the communication changed online *after* the summit. Because text based chat is a low context medium, it's very easy to misread the intent of a message. However, if you have met this person in real life, you have a lot more to work with and can use that context to read the same message in a new light. These days, the developers at Screenly get together in person every quarter (roughly) for a one week summit. The entire company gets together annually. (You can read more about how we work at Screenly in the article [How we work at Screenly](https://www.screenly.io/blog/2016/11/23/how-we-work-at-screenly/) that I wrote a few years ago.)

### Tap in to a large talent pool

Hiring remote means a larger talent pool. I'm hardly the first to point this out, but one of the major reasons why it makes sense to be remote-only. You are no longer limited to hiring in your geographic area. The tools for recruiting have changed a lot over the last decade since I started working remotely. That said, recruiting is far from easy. Because people from around the world are able to apply to your openings, the second you post a job ad, the floodgate opens. The reality is that 99.9% of the applicants for remote jobs are people who utilize the "spray and pray" approach. Filtering them out is fairly easy, but in best case scenario, you'll have a handful of decent candidates for every 100 or so applicants.

The filtering process that tends to work well is to have rigorous screening questions that actually requires a little bit of work and is unique. This will help you weed out all the candidates who simply put "Call me to discuss" in all the boxes (or worse).

Yes, this screening process will take a fair bit of time, but tools like Upwork make it fairly quick to reject candidates that fail to put in the effort (or are clearly poor fits).

From experience I am also very reluctant to work with agencies and prefer hiring team members directly. The reason being that a number of agencies we've run across over the years have a small amount of talented engineers that will do the screening process and perhaps the first few weeks, and then they gradually shift the work over to a more junior person, while charging the same rate.

It's also worth mentioning that with the raise of the digital nomad movement, there are a lot more job boards that are "remote friendly," including [Angelist](https://angel.co/) and a plethora of (IMHO overpriced) remote-focused job boards.

A final word of warning for people hiring remote team members: don't hire people who want to join your company *just* because you offer them to work remotely and subsequently have more flexibility. While not always true, it is sometimes an indicator of people who want to coast along with minimal supervision (while perhaps getting their own business off the ground). What you really want is people who believe in the vision and product, and where remote is a perk, not a the reason why they want to join.

(I have intentionally not mentioned the legal structure of how to hire remote talent. IANAL so you probably should check with one to ensure you comply with the local laws.)

### Finding good remote workers is probably easier for some roles than others

Remote work is likely easier for engineering than for other roles. In all my experiences, we have always been engineering heavy organizations. Yes, we've had a number of other roles too, but in terms of head count, the engineers always outnumbered all other roles. What I have noticed however is that it tends to be easier (in general) to manage engineers remotely compared to other roles (such as sales). This is likely related to a number of variables, but in general, I've found engineers to be more self-motivated and requiring less handholding. There is of course a large correlation with seniority too. Regardless of position, more senior people tend to require less handholding and thus work better remotely.

### Remote is a major time saver

Remote work saves a lot of time. First, it should be said that remote work does not necessarily equal working from home. We've had plenty of team members over the years that preferred to work from a shared office (including myself for a period). To each and their own. If however you work from home, you can save a big chunk of time (and money) every day. When I had an office in Shoreditch, it took me 30-40 minutes each way. That adds up top a lot of time every week. These days I have a dedicated room as my home office (something I *strongly* recommend if working from home). This means that my morning commute is roughly 60 seconds, and that includes a detour to the kitchen to fetch myself a cup of joe. What you do with this time is up to you, but I usually dedicate this 1-1.5h every day to exercise.

### The power of routines and habits

Habits will make or break you as a remote worker. As mentioned earlier, remote work is not for everyone. It requires a lot more self-discipline than a regular office job where you're constantly "supervised." Over the years, I've experimented with a large number of habits, and at this point I've devised a set of habits that work pretty well for me (but they are likely to change as I keep experimenting). The most important habit when working remotely from home is to mentally trigger a beginning and an end of the work day. It's easy to sit in your PJs or sweats all day just because you can, but it will likely backfire in the long-run.

To make this more concrete, here's my current daily schedule:

- 07:00: Wake up
- 07:05: Reading ([Sharpen the saw](https://www.artofmanliness.com/articles/the-7-habits-sharpen-the-saw/), from The 7 Habits of Highly Effective People)
- 08:00: Check in with the team
- 08:10: Exercise + shower
- 09:30: Start of my work day
- 19:30: End of my work day
- 23:00: Bedtime

Clarification: This does not necessarily mean I work 10 hours per day every day (sometimes I do). I do take a lunch as well. Also, I am perfectly happy to wrap my day at 17:30 after a productive and successful day. The 19:30 hard stop, not as hard requirement for me to work to it every day.

Update: As COVID-19 has taken its toll on the world, I've altered my schedule slightly. With gyms being closed, I had to replace my morning exercise (normally swimming or weight lifting) with training at home with body weight and extension bands. While I was skeptical at first to the effectiveness of this, I've grown to really like the effectiveness. As a result, I've cut down my training to about 20 minutes, and allocated the saved time towards more reading.

As my good friend Milos ([@milosgajdos](https://twitter.com/milosgajdos)) pointed out while reading a draft of this post, an early start isn't for everyone. Shifting your day is perfectly fine too. The point is not when you start your day and when you wrap it, but building and sticking to habits that make you productive.

If you want to learn more about the importance of habits, I strongly recommend reading [The Power of Habit](https://www.amazon.co.uk/Power-Habit-Why-What-Change/dp/1847946240/) by Charles Duhigg. Also, a word of warning, don't get obsessed with reading all about productivity. I've been a victim of productivity-porn myself, but I can tell you first-hand that you'll waste far more time reading about it than you'll ever save.

### Sleep matters (shocking, I know...)

Perhaps not related to remote work itself, but more the startup culture. VC used beat it in to young and naive early 20-something kids that it was cool (and even expected) to frequently pull all-nighters and sleep under their desk. I feel like the tide has finally turned on this. Yes, you still have the Gary Vaynerchuk-wannabees out there with their hustle-porn, but I think (and hope) they are a dying breed.

What is however related to remote work is the the importance of wrapping up your day. As you may have noticed above, I end my day at 19:30. After that I'm not allowed into my office (unless there's an emergency). I also try to keep my screen time to minimal in the evenings. In my younger years, I frequently worked late into the night. Yet, even if I clocked more hours, I got less done.

Switching off very is important, and it is a lot more challenging when you're working remotely. If you're struggling with switching off your devices at night, one "brute force" approach that I've used myself at times is to use one of the many parental control devices. They come in all shapes and forms (ranging from apps to hardware appliances), but what they all tend to have in common is that you can turn off your internet at a certain hour (say after 21:30).

If you want to learn more on this, I recommend the book [Why We Sleep](https://www.amazon.co.uk/Why-We-Sleep-Science-Dreams/dp/0241269067) by Matthew Walker.

### Distractions kill productivity

Kill the distractions. Working from home is challenging for a lot of people. It's easy to get distracted by various things around the house, but for me the biggest distraction has always been the digital kind. Cal Newport nails this in his latest book [Digital Minimalism](https://www.amazon.co.uk/Digital-Minimalism-Living-Better-Technology/dp/0241341132), where he talks about how distracting mobile phones and social media can be. I've found this first hand. For a long time, I kept my phone next to me on the desk. However, every time the phone buzzed, I lost my focus. Even if I did not check the phone, it still got me distracted. The remedy for me was to simply move all my distractions to the living room (i.e. my phone and Apple Watch) and just check them periodically throughout the day. Alternatively, Airplane mode on your devices is another great way to kill noise.

For the hackers out there, I've found that running something like [i3](https://i3wm.org/) is also great for cutting out noise on your desktop. I use this on my "developer workstation" (which is different from my other workstation).

### Don't skimp on equipment

While having good equipment is always important, you tend to have more control over your equipment when working remotely than when you work in an office where everything is provided to you on your first day. You are going to spend a lot of time in front of your workstation. Your body will thank you for spending a bit more money and get:

- A large 4K screen (they have crawled down a lot in price recently) on a monitor arm
- A standing desk (I use [this](https://www.ikea.com/us/en/catalog/products/S29022520/) one from Ikea)
- A good ergonomic keyboard

### That's a wrap!

That's it. At least for now. I'm sure there are things that I have missed, but it should hopefully be useful for other (new and old) remote workers out there.

If you are eager to learn more, I would recommend the following additional books:

- [Deep Work](https://www.amazon.co.uk/Deep-Work-Focused-Success-Distracted/dp/0349411905) by Cal Newport
- [ReWork](https://basecamp.com/books/rework) by Jason Fried and David Heinemeier Hansson (DHH)

Also, take a look at [How We Work at Screenly](https://www.screenly.io//blog/2016/11/23/how-we-work-at-screenly/), a blog post I wrote a few years ago, but it still has relevant information.

[Discuss on Hacker News](https://news.ycombinator.com/item?id=19953854).

You can find more remote work articles [here](https://vpetersson.com/remote-work/).

## retro 2009 most popular iphone apps history

2009 年最热门的 iPhone 应用程序（英文）

https://www.fastcompany.com/90356079/whatever-happened-to-the-hottest-iphone-apps-of-2009

苹果公司的应用商店即将满十周年，本文回顾了 2009 年最热门的付费应用和免费应用。出乎意料，相当一部分应用活到了今天，这说明如果你一开始领先，很可能会长期领先。

## tesseract js text ocr tech

tesseract.js

https://github.com/naptha/tesseract.js

一个可以完成 62 种语言 OCR （光学识别）的 JS 库。（@ifrontend-xyz 投稿）

## python 100 days guide library

Python-100-Days

https://github.com/jackfrued/Python-100-Days

一个 Python 中文教程库，从最基础的知识讲起。（@Y024 投稿）

## first days in silicon valley story

初到硅谷的日子

https://twitter.com/Austen/status/1131222995962220544

我刚到硅谷的时候，住在自己的车里。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062835.jpg)

有一天，我去教会的活动中心洗澡，那里不收费。结果在高速公路上，车坏了。我不得不联系拖车公司，把车拖走。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062836.jpg)

拖车的师傅听到了我的困境，愿意让我住在他的家里。但是，拖车费再加上修车费，一共要 600 美元，我到哪里去找这些钱呢？

这时，我看到斯坦福体育场有一个海报，周末那里有一场比赛。我以前倒卖过球票，顿时想到可以靠这个挣钱。但是，我没钱收购球票。

我就群发邮件和打电话，询问谁有多余的球票，我可以帮他们卖掉。真幸运，有人有 200 张多余的球票，如果不卖掉，就一钱不值。我说服了他，把球票给我，我会把一半的所得给他。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062837.jpg)

拿到球票的时候，只剩下 24 个小时，比赛就要开始了。我发现了一个问题，斯坦福体育场没有单一进口，而是有许多个进口，我找不到合适的位置销售球票。

真正有经验的黄牛，都是骑着自行车倒票。我找到他们的头，问他愿不愿意收购我的球票。他同意了，以每张 10 ～ 15 美元的价格收购了大部分，我自己留了一些。

比赛当天，我以每张 40 美元的价格出售球票。很快发现，其他黄牛以每张 80 张美元的价格出售。必须承认，我自己肯定卖不到这么高。

比赛开始前 5 分钟，我把价格降到了 5 美元。比赛开始 20 分钟以后，球票已经完全卖不出去了。我还剩下四张没有出手，于是就进场看比赛了。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062838.jpg)

那一天，我足足挣到了 1500 美元，口袋里都是纸钞。

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062839.jpg)

我把 750 美元给了球票原来的主人，600 美元付清了拖车费和修车费，然后就去 Subway 大吃了一顿汉堡。

## why variable type matters view

类型与测试（英文）

https://stitcher.io/blog/tests-and-types

一篇通俗易懂的好文章，介绍类型系统给代码安全带来的好处。一个良好的类型系统，可以大大减少测试的工作量。

## github star history web app

star-history

https://github.com/timqian/star-history

一个开源服务，帮助用户查看 GitHub 项目 star 数目的历史。它的网站可以免费使用，插件是收费的。（@timqian 投稿）

## optimistic or pestimistic does not matter quote

极端悲观者认为任何事都没有意义，极端乐观者认为没必要任何事，所以它们都收敛于无所事事。

健康的态度要么是温和的乐观主义，要么是温和的悲观主义。

-- Peter Thiel

## fact matters while proof does not matter quote theory

重要的是事实，而不是证据。物理学可以在没有证据的情况下进步，但是如果没有事实，我们就不能继续前进。

-- 理查德·费曼

## problems about web components theory

我为什么不使用 Web Components？（英文）

https://dev.to/richharris/why-i-don-t-use-web-components-2cia

Svelte 框架的作者谈 Web Components 方案的一些问题。

---

### Why I don't use web components

For my first post on dev.to I thought I'd write about a nice, safe topic that's free of controversy: web components.

I'm mostly writing this for my future self, so that I have something to point to next time someone asks why I'm a web component skeptic, and why [Svelte](https://svelte.dev/) doesn't compile to custom elements by default. (It *can* compile to CEs, and it can consume CEs as evidenced by its perfect score on [Custom Elements Everywhere](https://custom-elements-everywhere.com/).)

None of this should be taken as criticism of the hard work that has been done on web components. It's possible that I have made some errors in this post, in which case I'd welcome corrections.

Nor am I saying that you shouldn't use web components. They *do* have valid use cases. I'm just explaining why *I* don't.

### 1. Progressive enhancement

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

### 2. CSS in, err... JS

If you want to use Shadow DOM for style encapsulation, you have to include your CSS in a `<style>` element. The only practical way to do so, at least if you want to avoid FOUC, is to have the CSS in a string in the JavaScript module that defines the custom element.

This runs counter to the performance advice we've been given, which can be summarised as 'less JavaScript, please'. The CSS-in-JS community in particular has been criticised for not putting CSS in `.css` files, and yet here we are.

In future, we may be able to use [CSS Modules](https://github.com/w3c/webcomponents/issues/759) alongside [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) to solve this problem. And we may be able to use `::theme` and `::part` to style things inside Shadow DOM. But these aren't free of problems either.

### 3. Platform fatigue

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

### 4. Polyfills

It doesn't help that you need to use polyfills if you want to support all browsers. It *really* doesn't help that the literature on [Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets), written by a Googler (hi Jason!), doesn't mention that they're a Chrome-only feature (_edit: this has been fixed after I opened a [pull request](https://github.com/google/WebFundamentals/pull/8212)_). The [three spec editors](https://wicg.github.io/construct-stylesheets/) are all Googlers. Webkit [seem to have some doubts](https://github.com/mozilla/standards-positions/issues/103#issuecomment-494181931) about some aspects of the design.

### 5. Composition

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

### 6. Confusion between props and attributes

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

### 7. Leaky design

This point is a bit more nebulous, but it weirds me out that `attributeChangedCallback` is just a method on the element instance. You can literally do this:

```
const element = document.querySelector('my-thing');
element.attributeChangedCallback('w', 't', 'f');
```

No attribute changed, but it will behave as though it did. Of course, JavaScript has always provided plenty of opportunities for mischief, but when I see implementation details poke through like that I always feel as though they're trying to tell us that the design isn't quite right.

### 8. The DOM is bad

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

### 9. Global namespace

We don't need to dwell on this one too much; suffice it to say that the dangers of having a single shared namespace have been well understood for some time.

### 10. These are all solved problems

The biggest frustration of all is that we already have really good component models. We're still learning, but the basic problem --- keep the view in sync with some state by manipulating the DOM in a component-oriented fashion --- has been solved for years.

Yet we're adding new features to the platform just to bring web components to *parity* with what we can already do in userland.

Given finite resources, time spent on one task means time not spent on another task. Considerable energy has been expended on web components despite a largely indifferent developer population. What could the web have achieved if that energy had been spent elsewhere?

## react markdown documentation web app

Docusaurus

https://github.com/facebook/Docusaurus

Facebook 出品的 Markdown 静态文档网站的建站工具，前端使用 React 构建。

## historical perspective of the 20th century quote theory

`history` `view` `quote`

500 年后，人们想起 20 世纪，不会想到第二次世界大战，它已经变得跟英格兰玫瑰战争一样久远。人们会想到 DNA、青霉素、计算机和微芯片，因为它们改变了文明。但是，他们想到的第一件事，将是 20 世纪是人类开始探索太空的世纪，阿波罗 11 号登月是 20 世纪最重要的事件。

-- 历史学家亚瑟·施莱辛格（Arthur Schlesinger Jr.）

https://www.smithsonianmag.com/science-nature/what-you-didnt-know-about-apollo-11-mission-fifty-years-ago-180972165/

---

In 1999, as the century was ending, the historian Arthur Schlesinger Jr. was among a group of people who was asked to name the most significant human achievement of the 20th century. In ranking the events, Schlesinger said, "I put DNA and penicillin and the computer and the microchip in the first ten because they've transformed civilization." But in 500 years, if the United States of America still exists, most of its history will have faded to invisibility. "Pearl Harbor will be as remote as the War of the Roses," said Schlesinger. "The one thing for which this century will be remembered 500 years from now was: This was the century when we began the exploration of space." He picked the first Moon landing, Apollo 11, as the most significant event of the 20th century.

The trip from one small planet to its smaller nearby moon might someday seem as routine to us as a commercial flight today from Dallas to New York City. But it is hard to argue with Schlesinger's larger observation: In the chronicle of humanity, the first missions by people from Earth through space to another planetary body are unlikely ever to be lost to history, to memory, or to storytelling.

## the digital independence declaration

数字独立宣言

https://larrysanger.org/2019/06/declaration-of-digital-independence/

维基百科联合创始人之一撰写的互联网领域的权利宣言，摘录两段。

"人类被巨大的数字帝国轻蔑地对待。因此，现在有必要用独立个体的分散网络取代这些帝国，就像互联网的早期一样。"

"我们声明，我们拥有不可剥夺的数字权利。由于目前互联网的专有集中式架构已经促使大多数人放弃这些权利，我们应该要求一个能够尊重它们的新系统。"

## a restaurant asking for one star review story

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

## moral condition of ecmo medical care story

ECMO 的道德困境

https://khn.org/news/miracle-machine-makes-heroic-rescues-and-leaves-patients-in-limbo/

![](https://cdn.beekka.com/blogimg/asset/201906/bg2019062202.jpg)

ECMO 是"体外膜氧合"的缩写（台湾译成"叶克膜"），是一套医疗系统，用于心脏或肺部失去功能的危重病人，在体外完成血液的氧合。

通俗地说，就是将血液引出体外，通过机器将血液里面的废物除去，把氧气加进去，然后再输入体内，充当体外临时的心脏和肺。

ECMO 不是永久性措施，而是一个过渡措施，为病人争取时间，等待心脏或肺的移植。病人必须住在 ICU（重症护理病房），时刻监控，离开 ICU 就会死。ECMO 非常昂贵，2014 年中位数费用为 55 万美元。

如果病人因为种种原因，最终无法进行器官移植，就会产生巨大的道德问题。ECMO 造出了很多死不了的人。病人是有意识的，甚至可能保持清醒和警觉，但是 ECMO 不能长期使用，一旦医疗团队和家属决定拔掉插头，病人立刻就会死亡。

一名 17 岁的男孩患有肺部囊性纤维化，住进波士顿儿童医院的 ICU，呼吸已经衰竭了。挽救他生命的唯一方法就是使用 ECMO，等待肺部移植。

这个男孩完全清醒，可以做家庭作业，给朋友发短信，与家人说话。他在 ICU 生活了两个月之后，诊断出患有无法治愈的癌症，这使得他没有资格接受肺移植。

医生对下一步有很大分歧。有些人主张立即停止 ECMO，因为移植已经不可能了。其他人认为，这个男孩在 ECMO 的帮助下，状态还可以，他的家人有权继续这种生命支持，就像血液透析的情况。

第三个论点出现了，如果这名患者可以长期使用 ECMO，为什么我们不把所有患有呼吸衰竭的人都放在 ECMO 呢？

孩子的父母无法忍受，选择某一天或某一刻关闭 ECMO，因为他们知道他们的孩子会立即死亡。

临床医生最终设计了一个家人同意的替代方案：他们决定不更换 ECMO 的氧合器，这个部件需要每周或每两周更换一次。一旦氧合器逐渐失效，患者就会意识丧失并死亡。这种方案的主要优点是，医生或家人不必选择他的死亡时刻。

## why we sleep quote

睡眠似乎是愚蠢的生物行为。当你睡着了，你不能收集食物，不能社交，无法培育或保护后代。更糟糕的是，睡眠让你很容易被猎食。

但是，如果睡眠不是绝对重要，为什么生物进化没有消除睡眠呢？

-- 《为什么我们睡眠》

https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316/

## programming language feels like infinite quote

一旦语言足够复杂，编程就好像从所有功能之中选择一个子集，其他大多数功能我们从来没有学过。

一旦语言感觉是无限的，增加更多功能的成本就不再明显了。

-- 《为什么大型语言会爆炸》

https://erights.medium.com/the-tragedy-of-the-common-lisp-why-large-languages-explode-4e83096239b9

## startup is good and politics is bad view

生存是一种即时策略游戏，所有的人都是这场游戏的玩家。财务自由了，就是游戏赢家。

具体来说，又分成两种游戏：财富游戏和地位游戏。财富游戏的玩家追求更多的财富，地位游戏的玩家追求更高的地位。

古时候，地位越高，财富越多，当大官就是发大财，所以大家都玩地位游戏。现代社会，财富游戏和地位游戏慢慢脱离了关系，不当大官也可以发大财，财富游戏的玩家多了起来。

这两种游戏有本质的区别。地位游戏一定是零和的，有赢家就肯定有输家。 比如，我当了部门主管，你就不能当了。所以，地位游戏很凶险，必须时刻提防其他玩家的冷枪。财富游戏不是零和的，我盖了一幢漂亮的房子，不影响你也盖一幢。我赚钱了，不影响其他人的利益，很可能还让其他人过得更好。比如，乔布斯创办了苹果公司，其他人就有了更好的电子产品可用。

创业是财富游戏，政治是地位游戏。 因为上面的原因，我认为，创业值得参与，政治不值得参与。有些创业项目也是零和的，比如抢票技术、秒杀技术、游戏外挂等等，那也不值得参与。

## why we read quote

喜欢读书的人在死之前，活过 1000 次，不读书的人只活过一次。

-- 乔治 R.R. 马丁，《冰与火之歌》的作者

https://goel.io/why-read/

## complex system must be failure view

最近，我读了小说《侏罗纪公园》。

这本书改编过电影，大家应该都知道情节：一个富豪复活了恐龙，开设主题公园，结果恐龙逃出来，造成了灾难。

小说里有一个数学博士伊恩·马尔科姆（Ian Malcolm），他是混沌理论专家，专门研究复杂系统。作者通过他告诉读者：侏罗纪公园必定失败。原因很简单：复杂系统不可预测，也无法维护。

![](https://www.wangbase.com/blogimg/asset/201908/bg2019080111.jpg)

"譬如说撞球吧。你打它一下，它就开始不断反弹。理论上来说，撞球是个很简单的系统，几乎可以说是牛顿系统。由于你知道加在球上的力、球的质量，因此你可以计算出球的撞击角度，因而可以预测这颗球的轨迹。从理论上来说，你可以预测它三小时之后将处于哪个位置。

可是事实上，你最多只能预测到未来几秒钟之内的情况。因为有些非常小的影响----桌面不平、桌子木头上有小凹陷之类的问题，都会使情况发生变化。过不了多久，你那些精确的计算就会不灵了。结果便证明了，像在桌上玩撞球这种简单系统也具有不可预测的表现。"

侏罗纪公园是一个复杂系统，人为复活了 6500 万年前灭绝的恐龙，把它们圈养在一起，但是这些基因工程产物的习性，我们一无所知。另一方面，在这些恐龙的旁边，还要维护一个井井有条的主题公园，让游客玩得开开心心，一边看着原始动物，一边喝着可口可乐，享受现代文明。这等于创造出了一个地球上不存在的世界，并让其持续运转，势必引入了空前的复杂性。

复杂系统受到太多的变量影响，任何一个变量发生异常，都可能引发连锁反应。 侏罗纪公园最后的结局也是如此，工作人员一不小心导致停电，让恐龙逃了出来。其他人发现，整个系统过于复杂，无法恢复，只能眼睁睁看着，岛上一片大乱，恐龙到处吃人。这就是说，一个按钮错了，复杂系统就崩溃了。

![](https://www.wangbase.com/blogimg/asset/201908/bg2019080110.jpg)

你可能会说，只要严格管理，就能避免这类错误，比如引入更加完善的权限控制、建立备用供电线路等等。但是这样一来，系统的复杂性就进一步增加了，相当于 为了防止一个按钮失败，又额外引入了更多的按钮。

现实世界就是一个复杂的主题公园 ，为了保证每个"游乐设施"都正常运作，这个公园越造越复杂，管理难度成倍增加，最后人们只好让计算机来管理。根据伊恩·马尔科姆的观点，最后总归会有人按错一个按钮，现实世界就会变得像恐龙横行的侏罗纪公园。

## give up twitter for its third party restriction view quote

推特宣布限制第三方客户端时，我就决定不再使用它了。这种服务要求用户投入大量时间，却不提供个人数据的所有权和控制权。

-- 《我相信 IndieWeb》

https://fogknife.com/2018-05-04-i-believe-in-the-indieweb-it-needs-to-believe-in-itself.html

## what matters is not a highly paid job but to be a senior programmer view

刊首语

一个月之前，我在周刊讨论区发了一个帖子《谁在招人？》，欢迎企业免费张贴招聘/实习信息。现在已经有 30 多家公司的 100 多个岗位，找工作的朋友可以关注。

有的读者私下问我："大部分公司没写报酬，工资会不会给得低？"我心想，你怎么会有这种担心！普通程序员的工资能有多大差别呢？

程序员是一个高度流动的行业。一家公司如果待遇偏低，肯定留不住人。普通程序员的待遇，公司与公司之间的差别不会特别大。

程序员分为两种：普通程序员需要找工作，高级程序员不需要找工作，企业争相邀请他加入。

对于大多数人来说，要操心的不是找一份工资高的工作，而是设法让自己尽快变成高级程序员，可以在这个行业里面为自己定价，而不是让别人给你定价。

## children's job preference survey stats map story

儿童的职业选择

https://arstechnica.com/science/2019/07/american-kids-would-much-rather-be-youtubers-than-astronauts/

阿波罗 11 号飞船登月 50 周年纪念日（7 月 20 日）前夕，乐高公司委托一家民意调查公司，调查了中国、英国和美国的 3,000 名儿童，让他们选择最想从事的职业。

中国儿童的选择依次是：宇航员、教师、音乐家、体育明星、网络红人。

英美儿童的选择依次是：网络红人、教师、体育明星、音乐家、宇航员。

## simple english guide theory

简单英语指南

https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/

美国政府的官方网页，有几百条单词建议，指导你怎么写出简单的文章，不要用复杂的单词。比如说，"a 和 b 可以同时使用，也可以单独使用"，不要用 a and/or b，而要用 a or b or both。

---

https://www.plainlanguage.gov/media/FederalPLGuidelines.pdf

## the problem of object oriented programming quote theory

面向对象编程的问题是，每个对象都有自己的状态，开发程序时，必须记住当前所有对象的状态。

为了让我们的生活更轻松，最好只有一小部分代码库处理状态，其他代码都是无状态和纯的。实际上，这就是前端的 Redux 库取得巨大成功的主要原因。

-- 《面向对象编程：一万亿美元的错误》

https://medium.com/codeiq/object-oriented-programming-the-trillion-dollar-disaster-%EF%B8%8F-92a4b666c7c7

---

### Summary

The provided content argues that Object-Oriented Programming (OOP) is a flawed paradigm that has failed to manage code complexity effectively, suggesting that it's time for the software industry to move towards more reliable and simpler programming approaches, such as Functional Programming (FP).

### Abstract

The article "Object-Oriented Programming --- The Trillion Dollar Disaster" presents a critical view of OOP, questioning its status as the de facto standard for code organization. It posits that OOP, despite its initial promise to simplify code through abstraction and encapsulation, has instead led to increased complexity, promiscuous sharing of mutable state, and difficulty in maintaining and scaling codebases. The author, who admits a bias against OOP, points out that even the creator of OOP, Alan Kay, is critical of its modern implementation. The article suggests that OOP's core ideas, such as inheritance and polymorphism, are misguided and that the paradigm's emphasis on shared state and complex hierarchies makes code unreliable and hard to reason about. In contrast, FP is presented as a more robust alternative that emphasizes simplicity, immutability, and functional purity, leading to more reliable and maintainable code. The author also criticizes the prevalence of OOP in the industry, attributing it to historical factors and the dominance of languages like Java and C#, and calls for a shift towards FP to improve the state of software development.

### Opinions

- OOP has failed in its primary goal to manage the complexity of codebases, leading to more issues than solutions.
- The complexity of OOP codebases is exacerbated by the promiscuous sharing of mutable state, which makes reasoning about the program very hard.
- Modern OOP languages like Java and C# are seen as the main reason for OOP's dominance in the industry, despite their inherent flaws.
- The author believes that encapsulation in OOP is a "trojan horse" that gives a false sense of security by hiding the complexity of shared mutable state.
- The article argues that OOP's design patterns are band-aids that add unnecessary complexity and are not a solution to the fundamental problems of OOP.
- Functional Programming is advocated as a superior alternative to OOP, offering reliability, simplicity, and a focus on immutability and pure functions.
- The author suggests that the industry's resistance to change is similar to the resistance encountered during the transition from horse-drawn carriages to automobiles.
- The historical prevalence of OOP is seen as a barrier to the adoption of better programming practices, with many developers and organizations being too invested in the OOP paradigm.
- The author encourages developers to explore functional languages and to question the widespread use of OOP, advocating for a paradigm shift in software development practices.

Object-Oriented Programming --- The Trillion Dollar Disaster

### Why it's time to move on from OOP

OOP is considered by many to be the crown jewel of computer science. The ultimate solution to code organization. The end to all our problems. The only true way to write our programs. Bestowed upon us by the one true God of programming himself...

Until...it's not, and people start succumbing under the weight of abstractions, and the complex graph of promiscuously shared mutable objects. Precious time and brainpower are being spent thinking about "abstractions" and "[design patterns](https://suzdalnitski.com/oop-design-patterns-bd2c4fb3014c)" instead of solving real-world problems.

Many people have criticized Object-Oriented Programming, including very prominent software engineers. Heck, even the inventor of OOP himself is a well-known critic of modern OOP!

The ultimate goal of every software developer should be to write *reliable *code. Nothing else matters if the code is buggy and unreliable. And what is the best way to write code that is reliable? *Simplicity*. Simplicity is the opposite of *complexity*. Therefore our first and foremost responsibility as software developers should be to *reduce code complexity.*

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*eSgw4TrT3_5kUU3QFFW4qA.jpeg)

### Disclaimer

I'll be honest, I'm not a raving fan of object-orientation. Of course, this article is going to be biased. However, I have good reasons to dislike OOP.

I also understand that criticism of OOP is a very sensitive topic --- I will probably offend many readers. However, I'm doing what I think is right. My goal is not to offend, but to raise awareness of the issues that OOP introduces.

I'm not criticizing Alan Kay's OOP --- he is a genius. I wish OOP was implemented the way he designed it. I'm criticizing the [modern Java/C# approach](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c) to OOP.

I think that it is not right that OOP is considered the de-facto standard for code organization by many people, including those in very senior technical positions. It is also unacceptable that many mainstream languages don't offer any other alternatives to code organization other than OOP.

Hell, I used to struggle a lot myself while working on OOP projects. And I had no single clue why I was struggling this much. Maybe I wasn't good enough? I had to learn a couple more design patterns (I thought)! Eventually, I got completely burned out.

This post sums up my first-hand decade-long journey from Object-Oriented to Functional programming. Unfortunately, no matter how hard I try, I can no longer find use cases for OOP. I have personally seen OOP projects fail because they become too complex to maintain.

### TLDR

> Object oriented programs are offered as alternatives to correct ones...

> --- [Edsger W. Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra), pioneer of computer science

Object-Oriented Programming has been created with one goal in mind --- to *manage the complexity* of procedural codebases. In other words, it was supposed to *improve code organization.* There's no objective and open evidence that OOP is better than plain procedural programming.

The bitter truth is that OOP *fails *at the only task it was intended to address. It looks good on paper --- we have clean hierarchies of animals, dogs, humans, etc. However, it falls flat once the complexity of the application starts increasing. Instead of reducing complexity, it encourages promiscuous *sharing of [mutable state](https://suzdalnitski.com/terrible-coding-mistake-aa1fbebd83b4)*[](https://suzdalnitski.com/terrible-coding-mistake-aa1fbebd83b4) and introduces additional complexity with its numerous [_design patterns_](https://suzdalnitski.com/oop-design-patterns-bd2c4fb3014c). OOP makes common development practices, like refactoring and testing, needlessly hard.

Some might disagree with me, but the truth is that modern [Java/C# OOP](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c) has never been properly designed. It never came out of a proper research institution (in contrast with Haskell/FP). Lambda calculus offers a complete theoretical foundation for Functional Programming. OOP has nothing to match that.

Using OOP is seemingly innocent in the short-term, especially on greenfield projects. But what are the* long-term* consequences of using OOP? OOP is a time bomb, set to explode sometime in the future when the codebase gets big enough.

Projects get delayed, deadlines get missed, developers get burned-out, adding in new features becomes next to *impossible.* The organization labels the codebase as the *"legacy codebase"*, and the development team plans a *rewrite*.

OOP is not natural for the human brain, our thought process is centered around "doing" things --- go for a walk, talk to a friend, eat pizza. Our brains have evolved to do things, not to organize the world into complex hierarchies of abstract objects.

OOP code is non-deterministic --- unlike with functional programming, we're not guaranteed to get the same output given the same inputs. This makes reasoning about the program very hard. As an oversimplified example, the output of `2+2` or `calculator.Add(2, 2) `mostly is equal to four, but sometimes it might become equal to three, five, and maybe even 1004. The dependencies of the `Calculator` object might change the result of the computation in subtle, but profound ways. OOPs...

### The Need for a Resilient Framework

Good programmers write good code, bad programmers write bad code, no matter the programming paradigm. However, the programming paradigm should constrain bad programmers from doing too much damage. Of course, this is not you, since you already are reading this article and putting in the effort to learn. Bad programmers never have the time to learn, they only press random buttons on the keyboard like crazy. Whether you like it or not, you will be working with bad programmers, some of them will be really really bad. And, unfortunately, OOP does not have enough constraints in place that would prevent bad programmers from doing too much damage. OOPs...

I don't consider myself a bad programmer, but even I am unable to write good code without a strong framework to base my work on. Yes, there are frameworks that concern themselves with some very particular problems (e.g. Angular or ASP.Net).

I'm not talking about the software frameworks. I'm talking about the more abstract *dictionary definition* of a framework: "an essential *supporting structure*" --- frameworks that concern themselves with the more abstract things like code organization and tackling code complexity. Even though Object-Oriented and Functional Programming are both programming paradigms, they're also both very high-level frameworks.

### Limiting our choices

> C++ is a horrible [object-oriented] language... And limiting your project to C means that people don't screw things up with any idiotic "object model" c&@p. --- Linus Torvalds, the creator of Linux

Linus Torvalds is widely known for his open criticism of C++ and OOP. One thing he was 100% right about is limiting programmers in the choices they can make. In fact, the fewer choices programmers have, the more resilient their code becomes. In the quote above, Linus Torvalds highly recommends having a good framework to base our code upon.

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*ujt2PMrbhCZuGhufoxfr5w.jpeg)

Photo by [specphotops](https://unsplash.com/@specphotops?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Many dislike speed limits on the roads, but they're essential to help prevent people from crashing to death. Similarly, a good programming framework should provide mechanisms that prevent us from doing *stupid *things.

A good programming framework helps us to write reliable code. First and foremost, it should help reduce complexity by providing the following things:

1. Modularity and reusability
2. Proper state isolation
3. High signal-to-noise ratio

Unfortunately, OOP provides developers too many tools and choices, without imposing the right kinds of limitations. Even though OOP promises to address modularity and improve reusability, it fails to deliver on its promises (more on this later). OOP code encourages the use of shared mutable state, which has been proven to be unsafe time and time again. OOP typically requires a lot of boilerplate code (low signal-to-noise ratio).

### Functional programming

What exactly is Functional Programming? Some people consider it to be a highly complicated programming paradigm that is only applicable in academia and is not suitable for the "real-world". This couldn't be further from the truth!

Yes, Functional Programming has a strong mathematical foundation and takes its roots in [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). However, most of its ideas emerged as a response to the *weaknesses* in the more mainstream programming languages. *Functions* are the core abstraction of Functional Programming. When used properly, functions provide a level of code modularity and reusability never seen in OOP. It even features design patterns that address the issues of nullability and provides a superior way of error handling.

The one thing that Functional Programming does really well is it helps us write *reliable* software. The need for a debugger almost disappears completely. Yep, no need to step through your code and watch variables. I personally haven't touched a debugger in a very long time.

The best part? If you already know how to use functions, then you're already a functional programmer. You just need to learn how to make the best use of those functions!

I'm not preaching Functional Programming, I don't really care what programming paradigm you use writing your code. I'm simply trying to convey the mechanisms that Functional Programming provides to address the problems inherent with OOP/imperative programming.

### We Got OOP All Wrong

> _I'm sorry that I long ago coined the term "objects" for this topic because it gets many people to focus on the lesser idea. The big idea is messaging. - Alan Kay, the inventor of OOP_

Erlang is not usually thought of as an Object-Oriented language. But probably Erlang is the [_only_](https://stackoverflow.com/questions/3431509/is-erlang-object-oriented/3433808#3433808)mainstream Object-Oriented language out there. Yes, of course Smalltalk is a proper OOP language --- however, it is not in wide use. Both Smalltalk and Erlang make use of OOP the way it was *originally intended* by its inventor, Alan Kay.

### Messaging

Alan Kay coined the term "Object Oriented Programming" in the 1960s. He had a background in biology and was attempting to make computer programs communicate the same way living cells do.

Alan Kay's big idea was to have independent programs (cells) communicate by sending *messages* to each other. The state of the independent programs would *never be shared* with the outside world (encapsulation).

That's it. OOP was *never intended* to have things like inheritance, polymorphism, the "new" keyword, and the myriad of [design patterns](https://suzdalnitski.com/oop-design-patterns-bd2c4fb3014c).

### OOP in its purest form

Erlang is OOP in its *purest* form. Unlike more mainstream languages, it focuses on the core idea of OOP --- messaging. In Erlang, objects communicate by passing immutable messages between objects.

Is there proof that immutable messages are a superior approach compared to method calls?

_Hell yes!_ Erlang is probably the most *reliable* language in the world. It powers most of the world's telecom (and hence the internet) infrastructure. Some of the systems written in Erlang have reliability of 99.9999999% (you read that right --- nine nines).

### Code Complexity

> With OOP-inflected programming languages, computer software becomes more verbose, less readable, less descriptive, and harder to modify and maintain.

> --- [Richard Mansfield](http://www.4js.com/files/documents/products/genero/WhitePaperHasOOPFailed.pdf)

The *most important *aspect of software development is keeping the code complexity down. Period. None of the fancy features matter if the codebase becomes impossible to maintain. Even 100% test coverage is worth nothing if the codebase becomes too *complex *and *unmaintainable*.

What makes the codebase complex? There are many things to consider, but in my opinion, the top offenders are: shared [mutable state](https://suzdalnitski.com/terrible-coding-mistake-aa1fbebd83b4), erroneous abstractions, and low signal-to-noise ratio (often caused by boilerplate code). All of them are prevalent in OOP.

### The Problems of State

What is state? Simply put, state is any temporary data stored in memory. Think variables or fields/properties in OOP. Imperative programming (including OOP) describes computation in terms of the program state and *changes to that state*. Declarative (functional) programming describes the *desired results* instead, and don't specify changes to the state explicitly.

### Mutable State --- the act of mental juggling

> I think that large objected-oriented programs struggle with increasing complexity as you build this large object graph of mutable objects. You know, trying to understand and keep in your mind what will happen when you call a method and what will the side effects be.

> --- [Rich Hickey](http://www.se-radio.net/2010/03/episode-158-rich-hickey-on-clojure/), creator of Clojure

State by itself is quite harmless. However, mutable state is the big offender. Especially if it is shared. What exactly is mutable state? Any state that can change. Think variables or fields in OOP.

**Real-world example, please!**

You have a blank piece of paper, you write a note on it, and you end up with the same piece of paper in a different state (text). You, effectively, have mutated the state of that piece of paper.

That is completely fine in the real world since *nobody* else probably cares about that piece of paper. Unless this piece of paper is the original Mona Lisa painting.

### Limitations of the Human Brain

Why is mutable state such a big problem? The human brain is the most powerful machine in the known universe. However, our brains are really bad at working with state since we can only hold about *5 items* at a time in our working memory. It is much easier to reason about a piece of code if you only think about *what *the code does, not what variables it changes around the codebase.

Programming with [mutable state](https://suzdalnitski.com/terrible-coding-mistake-aa1fbebd83b4) is an act of mental juggling️. I don't know about you, but I could probably juggle two balls. Give me three or more balls and I will certainly drop all of them. Why are we then trying to perform this act of mental juggling every single day at work?

Unfortunately, the mental juggling of mutable state is at the very core of OOP . The sole purpose for the existence of methods on an object is to mutate that same object.

### Scattered state

OOP makes the problem of code organization even worse by scattering state all over the program. The scattered state is then shared *promiscuously *between various objects.

**Real-world example, please!**

Let's forget for a second that we're all grown-ups, and pretend we're trying to assemble a cool lego truck.

However, there's a catch --- all the truck parts are randomly mixed with parts from your other lego toys. And they have been put in 50 different boxes, randomly again. And you're not allowed to group your truck parts together --- you have to keep in your head where the various truck parts are, and can only take them out one by one.

Yes, you will *eventually *assemble that truck, but how long will it take you?

How does this relate to programming?

In Functional Programming, state typically is being *isolated. *You always know where some state is coming from. State is never scattered across your different functions. In OOP, every object has its own state, and when building a program , you have to keep in mind the state of *all* of the objects that you currently are working with.

To make our lives easier, it is best to have only a very small portion of the codebase deal with state. Let the core parts of your application be stateless and pure. This actually is the main reason for the huge success of the flux pattern on the frontend (aka [Redux](<https://en.wikipedia.org/wiki/Redux_(JavaScript_library)>)).

### Promiscuously shared state

As if our lives aren't already hard enough because of having scattered mutable state, OOP goes one step further!

**Real-world Example, Please!**

Mutable state in the real world is almost never a problem, since things are kept private and never shared. This is "proper encapsulation" at work. Imagine a painter who is working on the next Mona Lisa painting. He is working on the painting alone, finishes up, and then sells his masterpiece for millions.

Now, he's bored with all that money and decides to do things a little bit differently. He thinks that it would be a good idea to have a painting party. He invites his friends elf, Gandalf, policeman, and a zombie to help him out. Teamwork! They all start painting on the same canvas at the same time. Of course, nothing good comes out of it --- the painting is a complete disaster!

Shared mutable state makes no sense in the real world. Yet this is exactly what happens in OOP programs --- state is promiscuously shared between various objects, and they mutate it in any way they see fit. This, in turn, makes reasoning about the program harder and harder as the codebase keeps growing.

### Concurrency issues

The promiscuous sharing of mutable state in OOP code makes parallelizing such code almost impossible. Complex mechanisms have been invented in order to address this problem. Thread locking, mutex, and many other mechanisms have been invented. Of course, such complex approaches have their own drawbacks --- deadlocks, lack of composability, debugging multi-threaded code is very hard and time-consuming. I'm not even talking about the increased complexity caused by making use of such concurrency mechanisms.

### Not all state is evil

Is all state evil? No, Alan Kay state probably is not evil! State mutation probably is fine if it is truly isolated (not the "OOP-way" isolated).

It is also completely fine to have immutable data-transfer-objects. The key here is "immutable". Such objects are then used to pass data between functions.

However, such objects would also make OOP methods and properties completely redundant. What's the use in having methods and properties on an object if it cannot be mutated?

### Mutability is Inherent to OOP

Some might argue that mutable state is a design choice in OOP, not an obligation. There is a problem with that statement. It is not a design choice, but pretty much the only option. Yes, one can pass immutable objects to methods in Java/C#, but this is rarely done since most of the developers default to data mutation. Even if developers attempt to make proper use of immutability in their OOP programs, the languages provide no built-in mechanisms for immutability, and for working effectively with immutable data (i.e. persistent data structures).

Yes, we can ensure that objects communicate only by passing immutable messages and never pass any references (which is rarely done). Such programs would be more reliable than mainstream OOP. However, the objects still have to mutate their own state once a message has been received. A message is a side effect, and its single purpose is to cause changes. Messages would be useless if they couldn't mutate the state of other objects.

It is impossible to make use of OOP without causing state mutations.

### The Trojan Horse of Encapsulation

We've been told that encapsulation is one of the greatest benefits of OOP. It is supposed to *protect *the object's internal state from outside access. There's a small problem with this though. It doesn't work.

Encapsulation is the *trojan horse *of OOP. It sells the idea of shared mutable state by making it *appear *safe. Encapsulation allows (and even encourages) unsafe code to sneak into our codebase, making the codebase rot from within.

### The global state problem

We've been told that *global state* is the root of all evil. It should be avoided at all costs. What we have never been told is that encapsulation, in fact, is glorified global state.

To make the code more efficient, objects are passed not by their value, but by their *reference*. This is where "dependency injection" falls flat.

Let me explain. Whenever we create an object in OOP, we pass *references *to its dependencies to the *constructor*. Those dependencies also have their own *internal state. *The newly created object happily stores references to those dependencies in its internal state and is then happy to modify them in any way it pleases. And it also passes those references down to anything else it might end up using.

This creates a complex graph of promiscuously shared objects that all end up changing each other's state. This, in turn, causes *huge *problems since it becomes almost impossible to see what caused the program state to change. Days might be wasted trying to debug such state changes. And you're lucky if you don't have to deal with concurrency (more on this later).

### Methods/Properties

The methods or properties that provide access to particular fields are *no better *than changing the value of a field directly. It doesn't matter whether you mutate an object's state by using a fancy property or method --- the *result is the same: mutated state.*

### The Problem with Real World Modeling

Some people say that OOP tries to model the real world. This is simply not true --- OOP has nothing to relate to in the real world. Trying to model programs as objects probably is one of the biggest OOP mistakes.

### The real world is not hierarchical

OOP attempts to model everything as a hierarchy of objects. Unfortunately, that is not how things work in the real world. Objects in the real world interact with each other using messages, but they mostly are independent of each other.

### Inheritance in the real world

OOP inheritance is not modeled after the real world. The parent object in the real world is unable to change the behavior of child objects at run-time. Even though you inherit your DNA from your parents, they're unable to make changes to your DNA as they please. You do not inherit "behaviors" from your parents, you develop your own behaviors. And you're unable to "override" your parents' behaviors.

### The real world has no methods

Does the piece of paper you're writing on have a "write" *method*? No! You take an empty piece of paper, pick up a pen, and write some text. You, as a person, don't have a "write" method either --- you make the decision to write some text based on outside events or your internal thoughts.

### The Kingdom of Nouns

> Objects bind functions and data structures together in indivisible units. I think this is a fundamental error since functions and data structures belong in totally different worlds.

> --- [Joe Armstrong](http://harmful.cat-v.org/software/OO_programming/why_oo_sucks), creator of Erlang

Objects (or nouns) are at the very core of OOP. A fundamental limitation of OOP is that it forces everything into nouns. And not everything should be modeled as nouns. Operations (functions) should not be modeled as objects. Why are we forced to create a `Multiplier`class when all we need is a function that multiplies two numbers? Simply have a `Multiply` function, let data be data and let functions be functions!

In non-OOP languages, doing trivial things like saving data to a file is straightforward --- very similar to how you would describe an action in plain English.

**Real-world example, please!**

Sure, going back to the painter example, the painter owns a `PaintingFactory`. He has hired a dedicated `BrushManager` , `ColorManager`, a `CanvasManager` and a `MonaLisaProvider`. His good friend zombie makes use of a `BrainConsumingStrategy `. Those objects, in turn, define the following methods: `CreatePainting` , `FindBrush` , `PickColor` , `CallMonaLisa` , and `ConsumeBrainz`.

Of course, this is plain stupidity, and could never have happened in the real world. How much unnecessary complexity has been created for the simple act of drawing a painting?

There's no need to invent strange concepts to hold your functions when they're allowed to exist separately from the objects.

### Unit Testing

Automated testing is an important part of the development process and helps tremendously in preventing regressions (i.e. bugs being introduced into existing code). *Unit Testing* plays a huge role in the process of automated testing.

Some might disagree, but OOP code is notoriously difficult to unit test. Unit Testing assumes testing things in isolation, and to make a method unit-testable:

1. Its dependencies have to be extracted into a separate class.
2. Create an interface for the newly created class.
3. Declare fields to hold the instance of the newly created class.
4. Make use of a mocking framework to mock the dependencies.
5. Make use of a dependency-injection framework to inject the dependencies.

How much more complexity has to be created just to make a piece of code testable? How much time was wasted just to make some code testable?

_> PS we'd also have to instantiate the entire class in order to test a single method. This will also bring in the code from all of its parent classes._

With OOP, writing tests for legacy code is even harder --- almost impossible. Entire companies have been created ([TypeMock](https://www.typemock.com/)) around the issue of testing legacy OOP code.

### Boilerplate code

Boilerplate code is probably the biggest offender when it comes to the signal-to-noise ratio. Boilerplate code is "noise" that is required to get the program to compile. Boilerplate code takes time to write and makes the codebase less readable because of the added noise.

While "program to an interface, not to an implementation" is the recommended approach in OOP, not everything should become an interface. We'd have to resort to using interfaces in the entire codebase, for the sole purpose of testability. We'd also probably have to make use of dependency injection, which further introduced unnecessary complexity.

### Testing private methods

Some people say that private methods shouldn't be tested... I tend to disagree, unit testing is called "unit" for a reason --- test small units of code in isolation. Yet testing of private methods in OOP is nearly impossible. We shouldn't be making private methods`internal` just for the sake of testability.

In order to achieve testability of private methods, they usually have to be extracted into a separate object. This, in turn, introduces unnecessary complexity and boilerplate code.

### Refactoring

Refactoring is an important part of a developer's day-to-day job. Ironically, OOP code is notoriously hard to refactor. Refactoring is supposed to make the code less complex, and more maintainable. On the contrary, refactored OOP code becomes significantly more complex --- to make the code testable, we'd have to make use of dependency injection, and create an interface for the refactored class. Even then, refactoring OOP code is really hard without dedicated tools like Resharper.

In the simple example above, the line count has more than doubled just to extract a single method. Why does refactoring create even more complexity, when the code is being refactored in order to decrease complexity in the first place?

Contrast this to a similar refactor of non-OOP code in JavaScript:

The code has literally stayed the same --- we simply moved the `isValidInput` function to a different file and added a single line to import that function. We've also added `_isValidInput` to the function signature for the sake of testability.

This is a simple example, but in practice the complexity grows exponentially as the codebase gets bigger.

And that's not all. Refactoring OOP code is *extremely risky*. Complex dependency graphs and state scattered all over OOP codebase, make it impossible for the human brain to consider all of the potential issues.

### The Band-aids

What do we do when something is not working? It is simple, we only have two options --- throw it away or try fixing it. OOP is something that can't be thrown away easily, millions of developers are trained in OOP. And millions of organizations worldwide are using OOP.

You probably see now that OOP *doesn't really work*, it makes our code complex and unreliable. And you're not alone! People have been thinking hard for *decades *trying to address the issues prevalent in OOP code. They've come up with a myriad of [_design patterns_](https://suzdalnitski.com/oop-design-patterns-bd2c4fb3014c)_._

### Design patterns

OOP provides a set of guidelines that should *theoretically *allow developers to incrementally build larger and larger systems: SOLID principle, dependency injection, design patterns, and others.

Unfortunately, the design patterns are nothing other than band-aids. They exist solely to address the *shortcomings *of OOP. A myriad of books has even been written on the topic. They wouldn't have been so bad, had they not been responsible for the introduction of enormous complexity to our codebases.

### The problem factory

In fact, it is impossible to write good and maintainable Object-Oriented code.

On one side of the spectrum we have an OOP codebase that is inconsistent and doesn't seem to adhere to any standards. On the other side of the spectrum, we have a tower of over-engineered code, a bunch of erroneous abstractions built one on top of one another. Design patterns are very helpful in building such towers of abstractions.

Soon, adding in new functionality, and even making sense of all the complexity, gets harder and harder. The codebase will be full of things like `SimpleBeanFactoryAwareAspectInstanceFactory`, `AbstractInterceptorDrivenBeanDefinitionDecorator`, `TransactionAwarePersistenceManagerFactoryProxy`or`RequestProcessorFactoryFactory` .

Precious brainpower has to be wasted trying to understand the tower of abstractions that the developers themselves have created. The absence of structure is in many cases better than having bad structure (if you ask me).

![](https://cdn-images-1.readmedium.com/v2/resize:fit:800/1*_xDSrTC0F2lke6OYtkRm8g.png)

Image source: https://www.reddit.com/r/ProgrammerHumor/comments/418x95/theory_vs_reality

Further reading: [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition)

### The Fall of the Four OOP Pillars

The four pillars of OOP are: Abstraction, Inheritance, Encapsulation, and Polymorphism.

Let's see what they really are, one-by-one.

### Inheritance

> I think the lack of reusability comes in object-oriented languages, not in functional languages. Because the problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.

> --- Joe Armstrong, creator of Erlang

OOP inheritance has nothing to do with the real world. Inheritance, in fact, is an inferior way to achieve code reusability. The gang of four has explicitly recommended preferring composition over inheritance. Some [modern programming languages](<https://en.wikipedia.org/wiki/Go_(programming_language)>) avoid inheritance altogether.

There are a few problems with inheritance:

1. Bringing in a lot of code that your class doesn't even need (banana and the jungle problem).
2. Having parts of your class defined somewhere else makes the code hard to reason about, especially with multiple levels of inheritance.
3. In most programming languages, multiple inheritance isn't even possible. This mostly renders inheritance useless as a code-sharing mechanism.

### OOP polymorphism

Polymorphism is great, it allows us to change program behavior at runtime. However, it is a very basic concept in computer programming. I'm not too sure why OOP focuses so much on polymorphism. OOP polymorphism gets the job done but once again it results in the act of mental juggling. It makes the codebase significantly more complex, and reasoning about the concrete method that is being invoked becomes really hard.

Functional programming, on the other hand, allows us to achieve the same polymorphism in a much more elegant way...by simply passing in a function that defines the desired runtime behavior. What could be simpler than that? No need to define a bunch of overloaded abstract virtual methods in multiple files (and the interface).

### Encapsulation

As we discussed earlier, encapsulation is the trojan horse of OOP. It is actually a glorified global mutable state and makes the *unsafe *code appear safe. An unsafe coding practice is a pillar that OOP programmers rely on in their day-to-day job...

### Abstraction

Abstraction in OOP attempts to tackle complexity by hiding unnecessary details from the programmer. *Theoretically*, it should allow the developer to reason about the codebase without having to think about the hidden complexity.

I don't even know what to say...a fancy word for a simple concept. In procedural/functional languages we can simply "hide" the implementation details in a neighboring file. No need to call this basic act an "abstraction".

_For more details on the fall of OOP pillars, please read [Goodbye, Object Oriented Programming](https://readmedium.com/goodbye-object-oriented-programming-a59cda4c0e53)_

### Why Does OOP Dominate the Industry?

The answer is simple, the reptiloid alien race has conspired with the NSA (and the Russians) to torture us programmers to death...

But seriously, [Java](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c) is probably the answer.

> [Java](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c) is the most distressing thing to happen to computing since MS-DOS.

> - Alan Kay, the [inventor](http://www.cc.gatech.edu/fac/mark.guzdial/squeak/oopsla.html) of object-oriented programming

### Java was Simple

When it was first introduced in 1995, Java was a very simple programming language, compared to the alternatives. At that time, the barrier of entry for writing desktop applications was high. Developing desktop applications involved writing low-level win32 APIs in C, and developers also had to concern themselves with manual memory management. The other alternative was Visual Basic, but many probably didn't want to lock themselves into the Microsoft ecosystem.

When Java was introduced, it was a no-brainer for many developers since it was free, and could be used across all platforms. Things like built-in garbage collection, friendly-named APIs (compared to the cryptic win32 APIs), proper namespaces, and familiar C-like syntax made Java even more approachable.

GUI programming was also becoming more popular, and it seemed that various UI components mapped well to classes. Method autocompletion in the IDEs also made people claim that OOP APIs are easier to use.

Perhaps Java wouldn't have been so bad had it not forced OOP on developers. Everything else about Java seemed pretty good. Its garbage collection, portability, exception handling features, which other mainstream programming languages lacked, were really great in 1995,

### Then C# came along

Initially, Microsoft had been relying heavily on Java. When things started getting awry (and after a long legal battle with Sun Microsystems over Java licensing), Microsoft decided to invest in its own version of Java. That is when [C# 1.0](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c) was born. C# as a language has always been thought of as "the better Java". However, there's one huge problem --- it was the same OOP language with the same flaws, hidden under a slightly improved syntax.

Microsoft has been investing heavily in its .NET ecosystem, which also included good developer tooling. For years Visual Studio has probably been one of the best IDEs available. This, in turn, has led to wide-spread adoption of the .NET framework, especially in the enterprise.

More recently Microsoft has been investing heavily in the browser ecosystem, by pushing its TypeScript. TypeScript is great because it can compile pure JavaScript and adds in things like static type checking. What's not so great about it is it has no proper support for functional constructs --- no built-in immutable data structures, no function composition, no proper pattern matching. TypeScript is OOP-first, and mostly is C# for the browser. [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) was even responsible for the design of both C# and TypeScript.

### Functional languages

[Functional languages](https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c), on the other hand, have never been backed by someone as big as Microsoft. F# doesn't count since the investment was minuscule. The development of functional languages is mostly community-driven. This probably explains the differences in popularity between OOP and FP languages.

### Time to Move On?

> We now know that OOP is an experiment that failed. It is time to move on. It is time that we, as a community, admit that this idea has failed us, and we must give up on it.

> - [Lawrence Krubner](http://www.smashcompany.com/technology/object-oriented-programming-is-an-expensive-disaster-which-must-end)

Why are we stuck using something that fundamentally is a suboptimal way to organize programs? Is this plain ignorance? I doubt it, the people working in software engineering aren't stupid. Are we perhaps more worried about "looking smart" in the face of our peers by making use of fancy OOP terms like "design patterns", "abstraction", "encapsulation", "polymorphism" and "interface segregation"? Probably not.

I think that it's really easy to continue using something that we've been using for decades. Most of the people have never really tried Functional Programming. Those who have (like myself) can never go back to writing OOP code.

Henry Ford once famously said --- "If I had asked people what they wanted, they would have said *faster horses*". In the world of software, most people would probably want a "better OOP language". People can easily describe a problem they're having (getting the codebase organized and less complex), but not the best solution.

### What Are the Alternatives?

_Spoiler alert: Functional Programming_.

If terms like functors and monads make you a little uneasy, then you're not alone! Functional Programming wouldn't have been so scary had they given more intuitive names to some of its concepts. Functor? That's simply something we can transform with a function, think `list.map`. Monad? Simply computations that can be chained!

Trying out Functional Programming will make you a better developer. You will finally have the time to write real code that solves real-world problems, rather than having to spend most of your time thinking about abstractions and design patterns.

You might not realize this, but you already are a functional programmer. Are you using functions in your day-to-day work? Yes? Then you're already a functional programmer! You just have to learn how to make the best use of those functions.

Two great functional languages with a very gentle learning curve are [Elixir ](https://elixir-lang.org/)and [Elm](https://elm-lang.org/). They let the developer focus on what matters most --- writing reliable software while removing all of the complexity that more traditional functional languages have.

What are the other options? Is your organization already is using C#? Give F# a try --- it is an amazing functional language, and provides great interoperability with the existing .NET code. Using Java? Then using Scala or Clojure are both really good options. Using JavaScript? With the right guidance and linting, JavaScript can be a good functional language.

### The Defenders of OOP

I expect some sort of reaction from the defenders of OOP. They will say that this article is full of inaccuracies. Some might even start calling names. They might even call me a "junior" developer with no real-world OOP experience. Some might say that my assumptions are erroneous, and examples are useless. Whatever.

They have the right to their opinion. However, their arguments in the defense of OOP are usually quite weak. It is ironic that most of them probably have never really programmed in a true functional language. How can someone draw comparisons between two things if you have never really tried both? Such comparisons aren't very useful.

The Law of Demeter is not very useful --- it does nothing to address the issue of non-determinism, shared [mutable state](https://suzdalnitski.com/terrible-coding-mistake-aa1fbebd83b4) is still shared mutable state, no matter how you access or mutate that state. `a.total()`is not much better than `a.getB().getC().total()`. It simply sweeps the problem under the rug.

Domain-Driven Design? That's a useful design methodology, it helps a bit with the complexity. However, it still does nothing to address the fundamental issue of shared mutable state.

### Just a tool in a toolbox...

I often hear people say that OOP is just another tool in a toolbox. Yes, it is as much a tool in a toolbox as horses and cars are both tools for transportation... After all, they all serve the same purpose, right? Why use cars when we can continue riding good old horses?

### History repeats itself

This actually reminds me of [something](https://99percentinvisible.org/article/cities-paved-dung-urban-design-great-horse-manure-crisis-1894/). At the beginning of the 20th century, automobiles started replacing the horses. In the year 1900 New York had only a few cars on the roads, people have been using horses for transportation. In the year 1917, no more horses were left on the roads. A huge industry was centered around horse transportation. Entire businesses have been created around things like manure cleaning.

And people resisted change. They called automobiles another "fad" that eventually pass. After all, horses have been here for centuries! Some even asked the government to intervene.

How is this relevant? The software industry is centered around OOP. Millions of people are trained in OOP, and millions of companies make use of OOP in their code. Of course, they will try to discredit anything that threatens their bread-and-butter! It's just common sense.

We clearly see the history repeating itself --- in the 20th century it was the horses vs automobiles, in the 21st century it is Object-Oriented vs Functional Programming.

## sweden pirate party revolution statement story

海盗党的版权改革主张（英文）

https://christianengstrom.wordpress.com/the-pirate-party-on-copyright-reform/

这篇文章是瑞典盗版党的版权改革主张：非商业用途应该免费，商业用途只能保护作品发布后的五年，允许衍生作品不支付版权费，废除数字版权机制 DRM。

## a buddha statue changes a neighbourhood story

街角的一尊佛像

https://www.facebook.com/story.php?story_fbid=10156010147332105&id=657082104

Dan Stevenson 与妻子住在加州奥克兰的东湖区，已经 40 年。不知何时开始，东湖区治安越来越差，有贩毒的、卖淫的，偶尔还有进户抢劫的。

最让 Dan 感到愤怒的，是第 11 大道和东 19 街的交叉口，有一小块车道分流的三角绿地。那里本来应该是绿化，却堆满了废弃床垫、沙发、衣服、随手扔弃的垃圾、甚至使用过的保险套和针筒。更糟的是，Dan 还看过有私人垃圾车开过来把一车的垃圾跟废弃家具倾倒完，就跑了。

从 Dan 的窗户看出去，就看见这一大坨堆积如山的垃圾。Dan 与太太每天都要不断打电话给市政府，但都没什么用，清掉一次，这里马上又会堆满垃圾。

Dan 与妻子为这个事想了很久，到底该怎么改善这坨垃圾山的问题，他们想了很多方法。有一天，他们浮现一个主意：佛像！

他们决定去买一尊佛像摆在那块小树丛。Dan 与妻子并不是佛教徒，为什么会想到佛像呢？

Dan 说，因为佛教在西方是很温和中立的一种信仰。假如放一尊耶稣神像，可能就会有争议，但佛像不一样，似乎不太有人会对佛陀有什么不满。

Dan 开始到处找合适的佛像，有天他看到一尊大约 60 公分高的黑色石雕佛像，很喜欢。但他担心如果佛像放在那块地上被偷走，所以给佛像做了底座，让她坚实地固定在草地上。

就这样，Dan 每天早上起床喝咖啡的时候，就可以看到佛像是否还安好。这算是在公有土地上做私有的事，Dan 可不管，他觉得有些事就是先做再说，别管什么行政程序了。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019071704.jpg)

佛像就静静地坐在那块草地上，一开始，垃圾少了，然后大约四个月后的某天一早，他发现有人坐在草地上给佛陀上漆。那人非常小心翼翼，他把佛像漆成了白色的。而且那人还留了一颗橘子在佛陀前。

隔了一天，一颗橘子变成了一对橘子。在那之后，佛陀每天都有新的贡品，有时是花束、有时是水果，有时甚至还有钱币。

有天 Dan 下班回家，发现佛陀神像旁多了两尊神像。Dan 不知道这是怎么回事，但他后来理解，应该是有人觉得佛陀需要被保护。

慢慢地，这尊石雕佛像，摇身一变成了一座神坛。而且佛陀也升级了，她不再是白色的，而是金色的，而且还有人给她做了衣服（袈裟），Dan 觉得她现在的样子酷极了。

这尊佛雕除了外型变了，还有人为她盖了一栋房子，若你个子娇小，还可以钻进去跟佛陀一起睡一晚的那种小房子。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019071705.jpg)

每天早上七点，就会有人来膜拜诵经，他们会敲着木鱼念唱一段时间。有时候，神坛前会出现一排桌子摆满食物与祭品，然后这些虔诚的信徒们会先进行祭拜仪式，接着他们就在树下闲聊，过一会再把祭品收拾干净，或者坐在草地上分享祭品一起吃掉。

![](https://www.wangbase.com/blogimg/asset/201907/bg2019071706.jpg)

这些信徒都是从别处来的，不是这个社区的，他们英文不好，有的甚至不会说英文。现在一天大概会有 70-80 个人特别来这里祭拜佛陀，甚至还有从明尼苏达来的。

这几年时间，先是垃圾没了，然后不知从何时开始，毒贩一个个搬走了，然后卖淫的也纷纷离开了。一篇当地报导写道，Oakland 东湖区从 2012 年有神秘佛坛与固定祭祀活动开始，这区的犯罪率在一年内下降了 80%。

## where you graduate is why you startup view

我家附近有一所重点中学，校门口拉起了大红条幅："热烈祝贺我校三名同学考入北大清华"。

这不禁让我想到，很多科技公司的创始人都不是一流名校毕业。马云是杭州师范学院，马化腾是深圳大学，任正非是重庆建筑工程学院，丁磊是成都电子科大，周鸿祎是西安交大。

当然，名校毕业的也不少。李彦宏是北京大学，张朝阳是清华大学，王兴是清华大学，张一鸣是南开大学，陈天桥是复旦大学。但是，其中不少是留学回国后创业，有政策扶植的。

总的来说，我认为，来自一般学校的创业者更常见，反倒是高管大部分都是名校毕业。

理由是好学校毕业以后，出路比较好，通常都会进入不错的单位，离职创业的机会成本比较大。如果是一般学校毕业，就业又是很普通的单位，看不到前途，反而容易创业，而且因为没有退路，只能破釜沉舟，放手一博。

从这个角度看，高考不理想的同学，应该早早就有思想准备，将来可能走创业这条路。

## risk is not aftermath quote

风险是可控的，只是需要高度自律（中文）

纪录片《徒手攀岩》中，Alex 徒手没有任何保护，爬上了酋长岩。即使是在专业的攀岩运动员看来，这也是一个不可能完成的任务。说白了，就等于送死。

他说了一句话，非常地奇怪，他说："风险和后果是两回事。徒手攀岩的风险很低，只是后果很严重。"

## browser incognito mode detecting guide

1Chrome 隐身模式依然可以检测（英文）

https://www.bleepingcomputer.com/news/google/google-chrome-incognito-mode-can-still-be-detected-by-these-methods/

Chrome 76 堵上了隐身模式的漏洞，使用内存模拟 FileSystem API，导致隐身模式的检测脚本失效。本文提出，隐身模式依然有办法检测到。一种令人惊艳的思路是，内存比文件系统快得多，因此可以从访问速度判断是否为隐身模式。

## jokenpo game by machine learning web app theory

jokenpo

https://github.com/victorqribeiro/jokenpo

一个网页游戏，使用机器学习算法，让玩家与计算机进行"剪刀石头布"游戏。

## the major of web apps quote

90%的 Web 应用是数据库前端。

-- HN 读者留言

https://news.ycombinator.com/item?id=20642038

## no discipline needed is why python is great quote

人们的经验是，对于 10 行代码的脚本，Perl 语言是完美的。但如果你有 500 行脚本代码和几千行的库，那么需要大量的纪律才能使 Perl 代码可维护。

而在 Python 语言中，即使没有那么多的纪律，代码仍然具有相当的可读性和可维护性。

-- Guido van Rossum，Python 语言创始人

https://www.zdnet.com/article/python-is-eating-the-world-how-one-developers-side-project-became-the-hottest-programming-language-on-the-planet/

## youtube recommendation algorithm is a problem view theory

Youtube 推荐算法的问题

https://news.ycombinator.com/item?id=20560146

五年前，我上传了第一个 Youtube 视频。此后，我一直在发布内容。我觉得，自己的内容很有趣，肯定很受欢迎。

但是，没人看我的视频！每个视频平均只有 20 次观看。Youtube 从来不把它们推荐给任何人，因为我是一个小频道。也许有些视频质量不高，但我确实发布了一些自己感到自豪的作品。

后来，我开始使用抖音 TikTok。出于无聊，我选了一首歌，拍了一段模仿视频，有 50 次观看。我逐渐又发布了一些视频，合计得到了 4 万个喜欢和 1200 个关注者，视频总观看次数是 15 万。注意，我的第一个视频是在今年 2 月份拍的，6 月份才拍了第二个。

YouTube 不鼓励小创作者、非知名人士和没钱做广告的人，而抖音让任何有才华的人都变得至少相对受欢迎。

抖音的算法是，你发布视频时，抖音会将其显示给一定数量的人。如果有足够的人看到它并按下"喜欢"，抖音就会让更多的人看到这个视频，这个过程不断重复，直到应用程序里面的每个人都看到它。这很简单，直接，透明。

YouTube 的算法是什么，根本没人知道。我觉得很好笑，一个中国公司的算法更加透明。YouTube 不了解它的使用者，它是一个垄断公司，已经停滞不前。我的遭遇是众多类似故事中的一个。

---

Here's why YouTube can go fuck itself:
I have a YouTube channel. My first video will be five years old on September 14. I kept putting out content for a number of years, content which I thought was funny and would surely be well-received.

But people never watched my videos! I get 20ish views per video. They never get recommended to anyone because I'm a smaller channel, and then I never become big for that reason. (Or maybe my videos just suck. Some of them definitely do, but I've made some that I'm proud of.)

I joined TikTok, YouTube's 60-second-max competitor. Out of boredom I made a video synced to one of those songs. Fifty views on my first one. Eventually I started making more content. I've clocked around 150K views on my videos combined, 40K likes, and 1200 followers. I made my first video around February and my second around June.

While YouTube discourages small creators, non-celebrities, and those that don't have massive amounts of cash to throw around on sets, TikTok lets whoever's talented become at least relatively popular.

TikTok's algorithm is pretty well-documented by its community: When you post a video, TikTok shows it to a certain amount of people. If enough people who see it "like" it, it moves to a larger amount of people, and so on until everyone on the app sees it. This is easy, straightforward, and transparent (for the most part, there are special cases and such).

YouTube's algorithm is: [redacted]. It's amusing to me that a Chinese company would be more transparent about this. YouTube doesn't understand its community and it's probably too late to save it, it got a monopoly and stagnated. My story is one of many others.

## last days of an once lion king story

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

## pure infomation charge is not a good business modal view theory

大家有没有感觉，互联网上免费的东西越来越少了。

打开很多网站或 App，都要求你付费：听歌要钱，视频要钱，下载要钱，读一篇文章也要钱。这当然无可厚非，但是我总觉得，纯粹的信息收费不是一个好的商业模式，除非有增值服务。  这有两个原因。

第一个原因是，信息与实体商品不同。实体商品具有排他性，我吃了这只苹果，别人就吃不到，但是信息可以无数次消费。

而且，信息有一个奇怪的特征：消费的人越多，它的价值越高。一篇文章只有二三十人看，很快就会被忘记；但有一百万人看，就是全国的热点。  收费会阻止信息的这种零成本的自我增值。

第二个原因是，信息收费很难扩展。80%的用户都是看一眼就走了，  收费会阻止这些轻度使用的用户。  比如，《纽约时报》网站是收费的，但是我一个月就看几篇文章，不太可能为这几篇文章成为付费用户。信息收费的前提是，用户会深入地、长期地使用这个服务，这种深度用户很难找，因此收费很难扩展。

所以，我认为，  信息的商业模式，不应该是收费，而是应该鼓励更多的人消费它。  越多人消费，信息的价值越高，这时就可以开发增值服务，从服务赚钱。

开源软件就是很好的例子。Linux 原来是一个大学生的作品，可以免费用，结果成了行业标准。基于 Linux 的 Red Hat 公司，所有产品都是开源的，只对服务收费，最终被 IBM 以 340 亿美元的价格收购。

![](https://www.wangbase.com/blogimg/asset/201909/bg2019091909.jpg)

就像上图的那句话："Open is smart. Smart is open" 。我们不要做 closed 的产品，而要做 open 的产品。Open 一定会带来更大的价值。

## weekend side project is one of the appstore best story

我的周末项目（英文）

https://tannerchristensen.com/blog/2018/12/30/oh-shit-my-weekend-project-turned-into-an-app-store-best-new-app

本文记述作者一个周末写的项目，结果意外变成了苹果应用商店的最佳新应用，赚到了 4000 美元。作者谈了他的一些感想。

---

### Oh shit, my weekend project turned into an App Store Best New App

On March 14, 2015, while reading the book [_Creative Confidence_](http://web.archive.org/web/20190919044638/http://www.amazon.com/gp/product/038534936X/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=038534936X&linkCode=as2&tag=simmakmon-20&linkId=EWU7WRPNBEFCMBRQ), I stumbled on a single sentence that seemed to encapsulate the essence of the book in a powerful way.

As a blogger and design-driven individual, **I wanted to capture the quote in a captivating way that would allow me to share it quickly online**.

### An idea strikes.

I held my place in the book with one hand while thumbing through the app store on my phone in the other, unable to find an app that could accomplish what I was looking for. Then an idea suddenly struck me: I could *easily* create --- or try to create --- an app that allows me to highlight and share quotes from the books I'm reading. Or so I thought.

It just so happens that the line in the book at that very moment was the momentum I needed to at least try to build a simple enough solution:

![](http://web.archive.org/web/20190919044638im_/https://images.squarespace-cdn.com/content/v1/5b05a3300dbda3d74934c189/1546226279469-24Q187E5048L8PW99BFU/ke17ZwdGBToddI8pDm48kLXMM7vgPZ8okL8TCKCPeIcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYo28TYT98UPvWk9WoutShTaI0V78DVbK7kxgSSdgoAH2TReMEYG8xQ2LFQ6dbz20/image-asset.png?format=1500w)

The line resonated so well with me --- particularly because I belong to the church of reason that says [ideas are worthless until we get them out of our heads ](http://web.archive.org/web/20190919044638/http://www.startupvitamins.com/products/startup-poster-ideas-are-worthless-until-you-get-them-out-of-your-head-to-see-what-they-can-do)--- that I ran over to my laptop and started working on mockups of what an app with this type of focus could look like.

![1*cioo5prT3aSs79_f4zC2XA.png](http://web.archive.org/web/20190919044638im_/https://images.squarespace-cdn.com/content/v1/5b05a3300dbda3d74934c189/1546226378336-3XJOWODMZ1FFFT2XP2ZL/ke17ZwdGBToddI8pDm48kPmdWrmmXEELxSJgJ0EPayNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzIHnr6jMCVqcX8E4iPuf8L5yrOo4wprfN4nucMjn4N6BgX6Ar9SDMOolwhT88_qbo/1*cioo5prT3aSs79_f4zC2XA.png?format=750w)

Of course my initial instinct --- of being able to quickly create a highlighting app that effortlessly produces a sharable image of a text quote --- wasn't entirely correct.

I ran into problems with device orientation and how to create a visual effect of a highlight without actually creating the highlight (for the nerds reading who are interested in technical details: I ended up creating two image views of the photo, one brightened and the other dimmed. When a user slides their finger over the dimmed view, we create a mask layer that lets the brightened view shine through).

All-in-all **the project took me an hour to program** and another few hours to generate screenshots for, icons, text for the App Store, and promotional material like this short video:

I used the app to create the quote image you see above, shared it on Facebook, and submitted the App Store, then called it a day.

You can [download Snaplight here](http://web.archive.org/web/20190919044638/https://itunes.apple.com/US/app/id977049674?mt=8) if you haven't tried it yet.

In total Snaplight took less than 24 hours to conceptualize, design, program, create promotional material for, and submit to the app store. Which brings me to the reason I'm writing this...

Let me be clear: I think Snaplight is a pretty lame app.

Snaplight is terrible. It's hardly useable today. That's not to say it's useless...it's great for doing one simple thing well, but that's where it stops.

### There are a number of things *wrong* with Snaplight.

Photos are cropped strangely because of the limitations on the device. Highlights are one-size-fits-all (for now) because I didn't want to add clutter to the interface and an algorithm to detect the size of text in a photograph wasn't complete (but is coming to the app soon).

But the app did exactly what I wanted it to do: allow me to create sharable photos of highlighted passages from the books I'm reading.

Then, one morning a few days after Snaplight became available in the iPhone and iPad App Store, I noticed a slight uptick in downloads for it. A friend messaged me on Facebook to let me know the app was not only trending, it was **being featured on the App Store homepage**.

![1*aPseKlSlstwadfnPFoggCA.png](http://web.archive.org/web/20190919044638im_/https://images.squarespace-cdn.com/content/v1/5b05a3300dbda3d74934c189/1546226475726-VCU5MMYVDFN8UVP84V9F/ke17ZwdGBToddI8pDm48kKTy6cM85Cql2KHCMc1OUK8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcLyKQSttnA0X79jwWlQoiE82CHqxCGAsSJTlUjswWU5fBuUVIYLVFygYpzXB9JHv9/1*aPseKlSlstwadfnPFoggCA.png?format=1500w)

Within hours the app climbed to rest in the top 20 apps under the Lifestyle category, and reached the top 200 apps for all categories worldwide.

"Shit," I thought to myself, "this is going to get some seriously bad reviews."

Snaplight serves an extremely niche need: mine. But does that make it useless? No. I imagine someone at Apple who has been looking at [my past work](http://web.archive.org/web/20190919044638/https://itunes.apple.com/us/developer/tanner-christensen/id421646590) (Snaplight is my fifth creativity-oriented app in the store to-date), thought it was clever enough to promote to the homepage of the store.

After a few thousand downloads: I now am waiting for the negative, one-star reviews to roll in. And there is no doubt in my mind that they will, because Snaplight isn't the type of product many people will find useful.

![Thanks for the constructive feedback gregh1981!](http://web.archive.org/web/20190919044638im_/https://images.squarespace-cdn.com/content/v1/5b05a3300dbda3d74934c189/1546226506670-58IUKNC5P2R2TTG5P9EY/ke17ZwdGBToddI8pDm48kO1X1AXj_SgYLLzQqiRoGr3lfiSMXz2YNBs8ylwAJx2qLijIv1YpVq4N1RMuCCrb3iJz4vYg48fcPCuGX417dnYl-GcFhkaaFAf3TLuKEBXiochIn-QxixjlLE5bSWoqXAoyyEsAbPHhHcQMU6bWQFI/1*qJP2Ie8MQQ77TcvRPmzfHw.png?format=500w)

Thanks for the constructive feedback gregh1981!

My own mother, after testing the app on launch day, simply said: *"Like the app a lot. Hope you can improve it."*

Of course I have ideas for improving the app, but it's likely to never become a #1 app or meet all of the needs of those who will try it out in the coming months.

And not all of the incoming reviews are negative. Jeff Byrnes of AppAdvice.com had a few [kind words to say about Snaplight](http://web.archive.org/web/20190919044638/http://appadvice.com/appnn/2015/04/share-inspirational-quotes-with-ease-in-snaplight): *"Whether you're highlighting a quote from a book you're reading now or loading up an old photo from your photo library, the app is easy to use for creating a picture of your highlighted passages."*

Thanks Jeff!

But...

### **I'm ok with falling short in the eyes of those who don't find Snaplight useful.**

Instead of looking at this as a story of failure and missing an opportunity to potentially be a massively popular app, I want to instead focus on the reasons I built the app and how they've empowered me to not only reach hundreds of thousands of people time and time again, but helped me to be successful financially, in my career, and in my personal life.

Here's what I think is more important than getting a 100% 5-star review rating on an app:

### 1. Scratch your own itch

Snaplight solves an exact need --- or scratch --- I had: being able to quickly capture a photo of a book I'm reading and create a sharable quote from it.

All of my work has followed this same pattern of scratching my own itch, and here's why:

If the project fails, at least you have something that fulfills **_your _**need.

Even if Snaplight was never featured in the App Store, and even as it is certainly doomed to fall in the rankings due to low ratings, the app was a success in that it fulfilled my need.

There's a bonus benefit to scratching your own itch in the work you do as well: you can adapt it to fit your needs as they change or grow, because you own it.If I ever have a problem with Snaplight or want to add new features, I'm completely empowered to make those changes happen, because it's my product.

### 2. Start with MVP

Minimum viable product. Whatever it is you're working on: it needs to do what you set out to make it do, and nothing more (at least initially).

**You can always add more to a product, what's tremendously more difficult is getting the damn thing built and out the door in the first place.**If you have an idea, focus on whatever the minimum product can look like and build that. You can always adapt/grow/improve the product once it's built, but until you have something you can actually see or play with in front of you: don't worry about your growth strategy for it.

For Snaplight, I knew I wanted to be able to adjust the height of the highlighted area (something not present in version 1.0), I even began working on a text-height detecting algorithm that looks at a series of pixels in a photo and compares their contrasts in aggregate in order to return an ideal height for the highlight. But features like auto highlight sizing based on text size detection is candy compared to what I set out to build in the first place.

### 3. Don't be afraid to ask for money

Your work deserves a dollar, at the very least. **If you want to succeed you'll need to get comfortable asking for money.**

If you're willing to put in some work to do something (anything) you should be rewarded for your efforts, particularly if someone else is going to benefit from them.

As long as you believe the product offers *someone* value, they'll pay a reasonable price for it. And because you're scratching your own itch, there's a bit of early proof that makes it clear:

Of course "someone" will get value from whatever it is you create: people like you.

In the end, I'm excited that Snaplight is getting a bit of additional exposure to those who *will* find it useful but otherwise wouldn't have discovered the app in the first place.

For everyone else who tries it and finds it to be a useless piece of garbage: thanks for trying it and providing feedback, I hope you find what you're looking for elsewhere.

But for those in the last category, if you aren't finding the product that scratches your itch, might I make a suggestion? ...

### Learn how to build whatever it is you need, then go build it.

It's been a pretty effective strategy for me so far.

![Screen Shot 2018-12-30 at 7.23.53 PM.png](http://web.archive.org/web/20190919044638im_/https://images.squarespace-cdn.com/content/v1/5b05a3300dbda3d74934c189/1546226664905-Z77V5YZ5TNRT3JLMH1CT/ke17ZwdGBToddI8pDm48kGYOAjNScA-AaO0KtoClJvp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfWc148nRMI8Y4j6FxO0oAYwndgVWNzh9HFPQ3Y7UHUlJvwGh1qtNWvMhYKnvaKhbA/Screen+Shot+2018-12-30+at+7.23.53+PM.png?format=1500w)

**Update:** On September 1st, 2015, Starbucks selected Snaplight as their Pick of the Week, highlighting the app for more than a million people in the United States. Thanks Starbucks!

**Update:** As of March 2017, two years after launching Snaplight, it's still going strong with about 10,000 downloads each week.

## days are long while years are short quote

每一天很长，但几十年很短。

-- Sam Altman，《我的 30 岁感想》

https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short

## sketchy style web chart library

chart.xkcd

https://github.com/timqian/chart.xkcd

一个 XKCD 漫画风格的网页图表库。（@timqian 投稿）

## sketchy style web svg library

Rough.js

https://github.com/pshihn/rough/

生成手绘风格图片的 JS 库。

## zero width characters hidden text generator web app

基于零宽字符的文本隐藏加密工具

https://github.com/ruanyf/weekly/issues/796

该工具的原理是利用零宽度字符，将加密文本转码后嵌入到普通文本当中，从而表面看起来是一段普通文本，但是复制粘贴不会丢失密文。

## python tricky features library

wtfpython-cn

https://github.com/leisurelicht/wtfpython-cn

这个仓库收集一些有趣且鲜为人知的 Python 特性，内容是从英语翻译而来的。（@fengrussell 投稿）

## why we abstract while programming quote

最好的工程师不是写代码最多的工程师，而是做出未来可以少写代码的决策的工程师。

-- Dan Goldin

https://dangoldin.com/2019/09/16/goldilocks-and-the-three-implementations/

## create a successful side project story theory

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

### Step 1 : Find a product idea challenging enough from a technical point of view

The challenge I decided to face was to develop a fully working product, as a side project (keeping my full time job). I won't be in a hurry if I kept working full time (no money stress), meaning I will always have my job to pay the bills.

Also, when I was young, I have always been a huge fan of Gyro Gearloose (inventing stuff by himself in his garage) and when I grew up, I was fascinated by startups that was born in garages with nothing apart a single guy working on his passion project.

![](https://pixelixe.com/blog/images/18/startup-garage.png)

Find below conditions I decided to follow for my side project :

Condition 1 : I decided I wanted to do everything by myself, from the idea, to conception and design and to develop every line of code alone: databases, middleware, APIs, website, defining UX/UI, everything!!! I just wanted to keep fit and sharpen my technical skills.

Condition 2 : I didn't want to build something too easy. I wanted it to be fun, complex with a lot of calculus problems to solve (to revise mathematics simultaneously with coding), maybe a bit of 3D, something that people would use with pleasure and that I will be proud of.

Condition 3 : It was obvious from the start, I wanted to create a Saas product with a freemium model. As it will be a side project, I couldn't afford to start a business where I would have to meet people face to face (salesman way) to turn them into potential users or buyers. The plan was to create a tool accessible 100% online. Users will be able to use the free plan or upgrade with their credit cards without any human intervention whatsoever. That way keeping my full time job won't be a problem at all.

Condition 4 : Finally, I decided to spend no money at all on this project. (Except for buying a domain name which is mandatory) Bootstrapping was the way to go. I wanted to persuade myself that on the Internet in 2019, you could still build something from the ground up with no money. (Like in the 70s/80s/90s, when geeks started profitable businesses directly from their garage).

### Step 2 : find a business idea

The next step was to find a business idea. I made some research on Google, Reddit, Quora to find ideas. But nothing really popped up and motivated me.

I then spent two weeks interviewing some friends and my network that had jobs in small and medium businesses. I quickly noticed asking a bunch of questions that a lot of small businesses struggled to get or create graphics to promote their services on social and digital platform (Existing solutions were too complex or too expensive). The tools available were not only complicated, but they were incredibly time-consuming. Hiring a graphic designer was also out of the question for SMBs.

I then decided to create an easier way to design graphics and images for non-designers.

Moreover, this idea was motivating me a lot, I decided to build the most easy to use and accessible graphic design studio on the market. Developing a WYSIWYG (What You See Is What You Get) editor was complex enough to challenge my computer engineering skills. A lot of mathematics and calculus would be involved, perfect. I was excited as hell!

To summarize, the plan was to develop a design studio, conceived for non-designers (SMBs with limited resources and budgets), startups, bloggers and marketers willing to launch simple marketing and social media campaigns without spending tons of money with agencies.

I started developing the first line of code in May 2018.

![](https://pixelixe.com/blog/images/18/office-macbook.jpg)

### Step 3 : There is no such thing as finding a startup name, In reality, the trick is to find a free domain name that looks like a startup name

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

### Conclusion 12 months after starting the project

Profitability for a side project can be, I suppose, controversial. I do not rely on Pixelixe, my side project to live and get a full salary. The only expense Pixelixe had so far is $13 to get the domain name "pixelixe.com" from Google Domain last September. In 4 months since the launch, Pixelixe Studio generated around $1000 of positive income. Not bad for a side project start, right?

I did a lot of effort to reduce expenses as low as possible optimizing codes and favorising client-side processing instead of server-side processing to avoid hosting costs. (In another article, I will explain how I did it).

Today, gains are almost 100% bigger than expenses. Therefore, I consider the project as profitable in the sense, it generates enough cash flow to sustain itself (and even more). I do not plan yet to reinvest part or totality of profits into the project, I am still trying to validate pricing, business model and get more organic growth.

I am glad I went out of my comfort zone accepting this Facebook interview. I learned and grew a lot since then.

I am proud to say I regain my coding abilities, design abilities, web marketing abilities and I can carry on as there are so many skills required to launch a startup as a side project.

## jira web app confused ui design theory

为什么 Jira 难用透了（英文）

https://medium.com/@jtomaszewski/15-reasons-why-jira-and-confluence-suck-37507361cbdf

Jira 是常用的项目管理工具，本文使用大量图片解释这个工具是多么难用。

---

### Over 16 reasons why Jira and Confluence suck

For years I have been both an end-user and a [developer](https://jtom.me/portfolio/) of many web applications, with many of those being Software as a Service.

Many times I have used tools like Asana or Trello to manage project tasks.

Recently I have been asked to use Jira. I had joined a new project of an existing organization. They've been using Jira for years.

![](https://miro.medium.com/v2/resize:fit:1400/1*4XHSBOrTW6uUNLO4cXMBUQ.png)

Looks so nice at first glance.

And damn, mate. That has been an adventure.

### Hanging out with Jira

First week was like going back into the 90s. Everything was opening so slowly. The UI was bloated so much. It asked me so many times with senseless "Are you sure?" confirmations. I felt like being back in Windows '95 times. (Although Windows was way better.)

Second week I was constantly like *"hey guys, can we switch to Asana?"* ;) Me and my teammate went even as far as to create an alternative Asana board. We had started creating our own tasks in there instead of Jira. Unfortunately, switching over was out of the question. We had to use the existing tool to which the whole organization has adhered to.

During the third week and the following few months, I realized that I had no other choice. I had to get used to it. As they say, *"If you can't change something, live with it." *That meant getting used to a tool that encouraged everything, but the effective project management and [agile software development](https://en.wikipedia.org/wiki/Agile_software_development).

The only thing Jira encourages you to is to spend as little time on it as possible. Many of my teammates prefer to keep their TODO list in a physical notebook. They just find Jira too ineffective and time consuming._ (Strangely, when I had collaborated with others on Asana or Trello, nobody was doing that. They found it intuitive enough to make notes in the app instead.)_

![](https://miro.medium.com/v2/resize:fit:1400/0*4qHcFi97njD9c3LG)

Do you find this better than Jira? / Photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

Some would say: *"You hadn't learned how to use Jira yet". "Jira is going through important updates now". *I call bullshit!I've been using it for 9 months already, and I still find it as terrible as when I was starting out with it. ([Asana](https://asana.com/) and [ClickUp](https://clickup.com/) probably introduced 10 new features in the meantime.)

I was so surprised that such a popular and important for the whole organisation tool is so terrible. Jira should be a web app that "lets you easily manage your project". Yet, it fails tremendously at it.

Some of my friends respond to me when I am explaining my Jira horror stories to them: *"Ok, I understand you, it could be better a bit, but other tools are nowhere near good as Jira is in reporting or integration with other tools."*

What kind of explanation is that? Asana lacks one feature on reporting, so what? Have you considered what downsides to your projects brings Jira? With such User Experience it has, it makes more bad than good to your organization. It's a matter of time until the other tools will have the features you need without the cost of unusability. Leaving your organisation on Jira will be a huge disadvantage to both your projects or any people considering to work for you.

Let me give you a few examples to illustrate my point.

### Jira UX

For the purpose of this article I signed up for a free trial of ["Jira Software + Documentation" package](https://www.atlassian.com/software/jira/try). As my user scenario, let's imagine that I had just created a new company, and now I created a project in Jira called "Indri Landing", which will be used as a project management centre for preparing the launch of my company's landing page.

After creating the project, I decided to create my first task (that is: issue).

![](https://miro.medium.com/v2/resize:fit:1400/1*YM8hYpABaCN_jnUa8KiAzQ.png)

Kanban board --- first view you see after creating a project.

### 1. Issue Type --- why does it exist?

First thing you learn while creating an issue in Jira, is that each issue is not a just an issue. New issue by default might be a Story, Epic, Bug Item, or a Task (and a sub-task, but more about it in a second).

![](https://miro.medium.com/v2/resize:fit:600/1*XFXViLMGYRat9gXp2ptDPQ.png)

Why does such split exist? The difference between them is explained in both theory ("they serve different purpose") and practice ("Story has different workflow than a Bug").

In short however they are all the same thing. A task to do/fix something.

So in practice, every time you create an Issue, you have to think on what kind should it be. Should it be an epic, a story or a task? Or maybe all of them? (Like, I should first create "Initial Release" epic, then follow it with a "Bootstrap the project" story, and then, in it create tasks like "Create source code repository"?)

_... uhm. I'll just create "Create landing page" task for now, and then compose it of other tasks._

### 2. How to create a new issue?

After creating my first issue, I wanted immediately to create another one. However, because now that I have an existing issue, the big "Create an issue" placeholder has disappeared. So I started to look for an "Add Issue" button.

![](https://miro.medium.com/v2/resize:fit:2000/1*MZX3q8RUz19olk9LZbyhww.png)

You have 500 ms to find the "Add Issue" button. Start.

_...Where is it?_

I clicked on the three dots button, but the only thing I saw was this.

![](https://miro.medium.com/v2/resize:fit:484/1*tiAxAJL5c7lGShCQcn5LTQ.png)

I can create new boards, but not issues.

Then I clicked "Add Item" link in the sidebar on the left, just to see this:

![](https://miro.medium.com/v2/resize:fit:1306/1*cn1KQ7QiEopy0a4o3OCT5A.png)

I can create shortcuts and pages, but not issues.

*... oh, there it is!* On the far left in the blue sidebar which visually doesn't belong to the project view at all. Interesting decision from the UI designers.

![](https://miro.medium.com/v2/resize:fit:2000/1*DZrzoYvslgmW_kbPZvQeLA.png)

"Add issue" button found --- on the far left of the screen as a tiny "plus" icon.

### 3. Task can have sub-tasks, but a task can't be a sub-task of a task

I've been working with Jira for 9 months now and still I can't stop laughing while reading the above subtitle. An issue on Jira can be a task or a sub-task of a task. However, existing task can't be a sub-task of a task. You'd need to "convert" existing task to a sub-task in order to make it such.

My scenario: I had created second task called "Prepare Graphic Design", and now I wanted to make it as a sub-task of "Create landing page" task.

![](https://miro.medium.com/v2/resize:fit:544/1*xMk-VUeam73yCZpgIdCtVA.png)

I have created two tasks, but now I realized that one of them is actually a part of the another.

So I went into "Create landing page" and tried to add a sub-task.

Unfortunately, after typing the other task name in, it just created a new sub-task:

![](https://miro.medium.com/v2/resize:fit:2000/1*qEwDEtHWePUUev8HKqbnBA.png)

By the way. What's this "This board has been updated" alert about?

*Mhm, not something I desired. Let's remove it.* However I couldn't find any remove button next to the sub-task element on the sub-tasks list. *(Why? I don't know yet.)* So I clicked on the sub-task in order to proceed to its' view and maybe find the remove button there.

![](https://miro.medium.com/v2/resize:fit:1400/1*FTgo8waeeEjXoCtxTEM-bg.png)

Looking for the "Remove issue" button. Attempt no 1.

_... I must be blind. No delete button anywhere, even after clicking on the main three dots button. Maybe the other three dots button includes that?_

![](https://miro.medium.com/v2/resize:fit:794/1*79IbX9f4jziq-hKrKDDRFA.png)

Looking for the "Remove issue" button. Attempt no 2.

_Nope. Maybe if I go to the parent's task view and click the three dots button that is located next to the "Sub-tasks" section title, I'll be able to delete the subtask from there?_

![](https://miro.medium.com/v2/resize:fit:1318/1*W4nFJpVkSAOf_3s44ArhBw.png)

*Nope!* I was expecting here something in lines of "Select and delete", but the only thing that could be anyhow related to it was the "Bulk edit" link.So I clicked that.

... which caused a redirect to some totally different page called "Bulk Operation"! Which was loading for about 6 seconds. While all I wanted was just to delete a subtask that I had just created. *(Mhm, I hope it will remember my last view once I finish this "Bulk Operation".)*

![](https://miro.medium.com/v2/resize:fit:2000/1*S5GO6MRdOhQMsRCF9KVM6w.png)

"You do not have permission to delete the selected 1 issues."

*A bit weird. I am the only person in this project, I had created both it and the issue, but now I can't remove them? Why is that? *I started googling.

![](https://miro.medium.com/v2/resize:fit:1400/1*z7RkcEssHo_TTm_ZOT8LHA.png)

TL;DR: Deleting issues is prohibited because it would make restoring them impossible.

Oh, so it's a feature, not a bug. OK, I get it - it might be a good safety practice not to let the users delete any of the issues. (Even the ones they had just created a second ago?! ;>).

*... Come on. *Is it the best that a big company like Atlassian can think of?

Why they have never thought of placing an "Archive" button? Almost every web-based tool nowadays has a way to archive files, photos, articles. (It's same as "delete" but with "undo" feature included.)

*Anyways, I won't be changing these permissions now, I don't have time for that.* *Maybe I can mark the subtask as "Skipped" or something?*

![](https://miro.medium.com/v2/resize:fit:1400/1*bYxM5jX1JZDk18SoQxmMCQ.png)

*Nope. I can only move it forwards. *Thus, as a temporary workaround, I renamed the issue title to "ARCHIVED" and marked as done for now.

### 4. Making a task subtask of a task

Anyways, let's go back to the "Create landing page" issue. I wanted to make an existing task a subtask of it.

By spotting a "Link" button in the UI I noticed I can link issues to each other. It looks cool, I admit, however it seems to be something else than the task-subtask relation:

![](https://miro.medium.com/v2/resize:fit:1400/1*dInjKSx2V3vX75OwuStowQ.png)

There are many options in the link dropdown, like "blocks" "clones" "duplicates", but there is no option like "subtask of".

Why do subtasks exist at all then, if tasks can be linked to each other on their own anyways? I mean, a subtask is usually blocking the parent task too, isn't it?

Since I can't link an existing task to another task with a task-subtask relation, maybe I can convert existing task to a "subtask" type? Let's google.

![](https://miro.medium.com/v2/resize:fit:1400/1*ZYUC1nx2H2KH-9oWZsvluA.png)

There is a possibility to convert task into subtasks one by one and also by group as well.

OK. But where is that functionality to convert a task? Maybe I missed out on it somewhere?

![](https://miro.medium.com/v2/resize:fit:2000/1*Tk_fFADGifrjZ8sWnalZEw.png)

Searching again in the three dots dropdown.

I found "Convert to Subtask" link after clicking one of the three-dots buttons. After clicking it (and waiting ~5-10s for a full page reload), following view has been shown.

![](https://miro.medium.com/v2/resize:fit:2000/1*i8Srog41d1GcjLuc-0mE0w.png)

Looks like I was about to reformat my OS. Why does it look like so complex? (All I wanted was to make a task a subtask.)

![](https://miro.medium.com/v2/resize:fit:1012/1*y6Lt_uxVEyw1KlEGWXqBgw.png)

The multi-step form also shows this. Even though I had already shown my intention explicitly by clicking a "Convert to subtask" link. This select here doesn't list any other options anyways. What's the sense of showing it?

After selecting the issue and clicking "Next", it moved me to the next step:

![](https://miro.medium.com/v2/resize:fit:2000/1*at5Xddk-PkiNrwJ53X2LDg.png)

Step that is not required, gives no information, and has no possible actions other than "Next". Why bother showing it at all?

Having clicking another senseless "Next", it moved me forward again:

![](https://miro.medium.com/v2/resize:fit:1400/1*XVcFfpUPI0-lZpjzVyWpCg.png)

Three times I had already confirmed that I want to convert the task into a subtask. What does JIRA do? Asks you again! (Ordering a taxi would be easier.)

After final click on the "Finish", (and another full page redirect and ~8s of awaiting), finally I managed to convert the task into a subtask:

![](https://miro.medium.com/v2/resize:fit:2000/1*WwSyiUtw6EjcBYkyAXrngw.png)

Yes! Task seems to be a subtask now. (However I don't even see the parent task title, just an ID...)

BTW. Have you noticed that alert in the top?

![](https://miro.medium.com/v2/resize:fit:2000/1*W7w3w7BcePUO7WYe-nSYDQ.png)

It tells me that I'm on a new issue view. That's generally a cool way to inform users about new features. However I'm a new user. I don't really know what's new and old.

Besides, can you see it --- it has no close button?! (Clicking all the links and hitting refresh also doesn't hide it --- yes, I checked.) *Jeez... Let's move forward, maybe this annoying alert will disappear soon. *(It won't. I've been seeing it for 9 months already.)

### 5. Splitting tasks into separate releases

Having learned that converting an existing task to a subtask is non-trivial, I created next subtasks directly from the task view. I also created some other tasks, like "Ask for feedback", "Check SEO", that should be done after the initial release of my website is done.

Now, I'd like to somehow group those other issues into a future release or something, so they don't distract me while working on the initial release tasks.

I found this button "Release" in the Kanban board view and noticed that it allows me to create releases:

![](https://miro.medium.com/v2/resize:fit:1038/1*-jLhKHPwQnkk5C-LsDLVgQ.png)

Did you know... release needs a date? What if we don't know when a release will be done? Don't ask me.

I decided to create two new releases: "1.0" and "2.0". Unfortunately, after creating the first release, I couldn't create the second one anymore:

![](https://miro.medium.com/v2/resize:fit:638/1*IDC-_rI9EYba9nCmVa9epA.png)

"Release" button is now disabled.

Before resorting out to google, I noticed that there is a "Releases" link in the sidebar. I clicked on it only to have Jira greeting me with such view:

![](https://miro.medium.com/v2/resize:fit:2000/1*hiXZs8-F7fUVS50lyM9LJA.png)

Releases view that shows nothing, even though I had just created a release.

This resulted in me having three questions on my mind now:

1. _"Can't find that version" --- what? what version? I haven't even start looking for any specific version yet._
2. _Is release the same thing as version? (Why don't you guys stick to one naming?)_
3. _Where is the version/release I had created?_

After changing the search filters from "Unreleased" to "Released", I learned that release has in fact been created but it has been marked as "Released". Even though I had set the date of it to be in the future. Why?

![](https://miro.medium.com/v2/resize:fit:2000/1*KAgMoOG0m-UQWFDYtooBsQ.png)

No idea. To fix it I "unreleased" it. After that, from the same Releases view, I created a new version called "2.0":

![](https://miro.medium.com/v2/resize:fit:852/1*In8WJcWfvCKNJ4RcLSwvZw.png)

While creating a release in this view, you don't have to set its' dates. So are they required or not?

Now that I have my planned releases created, I decided to go back into the Kanban board and assign my existing issues to their corresponding releases.

![](https://miro.medium.com/v2/resize:fit:2000/1*v4mNuXaPabH7a3XzIP8gCw.png)

Looking for "Release" in the issue's sidebar. Found just "Fix Versions". I guess that's it?

_(Why do I have to guess all the time?)_

![](https://miro.medium.com/v2/resize:fit:1400/1*1W__QJ1xleZbtSXzt6LuNg.png)

Release (that is: Fix Version) assigned. Uff.

While going into the issue view, and assigning it to a specific Fix Version for about 4th time, I noticed it's quite a tedious task. I'd like to automate it a bit. Can I select many issues and bulk edit them all at once?

I went back to Kanban board because I was expecting that some kind of bulk actions were reachable from there. (Un)Surprisingly, they weren't.

![](https://miro.medium.com/v2/resize:fit:1400/1*WKHELkwE6amhusaB005DFw.png)

Looking for Bulk Edit on Kanban board. Without success.

Where can it be? Let's google [again].

![](https://miro.medium.com/v2/resize:fit:1400/1*HQO2C2y-tr9DCUTDLL6oyA.png)

Bulk actions are accessible only from a "search view". Whatever that is.

... So how do I perform the "search"? *(I thought Kanban board is a search view already, as it has the search filters.)*

I clicked the search button in the sidebar,

![](https://miro.medium.com/v2/resize:fit:142/1*bysDxZJ4JaBMswB05sX8mw.png)

to open this:

![](https://miro.medium.com/v2/resize:fit:1206/1*tPLfv2xA5o4EQ-MTfb-MZg.png)

Unfortunately, no bulk actions here yet.

I clicked "Advanced search for issues". A full page reload and 10 seconds later,

![](https://miro.medium.com/v2/resize:fit:2000/1*Ul8vwcCSmbOwTy6HO3fz0Q.png)

Advanced search view has appeared. Showing total 0 issues that were matching my search (even though I hadn't search for anything yet), and a big field with some long, weird, programmatic query language.

🤦 ‍Why would you put as a default search view a view that shows nothing?

To change the situation I had to click "All issues". Finally it showed something:

![](https://miro.medium.com/v2/resize:fit:1400/1*0lfX0KHUaIVuFTEgVszGiw.png)

But where are the bulk actions? Maybe in that "More" button next to filters?

![](https://miro.medium.com/v2/resize:fit:672/1*nkp_c9wtXXM95AGEn1sSNg.png)

Nope. Maybe they'll appear after clicking "Advanced" button, the one located next to the search input?

![](https://miro.medium.com/v2/resize:fit:1400/1*x91yCy6J2gbSB5qoIyh8rQ.png)

Nope. It just changed the input look. Maybe in the three dots button in top right corner then?

![](https://miro.medium.com/v2/resize:fit:632/1*KP490tMTO4YLYrQXIwQy3w.png)

Yes! I got it! But... I don't want to change all 16 issues... I only want to change some of them. How do I do it? ...

I changed the search filters to scope the issues down a bit, so the view would show only the main issues, and decided to Bulk change all 4 of them.

![](https://miro.medium.com/v2/resize:fit:1400/1*5TI6822calEzRapxi9bc5A.png)

Luckily, (after 5s and another full page reload), Jira listed all those issues again, but this time with checkboxes, so I could select only some of the issues that I initially wanted to edit. (Couldn't we do the "select" thing on the previous view though?)

![](https://miro.medium.com/v2/resize:fit:1400/1*mFyNYqoajd9vH_nkVNevxw.png)

Another list of issues, this time finally with checkboxes.

P.S. If you'd like to preview those issues here before selecting them, guess what --- you can't. (If you click on the issue link, it'll redirect you to it, dropping this view.) If Kanban view has ability to preview issues in a modal, why this one doesn't have it? 🤔

After having selected 3 of those 4 issues, clicking 4 times on a "Next" button (and waiting for a full page render between each of those clicks), finally I was given this final view:

![](https://miro.medium.com/v2/resize:fit:1372/1*MVfcVK_J3_mFBGhOXjhQSw.png)

Operation complete. Congratulations! (They could have put some fireworks in here.)

### 6. Browsing issues only from a given release

Having my issues split amongst two separate releases, now I could focus only on the issues from the 1.0 release... At least that's what I hoped for. I went back into the Kanban view.

![](https://miro.medium.com/v2/resize:fit:1400/1*rblIqaR5RwwaTcBK98wWaA.png)

First question on my mind: How can I filter issues to see only the ones from 1.0 release?

_... looking for the filter button ..._

1. If I had clicked the "Release" button in the top-right corner, that would have only shown me a dropdown that allows to add/move "Done" issues into an existing release.\
   (P.S. It's not easy to tell it from the UI what exactly it does. You have to learn it by yourself by making a release and observing what it exactly does, or by learning the docs. The modal doesn't clearly explain its' function.)

![](https://miro.medium.com/v2/resize:fit:1190/1*siSE4-UNyGkOgwlepQMT_w.png)

2. If I had clicked the "three-dots" button in the top right corner, I wouldn't have seen there any filters neither. Instead, I would spot two other links, that maybe could help me: "Board settings" and "Create board".

_... Board Settings? What's that? Let's try that._

![](https://miro.medium.com/v2/resize:fit:2000/1*_5zVt94IzCqE-qr3ZJ_zSg.png)

"Board Settings" view

It seemed like it could be something that I was looking for. *Maybe the Kanban board is programmed in such a way that it always shows all the Board issues, and if you want to filter them, you have to edit the board or create a new one? (*I had to have such complex thoughts in my head just to filter the issues on the issues view.)

_... but that'd be super weird_. How many applications do you know in which you have to "create" a view, in order to filter it? *(If you want to filter emails on Gmail, do you have to create a new Gmail board? Nope.)*

Nevertheless, I decided to create a new board specifically for the 1.0 release. After clicking "Create board" button, Jira greeted me with the following modal:

![](https://miro.medium.com/v2/resize:fit:1400/1*jVjK8TV0MU8jBHjW8idCLg.png)

Scrum or Kanban? That is the question.

*What if I like to work in Sprints but I also like to use a Kanban view? Does it really exclude itself? :(* After a deep thought, I decided I usually prefer to be flexible with sprints and deadlines. I went with Kanban.

![](https://miro.medium.com/v2/resize:fit:1400/1*1jmWtzwlk5tscgvpzGF1Sw.png)

What Board would you like to create, sir?

At first thought, I wanted to pick "Board from an existing Saved Filter", as I wanted to show issues from my project that are a bit filtered. However, *what is that "Saved Filter" thing? Sounds a bit too complex as for a simple filter. *So I picked "from an existing project" (because indeed I wanted to create a board for an existing project).

![](https://miro.medium.com/v2/resize:fit:1400/1*VWHG1fB03VKWlzycYCQBow.png)

Last step of creating the board

![](https://miro.medium.com/v2/resize:fit:1400/1*fEtRzhtz9uAqvayPbrZdOQ.png)

Board created. Looks the same as my initial one.

*Oh damn, I had created the same board as I had before.* 😞

They didn't predict that I want to show issues from an existing project AND filter them at the same time. *(Who's at fault in here? Me or Jira UI designers?)*

_Let's go back into the Board settings. Maybe I can set the filters for this board since I have it created already._

![](https://miro.medium.com/v2/resize:fit:844/1*QMKAUB_v7qka3k3spUbFEw.png)

Board Settings -> General -> "Filter" section

_Not sure if I understand all of it, but maybe it's the "Filter Query" thing? Let's edit it._

I got redirected to already familiar advanced search view:

![](https://miro.medium.com/v2/resize:fit:1400/1*M_WZpv3Z6xnZc8arqCz9YQ.png)

"Filter for 1.0" Advanced search view

Being familiar with the filters already, I quickly managed to add a "Fix Version" filter.

![](https://miro.medium.com/v2/resize:fit:1400/1*xsbiBmFqG9xmk1eGScJYzg.png)

Filtering issues to the ones that belong to 1.0 Fix Version

Just after that, a "Save" button appeared next to the filters title. I clicked on it and surprisingly, Jira redirected me back to where I was before editing the project... Oh no, wait, it didn't. 😐

![](https://miro.medium.com/v2/resize:fit:1400/1*2efQK8idPJH57ld7PqoaJA.png)

Instead it just showed a flash message that the filter has been saved. *(Has it been set as the filter of the board though?* 🤔*)*

To go back to where I was (Kanban view for the 1.0 board) and to confirm if the thing I wanted to do was actually done, I had to:

1. Click on the "Back to main menu" link in the blue sidebar on the left.

![](https://miro.medium.com/v2/resize:fit:646/1*Xm1GAl2QUIjv__lk2AarCg.png)

2. Click "Projects" to see this (after another full page reload!):

![](https://miro.medium.com/v2/resize:fit:2000/1*UlqI99QMFS2H74JM7ZhkcQ.png)

Do I want to show a project or a dashboard or Issues? Kanban board is all of that, lol. How do I get back? Can somebody help me?!

3. ... Click "Indri Landing".

![](https://miro.medium.com/v2/resize:fit:1400/1*y_5UkDIzH5Uc_JjcfSoxpg.png)

After another full-page reload, finally I managed to see what I originally wanted --- a Kanban board that is filtered down only to the issues from a given release. I feel so proud that I managed to do it. 😁

### 7. Creating an issue in a filtered board

Now that I have a board focused only on 1.0 release, let's get to work --- move some subtasks to "In progress" and start working on them.

*... but where are my subtasks?!* 😮

In a global project board I saw both tasks and their subtasks, but now I see only the main task.

![](https://miro.medium.com/v2/resize:fit:1400/1*zWRfaeXcqyZjjzoUoc8Vng.png)

_... Seems like the newly created board has different settings than my previous default board?_

After looking into the Board Settings and googling for almost 5 minutes ([1](https://community.atlassian.com/t5/Jira-questions/How-to-show-the-subtasks-in-the-backlog-sprint-tree/qaq-p/412630), [2](https://community.atlassian.com/t5/Jira-questions/How-to-Display-Sub-Task-below-the-Parent-Task-in-the-Backlog/qaq-p/262062), [3](https://community.atlassian.com/t5/Jira-questions/Newly-created-Sub-tasks-not-showing-up-on-Kanban-board-since/qaq-p/70864), [4](https://community.atlassian.com/t5/Agile-questions/Why-do-some-sub-tasks-appear-on-kanban-board-and-others-don-t/qaq-p/734063)), it seemed like it's impossible. Nice, Jira! You ruined my Kanban board for me now completely.

*... Having googled for another 5 minutes...* OK, got it. It seems like even though I moved the tasks to a given release, the subtasks that belonged to them, have stayed in "no release", and that's why they don't appear.

So not only I had to move the tasks, but also their subtasks to the 1.0 release. (It's a pity that Jira didn't suggest me changing tasks' subtasks as well at that operation.) Let's do that:

_Go to advanced search -> find the subtasks -> bulk operation -> edit all issues -> assign to fix version 1.0 -> yes I confirm -> waiting for the operation... -> ... -> yes I acknowledge -> go back to projects -> go back to Indri -> go back to 1.0 board_

Yes! Now I got it:

![](https://miro.medium.com/v2/resize:fit:1400/1*4_wZDn5Yd4UeHrcNyC_UMg.png)

_(They should _[_pay me_](https://www.google.com/search?q=jira+administrator+jobs)_ for doing this Jira work.)_

### 8. Creating tasks in a filtered board

While being on 1.0 board I realised that I need to a few more things for the 1.0 launch. So I decided to create a task:

![](https://miro.medium.com/v2/resize:fit:1400/1*q1WFvsglBKkbFQcG-GeWfQ.gif)

Creating the issue ended up with "Issue is not currently visible" alert. *WHY?!* *Mhm. Maybe there was that "Fix version" field that hasn't been prefilled (even though I'm on the version view), and that's why it isn't appearing?*

_... going back to advanced search view ... finding the issue .. yeah, it doesn't have the Fix Version. (Even though I created it on a Fix Version-only board.)_

Why doesn't Jira allow you to create issues specifically for the current board, and why it forces you to always prefill all the fields, no matter what your current issues view shows you? Don't ask me.

### Other issues in short

We could go on and on, but this post is already taking too long. I'll give you a few last examples of terrible UX, but this time in a shorter form. Those examples will be from my daily work.

### 9. Creating an issue takes forever

In our organization there are multiple projects and teams collaborating on one Jira workspace. Thus, whenever we create an issue, we are obligated to fill in:

- Fix Version (version in which we plan to fix it)
- Component (team that will fix it)
- Epic (the "feature", in which this thing will be delivered)

Unfortunately, Jira doesn't help us filling those fields at all:

- it never remembers the last value, nor lets me define the default value, nor lets me define a "template" or anything, (so I could quickly create a task with just one click,)
- some of the above fields that I'm required to fill in are actually hidden in the very far bottom of the "Create issue" modal. Although I can hide some of them, I can't change the order in which they appear.

Outcome:

- While Jira should be the centre for all of our project tasks, very often it isn't. Creating a task takes at least a good minute. Because I need to focus so much on filling all the mandatory fields properly, it requires me to [switch my context](https://personalmba.com/cognitive-switching-penalty/) every time I do it. Very often we end up avoiding Jira totally, just to "save our time", resulting in tasks and knowledge being lost in the vain of endless Slack chats, instead of the project management centre.
- Issues often get lost in the vain. When somebody forgets to fill at least one of those fields, there's high chance that our board's filter query will not catch the issue, and nobody will ever see it.
- People resort to using [alternative](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode) Jira [clients](https://alternativeto.net/software/jira-client/), probably because the native one sucks so much. Even myself, I'm now using a [CLI client](https://github.com/go-jira/jira) to create and browse Jira issues. I had to spend a couple of hours to customize it, so it would fill all my needs. Luckily, now creating a task is just a matter of 2 ENTER clicks and typing the issue title, just as it should have been from the beginning. *(The tool is so terrible that I had to resort to configuring a CLI client. Can you believe it? For example, do you use CLI to chat on your Slack? Of course not. Somehow for Jira it sounds reasonable.)*

### 10. Split into "New" and "old" issue view

Some of the features that are accessible from the "Old issue view", are not accessible from the "New issue view", and vice-versa. They had released a "New issue view" that lacks important features from the old view. At the same time it introduced new features that can't be accessed by the customers still using the old view.

For example:

- you can't browse work time logs from the new issue view, but you can do that in the old issue view,
- you can't edit issue's time estimate from the old issue view, but you can do that in the new issue view.

Result: I have to constantly switch between the new and old issue view. (Of course, it is not that easy. If you want to switch, you have to go to your account settings and reload all your currently opened issue views.)

### 11. Moving issue to a different status is cumbersome

When I switch an Issue from one status to another, i.e. from "In Progress" to "Fixed", often I am obligated to fill in some additional fields, like "Resolve type". There are many different values, like "Done" "Blocked", "Skipped". You know what we click? In 99% cases, that's "Done". Is it selected as the default value? Of course not --- it always requires you to do that one additional click. (Mouse click --- because keyboard navigation often doesn't work.)

### 12. Multiple views that illustrate the same thing, always differently

Just look at that.

![](https://miro.medium.com/v2/resize:fit:1400/1*bfteF7CZFfUDK_aUlv9Ojw.gif)

7 different Issue listing views, each looking completely different, often with different UI of pagination and filters.

Honestly, every time I open up a view in Jira, I have no idea in what way will it look like.

### 13. Email Notifications spam

Jira notifies you about any issue updates via email. This is excellent. However, when doing dashboard apps like Jira, you will quickly notice that the amount and frequency of these "X has been updated" emails is a bit too big. So you do a simple solution: send notifications in bulk. (Don't notify for~5 min or so, and then send all of them at once in one email.).

Atlassian haven't though about it yet. (Or their system is too bloated to go through such a change.) Thus, you end up having hundreds of email notifications. (Unless you turn them off completely. Beware though, this might make your workmates angry, if they notice that you don't respond to their updates.)

What is worse, if you use Jira integrations, it's very probable that they will cause Jira to send even more emails. For example, we use [Aha! integration](https://www.aha.io/product/integrations/jira). Whenever I create a Jira issue, Aha! integration links it with something on Aha!. Which causes an additional email: *"Aha! Integration changed issue XXX. Fields changes: Aha Integration Link from nothing to YYYY."*. Thanks mate, very good to know...

### 14. Invisible In-app notifications

Instead of email notifications, some people resort to in-app notifications.

However, somebody made an idea that they are hidden somewhere in the bottom left corner of the screen. Thanks to this, I didn't know they exist until somebody had told me about it about three months after I started out with Jira.

Even after that, I very rarely spot the "You've got new notifications" dot. The notifications icon is put in such a place on the screen that you really have to remind yourself about notifications in order to remember about them. (*Shouldn't it be the opposite though --- that notifications should be ones that remind?* 😉*)*

![](https://miro.medium.com/v2/resize:fit:1400/1*gj1j7DMk__rTImg2JJOp4g.png)

### 15. Performance!!!

Biggest [PITA](https://www.collinsdictionary.com/dictionary/english/a-pain-in-the-arse) of Jira is its' performance. Almost every click results in a full page reload, which requires about ~10 seconds for it to be loaded. Which means, if you want to quickly show a list of issues, read about 4 of them, and edit one of them, you have to wait for full page reload about 7 times. Simple operation like "see what are my issues and start working on one of them" often takes at least a minute or two, and makes you lose your focus on your job completely.

### 16. Confluence also sucks

Confluence advertises itself as "Team Collaboration Software".

![](https://miro.medium.com/v2/resize:fit:1400/1*Z32zv3zguHj2eG4YIFdSYA.png)

Confluence landing page telling a beautiful story about it.

TL;DR: it's a nested directory of documents that can be read and edited online.

However, you know what you can do in Google Docs, Microsoft Word Online, Dropbox Paper, Hackpad, but you can't do in Confluence? Read and edit at the same time!

If you want to edit, you have to go to a separate edit page (that requires a full page reload) and wait sometimes even up to 15 seconds for it to load.

Theoretically, there is a possibility to collaborate on a document in a few people at the same time. In practice however, any changes you make while editing won't be seen in the "read mode" until you actually click "Save". And when you do that, I bet that first you will see a giant and confusing alert "Are you sure you want to publish changes made by XXX?". This is because if somebody had done some changes before you, but they haven't published them, you must commit them as well when publishing your own changes. (The notification appears even if somebody had done just accidental whitespace changes.)

*Damn! But I want to push only my changes!* Sorry folk, you will not do that in Confluence.

You know what's the biggest problem with keeping [good documentation culture](https://jtom.me/talks/keep-everything-documented-and-public.pdf) in your company? Having people being too lazy to create and update the docs, which makes them in result missing or outdated.

It is easy to complain on people. It is also rarely productive. What is more productive is to have tools that help them doing their job well. A good documentation tool should make reading and editing the docs as easy and seamless as possible.

Confluence fails at that.

### Summary

I could ramble and ramble on this UI, but I think we've both had enough of it.

Have you known that there are companies who are hiring people specifically for ["JIRA Administrator" position](https://www.indeed.com/q-Jira-Administrator-jobs.html)? Having used it now so much, I don't feel surprised. This tool needs people of which only job is to handle the tool, so other people can do at least a part of their supposed real job, instead of having to play around with Jira.

Why such tool like Jira is so popular even though it is so terrible?

Why such a big and software-focused company like Atlassian neglects their main product so much? They risk a lot in such a way. If Jira is unusable and prevents doing the main thing it should do (manage the project), it's a matter of time until competition (like [Asana](https://asana.com/), [ClickUp](https://clickup.com/), or something else) will leverage that, build a tool that doesn't suck, and take over their customers.

This is why I wrote this article.

To tell you: Avoid Jira if you can.

To tell Atlassian: Please, fix your product.

P.S. Looking for a full-stack software engineer to help with your project? If so, check out my [portfolio](https://jtom.me/) and [contact me](https://jtom.me/contact). With over 15 years of experience under my belt, and a constant drive towards finding the best available tech on the market, you'll probably be surprised with what I can offer.

## reverse interview questions library theory

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

### 预期使用方式

- 检查一下哪些问题你感兴趣
- 检查一下哪些是你可以自己在网上找到答案的
- 找不到的话就向面试官提问

绝对不要想把这个列表里的每个问题都问一遍。(尊重面试官的时间，而且你可以通过查找已经发布的答案来显示 你的主动性)

请记住事情总是灵活的，组织的结构调整也会经常发生。拥有一个 bug 追踪系统并不会保证高效处理 bug。 CI/CD (持续集成系统) 也不一定保证交付时间会很短。

### 职责

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

### 技术

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

### 团队

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

### 问未来的同事

- 开发者倾向于从哪里学习？
- 你对在这里工作最满意的地方是？
- 最不满意的呢？
- 如果可以的话，你想改变哪里？
- 团队最老的成员在这里多久了？
- 在小团队中，有没有出现成员性格互相冲突的情况？最后是如何解决的？

### 公司

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

### 社会问题

- 你们关于多元化招聘什么看法？
- 你们的公司文化如何？你认为有什么空白么？
- 这里的工作生活平衡地怎么样？
- 公司对气候变化有什么态度吗？

### 冲突

- 不同的意见如何处理？
- 如果被退回了会怎样？("这个在预计的时间内做不完")
- 当团队有压力并且在超负荷工作的时候怎么处理？
- 如果有人注意到了在流程或者技术等其他方面又改进的地方，怎么办？
- 当管理层的预期和工程师的绩效之间有差距的时候如何处理？
- 能给我讲一个公司深处有毒环境以及如何处理的故事吗？
- 如果在公司内你的同事因涉嫌性侵犯他人而被调查，请问你会如何处理？
- 假设我自己很不幸是在公司内被性侵的受害者，在公司内部有没有争取合法权益的渠道？

### 商业

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

### 远程工作

- 远程工作和办公室工作的比例是多少？
- 公司提供硬件吗？更新计划如何？
- 使用自己的硬件办公可以吗？现在有政策吗？
- 额外的附件和家具可以通过公司购买吗？这方面是否有预算？
- 有共享办公或者上网的预算吗？
- 多久需要去一次办公室？
- 公司的会议室是否一直是视频会议就绪的？

### 办公室布局

- 办公室的布局如何？(开放的 / 小隔间 / 独立办公室)
- 有没有支持 / 市场 / 或者其他需要大量打电话的团队在我的团队旁边办公？

### 终极问题

- 该职位为何会空缺？
- 公司如何保证人才不流失？
- 这份工作 / 团队 / 公司最好和最坏的方面是？
- 你最开始为什么选择了这家公司？
- 你为什么留在这家公司？

### 待遇

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

### 休假

- 带薪休假时间有多久？
- 病假和事假是分开的还是一起算？
- 我可以提前使用假期时间吗？也就是说应休假期是负的？
- 假期的更新策略是什么样的？也就是说未休的假期能否滚入下一周期
- 照顾小孩的政策如何？
- 无薪休假政策是什么样的？
- 学术性休假政策是怎么样的？
- 孕产假政策具体是怎样的？

### 福利

- 公司提供 mac 开发吗？
- 使用自带电脑有补贴吗？
- 公积金多少比例缴纳？
- 公司是否有食堂，是否有餐饮福利补贴？
- 是否提供租房补贴？
- 是否提供话费补贴？
- 是否有交通补贴？

### 人才培养

- 升职加薪条件是否量化?
- 每年给团队安排多少费用用于学习培训?
- 每年组织多少次关于技术能力提升的讲座/论坛？

### 其他资源

Find more inspiration for questions in:

- [The Joel Test: 12 Steps to Better Code](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) by Joel Spolsky
- [Questions I'm asking in interviews](https://jvns.ca/blog/2013/12/30/questions-im-asking-in-interviews/) by Julia Evans

## web app in phone apps style quote

错误响应代码

https://twitter.com/webperftips/status/405760114499395584

```
window.onerror = window.close;
```

上面这行代码，可以让网页应用有手机 App 的体验。

## internet startup companies 40% rule quote

40% 规则

https://avc.com/2015/02/the-40-rule/

互联网创业公司有一条 40％规则：

年收入增长率 + 营业利润率 应该等于 40％。

如果你的年增长率达到 100％，那么可以承受 60％的亏损。

如果年增长率为 40％，你应该收支平衡。

如果增长率为 20％，你应该有 20％的营业利润率。

如果没有增长，你应该有 40％的营业利润率。

如果业务下降 10％，你应该有 50％的营业利润率。

我从来没有见过一个如此简单的规则。我总是觉得如果你快速增长，就可以接受赔钱。随着增长放缓，你必须赚钱并增加利润。现在有这样一个简单的公式，我非常喜欢。

## wealth growth style for the rich is not for the poor quote

如果你已经富裕，2％的收入增长速度就很不错了，可以让你保持并变得更加富裕。

但是，对于几乎没有收入的人来说，2％的收入增长速度，基本上就代表他们将永远贫穷。

-- HN 读者评论中国经济增长速度降到 6%

https://news.ycombinator.com/item?id=20997415

## cool resume web app design theory

Strml.net

https://www.strml.net/

一个很有意思的网站，会一行行显示自己的源码，页面跟着代码实时变化。实现方法可以参考这里。

https://codepen.io/jakealbaugh/pen/PwLXXP

## webgl image editor web app

doka

https://pqina.nl/doka/image-editor/

一个使用 WebGL 技术搭建的在线图像编辑器，使用非常流畅。

## top university degree is nothing view theory

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

## snake mobile game history

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

## url based snake game web app

浏览器地址栏的贪吃蛇游戏

https://demian.ferrei.ro/snake

https://github.com/epidemian/snake

整个游戏就在地址栏里玩。

## the essense of tiktok and faceapp story

我的孩子喜欢抖音和 FaceApp

你 8 岁的女儿正在一个貌似梦幻般的游乐园里独自走来走去，这个游乐园远在中国或俄罗斯，一个你毫无了解的地方。

公园没有入场费，一切都是免费的，从糖果到数百个景点。公园充满了闪光和彩虹的所有颜色，有趣的音乐不断播放。

![](https://www.wangbase.com/blogimg/asset/201911/bg2019110701.jpg)

公园大得无穷无尽，她越深入公园，就会发现更多的乐趣。不需要排队，就可以参观各个景点。只要是能看到的东西，就立即可用。对她来说，这就像一个独立于外部世界的幻想宇宙。

你的女儿与数千名其他孩子一起在公园里游玩，大家都非常喜欢它，一样狂欢跳舞。她感觉好极了！

在此同时，拥有成千上万工人的巨型公司，通过高度机密的人工智能和机器学习、超级先进的摄像头、麦克风以及数百种其他传感器，监控你女儿在公园中的每一步。

该公司分析了数百万个数据，建立您女儿的完美模型。她穿什么衣服、她的音乐品味、她的动作、她的幸福感、伤心、着急、害怕。她在公园的每一步，公司都在分析她的面部表情。

进入公园仅几个小时，公司就知道了有关你女儿的一切，她的年龄、性别、兴趣爱好、确切的家庭位置、生日、眼睛的颜色、她的朋友、她喜欢什么衣服、她最喜欢的颜色，甚至无限期地保留了她的数据。

你的女儿毫无所知，仍然一切正常在公园玩耍。她感觉好极了！

游乐园不像监狱。她可以随时离开。有时她觉得有些不对劲，想离开公园。然而，每次她决定离开公园后不久，她都会想返回。她害怕错过了好东西，担心自己不会第一个发现有新景点可玩，不会认识新朋友。她最大的恐惧是，如果我的一位朋友发现了一项新活动，而我什么都不知道，这该怎么办。

人工智能监控系统收到了她想离开公园的信号，系统开始将她最喜欢的景点移向公园的入口区域，因此她无需走很长时间即可做到这个景点，一切对她来说都变得更加容易。更好的是，她在公园里喜欢的所有东西，从糖果到背景音乐，都针对她的口味进行了优化。她感觉好极了。

与此同时，公司的先进计算机网络一直在后台努力工作，通过过去几天和几周收集到的有关女儿的数百万条信息，为你的女儿建立一个完美的数据模型。庞大数据库还为她与其他孩子们进行了配对，这些数据库包括了公园的数亿其他孩子。

你女儿不知道的是，她现在已经成为公司的产品。公司用她作为模型和内容，去服务其他跟她相似的儿童，使公司创始人和股东成为亿万富翁。

## css dark mode media query guide

CSS 如何自动切换明暗模式（英文）

https://tombrow.com/dark-mode-website-css

本文介绍如何让 CSS 根据不同设备，自动选择暗模式（dark mode）或明模式（light mode）。

## fruit colorized identity cards library

Python 爬虫保存美国农业部网站的水果数据库

https://github.com/jwenjian/ghiblog/issues/114

![](https://www.wangbase.com/blogimg/asset/201910/bg2019101020.jpg)

美国农业部为全世界已知水果制作了 7500 幅水彩"证件照"，并提供高清下载。作者讲述自己如何编写 Python 爬虫，抓取这些图片。（@jwenjian 投稿）

## chinese indie blogs library

中文独立博客列表

https://github.com/timqian/chinese-independent-blogs

该仓库根据 feedly 的 RSS 订阅数，列出了主要的中文独立博客。（@timqian 投稿）

## tesla auto driving is tradeoff between killing some and saving many quote theory

特斯拉汽车的自动驾驶可以挽救数百万人的生命，但它可能首先会造成一些人的死亡，然后才能达到这个目标。

-- 彭博社

https://www.bloomberg.com/news/features/2019-10-09/tesla-s-autopilot-could-save-the-lives-of-millions-but-it-will-kill-some-people-first?srnd=businessweek-v2

## obvious ui is better view theory

明显的 UI 通常是最好的 UI。

-- Medium 文章

https://medium.com/google-design/the-obvious-ui-is-often-the-best-ui-7a25597d79fd

---

### The Obvious UI is Often the Best UI

### Design clear interactions instead of clever ones, and users will follow

![](https://miro.medium.com/v2/resize:fit:1400/0*mDApa3RLAhnA3oNp)

Illustration by Thanh Tran, UX Designer

Voltaire said, "*le sens commun est fort rare"---c*ommon sense is very rare. Perhaps to realize that a certain decision is common sense, one has to have enough life experience to know the right path to take , at which point certain choices become common sense and don't require much analysis.

When we talk about common sense with product design, what we now see as strikingly obvious may not have been so apparent to designers when they first started. For a long time, designers have endeavored to make products as easy to use and navigate as possible. However, in order to highlight their products' features, it has taken time for designers to understand users' needs and challenges and iterate.

### Bottom navigation bar = increased usage

Google Product Director [Luke Wroblewski](https://www.lukew.com/about/) espoused the design principle "[obvious always wins](https://www.lukew.com/ff/entry.asp?1945=)," and pushed designers to recognize that clear interactions outperform clever ones. After analyzing the user engagement statistics of apps that switched from semi-hidden navigation within [hamburger menus](https://en.wikipedia.org/wiki/Hamburger_button) to more visible [bottom navigation bars](https://material.io/guidelines/components/bottom-navigation.html#), and apps that switched from more exposed to semi-hidden navigation, Wroblewski saw a trend. "Navigation is the manifestation of what is possible in an app and when people can't see what's possible, they likely won't know what they can/should do in that app," he told me in an interview about this idea. Increasing visibility boosts usage.

When the project management app [Redbooth](https://redbooth.com/blog/hamburger-menu-iphone-app?utm_campaign=iOS_Dev_Weekly_Issue_181&utm_medium=email&utm_source=iOS%2BDev%2BWeekly) (formerly called Teambox) switched from a hamburger menu to a bottom navigation bar, session time increased 70 percent, and daily active users increased by 65 percent nearly overnight. Functionality that had been previously hidden in the hamburger menu was now front and center for Redbooth users to find.

![](https://miro.medium.com/v2/resize:fit:1400/0*AgEXYt-9-n2J6Lpn)

Before: The Redbooth (Teambox) app previously used a hamburger menu. After: The app switched to a bottom navigation menu and saw a 65 percent increase in daily active users and a 70 percent increase in session time.

On the flip side, Wroblewski found that making it harder to find common features reduced user engagement. When the (former) Polar app simplified their navigation design from a segmented control menu to a toggle menu to make the design seem "cleaner," user engagement dropped because the primary functions were no longer continually exposed to users.

![](https://miro.medium.com/v2/resize:fit:1400/0*1u5vN7Z1imyRpDxO)

Before: Segmented control menu showed three tabs at the top. After: Daily engagement decreased when Polar added a toggle menu with the "Top" label

Bottom navigation bars and accessibility

Making design more obvious might sometimes have a side benefit of also making the design more accessible. Ergonomically, it's easier for users with big phones or tablets to touch the bottom navigation bar using one finger than it is to hold the phone with one hand and use the other to tap on the hamburger menu in the top left. Bottom navigation is also critical for accessibility reasons. In an email interview, Google Brand Manager Aubrie Lee said that users with muscular dystrophy and other mobility impairments cannot always reach the upper portion of the screen. "This is a game changer. For disabled people, technology isn't just a convenience --- it's often the difference between confinement and independence. Having these bottom navigation buttons is going to make life so much easier for so many of us."

"Obvious" icons are not always "universal" icons

Obvious design isn't only about location of components, but also how easy it is for a user to understand the actions and options in a UI. For example, not all users will immediately understand icons and symbols. The $ symbol means dollars or money in the US, Canada and some other countries, but is not the symbol for currency worldwide.

Someone who grew up using computers with floppy disks will most likely automatically know what a floppy disk is and recognize that a floppy disk icon means "save." However, for those who began to use computers in the 21st century and who never saw a floppy disk, the floppy disk save icon may look like a mobile phone SIM card with a rectangular and circular hole and a missing corner. Those users may not understand the meaning of the floppy disk save icon.

![](https://miro.medium.com/v2/resize:fit:1400/0*bOChaMcPoXCmKm-C)

The upload, delete, voicemail, speaker, save, and credit card icons are common, yet may confuse users if they are not paired with a text label.

To make designs easy to understand at first glance, consider these two suggestions:

Pair text with an icon

In the Google I/O talk [Designing Great Apps for New Internet Users](https://youtu.be/Fo-1qrHeQXQ), Garen Checkley and Tracy Lindsay Chan of YouTube Go showed that the combination of icon and text is important for users to remember what an affordance does. The "receive" button has both text and an icon to make it clear what will happen when the user taps the button.

Combining text and icon also makes your product more accessible. It's easier for people scanning a page to understand what a button means when the button has text and an icon.

When [Google Translate combined text and icon](https://medium.com/google-design/a-fish-in-your-ear-134deed70268) for the features below the main translation box, the use of the handwriting feature increased by 25 percent. Some users thought the features below the main box were new even though they had existed for years. Without the text labels, users didn't understand the value of the features, and therefore didn't use the features.

![](https://miro.medium.com/v2/resize:fit:1400/0*24guSnnmXQu2zi3n)

Before: Google Translate only showed icons. After: Google Translate added text for the icons and usage of the handwriting feature increased 25%

Use just text, add hint text, and add labels with icons

The "upload" icons may make sense to someone who is used to uploading content to a cloud memory service. However, for some users, there may be no concept of "up" or "down" movement when it comes to adding their photographs from their computer to their cloud photo storage.

To make it clear to Google Photos desktop web edition users how to search through photos and upload new photos, the Google Photos team replaced the upload icon with an "upload" text button and added search hints in the search box. Similar to YouTube Go's and Translate's pairing of text with icon, the Google Photos team added the labels "album," "assistant," and "photos" below the icons.

![](https://miro.medium.com/v2/resize:fit:1400/0*sDLz4R5pslT0jvkT)

Icons with text labels added to them, icons replaced by text labels, and added search hints improved the usability of Google Photos

### Copying other UIs does not guarantee obvious design

However, making something obvious doesn't mean assuming that because another app has a certain look, that it is the best choice for your product. It may seem easy to copy what other apps do---especially popular apps---and assume that it's a good design. You don't know how much, if any, research is behind the company's choice to use a certain design pattern or component.

### To find the obvious, get close to the problem

Without waiting for years of usage data or hiring a researcher, how does a designer know what is obvious or even common sense to a user? "The closer you are to the pain, the more you care about solving it," Wroblewski says. If you are making a product to solve a problem you have, then you are likely to know the product's core features and how they solve your problem.

If you are not your target user, then you have to observe users, learn, and iterate. This does not require huge research and travel budgets or even having large amounts of usage data. It involves talking to potential and existing users and finding out what problems they have or imagining yourself as a user. Wroblewski recommends [Rapid Iterative Testing and Evaluation (RITE) Testing](https://en.wikipedia.org/wiki/RITE_Method). "Every week, we take whatever we worked on, we put it in front of human beings and watch them try to use it. You're always going back to immersing yourself with the customer or the potential customer. When a designer says, 'I sat with this person and I saw he couldn't do what he wanted because our design failed him,' that's very visceral and very real," he says.

Spend time with users often and regularly and your designs will become more relevant, appropriate, and "obvious." It's not until you understand the problem space that you can clearly appreciate what is "obvious" or even "common sense" and create designs that are easy to use.

## screen recorder web app

在线屏幕录制

https://www.p2hp.com/screenrecord.html

一个浏览器里面的在线录屏小工具。（@w3yyb 投稿）

## encryption base is big numbers resolve history

大整数分解的新纪录

https://lists.gforge.inria.fr/pipermail/cado-nfs-discuss/2019-December/001139.html

美国科学家宣布，240 个十进制位的整数分解成功（相当于 795 个二进制位），找到了它的两个大质数因子。这是已经公布的最高纪录，此前的记录是 768 个二进制位整数。

整数分解是加密学的基石，一旦实现快速的整数分解，现代的公钥加密就会失效。目前主流的加密强度是 2048 个二进制位的密钥，所以还是安全的。本次分解在 2.1G CPU 上需要 4000 核年，即单核运算需要 4000 年，多核运算的总花费大约为十多万美元。

## chat between same page viewers idea story web app

Same Page 2

https://chrome.google.com/webstore/detail/same-page-2/bldcellajihanglphncgjmceklbibjkk

Chrome 浏览器插件，让浏览同一个网页的访问者互联聊天，源码在 GitHub。

## basecamp we dont want to run this ad story

Basecamp 广告

https://www.seroundtable.com/basecamp-google-ad-28161.html

![](https://www.wangbase.com/blogimg/asset/201910/bg2019102104.jpg)

Basecamp 公司最近在谷歌的搜索页上，做了一个广告，题目叫做"我们不想投放此广告"。

我们是这个搜索词排名第一的公司，但谷歌允许其他公司在我们上面做广告。所以我们在这里页面，一家很小的独立公司向一家大型科技公司支付赎金。"

## instagram by a small team quote

你知道，Instagram 被 10 亿美元收购时，只有 12 个员工吗？

-- HN 读者

https://news.ycombinator.com/item?id=21359505

## a phone in pocket is all knowledge of humanity but meaningless conflicts quote theory

我口袋里有一个小设备，可以访问几乎全部的人类知识。我却用它与不认识的人进行毫无意义的争论，并看猫的照片。

-- HN 读者

https://news.ycombinator.com/item?id=21360284

---

I have a small device in my pocket that provides access to nearly the sum total of human knowledge. I use it to get into pointless arguments with people I don't know and look at pictures of cats. (I wish I could claim that as original but it is something I read on the Internet. Between cats. :-/ )

## moving fast like killing a snake quote

最近，我读到两段话，都是用蛇比喻企业管理。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122601.jpg)

第一段话出自 Netscape 公司的首席执行官 James Barksdale。

> 在 Netscape，我们有三条规则。
>
> 第一条规则是，如果你看到一条蛇，不要打电话给管理委员会，不要打电话给朋友，不要组建一个团队，不要召开会议，你要做的就是杀死蛇。
>
> 第二条规则是，不要跑回去玩那条死蛇。太多的人浪费了太多时间，为那些已经做出的决定。
>
> 第三条规则是，所有机会一开始的时候，看起来都像蛇，需要找到出问题的地方。

他的意思是，第一个看到问题的人，就要立刻着手解决，不要拖延。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122602.jpg)

第二段话出自亿万富翁 Ross Perot 评论通用汽车公司的管理。

> 我来自一个环境，如果谁看到一条蛇，就会杀死它。
>
> 但是，在通用汽车公司，如果你看到蛇，做的第一件事就是雇用一个咨询顾问，讨论这个问题。然后，成立了一个委员会，研究怎么做。讨论了几年，最有可能的结果是什么都没做。因为这条蛇还没有咬任何人，所以你就放任它在工厂地板上爬行。
>
> 我们需要建立一个环境，让第一个看到蛇的人杀死它。

我觉得，这两段话都说得很好，值得分享给大家。

不过，他们这样说的前提是，你有能力杀死蛇。但是我觉得，很多时候遇到的是大蛇，你根本没有能力杀死它，尤其对于小企业和个人的人生，你遇到的问题都比你强大。这时唯一的对策，大概只能是不管蛇，认准自己的方向，拼命往前跑（发展壮大），希望能摆脱它。

## css theme utility classes abstracted theory

如何写出可复用的 CSS 样式表？（英文）

https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

Tailwind CSS 框架的作者谈自己如何一步步探索，写出与 HTML 代码彻底分离的、可以复用的 CSS 样式表。

---

### CSS Utility Classes and "Separation of Concerns"

Over the last several years, the way I write CSS has transitioned from a very "semantic" approach to something much more like what is often called "functional CSS."

Writing CSS this way can evoke [a pretty visceral reaction](https://twitter.com/mezzoblue/status/794419442272714752) from a lot of developers, so I'd like to explain how I got to this point and share some of the lessons and insights I've picked up along the way.

### Phase 1: "Semantic" CSS

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

### Phase 2: Decoupling styles from structure

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

### Dealing with similar components

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

### Option 1: Duplicate the styles

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

### Option 2: `@extend` the author bio component

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

### Option 3: Create a content-agnostic component

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

### "Separation of concerns" is a straw man

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

### Choosing reusability

The turning point for me came when I read Nicolas Gallagher's [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).

I won't reiterate all of his points here, but needless to say I came away from that blog post fully convinced that optimizing for reusable CSS was going to be the right choice for the sorts of projects I work on.

### Phase 3: Content-agnostic CSS components

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

### Composition over subcomponents

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

### Phase 4: Content-agnostic components + utility classes

Trying to come up with these component names all of the time is exhausting.

When you make modifiers like `.actions-list--left`, you're creating a whole new component modifier just to assign a single CSS property. It's already got `left` in the name, so you're not going to fool anyone that it's "semantic" in any way either.

What if we had another component that needed left-align and right-align modifiers, would we create new component modifiers for that as well?

This gets back to same problem we were facing when we decided to kill `.stacked-form__footer` and `.header-bar__actions` and replace them with a single `.actions-list`:

We prefer composition to duplication.

So if we had two actions lists, one that needed to be left aligned and another that needed to be right aligned, how could we solve that problem with composition?

### Alignment utilities

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

### Don't be afraid

If seeing the words "left" and "right" in your HTML makes you feel uncomfortable, remember we have been using components named after visual patterns in our UI for ages at this point.

There's no pretending that `.stacked-form` is any more "semantic" than `.align-right`; they're both named after how they affect the presentation of the markup, and we are using those classes in our markup to achieve a specific presentational result.

We're writing CSS-dependent HTML. If we want to change our form from a `.stacked-form` to a `.horizontal-form`, we do it in the markup, not the CSS.

### Deleting useless abstractions

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

### Spacer utilities

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

### Phase 5: Utility-first CSS

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

### Enforced consistency

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

### You should still create components

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

### ...but build them using utilities first

The reason I call the approach I take to CSS utility-*first* is because I try to build everything I can out of utilities, and only extract repeating patterns as they emerge.

If you're using [Less](http://lesscss.org/) as your preprocessor, you can use existing classes as mixins. That means that creating this `.btn-purple` component takes only a bit of multi-cursor wizardry in your editor:

![](https://user-images.githubusercontent.com/4323180/29084097-f16c97c6-7c38-11e7-92dd-d20c1364d869.gif)

Unfortunately you can't do this in Sass or Stylus without creating a separate mixin for every utility class, so it's a bit more work there.

It's not always possible for every single declaration in a component to come from a utility of course. Complex interactions between elements like changing a child's property when hovering over a parent are hard to do with utilities-only, so use your best judgment and do whatever feels simpler.

### No more premature abstraction

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

### Isn't this just inline styles?

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

### Where to start

If this approach sounds interesting to you, here's a few frameworks worth checking out:

- [Tachyons](http://tachyons.io/)
- [Basscss](http://basscss.com/)
- [Beard](http://buildwithbeard.com/)
- [turretcss](http://turretcss.com/)

Recently, I also released my own free open-source PostCSS framework called [Tailwind CSS](https://tailwindcss.com/) that's designed around this idea of working utility-first and extracting components from repeated patterns:

![](https://tailwindcss.com/img/twitter-large-card.png)

If you're interested in checking it out, [head over to the Tailwind CSS website](https://tailwindcss.com/) and give it a try.

## react js another implementation guide theory

如何自己实现一个 React 框架（英文）

https://pomb.us/build-your-own-react/

本文一步步用简单的代码讲解，如何自己从头实现 React 框架。

---

### Build your own React

[Rodrigo Pombo](https://pomb.us/)

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
const container = document.getElementById("root")​ const node = document.createElement(element.type) node["title"] = element.props.title​
const text = document.createTextNode("") text["nodeValue"] = element.props.children​ node.appendChild(text) container.appendChild(node)
```

### Step Zero: Review

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

### Step I: The `createElement` Function

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

### Step II: The `render` Function

Next, we need to write our version of the `ReactDOM.render` function.

For now, we only care about adding stuff to the DOM. We'll handle updating and deleting later.

We start by creating the DOM node using the element type, and then append the new node to the container.

We recursively do the same for each child.

We also need to handle text elements, if the element type is `TEXT_ELEMENT` we create a text node instead of a regular node.

The last thing we need to do here is assign the element props to the node.

And that's it. We now have a library that can render JSX to the DOM.

Give it a try on [codesandbox](https://codesandbox.io/s/didact-2-k6rbj).

### Step III: Concurrent Mode

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
  const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)​ const isProperty = key => key !== "children"
  Object.keys(element.props).filter(isProperty).forEach(name => {
    dom[name] = element.props[name]
  })​ element.props.children.forEach(child => render(child, dom))​ container.appendChild(dom)
}​
let nextUnitOfWork = null​
function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork) shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}​
requestIdleCallback(workLoop)​
function performUnitOfWork(nextUnitOfWork) { // TODO}​const Didact = {  createElement,  render,}​/** @jsx Didact.createElement */const element = (  <div id="foo">    <a>bar</a>    <b />  </div>)const container = document.getElementById("root")Didact.render(element, container)
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

### Step IV: Fibers

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
      <p /> <a />{" "}
    </h1> <h2 />{" "}
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
  const dom = fiber.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type)​ updateDom(dom, {}, fiber.props)​ return dom
}​
const isEvent = key => key.startsWith("on") const isProperty = key => key !== "children" && !isEvent(key) const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) { //Remove old or changed event listeners  Object.keys(prevProps)    .filter(isEvent)    .filter(      key =>        !(key in nextProps) ||        isNew(prevProps, nextProps)(key)    )    .forEach(name => {      const eventType = name        .toLowerCase()        .substring(2)      dom.removeEventListener(        eventType,        prevProps[name]      )    })​  // Remove old properties  Object.keys(prevProps)    .filter(isProperty)    .filter(isGone(prevProps, nextProps))    .forEach(name => {      dom[name] = ""    })​  // Set new or changed properties  Object.keys(nextProps)    .filter(isProperty)    .filter(isNew(prevProps, nextProps))    .forEach(name => {      dom[name] = nextProps[name]    })​  // Add event listeners  Object.keys(nextProps)    .filter(isEvent)    .filter(isNew(prevProps, nextProps))    .forEach(name => {      const eventType = name        .toLowerCase()        .substring(2)      dom.addEventListener(        eventType,        nextProps[name]      )    })}​function commitRoot() {  deletions.forEach(commitWork)  commitWork(wipRoot.child)  currentRoot = wipRoot  wipRoot = null}​function commitWork(fiber) {  if (!fiber) {    return  }​  const domParent = fiber.parent.dom  if (    fiber.effectTag === "PLACEMENT" &&    fiber.dom != null  ) {    domParent.appendChild(fiber.dom)  } else if (    fiber.effectTag === "UPDATE" &&    fiber.dom != null  ) {    updateDom(      fiber.dom,      fiber.alternate.props,      fiber.props    )  } else if (fiber.effectTag === "DELETION") {    domParent.removeChild(fiber.dom)  }​  commitWork(fiber.child)  commitWork(fiber.sibling)}​function render(element, container) {  wipRoot = {    dom: container,    props: {      children: [element],    },    alternate: currentRoot,  }  deletions = []  nextUnitOfWork = wipRoot}​let nextUnitOfWork = nulllet currentRoot = nulllet wipRoot = nulllet deletions = null​function workLoop(deadline) {  let shouldYield = false  while (nextUnitOfWork && !shouldYield) {    nextUnitOfWork = performUnitOfWork(      nextUnitOfWork    )    shouldYield = deadline.timeRemaining() < 1  }​  if (!nextUnitOfWork && wipRoot) {    commitRoot()  }​  requestIdleCallback(workLoop)}​requestIdleCallback(workLoop)​function performUnitOfWork(fiber) {  if (!fiber.dom) {    fiber.dom = createDom(fiber)  }​  const elements = fiber.props.children  reconcileChildren(fiber, elements)​  if (fiber.child) {    return fiber.child  }  let nextFiber = fiber  while (nextFiber) {    if (nextFiber.sibling) {      return nextFiber.sibling    }    nextFiber = nextFiber.parent  }}​function reconcileChildren(wipFiber, elements) {  let index = 0  let oldFiber =    wipFiber.alternate && wipFiber.alternate.child  let prevSibling = null​  while (    index < elements.length ||    oldFiber != null  ) {    const element = elements[index]    let newFiber = null​    const sameType =      oldFiber &&      element &&      element.type == oldFiber.type​    if (sameType) {      newFiber = {        type: oldFiber.type,        props: element.props,        dom: oldFiber.dom,        parent: wipFiber,        alternate: oldFiber,        effectTag: "UPDATE",      }    }    if (element && !sameType) {      newFiber = {        type: element.type,        props: element.props,        dom: null,        parent: wipFiber,        alternate: null,        effectTag: "PLACEMENT",      }    }    if (oldFiber && !sameType) {      oldFiber.effectTag = "DELETION"      deletions.push(oldFiber)    }​    if (oldFiber) {      oldFiber = oldFiber.sibling    }​    if (index === 0) {      wipFiber.child = newFiber    } else if (element) {      prevSibling.sibling = newFiber    }​    prevSibling = newFiber    index++  }}​const Didact = {  createElement,  render,}​/** @jsx Didact.createElement */const element = (  <div id="foo">    <a>bar</a>    <b />  </div>)const container = document.getElementById("root")Didact.render(element, container)
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

### Step V: Render and Commit Phases

We have another problem here.

We are adding a new node to the DOM each time we work on an element. And, remember, the browser could interrupt our work before we finish rendering the whole tree. In that case, the user will see an incomplete UI. And we don't want that.

So we need to remove the part that mutates the DOM from here.

Instead, we'll keep track of the root of the fiber tree. We call it the work in progress root or `wipRoot`.

And once we finish all the work (we know it because there isn't a next unit of work) we commit the whole fiber tree to the DOM.

We do it in the `commitRoot` function. Here we recursively append all the nodes to the dom.

### Step VI: Reconciliation

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
  const dom = fiber.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type)​ updateDom(dom, {}, fiber.props)​ return dom
}​
const isEvent = key => key.startsWith("on") const isProperty = key => key !== "children" && !isEvent(key) const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) { //Remove old or changed event listeners  Object.keys(prevProps)    .filter(isEvent)    .filter(      key =>        !(key in nextProps) ||        isNew(prevProps, nextProps)(key)    )    .forEach(name => {      const eventType = name        .toLowerCase()        .substring(2)      dom.removeEventListener(        eventType,        prevProps[name]      )    })​  // Remove old properties  Object.keys(prevProps)    .filter(isProperty)    .filter(isGone(prevProps, nextProps))    .forEach(name => {      dom[name] = ""    })​  // Set new or changed properties  Object.keys(nextProps)    .filter(isProperty)    .filter(isNew(prevProps, nextProps))    .forEach(name => {      dom[name] = nextProps[name]    })​  // Add event listeners  Object.keys(nextProps)    .filter(isEvent)    .filter(isNew(prevProps, nextProps))    .forEach(name => {      const eventType = name        .toLowerCase()        .substring(2)      dom.addEventListener(        eventType,        nextProps[name]      )    })}​function commitRoot() {  deletions.forEach(commitWork)  commitWork(wipRoot.child)  currentRoot = wipRoot  wipRoot = null}​function commitWork(fiber) {  if (!fiber) {    return  }​  let domParentFiber = fiber.parent  while (!domParentFiber.dom) {    domParentFiber = domParentFiber.parent  }  const domParent = domParentFiber.dom​  if (    fiber.effectTag === "PLACEMENT" &&    fiber.dom != null  ) {    domParent.appendChild(fiber.dom)  } else if (    fiber.effectTag === "UPDATE" &&    fiber.dom != null  ) {    updateDom(      fiber.dom,      fiber.alternate.props,      fiber.props    )  } else if (fiber.effectTag === "DELETION") {    commitDeletion(fiber, domParent)  }​  commitWork(fiber.child)  commitWork(fiber.sibling)}​function commitDeletion(fiber, domParent) {  if (fiber.dom) {    domParent.removeChild(fiber.dom)  } else {    commitDeletion(fiber.child, domParent)  }}​function render(element, container) {  wipRoot = {    dom: container,    props: {      children: [element],    },    alternate: currentRoot,  }  deletions = []  nextUnitOfWork = wipRoot}​let nextUnitOfWork = nulllet currentRoot = nulllet wipRoot = nulllet deletions = null​function workLoop(deadline) {  let shouldYield = false  while (nextUnitOfWork && !shouldYield) {    nextUnitOfWork = performUnitOfWork(      nextUnitOfWork    )    shouldYield = deadline.timeRemaining() < 1  }​  if (!nextUnitOfWork && wipRoot) {    commitRoot()  }​  requestIdleCallback(workLoop)}​requestIdleCallback(workLoop)​function performUnitOfWork(fiber) {  const isFunctionComponent =    fiber.type instanceof Function  if (isFunctionComponent) {    updateFunctionComponent(fiber)  } else {    updateHostComponent(fiber)  }  if (fiber.child) {    return fiber.child  }  let nextFiber = fiber  while (nextFiber) {    if (nextFiber.sibling) {      return nextFiber.sibling    }    nextFiber = nextFiber.parent  }}​let wipFiber = nulllet hookIndex = null​function updateFunctionComponent(fiber) {  wipFiber = fiber  hookIndex = 0  wipFiber.hooks = []  const children = [fiber.type(fiber.props)]  reconcileChildren(fiber, children)}​function useState(initial) {  const oldHook =    wipFiber.alternate &&    wipFiber.alternate.hooks &&    wipFiber.alternate.hooks[hookIndex]  const hook = {    state: oldHook ? oldHook.state : initial,    queue: [],  }​  const actions = oldHook ? oldHook.queue : []  actions.forEach(action => {    hook.state = action(hook.state)  })​  const setState = action => {    hook.queue.push(action)    wipRoot = {      dom: currentRoot.dom,      props: currentRoot.props,      alternate: currentRoot,    }    nextUnitOfWork = wipRoot    deletions = []  }​  wipFiber.hooks.push(hook)  hookIndex++  return [hook.state, setState]}​function updateHostComponent(fiber) {  if (!fiber.dom) {    fiber.dom = createDom(fiber)  }  reconcileChildren(fiber, fiber.props.children)}​function reconcileChildren(wipFiber, elements) {  let index = 0  let oldFiber =    wipFiber.alternate && wipFiber.alternate.child  let prevSibling = null​  while (    index < elements.length ||    oldFiber != null  ) {    const element = elements[index]    let newFiber = null​    const sameType =      oldFiber &&      element &&      element.type == oldFiber.type​    if (sameType) {      newFiber = {        type: oldFiber.type,        props: element.props,        dom: oldFiber.dom,        parent: wipFiber,        alternate: oldFiber,        effectTag: "UPDATE",      }    }    if (element && !sameType) {      newFiber = {        type: element.type,        props: element.props,        dom: null,        parent: wipFiber,        alternate: null,        effectTag: "PLACEMENT",      }    }    if (oldFiber && !sameType) {      oldFiber.effectTag = "DELETION"      deletions.push(oldFiber)    }​    if (oldFiber) {      oldFiber = oldFiber.sibling    }​    if (index === 0) {      wipFiber.child = newFiber    } else if (element) {      prevSibling.sibling = newFiber    }​    prevSibling = newFiber    index++  }}​const Didact = {  createElement,  render,  useState,}​/** @jsx Didact.createElement */function Counter() {  const [state, setState] = Didact.useState(1)  return (    <h1 onClick={() => setState(c => c + 1)}>      Count: {state}    </h1>  )}const element = <Counter />const container = document.getElementById("root")Didact.render(element, container)
```

### Step VII: Function Components

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

### Step VIII: Hooks

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

### Epilogue

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

## behind the competers of america quote

20 年前，美国政府宣传说，对手是日本，现在说对手是中国。我毫不怀疑，2040 年，我们将被告知对手是印度，2060 年对手则是一些成长中的非洲国家。

-- HN 读者

https://news.ycombinator.com/item?id=21382036

## employ a man with children or not quote

孩子出生可能会降低一个人的雄心。事实是，一旦有了孩子，你可能更关心他们，而不是自己。

一个人的注意力是零和游戏，只可能有一个项目是你最关心的事。有了孩子，你最关心的事情通常就是你的孩子，而不是你正在从事的项目。

-- 《不要雇佣有小孩的人》

https://philip.greenspun.com/blog/2019/12/23/paul-graham-dont-hire-anyone-with-children/

...

有些雇主青睐有家庭的男人，因为那样的男人偏好稳定，而且很需要钱！

-- 读者对《不要雇佣有小孩的人》一文的留言

## a weekend project resume web app story theory

我的创业产品如何被 2.2 万美元收购？（英文）

https://web.archive.org/web/20200407233212/https://mohddanish.me/my-bootstrapped-micro-startup-got-acquired-for-usd22k-10

一个印度大学毕业生自述，他如何找到创业的点子，做了一个小产品，然后把它卖掉。

---

### My Bootstrapped Micro-Startup got acquired for $22k

Building my 9th bootstrapped micro-startup product in 2019.

The journey took me 9 months while I was nomading in India, Singapore & Indonesia.

Working remotely from my laptop and traveling was the best thing I enjoyed doing for work & lifestyle balance.

It was really exciting to start building things when you spark an idea!

![photo credits by Fajar Siddiq, Location: Hangout Cafe, Batam, Indonesia](https://web.archive.org/web/20200407233212im_/https://user-images.githubusercontent.com/9165019/69830123-385bfd80-125e-11ea-9850-32082dad3d15.jpeg) *PC by Fajar Siddiq, Location: Hangout Cafe, Batam, Indonesia*

I joined the indie-makers communities 9 months ago on product hunt, maker's kitchen slack community, makerlog community & also Ramadan Makers community.

There were many other communities like WIP, IndieHackers & DEV.to for those who want their side projects to turn to a profitable startup business.

Not long ago in 2017, I graduated with a master's degree where I studied computer science at Aligarh Muslim University in India.

Right after I graduated, I was very blessed to land myself as a CTO(Chief Technology Officer) at one of the startup tech companies in the co-working space industry.

My dream was to build my own company before I graduated, but I know I did not have any experience to start one, so I started working for another company first.

In my first job role as a CTO, I was maintaining the company website servers and building internal tools to do automation. It was a very repetitive task almost every day for me. I've always love challenges and also new disruptive ideas that could benefit from solving technical problems.

I left the job, after working for 10 months. Till then I started to bootstrapped [my products](https://web.archive.org/web/20200407233212/https://mohddanish.me/projects).

So, here I'll talk about Public APIs project how it started, How it ranked #2 on google for top keywords and Story behind the Acquisition.

### Why I build it?

I quit my job to build a resume builder projects and for that, I was looking at some Public APIs on google. I found a GitHub repo([https://github.com/public-apis/public-apis](https://web.archive.org/web/20200407233212/https://github.com/public-apis/public-apis)) and this was a good collective of 800+ APIs and I found the API for that I was looking for. After that, I found that this repo doesn't have a simple interface where users can easily filter, sort & advanced search to find APIs. So, I decided to build a simple interface with basic features like sort by recently added, category navigation, advanced search feature.

### When I build it?

In Jan'2019 I pause working on resume builder because the Public APIs Interface project seems an interesting project to build. I scrap all the APIs from that GitHub repository and parse data into JSON according to UI requirements. I quickly build a simple MVP with a login system. So, users can also save the API into their profile.

### Where I launch this?

I finish the MVP in 4 days with $0 but I was not aware of the places where to share this and at that time I was active on Twitter. So, from the twitter feed, I got to know about ProductHunt and it's free. I signup there and just click on the "Post a Product" button without knowing the best time of posting there and I watched the page after 1 hour and only 4 upvotes. I was shocked that who are these people but these were genuine upvotes. and I sleep after that. The next day I checked after 00:01 San Francisco time and What I see that it's #1 on PH. I wrote a complete blog post on my PH launch experience If you are interested to read then [here](https://web.archive.org/web/20200407233212/https://mohddanish.me/story-my-first-product-shipped-on-producthunt-3).

### What were the challenges?

Hmm. Yes, after 4 months keep working on this project like Advanced Search, Comment System, Dashboard to add new APIs, etc. I was surviving on my saving and the money was going to use in my accommodations, food, co-working, and transportation. Now, I realize that I'm good to make MVP but I don't know how to monetize these projects. So, for a time being, I get one freelancer project to survive for the next 1 month.

### What made me kept going?

There are some factors was keep me motivated to work on this project.

- Website traffic
- Users love through email and DM
- Loving to explore tools related to APIs and companies are working on APIs products

I was getting 30k+ page views per month and 20% traffic from Google only for the homepage because the website was SPA(single page application). So, someone suggests me to convert SPA to static pages.

Finally, the time comes to learn Gatsby and it's easy because this is React based technology to build static pages and best to optimize for SEO.

I build Public APIs 2.0 with Gatsby in June 2019 and this time I launch on multiple platforms like ProductHunt, twitter, dev.to, Reddit, etc. Yes! in the next 1 month I double my traffic from 30k pageview to 60k+.

### Now I got some sales.

In version 2.0 I add some sponsor ads that are $200/month and I add an option to add API on my platform for $29/per API. So, I got 3 sponsor sales after launch that are $600 and 4 people paid to add API on the platform.

So, I make $716 in one month and I was so motivated to work. I also got an email that month. Here is the screenshot.

![Public APIs Acquire Email](https://web.archive.org/web/20200407233212im_/https://user-images.githubusercontent.com/9165019/70633901-4b57d000-1c57-11ea-9ab3-0cd190c2a023.png)

After reading this email I got more confidence that this project has a lot of potentials.

He offers me $8k for this and I replied "No" because I earned that month $716 and I do the calculation that I can earn that money or more in less than 10 months. Here is what I reply and trying to sell some sponsor slots for their APIs products. 😂😂😂

![](https://web.archive.org/web/20200407233212im_/https://paper-attachments.dropbox.com/s_83E94F336352DDA430504CC1D1574F2D0F4BEBA85C1E6DA29602E6038FC5FD84_1574966326374_Screenshot+2019-11-29+at+2.37.49+AM.png)

### When I tired, what I did?

Next month I send 50+ emails to the companies running API products to sponsor the website in exchange to market their products. But I made $0 sale after lots of follow up.

At that time I was reading the buyer email and regretting to accept the offer. So, I was also thinking to apply for a job because it's so hard to survive without money.

My mind always finds a product idea in every case. Someone tweet job vacancies 10 minutes ago on twitter and where I trigger the idea to build tweetjobs.dev(Search engine to find job from twitter) and I build this simple MVP in 11 hours and launch the next day. And I got 60k+ through twitter, HN and PH launch.

![](https://web.archive.org/web/20200407233212im_/https://paper-attachments.dropbox.com/s_83E94F336352DDA430504CC1D1574F2D0F4BEBA85C1E6DA29602E6038FC5FD84_1574967042315_Screenshot+2019-11-29+at+2.50.09+AM.png)

But again everyone is appreciating the idea and got lots of emails, DM but I'm so bad to Monetize products.

After 7 days of tweetjobs.dev launch I got a message on LinkedIn from the same buyer and he offered me $15k this time.

Yess! I decided this time is to sale this project and invest the money into my new IDEA that is NoCodeAPI. But I gave him my price that is $22k and after 1 hour he replied and deal done.

Yess! the deal is done. Money in the account and I handover codebase and domain to them.

## being ordinary is reward or punishment quote

学术界非常传统，经常惩罚那些不遵守常规的人，而产业界则会奖励不守常规的人。

-- 《自然》杂志对 6,000 多名研究生的调查

https://www.nature.com/articles/d41586-019-03459-7

## to write short code blocks quote theory

如果我只能给其他程序员一个建议，那就是编写小的代码块，你要多写小方法、小功能、小程序。

我自己写 C＃时，当函数接近 15 或 20 行代码时，我会感到不舒服。我的限制是，一个函数最多最多就是 24 行代码，因为传统终端就是 24 行一屏。

-- 《80/24 规则》

https://blog.ploeh.dk/2019/11/04/the-80-24-rule/

---

_Write small blocks of code. How small? Here's how small._

One of the most common questions I get is this:

_If you could give just one advice to programmers, what would it be?_

That's easy:

_Write small blocks of code._

Small methods. Small functions. Small procedures.

How small?

### Few lines of code

You can't give a universally good answer to that question. Among other things, it depends on the programming language in question. Some languages are much denser than others. The densest language I've ever encountered is [APL](<https://en.wikipedia.org/wiki/APL_(programming_language)>).

Most mainstream languages, however, seem to be verbose to approximately the same order of magnitude. My experience is mostly with C#, so I'll use that (and similar languages like Java) as a starting point.

When I write C# code, I become uncomfortable when my method size approaches fifteen or twenty lines of code. C# is, however, a fairly wordy language, so it sometimes happens that I have to allow a method to grow larger. My limit is probably somewhere around 25 lines of code.

That's an arbitrary number, but if I have to quote a number, it would be around that size. Since it's arbitrary anyway, let's make it *24*, for reasons that I'll explain later.

The maximum line count of a C# (or Java, or JavaScript, etc.) method, then, should be 24.

To repeat the point from before, this depends on the language. I'd consider a 24-line [Haskell](https://www.haskell.org/) or [F#](https://fsharp.org/) function to be so huge that if I received it as a pull request, I'd reject it [on the grounds of size](https://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests) alone.

### Narrow line width

Most languages allow for flexibility in layout. For example, C-based languages use the `;` character as a delimiter. This enables you to write more than one statement per line:

var foo = 32; var bar = foo + 10; Console.WriteLine(bar);

You could attempt to avoid the 24-line-height rule by writing wide lines. That would, however, be to defeat the purpose.

The purpose of writing small methods is to nudge yourself towards writing readable code; code that fits in your brain. The smaller, the better.

For completeness sake, let's institute a maximum line width as well. If there's any accepted industry standard for maximum line width, it's 80 characters. I've used that maximum for years, and it's a good maximum.

Like all other programmers, other people's code annoys me. The most common annoyance is that people write too wide code.

This is probably because most programmers have drunk the Cool Aid that bigger screens make you more productive. When you code on a big screen, you don't notice how wide your lines become.

There's many scenarios where wide code is problematic:

- When you're comparing changes to a file side-by-side. This often happens when you review pull requests. Now you have only half of your normal screen width.
- When you're looking at code on a smaller device.
- When you're getting old, or are otherwise visually impaired. After I turned 40, I discovered that I found it increasingly difficult to see small things. I still use a 10-point font for programming, but I foresee that this will not last much longer.
- When you're [mob programming](https://en.wikipedia.org/wiki/Mob_programming) you're limited to the size of the shared screen.
- When you're sharing your screen via the web, for remote pair programming or similar.
- When you're presenting code at meetups, user groups, conferences, etc.

What most programmers need, I think, is just a [nudge](https://en.wikipedia.org/wiki/Nudge_theory). In Visual Studio, for example, you can install the [Editor Guidelines](https://marketplace.visualstudio.com/items?itemName=PaulHarrington.EditorGuidelines) extension, which will display one or more vertical guidelines. You can configure it as you'd like, but I've mine set to 80 characters, and bright red:

![Screen shot of editor with code, showing red vertical line at 80 characters.](https://blog.ploeh.dk/content/binary/vertical-guideline-at-80-characters.png)

Notice the red dotted vertical line that cuts through `universe`. It tells me where the 80 character limit is.

### Terminal box 

The 80-character limit has a long and venerable history, but what about the 24-line limit? While both are, ultimately, arbitrary, both fit the size of the popular [VT100](https://en.wikipedia.org/wiki/VT100) terminal, which had a display resolution of 80x24 characters.

A box of 80x24 characters thus reproduces the size of an old terminal. Does this mean that I suggest that you should write programs on terminals? No, people always misunderstand this. That should be the maximum size of a method. On larger screens, you'd be able to see multiple small methods at once. For example, you could view a unit test and its target in a split screen configuration.

The exact sizes are arbitrary, but I think that there's something fundamentally right about such continuity with the past.

I've been using the 80-character mark as a soft limit for years. I tend to stay within it, but I occasionally decide to make my code a little wider. I haven't paid quite as much attention to the number of lines of my methods, but only for the reason that I know that I tend to write methods shorter than that. Both limits have served me well for years.

### Example

Consider this example:

```cs
public ActionResult Post(ReservationDto dto)
{
    var validationMsg = Validator.Validate(dto);
    if (validationMsg != "")
        return BadRequest(validationMsg);

    var reservation = Mapper.Map(dto);
    var reservations = Repository.ReadReservations(reservation.Date);

    var accepted = maîtreD.CanAccept(reservations, reservation);
    if (!accepted)
        return StatusCode(
            StatusCodes.Status500InternalServerError,
            "Couldn't accept.");

    var id = Repository.Create(reservation);
    return Ok(id);
}
```

This method is 18 lines long, which includes the method declaration, curly brackets and blank lines. It easily stays within the 80-character limit. Note that I've deliberately formatted the code so that it behaves. You can see it in this fragment:

```cs
return StatusCode(
    StatusCodes.Status500InternalServerError,
    "Couldn't accept.");
```

Most people write it like this:

```cs
return StatusCode(StatusCodes.Status500InternalServerError, "Couldn't accept.");
```

That doesn't look bad, but I've seen much worse examples.

Another key to writing small methods is to call other methods. The above `Post` method doesn't look like much, but significant functionality could be hiding behind `Validator.Validate`, `Repository.ReadReservations`, or `maîtreD.CanAccept`. I hope that you agree that each of these objects and methods are named well enough to give you an idea about their purpose.

### Code that fits in your brain

As I describe in my [Humane Code](https://cleancoders.com/episode/humane-code-real-episode-1/show) video, the human brain can only keep track of [about seven things](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two). I think that this rule of thumb applies to the way we read and interpret code. If you need to understand and keep track of more than seven separate things at the same time, the code becomes harder to understand.

This could explain why small methods are good. They're only good, however, if they're self-contained. When you look at a method like the above `Post` method, you'll be most effective if you don't need to have a deep understanding of how each of the dependencies work. If this is true, the method only juggles about five dependencies: `Validator`, `Mapper`, `Repository`, `maîtreD`, and its own base class (which provides the methods `BadRequest`, `StatusCode`, and `Ok`). Five dependencies is fewer than seven.

Another way to evaluate the cognitive load of a method is to measure its [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity). The `Post` method's cyclomatic complexity is *3*, so that should be easily within the brain's capacity.

These are all heuristics, so read this for inspiration, not as law. They've served me well for years, though.

### Conclusion

You've probably heard about the *80/20 rule*, also known as the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle). Perhaps the title lead you to believe that this article was a misunderstanding. I admit that I went for an arresting title; perhaps a more proper name is the *80x24 rule*.

The exact numbers can vary, but I've found a maximum method size of 80x24 characters to work well for C#.

## the marketing culture in oracle quote

我曾在甲骨文公司工作多年，这家公司完全是销售驱动的，销售人员通常会骗客户，并保证产品具有它所没有或没有得到很好支持的功能，把产品卖出去之后，再聘请昂贵的顾问使得产品能够跟演示的一致。

如果说苹果是设计师文化，谷歌是工程师文化，那么我想说，甲骨文公司是销售文化。

-- HN 读者

https://news.ycombinator.com/item?id=21550991

## the best video game is visual novel view

这段假期，我在家常常玩电子游戏。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020509.jpg)

有人说过，世界上有两种游戏。一种是追求明确目标的游戏，比如战胜所有对手，完成目标就取得了游戏胜利；另一种是没有明确目标的游戏，只是为了讲一个故事，或者体验在游戏世界的漫游。

我发现，我对第一种游戏越来越厌倦，对不停地"打怪、升级、做任务、收集宝物"这种模式，尤其没有兴趣。我更喜欢在游戏中漫游和探索，好比在一个陌生的城市观光，没有一定要做的任务，也没有一定要克服的障碍，不需要收集任何东西，不必与任何人作战，也不担心哪个角落会跳出敌人，如果看到感兴趣的东西，就停下来好好欣赏。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020503.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020504.jpg)

有一个很老的游戏，叫做[《亲爱的艾丝特：爱与死之书》](https://www.douban.com/game/19974701/)（Dear Esther），据说是文学性最强的游戏，甚至有的评论家说，这不是游戏，而是一部可以玩的小说，"这是压抑、孤独、沉寂以及心如灰烬的表白或遗书"。玩家身处一个无人海岛，景色优美而荒凉，背景音乐伴着海风时断时续，你在这个岛上漫游，没有目标，耳边是一个陌生男人在不停朗读，他写给亡妻的信。你根据这些信，以及现场发现的线索，自己去推测到底发生了什么。这种游戏很对我的胃口。

在我心目中，好的游戏应该是这样的：玩家处在一个故事之中，漂亮的虚拟世界使得这个故事引人入胜。它会吸引你想留在其中，探索各个角落，等着知道故事的结局。游戏过程就是一次旅行，与周围的物体互动，大部分时间你就是悠闲地探索环境，等待将要发生的情节。

我想，未来会有越来越多这一类游戏，就是一本实境化的数字小说。表面上，你在玩游戏，实际上是在读小说，把自己变成小说人物、亲身体验小说世界、参与其中的情节。

## english fluency map stats image

英语流利程度

https://www.economist.com/graphic-detail/2019/12/04/where-are-the-worlds-best-english-speakers

《经济学家》杂志绘制了一幅全球英语流利程度图。下图中，颜色越深就表示英语越流利，灰色的国家则是英语为母语。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019120911.jpg)

根据这张图，中国人的英语水平高于俄国人，我表示怀疑。

## financial independence retire early movement history

提早退休（英文）

https://en.wikipedia.org/wiki/FIRE_movement

这是维基百科的条目，介绍正在兴起的一种社会运动，能否通过高度储蓄，实现提前退休？具体做法是，年收入的 50%以上都储蓄，目标是把每年的消费压低到你个人财富总额的 4%。

## neutral network intro guide

神经网络原理简介

https://github.com/gokadin/ai-simplest-network

![](https://www.wangbase.com/blogimg/asset/202001/bg2020010502.jpg)

一个分成三个部分的神经网络简介，主要介绍数学原理，使用最简单的例子。

## wayback machine web app chromium extension

Wayback Machine 插件

https://blog.archive.org/2017/01/13/wayback-machine-chrome-extension-now-available/

Chrome 浏览器插件，互联网档案馆的官方版本，可以查看一个网页的历史版本，包括那些已经无法访问的网页。

## chinese pandemic online courses is a failure view theory

上海市教委[通知](https://m.yicai.com/news/100510391.html)，本市中小学 3 月 2 日开学，但是不到校，在家收看线上课程。

这些课程都是由教委[统一录制](https://mp.weixin.qq.com/s/DegoMgMA6AEenxC9yY4y3Q)，动员"全市各学科一千多名优秀骨干教师，共分为 12 个频道，涵盖小学一年级到高中三年级。"

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022613.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022614.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020022615.jpg)

上面是录制现场的照片。看上去跟平时讲课没有区别，就是单纯的课堂录像。大家觉得，这样的听课效果会好吗？依我看，现场讲课效果都未必很好，何况在家看录像呢！

教育类的视频，一般都要带有一点趣味性，最好加入大量的动画、图片或短视频，才能吸引人，否则就太枯燥了。干巴巴的讲解课本，一张张展示幻灯片，成年人都看不进去，小朋友的听课效果就可想而知了。

我觉得，网课肯定是未来的趋势，大多数知识将来都是线上学，这样才能做到随时随地学习，而且成本也足够低。但是，前提是   不能把课堂教学拍成录像放上网，而是要做到知识性与娱乐性的结合，才能成功。

我心目中的范例有两个，都是国外的视频作者，一个是  [3Brown1Blue](https://www.3blue1brown.com/)，专拍数学视频；另一个是  [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt/)，专拍科普短视频。他们都做得非常棒，可以当作榜样。下面是 Kurzgesagt 的[《世界最危险的药是什么》](https://v.qq.com/x/page/b06577jvtnj.html)，大家感受一下吸引人的网课是什么风格。

## xbox travelling guide theory

Xbox 美景指南

https://www.creativereview.co.uk/plan-your-next-trip-inside-xbox/

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020701.jpg)

旅游指南 Rough Guides 丛书，最近出版了[《Xbox 美景指南》](https://www.roughguides.com/article/introduction-to-the-rough-guide-to-xbox/)，专门收入出现在 Xbox 游戏的各种美丽景点，供游戏爱好者前往体验。该书定价 20 英镑，在微软商店出售。

游戏创造的虚拟世界越来越精美，值得人们专程前往观赏，并且还能在其中漫游，不用购买飞机票，只需打开游戏机的按钮。下图是游戏《刺客信条：奥德赛》里面的吉萨金字塔场景。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020020702.jpg)

---

https://cdn2.hubspot.net/hubfs/2424135/RG_Xbox_v4.pdf

## react components generator web app

craft.js

https://github.com/prevwong/craft.js

一个可以通过拖拽生成 React 应用的可视化框架。（@ifrontend-xyz 投稿）

## old wild bird story

世界最老的野生鸟类

https://en.wikipedia.org/wiki/Wisdom_%28albatross%29

1956 年，鸟类学家钱德勒-罗宾斯在中途岛，抓到了一只 5 岁的信天翁，取名为"智慧"，并为它装上了脚环，然后放生。

![](https://www.wangbase.com/blogimg/asset/201912/bg2019122904.jpg)

现在，这只鸟还活着，已经达到了 69 岁的高龄，成为已知寿命最长的野生鸟类。它的脚环因为寿命到期，已经更换了 6 次。它很幸运在 2011 年日本海地震和海啸中幸存下来，当时死了 2000 多只信天翁。

它每年都会回到中途岛，产下一枚蛋，最近一次是 2018 年 11 月。美国地质调查局一直追踪着这只鸟，确认她从 1956 年至今，飞行了超过 300 万公里，相当于绕地球 120 圈。鸟类学家表示，这只鸟 60 岁以后还能不断生育后代，令人感到震惊。

## inventions of internet explorer history theory

Internet Explorer 曾有过的创新（英文）

https://schepp.dev/posts/today-the-trident-era-ends/

微软已经放弃了自己的 Trident 浏览器引擎，改用谷歌的 Blink 引擎。本文回顾了历史上 Internet Explorer 浏览器的众多创新，数量非常多。

---

### Today, the Trident Era Ends

When I was a child, I was always fascinated by stories about ancient civilizations. I devoured books about Atlantis, or the story of [Heinrich Schliemann](https://en.wikipedia.org/wiki/Heinrich_Schliemann)'s discovery of Troy, stories about the Greek, the Romans, the [Inca Empire](https://en.wikipedia.org/wiki/Inca_Empire), or [Ancient Egypt](https://en.wikipedia.org/wiki/Ancient_Egypt). And I was always fascinated by the extent of their capabilities in the fields of [astronomy](https://blogs.scientificamerican.com/observations/the-astronomical-genius-of-the-inca/), [math](https://en.wikipedia.org/wiki/Pythagoras), and [medicine](https://en.wikipedia.org/wiki/Ancient_Egyptian_medicine), their incredible achievements, like building those vast monuments, or their highly functional social systems. What's even more incredible is that most of this already happened way before Jesus Christ first set foot on our earth!

And yet, all these eras of highly developed civilizations one day came to an end. Some just died out quietly, some were outpaced by civilizations with better military capabilities. Most of the time when that happened, the capabilities of the defeated ones *did not* carry over to the now dominating group, thereby enriching their pool, but instead vanished. Which I always found unfortunate.

### The Era of the Trident Engine

Starting now, Microsoft will roll out their new Chromium-based Edge browser to their millions of Windows 10 users. And this will also mark the end of an era. *The era of the Trident-Engine*.

But hadn't the Trident era already ended when Edge appeared? Not really.

When Microsoft created the Edge browser in 2015, what they really did was to fork Trident into EdgeHTML and to strip out plenty of legacy code paths like [ActiveX](https://en.wikipedia.org/wiki/ActiveX) (Microsoft's version of Java Applets) or emulation of older IE rendering engines. Both browsers sharing the same genes gets apparent when you read posts like [these](https://blogs.windows.com/msedgedev/2017/04/19/modernizing-dom-tree-microsoft-edge/) on the Edge Blog or when you see bug reports that [similarly affect IE 11 as well as Edge 17](https://phabricator.wikimedia.org/T203564). [Most of the initial Edge improvements came from Chakra](https://www.anandtech.com/show/8932/internet-explorer-project-spartan-shows-large-performance-gains), the JavaScript engine, whereas only a moderate few [could be attributed to the rendering engine itself](http://html5test.com/compare/browser/ie-11/edge-12.html). Renaming the browser could be considered more of a marketing move, though, as the removal of legacy features already started earlier, when the browser was still called Internet Explorer.

Rebooting Internet Explorer under a new name didn't win back the hearts of the web developers. Up until today Microsoft remained busy playing catch up. Therefore, when we get excited about the web platform nowadays, it is not because of a new Edge release but because of Google unveiling new ideas or APIs during Google I/O or the Chrome Dev Summit. A lot of these innovations are driven by other teams at Google working on Google frameworks like Angular and AMP, or on Google products like Gmail, Search, Drive, Maps, Google Docs, Analytics or in recent times: Lighthouse. In fact, a lot of what defines HTML5 can be rooted back to Google looking for a way to improve the web platform to better accommodate its ideas around web apps. Remember [Google Gears](<https://en.wikipedia.org/wiki/Gears_(software)>)? Or later [Google Chrome Frame](https://en.wikipedia.org/wiki/Google_Chrome_Frame)?

Funnily that same kind of process also drove innovation in Internet Explorer in the old days. ActiveX capability was added to Internet Explorer 3.0, together with the `<object>` tag, to offer one more "compile target" for Microsoft's own Java competitor. It was certainly not the IE team that came up with this idea. Or take what we know today as "AJAX": the idea of lazily fetching content in the background via JavaScript was born in the Exchange / Outlook Web Access team, a product that could be seen as a precursor to Gmail. [After pulling a few tricks inside Microsoft](https://web.archive.org/web/20070227195930/http://www.alexhopmann.com/xmlhttp.htm) they got it (silently) shipped with Internet Explorer 5.0 in 1999. It wasn't until 6 years later that [the term AJAX was coined](https://web.archive.org/web/20050222032831/http://adaptivepath.com/publications/essays/archives/000385.php) and its concepts became widely known.

> we pretty quickly struck a deal to ship the thing as part of the MSXML library. Which is the real explanation of where the name XMLHTTP comes from- the thing is mostly about HTTP and doesn't have any specific tie to XML other than that was the easiest excuse for shipping it so I needed to cram XML into the name (plus- XML was the hot technology at the time and it seemed like some good marketing for the component).

The same goes for [`document.designMode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) (apparently a wish coming [from the Hotmail team](https://gizmodo.com/how-internet-explorer-shaped-the-internet-5937354)) & [`contentEditable`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable), the [DOM](https://gizmodo.com/how-internet-explorer-shaped-the-internet-5937354) the [Drag-n-Drop API](https://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html), [iframes](https://en.wikipedia.org/wiki/HTML_element#iframe) or [Clipboard Access](https://depth-first.com/articles/2011/01/24/reading-and-writing-the-sytem-clipboard-in-javascript-copy-and-paste-molfiles-in-chemwriter-on-internet-explorer/). Internet Explorer was also the first browser to have permission prompts:

![Clipboard Access Permission Prompt](https://schepp.dev/img/chemwriter_clipboard_prompt.png)

Back in the days, Microsoft was single-handedly pushing the web forward, [with around 1.000(!) people working on Internet Explorer](https://ericsink.com/Browser_Wars.html) and [with a 100 million dollar budget to burn per year](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#Microsoft_Internet_Explorer_5), with almost no-one left to compete. This was massive!

> [Scott] Isaac also invented the iframe HTML tag. It has been speculated that the tag name stands for the Isaacs Frame, although Scott has denied this.

The last time Internet Explorer introduced new features driven by other business units was in 2012. At that time Windows 8 introduced the Windows Store and corresponding Windows Store Apps. Those apps could be written once and could then be run on Windows, Xbox and Windows Phone. Since Microsoft was late to the app store game, they had to put the entry barrier for developing apps as low as possible, so they got the idea of allowing people to develop apps with web technologies. As a communication path to the underlying OS, they created a JavaScript library called "[WinJS](https://en.wikipedia.org/wiki/WinJS)" and Internet Explorer 10 was meant to be the runtime environment for those apps.

![Metro Design - Microsoft, Public Domain](https://schepp.dev/img/metro.png)

But to be able to model the Windows UI with web technologies, Microsoft had to add plenty of new capabilities to IE: CSS Grid, CSS Flexbox, CSS Scroll Snap Points and the Pointer Events API for touch and stylus interactions (the latter one was required as [Apple had filed a patent on the Touch API](https://books.google.de/books?id=vb4v9HNwWVgC&pg=PA569&lpg=PA569&dq=internet+explorer+pointer+events+patent&source=bl&ots=dlEPaUbP6_&sig=ACfU3U2I08YKVq1fPg5RTHcGC169SyOrEQ&hl=en&sa=X&ved=2ahUKEwj5l4zggtvmAhVPyqQKHS0dACUQ6AEwAXoECAoQAQ#v=onepage&q=internet%20explorer%20pointer%20events%20patent&f=false)).

Microsoft even invented what later became [Origin Trials](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md), as documented in [a podcast interview we did with Jacob Rossi from the Edge team in 2015](https://workingdraft.de/211/).

Coming back to my introductory part on ancient civilizations and their achievements: For me, it feels like Internet Explorer already had many of the things that we came to reinvent later and that we now celebrate as innovations. Although our modern reinventions offer more features combined with better developer experience, I came to wonder why we, as a community, only picked up very few of them. The ones mentioned above were picked up - either because browsers were striving for compatibility with IE or because Microsoft was at the right place at the right time. But a lot more were not!

### The Forgotten Parts 

### MHTML

The first one on the list is [MHTML](https://en.wikipedia.org/wiki/MHTML). MHTML or "MIME encapsulation of aggregate HTML documents" was meant as a packaging format. It shared a lot of concepts with how email clients append attachments to an email. MHTML would take an HTML file and inline all of its resources like CSS, JavaScript files or images via base64 into extra sections. So it was basically data URIs, but on steroids. You could also see MHTML as the precursor of [Web Bundles](https://web.dev/web-bundles/). The format was supported from IE 5 onwards, as well as in Presto-based Opera. No other browser officially supported MHTML, but Chromium added the feature later behind a flag called `chrome://flags/#save-page-as-mhtml`. MHTML was [proposed as an open standard to the IETF](https://tools.ietf.org/html/rfc2557) but somehow it never took off.

_Fun fact: Did you know that Outlook Express used MHTML inside the `.eml` email message files, which it used to store emails together with their corresponding attachments on your disk?_

### Page Transition Filters

Internet Explorer had page transition filters which you would define as HTTP header or in the form of a meta tag:

```html
<meta
  http-equiv="Page-Enter"
  content="RevealTrans(Duration=0.600, Transition=6)"
/>
```

As the name implies, such a filter would smoothly transition the user from page to page upon navigation, instead of having pages appear as abruptly as we are used to. There was an extensive list of transition filters you could choose from by referencing them via number:

- 0 - Box in
- 1 - Box out
- 2 - Circle in
- 3 - Circle out
- 4 - Wipe up
- 5 - Wipe down
- 6 - Wipe right
- 7 - Wipe left
- 8 - Vertical blinds
- 9 - Horizontal blinds
- 10 - Checkerboard across
- 11 - Checkerboard down
- 12 - Random dissolve
- 13 - Split vertical in
- 14 - Split vertical out
- 15 - Split horizontal in
- 16 - Split horizontal out
- 17 - Strips left down
- 18 - Strips left up
- 19 - Strips right down
- 20 - Strips right up
- 21 - Random bars horizontal
- 22 - Random bars vertical
- 23 - Any random pattern

In addition to `Page-Enter` you could specify additional transitions for `Page-Exit`, `Site-Enter` and `Site-Exit`. Those soft transitions between pages are something that we see reappearing in the form of [Portals](https://web.dev/hands-on-portals/) or the [Page Transition API](https://www.youtube.com/watch?v=JCJUPJ_zDQ4).

### Object Transition Filters 

Similarly to how you could use filters to transition between pages, you could also transition between two states of the same DOM object. This is similar to Rich Harris' [ramjet](https://github.com/Rich-Harris/ramjet), only that it would not morph between two states, but instead blend over with a movie-like "cut".

What you could also do with those object transition filters is something similar to CSS Transitions or to an [animated CSS crossfade() function](https://schepp.github.io/imagery-on-the-web/#/4/13).

You would start off with applying a blend filter to the element (with a duration of 600ms):

```js
img.style.filter = "blendTrans(duration=0.600)";
```

Then, before making any change to the object, you would freeze its current state:

```js
img.filters.blendTrans.apply();
```

Finally you would change the image source and trigger the transition:

```js
img.src = "different-src.jpg";
img.filters.blendTrans.play();
```

### Effects Filters [#](https://schepp.dev/posts/today-the-trident-era-ends/#effects-filters)

The filter category most people still remember from Internet Explorer 4+ is effects filters. In 1997 they already offered, although in a lower fidelity, what CSS Filters brought to the table when they first appeared in 2012 in Apple Safari 6.

![Screenshot of the grey filter in Internet Explorer 6](https://schepp.dev/img/ie-grey-filter.jpg)

You could also use Internet Explorer's Matrix Filter [to do things](http://extremelysatisfactorytotalitarianism.com/blog/?p=1002) that would later be introduced by CSS Transforms:

```css
transform: rotate(15deg);
filter: progid:DXImageTransform.Microsoft.Matrix(
            M11=0.9659258262890683,
            M12=-0.2588190451025207,
            M21=0.2588190451025207,
            M22=0.9659258262890683,
            SizingMethod='auto expand');
```

Or, you could use the Chroma Filter to key out certain color pixels of an element in order to [create rounded corners](http://www.der-schepp.de/chroma-corners/) or [to apply masking](https://web.archive.org/web/20130118094658/https://thenittygritty.co/css-masking).

### Gradient Filter 

You always though Internet Explorer 10 was the first version to support gradients? Not entirely true, there was a CSS filter for that, too:

```css
filter: progid:DXImageTransform.Microsoft.gradient(enabled='false',
                startColorstr=#550000FF, endColorstr=#55FFFF00);
```

Also note how Internet Explorer already supported 8-digit hex codes for RGBA colors, something that only officially appeared in CSS around 2016 as part of the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#hex-notation).

### Custom Scrollbar Styling

Internet Explorer first introduced custom scrollbar styling back in 1999 and it wasn't until 2013 that Safari came up with its own mechanic of styling them.

![](https://schepp.dev/img/ie-scrollbars.gif)

Credit: Stack Overflow, [@iambondbaby](https://stackoverflow.com/a/24422109)

```css
body {
  scrollbar-base-color: #c0c0c0;
  scrollbar-3dlight-color: #c0c0c0;
  scrollbar-highlight-color: #c0c0c0;
  scrollbar-track-color: #ebebeb;
  scrollbar-arrow-color: black;
  scrollbar-shadow-color: #c0c0c0;
  scrollbar-darkshadow-color: #c0c0c0;
}
```

### Box-Sizing

Internet Explorer initially implemented the box model as if `box-sizing: border-box` was set by default. Even though [many people found Microsoft's take a lot more logical and user friendly](https://www.jefftk.com/p/the-revenge-of-the-ie-box-model), the CSS WG ultimately chose another default where `width` was not referring to the outer width of a box but to width of the usable content space inside.

![W3C and IE Box Models compared, courtesy of Wikipedia](https://schepp.dev/img/450px-W3C_and_Internet_Explorer_box_models.png)

> Logically, a box is measured from border to border. Take a physical box, any box. Put something in it that is distinctly smaller than the box. Ask anyone to measure the width of the box. He'll measure the distance between the sides of the box (the 'borders'). No one will think of measuring the content of the box. Web designers who create boxes for holding content care about the *visible* width of the box, about the distance from border to border. The borders, and not the content, are the visual cues for the user of the site. Nobody is interested in the width of the content.

It was only with IE 6 that Microsoft added an additional browser rendering mode, this time sticking to the standards. It was not active by default so not to mess old layouts up. You had to opt-in to it, which you would do by [starting your HTML document with a doctype declaration](https://web.archive.org/web/20170531195606/http://www.satzansatz.de/cssd/quirksmode.html) (think of it as JavaScript's `'use strict';`).

Nowadays everyone goes back to IE's model by starting off their CSS with [resetting the box sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/):

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### CSS Expressions 

Up until version 7, Internet Explorer had a great feature called "CSS Expressions", also known as "Dynamic Properties". In essence, they were JavaScript snippets wrapped in a CSS function and what the snippet evaluated to went into the CSS property's value. They could be considered as one precursor of CSS Houdini and CSS'es `calc()` function and other functions.

You could for example script your own `min()` and `max()` functions:

```css
width: expression(Math.min(this.parentElement.clientWidth, 400) + "px");
```

The above code would set the width of the element to the width of the parent until it exceeds 400px. Then it would stop there, similarly to how `max-width` works. The `this` keyword would refer to the current element.

Since IE only supported pseudo-elements from version 8 on, you could use CSS Expressions to "polyfill" these, like so:

```css
zoom: expression(
  this.runtimeStyle.zoom = "1",
  this.insertBefore(
      document.createElement("span"),
      (this.hasChildNodes() ? this.childNodes[0]: null)
    ) .className= "before",
  this.appendChild(document.createElement("span")) .className= "after"
);
```

The code above is assigned to a more or less irrelevant CSS property: `zoom`. The first thing it would do is to disable further executions of the expression by replacing it with a static value of `1`. This stops it from creating more and more elements with every new evaluation run. Then it creates `<span>` elements which it injects at the beginning and end of its content area, with the CSS class names `.before` and `.after`. Since Internet Explorer 8 was the first version to support pseudo-elements but at the same time dropped support for CSS Expressions, the above code would do no damage in pseudo-element aware browsers.

The reason CSS Expressions were dropped so early from IE was that they quickly acquired themselves a bad image. And that was because with CSS Expressions you could quickly tank a website's rendering performance, bringing it to a crawl. The "problem" with CSS Expressions was that they executed after every single event that the browser registered, which also included `resize`, `scroll` and `mousemove`. Have a look at the following example:

```css
background: expression(
  "#" + Math.floor(Math.random() * 16777216) .toString(16)
);
```

The above code would randomly calculate a HEX color which would then be assigned as background.You can see it in action in the following video (epilepsy warning because of flashing colors):

See how the background color updates every time one moves the mouse? This is indeed bad for performance, which is why leading figures in the web development scene soon started [advising against using them](https://books.google.de/books?id=jRVlgNDOr60C&pg=PA51&lpg=PA51&dq=%22avoid+css+expressions%22&source=bl&ots=pcA1Hw2ai4&sig=ACfU3U1bDcBGz1ivaBIMf6U3jPZk35aSfw&hl=en&sa=X&ved=2ahUKEwiUvo-1op3nAhXHKVAKHR9hBpcQ6AEwB3oECAoQAQ#v=onepage&q=%22avoid%20css%20expressions%22&f=false) [or to replace them with real JavaScript](https://robertnyman.com/2007/11/13/stop-using-poor-performance-css-expressions-use-javascript-instead/). Back in the days, though, only a few were really versed at writing JavaScript, including me. Nowadays I would argue that it all depends on how you write your code and that you can equally create badly performing code in proper JavaScript. One solution to the problem is the one shown in the pseudo-element code, where the expression disables itself after the first run by assigning a static value to `this.style` or `this.runtimeStyle` (which is another proprietary Microsoft thing representing a style object with even higher precedence in the CSS cascade than inline styles). If the value was meant to stay dynamic, you could modify the code to only do costly calculations when it was supposed to:

```html
<script>
  window.calcWidth = "100%";
  window.updateWidth = false;
  window.onresize = function () {
    window.updateWidth = true;
  };
</script>
<style>
  .element {
    width: expression(
      updateWidth ?
        (
          calcWidth = Math.min(this.parentElement.clientWidth, 400) + "px",
          updateWidth = false
        ): calcWidth
    );
  }
</style>
```

But why not just use plain JavaScript? Well, it's true that you can do all of these things with pure JavaScript. One thing though, that I find super handy about expressions, is that they are easier to invoke on many different sorts of elements, as you can use CSS (selectors) to assign them to elements. And in the case of the pseudo-element polyfill expression it makes even more sense to have it in your CSS as that's also the place where you would create real pseudo-elements. So it depends.

### Fonts

Internet Explorer was the first browser to allow the use of custom fonts. The corresponding `@font-face` rule was part of CSS 2.0 but got pulled out of CSS 2.1 as browser support was too bad - mostly due to font foundries opposing the idea of putting fonts into the web, easy to pirate for everyone. Microsoft continued to support it and paired it with a new file format, which they developed [together with the font foundry Monotype](https://www.w3.org/Style/CSS20/history.html): the Embedded OpenType (EOT) format. EOT was meant to tackle these problems from two directions. On the one side, authoring tools, like Microsoft's Web Embedding Fonts Tool (WEFT), would only accept source fonts that were not marked with a `no embedding` flag. That way font foundries could disallow the use of them on the web. On the other side, during creation, you would specify a list of allowed URLs for the font to be used on and the browser would then check against it and only display the font if the current URL was indeed listed.

Microsoft and Monotype [submitted EOT to be standardized to the W3C in 2008](https://www.w3.org/Submission/2008/01/Comment). But ultimately, the other browser makers of that time decided not to implement it, as it didn't use the (then) commonly supported GZIP algorithm for compression, but a proprietary algorithm called "MicroType Express" [which they didn't want to implement on top](https://www.w3.org/Style/CSS20/history.html). So instead they asked the W3C to develop yet another font embedding format, but based on GZIP, which in 2010 appeared as the WOFF format.

> Rather than embed the URL of a document in the font, it relies on an HTTP feature (the origin header), which allows to give the domain part of a document's URL: less precise than a full URL, but still good enough for most font makers. In the end, however, WOFF still adopted parts of EOT's MicroType Express algorithm, and a new compression algorithm (Brotli), because it allowed better compression than gzip.

_Fun fact: Did you know that when you chose to embed fonts into a Powerpoint 2007 or 2010 presentation, that Powerpoint would embed that font as an EOT file in the corresponding `.pptx`?_

### HTML Components: Attached Behaviors, Element Behaviors & Default Behaviors

As early as 1998, Microsoft already suggested techniques that came close to what we celebrate today as [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) and [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components): [HTML Components](https://www.w3.org/TR/NOTE-HTMLComponents):

> The growth of HTML with scripting as an application platform has exploded recently. One limiting factor of this growth is that there is no way to formalize the services that an HTML application can provide, or to allow them to be reused as components in another HTML page or application. HTML Components address this shortcoming; an HTML Component (HTC for short) provides a mechanism for reusable encapsulation of a component implemented in HTML, stylesheets and script.\
> \
> Componentization is a powerful paradigm that allows component users to build applications using 'building blocks' of functionality without having to implement those building blocks themselves, or necessarily understand how the building works in fine detail. This method makes building complex applications easier by breaking them down into more manageable chunks and allowing the building blocks to be reused in other applications. HTML Components brings this powerful development method to Web applications.

In fact, Microsoft's work [was considered prior art in the early Web Component discussion](https://blog.mecheye.net/2017/08/introduction-to-html-components/#comment-632830).

The first browser to implement HTML Components was Internet Explorer 5 in 1999 and the last one was Internet Explorer 9 in 2010.

And there were three kinds of HTML Components: **Attached Behaviors**, **Element Behaviors**, and **Default Behaviors**.

### Attached Behaviors

Attached Behaviors worked similarly to a CSS Houdini Worklet in that you had a (`.htc`) file which would add new capabilities to any element it was attached to. The attaching itself was done via CSS:

```css
img {
  behavior: url(roll.htc);
}
```

The `.htc` files consisted of special XML markup used to connect with the outside world, and a script block which would define how the element would behave. The attached DOM element was exposed to the script as the `element` global. The following Attached Behavior is tailored for image elements and would change their source every time the mouse would hover over them (hat tip for his deep dive and and credit for all of the following examples goes to [Jasper St. Pierre](https://blog.mecheye.net/2017/08/introduction-to-html-components/)):

```html
<public:attach event="onmouseover" onevent="rollover()" />
<public:attach event="onmouseout" onevent="rollout()" />
<script>
  var originalSrc = element.src;
  function rollover() {
    element.src = "rollover-" + originalSrc;
  }
  function rollout() {
    element.src = originalSrc;
  }
</script>
```

### Element Behaviors

Element Behaviors went one step further by not only outsourcing behavior into a `.htc` file but also markup, thereby creating a custom element. This is pretty similar to Web Components' [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) which also look trivial from the outside, from the "Light DOM", but hide a complex DOM structure inside in their Shadow DOM. Microsoft's version of Shadow DOM is called ["Viewlink"](<https://docs.microsoft.com/en-us/previous-versions//ms531428(v=vs.85)?redirectedfrom=MSDN>), into which you can opt-in, and like Shadow DOM it will protect the inner structure from any document styles bleeding in or from external scripts manipulating it.

> Viewlink is a feature of element behaviors that enables you to write fully encapsulated Dynamic HTML (DHTML) behaviors and import them as robust custom elements in a Web page.

In order to use Element Behaviors it wasn't enough anymore to use CSS to tie an HTML element to a behavior. Instead you had to leverage the power of XML by creating a new namespace for your custom components:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns:custom>
  <head>
    <?import namespace="custom" implementation="RollImgComponent.htc">
  </head>
</html>
```

`custom` is a XML namespace name which you could freely chose. It could also be something else. The `<?import>` tag does what we previously used CSS for: referring to a `.htc` file holding the code for that component. In the `.htc` file, you then needed to add a few more parts:

1. You needed to define the custom HTML tag under which to use the element: `<public:component tagname="rollimg">`
2. You had to define any HTML attributes this element allowed for, e.g.: `<public:property name="src" />`
3. And you needed to add the inner markup of your element similarly to today's `<template>` element.

```html
<public:component tagname="rollimg">
  <public:attach event="onmouseover" onevent="rollover()" />
  <public:attach event="onmouseout" onevent="rollout()" />
  <public:property name="src" />
</public:component>

<img id="image" />

<script>
  // IE's document.getElementByID
  var img = document.all["image"];
  img.src = element.src;
  img.id = undefined;
  element.appendChild(img);

  function rollover() {
    img.src = "rollover-" + element.src;
  }
  function rollout() {
    img.src = element.src;
  }
</script>
```

Note that within the `.htc` file you had your own scoped `document` object to traverse.\
Now you were ready to go and use your custom element in your HTML markup like so:

```html
<custom:rollimg src="logo.png"></custom:rollimg>
```

Custom elements like these were synchronously parsed and created. After the creation of the above example component the page's DOM would look like this:

```html
<custom:rollimg src="logo.png">
  <img src="logo.png" />
</custom:rollimg>
```

As you can see, these `img` elements became visible and could therefore be targeted from with the HTML document via DOM traversal or CSS. Which may not have been what you wanted. To fix that, you needed to activate Internet Explorer's version of Shadow DOM called "viewLink", like so:

```html
<public:component tagname="rollimg">
  <public:attach event="onmouseover" onevent="rollover()" />
  <public:attach event="onmouseout" onevent="rollout()" />
  <public:property name="src" />
</public:component>

<img id="image" />

<script>
  // Activates IE's Shadow DOM
  defaults.viewLink = document;

  // IE's document.getElementByID
  var img = document.all["image"];
  img.src = element.src;

  function rollover() {
    img.src = "rollover-" + element.src;
  }
  function rollout() {
    img.src = element.src;
  }
</script>
```

### Default Behaviors 

Default Behaviors are the third variant of HTML Components. They are basically standard libraries built into the browser that you could tap into via CSS or XML extension and that unlocked a completely new set of functionality.

### Triggering a Download

One of them was `behavior:url(#default#download)`.

Nowadays when you want to trigger a download just from within the front-end, what you would do is make use of a link with a [`download` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download) and execute `.click()` on it. Well, back in the old days it went like this:

```html
<!--
the following element needs to be created once in the document.
It then exposes new utility methods you can use, like .startDownload()
-->
<span id="download" style="behavior:url(#default#download)"></span>

<button onclick="download.startDownload('menu.pdf')">Download</button>
```

### Persisting Data

Another super useful Default Behavior was `behavior: url(#default#userData)`. It solves the same problems as `localStorage` does, just in a completely different manner. The following illustrates how to save and restore the values of input elements in old IE:

```html
<style>
  #store {
    behavior: url(#default#userData);
  }
</style>

<script>
  function save() {
    store.setAttribute("username", username.value);
    store.setAttribute("email", email.value);
    store.save("exampleStore");
  }
  function restore() {
    store.load("exampleStore");
    username.value = store.getAttribute("username");
    email.value = store.getAttribute("email");
  }
</script>

<span id="store"></span>
<input id="username" />
<input id="email" />
<button onclick="restore()">restore values</button>
<button onclick="save()">save values</button>
```

There is even [localStorage polyfills for IE](https://gist.github.com/mmurph211/4271685) that use this technique.

### Client Capabilities

Another Default Behavior is the Client Capabilities Behavior. As the name already hints at, it allows you to find out more about the client. The most interesting piece of information is the one about the user's connection type, similar to today's `navigator.offline` or the [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API):

```html
<span id="clientcapabilities" style="behavior:url(#default#clientCaps)"> </span>

<script>
  // Either "modem" or "lan" or "offline"
  var connectionType = clientcapabilities.connectionType;
</script>
```

### Animating via Timed Interactive Multimedia Extensions

You think Internet Explorer could not animate stuff? Not entirely true. Because, back in the days there was already SMIL, the [Synchronized Multimedia Integration Language](https://en.wikipedia.org/wiki/Synchronized_Multimedia_Integration_Language). SMIL is a markup language to describe multimedia presentations, defining markup for timing, layout, animations, visual transitions, and media embedding. While Microsoft was heavily involved in the creation of this new W3C standard, they ultimately [decided against implementing it in Internet Explorer](https://web.archive.org/web/20091206034833/http://www.wired.com/science/discoveries/news/1998/07/13478). What they did, though, was to derive from it a dialect that would integrate with HTML and submitted that to W3C, too: [HTML+TIME](https://en.wikipedia.org/wiki/HTML%2BTIME), the Timed Interactive Multimedia Extensions. The W3C later reworked it into something that became part of SMIL 2.0 and that was called [XHTML+TIME](https://en.wikipedia.org/wiki/XHTML%2BSMIL). Internet Explorer 5 was the first browser [to support it](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms533099(v=vs.85)?redirectedfrom=MSDN>) in 1999 in version 1.0. Internet Explorer 5.5 one year later supported HTML+TIME version 2.0, the implementation of which was closer to W3C's XHTML+TIME draft. Microsoft still held on to the old name without a leading X, though.

This feature was also encapsulated in a Default Behavior which you had to activate first, either by CSS or by extending the (XML) namespace. Afterwards, what you could do with it was e.g. to show and hide elements over the course of ten seconds, five times in a row:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
  <head>
    <style>
      .time {
        behavior: url(#default#time2);
      }
    </style>
  </head>
  <body>
    <div class="time" repeatcount="5" dur="10" timecontainer="par">
      <p class="time" begin="0" dur="4">First line of text.</p>
      <p class="time" begin="2" dur="4">Second line of text.</p>
      <p class="time" begin="4" dur="4">Third line of text.</p>
      <p class="time" begin="6" dur="4">Fourth line of text.</p>
    </div>
  </body>
</html>
```

Or, switching to the XML namespace variant, you could animate HTML attributes like the background color of the body:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns:t="urn:schemas-microsoft-com:time">
  <head>
    <?import namespace="t" implementation="#default#time2">
  </head>
  <body id="body">
    <t:animateColor
      targetElement="body"
      attributeName="backgroundColor"
      from="black"
      to="white"
      begin="0"
      dur="3"
      fill="hold"
    />
  </body>
</html>
```

Or you could embed a video or audio in HTML, similarly to how you use `<video>` or `<audio>` nowadays, and even have accessible HTML controls:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns:t="urn:schemas-microsoft-com:time">
  <head>
    <?import namespace="t" implementation="#default#time2">
  </head>
  <body>
    <t:video id="video" src="video.mpeg" type="video/mpeg" />
    <div class="controls">
      <button type="button" onclick="video.resumeElement()">play</button>
      <button type="button" onclick="video.pauseElement()">pause</button>
      <button type="button" onclick="video.speed = 1">1x</button>
      <button type="button" onclick="video.speed = 4">4x</button>
    </div>
  </body>
</html>
```

All formats were supported for which the underlying Windows operating system found an appropriate decoder. By default those were for example MPEG-1 and AVI encoded with Microsoft Video-1 codec.

You could even combine the Microsoft specific format with HTML5:

```html
<video id="html5video" autoplay muted>
  <source src="video.mp4" type="video/mp4" />
  <t:video id="video" src="video.mpeg" type="video/mpeg" />
</video>
<div class="controls">
  <button
    type="button"
    onclick="html5video.play ? html5video.play() : video.resumeElement()"
  >
    play
  </button>
  <button
    type="button"
    onclick="html5video.pause ? html5video.pause() : video.pauseElement()"
  >
    pause
  </button>
  <button type="button" onclick="html5video.playbackRate = video.speed = 1">
    1x
  </button>
  <button type="button" onclick="html5video.playbackRate = video.speed = 4">
    4x
  </button>
</div>
```

You find the demo [here](https://schepp.dev/demos/internet-explorer/smil-video). You'll need a ([virtual](https://archive.org/details/ie6.xp.virtualbox)) machine with IE 5.5-8 to experience the IE implementation which you see in the above video.

### Vector Markup Language

Microsoft were also the first to support a vector graphics format in a browser in 1999: the Vector Markup Language, in short VML. VML was developed by Autodesk, Hewlett-Packard, Macromedia, Microsoft, and Vision and submitted to the W3C in 1998. Unfortunately, around that same time, the W3C also received a competing submission called Precision Graphics Markup Language (PGML), developed by Adobe Systems and Sun Microsystems. So W3C merged both proposals and created the Scalable Vector Graphics format (SVG) in 2001. The first browser to support SVG was Konqueror 3.2 in 2004.

To be honest, there isn't much to complain about VML, other than that it could only be used embedded into an HTML file, not externally referenced. Here is how you would create an ellipse both in SVG as well as in VML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SVG Ellipse</title>
  </head>
  <body>
    <svg>
      <ellipse
        cx="200"
        cy="80"
        rx="100"
        ry="50"
        fill="yellow"
        stroke="purple"
        stroke-width="2"
      />
    </svg>
  </body>
</html>
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns:v="urn:schemas-microsoft-com:vml" lang="en">
  <head>
    <title>VML Ellipse</title>
    <style>
      v\:* {
        behavior: url(#default#VML);
      }
    </style>
  </head>
  <body>
    <v:oval
      style="position: absolute; width: 200; height: 100; left: 100; top: 30;"
      fillcolor="yellow"
      strokecolor="purple"
      strokeweight="2"
    >
    </v:oval>
  </body>
</html>
```

Both dialects look similar and seem equally unfamiliar to us web developers.

### Data Binding

Back since Internet Explorer 4.0 in 1997 you could embed data sources into your document. This could be done by referencing an [external CSV file](https://docs.microsoft.com/de-de/archive/blogs/dhejo_vanissery/using-tabular-data-control-to-display-csv-files) via `<object>` element:

```html
<object id="data" classid="clsid:333C7BC4-460F-11D0-BC04-0080C7055A83">
  <param name="DataURL" value="data.csv" />
</object>
```

Instead of a CSV file you could also [establish a connection to your database server](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms531386(v=vs.85)>) (not suggested in writing mode :):

```html
<object id="data" classid="clsid:BD96C556-65A3-11D0-983A-00C04FC29E33">
  <param name="Server" value="http://server" />
  <param name="Connect" value="dsn=database;uid=guest;pwd=" />
  <param name="SQL" value="select name from people" />
</object>
```

(Note how the `classid` attribute changes depending on the source of data?)

And finally you could also reference an external XML file via `<xml>` tag...

```html
<xml src="http://localhost/xmlFile.xml"></xml>
```

...or use embedded inline XML in HTML as your data source:

```html
<body>
  <xml id="data">
    <?xml version="1.0" encoding="UTF-8" ?>
    <records>
      <record>
        <name>Willa Galloway</name>
        <email>tortor@dictum.com</email>
        <phone>098-122-8540</phone>
        <city>Tenali</city>
      </record>
      <record> ... </record>
      ...
    </records>
  </xml>
</body>
```

That inlined XML was called ["XML Data Islands"](https://www.techopedia.com/definition/5243/xml-data-island) and it worked similarly to how browsers nowadays handle SVG embedded in HTML or HTML embedded into an SVG `<foreignObject>` by switching to another parser on the fly.

> An XML data island is an XML document residing within an HTML page. This avoids having to write code (i.e. a script) just to load the XML document, or having to load it through a tag. Client side scripts can directly access these XML data islands. These XML data islands can be bound to HTML elements also.

Now that you had the data in your page you could use Internet Explorer's data binding to e.g. edit it:

```html
<input type="text" datasrc="#data" datafld="name" />
```

### 2-way Data Binding

Not only could you bind data to an input, but also to arbitrary elements. And you could create a two-way data flow, just with declarative markup:

```html
<xml id="data">
  <record>
    <name></name>
  </record>
</xml>
<h1>Hello, <span datasrc="#data" datafld="name"></span>!</h1>
<label
  >Your name:
  <input datasrc="#data" datafld="name" onkeyup="this.blur();this.focus()" />
</label>
```

The only reason there is `onkeyup="this.blur();this.focus()"` is to trigger data flow after each key press, as otherwise the other connected elements would only receive the updated value *after* the user left the input.

### Data Grids

Internet Explorer also shipped with a native data grid implementation that you hooked up to the above data sources and which is built on top of the `<table>` element. This was called [Tabular Data Control](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms531358(v=vs.85)>). You would use the HTML attributes `datafld` to map data fields to table columns, `dataformatas` to enable or disable HTML entity encoding of the contained data, and the `datapagesize` attribute to denote how many entries a page of the grid should show at once. And then there were the methods `previousPage`, `nextPage`, `firstPage`, `lastPage` to easily navigate through the pages.

```html
<table id="datagrid" datasrc="#people" datapagesize="10">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span datafld="name"></span></td>
      <td><span datafld="email"></span></td>
      <td><span datafld="phone"></span></td>
      <td><span datafld="city"></span></td>
    </tr>
  </tbody>
</table>
<button onclick="datagrid.previousPage()">&lt; previous</button>
<button onclick="datagrid.nextPage()">next &gt;</button>
```

### Property Change Event

Internet Explorer featured an interesting `propertychange` event, which you could attach to DOM elements and which would trigger each time one of its properties would be changed programmatically. This could have happened via `setAttribute()` or via object property access. This allowed to create observed/instrumented objects for similar use cases you could use [ES Proxies](https://ponyfoo.com/articles/es6-proxies-in-depth) nowadays. All you needed was a dummy DOM element with `propertychange` event applied:

```html
<div id="store"></div>

<script>
  function handler() {
    // A magic 'event' variable is passed into
    // the event handler function. When coming
    // from the 'propertychange' event, it comes
    // with a 'propertyName' property.

    if (event.propertyName === "onpropertychange") {
      // Don't execute right at the beginning on itself
      return;
    }

    alert(
      event.propertyName +
        "'s value was changed/set to \"" +
        store[event.propertyName] +
        '"'
    );
  }

  store.onpropertychange = handler;

  store.test = true;
  store.test = false;
  store.literal = {};
  store.literal = {
    key: "value2",
  };
</script>
```

### Resize Events for DOM Elements

Internet Explorer had plenty of unique events, but the most interesting one is the [element based `resize` event](<https://msdn.microsoft.com/en-us/data/aa769560(v=vs.95)>), available up until IE 9.

> The onresize event fires for block and inline objects with layout, even if document or CSS (cascading style sheets) property values are changed.

This event is basically in relation to [Resize Observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) what mutation events are to the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). With the only difference to the usual events in that it triggered asynchronously, similarly to an observer.

```js
element.onresize = function (e) {
  /* React to the element's size change */
};
```

### JavaScript Preloading

One interesting implementation of Internet Explorer was how it would load and execute JavaScript sources added via script:

```js
var script = document.createElement("script");
var head = document.getElementsByTagName("head")[0];

script.src = "...";
head.appendChild(script);
```

Other browsers would fetch and execute such a script the moment it was appended to the DOM. Internet Explorer had a more nuanced approach: it splitted both steps up. Fetching already happened as soon as the `.src` property was assigned whereas execution only happened once the script was appended to the DOM. That way you could easily preload scripts without blocking the main thread. Something developers could only implement in a more complicated fashion in other browsers, at least until we got [Resource Hints](https://www.smashingmagazine.com/2019/04/optimization-performance-resource-hints/).

Internet Explorer was also the first browser to introduce the `defer` attribute for scripts.

### Finding the currently executing script

At some point, the HTML5 standard introduced `document.currentScript` which pointed to the `<script>` element which was currently being executed. Why would you need this? For example to read out [extra configuration](https://2ality.com/2014/05/current-script.html) like this one in the `data-main` attribute:

```html
<script src="scripts/require.js" data-main="js/main"></script>
```

Somewhere inside `scripts/require.js` there would be this line:

```js
var main = document.currentScript.getAttribute("data-main");
```

Sadly, this only got implemented in Edge 12. What only a few people knew was that Internet Explorer had another mechanism in place which not only offered the same result, but that was also more in line with how a document would communicate if it was still loading or if it was fully interactive: scripts had a `.readyState` property.

```js
function currentScript() {
  var scripts = document.getElementsByTagName("script");

  for (; i < scripts.length; i++) {
    // If ready state is interactive, return the script tag
    if (scripts[i].readyState === "interactive") {
      return scripts[i];
    }
  }

  return null;
}
```

The `.readyState` property was dropped in Internet Explorer 11 which made this version the only one supporting neither `.currentScript` nor `.readyState` (luckily, a genius named [Adam Miller](https://twitter.com/millea9) [found another way to polyfill it](https://github.com/amiller-gh/currentScript-polyfill)).

### So what led to IE's downfall?

Looking at the above list, I would say that Microsoft was lightyears ahead of everyone else in regards to providing tools and solutions for architecting complex and delightful websites. Some syntax may look unfamiliar to us, but this is just because we are not used to it. Back in the days, XML was all the rage. And remember how you felt when you opened an SVG for the first time? Or when you saw ES6'es arrow notation? Or BEM? JSX? You probably had the same feelings.

One part of why Microsoft's ideas didn't really catch on was that we developers just didn't get it. Most of us were amateurs and had no computer degree. Instead we were so busy learning about semantic markup and CSS that we totally missed the rest. And finally, I think too few people back then were fluent enough in JavaScript, let alone in architecting complex applications with JavaScript to appreciate things like HTML Components, Data Bindings or Default Behaviors. Not to speak of those weird XML sprinkles and VML.

The other reason could have been a lack of platforms to spread knowledge to the masses. The internet was still in its infancy, so there was no MDN, no Smashing Magazine, no Codepen, no Hackernoon, no [Dev.to](http://dev.to/) and almost no personal blogs with articles on these things. Except [Webmonkey](https://en.wikipedia.org/wiki/Webmonkey). There were also no conferences yet, where Microsoft devrel people could have spoken. And there was also no broadband and therefore no conference talks you could have watched on video. All there was, was mailing lists like "[A List Apart](https://en.wikipedia.org/wiki/A_List_Apart)" and IRC to get in contact with others, which was basically Slack, but with a lot less polish.

The final nail in the coffin was that after the release of Internet Explorer 6, Microsoft decided to tightly couple new Internet Explorer releases to Windows releases. So they [dismantled the Internet Explorer team](https://wiki.mozilla.org/Timeline) and integrated it into the Windows product team. Sadly, the Windows version in the making, Windows XP's successor with codename "Longhorn" (later Windows Vista), got massively delayed as development was so unfocused and chaotic that [they even needed to reset it](https://en.wikipedia.org/wiki/Windows_Vista#Development_reset). This also delayed a new Internet Explorer release and left the web in a vacuum, with no one fixing bugs and improving existing technology. When Microsoft woke up five years later, it was already too late. W3C had developed new standards and the remaining other browser makers not only implemented them but also founded the WHATWG which brought even more innovations to the table. Microsoft lost its technical leadership, lost its market share, and never recovered from that period.

![Get Internet Explorer Badge](https://schepp.dev/img/ieget_animated.gif)

_Update: don't miss the interesting discussion happening over [at Hacker News](https://news.ycombinator.com/item?id=22146629)._

## programming principles in 20 years theory

我编程 20 年的指导原则（英文）

https://medium.com/@alexewerlof/my-guiding-principles-after-20-years-of-programming-a087dc55596c

一个编程 20 年的资深程序员，总结自己编写软件的原则，其中一条是：安全性 > 可用性 > 可维护性 > 代码简洁 > 性能 。另一条是，除非已经完全理解了所要解决的问题，否则不要动手写代码。

---

### My guiding principles after 20 years of programming

I've been programming since 1999 and this year I've officially coded for 20+ years. I started with Basic but soon jumped into Pascal and C and then learned object oriented programming (OOP) with Delphi and C++. In 2006 I started with Java and in 2011 I started with JavaScript. I've worked with a wide range of businesses from robotics, fin tech, med tech to media and telecom. Sometimes I had a different hat as a researcher, CTO, TPM (technical product manager), teacher, system architect or TL (technical leader) but I've always been coding. I've worked on some products that served millions of people, and some that failed before being released. I worked as a consultant and I even had my own startup. I have spent lots of time on open source projects, closed source projects and internally open source projects (proprietary code that is developed by a community inside the company). I've worked with tiny microcontrollers all the way to mobile and desktop apps to cloud servers and lately serverless.

For my 20 years programming anniversary, I tried to list the top principles that have been accumulated over the years as my guiding principles through my career:

1. Don't fight the tools: libraries, language, platform, etc. Use as much native constructs as possible. Don't [bend](https://medium.com/free-code-camp) the technology, but don't bend the problem either. Pick the **right tool** for the job or you'll have to find the right job for the tool you got.
2. You don't write the code for the machines, you write it for your colleagues and your **future self** (unless it's a throw away project or you're writing assembly). Write it for the junior ones as a reference.
3. Any significant and rewarding piece of software is the result of collaboration. Communicate effectively and collaborate openly. Trust others and earn their trust. Respect people more than code. Lead by example. Convert your followers to leaders.
4. Divide and conquer. Write isolated modules with separate concerns which are loosely coupled. Test each part separately and together. Keep the tests close to reality but test the edge cases too.
5. Deprecate yourself. Don't be the go-to person for the code. Optimize it for people to find their way fixing bugs and adding features to the code. Free yourself to move on to the next project/company. Don't own the code or you'll never grow beyond that.
6. Security comes in layers: each layer needs to be assessed individually but also in relation to the whole. Risk is a business decision and has direct relation to vulnerability and probability. Each product/organization has a different risk appetite (the risk they are willing to take for a bigger win). Often these 3 concerns fight with each other: UX, Security, Performance.
7. Realize that every code has a life cycle and will die. Sometimes it dies in its infancy before seeing the light of production. Be OK with letting go. Know the difference between 4 categories of features and where to put your time and energy:
   **Core**: like an engine in a car. The product is meaningless without it.
   **Necessary**: like a car's spare wheel. It's rarely used but when needed, its function decides the success of the system.
   **Added value**: like a car's cup-holder. It's nice to have but the product is perfectly usable without it.
   **Unique Selling Point**: the main reason people should buy your product instead of your rivals. For example, your car is the best off-road vehicle.
8. Don't attach your identity to your code. Don't attach anyone's identity to their code. Realize that people are separate from the artifacts they produce. Don't take code criticism personally but be very careful when criticizing others' code.
9. Tech debt is like fast food. Occasionally it's acceptable but if you get used to it, it'll kill the product faster than you think (and in a painful way).
10. When making decisions about the solution all things equal, go for this priority:
    **Security > Reliability > Usability (Accessibility & UX) > Maintainability > Simplicity (Developer experience/DX) > Brevity (code length) > Finance > Performance**
    But don't follow that blindly because it is dependent on the nature of the product. Like any career, the more experience you earn, the more you can find the right balance for each given situation. For example, when designing a game engine, performance has the highest priority, but when creating a banking app, security is the most important factor.
11. Bugs' genitals are called **copy & paste**. That's how they reproduce. Always read what you copy, always audit what you import. Bugs take shelter in **complexity**. "Magic" is fine in my dependency but not in my code.
12. Don't only write code for the happy scenario. Write [good errors](https://medium.com/hackernoon/what-makes-a-good-error-710d02682a68) that answer why it happened, how it was detected and what can be done to resolve it. Validate all system input (including user input): fail early but recover from errors whenever possible. Assume the user hold a gun: put enough effort into your errors to **convince** them to shoot something other than your head!
13. Don't use **dependencies** unless the cost of importing, maintaining, dealing with their edge cases/bugs and refactoring when they don't satisfy the needs is significantly less than the code that you own.
14. Stay clear from [**hype-driven development**](https://blog.daftcode.pl/hype-driven-development-3469fc2e9b22). But learn all you can. Always have **pet projects**.
15. Get out of your comfort zone. Learn every day. Teach what you learn. If you're the master, you're not learning. Expose yourself to other languages, technologies, culture and stay curious.
16. Good code doesn't need documentation, great code is **well documented** so that anyone who hasn't been part of the evolution, trial & error process and requirements that led to the current status can be productive with it. An undocumented feature is a non-existing feature. A non-existing feature shouldn't have code.
17. Avoid overriding, inheritance and implicit smartness as much as possible. Write pure functions. They are easier to test and reason about. Any function that's not pure should be a class. Any code construct that has a different function, should have a different name.
18. Never start coding (making a solution) unless you fully understand the **problem**. It's very normal to spend more time listening and reading than typing code. Understand the domain before starting to code. A problem is like a maze. You need to progressively go through the code-test-improve cycle and explore the problem space till you reach the end.
19. Don't solve a problem that doesn't exist. Don't do **speculative programming**. Only make the code extensible if it is a validated assumption that it'll be extended. Chances are by the time it gets extended, the problem definition looks different from when you wrote the code. Don't **overengineer**: focus on solving the problem at hand and an effective solution implemented in an efficient manner.
20. Software is more fun when it's made together. Build a sustainable **community**. Listen. Inspire. Learn. Share.

I don't claim to be an authority in software development. These are just the wisdom I earned along the way. I'm sure this list will be more mature after another 20 years.

## developement of git is moving fast quote

Git 从 2005 年 4 月 3 日开始开发，4 月 6 日完成开发，对外宣布，4 月 7 日上线使用。

-- 维基百科

https://en.wikipedia.org/wiki/Git#History

## explaining a big idea guide theory

我们经常需要表达自己的想法，怎样才能清晰地说出来，让别人记住你要表达的意思？

请看下面这段话，你对它留下深刻印象吗？

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031101.jpg)

修改一下，是不是效果好了很多。

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031102.jpg)

这里不是推荐大家使用问答体，而是想要展示两个小技巧，可以快速提升表达效果。

（1）拆分。  内容尽量拆分成一系列简短而明确的小观点，粒度要细到每个观点都可以让人快速地、一目了然地领会。 （2）反复。  开头的几点用来吸引读者的注意力，然后进入核心部分时，采用各种形式反复展示，就是翻来覆去地讲，力求给人留下深刻印象。

只要用好这两个小技巧，一定可以取得不错的效果。你一点一点地展示，让别人跟得上你。即使他们没有跟你一直走到底，只看了一半，也好于一点没看进去。

## typescript is awkward view

TypeScript 的怪异之处（英文）

https://blog.asana.com/2020/01/typescript-quirks/

本文记录了几个 TypeScript 使用过程中不符合直觉的地方。

## people around is your destiny quote

改变生活最持久、最有效的方法就是改变周围的人。所以，你应该明智地选择你的朋友、你的工作，他们会成为你的命运。

-- HN 读者

https://news.ycombinator.com/item?id=22102726

## chinese higher education is nothing view theory

这几天，[教育部](http://edu.people.com.cn/n1/2020/0302/c1053-31612535.html)公布了 2020 年研究生招生规模，今年会多招 18.9 万人，比去年增长 20%。

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031819.jpg)

这是为了落实国务院的要求，因为今年有疫情，高校毕业生的就业形势非常严峻，扩大研究生招生，可以减少就业压力。

这固然是不得已的措施，但也反映了我们国家的现实：  高等教育的目的，并不完全是培养学术人才，很大程度上充当了就业缓冲层。

一旦就业不好，高校就会扩招。由于一再的扩招，研究生的培养质量下滑得很厉害。我建议，大家考研一定要慎重，  如果不打算追求学术，轻易不要考研。  否则等到两三年后毕业，拿到一张含金量有限的硕士文凭，你会发现工作同样难找，还白白浪费了好几年的宝贵光阴。

这些年已经司空见惯了，博士研究生去参加公务员考试、去应聘中小学教师。几乎任何一个有学历要求的招聘岗位，都有博士生在应聘。学历贬值的程度可见一斑。

在我看来，读研越来越不值得，研究生文凭在贬值，而学到的那些知识完全可以在互联网上自学。一边工作一边学习，会比读研的成本小很多。工作中提高技能，了解社会，更重要的是可以有收入；下班后，再通过网络自学，补充知识，思考自己未来要走的方向。总之，中国的研究生教育不是出路，学到的东西太少，浪费的时间太多。

## fucking the digital copyright policy story

[生成所有 MIDI 旋律](https://www.musictech.net/news/programmers-generate-every-possible-melody-in-midi-to-prevent-lawsuits/)

![](https://cdn.beekka.com/blogimg/asset/202002/bg2020022804.jpg)

MIDI 是一种电子音乐的格式，可以用数字格式生成和记录音乐。两位美国程序员为了防止有人将 MIDI 旋律申请版权，就用软件生成了所有 8 个音符、12 种节拍的旋律，然后以创意共享许可证发布到网上。软件可以每秒生成 30 万种旋律。

以后，如果有人要将自己的作品申请版权，就会发现这个旋律已经发布过了，从而无法申请成功。他们解释自己的动机时说："版权制度有问题，急需改革。旋律只是数字而已，不应该被申请版权。"

## clean river water without visitors story

[意大利威尼斯](https://www.boredpanda.com/fish-seen-in-clear-venice-canals-after-coronavirus-lockdown/)由于没有游客，运河中的水变得清澈见底。

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031817.jpg)

![](https://cdn.beekka.com/blogimg/asset/202003/bg2020031818.jpg)

## jira web app clone in react and node

[jira_clone](https://github.com/oldboyxx/jira_clone)

![](https://cdn.beekka.com/blogimg/asset/202001/bg2020012901.jpg)

使用 React + Node.js 写的项目管理工具 Jira 的克隆。

## newton learning at lockdown story quote

1665 年 8 月，剑桥大学由于鼠疫传播而关闭，一个叫做艾萨克-牛顿的学生不得不回到乡下的老家，躲避瘟疫。

整整 18 个月，他与世隔绝，努力地读书和做实验，创造性地提出了一整套引力理论。人类的科学进展由于这个单一事件，从此彻底改变。

-- [《艰难时期的横向思考》](https://creativesamba.substack.com/p/lateral-thinking-during-troubled)

## ipad is a productivity failure quote

两天前，ZDNet 发表了新文章《认识 iPad：提高你生产力的 10 个应用》。这一类的科普文章，每周都会出现，这难道不是一件很奇怪的事情吗？

iPad 已经发布 10 年了，可是人们还必须看这种文章，说明大家还没找到办法，到底怎样才能在 iPad 上进行实际工作！

-- 《iPad 的失败》

## as a mobile developer working for android 4.4 forever quote theory

我意识到，无论谷歌发布多么新的、文档完善的、功能强大的新 API，我们余生都将为安卓 4.4 编写代码。

-- [HN 读者](https://news.ycombinator.com/item?id=22153034)  回答提问《作为手机开发者，你有没有什么遗憾？》

---

On the iOS side, I regret not knowing how horrible Xcode is and how horrible Apple's documentation is. On the Android side, I regret not realizing that no matter what kind of slick new well documented APIs Google releases we will all be writing code for Android 4.4 for the rest of our lives. Also, I wish I knew mobile developers are some of the lowest paid developers other than game industry peons.

## opensource sketchy whiteboard web app

[Excalidraw](https://excalidraw.com/)

![](https://www.wangbase.com/blogimg/asset/202003/bg2020032106.jpg)

一个非常简单易用的白板绘图开源工具。

## react component generator web app

[react-visual-editor](https://github.com/anye931123/react-visual-editor)

![](https://www.wangbase.com/blogimg/asset/202003/bg2020032603.jpg)

React 的组件可视化拖拽页面编辑与代码生成工具，让不会 React 技术栈的人员可以通过拖拽生成页面。（@[anye931123](https://github.com/ruanyf/weekly/issues/1145)  投稿）

## github chinese repos ranking library

[GitHub 中文项目排行榜](https://github.com/kon9chunkit/GitHub-Chinese-Top-Charts)

这个仓库收集 GitHub 上面国人的中文项目的 Star 排行。（@[9527q](https://github.com/ruanyf/weekly/issues/1135)  投稿）

## the greatest factor of programming efficiency quote

影响编程效率最大的因素，不是使用何种编程语言，而是昨晚你的睡眠是否充足。

-- [《我的软件工程信念》](https://blog.wesleyac.com/posts/engineering-beliefs)

## behind the poor web app support quote

手机操作系统不愿意全力支持 Web App ，是故意的。因为他们要通过应用商店赚钱，让应用只能通过应用商店安装，就可以保证获得庞大的收入。

-- [HN 读者](https://news.ycombinator.com/item?id=22185250)

## letter to a fresh programmer story theory

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

### Run a marathon, not a sprint.

The road to becoming a good software engineer is a long one. **Don't rush on stuff**, and don't give up just because you are not getting an easy and fast win. Take your time to learn and become good in the topics you are interested in. Remember that this is a marathon, not a sprint.

### Be humble, not stupid.

It is good -- sorry, it is **fundamental** -- to be humble. There is always something to learn from others, even when you are an experienced professional. But this doesn't mean that everyone is better than you. You have to **respect yourself and your skills**. When you don't respect yourself you become stupid, not humble.

### Compare with yourself, not others.

There is no point in comparing yourself with others. There will always be someone better than you in your job. And there will always be someone better than the one that is better than you. And there will... ok, you got the point. **Just do your best**. If you think someone is a better engineer than you are, learn from him/her. Keep doing your best, and eventually, you will be a reference for someone else.

### Respect people, not titles.

During your career, you will work with exceptional professional. Most important, you will meet exceptional human beings. **Respect people for who they are**, not for the title they have. If `foo` is "Principal Senior Lead Engineering Chief Architect" doesn't mean that he deserves more respect than `bar` that is a junior software developer.

### Choose the challenge, not comfort.

The road will be full of crossroads. There may be multiple choices, but everything boils down to a choice between your comfort zone, or go outside your comfort zone. There may be a moment in your life -- hopefully after decades of work -- when you will feel the need to cool down a bit because you will be satisfied with what you achieved. Until that moment, try to go out of your comfort zone. It will make you a better professional and you will feel more satisfied with your career. Remember that **the best things often happen outside the comfort zone**.

### Jump on the whiteboard, not on the keyboard.

When you have to design a new feature or a new system, don't jump on the keyboard to start coding. The "muscle" you have to train and use as an engineer is your brain, not your fingers. **Always think before act**. For this reason, jump on the whiteboard instead of the keyboard, and start thinking of what you should implement. Better if you have a sparring partner to challenge your thoughts. Oh, when I say "the whiteboard" I mean "every object that can help you think", be it pen and paper, a notebook application, [draw.io](https://app.diagrams.net/), etc.

### Deliver value, not code.

Please don't be affected by the [NIH syndrome](https://en.wikipedia.org/wiki/Not_invented_here). There is no point in reinventing the wheel. **Avoid wasting time in something that is already out there**. If you can achieve your goal simply glueing together some tools, just do it. What you should deliver as a software engineer is value to your business, not lines of code.

### Choose life, not work.

In the IT field, it is easy to focus too much on work. After all, for most of us, it is not just a job, it is passion. Remember that **work is important, but life is more**. Live a meaningful and rich life. Play sports, read books, find hobbies, travel and see the beautiful world we are living in. Hangout with friends, find a partner for your life and give to your partner all the love, attention, and support that you can. You'll be surprised how much having a rich life will improve you as a professional.

That's all I can tell you right now. I still have a lot to learn.

One last thing: **enjoy the ride**! 🚀

With love,

(a more experienced) You.

## to be deep is to be silent quote

浅水是喧哗的，深水是沉默的。（Shallow water is roaring, deep water is silent.）

-- 雪莱

## animals into online meeting story

[动物参加视频会议](https://www.sweetfarm.org/goat-2-meeting)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041802.jpg)

疫情期间，视频会议变得非常流行。美国加州的一个农场，推出了一项服务，让农场的动物参加视频会议。会议进行时，一个动物会加入直播，仿佛是会议的一个参加者。

这项服务是有偿的，所有收费用来资助农场的运作。用户最低交纳 65 美元，并发送会议的时间和链接，就可以让一个动物远程出席 20 分钟会议。目前，可选的动物主要是山羊，以后可能会有其他动物。农场特别声明，不保证山羊有很好的开会状态，它在睡觉也是有可能的。

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041804.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041803.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020041805.jpg)

## kids phone os elegant ui design story

[儿童手机系统](https://techless.com/news-posts/kid-safe-smartphone-launch)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020043004.jpg)

![](https://www.wangbase.com/blogimg/asset/202004/bg2020043005.jpg)

美国一家创业公司推出儿童的手机操作系统 KidOS，只能用来打电话、发短信和拍照，不能上网和看视频，其他还包括一些小工具，比如时钟和计算器。

它基于安卓系统，可以在现有的安卓手机上安装。界面相当简洁，连图标都没有，看上去让人感到很清爽。

## finland morden single page frontend web app dev in react and node guide

[深入浅出现代 Web 编程](https://fullstackopen.com/zh/)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020050207.jpg)

一个芬兰的全栈公开课的中文版。（@[RichardStark](https://github.com/ruanyf/weekly/issues/1214)  投稿）

## why we university theory

[为什么读大学？](https://amgreatness.com/2020/04/29/the-long-decline-of-american-higher-education-has-begun/)

美国经济学家布莱恩-卡普兰（Bryan Caplan）写过一本书，研究人们为什么想读大学。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020050202.jpg)

他发现，读大学出于三个动机。

1）想学习一些东西，无论是培养自己的世界观还是发展实践技能。

2）想结识聪明人，与他们成为朋友。

3）想向雇主表明自己足够聪明，有能力完成工作。

这也可以说是大学的三个功能，很难完全分开：大学无法只提供其中一种，不提供剩下两种。即使你只想获取其中一种好处，也必须完整地读完大学。

这三种动机之中，最强的动机其实是第三种，因为它的效果最明显。第一种动机的困难在于，你多学习一倍的新技能（比如获得第二学位），也无法获得多一倍的工资。事实上，多修大学课程带来的工资增长，到了一定程度后就不明显了。

所以，为了促进招生，大学应该想方设法加强第三种动机，使得优秀学生更容易被雇主识别。

举例来说，百分制的考试评分就比 ABCD 的四等级评分更好，因为更容易突出优秀学生。另外，提高毕业难度，使得一部分学生无法拿到学位，其实也有利于多招生。

## how you recognize phone num is what your mother lang is quote

你用哪种语言记忆电话号码，那种语言就是你的母语。

-- 推特用户

## the greatest conflict between science and business quote

科学要求可复制性，其他人可以复制你的结果。业务不行，要求不可复制性，其他人最好不能复制你的业务。

-- [《商业与科学相结合的艺术》](https://www.younglingfeynman.com/essays/artofbusiness)

## the opportunity nowadays is the software and self media lever view theory

美国风险投资家 Naval Ravikant 有一个很有名的长推特，一共 40 条，题目叫做[《如何致富，不靠运气》](https://threadreaderapp.com/thread/1002103360646823936.html)，谈了他的商业观。

和菜头翻译过[中文版](https://new.qq.com/omn/20200413/20200413A0U72C00.html)。另外，Naval Ravikant 后来还有一篇[长文](https://nav.al/rich)，详细解释这些观点。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051404.jpg)

他认为，致富其实只需要两步。

第一步：找到"个人-市场-产品"这三者交叉的那个定位。  你问问自己，你的竞争力在哪里？市场需要的哪一种产品，可以用到你的这种竞争力？这就是你的定位。

第二步：使用各种杠杆（leverage），使得你的产品可以服务尽可能大的市场。

只要做到上面这二步，就会赚到大钱。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051405.jpg)

我觉得，他总结得很精辟。赚大钱的奥秘就是定位和杠杆这两件事。当市场需要你的产品时，如果有办法"放大"产品，服务更多的人，你就成功了。

Naval Ravikant 说，传统的杠杆是劳动力和资本。通过雇佣更多的员工和借贷更多的钱，把业务放大。但是，  互联网时代，新的杠杆出现了，那就是软件和自媒体。

只要服务器开着，软件（包括网站和 App）就能帮你开展业务，服务更多的人。媒体杠杆更简单，只要写文章、拍视频、录播客，放到网上就可以了。只要别人看到这些内容，就等于帮你放大了业务。

这两种新杠杆，成本更低，限制条件更少（不需要大量雇人，也不需要跟银行打交道），因此是更好的杠杆。如果你把四种杠杆结合起来，就能发挥最大的威力。事实上，那些互联网巨头都是这四种杠杆的结合，难怪它们都赚到了大钱。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051406.jpg)

在我看来，这个周刊也是一种杠杆。一方面，我通过周刊，把自己的想法、看到的东西，传递出去，接触到更多的人；另一方面，周刊反过来督促我每周大量的阅读，去找到能帮到我的技术、创意、趋势和故事。

从某个角度看，人生的成就其实取决于你能影响到多少人。祝愿大家都能找到自己的人生杠杆。

(the original tweet)

How to Get Rich (without getting lucky):

Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.

Understand that ethical wealth creation is possible. If you secretly despise wealth, it will elude you.

Ignore people playing status games. They gain status by attacking people playing wealth creation games.

You're not going to get rich renting out your time. You must own equity - a piece of a business - to gain your financial freedom.

You will get rich by giving society what it wants but does not yet know how to get. At scale.

Pick an industry where you can play long term games with long term people.

The Internet has massively broadened the possible space of careers. Most people haven't figured this out yet.

Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.

Pick business partners with high intelligence, energy, and, above all, integrity.

Don't partner with cynics and pessimists. Their beliefs are self-fulfilling.

---

(-> naval.md)

## old triangle functions history

[澳大利亚研究人员](https://www.distractify.com/omg/2017/08/28/13BnNP/babylonian-stone-tablet)发现一块 3700 年前的巴比伦石碑上，镌刻的主题是三角函数！这使得巴比伦人研究三角函数的历史，比古希腊人早了 1500 年。

![](https://www.wangbase.com/blogimg/asset/202002/bg2020021402.jpg)

![](https://www.wangbase.com/blogimg/asset/202002/bg2020021401.jpg)

## writing is good while meeting is bad quote

会议有利于性格外向的人，尤其是那些说话大声并且不需要时间思考问题的人，不利于那些性格内向的人。这是不公平的，但很少被提出。

-- [《为什么在远程工作中写作很重要？》](http://www.timcasasola.com/blog/writing)

## donald trump web 404 design "as lost as biden" story

[特朗普竞选连任的官网](https://www.donaldjtrump.com/404)，404 页面是对手拜登的照片，说明文字是拜登在说"看来你跟我一样没找到方向"。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051501.jpg)

## god save restaurants story

[脸书老板扎克伯格](https://tech.sina.cn/i/gj/2020-05-15/detail-iirczymk1700312.d.html)向经常去的硅谷 8 家餐厅，每家捐款 10 万美元，条件是不得因为疫情而倒闭。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051602.jpg)

## leetcode first 300 problems solutions library

[leetcode 前 300 题](https://leetcode.wang/)

Leetcode 前 300 题，每道都进行了详细通俗的分析，并且提供多种思路解法。（@[wind-liang](https://github.com/ruanyf/weekly/issues/1230)  投稿）

## the philosophical razor quote theory

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

## peace of life iyashikei art style theory

[治愈系](https://screentherapyblog.wordpress.com/2018/03/13/iyashikei/)

日本有一个艺术流派"医し系"（Iyashikei），中文可以称为"治愈系"。日语中，"Iyashi"的意思是舒缓、安慰、安慰、治疗，"kei"的意思是风格。

该流派主要见于动漫和游戏，目的是对观众产生治愈或抚慰作用。这类作品通常不涉及现实冲突，而是强调自然和生活的乐趣。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051702.jpg)

从吉卜力工作室的经典电影，到专门讲述开朗真诚的普通人日常活动的电视剧，日本的艺术作品越来越注重这种风格。

这类作品非常强调大自然和童年。特别是关于童年的夏季，主人公捉虫、钓鱼、参加节日，与家人野餐，当然还包括去海滩旅行。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051703.jpg)

有时，治愈系游戏里面，什么也没有发生。游戏角色只是收集了很多有趣的东西，也没有太多需要克服的困难。取而代之的是，每次回到游戏，玩家都会很高兴来到一个更明亮、更友好、更阳光的世界。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051705.jpg)

在手机上，治愈系的游戏也越来越多，可以为用户提供一些平静的感受。有一个游戏就是喂养一群猫，让它们吃东西，给它们玩具（下图）。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020051706.jpg)

治愈系的游戏，之所以有治愈作用，是因为它们可以帮助我们珍惜日常生活中的普通事物。它们的故事中可能会发生一些神奇的事情，但是最终它们提醒我们，在草丛中，夏日的微风中，安静的阳台上，与新朋友的交谈中以及与家人的餐桌上，都是非常美好的时间，值得珍惜。

## the value of podcast view

Spotify 最近购买了乔-罗根（Joe Rogan）播客节目的独家播放权，价格据说达到了[一亿美元](https://nymag.com/intelligencer/2020/05/why-did-spotify-pay-so-much-for-joe-rogans-podcast.html)。

"播客"是 podcast 的中文音译，指的是谈话类的互联网音频节目，主要供用户收听。乔-罗根的节目是美国最有影响力的播客之一，每期采访一个来宾，两人坐着谈话，单期的收听超过 1000 万人次。

播客的制作成本非常低，说话能有多少成本？一亿美元的天价前所未有，很难想象一个互联网谈话节目，值这么多钱。

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052701.jpg)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052301.jpg)

这件事的启示就是，我们可能远远低估了播客的潜力。它是一种传播力很强的媒体，属于还没被充分认识的金矿。

相比其他媒体，播客最大的特点就是，你一个人收听（尤其戴着耳机）时，主持人就是对着你的耳朵在讲述，属于跟受众物理距离最近的媒体。  现实生活中，只有最亲近的朋友和亲人，才会一对一地跟你诉说。所以，播客很容易让听众产生亲切感，赢得长期的忠实订阅者。

这反过来也要求播客主持人必须非常真诚，否则就没有在耳边诉说的效果，反而容易产生反感。播客的另一个优势是走路、开车、躺着都能听，传播场合远远超过视频。

我觉得，播客可能是国内互联网的下一个热点。现在国内的热点是直播卖货，其实就是互联网版的电视购物，观众人数总是有限的，愿意看推销节目的人再多能有多少？精心制作的谈话节目会有多得多的听众。

有人会说，播客在国内不可行，因为国内对内容管理得很严格，谈话节目做不起来。但是反过来看，就是因为生产不足，国内听众对内容的需求特别大。以前，《读者》杂志一期可以发行 1000 万份，就说明这一点了。目前，国内好的谈话节目寥寥无几，这是不正常的，我们有 14 亿人口。播客有很多方面可以谈，一定有大量听众追着听，比如男女关系、生活感悟、家庭生活、球赛、电影、财经（或房地产/股票/彩票）分析等等。

不过，也不是每个人都能做播客。谈话节目对主持人的要求特别高，必须有亲切感和人生阅历，说话还要流利、通俗易懂、有吸引力和感染力。现在占据网络直播台的少男少女，都做不了播客。

## basic income experiment story

[基本收入实验](https://www.yahoo.com/entertainment/twitter-jack-dorsey-giving-andrew-090025479.html)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052115.jpg)

推特公司 CEO、亿万富翁杰克-多尔西（Jack Dorsey，上图）最近向杨安泽捐款 500 万美元，要求用这些钱进行"基本收入"的实验。所谓"基本收入"，是杨安泽参加去年美国总统民主党初选时的主张，他希望向每个美国成年公民每月无条件发放 1000 美元。这个主张在美国引起了巨大反响。

杰克-多尔西说，基本收入是一件"早就该做的事情"，"我们改变政策的唯一方法是通过试验，提供它的有效案例。" 杨安泽表示，这些钱将立刻无条件发掉，以每人 250 美元的小额现金赠款的形式，送给因 Covid-19 失业或遭受损失的 2 万个人。

## the limit of dmca open source story theory

[盗版工具是否有版权？](https://torrentfreak.com/github-reinstates-popcorn-time-code-despite-mpa-threat-200520/)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052408.jpg)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052409.jpg)

开源软件["爆米花时间"](https://github.com/popcorn-official/popcorn-desktop)（Popcorn Time）是一个 BT 下载客户端，集成了媒体播放器，可以一边下载一边观看。毋庸讳言，它的主要用途是观看盗版的电影和电视剧。

最近，美国电影协会 MPA 向 GitHub 发了一个 DMCA 通知，声称该软件侵害版权，必须立刻下架，GitHub 就将源码下架了。大多数情况下，这就是故事的结局，但"爆米花时间"不接受这个结局，提交了 DMCA 反通知，认为 MPA 的请求不合法，因为该源码不侵犯 MPA 版权，"该代码是我们 100％的劳动成果，不包含任何版权材料，请再次检查，" 开发人员写道。结果，GitHub 恢复了源码的访问权限。

现在还不清楚，美国电影协会将如何反应。这里的问题就是，如果代码不直接侵犯版权，也不直接链接到侵犯版权的材料，而是被用作侵犯版权的用途，那么 DMCA 通是否适用？这些代码是否可以自由传播？

## freedom and peace without web frameworks story theory

[为什么我不用框架？](https://tinyprojects.dev/posts/tiny_websites_are_great)

现在，开发者不再使用普通的 HTML、CSS 和 JS 编写网页，而是使用各种各样的框架，来构建越来越复杂的 Web 和移动应用。

框架的问题在于，你会与自己编写的代码越来越失去联系。举例来说，我使用 Ionic 框架做了一个按钮，它是精心设计的，很美观，但是它还附加了 10 个我不太了解的 CSS 类。有时，我觉得我写出的这些代码，并不是真的是"我写的"。

因此，我决定回到原始技术，不使用框架，手写一个自己的小型网站。这是十多年以来，我第一个没有用到框架的网站。

不使用框架让人耳目一新。我写出了一个简化的加载超快速的网站。网站的每个部分都是我写的。我可以随意调整它，修改很容易。因为使用的技术很简单，所以不会有复杂的样式问题，你不必为不同设备上产生不同的外观而烦恼了。

我感觉，自己从框架中得到了解放，整个开发过程重新变得有趣。

---

### Tiny websites are great

_May 18th 2020_

One of the earliest websites I created was a phishing website to steal World of Warcraft usernames and passwords. Although not the most noble pursuit for a first website, I felt like a pretty cool 12 year old when I managed to successfully nab my friend's login details, and then proceed to send him a screenshot of his character waving back at him. It was fun.

Like many, coding websites started out as a hobby, and after many years plus a CS degree has become a way I can make some income. It's pretty great on the whole.

Things have really changed since I began learning, and rightly so. Instead of coding in plain HTML, CSS and JS, I'm now using endless frameworks, modules and libraries to build increasingly more complex web and mobile applications. It's great, if I didn't use these tools my code would be an unmaintainable mess.

But, its also not great.

During my time using frameworks I've become more and more out of touch with the code I'm writing. For example, when I plonk down a button in the Ionic Framework I get a beautifully engineered and designed button, but it also has 10 CSS classes attached to it that I don't really understand. I sometimes feel like the thing I've created isn't truly "mine".

I therefore decided to go back to the basics and code my own tiny website. I already knew how to go about it, you probably do too, it's really easy (if you don't know [here's how](https://tinyprojects.dev/guides/tiny_website)). However, I'd never actually done it, and I'd not made a website without a framework in over a decade.

Boy, did it feel refreshing to not use a framework.

The result is a stripped-back, ultrafast website like the one you see here. Every part of the website is mine. I can tweak & tune it however I want. Pushing out content is easy because I'm not distracted by styling or how it looks on different devices - I just don't really care and it's liberating. It's also just incredibly fun to build.

I have 3 rules for a tiny website:

1. No libraries or frameworks (the exception being analytics)
2. As few CSS tweaks as possible
3. It must be fun to build

This is not groundbreaking stuff, but I urge you to try and make one yourself. Use it to write, experiment, journal, blog, or whatever floats your boat. It's your little corner of the internet to do as you please with.

I make [tiny projects](https://tinyprojects.dev/) each week.

## difference between libraries and frameworks quote

库和框架的一个区别是，一次可以使用多个库，但是框架一次只能使用一个。

这就是为什么我不使用框架的原因。一旦用了一个框架，就无法再用另一个框架了，移植的成本太高了。使用库就没有这个问题。

-- 《多用库，少用框架》

https://news.ycombinator.com/item?id=23122805

## sketchy whiteboard web app design

[Excalidraw](https://excalidraw.com/)

![](https://www.wangbase.com/blogimg/asset/202005/bg2020052901.jpg)

流程图工具 Excalidraw 可以做出上图这样的图示效果，可惜中文没有手写效果。如果一定要加，需要自己克隆代码，再安装中文字体。

## the real liberty of words in america quote

美国宪法第一修正案保障言论自由，但是只适用于政府机关（不得限制言论），不适用于私人公司。

私人公司可以审查其平台上的内容。所以，即使在美国，媒体平台删除你的言论也是合法的。

-- [《美国法院判决，Youtube 审查用户上传的内容合法》](https://www.swissinfo.ch/chi/afp/%E7%A7%81%E4%BA%BA%E7%BD%91%E8%B7%AF%E4%B8%8D%E5%8F%97%E8%A8%80%E8%AE%BA%E8%87%AA%E7%94%B1%E9%99%90%E5%88%B6-%E6%B3%95%E5%AE%98%E8%A3%81%E8%83%BD%E5%AE%A1%E6%9F%A5%E5%86%85%E5%AE%B9/45582646)

## donald trump clone experiment story

[模仿特朗普的实验](https://www.businessinsider.com/twitter-donald-trump-suspendthepres-experiment-policies-suspension-glorifying-violence-2020-6)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020060505.jpg)

一个推特用户做了一个实验，注册了一个帐号，特拉普发什么推特，他就发一样的内容，不是转发，而是原文复制，除此以外不发其他内容。

结果，推特官方三天就注意到了他，关闭帐号 12 小时，要求他在这段时间内删除违规言论。同样的话，特朗普可以说，你说就不行。媒体报道这件事以后，推特恢复了这个账号，并说关闭帐号是一个"失误"。

## father in xbox moving story

2、[Xbox 里面的父亲](https://www.facebook.com/Coyoter.Huang/posts/10216945532563571)

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

## return of a sea turtle moving story

[海龟回家](https://www.abc.net.au/news/2020-03-07/yoshi-turtle-journey-tracked-37000km-from-cape-town-to-australia/12024088)

![](https://www.wangbase.com/blogimg/asset/202003/bg2020030803.jpg)

两年前，南非一家水族馆放生了一只 180 公斤的大海龟，它已经在水族馆生活了 20 年。科学家在海龟身上安装了卫星追踪装置，看它去了哪里。

它先去了非洲西部，然后调头横渡印度洋，用了两年时间游到了澳大利亚。总行程 37000 公里，平均每天前进 50 公里，这是相当快的速度，应该借助了洋流。科学家认为，这只海龟是想回到她出生的地方，进行繁殖和筑巢。在被关了 20 年之后，她依然记得回家的路。

![](https://www.wangbase.com/blogimg/asset/202003/bg2020030804.jpg)

## marketing with popular tv show theory

[宜家公司](https://twitter.com/mkobach/status/1133798525739970560)利用热门电视剧的场景装潢，展示他们的家具产品。

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061105.jpg)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061106.jpg)

## google testing program comments advice theory

[何时写注释？](https://testing.googleblog.com/2017/07/code-health-to-comment-or-not-to-comment.html)（英文）

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061306.jpg)

谷歌的厕所里面贴的是各种编程知识，这篇就是谷歌的"厕所文"之一，谈什么时候应该写注释，并提供海报下载。

## adobe art camera app

[Photoshop Camera](https://www.adobe.com/products/photoshop-camera.html)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061307.jpg)

Adobe 公司推出的手机拍照软件，只要按下快门，就可以拍出具有艺术风格的照片。它的艺术风格不是来自滤镜，而且来自其他人拍的艺术照或明星照，通过 AI 套用在当前场景。

## elegant react component system design

[Chakra UI](https://chakra-ui.com/)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061414.jpg)

一个 React 组件库，UI 很优雅。

## math symbols meaning library

[Mathematical Symbols](https://mathvault.ca/hub/higher-math/math-symbols)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020061415.jpg)

这个网页列出各种数学符号的含义。

## why figma web app wins theory

[为什么 Figma 赢得市场](https://kwokchain.com/2020/06/19/why-figma-wins/)（英文）

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062108.jpg)

Figma 是一个新兴的设计师工具，正在快速流行起来。本文分析它到底有何功能和特点，能够战胜 Sketch 和 Adobe 这样的强劲对手。

---

### Why Figma Wins

[Kevin](https://kwokchain.com/author/admin/ "Posts by Kevin") [company memos](https://kwokchain.com/category/company-memos/) June 19, 2020

Companies are a sequencing of loops. While it's possible to stumble into an initial core loop that works, the companies that are successful in the long term are the ones that can repeatedly find the next loop. However, this evolution is poorly understood relative to its existential impact on a company's trajectory. [Figma](http://figma.com/) is a prime example of sequencing loops. They're now widely viewed as successful, but the key factors in their success and what bets they must make to get to the next level are less widely understood.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/loops-2.gif?resize=800%2C559&ssl=1)

The core insight of Figma is that design is larger than just designers. Design is all of the conversations between designers and PMs about what to build. It is the mocks and prototypes and the feedback on them. It is the handoff of specs and assets to engineers and how easy it is for them to implement them. Building for this entire process doesn't take away the importance of designers---it gives them a seat at the table for the core decisions a company makes.

Building for everyone in the design process and not *just* designers is also the foundation of Figma's core loop, which drives their growth and compounding scale. That network effect is made possible by Figma's key early choices like:

- Architecting Figma to be truly browser-first, instead of just having storage be in the cloud
- Their head start in new technologies like WebGL and CRDTs that made this browser-first approach possible
- Focusing on a product purpose built for those designing vector based digital products

Figma's compounding growth is not only due to product market fit, but is also driven by the alignment between their product and distribution. There are limits to Figma's success if it remains only valued and spread within companies. In order to break through that asymptote, Figma must build a global network effect across the ecosystem. Figma's value to new users should compound as Figma's adoption grows, even for solo users outside of organizations. Figma has begun making its bets on how it will become a platform---namely centered around communities and plugins. While it's still early, these bets can be unpacked and understood.

Many companies are now at this inflection point. They have found success with their core product and are trying to push themselves to the next level of value to customers and scale. Our understanding of building platforms and sequencing towards them is still nascent. From how to shift the allocation of resources between a company's core business and its potential future expansions to how to structure a platform to catalyze its growth and more. Until the playbook is well understood, it is more art than science. There are many decisions to make, including which layers should be centralized, whether the ecosystem should be driven by open source contributors or profit-seeking enterprises, how broad in scope to allow the ecosystem to grow and where to not let it grow, and more.

Whether they can catalyze compounding productivity in design is a core question for the coming years. Engineering is one field that has exhibited significant compounding progress over time. Whether Figma's bets in building out global network effects will be able to push this level of progress in design will be an important question to watch.

### The Arc of Collaboration

When Figma first launched, its value proposition was primarily around making design collaborative. If design could happen in the browser, then designers could work together on the same projects. In fact, they could even work on a design at the same time.

In 2014 as I helped diligence Figma *(disclaimer: I worked on Greylock's investment in Figma, but I don't have a personal stake in Figma. sadly.)*, I used to sit with designers at startups and watch them work. The top right corner of their screens were always a nonstop cycle of Dropbox notifications. Because design teams saved all their files in a shared folder like Dropbox, every time a coworker made a revision they would get a notification. And often there were complex naming conventions to make sure that people were using the right versions.

Figma solved this problem. Designs in Figma are not just stored in the cloud; they are edited in the cloud, too. This means that Figma users are always working on the same design. With Dropbox, this isn't true. The files may be stored in the cloud, but the editing happens locally---imagine the difference between sharing Word files in Dropbox vs. editing in Google Docs.

Any time a user edits a design, they are in effect checking out a temporary copy. This is why two users editing a file simultaneously creates issues. When designs are edited with Figma, there are no conflicts. And since revisions are a first party feature of each design in Figma, there's no need to have complex files with names like "profile_design_v23_final_draft2". Similarly, designers can comment directly in each other's files, instead of sending emails with feedback.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/01.1-merged.png?resize=800%2C280&ssl=1)

I used to be confused by the Figma's team consistent framing of Figma as browser-first. What was the distinction between this and cloud-first? Over time I've come to see how important this distinction has been. When many creative tools companies talk about the cloud, they seem to view it as an amorphous place that they store files. But the fundamental user experience of creating in their products is done via a standalone app on the desktop. Figma is browser-first, which was made possible (and more importantly performant) by their understanding and usage of new technologies like WebGL, Operational Transforms, and CRDTs.

From a user's perspective, there are no files and no syncing that needs to be done with others editing a design. The actual _experience_ of designing in Figma is native to the internet. Even today, competitors often talk about cloud, but are torn over how _much_ of the experience to port over to the internet. Hint: "all of it" is the correct answer that they all eventually will converge on.

Designers loved Figma and this drew initial distribution. And with features like team libraries, designers have incentive to pull in other designers on their team into Figma. But a tool designers love, while a prerequisite for success, does not fully capture the root of Figma's traction so far. While Figma has been building the ideal tool for designers, they've actually built something more important: a way for non-designers to be involved in the design process.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/01.3-merged.png?resize=800%2C280&ssl=1)

### Tools for Design, not just Designers

While Figma was building better tools for designers, their browser-first approach had a much more radical and significant impact on non-designers.

We often forget that the purpose of the tools we use at work isn't to increase our individual productivity, but the entire team's productivity. Companies themselves often forget this.

The best tool for individuals may *also* be the best for the entire team. But it's the latter that matters. And beyond some level of enhancing individual productivity, it's the team aspects that increasingly matter. Word processing is a good example of this. There used to be lots of experimentation and customization around individual features like typesetting. But once this was good enough, the focus has shifted towards collaboration. And for most use cases, few care about typesetting today. Increasingly our tools must understand and align with how we collaborate. This was less important when collaboration was logistically difficult and prohibitively costly, but as collaboration becomes easier its importance has risen. People's work is less siloed---and their tools must reflect this.

The best tools enable collaboration that was previously unthinkable.

Historically it has been very difficult for non-designers to be involved _during_ the design process. If PMs, engineers, or even the CEO wanted to be involved, there were many logistical frictions. If they wanted the full designs, the designer would need to send them the current file. They'd then need to not only download it, but also make sure they had the right Adobe product or Sketch installed on their computer---costly tools that were hard to justify for those who didn't design regularly. And these tools were large, slow, specialized programs that were unwieldy for those not familiar with using them. It was hard to navigate a project without a designer to walk you through it. Comments were done out of band in separate emails. Even worse, if a designer made an update before viewers had finished looking at the file, the file would be out of date---without the viewer being aware.

The experience was just as bad for designers. Even if they wanted their PMs and engineers to give feedback, they'd need to handhold them through the process. Designers would have to export the designs into images, send the screenshot, and later figure out how to translate the feedback into changes in the actual design. The feedback loop was so slow that they'd need to pause their process while waiting for feedback.

Of course, what really happened is that most of the time non-designers just didn't engage as much with the design process. The pain of reviewing designs wasn't the primary problem, but there was enough friction that reviewing often never happened.

Figma fixed this.

Sharing designs with Figma is as easy as sending a link. Anyone can open it directly in their browser. It's as easy as going to a website, because...well...it literally is going to a website.

Once they have the link, non-designers will always have the latest design. They can comment directly in the designs, without disrupting the flow of designers. And with collaborative editing, they can talk through changes in a meeting and watch as they are implemented in real time.

These technical changes are kindling for a far more important social norm shift. Figma makes it possible for non-designers to be part of the process earlier and throughout it all.

Figma made companies realize that non-designers should and could be more involved in the design process and how crazy it is that other design tools aren't built with the experience of and interactions with non-designers in mind.

### Tightening the Feedback Loop

Figma allows closer collaboration between designers and non-designers, but the second order impact of this on the social norms of teams is far more impactful. Historically, there has been so much friction in the design process that design is brought in *after* most decisions have been made. And conversely, there is a limited set of changes non-designers can push for once the design is set.\
Tightening the feedback loop of collaboration allows for non-linear returns on the process. Design can be drafted *simultaneously* with the product, allowing feedback to flow in both directions throughout the process. Aligning the assets used by design and engineering allow more seamless handoffs, and allows for more lossless and iterative exchange.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image.png?resize=800%2C280&ssl=1)

Designers can get feedback continuously from engineers or PMs on their team. Some will have sensitivities about non-designers sticking their nose too deep into the design process. In some cases they might be right, but this cost pales in comparison to the benefit to designers.

Bringing non-designers into the process is what gives designers a seat at the table of product and business decisions.

For too long we've systematically siloed functional areas like design, sales, and customer service. But modern companies are internalizing that if their core loops are truly an iterative process, then functions like design must themselves be part of the feedback loop of the company. Design decisions cannot be entirely abstracted from the rest of a business---they are as intertwined as the decisions made in product and engineering.

Historically, design has been opaque as a business unit due to the logistical and technical difficulties of making the design process legible to others. But as these hurdles are increasingly solved by companies like Figma, we're seeing teams navigate how to best integrate design with the rest of a company's processes. This should be no surprise, as we have seen the same arc play out in engineering over the last few decades.

### Means of Ascent

Much of Figma's current success is driven by its ability to spread within companies. Figma becomes more useful as more people within a company use it, driving advantaged speed and scale of penetration within companies.

Figma was quick to recognize that the constraints on design at companies is often not a problem of pixels, but of people.

Many of Figma's competitors are great tools for designers. But that's who they are for---designers.

Figma is a tool for teams to design. Not for designers alone.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/04.1-means-of-ascent-merged.png?resize=800%2C280&ssl=1)

By bringing both designers and non-designers alike into Figma, they create a cross-side network effect. In a direct network effect, a homogenous group gets more value from a product as more of them join. In contrast, a cross-side network effect involves two (or more) distinct groups that grow in size and value as the other group does, too.

Figma's cross-side network effect between designers and non-designers is one of the primary and under-appreciated sources of their compounding success over the last few years.

As more designers use Figma, they pull in the non-designers they work with. Similarly, as these non-designers use Figma, they encourage the other designers they work with to use Figma. It's a virtuous circle and a powerful compounding loop.

### Cross-side Network Effects

Cross-side network effects often get less attention than direct network effects---partially because our vocabulary around network effects is less robust than it should be, but primarily because they are typically viewed as being specific to marketplaces. While it's true that cross-side network effects are most commonly seen in marketplaces, it's wrong to think that they *only* exist in marketplaces. Supply and demand is the most famous of cross-side network effects, but not the sole source.

Figma's direct network effect among designers helped it grow early on, but has limits on its ability to help Figma spread. The set of designers that a designer works with directly is a limited set---and unlikely to change often. While they may spread it via word of mouth and social referral to many other designers, the network effect has an asymptote on distribution.

Figma's cross-side network effect offers an additional vector. Designers who use Figma share their designs with engineers and PMs, introducing them to Figma. As these non-designers learn to appreciate Figma, they then evangelize it to other teams of designers they work with on different projects. These cross-side network effects jump across teams and help Figma metastasize throughout entire organizations.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/05.1-cross-side-network-effects-merged.png?resize=800%2C280&ssl=1)

This impacts monetization and purchasing at companies. Paying for a new design tool because it has new features for designers may not be a top priority. But if product managers, engineers, or even the CEO herself think it matters for the business as a whole---that has much higher priority and pricing leverage.

### Product-Distribution Fit

It's this cross-side network effect that has most shaped Figma's growth. Like planting seeds, Figma can start small with a scattering of individuals using it at each company---but each of them can lead to serious expansion throughout their companies. Once Figma is adopted by a few designers, all their colleagues across departments get exposed to the product and especially its collaborative features and see how much better the experience is for them. They then encourage its usage and adoption across their other teams and projects and so on.

This is what gives Figma the compounding growth rate it has. While it took Figma some time to ramp up its growth, there is now a predictability and compounding that is impressive.

The core of Figma's product *is* the core of its distribution loop. That is incredibly rare and powerful. True alignment between product and core distribution loops is what's needed to catalyze outlier ability to compound in growth.

Like many of their peers in this generation of companies, Figma has developed a two-step sales motion: landing and expanding via a bottom-up, product-driven approach, then doing top-down sales once usage of the product has metastasized. Preparing for this entails a whole slew of enterprise features, building up the sales machine, and much more. Over the last few years Figma has begun to build these out, though there is still a lot of work for them to do here.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/06.2-product-distribution.png?resize=800%2C559&ssl=1)

This new type of enterprise companies is a mix of both product and growth-driven consumer and sales-driven enterprise. We are still early when it comes to companies understanding how to re-architect their org structure, GTM motion, pricing model, and more to best fit this model. And like SaaS before it, this bottom-up to top-down model will mature from art to science over the coming years. Though Figma has significant work to do to make their traditional enterprise sales process robust, it would be disappointing if they stopped at simply recreating the traditional enterprise sales process. Practitioners are starting to understand that these sales loops can be understood in the same way growth loops have been and that there are ways to drive significantly advantaged sales velocity and scale via product and ops. Figma is one of the companies on the frontier of this, and there is an entirely different series of essays to be written about the maturation of this nascent field.\*

### Building an Ecosystem

Where does Figma go next?

There is always more to improve in the core product. But there comes a time when companies need to start thinking about the next sequence of their growth.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-1.png?resize=800%2C559&ssl=1)

The competitive landscape has also matured. Competitors are beginning to copy and encroach on Figma's core strengths. As they converge on Figma's views on the space, they pressure Figma to push forward. Sketch, for example, has shifted its pricing model to subscription and oriented around teams and has focused on moving more of the product into Sketch Cloud. In the last year, they've gone from being entirely bootstrapped to raising a venture round from Benchmark. This capital and support has fueled a more aggressive move in Figma's direction with a strong focus on collaboration, especially bringing Sketch to the browser and building team collaboration.

Adobe has made similar moves. Though powerful and widely used, Photoshop and Illustrator were not particularly specialized products for designers of digital products. In 2019, they launched Adobe XD as a direct competitor to Sketch and Figma.

Figma has been focused for the last few years on its value and spread *within* companies. Figma's next challenge is to improve its value and spread *across* companies in the ecosystem at large.

### Global Network Effects

There are cross-side network effects that drive compounding value within companies using Figma. But how does it spread to new companies?

Given Figma's growth rate, it clearly does, but in less consciously compounding ways. Many people work across companies, especially agencies, and spread Figma to their clients. Similarly, when people leave their jobs and join new companies, they bring Figma with them. And of course, word of mouth helps spread it. These are all effective and amplified by Figma's intrinsic collaborative benefits, but they operate on their own natural cadence.

Thanks to Figma's hard work, the value in signing up is much higher for someone whose company already uses Figma. There are already teammates to collaborate with. There are assets and design libraries specific to their company. There are components that their team has built that they can reuse.

But for users who don't have co-workers using Figma, none of this value exists. They have the single-player benefits, but no direct increased value from the hard work Figma has done to add so many new users over the years.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/08.1-global-network-effects.png?resize=800%2C559&ssl=1)

Figma's challenge is to create not just local network effects within companies, but global network effects that make Figma more useful to all users as it grows in scale. There are many directions Figma could expand its scope\*, but our focus in this piece will be on the directions they have already begun to take.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-2.png?resize=801%2C280&ssl=1)

In 2019, Figma began to plant the seeds for what their ecosystem loops across companies will be. With their launch of Figma Plugins last August and Communities more recently, they are starting to push the frontier of collaboration and productivity across companies.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-3.png?resize=800%2C559&ssl=1)

### Empowering Creativity through Communities

Communities push their network orientation further by allowing users and companies to publicly share their designs.

Historically, when sharing designs on sites like Dribbble, it's often only the output image file that's shared. It's hard for others to see and use the full design themselves, including the layers and components that went into it. Even if the actual design is shared, the friction of opening it in whichever program and resolving any dependencies is non-trivial.

Sharing Figma designs removes this friction. Anyone can instantly open a design and start using it for their own projects. This enables users to frictionlessly become creators too, not just consumers.

Some designers have shared their UI kits, components, and design systems using Github. This has the right idea, but Github isn't meant for design. Forking a repo may be frictionless in engineering---but it is not for designs. The designs must still be downloaded and loaded into your app. For design, Github is more akin to a hosting site for downloading files. In many ways Figma's Communities are a reflection of Github's philosophy and intent, but built with design in mind. Duplicate a shared design, and a copy is instantly saved to your workspace and ready to be edited.

This frictionless process makes it easy for people to share and build upon each other's designs. But perhaps more importantly, including the entire design is a better abstraction layer that allows for new benefits.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-4.png?resize=800%2C280&ssl=1)

Instead of just receiving the final output, recipients can see both the underlying components and assets within a design as well as more complex interactions and animations around designs. A great example is [this design](https://www.figma.com/community/file/812143143597260055) shared by Figma's design director, Noah Levin, of smart animations within Figma. By sharing the entire design with the community, others can not just see the animations---but play with and tweak the actual designs and animations directly. This makes it easier for them to learn how to use smart animations, or even just copy parts of Levin's demo into their designs.

### The Promise of Plugins

I've been using Figma to create very niche memes to send friends. Figma is great, but as I've gotten more particular I've begun to add colored rectangles (with rounded corners because I'm not a barbarian) behind any text to make it more readable. This is a small but annoyingly rote series of tasks to do. Recently, I discovered the plugin [Substrate for Text](https://www.figma.com/community/plugin/739517744595900126) which simplifies this exact process. Now I can just select the text, activate the plugin and this text background gets auto-generated instantly. This plugin is made by a designer, [Andreslav Kozlov](https://www.figma.com/@Andreslav), who lives in Russia. On the other side of the world, Andreslav had felt the same problem I had, built a plugin to solve it, and shared it with the internet. And that improved the power of Figma for me, making it far easier for me to immediately spin up memes mid-conversation with friends.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/figma-meme.png?resize=800%2C544&ssl=1)

![](https://i2.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-5.png?fit=1024%2C513&ssl=1)

This is a small example of the promise of plugins. Figma's plugins make it extensible so designers can augment their workflows, be empowered with new abilities otherwise impossible, and easily share them with others.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-6.png?resize=800%2C559&ssl=1)

Most Figma plugins today simplify tasks that would otherwise be very repetitive or painstaking. Today, companies can build private plugins to address their specific needs. For example, companies have built plugins that automatically generate dark mode designs, pull in external data and lint for common design errors, or make it easy to generate design assets in the right orientation. These plugins level up their entire teams.

The real power of plugins, however, is in making them publicly available across the ecosystem. Plugins are collective progress available to all users. Whether creating [charts](https://www.figma.com/community/plugin/731451122947612104/Charts), [custom maps](https://www.figma.com/community/plugin/736458162635847353/Mapsicle), [pulling data into your designs](https://www.figma.com/community/plugin/731627216655469013/Content-Reel), [redlining for engineering handoff](https://www.figma.com/community/plugin/781354942292031141/Redlines), or [random blobs](https://www.figma.com/community/plugin/739208439270091369/Blobs), plugins leverage up designers' productivity. And plugins like [Figma Chat](https://www.figma.com/community/plugin/742073255743594050/Figma-Chat) show that the frontier can be pushed out even further by enabling entirely new abilities for designers.

As companies scale, it becomes harder to sustain consistently increasing value to customers. With more customers, it becomes harder for one company to address all the unique use cases and needs. Companies must also increasingly service less ideal customers as they expand beyond their core audience. This is especially true for users who don't have all the compounding benefits of working with a team that all use Figma.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-7.png?resize=800%2C559&ssl=1)

Plugins help Figma fight this drag. As they scale in users, more plugins will be created, making the product better for new users and spurring more designs to be created.

### Architecting a Platform

Companies like Sketch have shown the importance of a robust plugin ecosystem (and of course, Adobe before them has a long track record of encouraging plugins). It's impossible for a single company to build all the features and tools needed by each user. Platforms are needed most when the diversity and scale of use cases is larger than can be built---or often even understood---by the company. Sketch's plugins allow the value to Sketch customers to grow at a faster pace than Sketch can ship new features. Figma will also likely stay focused on a generalized and core set of features, leaving a huge surface area of user workflows for plugins to address.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-8.png?resize=800%2C559&ssl=1)

Companies are still early on in understanding the nuances of becoming platforms. More and more companies are reaching the scale and dynamic range where this is a priority, but for the most part, they are individually recreating the wheel. In a decade, there will be clear frameworks, metrics, and supporting ecosystems for building platforms; today there are few. This is a natural maturation, and one that all business models go through, such as SaaS and subscription over the last decade.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-10.png?resize=800%2C559&ssl=1)

Because of our lack of shared vocabulary around building platforms, it's hard for many to understand the subtle but important delineations between the approaches of different companies. It's easy to assume, for example, that all plugin systems are built the same, but this impulse is often incorrect.

### Sketch: a Case Study

Take Sketch's plugin ecosystem. The API is well documented and the plugin coverage is high. However, plugins are outside the scope of the core product. Users installing a plugin are most commonly directed to the Github page of the plugin, which they must manually download and install. This is another example of the gradients of what it means to put your product in the cloud. Even if Sketch is in the cloud, its plugins are local files. There is friction in downloading and installing them. This is compounded in a work setting as teams must manually make sure employees are using the same plugins if needed.

Because plugins are not first-class citizens in the Sketch product and handled out of its scope, plugin management is very decentralized. Plugins can register to be listed on Sketch's site and enable automatic updates, but otherwise Sketch is very hands-off. There is no official Sketch source for how popular a plugin is, nor do they have to approve plugins. Instead, users must rely on Github stars or reviews on third party sites. There is no oversight on plugins causing performance or stability issues.

This shouldn't be mistaken for criticism. The weaknesses in Sketch's plugin architecture show only because of how successful they have been at encouraging a robust community of plugins  around Sketch.

Platforms are emergent ecosystems, more akin to building a consumer social network than a traditional enterprise sales company. This is one of the core dilemmas of building platforms. They are complex organic systems that have to be carefully cultivated (gardening vs. engineering mindset) and it's hard to predict beforehand what direction they will go and the scale they will achieve.

Sketch cannot be faulted. To this day it's still unclear how ambitious plugins can and should be. By defaulting to a relative hands-off approach, they allowed the community to flourish unhindered by them. And it's by seeing Sketch's success with plugins, as well as their struggles, that others like Figma and Adobe XD have been able to have increased confidence in the importance, potential, and levers of a plugin ecosystem.

But while Sketch cannot be faulted, their choices have stunted the full potential of plugins built around them. Sketch understands this. They are rearchitecting their plugin system right now to be fully in the cloud, which is a necessary step in the right direction.

Complex systems do not absolve companies of their need to make clear choices about the architecture, policy, and norms of their platforms. If anything, they magnify its importance. The structural choices made by companies ripple forward as the ecosystem emerges around them. And the direction and scale of the resulting platform are a function of the physics set by their initial conditions. We shape our abstractions, and thereafter they shape us.

### Figma: Forming Foundations

Figma's plugins are very early, but promising. Natively built in and browser-first, when you click to install a plugin, it's available instantly. There's nothing to install after all, just access privileges to activate. That's magical.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-11.png?resize=800%2C560&ssl=1)

Like all good magic, the work to make this feel effortless is quite arduous. Figma's plugins must be secure, performant, and stable, especially since they are creating a plugin ecosystem for a browser-first system. Users should be able to trust that using plugins won't expose them to security risk or hurt Figma's performance. And both developers and users should feel confident that the APIs the plugins depend on won't be suddenly deprecated or broken. Without these preconditions, plugins will always be at best a small aspect of Figma. This trust and stability is the bedrock of a strong ecosystem.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-12.png?resize=800%2C559&ssl=1)

This difficulty is best seen in Figma's engineering blog posts on building their plugin system. Within a month of [their post](https://www.figma.com/blog/how-we-built-the-figma-plugin-system/) on how they decided the architecture for plugins, they [learned of vulnerabilities](https://www.figma.com/blog/an-update-on-plugin-security/) in their approach and had to switch it out.

Ensuring the platform can be trusted is not just a matter of technical architecture. Figma doesn't just host plugins, they also have a centralized [approval process](https://help.figma.com/hc/en-us/articles/360039958914-Plugin-Review-Guidelines), more similar to Apple's app store than to Sketch's approach. Plugins that want to be listed must pass Figma's policies around safety, business, usability, and legal.

### The Path to Platforms

The business policies are worth noting in particular. While safety, usability, and legal are about maintaining the integrity and trust of the platform, Figma's business policies are about shaping what they think the plugin ecosystem *should* look like. For example, they allow monetization but prefer plugins be accessible to all users. Choices like how much to encourage an ecosystem of plugin businesses vs. a more open source community are important ones. There is no obviously correct answer, and it can and often needs to change over the life of a platform. One need only look at the makeup of Uber drivers, WordPress plugins, or Airbnb hosts over time to see this.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-13.png?resize=800%2C559&ssl=1)

Building platforms requires many hard choices like these. How should you balance encouraging growth today and building towards the ideal long term vision? To what degree should platforms influence which plugins get built or even which they should build themselves in the early days? How should you decide which features actually should be part of the platform itself vs. standalone plugins? How wide is the scope for what plugins can build? These are only a few of the core questions.

Perhaps Figma's most interesting choice is the heavy focus on ease of plugin creation. Figma's plugin system is explicitly designed to turn designers into developers by enabling them to create plugins for their own workflows. In most platforms and marketplaces, the ecosystem tends to split and professionalize over time. This is the natural gravitational pull of ecosystems\*. To bet that a significant amount of the platform's leverage will come from individuals improving their own workflows is a bold one. It's a bet on induced demand, which is always the most interesting type of bet.

Figma's plugin ecosystem is very nascent. From their [list of supported features](https://www.figma.com/plugin-docs/whats-supported/) and what's to come, it's clear that there is still a long way to go to open up their platform to more advanced plugins. And choosing the right abstraction layers for the plugin ecosystem is crucial. So far they have adopted a very strong stance on what the core technical decisions and promises around safety, performance, and stability need to be, but have been very hands-off on what plugins are built. This is to be expected early on. When it's unclear what should be built, it's not a bad policy to see where the creativity of the community leads. It often brings really amazing stuff, like this [demo](https://twitter.com/eminsinani/status/1263883853283950592) of a plugin. Over time, however, we should expect to see more focus. Right now their [plugin page](https://www.figma.com/community/plugin/all) is unsorted other than popularity and some that are featured. This works when the number of plugins is low enough, but eventually they will have to decide how to categorize plugins and what they want discovery to look like.

As plugin categories begin to crystallize, Figma will need to form crisp views on which areas should be absorbed into their core product, what they want each category to look like as it matures, what essential plugins don't yet exist that they must help catalyze, and what new APIs they should allow plugins to address. The choice of how much to encourage monetization of the plugin ecosystem, as discussed above, is a perfect example of the kind of key decisions Figma will need to make (repeatedly) as they build out their plugin platform. Perhaps most importantly, Figma must decide the meta-framework by which to make these decisions intentionally rather than capriciously.

### Pushing Progress

Has design been improving? Are we getting better at designing, not as an art, but as a functional practice?

The answer is certainly yes. We have tools that would have been unfathomable a decade ago, much less pre-computer. It is easier to design. It is easier to begin designing. Design is more scalable.

But how does design's rate of improvement compare to the rate at which engineering has been improving as a process? Design as a meta-process is less impressive by this benchmark.

Engineering is almost unparalleled in the rate at which it commoditizes itself and pushes the frontier of progress out. The best practices in frameworks, languages, and infrastructure are always rapidly---and sometimes tumultuously---evolving. What used to take entire teams to build before, requires fewer and fewer people every year.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-14.png?resize=800%2C559&ssl=1)

As disciplines evolve, they figure out the social norms needed to operate better, build tools that can be shared across the industry, and invent abstractions that allow offloading more and more of the workload. They learn how to collaborate better, not just with each other but with all the other functions as well. Disciplines are not an end to themselves; the degree to which they contribute to the larger organizations and ecosystems they are part of is the final measure of their progress.

Design appears to be inflecting in the direction of engineering. Figma is in pole position to drive this evolution. As a tool, it makes designers both more efficient and more collaborative by breaking down the walls between design and the other teams they work with.

![](https://i0.wp.com/kwokchain.com/wp-content/uploads/2020/06/image-15.png?resize=800%2C559&ssl=1)

But Figma's true potential is if it can make the transition to becoming a platform. If Figma can, they'll push progress in design as a *discipline*.

Which companies are successful in a field is decided by many factors, not the least of which is a good measure of luck. But when disciplines undergo tectonic shifts, the companies that thrive have outsized influence. The choices they make in abstraction layers, social norms, architecture, and more have large ripples for a generation. This is even more true for platforms, whose loops become core to their ecosystems. Like wet clay, the choices they make eventually set and become the underlying substrate that defines how the entire ecosystem grows. That is both a tremendous opportunity and responsibility for the companies, like Figma, that take on this mantle.

## material design icon library

[material-design-icons](https://github.com/google/material-design-icons)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062006.jpg)

谷歌的官方开源图标库，谷歌和安卓就采用这一套图标。Material Design 官方网站可以查看[所有图标](https://material.io/resources/icons/)。

## the most important in your area quote

数学家理查德-汉明（Richard Hamming）总是问其他领域的科学家："你的领域中最重要的问题是什么？"，然后问第二个问题："你为什么不研究它们？"。

-- [《汉明问题》](https://www.lesswrong.com/posts/P5k3PGzebd5yYrYqd/the-hamming-question)

## webp jpg image convert pure frontend web app

[webp2jpg](https://github.com/renzhezhilu/webp2jpg-online)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062810.jpg)

一个纯前端的在线图片格式转换工具，可以快速将图片转为另一种格式，并且提供多个参数可以调节。（[@renzhezhilu](https://github.com/ruanyf/weekly/issues/1312)  投稿）

## jira simplified alternative web app

[Linear](https://linear.app/)

![](https://cdn.beekka.com/blogimg/asset/202007/bg2020070106.jpg)

一个在线的项目管理软件，用于 Bug 管理，比 Jira 用法简单。

## javascript art pattern images guide theory

[JavaScript 生成艺术图形教程](https://generativeartistry.com/tutorials/)

这个教程介绍 JavaScript 如何生成 8 种艺术图形。

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062403.jpg)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062404.jpg)

![](https://cdn.beekka.com/blogimg/asset/202006/bg2020062405.jpg)

## clock and mirror and humanity culture quote

时钟和镜子改变了人类社会。

时钟创造了一种焦虑文化。

镜子创造了一种自恋文化。

-- David Perell

## netflix all rating sites mix web app

[aww rated](https://awwrated.com/en/netflix)

![](https://www.wangbase.com/blogimg/asset/202006/bg2020062802.jpg)

这是一个 Netflix 评价网站，通过抓取 IMDb、metacritic、烂番茄、豆瓣等评分网站的数据，列出 Netflix 各种节目的评分。

## just javascript guide story

[Just JavaScript 课程](https://justjavascript.com/)

著名程序员 Dan Abramov 正在撰写的 JavaScript 教程，他还没有写完。只要在上面网址报名，每写好一部分就会通过邮件发给你。（[@hacker0limbo](https://github.com/ruanyf/weekly/issues/1326)  投稿）

## linus torvald giving up programming story theory

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

## japanese video meeting meme

[视频会议的画面布局](https://lvv2.com/t/2453409/)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070701.jpg)

视频会议软件 Zoom 的画面布局，是所有人平均分配屏幕空间。日本很多用户感到不习惯，纷纷向 Zoom 反馈，上下级的头像一样大，搞不清楚谁是领导，不好区分地位级别，希望能更改界面。日本网友就画出了下面的屏幕布局，这才是日本企业想要的界面吧。

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070702.jpg)

## the ultimate underground luxury home design theory

1、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070703.jpg)

美国堪萨斯州中部，巨大的旷野之中，有一个不起眼的大门，通往一座豪华的地下公寓，称为幸存者公寓（Survival Condo），专门为富豪躲避核战争之类的世界末日而建。

2、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070704.jpg)

公寓四周有铁丝网，提供 24 小时的保安，防止外来者闯入。

3、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070705.jpg)

公寓大门每扇重达 8 吨，一共是 16 吨的钢板。

4、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070706.jpg)

这个地方的前身是 1960 年代建造的核导弹发射井，属于美国核武库的一部分。导弹井深达地下 60 多米，钢筋混凝土墙厚达 2 米多。

5、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070707.jpg)

导弹井退役以后，卖给了一家房地产开发公司，改建成了今天的幸存者公寓，一共有 15 层，地上只有一个圆顶，远远看上去就是一个隆出地面的小山丘。

6、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070708.jpg)

上图是改造时从上往下看的电梯井。

7、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070721.jpg)

这是当年的防爆门，通向导弹的控制室，门外就是核导弹。这些门能够承受核导弹发射时的高温高压。

8、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070722.jpg)

防爆门后面是一段通往控制室的走廊。

9、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070723.jpg)

当年绝密的核导弹发射控制室，可以容纳 6 人，24 小时永远有人值班。

10、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070709.jpg)

改建以后，导弹井变成了一栋公寓楼，分成多套公寓，对外出售。每套公寓都有自己的停车位，方便外出。

11、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070710.jpg)

公寓设有应急物资供应室，提供各种紧急情况下所需的物质，包括迷彩装备、头盔等。

12、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070711.jpg)

公寓还设置了枪械室，提供功能齐全的枪支，供居民用来防身。

13、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070712.jpg)

医疗区可以进行简单的手术，并且配备了足够七年使用的药品。

14、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070713.jpg)

食品室提供各种各样的食品，从冷冻黑莓到炒鸡蛋，所有食品的保存时间长达 35 年。

15、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070714.jpg)

最令人吃惊的是，公寓还设置了全尺寸游泳池，可以自动补充水并对其进行消毒，甚至还配备水滑梯。

16、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070719.jpg)

电影院可以播放 2,000 部精选电影。

17、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070720.jpg)

公寓最底层是图书馆和教室。

18、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070715.jpg)

公寓内部提供了现代住宅的所有便利，厨房配备了全新的电器，以及触摸屏控制的灯光和暖气。

19、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070716.jpg)

房间墙上有电视屏幕，可以通过摄像头看到外面的世界。

20、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070717.jpg)

每套公寓都有宽敞的客厅。

21、

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070718.jpg)

房间的窗口都是电视屏幕。

## tired of over working on my dream story

[工作狂与拖延症](https://www.jamalx31.com/post/between-workaholism-procrastination)

2015 年，我在耶路撒冷的一家创业公司工作。每天 6 点起床，9 点到公司上班，下午 5 点下班。

那年 9 月，我第一次出国旅行，去了意大利，为期 2 周。我从此迷上了旅行，每天想的就是下一次旅行，几乎每个月都出行。

有一天，我看到一篇数字游民和远程工作的博客文章。我对自己说："这就是我想要的！"几个月后，我在网上找了第一份远程工作，然后申请了为期 3 个月的东南亚签证。

2016 年 9 月，在第一次旅行的一年后，我去了泰国，远程工作，享受海滩，喝新鲜的椰子水。"努力工作，努力玩乐"，这是数字游民的口号。每天没有固定的日程，可以灵活安排。

2017 年 2 月，我回到了耶路撒冷看望我的家人，并计划下一步行动。

突然之间，没有了热带海滩、聚会，陌生朋友，我有了很多空闲时间，不知道该怎么办。我就和一个朋友创建了一个外包 Web 开发公司，将所有时间用来创业，每周工作 7 天，每天工作 14 小时，成为了工作狂。

我希望通过创建一个成功的企业，有办法离开这个城市，搬到其他地方继续过天堂般的生活。

经过筋疲力尽的 3 个月，我意识到工作狂的生活不是我想要的，不喜欢现在的生活方式。我问自己，为了未来的快乐，是否今天就值得整日工作，过着悲惨的生活？

这使我想到了另一个更本质的问题：  如果我不喜欢实现梦想和目标的这个过程，那么追求梦想和目标的结果是否有意义？

我对这个问题没有明确的答案，然后，我就慢慢产生了拖延症。一方面，我仍然想要实现我的目标，另一方面，实现目标的过程让我感觉不到快乐，我就拖拖拉拉，没有努力工作。

## fully without javascript quote

本站 100%无 JavaScript。

-- [swiftbysundell.com](https://www.swiftbysundell.com/special/javascript-free/)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020070906.jpg)

## life in a day retro movie new story

[一日人生（2020 版）](https://lifeinaday.youtube/)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072203.jpg)

十年前的 2010 年 7 月 24 日，英国导演凯文-麦克唐纳德（Kevin Macdonald）和 Youtube 合作，邀请全世界的人们上传自己当天的日常生活片段。结果收到了 189 个国家/地区提交的 80,000 多个视频，长达 4,500 个小时。他用这些素材剪辑了一部 90 分钟的纪录片，取名为《一日人生》（Life in a day），目前在 Youtube 上已经观看了超过 1600 万次。

现在，他又和 Youtube 合作，拍摄《一日人生》的 2020 版，邀请大家上传 2020 年 7 月 25 日这一天的生活片段，上传到官网。下面是 2010 版的[预告片](https://v.qq.com/x/cover/5jcd51nz5fls7vj/7FeOsAW4NTt.html)。

## archoring bias marketing theory

锚定偏差（anchoring bias）指的是决策时严重依赖第一个可用的信息。

比如，你走进一家体育用品商店，发现的第一件商品，是一条价值 500 美元的运动裤。接着，你看到另一条价格为 300 美元的运动裤时，就会觉得它很便宜，实际上如果首先看到这条 300 美元的裤子，你会觉得它根本不便宜。

-- [《锚定偏差》](https://models.substack.com/p/why-are-we-anchored-often)

## adobe react components library clear and clean design theory

[React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072402.jpg)

Adobe 公司的 React 组件库，用法非常简单干净。

---

-> https://react-spectrum.adobe.com/react-spectrum/getting-started.html

## openstreet map vitual city dev story

[OSM City](http://stinaflodstrom.com/projects/osm/osm.html)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072803.jpg)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020072804.jpg)

丹麦艺术家根据开源地图 OpenStreetMap 的数据，让建模软件 Unity 3D 引擎基于真实城市的面貌，自动生成一座虚拟城市。

## tailwind css dev and marketing story theory

[Tailwind CSS：从业余项目到数百万美元的业务](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/)（英文）

![](https://www.wangbase.com/blogimg/asset/202008/bg2020080310.jpg)

Tailwind CSS 的作者介绍这个框架的诞生过程，以及他们如何通过它赚到几百万美元。

---

[Adam Wathan](https://adamwathan.me/)

AUGUST 2, 2020

### Tailwind CSS: From Side-Project Byproduct to Multi-Million Dollar Business

_This was originally posted as a [thread on Twitter](https://twitter.com/adamwathan/status/1289645193038192641), but I thought I'd republish it here to give it a proper home._

---

So about a month or so ago, Tailwind cracked 10 million total installs, which given its humble beginnings, completely blows my mind.

![](https://adamwathan.me/img/tailwind-backstory/npm-stats.png)

We're also about to cross $2 million in revenue from [Tailwind UI](https://tailwindui.com/), our first commercial Tailwind CSS product which was released about 5 months ago --- a bit under two years after the very first Tailwind CSS release.

Here's the story from the beginning, while it's still fresh enough to remember...

### Reddit meets Pinterest meets Twitter

Way back in 2015, I told my now-business-partner Steve Schoger about a side-project idea I had for a site where companies could share interesting links with their team, and outsiders could subscribe to see what teams they admired were reading.

We called it "Digest".

![](https://adamwathan.me/img/tailwind-backstory/digest-splash.png)

We were pretty excited about it, and I decided to take a week off work to build the initial prototype. In classic developer fashion though, I spent the entire week making decisions about the tech stack, and had maybe one full day at the end to actually hack on the real functionality.

One of those decisions was what to do about the CSS. I'd always been a big Bootstrap fan, but the first Bootstrap 4 alpha had just come out and they had dropped Less for Sass. I hated Sass!

Sass had sort of beat out Less in the preprocessor wars of the mid-2010s, but in my opinion Less was the nicer language. It was functional and declarative, rather than procedural and imperative like Sass, and it had one killer feature Sass didn't have: *classes as mixins.*

You see in Less, any existing class could automatically be used as a mixin. You didn't need to explicitly define a mixin like you did in Sass. This let you easily create larger class abstractions out of smaller utility classes.

If you've used `@apply` in Tailwind, this will probably look familiar...

![](https://adamwathan.me/img/tailwind-backstory/classes-as-mixins.png)

So anyways, back to Digest. Normally I would've used Bootstrap, but the Sass thing killed it for me. I wanted to keep using Less. So of course my only choice was to author all of the styles from scratch.

I spent most of the week on this initial styling system.

What I was building was very Bootstrap-inspired, and had lots of component classes like `btn`, `card-list`, and `radio-box`. But it also had [this small set of utility classes](https://gist.github.com/adamwathan/bfa7454dddba7aadeafc739874033bbf).

_(Here's where we kind of ended up by the way, I think it still looks pretty good even 5 years later!)_

![Digest user interface](https://adamwathan.me/img/tailwind-backstory/digest-screenshot.png)

Anyways, we got busy with other projects, lost enthusiasm for this idea, and ultimately it all landed in the side-project graveyard (as most things do).

All but the stylesheets.

On every new project, I kept copying and pasting all the Less files from Digest and using them as a starting point, customizing them as necessary to suit whatever new design I was building. I must have brought them across to at least 4 or 5 other projects after we abandoned Digest.

I noticed something as I copied the styles across though: the utilities (which started as simple padding and margin utilities) kept growing and evolving, covering more and more CSS features, while the components files kept getting shorter and shorter. The utilities were the only things that were truly "portable", while the component styles were always too opinionated to reuse on another design.

This is when I really started to identify the whole "utility-first" thing as an architectural philosophy, rather than seeing utilities as being just a useful bag of tricks to slap in my HTML here and there as needed.

### Abandoned side-project #2

Fast-forward a few years later and Steve and I started working on [KiteTail](https://kitetail.co/), which was going to be a developer-focused, webhook-driven checkout platform:

[![KiteTail screenshot](https://adamwathan.me/img/kitetail-promo.png)](https://kitetail.co/)

We were taking this one pretty seriously at the time, and --- using those old Digest styles as a starting point --- I started building the thing, trying very hard to make the styles as "project-agnostic" as possible.

You can watch me build a ton of the app on YouTube, and you can see all these utility styles in there the whole time:

[Watch the "Building KiteTail" series on YouTube](https://www.youtube.com/watch?v=XUXpcbYQ_iQ&list=PL7CcGwsqRpSPQ0st8ZHn-nwi7_628bWXo)

Now at this point I had *zero* intention of maintaining any sort of open-source CSS framework. It didn't even occur to me that what I had been building would even be interesting to anyone. But stream after stream, people were always asking about the CSS:

![](https://adamwathan.me/img/tailwind-backstory/youtube-comment.png)

This is the benefit of working in public --- Steve and I would have never built this Tailwind Labs business *(which has now done over $4m in revenue in under 2 years)* if I hadn't been live-streaming my work on yet-another-abandoned-side-project.

Anyways, eventually I thought "maybe I'll open-source this little Less framework?"

### Going open-source

A few people reached out to me about it around this time in case they could collaborate on it with me in any way. One of these people was [Stefan Bauer](https://twitter.com/stefanbauerme), who if I remember right actually was the person to suggest prefixes like `sm:font-bold` instead of `sm-font-bold` for Tailwind's responsive utilities.

My good friend [Jonathan Reinink](https://twitter.com/reinink) also messaged me about the framework around this time, saying he was about to do a big redesign of his SaaS project and wanted to try this crazy utility nonsense I had been blabbering about.

This turned out to be key for making the framework actually good, because our projects had completely different designs, and what-would-become-Tailwind needed to support both of those projects. This was a great forcing function for making it project-agnostic.

By the way, the name Tailwind? It came from me wanting the name to be tied back to KiteTail in some way, since Steve and I were still pushing hard on that idea, and had dreams of it being this awesome company we'd run one day. I just threw `"tail\*"` into [onelook.com](https://onelook.com/?w=tail*&scwo=1&sswo=1) to see if I could find any cool related words.

Back to the story --- this was around June/July 2017, and for the next 2-3 months, Jonathan and I worked feverishly on making something that was good enough to open-source.

One of the challenges I faced during this process was that in order to make Tailwind as configurable as I wanted, I had to seriously push the boundaries of what was possible with Less, and write some truly cryptic and horrific shit:

![](https://adamwathan.me/img/tailwind-backstory/less-madness.png)

Writing a test suite for this sort of thing was not really practical as far as I could figure, and it was getting to the point where I didn't even understand the system anymore and just had to hope and pray that solving one problem didn't introduce another.

This was maybe mid-August, and my friend [David Hemphill](https://twitter.com/davidhemphill) suggested I mess around with [PostCSS](https://postcss.org/) and see if I could write the framework in JS.

I had no idea what it meant to use PostCSS to build something like Tailwind (I thought it was limited to the sort of things [autoprefixer](https://github.com/postcss/autoprefixer) uses it for), but David clued me in to some high-level tricks, like using custom at-rules and custom properties as "hooks" to insert generated code.

I started messing around with it and was immediately amazed by how much more confident I felt in the code, and the amazing things I could do given a proper programming language.

I talked all about it on Full Stack Radio a few weeks later:

[Listen to "Building a CSS Framework with PostCSS" on Full Stack Radio](https://www.fullstackradio.com/episodes/71)

_(By the way, to this day I feel like Tailwind is completely abusing PostCSS in a way it was never intended, and I secretly believe [Andrey Sitnik](https://twitter.com/sitnikcode) cringes a little bit every time he thinks about what we've done with his beautiful library 😅)_

Anyways, on Halloween night 2017 we were putting the finishing touches on the first release, and cranking our asses off on the initial documentation:

We got it out the door and had tons of positive attention, even for v0.1.0:

A few days later, [Andrew Del Prete](https://twitter.com/AndrewDelPrete) wrote what would be one of the most important blog posts in the history of the framework, introducing me to the wonderful world of PurgeCSS.

[Read "Using ~~PurifyCSS~~ PurgeCSS to Remove Unused Tailwind CSS Classes"](https://medium.com/andrewdelprete/using-purifycss-to-remove-unused-tailwind-css-classes-173b3ee8ee01)

After about a year of new v0.x releases with lots of cool new features and a growing community, [I announced I was going to go full-time on Tailwind CSS](https://adamwathan.me/going-full-time-on-tailwind-css/).

### Going full-time on Tailwind

I was supposed to be starting on a new SaaS project with a friend, but after the success of [Refactoring UI](https://refactoringui.com/book) *(a book Steve and I had released in December 2018)* and the growth of Tailwind, I knew I would regret not pushing it further.

Tailwind CSS is by far the highest impact project I've ever worked on --- it felt like it was *this close* to being my "dent in the universe", and the idea of not putting in the work to push it over that hump made me sick.

I was lucky enough to have a big bankroll from Refactoring UI, and I knew there were ways to build commercial offerings around the framework itself *(themes, UI kits, courses, something!)* so I decided to go for it.

I busted my ass cleaning things up and applying what we'd learned to put together a proper v1.0 release, which came out on May 13, 2019:

After that, Steve and I went heads down for the rest of the year trying to figure out what on earth "Tailwind the business" was going to be. We prototyped and discarded tons of different ideas, but eventually decided to pursue what is now Tailwind UI.

Here's the first glimpse of that idea, back in March 2019:

> Been prototyping a [@tailwindcss](https://twitter.com/tailwindcss?ref_src=twsrc%5Etfw) component gallery/studio project I've been planning with [@steveschoger](https://twitter.com/steveschoger?ref_src=twsrc%5Etfw) this weekend 👀\
> \
> Think hundreds and hundreds of fully responsive professionally designed components, pre-built so you can just copy the HTML and tweak to taste 👌🏻\
> \
> Useful? [pic.twitter.com/WobOoMGwxH](https://t.co/WobOoMGwxH)
>
> --- Adam Wathan (@adamwathan) [March 30, 2019](https://twitter.com/adamwathan/status/1112101755888648192?ref_src=twsrc%5Etfw)

We worked tirelessly on Tailwind UI for months, and finally got our early access release out the door in February 2020, after working literally 36 hours straight before our self-imposed deadline.

It has been successful beyond our wildest dreams *(going to cross $2m in revenue next week)*, and as a result we've been able to start building an amazing team ([Brad Cornes](https://twitter.com/bradlc), [Simon Vrachliotis](https://twitter.com/simonswiss) and [mystery developer #3](https://www.youtube.com/watch?v=dQw4w9WgXcQ)) to keep pushing the future of Tailwind forward.

Things are only going to get more incredible from here, and I can't wait to turn some of the ideas rolling around our heads into new features, products, and tools to make the Tailwind experience even better over the coming years.

Thank you for supporting us ❤️

## gpt3 generated article to the top of hacker news story

[我用 GPT-3 写了一篇博客文章](https://liamp.substack.com/p/my-gpt-3-blog-got-26-thousand-visitors)（英文）

![](https://www.wangbase.com/blogimg/asset/202008/bg2020080609.jpg)

GPT-3 是目前最先进的人工智能模型，可以根据输入，返回一篇人类可读的文章。

作者输入文章的标题和简介，GPT-3 就自动返回了一篇博客文章，这篇文章还登上了 Hacker News 的第一名，许多人都没有发现这是计算机写的。

## better to be silent quote

不要轻易说出自己痛苦，能体会的人很少，看热闹的人很多。

也不要轻易炫耀，会替你感到高兴的人很少，等着看你最后下场的人很多。

-- 推特用户

## perfect is failing to remove any more quote

所谓完美，不是指不能再添加别的东西了，而是指没有东西可以从其中拿掉了。

-- [安托万-德圣埃克絮佩里](https://www.brainyquote.com/quotes/antoine_de_saintexupery_103610)，《小王子》作者

## great documentation is great cost view

[Mozilla 裁员](https://www.quirksmode.org/blog/archives/2020/08/the_cult_of_the.html)

![](https://www.wangbase.com/blogimg/asset/202008/bg2020081309.jpg)

Mozilla 本周宣布裁员 250 人。这其实不算意外，它的全球雇员超过 1000 人，但是主要产品都是免费的，这样的雇员规模可能确实太大了。

裁员的一个后果就是，MDN 文档团队基本上被裁掉了，只剩下很少的人，MDN 以后可能都要靠志愿者维护。由于 MDN 是 Web 开发事实上的标准文档，这件事恐怕会对全球的开发者造成很大影响。这也反应了，文档是有代价的，优质文档很难免费提供。

## github readme stats card library

[github-readme-stats](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md)

![](https://www.wangbase.com/blogimg/asset/202008/bg2020081301.jpg)

一个可以自己部署的服务，生成个人 GitHub 账户的统计，可以插在自述文件里面。这里还有另一个[类似的服务](https://github.com/athul/waka-readme)。（[@Imfondof](https://github.com/ruanyf/weekly/issues/1373)  投稿）

---

-> https://github.com/anuraghazra/github-readme-stats/

## hardware is always faster and software is always slower law quote

硬件总是变得越来越快，但软件总是变得越来越慢。

-- [维尔斯定律](https://en.wikipedia.org/wiki/Wirth%27s_law)（Wirth's law）

## why people getting busier view

很多人相信，随着科技的发展，未来的人们会有很多空闲时间，因为机器会干活。

这种观点是不对的。即使有高度智能的机器，未来的工人也不会空闲，可能还会更忙，至少资本主义制度是如此。

![](https://cdn.beekka.com/blogimg/asset/202008/bg2020081908.jpg)

将近 100 年前的 1930 年，经济学家凯恩斯[预言](https://www.newstatesman.com/2020/08/why-bertrand-russells-argument-idleness-more-relevant-ever)，在一个世纪之内，生产力的提高将使发达国家的居民每周工作 15 个小时，还能保持体面的生活水平。

他的预测完全错误。今天，没有一个国家实现每周工作 15 小时，连接近的都没有，反而出现了 996 这样的工作制。我相信，再过 100 年，也不会有每周 15 小时工作制。

让我们想象一个假设的情景。一家工厂以前每天生产 100 个产品，随着技术进步，现在每天可以生产 200 个。如果能够全卖出去，那么工人的劳动时间并不会减少。

如果市场还是原来那样，只能卖出去 100 个，那么工厂就有 50%的产能空出来了。这时，管理层有两个选择。

选择一：工人只工作半天，保持工资不变。

选择二：保留一半的工人，解雇其余的人。

现实中，一定是第二种选择，因为这样有利于增加利润。所以，  技术进步带来的收益，不会变为工人的空闲时间，而是变为一些工人更忙碌，另一些工人失业  ，真正的赢家就是资本家，增加的利润都归他们。

这就是当今世界正在发生的事情，空闲的工人最终会被解雇。IT 行业最明显，因为技术进步对这个行业影响最大。

资本主义追求利润最大化，一旦销售不能同步扩张，技术进步就必然导致裁员，那些失业的人如果不能及时找到工作，就会越来越穷。那些还在工作岗位的人则由于负担更多的生产力，而变得越来越忙。

## web never ending new apis suck quote

Web 和浏览器已经发展到令人恐怖的技术规模。微软完全放弃了，Mozilla 在死亡线上挣扎，Safari 根本无足轻重，只剩下 Google 一个玩家。

我呼吁谷歌立即无限期地中止向 Web 和浏览器添加新 API。浏览器实际上应该开始考虑缩小 API 并削减功能，更关注性能、效率、可靠性和安全性。

-- [《Web 需要停下来》](https://drewdevault.com/2020/08/13/Web-browsers-need-to-stop.html)

## the impact of innocence quote

无知的一阶效应包括做出错误的决定，二阶效应包括不了解决定为何错误。

-- [unintended consequences](https://unintendedconsequenc.es/tiktok-ban-openness-trap/)

## amazon is not the biggest seller quote

去年，苹果应用商店的销售额为 5190 亿美元（包括硬件），而亚马逊网站为 3280 亿美元。所以，前者才是美国最大的在线零售商。

-- [《亚马逊并不是最大的在线零售商》](https://www.forbes.com/sites/danrunkevicius/2020/08/17/apple-not-amazon-is-the-largest-online-retail-force/#43ce5d8764cb)

## solid web framework design

[solid](https://github.com/ryansolid/solid)

一个借鉴 React 思想和用法的前端框架，但是不使用虚拟 DOM，也没有那些复杂的 API，用起来比较轻盈。

## leetcode algorithms cheetsheet guide

[labuladong 的算法小抄](https://labuladong.gitbook.io/algo/)

100 多道 LeetCode 算法题目的中文解释。

## hacker news daily top 10 library

[hackernews-daily](https://github.com/headllines/hackernews-daily)

![](https://www.wangbase.com/blogimg/asset/202009/bg2020090207.jpg)

订阅 Hacker News 每日排名最高的 10 条新闻。具体方法是，通过 GitHub Actions 定时执行脚本，获取帖子，记录到了项目的 issue 里，用户通过 watch GitHub 仓库或者 RSS 订阅。（[@timqian](https://github.com/ruanyf/weekly/issues/1398)  投稿）

## instagram and twitter sync side project end up 30000 dollars story

[我的业余作品如何以 3 万美元出售](https://marc.io/tweet-photo-acquired)（英文）

![](https://www.wangbase.com/blogimg/asset/202009/bg2020090105.jpg)

作者最初写了一篇文章，介绍如何将 Instagram 图片同步到推特，结果发现浏览量很高。有人还写信，愿意付费使用该功能。作者就把它做成一个小服务，结果被 3 万美元收购。

## daily leetcode programming for 2 years feeling story theory

[Leetcode 刷题的一些技巧的经验之谈](https://justyy.com/archives/44858)（中文）

作者介绍 LeetCode 刷题体会："坚持在 leetcode 刷题已经有近两年了，刷着刷着就成习惯了，就像每天刷牙吃饭一样，不刷会很不自然。"（[@DoctorLai](https://github.com/ruanyf/weekly/issues/1402)  投稿）

---

### 熟能生巧 -- 刷题的一些技巧的经验之谈

2020 年 9 月 4 日

坚持在  [leetcode](https://justyy.com/archives/32015)  刷题已经有近两年了, 刷着刷着就成习惯了, 就像每天刷牙吃饭一样, 不刷会很不自然. 刷题的收获还是有挺多的, 特别是对数据结构和算法有了进一步的了解. 还有一些设计题, OOP 面向对象, 甚至是数据库 SQL 和 BASH 编程还有就是[多线程](https://justyy.com/archives/2257)类型的题都能得到温故而知新.

每天习惯了打卡, 早上起来喝杯咖啡刷个题, 特别是这几个月疫情在家, leetcode 有那种每月 Challenge, 刷一题得 10 积分, 还有就是会员题 35 分一题, 是快速拿积分的好方法(平时每天登陆才得 1 分, 一件 T-shirt 得 6000 分换, 按照一天 10 分, 大概不到 2 年就能换衣服了)

[![leetcode-code-submission-overview 熟能生巧 - 刷题的一些技巧的经验之谈 程序员 资讯 软件工程 面试 ](https://justyy.com/wp-content/uploads/2020/09/leetcode-code-submission-overview.jpg "leetcode-code-submission-overview 熟能生巧 - 刷题的一些技巧的经验之谈 程序员 资讯 软件工程 面试 ")](https://justyy.com/wp-content/uploads/2020/09/leetcode-code-submission-overview.jpg)

### 为啥要刷题?

对于搞计算机的码农, 刷题是找到一份好的搬砖工作最廉价最有效的方法了. 很多屌丝能通过刷题进入 Big4, 改变命运, 迎娶白富美. 亚麻就有很多年轻的小姑娘(听说狗家的也是), 美丽年轻, 平时在电梯里碰到都是很时尚的打扮, 拎个名牌包包. 你细品, 进入了 BIG4, 是不是离又美丽又智慧的小姑娘又进了一步呢.

面试造原子弹, 工作的时候就煮茶叶蛋. 没有办法, 这对于大公司来说, 是[筛选人才](https://justyy.com/archives/18804)最有效成本低的方式, 除非你在业界真的牛到不需要刷题, 否则有机会发牢骚还不如多刷几题.

我每天刷题, 状态就是保持+慢慢的进步. 每天[进步](https://justyy.com/archives/19030)一点, 积累坚持的力量是很可怕的. 刷过的题可以换种语言换种思路多看看别人的题解, 总是会有新的收获. 坚持刷题, 让你随时都处在最好的状态, 即使要换工作, 再投简历再面试也不需要再额外多做准备了.

### 模拟面试

Leetcode 会员有一个特别有用的功能就是 Mocking, 它可以让模拟公司(Big4)的第一轮电话面试或者是上机筛选, 或者是终面 Onsite. 题目都会从相应公司的题库中出, 很多时候真的能碰到原题.

这个模拟面试还能根据你的训练情况, 对你的各项技能进行打分, 比如我动态规化算法得分较少, 就可以多花一些时间练习.

[![leetcode-mocking-overview-google 熟能生巧 - 刷题的一些技巧的经验之谈 程序员 资讯 软件工程 面试 ](https://justyy.com/wp-content/uploads/2020/09/leetcode-mocking-overview-google.jpg "leetcode-mocking-overview-google 熟能生巧 - 刷题的一些技巧的经验之谈 程序员 资讯 软件工程 面试 ")](https://justyy.com/wp-content/uploads/2020/09/leetcode-mocking-overview-google.jpg)

根据用户给的数据, 给出了 Big4 的中位数员工的分数, 可以看出 Google 狗家最难, [亚麻](https://justyy.com/archives/6611)最容易, 这次给我的评分竟然比 Google 的中位数员工分数还高(很多人进了 Big4 就不怎么刷题了), 看来维持这个状态之后去申请 Google 有戏(至少能过第一轮吧)

### 按类型刷题

如果你的时间有限, 比如下个月就[面试](https://justyy.com/archives/18736)了, 你可以按照该公司出题频率来刷, 不过这个是只有会员有的功能, 据说出原题的概率还是挺大的, 即使不是原题, 换汤不换药, 输入输出变一下, 字符串变数组之类的

如果时间有点充裕, 可以按题目算法类型刷, 比如重点刷一下[动态规化](https://justyy.com/archives/32222), 单调堆栈之类的(对你不熟悉的题重点多刷, 很多题都很类似, 刷多了就有感觉了).

### 周赛

参加周赛也是能力提升的很好的方式, 因为我在欧洲, 周赛是周日的早上 3-4 点, 所以我没法参加, 但是有双周赛, 每两周练习一次, 比赛 1 个半小时, 4 道题, 第一题是简单难度, 2 题中等, 最后一题是难. 不用担心和别人比太差, 实际上每次比赛前十名都是大佬-眼快手快, 没法比. 和自己比就可以了, 每次比赛有收获就行. 你可以安慰自己, 每次有做不出来的题才有进步的空间, 哈哈.

比赛是训练你在规定的时间内专注 Problem Solving 的能力. 当然比赛还是要有技巧, 比如调试的技巧, 我上周才发现在 leetcode 代码调试里可以用  [print 来调试](https://justyy.com/archives/44806)变量......一直以来都是直接在网页里输代码, 通过返回值不同来试, 调试效率很低. leetcode 可能为了公平期间, 比赛的时候在线  [debugger](https://justyy.com/archives/31427)  是不能用的(这是个会员功能). 我本地也没有装 C++的 IDE(有时候甚至是在 iPad 平板上刷题), 所以目前所参赛的 15 次基本上都是 0 调试 -- 比赛成绩不堪入目.

不过我还是对自己有信心的, 毕竟每次比赛刷不出来的题赛后都认真研究了, 的确也学到了, 有几次甚至是恍然大悟, 捶胸顿足, 为啥比赛的时候就没想出来呢?

当然, 刷题不是全部, 刷题只是敲门砖, 对于毕业生或实习生来说, 面试只有刷题, 但是对于工作几年后的软件工程师来说, 更为重要的是系统设计框架能力的提升, 而相反刷题对于刚毕业的小白和工作几年的大拿来说要求都是差不多一致的. 所以有时候不要纠结于一道非常 Tricky 的算法题, 它对于你的帮助甚至没有你去了解一下[分布式](https://justyy.com/archives/44793)计算框架的来得重要.

## the cease of personal sites quote

个人网站是一种有点神秘的动物，大部分隐身在互联网的丛林中，很少有人观察到。

那些完全生活在 Facebook 和 Google 的美丽花园中的互联网用户，甚至可能都不知道该物种的存在。其他没有经验的用户可能会认为，个人网站已经像恐龙那样灭绝。事实是野外还存在许多标本，只有了解该物种习性的猎人才能发现它们。

-- [《搜寻几乎不可见的个人网站》](https://cheapskatesguide.org/articles/personal-website-hunting.html)

## pure pragmatism is to always choose the better ideology quote

李光耀在新加坡的成功，不仅是因为他的专制主义，而且还因为新加坡决策精英阶层的纯粹实用主义。他们没有固定不变的意识形态，而是选择合适的意识形态。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24382427)

## javascript library can be done instead of dead quote theory

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

## one page for each chapter python guide theory

[一页 Python](http://damiantgordon.com/PythonMonday/)

一个英文的 Python 初学者教程，特点是每一讲的讲义都只有一页 A4 纸。

---

-> http://damiantgordon.com/PythonMonday/PythonMonday-1-70.pdf

## five monkey and society experiment story

[五只猴子的故事](https://blog.ploeh.dk/2020/09/14/we-need-young-programmers-we-need-old-programmers/)

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092207.jpg)

科学家在笼子里放了五只猴子。笼子中间有一架梯子，梯子上面放着香蕉。

每当一只猴子爬上梯子，科学家就用冷水泼洒其余的猴子。过了一阵子，只要一只猴子爬上梯子，其他猴子就会殴打它。一段时间后，所有猴子都不敢爬上梯子。

然后，科学家用一只新猴子，替换了原来的一只猴子，并且停止用冷水泼洒猴子。这只新猴子立即爬楼梯去拿香蕉，但随即遭到其他猴子的殴打。经过几次殴打，新猴子学会了不爬梯子，即使它从来不知道为什么。

接着，替换了第二只猴子，也发生了同样的事情。刚才放进笼子的那只猴子，同样殴打了新来的猴子。替换了第三只猴子，也是如此。就这样，第四只、第五只猴子也接连被替换了。

最终，笼子里面的五只猴子，尽管从未被泼冷水，仍然继续殴打任何试图爬上梯子的猴子。如果可以问猴子，为什么要殴打所有试图爬上梯子的成员，答案可能是：

"这就是我们在这里做事的方式。"

这个故事告诉我们，如果前人觉得某件事情不能做，阻力就会流传下来，阻止后来的人去做。

但是，大多数人没有意识到，有时候情况会改变。二十年前不可能的事情今天也许并非不可能。比如，电动汽车以前是不可能的，现在随着电池技术的进步，才有可能。

年轻人不知道为什么某事不能做，如果他们不怕阻力，就会去尝试那些不能做的事情。这就是为什么重大创新往往是年轻人做出来的原因。

老年人通常看不到新的机会，因为他们相信有些事情是不可能的。年轻人在无知和热情推动下，愿意尝试那些不可能的事情。大多数年轻人会失败，但少数会成功。

## why i hate web dev is overwhelmed tool chains quote

网站需要 3 种技术，但是由于用到各种工具和框架，最终使我接触了约 20 种不同的技术，有时还不得不研究第 n 级依赖项的源代码。

这就是我不喜欢现代 Web 开发的地方，你想使用三个工具，但是必须知道如何使用二十个工具。

-- [《编织在一起的 Web》](https://css-tricks.com/weaved-webs/)

## everyone in the future can dev without programming view

本周话题：未来人人开发软件，几乎没人编码

现在，少儿编程培训班很流行，一到周末，家长们就送孩子去学计算机。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092805.jpg)

虽然我很赞成从小学习计算机，但总感到有点疑惑：  编程正变得越来越容易，门槛越来越低，小朋友们真有必要牺牲周末的睡眠和体育时间，专门去学编程语言（比如 Python）吗？

上个世纪要当程序员，你必须懂汇编语言。到了如今，编程几乎已经没有门槛了，大多数人一天内就能学会，怎么写一个简单的网页 JavaScript 脚本。那么，你告诉我，未来会怎样？

再过 15 年或 20 年，等到现在的小孩进入就业市场，编程可能已经变得极其傻瓜化、智能化，也许只需要动动嘴，说出你想要什么程序，人工智能就自动生成了代码。

那时还会有程序员，但是人数应该很少，而且只负责编写底层代码，就像今天的汇编语言程序员非常少一样。因此我怀疑，孩子们没必要专门去学编程，因为未来可能根本不是今天这样编程。

大家知道吗，世界上用户最多的编程工具是什么软件？

答案是 Excel。无数财务人员、管理人员、销售人员都在用它，解决各种问题，尽管他们根本不懂编程。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092806.jpg)

我觉得，这就是未来编程工具的趋势，你不需要或者只需要懂一点点代码，就能做出软件，解决你的问题。最近正在兴起的"低代码"（low code）和"无代码"（no code）工具，正好呼应了这种趋势。未来人人都是软件工程师，都能够做出自己需要的软件，但是几乎没人知道如何编程。

## dont display sign up button web design theory

[别在网页上显示"注册"](https://www.gkogan.co/blog/stop-asking-me-to-sign-up/)（英文）

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092702.jpg)

很多网站在页面上有注册按钮或注册链接（上图），作者认为，"注册"这个词大大降低了用户进一步使用的欲望，因为这要求用户付出操作成本，但没有给出足够的诱因。

经过他的实验，只要将"注册"改成"开始使用"或"免费试用"，就能将转化率提高三倍。

---

### Stop Asking Me to "Sign Up"

Jun 18, 2014 --- 2 min read

![](https://www.gkogan.co/content/images/2024/07/sign-up-buttons.png)

The fate of many startups depends almost entirely on one conversion point: When a visitor becomes a user.

All too often, this pivotal role falls on the shoulders of a pitifully generic "sign up" button that's lucky to get even a minute of consideration during development.

If you take a moment to consider the wording of your signup button, you can drastically increase how many of your visitors turn into users.

_(What happens after the conversion is important, too, but things get significantly easier once you have someone's email and opt-in.)_

### Why "Sign Up" buttons don't work.

- **They're ignored.** When visitors see common elements repeated on many sites, they begin unconsciously ignoring those elements (aka "habituation"). Doesn't matter if they're blue or green or hell-fire-orange.
- **You're asking for blind commitment.** Don't assume visitors know what you're asking them to sign up for. People don't read pages, they skim. They could've easily missed the part where you mention a free trial or key benefits.
- **You're not offering any value.** Asking someone to "sign up" offers no help in changing the visitor's thinking from "Why should I?" to "I want this!"

### How to get more signups from your signup button:

- **Tie it to your product.** If you have a SaaS for trading bitcoins: "Start Trading Bitcoins." If you have a marketplace for artists: "Start Selling Art." This helps prevent the button from being overlooked.
- **Give, don't take.** "Get Access" and "Sign Up" both lead to the same thing, but one makes the visitor feel they're getting something, while the other doesn't.
- **Compel people to act.** Use action verbs such as *get*, *start*, and *try*.

Examples from startups that get it right:

![Startups with Good Signup Buttons](https://www.gkogan.co/content/images/2024/07/sign-up-buttons-2.png)

(I especially like gliffy's "Start Drawing," which implies how quickly you can get started, and directly relates to their product: [an app for easily drawing diagrams](http://www.gliffy.com/?ref=gkogan.co).)

### Case study: Getting 3x more clicks by changing two words.

Take this example from one of my clients. Like many software companies, Scalyr---a [log aggregation and monitoring tool](https://www.scalyr.com/?ref=gkogan.co)---asked its visitors to "sign up." I suggested that we test a version of the button that *gives* and *compels*: "Try it Free". Here's what happened:

**Asking visitors to *Try it Free* increased clicks by 212%.**

Complete obliteration of the old "Sign Up" button, and a huge win for a test that took two minutes to set up.

![A/B test on Scalyr resulted in 212% increase in clicks.](https://www.gkogan.co/content/images/2024/07/scalyr-test-result.png)

### Now try it yourself...

Test a variation of your "sign up" button with something that *gives*, *compels*, and is *tied to your product*. It's one of the easiest things to test, and could have a huge effect on your conversion rates. If you follow my advice then you're almost certain to do better than asking visitors to "sign up."

## airbnb javascript data visualization library

[visx](https://airbnb.io/visx/)

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092401.jpg)

Airbnb 推出的一套数据可视化组件库，基于 D3 和 React。

## milliseconds in one day math expression quote

[一天的毫秒数](https://twitter.com/3blue1brown/status/1282480577036251136)

下面计算式的结果，就是一天的毫秒数。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092218.jpg)

这个式子的来历如下。

![](https://www.wangbase.com/blogimg/asset/202009/bg2020092219.jpg)

## open testing version is just marketing quote

苹果公司在发布新的操作系统（iOS、iPadOS、watchOS ）之前，都公开了测试版，但是等到正式版上市，并没有多少改进，依然有很多 Bug。

那么，公开测试版的意义何在？真的是为了提高正式版的质量吗？......无论最初的目的是什么，公共测试版现在都是一种营销工具，一种大肆宣传新版本、并让苹果爱好者购买与新版本一起发布的新产品的方式。

-- [《苹果软件的测试版》](https://leancrew.com/all-this/2020/09/betas/)

## writing a textbook is the only way an old engineer builds impact quote

有一种说法，年龄在 35 岁以上的人，建立学术影响力的唯一机会是编写一本教科书。

-- [Mark Seemann](https://blog.ploeh.dk/2020/09/14/we-need-young-programmers-we-need-old-programmers/)

## the society is becoming cyber punk view

本周话题：这个社会是否正在变成"赛博朋克"？

下个月，热门游戏[《赛博朋克 2077》](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)就要上市了，发布了好多新闻和预告片。我突然觉得，"赛博朋克"这个词（Cyberpunk）很值得谈一下。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100502.jpg)

"赛博朋克"是两个英语单词的组合：Cyber（赛博）和 punk（朋克）。

"赛博"表示网络技术，比如"网络空间"的英语单词就是 Cyberspace。"朋克"最早是一种摇滚音乐的流派，后来指那些叛逆的另类青年，跟主流社会格格不入。

连在一起，"赛博朋克"就是指高科技社会的另类青年。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100503.jpg)

朋克大多数都是没钱的底层边缘人，所以"赛博朋克"后来就被引申为一种未来高科技社会的景象：

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100504.jpg)

一切受到高度控制，所有东西都自动化运作，富人、社会名流、精英享受着美好生活；但是，底层的大量贫民生活条件恶劣，没钱消费，没办法把握自己的命运，内心苦闷，不知出路何在，非常迷茫。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100506.jpg)

他们的心理非常压抑，看不到翻身的希望，行为和价值观完全是叛逆的。精神萎靡，沉迷于各种娱乐，寻求麻醉和逃避。

广义地说，只要你属于高科技社会的底层，抗拒主流文化，那么你在精神上就是"赛博朋克"。

我有时觉得，这个周刊就是站在底层的视角，观察这个高科技社会，试图有所作为，所以也许可以改名叫做《赛博朋克周刊》。

## startup abstract math functions view

本周话题：创业的凸函数和凹函数

著名畅销书[《黑天鹅》](https://book.douban.com/subject/6854525/)的作者纳西姆-塔勒布（Nassim Taleb），以前是纽约大学的数学教授，后来从事数理金融和风险管理。他写了很多科普文章，使用数学概念去分析各种现象。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100903.jpg)

他有一个[说法](https://www.indiehackers.com/post/bootstrapping-and-convexity-fb3b2da7c9)，我觉得很新奇。  他说创业的时候，要考虑创业方向是凸函数还是凹函数。

简单说，凸函数（convex function）就是函数曲线开头向上（下图左），凹函数（concave function）就是函数曲线开口向下（下图右）。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100904.jpg)

塔勒布说，最好的创业方向是下面这种曲线。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100905.jpg)

上图的竖轴是收益（正向为盈利，负向为亏损），横轴是各种外部因素（正向为有利因素，负向为不利因素）。创业开始时，你的收益是零（曲线与横轴的交点），不知道未来会怎样。

好的创业是这个样子：外部环境有利时，你的收益会快速上升，并且上升空间是巨大的；外部环境不利时，你的亏损会缓慢累积，并且最大损失是有限的。这种曲线正是凸函数，如果反过来，你的创业是凹函数，那就完了：盈利有天花板，上升缓慢，亏损则可能无限地快速上升。

举例来说，你的创业项目是一个开源软件，没有现成的商业模式，你还辞职来干，那就属于凹函数创业。你会很辛苦，万一创业失败就会很惨。

有些年轻人"裸辞"，没找到下家就辞职，这种行为也属于凹函数。如果找到的还是同类工作，工资能高到哪里去，万一找不到，就会长期失业，处境更被动。

这种使用数学概念分析日常行为，我觉得很有意思。这也是我佩服西方学者的地方，他们似乎特别善于将各种司空见惯的现象，进行模型化（modelization）和概念化（Conceptualization），从不一样的角度思考问题。  这就叫"抽象化能力"，特别值得学习，能把具体的东西变抽象，也能把抽象的东西变具体。

## google workspace apps icon redesign theory

[谷歌 Workspace 的新图标](https://9to5google.com/2020/10/06/new-gmail-icon/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100703.jpg)

疫情发生后，谷歌开始整合邮件、日历、通讯、办公等产品，将原来的办公套件 G Suite 升级成了 Google Workspace，作为个人和企业的网上工作的解决方案。为了适应这个转变，它重新设计了这些产品的图标，使得它们更加协调。

下面依次是 Gmail、日历、文档、视频会议、即时通信的新图标。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100704.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100705.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100706.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100707.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100708.jpg)

## unfettered happy chinese on github theory

[GitHub 的中国乱象](https://www.pingwest.com/a/177413)（中文）

很多中国程序员正在滥用 GitHub，比如有人买 Star 登上 GitHub Trends 排行榜。

---

### GitHub 的中国乱象：刷星、高仿、骂街和版聊

> 不守规矩的玩家，污染的是整个环境，以及中国人的集体声誉。

大家好，硅星人又来揭黑打假了。

今天，我们关注一下人称全球最大程序员交友社区的  **GitHub。**

这两天有朋友问我：你有关注前端圈最近的娱乐大新闻吗？然后扔给我一个网站，名叫前端娱乐圈：

![](https://cdn.pingwest.com/portal/2018/09/21/Fpe7E94N_ETOe_7B8KA3LvIKKd5a.gif?x-oss-process=style/article-body)

点进去看了下，是另一个程序员社区"掘金"的页面。ID 名为"花裤衩"的用户放了一张截图：

![](https://cdn.pingwest.com/portal/2018/09/21/FlwXQSEPGqRnYZg8D66aeBZHB5u0.png?x-oss-process=style/article-body)

虽然硅星人自己不是程序员，倒也还是对 GitHub 稍有了解的。

这个 Trending 是统计项目每日增加的星数 (Star) 得来的，而在 GitHub 上，星就和别处的收藏、按赞的意思差不多。

而截图显示，这个项目 kui-vue 的星数高达**1,100**多个，而且是在**一天内**就增加了超过**1,000**个星。

相信硅星人的工程师朋友们都知道：能登上 GitHub Trending 的项目，肯定都是很厉害的项目。

比如，某个行业从来没有人做过的重要功能组件，或者比之前最佳方案显著优秀的"轮子"\*，抑或大公司开发的影响力比较大的项目开源，都有可能登上 GitHub Trending。

比如 Google 的深度学习框架 TensorFlow 开源的时候，就上过 Trending：

![](https://cdn.pingwest.com/portal/2018/09/21/FoCAofNLx_lHx4QSv3SLKXOIDTJE.jpg?x-oss-process=style/article-body)

**问题在于，这个 kui-vue 前端项目，并没有很厉害。不但 PR 和 Issue** 很少，也并不是来自什么大公司。\*\*

就跟微信公众号阅读量太高，赞数 & 留言太少一样，GitHub 项目星数很多 PR & Issue 不成比例，也很蹊跷。

用户"花裤衩"没用多久就发现了 kui-vue 的问题所在：给这个项目按星的大量用户，都有明显的共同特征：

**_1. 没有头像_**

![](https://cdn.pingwest.com/portal/2018/09/21/Fh_4V66KRl-raQcJJFXamIENRBCu.jpg?x-oss-process=style/article-body)

**_2. 都按星了相同的几个项目_**

![](https://cdn.pingwest.com/portal/2018/09/21/FhdDU0JrL7aieGQ0RUlVby3Emldw.jpg?x-oss-process=style/article-body)

**谁都不傻：这不很明显的机器人吗！**

现在基本可以确定，kui-vue 是靠刷星在 9 月 2 日冲上的 Trending。

（是的，我也是头一回知道，原来 GitHub 也可以刷...）

![](https://cdn.pingwest.com/portal/2018/09/21/FjM-jxnABUyOLsoJpDjAG9Ng5kro.jpeg?x-oss-process=style/article-body)

真的有很多用户（不少都是中国用户）上刷星。

多到有人在 GitHub 上专门做了个[黑名单](https://github.com/cheathub/cheats)，记录有作弊行为的用户和项目：

![](https://cdn.pingwest.com/portal/2018/09/21/FkWceqG5sSn5r4cEvXf3m3Q-Z-Ta.jpg?x-oss-process=style/article-body)

硅星人发现，很多举报刷星项目的朋友都提到过，在淘宝上有店铺专门做这种生意......

![](https://cdn.pingwest.com/portal/2018/09/21/FoxTGZ2hocEvrg1iP445m5YPxiQN.jpg?x-oss-process=style/article-body)

不是说说而已，下面这些截图显示，淘宝上还真有做这行生意的：

![](https://cdn.pingwest.com/portal/2018/09/21/FnAgCdZpEel-Mhfr0FsErh_BS7gv.jpeg?x-oss-process=style/article-body)

![](https://cdn.pingwest.com/portal/2018/09/21/Fk_rRGAhFPSDZyiba_1EW_CEN2eE.jpeg?x-oss-process=style/article-body)

![](https://cdn.pingwest.com/portal/2018/09/21/Fj_tz-hQYxZJXH_hPmadJCXWXZpk.jpg?x-oss-process=style/article-body)

**真是万能的淘宝......**

这些截图也透露了几个比较重要的消息：

首先：用户刷星，违反 GitHub 的用户协议是淘宝商家或者提供这种服务的人，并不是用户本人。严格来讲，用户只是有不诚信行为而已；

**其次，最后一张截图展示了很多用户刷星的动机所在：想让自己的努力更容易被别人看到。**

和大部分职业一样，软件工程师入职前也得面试。

对于他们，GitHub 就是简历。他们的企图很简单：当面试官看到库里有星数很高的项目，通常代表这个程序员有能力开发高质量的项目，在圈内有一定的影响力或者潜力。

招来这个人，不仅能让开发变快让业务更顺，还能让公司在开发者社群里提高存在感和地位，说出去都是"我们公司有 GitHub 上高星数的程序员"，挺有面子的。

然而问题在于：**大部分程序员都是真的刻苦开发钻研技术，做出优秀的项目，却总是有人选择走捷径、耍小聪明。**

最近几年来，随着中国科技互联网创新的加速，中国程序员也越来越多。需求也提高了，也就有了 GitHub 刷星这回事。

当然，也别全都当面试官是傻子嘛......

![](https://cdn.pingwest.com/portal/2018/09/21/FsYNj0r8ex0006apufb3dx0-Xz40.png?x-oss-process=style/article-body)

![](https://cdn.pingwest.com/portal/2018/09/21/FnxL6YmnR8HBd-dM-v5hwsxJsBmB.jpeg?x-oss-process=style/article-body)

"感觉就是一点老鼠屎坏了一锅汤，"硅谷程序员小陈告诉硅星人，

> 面试官以前会用星数来判断面试者的能力。现在知道原来这些也能买，就不考虑了。**这样对真正有技术实力、靠自己本领攒了很多星的朋友很不公平。**

刷星只是 GitHub 上"中国乱象"的一小部分。

为了写这篇，硅星人查了查资料也问了身边的程序员朋友，发现中国人在 GitHub 上乱搞的能力远不止于刷星。

来，我们一起看看这些神奇的玩法：

### 一、高仿

高仿是最近几年 GitHub 上特别猖狂的一种造假/不诚信行为。具体有这么几种体现形式：

**1）用户高仿**

用户高仿就是某些坏蛋把别的（通常比较优秀的）GitHub 用户完全照搬过来，头像、地区、组织等用户信息和抄袭对象完全一样。[以下截图来自 V2EX ](https://www.v2ex.com/t/342137)

原主：

![](https://cdn.pingwest.com/portal/2018/09/21/FvtjUOBuPs41Y1nzte8yTTFY5X8V.png?x-oss-process=style/article-body)

高仿，看 ID 多了一个 "i"：

![](https://cdn.pingwest.com/portal/2018/09/21/FrT2gIiiv4Xo0TUddFZPkDCH1qYS.png?x-oss-process=style/article-body)

这样做的效果就是高仿者自己的项目得到了很多用户关注、按星和 PR；与此相对，正牌作者项目的关注、技术讨论和支持，甚至捐助都被分流走了。

这里面还有细节。观察了很多高仿者，发现他们 repo 里的项目都是差不多的......莫非都是一个地方出来的？

![](https://cdn.pingwest.com/portal/2018/09/21/Fv3KvnCvDSNeiIwkAkEYOIIPjrf9.jpeg?x-oss-process=style/article-body)

**2）产品高仿**

产品高仿就是完全仿照某些知名的移动互联网产品的外观开发一个项目。

去 GitHub 上搜一圈，你应该能找到一大堆高仿微信、高仿美团、高仿饿了么、高仿知乎之类的项目。

这种项目大多直接亮明了是高仿身份。

![](https://cdn.pingwest.com/portal/2018/09/21/FlFvGdRDRSx6rUUeESyCuhLvzpUY.jpg?x-oss-process=style/article-body)

一位在掘金工作的朋友表示，**GitHub 上的高仿项目，大多都是社会上的软件开发培训班产物。**

他说，有些培训班的学员还会去抄袭掘金上别人的文章，在简历里说是自己写的；最不要脸的是发了高仿的项目到掘金上，然后截图说被社区推荐，还说掘金跟这些培训机构有合作。

"我们之前是收到很多高仿的投稿，例如使用 vue 高仿饿了么，高仿美团，都是培训班搞的幺蛾子。"

### 二、垃圾项目刷版

培训班除了喜欢做高仿之外，还特别喜欢做一件事：让学员把 GitHub 当网盘，把作业------通常都是垃圾项目------放到 GitHub 上刷版。

截图来自掘金：

![](https://cdn.pingwest.com/portal/2018/09/21/FupydNUWxnQyisnjL6Viuse3bBzS.jpg?x-oss-process=style/article-body)

项目基本就是贪吃蛇、象棋、京东之类的：

![](https://cdn.pingwest.com/portal/2018/09/21/FitodBxPI-96b61Ik7TqDmKgWjtJ.jpg?x-oss-process=style/article-body)

![](https://cdn.pingwest.com/portal/2018/09/21/FsNypCvtB3D65mpdwzpdOqV1-eHq.jpg?x-oss-process=style/article-body)

我终于知道淘宝上消失的那些 "GitHub 代练"都跑哪儿去了。

**因为培训班都把这些业务托管了**：从建立个人网站，到包装 GitHub 账号，包括刷星、关注、优先客户的 PR 等，应有尽有，一站解决......

培训班为什么这么做，就是因为现在的科技公司招人都很看重候选人在 GitHub 这样的程序员社区里面的表现。

### 三、版聊

本质上，GitHub 是个使用 Git 技术进行版本控制的软件源代码托管服务。

GitHub 同时也代表一个开源的社区。**但在一切之前，它本身应该是一个严格的、没有 bullshit 的工具。**

然而如果你把 GitHub 只看作是一个社区的话，就很容易滥用它的一些功能。

下面这几张截图，出自前端圈一个比较有名的事件。今年，Node 之父 Ryan Dahl (ry) 开发了一个新项目 deno，在 GitHub 上开了源。

**结果，有大量中文用户跑到这个项目上版聊：**

![](https://cdn.pingwest.com/portal/2018/09/21/FsvY7O1gk-NtxPJRBfcAbaOroTJ9.jpg?x-oss-process=style/article-body)

![](https://cdn.pingwest.com/portal/2018/09/21/Fm87E5uUz0KM-ruTM5kz6Vkdb3Lr.jpg?x-oss-process=style/article-body)

版聊里甚至出现了下面这种神奇的中式英文：

![](https://cdn.pingwest.com/portal/2018/09/21/FhmfAbJQo0YXE0FqPiIwQT6VsnNR.jpg?x-oss-process=style/article-body)

这些版聊，是通过项目的 Issue 形式发布的，然而 Issue 的本来作用是让用户举报 bug、对项目提交技术上的建议和意见用的。

遗憾的是，这些中国用户根本没有掌握 GitHub 的正确用法， 还以为它是天涯......

![](https://cdn.pingwest.com/portal/2018/09/21/FiyFbQ2k8DqCBIAv5q8OfjIYtR6P.jpeg?x-oss-process=style/article-body)

### 四、自以为能上天

如果 ry/deno 上的 Issue 版聊把 GitHub 变成了天涯，那么明哥已经把 GitHub 变成了 QQ 空间。

![](https://cdn.pingwest.com/portal/2018/09/21/FvxVwpK00xcySqBTj0n2xkdjgSLP.png?x-oss-process=style/article-body)

明哥 (MingGe) **以项目描述 README 文风嚣张，和项目实际代码质量极低，在 GitHub 上特别出名......**

让我们看一下明哥的项目 MingGeJS 的项目描述：

> 继优秀作品 shearphoto 截图插件，本人又再推出国产山寨 JQUERY，为什么我要开发一个山寨 JQUERY？老实说我从来没用过 JQUERY，正因为我反感 JQUERY。
>
> 为什么我反感，因为我完全有开发 JQUERY 的能力，JQUERY 的底层我都了如指掌。
>
> 它的名字叫 MingGeJs，MingGe 就是我的大名， 一看到插件名字，就知道作者是我，知道它是国产的，让别人知道国产类库一样做得很出色，出众
>
> 本人文化程度不高，初中毕业！半句英文都不会，但是我相信只要肯努力一样可以实现自己的梦想。
>
> MingGeJS 的梦想有点大胆，就是在全球范围内，占据 jQuery 百分之 50 以上的用户份额。

（千真万确都是他自己写的）

**这种骂街式的 README，是不是特别的霸气！**

![](https://cdn.pingwest.com/portal/2018/09/21/FlZdSZUYFcTOQm_KnZwvNMHUEJxw.jpeg?x-oss-process=style/article-body)

然而[知乎网友鲁小夫看了代码发现](https://www.zhihu.com/question/38537088/answer/76997255)，明哥的这个项目代码质量是真的差，不但里面英文拼写有一大堆错，还把抄袭对象 JQuery 里面很多好的地方全都改的更烂了......

![](https://cdn.pingwest.com/portal/2018/09/21/FlCI61LuZcDxzyTpLuhTR0tgwtnM.jpg?x-oss-process=style/article-body)

就是这样一个神奇的项目，在 GitHub Trending 上一度追赶苹果 Swift：

![](https://cdn.pingwest.com/portal/2018/09/21/Fmhe17G1xKPtJVXj2FBv7NbalJZd.jpeg?x-oss-process=style/article-body)

明哥就这样出名了。在项目的一个更新文档里，他分享了自己的经历：

![](https://cdn.pingwest.com/portal/2018/09/21/Fh_nrd6mWP0SxJbQ87qb0kU01Czi.png?x-oss-process=style/article-body)

怎么讲，明哥你赢了！

![](https://cdn.pingwest.com/portal/2018/09/21/FtAtdJWY4zX_4-Hp117E07MP0Ikx.jpeg?x-oss-process=style/article-body)

**这些中国乱象，已经在 GitHub 上引起了公愤。**

deno 项目 Issue 被中文刷屏，导致作者 ry 苦不堪言。他不得不自己也写了一条 Issue，告诉所有人：**如果没有正经事，请保持安静。**

![](https://cdn.pingwest.com/portal/2018/09/21/FqW4n5NlBA53wbwAgiPkDH8Npa4F.jpg?x-oss-process=style/article-body)

其他英文用户也看不下去了，纷纷要求 ry 关掉无意义的 Issue：

![](https://cdn.pingwest.com/portal/2018/09/21/FnXgTj-M8ql-ex2vXMpX4m8PztrG.jpg?x-oss-process=style/article-body)

事情大到了 ry 一度不得不关掉 Issue 功能（后来打开了）。

当然，最看不下去的，还是中国自己的开发者。

因为这些乱象虽然猖狂，**总体上 GitHub 的大部分中国用户，还是很遵守这个开源社区的规矩的。**

这也是为什么在知乎、V2EX、掘金和其他平台上，能够看到大量对高仿、刷星和版聊的声讨。

一位硅谷程序员小魏也关注过 GitHub 上的中国乱象，他表示，这些行为极大地影响了用户使用 GitHub 的效率，扰乱视听。

他说的没错：高仿项目分流了真实项目的关注度；刷星的项目容易导致新手用户误入歧途；使用 Issue 版聊严重干扰了项目作者的工作和生活。

**不守规矩的玩家，污染的是整个环境，以及中国用户的集体声誉。**

**还 GitHub 一片净土吧。**

## sketchy characters generator web app

[Calligrapher.ai](https://www.calligrapher.ai/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100902.jpg)

一个在线工具，可以将英文输入变成手写体，并具有动画效果，提供 SVG 格式下载。上图是输入 Google 的效果。

## whether to be a founder view theory

[工作风险和职业风险](https://eriktorenberg.substack.com/p/starting-a-company-is-less-risky)

有一种观点认为，创业者最好先加入大厂，等到建立了自己的人际网络、品牌和技能以后，再开始创业。

我不认同这种观点。

并不是说你在大厂不会有成就，你会有的，但是这跟创业是两回事。最终来说，在大厂工作，你主要学到的就是如何在大厂工作，让你知道内部运作良好的大公司是怎么回事。创业则是从 0 到 1，这跟在大厂工作是完全不同的另一种技能。

风险可以分成两种：工作风险和职业风险。

- 工作风险：你的工作将不再存在的可能性。
- 职业风险：你的长期职业受到负面影响的可能性。

创业公司的工作风险要比大公司高得多，但它们会大大降低你的职业风险。 创业失败并不会令你的简历失色。相反地，在很多人眼里，这是你一生都随身携带的荣誉徽章：你去过竞技场。

不过，创业并不适合所有人，大多数人其实都不适合创业。

创业只适合那些希望成为创始人的人。创业者要承受巨大的压力，可能会很孤独，也可能会产生认知失调、自我怀疑和其他副作用。你会牺牲掉生活的稳定性和内心的平静（也许是幸福）。

如果你不想成为创始人，请不要创业。

但是，如果你确实想成立公司，请尽量比你想象的更早开始，不要误以为你必须先在别的公司工作，然后才能开始创业。

---

### Starting a Company is Less Risky Than You Think

> and it might be a better career move too...

[ERIK TORENBERG](https://substack.com/@eriktorenberg)

JUL 26, 2020

---

**Starting a company is less risky than you think.**

Failing at a startup isn't blemish on your resume. On the contrary, in some circles, it's a badge of honor that you carry for the rest of your life---You've been in the arena. That has real currency in the tech community.

We are told that it's better to join a Series A company first, because that will be better training for starting a company than...starting a company. You build your network, brand, and skills and can then start a company, the logic goes.

I don't buy this.

Not that you won't get that and more working at a Series A company. You will. But ultimately, working at Series A company teaches you how to work at a Series A company---or, more charitably, what a well-run company looks like from the inside.

But founding a company is about getting it from 0-1. It's a different skill set. You learn by doing.

We're also told to work at a startup first because it's less risky. I don't buy that either.

Sure, there may be less financial risk in starting a company, but I don't buy the corollary risk typically associated with founding a company---that if we fail, we will be viewed as a failure and thus unemployable.

**On the contrary: In my opinion, starting a company is usually a better way to build your network and your brand relative to joining a company, in addition to having disproportionate financial upside.**

How? External facing founders are, in some sense, building their network all day, chatting with investors, hires, and more---and employees are basically building the founder's network and credibility by proxy. If the company implodes, these networks stay with the founder in their next endeavor.

Brand is a bit trickier, but I think of it like this: companies are effectively quasi-religions and founders are effectively quasi-religious leaders. When employees speak about the company they repeat the founding story, which becomes something of an urban legend. When the company has any sort of success, the founder gets disproportionate credit and publicity, and this recognition also stays with the founder in their next endeavor, even when it's a failure.

Silicon Valley is very charitable in that way: Instead of saying "Wow that founder failed I will never work with him", more often than not, they say "Founding a company is hard. I'm impressed with how much they achieved (before they failed)."

Failure is the norm, after all. So any success achieved before the failure is remarkable.

And it is indeed likely the company will fail. If it's a particularly high profile failure, some people will criticize the founder for raising money and failing, but builders and investors will respect them for trying.

Take [Clinkle](https://www.businessinsider.com/inside-story-of-clinkle-2014-4) as an example--employees left the company almost triumphantly, posting their resignations to social media, and yet the founder still raised money for his next thing. If the [Juicero](https://www.theguardian.com/technology/2017/sep/01/juicero-silicon-valley-shutting-down) founder went out for his next company, I'd bet he'd raise some money too. Silicon Valley respects the person in the arena.

So this is why in many important tech circles, there's typically lower career risk in starting a company than joining a company.

Notice I said "career risk", not "[job risk](https://twitter.com/drogier/status/1282530132612145154)"

> **Job Risk:** _the chance your job will no longer exist_
>
> **Career Risk:** _the chance your long-term career will be negatively affected_

Though startups have much higher *job risk* than a larger company, they reward you with greatly diminished *career risk*.

To be sure, starting companies isn't for everyone, or even most people. Many people are simply unable: They may have to take care of other people financially, or they may have other obligations that prevent them from going full-time into work.

Others may just not want to be a founder. Since we celebrate founders so much, there's implicit pressure to become one. But you can make more than enough money (and impact) by working at startups or other companies.

This piece is only for people who want to be founders, but are telling themselves that starting a company sooner is too risky from a career perspective, or that they need to join a company first to learn how to start a company.

It's worth noting that startups have real emotional costs: You'll have more stress, which is hard to put a price on. Likely more loneliness too. You'll become intimately familiar with cognitive dissonance, self doubt & other side effects. You'll sacrifice short-medium term stability & peace of mind (maybe happiness) in exchange for a potential financial & impact outcome that, at the end of the day, is unlikely (separate from any career benefits). You'll hope the journey is its own reward, but it will be hard to appreciate this in the moment.

To be clear, If you can't or don't want to start a company, don't start a company.

**If you do want to start a company though, consider starting earlier than you think. Don't fall for idea that you** **_have_** **to work at a company before starting one, or that it's necessarily a better path.**

To be sure, joining a company can be a better decision for your entrepreneurial career in some scenarios, when it's truly a unique accelerant of network and learning. [Being at Product Hunt](https://medium.com/@eriktorenberg_/thank-you-product-hunt-482bda91882f) accelerated my network more so than anything I could have started at the time. My co-founder Ben Casnocha would [say the same thing](https://casnocha.com/reid-hoffman-lessons) about being Chief of Staff for Reid Hoffman. I think working at [On Deck](http://www.beondeck.com/) (_[ahem](https://www.notion.so/On-Deck-Careers-Hub-d2b11a34824047bc9d9bc2f77695df6c)..._) today would also be that accelerant in terms of meeting future co-founders and investors. Even beyond the career benefits, sometimes you can just achieve the problem you aim to solve better as a part of a company than starting on your own, if they have enough resources and advantages you don't yet have.

However, while sometimes incredible growth opportunities emerge that outweigh anything you could have started on your own, these opportunities are rarer than we think. These roles are often hard to come by---they typically have to be created---so they're less likely to be the first things that come up.

One concern to watch out for by joining a company, if your goal is to eventually start one, is becoming too comfortable. Once you join something that's working and build a reputation there, you may become less eager to start a company that might risk your reputation in the short term---"_What are you even working on_?"---but may be an asymmetric bet for long-term success.

If you do end up joining a company, join a startup over a big company, and then work to become a leader within a company. You want to get to as close to the entrepreneurial activity as possible

If you're unsure whether to start or join a company, the [On Deck Fellowship](https://www.beondeck.com/#odf) (note: we just [announced](https://www.beondeck.com/post/od5-6) the next cohort) helps increase optionality here, by giving you a network and credential even before you start a company. And, once you fundraise, joining a network like [Village Global](http://www.villageglobal.vc/) or [YC](https://www.ycombinator.com/) helps create optionality as well.

My point is not that people are more likely to succeed in building a unicorn than they think. They're not. My point is that even the failed attempt to build a big company---through the skills, network, and reputation gained in the process---often creates more optionality than joining a company, exceptions above notwithstanding.

Nearly a decade ago, I started a company called [rapt.fm](https://www.fastcompany.com/3016754/freestyle-rap-platform-raptfm-goes-beta-tonight-with-a-record-deal-from-tommy-boy) (we lost the actual domain name---don't ask), which was trying to be Twitch for music, starting with rap battles. I spent 3 years of my life on it, and while we had some traction, it didn't really have potential for venture scale, and I ended up winding down the business.

I thought that I'd forever be known as a Total Failure, but a week later people seemed to forget, and I joined Product Hunt as a founding team member. People respected me for trying to build rapt.fm and assumed that I'd just keep trying to build companies, and at one point I'd succeed. I was surprised people respected a failure, but in retrospect it made sense.

Looking back, the rapt.fm experience enabled me to grow my network, learn a lot, and meet people that I'd then go on to build Product Hunt, On Deck, and Village Global with. If I joined a big company, I don't think I'd have built the network to do these things shortly after.

**In conclusion: If you want to start a company some day, consider starting it earlier than you think.  The odds are you won't hit it big the first time, but the potential upside is enormous, and the base case---improving your skills, network, and reputation---likely creates more optionality than working for a big company, making the decision worth it from a long-term career perspective.**

**Ultimately, if your goal is to be a founder, the bigger risk is not that you fail right away, \*\*\***it's that, if you don't start enough companies, you don't get enough actual shots on goal to actually create a big company.\*\*\*

Exhibit A:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F090ccbcc-b3f0-4a44-9816-15ceddef633f_1260x842.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff99cba2a-066c-45e3-84f3-10c6a6af85c7_672x880.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0c1428a4-f350-4615-b8f8-81837130269e_1320x1176.png)

---

**_Book of the week_**: "[Primal Screams](https://www.amazon.com/dp/B07W3NFM2B/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)" by Mary Eberstadt. Mary argues that the rise of political tribalism can be traced back to the collapse of the family. In her [other book](https://www.amazon.com/Mary-Eberstadt/e/B001JRXK4Q) she posits that the collapse of the family can be traced back to the sexual revolution.

**_Podcast of the week_**:[ Jacob Helberg on the US & China cold war and how Silicon Valley should respond.](https://open.spotify.com/episode/1eY66ngiucxTYiSR1gVb1v?si=MLaf1yNtSVGvmY_oCydPVQ)

**_Cosign of the week_**: [Jose Luis Ricon Fernandez De La Puente.](https://twitter.com/ArtirKel) I released a [podcast](https://pca.st/iandj1i7) with him today. He has fantastic [deep dives](https://nintil.com/) on science, longevity, and innovation.

**_Track of the week_**: Marlon Craft. First 4 minutes [here](https://www.youtube.com/watch?v=KfgOD5CalF8&t=289s). Also [here](https://www.youtube.com/watch?v=FV3AG6UY1fE). And [here](https://www.youtube.com/watch?v=9r98flg1yWc).

## dont buy household products with an internet connection quote

切勿购买需要连接互联网的家电产品。它们不仅不安全，而且还会收集你的信息，并试图向你播放广告。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24625626)

## what is staying focused quote

人们认为保持专注，意味着要对那些必须专注去做的事情说 Yes。其实并非如此，保持专注的真正含义是对其他一百个好主意说 No。

-- [乔布斯](https://www.inc.com/marcel-schwantes/warren-buffett-says-this-is-1-simple-habit-that-separates-successful-people-from-everyone-else.html)

## you must dev for teen theory

本周话题：低龄化的互联网

现在，很多人拍视频为生。每天拍若干条，上传到门户网站，靠网站分红和商业合作赚钱。

对他们来说，视频的播放量就是一切，直接决定了收入的多少。他们最关心的一个问题：什么题材会有大量的观众？

我最近好像知道答案了。  我发现，亲子类的视频，也就是跟儿童相关的内容（包括玩具和儿歌），流量都非常好。  随便举几个例子，百度的视频搜索"亲子"。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100906.jpg)

Youtube 搜"儿童玩具"。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100908.jpg)

搜"儿歌"的话，播放量更惊人。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020100909.jpg)

我看了好几个视频网站，觉得这是普遍现象，亲子类视频的播放量非常高。一个很普通的帐号，非常简单的内容，往往有几十万的播放量，极个别甚至高达千万。

当然我不是说，你拍亲子内容，就一定有很多人看。我的意思是，它获得高流量的机会大于其他视频。

如果确实存在这种现象，那么这是为什么？到底什么人在看这些儿童视频呢？

唯一的解释似乎是，互联网用户里面，儿童以及相关人群的比例非常高，高得超乎想象。

我猜想，很多小朋友、家长、婆婆妈妈其实都在网上，构成了互联网很大一部分（超过一半？）的用户，所以儿童视频的流量才会那么高。这些观众平时不太发声，大家听不到他们的声音，但他们是最大的流量来源。这大概也是《爸爸去哪儿》这一类亲子类电视节目，风靡一时的原因。

亲子类视频的流行，其实只是互联网低龄化的一个表现。我有一种感觉，18 岁以下的用户，正在主导互联网。不止是视频网站，整个互联网都变得低龄化。青少年用户（甚至少儿用户）的喜好和观点，主导了互联网的生态和潮流。

不要再错误地认为，互联网是社会精英和知识分子主导的园地。恰恰相反，互联网其实是一个低龄化的地方，网上的主流永远反映的是青少年用户的口味。这反过来又决定了互联网产品的形态：你要开发一个面向大众的互联网产品，就别无选择，只能面向青少年用户群体来开发。

## birds fly wihout flappiing story

[不拍打翅膀的安第斯秃鹰](https://www.theguardian.com/environment/2020/jul/13/andean-condor-fly-without-flapping-wings-flight-bird)

![](https://www.wangbase.com/blogimg/asset/202007/bg2020071422.jpg)

南美洲的安第斯秃鹰重达 15 公斤，翼展为 3 米，是能够在高空飞翔的最重的鸟类。最近，科学家将摄像头绑在八只秃鹰身上，震惊地发现这些鸟在飞行时，竟然只用 1％的时间挥动翅膀。

其中，有一只鸟飞了五个多小时，距离 160 公里，整个过程没有拍打过一次翅膀，也就是说，在 5 个小时的飞行过程中，它的翅膀是不动的。这意味着，这种鸟类一定具有识别气流的本领，靠着上升气流滑翔，以便节省能量。就好比人类极限运动中的翼装飞行，也是不能挥动翅膀的。

## service worker sim spa tech theory

[Service Worker 模拟单页应用 SPA](https://itnext.io/your-single-page-app-is-now-a-polyfill-7881fb01694e)（英文）

单页应用（SPA）现在很流行，好处是可以快速响应用户操作，节省流量，坏处是大大提高了页面的复杂性。本文介绍一种思路，使用 Service Worker 拦截用户请求，通过`fetch()`请求后端网页，再更新前端应用，从而使用户有 SPA 的体验，同时又降低了复杂性。

## silver wolf attack and defence at online contest cheeting story

[分屏器能用于线上考试作弊吗？](https://zhuanlan.zhihu.com/p/155819108)（中文）

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101604.jpg)

线上考试时，学校使用摄像头进行云监考，有人就想到使用分屏器作弊。（[@Gorvey](https://github.com/ruanyf/weekly/issues/1442)  投稿）

## wiki on map web app

[WikiMap](https://wikimap.wiki/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102203.jpg)

在地图上显示维基百科的条目，非常酷。

## startup is going wild view theory

[你不一定需要一个老板](http://paulgraham.com/boss.html)

作者：保罗-格拉汉姆（Paul Graham）

去年我在非洲，看到了很多野生动物，以前我只在动物园里见过它们。那里的所有动物都很不一样，尤其是狮子。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020101301.jpg)

野外的狮子比动物园的狮子似乎更有活力十倍，它们就像不同的动物。

我怀疑，野外的狮子会更喜欢它的生活。动物园的生活固然更轻松，但这不是大自然为狮子安排的生活。

人类也是如此，在大公司工作就像关进了动物园。人类其实并不适应在庞大的群体中工作。团队越大，效率越低，这几乎成了定律。公司知道庞大的团队行不通，就把内部划分成足够小的团队来一起工作。为了协调这些小团队，他们必须为每个人设置一个老板。

大公司即使分成小团队，其实也是一种假象，终究不可能像真正的小团队。它缺少一样东西：个人的主动性。大公司的员工就像动物园里面的狮子，很少可能有完全的主动性，你的老板就是施加给你的约束。

创业公司的创始人和早期员工，则像野外的狮子，可以按照本性自然的生活。

大公司的局限性对程序员特别明显，因为编程的本质是构建新事物。但是，你拥有的自由与公司组织结构的大小成反比。组织越大，你做新的事情时，面临阻力也越大。

不要误解我，在小公司工作并不能确保自由。我想要表达的是，大公司为自由设置了上限，而不是下限。

大公司限制主动性的一个后果，就是无论公司如何努力保持创业精神，都会不可避免地放慢脚步。

我们已经资助了许多不同类型的创始人，得到了足够的数据。据我观察，已经工作了几年的创业者，似乎比刚离开大学的创业者确实要好一些，但这不是因为他们工作了几年，而是因为他们年纪大了。

大公司出来找我们的人似乎有些保守，很多人患得患失。三个月后，他们发生了变化，开始有了信心，似乎重新进入了生长期。听起来也许很奇怪，他们的状态就是既开心又担忧。我也会这样描述野外的狮子。

---

### You Weren't Meant to Have a Boss

March 2008, rev. June 2008

Technology tends to separate normal from natural. Our bodies weren't designed to eat the foods that people in rich countries eat, or to get so little exercise. There may be a similar problem with the way we work: a normal job may be as bad for us intellectually as white flour or sugar is for us physically.

I began to suspect this after spending several years working with startup founders. I've now worked with over 200 of them, and I've noticed a definite difference between programmers working on their own startups and those working for large organizations. I wouldn't say founders seem happier, necessarily; starting a startup can be very stressful. Maybe the best way to put it is to say that they're happier in the sense that your body is happier during a long run than sitting on a sofa eating doughnuts.

Though they're statistically abnormal, startup founders seem to be working in a way that's more natural for humans.

I was in Africa last year and saw a lot of animals in the wild that I'd only seen in zoos before. It was remarkable how different they seemed. Particularly lions. Lions in the wild seem about ten times more alive. They're like different animals. I suspect that working for oneself feels better to humans in much the same way that living in the wild must feel better to a wide-ranging predator like a lion. Life in a zoo is easier, but it isn't the life they were designed for.

**Trees**

What's so unnatural about working for a big company? The root of the problem is that humans weren't meant to work in such large groups.

Another thing you notice when you see animals in the wild is that each species thrives in groups of a certain size. A herd of impalas might have 100 adults; baboons maybe 20; lions rarely 10. Humans also seem designed to work in groups, and what I've read about hunter-gatherers accords with research on organizations and my own experience to suggest roughly what the ideal size is: groups of 8 work well; by 20 they're getting hard to manage; and a group of 50 is really unwieldy. [[1](https://paulgraham.com/boss.html#f1n)]

Whatever the upper limit is, we are clearly not meant to work in groups of several hundred. And yet---for reasons having more to do with technology than human nature---a great many people work for companies with hundreds or thousands of employees.

Companies know groups that large wouldn't work, so they divide themselves into units small enough to work together. But to coordinate these they have to introduce something new: bosses.

These smaller groups are always arranged in a tree structure. Your boss is the point where your group attaches to the tree. But when you use this trick for dividing a large group into smaller ones, something strange happens that I've never heard anyone mention explicitly. In the group one level up from yours, your boss represents your entire group. A group of 10 managers is not merely a group of 10 people working together in the usual way. It's really a group of groups. Which means for a group of 10 managers to work together as if they were simply a group of 10 individuals, the group working for each manager would have to work as if they were a single person---the workers and manager would each share only one person's worth of freedom between them.

In practice a group of people are never able to act as if they were one person. But in a large organization divided into groups in this way, the pressure is always in that direction. Each group tries its best to work as if it were the small group of individuals that humans were designed to work in. That was the point of creating it. And when you propagate that constraint, the result is that each person gets freedom of action in inverse proportion to the size of the entire tree. [[2](https://paulgraham.com/boss.html#f2n)]

Anyone who's worked for a large organization has felt this. You can feel the difference between working for a company with 100 employees and one with 10,000, even if your group has only 10 people.

**Corn Syrup**

A group of 10 people within a large organization is a kind of fake tribe. The number of people you interact with is about right. But something is missing: individual initiative. Tribes of hunter-gatherers have much more freedom. The leaders have a little more power than other members of the tribe, but they don't generally tell them what to do and when the way a boss can.

It's not your boss's fault. The real problem is that in the group above you in the hierarchy, your entire group is one virtual person. Your boss is just the way that constraint is imparted to you.

So working in a group of 10 people within a large organization feels both right and wrong at the same time. On the surface it feels like the kind of group you're meant to work in, but something major is missing. A job at a big company is like high fructose corn syrup: it has some of the qualities of things you're meant to like, but is disastrously lacking in others.

Indeed, food is an excellent metaphor to explain what's wrong with the usual sort of job.

For example, working for a big company is the default thing to do, at least for programmers. How bad could it be? Well, food shows that pretty clearly. If you were dropped at a random point in America today, nearly all the food around you would be bad for you. Humans were not designed to eat white flour, refined sugar, high fructose corn syrup, and hydrogenated vegetable oil. And yet if you analyzed the contents of the average grocery store you'd probably find these four ingredients accounted for most of the calories. "Normal" food is terribly bad for you. The only people who eat what humans were actually designed to eat are a few Birkenstock-wearing weirdos in Berkeley.

If "normal" food is so bad for us, why is it so common? There are two main reasons. One is that it has more immediate appeal. You may feel lousy an hour after eating that pizza, but eating the first couple bites feels great. The other is economies of scale. Producing junk food scales; producing fresh vegetables doesn't. Which means (a) junk food can be very cheap, and (b) it's worth spending a lot to market it.

If people have to choose between something that's cheap, heavily marketed, and appealing in the short term, and something that's expensive, obscure, and appealing in the long term, which do you think most will choose?

It's the same with work. The average MIT graduate wants to work at Google or Microsoft, because it's a recognized brand, it's safe, and they'll get paid a good salary right away. It's the job equivalent of the pizza they had for lunch. The drawbacks will only become apparent later, and then only in a vague sense of malaise.

And founders and early employees of startups, meanwhile, are like the Birkenstock-wearing weirdos of Berkeley: though a tiny minority of the population, they're the ones living as humans are meant to. In an artificial world, only extremists live naturally.

**Programmers**

The restrictiveness of big company jobs is particularly hard on programmers, because the essence of programming is to build new things. Sales people make much the same pitches every day; support people answer much the same questions; but once you've written a piece of code you don't need to write it again. So a programmer working as programmers are meant to is always making new things. And when you're part of an organization whose structure gives each person freedom in inverse proportion to the size of the tree, you're going to face resistance when you do something new.

This seems an inevitable consequence of bigness. It's true even in the smartest companies. I was talking recently to a founder who considered starting a startup right out of college, but went to work for Google instead because he thought he'd learn more there. He didn't learn as much as he expected. Programmers learn by doing, and most of the things he wanted to do, he couldn't---sometimes because the company wouldn't let him, but often because the company's code wouldn't let him. Between the drag of legacy code, the overhead of doing development in such a large organization, and the restrictions imposed by interfaces owned by other groups, he could only try a fraction of the things he would have liked to. He said he has learned much more in his own startup, despite the fact that he has to do all the company's errands as well as programming, because at least when he's programming he can do whatever he wants.

An obstacle downstream propagates upstream. If you're not allowed to implement new ideas, you stop having them. And vice versa: when you can do whatever you want, you have more ideas about what to do. So working for yourself makes your brain more powerful in the same way a low-restriction exhaust system makes an engine more powerful.

Working for yourself doesn't have to mean starting a startup, of course. But a programmer deciding between a regular job at a big company and their own startup is probably going to learn more doing the startup.

You can adjust the amount of freedom you get by scaling the size of company you work for. If you start the company, you'll have the most freedom. If you become one of the first 10 employees you'll have almost as much freedom as the founders. Even a company with 100 people will feel different from one with 1000.

Working for a small company doesn't ensure freedom. The tree structure of large organizations sets an upper bound on freedom, not a lower bound. The head of a small company may still choose to be a tyrant. The point is that a large organization is compelled by its structure to be one.

**Consequences**

That has real consequences for both organizations and individuals. One is that companies will inevitably slow down as they grow larger, no matter how hard they try to keep their startup mojo. It's a consequence of the tree structure that every large organization is forced to adopt.

Or rather, a large organization could only avoid slowing down if they avoided tree structure. And since human nature limits the size of group that can work together, the only way I can imagine for larger groups to avoid tree structure would be to have no structure: to have each group actually be independent, and to work together the way components of a market economy do.

That might be worth exploring. I suspect there are already some highly partitionable businesses that lean this way. But I don't know any technology companies that have done it.

There is one thing companies can do short of structuring themselves as sponges: they can stay small. If I'm right, then it really pays to keep a company as small as it can be at every stage. Particularly a technology company. Which means it's doubly important to hire the best people. Mediocre hires hurt you twice: they get less done, but they also make you big, because you need more of them to solve a given problem.

For individuals the upshot is the same: aim small. It will always suck to work for large organizations, and the larger the organization, the more it will suck.

In an [essay](https://paulgraham.com/start.html) I wrote a couple years ago I advised graduating seniors to work for a couple years for another company before starting their own. I'd modify that now. Work for another company if you want to, but only for a small one, and if you want to start your own startup, go ahead.

The reason I suggested college graduates not start startups immediately was that I felt most would fail. And they will. But ambitious programmers are better off doing their own thing and failing than going to work at a big company. Certainly they'll learn more. They might even be better off financially. A lot of people in their early twenties get into debt, because their expenses grow even faster than the salary that seemed so high when they left school. At least if you start a startup and fail your net worth will be zero rather than negative. [[3](https://paulgraham.com/boss.html#f3n)]

We've now funded so many different types of founders that we have enough data to see patterns, and there seems to be no benefit from working for a big company. The people who've worked for a few years do seem better than the ones straight out of college, but only because they're that much older.

The people who come to us from big companies often seem kind of conservative. It's hard to say how much is because big companies made them that way, and how much is the natural conservatism that made them work for the big companies in the first place. But certainly a large part of it is learned. I know because I've seen it burn off.

Having seen that happen so many times is one of the things that convinces me that working for oneself, or at least for a small group, is the natural way for programmers to live. Founders arriving at Y Combinator often have the downtrodden air of refugees. Three months later they're transformed: they have so much more [confidence](http://paulmckellar.com/photos/03l) that they seem as if they've grown several inches taller. [[4](https://paulgraham.com/boss.html#f4n)] Strange as this sounds, they seem both more worried and happier at the same time. Which is exactly how I'd describe the way lions seem in the wild.

Watching employees get transformed into founders makes it clear that the difference between the two is due mostly to environment---and in particular that the environment in big companies is toxic to programmers. In the first couple weeks of working on their own startup they seem to come to life, because finally they're working the way people are meant to.

## tranlate like generating hash quote

有的人翻译文章，就像哈希函数。经过他的翻译，就认不出原文了。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24696385)

## npm dependencies suck quote

根据研究，一个 JavaScript 项目平均有 377 个依赖关系，而 Java 项目有 43 个，Python 项目只有 16 个。你使用的依赖项越多，就隐含着必须信任的外部开发者也越多。

-- [《NPM 的信任网》](https://www.btao.org/2020/10/02/npm-trust.html)

## why children learn language faster than grown ups quote

为什么成年人学习外语，不如儿童快？一个主要原因是，如果小孩犯了语法错误，随时会得到纠正；成年人犯了语法错误，别人会不好意思指出，如果当面指出，很可能得罪人。

-- [Hacker News 读者](https://news.ycombinator.com/item?id=24712573)

## ruanyf wechat mini app guide

微信小程序入门教程

本周，我发布了[《微信小程序入门教程》](https://www.ruanyifeng.com/blog/2020/10/wechat-miniprogram-tutorial-part-one.html)，分成四次连载，帮助初学者学会写微信小程序。

这是免费教程，不收任何费用，有兴趣的同学可以看看，相信比其他教程更简单清晰。

## space x law on mars theory

[星链计划的火星协议](https://www.reddit.com/r/Starlink/comments/jjc270/found_a_gem_in_the_starlink_tos_the_parties/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102803.jpg)

10 月 26 日晚上，SpaceX 公司向参加星链计划（Starlink）的用户发邮件，宣布 Beta 测试开始，意味着这个卫星上网项目已经可以正式提供服务了。用户必须以 499 美元购买接收器，然后每月的上网费是 99 美元。

但是，最轰动的是，它的用户协议里面有这样一段不寻常的话。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102802.jpg)

> "对于地球或月球服务引起的纠纷，适用美国加利福尼亚州的法律管辖。对于我们在火星上提供的服务，或在飞往火星的星际飞船上提供的服务，当事方均承认火星为自由星球，没有任何一个地球政府对火星拥有管辖权或主权。因此，争端将通过火星定居者之间订立的自治原则来解决。"

这就是说，SpaceX 公司或星链计划，已经在法律上做好了开展火星业务的准备。

## a letter to indian young theory

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

## great rubbish classification in japan quote

日本的垃圾分类手册长达 37 页，而且每天回收的垃圾不一样，这导致我一周大约有 6 个小时要用来处理垃圾。

-- [一个美国人](https://twitter.com/searls/status/1320411053910609921)在日本生活的感想

![](https://www.wangbase.com/blogimg/asset/202010/bg2020102601.jpg)

## football tracker awkward ai fun

[足球直播的故障](https://www.iflscience.com/technology/ai-camera-ruins-soccar-game-for-fans-after-mistaking-referees-bald-head-for-ball/)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020103102.jpg)

10 月 25 日，苏格兰足球联赛出现了一个令人啼笑皆非的直播事故。赛前，俱乐部宣布，本场比赛将采用 AI 摄像头替代人工摄像师，摄像头会自动识别足球，始终追踪球的运动。

意想不到的是，本场比赛的边裁是一个光头裁判，AI 摄像头分不清光头与足球，很多时候将光头误认为是足球，镜头跟着边裁。观众们纷纷抱怨错过了进球，只看见边判跑来跑去，要求俱乐部赶快为边裁提供一个假发或帽子。

下面的视频（[Youtube](https://www.youtube.com/watch?v=9zoJP2FkpgU)，[腾讯视频](https://v.qq.com/x/page/b3165ovrpnb.html)）就是该场比赛的直播剪辑。

## google new icon awkward design theory

[谷歌 App 的新图标](https://twitter.com/danidonovan/status/1322356167063031814)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110101.jpg)

谷歌最近将旗下 App 的图标，全部改成统一的色彩风格。很多用户抱怨，新图标的配色完全一样，简直是一场灾难，根本分不清谁是谁（上图）。强烈的颜色压倒了其他信息。

原来的图标明明更易辨识，更有个性（下图是对比），结果上层一拍脑袋，一夜之间就都消失了。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110102.jpg)

现在一堆图标里面找一个 App，成了一件有难度的事情。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110103.jpg)

## two minutes working theory

[2 分钟规则](https://hoanhan.co/2-minute-rule)

每当你发现很难开始执行某项任务时，可以试试将其缩减成 2 分钟的版本。

- 看一本书 → 看一页书
- 写一篇文章 → 写一句话
- 跑 10 公里 → 穿上跑鞋
- 做 100 次俯卧撑 → 做 1 次俯卧撑
- 多吃蔬菜水果 → 吃一个水果
- 编写一个程序 → 编写一个函数 → 编写一行代码

这样做的目的是使上手变得超级容易，让你先上手再说。一旦开始做了（这可能是最艰难的一步），你就会开始有动力，可能会继续做下去。

- 阅读一页 → 阅读 10 页 → 读完第一章
- 写一个句子 → 写文章的开头 → 写出正文
- 穿上跑鞋 → 步行 5 分钟 → 跑步 5 分钟

一旦开始，继续做下去就会容易得多。有时，你甚至会发现，自己在不知不觉间已经完成了任务。

---

### Get started with 2-minute rule

Scale any task down into a 2-minute version to make it easier to get started

October 27, 2020 - 1 min read

---

Whenever you find it hard to get started on a task, consider scaling it down into a 2-minute version. For example,

- Read a book → Read one page
- Write an essay → Write one sentence
- Run 10 miles → Wear my running shoes
- Do 100 push-ups → Do 1 push up
- Eat more vegetables → Eat an apple
- Study for interview → Skim through my notes

The idea is to make it super easy to get started. Once you pass the starting point, which is arguably the hardest step, you start to gain momentum to keep doing the task itself:

- Read one page → Read 10 pages → Finish the first chapter
- Write one sentence → Write an opening paragraph → Write the body
- Wear my running shoes → Walk for 5 minutes → Run for 5 minutes

As you can see, once you start, it is much easier to continue doing it. Sometimes, you'll find yourself completing the task even before you even notice it.

## china guizhou can be swizerland view theory

本周话题：贵州变瑞士，有没有可能？

上个月，我第一次去贵州，玩了一周。这次旅行让我想起一篇大学里读过的文章。

浙江大学的一位老师访问瑞士后，发现瑞士的地理条件与贵州省很像：平地很少，全境都是高山，没有出海口，不合适发展工业和农业。但是，  瑞士属于世界最富的国家，贵州却是中国最穷的省份之一，以前号称"天无三日晴，地无三里平，人无三两银"。这是为什么？

他认为，原因是瑞士有合适的产业。它最强的精密制造业（比如钟表和制药）和高端服务业（比如银行、旅游、会展），都不要求大块的土地，但是附加值高，很赚钱。贵州没有这些产业，也不具备发展它们的条件，所以才会贫穷。

我来了贵州，亲眼看了以后，觉得情况发生了很大变化。贵州比想象的好得多，过去限制发展的最大瓶颈，已经没了，具备了经济起飞的条件，前景很看好。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111121.jpg)

（图片说明：铜仁市三江公园）

首先，交通已经变得比较方便了。主要城市之间都有高铁和高速公路直达，一路上都是高架和隧道，已经没有盘山公路了。其次，全省都在大建设，更新基础设施，我到过的黔东南每个城市（铜仁、凯里、都匀、独山、荔波）都遍布工地，城市面貌都非常新，道路整齐，高楼林立，生活没有任何不方便，跟沿海省份差不多。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020111122.jpg)

（图片说明：荔波小七孔景区的上己定湖）

贵州的旅游业，尤其具有优势。当地最不缺的就是峡谷、溪流和瀑布，由于喀斯特地质，奇特的地貌很多，加上植被茂盛，山水瑰丽，拥有许多世界级的旅游资源，未来肯定是旅游大省。

贵州正在大力发展大数据产业。这是很正确的方向，互联网产业对地理限制最不敏感。  我推荐，程序员可以考虑去贵州远程开发。  有这样几条理由：（1）网络条件很好，无线信号全覆盖；（2）优质的环境和空气，玩的地方多；（3）地处云贵高原，夏天气温不高，没有酷暑；（4）生活成本低，房价非常便宜。

## loon network vs starlink net work story

[气球宽带](https://interestingengineering.com/alphabets-loon-balloon-breaks-record-by-spending-312-days-in-the-stratosphere)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020103004.jpg)

![](https://www.wangbase.com/blogimg/asset/202010/bg2020103003.jpg)

为了让边远地区的人们可以上网，SpaceX 公司的方案是卫星宽度（StarLink 计划），谷歌公司则另辟蹊径，提供气球宽带的方案，项目叫做 Loon。最近，这个项目取得了重大进展，有一只气球在空中停留 312 天，打破了世界记录。

这只气球在美国加州放飞，然后飞到南美洲，接着飞过了大西洋，然后又飞过太平洋，最后在墨西哥降落。下图是它的飞行路线。

![](https://www.wangbase.com/blogimg/asset/202010/bg2020103005.jpg)

这种大型气球停留在距地面 18 公里～ 25 公里的平流层，那里几乎没有垂直的气流，所以气球可以保持在固定高度，为下方 80 公里的区域提供稳定的互联网服务。遇到水平方向的大风时，气球会自动上升或下降，避开大风。气球的动力完全来自太阳能。

## beautiful transcolor dragon chameleon story

[科学家](https://www.goodnewsnetwork.org/rare-chameleon-rediscovered-in-hotel-garden/)在马达加斯加岛发现了一种消失了 106 年的变色龙，上一次见到这个物种还是在 1913 年。这种变色龙安静时是绿色的，但是在生气或交配时，就会呈现白、黑、靛蓝的条纹色，并出现三个红色斑点。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110413.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110414.jpg)

## photoshop ai filters tech

[Photoshop 的 AI 滤镜](https://www.jiqizhixin.com/articles/2020-10-23-8)（中文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110705.jpg)

Photoshop 22.0 版推出了一个新的滤镜包----Neural Filters，实现了很多 AI 论文的研究成果，包括老照片上色、换表情、修改年龄、提升画质、普通图像一键变梵高风格等。

## interesting 100 dollars iphone x story

[100 美元的 iPhone X](https://www.vice.com/en/article/qvmkdd/counterfeit-iphone-x-review-and-teardown)（英文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110902.jpg)

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110901.jpg)

2018 年的文章。一个美国记者在深圳买到 100 美元的 iPhone X，实际是一台装了 iPhone 皮肤的低端安卓机，但真的很像苹果手机，尤其是有 Lightning 充电口。经过拆解，除了一些可以想到的问题（比如预装了恶意软件），作者对它的评价不完全是负面，而是 interesting（有趣）。

## using face detection power built in chrome guidde

[浏览器的人脸检测能力](https://ckeditor.com/blog/How-to-detect-human-faces-and-other-shapes-in-JavaScript/)（英文）

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110601.jpg)

Chrome 浏览器已经支持 Shape Detection API，直接调用这个 API，不用加载任何外部库，就可以通过浏览器识别人脸和二维码。

## friendly captcha web app

[Friendly Challenge](https://github.com/FriendlyCaptcha/friendly-challenge)

一个实验性的 Captcha （人类用户识别）开源实现。

传统的人类用户识别，一般都是图像识别。这个工具另辟蹊径，在用户计算机上执行一个计算难题，考验机器的计算能力，脚本机器人一般都不会有真实客户端的计算能力。它的好处是根本不需要用户参与。

## the best resume for elon musk theory

发送简历时，请说明你解决的一些最困难的问题，以及你如何解决这些问题。

-- [马斯克（Elon Musk）](https://twitter.com/elonmusk/status/1324736076800577537)谈他希望看到的简历。

![](https://www.wangbase.com/blogimg/asset/202011/bg2020110701.jpg)

---

When sending your resume, please describe a few of the hardest problems you solved & exactly how you solved them

3:31 PM · Nov 6, 2020

##
