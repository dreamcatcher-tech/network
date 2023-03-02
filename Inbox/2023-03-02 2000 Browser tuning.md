
>[!tip] Created: [2023-03-02 Thu 20:00]

>[!question] Targets: 

>[!danger] Depends: 


Throttle crisp creation to reduce react render load.
Use the blockcache in case things are asked for again
Skip block hashing ?
Send all children at the same time
Change the blockwidth and bucket size params to reduce the size and depth of the hamt
Avoid hash checks on the blocks
Make the blocks smaller by using schema hashing with ipld schema.

## Importing the CAR faster
10k customers takes about 30s to create the CAR on the server side.  This seems to be the majority of the delay.

## Producing the CAR faster
Should be faster than doing uncrush.

## Mode switching
When an engine realizes that it doesn't have anything for a remote chain that it wants, it will use pulselift with full children to get everything it needs.  This is not good for distribution.

Then when it already has something that it deems not too stale

Later, it will ask for pulselift with a prior pulse provided, indicating that it only wants the diffs.  This requires a high powered peer to comply with this.  The fallback is bitswap where it dribbles in.

## Workbench
Make a large chain with simple children, then see what operations take all the time.