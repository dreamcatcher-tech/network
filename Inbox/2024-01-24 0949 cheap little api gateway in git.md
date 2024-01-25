
>[!tip] Created: [2024-01-24 Wed 09:49]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to provision a git app that can be set up to act as a little api gateway, where requests come in, which trigger actions to be run in a given branch, and then the app responds.

So it should be quite trivial for people to publish apps that have high scalability and high traceability with low distributed latency.

We would translate their app to run using a deno network, so the requests are always localized.

They run and test in git.  Faults and production records are in git, so they just rerun requests and trace the results out - no need for logging, just rerun the application repeatably.

The backend could be traditional web requests, or it could be an actual git app.

Git apps that run browser side should be able to do git powered requests which don't need to use the api gateway service.  They would request git based services.  Hopefully these can be made low latency too.