
>[!tip] Created: [2025-01-15 Wed 14:57]

>[!question] Targets: 

>[!danger] Depends: 

.ping()
.exists()
.environment.init()
artifact.scope.repository.publicKey
.default()
.bind({ branch: })
.lineage.write.fork
.files.read.exists
.files.read.json
.files.isDirty()
.lineage.write.commit
.latest()
.files.write.json

Plan is to write a mock that can used in memory to run the service and just see what changes.
Give the CLI the option to start from a given value by default, possibly by setting something like --today so it only watches from midnight.


Need some repo info, like the default branch etc.

repo init should create a default branch and store it somewhere.

when we go init, this returns the repoid, since it should be cryptographically bound.

Need to store some info about the repo in the atomic store, or maybe in the config file somewhere.

The info should store info about the blob store and how to get to it.  Blobs are just completely opaque dumb buckets.

So really the CLI should be creating an action and then calling a local napp execution environment that pipes its artifact operations out.  It should use a cron job to schedule its own repetation, or use the api setTimeout to trigger the function to run again later.  Or just yolo it and let the napp run forever, since we aren't in serverless this matters less.