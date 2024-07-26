
>[!tip] Created: [2024-07-26 Fri 13:54]

>[!question] Targets: 

>[!danger] Depends: 

Backchat having a threadId doesn't matter as much.
Backchat is still a connectivity device, and it still starts with a default thread.
Switching thread is now changing the entire thread over.

Is it ok to polute the thread, where you can't be focusing on a specific topic ?
Make an agent to extract just the conversation with a single agent out ?
Does it matter that even meta commands, like thread navigation, are all happening in the same thread ?
User can start a new thread.  Can start a new thread in a new tab.

UI needs to change to showing which agent was selected.
Switching threads now means the whole thing is replaced with the new thread.

Where does the focus threadId go, given that it can be different ?
Is backchat still running in a branch ?
Or, is there no backchat, and the target branch of the terminal now changes

Backchat is still sort of the thread in the background, since the threadboard runs and selects and agent.  Basically backchat is replaced by the switchboard prompt.

Switchboard should be loaded with summary of all agents, so it can make instant choices.

It might need the last N messages and last M summaries.

What does navigation history look like in this new model ?
Surely it could only be the different threadIds that you switched between, if any ?
So each time you call switchboard / backchat and it flicks the thread over, this is a new thread.

Then when you prompt, you must include the threadId? 
What if the thread was switched before the UI called the function ?
Should backchat be able to target any live running thread at whim ?
If you target a thread that isn't the current focus, it will switch the current focus.

Last action to be received is the one that sets the new threadId.
The threadId is cached in the client.

? Is the focus only a client side concept ?  Might make no difference