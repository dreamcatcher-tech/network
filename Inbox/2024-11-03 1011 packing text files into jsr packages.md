
>[!tip] Created: [2024-11-03 Sun 10:11]

>[!question] Targets: 

>[!danger] Depends: 

https://github.com/denoland/deno/issues/6879#issuecomment-667687963

probably best thing is to vendor in the jsr modules, and read from disk.

Otherwise we have to read them from the registry directly, and it is difficult to know what version we have been vendored in with.

Additionally we have to support users modifying a version of these modules, so we have to intercept the calls some times.

Vendor all the artifact files, and then read them from disk, since the deployment is immutable.

Or, switch to dynamic imports, use compartments, make our own module cache.

Possibly use deno subhosting for this purpose.

Or, just read from the jsr registry, and know that each deployment has the latest versions of the packages ?
We can pull the package version from the napp.json import.
From that, we can generate a url from the registry, and cache it ourselves.