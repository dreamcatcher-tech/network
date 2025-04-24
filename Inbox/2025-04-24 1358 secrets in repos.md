
>[!tip] Created: [2025-04-24 Thu 13:58]

>[!question] Targets: 

>[!danger] Depends: 

We need a secrets system, so that sensitive data is not stored in repos, but the secrets vault can be called on by a repo during executions.

To access the secrets vault, you need to be a hosting computer and show that the repo wants to access the secret.

Means that at rest, or from clones, there are no secrets leaked, not even the hash of the secret.