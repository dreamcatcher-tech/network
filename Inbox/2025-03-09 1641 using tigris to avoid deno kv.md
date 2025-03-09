
>[!tip] Created: [2025-03-09 Sun 16:41]

>[!question] Targets: 

>[!danger] Depends: 

Tigris has conditions on objects, meaning that we can do check-and-set operations. So, we could do all the concurrency things that we do with Deno KV could be done with Tigris (everything probably except for event notifications). However, we could always just walk the commits to get this, so a watcher would just watch the latest variable whenever it gets updated and read back to the last one they knew and replay things 

Tigris has a very low latency small object mode, so that might actually make it better than Backblaze. Plus, it's got these global regions as well. Backblaze is all coming out of one region, but it's huge and it's cheap. Tigris is coming out of edge regions, and we might be able to ditch DenoKV. 

So the plan is to use Deno deploy and Backblaze to make sure that our consistency requirements are understood, and once we have this knowledge, then we can assess if we can move to Tigris. 

The benefits of Tigris are that the database becomes write-local and read-local, no matter which region you are in on the planet. Plus, we might get better pricing than using Deno KV. It might also be easier to provide the Tigris service as a hosted solution as well, or it might be easier to provide as a block-chained solution as well. 