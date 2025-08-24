
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

fly can run mcp servers, so running the stdio mcp server might be the easiest, then we interpret its messages ?
Is this the long term best option ?
It is not good for autonomous agents.  unless we put an autonomy shim in front of it.

raw stdout stream is far more pure, as it involves the UI too.
we can then roll back the layers as we go.

using fly, we can even show the infrastructure geometry on a map.

artifact can make the mcp tooling provisioning be instant, so it doesn't need 
also makes the mcp calls repeatable.

artifact is the mcp host, then we need this agent host thing too.

check out a repo using a full pack file generated on the fly.
the final state gets pushed back to artifact and is stored on a fiber.  All the worker states a pooled and then periodically committed down.

So on artifact, the request to start a worker comes in, and it gets received by one of the Hosts workers.  this worker shares its state and its reasoning.  You are effectively talking to this worker, but with a hard locked interface where you can only say one thing "provision".  

you could start talking to just the hosts workers, who can answer any questions you have, and guide you into starting your own account.  You history is just stored in the browser until you make an account.