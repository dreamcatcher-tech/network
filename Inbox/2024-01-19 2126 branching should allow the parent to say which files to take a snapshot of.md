
>[!tip] Created: [2024-01-19 Fri 21:26]

>[!question] Targets: 

>[!danger] Depends: 

Could point to master as the place to fork files from.
Or point to parent.
Reason is that some files should be deleted, like the session file in the chats.
Session seems a very permanent thing, so it might just be so fundamental that its the only file we have to worry about - that and the IO queue.

If isolates were aware they had just been forked, then they should be able to do something about it, like clean up the environment.  Or when something is spawning something, they should do some cleanup before the action is executed.  Be like branch and then do some operations on that branch.  Maybe via action.