
>[!tip] Created: [2024-01-10 Wed 13:43]

>[!question] Targets: 

>[!danger] Depends: 

Because it is git, we can allow lambda functions to respond to requests for data using a simple http protocol.  Then we can read and stream down responses easily.

Also we can use github as a base for pulling down repos.

Due to the universality of the git protocol we can give people access to it in many different ways.

Can also use deno functions.

Deno has subhosting, which would be ideal for running user submitted isolations

Make a workbench that can simulate running isolates based on the actions in the repo, so they can be used for testing.

Maybe we can just use cloud infrastructure to start, and then raise to go decentralized, where we use libp2p ?

We could copy the deno kv api, but make that run decentralized.  The use cases are the same, except we are providing a filesystem not just a kv store.  We can also allow unlimited local modifications or intra cluster mods before syncing back to main.

We could provide higher availability guarantees than deno's infrastructure, plus netsplit offline operation.  

So we would provide first a deno cloud hosted solution so the programming model could be refined without the cost of updating the decentralized model.  Once the applications are shown to be useful, we can use the Dreamcatcher (now running on Deno) to build out the decentralized modules that we need.  At the start, the dev versions are technically decentralized, since they can verify the function calls that were made.