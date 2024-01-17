
>[!tip] Created: [2024-01-17 Wed 16:09]

>[!question] Targets: 

>[!danger] Depends: 

By combining SES, we can import modules directly from the filesystem, which some chroot style limitations on how deep things can be loaded from.

We can restrict the module to loading only files on the local filesystem, and that filesystem can be arbitrarily large.  Can also allow urls, or pointers to other packages in the filesystem.

Can load from a hash, so that we can guarantee a tree in a git commit matches what we expect it to be.  We can load with a hash parameter which means it is locked to a certain version.