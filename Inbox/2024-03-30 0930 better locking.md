
>[!tip] Created: [2024-03-30 Sat 09:30]

>[!question] Targets: 

>[!danger] Depends: 

If we could remove kv watching from the set of features we rely upon, then we would only be relying on guaranteed queue delivery for continuation, and

If only there was a way to model the states that everything could be in, so we knew if our consistency model was complete.

When writing head info, we should also store info about what new actions were included, as well as which replies were included, so that watchers can act accordingly.  An isolate tasked with pooling can stop if it sees its work done already.

Might be faster to store the whole commit object at the head address to save a db lookup for the same price.

Pierce seems similar to inter-repo comms, but instead of ulid it would be a commit hash.

Repo creation can be in several states - null, preparing, active
Preparing is used to detect duplicate messages asking for a clone ?
Or we can just use the HEAD being available as check for active ?
At least this is an isolated timing problem.
## Pooling
pierce and interchain.
Pierce should watch for head updates, figure out what changed, get prior commits if it missed them, then check the io file to know when its jobs were done.

Pooling should never write the action that needs including, but should carry info about the io.json file to find the info from.

? could pierce be always in a branch with a guaranteed new name, then try to merge back in ?  Merge is done when branch is deleted ?

## Atomic deletion of a pierce
Pierce goes in, client isn't acknowledged until the pierce is written and the action to process it is entered into the queue.  Message includes the current known commit ?
? Message includes the pierce item, which may be stored as a blob if large ?

When the listener receives its message, it:
- Check the chain is still active, which is the first read, and included in all atomic checks.
- Get the latest commit.
	- if not equal to the message commit, read all the iojson files from every commit until the message commit, to verify we are not a duplicate runner
- with the guaranteed latest commit in hand, begin making a new commit out of all the poolable items
- write the commit object to the database
- atomically update the head to the new commit, batching with:
	- latest commit is still the latest commit
	- deleting the pool items included in the commit
reads all the pool items,
Check the commit that was received is still the latest one.

If there are lots of pool items, these cannot all be put into a single atomic move ?
If we have more than say 5 pierce items, bundle them all up, write to the db as a bundle, then send a new message, so we can get the atomic guarantees.
Else we have to act like we might have some pierce items that were outside of the atomic guarantees.
Could restrict max pierce in an op ?
?Use a form of garbage collection where pierces are cleaned up periodically ? or an encapsulating flag is written ? or a flag scheduling their deletion ?

Garbage collection of blobs can be done by walking the blob keyspace and checking that the markers representing those keys have been deleted ?  We should be able to review the exact commit involved in any garbage collected items.