
>[!tip] Created: [2025-09-01 Mon 10:35]

>[!question] Targets: 

>[!danger] Depends: 



so you start the agent, then dynamically select the face you want to start ?
bothered about the amount of fly specific stuff - it is definitely affecting our design.

where to now ?

1. multi agent
2. standard format for the config files
3. git repos

but actually
1. auth
2. nfs
3. multi agent (with config files) 

and then...
1. computer to computer communication


seems actually really bad that more than one agent would work on the same mutable field, because how can we restore the state in crash recovery ? the crash recovery model is always 'since the last commit' and if multiple agents altering things, now timing matters, so each agent should be in their own branch ?