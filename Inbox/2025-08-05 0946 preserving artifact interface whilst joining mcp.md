
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
subscribe( scope ) - this is using mcp, but could be done using a tool call that tucks in the mcp commands into something the llm can use.  So providing the mcp client functions as tool calls in as well as the tool calls from the server.


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

servers feel leaky in that they are really just napp calls being run on the filesystem ?  they don't have any exclusivity over the repo they ride upon.  their permanence is the repo branch they are set upon ?
Switching over to a new branch requires creating a new server ? or giving the server the tools to be able to be told to switch - meta tools, as it were.

an action is a tool call, so the containers receive tool calls.
is an mcp server then, a container ?
containers are bound by the napp base package, and the repo pubkey.
So they could switch branches, and that would leak isolation ? so writing to one given branch would leak across to another branch ?

make a function that takes in a napp and a scope, and produces an mcp server that is bound to that napp, which would dispatch into the container subsystem.

the server represents a container, would could also be effectful.
when a server is started, it is directly connected to a container, but the container might not have been created until an action actually comes in.

The container could hold all the transient state, like the streaming side channels for the chats and things.  The container could also be the thing that received subscription notifications, like if it was told to watch for new commits on its own chain ?
The container might be active as long as there is an mcp client attached to it ?
If that client was in another chain, then it might not be needed ?

Subscriptions are better as state changes.  If it is an external client, then we would keep the notification watchers transient, but if its in a napp, it would be state change based, since the state would have changed to even make the request, so we simply raise a flag which registers it with the host as something that needs to be notified.  the host of that chain will actively seek out the chain being watched and subscribe to updates.

The host of the other chain would be obliging and would register a subscriber in its live running state, or in a db or something.

The container might get torn down in between actions at any point.
The only state it has is entirely recreateable from the repo state.
during a tool call, the streaming of intermediary state is permitted.
So now the container id and the container host become relevant ?
To connect to it, this should be look upable in a live server somehow, using a ram table.
ram tables are great when if the server died the op would be useless too, so it has matching resilience for the job at hand.

We might have angled the actions wrong - to fork a branch, we require that the action come in enveloped to the host and scoped to the target, but what if it was instead just the target was given, and the napp knows that it needs to use system tooling to make it happen ?

We know which napps are system napps, and they would never get invoked by anyone else for any reason.  So target is wasted, since every action has to hit the host - it can't go anywhere else.

dispatch is actually tunnel.

?shouldn't the basic tools be the exact same tools that are on a client ?
- listTools

? how to lock the napp by version ?

maybe fiber management is mcp server management ? where each one is potentially an mcp server ?

so system permissions are segmented by the napps that you can call on - these napps contain all the functions of a particular permission class, and so access to be able to run that napp grants you that privilege.  system actions are hooked, and are processed by the system container.

actions always go to a fiber scope tho.  they never go to a branch directly - always to the execution system.  so a system action goes to which branch ? do they get hooked and intercepted ? are they collected under the system fiber of the repo ?  They should be linearized here since they can collide with each other ?

### post gpt-5

roots is what the client should set its current scope to.
tunnel would be sending the mcp protocol messages along.
mcpCreate would set up a new virtual server at a particular location by simply verifying that the napp loads and the repo is there and it has permissions.
Then the clients transport, if ok, attaches this info as the header to each request - which scope it wants, what the mcp message it wants is.


we replace our dispatch with call tool function that takes the json message from mcp as its payload.  Or we swap it out at the client side, and do an artifact call, and just rehydrate to the mcp client.

So the mcp server is a very thin fascade, since its protocols are really just about presenting an interface.

So that means that mcp is unsuitable as the underlying protocol of artifact, but that artifact the protocol is used to fulfill mcp requests by using a translator to emulate a server.  

How we fulfill the mcp interface is largely up to us.  We *could* use their exact message formats all the way thru, and just replace our own message formats, so that we have one less format hanging around ?  really makes no difference, since it's all just jsonrpc.

so resources are like reading from the repo to get state that has changed or is changing during a tool call.
tool calls are always in and out - request reply.
the repo is the statefulness of the mcp server - its where its long term and transient state is stored.

So the envelope internally is an mcp jsonrpc action that has a session id attached which represents really just the branch that the thing is working on ?
the scope / address in our system is just the session id in the mcp spec, since it represents different state.

dynamically switching the client tools is just read - no writing occurs.

a server that can switch tools would indicate this in its capabilities.

```ts
const scopedArtifact = useArtifact( scope )
```
This would create a vmcp using the root mcp server, which is the one that all the spawm functions ultimately come down to.  If you want to pass on the spawn capability, then it really is just passing thru a call to this root capability which is part of all clients that get created.  Spawn is what gets used to make the root thing, and should be attached to all the clients, possibly as a tool call.

If an LLM calls spawn, then it would become loaded with the tools ?  So an llm should call switch ?  switch and spawn for the LLM is different ?
Or a vmcp could be dynamic and the LLM or a helper of the LLM could call the reconfigure commands.

Can a given tool be switched between branches ?
We could make the tools open scope, or we could scope each tool to a different thing ? but in general, scope should be restricted to the same branch for each vmcp snapshot.

No, combining must be allowed, so napps need to be loaded and selected based on scopes.  the provision tool call would be provided here.

concept of a subsession - there is a root session, but then it can tunnel other sessions thru in a way that is just a passthru function, that would never be called by anything but a piece of software, so could remain off the tool list.  When this gets used to set up a new session, then this new session id is tracked in the root mcp server.  This covers outside looking in.

Inside a given napp, this session would be tracked by stored state, and would probably be orchestrated using the existing action systems of artifact.

Notifications is the way to handle streaming coming in, in chain.  Notifications can contain a request id that they refer to.

should the container itself actually BE an mcp server, and talk back as such ?

from the outside, could we make a new mcp server every time ? why go thru an existing one ?
on the inside, we would make a new one every time too.
We need to mux the connections, but maybe that can be handled by the web protocols ?
So we have a way of using pathing and queries to access any internal mcp using an external url.

the proc tree is just really the state of each individual container, even if the reified container gets destroyed due to resource pressure.  The proc tree is storing the state of the running mcp server.

testing the connection / establishing it, is really just talking to the host about if its there or not and what it has.  Then interactions are just regular chain actions.
sessionid at this point is self descriptive as the hash of the requesting action.
Talking to the system is a special system level mcp server.

Modifying repos is not actually talking to the system, it is talking to that repo at the system level ?
So it would be the repo mcp, which is its system, just liek the host is really just the host repo mcp.

This repo level is like the external server level, and it helps you open new hosts inside that repo, but it acts like a gateway.

The actions need to become mcp actions, so there is only one kind of action.  Streaming needs to be done using notifications.

Make a combo mcp server which can take a number of mcp server and combine then by picking and choosing, so the bot can reprogram itself on the fly for a better outcome, or to pass to another specialized model.

so external, it is just a new mcp server every time, just like how anyone would connect to a hosted napp in there.

internal is a special system hook that allows you to attempt to create a server to anywhere.
Each repo is a base mcp server with all the provider actions rescoped to support this.
So scope of provider functions is always present since they are in a particular mcp server which is scoped, like branch, files, etc - the mcp server is bound to the scope.  Just like how you had to create an artifact instance for each of the scope narrowments.

There is no mcp tunnelling.  This is not explainable to llms.

llms are being trained heavily on mcp like behaviours, so we need to fit in.

Rename napps to be mcppackage.

mutating mcp servers is the same as just creating a new one and switching - they have no state themselves, the repos hold the state.

a dynamic mcp server is one that can switch out what it is bound to by having multiple mcp servers inside it, each bound narrowly.  It could have a special tool call that creates new ones - that routes straight to the host.  This is the one updispatch to the host infrastructure.  It replaces dispatch, or even the use artifact thing, since the napps are specified.

So it can be configured to have tool calls to multiple different scopes.

That base function might just be a search function and a load function ? search for mcp servers, search for repos, then load ?  or load would be just start a new direct mcp server ?

connecting to the mcp web server should use query params to provide scope, and then list the napps it wants too, also allowed tools arrays too.

connecting to the mcp virtual server is what happens internally.

root host should be scoped to home repo, not no scope and just have functions in the host ?
setScope is definitely an exposable state.

So basically if you know the params of the server ahead of time, you can connect directly to it, otherwise you need to use the navigation tools.

set scope tool would switch what the default mcp server was targinetting as scope ? otherwise you have to include scope in every call, which seems a bit much to ask in the default case with a dumb cheap model.   Yes, web client defaults to actor home repo as bound scope against which all functions are called.

We need event diagrams for all the kinds of mcp operation that are required.
For each diagram, we need a code sketch of how this gets used.

a compound mcp server has multiple napps, some of which might be disabled, and might be across multiple scopes.  The facade is the same tho - the 'server' is actually running in the client when it is internal.  It is running in the web server when coming in from the outside.

crash recovery will matter with these kinds of servers ?  The client would just send up the config it wants to init with in the event of a resume if the server crashed.

if the base mcp server had command to search for mcpapps and it could dynamically install them, with restricted tool calls, and get info about them, plus could browse repos and use a tool call to list teh resources on the server, plus navigate around the repos by configuring up a napp to to give extended functions, then so long as it had a reset tool call, any kind of agent could ultimately get to anywhere on the system.

> If this was modelled like a cli, where the user can navigate the filesystem, switch branches, check history, run commands, install commands from packages, set their path - this is what using the core mcp is like.  We can set up shells, where a user comes in an has a specific mcp thing available to them, but we also allow this general navigable thing as well.  So use the general thing to produce restricted things that can be exposed so that bots don't get confused and so that permissions are honoured.  the restricted things are like chroots.

the cli metaphor is a good one, and we should be able to make a cli that only uses tool calls to navigate around the place, with some client side helpers like cwd and some other cosmetics.

so seems a bit weird to bond an mcp server to a particular scope - it should start with a default scope, but it should be able to move around fairly easily ?  But it could also be provisioned to not be able to do this.

We need to make the pattern where one bot is in charge of managing the tools being given to another bot, to help them solve functions - it is too much to ask for it to be done in band.

a repo with napps installed would not need you to specify napps as it would have some already, and it might have been permissioned to deny you using napps other that what it has installed, which may restrict usage to its exact versions, which might not be what you want but you have to accept it since the repo sets the rules of access.

so repos can grant lower grade mcp access / restricted access to some actors and some napps.

use pathing or query params to auto set the permissions of the root mcp server, depending on what you want, like rw, ro, executable, browseable, etc.
Or could set this with headers as config, perhaps.

the init from the client can include a config object, which can include scope, napps, allowed tools, rewrites and renames of tools.  It is in the format of a napp, or it can just name a napp, or none, or system ones.  Plus a repo.  If no repo, then defaults to home.

there's no such thing as mcp tunnel since this isn't something an LLM can understand.

All the state that the client changes of the server, like napps configuration etc, this can be stored on the client or streamed down as notifications, so that if the client needs to reconnect, it can pick up where it left off.

If the session info was ultimately stored as part of the actors home repo, then it can be resumed upon gateway crash, but also allows the storing of state, like what the current scope was set at.  Or we can just store that as part of the session state, so the mcp server purposfully intercepts some calls ?

To start with we can store in ram in the server session.  Otherwise client has to keep sending the full scope they want to target  ?  But would a machine care, really ?
So try just making the machine send the scope as args for now.

some stateful things, like subscriptions to things - in chainland these need to be cacnelled and managed and other such things.

? should we separate out did from the actions ?

the key is being able to make a dynamic mcp server that is connected to the root.
The only way to do this is to have the server intercept some tool calls, as the calls are for the mcp server itself.  This can be done in ram, but ultimately would be done on the actors home chain.  If the home chain always holds the session, then

Means that one actor one did - want a new actor, need a new did.
A given actor can always assume another actors identity, but the auth for that user stays as the original connection.

So the sessions are part of the users home repo, but for now they just sit in ram.

fat clients can be made thin by pushing their functionality onto the server as an additional layer.

fiber state would probably be the session information for stateful sessions - not convinced we can't do it all statelessly.
fiber management might be how to add napps to the current process ?
fiber actions disappears, since it is implicit in the mcp.

commit absolutely needs to be stateful.
so the client state needs to be tracked server side.
The mcp session might be in fact a fat artifact instance ?
so if we wrap around the artifact object, then we use that as the statefulness of the session ?  This has all the writes and things that other tool calls may have altered.

> wrap the artifact client object in each server session

or at least something like it, so it holds state.

the underlying artifact actions could remain scoped, and therefore stateless ? but the mcp server presents versions that remove the scope requirement from each function call.

make it so the object can't be navigated to new scopes if staging area is dirty, so we throw an error.

So long as we haven't broken anything to be mcp compatible ? it might be better to just keep our own independent protocol, and then make a translator / interface ? means we can evolve internally independently of the mcp, and we can adapt to mcp upgrades and changes that we don't like.

? list available napps ? given a location ?
add napp, plus allowed functions
update napp, to modify allowed functions
remove napp

ADD some napp management functions, to manage the loaded tools that the current session has.  these are session related / stateful functions, where the tool call is hooked by the server itself

try first as having scope just be required by each tool call, since it is possible for a human to do this.

capabilities of the server would be set by which provider level napps are loaded.

3 groups of functions:
1. mcp hooked, where the tool call affects the mcp state, like which napps to load
2. mcp loopback, where the tool call exposes parts of the mcp interface as tool calls, such as resource interactions.
3. napp related, where the tool calls are handed by napps running on artifact

the tools needed are:
1. listResources - wraps the resources into a tool call so an llm can see it.  Allows reading the current state, altho it should never have lost track of that.  whoami is provided by the current scope, or the actors home repo id.
2. all of the tree functions, execpt superLs and watch
3. all of repo-remotes
4. all of files-read
5. napps catalog tools - search, list, inspect, catalog sources management

the mcp control tools are:
1. loadTools( napp, toolname1?, toolname2? ) errors throw close name matches
2. unloadTools( napp, toolname1?, toolname2? )
3. listToolPackages
4. searchTool
5. listLoadedTools - breaks it down by tool packages.
6. await tool call - given a long running tool id, this will resolve when the tool call has finished ? or just implement progress for long running tool calls.

can reading a binary in the client be loaded into the model, like audio data or something ?

load tool is called by the default tool loader when you connect to the gateway.

implementation plan
1. base gateway with base tools loaded up
2. load up new tools, like the ai chat tool
3. gateway handle direct deep mcp servers, like only the chat tool
4. internal blockchain calls using mcp, rather than artifact
5. retrofit internal functions to match this calling method

> key part of the model is one server per client connection

so inside napps they get a function that can be used to create client/server pairs by passing in the scope, and or the napp(s) to load up in that spot.
With neither specified, the default is provided.

The server can have its scope changed, but only if it is clean.  This effectively just makes a new one.
Could pass --no-check so it doesn't verify that the scope or the napps exist until late.

Execution always happens on the consensus branch, but it can be targetted at a certain scope within the repo.

or, the server could namespace all the napps using the napp name, since this should guarantee uniqueness.  Dynamica servers that load napps in them should be allow to do that ?

server can have no napps, but then it just has the bare tools, which might be nothing (so resources only) or it might able to search for and load up napps.