
>[!tip] Created: [2024-07-24 Wed 11:43]

>[!question] Targets: 

>[!danger] Depends: 

All the fs functions should be exposed, but they should also be targettable to remote locations, and should be the same api on the backchat object.

Api should have a function named remote or target, and this would make a new api function that was scoped to this remote target.  It would not have a remote function itself.
Then when reading, the engine will fulfill local calls.  The accumulator will track them tho, so they can be replayed accurately.  They basically just have a commit hash to be used as reference to look up, and the validators would check they have the same location.

If it is a remote repo, then it will possibly complete its operation, which the engine goes and looks it up, but if it is within the same host, the execution will pause ?

Or maybe all remote repo requests should cause a commit, allowing arbitrary resolve times.