
>[!tip] Created: [2024-08-19 Mon 09:52]

>[!question] Targets: 

>[!danger] Depends: 

If a tool was run in detached mode, we could detect that in the branch where the tool call was made.

Then it calls the tool as normal, but does not wait for it to finish.  Rather it stores a marker that will execute when the branching call returns.  So the tool call will be returned as simply done, and then execution of the chat will continue.

So we would use a callback function in the isolate, and then when the call returns, it executes.

So io.json should record when a particular action is being awaited for or not.  Before rerunning, all the awaited promises need to be resolved in order to continue.  However this is very hard to detect, since might be promise.all.

Might have a special function to call detached processes.

This would cause the process to execute, and then when it returns, the callback supplied, in context, would be executed.

If the function returns with dangling promises, it should be an error.  
Fire and forget can supply a null function, in which case they are allowed to dangle, and when they return, nothing happens, it is just logged that they returned.

Otherwise, the isolate gets fired up with the state that the dangling function was called, and then the callback is executed with the result of the call.

It should be able to carry on doing arbitrary activity at that point, like awaiting more promises, calling more dangling calls, etc.

So run the function to exhaustion, where there are no more recovered actions to be run, then execute the callback functions that were supplied.  These functions will always have the context at the point of calling, so no special treatment is required ?  as in changing a variable later in the function that the callback relies upon ?

What if the dangling returns before the main function returns ?

the issue with chat based operation is that we don't really know when a process should be in a branch, or should be run in this detached mode ?

So the return should indicate that it is dangling, and it therefore should be allowed to keep the branch open until continued ?

They could be labelled as detached in the agent file.
Or the function param, if it has some detached params, then we interpret it differently ?
Isolates could export their api as separate for detachable functions ?
Or all isolate functions run in the same branch as the ai is running.  Then detachable ones are coded differently.

If on branch, then what does calling an agent look like ?
Should be handled in the function call, not in the execution.

```js
useCallback( promise, async (result) => {
	// do anything but now it is detached from the main result
})
```

Then make the branch close only once the callback has ended.
If we identify these actions in the thread, then we can make special display widgets for them, like if a test was called we can subscribe to the status of the test in the UI to show when it is done.  If this is running an agent, we can show the chat of the agent in the UI.

Same pattern could be applied to do cron ?