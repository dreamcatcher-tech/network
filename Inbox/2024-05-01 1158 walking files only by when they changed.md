
>[!tip] Created: [2024-05-01 Wed 11:58]

>[!question] Targets: 

>[!danger] Depends: 

If each file was annotated with a pointer to the commit where they last changed, then we can walk versions very quickly.

Writing would write the last known commit, so that we can instantly get the previous version, and walk back thru the versions without doing all the commits.

So given a path, each path in the tree stores the commit before the current change.

Can do with an addenum to the commit that lists all the paths that changed.

This could be calculated by walking the git repo, so might be part of efforts to optimize the git system, and doesn't actually need a change in the git data format.