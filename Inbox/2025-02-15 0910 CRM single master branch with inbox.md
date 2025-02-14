
>[!tip] Created: [2025-02-15 Sat 09:10]

>[!question] Targets: 

>[!danger] Depends: 

If there was only one branch, the master branch, and it had an inbox for PRs, then we can handle changes coming from others vs changes coming from the server ?

To make a change, you fork the branch, and the request a PR to come back in.

Each time a merge is proposed, the worker makes those changes to moneyworks, then merges back into master, then merges in the PR from the changes branch, which should have no changes.  It might reject the PR too.

If multiple changes are queued up, it can check that no master changes occured since the PR was made, so can detect conflicts in this way ?

It is really all complicated by having a canonical branch.

