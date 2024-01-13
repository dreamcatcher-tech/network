
>[!tip] Created: [2024-01-13 Sat 20:10]

>[!question] Targets: 

>[!danger] Depends: 

In the page, if we have addressse to code we want to load in a webworker, we should give it a base url to try load from, intercept the call, and if it is in the git filesystem, we would fulfill it from that filesystem.

This gives the illusion that the code is being loaded from the filesystem, by tampering with only the file resolution mechanism.