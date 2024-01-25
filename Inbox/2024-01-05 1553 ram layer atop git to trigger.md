
>[!tip] Created: [2024-01-05 Fri 15:53]

>[!question] Targets: 

>[!danger] Depends: 

If we put a ram layer, it can act like the crisp, where you can subscribe to a path.
Then, we will give you the file at the path, in complete form, and will trigger a new prop when anything changes.

Ram can be persisted periodically, to reduce FS thrash.

The crisp would be staged, so we can see when it is in ram, on disk, commited, off computer, part of mainchain - give people visual cues as to the current durability progression of what they're looking at.  Can show netsplit too, when we have lost connection to the swarm.

If we coordinated with git, we could do status much faster too, since we would already know whats changed.

If git was engineered to be more suitable for this purpose, it could certainly run a lot faster.  It could also use ipfs under the hood, using cid's to allow a broad range of hashings.  If we could alter how dirs are stored we could get things that are larger, and if we altered how data was packed, we could make content aware packing that could be more surgical about diffing of some structures, like json.  Getting triggers when files change on the system is integral, so is memory caching for fast churning files.

isomorphic git with abortcontoller seems useful.

All filesystem writes can be in ram, with only the commits and branches to git being required to be saved.  This saving can be lazy, since network calls are more useful than disk writes.  So the fs ops are always pure ram, and the git writes complete in the background.

Only needed for git repos that will be livened with execution ability.

Spy on fs operations using https://github.com/streamich/spyfs
use unionfs to provide isolated layers that each process runs in.  Once the IO queue has ended, the branch should be automatically closed.  Should be able to reply to the origin action and then keep running in some cases.
then later, intercept the calls to use the git repo directly, then do background hashing in a thread in case it gets asked for, using a queue that uses idle capacity to hash ahead of time.

Checkout of a branch should toggle the unionfs layer to switch, so there is no need to modify the working directory at all.  Then when someone tries to read, we pull it from the git branch we are on.

If the system was backed by a kv store, and then used git to store everything by default, where writing to a file automatically puts it in a temp branch so that if it is actually commited, then it will be near instant, then it should be maximally efficient.

If this layer was raw hardware, then storage could be aligned with the sectors on a hard disk.  Some IO could be done straight from the disk thru to the network card with minimal processing, using the machinery at max speed, if this system is all it runs.

Multithreaded access, like in webworkers, will be much faster in this system since there is no need for exclusive lock, as each layer in the filesystem is independent and locked to a commit.
So the serverworker manages the fs completely, and then each worker gets its own layer in its own scope, and only on commit or merge does it talk to the service worker.  If it does so, it can just use gits own protocol to ensure efficient comms.

pure memory fs works since the fs is transient.  Git wasn't designed to be run in multiverse mode, as it was supposed to be the manager of the worlds.  So what it writes to its log and its head will likely be corrupted ?  Unless using unionfs we always portal straight thru to the single git fs.

Would be awesome of this single git thing was in the origin private fs.
So all the isolated fs is memfs, since we're just going to start from the last commit if the system crashes anyway.  Then we use opfs for the .git folder.
BUT we need to track head in only a single place, so probably the branch tracking is a function - whatever branch we're on has the right to update the head of that branch.  
To create an isolate, you have to tell git that you are on the actual branch.

Actually there should be no conflict except for the HEAD file, since everything else should only be updated by the forked branch.

We can learn what changes by comparing snapshots between the two operations.

Then we'd make an integration so that memfs tracked its changes, and could supply that directly to git so there was no lookup time.  Finally we would do the hashing info lazily, ahead of time, so that commits were as fast as they could possibly be.

Could use unionfs and store each branch as a folder on opfs, so that the branches act like a totally separate repo from each other.  They all have persistent storage, but any transient info is memfs, which is automatically reset on power failure, which is what we wanted anyway.  Merges between branches are done by a higher level process that can read both opfs folders, and does the merge using direct filesystem access, on the OPFS so it should be fast, with memfs being a read cache to help speed things up further.  Use memfs even for writes, and sync the memfs to the opfs in a background process, gradually.