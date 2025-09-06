
>[!tip] Created: [2025-09-06 Sat 12:29]

>[!question] Targets: 

>[!danger] Depends: 

we could probably do a trpc style thing,

make some standard front end libs for like, listing files, rapidly scrubbing thru files, searching, etc.

these simple libraries get us back at rich front end apps, but use the terminal as the comms link into the server, and the server side logic is just happening direct on the agent, rather than statelessly.

so an agent is a state container.  long lived, meaning, survives more than one action.

so it might not even have a view attached, it would just come in as a tRPC style connection, but it uses the agent redirection stuff to get its signal in to the tRPC face.

so the redirects to gain access inside the server, and the running of server side code with access to files efficiently - that all works, but the interface is just rpc.

common things like file searching should be easy to produce.

can possibly add some client side caching if we want that, but that is in the territory of a fat client.
it is better to make an in house server that fails over to cloud, using consensus, so the browsers connect to both at once, providing a backup.

this is better than trying to make the browser act like the server, since that is a whole other api / programming domain.