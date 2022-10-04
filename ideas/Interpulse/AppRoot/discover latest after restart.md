>[!tip] Created: [2022-09-14 Wed 20:09]

>[!question] Targets: [[approot]]

>[!danger] Depends: 

The problem is being able to discover the latest pulse of arbitrary pulses during engine processing after a restart has wiped the cache.  We must avoid storing references to latest directly as this can fall out of sync, and requires  more than twice the amount of writes to store.  **The solution should use the [[App Complex]] alone to rebuild the in memory cache of what latest means for each address.** This means using pathing to contain information about how to walk the [[Supervisor Tree]].

Every stream of interpulses starts from a piercing, and the pierced chains all know how to be discovered by approot.  This principle may be exploited to walk the app complex whenever a 'latest' reference is required.

Each time a pierce enters, it will either go to a child, or to a symlink.  All symlinks are done by paths, and so we should walk the path to the target, caching latest as we go.  This way, when the updates go back up to approot, parent latests will all be known already.  This should work even for relative paths.

We may also push up the [[Supervisor Tree]] whenever chains are in [[Tension]] so that recovery of partially processed interpulses can be restarted.

Cases to consider:

### Interpulse to child

Here we would have reference to the 'latest' pulselink in the channel, so this can be looked up directly.

### Interpulse to symlink

Symlinks always have a path, which may be relative or absolute.  Relative we can walk, and absolute we know since we always have access to the latest approot.  [[approot]] is what gives definition to what "latest" is.

This might cause problems as a relative path cannot be walked without knowing our own absolute path in the approot.  We want to be able to look this up efficiently, somehow.

### Interpulse from network

This should always come in to something listed in `mtab` which means it knows how to get to approot.  If a remote connection is not listed in mtab we have no hope of looking it up efficiently using address alone.  mtab allows us to resolve a path to an address that the interpulse targets.

## Implementation
Uplinks cannot be to addresses alone.   In fact, no type of communication can be to addresses alone at the chain level - only at the hardware transport level is this ever permitted.

### Talking to a remote chain
The Engine needs some long term storage to effectively function as a network node after rebooting and during intermittent network activity.  Pulses are long term storage, and so the network configuration should be stored as part of the [[App Complex]], because each chain in the complex will need similar network services.

In order to talk to a remote chain, a connection must be opened first.  In order to navigate an [[App Complex]], an authentication must be performed.

Sockets offer a public facing chain that will accept connections from any other chain.  While connected, the remote chain may need to complete a handshake.  If the handshake completes, then it is granted access to the complex.  Whenever this chain interacts with the complex, 

Children of the authenticated chain may also be granted access.  When introducing themselves, they will need to supply their path back to their authenticated parent.  This path will be used whenever they interact in the complex.

The path of the remote channel needs to be verified somehow.  Each time the request is sent, we must verify the address is valid, else we should require a new connection to be made for the uplink.

Is there a requirement for a treewalking object, so that verification of a path can occur ? [[Rapid path verification]]

Can we leverage that all remote connections must have been started at some point ?
	if our parent must have told us to open up, we could walk the parent to find the path back ?

### Merging uplinks and downlinks as commslinks
These links are not part of the [[Supervisor Tree]] and not browseable by the filesystem in any way.  They both need to represent a path based connection to a chain, which may be remote.  The path is required so we discover the latest pulse of that chain, and so we can know if the chain specified is remote or not.

We could rename hardlinks as remotelinks, and so a link is declared as remote at the time it is made.  It is required that this link have some peering information in it - this could be referenced to some entry in mtab, by pointing by path.

Connect need not know the chainId, of the next child in the path, since we can look this up directly now.  Downlinks need not be resolved either, as this can be looked up directly.

If connect was replaced by a permissions lookup, then we could open up the connection directly, with no burden on the tree at all.  This would occur in the engine, rather than in the reducer.

**The path must contain information about how to locate the validators for a given chain**

