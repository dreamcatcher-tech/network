
>[!tip] Created: [2024-02-25 Sun 10:13]

>[!question] Targets: 

>[!danger] Depends: 

once we have packfiles, and if we are using the kv as a direct backing store for git, then we can start to distribute pack files using ipfs or other protocols, so they are distributed.

We can use the contents of the git files to instruct who is allowed to access the pack files.

So repository permissions and sub permissions would be stored in a file in the repo, and this would be honoured by holders of the data when connections are made.

To pull down the pack files, a client would contact many servers and ask for different parts of the repo, then ask for more from the more performant ones.

They should be able to charge for this.