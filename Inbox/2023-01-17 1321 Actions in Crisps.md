
>[!tip] Created: [2023-01-17 Tue 13:21]

>[!question] Targets: 

>[!danger] Depends: 

Resuse of action mappings so we aren't making thousands of these mappings in a collection set.
If the covenant is cached for the covenant path, and it gets treated like a crisp, then we can make the dispatches on the fly.

Could bake the covenant pulse into the pulse itself, and snapshot off that.
Means there is no need to have mutability in the root crisp, and the mutability is all in the pulses.
Also syncer need not keep a separate list of covenants, but can just walk as usual.

Makes segments of the crawl portable.

What about accumulated actions higher up in the path ?  what should their target be ?
### eg: cd()
Could walk up the tree and get the actions of everything in the path ?

? how to handle the root of the sync, where there are higher path segments, like the shell ?