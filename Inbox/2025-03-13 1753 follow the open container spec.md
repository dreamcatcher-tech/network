
>[!tip] Created: [2025-03-13 Thu 17:53]

>[!question] Targets: 

>[!danger] Depends: 

So if the runtime of the napps is just an open container spec, then it says clearly how we can efficiently fire up the environment that the napp needs to be able to run.

https://github.com/opencontainers/runtime-spec/blob/main/config.md#posix-platform-hooks

This appears to be a standardization effort underway to make computing containerized.

Also fly.io is moving to this format, making it much easier to access at scale.

we might look at napps as a mini-containerizing format, so that when you go to run one, you have this base image and then there's these dependencies that are kind of slotted in the top to present overall a file system that gets called upon. 