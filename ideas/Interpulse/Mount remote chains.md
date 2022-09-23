Mounting is the mechanism by which a remote chain inside a different [[App Complex]] is spliced into the tree of another [[App Complex]] and optionally kept up to date with remote changes.

This allows for Requests to be dispatched into those remote chains.

This is how clients connect to remotely running applications and interact with them - by mounting the complete application somewhere in their path.

## Implementation
Mounts are stored in an `mtab` slice either in their own chain, or in the shell state.  This contains all the information needed to start the mount, such as peer addresses, validator public keys, and last known hash.

## Problems
1. Data leakage from the parents of any remote chain
2. If [[approot]]s are the only thing that can be subscribed to, then what if the path changes to point to a different chain ?
3. Should mounts be tracked by chainId or by path relative to the targets [[approot]] ?
4. If an [[approot]] announcement is received, how would the recipient know the path to the chain they seek ?
	1. Could store the latest known path from approot in each chain
		1. But can get lost during renames, since no way to know the new path