
>[!tip] Created: [2024-10-08 Tue 20:06]

>[!question] Targets: 

>[!danger] Depends: 

If we could make a large repo that kept a snapshot of all the published napps then made it easy to pick them up and run them very quickly.

So like jsr as a registry, but instead, it is compartmentalized little isolates that can run in deno deploy.

Because it is immutable, it should be readily available to anything that wants to run it.

But deploy is not quite built this way, so we would have to make something on lambda or something that allows true dynamic imports.

Or just make a packaging function that makes a static import map out of the library and stores it in the cache.