# fp oop discussion

##

This is kinda funny. I wrote a "rebuttal" article back in 2009:
http://goran.krampe.se/2009/06/26/joe-is-wrong/

...and then I met Joe not long after and we also discussed this in fact. He then told me that he felt my article was fair (!) and that he had _changed his opinion on OO since writing that article_.

IIRC his exact words were something along the lines of "I did not understand OO when I wrote that article". Now... he also argued Erlang is in fact VERY OO, and in some ways he is correct, since its very focused around autonomous "parts" communicating solely via messages.

Finally, I haven't read all 162 comments here - but OO is not "bad" nor "the holy graal". There are different ways of doing programming, and its as simple as that. I can find joy in simple imperative coding as much as I can long for the days I was working in pure OO in Smalltalk. :)

##

I've said this multiple times over multiple years and I'll say it again just because so many green developers get misled.

Object oriented programming is good. Not in absolutely every situation, but for most business applications it's better than the alternatives. The reason it's good is that it is productive. Objects map neatly to records, which pushes global state persistence and all the hairiness of locks to a good RDMS like Postgres. It's naturally normalized, but can be denormalized without much work, and in exchange for bundling state with functions you get easier introspection which is especially helpful in debugging.

These conversations are better done with examples. Say you want to build a social network around videos, like YouTube. Say a user can block another user and, thus, stop them from commenting on their videos.

Would you rather type out this:

```
user.blocked_by? other_user
```

Or this

```
is_blocked(user, other_user)
```

When doing the check? Personally, seeing the the is_blocked? method on a user makes it easy for me to understand. Who has blocked whom is more natural to talk about when there is a primary object subjecting the other object to a test. For all the anti-OO stuff out there, it all boils down to the same thing in the end. For business logic, your functions need to know so much about the data that they are operating on that it's pointless to try to avoid bundling the state. I'm never going to pass a cheeseburger into my is_blocked function so why on earth would I avoid bundling state and operation together? It's like a map of a city trying to avoid listing shops since "maps should be about roads and geography, not shops." A pointless dogma that doesn't actually help programs get built. Most successful startups use OOP and there is a clear reason for that: It's more productive.

Now, do I use OOP when I'm doing data science stuff? Mostly no. I don't need it there. But where it works, it's magic.

###

What you seem to like is infix syntax and overloading on the first argument.
I think this is really the most valuable part of OOP; it makes code read in the order that functions are applied, which is both natural and enables type driven autocompletion.

What bothers me about OOP is inheritance, subtyping and the emphasis on mutable state, which greatly complicate call chains, the type system and temporal reasoning.

####

Yes, but honestly that is super easy to avoid. We code in Java and pretty much all objects are @Immutable, inheritance is only used when its the right tool for the problem (it really rarely is) and subtyping is solely done through interfaces.
I think the main reason what people get wrong about OOP is that they tend to think everything needs to be models with inheritence, which is completely wrong. Inheritence is BAD!

The rule should be:

1. Avoid inheritance

2. Use interfaces instead

3. If interfaces are not enough, use composition

4. If composition is not enough go through all other similar design patterns that are not based on inheritance.

5. If you really need inheritance, be very careful about which function you make non-final and non-private.

##

Well, I disagree with 99% of this... I'm a guy that started with C, moved to functional programing, added C++, and now do all 3.

> Objection 1. Data structure and functions should not be bound together

Well, in my experience, in every almost every code-base (either from functional, or imperative programing), we end up with modules, witch are a set of function taking the same type as a parameter. This is very close to binding the functions and the types...

> Objection 2. Everything has to be an object.

I don't get the example. The only thing that this show, is the benefits of having a range type built in the language. Then it's just type aliases.

"There are no associated methods.", yes, but you will need functions to manipulate those types (just translate one type into another), at the end, it's going to a module, which is almost an object.

> Objection 3. In an OOPL data type definitions are spread out all over the place.

That's true. It also makes thinking about the data layout complex. That's why other paradigm have been developed (DOP), on top of OOP. Now you can also think that having those defined together makes dependency management easier.

> Objection 4. Objects have private state.

False. Objects can have a private state. This a problem with mutability, not oriented object programing. You can have non mutable OOP.

> Why was OO popular?

> > Reason 1. It was thought to be easy to learn.

The past 20 years have shown how easy it is. In fact, I actually think it's too easy, people rely too much on abstraction, without even trying to understand what's going on. I my opinion, it promotes a lazy mindset (This is my biggest criticism about OOP).

> > Reason 2. It was thought to make code reuse easier.

I would like an evidence that it's not.

> > Reason 3. It was hyped.

True, but that does not make it bad. People tried to hype every technologies... Some stayed, some went away.

> > Reason 4. It created a new software industry.

How has OOP created a software industry that would not have existed if functional programing had "won the fight"?

###

Upvoted because it's well-articulated, even though I disagree.

> Well, in my experience, in every almost every code-base (either from functional, or imperative programing), we end up with modules, witch are a set of function taking the same type as a parameter. This is very close to binding the functions and the types...

There is a key distinction: If I have two subsystems that use the same data in different ways, I can keep those concerns separate by putting the functions for each concern into a different module. Binding all the functions to the type mixes the concerns together and creates objects with way too much surface area.

Also, most OO langs make a big ceremony out of each new type: create the class file, create the test file, blah blah blah. I want types to be cheap so I can make them easily and capture more meaning with less work.

####

> Upvoted because it's well-articulated, even though I disagree.
> Appreciate it :)

> There is a key distinction: If I have two subsystems that use the same data in different ways, I can keep those concerns separate by putting the functions for each concern into a different module. Binding all the functions to the type mixes the concerns together and creates objects with way too much surface area.

This is where composition helps. Now, historically, indeed OOP programmers have not been the best at using composition. Now, looking at more recent projects, this has got a lot better.

> Also, most OO langs make a big ceremony out of each new type: create the class file, create the test file, blah blah blah. I want types to be cheap so I can make them easily and capture more meaning with less work.

Totally agree with that, the ability to define a type in one line and have it reflected though the entire code base through type inference is the one thing that I miss the most in C/C++.

---

> This is where composition helps.
> It does, though in my experience it leads you down a path that ends in some pretty strange names, as you nominalise more and more nebulous concepts, trying to verb in the kingdom of nouns.
