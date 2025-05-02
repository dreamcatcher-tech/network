
>[!tip] Created: [2025-05-02 Fri 21:26]

>[!question] Targets: 

>[!danger] Depends: 

You should be able to set secrets in a repo and they will be stored in a vault that we manage the hosting environment, but in the repo themselves they will be listed as an identifier and a hash. 

env vars should be in the repo and you should be able to read these as part of the repo.

set permissions should definitely be a role.

Thingslike issued machine tokens should be visible but they are hashed and managed by the secrets manager.

What we really need tho, is some way to insert secrets into text documents as they're being parsed, so perhaps the secrets store needs to become large ?

if we had a reasoning platform, then we could map out these features and manage our research rapidly, and reconcile against all other efforts too.

I think the ideal secrets system allows you to have a special secrets area in the Soul Branch where the name of the secret is matched with the encrypted value of that secret. If you want to make a repo that has secrets that you don't want anyone else to see, not even the encrypted value, then we should allow you to point the secrets at another location. For example, we would encrypt it and it would point to its parent, and the access controls on the parent would prohibit it from being read by the same people that could read the child. Then, on the parent, that's where we decrypt that real secret provided the parent had granted permissions to the child to read those secrets. 

We'd make a set of use cases or examples and ensure that our plan can satisfy each one of these. 