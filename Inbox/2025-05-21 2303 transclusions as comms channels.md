
>[!tip] Created: [2025-05-21 Wed 23:03]

>[!question] Targets: 

>[!danger] Depends: 

using the linear history features, a sender can attach futher changes on by making the next commit that points to the previous one.

The receiver sends back a stream of transcludes that represent their replies.

The replies and the actions are just directories, and they marry up by their names, which is their sequence.

so comms channels are established, with in and out being separate directories.
Each side lowers or removes things that have been met.

? multi reply using child directories ?

the transclude comes from the internal (ie: commit covered) parts of the repo.  The commit can be used as proof of signatory.

so all the sender signs is the commit, and then the transcludes use this as a proof.  The commits could sign these net folders directly, to make the proofs simple and not leaky.

If you want private comms, use a dedicated branch, and relay thru it.  Else public comms with torn off proofs would be suffient. 

Or we can put the channel hash in the root to be signed directly, or signed as part of the pool of signatures.