
>[!tip] Created: [2024-11-14 Thu 14:31]

>[!question] Targets: 

>[!danger] Depends: 

If the reply simply held the snapshot id that was used to read them ?

If local, and if several reads and writes occurred, how can we ensure the order of execution is the same when altering the mutable filesystem ?

Maintain a counter for the write so it gets replayed in exactly the same order ?
Or, just the order of the action to cover this ?

