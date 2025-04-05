
>[!tip] Created: [2025-04-05 Sat 16:19]

>[!question] Targets: 

>[!danger] Depends: 

With careful datastructure design, a middle ground can be struck.

If data is stored in very small units, such that a change always affects a whole unit, then git acts like pijul in that it only stores diffs.

Also git needs its directory system sharded, which is something that should be done under the hood.