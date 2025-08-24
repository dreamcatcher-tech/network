
>[!tip] Created: [2025-08-25 Mon 09:02]

>[!question] Targets: 

>[!danger] Depends: 

if the container map was full managed externally, rather than an internal thing ?

if it was internal then we would need to manage it in a db somehow, so might as well control it from git, and periodically check we're still in sync, or have a reaper for old containers, and depend on creating a new container easily.

? call the machine api directly from the git app ?
we have to call the machines api anyway, might as well just call it from the git app ?
requesting a machine, we check if we have an allocation for it already ?

can store metrics so we know how long things roughly take.

we should drive the fly api using a worker, and then show the logs to the user, which would be fun to see it troubleshoot whats going on - so much better than a progress bar, and we can use the plan thing to have a plan that gets updated.

it might be that we never need to do anything other than call the fly.io infra mcp.
if someone wants to migrate to their own org, we can do that, and then the git app just points at their own fly infra, not ours.