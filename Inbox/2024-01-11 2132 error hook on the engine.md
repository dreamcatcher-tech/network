
>[!tip] Created: [2024-01-11 Thu 21:32]

>[!question] Targets: 

>[!danger] Depends: 

If we are about to wait for something like prompt to complete, then we should return a promise that trips when an engine error occurs, or the prompt promise settles.

So any time an error in a callback occurs, we would trip the engine error call back.
This would error the promise, or call back any 

Callback is easier - subscribe to engine errors, and if you finish in time, unsubscribe.
If you do get an error in between, trigger the engine error.