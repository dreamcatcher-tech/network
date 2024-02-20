
>[!tip] Created: [2024-02-20 Tue 13:43]

>[!question] Targets: 

>[!danger] Depends: 

If the id for each is the same, then we need to store the type as well.

Requests and replies
Replies:
- If the request was foreign, then we need to do a merge.
Requests
- If the request was foreign, need to branch or merge into the remote.

We can assume the system is faithful, and need not check for its faults.
Duplicate message delivery needs to be handled at the queue level.
Queue does outcome transmission and duplicate invocation fixing.
Queue should change the phase of messages, so that if it dies part way thru processing, something will pick it up again.

Trouble is that we need idempotence for all our operations, so the queue doesn't matter, since any isolate run can crash part way thru.
So we need atomics on our own internal operations somehow.
We can rely on retry occuring.

Retry should happen after some reasonable time.
The queue should not cause the kv to wait until it has processed.
All it should be concerned about is detecting if it is a duplicate, and if the duplicate is still running.
So it should wait for something, like a msglock or something.

poolkeys

If each artifact function left something behind, then each one can do its own idempotence management
The hardest to detect is when a message is currently being processed and a duplicate delivery occurs.

The strength of the ids should cover us from any errors.
Which means that requests should have a sequence number assigned asap, since this guarantees it can't be double committed.

The queue can at least not start a message that was started, and the recovery item can wait a bit until the current item executes or fails.  The isolate should have a self destruct timer too.