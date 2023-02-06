
>[!tip] Created: [2023-02-06 Mon 16:02]

>[!question] Targets: 

>[!danger] Depends: 

If the schema for a chain was stored in system, then shape of state can be guaranteed.
Requires devs to specify the state shape ahead of time, too.
May allow us some optimality in hashing, and to allow parts of the state to be replaced with CIDs.
If we know we have an array, and we see the array getting large, we can do more if we know what the shape is meant to be.

Being able to control the state shape at a system level is very useful.
Datums might still require nested schema that manage the state of the datum directly.
But at least collections could use just the state directly.