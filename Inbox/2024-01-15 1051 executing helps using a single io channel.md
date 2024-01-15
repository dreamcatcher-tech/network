
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
- start a new session which triggers an action branch, creates io
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

If dispatch doesn't name an existing process, a new one will be created.

? when is help turned into pure code ?
runner, where if we reference a pure code runner, it will be started up with the given args ?
helps represent a way to call a specific function, to enact a state change or read some query or do some long running conversation.

When does a new action get processed by the current branch, and when does a new branch get made ?
Special actions that indicate it was spawned, and awaits result ?
Special actions that indicate calling an already running process ?
if each one has a PID where it can be self, null, or something valid, then we can route the action to the correct place.

The act of spawning a branch is the act of dispatching an action from us, out.
But without an action of our own as a marker, we can't know what to continue with when it returns.
? how would I get the id of the running action, to be able to call it again ?  I could really only use an action that I had already dispatched ?  Or, be able to read the process state of the system.
main branch doesn't in itself run anything - it actually runs everything and so never has a .io file
but, io is used to track branches, so kinda needs an io in main to track all the running processes.


So to spawn, send an action to yourself with no pid.
this causes a spawn, and then updates the pid with the branch id.
the presences on the IO queue says the branch is active.
commit the action down to generate the branch ?

? what about if an action wants to be processed by a different isolate ?  So each process is capable of running multiple code functions arbitrarily ?  yes that makes sense.  What starts the process is what matters.

Can trace back parent process by looking at parent of this branch.

Branch is PID. But almost like a core, since multiple functions can take place on it.  It needs to be on a single machine tho, since concurrent processes might make changes to it.
Should each IO be finished before the next can start ?  If not, then we should make branches ?
So messages are one at a time unless spawn is used.

Its really only the first action in the branch that matters.
Parents can forcibly end a branch.

Could start a main thread all the time, where all io takes place, to keep master clean ?

Be explicit - pid is never passed,
processType is either: spawn, self, local, remote
pid: blank while unprocessed, then becomes the pid of the branch that is executing it.  can be pathed using posix paths.  special case is self.
processes should be able to change their names.  Same name used again just puts an integer on the end.  integer might be the IO sequence counter.

So remote git comms would be to a branch that was specificlly made to communicate to the remote repo.  if both swarms share this branch, this is how comms are handled.
interpulses are orphan branches, where their shared state is managed by process comms

Set up a type of queue by the first action, where it can do things sequentially, or force parallelism, or any behaviour at all.

PID can be tracked in the io channel it exists in.

IO should never leak between branches, so we'd need to check this somehow.

If some code changes its api while running, for security purposes, then this would need a live api check ?