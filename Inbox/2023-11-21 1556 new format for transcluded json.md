
>[!tip] Created: [2023-11-21 Tue 15:56]

>[!question] Targets: 

>[!danger] Depends: 

This may be simply linked json, as shown in ipfs.

Means that data stored in our system holds transclusionary reference.

It might require each state change to be json diff, so we can walk the state effectively ?

Otherwise keys and parts of keys need to be transcluded, which can be hard.

But how to rapidly walk back thru patches to show which commit caused the change ?

Might need to walk the whole chain to get all the transclusions ?
Store the full state, and the patches of the current change.  Then walk backwards until the full state is accounted for by all the patches.  Digging deeper requires going back to the current layer to lift it up and go under it.

Or cheaper to just store the full state, and walk back building up the diffs as we go, since less storage space is consumed for the same functionality.

Or, rely on children and referencing to children as the way to show transclusion, if we treat children as keys in some top level json.
So then the state needs only a special escape sequence to point to a child by path.
Import children using a span, or a span and a transform of some kind.

Store the state as a HAMT, so finding a key in it is a direct lookup.
Has the advantage that the state can be infinite without any changes.