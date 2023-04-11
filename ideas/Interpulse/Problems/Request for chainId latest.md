
>[!tip] Created: [2023-03-01 Wed 09:49]

>[!question] Targets: 

>[!danger] Depends: 

Given just a chainId, finding what is the latest pulse, or if we even host this chainId is problematic.

Writing latest requires writing two things to the db - the latest pulse, and mutating a pointer to what latest is for a given chainId.  System failure leads to an indeterminate state.

Further complication is that a chain may have updated, but might not have completed the updates to approot, risking loss of the tip that is advanced from approot.

Being able to look up chainIds directly makes interpulse receipt simple, since the sender need not transmit a way for the recipient to look up the latest.

Could do a 2PC style where a pending flag is written / updated, then the pulse is written, then the pending is updated on completion, allowing recovery.