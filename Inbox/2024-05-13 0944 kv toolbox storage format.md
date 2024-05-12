
>[!tip] Created: [2024-05-13 Mon 09:44]

>[!question] Targets: 

>[!danger] Depends: 

To include encrypting key paths, filenames, and making blob lookup faster, perhaps blobs could be stored in a flat structure, rather that being nearby to the supplied keys the user wanted to store.

Make it store flat, with a single reserved key path, which is escaped from being usedd by the user.

The key is encrypted and then hashed, and stored there.

But without the encryption, the key is stored flat, as a hash of the key.