
>[!tip] Created: [2024-04-20 Sat 10:23]

>[!question] Targets: 

>[!danger] Depends: 

Start by touching 10k files on disk.
This should be done using a branch amplifier, or in batches for max speed ?

Perhaps touch can be a system function that we will manage.j

Once the files are on disk, run the glob matcher to loop over them all and generate some random text.

This lets us turn the ramp up of the actions using an action batcher.

When they return, they will merge straight into main, since there should be no conflicts.

Glob matcher should make the change scope be only the matched file, since concurrent changes require merging.

Glob matcher can't handle merges ???

We might want to use git style subfolders to make the sizes of the customers more manageable.