
>[!tip] Created: [2025-03-27 Thu 15:51]

>[!question] Targets: 

>[!danger] Depends: 

Events should be just watching for change, so only needs etag.

Latest pointers should be etag based.

Set the location in an env var, to pick a close region.

Events is just using last modified times.

list objects is just repeatedly polling, using the consistency headers, and using last modified queries.

modified since would store the most rececent time we saw, then would keep re polling for that exact date forwards, to cover the case when writes occured in the same second.  Then it would use etag to determine if it had seen the item before.  

- `X-Tigris-Query`: ``WHERE `Content-Type` = "text/javascript"``


TODO check if etag is affected by time, so if the same object is written at a different date, is it different.

Could use events with ulids and then just watch them ?
https://jsr.io/@std/ulid/doc/~/monotonicUlid to ensure they are strictly ordered for the same writer.
IF we use events and use ulids, then the order might not matter, so long as the order amongst the same writers is the same ?
At any rate we will ditch the whole solution and move to a branch based model, so this intermediate step doesn't matter.  

Event objects can be constructed just the same as before.
Makes it easier than watching for fork events, since this is quite heavy.

Plus the whole thing is going to be ripped out once we start writing to a single branch anyway.

Plus if watch fails or misses something, it is non critical, just aesthetic.