
>[!tip] Created: [2024-09-19 Thu 12:14]

>[!question] Targets: 

>[!danger] Depends: 

We need a way to be able to connect a locally running instance up to handle the queue processing. But to have the get objects always stored in the cloud. To allow us to debug the state of these remote repos is though it was running locally. 

As well, we might need to be able to pull these reverse down locally. So that they can be recreated. So this would be a specialized form of copy where we would copy the objects from The cloud database to our local database by walking the tree.

If we had a proxy where we could connect to the cloud db directly, we could proxy read requests for objects, and be able to exercise the remote git repo.