
>[!tip] Created: [2024-05-29 Wed 13:39]

>[!question] Targets: 

>[!danger] Depends: 

passing a secret to an isolate that needs it, from say, the github repo and the system action that does a push or a pull means it needs access to a PAT but we don't want to pass that around.  So we would give read access in the repo, only in some circumstances, to the system isolate to read from the on disk record of PATs.


Many pids but only a few branches in git - so most of the PIDs shouldn't be uploaded, as each one is a branch.  Can do a sweep where all the children commit up to the parent so that pushing the root branch effectively pushes up all of them.