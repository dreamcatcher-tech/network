
>[!tip] Created: [2025-01-08 Wed 17:04]

>[!question] Targets: 

>[!danger] Depends: 

So long as the artifact is unbound, then it could alert on changes ?

If it was bound, would it simply walk forwards and find the latest changes forwards in time ?

We don't have good walk forwards abilities in hash systems.  But this can be emulated by walking backwards from latest ?

Or we can make it only work if it is bound to latest ?

Should latest actually be a watcher, and things automatically update ?

Watch on chain sets a flag in the json, or sends a watchlist over to the other chain, so that we get triggered when changes occur.