
>[!tip] Created: [2025-01-01 Wed 16:00]

>[!question] Targets: 

>[!danger] Depends: 

pm2 runs a deno task that pulls from a published jsr package which asks for an api key which then starts pushing the xml objects it downloaded up into a persistent store somewhere.
It requests the moneyworks base url, and defaults to the name file.
Or, gets told what url to pull the git branch from, where it pulls from an api and git branch, where it gets its pull instructions from, including the moneyworks URL.  moneyworks password can be stored in env file, or in localStorage.

start off by pushing into a local running instance of the api that only listens on localhost.

It doesn't have any b2 type storage, and it just stores direct to files on disk, using git put object.

