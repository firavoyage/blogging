# fi 0.4

implementation for fi0.3

```
no vdom

when render a component
give it an individual id
//a {fi_id count++}

each id has its specific data source
when receiving change
pass the source to the function

after the data changed
apply it to the dom
```

## components
> components are functions

```
button(status){
  switch(){
    status=!status
  }
  .button-container{ //only one container element
    .button-slide @=switch() //function `switch` is mentioned above
  }s
}

//compiled to firascript
fi.compo({
  c "button" //component name
  f { //function list
    switch (){status=!status} 
  }
  m { //markup
    t "div"
    a {
      class "button-container"
    }
    i [
      {
        t "div"
        a {
          onclick ".switch()"
        }
      }
    ]
  }
})
```


