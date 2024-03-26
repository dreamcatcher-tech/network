
>[!tip] Created: [2024-03-26 Tue 14:50]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to load up a debug terminal, pass in the path and commit / sequence that we want to start from, and then begin running code that we can breakpoint in to while at the same time it checks what the outcome stored on the chain was.

Then, once the execution code stabilizes in the cloud, it becomes all about debugging user apps.  This system would also help trace bugs in the core, implicitly rather than directly, since we can see what we think the system should have recorded, and trace why it was different.

Need this to be able to get to a place of stability where we can commit to looking after peoples data permanently.

Upgrades can be with a maintenance flag or env var that locks everything ?
How to gracefully shutdown ?
Rely on the queue for recovery and for transitions ?

git fsck implementation is important too.
Plus checking for dangling items.