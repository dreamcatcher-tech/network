
>[!tip] Created: [2025-01-04 Sat 16:59]

>[!question] Targets: 

>[!danger] Depends: 

Could be either lambda functions, or docker containers, which is configurable.

Lets you just connect up to this job queue using deno queues.

These queues then do heavy long running tasks and have a way to call back to the deno isolate that called them.  Can use keepalives to let the isolate stay active for a long time, or provide a way for a database to reconnect.

On isolate teardown, they have a recovery mechanism if the client sends in the same job token.

Can issue and stream back progress updates.