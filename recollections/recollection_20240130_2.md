```
第二次追想
22:53
```

```
刚放弃了bilifavlist.js
想着做任何事情都要有好的工具

工具教育着使用者
使用者培养了工具

没有好的工具不如先放下手头的工作
以cpp和web举例
```

cpp
```
算法库肯定要带的
eg

powmod(int x,int a,int mod) // 快速幂

bs(int a[],int l,int r,bool up=1) // 二分搜索 默认升序 没有-1
bsl(...) // 没有返回left的index
bsr(...) // 没有返回right的index
```

js
```
obj s(string sel) //give css_selector return elementslist
void l(obj e,string template) //convert the string into html & set innerhtml (l for load)
/*
the template syntax goes like this

d .search .bar #myid{
  input .search .bar .input{
  }
  button .search .bar .button{
    "search"
  }
}
*/
void ls(string theme) //no need writing css for each app, just write the template theme & use them by class like tailwindcss
/*
the theme syntax is similar to less
*/

obj g(string url,obj headers,int t) //if timeout return {status:-1}
/*
the return goes like this

{
status: 200,
type: "b", // b for binaryfile | t for text&json&anythingelse
data: obj data
}
*/

obj p(string url,obj headers,obj data)

// and function library of cource
```
