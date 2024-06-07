# fi.fs 0.1
> prospect to fi.fs

fi.fs include a function
`node render(str docu str compo obj data){}`

for example
i want to implement
`v2ex timeln` //`/web/apps/v2ex_timeln.mhtml`

docu
```
#top{
  logo
  search
  go top
}
#content{
  #cleft{
    new
    history
  }
  #cright{
    self
  }
}
#bottom{
  go btm
  p btm
}
```

compo
```
logo{
  img src=...
}
search{
  .container{
    .searchico
    input
  }
}
go{
  init(where){
    for (i links[where]){add(i)}
  }
}
...
```

data
```
links.top [...]
links.btm [...]

```

