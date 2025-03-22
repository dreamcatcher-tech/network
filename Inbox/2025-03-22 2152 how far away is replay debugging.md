
>[!tip] Created: [2025-03-22 Sat 21:52]

>[!question] Targets: 

>[!danger] Depends: 

Deno compile produces a small and very fast executable, but the debug ability is lost because the source code is compiled, stripped of types, and not developer-friendly. 

But so long as the request made it into Git, at that point we should be able to analyze it and then replay it on a local machine, or inside of a container with full debugging abilities enabled. Sort of like the Chrome debug protocol. 

Having a container that we could fire up to breakpoint debugging on and have the UI stream back using the Chrome DevTools so that we can step through the code while chatting with an LLM about what we're seeing inside the debug state. The LLM takes note whenever we've stopped somewhere, recording it in memory (where else could it possibly store it?). This lets us trace code pretty effectively, and you could even allow an LLM to do some of this stuff itself. 

At least the LLM would be able to prepare an example snapshot or a sequence of events for you to observe so you could see what it was talking about. 