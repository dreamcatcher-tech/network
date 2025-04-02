
>[!tip] Created: [2025-03-31 Mon 16:53]

>[!question] Targets: 

>[!danger] Depends: 

once a user is logged in, we can allow them attach a machine service that is related to them.
The machine can have a public name, and is also assoscaited with the user that authenticated them.

On the service, it would attempt to log in, and would be given an auth code for the human to punch in, to auth the machine.  Then the machine stores its private keys and logs in by proving ownership of these keys.

Or it could prove posession of the keys ?

The permissions of the machine should be set differently to an actor ?

The machine could be assosciated with the repo, added using a did:keys or some other type of proof.  Then when it addresses the repo with an action, it signs its envelope using its keys, to prove who it is.  These actions then look up the machine and its friendly name from the auth table of the crm repo, so when it commits, this is the author and committer.

When doing delegated permissions, machines would fall into this category too.  So permissions resolution would be checking the repo, then checking its parent if it has one.

What about group / DAO authentications ?

What about DNS for repos so they have nicer to remember names ?

Ideally it would work like jsr, where the cli offers up a url, and you need to go there and log in to auth the device.