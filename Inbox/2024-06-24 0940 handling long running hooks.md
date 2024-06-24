
>[!tip] Created: [2024-06-24 Mon 09:40]

>[!question] Targets: 

>[!danger] Depends: 

Browsers watching for changes puts a heavy load on the system under the deno isolate model.
We need some alternatives.

Reduce the number of hooks, by scoping all hooks to a particular channel.

Branches can be used as triggers for different changes, providing that privacy is not being leaked.
So in this way a single hook can exist for all children of a particular PID.

Use some old school servers, like heroku dynos.
But still has issue of requireing a watch on the kv store.

Log a watch with the kv store, and when changes occur, look up the watch list, then fire off something to hookdeck or the watch service to trigger anyone watching without causing an isolate to be always active with a listen on the db keys.

Have a root chain notion, where the root pid is listened to.  But this messes with permissioning a bit.

However, if a repo was considered a single read permission domain, and all branches can read all others, then the root chain system works ?

So each Machine and Actor is its own repo ?