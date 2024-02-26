
>[!tip] Created: [2024-02-25 Sun 21:32]

>[!question] Targets: 

>[!danger] Depends: 

We have the single repo thread, which is the base thread.
Send in an action to spawn a new PID that represents the session
	maybe name it something friendly
Get back the PID of the session thread
Send in prompts for the runner to execute
Cause a session file to be written to





Need a story for creating a session and having some chats within that

Restart a closed branch as a way to continue on something already running, but now with a new origin request, so it has access to the previous context.

Lastly, a branch that has not closed can pass back a message to its parent, but how to do partial replies, like yield ?

Restart seems the best path forwards.  If the origin closed, then we need to restart it.
But does the branch have a new name now, or inherits the name ?
So origin must be just the last outstanding request to close ?  Because if we restart, we need to keep the sequence numbers valid.  Could store a marker at the origin action, so know when it closed.