
>[!tip] Created: [2025-03-03 Mon 15:13]

>[!question] Targets: 

>[!danger] Depends: 

We might not need anything fancy like asynclocalstorage, if we know the runs that we're doing and just use ulids to track them.
Then when the system is running, it goes and looks up the map to get the context object out.