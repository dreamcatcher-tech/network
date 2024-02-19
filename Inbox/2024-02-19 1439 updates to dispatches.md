
>[!tip] Created: [2024-02-19 Mon 14:39]

>[!question] Targets: 

>[!danger] Depends: 

Seems best to watch the commit log.

Dispatch:
Read in the commit log to get the HEAD
start watching the HEAD so we know when new commits have occured
each time, pull down the io file, so we can figure out when our dispatch is included in the io, so we can get the sequence id to start watching
when a commit occurs that has our

Or,
Each commit, write down which sequence ids were created, which nonces were processed and which sequence ids they matched to.
Assume every nonce dispatch is going to watch for a result.

Use the db to write down the nonce, and then give it a sequenceid


Recovery is to pull down git and walk history until we see the nonce we sent in.
If we have the sequence, walk the commit log to see the

Or,
Register a watcher, with a timeout, and watch this key.
If the commit layer sees your watcher come in, it will update your key with the output, again with an expiry.
nonces are used since they are immediately available.

If you come back and look for that nonce, you will have to walk commits if it is stale.
The commiter might lookup history for you.
Or you might have lost it ?
Walk history based on time.

It is a separate responsibility for locking as for queueing as for tracking piercings.

Triggering IPC is the next test - dispatch something in which makes some other calls out, to long running branches, and starts new branches, then returns.

Link the timeouts in the db to the staleness of the dispatch
So dispatch needs a timestamp, which must be within x of now.

The isolate interface is a portable invocation interface, and so we should be able to provide it to the queue directly, and have it simply wrap functions.

Wrap compartment at the end of the queue, not the front

So if the cradle does the queue wrapping, using a separate queue object, then everything else just acts like a direct endpoint for a command.