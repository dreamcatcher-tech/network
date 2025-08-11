
>[!tip] Created: [2025-08-11 Mon 15:31]

>[!question] Targets: 

>[!danger] Depends: 

so for openai remote mcp servers, we need to present this api key as well.

so if we start with just a hard coded api key, then we move to one that is managed using your account.

required for openai models using remote mcp.

we could have a central API key store, where we look up the user id based on the key ?

Or, we make the api key be a jwt, and we decode it to get the userid, and we store the api key status inside each actor repo.

We would read the latest commit from the actor repo so we know if the api key was still valid, plus a small cache.