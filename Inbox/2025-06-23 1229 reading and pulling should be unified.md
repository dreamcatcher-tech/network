
>[!tip] Created: [2025-06-23 Mon 12:29]

>[!question] Targets: 

>[!danger] Depends: 

The frames should request what they want, and the central requester should figure out what they have already.

Or we could rewrite these requests if we had something extra or closer ?

This reduces the server load so each frame isn't requesting again.

Or we could have a central object store for the client, and so each frame has direct access to the store, rather than keeping it all themselves ?

This means that the syncer runs in a shared worker ?
we could have one worker per parent page, and then just relay messages around.