>[!tip] Created: [2022-12-12 Mon 13:07]

>[!question] Targets: 

>[!danger] Depends: 

Given a js object and its next version, we could make all the next blocks as a single operation, with no interpulse communication at all.

Rollup is done by starting at the deepest leaf, and walkingup, finalizing the hash each time.

A chain could existing in a temporary detached-head type state, and then when the root is signed, avoiding the need to hash and sign it before it can be rolled up to its parent.  Here the state tree would have updated ahead of the other trees, and only once a new approot pulse is signed is it considered valid.

The next time a specific block is made for the deep leaf, it would use the approot to verify itself.  Its latest approot is implicitly applied since it is the one which signed its last update.

Could be used to do multiple updates at once, rather than blocking each node in the tree.  So when a leaf updates, this batch blocking is applied to roll up entirely to the top of the tree.  The only requirement would be to gain lock on each node chain.  Reduces the load amplifcation of making changes deep in the tree.

Maybe gaining lock on a chain means gaining lock on its root ?  This would limit multithread performance in lambda, but we could make the locks scoped, so that a subset of nodes can share the lock, and agree amongst themselves who has what chains locked.

Then whenever getting the latest chain, we must always walk down from the approot.

## Problems
### how to look up the approot that contains it ?

