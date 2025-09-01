
>[!tip] Created: [2025-09-01 Mon 14:04]

>[!question] Targets: 

>[!danger] Depends: 

for non executing repos, having our own git repo might be best ?

maybe we could use legit git, anyway ?

now that we're running in docker containers, perhaps a legit git server process is exactly what we need ?

then we do whatever we want to the files on disk, and do an actual commit ?

use sparse checkout to pull down only the bits we need into a tiny ram disk ?

Use libgit2 or fuse ?

fuse would mean we can deploy those in containers too, and then also on the server, so we get super efficient at working with git repos ?

PoC would just use the raw disk because time.

lmdb can add extra lock reliability, so the fs can't be changed concurrently.

can operate in 2 modes:
1. git objects on disk, presents virtual workspace using lmdb
2. git objects remote, presents virtual workspace using lmdb with fetching remotely as needed

maybe the only required version is actually the remote fetching bit ?

can also make local file writes use a remote storage in cases where we are resource constrained.

So it comes down to making git be hyper efficient, and allow it dark edge properties like sharding, multi server checkouts, recovery of lose files, very light resource consumption, extreme speed.

Then the consensus algos just deal with things like the latest hash, and reconciling all that.
Compute is in these docker containers, which can be long lived and handle multiple calls, but they make use of the fuse too.

So then we use the actual disk for objects, instead of ram, and just tightly control the environment.

rely on redundancy to catch any errors in disk.