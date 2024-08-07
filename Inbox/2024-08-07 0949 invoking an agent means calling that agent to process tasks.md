
>[!tip] Created: [2024-08-07 Wed 09:49]

>[!question] Targets: 

>[!danger] Depends: 

If we had 100 functions to choose from, break apart into 5 agents of 20 functions each, then have a router agent that has functions pertaining to each agent.

This agent would select the next agent by making a function call.
This function call would be visible on thread, and simply indicates that the thread should be reinvoked but with the chosen agent instead.

This agent then has a more narrow job to do, and can proceed accordingly.
Only when that agent has finished running should control switch back to the prior agent.

Invoking a new thread and running an agent within it is a different thing.
would not cause thread to be listed in the actor controlled threads, since it is controlled by the spawning thread.

Seems we would only do this for the purposes of evaluating agents, or providing some kind of dojo interaction.  It should not be used for completing a users requests ?

But if we want a loop where the agents try to improve a prompt of an agent, then we might want it to run in this way ?