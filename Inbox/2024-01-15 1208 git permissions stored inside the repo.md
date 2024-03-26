
>[!tip] Created: [2024-01-15 Mon 12:08]

>[!question] Targets: 

>[!danger] Depends: 

We just have to decide how we will interpret them and translate into how we allow different machines access, and how we limit what users can make changes to what paths in the fs.

Execution isn't our problem, since execution only occurs when the fs changes.

When cloning a repo, then we should allow adding the github permissions to this file.
We can offer to keep in sync with github permissions.
Means that for edge data, like B2 storage, we can honour the permissions by reading the file to check they are allowed, then providing a single download token permission.

Ideally a user would always have access up to when the permissions file changed ?
Or, if they hadn't taken a copy, we just deny it fully.