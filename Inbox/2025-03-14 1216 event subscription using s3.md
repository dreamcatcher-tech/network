
>[!tip] Created: [2025-03-14 Fri 12:16]

>[!question] Targets: 

>[!danger] Depends: 

Subscribers could write global objects with some formatted key, so that when someone updates the actual key, they also read from the subscriber list ?

Be nice if a global realtime messaging broadcast thing was used for this piece too ?

The key seems to be isolating who is allowed to make changes to the thing that everyone is watching, and then relying on the writer to do the notifications ?

Have a particular server that is nominated as the event broker, which handles everyones subscriptions.  If the connection goes down, then clients need to resubscribe and refetch.

The worker would watch the meta branch of any repos of interest.  Whenever any workers do work on this, they would look up the watcher list and see if anyone was subscribed to it.  If there is a subscriber, then it sends a request to that app cluster.  They would notify that an update had occured.  It would then find every running machine that had registered interest, and notifies them ?

This could be the same as the local net cache, where we can use a dht to see if anyone local has an object we're looking for.

If each watcher writes down based on the repo key, it also writes down its address or how it can be contacted. Whenever the meta branch of the repo updates, there is a two-phase commit done:
- First, we update the hit value (the chore of doing that notification remains undone)
- Secondly, we do all the notifications and then mark it as complete

## using git repo to manage subscriptions. 
It would be great if there was some way to use the Git repo structure itself as a way of recording subscriptions and doing the updates to them. This could be per region. There could be a regional broadcast manager for each repo. The status of who the running broadcast master is and their liveliness would also be stored in the repo with some kind of a timer out check to ensure that the watcher was always active.

A client would register themselves as a subscriber and modify whatever topics they wanted to be told about, which could be repo changes or it could be livestream, live write results, so file path results that are happening in the staging area of a repo, which would be used for real-time communications. 

When writing a new commit to the repo, writing the update to the subscription repo would also be required. In fact, that might just be part of the updating of the host repo or something like that. But it's really just two simple commits: one says, hey, I've done some work and I've modified a repo but I haven't notified anybody about it. And the second one says yes I have done the notification. those two things, so that you either complete them all or you complete none. That would be useful and would be scalable because all it's requiring is that the broadcast state be modified in some way.

every worker once had finished their job would then look to update the subscription or transmission register if they needed to update for events notifications. If they saw something that needed doing, then they would grab the lock and begin doing it. The locks may be sharded to distribute load once it gets to a certain number. These configuration parameters are simply part of our infrastructure config. 