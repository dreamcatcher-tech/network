
>[!tip] Created: [2024-02-01 Thu 17:07]

>[!question] Targets: 

>[!danger] Depends: 

If multiple actions are run concurrently, then they have the ability to modify the filesystem concurrently.

This means that the output files can be dependent on the non deterministic interplay of the processes, making repeatability nearly impossible to achieve.

So when they return, it should be a commit, and they would have operated in isolation until this was done.

Or we could only process one action till completion at a time before doing the next one.
This is great for repeatability.
Works great for our use cases right now.

? when would multiple actions get generated ?

If the action is happening in a branch, then we could do unlimited parallel actions.

So doing multiple action sin parallel 
We MUST keep the filesystem isolated for each action, since the isolates can be foreign, and their interaction is timing based.

We could do a rebase, where the commits just change whatever they changed, in the order they did it, with conflicts being settled by force.  Or we could do a merge back in.

The programmer should handle these interactions, and setting the queue to be single isolate seems wise.  
No, if the program desires threads, it should branch.  So each process does one action at a time until completion.  To move on to the next one means it has branched.

Is there any point in commiting when, say 50% of the actions have been processed, to avoid having big choking pauses ?  Could be like doing a yield - this should be controlled by the programmer, not the system, else it is another form of indeterminacy.