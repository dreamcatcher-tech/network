
>[!tip] Created: [2023-02-21 Tue 14:48]

>[!question] Targets: 

>[!danger] Depends: 

Nested data structures cause many round trips to inflate.  A Pulse should know all the diffs it had, and should preload them in its root.  So then a link walker can see this and instantly know how to fetch all the diffs this pulse contains in a single bitswap request.

To avoid wasting space by repeating the CIDs, make an array of pulses, then refer to the hashes inside the nested paths by integer mapping to the root.  Means the space is never wasted, even for large numbers of changes.

HAMTs should include their diffs.

Do the same as crush, where the diffs roll up to the top.

Then once all diffs have been numbered, roll back down and swap out the CIDs ?

? does the syncer move on thru partial pulses ?
The Syncer should drill straight into the network first, doing depth first, so that CIDs can be fetched as early as possible.

## V0
Preload just the main parts of the pulse that already have getters at the root:
1. Network
2. Timestamp
3. State ???
4. pending
5. DMZ

V1 can use a `preload` key, which holds an array of CIDs that are going to be used.  Then use the full CIDs in the nested paths too, and trade the space wastage for the time gain.

V2 can let the resolver take either a CID or an integer, to build up the mapping again.