
>[!tip] Created: [2024-01-23 Tue 10:40]

>[!question] Targets: 

>[!danger] Depends: 

Upon first boot, artifact should try to pull down the 'pieces' repo, or similar.
Artifact is then actual code, and the webpage that runs, then when boots it pulls down the HAL repo.  This repo contains all the pieces that get loaded up and run by artifact.  To start, this is just the help files.  It will expand out to include artifact itself.

It seems weird to pull down the actual artifact repo, since changing the code of artifact itself seems a bit bonkers.

If you want to push back the changes you make, you need to go thru the oauth loop.  The credentials are stored in a .env file which is git ignored.

Each user starts up their own branch of the HAL repo, and then a worker pushes their commits and branches up constantly.

We would push only the main branch, which would include all the merges that came with it, so we don't get loads of branches that were used for processes and are still running.  Long running processes would have done a merge with the main branch, and so we can navigate them once they have finished.

This repo shall be called HAL.

Then each other repo is a submodule in the users particular HAL branch ?
So the CRM guys would have a private repo spliced into their HALs.
They would need github auth to access this repo.