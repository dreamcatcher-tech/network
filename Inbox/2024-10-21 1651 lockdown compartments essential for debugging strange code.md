
>[!tip] Created: [2024-10-21 Mon 16:51]

>[!question] Targets: 

>[!danger] Depends: 


Without this ability, we might get tricked into running arbitrary code on a dev machine.

A workaround might be to run inside a child deno process with no access to anything, except message passing to the parent process.

Tests show we can indeed load imported modules from inside deno deploy, inside of compartments.

Copy how metamask does plugins to have a good model to follow.