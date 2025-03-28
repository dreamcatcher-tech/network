
>[!tip] Created: [2025-03-29 Sat 10:01]

>[!question] Targets: 

>[!danger] Depends: 

issue is that the gitKv layer needs to make itself again.  In the provider implementation of the tip functions, it actually calls gitKv, so if gitKv needs to call a version of itself again, this could be problematic.

extract out utility functions from tip, so we can pull up the files in a simple way.

But there is caching in the tip, which would be nice to take advantage of.

We would refuse to write to the `artifact-consensus` branch unless in our stripped down version.
Must be able to read from it, but we should block anything going to it.

Then if we want to implement sharding for this branch too, things get tricky.

So how to treat it like a genuine filesystem branch ?  We are already running in a context, so we can call provider functions directly.  Make  a form of tx that doesn't create actions in between.  It just calls implementations directly.

we may need to have file pattern filters for this branch that only permit an allow list of files. 
