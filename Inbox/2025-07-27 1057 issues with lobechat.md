
>[!tip] Created: [2025-07-27 Sun 10:57]

>[!question] Targets: 

>[!danger] Depends: 



2024-06-24 license changed from MIT to apache 2.0 with clauses.

need to keep the assistant model, since this looks a lot like a napp that is configured as an agent, with the agent field filled in.

its basically a napp that is capable of taking the API of the assistant calls.

if we split out and used artifact directly, then we wouldn't have to do the tap dance?
but if we get used to using sql in front of artifact, we can inherit dev tools and community / familiarity.

Make a simpel tool that can help ensure your schema is set up for data sovereign operations.
Define a mapping between tables and folders, and any special additions required.

could stick with the ai-sdk path.

use lobechat to prove how the mcp server would work ?
mcp makes it easier to separate out the front from the back, plus can be connected to other ai systems easily ?

Ideally we would run the front end as calling into an mcp server to gain access to files etc.   
Local caching for speed ?
Then the remote mcp uses artifact to store chats and make api calls, and then store things in repos.

But the easy path is to make artifact be an mcp server that handles only tool calls and files, and then work backwards to detach from lobechat.

If all the message operations were done on artifact, by way of mcp server calls, that might be easier to make a UI for ?  It basically makes the front end able to use schema generating uis / debug tools that dreive from the mcp interactions.
Chat as mcp server means we can save on some implementation logic, since there is only one api now.

? Adding the assistants concept to our site ?

Make the UI be brutal, where it is very plain, and just plain text mostly, no fancy viewers or anything.
Haul in chunks of the lobechat UI system as portions.

api gateway using mcp servers, where they negotiate to make api calls remotely ?
by making them all mcp, they can be recomposed easily, tested easily, and since we want to make napps be the unit of packaging up an mcp server and running it, means it is all just this single interface everywhere that we deal with.

Make a brutalist interface that pays no attention to UI whatsoever, that just focuses on laying things out logically.

Because the provider interface into artifact is actually set up as mcp compatible, we could just expose artifact as an mcp server, and then allow a client run by a program to use this interface to access nested mcp servers, which is to say, different combos of repos and napps.  

The mcp server is actually a repo.  Inside it, we can change out the tools by loading a specific napp.  This will dynamically shift the tools.

So have the browser, and this just connects straight to an mcp server ?  Uses this server to populate all the things it needs.  MCP interface is very similar to the artifact interface, in fact the artifact protocol can be transmitted over MCP, so mcp is like the transmit protocol.

Make git items available at https addresses ?  or allow bulk transfer using the git layer to permit rapid access within ui or application contexts ? or stream it down of the mcp interface, so its all standard ?

Use roots as a way for the server to access transcludes ?

We now have a clear view of the UI mechanic we want, where every button just opens a chat with different context.

If the servers were chained, then one becomes the client of another, so listing roots is where the runner of the napp learns about its permissions from the caller.

so the way in which mcp servers are exposed by being nested needs to be defined.
it should all use the mcp interface so that we don't have to make any special components ?
Altho it might be simpler to make a dedicated entry api, and then mcp the rest of the way ?

if we treat lobe like a stepping stone, where we use it to get the foundations of our server side operations ?
? Are we going to make mcp be the interface of artifact ?
if so, then the smoothest path is to make lobechat call artifact as an mcp server, then get our use cases initially working, since we need those basic things.  Then make our own front end to handle this simplified model.

lobechat might have implemented the sampling portion of the interface, so we can make our llm requests thru them ?

artifact would need flattening, so that all the tools were present as one ?

each napp could be presented as an mcp server.  the methods are almost identical.

add frames ?
add a frame that lets you call mcp functions manually, for testing.
frames interface should be mcp, brokered by the client.
make a ui element that calls an mcp server to populate the file list ?
or just make the file selector ALWAYs be in context of a chat ?

use the example server deployed to fly, then connect to lobechat ?