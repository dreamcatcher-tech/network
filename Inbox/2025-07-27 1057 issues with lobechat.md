
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