firascript | v0.1

> ref recollection_20240319

> `firascript`,`fs` can be compiled into javascript to run
> the syntax included in fs will be compiled
> others will stay unchanged

> contents below are what fs0.1 is about, for the learners
> another passage is about how the compiler works

# object

## arguments
```
(a b c d)

(a,b,c,d)
```

## array
```
[a b c d]

[a,b,c,d]
```

## object
```
{a b c d}
{'a':b,'c':d}
```

```
{a=1 {b=2} c=3 {d=a+b+c}}

function(){'a=1':function(){return b=2;},'c=3':{return d=a+b+c;}}
```

## function
```
(A){B}

function(A){B}
```

# control

## if
```
if(a){A}(b){B}(c){C}{D}

if(a){A}
else if(b){B}
else if(c){C}
else{D}
```

## for
```
for(i 1 10){A}

for(i=1;i<=10;i++){A}
```

```
for(i 1 10){A}

for(i=1;i<=10;i++){A}
```

```
for(i 1 10 j 10 100){A}

for(i=1;i<=10;i++){for(j=10;i<=100;j++){A}}
```

```
for(i arr j brr){A}

for(__fs_i=0;__fs_i<arr.length;__fs_i++,i=arr[__fs_i],j=brr[__fs_i]){A}
```

# define

## function
```
a{A}

a=function(){A}
```

```
a(A){B}

a=function(A){B}
```

# call
```
a.b

a['b']
```

```
f(a b c)

f(a,b,c)
```


