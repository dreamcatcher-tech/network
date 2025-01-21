
>[!tip] Created: [2024-12-19 Thu 13:13]

>[!question] Targets: 

>[!danger] Depends: 

Could start with kv, since that is easy, even tho expensive.
Then move over to b2 for objects, kv just for coherence.

Offer an LFS style thing for very large files that uses different checksum to the LFS system.

So this means very large files can be uploaded to b2 directly, rather than going thru deno, and they aren't strictly part of git, but are hash linked in there.