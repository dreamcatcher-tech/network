
>[!tip] Created: [2025-08-13 Wed 15:54]

>[!question] Targets: 

>[!danger] Depends: 

startup time for napps can be a bit slow, so we probably want to make a storage system for it.

It would not need consensus at all, but would present as a shared disk that was the deno cache for all runners, and if new downloads were needed, this service would be the one to fetch them ?

If it was git based, this might be easier to manage ? where we periodically flush old things ?

We should detect warm up patterns when certain repos show activity, we know what packages to warm up.

Ideally, repos should store these locally, so they are pinned.  So the execution would snap them down, in a slice that was deduplicated across all, so no need to double fetch if hash the same.

on boot, we should start up a process to warm up the napps cache based on napps we already know about.  

Or we could do that as part of the deploy step, so those things are already present, hardcached.