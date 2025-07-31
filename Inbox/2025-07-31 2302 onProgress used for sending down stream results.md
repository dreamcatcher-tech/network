
>[!tip] Created: [2025-07-31 Thu 23:02]

>[!question] Targets: 

>[!danger] Depends: 

if we are streaming results back, then we could use onProgress callbacks ?

but seems better if we open up a resource and then stream down that resource if you get the SSE stream ?

Then you can resume it, and it can be shared amongst anyone who can connect to it.

or we could use a progress token, and everyone can share that around ?