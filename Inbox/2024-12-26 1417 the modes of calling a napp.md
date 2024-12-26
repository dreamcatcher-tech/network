
>[!tip] Created: [2024-12-26 Thu 14:17]

>[!question] Targets: 

>[!danger] Depends: 

from a supercli that can be pointed at a napp to run

from inside a napp where the cli can be provided to turn this napp into a standalone command

So we should publish all our napps as standalone CLI modules, but also publish under this higher level napp cli that can call them too.

Reuse the cli thing that makes a napp a cli command

from within code, using the api to invoke them.  It should only be able to call napps in its config file ?

To call a random napp within code means what ? need to invoke a special napp that enables this, or invoke some kind of system level privilege that allows this to occur ?