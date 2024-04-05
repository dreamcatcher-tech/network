
>[!tip] Created: [2024-04-05 Fri 14:09]

>[!question] Targets: 

>[!danger] Depends: 

If we switched from git to pijul, then we wouldn't have a tangle of branches always being merged as everything tried to reach consensus.  Pijul patches would main independent changes would need no reconciliation.

Signing these branches should result in less re-signing required ?

Or, we can have a main branch where everyone is proposing PRs against, but you each sign your own branch.  When an acceptable merge path is found that all agree on, then the main branch is moved forwards by one commit, and everyone signs it ?

So, you could re-sign master many times, so long as you only signed one tip of your branch, and your signatures on master always included merges that you had done ?