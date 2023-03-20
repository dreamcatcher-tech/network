
>[!tip] Created: [2023-03-19 Sun 08:12]

>[!question] Targets: 

>[!danger] Depends: 

If  measurements are put in place at all crucial features of the system, then we have a complete platform, with performance stability, and can build out each area of the platform with these cleanly defined interfaces between each piece, and performance measurements on those interface contracts.



The different types of Pulse production and synchronization
1. speed to produce blocks as the proposer
2. speed of receiving the proposals
3. speed of syncing with the browser, with skips in lineage
4. Writing new Pulses to disk
5. Writing synced Pulses to disk

## Crisp
1. Browser first load time
2. Browser UI thread load
3. Server side lifting time based on diffs vs size of lift
4. Editing while still loading - time for edit while still loading large dataset
5. Time for edit on large dataset
6. partial streaming, where the data is not fully pulled down to the client as a full peer
7. two browsers receiving updates from either one doing an edit

