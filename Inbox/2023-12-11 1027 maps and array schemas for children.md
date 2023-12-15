
>[!tip] Created: [2023-12-11 Mon 10:27]

>[!question] Targets: 

>[!danger] Depends: 

Being able to specify what the children should look like within the schema of the parent.
Collections should be an implicit thing, rather than requiring anything special from us.
Should permit arbitrarily deep nesting.

If we use the array form and reserve a special key for children, we can constrain the object to be an array or a map.  So the reserved keyword `.children` would be a special state key, and would specify the schema for the children, which might also have this reserved key to be deep.  Could have min max and other constraints on the children.  Could be anything that schema allows.

But, is there any point in this if we could just have large state ?  Particularly if we could do parallel updates to the state ?

These systems should work equally good if everything was printed out on paper and just rescanned back in.  Probably would be cheaper than paying for storage and is easy to back up.  Could be a good way to get people used to the concept of immutability, if we write everything to a new piece of paper whenever changes get made.  Could make a VR view of your database that works in this way.