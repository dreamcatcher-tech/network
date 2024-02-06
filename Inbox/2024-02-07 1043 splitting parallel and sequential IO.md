
>[!tip] Created: [2024-02-07 Wed 10:43]

>[!question] Targets: 

>[!danger] Depends: 

If these were split, we need less database lookups to handle each one.
Spawn still needs a sequence number, so it knows, but at least the numbers would be incrementing, rather than polluted by the sequential numbers too.

Sequential key lookup would be direct, with no prior required, no prior search - it could be calculated immediately from info on hand.

Do we even need a tail key to be written ?
If it was guarunteed to be written, then we could rely on its deletion as being our trigger.