
>[!tip] Created: [2025-08-03 Sun 11:03]

>[!question] Targets: 

>[!danger] Depends: 

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
2. bound mcp mode, where you walk to a napp that you have bound by tunneling thru the root mcp server
3. napp mcp mode, where during the course of napp execution, and executing napp uses the mcp protocol to talk to another napp, or to an external mcp service

the purpose of keeping all these modes the same, is so that inside a napp should be no different to being outside, allowing for lossless simulation, and to insert intelligence at any point in the call chain.

The important thing to remember to model is the trigger that causes the mcp client to start in the first place - this is implied in normal usage, but for us, a tool call provides this intention.

we can subscribe to resources to be told when they changed if we want .