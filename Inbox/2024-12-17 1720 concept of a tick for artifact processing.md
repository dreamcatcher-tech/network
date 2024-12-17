
>[!tip] Created: [2024-12-17 Tue 17:20]

>[!question] Targets: 

>[!danger] Depends: 

We would wait for all the ticks to complete before making the next commit ?

just want to avoid the queue loop since that slows things down a lot.

so we need to handle the pool increasing, but we need to cut it off at some point.

OR with a tick, the pool always fully completes, except for incoming external actions ? so we would always process local actions once ?