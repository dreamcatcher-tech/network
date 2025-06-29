
>[!tip] Created: [2025-06-30 Mon 10:09]

>[!question] Targets: 

>[!danger] Depends: 

we can use the working dir index concept to allow the storage of data that will mutate, perhaps rapidly, to reduce the number of commits we make.

ideally a commit would never change contents, so for files we know will change, like results that are streaming in still, we should use an ephemeral storage piece.

this can be stored as a special commit which is constantly being overwritten.

finding the index file and streaming from it is how we handle live transmissions in this model.

there could be multiple index files across several workers, who would be negotiating as to who will win.