
>[!tip] Created: [2025-09-27 Sat 15:07]

>[!question] Targets: 

>[!danger] Depends: 

We only care about booting up the contain to reach spec, then we tell it what container to load.

so we can have idle containers sitting around, and just delete them at whim.

After a clean reboot, a container is ready to receive its agent.

So this should be a one time only web call into the header, which flicks if from waiting mode into operating mode.

that boot call tells it to pull down git repos, scrub out its workdir (ie: reset it to pristine) and then crash recover its running agent.