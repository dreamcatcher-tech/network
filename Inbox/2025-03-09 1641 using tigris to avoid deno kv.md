
>[!tip] Created: [2025-03-09 Sun 16:41]

>[!question] Targets: 

>[!danger] Depends: 

Tigris has conditions on objects, meaning that we can do check-and-set operations. So, we could do all the concurrency things that we do with Deno KV could be done with Tigris (everything probably except for event notifications). However, we could always just walk the commits to get this, so a watcher would just watch the latest variable whenever it gets updated and read back to the last one they knew and replay things 

Tigris has a very low latency small object mode, so that might actually make it better than Backblaze. Plus, it's got these global regions as well. Backblaze is all coming out of one region, but it's huge and it's cheap. Tigris is coming out of edge regions, and we might be able to ditch DenoKV. 