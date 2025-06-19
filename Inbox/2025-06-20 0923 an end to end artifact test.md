
>[!tip] Created: [2025-06-20 Fri 09:23]

>[!question] Targets: 

>[!danger] Depends: 

seems we need to be able to exercise the artifact client against the full blown bucket.

issue is the seed can end up being raced agaisnt.

so we either need to be able to isolate the seeds in the same bucket, or we need to wait for the seed to be available and then don't touch it.

really just need to make sure that the test which deletes the seeds hasn't run already, so we're running after them.