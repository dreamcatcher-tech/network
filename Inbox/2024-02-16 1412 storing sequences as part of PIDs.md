
>[!tip] Created: [2024-02-16 Fri 14:12]

>[!question] Targets: 

>[!danger] Depends: 

Then we could handle duplicate message delivery.

We would know if we were an echo, since our sequence number would have been processed.

Prefer an algo that avoids relying on key expiration, and that leaves no dust in the DB.

Counters moving forwards are good for this.

Parallel and remote should be the same thing.
## Parallel reply
apart from initial setup and closure, this should be exactly the same as serial processing.
Setup is turning the origin action into serial processing mode.
Upon serial reply being done, if origin, 

On respond to origin action, do a merge back in.  If the branch is permitted to daemon, then the branch can still receive dispatches.