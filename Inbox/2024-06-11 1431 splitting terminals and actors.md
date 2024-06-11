
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

The machine cannot be faked since 

? could the actor repo issue tokens to terminals which are signed ?
No since have to deal with revocation - a straight lookup is better.

The advantage of this design is 