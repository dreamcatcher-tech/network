
>[!tip] Created: [2025-06-06 Fri 10:44]

>[!question] Targets: 

>[!danger] Depends: 

if the frame is given a dummy target to use to send artifact envelopes to, then we would intercept that are rewrite it.

As a frame, you should always have the same mock target, since there is not added information you can possibly get from knowing anything about the target, and we can leak info if the target it exposed.

The target is the execution host to which all actions will be processed.

Sot he frame makes a standard, and the holder takes these actions, checks them for permissions, and then rewrites the envelope like a NAT, with the known target.