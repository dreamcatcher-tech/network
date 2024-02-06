
>[!tip] Created: [2024-02-06 Tue 20:05]

>[!question] Targets: 

>[!danger] Depends: 

What are banned names for branches ?
Trouble with nested branch names, is that for pool, we need to name something as a sequence so it can be listed, but we need a branch name that won't collide with anything.

Seems impossible ?  May have to accept some collision as part of the operations ?

If we reverse the branches, then it might work.

If the type was ALWAYS at the end, then we can know for sure where the branch path ends.

And then if the the ulid came after the type, then we can get the pool without collision.

But, we couldn't list all pool items at once.

Or, we could have a pool branch path termination character always ?
But same problem - could get back a list of all keys with the same branch name ?

Could just filter out the results in the kv store, on the rare times that there were collisions.

If use an end termination character, and then we do an escape on the name so there can be no collisions.