
>[!tip] Created: [2025-01-16 Thu 16:58]

>[!question] Targets: 

>[!danger] Depends: 

Its purpose is to provide clone push pull interop with github and other git repository systems.

It manages the lineage, which is actually very simple.

It can provide some merge logic, but we might just copy that, or port it over from the c versions.

Or, do an AI merge, where we solve the merge conflicts using a smart AI ?  So we can show the conflicts easily, but then solving them takes an AI or a human.

So tip does the main interfacing with the artifact API, in the scratch space.  Then it pushes to a provider underneath that is free to implement commits any way it pleases.

The core idea is that git need not be our format, we have abstracted out the things we need, such as snapshotids, files and folders.

To maintain git compatibility, we fake what git would be presented with, so we can maintain the ability to do push and pull without implementing this ourselves, which might actually be better in some respects.

Its almost like there are some other providers, too, like an environment provider, fiber provider, lineage provider, files provider, which is sort of underneath tip and only gets triggered for reads ?

So lineage and files seem very related.

Git is really just a way to structure data in blobs so that we have lineage.  Plus giving this connectivity.

A snapshot / tip layer is stateful, whereby it holds the live data within it.

Snapshot should track is dirty based on what it has read ? or should its object cache hold this ?

So tip seems to be passing thru everything in the lineage provider, except it intercepts commit() and puts in its own change data.