
>[!tip] Created: [2025-05-22 Thu 11:33]

>[!question] Targets: 

>[!danger] Depends: 

in the case of a chat message, the action includes the message but we also want that object to be stored on disk.

so we could avoid the action being a thing and just do the commit and trigger a napp to process the chats based on the files changing ?

but we might not need to have channels at all, we could simply attempt to change some data on the remote, and then the napps kick in and do something with it ?

so it means the sender cannot select the napp, but they could show their intent so the thing doesn't get called accidentally.

a standard q on a filesystem so that new items are commits and that triggers the registered / installed napps, which are triggered by that data structure.


make a transclude have no signature of its own, and point to a commit as its authenticity ?
so use a merkle proof within the repo to point at the data it is moving, so that the other side can trust it, but also make sure we aren't leaking anything in the repo.