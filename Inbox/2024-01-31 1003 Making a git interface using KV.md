
>[!tip] Created: [2024-01-31 Wed 10:02]

>[!question] Targets: 

>[!danger] Depends: 

We could store uint8 snapshots of the git dir in memfs.

This would give us great performance, simpler coding,

We could split it out to present as a separate deployment, that we can improve independently.  The interface it gives to the system can be constrained, and then it can be masked however we see fit.

Full pull and push to git is easiest way now.

