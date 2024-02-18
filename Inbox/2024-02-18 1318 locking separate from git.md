
>[!tip] Created: [2024-02-18 Sun 13:18]

>[!question] Targets: 

>[!danger] Depends: 

The git layer doesn't deal with locking - it does have structures sympathetic to making locking cheap and fast, but it doesn't handle any locking itself.

So serial actions have no need to keep queues separate, since we always know what the last action to watch will be.

If there were two queues - serial and parallel - then we wouldn't need to write down the proctype ?
But since we need proctype for the messages, might as well have a single queue and then have proctype recorded ?

Single q means message delivery can be handled by writing each sequence number to the db then sending a message to process it.  Use an eager atomic check here.

What is the enumeration of all the IPC maneuvres that can be done ?