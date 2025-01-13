
>[!tip] Created: [2025-01-14 Tue 10:32]

>[!question] Targets: 

>[!danger] Depends: 

If we do something, like a write, then it would change what the notion of latest was.

We should be able to store in each artifact whether it is the latest or not.

If a branch is reset back to a prior snapshot, then we should reset the isLatest status ?

So are writes always bound to latest, or else you have to do an explicit fork ?

fork should track latest, except if explicitly told ?