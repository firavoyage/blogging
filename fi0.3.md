# fi 0.3

components & data binding

## components
> components are functions

```
//slide switch button
button(status){
  switch(){
    status=!status
  }
  .button-container{ //no tag -> default <div>
    .button-slide onclick=switch()
  }
}

```


> everything is component
```
body(settings){
  button(settings.a)
  button(settings.b)
  button(settings.c)
}

```


## data binding

```
settings=0
body=fi.body(settings)
fi.r(body,document.body) //render
```



