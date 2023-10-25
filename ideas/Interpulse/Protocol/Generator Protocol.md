
>[!tip] Created: [2023-04-06 Thu 15:22]

>[!question] Targets: [[Interpulse API]]

>[!danger] Depends: 

We can support the async iterator protocol, and can allow callers to treat remote chains as generators.  Reducers then, can be an async function or a generator function, or both, where they switch based on the action sent in.

Promises are implemented with 1 request type and 2 reply types.  This protocol can be extended to Generators by adding 3 system request types and reusing the 2 promise reply types:
1. Request: `GENERATE` sent from the sender to the receiver, triggering the reducer function.  A reducer that does not immediately end the generator will send back an `@@PROMISE` reply.
2. Request: `YIELD` with payload `id` and `value` which is sent from the receiver to the sender, where `id` is the hash of the `GENERATE` action.  This is for yielding results from the generator function.
3. Request: `RETURN` sent from the sender to the receiver, with payload `id` indicating the originating `GENERATE` request.  Used to terminate the generator early for any reason.  Has no other payload.
4. Reply: `REJECT` sent in response to `GENERATE` at any time during the execution, including immediately at the start.  No further `YIELD` requests may be sent after this.
5. Reply: `RESOLVE` sent in response to `GENERATE` with the final value as the payload, closing the generator.  May be sent at any time during the execution.

## API
```js
for await (const result of interchainGenerate( request )){
	// do some stuff
}
const reducer = function* (request){
	yield 'A'
	yield 'B'
	const asyncResult = await interchain( request )
	yield asyncResult
	const input = yield 'C'
	return { some: 'result' }
}
```

## Schema specification
For the standard promise based API, the `title` field in the schema is used to represent the action `TYPE` key.  To specify a generator, the title is prefixed with a `*` as in `title: *SOME_GENERATOR` which is used to indicate to any function mapping sugar functions to use the generator dispatches here.

## Process
A Generator is triggered by the initial `GENERATE` request.  Each yield that occurs from that invocation will be translated into a `YIELD` action and sent back to the sender as a new Request.
When the generator is complete, the final value is provided as a reply to the originating `GENERATE` request using the promise protocol.

If the generator is invoked by a promise call, then the system will, under the hood, drain the generator and send back its return value (or error) using the promise protocol.  This can be used by developers who want to conserve resources in some scenarios and just get the end result.

If a promise is invoked by a generator call, then it is treated under the hood as a generator that ended imediately, and the promise protocol is used to determine the return value, which may be async in nature, and may settle as an error.

## Assigning inputs
We should support all aspects of generators, including assignment based on yield.
This mode will be the slowest possible, since each yield must create a new block before proceeding.

```js
const receivedValue = yield outputValue
```

If such a function was invoked as a promise, the yield input will be undefined.  This method can be used by generator authors as a form of flow control to avoid flooding the requester.

## Flow Control
Generators will not wait to be consumed normally, and interpulse flow control will be used to avoid flooding the receiver.  Devs of the generator may opt to wait for the yield to return something, indicating the remote side has processed the yields, which stops runaway generators.

In the case of streaming server logs, we would want to buffer in the chain and send as soon as we are able, else there is no other easy place to buffer.  Some flow control flags might be sent over with the `GENERATE` action.

## Coercion between promises and generators
Calling a generator function as tho it was a promise will invoke the generator, drain the outputs, and return the final value, or reject.
Calling a promise as tho it was a generator function will invoke the promise, and return the single value as the done value, or rejection.

## Use cases
Progress bars are the easiest example, where a long running operation would like to update its requester.

`LS` should operate as a generator, where children that are fetched quickly (ie from ram, or from a single disk read) are streamed back to the called as they become available, allowing very large data sets.

Streaming back logs from a console session is best done by a generator where we yield as many lines as are available at any given time, then sleep until more lines are available.  There would be some timing detection and buffer size triggers to decide on when to send and when to wait for more input.
Detect when the console is being 'spun' where multiple actions are resulting in very little net console change.

## Problems
Problem with generators is that each yield may have triggered something, so it is difficult to snip the blocks that contain these actions, causing a bloat in pulses.  It might be possible since any path can be pruned for any reason, so it would be possibly to shortcut these pulses out.  A better way is to create a new pulse for each yield, so that there are no actions made, but to get all the yields, you need all the little pulses. Or you can wait till the end.