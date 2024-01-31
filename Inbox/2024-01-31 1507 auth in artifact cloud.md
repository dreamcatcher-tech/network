
>[!tip] Created: [2024-01-31 Wed 15:07]

>[!question] Targets: 

>[!danger] Depends: 

Artifact could store the hash of the PAT permanently, and use this to check if access is still granted ?

Artifact should never store credentials, but rather should require a PAT each request from the outside.

Chains would be namespaced by github, and you have to submit a PAT if you want to do more than query or read a thing, or run one of the designated free to use / sponsored chains.