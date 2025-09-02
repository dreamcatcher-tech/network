
>[!tip] Created: [2025-08-23 Sat 21:13]

>[!question] Targets: 

>[!danger] Depends: 

If the user code ran in web containers, then we don't need any context tracking.

unless there is bleed between executing modules somehow, but that seems like a side effect problem.

system actions shouldn't need to access any context like scope or anything, since these actions would have all that in them, so no need to use hooks of any kind.

The context of a mcapp can be contained entirely in the web worker.