
>[!tip] Created: [2025-03-21 Fri 15:09]

>[!question] Targets: 

>[!danger] Depends: 

This is better for encryption, since this single branch is well known, and so loses no info to read it.

Then you read the encrypted contents, since the pointer to latest is encrypted, so you read that, decrypt it, then you start walking the filesystem, where the hashes of the object are not encrypted, but the contents are, and they don't match the hashes directly, as the hash is of the unencrypted data.

May encrypt the object hash names by hashing or some other kind of shuffling ?

All the branch names could be hashed, so the name isn't known, as it could be anything ?  But the nesting is leaked.