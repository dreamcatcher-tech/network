
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

this server would keep tracking the latest commit of the repo that it was set up to work with.
it could be configured to subscribe to changes.

the latest commit could be a resource, and it could subscribe to that resource to get triggered each time it changes.

when subscribing to something, we can get back a notification, and we just dedupe the requestIds so we know what it is about ?

streams could be notifications being send from the server down.
but this makes it hard for a group to subscribe to a chat stream.
? are notifications guaranteed to be in order ?

sse stream reading could supply the last event we saw, making it resumable ?
doesn't matter in chain land, since that is fundamentally reliable.

notifications could be different to streamed results ? but we would want to wrap them ?
being internal to the tool calling means that they aren't able to be shared to other callers, but often they don't need to be.
Also means the tool call stays open, which can be problematic.
Streaming is nicer if it uses a separate mechanism.
We mostly use it for notifications - we don't often use it within tools themselves ?
but we could ?
might also use the in band notification system ?
that seems harder to chain up, since it tangles up what happens.
but a separate structure that was for repeatable streams, this seems easily repeatable.

should be able to make an mcp server and not change any data about the remote chain - we only need to make a call, and then that will change the state of the remote chain.  Or engage a watch method, or something like that.
The tools list might change due to permissions.
permissions should be exposed as a resource.

mcp becomes the interface layer over the top.

to get building:
1. ignore streaming for now, as we can add this in later
2. ignore changing tools until we get any tools working.

how does interchain comms work ?
the running napp would act as the application host, and it would create an mcp client, that would talk to the remote.

Maybe artifact interface is what is used to provision the servers ?
seems weird to make a separate system for preping the mcp client.
Allow making mcp servers that blend multiple napps together ? you need to supply a namespace for each one or use the napp name.

these are virtual mcp servers, and there is only one on the outside which is the direct mcp server.
we can wrap this one to provide a dynamic stateful one that presents anything inside it as tho it was itself.

constructing a new mcp server requires passing in the one you already have ?
its just an mcp function that takes in some kind of basic mcp server ?
all vmcp's would have restricted access to their transmitting mcp - the one they are tunnelling thru.

artifact the platform is the host that can run virtual mcp servers.
napps are the package format for mcp servers.
repos are the filesystem that mcp servers are mounted on.
filesystems can be turned into napps, and therefore can become executable.

so the container becomes the true mcp server ?
hostscope is the mcp host, or the bottom mcp server - the hypervisor ?

calling useArtifact() inside a napp should give you a bag of common mcp servers.
we can put a wrapper around the mcp client, so it looks like calling artifact directly, as tho someone called bind on it.
providing nicely bound functions seems a nicer way to present, rather than requiring the verbose toolCall thing.

files write is a funny one - diesn't exist as a function, but manipultes state client side before pushing.  So this is an example of an mpc server that has been modified to have some client side code that does something and keeps that latency low.

wrapper round the outside can be the thing that makes the mcp server nice to use ?
wrap it to form a proxy that gets fulfilled with its schema, and if the schema 

tools would be the wrapped tool functions of the mcp client.
artifact the object can be a wrapped collection of mcp client servers.

each napp function gets a context available function or an extra arg function that allows it to create mcp client connections:

```ts
const artifact = useArtifact()
const mcp1 = await artifact.createMcp( scope, napp1, napp2 )
const mcp2 = await mcp1.createMcp( scope, napp3 )
const mcp3 = await mcp2.createDynamicMcp( scope ) // allows dynamic scope and tools
await mcp3.callTool( napp4 ) // calls the 'load' tool which switches the tools
```

now you have an mcp client that is 'bound' to the remote valid scope.

so we might not need to mcp everything, and can start by just mcp'ing some parts of the system ? like start with the existing artifact functions ?
The base mcp instance is scoped to the host, and the napps it uses are the provider napps.
Just error if there is a tool nameclash between napps ? or, prefix all tool names with the napp name.

but is it just the transport that is special each time ?
so artifact would be a bag of mcp servers that were bound to different napps ?

or artifact might be a preconnected mcp client, with some special functions to create new clients.

tools are always flat in mcp, so nesting either should not be done, or should be done by flattening.

what if we didn't expose the mcp client directly, but just the functions ? like on a tools key ?
We could do this with a wrapper utility function, or just add the tools key.
Seems inevitable that we need to wrap the mcp client ?  unless we

so to make the base artifact thing that a napp gets given, we make each provider be an mcp server connection, tunneling thru the base mcp server.
Then we take all the clients that this produces, and we wrap them to present the base artifact item.

the base mcp might be a schema driven thing that just relays ?

its ok to wrap the mcp clients with extra software, but not if they were going to be tool calls ?
so how to handle file edit tool calls followed by a commit ? is this just buffered up in the remote server ?

writing files would send them to the remote server using tool calls, and then it would call commit on this files.  So the remote server would be holding the state of the whole thing.

should the staging area be local or remote ? 
local makes it easy, but remote is more pure, since otherwise we end up wrapping things all over the show - wrapped clients cannot be easily controlled by models - the models can't easily provision themselves tools and also be aware of the client side wrapping.

So basically we need to move the artifact.files.write stuff over to be at the end of a tool.
This means they would become async.

the server would expose the staging area as one of its resources ?
it could expose prior commits via a commits resource.
the file manipulation section, including branch.write, should be made one napp.  This is the napp you get when you get granded file access.  It is a separate napp when you are granted write access.

## V1
may have some system tool calls that can switch out what tools, or what mcp server the client is connected to - these functions would be tool calls that affect the client, and trigger client side actions, like connecting to a new server.

the mutable fs would be held server side.
checkout becomes async, where we check that the other side is available, and we have appropriate permissions.  No changes are made to this side.

So the server is a facade, and it runs on the client, and it uses artifact actions under the hood, so mcp is a wrapper around the base protocol.  We shift the protocol to fit mcp succinctly.

add a staging area to each repo where you can use this temporary storage ?

for now, if you destroy the mcp server, then you destroy the staging area ?
staging area has to be server side, since the napp tools may run against it, and need the staged data.  staging is in the compute thread, which is server side, but private to the mcp server.  So the mcp server occupies ram whilst it is doing stuff.

swapping out the tool napp
running multiple napps

so the artifact mcp is a collection of clients, designed to be driven by a software program, not an llm ?
it could be flattened to a large number of tool calls.
one of the key functions is the ability to make a new mcp server, which would swap out the client for something else.

have a range of system functions that can interact with the client using tool calls.
mcp server can hook on the remote chain, so it is updated, or so it fetches the latest view when requested.

So the root mcp server has just a single function, or simple set of functions, that is intended to be used by the nested mcp servers ?
the root server functions are what is genuinely being called each time.
those root tool calls are really just dispatch calls ?

is there also the notion of relaying thru other servers, if they expose the relay tool ? so you could bounce off different servers if you needed to.


## entry tools on the root mcp
search napps (resource listing)
list repos (resource listing)
getSubstrateScope - what is the scope used to talk to the artifact substrate
getSelfScope - what is the scope of myself
dispatch( scope, action )
sbuscribe( scope ) - this is using mcp, but could be done using a tool call that tucks in the mcp commands into something the llm can use.  So providing the mcp client functions as tool calls in as well as the tool calls from the server.


so client side, when created, is making a scope bound client, which is what the artifact object did anyway.

### notes
but llms don't handle resources, like the llm cannot use the resource functions as a tool call, unless we make some wrappers to make resource interaction part of the tool set, in which case we might as well have just done a tool call anyway ?

resources are good for browsing and compatibility, but not strictly necessary for LLM control.

we could make it so if you did not include a scope, then you are targetting the substrate / host.  otherwise you are targetting something specific.  
We could just attach this well known scope as the default ?

when we talk to the substrate, we are always talking about a particular scope.
so dispatch would be just telling the host that we want it to execute this particular tool call on this particular scope.  This is the means of tunneling

So actions should be renamed as tool calls.

So for us, we might make a new instance of the server for every client, so the transports don't actually matter, since we can make the server alter based on what the client asks ?

make a dxt file that can be installed on claude desktop, which connects to the base mcp server, then can use that to modify what tools will be used ?  Can somehow drive claude to connect to new mcp servers based on that core server.

would we be making a transport that tunnels thru the base mcp server ? so the transport needs some special functions opened up on the mcp server so it can send its protocol messages thru ?