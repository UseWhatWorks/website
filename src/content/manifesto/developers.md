---
title: "For Developers"
tagline: "Building the future with proven tools"
emoji: "👩‍💻"
gradient: "from-blue-500/10 to-cyan-500/10"
---

## Developers

You're the ones who own the code. Doesn't matter whether you wrote it by hand, installed it from a package, or supervised the AI tools that generated it; you got paid to create it, and that code is yours. You deploy it, you run it, you own it.

## Don't Build What You *Can* - Build What  You *Must*

“Your scientists were so preoccupied with whether or not they *could*, they didn’t stop to think if they *should*.” 
  -- Ian Malcolm in "Jurassic Park"

When Jeff Goldblum's rock star mathematician - sorry, *chaotician* - spoke those immortal lines in *Jurassic Park*, way back in 1994, the web was a handful of HTML pages on university servers. Java didn't exist yet. No .NET, no Python, no Go or cloud or AI - but Dr Malcom's quote would prove remarkably prescient over the next three decades of software development. Take a look back at your own career, your own projects, and ask yourself: how many times have you built something because you *could*, without stopping to think whether you *should*?

## Today's "Quick Wins" Are Tomorrow's Headaches

Good developers solve problems. Ship features, keep customers happy, keep "the business" happy. We've all been there: looking at a solution to some common problem - content management, email delivery, infrastructure - but there's a learning curve, or a price tag, so you decide "no, we can just build our own" - and you do. Email clients, object mappers, authentication, authorisation; you spend a few weeks hacking code, get something that works, ship it, move on to the next thing.

Then, somewhere down the line, it starts to creak under the volume of traffic, concurrency issues, deadlocks. Or you need to add new features - not cool, innovative features you can charge more money for. Boring features, like WEBP support, and localization - stuff that "the business" obviously thought should have been there from the beginning, even though nobody had ever asked for it.

And the only people in the world who can fix bugs and add features are you and your team. You can't just install the latest version, or upgrade, or outsource. Sure, you can hire more developers - but it'll take them months to get up to speed on your codebase's quirks and idiosyncrasies.

## Career Security Beats Job Security

You'll learn a lot building your own object-relational mapper, or your own message bus. You'll develop a deep appreciation for the difference between something that "works on my machine", and something that'll run across a dozen nodes in a cluster, 24/7, for years at a time. Plus, you've got to admit - if you're the only person who knows how your employer's critical infrastructure works, it's a lot harder for them to fire you.

But when it's eventually time to move on to your next contract, or your next employer, you can't take that code with you. You'll be starting from scratch, every time, while your new boss is breathing down your neck asking how long everything's going to take - and the team you left behind is staring at the code they've inherited, scratching their heads and wishing you'd written more documentation.

Companies don't hire developers who know how to *build* a message bus. They hire developers who know how to *use* one. Developers who can hit the ground running, pull in established solutions to common problems and get to building the good stuff as fast as possible.

## Open Source Looks Great On Your CV

Two developers interviewing for the same position. One of them built a .NET RabbitMQ client from scratch. It worked great... but their old company owns the code, and the IP. It's all locked away in private repositories, nothing is public; the hiring panel just has to take their word for it.

The other developer also needed a key-value store - so they used EasyNetQ. When they hit limitations, they solved them and opened pull requests. Their code is public. They can show a hiring panel the commits, explain the reasoning behind them, link them to the discussion threads under the GitHub issues.

Which one do you think is going to get hired?

## If You Can't Sell It, Buy It

Every release, every line of code, every day that you and your team are working on stuff, you should be building **things you can sell.** Call them what you want: strategic differentiators, special sauce... the stuff your customers can't get anywhere else. Customers aren't dealing with you because you've got a fantastic login system, or a really cool message bus. They're dealing with you because you're the best place to go to find acting jobs, or to research conference venues, or to buy machine tools. If you want your dev teams focused on the special sauce, everything else has to be as ordinary, as predictable, as *boring* as possible. You need usernames, passwords, identity management? That's a solved problem. You need to synchronise data across multiple regions and time zones? That's a solved problem. You want resilient messaging? *That's a solved problem.*

## Think About Opportunity Cost

There's a tendency to think of developer time as free - after all, your dev team is going to get paid *anyway*; it's not going to cost you any extra to have them build an in-house login system. That's completely the wrong way to look at it. It's not about build vs buy. It's about what they could be building *instead* - and how much you'll be able to sell it for. You can spend two months building a login system - or you can buy a login system that works and get the dev team working on the features for the new Platinum membership tier, ship that two months earlier, and look at that - Platinum membership revenue just paid for the new login system *and then some*. You might even get a bonus.

## Don't Reinvent The Wheel - Use What Works

When you start working on an unfamiliar codebase, one of the first things you'll do is look at the dependencies. Which packages and libraries does it use? Where's it hosted? How does the data access work? 

If all you see are two dozen .NET projects with namespaces like `MyCompany.Data.TableMapper`? That's a bad day. It's going to be uphill all the way.

If you see a list of familiar services, names like AutoMapper, IdentityServer, NServiceBus, MassTransit? That's a good day. You know those projects. And so do a whole lot of other people.

If it turns out there are paid support contracts & maintenance agreements for those dependencies? That's a *great* day. It means **somebody else knows what's going on, they're getting paid to care about your problems, and they're ready to help if you need it** - and you get to focus on the special sauce.

That's what Use What Works is all about: the freedom to focus on building the thing that matters, the thing folks can't get from anybody else.

And understanding that while a good developer knows *how* to build a message bus, or an object mapper, or a model-view-controller framework, a great developer knows *not* to build those things. The question isn't whether you *could* build it; the question is whether you *should* - and if it's not the special sauce, the answer is probably no.

