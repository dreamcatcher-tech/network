
>[!tip] Created: [2024-10-30 Wed 16:22]

>[!question] Targets: 

>[!danger] Depends: 

IO handles transmission and execution, with replies.

This should be able to avoid any addressing overlap ?

So IO would be loaded with some addressing functions ?

IO might need a rewrite so it has different keys for its outbox and its inbox.  Outbox would then then have the commit messages inside it, so no separate storage.

So rather than tracking all this info inside of the request, it should be tracked in the io file.

Parents are just snapshotIds, which we can say can be any kind of string, since it doesn't matter so much what they are, so long as they are identifiable using the id.

IO would store an abstraction of thread children that it is managing ?
This keeps the supervisor structure intact.
The git based system is an abstraction, and it sits separate to the data that comes in from git, as execution should always be kept separate from data.
So whenever it wants to make a change to the data branch, it does it using a light touch method, where the commit gets made without pulling in the git structure of the execution branch - it just moves the objects around, and makes a commit that has reference to the execution info, but doesn't link the git structure to it.  So a tool can review the execution, but the data branch is unencumbered by the execution branch.  Here just the snapshot was moved around the place.

Pending would be part of the outbox, and the snapshots assosciated with each is stored here too, so the accumulator gets these fed in 

The datastructure should be the same between the accumulator and the pendings slice.

Then, the commit is just the id of the snapshot that we want to switch to, which the accumulator knows how to switch between.

api and accumulator should actually be the same thing, practically ?