
>[!tip] Created: [2025-06-26 Thu 11:08]

>[!question] Targets: 

>[!danger] Depends: 

issue is that we are having to rewrite pull requests but in fact we should have a single shared OPFS so that each frame can pull in some part of that ?

we could avoid passing binary data around thru the frame bus, can make all frames share a single object cache, have browser caching at all (which is not currently present)

For each repo, we can have a separate cache in a folder, and we share access to each one.

Each frame could have its own opfs and then just populate it, with the root worker fulfilling it from its own cache.

or in the frame, it could be a super lightweight browser, that just gets shallow views of the repo at each state ? rather than the full repo ?

If it is given a single file, then that seems eaiser to manage than sending in a full repo, much less a full live repo.

best move is to have the parent maintain a cache of all the objects, split by repo id, and then fulfill the frame requests from this cache.

So the parent holds all the data, and the frames just pull into ram as needed.

could we make an in browser version of the iblobstore interface ?
then use this as a passthru cache ?

so if we pull envelops from the server, we write them down on the disk ?
this gets stored in a cache under the hood ?

It would be ideal if the backing store for each frame was actually just reading from the parent, rather than duplicating memory on the child ?

opfs handles can be passed as a message, but only if the origin is the same.