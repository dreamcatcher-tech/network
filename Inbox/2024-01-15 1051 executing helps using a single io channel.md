
>[!tip] Created: [2024-01-15 Mon 10:51]

>[!question] Targets: 

>[!danger] Depends: 

To make things easier, we're going to not do any actual filesystem isolation, but rather hold a global process lock so nothing is concurrent.
We are also only going to solve the problem of doing a chat with a single runner and no nesting.

commands is keyed by isolate path, and has an array of functions to be included, which can be globbed.

The io would essentially be addressing help files.
the io is a way to specify a help file that you want to call, and get the result back from.
Talking to a running thread needs some different comms ?  How would I say I want a new isolated run, or I want to talk to an existing run ?  Then what if that run had terminated before the action got sent to it ?

Process
- pierce in an action from the UI
	- this will create a new branch named by this action id which includes the isolate path and api fn
	- start the branch with this new action inside of it
	- triggers the isolate runner to begin
	- runner executes, possibly updating files in the filesystem as it goes
	- upon completion, it puts its reply into the io channel
- reply in the proc branch triggers a merge back into the parent
	- any files of conflict are replaced by the parents version
		- `.io.json` could be replaced by the parent version
		- `session.json` would be replaced by the parent version.
	- the action that triggered the branch is seen as completed, and has the reply copied across
- the parent now has a reply, so the promise array is looked up, and the awaiting promise is settled, allowing parent execution to proceed


UI would need the ability to read from multiple branches at once to splice the outputs together visually.
Branches can have new actions pierced inside of them.  A branch is like a process id, and any branch can find other branches with the process communication permissions that either block all proc comms except for children, allow only some procs, or any proc read, or any proc write.


- boot
- start a new session which triggers an action branch
- Dave types some random bs
- action is pierced into the action branch by way of commit
- commit triggers the isolate to begin running
- updates the session file
- ai requests a tool call, which causes a commit
- action triggers a new action branch
	- action has the latest view of the parent repo
- action executes and returns, ending the branch
- the merge back in causes the promise in the parent to be resolved, so the isolate can continue on
- ai continues to update the session file
- on close session it replies to the first action, closing the branch

?? where should the rules for wiping the session file be stored ?
set some blanking commands, and later do some template copies.
so part of the config for the action would blank the session file - io is blanked by default
The isolate knows how to interpret this - the action is the initialization, so the isolate would know what to do for its setup.