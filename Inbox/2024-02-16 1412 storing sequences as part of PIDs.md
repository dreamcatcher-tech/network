
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

Might be easier to work on pure git based functions that are independent of queues and locks and other such complications.

To get pidlock is to have the right to order the pool items, by way of a commit.
This includes outcomes.

if qmsg had the commit it came from, it could use this to check it wasn't a duplicate, since 

Get fs, which has a certain version assosciated with it, then get headlock and confirm the version.