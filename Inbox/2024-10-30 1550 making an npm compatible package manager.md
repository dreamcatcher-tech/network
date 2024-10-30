
>[!tip] Created: [2024-10-30 Wed 15:50]

>[!question] Targets: 

>[!danger] Depends: 

Copying how jsr did it, we could make a package manager that would automatically include packages from napps.

If they were js packages, they could come down directly from the registry.

Else, they would import the sdk as tho it was the napp, so you could use it in your current code, but it would make an api call out to wherever you were hosting this code, which could be a local server, or on a platform.