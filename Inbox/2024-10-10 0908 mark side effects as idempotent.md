
>[!tip] Created: [2024-10-10 Thu 09:08]

>[!question] Targets: 

>[!danger] Depends: 

If a side effect can be called multiple times without impact, then we can mark it as such, which would allow it to be done without requireing intermediary commits.

So if the running process fails, which would be quite rare, then the restarting process can make the side effect call again.

Means that we can execute several actions in a branch in a single commit, which avoids queue time.