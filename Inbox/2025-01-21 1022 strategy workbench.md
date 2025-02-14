
>[!tip] Created: [2025-01-21 Tue 10:22]

>[!question] Targets: 

>[!danger] Depends: 

The issue is there's a fairly limitless number of strategies that can be applied to LLMs which are constantly changing based on the LLM and the needs of the people running them. And so all these start-ups we're observing seem to be just making different strategies to attack well-known problems, and so what we should really make is a network of strategies where people can easily propose and compose their own strategies, and the idea being that these can react faster to new LLMs and new ideas, but they can also allow more innovation because the overhead they're contributing is very small as the users themselves can suggest and try out new things. Very rapidly we would then produce tools that support them like auto-eval generations, access to standard data sets, leaderboards, scoreboards, that sort of thing. The idea being that using these custom systems would outpace isolated point solutions plus of the advantage of native integration with all the other solutions that are for the same platform.

One strategy is to attempt to solve the bug or issue, then summarize what the fault could have been, then attempt to implement the change from clean, so that the patch submitted is minimal.

Can have a strategy that checks all library usage against docs, and builds up a notes file about each one, since it catches flop mistakes - natural bias the machine makes.

We should make a massive shared repo of docs that have been processed by everyone, and you pay tokens to put the data in, but you earn tokens when others read rather than re-burn tokens.
This seems a general principle as we terraform the data landscape to be fully transformed by ai models.

Along with coverage info on the code, we should also provide timing information, so we can know which functions are running hot, to help the bot with optimization tasks.  Can make gantt charts that are hand traced, and then can look at the expensive parts and focus in on that.

Could also do a actor strategy where it rewrites the algorithm that is hot in terms of bit O notation to explain how it works and to help search for better options.  Seems to be all about having alternatives.

predictions market that does ai derivations of lightweight steerage that you input, so the number of forecasts and the internal logic consistency is high, having a very granular model.

What is probably coming is a framework to make it easy for code to be instrumented, debugged, by llms, and supporting having multiple forks or versions so the bots can try to solve concurrently.  This should just arrive for us one day.

Walk functions one step at a time, taking notes, so we can understand the call flow better, by considering each step, so we're tracing the code, but using a strategy to focus on each function, on function at a time.  Can also be taking notes about the code, which can be processed separately.  So its like LLM based tracing, and it can fork its threads, if something is being called by an interface, so it can follow all versions of the interface, and have an oversight watcher.

Process cpu profiles so we can pull out just the data for the current file.
Profiling could be used to generate coverage as well, so we know what isn't getting hit ?
Or just do some processing on the coverage files to give this same end result.

Might write code in pseudo code before it gets turned into real code, to ensure the algorithm is minimal ?

When fixing tests, start at the top, focus in by making it have a .only or use a filter, then fix that, remembering to ripple down the rest of the tests if a change is made to fix it.  The idea is that we ripple forwards each time with each fix, so that we never have to fix the whole thing all at once - narrow, then open, and repeat each time.  Very rarely will an oscillation occur, and if it does, we can easily call for help, or consider the whole situation, or roll back and start again.