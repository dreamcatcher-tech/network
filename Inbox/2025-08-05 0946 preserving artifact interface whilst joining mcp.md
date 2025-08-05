
>[!tip] Created: [2025-08-05 Tue 09:46]

>[!question] Targets: 

>[!danger] Depends: 

to allow artifact to be invoked directly, without mcp is still valuable ?

this should be a layer below, which is the direct invocation layer.

if we make the server actually occur within the client, then the server translates to actions that hit the remote chain, that might avoid much of the comms overhead, and make it be purely artifact protocol ?

a fully external client that wants to connect to a napp would need some kind of pathing info to say what the real mcp server should mimick / switch too.

This allows an external mcp client to connect to any repo with any napp loaded using regular mcp methods.

if a server was told to load a napp, then it would pull in the schemas, and the implementations would be lazy loaded.

change the stream tool call type to first return a path to a resource to watch for the stream, and then pull down the stream from that ?

the key is to change the napp package format to be some that an mcp server can load up.
then we present an mcp server that can load a napp, tied to a specific scope.

This might use the artifact interface we have supplied to BE the server.

the artifact object becomes an mcp server.

name of the mcp server is the napp name.

stream needs to change, to mean that it will return a jobid / stream id thing, and then you can pull that in out of band if you want this decorative information ?

basically the tool call gives you a stream id, rather than sending the stream data back directly.
so if the schema mentions s

or we shift the protocol to have a concept of notifications ?

artifact with raw file manipulation is simple bonded to a the provider napp.

so the base transport is very simple in that it just offers access to napps and things.
the base might be stateful, so you can switch out which tools are loaded, like a proxy wrapper.
This dynamic mcp server is how we present deep things like a single thing.

read the stream from the mcp server as a resource with a non advertized id.
Anyone with the id and access to the server can read the stream, and multiple parties can read it, with the same result.

files can be exposed as resources, so they can be downloaded in bulk, and use web cache on those calls.  Or the download might be for blobs, and so you download by blob from the web, which caches the request on the client browser.  Muich easier than managing the cache ourselves.