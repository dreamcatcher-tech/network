
>[!tip] Created: [2024-10-29 Tue 16:29]

>[!question] Targets: 

>[!danger] Depends: 

By using the api functions we should be able to emulate any native filesystem access.

This means that uncooperative packages could be used with no modifications, or with very light shims.  Things like image processors fall into this camp.

Maybe there is a way to make a platform agnostic fs, where in browser it uses opfs, and in deno uses its native tools ?

