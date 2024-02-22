
>[!tip] Created: [2024-02-22 Thu 20:13]

>[!question] Targets: 

>[!danger] Depends: 

Maybe we should be storing the active branches in the kv store, so that they can be easily fetched ?

This means we can also easily count how many parallel actions are in play.

If a branch is active, then it should store its tip commit in the kv store, and its objects in the repo store.

If we broke up the git object store be keyed by path, we could easily store the whole thing.
So we wouldn't have to do much fancying around at all, we just use the keys directly.
Then, it is one shot to know if something is present or not.


We can know if a branch is active since it will be marked in the kv as such, tracking its tip commit.  When it merges, it does a pack of things it used.

Or just use packs completely outofband on some independent metrics.

Index files seem to get quite big, so these will be the bottleneck.
There may be a way to break these down too, or at least generate them rapidly or somehow generate a patch for them based on what we know about the previous commit and what changed.

What's good about that is the heaviest thing we need to move around is the index, and all the repo objects can just be stored in the kv directly, making them instantly available.

Whats bad is the file has a checksum, so we might need to load up the whole thing to be able to change it.  We could set something up using broadcastchannels where a given isolate can be the 'editor' and makes intended changes remotely, without needing the full index, then writes a patch of it, and broadcasts this out for the other side to use.