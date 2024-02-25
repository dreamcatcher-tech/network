
>[!tip] Created: [2024-02-26 Mon 09:53]

>[!question] Targets: 

>[!danger] Depends: 

If it starts as anonymous but segregated by the browser identity, so that multiple tabs or the same tab will have persistence, then when then auth with github, a username is created for them ?

The user namespace needs segmentation somehow.  Account creation time can be used as a ulid, then their activities are segregated like this ?

Visibility of shared repos between accounts - surely we should share the objects of the same repos where possible.

But then we need to store the session state of the browser somehow for when they come back.  So the url needs to have everything required to get things back how they were ?