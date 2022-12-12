>[!tip] Created: [2022-12-12 Mon 13:07]

>[!question] Targets: 

>[!danger] Depends: 

Given a js object and its next version, we could make all the next blocks as a single operation, with no interpulse communication at all.

Rollup is done by starting at the deepest leaf, and walkingup, finalizing the hash each time.

A chain could existing in a temporary detached-head type state, and then when the root is signed, avoiding the need to hash and sign it before it can be rolled up to its parent.  Here the state tree would have updated ahead of the other trees, and only once a new approot pulse is signed is it considered valid.

The next time a specific block is made for the deep leaf, it would use the approot to verify itself.  Its latest approot is implicitly applied since it is the one which signed its last update.

## Problems
### how to look up the approot that contains it ?
