
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