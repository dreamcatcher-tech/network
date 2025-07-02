
>[!tip] Created: [2025-07-03 Thu 09:37]

>[!question] Targets: 

>[!danger] Depends: 

asyncLocalStorage ends up with different instances if the utils/server package is at different versions.

so to handle this, we need to use a global symbol, and it should be global for all containers in the realm.