
>[!tip] Created: [2025-03-03 Mon 15:13]

>[!question] Targets: 

>[!danger] Depends: 

We might not need anything fancy like asynclocalstorage, if we know the runs that we're doing and just use ulids to track them.
Then when the system is running, it goes and looks up the map to get the context object out.

If we have container isolation, this works fine, since we can track module level variables, but without that isolation we might have multiple side effects running concurrently, and we wouldn't know how to determine which one is calling the useEffectsContext hook.