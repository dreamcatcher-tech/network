
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
### Pierce with a watcher
Make a 5th queue message, which is an artifact function call

? could watch for a special PID on pierce and know not to treat it as poolable ?

### Pooling a pierce
Write the pierce object to disk, then 
