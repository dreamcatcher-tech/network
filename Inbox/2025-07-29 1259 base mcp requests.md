
>[!tip] Created: [2025-07-29 Tue 12:59]

>[!question] Targets: 

>[!danger] Depends: 

how to nest a call to an mcp server, like bind ?

calling the functions on the chat napp is how we manage the filesystem layout, and how we trigger inference jobs.

? do we expose the provider, or do we expose the artifact interface ?
artifact is really just the client side wrapper around the provider.

steps
1. make the provider be purely remote callable, so move the server side only operations
2. make a basic mcp server
3. set up clerk as the auth checking thing
4. expose the super ls repos as resources.