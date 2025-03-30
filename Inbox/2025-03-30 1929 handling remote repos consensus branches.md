
>[!tip] Created: [2025-03-30 Sun 19:29]

>[!question] Targets: 

>[!danger] Depends: 

These just get treated like remotes in git, and then we make a branch that tracks them locally.

We just deny the remote having the same name as our id branch.

If we want to shadow it, we would hook on to the remote as a live clone, and then we would get notified any time a change occurs.