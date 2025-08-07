
>[!tip] Created: [2025-08-07 Thu 17:58]

>[!question] Targets: 

>[!danger] Depends: 

isolating between napps seems fine.

isolating between calling users or mcp callers might be excessive ?

isolating between branch seems required, since a branch can have read access but we restrict write permissions per branch.  So a compromised napp could allow someone with read access on one branch to cause the next write on a branch to be done as they wish.

isolating by user seems not that useful, since its hard to know who the user was ?
each call is supposed to be isolated anyway ?