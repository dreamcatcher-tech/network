
>[!tip] Created: [2023-12-29 Fri 13:51]

>[!question] Targets: 

>[!danger] Depends: 


Text can then be stored as git diffs, rather than full copies each change, or any other complicated structure.
JSON diff could be used anyway, where the state can be arbitrarily large, and we just store the diffs.
If we have schema we can use a compact form of the string, and then can just use diffing of that.
Use theory of patches to make efficient diffs, but either way, this solves the large state problem.

If you have the schema, can walk to where the path should be, and lookup quickly rather than needing to retrieve the whole string perhaps ?.  Maybe put some index info in the string, and then can use the indexes to get the last pulse that changed that piece quickly.  Means we can also update just a small piece of state very lightly.  Can lookup portions of large objects without loading the whole thing.

The JSON conversion layers on some lookup info on each key, then flattens it down.

Can use git itself to compute the diffs.
Is then, the whole database just a git repo ?