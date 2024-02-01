
>[!tip] Created: [2024-02-02 Fri 10:21]

>[!question] Targets: 

>[!danger] Depends: 

This means we can implement the lightning fs module, but backed by kv, so we can avoid taking snapshots of the fs.

memfs would hold the transient state, and then git would use the kv store.
A lock would be used to ensure we were not corrupting the indexeddb.
But the superblock might permit us to have multiple views easily.

skip writing head and other info, since branch tracking would be done in memfs layer.