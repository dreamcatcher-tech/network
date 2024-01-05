
>[!tip] Created: [2024-01-05 Fri 15:05]

>[!question] Targets: 

>[!danger] Depends: 

Annoying that http calls out to an AI take so long, so if we prep the stage and then take a snapshot of the git repo, then we can use this as the starting point of the next type of test we want to make.

We can periodically rerun the calls that generated the snapshot to keep it fresh, but largely this should save the time more than it costs us handling staleness.

Means we need tension detection early.