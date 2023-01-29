
>[!tip] Created: [2023-01-30 Mon 08:49]

>[!question] Targets: 

>[!danger] Depends: 

It should use

When doing a remote controlled LS, 

Same structure is used for doing remote queries which avoids the caller from having to download and process all the pulses in the remote app complex which is being searched.
Iterables should be tr

Same pattern can be used for generalized search.

Iterables are tracked at the system level and follow these steps:
1. System Request that triggers the iterable is sent with options
	1. max in flight: default is one at a time, but some buffering can be configured
2. reply comes back with an iterable id
3. Requests start to flow from the source back to the requester


## Special cases
### Searches that need full data scan
Eg: `max()` is never really known, but we can get useful info if we stream in the best known at the time.  So an async iterable doing a max 


Go thru all SQL functions and see how we might manage them 
Compare with mongodb API and see if we can be exactly API compatible, permitting a straight swap for any mongo applications.  These apps might be able to run browserside in some cases.