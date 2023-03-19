
>[!tip] Created: [2023-03-17 Fri 10:28]

>[!question] Targets: 

>[!danger] Depends: 

For each class, for uncrush, or any named function, call the stats object when we start and when we stop.
Stats handles throttling and buffering and caching.
Can link requests with other requests so we can make a gantt chart ?

Gives a way to tune the app more directly, and monitor real world performance.

Surface the stats into the UI so that users and admins can see what is happening also.

Get a gantt of pulse load and bake times - when they triggered off and when they completed.
Show links as to what other tasks they caused to happen.
Somehow show when a task is idle, by highlighting how long they waited for db calls.
Show where caches were hit, and lookup what the original call was, so can know the effect of our caching.

Can attach the stats object to all functions, so it always gets passed along, and can be updated as it goes deep down.
Ultimately the calling function is responsible for publishign the stats.
Can be used to show cache loads, cache hits, and other vital data.

Decorate all IPORM classes with performance collectors, so we can see how long the program spends in each piece, how long the uncrush and crush functions too, and show a gantt of how performance interacts, and how delays cause pipeline starvation, graphically.

Also account for the cost of the collector.

Interact with the [performance API](https://blog.logrocket.com/how-to-practically-use-performance-api-to-measure-performance/)
