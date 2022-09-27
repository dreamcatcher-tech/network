Mounting is the mechanism by which a remote chain inside a different [[App Complex]] is spliced into the tree of another [[App Complex]] and optionally kept up to date with remote changes.

This allows for Requests to be dispatched into those remote chains.

This is how clients connect to remotely running applications and interact with them - by mounting the complete application somewhere in their path.

## Implementation
Mounts are stored in an `mtab` slice either in their own chain, or in the shell state.  This contains all the information needed to start the mount, such as peer addresses, validator public keys, and last known hash.

Announcements are made to any subscribers, for any chains - the remote side must have send a subscription request beforehand.

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