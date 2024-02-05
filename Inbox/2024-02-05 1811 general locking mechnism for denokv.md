
>[!tip] Created: [2024-02-05 Mon 18:11]

>[!question] Targets: 

>[!danger] Depends: 

Use key watching and expirations to gracefully grab locks with error recovery and optimum timing.

Principle is using watching to watch the lock key, then working away, then if we definitely have the lock still, doing some atomic commits.

Configure some timeout when the lock will be forcibly taken.


Optionally can allow a line to form, where those who want it next can be prioritized, rather than a random FFA.