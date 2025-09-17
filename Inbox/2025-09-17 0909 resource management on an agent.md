
>[!tip] Created: [2025-09-17 Wed 09:09]

>[!question] Targets: 

>[!danger] Depends: 

it does have a limit to how many faces it can run at one time.
it could pause or halt idle processes.

we could turn on swap.

at some point, the process manager needs to refuse a face or an interation.

codex face is a serial interaction face, where it can only process one interaction at a time.

pm2 had a lot of that resource awareness, so we can hook the face start process to check available resources.

if we have a running instance of a face, we can know the memory usage of it.
all the runs of each version contribute to the memory reporting statistics.

faces can declare how much resource they need per run, with different config options if applicable.

faces need to say what types of resources they need, too, li

so the agent is the docker image, and the face is the agent file.

the docker file boots a standard image that is capable of running faces.

ultimately once we have git being served over NFS, then it should be one agent per face, really, so this issue goes away.
so each new face is a new container, so we never have to worry about resource contention, provided the agent can run a single face.

how does NFS fit in with coco ?
coco NFS ?

web servers at scale might be handled differently, using dedicated frontage or something ?
or have hot agents in a pool ready to be assigned by a router.