
>[!tip] Created: [2025-03-22 Sat 10:56]

>[!question] Targets: 

>[!danger] Depends: 

We need to write a definitive object that represents the repo state, otherwise, we can't watch for events across all branches.

Being able to know when a new branch has been created requires something that represents the repo state or stage ?

So do we need the dedicated meta branch of the repo ?
This branch should be renamable to anything, to avoid conflicts.

Could start with a single object that holds the definitive list of branches, possibly with the full config too ? or at least a pointed to the config.

Then we just poll that one thing for changes in the repo.

For the start, we don't need this event stream

Could write event objects, with a name that represents their sequence, and then just error if they stream in too frequently.

But, we can do queries, so might be able to do a query on all the keys in the repo ?
Could query for key names, and modified date, so any changes beyond a certain date would be returned.

Or if using event objects, can just watch for anything newer than a certain date ? the date of the last observed event, to avoid overlap ?

Hopefully we can avoid the repo watch, since we only need branch watch for the crm ?

actors, we could store the pointers to all the actors as a repo.  This allows a singular consistency point, as in the latest commit.

If a repo had a single object, which was the tip of the metadata branch, which might not need to be exported or could be named funny `@artifact-metadata` or something, the updating of a branch would go into this single structure.
Also when watching any branch, we would instead watch the meta branch only, then walk to discover, aborting the walk if something new comes in, up to some count to avoid being dos'd.

Then for an actors repos, each actor would be represented as a dedicated repo, and it would hold pointers which are files, that point to other repos.  These could be set up as submodules, but to start with they can just be information markers.  They would point only to the public key of the repo, which is unchanging.

Then, the super repo, is another special repo, that the host is configured to watch.  It has all the hosting info, and has a filesystem set of pointers / info that point to all the actors.  Any modification to the actors has to go thru this repo.  The actors are referred to by public key only.

Requests that come in and we don't have a super provisioned would just error.

The metahost would be a repo that was pointed at multiple host repos, so it could view and control many hosts, whilst also having this repo hosted as one of the client repos of each host, in consensus.

Currently the super repo stores each actor as a json config file.  It would instead attempt a commit on the super repo, which updates a file pointing to an actor with that actors config, or pointing to the repo public key of that actor.
So why not store all the actor repos in the super repo ?
In this case, there is just the super repo, which is atomically updated with any changes to any of the actors, as in whenever their repos alter
The actor repos should be separate for sovereignty reasons.

Creating a new actor repo without orphaning it:
- create a new repo, which by default is marked as orphaned and a creation date
- before the expiration date, update the super repo to point to it.  Periodically a reaper will run and look for orphaned repos that did not get included in the super repo.
- deleting an actor could be just marking it as deleted in super and waiting for the reaper.
- The reaper runs periodically and checks that the super repo matches the actor repos.  and it walks all the actor repos and checks they match the super ?

So all the stores become just specialized interfaces in to a repo ?
ls and other functions become sharded filesystem operations.

Could have each actor be a branch in super ?

Coordination between committers.
If there is a conflict, the conflicted parties could write an object talking about their conflict in a well known spot, with an expiration, and then they could coordinate with each other to make a single commit that included all their changes.
A conflict can cause the node to attempt a merge, with its current commit being reconciled agains the one that snuck in on them.

The key to scale is that something immuatable (the repo public key) is stored in something immutable (the super repos list of actors).

We can mix techniques, where an actor might want a new repo, and so we mark them as wanting a new repo, then we attempt to make one and then lower this request with the success.  this allows the consistency boundary (which is the repo) to be crossed delicately.

It could tho, be an action coming out of the repo, and then it replies when the action is fulfilled.

We could make super be a config object, that holds all the entries for the actors, just to start with, before migrating to be a full repo on its own.

The issue is that a lot of operations require multiple things to be the same, like even branch names, but if they all went thru a single git commit, then we do not need this kind of reliance.

Watching events becomes easier in this model too, as we want the commits to the meta branch.

It's almost as tho the git tree is a form of opportunistic lock, and under the hood, foundation db probably does something similar.

For now we could use the readConfig call on repo store to also store all the branch info as well.

So repo store needs to be built to atomically handle all the repo ops, using this new notion of the meta branch, which stores all the config and branch info in a single place.

Then super store simply is passed a repo, and it makes calls like it was doing earlier, but instead using repo level calls.
It might even be able to use an artifact handler directly ?
Should be executing within the fibers of the repo, but we need to make the execution happen outside at some point.

If the only form of consistency was a call to repostore, and all branches and repo config were stored as files inside the meta branch, then super and actor can be made to use these calls too.

This low level repo interface is used to present richer repo interfaces.

We could leave everything unchanged, and use super and actor as using tigris operations directly, to avoid any large refactoring until we are ready ?

Moving to repos for the super data gives us things like guaranteed lists of actors at a given point in time.  Removes any data structures inside the object store, and purely has one logical unit - the repo.

Would also give us watch on the super store.

Means the super store is not longer some custom implied data structure.  Makes it portable and backupable.

Can implement repo semantics on any other storage, and can be deployed in this way.

Might be able to give us more control over permissions and other such concerns.

Events would need to become deducible, rather than expressly stored as they are now.


Branches watching - we can either watch the filename patter, or we can store a single object with all branches within it.  It should not matter any that the object is large, since it doesn't leave behind anything, so we aren't billed for it.

Question is, what is the point of changing repo config shapes if we are going to use a full blown repo branch eventually anyway ?

Managing the circular dependency between provider and repoStore by making a separate library ? or making the operations actually part of the store, so the calls are more direct in the provider - so pushing the logic down into the repoStore.

So actor and super should be done using just object copies, but repoStore should use a branch, since it is more complex to get working.

OR could repostore be simplified, if it only allowed single point merges to occur ?

merge with a deletion of the parent is the only operation we can't do with next to no changes to the repo store.  So we could either move to store the branches as a single object, or reject when this deletion pattern is called upon.

Or, we could expand the config to have an item that lists all the branches.

So we could probably operate without the atomic guarantees of branch deletion during merge, until we switch to using the whole branch.  merge with deletes is the only thing we can't do atomically.  This might not matter in the scheme of things.

Must be careful since gitkv relies on a certain filestructure to be present.
We would be converting the `.git/refs/` file system and including `.git/config` and then treating that like a branch.
THIS MIGHT BE SIMPLER in git, since it would present like a genuine filesystem, and the implementation of gitkv gets a lot more relaxed.

The idea is that the latest commit of this meta branch represents the canonical state of the whole repo, so we can do atomic operations on branches, simplify the repo management in gitkv, and so we can export the full meta state of the repo as well as each branch, and we can give branches a reference when they talk to each other.

This branch could just be the fibres branch, since it would only be a fiber that made the changes to it ? and it avoids the frequently changing fiber branch having to keep updating the meta with its commit.

? would we ever want to run multiple fibre branches ? not really it seems ? be like having two proctrees in a posix system.

When importing, we would have to sync up with the actual imported repo state, since this branch might be stale or outdated when cloning.