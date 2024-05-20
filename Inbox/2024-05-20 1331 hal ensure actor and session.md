
>[!tip] Created: [2024-05-20 Mon 13:31]

>[!question] Targets: 

>[!danger] Depends: 

want to be able to ensure we have a session before doing a pierce.
do not want to make a custom function for every single app.

ensure* class of function, would have a built in check for existence followed by a dispatch if present, split between an actor and a session.

Have a standard `ensureChild` function in the isolate that is specified as the branch isolate.  This runs automatically if the engine determines the child does not exist.  It is reassesed at each child.

? how to generate multiple child branches rapidly ?

`ensureDaemon( daemon: PID, ancestor: PID )` 

So the isolate would have `@@daemon` as a function to spawn a new child, which could do any config they wanted done in this context, knowing there will be no reply.

What about a response where the initial response matters ?  Would need another config option probably - this is not used anywhere currenctly.


If the branch request is daemon / noreply, then it should be enough just to put it on the branches slice, but also we can go ahead and write all the nested branches too.

So each level needs to do a commit, but they do not necessarily need to send a reply back, and they can be done atomically so they are all considered done at the instant of commit.
Could make the git commits deterministic by using time and details of the parent commit, so parallel processes would do the exact same commits.

? Keep daemon child branches updated each commit of current branch, so they are pegged.  Could just add them as parents.  Then optimize when changes occurred, possibly by notifying the parents with a pooled action saying to include their hash next time a pulse runs.

Can avoid the commit if the permissions are the same as the parent, so the config and everything is derived if not present, and so we can avoid any commits at all, and just write the head straight to db ?
BUT if we query the branch, we end up with the parent io, which would mess with its identity.
So in the io file, we should write the current PID, so we can know we are in a derived child ?