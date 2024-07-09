
>[!tip] Created: [2024-07-09 Tue 13:23]

>[!question] Targets: 

>[!danger] Depends: 

Instead of subscribing to changes on everything, we could subscribe to the whole `threads/` directory, and get changes each time anything alters.
Then we could fetch any one at liesure, without having to manage our subscriptions, or start them, since they always are current and available.

Also means far less open db read hooks, since it is just the watch on the commits and the directory underneath.

So even with a lot of remote repos, clients are still only subscribed to a single directory.