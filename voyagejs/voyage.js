//voyagejs

let firascript={
  case(value,pairs,stop=false){
  
  },
  repeat(fn,times=-1){
    
  },
  each(first,last,step=1){
    
  }
}

let voyage={
  data:{}, //key and value
  bind:{}, //key and function
  count:{}, //name and count
  fn:{}, //pure functions
  new(name){
    
  }, //count name,get "name_1" or "name_2" or ...
  set(key,value){

  }, //set key,call everything binded
  get(key){

  }, //get its value
  how(element,key){

  }, //get own prop
  node(id){
    
  } //give element id,get Node
  run(element){

  }, //bind element data,get Node
}

```
e={
  t "div" //tag
  a {id "app" style {color "gold" z-index "666"}} //attributes
  c [{t "button"} {t "input"}] //children
  f ["show"] //function keys
  d ["button_1"] //data keys
} 
```

```
c={
  button(icon){ 
    //include d(pressed state),not include f(change)
    //r=...
    key=voyage.new("button") 
    voyage.set(key,"off") 
    //...
  }
  listItem(item){
    //create listItem
  }
  list(items){
    r={t "div" a {class "list"} c []} //result
    //or r=make("div.list")
    for(let i of items){
      let li=listItem(i)
      r.c.append(li)
    }
    return r
  }
  app(data){
    r={t "div" a {id "app"} c [list(data.items),button(data.buttonicon)]}
    return r
  }
}

fn={
  show(id,state){
    node=voyage.node(id)
    if(state=="off"){
      node.style.display="none"
    }
    else{
      node.style.display="inline"
    }
  }
}
```


