
>[!tip] Created: [2023-12-06 Wed 14:10]

>[!question] Targets: 

>[!danger] Depends: 

A chain may be unavailable when a transmission is started, and so we should be able to defer the resolution until later.

If it is remote, it might never get resolved, which is fine - it shouldn't require the other side to be online.

If we ever do get online and the path proves impossible, then we will reject.

So to do this in concert with instant open, we can just make a new channel, and then only if we find it locally, do we make it be merged in.

If we have current, then we will use it, if not, then we will use the deferred version

We should bubble out that the engine is stalled on awaiting a path open.