
>[!tip] Created: [2025-08-08 Fri 13:46]

>[!question] Targets: 

>[!danger] Depends: 

we could read only the metadata, and we have specific types for that, so it allows a caller to walk the metadata.

the url should be prefixed by a url ?

or prefixed by a commit hash ?

then we use a different end point to pull the actual data down by hash ?

Can download all the blobs in a given dir all at once, with a single request ?

use a resource link, and then fetch using regular old get.
this might be the way we do things internally too ? it just uses an internal version of the getter ?  We could allow this to stream, so you could trigger things while it is coming it.  This could be an SSE stream that you consume gradually, where each action from the source triggers an SSE event that kicks off your container again.

We should lock down the fetcher while its in napp land, so that it cannot do SSE type fetches ? since these would require internal mechanics.

SSE can be sent down as notifications to the client ?  This is more pure, but SSE makes it cleaner to implement.

If we did it with notifications, this would allow 