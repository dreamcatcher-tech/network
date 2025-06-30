
>[!tip] Created: [2025-06-30 Mon 14:29]

>[!question] Targets: 

>[!danger] Depends: 

should be just a folder ?
register the transcludes somewhere special, so they are stand alone ?
have a folder named `transcludes/` which represents where all the transcludes go ?

then in a chat, they get linked to this location ?
use a symlink ?

keep the transcludes updated with anywhere they get used, so we can reverse lookup.

transcludes are definitely folders.

the id can be generated as the initial hash of the folder, including the config data ?
or just a ulid.