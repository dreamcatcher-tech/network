
>[!tip] Created: [2025-01-09 Thu 14:37]

>[!question] Targets: 

>[!danger] Depends: 

transient to transient

having a file on disk could be treated like a socket, like streaming.  It would be committed with its end result, but it would have been calculated repeatably - we only need to store the external info, and the hash of the resulting deductions.

When a stream is coming in, it could be stored as a completed object, or snapshotted part way thru.

Should we mimick the web, by allowing chunked transfer, eventsource, and whatever else we can support ?

Should be able to have a live voice call between napps, and the system still be able to reproduce the outcomes reliably, whilst keeping up with the realtime nature of it.

The streaming could be run in parallel concurrent consensus, and then multiple streams are ready for consumption so you have the highest possible reliability. 