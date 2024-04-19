
>[!tip] Created: [2024-04-19 Fri 13:33]

>[!question] Targets: 

>[!danger] Depends: 

If we are watching some files, we want to trigger off actions.

In the io.json, we can set an action flag that is stalled waiting for a commit.

To watch a remote file, or a remote repo, then we would put in a watch request into that io file.

Reading remote files causes a merge.  Foreign chains get a chainId / some kind of identifier attached so they can be reproduced effectively.

If we allow racing / skipping, then we can collapse multiple responses into one, where the pool is overwritten with the latest on.

We need a special action for this, since we don't want to cause a commit just by asking for a commit.  So the special action stays 'stuck' in the io channel, and each commit, a special reply is sent back to the sender for processing.
