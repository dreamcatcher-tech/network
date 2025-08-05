
>[!tip] Created: [2025-08-05 Tue 09:46]

>[!question] Targets: 

>[!danger] Depends: 

to allow artifact to be invoked directly, without mcp is still valuable ?

this should be a layer below, which is the direct invocation layer.

if we make the server actually occur within the client, then the server translates to actions that hit the remote chain, that might avoid much of the comms overhead, and make it be purely artifact protocol ?

a fully external client that wants to connect to a napp would need some kind of pathing info to say what the real mcp server should mimick / switch too.

This allows an external mcp client to connect to any repo with any napp loaded using regular mcp methods.

if a server was told to load a napp, then it would pull in the schemas, and the implementations would be lazy loaded.

