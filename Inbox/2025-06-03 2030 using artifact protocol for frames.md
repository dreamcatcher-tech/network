
>[!tip] Created: [2025-06-03 Tue 20:30]

>[!question] Targets: 

>[!danger] Depends: 

using the artifact protocol for running artifact protocol messages over seems a bit weird, but nevertheless, it is a protocol designed for bridging contexts using json messages and giving the illusion of functions.

If the basic model was transferring a message port over, and then sending results down that port, we could probably make a simpel piece out of it ?

ORRRRRRRRR

simply implement the invoke and subscribe, and then tuck the other stuff under as actions ?


Make a dedicated receiver that knows to splice off some specially addressed actions ?

the callbacks are just invokes.

receiving props changes are subscriptions from the frame to the holder.

if we made our own library,