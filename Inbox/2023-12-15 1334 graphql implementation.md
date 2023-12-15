
>[!tip] Created: [2023-12-15 Fri 13:34]

>[!question] Targets: 

>[!danger] Depends: 

schemas are natural to our system.
resolvers can be natural to chains, but can also be used to handle external APIs.

So we can make the general API marketplace, where people request connections to other services, be actually graphql implementations, so that we connect in an efficient manner that is maximally reusable.  Either way, we are presenting back a graphQL interface to the apis by way of native graphql in the chains.

connecting using graphql could make calls to these apis more efficient and allow combination calls, so a good api implementation would be graphql based on the outgoing.  All blockchain queries should be graphql by default anyway.

Some might need to be active, where you need to trigger something to fetch the info, others can be queries on chains so can be passive.