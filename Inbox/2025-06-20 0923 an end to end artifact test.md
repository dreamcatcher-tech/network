
>[!tip] Created: [2025-06-20 Fri 09:23]

>[!question] Targets: 

>[!danger] Depends: 

seems we need to be able to exercise the artifact client against the full blown bucket.

issue is the seed can end up being raced agaisnt.

so we either need to be able to isolate the seeds in the same bucket, or we need to wait for the seed to be available and then don't touch it.

really just need to make sure that the test which deletes the seeds hasn't run already, so we're running after them.

the test should be run in the actual browser.
might be done using jasmine so we can test the frame protocols too ?

if we make a dedicated page, and then can change the server url and run it on localhost if we want.  

? how can we get to reproducibility 
