
>[!tip] Created: [2025-07-09 Wed 09:35]

>[!question] Targets: 

>[!danger] Depends: 

This should be discoverable amongst workers, and should allow for inotify style calls.

This makes it lively.

Can use this index to tap video streams, and send them around the place by allowing recipients to watch the index stream.

This could be made efficient like allowing relays and processing ?

could nats jetstream be used in this way, except what happens is that a dedicated nats node is fired up each time a new stream is created, so listeners discover the stream source, and then read from there ?

This avoids having a dedicated jetstream queue that can become overloaded when too many nodes fire up.  Instead, just the writers of that stream maintain the stream.  This could be used to pass consensus messages around ?

This is neat bx queue mechanics already built in to jetstream.

or pass a dedicated repo around that they all share ?
