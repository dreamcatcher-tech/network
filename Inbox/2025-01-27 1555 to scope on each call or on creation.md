
>[!tip] Created: [2025-01-27 Mon 15:55]

>[!question] Targets: 

>[!danger] Depends: 

if the deno kv store methods required a scope for each call, is that better or worse than scoping to the instance ?

Issue is that if scoped to the instance, then we need a way to make a new one each time, rather than giving it to a provider.

Might be able to compact the interface stack if we don't have a provider interface, but rather just have provider implementations, since we don't want to have different ones ever.

Then the context implementation would just depend on the providers directly.

So providers interface could move down to the providers folder, and not be in the api.

Context could be the holder of the api too, since we aren't going to have any other ones.

We will have multiple versions of stores, but everything else will likely stay the same.

Providers have to be interfaced because they get bridged.

But what about separating by web interface ?

But what if we only bridged the stores ???

The stores are much simpler.  

So then context becomes the only interface, we declare the artifact interface just for cleanliness, but the providers merge with context.

Theres sort of no point having this provider interface.

Then permissioning is just on every scopes call.

Make the rpc calls be pure interface calls, and the provider is just part of the context instantiation.

Sot he web interface is just pure web function calls ?

scope becomes just part of the action structure, which includes a signature somewhere.

Writes are the only special case ?

So if the artifact api was purely action translation, then we could send it straight thru to web, and implement on a context, that is passed in some  stores.  The stores could be scoped and permissioned, since a scoped action can only act within the scope ?

We do a special case on write actions, where we intercept those locally.  Everything else is turned into an action.

the interpreter now, takes these actions and does something with them.

The execution is the thing that takes the actions from inside the function and does something with them.

In the case of a client application, the interpreter would take the generated actions, intercept write ones, then pass thru actions to the server backend.  The server would take those actions, 

interpreter on the server:
- receives an action somehow
- checks to see if the request has validated the action correctly, by signing a message or whatever


Need a sequence number to have ordering of requests.

So how the actions come into the implementation / system interpreter is the only difference between clients and in thread contexts.

So implementation would look just like action creators, but would be actual functions.





so its just an action creator system, that has a counter that goes up each time an action is created so the order is assured.

commit gets intercepted.

implementations of each of the actions are part of the context.

context wraps the action creator with some extra things.

but the action interpreter, is the implementation, and its objects should match exactly the shape of the implemented interface, except it doesn't output actions.

So going to actions is what bridges the web and the inner chain interface.

On the server side is an action router, that takes an action in, and routes it back to the implementation, then returns back the results.  It may translate it, like async iterables into SSE's.

So we make one provider out of the top
Once it hits the db, it is assumed safe.

things like latest need to be handled using watchers.

For each branch, we need to sequence the requests, by using a websocket, to ensure they are in order.  A branch is a synchrnony boundary.  Only latest needs to be used - latest would be supplied by watching for changes ? or latest would include a height.  

at this point, it is now a napp format interaction.