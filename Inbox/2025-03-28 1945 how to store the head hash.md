
>[!tip] Created: [2025-03-28 Fri 19:45]

>[!question] Targets: 

>[!danger] Depends: 

We don't want to make a super commit every time the lower repos do a commit ?

But we probably should - this could be periodic. It would definitely be pooled.  But it doesn't help much to make this commit, as the consensus on each repo should guarantee consistency.

We could just do a super commit as fast as we can.

In the meantime, we need to store the head commit somewhere.

`did:artifact:repoPubKey/objects`
`did:artifact:repoPubKey/HEAD`

This will give us no db reliance except for objects, and the HEAD