# my javascript principles

first,read "airbnb javascript guide"

second,define all consts at the top of the program

> so,never define a static number or a static string in any function

third,in practice,never define an object with both data and function
data are numbers and strings,arrays and objects,like classic json
functions are method libraries like globalThis.Math

still,if you want to put data and fn in one object
for example,math.pi is a number,and math.abs is a fn
then,the fn must have nothing to do with the data
in this case,math.pi is not mentioned in the process of math.abs
(unless you pass math.pi as a parameter,but math.abs will only get a copy)

> so,never use these words `prototype`,`class`,`constructor`,`export`,`extends`,`super`,`this`,etc.

and why?
see *why erlang's author hates oo*




