Mounting is the mechanism by which a remote chain inside a different [[App Complex]] is spliced into the tree of another [[App Complex]] and optionally kept up to date with remote changes.

This allows for Requests to be dispatched into those remote chains.

This is how clients connect to remotely running applications and interact with them - by mounting the complete application somewhere in their path.

## Implementation
Mounts are stored in an `mtab` slice either in their own chain, or in the shell state.  This contains all the information needed to start the mount, such as peer addresses, validator public keys, and last known hash.

Announcements are made to any subscribers, for any chains - the remote side must have send a subscription request beforehand.

### Treat each mount as a channel
If `.mtab` was a child of `/` then each remote chain can be treated like a channel, with the only difference being that the engine will attempt to keep `latest` up to date with the remote side

### Proxying writes
Just because a chain is mounted, doesn't mean the mounter has any kind of write connection to the chain.  We would like all writes in an app complex to go via a single proxy chain, and so 

### Cutting off permissions
If one app complex wants to cut off another one, but there are a large number of channels open between multiple chains in each complex, a coherence problem occurs.  If any writes from external complexes are first checked by the engine for permissions at the `approot` then any denial can be effectively instant.  

This would avoid the socket chain concept, where socket chains can easily become a bottleneck for inter complex communications.

### Speeding up write opening
Time delays in opening a remote chain for writing can be mitigated by allowing remote chains to request write action directly and the engine doing a lookup to verify permissions or not.  If permissions pass, then the interpulse is accepted by way of creating a recipient channel in pool.

### Mounting a complete tree
For the CRM app, each client needs to mount the complete app, and keep a local copy of all changes that occur in the [[App Complex]]. To do this, we need to specify in config options that this chain will be kept up to date and its full children fetched to the local engine.

Each time a new pulse is received, then we will look to the change tree, and walk it completely, fetching any new pulses.  This diff seeking can begin right from the first pulse, as the initial depth first search can run in parallel to changes.

Depending on the design, it may be that only the statetree is required to be synced fully.

Some kind of batching will be required for HAMT structures, so as not to try fetch the whole thing at once.  Any time a HAMT is encountered, it will need to be fulfilled depth first fully in segments, as it cannot be done breadth first due to memory constraints

### Full Sync
This option will keep the full remote tree available on the local machine.  To avoid walking the full tree every time, we would calculate the diffs with the previous pulse.  Each request to uncrush the new tree would consider the previous location, and only fetch the changed paths.

This would pull in all children too.

## Cycles in the Mount tree
If `A/chain1` mounts `B/chain2` such that the tree of A is `A/chain1/chain2` and then chain2 mounts chain1 such that the tree of B is `B/chain2/chain1` and auto updates are turned on, then a never ending cycle of updates may be triggered.

Some part of the parent update mechanism has to stop the flow of updates somehow.

This may be mitigated by:
1. Requiring all mountable chains to be registered in `mtab` too, so that loops can be detected somehow
2. Separate trees for children and links, where mounts would be considered links, and would not trigger a state update
3. If mtab stored latest hash directly, then the local child would have no need to update its parent if the remote changed.  Remotes would only trigger updates if the [[Supervisor Tree]] changed, which can only be from direct children changing.  Resolving paths to a remote mount would necessarily go via mtab.

## Name resolution
A remote chain should be able to use the same name resolution system as the covenant resolution system.

## Problems
1. Data leakage from the parents of any remote chain
2. If [[approot]]s are the only thing that can be subscribed to, then what if the path changes to point to a different chain ?
3. Should mounts be tracked by chainId or by path relative to the targets [[approot]] ?
4. If an [[approot]] announcement is received, how would the recipient know the path to the chain they seek ?
	1. Could store the latest known path from approot in each chain
		1. But can get lost during renames, since no way to know the new path