
>[!tip] Created: [2024-11-23 Sat 16:04]

>[!question] Targets: 

>[!danger] Depends: 

So much work being done on making AI chat bots - clones of chatgpt.

Parts of our system are a clone.

So what about, making the UI be identical to these other options, but then serverside, posting in the results of the calls ?

So we have a chatbot that runs like any other, but it periodically syncs to the blockchain ?

So it runs direct in the browser, then because it is trusted, the result that comes back from calling the AI goes to the artifact API ?

This means that the user experience is very crisp, we stay up to date with the latest ai frameworks with very little effort for the coming year, and we lose no functions.

Make a sidecar that can receive control messages form artifact ?

If we can intercept the backend, this is best - intercept when it stores results, and when it does tool calls, and use our operations there.
Use lagged actions, where we show the result, but indicate we are still committing it, so the UI stays maximally responsive.

? what is the value of having many separate chats ?
They seem a needed part of the system, so we can rapidly go around doing different things, just so long as the chats are accessible.

Not having UI concerns in artifact might actually help somewhat ?  Stops it needing to be quite so fiddly ? until we can get some stucks going that work on it ?

Best to get the lightest possible solution running that gives us access to the stuckloop.

If we can hook the napp interface into the vercel ai sdk, then we can easily and rapidly be callable from any of the bots in the world.

Once we can handle everything, and leverage vercel keeping everything up to date, then we can start to build out our own custom things.

Key is to pick the right insertion point so as to leverage the existing technologies, like auth, then overtake them using stucks.  The heart of the dreamcatcher doesn't need to be fully dreamcatcher, fully artifact - it can have an element of traditional - we only seem to care about the persistence of data, and the execution of AI calls against a filesystem.

Should we perhaps just run everything using the templates, and nothing of our own EXCEPT the bulk mass calculation and filesystem parts ?

? make a drizzle-orm compatible layer so we can connect straight in ?  Or just hand crank it ?

messages could get saved in the db as a single file for every message, which makes it easier to truncate, more efficient writing, less db calls.  Use cache to make it quick to repiece - just save the latest fully reconstructed message history.

Saving the message and getting it pegged before making the AI call seems crucial for provenance, but not much else.