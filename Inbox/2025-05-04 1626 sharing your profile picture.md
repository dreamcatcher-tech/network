
>[!tip] Created: [2025-05-04 Sun 16:26]

>[!question] Targets: 

>[!danger] Depends: 

If this is set inside your actor repo, then to share it we must want to share it without sharing the whole repo. So, how should we do that? 

We could use a data structure like a `stuck` which is free-floating and can be pinned to an object. We could then mark some objects on a per-repo basis as public and read-only, but that's dangerously encouraging on GitHub for missions. Our fundamental model was you can either read it all or nothing. 

We could make a mini repo that was a child of your main one, that was just kept in sync with your main one. We copied the data over, and that repo gets shared using the permissions that you want to set for that information. Only you can change it, and it pulls it from your active repo. 

Or you could push it to a public list of some kind, and use a JWT from your repo to assure everyone that it was from your repo ?  Use a versioning scheme to keep the latest versions updated ?

These things would be like shadow repos, and you present them to whichever group or set of individuals you want to give permission to interact with. They can handle the messages coming in from these different audiences. 