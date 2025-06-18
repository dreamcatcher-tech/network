
>[!tip] Created: [2025-06-18 Wed 18:27]

>[!question] Targets: 

>[!danger] Depends: 

the issue is that they all can change the cached files before doing a commit.

so we might need to make cached files be a totally separate data structure, and you impress it upon the artifact instance, using the latest version of artifact.

if you call latest, then your artifact should carry forwards the files you been working on ?

if we make these ops something that can pulled out, like get patch, and then apply patch ?  get changes, apply changes.