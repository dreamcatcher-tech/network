
>[!tip] Created: [2023-03-02 Thu 20:00]

>[!question] Targets: 

>[!danger] Depends: 


## Options
Load the customers sooner - should be able to say how many customers we have before fetching each one
Change the blockwidth and bucket size params to reduce the size and depth of the hamt
Make a lite version of pulses that can be fetched for the children
Cache the CAR so initial load without changed customers is quick
Reuse the CAR so that only small amounts are changed for a new pulse
Use the blockcache in case things are asked for again
Skip block hashing until later, so we can load faster
Send all children at the same time
Avoid hash checks on the blocks
Make the blocks smaller by using schema hashing with ipld schema.
Make in browser plain js models of the resulting data, and cache that, so rapid load next time
Use the browser storage so the next loads are much quicker
Stream the car and all the children so absolutely as fast as it can be
Open a dedicated channel for the initial sync only, which will send down all the children as well
Send raw blocks with no CAR, where length encoding is the blocks themselves.
Changing the block format to be thicker - favouring large blocks
Resolver as syncer aware - know when asking for a child, so as to await the initial sync

## Done
Throttle crisp creation to reduce react render load.

## Favourites
If the car file was streamed, was breadth first, and was rapid to produce, this should solve the problem.

## Importing the CAR faster
10k customers takes about 30s to create the CAR on the server side.  This seems to be the majority of the delay.

## Producing the CAR faster
Should be faster than doing uncrush.

## Resolver as syncer aware
When streaming the blocks, they should all form a pulse fully, in order.  If they don't, we can terminate the connection if we are receiving blocks that don't form a tree or are not what we asked for or don't pass the hash test.  Perform the hash afterwards, and always before doing any blockchain writing.  Flag to the user that hash checking has not completed yet.

## Mode switching
When an engine realizes that it doesn't have anything for a remote chain that it wants, it will use pulselift with full children to get everything it needs.  This is not good for distribution.

Then when it already has something that it deems not too stale, it uses bitswap, as this will make the best reuse of data.

Later, it will ask for pulselift with a prior pulse provided, indicating that it only wants the diffs.  This requires a high powered peer to comply with this.  The fallback is bitswap where it dribbles in.

## Workbench
Make a large chain with simple children, then see what operations take all the time.

## Future
Sync requests can specify some template or pattern to exclude some items if we know ahead of time.

## Misc