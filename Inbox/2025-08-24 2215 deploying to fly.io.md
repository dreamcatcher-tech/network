
>[!tip] Created: [2025-08-24 Sun 22:15]

>[!question] Targets: 

>[!danger] Depends: 

central server that holds the git repos.

git repo gets a request to spin up an agent via mcp.

for now, it can run on this single server.




the scalable version, has a fly app for the codex agent, and this thing spins up new versions for each request, but probably it starts as a single container that does it all, and just segments the requests by actor id, so by session.

we could present the codex cli as an mcp server ?
so we would provision the environ