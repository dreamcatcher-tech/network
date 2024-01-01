
>[!tip] Created: [2024-01-02 Tue 12:03]

>[!question] Targets: 

>[!danger] Depends: 

It seems reasonable to have the pulse history available at all times.

And since we have to stringify the state anyway, doing a string for the diff seems of no overhead.

We might be faster since we know the schema, so we can compute the diff quicker ?

The state should support unlimited size very delicately, and the choice of when to use child chains should be entirely up to the designer.  Storing the state as diffs makes it immune to size limits, but recovery could be complex.  We might annotate the json or use diffpatch or something.

It might be better to store as some kind of trie, since being able to work on little sub trees without disturbing the rest of it might be important.  Make it a trie that uses a packed array to store all its changes in, so it is much lighter on the hashes.  [[Pulsecramming Datastructure referenced by pulseId]]

Trie needs to be special in that for any given path in it, we should be able to instantly get the pulse in history that we need to recover it.

So if you want to use a child chain, you can reference that in the state trie as it slots in quite natively, and can be treated as a child, or just an extension of the state, so the recovery interface for programming with need not make any distinctions.