
>[!tip] Created: [2023-01-12 Thu 09:28]

>[!question] Targets: 

>[!danger] Depends: 

If we cannot have access to the whole history of the chain, does that prohibit the chain from being of use ?  No, so long as we have a verified assertion that we are accepting this things as valid now.

It does not belong in mtab because it is not a network related sync.

If we simply want to read it, a static hardlink would express what it meant to us.

If we want to fork it if changes occur, then we need a means of updating the parents, and ensuring that we fork all the way to the splice point.

Turns out that the `OPEN_PATH` strategy is important since it needs to be fork aware.  Also the update strategy must be able to detect when a fork has occured.

## Editing
Reading by path is easy to do.  Writing means we would have to call `@@OPEN_PATH` on the parents all the way down.  When a chain knows it has a forked child, then it will send its action as normal, but the blockmaker will create a fork.
On this action it will update the new pulses parent info.
If a child is attached and it is not

## Awareness
If we always walked down from root, we would be aware of a fork having occured if we marked it so in the network slice.  However we should be able to infer this information from the status of the children.  The signature that a fork has occured is by looking at the child, and seeing a mismatch between what it thinks its parentId is, and what its attached parent is.

Forks should assert the channel is empty before proceeding.

## Attaching a root pulse
Attachment is detectable here since the parent is stated as being root, but its true parent has an actual chainId, so the discrepancy is obvious.

## V1 - incremental openPaths
Insert the imported pulse as a child of any chain in the system using `@@INSERT` command.
Reading by path will walk as normal.
Writes will go thru the path opening procedure.
When the parent recieves `OPEN_CHILD` then it sends it to the inserted pulse as normal.
The engine 

We may need to allow a channel to change its chainId, so long as it is empty, to accomodate forking.  Or the fork destination can be recomputed on the fly as a single pulse, like a genesis pulse, which becomes the new chainId.  It can be determined repeatably from the previous pulse, so it can be computed before the transmission to the child occurs.

The first action to the child can be `@@FORK` which acts like `@@GENESIS` in that it contains the old pulseId, and old chainId, but is addressed to the forked version of the pulse.  The engine, when it sees this, knows to look at the prior address in the action, and creates the new chainId from it.

The insertion point must be forked, because the parent needs to be able to talk to it without having its chainId shift.  `REPLACE`  would force a pulse into place where it was newer or older but was from the same lineage as the thing it was replacing.  Like doing a hard reset in git, or checking out a prior version of a file.

Check if the parent info is correct each time while walking towards a chain.
If not, know that any writes will cause the updates

Forking needs to clear all the alias and downlinks that were open before, since these would have been reset by the fork.  All aliases need to be recomputed in case they have been invalidated.  This can be done lazily, and can be checked on access time, since we would know if our own address had altered based on the tip in the channel or some other flag.

## V2 - instant access
Access to a child can be granted instantaneously by using ACL rules in the appcomplex.  This method needs to be fork aware.  If access is granted to a child, then we need to fork all chains from the root down to this child, so that the parent info can be updated.

So granting access would be paused until the prior chains had completed blocking and the fork had occured correctly.  This is less load on the system.  Instant access means instant close, too, so we can clean up the channel tables.  Cleaning these channels makes exports more direct as the alias tables will be smaller.  


## Problems

### Updating the spliced data with another later import
This would be an overwrite, as we cannot verify it.  Some auto merge strategy could be applied, but seems messy and cannot think of a use case for it.

### Keeping updated with the remote chains
If we splice in at a specific height, we would want other updates to continue for chains that are unrelated.  This might cause inconsistency between chains, but we could check this by rerunning all the actions in the updates and ensuring that it does not touch our modified chains.  In general, it is difficult to do.  Can apply Pijul math to know when independent changes occured.

### Forking as a sibling
Forking where we simply give it a new name, but do not change who the parent is.  This would make no difference whatsoever, but we may need to start the fork with a new chainId generation, to indicate that splicing has occured.  By changing the tip of the splice, we can signal to the system that any opens which occur will need to fork the child.

All transmissions need to check the path still resolves to the correct chainId, otherwise we need to reseek that path / error that channel.

When walking to a child, if we already have an open channel to it, we must be careful this is not to the spliced version - the path must be walked each time to ensure correctness relative to approot.