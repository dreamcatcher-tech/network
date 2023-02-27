
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

## Measurement
Size of pulses in an approot
Bitswap overhead - ratio of received blocks to the message data
RTTs per pulse - how many request reply cycles were required to fully load a given pulse

## Initial load
When browser loads and realizes it is missing something from the server, it can request the diff stream.  It could request across multiple peers by segmenting these requests up somehow.  So initially it could ask for a pulse and all children, and would receive a CAR style stream down.

## RTT the killer
Currently each pulse takes 500ms to resolve, which at one pulse at a time means 20k customers will take 5.5 hours to load.  Trouble is that maybe the hamt takes a while to load ?

Getting each pulse network load time down, as well as letting concurrent fetching occuring with no impact on resolve time is best.

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

## Pulse at a time
Enhance the protocol to receive requests for a pulse, and be responded to with a full set of blocks that make up a pulse.  If don't want the HAMT, then should pull the pulse a block at a time.
The pulse can be partially fulfilled, and then bitswap used to figure out the rest.
Basically allows the pushing of extra blocks in response to a specific request.
Blacklist peers that push more than you asked for
Later, bitswaps principles can be used to signal request for content, but we change how that content is supplied, but definiting how many child blocks are fetched as well.
So block for block bitswap should be a last resort, and whole pulses, including the hamt, should be the default.

Provides should be rewritten to only publish approot.  We just need to modify bitswap to redefine what it calls a block, and how it responds to requests.

Pulse at a time should give significant speedup, particularly if it occurs in parallel.  Also running multiple websocket connections can be used to further increase the carrying capacity.

Pulse at a time gives a good chance to apply ACL permissioning.  It does sacrifice some reuse between chains and even between pulses.

Split the requests between multiple connections if we have them, rather than asking each one for it.  Allow these requests to be cancelled so they stop sending to us.  Make the connection be back pressure aware.

## Increase HAMT bucket sizes
May result in more churn, but more optimally sized blocks.

## Sharding the request for pulse trees
We could ask for all children of a pulse that have a chainId that fits some sharding range.  This would allow an initial load to be spread amongst peers, rather than attempting to load from a single peer directly.  Any partially filled or timed out orders could be requested from others.
Main principle is avoiding the requirement of a single node to supply anything.

## Bitswap with links
Specify that we want some block and all the blocks it links to, recursively, up to some parameters like depth, block count, total data size, or just whatever the responder can manage to do.  Upon receipt, the requester can do the same with the edges of the newly received graph.

If content aware, like IPORM, then we can define link boundaries to not follow, like HistoricalPulseLinks

Bitswap should respond using only an index to a request, not sending the full bytes of the request.  Or rely on the client to hash the data to determine what it just got sent and to check the integrity.

## The two modes - light touch for writing, heavy for reading
When trying to write, we want to load as little as possible.  But when reading, we almost always want all of it.

## Plan
Make a connection method to fetch an entire pulse at a time.
Feeling that Pulse / IPORM based operations cannot use the underlying bitswap implementation, as needs permissions, and also intelligent fetching.
IPORM enures our own generality, and would allow ipfs to have a lower layer usecase that they could believe was generic enough to be useful.

? Is the data size of each pulse too great anyway ?

### Strategy
go thru the list of connections we have, and ask for the pulse.
if multiple connections, round robin between them all, and timeout each one.
if one times out, ask another two, then another 4, so that we are quickly broadcasting for weakly held pulses, but efficient on strongly held ones.

## Wire protocol
Moving binary data should be done directly.
Multiple requests should be able to be on the wire.
Requests should be able to be aborted at any stage.

### V1
CAR writer in order of request.
No abort cabilities.
CAR has an inbuilt identifier used to double check the pulse cid that was requested.
Stream is single directional, as the requester opens it to only ever send requests in.
Receiver expects to receive js actions.
Requester expects to receive CAR files, that ultimately close.
Send the control messages down the standard announce channel, then start a new protocol for raw car transports `/pulseswap/0.0.1` which the connection has the power to dial if it needs it.
pulseswap only ever receives CAR files, and can be matched up to what was requested in any order, since they have CIDs.  
Cancellations can go over the interpulse command protocol, and if they are honoured or not does not matter.
CARs can be incomplete, and bitswap will be used as a fallback.
CARs are sent down in streaming fashion, for speed.

Be great if the pulse could be returned and start crisping and then the hamt wasgradually built up as the data streamed in, to allow gradual loading of HAMT maps.

? Where is the size of the db ?
Show a graph of the data size of all the different classes in IPLD, to see where the heavy pieces are.

? can CAR be more efficient if hashes were replaced with ints ?  Provide diag tools to show the space taken up by CIDs vs data, and see what effect generating an index would have had on the CAR.
