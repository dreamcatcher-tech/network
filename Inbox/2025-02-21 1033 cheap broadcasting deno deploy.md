
>[!tip] Created: [2025-02-21 Fri 10:33]

>[!question] Targets: 

>[!danger] Depends: 

Use the ram cache to store the full data, and use broadcast channels to broadcast an update.

Each time, we allow a dedicate query to a region where the partial data is stored in the cache.  The query includes some sectioning so we don't download the full thing every time.

The other way is to use something like fly.io as the target for requests to come in on, so the user subscribes to their listener container, and then the streaming all hammers this one container.

Another way is to set a streaming target and flag in the db, and only if the job matches this streaming target, will the stream be pushed out.

This relay service could be quite useful, since it acts like a telephone services.

Or we could write to the deno deploy db in 4k units, since it costs the same, as we would be writing chunks.

Or, the calling isolate, which could be a long lived vercel function, sets itself up as a webrtc target, and then the executing nodes find it and broadcast to it.  

Or use a libp2p pubsub service, and just broadcast to a certain id, and have long lived relay nodes that just intro nodes to each other.

Use an AWS queue to push messages in to, then read it from the node that represents the users browser, or let the browser itself read from this short lived queue.

Or just write to S3 with the live result feature of backblaze, so that we can be writing the full response, as a git object, but we can read it while we are writing it.  Then we just broadcast out the object id, since we don't know the hash yet, but we can tag it as something.

Use an elastic storage disk, and write to it using a cluster aware filesystem.  Possibly use a ramdisk or an ssd.

Liveread on b2 is the best option, since we can tag the object based on key, and could even concatentate several pieces of the stream into one.

mv is then just a rename once we know what the hash is, or just a double write.  If we could do range copy in the api that would be good.

Could use b2 and versioning to overwrite the object with the changed chunk of data, and so to get the file, we just pull down all the versions.