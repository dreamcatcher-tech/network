
>[!tip] Created: [2023-12-01 Fri 12:58]

>[!question] Targets: 

>[!danger] Depends: 

Effectively surfaces the supervisor tree.

We should be able to tag promises in some way that lets a trace be run so we know all the actions that fired off because of this given promise.  It should be the requestId of the incoming action which should be mapped to all the outgoing actions.  This could be done in the AsyncTrail object that tracks all the outgoings ?

Ultimate parent is not required, just relative parent actions, since we can assemble ultimate parent from this information.

It should not require the pulses to only process one action at a time for the sake of traceability, as a pulse boundary is a time based efficiency thing, due to snapshotting.  Actions should be able to know what their impact on state was directly by re-executing, and also by tracing actionIds to know the consequences that they kicked off

This would allow the generation of an events log where every action can be listed linearly and the consequences displayed.  so the actions would show in a timeline with nesting like with git.

a mapping so the caller can get access to the array index if needed.
a tree structure should emerge where a single trigger can make more than one action that results.
This status tracking can be used for both chainland and async actions
can help the UI show richer information about where the process is up to
