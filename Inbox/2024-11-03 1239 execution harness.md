
>[!tip] Created: [2024-11-03 Sun 12:39]

>[!question] Targets: 

>[!danger] Depends: 

In local machine, skip the queue, and use ram directly.

The only purpose of this is to dispatch execution jobs, pool the results, and trigger the next commit processing.

We could wait for all executions to complete, if they were all given a set timeframe, so that we could tick forwards uniformly, in large chunks.  If a process was configured to allow more time, then it would be caught in the next batch.

In the tree, we should be able to know exactly how many executions are due - how much tension is in the tree.

Use a process id counter as a way of ensuring no collisions with misaddressed actions ?

Or, use the process id in a map which is sharded, so this issue never occurs ?

OR not worry about it, since the consistency guarantees mean that it can never happen ?

If an action was heavily delayed in the queue, then it could arrive for a thread that had been renamed.

The action then has to say what its result is relative to, as in the commit that caused it.

This is the process state at the time of execution.  

Each user should be in their own branch, if we even want to make it multiuser.
So for the CRM, each user has this process branch, which is where all the calculating happens.

User in their own branch means they can export all their stuff easily.
So means the main home repo lets them 

A process tree represents a trust domain, since all processes share the same commit pool.

In process, should never need to know the history of another process ?
Could read it by just getting the ids of the history, and then selecting a specific one.
Ids must be a DAG where each one points to one or more parents, and they always ultimately terminate in a single commit.

We could allow snipping history and just tolerate the broken git history, but that is bad since existing git tools won't process that well.