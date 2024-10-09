
>[!tip] Created: [2024-10-08 Tue 20:47]

>[!question] Targets: 

>[!danger] Depends: 

Process is that we create a git blob object in the repo, then we pierce and action that does the actual writing.

If you send in a lot of these at once, they should pool.

This is why pierce should be a pooling thing, so many pierces can occur at once, and they all pool and they're all just instructions, rather than carrying anything heavy.

Write as part of a transmission would write the object to the source branch, then pass it to the remote with an action pointing at the blob.  It might be a dedicated branch for transmission to the remote repo.  Then the branch comes in with unconnected history.