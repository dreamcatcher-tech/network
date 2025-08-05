
>[!tip] Created: [2025-08-04 Mon 20:13]

>[!question] Targets: 

>[!danger] Depends: 

plus can do high perf queries on the data.
offer a query language over it, that uses LLMs to process the data in pipelines.

by offering a provisioning agent, we are giving you a way to super fine tune our own infrastructure to best suit your needs, do complex balancing logic, price adjustments, plus suggest helpful things.

We remove a lot of our own complexity and give it to the user to tweak with, whilst being managed sensibly.  The choices we make should not be those that user could control to get more of what they want.

Our agent can help them troubleshoot as well, if they ask what the problem is.

Agent can do complex provisioning tasks, can also act as a helper for other coding agents trying to achieve a task.

Can spin up sandboxes to test ideas with.

llm can also run edge tests that benchmark your perf from all round the world.

basically brings all the benefits of the dark edge service to a plain application interfact that everyone understands.

the client would make connections to multiple consensus nodes, so that it had in built resilience.

provide a sharding key, where we can map parts of a key to a dedicated chain, to avoid overloading a central chain.

web browser clients can download urls, and we provide services that map this to the right chain and retrieve from it.
Web clients can have multiple connections to these url provider services, for resilience.

Web clients can also resolve down to a hash, and then fetch the hash from whatever bucket can be found.

by using llms to handle things like scaling, we can make something that doesn't have to be ready to automatically handle shock loads, which is hard to do, and hard to test, but instead we have a simple llm that watches the load, and makes decisions to fire things up or down based on the current status.