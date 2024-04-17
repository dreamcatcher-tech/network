
>[!tip] Created: [2024-04-17 Wed 21:23]

>[!question] Targets: 

>[!danger] Depends: 

The io file is so special that we should write its oid in a dedicated path in the repo.
This way, db watch can be used on it with no delays.

Or just broadcast the io ulid results directly ?

Never mind about missing some ? Do a slow db watch pull to catch up on anything missing ?

Keep an object used to track pierces separate, and keep it updated, so the lookups are instant - basically comes with the watch.  It should expire, and so the client should have a catch up mechanism.

If they look up the io they want and its null, then use the fallback lookup, which is the same for any type of file.

Want to get into the standard way of looking up files faster.

Transient broadcasts should be explicitly asked for by a watcher.

If the pierce ulid was maintained as something we were interested in, then the outcome can be written to it whenever it occurs.  Watchers can just keep an eye on it directly.  Once the pool item disappears, we know it has been inducted into chainland.

The client already awaits only the pierce commit, then watches filesystem changes, so why expend effort on the broadcast system ?

Who needs the result of pierce anyway ?  Chat based interfaces, we only really care about the change of state inside the system.  Getting a response back directly isn't part of the HAL system.

If watchers of a file wrote to the db to indicate their interest, and kept that alive, then whenever a commit happens, the presence of such a key indicates jobs to be done.

Or, just do the db reads raw ?

Transient broadcasts should be actively asked for.
BUT we could do throwaway commits, of partial writes to the file, periodically ?
When the effect fully completes, the branch is merged in, but listeners can pull from this branch to get updates partway thru completion.

Could use broadcast only for SSE watching during ai calls.  Maybe only for a designated PID ?
How can we tap the partials in the middle of executing, rather than at the start ?
How to even know that we want to watch a transient, when it is deeply nested and part of parallel calls ?
If we are watching a specific file in a specific PID, then we would write an active watcher key, which would start broadcasting patches.  When a write occurs, we start watching the db for write watcher keys.  When one is active, we start broadcasting patches.  Latecomers do not get earlier patches.  They will have to display the missing patches and will have to wait until the commit has finished.  Patches can come in any order, and they should be consumable as such, with UI designed to show missing bits.

They should also buffer so they calculate without pigging the main thread, and yield constantly, possibly in a web worker.

Or use redis as a way of tracking transients.


Or do an SSE broadcast, which just broadcasts when changes occur, and anyone can listen to them.
Needs to be active, else will overwhelm the system.

Why can't general file watching also be active, and after a commit, these watchers are updated with the oid of what they want ?
Then, this is also used to trigger transient watching.
Means that any number of watchers is just watching a single db key.
So pierce gets written to db directly, making watching super light and maximally fast.
Every other file watch gets logged in the db ?
Or, every other file just uses git commit watching.

Can use metrics to stream down to the client how much load each of their repos is generating, by updating these statistics buckets every few seconds or so.  Each commit should track these stats, but we should keep a live running trace as well, which is used to provide rapid summarized feedback, and to track billing.