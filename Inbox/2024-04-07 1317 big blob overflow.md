
>[!tip] Created: [2024-04-07 Sun 13:17]

>[!question] Targets: 

>[!danger] Depends: 

If the size is over x then we go straight to B2 storage.
Otherwise store in kv store, then run a pack periodically on it using a delayed task that will run a sweep, pack everything up, write to B2, and then delete the individual items.

Storage is always paid for forever, since we can draw a graph of the price of cloud storage, and also the price of hard drives, and we show how we keep long term storage running.

Collect a different set of metrics for ssd hdds, which is the failure rate from being turned on after a long time of being off, which allows us to forecast how many others are likely to fail over the next x years, and so we can pick them up and store the data elsewhere, or refresh them, or do other types of checks on them.

Plus can use worn out ssd drives as long term storage units.