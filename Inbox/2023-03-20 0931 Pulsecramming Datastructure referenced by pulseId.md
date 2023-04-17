
>[!tip] Created: [2023-03-20 Mon 09:31]

>[!question] Targets: 

>[!danger] Depends: 

Fundamentally, the time to transmit binary data tuned out to be nearly undetectable compared to the time of hashing and unhashing, plus the RTTs of discovering what hashes to fetch then going out and fetching them.

Currently all the Blocks that make up a Pulse are referred to by hash alone.  Worse, as the Pulse is rehydrated, due to being a tree, multple round trips are required to retrieve a block then learn what that block references by hash, so it can be retrieved, and so on.  RTT has a gigantic impact on load times vs data size.

Furthermore, finding the differences between two pulses in terms of blocks is a requirement for syncing, where the pulses might not follow in strict linear order, as the browser might have missed some history.  This can cause heavy server load if we need to work out the full blockset of each pulse.   We want to provide this ability so that honest browsers have reduced load time, whilst not having servers work significantly harder than clients.

Idea is that each Pulse at its base holds a varint indexed table/array of all the binary atoms that are unique to this Pulse. Thruout the pulse, each reference points to `#:0` or whatever the index is, but crucially any prior pulses are referred to by `pulseId:0` so that for each referenced atom, we know immediately what is the hash of the pulse containing it.  This means we know during a syncing operation if it is something the requester already has if the pulse is earlier than prior.  This is the crucial speedup for syncing.

This allows content of hashes to be pulled down by pulse directly, with two round trips (1 pulse, 1 content), regardless of the datastructure underneath.  We may be able to optimize the KV store layer if we are storing and accessing by Pulse, as this would allow us to store a larger chunk size, which can lead to some speed increases.  Further, we can remove the hashes from the pulse, store the data as a single large  byte array, and check it upon recovery from storage or transmission.  

The advantage of hashing like this is that it is faster to hash a long array than many short arrays, the space of the hashes can be about 20% of the total data size, and gets worse for smaller data atoms.  Also hashing many small things adds heavy recovery overhead for the browser.

This array might actually be a merkle tree of some kind to allow sparse fetching. Or we might chunk it, where up to a certain size, we make merkle tree chunks out of it, and store what indexes start this chunk, which might be no indexes if it is completely spanned.  If these boundaries were configurable then we could sit inside S3 boundaries perfectly, to optimize recovery from an S3 type storage, or from disk storage.

To sync, grab the lineage tree, which should be readily available on the server.  Walk the current pulse and send down anything that is referenced which shows up in the requested range.  Skip anything that is not in range.  This will be faster than walking the pulses and diffing the blocksets at each step, especially if there is a lot of churn.  The load difference between server and client is near zero.  There are no heavy intermediate calculations, like what is currently done by computing blocksets - everything is raw lookups.  Very little hashing upon recovery from disk or network.

## Fluffing 
Periodically a 'fluffing' could be done to snip the tail on the longest pulse required to rebuild current.  If the current pulse is within some size bound, then we can fill it up by pulling forwards the oldest pulses, to reduce how far back we have to store data.  Can also take into account how much fluffing has occured in the previous N blocks, to get some tunable amount that ensure our histories are always short.  Can favour fluffing forwards dusty Pulses, so that historical pulses with large datasets remain untouched, but we remove the need to ever call up many small ones.

Can be tuned to fit some chunk size, so we always aim to fill up a chunk, so we can take up a full 4K sector on disk, for example.  Goal is so that for each Pulse, we need as few other Pulses to rehydrate, and those that we do require, should be packed with useful data, up to the maximum of the chunk size the underlying medium supports.

## Malleable signatures
Could make signatures be independent of content, so the signature chain does not cause recalculation of the content at all - the content is a separate set of branches to the content, which can also have branches.

If the signatures did not include the previous signatures, then the signatures can be added to without a kind of head-of-line blocking.  Multiple validators can add to a signature without holding everyone up.  Extra signatures can be added late, and skip signing things along the way, since signing at any later date is the same as signing everything at each step along the way.

Referring to PulseIds is not polluted by the signature requirement.  Browsers should fetch the signatures first, then the content based on that.  Signature Pulses should flatten the content pulse so they can be fetched rapidly. 

Might keep signatures totally separate so can walk signatures quickly without fetching whole pulses.

Can allow highly compressed versions of history to be made without needed to rehash everything.  Rewriting due to a covenant being patched is easier without this entanglement.  Or snip one Pulse, then only rehash the pulses rather than having to resign everything too.

## Browser fetch with no server help
Lift was introduced to help the browser load faster by pumping data down to it that we knew it would need next.  This difference requirement between the browser and the server can be weaker with this new flattened data structure.

The brower problem is that it has a stale pulse, and knows there is a newer, and needs to download the least amount of data to bring it into latest, with the smallest number of RTTs.

If it fetches latest, and also fetches the lineage, where lineage is structured to favour recent pulses in a  single large chunk, then it can request all the Pulses in between what it had already in a single request, favouring recent first.  Then while waiting for these Pulses to stream in, it starts to rebuild the latest Pulse.  It would cancel its want requests if the latest was resolved before all middle Pulses were received.  There may be some wasted data from these middle pulses, particularly if the prior was old.

Or, we could have a request type that was for the full Pulse, walked, but with a walk limit.  The server would have the lineage in ram always, so this would be cheap, then it starts to walk the pulse and stream down all the prior pulses also.

Or, get the latest Pulse alone, start to walk it, request missing Pulses as discovered.  Also request missing pulses based on lineage as a pre-emptive lower priority search.  The total number of RTTs would relate to the number of Pulses in between.  If the churn was small, then would fulfill faster than waiting for all the prior pulses to come in.

Fastest possible is getting server assisted walk, but this incremental approach is best for distribution.  Would simply be boosting the bitswap blocks by pushing blocks out that were not asked for, then the receiver checks that the boost asked for them.

Basically start a raw bitswap walk of the latest Pulse, while also sending out a Lift request for that Pulse.  Servers know how far along the bitswap walk got, and boost extra blocks on top of that.

## Pulse request sharding
Server boosted requests can provide both a key range, or a lineage range.  This can be altered as other servers under perform or shed load.

## Coming complete circle
If our model is shunted one level, and so IPLD Blocks become Pulses, then all of bitswap applies.
This can significantly reduce the amount of hashing we do while keeping the same amount of deduplication.  All that is required is a different type of `.crush()` to produce values in our own custom encoding.  Reference between Pulses include the Pulse hash, and the index in the data array.

Decoding would be two step process - dag-cbor decode, then decoding further the binary data we got back from that.  Or use dag-pb and use pure binary.  Make decode be lazy, so we only parse the binary array if a particular index was requested.

HAMTs can be translated to this same format, but might need to stay as Block level items during the interim.  Making a wrapper around IAMAP might be better at this new custom level, rather than persisting with js-ipld-hashmap.  Walking a HAMT would instantly give blocks of prior Pulses.  Walking Pulses can be done without decoding the whole Pulse, and only decode the chunks we need.  We would check the hash of the whole data array, on load, and then give back the binary hamt out of that.

This change can also include key removal from the hashed data, so the schema is required to re-inflate the data since it is purely tightly packed values.

## Children walking
Large numbers of children should still be triggerable by using `lift` protocol, rather than an individual request for each piece of data.

## Permissions
Permissions become easier to apply since each Pulse contains a permissions structure.  With just hashed blocks alone, it is difficult to know what Pulse the block is being asked for in relation to.

## Lack of dedupe between chains
The storage layer will lose all deduplication properties if the diff data is flattened.

Some recovery of dedupe may be possible if some keys remain as blocks, such as State.  Recovering state directly would be banned, as all recovery must be done at the Pulse level, which would acquire the state block.  Future Pulses would point to the hash via the Pulse that contained it, so the lookup would be preserved.

## The Cram
This is the portion of the pulse that is length encoded and represents a single binary stream.  The Cram is an array of binary blocks.  To reference portions of the Cram, use `pulseId:cramIndex`.  It should be gzip compressed one level higher, so the Pulse encoding is turned into binary and then gzip compressed at max level.

The keys of the json data are also removed via schema, so only the values are encoded.

Pointers are only applicable to Pulses, and never to anything internal to Pulses.
Only one category of pointer.

Further, an index in a cram can be a pointer to pulseId:cramIndex value, so that the size of the pulseId is not repeated thruout the current DAG.

Therefore the format in the cram should start with a 0 or a 1 indicating if it is a pointer or not.
