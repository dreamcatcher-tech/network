
>[!tip] Created: [2024-04-10 Wed 11:47]

>[!question] Targets: 

>[!danger] Depends: 

The system chain is a place where user accounts get created.

Client keys get supplied in, which give rights to do system level actions.
If the env var isnt' set, then the first isolate to boot will check if the system chain has been made, and if it isn't there, it will make it.  This action is not recoverable, so if this crashes the system failed to state.  Once the env var is set, with the ulid of the system chain, then no further attempts will be made to create it.

Inter repo comms is simple so long as we're inside the same hosting environment.