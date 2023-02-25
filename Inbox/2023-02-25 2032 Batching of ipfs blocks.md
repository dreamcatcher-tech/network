
>[!tip] Created: [2023-02-25 Sat 20:32]

>[!question] Targets: 

>[!danger] Depends: 

If we implement:
1. Key compression using schema to only store pure data in arrays
2. zip compression on this pure data
3. concatenation of data often used together, like in a pulse

Then we should get the [[2023-02-25 2030 Test for write efficiency]] to be as small as possible.

Zip needs to be balanced for performance.
Encryption would be in this layer too, somewhere.

Concatentation of a pulse into a single block might save retrieval time.
May store them as a CAR so they are fetched together ?
But might this disadvantage the reuse later ?

A pulse might concat all its diff blocks into a CAR and use this as its hash ?