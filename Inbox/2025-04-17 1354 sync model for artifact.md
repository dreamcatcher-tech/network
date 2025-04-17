
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

? should th