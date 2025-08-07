
>[!tip] Created: [2025-08-07 Thu 14:34]

>[!question] Targets: 

>[!danger] Depends: 

config file, can list napps as deps, but this just fires up mcp servers to wrap them.

but remote apis, whatever they may be, are maybe best presented as an mcp server ?
as part of the config, we say where their schema is, and where the end url is, but it is a way to turn their interactions into tool calls.

So if we want to talk to an external mcp server, this is trivial via passthru, but if we want to talk to a conventional api, we wrap it in an mcp server.

we can also wrap inbound requests as mcp calls in, via elicidation or by us presenting as an mcp server to the outside.

So hosting a web page involves a simple switcher that just takes the network packets and turns them in to tool calls or resource fetches and then returns the results back.