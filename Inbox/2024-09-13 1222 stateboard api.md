
>[!tip] Created: [2024-09-13 Fri 12:22]

>[!question] Targets: 

>[!danger] Depends: 

pass in a branch pid.
Watch this pid for changes.
If not supplied, uses the current branch pid.
stateboard would be scoped to a given branch ? or could receive many scopes.
Or the api is different for each widget, and is a form of backchat ?
Its basically backchat with some chroot restrictions.



Branch explorer would allow us to manually control branch targets before teaching the machine about branches.

File requests need to be a request for a hash, which goes in the cache.


? how would this help give us ability to upgrade HAL by doing  a pull, by addressing the root ?

any time a path gets opened, we need to start watching it.
back out of a path and we stop watching it, but can recover it quickly.
May show the stale versions we last had while we pull down the more recent things.

Use a generalized version of the threadwatcher, which uses this to string together a path, and keep watch of what is happening.

But the difference is that it gets passed down as a commit, which is definitive.

If the file disappears, then we back you out to the last known location.
fetch by oid should be enough.  in backchat, it should use the cache, and it should 

How should the files and path objects handle their async nature ?

Provide hooks that give some files.