
>[!tip] Created: [2025-02-22 Sat 18:03]

>[!question] Targets: 

>[!danger] Depends: 

The buckets contain streams of events, and you can read them before they're written, giving you a pubsub fabric.  Then they are flushed to disk permanently.

In artifact terms, what we want is a file that is being written to live, and then we want to be able to read from it while its happening.

Basically we want a view into the ephemeral tip of a remote process, before it does the actual commit, so a precommit view of the tip, in realtime.

That same thing could be used to transmitting realtime calls.

We could always discard from the tip as well, and either rewrite some part of the file, or do whatever we want.  So the stream of file operations would be in order, and you could ask from a catchup if you missed some.

Seems best to set up a 