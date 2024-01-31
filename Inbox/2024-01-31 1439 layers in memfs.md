
>[!tip] Created: [2024-01-31 Wed 14:39]

>[!question] Targets: 

>[!danger] Depends: 

Each processing branch is destined to rejoin its parent, so it doesn't need to store the full repo, just a layer.

Only after the initiating action has fully settled should github be contacted to attempt a sync.  At this point the PAT gets tested.

These would just be layers, and the layer itself would get persisted to the kv store, and passed around.  It should be tiny.

Then the kv itself can be just layers, where the parent makes a choice on when to compact the layers each time there is a merge.

Since we never need to go backwards, we can always do fresh checkouts with a relative depth after we have synced with github, so we keep our live data small.