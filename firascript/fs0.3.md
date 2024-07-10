firascript 0.3

# how it works
0. maintain `type[line][char]`
1. label all strings and quotes
2. label all the `()` `[]` `{}`
3. split blocks into statements `;` `\n without closure of ([{`
4. for each statement
find out its type `define` `get` `call` `control`
label the expressions it contain
5. conpile the code labeled `fs` to javascript 
others stay unchanged

# expressions

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
{a:b,c:d}
```

## function
```
(A){B}

function(A){B}
```

```
(A){B} //B without control statement

function(A){return (B)}
```

# statements

## define
```
a=1

let a=1
```

```
a(A){B}

a=(A){B}
```

## get
```
a[0 a 'b']

a[0][a]['b']
```

## call
```
f(a b c)

f(a,b,c)
```

## control

### if
```
if(a){A}(b){B}(c){C}{D}

if(a){A}
else if(b){B}
else if(c){C}
else{D}
```

### for
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

for(let __fs_i=0;__fs_i<arr.length&&__fs_i<brr.length;__fs_i++,let i=arr[__fs_i],let j=brr[__fs_i]){A}
```




