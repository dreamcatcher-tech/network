
>[!tip] Created: [2023-04-06 Thu 15:22]

>[!question] Targets: 

>[!danger] Depends: 

We can support the async iterator protocol, and can allow callers to treat remote chains as generators.  Reducers then, can be an async function or a generator function, or both, where they switch based on the action sent in.

Promises are made up of 1 request type and 2 reply types.  Generators can be built in to channels using 3 request types and 2 reply types:
1. Request: `GENERATE` sent from the sender to the receiver, triggering the reducer function.  A reducer that does not immediately end the generator will send back an `@@PROMISE` reply.
2. Request: `YIELD` with payload `id` and `value` which is sent from the receiver to the sender, where `id` is the hash of the `GENERATE` action.  This is for yielding results from the generator function.
3. Request: `RETURN` sent from the sender to the receiver, with payload `id` indicating the originating `GENERATE` request.  Used to terminate the generator early for any reason.  Has no other payload.
4. Reply: `REJECT` sent in response to `GENERATE` at any time during the execution, including immediately at the start.  No further `YIELD` requests may be sent after this.
5. Reply: `RESOLVE` sent in response to `GENERATE` with the final value as the payload, closing the generator.  May be sent at any time during the execution.

## Process
Generator is triggered by the initial `GENERATE` request.  Each yield that occurs from that invocation will be translated into a `YIELD` action and sent back to the sender.
When the generator is complete, the final value is provided as a reply to the originating `GENERATE` request.  

## Assigning inputs
We should support all aspects of generators, including assignment based on yield.
This mode will be the slowest possible, since each yield must create a new block before proceeding.

```js
const receivedValue = yield outputValue
```

If such a function was invoked as a promise, the yield input will be undefined.

## Flow Control
Once a reducer has ended its blockmaking, the generator will not be reinvoked until the caller has acknowledged the next calls.
One cycle is permitted to be sent ahead, where if no replies have been received, we will halt execution maybe.  Specifically, if replies to any of the next() actions are replied, the reducer will only be invoked if there is not a second block's worth of next calls loaded on the channel awaiting replies.  This balances flooding the caller and not slowing them down.

Or, devs of the generator may opt to wait for the yield to return something, indicating the remote side has processed the yields, which stops runaway generators.

In practice flow control might be too hard to implement intelligently at this layer, and is best handled at the network level, where interpulse flow control needs to be added, with the sender politely buffering.  In the case of streaming server logs, we would want to buffer in the chain and send as soon as we are able, else there is no other easy place to buffer.

Some flow control actions might be sent over with the `GENERATE` action.

## Coercion between promises and generators
Calling a generator function as tho it was a promise will invoke the generator, drain the outputs, and return the final value, or reject.
Calling a promise as tho it was a generator function will invoke the promise, and return the single value as the done value, or rejection.

## Use cases
Progress bars are the easiest example, where a long running operation would like to update its requester.

`LS` should operate as a generator, where children that are fetched quickly (ie from ram, or from a single disk read) are streamed back to the called as they become available, allowing very large data sets.

Streaming back logs from a console session is best done by a generator where we yield as many lines as are available at any given time, then sleep until more lines are available.  There would be some timing detection and buffer size triggers to decide on when to send and when to wait for more input.
Detect when the console is being 'spun' where multiple actions are resulting in very little net console change.