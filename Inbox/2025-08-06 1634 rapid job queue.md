
>[!tip] Created: [2025-08-06 Wed 16:34]

>[!question] Targets: 

>[!danger] Depends: 

If the workers log in with the queue, then the dispatcher chooses which worker to allocate jobs to.  Resource detection can be outofband where the load of each worker is sampled,  and job allocations made as a result of these hints.

When the work is done, the worker posts the result back, and the queue chain makes the next commit, and updates anyone involved.