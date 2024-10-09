
>[!tip] Created: [2024-10-09 Wed 17:53]

>[!question] Targets: 

>[!danger] Depends: 

Can use it for the main installation, and then manage the individual repos however we like.   Probably using subhosting.

Use it for HAMR and avoid the cloudflare problems, since we would have a dedicated standalone deno account, then only allow logged in users access AND require users that have been approved to access.

This could be done by managing interbranch comms, or if it was multiple repos, permissions between repos.

Still need to do oauth loop to get the github pat.

use privy integrations to show up on the list of other apps that we can share our logins with, so people can log in once and be in many places.

But how then do we transition to being a central auth provider ?

