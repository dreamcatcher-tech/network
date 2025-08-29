
>[!tip] Created: [2025-08-30 Sat 10:00]

>[!question] Targets: 

>[!danger] Depends: 

it seems actually better / best, to send down the tui of the app, and then just render rich html elements over the top, like a presentation layer ?

To build apps in this way, we still have all the richness and animations we all love and enjoy with web apps, but the underlying design is therefore:
1. fundamentally in LLM language - text
2. accessible to navigators
3. simpler to lay out
4. very low bandwidth to update
5. easy to test, as we don't need a browser
6. snapshottable, since the exact state is easy to capture ?

all the logic then runs on the server, and is highly testable.

this will make a great vibe coding platform, since any simplification is good for any kind of intelligence.

So we could have a fully fancy fat UI that is the flesh on a tui skeleton.

Can also decorate in different ways that you might like.

the mcp interface is optional but designed, which makes it more accessible by using command line args to the tool.

Might be able to implement this using mcp ui ? somehow bundle that in there ?