
>[!tip] Created: [2024-10-21 Mon 14:14]

>[!question] Targets: 

>[!danger] Depends: 

If a branch is not able to receive an action from any napp, where the action says what it wants to run, then this changes what is permitted on the system.

So we would require any branch to be created with the napp installed on it, and then this napp is responsible for what can be run on the branch.

Anyone can send in an action, but this napp is what will process it, rather than the action specifying the napp.

When we get to versions, it can really only be specified by the branch itself, since we could have multiple versions being called concurrently.

Upgrade process for a branch is easier, as we'd just set a flag indicating that it is due an updated, and then it checks automatically next time it runs.