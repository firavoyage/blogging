# 代码风格变迁史

Posted by wyj on October 2, 2018 / Edited on August 21, 2020

深夜发现今年年初写的程序现在已经觉得丑陋异常了压根无法维护，移植到 linux 下时一直段错误。所以有了这篇。

//不保证以下的 pascal 符合规范。N 久没写过了

---

# long long ago[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#long-long-ago)

当时大概 14 年。写的 pascal。对 FPC 只会当成 TP 用。不怎么懂函数。缩进是 TP 风格的和上一行结尾对齐。

```pascal
//当时刚会random,非常高兴。
begin
     randomize;
     b:step:=0;
     r:=random(1000);
     write('Shu ru yi ge 1000 yi nei de shu: ');
     a:readln(n);
     if n=r
        then
            begin
                 writeln('You are right!');
                 writeln('step: ',step+1);
                 writeln('Try again? (0:yes 1:no)');
                 readln(s);
                 if s='0'
                    then goto b
                    else exit;
            end
        else
            begin
                 inc(step);
                 if n<r
                    then writeln(#24)
                    else writeln(#25);
                 goto a;
            end;
     readln
end.
```

---

# 七上的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E4%B8%83%E4%B8%8A%E7%9A%84%E6%97%B6%E5%80%99)

15 年。差不太多。丑陋的 goto。但是有写很长的程序的能力了。缩进变成了两格。懂得面向过程了。六子棋就主要是这时候写的。全是拼音。这个程序因为跨越了两年多，所以风格非常不统一。

```pascal
begin
   {$ifndef Win32} //这就不用说了，是七下的
     exit;  //缩进也千奇百怪，从TP的一直到C的，混乱不堪。
   {$endif}
   f:=0;
start:init(f);  //各种goto是早期的风格
   if not jmp
     then first;
   repeat
  l1:bj:=true;draw(0);
 lt1:SetFillStyle(1,black); //这是很晚的时候才出现的PascalCase
     bar(WMaxY+50,40,WMaxY+120,56);
     repeat
        if KeyPressed then
...........
```

---

# 七下的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E4%B8%83%E4%B8%8B%E7%9A%84%E6%97%B6%E5%80%99)

16 年。懂得了 pascal 的很多高端特性。算$π$,五子棋，俄罗斯方块是这时候写的。（当时闲的发慌）我的第一个 C++程序（Visual C++除外）就是在这个时候写的。

E1：(现在我的 FFT 比三年前的优美一万倍)

```pascal
procedure fft(var a:cmparr;lg:longint);
var h:array[0..dmaxlen-1]of longint;
    tmp:cmp;t,i,j,x,len:longint;
begin
    fillchar(h,sizeof(h),0);
    len:=1<<lg;
    for i:=0 to len-1 do
      if h[i]=0 then
        begin
          x:=rev[lg,i];
          tmp:=a[i];a[i]:=a[x];a[x]:=tmp;
          h[x]:=1;
        end;
    t:=1;
    for i:=1 to lg do
      begin
        fillchar(h,sizeof(h),0);
        for j:=0 to len-1 do
          if h[j]=0 then
            begin
              x:=t xor j;
              a[x]:=a[x]*w[lg,(x and (1<<(i-1)-1))<<(lg-i)];
              //不过这一行从未被改变，因为我现在已经忘了它的原理
              tmp:=a[j]+a[x];
              a[x]:=a[j]-a[x];
              a[j]:=tmp;h[x]:=1;
            end;
        t:=t<<1;
      end;
end;
```

E2:(后期，各种模仿 fpc 的 source，面向过程登峰造极)

```pascal
{$APPTYPE GUI}
{$INLINE ON}
program Tetris;

uses Windows,Graph,WinMouse,DOS,WinCRT;

const pixel=25;
      colors:array[1..7]of integer
            =(LightGray,green,brown,LightRed,LightBlue,magenta,LightMagenta);
      base:array[1..7,1..4,1..4]of integer=
       (((1,0,0,0),(1,0,0,0),(1,0,0,0),(1,0,0,0)),
        ((1,1,0,0),(1,0,0,0),(1,0,0,0),(0,0,0,0)),
        ((1,0,0,0),(1,0,0,0),(1,1,0,0),(0,0,0,0)),
        ((1,0,0,0),(1,1,0,0),(1,0,0,0),(0,0,0,0)),
        ((1,0,0,0),(1,1,0,0),(0,1,0,0),(0,0,0,0)),
        ((1,1,0,0),(0,1,1,0),(0,0,0,0),(0,0,0,0)),
        ((1,1,0,0),(1,1,0,0),(0,0,0,0),(0,0,0,0)));

type RkRec=record sc,y,m,d:longint;end;

var x,y,dy:integer;
    MaxLv,level,score,row,TRow,TotRank:longint;
    mx,my,ms:longint;
    LTime,CTime:dword;
    blocks:array[1..7,1..4,1..4,1..4]of integer;
    PlayField:array[1..10,-3..15]of integer;
    RankList:array[1..10]of RkRec;
    tm:array[1..20]of dword;
    IsLine:boolean;
    NextBlock,CurBlock:record k,r:integer;end;
//and 1000+ more lines
```

---

# 八上的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E5%85%AB%E4%B8%8A%E7%9A%84%E6%97%B6%E5%80%99)

学习了**短码的 C**。pascal 改成了 C 风格。同时学会了 FP 的**4 格 Tab,使用另一个控制台调试，Ctrl+C,V 复制粘贴,括号自动补全**等等高端技巧。主要写了一些小程序，改进了 connect5（现在蒟蒻的我已经打不过它了）。另外 Lazarus 入门。那时的 pascal 风格保持至今。开始转 C，在 CodeVS 上的提交 pascal 和 C 平分秋色。

```pascal
procedure a();
begin
    for i:=1 to n do begin
        if a=1 then begin
            writeln(a)
        end else begin
            b[i][a]+=1
        end
    end //这才叫P++
end;
```

```cpp
main(i,n){
	scanf("%d",&n);
	n&&main(0,n&~-n)*
	printf("%.f%c",log(n&-n)/log(2),i?13:32);
}
//我的C语言入门程序。。。当时我很菜不会log2
```

```cpp
//当时写的蛇形矩阵。我的极早期的C++程序。强烈的C与短码痕迹。
#include<cstdio>
int a[110][110],i,j,t,ti,tj,ui,uj,n;
int main(){
	scanf("%d",&n);
	i=j=n+1>>1;ti=tj=i-1;ui=uj=i+1;
	for(a[i][j++]=t=1;t<n*n;){
		for(;i>=ti;a[i--][j]=++t);
		ti=i;
		for(i++,j--;j>=tj;a[i][j--]=++t);
		tj=j;
		for(j++,i++;i<=ui;a[i++][j]=++t);
		ui=i;
		for(i--,j++;j<=uj;a[i][j++]=++t);
		uj=j;
	}
	for(i=1;i<=n;i++){
		for(j=1;j<n;j++)printf("%d ",a[i][j]);
		printf("%d\n",a[i][n]);
	}
	for(t=0,i=1;i<=n;t+=a[i][i++]);
	for(i=1;i<=n;t+=a[n+1-i][i++]);
	printf("%.f\n",2./3*n*n*n+1./2*n*n+4./3*n-5./3);
    //这一行很神。
	return 0;
}
```

```pascal
procedure TForm1.drawboard;
var i,bx,by:integer;s:string;
begin
  with board.Canvas do begin
       Brush.Color:=$c0c0c0;
       FillRect(0,0,470,470);
       Brush.Color:=clBlack;
       rectangle(28,18,pix*(bdsize-1)+33,pix*(bdsize-1)+23);
       Brush.Color:=$c0c0c0;
       rectangle(29,19,pix*(bdsize-1)+32,pix*(bdsize-1)+22);
       Font.Color:=clBlack;
       for i:=1 to bdsize do begin
            Brush.Color:=$c0c0c0;
            str(16-i:2,s);
            textout(0,pix*(i-1)+13,s);
            moveto(30,pix*(i-1)+20);
            Brush.Color:=clBlack;
            lineto(pix*(bdsize-1)+30,pix*(i-1)+20);
       end;
//lazarus代码。觉得和现在的Qt真的太像了。
```

---

# 八下的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E5%85%AB%E4%B8%8B%E7%9A%84%E6%97%B6%E5%80%99)

从（pascal+C）尝试转 C++的过渡态选手，提交**总是使用 C++**尽管遇到了各种问题。当时的 C++就是**用 pascal 直译的**标准的 C（连 STL 都不会）(UPD:现在发现记忆错误，那时的 C++风格一直保持到停课前，并且已经会 STL 了)。pascal 近乎完美，看起来和那些 source 一模一样，学会使用 windows 单元。当时是 CodeVS 的忠实用户，现在这个网站都打不开了，所以 C++代码记录一去不复返。（10.08UPD:现在能打开了，刷新了很多认知。）

```cpp
//当时写LCA都是用的ST表。现在发现好像有一些小小的偏差，并且不用这么烦。
void rinit(){
	int i,j;
	memset(st,1,sizeof st);
	for(i=1;i<=cnt;i++)st[0][i]=dep[i],stn[0][i]=i;
	for(i=1;(1<<i)<=cnt;i++)
		for(j=1;j+(1<<i)<=cnt;j++)
			if(st[i-1][j]<st[i-1][j+(1<<i-1)])
				st[i][j]=st[i-1][j],stn[i][j]=stn[i-1][j];else
				st[i][j]=st[i-1][j+(1<<i-1)],stn[i][j]=stn[i-1][j+(1<<i-1)];
}
```

```pascal
//格式就是那样，再也没有改过。只是内容一直在升级。
procedure DrawMandel(wnd:HWnd);
var c,i,j,color,k,maxx,maxy:longint;
    a,b,x,y,tx,m:extended;
    handle:hbitmap;dc,bdc:hdc;
    rec:rect;ps:paintstruct;
begin
   dc:=BeginPaint(wnd,@ps);
   GetClientRect(wnd,@rec);
   maxx:=rec.right;maxy:=rec.bottom;
   bdc:=0;handle:=0;
   while bdc=0 do bdc:=CreateCompatibleDC(dc);
   while handle=0 do handle:=CreateCompatibleBitmap(dc,maxx,maxy);
   SelectObject(bdc,handle);
```

---

# 九上的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E4%B9%9D%E4%B8%8A%E7%9A%84%E6%97%B6%E5%80%99)

基本掌握了 C+STL 这门语言。还是 pascal 直译水平。任何涉及 GUI 的程序都仍然是 pascal 写的，在 OI 方面成为了 C+STL 选手。

（下面的大概是缺省源的地位，尽管当时不会用缺省源。）

```cpp
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<algorithm>
#include<map>
#include<vector>
#include<utility>
using namespace std;
int n,m,i,j,k,vis[100001]; //所有变量都是全局的
int main(){
	scanf("%d%d",&n,&m);
    return 0;
}
```

```cpp
//2017.11.1写的动态逆序对，人生第一道紫题。
//当时不怎么压行，但是逗号还是用的，总之代码比现在更加接近短码。
int main(){
    memset(cz,0,sizeof cz);
    scanf("%d%d",&n,&m);
    for(i=1;i<=n;i++)
        scanf("%d",a+i),b[i]=a[i];
    sort(b+1,b+1+n);
    memset(c,127,sizeof c);
    for(i=n;i>=1;i--){
        c[i]=lower_bound(b+1,b+1+n,a[i])-b;
        ans+=qry(cz,c[i]-1);
        ins(cz,c[i],1);
    }
    printf("%d",ans);
    initbl();
    for(i=1;i<=m;i++){
        int x;
        scanf("%d",&x);
        ans-=q(x);
        printf(" %d",ans);
    }
    puts("");
    return 0;
}
```

---

# 九下的时候[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E4%B9%9D%E4%B8%8B%E7%9A%84%E6%97%B6%E5%80%99)

变化很大。

第一步：使用 bits 库，大幅增加编译时间; -Wall (2018.3)

第二步：基本会用 C++11 (2018.4)

第三步：使用局部变量 (2018.4）

第四步：精通 C++11（我现在不会写 C++了）(2018.5-6)

第五步：封装。**连 Dinic 也是** (2018.5-6)

第六步：for 循环中也使用局部变量 (2018.7)

越来越像真正的 C++选手

```cpp
    while(q--){
        int op,x,y,z;
        scanf("%d%d%d",&op,&x,&y);
        if(op==1){
            printf("%d\n",dfn.qry({ {rtd[pos[x]-1],-1},{rtd[pos[x]+siz[x]-1],1}},y));
        }else{
            scanf("%d",&z);int l=lca(x,y);
            printf("%d\n",tr.qry({ {rtt[x],1},{rtt[y],1},{rtt[l],-1},{rtt[fa[l][0]],-1}},z));
        }
    }
// 六月份的，现在也差不多这么写
```

```cpp
void FFT(cmp *a){
    for(int i=0;i<N;i++)
        if(i<rev[i])swap(a[i],a[rev[i]]);
    for(int i=0;i<lg;i++)
        for(int j=0;j<N;j++)if(!(j&1<<i)){
            int x=j^1<<i;
            a[x]*=w[(j&(1<<i)-1) << lg-1-i];
            //熟悉的配方，熟悉的味道。
            cmp tmp=a[j]+a[x];
            a[x]=a[j]-a[x];a[j]=tmp;
        }
}
```

---

# 高一上[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E9%AB%98%E4%B8%80%E4%B8%8A)

和当前风格没什么区别，除了使用#define int64 long long 等各种 define;还没有使用 C++17 结构化绑定的习惯;没有`(a*=b)%=mod`的习惯之外。

```cpp
//线段树2
    int64 qry(int l,int r,int64 k=1,int64 b=0,int p=1,int tl=1,int tr=n){
        if(l<=tl && tr<=r)return (a[p].sum*k%mod+b*(tr-tl+1))%mod;
        int64 ret=0,newk=k*a[p].mulv%mod,newb=(b+k*a[p].addv)%mod;
        int mid=tl+tr>>1; //不加括号
        if(l<=mid)ret+=qry(l,r,newk,newb,L(p),tl,mid);
        if(r>mid)ret=(ret+qry(l,r,newk,newb,R(p),mid+1,tr))%mod;
        return ret;
    } //qry不用pushdown
    void ins(int l,int r,int tp,int64 vl,int p=1,int tl=1,int tr=n){
        if(l<=tl && tr<=r){
            if(tp==1)a[p].mulv=(a[p].mulv*vl)%mod,a[p].addv=(a[p].addv*vl)%mod;
            else a[p].addv=(a[p].addv+vl)%mod;
        }else{
            pushdown(p);
            int mid=tl+tr>>1;
            if(l<=mid)ins(l,r,tp,vl,L(p),tl,mid);else maintain(L(p),tl,mid);
            if(r>mid)ins(l,r,tp,vl,R(p),mid+1,tr);else maintain(R(p),mid+1,tr);
            //L(x),R(x)两个宏
        }
        maintain(p,tl,tr);
    }
```

---

# 当前的风格[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E5%BD%93%E5%89%8D%E7%9A%84%E9%A3%8E%E6%A0%BC)

现在好像保持基本稳定了。除了 Qt 带来了 PascalCase 变成 camelCase 并且彻底弃用了 pascal。偶尔使用 C++17。

#### Pascal ： 它死了[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#pascal--%E5%AE%83%E6%AD%BB%E4%BA%86)

使用 extended。函数名 PascalCase。喜欢 graph 甚于 windows。C++风格缩进（begin、then 不换行，不打空格）。多使用函数和 record。C 风格运算符。有着 type int=longint 的习惯。一般不打 program。

#### C++[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#c)

camelCase。大括号不换行。除了##(宏中)、&&、||之外不打空格。越短越好。

尽量少使用#define，使用 gedit 的片段替代。

变量为了区分时会大写。部分全局变量会下划线开头。

万能头（偶尔改成 bits/extc++.h）。

使用 C 风格输入输出、C 风格字符数组（毕竟我是先学的 C）。真的超强大。

在 for 比 while 短的绝大多数地方使用 for，即使三个语句毫无干系。仅有的两个使用 do-while 之处是随机生成简单图和`next_permutation()`。

邻接表使用 vector。数组只要长度不能直觉得到就开 vector。大量使用 STL。sort 传 lambda。几乎所有图、树的题都少不了 range-based for。手写的结构体、max、min、insert 等等基本使用`initializer_list`。哈希表使用`unordered_map`(必要时重载 hash)。if 中声明变量。总之**C++11 是不可分割的一部分**，能够大量简化代码。

一般会`using ll=long long`，`using pa=pair<int,int>`。pair 是我仅有的较少使用的 STL（因为太长了）。如果一定要用，我一般会使用 C++17，并且使用结构化绑定，推导指引等等高端操作来代替`pair<int,int>`这个冗长的词。

不使用`rand()`,一般使用`std::default_random_engine`。

封装一切东西。**有时连最短路都封装**。喜欢使用一个 struct node 胜过一堆数组（同时定义 L(x),R(x)，LCT 还会有 F(x)）。

如果硬要我写 C++98，我会这么写：

```cpp
#pragma GCC diagnostic error "-std=c++11"
```

编译时一定开-Wall,-ferror-limit=3,-Wno-unused-result(linux 下)。消除除了添加括号之外的所有 warning（我从来不加不必要的括号）。`(int)v.size()`。 下面是我的插头 DP 中的一段。可以看到不加括号多么简短。（位运算优先级和 pascal 是完全反的，+ $>$ » $>$ | ）

```cpp
inline int Set(int k,int p,int v){return (k>>p+2<<2|v)<<p|k&(1<<p)-1;}
inline int Set(int k,int p,int v1,int v2){return Set(Set(k,p,v1),p+2,v2);}
```

能开 int 的尽量不开 long long。几乎从不 define int ll。很少 inline，从不 register（register 在 C++17 中被删除了,所以本地无法编译。并且我测过，开 O2 时毫无卵用）

短的语句用逗号，不能用逗号时会把 if 换成&&和||（多年短码习惯），return 换成 exit。这样对于输出调试来讲特别方便，可以规避大括号，但是对于 gdb 来说是噩梦。比如我的输出调试中经常有这样的语句(`_D`一直是调试专用的变量):

```cpp
正常语句,a==b&&c-d&&(_D=1,printf("%d%d",x,y),assert(~z),exit(0));
```

还有一个奇怪的习惯是 if 和 for 永远在同一行。

```cpp
for(int i:v[p])if(!vis[i]){
	//do sth
}else{
	//do sth else
}
```

线段树、Dinic、MCMF、Kosaraju、Minimax、二分、RMQ、exgcd、计算几何等等等等全部都是刘汝佳的板子。（我不用 Tarjan 求 SCC）FFT、FWT 是两重循环。

一个 C++17 的例子，体现了我的一些代码风格：

```cpp
        for(int i=1,j;i<=q;i=j){
            vector<st> v{ {a[i].l,1,i},{a[i].r+1,-1,i}};
            for(j=i+1;j<=q && a[j].m==a[j-1].m;j++)
                v.insert(v.end(),{ {a[j].l,1,j},{a[j].r+1,-1,j}});
            sort(v.begin(),v.end(),[&aa=a](st a,st b){
                if(a.l!=b.l || a.r!=b.r)return a.l<b.l||a.l==b.l&&a.r<b.r;
                return b.r==-1?aa[a.m].l>aa[b.m].l:aa[a.m].r>aa[b.m].r;
            });
            int ls=0;vector<int> n;
            for(auto&[p,tp,id]:v){
                if(p>ls && n.size()){
                    u[a[i].m].push_back({ls,tr.qry(ls,p-1),~tp?n[0]:id});
                    for(int i:n)t[i]=ls;
                    tr.ins(ls,p-1,0,tr.rt);
                }
                if(~tp)n.push_back(id);else n.erase(find(n.begin(),n.end(),id));
                ls=p;
            }
        }
```

---

# 高一下的更新[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E9%AB%98%E4%B8%80%E4%B8%8B%E7%9A%84%E6%9B%B4%E6%96%B0)

了解了`basic_string`，并且用来替代 vector 的几乎所有应用。

```cpp
//从前的
vector<int> a;
a.push_back(x);
a.insert(a.end(),{1,2,3});  //我加入多个元素的写法
a.clear();

//现在的
using bs=basic_string<int>;
...
bs a;
a+=x;
a+={1,2,3};
a={};
```

#### Python[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#python)

蒟蒻刚入门，没有什么风格，除了**缩进用 tab**之外。正在努力习惯列表生成式。喜欢用 lambda 代替 def。

为了说明 python 的优越性，我们可以尝试一下$∑x=1∞sin⁡xx$(等于$π−12$)。

```cpp
double s=0;
for(i=1;i<100000;i++)
	s+=sin(i)/i;
```

然而 python 就相当接近人类的思维习惯，并且很简短：

```python
sum(sin(x)/x for x in range(1,100000))
```

喜欢`from numpy import *`等等各种`from xxx import *`，类似于 C++的`using namespace std;`

一个标准的 main 是这样的:

```python
#!/usr/bin/env python3
import sys

def main():
	return 0

if __name__ == "__main__":
	sys.exit(main())
```

一般的`if`和`for`后如果语句很短就会写在同一行。

和 C++一样，多条短语句用分号隔开放在同一行

# 高二的更新[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E9%AB%98%E4%BA%8C%E7%9A%84%E6%9B%B4%E6%96%B0)

#### JavaScript[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#javascript)

稍微了解了一下 JavaScript。还是比较习惯于沿用 C++的写法。比如说使用`==`和`!=`，尽管我知道这么做很不安全，但是`===`看着太丑了。又比如使用`++`和`--`运算符，虽然我到现在还不懂为什么用 JS 的人弃之如敝履。

定义函数使用和 bash 一样的`function F(){}`而不是`F=function(){}`。如果声明的数组是整型，用`new Int32Array`而不是`new Array`。字符串转整数使用`+"123"`这样的写法。习惯于`"A = "+A`而不是`` `A = ${A}` ``。

应用的 ES6 特性主要是`class`、`=>`和`let`。高精度偶尔用用。声明变量全部用`let`。能用一行描述清楚的函数以及回调函数使用`=>`声明。

一个代码片段，是我的[2048 游戏](https://2o181o28.github.io/2048/)中的最核心的函数，可以看出和 C++几乎是一模一样的：

```js
function goUp() {
  let sc = 0;
  for (let i = 0; i < 4; i++) {
    let _ = 0;
    for (let j = 0; j < 4; j++)
      if (a[j][i]) {
        if (_ != j) sc = 1;
        a[_][i] = a[j][i];
        id[_++][i] = id[j][i];
      }
    for (let j = _; j < 4; j++) (a[j][i] = 0), (id[j][i] = -1);
    for (let j = 0; j < 3; j++)
      if (a[j][i] == a[j + 1][i] && a[j][i]) {
        flg[j][i] = 1;
        a[j][i]++;
        sc = 1;
        tot += 1 << a[j][i];
        id[j][i] = id[j + 1][i];
        for (let k = j + 1; k < 3; k++)
          (a[k][i] = a[k + 1][i]), (id[k][i] = id[k + 1][i]);
        (a[3][i] = 0), (id[3][i] = -1);
      }
  }
  return sc;
}
```

#### Rust[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#rust)

Rust 和 Python 类似，实现一个目标基本只有一种写法，玩不出什么花来。

像 C++的`using namespace std;`和 Python 的`from X import *`一样，喜欢导入全部内容。并且多个有公共前缀的导入用大括号括在一起，比如：

```rust
use std::{io::*,collections::*};
```

由于`Result`类型的返回值不使用就会有 warning，然而我不想使用这个返回值，就直接用`.ok()`了，反正丢弃`Option`不会有事。

用`fn`只声明全局函数；用`||`只声明局部的函数。**其实 Rust 的匿名函数也是可以递归的**，参见我 Min25 筛模板的实现：

```rust
struct Dfs<'a>{
	a:&'a dyn Fn(i64,usize,&Dfs)->i64
}
let dfs=Dfs{
	a:&|n,d,dfs_stt|{
		// Do Something
		rs=(rs+x%MOD*((x-1)%MOD)%MOD*((dfs_stt.a)(n/x,k,dfs_stt)+1))%MOD;
		// Do Something
	}
};
println!("{}",(((dfs.a)(n,1,&dfs)+1)%MOD+MOD)%MOD);
```

快读一般用`extern"C"{fn getchar()->i32;}`，因为我实在是找不到什么原生的快速读入方式。快速输出用`BufWriter::new(stdout())`。声明多个变量时习惯使用`let (a,b)=(X,Y);`这样的写法。其他码风其实和 C++差不太多。

# 补充：变量命名规则[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E8%A1%A5%E5%85%85%E5%8F%98%E9%87%8F%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99)

有闲情逸致研究一番是因为知乎上刷到了[这篇文章](https://zhuanlan.zhihu.com/p/104963169)。

上篇忘说了，现在我写了个 gedit 的代码片段来创建新博客，真的很好用，大概是这样的：

```python
---
layout:		post
title:		$1
date:		$<import datetime; return datetime.date.today().isoformat()>
author:		wyj
catalog:	true
tags:
    - $2
---
$0
```

为了进行统计，我特地修改了一下初中时写的[分词程序](https://github.com/2o181o28/MyProg/tree/master/normal/fenci)。当时写的版本只能在 Windows 上用，现在我让它可以处理 Linux 中的**英文**数据（中文编码问题不会解决）。

首先筛选出所有我写过的 OI 程序：

```bash
find -type f -wholename "*weiyijun/*.cpp" -exec cat {} \; >> ~/1.txt
```

然后运行分词程序，剔除一些无意义结果以及关键字、常数等等。我用过的几乎所有变量名都在下面列举出来了。可以看到三字母/单字母占到绝大多数。

#### 循环变量[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E5%BE%AA%E7%8E%AF%E5%8F%98%E9%87%8F)

这是最常见的变量声明了。按顺序依次为$i,j,k,l…$，如果`k`被占用了就改成$i,j,t,u…$

#### 统计变量[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E7%BB%9F%E8%AE%A1%E5%8F%98%E9%87%8F)

$t,_,$$

双字母：$sm$

三字母：$tot,cnt,top,ans$

#### 成对的变量[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E6%88%90%E5%AF%B9%E7%9A%84%E5%8F%98%E9%87%8F)

$l/r(只用于区间),p/q(多用于数学),s/t(多用于源/汇),u/v(多用于边的起点/终点),x/y(泛指),n/m(多用于二维数组)$

三字母:$stt/end$

#### 数组名[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E6%95%B0%E7%BB%84%E5%90%8D)

一般数组（正常人都是这样）：$a,b,c…v(邻接表),w(权),e(边集数组),x,y(坐标)…$

dp 数组和多项式：$f,g,h,…$

特殊意义的数组(两字母，极少)：$fa(双亲),vl(权值)$

特殊意义的数组(三字母)：$vis,dis,que,sta,ind(入度),dep,dfn,pos,siz,len,inv,fac(阶乘),cur(当前弧),ban…$

#### 函数名[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E5%87%BD%E6%95%B0%E5%90%8D)

三字母：$ins,qry(泛指数据结构修改/查询，后可加1/2/3区分),sol,bfs,dfs(后加1/2/3),chk,rmq,tri(三分法)…$

四字母：$getf,Init,calc$

#### 结构体[](https://2o181o28.github.io/2018/10/02/%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E5%8F%98%E8%BF%81%E5%8F%B2/#%E7%BB%93%E6%9E%84%E4%BD%93)

二字母：$st(泛指各种结构体，除非和st表重名),ev(事件),po(点)$

数据结构/算法名：$edge(边),segTree(线段树),Splay,LCT,Dinic,MCMF…$
