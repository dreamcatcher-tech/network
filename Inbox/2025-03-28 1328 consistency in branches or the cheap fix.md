
>[!tip] Created: [2025-03-28 Fri 13:28]

>[!question] Targets: 

>[!danger] Depends: 

If we do it "properly" by using a branch, we might end up with properties we don't know about becoming a problem.

But it might work out well.

We could always back off and use the cheap version.

The cheap version has known faults, so why build it ?

Why would we build the full version vs cheap ?

Full version does not cope well with multiple branches being updated concurrently, as there is no pooling function.  May require a write lock for doing combined update, rather than racing ?

Racing where all are trying to help each other is best outcome, without having triggers on the objects.

at least we will then have a complete repo that can be downloaded and transported.
repo permissions can be here too, as this is essentially the .git folder.

The purpose of this branch is to:
1. store the proc filesystem, which manages many lightweight processes in a filesystem format, under `/proc`
2. permissions, as in who can access this repo in any capacity, under `/auth`
3. config for the repo, in a single file named `/config`
4. refs, which are pointers to the latests commits of both local heads and remotes, the same as git, in the folder `/refs`.
5. `/quorum` for parameters relating to consensus

rbacs would have a version click, and then have all the different roles, and members be individual files.
owners of a repo could have different quorum rules.

access requests should be a separate branch, since it might be spammed a lot ?
or, be in a hosted repo, so it is totally separate from the repo in question.
New users come in, sign up, and then this list is available to the actor who owns the target repo.  They then click approve to add the person to the ACL of the app.

events might be easier stored as objects in the database, to save the interrogation required to determine them ?
Does any process rely on events being completely correct ?

This would meet the goal of having NOTHING that isn't in a repo.
Even the host interface that is supplied to the repos and the procs in that repo would be a repo, with restricted access.
Events could be written into the refs filesystem, so we can know what ops were done at a glance without having to fetch everything ? no, do the deduction.

But what about the extra data of commits ?  This info could be super packed, since many fields are common.