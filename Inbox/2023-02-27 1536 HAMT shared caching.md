
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

## Initial load
When browser loads and realizes it is missing something from the server, it can request the diff stream.  It could request across multiple peers by segmenting these requests up somehow.

## RTT the killer
Currently each pulse takes 500ms to resolve, which at one pulse at a time means 20k customers will take 5.5 hours to load.  Trouble is that maybe the hamt takes a while to load ?

Getting each pulse load time down, as well as letting concurrent fetching occuring with no impact on resolve time is best.

Next best is providing some cache restoration methods, like mass loading from the server.

Loading from disk makes the subsequent loads much faster.

The size of the Blocks is a problem too - a 32 byte block is a total waste, since to ask for it tool 32bytes of CID, at least

If we could ask for a block + its links, this could be faster ?

## Sync template
Skipping parts of a pulse that are just not needed can go faster too, like a lite Crisp.  Could strip down to being just the state, covenant, and channelsHamt with a shortcut to latest.
Provide an overlay template that is used to discern what to inflate or not.
Then, the pulses can have these quick keys flattened to reduce the RTT to get a pulse.
Hamts can be downloaded as a single item, to keep things rapid.

## Concurrent websockets
Opening up multiple libp2p streams may permit more thruput in a given time.  Browsers have limits at something like 4 concurrent, but we should use this to get the most possible data rate ?