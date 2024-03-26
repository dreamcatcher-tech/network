
>[!tip] Created: [2024-02-26 Mon 09:53]

>[!question] Targets: 

>[!danger] Depends: 

If it starts as anonymous but segregated by the browser identity, so that multiple tabs or the same tab will have persistence, then when then auth with github, a username is created for them ?

The user namespace needs segmentation somehow.  Account creation time can be used as a ulid, then their activities are segregated like this ?

Visibility of shared repos between accounts - surely we should share the objects of the same repos where possible.

But then we need to store the session state of the browser somehow for when they come back.  So the url needs to have everything required to get things back how they were ?

We can store the repo host as a key to nest under, which basically indicates the format of the key for the repo from that point on.  This could be just a single string, really, to accomodate all major formats.

For our own format, we can just reserve the dreamcatcher string - this will make it act like your local computer, and you can push to remotes and other repos on our platform.