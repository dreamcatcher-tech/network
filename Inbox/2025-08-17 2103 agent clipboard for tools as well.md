
>[!tip] Created: [2025-08-17 Sun 21:03]

>[!question] Targets: 

>[!danger] Depends: 

could we put an mcp server on the clipboard ?

could something live be put on the clipboard ?

this could act like a little notebook, where it can push things like tasks, and make little notes as it goes along.

It can have something like a workflow doc that it executes, or it can make a little note to carry on with something later.

Other agents can read this and build on it, and perhaps update it.

This makes the llms get served like us, where in the background, little agents keep improving what we did and polishing it eagerly.

? what happens if the resource that the clipboard holds is no longer valid ?
should we silently drop it ?
should we error if it tries to be used ?
thing is that it should never be invalid, since it represents something immutable.

clipboard should check that a resource is available before adding it.
when added

is it enough to just have mcp tools that can run an ai chat, and then get those results back ?
then those chats would have mcp access too ?
resources show current scope and current clipboard ?

could start a separate mcp server instance that lets you go browse files and poke around.
possibly resume a chat that someone else was having ?

be nice if the mcp server could read the disk state to know what was the mcp state of other clients ?

