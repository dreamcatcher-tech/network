
>[!tip] Created: [2025-07-30 Wed 15:53]

>[!question] Targets: 

>[!danger] Depends: 

polling the db sucks.

what we should do, is when a watcher starts, since it is assosciated with a specific instance of the db on a disk, we would write to a special little slice in the db for watchers, and then when we do a commit, we trip the watchers.

this makes watching naturally very efficient, since they can all spec whatever they want to see, and writing a little note in the db doesn't change anything ?

better yet, we have something sitting in ram, which each time a commit occurs, since we are always running a single in ram process for the store, it simply trips watchers that have subscribed, who can then make their own decisions.

Watching in a networked db which might have arbitrarily many nodes that have written things - a concurrent distributed system - is incredibly complex and slow.  Watching on a single computer is incredibly fast.

This paradigm shift is like the threading model of node - there is only one thread, which makes it trivial to think about what is happening.

We could also in a multi thread scenario do fs watching of the db file, so if we see that change, we should read all the subscription keys again and check the version still matches.

these distributed systems are actually the complexity curse, and why blockchain makes things better.  This design model is much more aligned with blockchain principles.  It can run on anything that can run docker, or our native apps, and can attach a storage system.