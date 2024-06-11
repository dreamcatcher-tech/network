
>[!tip] Created: [2024-06-11 Tue 16:17]

>[!question] Targets: 

>[!danger] Depends: 

We can reduce the load on servers by storing git objects locally so the server just says what head hash is, and then browser can use its cache.

Also can maybe make an offline version, since much deno stuff might work just fine in the browser if we swapped out the storage interface, and made a little form of the kv queue.

Browser kv queue can use workers to be invoked.

If the fetching of the git objects was a url GET, then we can use the built in cache of the browser to get this info down.
Get could ask for diffs, or fulls.
The splice could be a request for full, or diff to a provided splice hash.
It should be cacheable, so that the server load is reduced.