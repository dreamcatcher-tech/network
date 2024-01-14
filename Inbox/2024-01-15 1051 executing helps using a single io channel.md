
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