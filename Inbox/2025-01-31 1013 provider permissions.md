
>[!tip] Created: [2025-01-31 Fri 10:13]

>[!question] Targets: 

>[!danger] Depends: 

So if we do the permissions check before entering the provider instance, then the provider instance can assume that each request can be legitimately carried out.

blob store has no safety checks and just does what its told, but it might be restricted to only certain regexes for paths, and certain entropy in keys.

Permission checks would be that the did belongs to the requester, and then can that did have access to the repo it wants, or is it allowed to do the repo operations it wants to do, like clone or delete.