
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

If the session file only stored changes, and then we use gitlog to recover it.
Means that the display holds all the commit info as to who did what and when.
Streaming still works.
The limit of what gets send to the AI can be a field in the session file, such as 'tail commit id'.
Modifying or summarizing can be stored in the current commit, and may be carried forwards each commit.

The branching model is a good fit for showing the activities of other processes, especially when there are many acting concurrently.  Can show when each one pulled in master, or pushed something back to master to merge it in.  If an actor is still running, then the branch is not deleted.  Branch deletion signals process end.  Branch can be restarted later, but generally no point.

The branch shows the knowledge the actor had to work with, and the changes they made to the system.  Without this process isolation, the determism is lost, as we cannot know what each one saw at each stage, and concurrent modifications would be based on time.  Also the writes would choke on the single branch, whereas with branching they can be separate threads and on separate machines.

? how would a very large fan out occur, like a million cores spinning up ?

Commits can be used to know how long an operation took to run, and other accounting like how many tokens got burned.