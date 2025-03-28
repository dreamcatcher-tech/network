
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
6. `/files` for any other files that process 0 might want to store here ?
7. `/stucks` for stucks that are local to this repo ?

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

`artifact-consensus` is the branch name to use.

But would that mean we have to use gitkv in order to make two commits ?
Could this be packed down, so we don't need to actually make the commit ?

To make a commit then, make the commit in the usual way to create the object, then make a second commit on the branch.
reading latest is looking up the HEAD of the `artifact-consensus` branch, then reading the files to get the latest.
ls becomes a simple file operation based on the latest commit.
fork is just another file operation.
delete is a filesystem operation.
merge becomes fairly trivial.

Overall, this is great since all the concurrency problems come down to being able to make the commit at the end work.
So best option is to read all the data we need, check that the commit is still the same, and then begin the update process.
Watch becomes just filesystem level watches ?
readconfig might be just straight passed thru to filesystem at gitkv level, so long as we do a commit at the end.

super store would be actually the hosting repo, and it should store all the actor repos as pointers in a filesystem, where the repo dids are mapped to the actor dids.
So when an actor wants access to a repo, we just look up the host repo for the actor, and give them back their actor repo, which they then use to figure out where their repo is.
Then the permissions list becomes just simple repo permissions.

The beauty is that the repo, as the base unit, can be stacked to provide any level of nesting required.
Permissions as rules in a file seem trivially simple to implement.
Branching in the repo allows for multipel views of similar data.
consensus branch allows for a single unified view.

these operations can be sharded, too, for scale.

? can events be completely determined ?

Could an actor be an agent ?
Could an actor be autonomous ?

consensus repo is signed using signed git commits using ssh keys.

When an actor sends in an action, we first check the privy token for validity, since that avoids any db hit, then we look up the super repo, using the latest view of it, to get the mapping to the actor repo.  Then we look up the actor repo, to ensure the account is in good standing.


We may actively hold an in cache copy of the super repo, and update it whenever a new commit occurs, with an authoritative answer being instantly available very soon, if we know the path hasn't changed.