
>[!tip] Created: [2023-04-07 Fri 21:47]

>[!question] Targets: 

>[!danger] Depends: 

To avoid flooding chains, some kind of flow control needs to be put in place.

This should probably allow execution to proceed forwards as fast as possible,

This should combine multiple interpulses into one lump for efficient binary transmission.

In the case of the [[Generator Protocol]] where a single request triggers multiple replies, the sender should be able to set and live alter some channel parameters in order that it neither get flooded or starved.

One option is to send back the processed reply count, so the engine can tune automatically - if it hasn't heard back in some time, then do not send any more.  This sending can also indicate channel capacity from the receivers point of view, as further guidance.  So the chains attempt to ramp up channel size until a good balance is struck.