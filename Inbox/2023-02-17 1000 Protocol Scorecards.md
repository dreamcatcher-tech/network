
>[!tip] Created: [2023-02-17 Fri 10:00]

>[!question] Targets: 

>[!danger] Depends: 

Each protocol implementation can have these types of scores against them, to track their maturity in theory and in implementation.  Apps that depend on these protocols can then have progress reported against them.  Features of the platform always depend on these protocols.

Is crash proof - either side can crash at any point in the operation and service can resume
Is optimal - no duplicate data is sent, no long wait times are present when achieving operations between engines.  It provably couldn't go any faster
Is DOS proof - can a requester cause more work to occur than it cost them to request ?
Is blacklist compatible - does bad behaviour trigger an entry in the blacklist table
Is backwards compatible - can it handle the previous version
Permissionsed - obeys the ACL rules in granting access, and non posession is the same as access denied


If one to one protocols are fine, then can we say that the whole mesh is fine, since we only ever do one to one ?

## List of Protocols
Announcer - for pulses and interpulses
Bitswap - trade blocks between peers