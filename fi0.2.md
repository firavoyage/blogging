# fi 0.2

in fi 0.1 
i wrote html document as string in script
that's wrong at first
although render everything in script
may get better control to the components
after all 
i think that we should maintain to use
- html as content
- css as style
- javascript as event listener & requests maker
one may prefer to use other dialects like `less` `typescript` `firascript`
which can be compiled to them
but from my perspective
it's never appropriate to write content in script like `jsx` `tsx`
that combines everything together
which is quite confusing

so here is fi 0.2
no longer includes only one function `render(docu,compo,data)`
instead 
use seperate functions to deal with them

btw
it's not recommended to use `fi`
(or other framework like `vue` `react`)
in a static site like `blog`
because it's stupid to use a big knife to kill a small chicken

in script
there are these functions
```
//create component
c({
docu string
data [] //sync data
init (){}
}) 

//define sync data
d{
uname
links
}
```

in document
just edit the static part as regular html
for mutable ones
add tag `f=componame` to render a component
after fi is loaded
it will iter the document tree and deal with them


















