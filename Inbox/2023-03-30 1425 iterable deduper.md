
>[!tip] Created: [2023-03-30 Thu 14:25]

>[!question] Targets: 

>[!danger] Depends: 

This function will allow making multiple requests that take some time to complete, and it will deduplicate them by the supplied key, throttle them, and ultimately resolve them all back to the original callers.

This is a fan-in mechanism.

Each call to queue will yield the result of your processor function, but multiple calls using the same key while it is currently executing will return the results of the first call that was made.

Inside the processor, parallelism can be controlled, but we can also include a batching mechanism.  The batching can be controlled by queued up items (overflow), always drain, in process requests.

Finally, the stream can be awaited to that we know when all processing is complete, for example calling end() on the process stream will ultimately end the stream when it has finished processing.


Interface is that it supplies a function to add to the queue:
```js
async queue( key, payload )
```

Then you supply a processor to the stream
```js
async function*( source ){
	for await (const payload of source){
		// do some stuff
	}
}
```
