
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

When the listener receives its message, it:
- Check the chain is still active, which is the first read, and included in all atomic checks.
- Get the latest commit.
	- if not equal to the
reads all the pool items,
Check the commit that was received is still the latest one.