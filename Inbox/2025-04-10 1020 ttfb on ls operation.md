
>[!tip] Created: [2025-04-10 Thu 10:20]

>[!question] Targets: 

>[!danger] Depends: 

ls should be a streaming result ?
or make a new function, `find()` that will stream in results, like ls.

Then benchmark time to first byte for shards and not shards.

this might be the start of the mango query interface tho, since that seems more useful ?

then that interface is purely streaming.

find can execute commands on each result, and so it would be with mango queries.

but also we can pipeline things.  just like we can pipe things in unix.