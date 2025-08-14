
>[!tip] Created: [2025-08-14 Thu 15:23]

>[!question] Targets: 

>[!danger] Depends: 

there was a set of optimizations, primarily branch-read/pull which was only there because of trying to make the browser be able to act semi offline.

But in actuality, the mcp server architecture treats the browser as super thin, and not very smart.

This works, because with dark edge, the server would be with the client in the local computer, with full resource access.

Browsers are just a ui, and it costs too much to try make them be heavier than that.

So if we want to take advantage of caching, we can do that based on http gets, where we get a commit and a path, and return a tree object and its metadata, so we know if we already have all the items inside it.

the browser never really needs the whole repo, but it could get it, it just wouldn't see it as a git repo, but rather something it would walk over.

The same rapid tree retrieval streams could be done using SSE, so that the browser could efficienty pull down large amounts of data.

we could expose some git based resources that allow getting pack files and other such things rapidly, if we ever need that.