
>[!tip] Created: [2024-02-07 Wed 14:12]

>[!question] Targets: 

>[!danger] Depends: 

broadcast to the pool channel two items.

Recovery is that we would walk the commits and check each one for outputs that match what we put in there.

But if we put in multiple things with the same action, how would we know which one to track ?

If the dispatch had a nonce attached, then it could survive thru the ops.

Then recovery would be looking up the sequence number from the ulid, by walking commits.

ulid should be user supplied then.