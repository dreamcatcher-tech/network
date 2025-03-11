
>[!tip] Created: [2025-03-09 Sun 16:41]

>[!question] Targets: 

>[!danger] Depends: 

Tigris has conditions on objects, meaning that we can do check-and-set operations. So, we could do all the concurrency things that we do with Deno KV could be done with Tigris (everything probably except for event notifications). However, we could always just walk the commits to get this, so a watcher would just watch the latest variable whenever it gets updated and read back to the last one they knew and replay things 

Tigris has a very low latency small object mode, so that might actually make it better than Backblaze. Plus, it's got these global regions as well. Backblaze is all coming out of one region, but it's huge and it's cheap. Tigris is coming out of edge regions, and we might be able to ditch DenoKV. 

So the plan is to use Deno deploy and Backblaze to make sure that our consistency requirements are understood, and once we have this knowledge, then we can assess if we can move to Tigris. 

The benefits of Tigris are that the database becomes write-local and read-local, no matter which region you are in on the planet. Plus, we might get better pricing than using Deno KV. It might also be easier to provide the Tigris service as a hosted solution as well, or it might be easier to provide as a block-chained solution as well. 

Using Tigris to provide simulated streaming. What it's possible for us to do is we could write out small chunks of a streamed-in response during a job into Tigris objects, provided the overhead wasn't too high. Then the recipient can't just be watching or listening for these rather than some complicated internal networking setup that we may have to run.

However, in order to support real-time calling and videos, we do actually have to make a direct network connection. This optimization may be either short-lived or pointless. If we can allow the witness to connect directly to the executor job using this low-latency system and some kind of DNS or discovery registry, so that it can find which node is running its particular job.

We can use the date modified to list any job objects that are olders than a certain amount.  This means the query cost is low, but we can pick things up with very small delay, like 500ms delay type of thing.  The principle is that everything is realtime and live but we have a retry mechanism that might introduce a small delay when triggered, but this is the guarantee.

Commits are used to ensure a batch of jobs in order and followed exactly.

we might need to exercise the check and set by running a container in different regions and then running a large number of check and set queries where we expect there surely must be some kind of overlap or falseness or collision. And then we can make sure that we're getting the consistent behavior by flooding a system with resources that would surely have tested the limits of the consistency mechanism. 