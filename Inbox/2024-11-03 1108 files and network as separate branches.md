
>[!tip] Created: [2024-11-03 Sun 11:08]

>[!question] Targets: 

>[!danger] Depends: 

Inside the process tree, we can have special sections for file access, which represent the files branches that this repo is in control of.

Special section for network, which is branches with no shared history.
These could be kept separate on purpose, same as proctree is separate from files, so that git history doesn't get pulled in, but is still referenced inside the commits.

Multiuser can exist in the process tree, rather than needing a separate repo, and these would be receiving instructions into a network socket.  Net socket could be another repo, or pure networking.

special files list for daemon processes and cron processes.

process id can be a single integer, which uniquely addresses it in process space, and in time, since this number is monotonic.

Process priorities can be set.  Nice on a process means it won't wait for any other actions in the pool, but will always be processed first, and if anything is realtime, they will get commited.

Might reserve a folder structure for them, so they can run in their own branch, unencumbered by all the other processed.

Process signals becomes a class of actions.
Possibly from the threads napp, which has actions related to process management.

We should be able to send these actions cross repo.