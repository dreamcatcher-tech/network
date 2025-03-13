
>[!tip] Created: [2025-03-14 Fri 09:06]

>[!question] Targets: 

>[!danger] Depends: 

Tigris offers many features that are about global distribution and global access. They are also located in a subset of all of the fly.io regions. 

Therefore, it should be possible to build a fly app that can hit the Tigris bucket from all different regions in a concerted attempt to thrash test the preconditions with the goal of proving or showing that its operation is very reliable. 

Further, we might be able to make a function where any time we do a check-and-set operation, we can also do a check from every worldwide region to ensure it is the same view globally. 

if we could avoid it being a dedicated Tigris app and instead use Artifact itself in some way ?
We would make branches with the consensus set in different regions ? or must the repo consensus be the same region always ?

Does a repo represent a single source of consensus ?  It could delegate it on a per branch basis ?