
>[!tip] Created: [2024-05-07 Tue 12:36]

>[!question] Targets: 

>[!danger] Depends: 

When moving a branch and all its children, we would need to modify the io.json file, since this is the canonical view of the branches in an executing system.

To move branches is an action into the current chain that goes out to the remote chain.  When it replies, the branches are deleted.  The receiving chain can refuse.  It must be an io.json action.

If it was an action that only a parent could take, then it would merely be an atomic movement of the refs folder structure over to the new location.
Must stop the branches from existing in both locations at once - better to have them in no location.

So move is an action that goes into the donor, which 

What about actions that are currently pooled in a branch that is moving ?
How could the action be moved too ? how should the sender be updated ?  What if the sender is watching this branch ?
Set a flag in the branch and all its children that it is about to quiesce
Reject everything in the pool as branch being moved

This should be about the same as branch being removed - the pooled items should all be errored out.

Every pending action should be sent a system call telling them of the move.  Or just reply using the old PID ?  Maybe replies don't care if the target branch changed at all, so long as it makes it back. 
System call to notify a branch that pending actions need rerouting.
What about rapid successive moves with long running actions still taking place ?
Or, the replies carry on as usual, since the pids remain unchaged ?

What if a branch has something underway and then it is moved, how will its replies find it again ?
Reading the head and walking the history can show when a branch was moved and so it can be rediscovered ?



So it might pay to allow watching a branch for structural changes like moves, separately to any other type of lifecycle hook.

Is there a way to not move the branches at all and instead keep each machine as a separate item ?

Each machine has its own auth and PAT with github.

? what sessions do I have ?

Moving seems easiest, since we can use the PID as a statement about identity and authorization.

So Actor could be just machines, and actor is something that the auth providers manage, rather than something we invented ?  No, actor should be internal to the system, so that apps do not need to select their auth providers, but they could if they wanted to.