
>[!tip] Created: [2024-10-29 Tue 16:55]

>[!question] Targets: 

>[!danger] Depends: 

Often it doesn't actually matter what the PID is, the consumer only cares about things like talking to the parent, creating a child, or creating a peer.

So to avoid this, and introduce relative addressing of branches, we should change to making thread management be something abstract, and git branches are just one form of implementation.

There is very little need for any isolate to need the absolute address of anything, since that starts to impact its portability and where it can be used.

This abstraction means that it can be met by many different backing systems.

The state of the api is where child addressing information would be available.