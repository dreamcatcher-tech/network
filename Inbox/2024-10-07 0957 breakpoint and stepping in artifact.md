
>[!tip] Created: [2024-10-07 Mon 09:57]

>[!question] Targets: 

>[!danger] Depends: 

We could pause sending any given action until an external event occurred.

As tho we could skip doing the transmission, until an external trigger was called.

Could we trace an individual action in that transmission, or transmit only that action ?

If we set a db flag saying what is currently paused, then when exe goes to run, it can hit the hook.  Or the pierce action can be tagged as "wait for debugger" which means it won't be executed until expressly told.

So each commit, we should be able to see a list of the actions that are waiting to be sent.

Get presented with the list of transmissions that resulted, and can choose to send some or all of them off for processing, without breakpointing possible.

Twiddling of arrival times - some actions are timing related, so we could replay the system and twiddle with the order of execution to figure out if we get acceptable results each time.

Step back in time is possible too, since we are never debugging in realtime, we are only doing replays of executions.

If messages were stored as only what changed, then stepping back would be going thru the commits, rather than a different way of navigating history.
This method would be very space efficient, and would offer great caching opportunities, whereas any time the thread changes, the whole thread has to be re-downloaded.

History display would be always fast to load, and would progressively fill up the history.

A strong point of the git format is that it allows multithreading to take place in a very debuggable way, so we can recreate and replay what would otherwise be a very hard to recreate situation, since the threads never interact with each other the same way twice.  Replaying and fixing gets us much quicker to high reliability, since every fault is guaranteed to be able to be replicated.