
>[!tip] Created: [2023-01-31 Tue 10:25]

>[!question] Targets: 

>[!danger] Depends: 

We can choose to inflate some historical paths on demand if we can use the syncer component anywhere.  Then the tree we build within it is ephemeral, and it renders each time the sync boundary is pushed out.  Better than trying to use callbacks into the top level syncer to signal we would like something synchronized.

Share the cache with the other syncers because we share the pulsecache.

Purge the pulsecache when the syncer is torn down, to save ram.  Somehow share between all syncers what paths are independent and only purge those ones.  Or, just purge the pulsecache based on LRU, then syncers that care will rebuilt themselves.