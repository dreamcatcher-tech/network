
>[!tip] Created: [2024-06-11 Tue 14:31]

>[!question] Targets: 

>[!danger] Depends: 

If actors were stored completely separately, then we do not need the problem of merging machines ones they authenticate.

So the actor repo stores relationships with the auth providers.  The machines repo stores only machines, and knows how to interact with the user repo.

An app would need to allow terminals, and pick the actor repo it wants to use for credentials.
It could allow sessions to be started anonymously, or it could require sessions to be started only for authenticated users.

So could a machine auth with one provider as one particular actor, and with another as a different actor ?

Yes, we cannot stop that ?

A machine stores a pointer to the actor it has authenticated as, or is unauthenticated.
Each actor stores pointers to the machines that it controls.
If an app wants to know what actor a terminal belongs to, the terminal will present an actorID it claims to be a part of, then the app verifies it by trying to read from a file in the actor repo that matches the machine of the terminal.

The machine cannot be faked since comes from a trusted repo.

apps can lookup the actor chain and know who they are dealing with.
apps try to read from the actor chain, which needs to have been provisioned to allow reading by the machine.

The advantage of this design is no moving of branches required, and a flatter structure.

Terminal will claim to be from a given actor id.
The app has specified what identity provider it trusts, so it does a lookup on this.
the identity provider also tracks billing - this is the actor chain.

When a terminal wants to pierce an existing session, then HAL does a permissions check that the terminal is a given actor, and that the actor is allowed.

Machine may generate an anonymous actor id and name.
Once the machine has authed, it updates all its children with the new actorId.
If a terminal is already part of a session.
Query the machineId to the actor chain to see if it should be allowed.

Each terminal would keep track of which sessions they interacted with.
Then for an actor to list, it would list all machines and all sessions and update the list of active sessions with apps.
App admin can potentially see all sessions, but this can be revoked.

Updating a running HAL session with a user who just authenticated:
Multiuser sessions updating when someone authenticates ?
Start a user name lookup watcher.
Browser starts to watch for the name resolution of different actorIds ?
When the terminal pushes in a prompt, it claims an actorid, which later gets checked.
Only when something changes in the session, will the server assign a new actorId, which triggers the UI to do lookups using GET.
Or have a watcher that tracks the result of a lookup of the machineid.
Leave the session as anonymous, and only display who said what at time of statement.
So if prompt as anon, shows as anon.
Then, if they auth and prompt again, that shows as authenticated.
Client does name and avatar lookups based on GET

In session, assign each user a number, then do a mapping ?

Requirements of an app:
- find the actorId of a given terminal
- an actor can list all their machines
- an actor can list all their sessions in HAL / any app