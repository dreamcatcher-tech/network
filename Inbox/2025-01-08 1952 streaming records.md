
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

SSE streaming down results is quite good.

The key issue seems to be that using server side logic means a unique deployment.  One ideal is to have standard client side functions that pull on artifact, which is the same for all things, and then the front end just presents this standard data differently as a ui widget ?

Having a napp that runs server side in response to a ui widget doing something seems fine ?

paginated loadmore would be just the client does a fetch with the current latest hash of the tree, and the filter, and then the server would pull in the data and do the filter on it.

A way to handle the filter is to only allow the fetching of the full record list, and doing the filtering on the client side.

So the client is always doing paged pulls of the complete set, and when it has them, it does the sort and filter and whatever that way.  

It could cache things, based on hash, but then we're in artifact territory again.

Being able to receive chunked items in any order can speed things up too maybe ?