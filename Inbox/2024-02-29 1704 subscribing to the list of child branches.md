
>[!tip] Created: [2024-02-29 Thu 17:04]

>[!question] Targets: 

>[!danger] Depends: 

part of the query interface should be `children( pid )` which will git the branchnames of every child relative to the given `pid`, which will be atomically correct.

We would use getMany to get all the keys at the exact same time as the parent.

Send down the commit hash of the head, and the names of all the children.

We can then watch for new commits on the parent ?

How to know if a child commit changed ? or if a new grandchild was spawned ?

Should we keep a childcount updated ?

Each parent knows how many children it currently has, so in its head it could say how many children are present.

Maybe just rolling up the counts is sufficient ?

Otherwise have to walk every single one ?