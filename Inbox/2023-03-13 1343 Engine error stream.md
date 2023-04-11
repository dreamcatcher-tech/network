
>[!tip] Created: [2023-03-13 Mon 13:43]

>[!question] Targets: 

>[!danger] Depends: 

```js
async #listenErrors(){
	for await (const result of this.#asyncStreams){
		if (result instanceof Error){
			throw result
		}
	}
}
```
For the sake of speed, some tasks are deprioritized to background tasks, and are vulnerable to throwing uncaught exceptions.  They also stall the engine, as there is no way to check for these errors.

Every time a fork occurs, the promise should be pushed on an error stream.
For all children, the error streams should be combined up, so at the top level, the engine error stream can be awaited, and it will thru if a background task threw an error.
