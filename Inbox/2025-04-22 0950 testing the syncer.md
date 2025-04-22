
>[!tip] Created: [2025-04-22 Tue 09:50]

>[!question] Targets: 

>[!danger] Depends: 

sharding is still an issue.

It should only use sharding at the very last part of the path.

Or, the artifact checker should know if it is a sharded path or not, and fallback ?

we could sniff shards, so we would know ?  It is highly unlikely that a path that contains a sharded version that successfully matches to the path we want isn't a shard.

Maybe shard detection should be on all the time, and it just sniffs for things ?

If you give it a path, it will first try see if the directory is sharded ?