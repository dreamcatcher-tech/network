
>[!tip] Created: [2024-05-07 Tue 12:36]

>[!question] Targets: 

>[!danger] Depends: 

When moving a branch and all its children, we would need to modify the io.json file, since this is the canonical view of the branches in an executing system.

To move branches is an action into the current chain that goes out to the remote chain.  When it replies, the branches are deleted.  The receiving chain can refuse.  It must be an io.json action.

If it was an action that only a parent could take, then it would merely be an atomic movement of the refs folder structure over to the new location.

Is there a way to not move the branches at all and instead keep each machine as a separate item ?

Each machine has its own auth and PAT with github.

? what sessions do I have ?

Moving seems easiest, since we can use the PID as a statement about identity and authorization.

So Actor could be just machines, and actor is something that the auth providers manage, rather than something we invented ?  No, actor should be internal to the system, so that apps do not need to select their auth providers, but they could if they wanted to.