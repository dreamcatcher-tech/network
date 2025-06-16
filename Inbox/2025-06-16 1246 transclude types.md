
>[!tip] Created: [2025-06-16 Mon 12:46]

>[!question] Targets: 

>[!danger] Depends: 

transcludes are like reconciling over the tree hash of a git commit - they don't care as much about the commit object itself, and care only about the final state.

commutation doesn't really matter, since they usually represent independent folders.

we use them as portals with uncolidable file trees so we can never have conflicts.

group id hash should be the shared key of the group, which may be intentionally made public.

anybody can cause a rekeying of the group keys ?
each individuals key should be unique so that we know who leaked it each time.

an individual chat is just id'd by the shared key.

transcludes, unlike commits, can overlay - so several transcludes that all point to the same object present as a multisig transclude.

transcludes might be better suited as pijul commits ? since they go cross repo ?  
then pijul can represent an entire repo, or intermediate states of a repo and git represents the permanent form ?