
>[!tip] Created: [2023-02-14 Tue 09:33]

>[!question] Targets: 

>[!danger] Depends: 

In a service worker, each browser tab starts its own session chain, but it is always provided by a central service worker, which controls access to the storage.  WebWorkers are used by the service worker to gain multithread, 

## Messaging
If there was a way to mark arrays as readonly and shared, then we could share the same pulses between multiple tabs without wasting ram.

## Liveness check
The service worker should do checks on each tab to see if it should delete the session and clean up resources.  When storage pressure increases, session chains seem the first place to save space.

## Telemetry
The session chains can be transmitted to other chains as a means of collecting telemetry