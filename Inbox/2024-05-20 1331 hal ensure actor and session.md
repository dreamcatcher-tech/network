
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

We insert the action at the lowest path with no ancestor.  It is expected to gracefully return if the child already exists.
It is expected to deploy to each child in the path as a system level action.
`@@ensureDaemon` can be an action too, which is interpreted specially by the system, in that no reply will be sent ?  Or, just treat those branches as no reply ?

If the spawn is going to need to execute the isolate, then it will always be slow, but if it can be somehow just inert, so no exe, then it is fast.  So if the isolate has a @@daemon function then we need to run it at each step, but if it doesn't we can just rapidly create the daemon with the same config as the parent.  So @@daemon would be a lifecycle hook, but if we can skip it, we would.

When @@daemon gets called, system will make the daemon branch automatically, but will call this hook on the new branch if it has been created.  So daemon with a reply uses `noBranch` and will be executed like anything else, but @@daemon is a dedicated call that has no reply sent back.

Can ensure be called inside an accumulation ?
It should have the same effect.

? can this be deferred ?

Make a test that verifies create a session at every step of the way.


If the branch request is daemon / noreply, then it should be enough just to put it on the branches slice, but also we can go ahead and write all the nested branches too.

So each level needs to do a commit, but they do not necessarily need to send a reply back, and they can be done atomically so they are all considered done at the instant of commit.
Could make the git commits deterministic by using time and details of the parent commit, so parallel processes would do the exact same commits.

? Keep daemon child branches updated each commit of current branch, so they are pegged.  Could just add them as parents.  Then optimize when changes occurred, possibly by notifying the parents with a pooled action saying to include their hash next time a pulse runs.

Can avoid the commit if the permissions are the same as the parent, so the config and everything is derived if not present, and so we can avoid any commits at all, and just write the head straight to db ?
BUT if we query the branch, we end up with the parent io, which would mess with its identity.
So in the io file, we should write the current PID, so we can know we are in a derived child ?

HOW can the origin of this action be traced, with its dynamic entry point, but requiring a static signature from the client to capture their intent ?

Make it as a pierce action that gets intercepted by the engine, and if it is not needed, it is discarded, if it is, then the pierce enters at the target, then the ensure is system level from there down.

Since it is identity related, should it be restricted to identity related functions ?
Should it be a special function dedicated to identity creation, which can include authentication as well ?
Pierce the terminal only if the pid doesn't exist.  If not exist, then the terminal action is picked up by the machine to make the pid exist.

This actor management should probably be built in to the system.
So the pierce comes in to the terminal, but only if pid is not present.
Then if required, the terminal calls the app base, which will be treated as an identity call.

If the app was configured to all identity services to create branches, then it can be instantly created by system. and the creation maps back to the terminalid.
Comes in to the terminal as a signed request, then calls standard functions to get the base actor, then the session.
This actor/session format is the same across the whole platform.

api.isPid which would check if the app has an actor for us, ensures one if needed.
if actor is present, ensures we have the session we asked for.
