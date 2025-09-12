
>[!tip] Created: [2025-09-13 Sat 00:01]

>[!question] Targets: 

>[!danger] Depends: 

the person needs to auth, and then when they connect to each coco agent they need to have been granted permission in there.

So the thing that does the proxying needs to check if auth is present before forwarding.

http carries auth in it, so pure tcp seems not possible in these cases, as we cannot have auth and tcp in a generic way.

the browser tho, going via http, can be intercepted for auth.