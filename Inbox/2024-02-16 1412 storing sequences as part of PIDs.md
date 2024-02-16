
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

Could assign sequences before messages are dispatched, so we can do checks on the messages ?  Or send with it the tip commit we know about, so if this is not the tip when we get to processing time, we should check if we are included or not.

Locking and message duplication is not part of git, so should be kept separate.
Multithreading is also a separate concern, and so an interface should be constructed so we can run each domain component independently of any others.

The reply mechanism for other branches should be the same as the user dispatch awaiting.
So if the user is a dedicated branch, then we can just keep it updated like any other.  Watching for outcomes becomes an independent system.

Reply seems similar to merge - maybe they are the same thing, but a merge carries some extra branch info with it, is all.  Reply to self carries the same branch info with it.  So all replies could carry their pid, and all get treated the same.