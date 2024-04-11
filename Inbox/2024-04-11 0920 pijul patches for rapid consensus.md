
>[!tip] Created: [2024-04-11 Thu 09:20]

>[!question] Targets: 

>[!danger] Depends: 

Pijul makes commits commutative, if they do not depend on each other.

This means that if independent validators sign something, their signatures can be valid (possibly?) even after merging things that are unique to either of them.

Without pijul, they would need another network round trip to reconcile their patches.
With pijul, so long as there were no conflicts, the end result would be the same.

We could also sign just the content of the repo, rather than how we got there ?

We could use parts of the signed tree to indicate convergence on parts of the repo, and work together to get those parts synchronized ?

Pijul could help make shared editing of text files easier to manage, like google docs.