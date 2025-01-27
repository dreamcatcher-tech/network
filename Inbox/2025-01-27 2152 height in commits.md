
>[!tip] Created: [2025-01-27 Mon 21:52]

>[!question] Targets: 

>[!danger] Depends: 

If merges summed the heights of all commits, then we can use this to know when we have a good view of latest ?
the issue is that each client needs to be presented with a reliable view of latest - it can be delayed, but it can never be backwards.

counters help overcome this, so we know what height we have seen last.

The event counter can help with this too, since all events for that branch are counting up.

so each client needs to have an idea of the counter ?

Case is that one read can be stalled, then another write followed by a read finishes first, so the first latest will be stale.

So each request that is mutable, like latest(), default() - there are very few - but these should also come down with their event numbers, so we tick that forward in the client, and know to keep trying if something comes back stale.
