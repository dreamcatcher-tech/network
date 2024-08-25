
>[!tip] Created: [2024-08-25 Sun 09:58]

>[!question] Targets: 

>[!danger] Depends: 

M is an agent on the backchat, which is the top level thread.
HAL is the agent of last resort on the backchat thread.

When a prompt comes in, it goes via M to determine what thread, of all the threads, it should route to.

M can be talked with in the base thread.
M is like HALs manager.

Focus is still relevant, as m needs to have stored the focus location

Threads could have a small piece of state that all the agents can use to store things in.  Could even key it by the agents that are allowed to work in the thread.  This would give the list of allowed agents to switchboard.