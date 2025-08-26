
>[!tip] Created: [2025-08-26 Tue 15:06]

>[!question] Targets: 

>[!danger] Depends: 

if the auth allows, and the auth hasn't changed, then we can let a large number of connections come in and view the vscode instance that is running on the agent.

we can sit it within its own filesystem layer, so that multiple edits can occur without hitting each other.

or, we can make it all edit the live mutable filesystem.

if you wanted your own version, you should start a new image and connect to that.