---
type: idea
---
# approot location

> [2022-09-12 Mon 19:30] <br/>
> Targets: [[approot]] <br/>
> Depends: [[]]

We need independent trees for each of:

1. State
2. Binary
3. Meta (aka the complete pulse tree)

And the problem is that each one needs to list out its children, too.

## Requirements

1. Any change to any pulse should result in a new Pulse for the approot chain.
2. Be able to walk rapidly from the approot down to any aliased path, deeply nested.
3. Change of the name of a child is the same as changing all three trees
4. If no state change occured anywhere in the tree, the hash of the approot state tree should remain unchanged
5. If no binary change occured anywhere in the tree, the hash of the approot binary tree should remain unchanged

## Where should the references be stored ?

### In each network channel

Cannot be stored as part of tip, as it needs to be a one way update to avoid the engine running forever.
If store a reference to the complete pulse of each child, then we would cause the channel to update each time a child changed, which would ripple up to the approot.
The state could be stored in a separate slice in the channel, and reference the same subslice in each child

### In the `states` slice of provenance

## Proposal

For each channel, place an optional key `latest` which references the Pulse of that child.  This alone ensures the approot pulse will be updated if any of the children have updated.
This is walkable by using the alias names of
If a channel has its pulse updated, we mark its id in a transient array `cxs` representing changes.
If a child alias is modified, this also results in a `cxs` update.
At Pulse making time, every channel in the `cxs` array is called up, and modifications are made to the `stateTree` and `binaryTree` keys in `Provenance` if required.
Then the `cxs` key is deleted.
