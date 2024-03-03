
>[!tip] Created: [2024-03-03 Sun 17:56]

>[!question] Targets: 

>[!danger] Depends: 

Do not store this value in the request at all.
An internal request is one that has been solidified.

We can know all accumulations based on their order in io.json and if their source is our chain, with target being off chain.

Pierces would all be obvious, and we know we are only executing those items that have come into our chain.

So we can make a table to list the types of request that can exist on the channel.  With just target, source, ulid, we can know if we are:
1. Pierce
2. Accumulator request
3. internal request to be processed by this chain, in order.
4. branch requests, where we will start a child chain to execute the request.

How to do fire and forget requests - send something off without waiting for the reply ?  This should be a specific action, like detach.

The excecution compartment should be the thing that holds the maps to functions and isolation apis, so we can pull them up and continue them on once replies have been received.

So we might not need the accumulation number directly, as it would only be needed as a poolId.
BUT there is only every one batch of outstanding accumulations for a chain, so this could be the poolId ?
Once they get sequenced, then they get their results.