
>[!tip] Created: [2024-10-16 Wed 10:16]

>[!question] Targets: 

>[!danger] Depends: 

In turn based systems, when to start generation is obvious.  In group settings, not so much, so we need a dedicated ai call that decides what action to take as new info arrives.  Every time a new message arrives, the actions are:
1. should we start generating
2. should we stop generating
3. should we regenerate based on the new information
	1. once complete, should we replace the first generation we presented ?
4. should we retract a previous message ?


Revising a previous message due to having information that arrived before the generation had finished is a decision to ponder.

Background generations - we could have bots that are hidden that are still generating in the background, then when we use assessment bots to decide if they have something useful to say.  These background threads increase the chance that we will hit something valuable an lateral.