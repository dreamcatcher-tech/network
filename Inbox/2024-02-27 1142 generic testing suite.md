
>[!tip] Created: [2024-02-27 Tue 11:42]

>[!question] Targets: 

>[!danger] Depends: 

If we made a function that got dropped in anything that matched the artifact interface, it should be able to use that plus some test isolates to exercise everything about the system.

Because testing the queue, and testing the web api is supposed to be a direct pass thru layer.

1. Artifact pure - no queue, just direct thru to the isolate functions
2. With queue - as it would be run on deno deploy
3. Via web api - as a client would access it
4. Web api with no queue - web should just take an artifact interface

