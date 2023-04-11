
>[!tip] Created: [2023-01-24 Tue 18:52]

>[!question] Targets: 

>[!danger] Depends: 

Codespaces gives some powerful machines, so we should be able to sell off the excess cpu that we are not using.  Also we should be able to pay for bursty workloads, rather than needing a high spec machine, as the value is in the integration and availability of the codespaces, not in the cpu.

Then use this same plugin to purchase spare cpu off other people for your work.

Can set the frequency of the take - if you want to take a little bit often, vs waiting for complete idle to occur and then taking it deep.  This will affect the type of jobs you are able to take - small quick jobs vs deep cycle long jobs.

Set what projects you want to donate to, or make a whitelist.

Build pipelines or testing is an easy one, but CI actions tend to take care of that.
A terminal session is good, since can run a heavy process in a big machine.
Codespaces is really good since the environment is standard between machines, so we need less setup.
Wallaby workers would be a good addition, if the workers were remote and could burst, plus let you share your own around.

## Sharing Jobs
If the filesystem sync was shared around, then other people could get your exact environment.
Pair jobs with those who already have a similar filesystem installed, like your other collaborators.

Use a filesystem plugin so we can lazy fetch what is required for running a job, rather than needing to sync the whole thing.  Set how much download to potential job running payout we want, so we don't download 10GB of filesystem for a job that hardly ever runs.

## Isolation of jobs
Use a chroot jail and some lvm containers to keep the weight small.