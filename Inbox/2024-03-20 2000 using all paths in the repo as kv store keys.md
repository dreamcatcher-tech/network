
>[!tip] Created: [2024-03-20 Wed 19:59]

>[!question] Targets: 

>[!danger] Depends: 

So take the refs directory and make that into a kv entry for each entry there.
HEAD would be irrelevant.
Each filesystem path would be a dedicated piece of the kv store.


How to handle directory updates ?
This would simply do a list function on all the keys that started with the same value.

At times, we would need to trigger an inram mode, so that some disk operations can occur without incuring db writes, like writing new files to disk so they can be read in during the commit process.

Could either remake lightingfs, or tap memfs.
So then active branches is just reading the directory.

compressing objects should only be done when the compressed index is under 4kb, else might be better to keep separate ?
Or, put the index in s3 too, and put a marker in the kv store that defers out to s3.
dir listings need to be stored separately in the kv store too, so seeking can be handled.

