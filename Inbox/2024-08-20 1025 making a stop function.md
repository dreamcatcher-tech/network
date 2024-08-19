
>[!tip] Created: [2024-08-20 Tue 10:25]

>[!question] Targets: 

>[!danger] Depends: 

For detached processes, we need to be able to see what process triggered them to run.

Accounting should list all the repos that are currently burning.

We should be able to detect something like the queue length, or some other proxy to signal live activity is happening.

Then if we could read the queue,

If each queued action was written to the db along with the target pid, then we could filter these to see the queue depth for each branch, which lets us see the pool sizes.

Also can look at the latest io.json for each chain, to know if it is loaded.

Or could flag in the db if we are loaded, so that we can look up the loaded branches and read the io.json to see what is being awaited for ?