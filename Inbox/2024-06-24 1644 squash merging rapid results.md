
>[!tip] Created: [2024-06-24 Mon 16:44]

>[!question] Targets: 

>[!danger] Depends: 

In cases of rapid localized actions in io.json, we might be able to squash commits together, so long as the actions were not blanked.

The blanking removes replay information, particularly if side effects occured.

This can allow us to execute rapidly within the same isolate until we are exhausted.

This avoids having commits for even snapshotable thing, such as reading a remote PIDs HEAD commit.