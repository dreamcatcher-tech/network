
>[!tip] Created: [2025-02-17 Mon 09:38]

>[!question] Targets: 

>[!danger] Depends: 

Last writer wins is bad for systems that depend on a consistent view.

If we have an object lock system in place, where objects cannot be overwritten, and our system uses only hash based objects, then we can make a strongly consistent system.

If we turn on the object lock, then whatever we wrote and fully wrote would be canonical, so a writer would know if it was defeated by reading back the info again.

However because it is hash based, it wouldn't matter if a writer lost.

Its almost like our own consistency guarantees, we can then map those to underlying services, and show how we translate and combine those guarantees.