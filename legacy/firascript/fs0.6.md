# fs0.6
> this will be the last version of firascript0
> then fs1.0

> firascript is a js dialect

## language

### literal

- arguments
```
(a b c d)

(a,b,c,d)
```

- array
```
[a b c d]

[a,b,c,d]
```

- object
```
{a b c d}

{a:b,c:d}
```

- function
```
(A){B}

function(A){B}
```

```
(A){B} //B is literal

function(A){return (B)}
```

### grammar

- define variable

```
a=1

let a=1
```

```
string a=1
cat b=1
dog c=1

let a=1
let b=1
let c=1
```

- define variables
```
const {
  a 1
  b 2
  c 3
}

const a=1,b=2,c=3
```

- define object
```
let a [A]
let b {B}

let a=[A]
let b={B}
```

- define function
```
let a (A){B}

let a=function(A){B}
```

```
int a(A){B}

a=function(A){B}
```

- get object attribute
```
obj[a b c]

obj[a][b][c]
```

- if
> inspired by arc language
```
if(a){A}(b){B}(c){C}{D}

if(a){A}
else if(b){B}
else if(c){C}
else{D}
```

- for
```
for{A}

while(true){A}
```

```
for(){A}

while(true){A}
```

```
for(10){A}

for(let __fs_i=0;__fs_i<10;__fs_i++){A}
```

```
for(i arr){A}
for(let __fs_i=0,i=arr[__fs_i];__fs_i<arr.length;__fs_i++){A}
```

```
for(i 1 10){A}

for(let i=1;i<=10;i++){A}
```

```
for(i 1 10 j 10 100){A}

for(let i=1;i<=10;i++){for(let j=10;i<=100;j++){A}}
```

```
for(i arr j brr){A}

for(let __fs_i=0,i=arr[__fs_i],j=brr[__fs_i];__fs_i<arr.length&&__fs_i<brr.length;__fs_i++){A}
```

```
for(a;b;c){A}
```

- while
```
while{B}

while(true){B}
```

```
while(A){B}
```

## implementation

- line-break
`\n` or `;`
except in `if` `for` `while` `[]` `{}` `(){}`

- match token
- match grammar
- build grammar tree
- compile to javascript






