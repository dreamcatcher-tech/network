
>[!tip] Created: [2023-02-14 Tue 11:20]

>[!question] Targets: 

>[!danger] Depends: 

When a covenant is exported, for programmer convenience, we could also export sets of helper functions that the dev could use, like `await useSectors( '/path' )` or similar.

Wrapping in the api could be done with `api( '/path/to/chain' )` to get back a fully wrapped api of action creators that can be awaited, based on the covenant to that chain.
We could also wrap all helper functions with the given path as base.

