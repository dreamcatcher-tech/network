
>[!tip] Created: [2024-08-09 Fri 09:32]

>[!question] Targets: 

>[!danger] Depends: 

If an agent wants to modify a file, then it must read it first as a rule.

When it goes to write or update the file, if it read it first and the file has changed since the read, then it would throw a concurrent modification error.