
>[!tip] Created: [2023-02-11 Sat 13:55]

>[!question] Targets: 

>[!danger] Depends: 

Making covenants be true binaries is still an issue.
Publishing covenants to npm as modules and using that as a means of distribution is a good intermediate step.

Use the pnp version of yarn to do installs, so that nothing gets executed or corrupted.
This stores packages as zip files, then splices nodejs to fool it into reading those files in as tho they were in node_modules.

If we use deno, we could provide a protocol handler to define our own way of fetching.
We could mix deno for process isolation, yarn for package isolation, and path yarn to be able to use a content addressable registry.

Using node with a custom loader function might fix this, and let us swap out anything we like underneath.