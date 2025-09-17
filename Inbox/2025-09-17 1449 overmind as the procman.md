
>[!tip] Created: [2025-09-17 Wed 14:49]

>[!question] Targets: 

>[!danger] Depends: 

[[2025-09-17 0932 agents as process managers]]

if each face is actually started with a background process that shows them running, then we probably want to combine those, particularly if they are readonly ?

but things like codex are not read only, so they need ttyd.

but it might be better to make an actual Deno procmanager, since all these interface requirements, like restart on failure, moving stdin and stdout around the place - these are common to all.