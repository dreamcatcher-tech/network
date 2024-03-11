
>[!tip] Created: [2024-03-12 Tue 10:18]

>[!question] Targets: 

>[!danger] Depends: 

pijul, idempotent actions, delivery at least N times, payment per message.

The key to a large chain seems to be a large distributed queue.
Items come from a pool into the queue.
Using pijul may allow for multiple actions to be run in parallel without coordination, and only coordinate when conflicts occur.

If each action stored what files and offsets were read from, then we can know about true isolation between any of them.

Pijul may allow better composition of actions executed independently.

The payments should be separate from the queue itself - they are part of the substrate of the queue.

The state of the queue is agreed on by consensus.  Then workers take jobs of the queue.  Workers say what jobs they are going to take, and their forecasted run time, and the queue adapts if they take longer than they thought.  The load is spread around.

Key to the whole thing is at least N delivery - depending on the redundancy guarantees - to reach consensus on the output of each message.
This quorum can be used to ensure rapid response times too, so taking 10 workers and just taking the fastest one, with some recovery mechanism if the fastest was in error.

There should be one queue per git repo, since this is an area of authority.  Messages may be segmented within the queue by the PID, to allow those machines that already have things loaded up to take advantage of that.