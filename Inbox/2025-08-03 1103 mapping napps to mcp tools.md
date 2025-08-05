
>[!tip] Created: [2025-08-03 Sun 11:03]

>[!question] Targets: 

>[!danger] Depends: 

[[2025-08-05 0946 preserving artifact interface whilst joining mcp]]

there surely must be a neat way to compactly merge these two things, or make them the same thing, like a napp is a package of mcp functionality.

so to install a napp means to allow the mcp server to serve that napp ?

tool names could use pathing, so we expect object nesting but then we expand that out ?

? should there be one server per actor ? means the shape of the server is fixed at the actor root.

if we want to show a napps tools by expanding the list of tools, prefixed by the napps name, then should the artifact napp be displayed the same way ?
so the intro mcp is just a simple napp selector, and then you use that to switch to artifact napps ?
we don't want to confuse the llms with all these extra tools that don't matter.
the base mcp is used to provision tools for the other llms.

we should be able to load up multiple napps at a time, and pass those off as tools.
this implies one mcp server per napp, dedicated to that napp ?
? how to pop back up ?

the tool to change your napps is just another tool added to the list.
bot can then start querying the tool to work out what the new tool it needs is.  This tool might be able to see the chat in question, and might run its own intelligence to provide the answer back, excusing the calling llm from requiring background knowledge about the tools.

dynamic tool descriptions where the napp map tool has in its description the current tool description.

servers are not intended to be super dynamic, or changing on the fly what the tools are ?
also seems intended to present one tool per transport ?
so, we might choose to make a single server per transport to make it easier ?
so the server for you is only for you, and is dynamic, adapting as you do things.

or should each mcp server be bound to a particular napp, and swapping them out is the clients job, rather than being server managed state ?
or is the base host actually in charge of managing all the mcp servers that this client has access too ?  and can 'provision' new ones, destroy running ones ?
so the provider base is about managing mcps, and that is what provides the scope, so the scope doesn't have to keep getting called ?
scope of each mcp would be given in its resource list ?

files might just be something that every mcp server has access to, and can use resources to walk and list these items.

so the `.bind()` function we currently have is what sets up the napp.
should the mcp be bounded to a particular path in the repo ? and then allow it to change any of these things ? or is changing actually a new mcp instance ?

it should auto track the latest thing, so no more having to fetch latest, that just comes by default.
special system actions allow deeper operations, like rolling back to a particular commmit.
the resources list the scope. or the resources just list out all the scope elements directly, so calling list resources shows the full scope.

permissions are used to scope what actions the mcp server permits.  like history browsing.
roots might be used to show access restrictions / but we wouldn't give away the path info - it would always just look like `/` altho this might be useful to view from the clients perspective.

if a napp is the packaging format of mcp servers?

would need to shift streaming napps to be something different ? streaming is like a side channel or a notifications thing ?

there seems only a few modes:
1. root mcp mode where you talk to the hosting provider directly, over the web.
2. bound mcp mode, where you walk to a napp that you have bound by tunneling thru the root mcp server - the repo location may only allow some napps, and block others
3. napp mcp mode, where during the course of napp execution, and executing napp uses the mcp protocol to talk to another napp, or to an external mcp service
4. mcp being exposed externally to others to call a napp chainside. use query parameters and pathing to specify what you want.

the purpose of keeping all these modes the same, is so that inside a napp should be no different to being outside, allowing for lossless simulation, and to insert intelligence at any point in the call chain.

when connecting to root, the napp you run is the provider napp.  or at least each of the provider napps.

The important thing to remember to model is the trigger that causes the mcp client to start in the first place - this is implied in normal usage, but for us, a tool call provides this intention.

we can subscribe to resources to be told when they changed if we want .

roots could be used to show you what your permissions are with a particular repo ?
roots should be where the sender restricts what the recipient can access, if the recipient needs to access some files.  For running a napp, that would restrict the napp as to what it can access.

each sub napp in the provider could be a new mcp server.
the base lets you create / connect a new mcp server, much like how most commands in artifact returned a new artifact.

the list of immediate napps can be in the resources list.  you would then scope to the napp you wanted, in order to make a new mcp server ?
client tunneling is the thing we need then.  We should make that be a call that we intercept ?

if a repo is the server that hosts an mcp server, which includes its state and auth, and a napp is the execution package that is used to create the application / tools layer in the mcp server.
	
the gateway host is a repo that hosts an mcp server but presents it to the outside world.

the repo is the identity / files / state of the mcp server, the napp is the application code.

1. resources (files, available napps)
2. prompts
3. tools
4. ping
5. sampling
6. elicitations
7. roots
8. auth

discovery of napps is like using a napps browser tool, so we could have installed or allowed napps, or you could be allowed to run anything.

if we just mcp the host first, and play with tunnelled napps after ? just get a feel for it ?

would the mcp server be a new one or would it be the same one and it just switches out the tools ?
if we made our own version of this virtual server that swaps in and out rapidly ?

custom methods? for things like rolling back to a specific commit or something ?
provision it, set it up, configure it, then
Connect handshake might add some extra info ?

Making a new mcp server sounds easiest, if you want a new napp, fork the current one, with a new napp, then list the tools in it, or if you already know the tool calls you expect, use those.

So each mcp server that we produce has an extra function, which is like spawn, or bind, where you can create a new mcp 

making a new server is very light weight once the gateway has been set up.  so making a new one is vastly preferrable to shifting and old one around, which involves round trips and server side state.  If the mcp server was stateless as it, once your session is set up, the only possibly stateful things would be the execution progress updates, but when its stopped, it is pure.

client can change the roots to alter what the napp should focus on, but this is no permissions.  Changing something like the branch requires a new mcp server.  So scope is set on instantiation ?
Otherwise the tools for managing the git cursor ends up polluting everything ?

the inspector service would be extended with UI elements that could be displayed.

the frame would be connected to an mcp server.
then the whole UI can be made as a frame, where it just sends its actions via mcp, which means that even the root ui can be arbitrarily nested / virtualized.

So a mocked mcp server looks the same as the real mcp server, it just runs in browser.

so make the homepage to interface with a virtualized mcp server, using the artifact transport mechanism, and then it can be run as a frame as well.

in base page, the real web mcp client with the http transport, it is driven from the outside to connect, and then driven to create a virtualized / tunnelled mcp server / artifact mcp server, which is then used to present the base mcp actions verbatim, but makes it easy for us to test.

Props passsed would be an ArtifactMCP client object ? or made availabe as a provider context.
there would be some extra tools on this, that allow some UI commands to be issued.
props and things can be made available on the resources list.

slot the transport straight into the existing artifact functions.

need long running tool calls to be intercepted / virtualized.  need to make tool calls that can take hours, but also not time out the network while they're running.  And have a convention for how to get process in a sideband, where that progress can be accessible to anyone.