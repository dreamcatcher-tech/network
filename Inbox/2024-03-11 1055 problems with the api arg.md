
>[!tip] Created: [2024-03-11 Mon 10:55]

>[!question] Targets: 

>[!danger] Depends: 

These should be listed in the spec section, where we can track all the issues and requirements of a given piece of functionality.

One problem is that the actions are bound up to the instance, so we can't reuse any objects that used a prior call into the api.

Possibly this is a good thing, since a given isolate should never have old versions around, and if it had been restarted from scratch, it would have nothing available anyway.

All function son the isolate should be alarmed, so if they are called outside of the running exe operation, they should error.