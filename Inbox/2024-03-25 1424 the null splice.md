
>[!tip] Created: [2024-03-25 Mon 14:24]

>[!question] Targets: 

>[!danger] Depends: 

If a branch does not exist, then we should send null which indicates it is invalid.

Session recovery can use this to know that the system has been reset.

Turns out this is a terrible idea.  Use a direct probe otherwise let the watchers aimlessly watch.