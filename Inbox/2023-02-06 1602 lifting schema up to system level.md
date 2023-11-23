
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

Should be able to set the chain schema based on being a datum, then update the chain schema based on the datum schema user supplied specifics.

So the state would be the object of the schema, the schema would be a dedicated key in the DMZ.
The state would be schema checked each time the state was set.
Default is an unrestricted object.
Templates would be fine here, since the state shape holds the template key.
Schema could reference a path, such as in a collection, to avoid copying everything everywhere, and to update as one.
Transforms / upgrades could be performed by AI ?

## Benefits:
### Vastly faster hashing
Schema lets toJson() be done rapidly, speeding up hashing.  Decoding is faster as well when reinflating from binary.
### Compression
Having a schema lets us remove keys from the state and write a custom encoding that is very space efficient.
### Correctness
Being able to rely on the state shape, and have it subjected to consensus means less chance of bugs, and more trusted reusability by others.
### Large State optimizations
We can punch out state into CIDs if it gets large, like arrays.
These can optionally use HAMTs if things get very large ?

