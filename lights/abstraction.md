### The Cost of Abstraction

The cost of duplicating code, of accumulating technical debt, of not having tests and so on is often discussed and written about. The cost of abstracting things is almost never mentioned though, despite it being a major factor in keeping any project maintainable.

As an example, imagine that your program often increases two variables in sequence:

```
i++;
j++;
```

So you decide that the functionality deserves a dedicated function:

```
template<typename T> inc_pair(T &i, T &j) {
    i++;
    j++;
}
```

By doing so you've removed some duplicated code but also --- and that's a thing that's rarely mentioned --- you've added a new abstraction called "inc_pair".

In this particular case, almost everybody will agree that adding the abstraction was not worth it. But why? It was a tradeoff between code duplication and increased level of abstraction. But why would one decide that the well known cost of code duplication is lower than somewhat fuzzy "cost of abstraction"?

To answer that question we have to look at what "cost of abstraction" really means.

One obvious cost is that an abstraction is adding to the cognitive load of whoever works with the code: They will have to keep one more fact in mind, namely, that inc_pair is a function that increases both of its arguments by one.

However, the main cost of abstraction is in separating the implementation from the specification, or, to put it in a different way, the letter of the function from the spirit of the function. The former being what the function does, the latter being what everybody believes it should do.

The important word in the above sentence is "everybody". Once you make an abstraction, it's not longer about what YOU believe it should do. You are entering the domain of social consensus. It's about what EVERYBODY involved thinks it does. And, as everybody knows, social consensus is hard.

Let's look at a practical example: What if type T for our inc_pair function is "Duration"? What will the function do? Will it increase the duration by one second? One day? One nanosecond? Individual users may disagree.

Another example: What if operator ++ on type T throws an exception while doing j++ ? Sould the function leave i and j in inconsistent state? Or should it try to keep the change atomic by doing i--- ? And what if i--- throws an exception while doing that? Maybe the function is supposed to copy the old values of the variables and set them back in case of an error? Nobody really knows.

In short, the decision about creating an abstraction should not be taken lightly. There's a large social cost to every abstraction and if you are churning them out without even thinking about it you are on the way towards making the project unmaintainable. If the abstractions leak to the user you are also making it unusable.

That being said, most of the projects out there are already so abstraction heavy that they are almost unmaintainable. Thus, the programmers are accustomed to the state of unmaintainability, consider it the normal state of affairs and they happily contribute to the mess by adding more and more abstraction.

I've already shown one example of adding a new abstraction for no particularly good reason: Programmer notices that two pieces of code are somewhat similar and creates a function to de-duplicate it. The cost of doing so is rarely taken into account.

Another example, a systemic one rather than an accidental one, is the use of mocking in tests. While tests are definitely useful, they often require certain piece of code to be abstracted so that it can be mocked --- for example by creating an interface, then having both actual and mock implementation of the interface. Creation of an additional abstraction is just an collateral damage.

Yet another example are inheritance hierarchies. Say we want 4 classes: Egg laying fish, live bearing fish, egg laying mammals (echidna) and live-bearing mammals. The intuitive reaction is to create an inheritance hierarchy topped by class Animal, with intermediary nodes Fish and Mammal. It is often done that way even if there's no use case for directly working with Animal, Fish or Mammal class. Thus, future maintainers are left to scratch their heads about how should those abstract classes behave.

In the end I would like to look at what anti-abstraction tools we have at our disposal.

First of all, we have scoping. If a C function is declared as "static" it is visible only within that file. That limits the amount of damage it can cause. It is still an abstraction but it is prevented from leaking to the wider audience. Same can be said of Java's "private" modifier. Of course, it's not a panacea. If source file is 10,000 lines long the scope of a static function is greatly extended and it becomes almost as dangerous as a non-static function.

We also have unnamed objects (e.g. lambdas). It turns out it's hard to treat something with no name as an abstraction. (I wonder what Plato would say about that!) If the only way to refer to a function is by writing it down the letter and the spirit of the function become much more entangled.

It also seems that Go's implicit interfaces were designed to avoid unnecessary abstraction. Given that interfaces are not defined when object is implemented but rather they can be created on the fly as needed by the user, their scope can be significantly limited thus keeping the number of people affected by the abstraction lower.

My final question is whether we are doing enough to limit the amount of abstraction we have to deal with. And do we have sufficient tools to do such limiting? While in many cases it seems that it's only a question of programmer's attitude, at least in the case of mocking it's the tooling itself that contributes to the problem.

**Nov 7th, 2016**
