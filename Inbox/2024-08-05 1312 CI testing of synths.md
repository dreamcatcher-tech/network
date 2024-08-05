
>[!tip] Created: [2024-08-05 Mon 13:12]

>[!question] Targets: 

>[!danger] Depends: 

One option is to make deno run in a github runner.
Another is to connect up to our platform, and run on there, where it takes advantage of large numbers of concurrent requests being made.

Or, make a little deno script that can connect up to our platform, sync the local files, then start running the synth files, and report the results locally.