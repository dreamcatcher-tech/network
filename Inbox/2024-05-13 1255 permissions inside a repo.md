
>[!tip] Created: [2024-05-13 Mon 12:55]

>[!question] Targets: 

>[!danger] Depends: 

Using file permissions, we should be able to restrict what a given user can do and read within the repo.

Clone where they are restricted from seeing some files would be an incomplete clone.
This would cause a `sparse-checkout` to occur.

Folders you can't access would be seen by name only, with no contents available in them.

So they could see that something changed, but not specifically what.

At the start, we restrict write permissions based on roles, but we want to also restrict read permissions based on roles too.  Particularly when we allow the repos to be moved about between hosts, sometimes simultaneously.