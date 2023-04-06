
>[!tip] Created: [2023-04-06 Thu 15:22]

>[!question] Targets: 

>[!danger] Depends: 

Promises are made up of 1 request type and 2 reply types.  Generators can be built in to channels using 2 request types and 2 reply types:
1. Request: `GENERATE`
3. Request: `NEXT` with payload `id` and `value`
4. Reply: `REJECT`

We can support the async iterator protocol, and can allow callers to treat remote chains as generators.  

Reducers then, can be an async function or a generator function.
Return value from this function can be an iterator, or a promise, or a synchronous value.

## Process
Generator is triggered by the initial `GENERATE` request.  Each yield that occurs from that invocation will 
When the generator is complete, the final value is provided as a reply to the originating `GENERATE` request.  

## Assigning inputs
We should support all aspects of generators, including assignment based on yield.
This mode will be the slowest possible, since each yield must create a new block before proceeding.

```js
const receivedValue = yield outputValue
```

If such a function was invoked as a promise, the yield input will be undefined.

## Flow Control
Once a reducer has ended its blockmaking, the generator will not be moved on until the caller 
One cycle is permitted to be sent ahead, where if no replies have been received, we will halt execution maybe.
Or, devs may opt to wait for the yield to return something, indicating the remote side has processed the yields.

## Coercion between promises and generators
Calling a generator function as tho it was a promise will invoke the generator, drain the outputs, and return the final value, or reject.
Calling a promise as tho it was a generator function will invoke the promise, and return the single value as the done value, or rejection.

## Use cases
Progress bars are the easiest example, where a long running operation would like to update its requester.
`LS` should operate as a generator, where children that are fetched quickly (ie from ram, or from a single disk read) are streamed back to the called as they become available, allowing very large data sets.