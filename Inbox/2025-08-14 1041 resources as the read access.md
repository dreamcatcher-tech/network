
>[!tip] Created: [2025-08-14 Thu 10:41]

>[!question] Targets: 

>[!danger] Depends: 

> Every call that is a read thing should be redone as a resource

the resource changes as the scope changes.
latest becomes the latest for the currently selected branch.

So resource retrieval is not a tool call, and it doesn't alter the system state by calling it.
The server in this case just checks permissions, and then if allowed, does the read using one of the background system actions, which don't get logged anywhere as they don't alter anything.

We should grant access to the scoped blobstore in readonly mode, in this instance.

then the tools just loop back in to reading resources, rather than sending actions into artifact.

it still bothers me that artifact is somehow different to mcp ?

XDG mime type could be used to represent a streaming file, which would be like a pipe or a socket.

so we keep updating the commit id, or the root resource, and then the clients can refetch this data.

all the state of the server connection is exposed in resources.

active tool calls can be exposed in this way too - these are transient responses which an outside observer can consume,b ut internally, we cannot consume them in chainland due to determinism.

SSE could be a special kind of xdg node ?

principle is that we want to keep the llm very focused, so it has to deliberately navigate to a specific locaiton, load up some tools for that spot, deploy them, switch to another spot.  This crawling type behaviours seems to have better results than trying to have all the tools available all way once.  Several decisions of increasingly narrow scope reduce the needle in a haystack properties of a problem.  reduces the error probability of choice, since the error is divided by the number of steps.

Focus, gate, and zoom—many small, targeted steps beat one giant all-tools decision