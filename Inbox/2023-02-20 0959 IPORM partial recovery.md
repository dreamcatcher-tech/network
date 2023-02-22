
>[!tip] Created: [2023-02-20 Mon 09:59]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes we want to peak at an object without recoving the whole thing.  IPORM should support just getting a path with `peek( path )` to just recover that particular key, which may or may not be a decorated class.

IPORM should automatically put a bunch of children at the root of a deeply nested object, so that fetching the full object is instant, or so that peeking at a nested path is instant too.