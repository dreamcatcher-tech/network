
>[!tip] Created: [2024-07-21 Sun 22:18]

>[!question] Targets: 

>[!danger] Depends: 

to run multiple agents in parallel on the same thread, we may require having several copies of the thread loaded up in openai, and toggle them around.

We can also delete messages on the thread ? or we can just leave those things there, like scars, and just hide those function calls from the user.
Switchboard runs, chooses the agent to call as a function call, we then run that agent.

Parallel agent calls seem hard.  They might be done using a copy of the thread that is kept in sync, or use the completions api.

Store info about the stateboard that is showing at each point in the thread.
Have summaries for sections, and topics, of which there can be several for a particular section of the thread.