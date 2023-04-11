
>[!tip] Created: [2023-02-21 Tue 14:43]

>[!question] Targets: 

>[!danger] Depends: 

Open starting at the highest path we already have, then they open down from the top, resolving once all child paths are opened.
Each path along the way opens to the sender too.
Sending then sends connect requests to all along the way in parallel, in case they need to use that path again, or just rely on having a deep connection meaning everything in between is waiting if needed.

Can partially succeed, with partial path being returned, and all children that were valid being opened to the sender.