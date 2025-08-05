
>[!tip] Created: [2025-08-05 Tue 16:36]

>[!question] Targets: 

>[!danger] Depends: 

We could set up the indexes so they are asked for in the git files, but the host of the repo is responsible for creating the index.

On first one, they would build the index, but in a way that they were trying to answer the first query and storing the result.

there is no point storing in disk what can be recreated.

it could have the hash of the index as part of the checks, so that you always know that the index matches or has been updated correctly.

storage for this would be charged for too ?