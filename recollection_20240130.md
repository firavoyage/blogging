1
```
我想做一个导出bili网站favlist的app
1. 最无脑的实现 
使用按键精灵+chromium保存mhtml
2. 一般的实现 
devconsole-network查询到api(大概率是json) 了解cppcurl的使用方法(带cookie的get请求) fstream的用法(save txt)
直接save filename.json
3. 最优雅的实现
将所有的图片下载到 /img
编写前端界面(grid,flex)

长草了~好孤独,好漫长~
我不知道...

@firavoyage
(Fira/apps/trkr?site=bili)
```

```
upd 22:32

放弃了

想用最喜欢的cpp写
发现我的g++默认不带curl库
还要专门学习语法

python request没装

最后选择了js snippet直接在浏览器写
/programs/bili_favlist.js

然而输出莫名其妙 懒得debug了

查了各种资料
js regex
ajax
json parser
file api

或许全面学会fe技能再战更好吧
暂告一段落!
```



2
```
hduacm lcy bili first cmt
取得了3000多粉丝

之前看到的yukeyin选题何为高级
1w多吧

不重要
反正评论区好多人的回忆

另外官网有lcy的课程(零基础+进阶)报名pdf
存档在blogging/quotes了

挺有意思的
就是这样.

(Fira/blogging/v?filter=oi)
```

3
```
每天我们都在用不同的工具
他们大多设计的不优雅
ui设计之外
可以有统一的程序设计思路
- api (command`/`,底层支持类似命令行控制)
- ui (不需要html,代码是html的方言,底层2json | style在class里,css根据theme规范,不对单独的app编写)
- 考虑 异歩的evlistener(利于人的理解&性能) | 同步的事件循环(利于复杂动画)
多数不涉及多么精妙的算法
或者被封装好了调用api

我想我知道我要做什么了

(Fira/apps?path=about)
```

4
```
玩原神
咋玩了半天还是42级?
我想刷本了!
```


