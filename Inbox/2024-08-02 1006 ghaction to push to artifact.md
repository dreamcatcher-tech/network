
>[!tip] Created: [2024-08-02 Fri 10:06]

>[!question] Targets: 

>[!danger] Depends: 

Instead of a webhook, we could push to the deployment, if all tests pass ?

Could just poll the repos we want to watch, so we do not have to do very much configuration interference.

Or if we made a little app that got installed for the user, it would connect all repos using instant updates.

So when HAL gets updated AND all the tests pass, then we would update the main branch and all lower branches.

OR we always update the main branch, but we only update all the child branches if all the tests pass.

Or, PR against the github repo