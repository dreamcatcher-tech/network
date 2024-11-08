
>[!tip] Created: [2024-11-08 Fri 16:27]

>[!question] Targets: 

>[!danger] Depends: 

If the incoming actions ran in their own branch, then we did a merge back to main, and we used some kind of crdt to ensure seamless merges, then we could atomically execute each external action, run it all the way to the end, then commit it, ensuring it was transactional, no matter how complex it was, and even if it included some side effects.

Processes that require some kind of sync with other processes might be hard ?