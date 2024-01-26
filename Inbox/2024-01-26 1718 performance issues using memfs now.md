
>[!tip] Created: [2024-01-26 Fri 17:18]

>[!question] Targets: 

>[!danger] Depends: 

lightningfs does not perform well during writes.

If we used memfs and unionfs where the local filesystem was in memory, and only the git folder was using persistence, things might perform better.

Or, we could use memfs the whole way thru, and just reauth with github each time ?

memfs alone would give us a good idea of performance troubles anyway

A manual implementation of memfs would intercept all the write calls and cache them.
Before adding to git, and in the background, it would write out to an isolated folder on the opfs.

Could just cache all writes until flush is called, if we know the value is changing a lot