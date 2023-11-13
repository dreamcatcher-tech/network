When merging a large tree, there can be a large number of pulses that were used during the construction process.  For example, when bulk importing customers, or bulk updating, we may make those updates one at a time, which causes a lot of noise as the root is updated each time.

The resulting tree should be merged into master by just taking the resulting tree, rather than needing all the working.  This can only work if the target of the merge has the ability to accept `@@MERGE` actions and `@@MERGE_TREE` actions which deal with merging all children in.  This might need to be a single function.

Basically if it can accept this function, then it is responsible for checking the incoming data as matching its logic requirements.  For things like datums, it doesn't matter much how something got to be that way.  If the history is important, then a series of snapshots should be submitted.

Another option is to submit the full tree, consensus executes the tree to ensure it arrived at the agreed condition, and then do the merge of the resultant, saving space by way of a merge update.  It does destroy information, so may not be the best option.

Also we could periodically purge the chain to remove un-necessary transitions, and basically keep a large number of snapshots.  When making a new head snapshot, this is a chance to point at all the prior snapshots too, so the rewrite is not terribly long.  This is backups in a blockchain system - backups gives us the ability to take things away and preserve value, rather than store things to preserve value.

The consensus on the backup snapshot can be computed as a scrub, where the nodes all commit to pin the pulses used in the backup, and they may optionally add a signature that says they affirm correctness and availability of the information.