
>[!tip] Created: [2024-11-23 Sat 08:39]

>[!question] Targets: 

>[!danger] Depends: 

It's chat interface would be able to be configured with different sysprompts ? and different filtered views of the knowledge base it contains.

How to call a Napp as a CI tool ?
Spec the napp name, the functions we want, and the file include patterns ?

This would run the napp on the current filesystem.

? what about transmissions that it wants to make ?  these would be like deno network permissions ?

To run as CI, all its dependencies would need to be resolved somehow.

? should the napp have to declare what other services or napps it wants to call ?

In CI mode, it wouldn't be transmitting anything, it would just call the other in ram configurations, in order that it return a final result from a single crank of the engine ?

If the napp had to declare its services, then we would need these stubbed out for it to be callable in CI.

switching between the large pieces of the system, like definitions, specification, implementation, code, blogs, stories - these switches are what the bots would get more beneficial answers from, so they could be aware of the code they are running on.

Files shouldn't require a tool call, they should be stuffed in the context, either fully or partially.