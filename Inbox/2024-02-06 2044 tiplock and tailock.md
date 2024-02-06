
>[!tip] Created: [2024-02-06 Tue 20:44]

>[!question] Targets: 

>[!danger] Depends: 

If a commit action just triggers more queued actions that do more specific things, is this a better way to process it ?

Wait for tiplock, which includes being eligible, since you need to wait until the tiplock equals the commit before you, and then changes to being done.  This allows the HEAD to be far out in front of the tip and tail.

The tip and tail locks appear to be the same reusable mechanism.

Parallel processing in linear actions is possible so long as there is no filesystem collision.
If we make fs permissioning, then we can run actions independently so long as nothing internal changes.
BUT if we did side effects, we don't know how those acted either, so it is best to genuinely move sequential processing forwards sequentially.

If each linear action was a dedicated worker, that waited its turn, then the isolate gets max thread time.

Commit then might as well do the job of sending ALL the actions, linear and spawn.
