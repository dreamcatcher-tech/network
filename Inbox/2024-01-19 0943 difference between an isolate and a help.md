
>[!tip] Created: [2024-01-19 Fri 09:43]

>[!question] Targets: 

>[!danger] Depends: 

If an isolate is just making an API call out to an AI, surely it can be called as a help function ?

So we need to be able to have descriptions of what the help does inside the help itself, so we know when to engage that specific help.  We are trusting this description to match, and we can have that verified by the system that checks it during the publishing processing pipeline.

Should the help be like a function call where it has some parameters it needs, so like adding a customer needs a name ?  Or, should this requirement be in the template that is used, and so the requirement would come up as the help was executing ?

The only two options for the stuckfinder seem to be either it is a help, or it is an isolate.
It could be a help plus a runner ?
If it is a help, it definitely needs to call an isolate to get all the helps it needs.
As a runner, it would load up the helps folder, dump them as json, then run the help file, possibly re-using the chat runner.

If it was help, it would return in NL.

> Helps are interacted with using NL, isolates are tool calls that happen during the execution of helps.

Runners interpret helps, helps call on isolates that the runner executes.

If an isolate can call a help, what is the point of the distinction ?

Isolates have function io, helps have NL IO.

Helps could have a list of helps that it can call, which get loaded different ?
Or commands could be just the same but they are loaded with a help wrapper, not an isolate one ?

So, is the stuckloop a help file, or an isolate ?
Things should be help as much as possible, since NL is easier to code.  So it could be either.
So we choose help, since the NL interface is more forgiving, and we have to make an NL call anyway.

But now running a help needs to know about the help system ?  Or is this just given in the description ?

A runner would include AI capabilities, like the AI model, etc - in our system this is an API call, but as this role expands, it would include running GPU inference.  The runner is the heart of repeatability.