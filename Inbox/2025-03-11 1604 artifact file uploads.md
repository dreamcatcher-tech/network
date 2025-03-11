
>[!tip] Created: [2025-03-11 Tue 16:04]

>[!question] Targets: 

>[!danger] Depends: 

Detect when it's 'big' vs being able to store it inside git ?

Or just warn about incompatibility with github ?

Make a large files repo for every user, and warn that this can't be synced to github.

Make an LFS compatible server or service ?

Make an LFS wrapper around a big git repo, so that you can manually git download the lfs thing and run it, but you can get github to treat it like an LFS repo.

It should be quite simple to just store mappings of hashes to file paths in this big repo.

users can configure what gets considered a large file or not by altering this threshold in their config.

This should let us do things like upload 5GB videos directly into Artifact, share it, include it in a processing pipeline, and do whatever we want with it from the luxury of the cloud. 

May use webtorrent to upload large files to fly.io using multiple upload streams with auto retry and progress.  Would be nice to have a service worker module that would auto upload with retry and concurrency.  

Ideally the service worker would keep this data in the cache, so that when a download is request, we already have these chunks and can use the cache.

presigned urls for up and down would ensure least latency.