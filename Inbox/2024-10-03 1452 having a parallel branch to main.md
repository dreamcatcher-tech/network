
>[!tip] Created: [2024-10-03 Thu 14:52]

>[!question] Targets: 

>[!danger] Depends: 

If main was kept pristine, and then all activity occured on a parallel branch, which periodically pulled from main, then we could do simple and reliable merges.

If we want to PR up, then we should do that with a squash merge, to remove all the noise of calculation from what we want to PR.

Until we do that, we can just clobber in the meantime.

Sorting out conflicts and doing our own handling of differences seems key.

Currently the hole control branch is being forked into an actor, but it should be forked off from main only.