
>[!tip] Created: [2023-01-30 Mon 08:49]

>[!question] Targets: 

>[!danger] Depends: 

It should use streaming to send back results as they arrive, rather than accumulating everything then sending it back in one big chunk.  This reduces peak ram requirements and lowers response times for the requester.  In some cases the requester might be able to exit early, excusing further work.

The reason is that hamt's are loaded in chunks, and each time a new chunk is available, we might want to update the results we are presenting.  LS should also allow the search parameters to be sent remotely, to reduce the load on the sender.

Same pattern can be used for generalized search, which avoids the caller from having to download and process all the pulses in the remote app complex which is being searched.

Iterables are tracked at the system level and follow these steps:
1. System Request that triggers the iterable is sent with options
	1. max in flight: default is one at a time, but some buffering can be configured
2. reply comes back with an iterable id
3. Requests start to flow from the source back to the requester with an asyncId in them
4. System unwraps these and sends them to the async iterable inside the reducer.

Replay is handled by fetching all prior replies from prior pulses and replaying them into the reducer.  This is inefficient, but if [[2023-01-27 1553 Request for nonrepeating reducers|Non repeating reducers]] are used, then during first pulse the operation should be cheap, then during replay this should be very cheap indeed.

## Deferring the block boundary
The reducer may choose to leave the block open while async iterable data is still streaming in ?
Or, should be close the block as soon as the iterables have been exhausted, then let the next updates buffer up ?

## Special cases
### Searches that need full data scan
Eg: `max()` is never really known, but we can get useful info if we stream in the best known at the time.  So an async iterable doing a max calculation can receive periodic updates each time a chunk of data is processed.

Things like sort() need to be applied on the client side since won't make sense to do serverside.

## Replacing SQL
Go thru all SQL functions and see how we might manage them in our system.
Compare with mongodb API and see if we can be exactly API compatible, permitting a straight swap for any mongo applications.  These apps might be able to run browserside in some cases.