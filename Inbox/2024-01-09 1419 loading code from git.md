
>[!tip] Created: [2024-01-09 Tue 14:19]

>[!question] Targets: 

>[!danger] Depends: 


It will be a long term solution to load the actual executable code from the filesystem.  Probably needs a bundler to run in the browser, or at least supply the bundled version in the git fs.

In webworker, we can use dynamic imports and override the self.importScripts function, since that should get recursively called.

In nodejs, we can maybe proxy the built in FS object ?