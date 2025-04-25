
>[!tip] Created: [2025-04-24 Thu 19:37]

>[!question] Targets: 

>[!danger] Depends: 

One shortcut is we can store objects with a timestamp so that when we ask for anything that changed since the last commit, we would ask for objects that were newer than the commit we passed up. 

Another way is to tag all the objects. Once the commit happens, we write to them the timestamp of the commit that they belong to as a tag. 

Lastly, we could add a sort of index or mini napp object within the solo branch that would list out the new objects that were created in this commit. To find the dirf, we just walk backwards. 

The overall principle is that if something can be derived, then we shouldn't store it in the repo. Because we can derive the diffs, we should not store the diffs in the repo. We may store them outside in a sideband and an object that helps us, but we should not store anything in the repo. 

So the fastest way is our own protocol, where we request with a commit we want, a commit we have, and the server streams down everything we need to make up the difference.  The server would watch the backpressure to ensure we did not flood the client with more than it was ready for.

Or the client would express a count offset, in case it wants to resume.

The client should be able to specify some rules, like the depth we want at a specific commit, if we want blobs or just the dir data, and for what paths.

v1 is everything, in a single stream, as a streaming result, which caches each object in the cache system of the browser.  As it comes in it is immediately made available to the browser.

the diffing should emit objects as it goes.

at the same time as the bulk sync, any 

direct requests should have the same options as full sync, just with a path ?
so they have the same light client options as the web client itself has.
the serverside walker should be the same as the client almost ? or just move the client code up to the server side ?

so we can defer the syncer ?

first thing to try is a full sync down with no shortcuts, no filtering, just the full everything.  That might actually be enough.
skip the backpressure calculations.

skip the emission of partial data ?
we could make it streaming system by default anyway, and then just emit things ?

in the store, to ease the graphics burden, we could just present the new root only after it had been fully synced, since that might take no time.
Or, we make the next root available, but it shows as next, and when its done, it replaces the current root in a single shot.

triggering rerenders when there are new blobs - just spread the state.
but it should only trigger if a file watch is triggered, so it would need to register the watch on the store, and then we would check if it was fulfilled.

We need caching anyway, so this could make the whole process a bit better.
So caching first.
Then a diffing end point on the server.

BUT individual requests will rarely be done if we pull down the whole diff directly ?

Could persist the whole store ???????
cache only when the blob store is changed in the syncer ?  
cache tree and meta requests as well ?

If we could test without the store updates and render updates ? it might be slow for other reasons.

CustomerTable is choking the thread, which is why the downloads take so long.

So probably best way is to not render until we have fully synced, and then in the background, we only sync the full updated tree, rather than these intermediary states because:
- complicated to do the walking of
- high network load with individual requests
- complicated to do the rendering in a compute efficient way

Abandon gradual render.
may make a cache to recover saved items quickly.
or just pull down from server immediately.

files read bulk, stream down results as they become available.

arch
pull down the latest commit
update the next root oid
begin the sync walk, but it just puts promises in a big map of oids to promises
begin the pull from the server


versions:
1. raw pull of everything
2. pull of diffs relative to prior commits
3. filters on pulls, to reduce what gets synced

on the client side, we _could_ rely on the server side order ? or if we don't, then we can just do our own walk, with the server sending things as fast as it can ?

When building next, we would keep a map of meta objects, and when we find something from the previous tree that is the same, we pull that in based on its oid.

periodically, every 200ms or so, the syncer would update the store with where its walk was up to.

dirs are just arrays of metadata entries.
