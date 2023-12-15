
>[!tip] Created: [2023-12-15 Fri 14:22]

>[!question] Targets: 

>[!danger] Depends: 

Should be able to get the engine to do it, rather than using channels.

So a loopback action is created that includes the json state of the children we want, and the engine picks that up, generates all the children in one shot, then creates a single update pulse, then opens all the channels, then inserts the resolve to the loopback action, so all the data is transient.

In batches, this should be incredibly faster.