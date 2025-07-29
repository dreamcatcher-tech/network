
>[!tip] Created: [2025-07-29 Tue 21:31]

>[!question] Targets: 

>[!danger] Depends: 

issue is that the artifact client will need to fully wrap the provider to be an mcp provider ?

There might be no point wrapping it with the artifact interface ?

all the react code we made might be redundant, and so we should not burden ourselves with it any further ?

Or, if we just wrap the artifact interface around the mcp server, then it will all just work as before ?
So why do mcp stuff anyway then ? what is the gain ?
Because an llm would use the direct mcp interface, but the UI and react components work better with the wrapped artifact interface.

roots is just the scope, which the client keeps updated.
in a session, we could set the scope, and use that statefully ?
see how it goes, with the scope alone, then maybe look at statefully setting the scope.

need a test set that exercise the provider using mcp.

then we need to test remote napp / mcp invocation thru fibers.

then we need to make the chat napps, and carry on making all the native napps.

how we going to move the UI to be pure tool calls ?