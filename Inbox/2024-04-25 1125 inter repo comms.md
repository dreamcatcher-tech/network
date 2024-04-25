
>[!tip] Created: [2024-04-25 Thu 11:25]

>[!question] Targets: 

>[!danger] Depends: 

Used when:
- a User wants to interact with a foreign repo ?
- a User wants to interact with any repo it controls

Each repo needs a dedicated branch from incoming comms. This branch represents:
- authentication for its instantiation
- all communications between the two repos
- a branch that starts with zero history, since neither repo is the owner

Could have two branches, one in, one out, to avoid conflicts on the branch ?
In the DB, the pid could point to a shared space, so the lock is shared ?
Both heads point to a special `network` path in the git repo
Two io files, one for each repo, so that updating the files on each is always conflict free, in preparation for being off the same compute environment.
Internally, we cross over the request and replies queues, and ban pendings and branches.

? should read requests be tracked here ?
Read requests do not make much sense in hash based systems, since wild distribution is required basically, and writes are expensive since they need consensus, so reads are locally cached as well - logging them doesn't make much sense.

Servers doing hosting can log what requests were made by other entities, and share this on a chain of some kind.


? what about submodules where some repos are mounted in others ?

To initiate, both parties agree on an initial commit to start the network branch with.
Both hosts are always trying to merge the other hosts view in to their own.

This could be extended out to N party, with one json file for each.  PIDs for each other could be used so that one channel can send to many - might be useful in consensus communications.

