
>[!tip] Created: [2025-08-09 Sat 18:50]

>[!question] Targets: 

>[!danger] Depends: 

If we provide private urls that are hashes, and have a repo path as well, then if you can read the link, you can download it.

it might contain the worker id, and the hash of the resource.

If the worker crashes, the tool would get retried which would have a new worker id that everyone would have to refetch.

Concurrent validators would have different worker ids.

The worker id might be included in the chain, and so you could ask for this thing from any of the validators, so you had failover.

Then if the worker needs to verify auth, we could check if the requester was authorised to read a given repo, and if so, then the worker would allow access to the web resource, which could be anything at all.