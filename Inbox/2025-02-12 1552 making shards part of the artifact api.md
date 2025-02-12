
>[!tip] Created: [2025-02-12 Wed 15:52]

>[!question] Targets: 

>[!danger] Depends: 

Present the exact same interface as files, but used for shards.

Under the hood, we can do a check to ensure that nobody tries to use shards on a directory that isn't tagged for shards, and vice versa.

shard params could be dynamic based on the size of files in a directory, and we just make new dirs nesting things down when it gets a bit big.

shards would only be done on a per directory basis.  Only the last part of the filename is sharded

```ts
artifact.shards.read('some/nested/path.txt')
```

You could still read the sharded files directly, but shards are a convenience method on top for you.