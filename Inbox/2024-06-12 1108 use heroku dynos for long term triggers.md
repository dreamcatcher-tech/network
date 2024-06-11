
>[!tip] Created: [2024-06-12 Wed 11:08]

>[!question] Targets: 

>[!danger] Depends: 

A single dyno could handle a huge number of triggers where browsers have connected and it is using triggers to wait for deno kv to change.

This can be used as the trigger service.
Browsers should connect with multiple trigger requests in a single connection, to avoid large numbres of connections.

Can save some db load perhaps.