
>[!tip] Created: [2024-07-04 Thu 11:51]

>[!question] Targets: 

>[!danger] Depends: 

When merging a temp actor into an authed actor, there might be conflicts.
These could be stored.
Any time a temp actor merges is, we would store it in a file, for rapid lookup.
All the sessions that it started should reach out and update everything that was altered.

Need to also track the merged in actors, so we can claim remote sessions ?
Actor merges should be tracked so we can prove using history that we merged to become that prior actor ?
Or, the actor base chain can return a query where it asserts that this is correct.

So the remote session metadata storage needs to store what actor id created it, so we know we can masquerade as that other actor later.

