
>[!tip] Created: [2024-10-09 Wed 16:49]

>[!question] Targets: 

>[!danger] Depends: 

If hamr has been running a while, then we need to move where the repo runs from, and this should not mess with the users in any way.

It might be enough to just use privy and ensure all methods on the web engine are authenticated.

The web routes won't work without being authenticated.

Then, the admin needs to allow them, or they get deleted.

Or, just prepopulate the allowed users, and deny anything who isn't them, so only the pre-approved staff can log in.