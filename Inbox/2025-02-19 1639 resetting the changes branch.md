
>[!tip] Created: [2025-02-19 Wed 16:39]

>[!question] Targets: 

>[!danger] Depends: 

While syncing, if we detect a change to the changes branch, once it gets past an hour old, we would overwrite it ? or, we would overwrite it at the start of each day ?

Or, we just run the syncer on demand.  So the service runs, and then we just 

Or, we have a reset button.  MY is being merged in, if there is a conflict, mw wins, but otherwise changes wins.  

The records store what branch made their changes, or, we only merge in mw when the sync button is pushed, so the syncer does writes of new changes, but it doesn't merge the branches in unless they are reconciled.

Version restore should allow us to go back to a previous version easily.