
>[!tip] Created: [2025-09-19 Fri 09:30]

>[!question] Targets: 

>[!danger] Depends: 

rather than tangling it up with the gateway, the auth, i tmight be best as a standalone flycast thing.

then we can swap it out for the git backed version later.

nfs jobs:
1. provisioning an agent workspace
	1. agent home / config
	2. agent workspace git repos
	3. other shared mount points for the agents, which could be symlinked

so each agent gets its own dedicated folder, but some portions of some folders are symlinked to other places when they want to share them ?

or, we could make them ALWAYS symlinked, so the repos are managed separately, which lets us use the git worktree model, so we are at least storing the same repos behind the scenes in the privileged space.

so checking out a repo always checks it out into a folder on its own, that is flat and named after the github repo.
then these folders are always symlinked in to the agent workspace, meaning that having

but we also care about the mutation ability of it, so it isn't the repo itself, it is also the mutation id, which often is just the starting agents id.
the mutation has to be tracked, otherwise it can be left dangling if the last agent shuts down.
Does that mean that there is an owner of the workspace, like a prime agent, and others share symlinks with it ?  use a hardlinks so that agents act as peers.
? who owns the folder and when should it be deleted ?
lives as long as one agent lives, so when the agent is destroyed, the workspaces goes with it.

? how is the git repo underneath managed ?
can the git repo be shared ?
can we just have a separate git repo for each workspace for now, then work on those details once the system is stood up ?

provisioning the agent gives it nfs access to a specific slice of something.
folder permissions can be set how ?

so each agent gets it dedicated home folder, which is its fiber.

so to create a computer is to make a folder for it, and in that folder is the fiber folder that manages all its workers.


stateless workers could be parallelized.  or we can parallelize the gateway router service, and then use that resilient stateless service to ensure the workers are running, but the gateway does machine lifecycle management, and machine restarts - it makes sure thec omputer is always responsive.

so when a new machine starts, it gets given the uid that grants it fs access.
the gateway service is invisible / cannot access the nfs server, it just simply starts up machines.
the nfs server is behind a flycast app.