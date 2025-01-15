
>[!tip] Created: [2025-01-15 Wed 13:12]

>[!question] Targets: 

>[!danger] Depends: 

First it needs to provision how the artifact will be passed into the napp.

Then when it runs the napp, the service starts to handle what the napp is doing.

It could run by way of cron, where the server triggers the poller to poll ?  Means a manual sync could also be done.

We would make in memory mocks of the atomic and blob stores.

We could push to b2 directly and store the atomic db locally, to skip having a deno deployment ?