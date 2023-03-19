
>[!tip] Created: [2023-03-20 Mon 09:31]

>[!question] Targets: 

>[!danger] Depends: 

Currently all the Blocks that make up a Pulse are referred to by hash alone.  Worse, as the Pulse is rehydrated, due to being a tree, multple round trips are required to retrieve a block then learn what that block references by hash, so it can be retrieved, and so on.  RTT has a gigantic impact on load times vs data size.

Furthermore, finding the differences between two pulses in terms of blocks is a requirement for syncing, where the pulses might not follow in linear order.  This can cause heavy server load if we need to work out the full blockset of each pulse.   We want to provide this ability so that honest browsers have reduced load time.

Idea is that each Pulse at its base holds a varint indexed table/array of all the hashes that are unique to this Pulse. Thruout the pulse, each hash reference points to `#:0` or whatever the index is, but crucially any prior pulses are referred to by `pulseId:0` so that for each block, we know immediately what is the hash of the pul

This allows hashes to be pulled down by pulse directly, with two round trips, regardless of the datastructure underneath.  We may be able to optimize the KV store layer if we are storing and accessing by Pulse, as this would allow us to store a larger chunk size, which can lead to some speed increases.  Further, we can remove the hashes from the pulse, store the data as a single large  byte array, and check it upon recovery.  

The advantage of hashing like this is that it is faster to hash a long array than many short arrays, the space of the hashed units can be about 20% of the total data size, and gets worse for smaller data atoms.  This makes recoving the hash of a specific Block harder, as you need to get the hashes of the whole array in order to know, but we might ditch block hashes altogether.

The Pulse more closely resembles a blockset group, and can hold any data structure, as this lower level flattened structure is irrelevant of how things are referenced within the Pulse.

This array might actually be a merkle tree of some kind to allow sparse fetching. Or we might chunk it, where up to a certain size, we make merkle tree chunks out of it, and store what indexes start this chunk, which might be no indexes if it is completely spanned.  If these boundaries were configurable then we could sit inside S3 boundaries perfectly, to optimize recovery from an S3 type storage.

Diffing between two pulses can be done by walking the lineage and taking a diff each pulse set.  This takes advantage of the server having the complete pulse history.  It might be an attack to request long diffs, and in some cases it might refuse to fulfill as the history is too long, so please do a full download.

Grab the lineage tree, which should be readily available.  Walk the current pulse and send down anything that is referenced which shows up in the requested range.  Skip anything that is not in range.  This will be faster than walking the pulses and diffing the blocksets at each step, especially if there is a lot of churn.

Could make signatures be independent of content, so the signature chain does not cause recalculation of the content at all - the content is a separate set of branches to the content, which can also have branches.

Periodically a 'fluffing' could be done to snip the tail on the longest pulse required to rebuild current.  If the current pulse is within some size bound, then we can fill it up by pulling forwards the oldest pulses, to reduce how far back we have to store data.  Can also take into account how much fluffing has occured in the previous N blocks, to get some tunable amount that ensure our histories are always short.  Can favour fluffing forwards dusty Pulses, so that historical pulses with large datasets remain untouched, but we remove the need to ever call up many small ones.

Can be tuned to fit some chunk size, so we always aim to fill up a chunk, so we can take up a full 4K sector on disk, for example.

## Coming complete circle
If our model is shunted one level, and so IPLD Blocks become Pulses, then all of bitswap applies.
This can significantly reduce the amount of hashing we do while keeping the same amount of deduplication.  All that is required is a different type of `.crush()` and a custom encoder.  Reference between Pulses include the Pulse hash, and the index in the data array.

HAMTs can be translated to this same format, but might need to stay as Block level items.  Making a wrapper around IAMAP might be better at this new custom level, rather than persisting with js-ipld-hashmap.  Walking a HAMT would instantly give blocks of prior Pulses.  The walk can have a special lite mode were we avoid 

Fundamentally, the time to transmit binary data tuned out to be nearly undetectable compared to the time of unhashing