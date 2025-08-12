
>[!tip] Created: [2025-08-12 Tue 20:44]

>[!question] Targets: 

>[!danger] Depends: 

 where are the actions being run in fact ?

what does install mean for fibers ?

Can the server have any napp it chooses installed in it ?
it should check the permissions systems, at least.

install means that the napps can run off triggers in the repo.
load() is the function to bring the napp into the mcp callability.
these are tool calls that get intercepted by the server itself.
They are related to installed napps on repos, but only in so far as versioning and permissions.

when running a loaded napp, it is executed in the context of the current scope repo.  The branch and all other items don't matter, as there is only one execution place, and that is the consensus branch.

so the action goes into the consensus branch and executes.
The action is always targetted at a scope - so the server cannot not have this concept.

whatever branch you have scoped matters when the action is dispatched, since this will be known to the execution ? this is like the pwd for the process ?

are actions executed as tho they are the repo that they landed in ?
the mcp server gets the actions to the repo, and marks where they came from, but the action bounces off the floor of the repo and is executed as tho it was the repo itself ?

the consensus chain is the canonical view of the entire repo, including all other branches.
views of other repos are synchronized thru this branch.
any changes to the repo cause a change in this branch.

so all actions have to occur in this branch ? alternatives we can figure out later, but for now.

? how can an action in one repo request a view of another repo ? 
Does this ever happen in practice ?

next steps ? 

setScope and other options can use posix relative paths.  this is an mcp class action, that happens in a specific napp, and that gets intercepted by the server.
So you can turn this off when you create mcp servers, since you can specify the napps to use.