
>[!tip] Created: [2024-03-29 Fri 21:17]

>[!question] Targets: 

>[!danger] Depends: 

If we read the head at the start of the op, and only make changes if nothing has changed, then we know we are exclusively the only one with lock.

This means we can burn cpu time from wasted duplicate attempts, but greatly simplify locking across the application.