August 29, 2012 by [Yannis Rizos](). [109 comments]()

One of the very first ideas we had for this blog was to convert some of the wonderful gems of the early era of our site, the undisciplined period, to blog posts. Questions that were once enthusiastically received by the community, but no longer fit Programmer's scope.

The first deleted question I've chosen is [Jon Skeet's](http://programmers.stackexchange.com/users/8958/jon-skeet) "What's your most controversial programming opinion?" question (available only to 10K+ users, sorry), a +391 scored question that was originally asked on Stack Overflow on January 2, 2009. What follows are twenty of the highest voted answers, in random order...

1.  Programmers who don't code in their spare time for fun will never become as good as those that do.

    I think even the smartest and most talented people will never become truly good programmers unless they treat it as more than a job. Meaning that they do little projects on the side, or just mess with lots of different languages and ideas in their spare time.

    _by rustyshelf_

2.  Unit testing won't help you write good code.

    The only reason to have Unit tests is to make sure that code that already works doesn't break. Writing tests first, or writing code to the tests is ridiculous. If you write to the tests before the code, you won't even know what the edge cases are. You could have code that passes the tests but still fails in unforeseen circumstances. And furthermore, good developers will keep cohesion low, which will make the addition of new code unlikely to cause problems with existing stuff.

    _by Chad Okere_

3.  The only "best practice" you should be using all the time is "Use Your Brain".

    Too many people jumping on too many bandwagons and trying to force methods, patterns, frameworks, etc. onto things that don't warrant them. Just because something is new, or because someone respected has an opinion, doesn't mean it fits all.

    _by Steven Robbins_

4.  Most comments in code are in fact a pernicious form of code duplication.

    We spend most of our time maintaining code written by others (or ourselves) and poor, incorrect, outdated, misleading comments must be near the top of the list of most annoying artifacts in code. I think eventually many people just blank them out, especially those flowerbox monstrosities. Much better to concentrate on making the code readable, refactoring as necessary, and minimising idioms and quirkiness. On the other hand, many courses teach that comments are very nearly more important than the code itself, leading to the this next line adds one to invoiceTotal style of commenting.

    _by [Ed Guiness](http://programmers.stackexchange.com/users/2381/ed-guiness)_

5.  "Googling it" is okay!

    Yes, I know it offends some people out there that their years of intense memorization and/or glorious stacks of programming books are starting to fall by the wayside to a resource that anyone can access within seconds, but you shouldn't hold that against people that use it. Too often I hear googling answers to problems the result of criticism, and it really is without sense. First of all, it must be conceded that everyone needs materials to reference. You don't know everything and you will need to look things up. Conceding that, does it really matter where you got the information? Does it matter if you looked it up in a book, looked it up on Google, or heard it from a talking frog that you hallucinated? No. A right answer is a right answer. What is important is that you understand the material, use it as the means to an end of a successful programming solution, and the client/your employer is happy with the results.

    _by PhoenixRedeemer_

6.  Not all programmers are created equal.

    Quite often managers think that DeveloperA == DeveloperB simply because they have same level of experience and so on. In actual fact, the performance of one developer can be 10x or even 100x that of another. It's politically risky to talk about it, but sometimes I feel like pointing out that, even though several team members may appear to be of equal skill, it's not always the case. I have even seen cases where lead developers were 'beyond hope' and junior devs did all the actual work -- I made sure they got the credit, though.

    _by Dmitri Nesteruk_

7.  I fail to understand why people think that Java is absolutely the best "first" programming language to be taught in universities.

    For one, I believe that first programming language should be such that it highlights the need to learn control flow and variables, not objects and syntax. For another, I believe that people who have not had experience in debugging memory leaks in C / C++ cannot fully appreciate what Java brings to the table. Also the natural progression should be from "how can I do this" to "how can I find the library which does that" and not the other way round.

    _by Learning_

8.  If you only know one language, no matter how well you know it, you're not a great programmer.

    There seems to be an attitude that says once you're really good at C# or Java or whatever other language you started out learning then that's all you need. I don't believe it- every language I have ever learned has taught me something new about programming that I have been able to bring back into my work with all the others. I think that anyone who restricts themselves to one language will never be as good as they could be. It also indicates to me a certain lack of inquistiveness and willingness to experiment that doesn't necessarily tally with the qualities I would expect to find in a really good programmer.

    _by [glenatron](http://programmers.stackexchange.com/users/4027/glenatron)_

9.  It's OK to write garbage code once in a while.

    Sometimes a quick and dirty piece of garbage code is all that is needed to fulfill a particular task. Patterns, ORMs, SRP, whatever... Throw up a console or web application, write some inline SQL (feels good), and blast out the requirement.

    _by [jfar](http://programmers.stackexchange.com/users/6101/jfar)_

10. Print statements are a valid way to debug code.

    I believe it is perfectly fine to debug your code by littering it with System.out.println (or whatever print statement works for your language). Often, this can be quicker than debugging, and you can compare printed outputs against other runs of the app. Just make sure to remove the print statements when you go to production (or better, turn them into logging statements).

    _by [David](http://programmers.stackexchange.com/users/58440/david)_

11. Your job is to put yourself out of work.

    When you're writing software for your employer, any software that you create is to be written in such a way that it can be picked up by any developer and understood with a minimal amount of effort. It is well designed, clearly and consistently written, formatted cleanly, documented where it needs to be, builds daily as expected, checked into the repository, and appropriately versioned. If you get hit by a bus, laid off, fired, or walk off the job, your employer should be able to replace you on a moment's notice, and the next guy could step into your role, pick up your code and be up and running within a week tops. If he or she can't do that, then you've failed miserably. Interestingly, I've found that having that goal has made me more valuable to my employers. The more I strive to be disposable, the more valuable I become to them.

    _by Mike Hofer_

12. Getters and Setters are highly overused.

    I've seen millions of people claiming that public fields are evil, so they make them private and provide getters and setters for all of them. I believe this is almost identical to making the fields public, maybe a bit different if you're using threads (but generally is not the case) or if your accessors have business/presentation logic (something 'strange' at least). I'm not in favor of public fields, but against making a getter/setter (or Property) for everyone of them, and then claiming that doing that is encapsulation or information hiding... ha!

    _by Pablo Fernandez_

13. SQL is code. Treat it as such.

    That is, just like your C#, Java, or other favorite object/procedure language, develop a formatting style that is readable and maintainable. I hate when I see sloppy free-formatted SQL code. If you scream when you see both styles of curly braces on a page, why or why don't you scream when you see free formatted SQL or SQL that obscures or obfuscates the JOIN condition?

    _by MustStayAnonymous_

14. UML diagrams are highly overrated.

    Of course there are useful diagrams e.g. class diagram for the Composite Pattern, but many UML diagrams have absolutely no value.

    _by Ludwig Wensauer_

15. Readability is the most important aspect of your code.

    Even more so than correctness. If it's readable, it's easy to fix. It's also easy to optimize, easy to change, easy to understand. And hopefully other developers can learn something from it too.

    _by [Craig P. Motlin](http://programmers.stackexchange.com/users/8731/craig-p-motlin)_

16. XML is highly overrated.

    I think too many jump onto the XML bandwagon before using their brains... XML for web stuff is great, as it's designed for it. Otherwise I think some problem definition and design thoughts should preempt any decision to use it.

    _by Over Rated_

17. Software development is just a job.

    I enjoy software development a lot. I've written a blog for the last few years on the subject. I've spent enough time on here to have >5000 reputation points. And I work in a start-up doing typically 60 hour weeks for much less money than I could get as a contractor because the team is fantastic and the work is interesting. But in the grand scheme of things, it is just a job. It ranks in importance below many things such as family, my girlfriend, friends, happiness etc., and below other things I'd rather be doing if I had an unlimited supply of cash such as riding motorbikes, sailing yachts, or snowboarding. I think sometimes a lot of developers forget that developing is just something that allows us to have the more important things in life (and to have them by doing something we enjoy) rather than being the end goal in itself.

    _by Greg Beech_

18. If you're a developer, you should be able to write code.

    I did quite a bit of interviewing last year, and for my part of the interview I was supposed to test the way people thought, and how they implemented simple-to-moderate algorithms on a white board. I'd initially started out with questions like:

    > Given that Pi can be estimated using the function 4 \* (1 -- 1/3 + 1/5 -- 1/7 + ...) with more terms giving greater accuracy, write a function that calculates Pi to an accuracy of 5 decimal places.

    It's a problem that should make you think, but shouldn't be out of reach to a seasoned developer (it can be answered in about 10 lines of C#). However, many of our (supposedly pre-screened by the agency) candidates couldn't even begin to answer it, or even explain how they might go about answering it. So after a while I started asking simpler questions like:

    > Given the area of a circle is given by Pi times the radius squared, write a function to calculate the area of a circle.

    Amazingly, more than half the candidates couldn't write this function in any language (I can read most popular languages so I let them use any language of their choice, including pseudo-code). We had "C# developers" who could not write this function in C#. I was surprised by this. I had always thought that developers should be able to write code. It seems that, nowadays, this is a controversial opinion. Certainly it is amongst interview candidates!

    _by Greg Beech_

19. Design patterns are hurting good design more than they're helping it.

    Software design, especially good software design is far too varied to be meaningfully captured in patterns, especially in the small number of patterns people can actually remember -- and they're far too abstract for people to really remember more than a handful. So they're not helping much. And on the other hand, far too many people become enamoured with the concept and try to apply patterns everywhere -- usually, in the resulting code you can't find the actual design between all the (completely meaningless) Singletons and Abstract Factories.

    _by Michael Borgwardt_

20. Less code is better than more!

    If the users say "that's it?", and your work remains invisible, it's done right. Glory can be found elsewhere.

    _by [Jas Panesar](http://programmers.stackexchange.com/users/51315/jas-panesar)_

What do you think? And more importantly, what's *your* most controversial programming opinion?

**Update**

A few more controversial programming opinions:

- [Hopefully More Controversial Programming Opinions](http://prog21.dadgum.com/149.html), by James Hague,
- [12 (Really) Controversial Programming Opinions](http://billthelizard.com/2012/09/12-really-controversial-programming.html), by Bill the Lizard.
