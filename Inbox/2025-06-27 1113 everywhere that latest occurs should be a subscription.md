
>[!tip] Created: [2025-06-27 Fri 11:13]

>[!question] Targets: 

>[!danger] Depends: 

there seems less use for a single one off call to latest.

particularly in hooks, where latest needs to be maintained - it seems better to start a subscription, and then update latest as events stream in.

particularly in the syncer, this should just be a subscription that updates to latest whenever something new comes in.