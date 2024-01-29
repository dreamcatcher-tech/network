
>[!tip] Created: [2024-01-29 Mon 15:17]

>[!question] Targets: 

>[!danger] Depends: 

If we truly integrated with edge rendering, then the git repo would stay on the edge isolates, and the changes in files would get streamed down to the client.

Rending lists of chat history would be on the fly with some range being specified, and they keep getting hydrated as new ones are required.

The files would be served down from the server as part of the commit that is in progress, and ultimately the files would be commited.

So the client would signal via a route which repo, which branch, and which files it wanted.

Artifact functions like dispatch would be routes on the server ?
The clients are really just watchers of artifact, not active executors.

If built this way, then a desktop app simply bundles deno up inside it.

Could the UI components be streamed down as files that are loaded dynamically ?  If it is packaged as being standalone, and streamed down from esm.sh, then we can use everything we are used to from it ?

So the client is just chunks of the commits, and this is all that comes down to them.
