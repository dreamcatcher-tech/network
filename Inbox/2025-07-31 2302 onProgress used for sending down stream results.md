
>[!tip] Created: [2025-07-31 Thu 23:02]

>[!question] Targets: 

>[!danger] Depends: 

if we are streaming results back, then we could use onProgress callbacks ?

but seems better if we open up a resource and then stream down that resource if you get the SSE stream ?

Then you can resume it, and it can be shared amongst anyone who can connect to it.

or we could use a progress token, and everyone can share that around ?

best to use the progress feedback to stream down intermediate results.

or, use a resource, then do a get on that ?
progress is hard to share with everyone else.
or return a link that is a presigned url type thing so clients can go download it using regular web.

how would we cancel the tool call ?
needs a second action, with the call id in it, so it can cancel what is running ?
provide an external url that is the partial streaming results.
being able to think of it like a virtual file that is the staging area file ?
Each link goes to a specific server, and it will give what it is seeing in realtime.
multiple parties, if authed, can access this, and the server holds the full stream in ram, or in a tmp db folder that it will delete later, in case gets bigger than ram ?
If crash, no need to store.
Easiest to just keep it in ram, and if another client asks, if gets the full stream.
can implement the resume ability too, where it pulls the url with a count parameter and we restart from that point in time.


this is very specific to our use case and not general at all.

