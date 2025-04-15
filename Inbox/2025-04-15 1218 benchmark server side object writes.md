
>[!tip] Created: [2025-04-15 Tue 12:18]

>[!question] Targets: 

>[!danger] Depends: 

Need a bench of, when running on server, multiple blobs get written in parallel, to see what latency we should start to expect.  Seems like something is causing our requests to queue behind each other somehow.

It's almost like the http protocol is queuing things up, rather than parallizing.