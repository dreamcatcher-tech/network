
>[!tip] Created: [2024-02-04 Sun 11:26]

>[!question] Targets: 

>[!danger] Depends: 

Show how spawning a thousand threads can be used to make them all check in with a central thread to ensure they have enough rate limit available to execute.

Or we can send all outgoings thru a single thread.

Also show how we can run a queue that has a limit on the number of concurrent operations that it has.  This should be a modifying function that wraps all the requests we are making ?

eg: how to walk all the customer records and send an email off, but do not use more than 10 concurrent threads ?  This might need the parent branch to watch how many children it has ?

Or do it using pure user side logic, like the callback function when a specific job completes.

Or we could make a throttle device that uses a kv queue to ensure there is only x number of items in the pipe ?