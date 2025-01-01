
>[!tip] Created: [2025-01-01 Wed 16:34]

>[!question] Targets: 

>[!danger] Depends: 

we don't want to make a commit every time it does something, since this is wasteful.
Some kind of ephemeral or mutable db value, that can be in a side band ?
force commit that overwrites the last one, so the data is cleaned up ?
force commit followed by an object clean ?

special move where force looks at all the objects referenced by the previous commits, and wipes them out if not needed ?
But what about other branches ?  It seems we have to keep the old objects, around ?

Do a periodic compaction commit, which squashes down everything that happened in a day.

Cleaning process needs to walk all the paths.
Can this be done in parallel somehow?  split up the commits ?
List all the objects, walk the tree marking off which ones are included, then whatever was not touched is an orphan and can be deleted.

If new commits occur during clean, then we treat those specially, since the objects they reference are not deleted.

Need a kind of level snapshot so all objects after a snapshot get prefixed with this number.  Means that we can walk all these objects and know for sure if they can be deleted ?

Anything new would be written with a new snapshot value.
What if something was in the middle of writing when the snapshot was called, and it was uploading objects but had not finished ?

We can spec a max age of upload, so after that you might get purged.

Or, lock the repo so nobody can do anything.

Or keep an index in the db that tracks all the objects anyway, and their pointers, so we can rapidly walk ?

For polling, we can just use a separate side channel to receive messages that it is polling, using a broadcastChannel in deno.  The poller sends in signals, and these get broadcast.

This is a cosmetic thing, so no need to persist it down. 

Can be used to trigger an immediate poll, too.