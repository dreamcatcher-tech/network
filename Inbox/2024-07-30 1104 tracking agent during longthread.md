
>[!tip] Created: [2024-07-30 Tue 11:04]

>[!question] Targets: 

>[!danger] Depends: 

If the assistant that immediately executed was referenced by path, then if we invoke it based on path, if it changes during the longthread, then we do actually want the latest version ?
If it was hashlocked, then it would never change, but in most cases we want latest ?

If we wanted something pinned, then the branch should not be updated with this new version.

Replay is the name of the agent at the time of the commit that added that message, which should be stored in the thread, so we can pull out the exact version every time.