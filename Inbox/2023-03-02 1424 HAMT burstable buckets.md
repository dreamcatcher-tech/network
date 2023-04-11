
>[!tip] Created: [2023-03-02 Thu 14:24]

>[!question] Targets: 

>[!danger] Depends: 

When writing to the HAMT, all new writes should go into a single bucket which is unlimited in size.
This can reduce the number of blocks created by distributing by hashed key at the time of insertion.

Can say that during bulk additions, we will tolerate an unlimited number of collisions in each bucket, so the buckets get overfilled until the next filling operation ?

No sure this would work so much... might be better for an array style approach, where we can put everything in one operation at the end, then break up previous chunks to cater to deletions and modifications.