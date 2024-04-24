
>[!tip] Created: [2024-04-25 Thu 08:54]

>[!question] Targets: 

>[!danger] Depends: 

If a repo requires that all incoming actions come in via a session chain for each actor, and if the platform requires that all client devices go thru a dedicated session chain, then we could end up with a lot of action relaying.

This can be mitigated with atomic relaying, where these hops will be done in a single atomic commit, but ideally we should minimize the hops by design

