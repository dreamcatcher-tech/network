
>[!tip] Created: [2024-01-25 Thu 21:56]

>[!question] Targets: 

>[!danger] Depends: 

If deno was set up to trigger other isolates to run, should they all be running of a commit, or should they fan out, make individual changes to the filesystem them collapse in a single commit ?

If they all made changes, then they would all need a shared view of the fs which breaks our model.
Instead, if each commit spawned, say, 100 

Or best yet, a single commit spawns 10,000+ and then a mechanism exists for spinning up isolates to match - so do 100, then call 100 and so un - so the way the isolates are started need not match how the commits go, so long as they meet eventually.  This allows for fixing faulty isolates, some catch up.  Have managers at a certain level that act like watchdogs and rerun processes if there is infrastructure error.

So the isolates could be part of different installations, where different owners run them, but given the amount of compute they process, there might not be any other way to do that amount of computing in a reasonable time.