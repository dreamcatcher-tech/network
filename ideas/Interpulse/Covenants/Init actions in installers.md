
>[!tip] Created: [2023-01-27 Fri 15:21]

>[!question] Targets: 

>[!danger] Depends: 

The installer schema should allow an array of action objects that is immediately executed.
Can be for things that do not belong in config, like hardlinks and subscriptions.

Unless the network object takes some extra data about subscribing.

Or subscriptions could just happen all the time anyway.
Cost is an action that goes into loopback every time, that could cause a clog, requires processing.
Best path is to turn it on all the time, then see if it works well enough to leave it.
Downside is the reducers start receiving packets for more system actions.
Also may need to load reducer up just to see if it wanted to see.

Actions on init allows anything to happen, rather than declaring in config.