
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

