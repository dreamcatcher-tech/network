
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
3. provisions the workspace from its config
4. git clones whatever it is supposed to, and can do a pull to make sure things are up to date, also resets the git index hard.
5. reset whatever git repos are already present ?

halt
1. crash immediately - like hard reset.