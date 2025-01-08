
>[!tip] Created: [2025-01-08 Wed 19:52]

>[!question] Targets: 

>[!danger] Depends: 

If we start streaming all the records down, possibly in a processed form, rather than the full 80mb versions, then the client

In this model, the widget and the server are coupled - logic is running on the server that changes the data so it is not hash based data, but it is derived from hash based data, like a light client.

The client would watch the tree hash that holds all the records, and would only seek out diffs.

? how would it pull down a new version while it hasn't finished the old version ?
It should be able to pull diffs based on saying what version it had, and what it wants.  The server would then start streaming down the objects that are different.

Easiest seems to be just streaming down cheap versions only as requested, signalling data change so the client needs to reload the stream, keeping the old view present but stale grey, then loading the fresh data over the top as a sweeping cursor.

Crude version is just complete refresh.

The deno deploy service holds the b2 objects in cache or the actual git items in the git cache, so the access is very fast and local.