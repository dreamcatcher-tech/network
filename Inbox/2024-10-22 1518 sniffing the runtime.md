
>[!tip] Created: [2024-10-22 Tue 15:18]

>[!question] Targets: 

>[!danger] Depends: 

If the runtime was a string that referenced a package, we could sniff the runtime and then install the package.

Integrity of the package is critical - we don't actually link to that in the napp.

napp points to a folder, but it might also point to a package on another registry, in which case 