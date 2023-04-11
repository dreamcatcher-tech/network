
>[!tip] Created: [2023-02-21 Tue 19:35]

>[!question] Targets: 

>[!danger] Depends: 

When asked to load 12,000 customers, bitswap chokes.

This could be that it cannot handle large numbers of parallel requests.

To get round this, requests should be queued.

In customers, we should only request max N at a time, and we should tie this to what the large table is asking for.  When the table moves a row out of view and that row has not been requested, we should prioritize whatever is currently in view instead.

We should wait for each pulse to fulfill, before asking for the next pulse.  Then push a syncer so the gui can updated

We should also dedupe our requests into bitswap ?