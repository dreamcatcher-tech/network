
>[!tip] Created: [2024-01-19 Fri 09:43]

>[!question] Targets: 

>[!danger] Depends: 

If an isolate is just making an API call out to an AI, surely it can be called as a help function ?

So we need to be able to have descriptions of what the help does inside the help itself, so we know when to engage that specific help.  We are trusting this description to match, and we can have that verified by the system that checks it during the publishing processing pipeline.

Should the help be like a function call where it has some parameters it needs, so like adding a customer needs a name ?  Or, should this requirement be in the template that is used, and so the requirement would come up as the help was executing ?

The only two options for the stuckfinder seem to be either it is a help, or it is an isolate.
It could be a help plus a runner ?
If it is a help, it definitely needs to call an isolate to get all the helps it needs.
As a runner, it would load up the helps folder, dump them as json, 

If it was help, it would return in NL.

> Helps are interacted with using NL, isolates are tool calls that happen during the execution of helps.