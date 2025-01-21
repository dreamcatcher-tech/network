
>[!tip] Created: [2024-12-13 Fri 21:59]

>[!question] Targets: 

>[!danger] Depends: 

This would again be a napp, and it would have a specific way of storing things on disk.

So we would make the api that backed straight onto the raw filesystem, 

the runner would be given a path to set as the repo space.

Snapshotid can be faked as just the time perhaps, or some counter.

So the openai napp would return back the filesystem that it had changed.

These should be visible in the metadata of the return of the napp, since the caller could see the commit on the filesystem, or see what had changed.