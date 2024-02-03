
>[!tip] Created: [2024-02-04 Sun 10:45]

>[!question] Targets: 

>[!danger] Depends: 

If an isolate has been running for some time, but has been posting updates to the chain, we need a special way to define this function so that it can be repeated.
It means the chain cannot be repeated from any intermediate point, but must be repeated from the begining of the long running function.

This seems like an antipattern, but might be good for things like running a network socket.
Also anything with a high ram content might want to keep it around.

A better pattern is to restart the isolate each action, so it is repeatable.  We should be able to pass some context thru, such as a ram cache, even tho this is leaky, but so long as we could restart if we wanted to, then the ram cache serves only for speed, not correctness.