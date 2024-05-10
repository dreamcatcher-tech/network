
>[!tip] Created: [2024-05-10 Fri 18:23]

>[!question] Targets: 

>[!danger] Depends: 

how should the server track when it has an isolate or not

When a new isolate starts, it needs to know what the home address is.

Store it in a key in the kv store and cache it when it gets read ?

Store it in an env var ?
Makes it clumsy to blow the db away tho.

How can it be atomically set in the db ?
Using an effect lock or similar ?

If we set host keys in the env vars, and then if the home address was always derived from these, then it might be cleaner ?

Or, make repos be predictable.

Home address should be the only thing you need.

If we had predictable commits, then we could generate it solely from a signing key ?

Ideally we would poke a hole to install the home repo and set up ourselves as the master machine init, so we have admin rights on the admin level based on our special machine id.
Then, only piercings that have that sig can target admin level settings, and all other permissions are denied.

So we would puncture the system once, from a privileged vantage point, with a single action, which was to deploy the home system, which is the foundation of identity for the system.
From that point on, everything is subject to signature controls.


This could be a repo that was run in colab with other entities.

It is unique in that the branches are named after public keys, so it means there is no chance of collision without it being genuinely the same key.