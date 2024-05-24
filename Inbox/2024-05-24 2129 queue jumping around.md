
>[!tip] Created: [2024-05-24 Fri 21:29]

>[!question] Targets: 

>[!danger] Depends: 

If an action comes in once on isolate A, then runs the next step in its accumulations on isolate B, then accumulation again runs on isolate A, then the cache would be corrupted ?

Hopefully, the accumulator should slurp that all up ?

Suspect that during provisioning, the isolate runtime timesout.

Is the startup taking too long and the original isolate gets dumped for taking too long ?

So, the initial installation process should be a queue event, so the initial loader can do its thing ?

Test if this is feasible by making a db reset function call be sent in to the server.

Split apart installing home and provisioning the system.

It can make the provisioning be an actual remote call ?

artifact queue processor could recognize completion of the initialization pierce, and do some continuation there ?

So blank provision just sits there waiting for provisioning, or begins provision on first request - NOT on first light.

Send of the provisioning request into the queue to be run by a queue action, which is idempotent.

May need to hold the whole db in maintenance mode until the provisioning is completed.