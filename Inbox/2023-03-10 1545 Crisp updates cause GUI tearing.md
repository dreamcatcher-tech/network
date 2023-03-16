
>[!tip] Created: [2023-03-10 Fri 15:45]

>[!question] Targets: 

>[!danger] Depends: 

If the lift is slow to come down for the next root pulse, then the GUI redraws with a pulse that has no children.

If we have no completed pulse, then just draw the last full pulse ?  But this doesn't work if we still haven't loaded everything, since must be able to operate while the crisp is loading.

Crisp updates are always from the top down - never sidways - so there is never any need to update a crisp sideways - as the crisp is walked from top down, can switch out to a previous version.

Could cause the next crisp to never be pushed out unless the complete tree has been baked ?
If we have nothing, then release the crisp progressively, else release only completed updates.

Want a graceful update, where if we are uncertain, the crisp acts like the last crisp, but if we are certain, then it acts definitely.

Once it is deep loaded, it deletes the link to prior crisps, freeing up the memory.

Block tearing of the syncer, so it always moves forwards without getting torn pulses.
But would this be too slow to keep up ?
Could we skip ahead ?
Could prior be the current deepest synced thing ?
Is the diff we are asking for using a version we have not fully synced down yet ?
Partially baked blocks seem to be responsible for tearing.
They become prior, and have no baked children, so we end up redoing the sync work.


## Are pulses with maps being lost ?
Should the maps of hamts and the pulselink baking be separated out ?
Object cache should keep the pulses the same.
But with rapid pulses, we might end up with prior as
So use the crisp itself as the cache ?
Set the caches as a mutable map, which gets snapshotted when the crisp is viewed.
We can update the cache
The cache is only relevant to the current crisp ? No - it is central and stored by the syncer.

So the syncer holds a cache that is used to look up pulses, and their maps of aliases and children.
The cache gets updated
? is there a chance to put priority in somehow using this cache ? or is that solely in the walker.

? how can we measure the RTT of an action in the browser on a large customer list ?
Make a tester component, with a button and a timer writing stats.

? Should the syncer be path aware ?
Currently it is only pulse aware, which can lead to tears.
The caches could be carried forward with prior, so even torn bakes use a string of caches.
Prior is just a cache key used to look up the latest map.
At first, the map is blindly set to the prior map, so the latest work is always carried forwards.
Then, as the diffing proceeds, items are removed from the map and added to the map.
Each pulse gets fully walked, then compared to the map.  A full walk shouldn't take more than 2 seconds to complete, and should be very yielding.

So basically abandon using pulses as diffs, since the walks may be incomplete.
Start walking the pulse completely, updating the prior map as we go, with additions and changed, whilst teeing off a copy of the complete set to do subtraction with.
Once the walk is complete, swap out the teed map with the current one.
If get restarted, then we always have the largest map with us, minus the subtractions.

1. Covenant cache mapping paths to pulseIds
2. Pulse cache mapping pulseIds to pulses, channels, and aliases
`const pulse = cache.getCovenant()`
`const { pulse, children } = cache.getPulse( pulseId )`

For each pulse, walk the internal cid tree looking for key bakeable items, which are:
1. pulselinks
2. hamts
3. covenant paths

## V1
Hook the cache so any updates to it result in yielding a new crisp
At the start of each pulsewalk, get the children from the cache for prior and store them under current.
If no prior, leave undefined.  
Resolve the current pulse, and update the cache to include this pulse.
Walk only the alias hamt, in full, and resolve to the channels. 
	Store a mapping of the aliases to pulse, where pulse may be undefined
	For each channel
		Store the alias mapping in the new childrens map.
		check if the rx.latest pulse exists in cache, if not:
			Grab the latest pulse from the prior pulse, if it exists, by using channelId NOT alias
			Check again that the cache is still empty, to avoid race
			Push this pair on to the walk queue.
			WalkQueue automatically pulls the cache forward from prior to latest, asserting not exist
				Push an entry for the latest pulseId into the alias map with all fields blank.
				Update the alias map for latest to that of prior, if present
			Update the child map in cache for the current pulseId to expand or update it
when the walk is complete, swap out the current children map for the new one
Walk is complete, check the walkQueue for more work


Maybe adding to children array as we go is not good ? Can present lists of children that do not exist.
If there is nothing, then add to the array as we go.
But if there is something, then we know it is a prior pulse, but it is
So if wait until have completed the walk, can swap over instantly.
But, could present changes to the GUI faster, so see how overflate goes.

Concurrency should be core, then reserve some capacity for requested things, so that customers can load in the portal faster.

Extras: add isChildrenLoading to know if we have a confirmed set of children or not.

Store the last pulse to reach full walk, so we can use diffing which should require less walking.
If the current children are only additions, if anything, since the last full walk, then we can use the last walk to speed things up a lot.

Should use the last pulse, if haven't resolved the current one yet, to stop the UI flickering.

Appears to be slow to get initial bake, since server is streaming down in not breadth first ?

So it doesn't actually matter that we have the prior pulse at all - all that matters is if we walked it or not, and if we did, then we can use that for diffing purposes.
So if we just store the lastFull pulse key, then we can 

## Speed ups
Present a last fully walked pulse, or first walked pulse, so we can use hamt diffs on it ?
Parallel pulse baking
Read ahead buffers in the network
Emit chilren onto the walk queue as soon as they are realized
Do not uncrush channels - specifically walk the CID block and navigate the links
Increase concurrency until the thread lags
Look up the rx.latest path directly from the block.value
Make decode leave the blocks hashed only, without inflating to json
Emit the results of diff gets so we can do these in parallel
parallelize server side streamWalk

## Problems
Server side takes too long
Server side order is different to client side

## Caching based on hamt blocks
Treat each block like a Map, then be able to do rapid diffing.
So if have two hamts, with no cache, can get the diff by walking last and building up a map for each block.  If the block appears in prior, then we stop the walk, but whilst it is different, keep walking. Unsure what advantage this gives ?

Be nice to have a hamt viewer so can compare trees and show the similarity between them both.

## Prioritizing to the viewport
Make a small class that is an async generator.  Push shoves into an array, and yields it immediately.  If the buffer is filling up, then check if the item is already in the queue, if so, push to the front.
OR can make a LIFO queue, and just rely on dedupe on the output.

## What is the latest Crisp ?
The crisp with the most data could be considered the latest ?
Or, every crisp is latest, by way of passthru of the prior crisp ?
So if each crisp had the last crisp, then if it is unresolved, it goes back.
Diffing for a new pulse should walk back to the last crisp that was resolved.
This would allow multiple new pulses to arrive, be un walked before the next one arrives, and yet we would still have something meaningful to compare with as the last crisp would tell us what pulse to use for diffing.

Use the crisp as the cache for the syncer, not the pulses.
Ignore path renames for now, since stable pathing is easy to use the crisps for.

## Two layers of syncing
Syncing the complex is one part, baking the complex is the other.
These two should be independent.

## Measurements
### hamt diffing compared with full walking
interblock:api:Syncer tearing bake for undefined in favour of PulseLink(ifoxurzcf) +0ms
interblock:api:Syncer slow read ahead buffer 5780ms for 38 units +6s
interblock:api:Syncer slow bake for PulseLink(ifoxurzcf) 5782ms +1ms
interblock:api:Syncer diff compare with null 156ms +1s {added: Set(20043), deleted: Set(0), modified: Set(0)}
interblock:api:Syncer slow read ahead buffer 55793ms for 20043 units +56s
interblock:api:Syncer slow bake for PulseLink(ifcfsqa36) 55950ms +1ms

Notice that sectors is very slow to read ahead, but everything else waited for that.
Diffing 20,043 customers took only 156ms, but read ahead took 55 seconds !
Making an edit:
interblock:api:Syncer slow read ahead buffer 14339ms for 20045 units +14s
where the sectors did not show at all, presumably cache was hit.
diffing was so fast as to not go above the 100ms threshold