
>[!tip] Created: [2025-06-27 Fri 13:30]

>[!question] Targets: 

>[!danger] Depends: 

Determine some metric for when making a new pack file is required.
Each time we do a commit, read in the full pack file, and keeping entirely in disk cache, write a new pack file.

The pack files are the only thing held in the caches on the client.

the commit is considered done once the new pack file is written, and the old pack file is deleted.

? do we need strong consistency with that ?

we should set the pack file in the atomic marker.  We should set the list of pack files in the atomic header, so there can be no descrepancies.

MASSIVELY reduces the load on the s3 bucket.
Makes the cache load require less iops.

faster to save a single big file than many little ones, more reliable, more predictable timing too.