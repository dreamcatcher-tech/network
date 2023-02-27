
>[!tip] Created: [2023-02-27 Mon 15:36]

>[!question] Targets: 

>[!danger] Depends: 

Loading the HAMT when it gets large can be very slow, since there are many buckets to load.
We cannot know what the buckets are until we have loaded the parent, so multiple round trips are required.

This could be sped up by being told ahead of time what all the required pieces are.  So the pulse could roll up everything into a CAR file which can be sent to requesters.

This can be done in parallel to the main pulse structure, which can remain the same, but it exists as a side hint channel in the protocol between peers.  They may ask for the cached version of something before they ask for the full version.

The recipient of the request may make a disposable CAR just for this request, as it knows the recipient will soon enough ask for everything anyway.

So when asking for a pulse fully

When asking for a pulse since pulse x, it will send back a CAR with all the diffs.

It sends back a payload of just CIDs to ask for, to make things a lot faster.
This can be streamed back in chunks, as they become available, and can be cancelled.

? How long for a raw syncer to complete 20k customers locally ?

Ideally start streaming the whole CAR down to the client.
This stops spreading the load, but CAR could be fetched in parallel ?
Need to rollup and have a wantlist for a whole pulse ?