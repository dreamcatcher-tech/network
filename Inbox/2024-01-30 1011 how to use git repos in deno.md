
>[!tip] Created: [2024-01-30 Tue 10:11]

>[!question] Targets: 

>[!danger] Depends: 

pulling down from github seems abusive, since we would hammer the api.
Also would be slow.
Running a local git server can be faster ?
Ultimately we would want it running on deno kv ?


Whilst a full repo is large, just like a full blockchain, each client only cares about a very small subset of these.  Can we use deno kv to store these little snapshots, or 'commits' and the workingtree in a way that they are easily cacheable ?

Advantage is that they do not change, so can be referenced by hash quite easily.
Our DSL should take advantage of this, and fetch things by hash asap ?

Can keep a memfs copy around ?
Use the isolate memory to store it, if the isolate is still around, then use memory to transfer ?
Store it on s3 and decompress it ?

The deploy step could store the repo in the isolate, so it always has the nearest copy of it.
Each user still must have their own repo, as this is their data sovereignty.  We will free them of github in due course, but this is what makes their data theirs.

We could provide a blobcache service that had some kind of backing like s3, where repos or objects were stored in there.  Could even be just instances of deno running sql so it is kv store compatible.  For now, we should just pull down from github.

Use the browser as the persistent data store ?  

Broadcast channels and key waiting allow multiple browsers to know when a new commit has occured.  Also allows triggers on remote chains, between repos.

Each isolate would keep a local git copy in memory, and then would push it when all changes were complete.  It might write to disk if things were getting large.

Ultimate is a kv store in deno that holds git objects.  This could push out to ipfs for some tasks.

Isolate pulls from gh, compresses, sends down to the browser to store it.  Isolate tells it when to dump it and get a new one.  The isolates share in ram their copies from one another maybe.  When the browser pulls it down, it always says what commit it is up to when it talks to the cloud.  Cloud keeps it updated.