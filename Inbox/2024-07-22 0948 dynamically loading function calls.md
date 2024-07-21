
>[!tip] Created: [2024-07-22 Mon 09:48]

>[!question] Targets: 

>[!danger] Depends: 

Give a method to navigate all possible isolate commands.
Tell it how to read the api functions in, then call the function `load( isolate, function, pid )` which will then make it part of the temporary functions available to the agent during the given run.

We should teach it about branches and git ?
Strangely, using common metaphors gets best perf from the models, since they already know about these things.

If we gave it list isolates, then this agent should be enough ?

This seems better than trying to make it call the functions directly, where it generates the function call and then calls a generalized function.  It's training is not good at this, so seems a little hit and miss.

? Make description be required in the isolates ?
list the isolates along with all the available function calls and parameters ?
dump the whole api schema along with each isolate ?

Once we have this, then we can update the agents by just pulling in the repo for the agents.
Actors would need to periodically pull the agents from the master branch - maybe this should be done each time a new session occurs ?

can we do a merge that is only for files that changed, without deleting anything we changed locally ?

Will assistants be loaded always from the master branch ?
Should a check be done whenever the agent loads ?  If you modified your agent, it would tell you ?