
>[!tip] Created: [2025-03-10 Mon 17:42]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to make dynamic edits to code and have them run securely in these little fly.io sandbox containers. If we decide that we want to have other users, we could shift to a more stable or locked down version of this, or both of them could be exactly the same. If the code was stored simply as Tigris S3 objects, and scaling it was just a button that made the app more available, so that when any execution comes in it immediately pulls in the Tigris objects to recreate the file system that it needs to run on. I guess the only level higher than that is to turn it into a package, but it would be sufficient to publish a NAP with a git commit that would allow it to act like a package, but it came from a git commit rather than a package registry.

https://gvisor.dev/ and nsjail would work well here.

[[2025-03-11 1412 tigris as a docker image store]] we can run a mutable container, but a publication would make a dedicated container image for rapid retrieval ?

Or we might just use the git objects to do the retrieval ?  Would be faster if it was packed down, and was a full checkout ?

Or just rely on the tigris s3 based fs to supply the data we need ?  Make a true fs adapter atop the db, and run things that way ?