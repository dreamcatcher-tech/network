
>[!tip] Created: [2025-09-05 Fri 15:22]

>[!question] Targets: 

>[!danger] Depends: 

so we need a client "server" which is presented to the local agent llm.
then we need a remote, which is the header of the remote agent.

We could use the same client factory to attach to the server, where the web it just passing the server item thru to one of these functions and getting the tools attached, and we also supply the implementation as well.

So on both client and server, we have the same server setup, same tools and everything.
server we supply different things to the function, client we supply an mcp client that connects to the remote agent header.

the other option is to use a genuine web api, rather than mcp ?
altho mcp seems easier to hit directly, if we were to give an agent direct mcp access ?

we could also set up different mcp servers on different paths, so that one of the faces could be an mcp server at a certain path, so that external clients can just hit this mcp path directly.