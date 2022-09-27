>[!tip] Created: [2022-09-28 Wed 12:12]

>[!question] Targets: 

>[!danger] Depends: 

Links in the system allow references to other chains, but without being part of the strict parent / child heirarchy that forms the [[Supervisor Tree]].

Links are made to another path, and that path is always checked each time the channel is used.  If they are found to change during any activities, all outstanding requests error and the new chain is used as target for any subsequent requests.

## Laziness
Links are not kept up to date actively, so a change in the `latest` pulse of a remote chain that is linked to the current change will not be considered a state update.  This is done to avoid looping in the [[Supervisor Tree]] which would make the system dysfunctional.  Links are considered a reference, and are updated lazily - ie: only when the link does something back, or the current chain does something to the remote.

## Remote Chains
Links can be made to chains that are not part of the current [[App Complex]] by specifying a path that uses `mtab` [[Mount remote chains|mounts]].  For example: `/.mtab/mountName`

A nested path to the `mtab` reference may be specified too: `/.mtab/mountName/some/nested/path`

