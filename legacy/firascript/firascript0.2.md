firascript | v0.2

> how firascript compiler works

> some of the statements will be compiled
> others will be skipped

# 1
find out the quotes and strings
skip them

# 2
convert the program into a syntax tree

# 3
split it into statements

# 4
for each statement
check whether it's included in the macros
then compile it

for the objects
convert them recursively


