
>[!tip] Created: [2024-06-04 Tue 14:41]

>[!question] Targets: 

>[!danger] Depends: 

commands
	the isolate calls that the system issues
	a help can be included here that is not intended to converse with the user
helps
	single use agents, that are intended to return a result to the caller.  They can converse with the user, but once they return, they do not continue to run
	They have no memory or history
agents
	helps that are intended to interact with the user
	can be intended to return values back to the parent, or to other agents.
	Need to be explicitly ended.
	spawned and then the caller immediately returns.
	has memory and history

Mutistep helps could be provided, where a plan is being executed, and several steps are being composed ?

Implementation
Make the helps run in a branch as drones, and show that in the gui, with the last message being send back to the caller.
Then agents that cause a new discussion.
Then do helps that converse and return

Agent inter messaging can just pop up as tho they just got spoke to by a person.  It comes in at any time, but is always processed when the agent has bandwidth.