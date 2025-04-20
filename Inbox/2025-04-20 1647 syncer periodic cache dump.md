
>[!tip] Created: [2025-04-20 Sun 16:47]

>[!question] Targets: 

>[!danger] Depends: 

Periodically, if RAM pressure was high, we could replace the current caches with only what is in the current tree. Or we could take a look at the size of various items. The tree cache could be assessed for size based on the number of trees. We could have tree entries in each one, and files can be by blob size. We could maintain a set which represented what had been most recently accessed or used and we can just simply purge whatever is old or stale so it's not part of the current thing.

All purging requires keeping the current item in fidelity, and so we really need a list of which top-level trees are being tracked or held so that the cache purging is done on old trees or trees that are no longer using anything. 

In cache we would simply walk the trees and make a new map that marked only the ones we were going to keep and then just dump the old items. 