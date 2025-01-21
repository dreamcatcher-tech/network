
>[!tip] Created: [2025-01-21 Tue 18:14]

>[!question] Targets: 

>[!danger] Depends: 

If a git repo is used for the users account on our system, then we would periodically store their usage and billing info, periodically to avoid doing too many commits.

When starting to create a new repo, the first key that gets written is in:
`repos/publickey/state = pending`

This means that we can atomically switch over to the user home repo.

But to start with, we just list the repos in the db with a pointer to the environment object.

we need to answer:
- which DID does this repository belong to ?
- which repositories does this DID have access to ?
- is this DID allowed to change this repo ?

The repo state can be used as part of the atomic check to ensure it isn't undergoing some management changes.

? how to handle a repo that is owned by multiple did's ?
With bidirectional keys, plus pointers inside the repo itself, this should be possible.

We could store repo config info in a separate branch, or in the fiber branch, so we don't pollute the main data branch.

Then we'd go did -> home repo -> owned repos.

The hosting branch is ran by the hoster, and holds the config relevant to it.  But what about when in consensus mode ?

We should be able to do cost and effectiveness checks for all possible designs that we want to see.

We should have a workbench strategy that seeks to extract out the requirements of the system, so that many options can be proposed and scored against the rules, and also cause the rules to re-evaluated.

The dids in the repo itself form the ACL for that repo.

In the home repo, we can store each repo pointer as a filename, so we can shard the names so the scale is massive.

Deleting a repo would just be marking the status as deleted, then doing periodic sweeps to clear out the data using long running resumable processes, rather than causing a process to wait for the deletion to occur.

Might need to make a commit at the same time as updating some pointer info, if we are maintaining a link index to keep lookups fast.  We can alter the repo state at the same time as a commit is made that changes config, so this should not be a problem.

The home repo could have one branch per child repo ?

What if each branch in the home repo was the refs branch of the child repos ?

If we could extract out the requirements of the problem, then we could make a set of rules that any proposed solution needs to meet, as well as a number of db hits budget.

just store the did access in config for now.

Being able to back out - so long as call company data is in a repo and we can export that and re-import it, then we can dump the db to do upgrades.

Have a key like repos/repoPubkey/owners/did1
Means we can rapidly get the list of owners
Have the same for owned
Or, have a mgmt branch and store those relationships in there as commits.
Gives us the history, but costs an extra lookup, however it isn't using the expensive kv store, so easy and can be bulk.

Best design is the did pointing to a home repo, which has data in it for owned repos.
The owned repos have a management branch that point back to the owners.  For the env repo, this branch just points at the did.

What if for now, the main repo was the home repo, and we add child repos later ?

Each time environment gets updated, we update the pointers of the child repos - the hash of the refs branch is what identifies them.  this is also the consensus branch.

[[Entity Management using Environment Repos]]