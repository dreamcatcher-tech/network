
>[!tip] Created: [2023-08-25 Fri 14:14]

>[!question] Targets: 

>[!danger] Depends: 

Since the actions are always the same, then if the same order of actions applies, we can snapshot the machine every time, and restore rapidly if the path is the same.

So deep paths do not need to start from scratch every time.

We only apply the snapshot when we have deviated from the path, and then immediately cache a new snapshot.  This avoids the overhead of restoration if the cache already applies.