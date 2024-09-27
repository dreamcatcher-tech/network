
>[!tip] Created: [2024-09-27 Fri 16:30]

>[!question] Targets: 

>[!danger] Depends: 

It seems we cannot stop agents behaving badly inside of the agents themselves, or we must necessarily have a watchdog process on the outside. This problem is highlighted with the O1 agent, who cannot receive system prompts, or files, so when they're asked to do the job of other agents, they tend to hallucinate or just attempt. And so we could either wrap the O1 agent in a model up front that safeguards the chat that goes in and performs a switch when a request is made that they cannot fulfill, or we can have a watchdog that looks at the responses and decides whether it was a superior or inferior response, and may take switching action, or jump in and may hide or discard the prompt before it passes control back to the user.

Switchboard could be tuned for each given agent, and it might use the description of the agent in its calculations.  This seems better than switchboard that also knows about switching, to be scoped down to just a bot that knows whether the current prompt suits going to the current agent.

Chaparone could handle knowing when an agent lacks the necessary tools.

It could inject some extra prompt for the recipient agent to know that it is actually inferior.