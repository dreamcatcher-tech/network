
>[!tip] Created: [2024-09-22 Sun 10:59]

>[!question] Targets: 

>[!danger] Depends: 

Select a commit in artifact and have it re-execute.

When re-exeucting, can attach a debugger to step thru it.
The vscode machine would be running as a backup engine, and the main deployment would know how to give it an instruction.
vscode can read from the existing git db, but it writes to its local version.
The vs code version handles the queue itself.
It caches the oids locally, but other than that, each run is isolated.
Can handle many different runs being initiated concurrently.
The debugging session could be started entirely from the remote webpage.

Status on the page shows when runner is ready and connected, and some other ID information.  This makes the local machine ready to be told when to execute something.

Local machine could be runnining inside a web version of vscode so it starts fully provisioned and ready to do the step by step debugging.

IF the navigator was inside vscode as an extension, then this becomes even easier, since we already know the starting commit and PID.

Allow this to be included in regression tests, where a specific commit is pulled down and run.

Then, boil down into specific reproductions.

The UI can show where others are verifying.

UI can also show the witness progress of other hosts.  Witness can be done inside the current host, but can also be done by external deno deployments.

Faulted witness can be displayed in the UI, where the UI pulls together the views of multiple hosts, and can show where consensus failed.

Show rerunning stepping thru, so it can go commit by commit, or keep running up until a particular commit.  Show where some data was different, which means an inconsistency.  This would be shown as a specially colored branch.

Have a UI element that only shows when a debugger is connected, and in there are the controls to do debugging, which then updates the branch explorer to give feedback.