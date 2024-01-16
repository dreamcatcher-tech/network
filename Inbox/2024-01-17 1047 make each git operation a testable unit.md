
>[!tip] Created: [2024-01-17 Wed 10:47]

>[!question] Targets: 

>[!danger] Depends: 

The act of spawn and merge should be isolated and tested thoroughly, rather than trying to run them while they are executing.



The commits should output a commit counter, so we can hook a certain commit counter, and store a snapshot at that point.  Then when we restart, if the snapshot exists, we just jump straight to there and start running.

```js
const artifact = Artifact.boot({ snapshot: 4 })
```

This will cause it to boot up, look for a snapshot for commit 4, and if present start the operation from this point.