
>[!tip] Created: [2024-02-05 Mon 13:17]

>[!question] Targets: 

>[!danger] Depends: 

A dispatch is an external function call from vagueland that needs to come in to chainland.  It can also be called internally by chains wanting to talk to each other.

? Should the dispatch function seek to get write lock on the branch it targets, or should this be a queue action ?

? How can a pooling effect be achieved ?
The dispatch functions then are a standalone unit that are used by interchain and external inputs.  They consist of a watcher function that tracks the snapshot of the branch we are trying to write into, and always a watcher function for the write lock that it attempts to grab.

First they write down their wishes in the dispatch pool, then they attempt to get write lock.

## Promises from chain to chain.
We need a trigger that can feedback to these chains when their request is complete, and can also be recoverably run.  Simplest means is when recovery occurs, we start up all the watchers on the keys of the chains.  Starting  a watcher reads the current value first, which may be what we need to continue.

This should use the exact same functionality as external actions coming in, as on recovery we check to see if our write has been included already, and then return the result if it has, copying back to our chain by way of commit.

## Ideas:
The sequenceId could be put into the db and atomic ops used to synchronize on these before they get entered into the git repos ?

Seems the act of commit is what is required before enqueue, otherwise the queue is sloppy ?  Queue should be a commit trigger only.

Without sharing the sequenceId, we cannot have pooling, else we cannot know if we have duplicate actions ?
use a ulid, keyed against the pool