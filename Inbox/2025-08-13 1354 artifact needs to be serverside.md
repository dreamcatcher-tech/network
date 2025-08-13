
>[!tip] Created: [2025-08-13 Wed 13:54]

>[!question] Targets: 

>[!danger] Depends: 

the server solves the problem of what state means and where it should be stored.

in the client, if it is in chainland, then it will be recovered when the execution repeats.

externally, it is stored on the serverside, and discarded if the server is destroyed.

we can wrap the mcp server to make some friendlier dev ergonomics.

so we need to convert all the tip methods to be tool callable.

We could maybe hide the provider level calls behind this wrapper then ?

So in fact, the tools api should be the artifact api ?

it might be that not all the provider functions need to have systme level context ?

? could we make the blobstore context be separated per repo, so we fire up just that repos blob store on disk ?
Maybe its better to treat each repo as its own lmdb on disk ? 
It does seem better as a single file, managed as a whole.
But we could make it be like a segmented context per repo, rather than needing to be this whole global operation that has global scope ?

Or, the way we process the actions means we know the container scope, and we won't be told what the scope is, but we get the request in from the container.

We could set the scope as part of the context ? so that it is set in context from the outside, meaning we don't need to pass it as a function all the time.

we could make artifact tool calls be raw, and then all loaded tool calls are prefixed with _loaded_ ? doesn't help us with multiple napps loaded at once tho.

read actions that don't change anything should not cause an action to be made - they would be intercepted by the server, and would give back read results.

So we need to split the read and the write actions completely, where read is a totally separate thing, and then write is totally separate, but it results in an action.  The cut was wrong as it was cut by function, then each function had read write splits, but actually we should to the top split as rw and then function cuts.

Reads can be interpreted by the mcp server, and might be handled by sending resources down to the client.  These have size hints and data types.
Client would have some mcp hook functions that let it read a link if that's what it got back, since it might not mean to read the whole thing.
It could have some peek functions that let it read just little chunks at a time.

So the system container would only directly receive scoped reads, which mcp servers would send in.
writes need to go direct into a repo container, targetting the '/' branch, which would then call the system hook to enact write operations where the scope is defined outside the container.