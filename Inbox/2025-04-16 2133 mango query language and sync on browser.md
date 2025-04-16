
>[!tip] Created: [2025-04-16 Wed 21:33]

>[!question] Targets: 

>[!danger] Depends: 

Should we have some standard language by which to specify how to stay in sync? 

Then it has to also react to changes where the data gets written to.

https://github.com/MartinSnyder/seamless-immutable-cursor

So we want to make this cursor things work with artifact, so that each commit can be retrieved, if needed.

Set up the target config on what to sync, we default to all at first.
Then it begins the process of loading and probing.
Later we can make the queue prioritizable, so if someone asks for something, it will go to the top of the list.
Or if they ask for something but it was configured as lazy, then we load it and set it.
Means many of the methods need to be async, like accessing a filesystem.

Or we could do something with immutablejs, which is the king of speed, but you cannot treat things like regular objects.

Put in some extra helpers around the notion of commits, where you can walk back and forwards across commits using this data structure that is structurally sharing under the hood.
Mark whole sections of the tree as in progress, so can show as reloading, even tho we have some stale values in there.

So the top level object would hold the commit details, and in that is the tree, which you would navigate using regular js methods.  Some of these paths might be lazy loaded, and the watching could be dynamically attached and detached, to track whatever we need at the time, then stop watching it.

The metadata fetching is separate to fetching the data itself, else we confuse the structure.
It should just be pure objects that represent dirs, and the individual files represented by metadata objects, with an extra data property perhaps ? or a way to fetch that exact data, which is always lazy ?

So make the tree be just pure metadata, which should be easy to keep in full sync, even if its growing - can know if the change was sync of actual by seeing if the commit changed at all.

So if the sync object is just pure metadata, then fetching the data becomes a direct query, with the path and the commit info ?  You could provide the metadata object, and we should be able to reverse map it using symbols or something to get the full path.

Have a special marker that says when the tree is not synced at a point, or will never be synced.
Then call a function that prioritizes the sync of that portion if it is still syncing, or can set that piece to stay watched in sync.

So basically the Mango query language should return these standardized objects that represent the file system after it has been processed by the query which means that even for just raw syncing the same mechanics apply and the same data structure applies. 

seamless-immutable takes about 400ms when interacting with a 500k key object.
whereas immutable-js would just eat that effortlessly.