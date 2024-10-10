
>[!tip] Created: [2024-10-10 Thu 21:05]

>[!question] Targets: 

>[!danger] Depends: 

due to the cost of processing 1TB thru deno deploy, uploading direct to b2 and then storing the hash of the file in deno is best.

So upload directly in b2, get the hash of it, store that into git.

Or use custom markers that store these files like torrent files that include some permissions or something.

Then we can start using the object by clients connecting directly to it.  Deploy instances on the same host can achieve near instant copy.