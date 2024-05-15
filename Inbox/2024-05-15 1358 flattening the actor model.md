
>[!tip] Created: [2024-05-15 Wed 13:58]

>[!question] Targets: 

>[!danger] Depends: 

If every machine needs to go via an auth provider anyway, then we might be able to flatten the actor branch heirarchy.

So all machines would be tied to a single repo, and they would have arbitrarily many sessions.

Actor ids would be another repo again - the Actors repo - which requires cooperation with at least 1 authProvider.  If a machine is unauthed, then it just stays as an unauthed machine.  Authed means that more than one machine can act as a single actor.

Unauthed machines make a temporary actor, where this actor is merged when they auth.