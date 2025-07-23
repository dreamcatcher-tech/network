
>[!tip] Created: [2025-07-23 Wed 14:59]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes we want to do queries that are hard or slow to do with artifact, like listing a table from cold start.  If we had a db cache / lightweight copy in front of artifact, that was bonded to the specific commit, 

Often the query is on the latest data, not the history, since we only rarely need to walk the whole history.  In these cases, being slower might be perfectly fine too.  We could also cache by commit counter, so we can get the current view, with all the items, and the commit that last wrote them, in a very easy query.

The db specializes in query, artifact specializes in portability / durability.
The db could move around with the repo, as like its cache.

If we model the server side logic as actually parts of the users computer, then we can do much more with it.

We could use conventional databases to build up queries, and then we could dribble down results in a conventional way.  Then when we have sql converted completely, we can use artifact directly for it.  But having the server doing the long running and heavy tasks is better for the user.

If the user goes dark edge, then they just run a local version of the server.

it's almost as if sql and orms took a large amount of thinking, and so we can inherit that, since data organization is still a problem in artifact - it is just part of information retrieval.

We can certainly develop more rapidly if we are sql compatible.