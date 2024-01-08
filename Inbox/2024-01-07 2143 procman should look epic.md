
>[!tip] Created: [2024-01-07 Sun 21:43]

>[!question] Targets: 

>[!danger] Depends: 

Would be a tree that could be watched and printed to screen.
Would show the status of every single isolate and channel that was currently running

For it to be executable, the repo must adhere to certain minimal structure.

Would show in a tree the path to every IO isolate that was currently running, since they all have to register with the procman to be run.

This could potentially thrash the procman, so we need to be able to rapidly merge these things faster than they can be made.  Without them, tension would have to be walked.  Somehow, somewhere, tension needs to make it up to the top of the tree.  Submissions should be a FIFO queue which can back up arbitrarily high.  The requests in can be done by several processes, so they can agree in ram how to make a merged commit that represents registration of many processes all at once.

Once we have a procman commit, then individual exes are triggered by procman or its child runners to mirror the tree.

? would a process ever be moved if the filesystem is moved ?  Or would you need to shut down and restart ?  

Each process is running in a snapshot unless it pulls or pushes the state, so it could be moved during one of these events ?  proman would have to specifically handle this.

Beauty is to be able to see all the processes and their current queue processing statuses, machine locations, consensus.  Basically this huge fan out of computing taking place, all with perfect reproducibility.  Even a totally remote system can have procman.

Each repo that is executable has its own procman system.

Triggers are a form of IO themselves that just run a certain function that checks the commit for changes to the io channels, and updates procman accordingly.