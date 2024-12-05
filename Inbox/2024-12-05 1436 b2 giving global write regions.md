
>[!tip] Created: [2024-12-05 Thu 14:36]

>[!question] Targets: 

>[!danger] Depends: 

If b2 was used for all git object storage, then it might be that write and read latency is reduced, since they have better edge support over deno kv ?

If we wrote things in pack files only, then each flurry of activity would be a single object put ?

b2 can be replicated to cloudflare, so the write regions are single datacenter, but the reads can be very quick and global.

If the git objects were stored in b2, this might work out better, faster maybe.

Deno KV is only required for shockwave, then - the way of coordinating all the processes.