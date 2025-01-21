
>[!tip] Created: [2024-10-22 Tue 15:37]

>[!question] Targets: 

>[!danger] Depends: 

There are the params that the function declares, but there are also metadata parameters, such as the commit to read the filesystem from, what path to chroot to, so the napp thinks it is running at root but it really is a folder within the parent napp filesystem scope.

Also the permissions that the running system has access to ?