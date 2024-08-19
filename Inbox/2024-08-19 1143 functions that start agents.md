
>[!tip] Created: [2024-08-19 Mon 11:43]

>[!question] Targets: 

>[!danger] Depends: 

Some agents are made to run as drones.
Some isolates are made to call on ai functions to do their jobs.

Seems not useful to run an agent designed for conversation as a drone.

If we make the right isolate, can run a conversation bot in a separate thread like a drone, but it needs conversant inputs.

Could provide some homing functions, so these functions can be loaded in a test environment with a mocked out way of finding their target.

So the isolates themselves would load with a path resolution setting, or a chroot.

Run the whole branch in a chroot jail, so that we can emulate having a new repo, but inside that repo, it thinks it is root.

We could chroot as a fork of root, so it has all the files that root currently does.

Get this weird problem where the function name now needs to be called in two contexts.
Could put a wrapper around so if it isn't in the target branch, it sends to the target branch, but if it is, it runs its code payload.