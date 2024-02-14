
>[!tip] Created: [2024-02-14 Wed 17:30]

>[!question] Targets: 

>[!danger] Depends: 

If we define our protocols in NL and in terms of the properties and guarantees we want, then we can have an ideal model, and the implementation can be in a range of ways.

Eg: the recovery process should be able to start from the tip of each branch, which means that it is best to make parallel task starters as being able to walk back down the commits of their parents to find the correct place to fork, rather than relying on being passed the commit to seed with.