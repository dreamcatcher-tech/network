
>[!tip] Created: [2025-07-20 Sun 10:34]

>[!question] Targets: 

>[!danger] Depends: 

Instead of letting any worker operate on any given repo, we should only require locks as to which cluster of workers is responsible for which repo.  this makes it easy to find out what latest means from the point of view of the network.

the physical layer should be kept at the soverign unit, which is the computer.  Then these form clusters for reliability, but they are purposefully repeated equivalent units.

The logical layer then does a translation to the physical for discovery and comms.

works because the repo designs are purposefully kept small, so bonding to something close and local to the user works well.  The global pool introduces locking complexity.  It leverages the fact that, a given server has a very high uptime, and a cluster of servers is the key to uptime anyway.  So it is far easier for servers to be bonded to a repo, and then we only have to find them to guarantee the lock or get the latest item.

they can put a repo out to tender if their load gets high, but only when they are requested to work on it, since you don't know ahead of time when you'll be asked.  They can load balance pre-emptively ahead of time too.

Message passing should be considered complete when it makes it to the cluster of computer.

Clients are responsible for sampling all servers to be sure, rather than clients being lazy, they need to be a bit more active.