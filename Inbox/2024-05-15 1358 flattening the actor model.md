
>[!tip] Created: [2024-05-15 Wed 13:58]

>[!question] Targets: 

>[!danger] Depends: 

If every machine needs to go via an auth provider anyway, then we might be able to flatten the actor branch hierarchy.

So all machines would be tied to a single repo, and they would have arbitrarily many sessions.
Or, each one could be its own repo, where it was spawned by a gateway repo.

Actor ids would be another repo again - the Actors repo - which requires cooperation with at least 1 authProvider.  If a machine is unauthed, then it just stays as an unauthed machine.  Authed means that more than one machine can act as a single actor.

Unauthed machines make a temporary actor, where this actor is merged when they auth.
But it is really just copying over the contents ?

Advantage is that the machine session never moves, so all the things the machine sessions did, still remain with the exact same PID.

Redirects of PIDs could be done if you had a prior commit where the pid was one thing, then we should have a way to walk quickly and find where the PID changed ?

If have multiple sessions in HAL and want to list all the sessions you have, how would this be done ?
Write the sessions in the actor, so that when you authenticate, the sessions in the actor are copied over to the permanent actor.

Apps need a concept of an actor, so they can be controlled and so they can bill and be billed.

Store them as sessions based on apps, where each app has a directory where it can list data.
It could be any data, but for starters it can be sessions that the user is involved in.
Is an app a fork of a base, or is it its own repo that the user installs and keeps updated ?

Inbox for sessions you have been granted access to ?
Just a general inbox, with AI processing for spam, paid for by sender.
can include regular email in this piece too.

HAL is flat sessions too, with each session linked back to a particular actor.
If the actors only execute in a trusted way, then whatever the actor says is theres, actually is theirs.

But what is HAL ? A repo that gets forked by sessions ?  A dedicated repo that each actor starts ?
Is it in the actor repo ?
Then actors start bots ?

? what about flattening terminals down too, so each one is just a fork of a base repo ?

Branch as an agent ?

If an agent session can come with the files of a particular repo, and its own files ?
Starting a session of an agent running on the current file system lets it make changes to this filesystem and then merge them back in.
Can be given permission to modify only some files.

Starting an agent that can then have multiple sessions with it seems a little different, but same ?
The agent boots off the image, where it really is a filesystem (aka a blank repo) then import the agent image, and then allow sessions to be started from this main branch.

Customer bot would be the fs of the whole crm, then access restricted to the customers folder, then the customer bot fired up, then a new session starts, which branches from the customer bot branch, which is always synced with master.
Then the session branch starts, and occasionally merges back to the customer bot branch, which then merges back into master and handles triggers to other bots ?

Some apps you clone the repo, others you fork the main branch.
A central state app is one that sessions can change in some way.
This can be tiered as well, like all CRMs can feed into a higher level one maybe.

Consider a model where all the customer records are in a file system tree, then you want to make a change to them - move up from there.
hit the main branch and request to fork into a session, with a given bot image, scoped to a certain set of files.  This would have a chroot applied so the bot only sees a specific path within the filesystem.  Could be limited to a specific commit or range of commits too ?

So a session can start with any agent image at all.


Allow an isolate to hook the processing of PRs, copys, moves - this is where we put the notification logic to make whatever changes are needed to other parts of the system.

Terminals allow actions that prove what machine something came from, and optionally what actor that came from, if you have been allowed to read that.

Map machines to actors ?  Use a LUT to speed this up ?

Should you be able to us the intelligence of the systems you assembled in HAL to interact with any bot on the network, and any system outside of the network ?
So then the actors are the base system, for each user, and then those sessions can interact with other systems, and can invoke different bots on them ?
The apps are ultimately filesystem stores, and we are free to use any intelligence we like to cause their updates and things to occur.

Things like checking formats would all be done inside the nApp, but figuring out what to change is optionally handled by anything you want, or we can supply some defaults - we dont' much care.
So the internal logic is handled by the provided nApp systems, but interactions are via HAL.

Could a terminal go and interact directly with a nApp ?

Actor repo is an nApp that holds all your files, and holds reference to bot images.
Run various bots as forks of the base branch, s* is for sessions, but a* is for agents ?

The differe