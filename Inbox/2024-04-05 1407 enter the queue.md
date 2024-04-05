
>[!tip] Created: [2024-04-05 Fri 14:07]

>[!question] Targets: 

>[!danger] Depends: 

Should all artifact actions be actually pierced into the session chain, and dispatched out from there ?

So everything you do is actually interacting with a session chain, which may alter your account chain in special ways ?

Your base chain will only accept actions that are for the base isolate, no others.  Can lock this down with a config slice in the `.io.json` file.

So your session chain becomes forked from a special base chain, and you only interact with the session chain via piercing actions into it.

? is it ok to have clients flinging pierce actions in branches all over the place ?
Or should they only pierce into a single chain, providing an auditable activity log, then that chain uses accumulation to send out to other chains ?
ArtifactCore actions then become pierce actions into this base chain ?
That session chain could be anything we like, but artifact only responds to these base chains ?  Or, artifact responds in any way ?
Migth be able to bundle up authentication against these session chains.

Seems to make the most sense to call core as a pierce.
In effect, this makes the artifact atomic queue be the queue for all artifact calls in the system.
So the clients can only ever do pierces as their only function

Seems a good strength that artifact is itself callable via the pierce interface ?

Skipping the queue using special cases ?  Won't work since we need the commit mechanism.
But, could we do other forms of locking not as heavy as a commit ?

But, pooling and commits are there specifically to ensure no double actions.
And, we absolutely have to enter the workloop via the queue so we are close to the db.

? what about serial bottlenecks of each session chain ?
The session chains should not be expected to take much load.  They can still be pooled in to via piercing from the client tho.

Side effects need dedicated locking, regardless if we use git to commit our actions to.
Side effects should run like a test, with before, before each, after each, after.

How would a chain read the incoming user chain to check if it has correct credentials ?

### Pierce with a watcher
Make a 5th queue message, which is an artifact function call

? could watch for a special PID on pierce and know not to treat it as poolable ?

### Pooling a pierce
Write the pierce object to disk, then 

### The user structure with session chains
A user account is a base repo that can never be acted on directly except to spawn session chains.
Then session chains fire up so the user can then interact with artifact - on this chain, only the artifact isolate is allowed to be called.

### side effects like clone in the chains
If it got stuck half way, we'd want to do some cleanup ?
If the maintenance flag on the repo is raised, we would wait until it was lowered to do this side effect ?
So that said, clone could be just a regular queue action, with double action being handled by the side effect locking mechanism.
Side effects need a cleanup hook when they are taking over something.  All db writes would be checking that the maintenance lock was still set as expected.