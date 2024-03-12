
>[!tip] Created: [2024-03-12 Tue 12:54]

>[!question] Targets: 

>[!danger] Depends: 

To be repeatable, we want to pull down to local machine.

We could pull down the pool as well at a given point in time ?

Can locks be put into the git repo too, so it is something that can be pulled down and dissected ?  Actions / messages could be pooled up into a bit io.json and pulled down, to be able to replay the system state ?

Periodic system snapshots would give some finality and compression to this system state reporting.  Gives a much more fine grained system diagnostic for possibly not a lot of storage or overhead.  Basically just taps of the the queue and adds it all up until some time goes by, then snapshots it all down to disk.

This queue is just the json channel, and lets us replay the system state anywhere, since we can also give each isolate an identity so they can tag their actions, so we can recreate each isolate state as well.

Pulling down a running repo would involve doing a pack operation on the whole thing, then transferring those objects down ?

Or, we could give access to the repo remotely, so no need to actually clone it, you can just read it, and interpret / execute it locally, saving the synchronization problem ?

Splice is really just an elegant way to read from a git repo, harnessing the history / provenance of data as well as its current state.