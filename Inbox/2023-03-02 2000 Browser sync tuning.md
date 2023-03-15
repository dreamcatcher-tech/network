
>[!tip] Created: [2023-03-02 Thu 20:00]

>[!question] Targets: 

>[!danger] Depends: 


## Options
Diffing for subsequent pulses in the chain 
Do not hash or store lifted blocks until the blocks are actually requested from the cache
Make lift use whatever is on the disk too
useWorker to run the engine in its own web worker
Send down with children, since going to ask for those anyway.
Send a pulse with a diff, so subsequent lifts are quick
Use bitswap directly if we find we have part of the tree already
Send raw blocks with no CAR, where length encoding is the blocks themselves.
Make a lite version of a channel, avoiding all the small blocks assosciated with it.
Load the customers sooner - should be able to say how many customers we have before fetching each one by using the alias size
Defer block hashing, so we can load faster
Make the blocks smaller by using schema hashing with ipld schema.
Make in browser plain js models of the resulting data, and cache that, so rapid load next time
Use the browser storage so the next loads are much quicker
Resolver as syncer aware - know when asking for a child, so as to await the initial sync
Use hamt .cids() as a way to walk hamts ?
Defer the hashing to present data sooner, but block all writing until hash and sig are verified
Send a lite version of the pulse that omits some blocks for speed
Use a blockcache repo shared by all tabs, but each engine is different - maybe cache only remote mounts

## Done
Change the blockwidth and bucket size params to reduce the size and depth of the hamt
Throttle crisp creation to reduce react render load.
Use the blockcache in case things are asked for again
Skip bake skippable items in the pulse using a litepulse

## Favourites
Stream blocks down using length encoding continuously and interleaved.
Import into the blockcache, checking cache first.
Stream down with children too, so we don't have to ask.
Delay resolver block fetches until the pulselift has completed AND written to repo.

## Importing the CAR faster
10k customers takes about 30s to create the CAR on the server side.  This seems to be the majority of the delay.  
If the blocks were walked directly, then a cached up pulse would be very fast to produce - car creation is tiny.
The customers should be able to populate with a partial hamt having landed

## Producing the CAR faster
Should be faster than doing uncrush.  Should be able to walk the objects and fetch the blocks directly.

## Resolver as syncer aware
When streaming the blocks, they should all form a pulse fully, in order.  If they don't, we can terminate the connection if we are receiving blocks that don't form a tree or are not what we asked for or don't pass the hash test.  Perform the hash afterwards, and always before doing any blockchain writing.  Flag to the user that hash checking has not completed yet.

## Streaming blocks directly
This means that multiple pull requests can be fulfilled simultaneously as the block streams can mux.
Check that each received block fulfills a previously waiting pull request.
Wait for all blocks in a request to write to repo before switching to bitswap.

## Mode switching
When an engine realizes that it doesn't have anything for a remote chain that it wants, it will use pulselift with full children to get everything it needs.  This is not good for distribution as that node becomes a central failure point.

Then when it already has something that it deems not too stale, it uses bitswap, as this will make the best reuse of data.

Later, it will ask for pulselift with a prior pulse provided, indicating that it only wants the diffs.  This requires a high powered peer to comply with this.  The fallback is bitswap where it dribbles in.

[[2023-03-03 1321 bitswap plus]] can replace this fully - in a CAS it seems unlikely that a node would have a deep block in a DAG but be missing a parent, so when asking for a parent, very likely that we want the children next.  Bitswap plus would make no distinction between initial load and any other load.

## Workbench
Make a large chain with simple children, then see what operations take all the time.

## Future
Sync requests can specify some template or pattern to exclude some items if we know ahead of time.

## Misc

## Bench
Testing of the customers pulse.  Baseline with 11,212 customers: 
walked 14,642 blocks in 26126 ms car is 6,577,817b took 26,199 ms blocks took 26,142 ms

isBakeSkippable removed
walked 13574 blocks in 19326 ms car is 5,894,738 took 19381 ms blocks took 19335 ms

blockCache used so when loading from disk it is cached for later.
first load:
walked 13574 blocks in 4178 ms car is 5894738 took 4235 ms blocks took 4186 ms
second load:
walked 13574 blocks in 1538 ms car is 5894738 took 1584 ms blocks took 1538 ms

bitWidth: 5 and bucketSize: 3 baseline based on ipld-hashmap defaults, 10k customers
walked 12307 blocks in 4082 ms car is 5270706 took 4128 ms blocks took 4086 ms
walked 12307 blocks in 1321 ms car is 5270706 took 1363 ms blocks took 1322 ms

bitWidth: 4 and bucketSize: 8 based on tuning, 10k customers
walked 10755 blocks in 3883 ms car is 5126013 took 3930 ms blocks took 3896 ms
walked 10755 blocks in 1286 ms car is 5126013 took 1323 ms blocks took 1286 ms

streaming blocks immediately, removed bitswap, 10k customers, cold then refresh
lift completed in 27,338ms for 61,855 blocks with 14,945,628 bytes and 2,226,780 hashes size
lift completed in 4,303ms for 61,855 blocks with 14,945,628 bytes and 2,226,780 hashes size

object cache, per pulse walk, cid tree walk vs uncrush, 20k customers, no devtools, cold + refresh
lift completed in 51,681ms for 123,391 blocks with 29.8 MB bytes and 4.44 MB hashes size
lift completed in 2,944ms for 123,390 blocks with 29.8 MB bytes and 4.44 MB hashes size
Browser page load: 34seconds.  So basically same time for cold, 4x speed for warm, browser quarter speed to load.  Browser appears to not lock the thread during load.