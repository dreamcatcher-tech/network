
>[!tip] Created: [2024-02-01 Thu 18:57]

>[!question] Targets: 

>[!danger] Depends: 

In a cloud based testing system, we would form one branch for each test file, and then we would somehow hook in to listen to changes to the master branch.

When changes were detected, we would calculate if any of those changes impacted the test we were in charge of.  If so, we would rerun immediately.

This watching could be signed with a merge, where we wrote to the hooks field ?

Or we could subscribe to keys in the kv store, to listen to changes in a particular branch.  But the listening verb needs to be captured in git somehow, so it can be replayed.

On trigger, the branch would pull into it, and then determine whether to run or not.
No running would still show a merge into it.

Or, on master, make a choice about when to merge to what branches, so the master is in charge of triggering, creating, and destroying workers.

So you could have 100 branches, and then a single file change causes them all to fire off in parallel, which is vastly more than any machine we can manage.

Being able to handle webgpu for large scale renders in this fashion would be useful too.