
>[!tip] Created: [2024-10-18 Fri 15:19]

>[!question] Targets: 

>[!danger] Depends: 

Should the isolate code be bundled into the napps format anyway ?

In other words, are isolates included inside the napp format ?

The api that we get given should be the only thing the platform supplies, as opposed to trying to supply some standard functions - it gives only an interface.

Override the files global, and present as OPFS interface ?

? Should the api be moved to being a global that your code expects to have present ?

Should a napp then be simultaneously compatible with a jsr package ?

Napps and runtime are fundamentally different.

Running a napp has not much use for looking backwards in history to see how the code was generated.

So at deployment time, we should have a list of napps that we want to reference, that we snapshot and pull in the latest versions of.   This would present a directory of sorts.

? could we browse them inside of a git repo ?
? lazy load by specifying the git repo to pull from and check for updates ?

Why would we publish to jsr ?
Speaks to the finality of napps.
Forces versioning.