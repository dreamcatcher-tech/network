
>[!tip] Created: [2024-10-31 Thu 16:12]

>[!question] Targets: 

>[!danger] Depends: 

Problem is that when calling ai APIs, we have to supply all the previous messages.

This clogs up snapshots badly.

We should instead be snapshotting just the user additions and the machine resposes.  this should allow a way of putting a proxy in front that strips these bits off on the way back, so the snapshots are minimal.