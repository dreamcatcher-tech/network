
>[!tip] Created: [2024-09-04 Wed 14:36]

>[!question] Targets: 

>[!danger] Depends: 

There should never be a dependency on the AI to perform inside of artifact, as these responses should be entirely mocked.

The purpose of artifact tests is the code mechanics.

We can tap the responses and store them, so they get replayed in some way.

This makes our tests faster, and more reliable.

Deleting the snapshot of the ai responses would cause a rerun.
So for the test, write to disk whatever we capture from the snapshot.