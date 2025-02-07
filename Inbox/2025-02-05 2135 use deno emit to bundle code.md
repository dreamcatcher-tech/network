
>[!tip] Created: [2025-02-05 Wed 21:35]

>[!question] Targets: 

>[!danger] Depends: 

This works in deno deploy, so we could use it to make a bundle from some remote url.

We could allow it to browse from the git storage url deployment so it can read files like this.

Then it can emit bundled code, which can be turned into a url, and then run in a web worker.

Emit would prebundle the code, and then it would get imported into the compartment ?

So basically with agoric, we can just use the deno native import system as a way to satisfy the endo library loader, so it is getting loaded up directly.