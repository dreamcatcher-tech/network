
>[!tip] Created: [2024-11-05 Tue 10:39]

>[!question] Targets: 

>[!danger] Depends: 

Calling definitely needs to send in some files in a snapshot.

It only needs the files when it makes a read call.

Write is done by an action too.

During the course of execution, the fs might change, altho the initial version should not.

If it needs starting files, then it needs a filesystem snapshot sent in ?
Or is the fs snap only needed to reconstruct files on demand ?