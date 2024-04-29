
>[!tip] Created: [2024-04-29 Mon 15:22]

>[!question] Targets: 

>[!danger] Depends: 

If Mohammed cannot go to the base branch, the base branch must come to Mohammed.

Sessions need not interact with the main branch, if the main branch is merged in on every request.

This means that every session chain in the app is as tho it was working on the main branch.  Only when the session needs to merge to master does the main branch get used, so huge numbers of users can work independently, with the only bottleneck being the merge rate into master.

BUT does this still need to be taking place on the remote app - could it in fact be taking place in the users local repo ?

So to use an app, we could be running a fork that we own, and the only thing the remote alters is our access to it ?

Later, we should be able to efficiently clone objects around the place.

If you've been banned, then you can't merge main into your session, and main will not accept your merges.

multi permission changes would be merges that are waiting for PR approval from someone higher.

What is ideal about this is that a machine can operate offline, do all these changes, and then merge back in.   So programming in this model gives us good offline ability, without sacrificing performance while we are running.