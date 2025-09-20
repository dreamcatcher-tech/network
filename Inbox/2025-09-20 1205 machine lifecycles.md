
>[!tip] Created: [2025-09-20 Sat 12:05]

>[!question] Targets: 

>[!danger] Depends: 

whenever the job is done, and the machine could shut down, if there is a new image in the registry, it should shut down.

It should shutdown anyway, and then it might be destroyed.

whenever the unit of work completes for an agent, if there is a new machine image, it will grab it.

long running services that are hosting something like a web app would need some kind of configured restart policy.

boot
1. machine is started from the pool of ready workers, and told what its agent id is
2. grabs its config down.
3. if its workspace is not created, reads the workspace spect from the config
4. git clones whatever it is supposed to, and can 