
# discover latest after restart

> [2022-09-14 Wed 20:09] <br/>
> Targets: [[approot]] <br/>
> Depends: [[]]

The problem is being able to discover the latest pulse of arbitrary pulses during engine processing after a restart has wiped the cache.  We must avoid storing references to latest directly as this can fall out of sync, and requires  more than twice the amount of writes to store.  The solution should use the [[App Complex]] alone to rebuild the in memory cache of what latest means for each address

Every stream of interpulses starts from a piercing, and the pierced chains all know how to be discovered by approot.  This principle may be exploited to walk the app complex whenever a 'latest' reference is required.

Each time a pierce enters, it will either go to a child, or to a symlink.  All symlinks are done by paths, and so we should walk the path to the target, caching latest as we go.  This way, when the updates go back up to approot, parent latests will all be known already.  This should work even for relative paths.

Cases to consider:

### Interpulse to child

Here we would have reference to the 'latest' pulselink in the channel, so this can be looked up directly.

### Interpulse to symlink

Symlinks always have a path, which may be relative or absolute.  Relative we can walk, and absolute we know since we always have access to the latest approot.  [[approot]] is what gives definition to what "latest" is.

This might cause problems as a relative path cannot be walked without knowing our own absolute path in the approot.  We want to be able to look this up efficiently, somehow.

### Interpulse from network

This should always come in to something listed in `mtab` which means it knows how to get to approot.  If a remote connection is not listed in mtab we have no hope of looking it up efficiently using address alone.  mtab allows us to resolve a path to an address that the interpulse targets.
