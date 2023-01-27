
>[!tip] Created: [2023-01-27 Fri 15:53]

>[!question] Targets: 

>[!danger] Depends: 

Currently the reducer is reinvoked each time a response is received for an async request into another chain.

Speed can be achieved if the api promises were merely resolved, rather than rerunning the whole reducer from start.  This is particularly using when the computation is occuring within the same [[App Complex]].

If a reducer finishes its run, and has sent out some requests to be fulfilled, then if those requests are within the same app complex, we should keep the reducer loaded, if we can afford the resources.  A queue should be made where paused reducers are put.  If memory pressure increases, then we can drop from the queue.

When sufficient reply's come in to rerun the reducer, if there is already a loaded reducer on the queue, we check that it is the last one we ran, then we grab what hooks it has left open for its awaiting promises.  We fulfill these hooks with the reply's that were received.  We then re-await the reducer, and repeat until it is exhausted.


