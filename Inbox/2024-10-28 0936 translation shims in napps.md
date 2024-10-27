
>[!tip] Created: [2024-10-28 Mon 09:36]

>[!question] Targets: 

>[!danger] Depends: 

The author should publish the napp directly, but in the registry we need to create a thin shim that provides compatibility to all the other runtimes that we support, so that those runtimes can import the package as tho it was one of their own.

So we basically need to check with all the popular registries and confirm we can make a universal registry format which can allow every package type to load using all popular patterns in their native code.

The utility of this might wane a bit once it becomes more effective to connect all the pieces using jsonfunctions anyway.

This would be the rosetta stone of languages, and would be a universal package format.