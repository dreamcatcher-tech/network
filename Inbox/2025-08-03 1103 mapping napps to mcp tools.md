
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

it should auto track the latest thing.