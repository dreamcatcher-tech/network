
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
Write the sessions in the actor, so that when you authenticate, the sessions in the actor are copied over.

Store the sessions in the machine ?
listing sessions lists all machines and then lists all sessions

Store in machine until you are authenticated, then copy into the authenticated actor ?
Store them as sessions based on apps, where each app has a directory where it can list data.
It could be any data, but for starters it can be sessions that the user is involved in.

Inbox for sessions you have been granted access to ?
Just a general inbox, with AI processing for spam, paid for by sender.