
>[!tip] Created: [2024-05-13 Mon 13:27]

>[!question] Targets: 

>[!danger] Depends: 

Since localStorage doesn't have a versionstamp mechanism, we could end up in a position where two concurrent processes have each set localStorage, but one will be the long term persisted one.

This should be very rare, but also seems quite hard to handle ?

For storing machine keys, 

If there is strong consistency between locations, then so long as we read the keys back in from the storage, and we keep going until we get a consistent read, we will have to hope it works out ok.
If we have the db, this is a better option.

read first, then write, then reread, then delay

Write two items - intention to write, then read from the intention and do the write ?

Or listen to event storage changes, and panic if the keys change ?

Ideally this would all be handled by a single sharedworker, to guarantee concurrency control.

Can use time to ensure the latest version is always used ?

In server, we use .env vars, or if test environment, generate keys on the fly.  In browser, external to the engine, handle the key management, so they are only ever inserted in there.

We will supply key generation tools, so keeping the keys private is up to the local system, not us.

How do we recover a previous session, and how can we check if the session is still valid ?

We do not have a way to start a machine from recovered keys and check if it needs to open a new connection in case its existing session is invalid ?

Upon restart, the engine should be able to respond with whether a session PID is valid or not