
>[!tip] Created: [2024-11-28 Thu 18:00]

>[!question] Targets: 

>[!danger] Depends: 

artifact on deno deploy should use this protocol as a means of exposing its backing functions.

Might be able to make the streaming requests be on artifact too, coming directly from the client, rather than running on vercel.

The browser would call the api directly, and then the vercel server would just present back the changes.

It is possible that the napps could be very closely realted to the context protocol ?

napps with state equals an mcp server instance ?

Use the streaming format from the vercel api with some optional catchup messaging, so that we can resume a stream if we lose some messages.

Needs to implement billing asap.  So MCP but with billing built in.