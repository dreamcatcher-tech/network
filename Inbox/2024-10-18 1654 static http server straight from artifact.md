
>[!tip] Created: [2024-10-18 Fri 16:54]

>[!question] Targets: 

>[!danger] Depends: 

If we simply translate the incoming url requests to point to a specific branch, then we can serve files from there.

So a static page could be hosted on artifact itself, and its static contents would dynamically update as things change on it.

On the front we can put caching and other tricks to make it go a lot faster and cheaper.

So the HAL UI could in fact be served off artifact.

Then the API for it can be delivered with the static file contents.

If the api was done using json, it can call json functions directly and get responses back out of artifact, rather than requiring anything backchat specific.