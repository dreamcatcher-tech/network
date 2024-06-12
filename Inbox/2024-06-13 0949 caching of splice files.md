
>[!tip] Created: [2024-06-13 Thu 09:49]

>[!question] Targets: 

>[!danger] Depends: 

we would check the cache first, then put the response in there, so that we can fulfill requests for hash based items instantly, regardless of the browser cache or not, since the hashed objects will never change.

So the listeners are there as hooks waiting for a change in head, and only if the head changes or the file changes, will they be asked to fetch.

? so are we fetching based on hash, or based on path ?

fetching latest would be done by invalidating the cache when it changed

or, watching a path would return a hash only when the watched file changed.
Then you go fetch the hash, which can be cached.

If all the watches were all restarted with the same plural watching, so it is only one connection to be watched, load is a lot better for browser and the server.
Then the event stream comes back with a pid and a hash, which you then go and fetch.

Starting a new watch immediately starts it, but upon the restart of any watcher, it restarts all of them using a single request.  This behaviour also means we can pause the restart until we are the focused tab.