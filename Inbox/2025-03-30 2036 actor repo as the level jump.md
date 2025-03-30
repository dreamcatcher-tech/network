
>[!tip] Created: [2025-03-30 Sun 20:36]

>[!question] Targets: 

>[!danger] Depends: 

This is where we store what repos they actually control.

This accounting should happen in the meta branch.

So for the super repo, held by each host, this branch would list all the actor repos that were currently being held.  It would hold their current status, since this are two phase commit type operations.

THEN the operations of init, list, delete - these all become standard operations.  Acting as the super host for control over the actors vs acting as an actor with control over the individual repos.