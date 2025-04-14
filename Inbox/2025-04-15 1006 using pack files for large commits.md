
>[!tip] Created: [2025-04-15 Tue 10:06]

>[!question] Targets: 

>[!danger] Depends: 

when a commit is large, we might find that we can get better results from using a pack file ?

removes the problem of storing huge numbers of tiny files.

ideally we could start using the actual git executable, write it out to disk, then sync the disk back up to tigris afterwards ?  still need to intercept the fs calls.