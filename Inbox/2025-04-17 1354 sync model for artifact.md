
>[!tip] Created: [2025-04-17 Thu 13:54]

>[!question] Targets: 

>[!danger] Depends: 

model keeps suggesting flat mapping of files for some reason.
a map of maps with the immutablejs interface seems best, possibly fronted by proxies to make it seem like native js ?

Fact is that immutablejs is the only way to do high performance large models.

Liked that it suggested 2 verbs:
1. subscribe, where it is given a path to keep synced in the metadata
2. download, where it is given a metadata object

So if the metadata strobes in, where it updates in chunks, but the files stream in ?
Extend Meta with some sync status information, or provide a method to query if it is synced or not

```ts
const { tree, commit, subscribe } = useArtifact()
subscribe( '.', { recursive: 3 } )
```

It might be that there are distinct layers where we will have to accept some kind of translation. In the browser, simply because of the mechanics of React, we may have to translate from the Git style interface that is used on the server. Just like we had to translate from the Provider style interface at the backend to the Artifact style interface at the frontend, there is also a further translation to go into React mode.  It's almost like shifting between paradigms of computing.

? should the metadata sync be sparse too ? 
sync() would give back the result, but subscribe would cause it to come down in the full tree ?
context is appropriate since it is a global view and should be called from anywhere.

So start with a watch that watches the repo branch for commits.
Then when you want a specific file, you ask for the sync, and wait until it has fully synced.
read once is a subscribe, wait for the result to propogate to the state, then end the subscription.
getting binaries, due to their unknown size, should be async.  Tree depth is always kind of known, but binaries could be terabytes in size.

How to handle shards ?
Need a config to say what paths are sharded ?

? how to sync down the complete data as well, and stay synced ?
pass in an extractor function that does some conversion on the raw binary file, like to text, to json, then thru a schema.
That should not affect everyone, but the metadata is the same for all.
We just want back an object that has these transformed values, and holds it in sync.
Have a function `isSynced()` to know when a binary is stale or in progress of syncing.

When something is stale, it should still hold its last known value, but it needs to know that, from the parent, it was actually stale if the parent is stale, and so it can report its value by walking the top level tree down to itself.  The component needs to choose what to do - keep showing the old data, greyed out, or blank, and then when the new data arrives, insert it with a flash or something.

This model should also be able to run in the CLI (for example, or anywhere where we might have need to synchronize locally with what is remote). 