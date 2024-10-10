
>[!tip] Created: [2024-10-10 Thu 18:05]

>[!question] Targets: 

>[!danger] Depends: 

If all the store is the commit and the filepath, and mark themselves as a special system action, then they get instantly responded.

When the accumulator pulls them in and they get actually awaited, we read in the object from the repo.

This makes it repeatable, but very light wait, and nothing leaves the io.json file as it is handled by the system.

If it is a remote repo, then we need to do something extra.
The first request, we will return a promise and indicate it should stop execution.
Then we do a comms branch with this repo, and read in the commit from it ?

We need to make this little isolated branch be part of our repo somehow.

We could store the blob directly and just reference it, and make sure it gets included in the tree somehow ?
Maybe in our network branch, we mark all the network comms we made, which allows any blob to be stored there and be part of history.