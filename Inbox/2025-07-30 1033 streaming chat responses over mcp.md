
>[!tip] Created: [2025-07-30 Wed 10:33]

>[!question] Targets: 

>[!danger] Depends: 

we could use resources to indicate when the chat had completed ?
or we could stream and rely on the client receiving the stream ?
or let them use notifications ?
or, watch the file, or download the file in its partial state, which is resumable at any time, viewable by multiple parties.

so send is just starting the message, and getting back the file location.

cancel by sending an explicit actions.

read the file by discovering the server that is making the call and tapping that.
in consensus, there would be several leaders doing this, so you could subscribe to multiple ones.

Makes it very simple if we have explicit machines doing the calling, so that clients can always find these machines and connect directly to them, receiving data purely from them, with backup servers.

Makes the clients active in ensuring they receive good results with high availability.  Avoids having this complicated abstraction that makes it hard to undo the abstraction when you want to find the exact machine doing the work.

When using a worker pool, the data node would be the one that receives the partial updates of all the workers.  The amount of work that a pool would have to do that would overwhelm a node with data would be obscene.

To get around that, branch out, have different nodes for each data branch, and marshall the clusters that way.  

There is always some single machine bottleneck in there somewhere if you want a point of synchrony.  If the calculations are independent, then we can relax that.

cluster nodes could also federate, so they have different levels at which they have control nodes.