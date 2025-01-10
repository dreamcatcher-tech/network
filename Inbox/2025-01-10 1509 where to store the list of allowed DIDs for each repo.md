
>[!tip] Created: [2025-01-10 Fri 15:09]

>[!question] Targets: 

>[!danger] Depends: 

This should be stored inside the repo itself ?
It should only be writable by those with admin level controls.

It would use the fibers branch to check if the request is valid.  This is where the config for the ACL would be stored for the repo.

This is preferrable to modifying a data branch and polluting it with config.

Fibers should be signed, too, so there is no ability to make an unauthorized modification.

Or, we could just store a secret key that the users have to enter in first to gain access to the server.