
>[!tip] Created: [2025-05-11 Sun 09:24]

>[!question] Targets: 

>[!danger] Depends: 

In Git, there is no object that is part of the regular tree structure that can point directly to other objects, like a way to jump out into the meta level of the repo. It has no self-awareness features. 

When we make a stuck, it would be an object that sits within a GitHub repo, just like every other one. Except internally, it would point to some GitHub objects by hash. It might do that by a commit hash and then a path is probably the best way, as well as the pub key of the repo's soul. 

Any content that goes within the stack really should just be data stored in GitHub's format. If we treat it the same as a mini repo but just a lot lighter, so you can't do branching and all that, it doesn't hold everything together; it just represents a single branch without any of the supporting stuff around it. 

It should be entirely Git compatible. This is really just trying to show how to make a small portion or a tear off of a Git repo that's lighter for the purposes of moving it around as an independent unit. That's how a problem description has value. 

So maybe there's a format of a thing that represents some files and folders, possibly some commits, possibly some different repos and some commits jumbled all these things together and make a format that could be not just a stucks but an action or any kind of data that was meant to move between repos or be independent in a way of a repo. 

this would cover stucks, solutions, actions.