
>[!tip] Created: [2024-07-20 Sat 20:23]

>[!question] Targets: 

>[!danger] Depends: 

Ideally we want only one version deployed, and we incrementally improve that.

But upgrading the data structures are hard, since we don't have migrations built in.

But, migrations could be put in, or they could be done lazily.

If we hosted the github page in the same place as the main site, then making a new deployment on deno is all that is required, repoint the dns, then off we go.

Or, keep the web site separate, rather than learning how to use workspaces, and then just use deno to have multiple versions without having to create new repos all the time.

The api becomes simply the page origin, so it just points at the server that served it.