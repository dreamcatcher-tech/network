
>[!tip] Created: [2024-01-12 Fri 10:02]

>[!question] Targets: 

>[!danger] Depends: 

Can the git log be used to show the actual session contributions ?

Could pull out just what changed in the sessoin, where each item in the message array is like a slot on the stack in the frame.

So instead of showing a single file, we show only what session files changed.

The filter in the UI can be used to stop things being too deep.

If multiple turns were shown in a single commit, that doesn't seem a problem.

The branch is determined by who the author is ?  Or by what the location of the IO is.

So we would always be maintaining a single view of all session files, across the whole system, grouped by commits.

OR we could run each operation in its own branch, and then merge it back in when it was done ?
If nothing else is allowed to change it a branch other than a given process, where each process runs in its own branch, this model can be used to show all the processes interacting and what they changed during their runs.  Can also be used to isolate them out.

So UI is filtered by branch ?  Session is a concept that seems common to all, that represents function calls and responses.