
>[!tip] Created: [2025-09-12 Fri 09:25]

>[!question] Targets: 

>[!danger] Depends: 

it expects to be at a dedicated path.
We could wrap it in an iframe, so we can rewrite its requests ?

or we can give each instance a full path.

so if you come in looking for a particular view, then if it is a ttyd view, we need to add something extra to the path ?

the issue seems to be only what the page comes back with, and tries to make a path request.

So the ttyd face needs to be told what path it is being served from, since that is how it will build its urls.

so if it does a get, we just look for the ws upgrade, and know that this is a special thing ?
we would be making a special allowance for ttyd to operate.

any other app would need some kind of handshake thing ? hopefully there aren't any other special cases.
it might be easiest to do the tunnelling 