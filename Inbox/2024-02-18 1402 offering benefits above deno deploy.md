
>[!tip] Created: [2024-02-18 Sun 14:02]

>[!question] Targets: 

>[!danger] Depends: 

We could offer fixed price deployments, and consumer pays deployments.

Currently deno has no billing limits, so we could guarantee this.

Could just make a deno package that checks a spend control whenever any isolate fires up, to ensure that it can continue ?
Would stop the deployment if it was detected to have gone over spend.
Set spend limit in env.

The only weakness is if the isolate doesn't get terminated and can cause a huge bill without getting terminated.