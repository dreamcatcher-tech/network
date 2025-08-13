
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