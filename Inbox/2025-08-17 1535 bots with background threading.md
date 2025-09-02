
>[!tip] Created: [2025-08-17 Sun 15:35]

>[!question] Targets: 

>[!danger] Depends: 

based on [[2025-08-16 0928 timeline threads of your history and context|timelines]] we need a way to see inside these long running systems.

so if in any timeline, these background agents are triggering and watching, we need a way to see inside them.

To look at each one, it would have been receiving messages each time any system wide event occurred, or when its router triggered based on a system wide event.

So you should be able to browse these sessions and see how they have been triggered, see what their responses were, eval them, tune them.

The only way that we're going to have this complete awareness is if those bots got triggered any time anything changed.  The only way we have a complete view of things is with timelines.

Maybe we can trigger our bots inside dreamcatcher just using mcp for now ?
The bots in dc can read the files that the mcp server is exposing, and it can pull them in as context.
We could make a transclusion be actually loaded up on the mcp server, as you go around and use the clipboard to put things in there.  
Stash the clipboard items as transcludes that get stored long term.  Give them friendly names and descriptions in case you want to pick them up later.

Somehow treating transcludes as tool call only seems much easier than imaginging the UI form ?

read resource should allow for a size limit / line limit for text and json.
it should be able to call a summarization service.

an mcp browser service, where we can see external mcp servers, or at least add one in and have it be published as a public good, or interactiving with a public api.
Then we can user our tooling to interact with anything we like, such as aws or fly infrasrtucture.

Each bot should be called by mcp, so when they subscribe to changes in another chat, using the subscribe, with or without an llm filter, then they start acting.  They subscribe to other chats by subscribing to the change in resources for that chat.  An llm filter with instructions can be put in place too.  It can run a separate thread to check this, and change it accordingly to make sure it does right - the main thredas job is signalling intent, and then workers come in the back and reasearch it all, test it, expand on it.

selecting the right tool, the bot could fork whenever it had many options, and each version of itself assess if the current version will work, and feeds back up.
At the end, it wipes its history, and goes with the tool it has found best.  Can look in to the debug if you want, but the point is that a lot of thinking when in at this step - this junction - since its effects are profound, so we should flare out the number of agents that are working on it.
