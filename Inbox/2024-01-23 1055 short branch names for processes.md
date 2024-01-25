
>[!tip] Created: [2024-01-23 Tue 10:55]

>[!question] Targets: 

>[!danger] Depends: 

Since the branch is named after the action that made it and the commit that action appeared in, then there is no need to name the branch anything other than the parent name and the action id.  

Bx, the main commit history is canon, and we can walk back to where the action was processed, and know that it created a branch at exactly that moment.  Then when it merges back in, we can walk it to ensure it started correctly, so the name need only really not collide with anything, so if all children had their parent name and an action id, that should be sufficient.