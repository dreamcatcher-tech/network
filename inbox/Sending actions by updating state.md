If one chain can set the state of another, and has access to its reducer, then it can achieve the equivalent of sending its action by processing its action for it.

Steps would be:
1. Parent receives an action that is intended for the child, but the parent is acting like an action router.
2. Parent reads the state of the child
3. Executes the child reducer using this state
4. Compares states - if different, it:
	1. either lock the state, or send the action to the child for processing
	2. set the state

The parent would have incurred the computation cost of the child, but it had to pay for it anyway, so it may have saved time if no state change occured.

Further shortcuts are possible by squashing consequtive state updates together.  So if a channel is asked to send another state update, and the previous action was a state update, it can dump the previous one.