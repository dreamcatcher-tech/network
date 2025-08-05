	
>[!tip] Created: [2025-08-04 Mon 22:49]

>[!question] Targets: 

>[!danger] Depends: 

Each node can nominate a string of other nodes that in order will take its place if it becomes unresponsive.

also when it novates, it can bring a new node into the cluster, and then say at what height it will swap out.

this is done so that a node never needs to swap its keys out at any point, so it brings in new nodes rather than moving its keys around.

then having nodes that step in when its offline - these nodes can be warm standby.

useful in cases where the node is punished for being offline.

we could make the execution server be a separate computer to the data node, and treat the execution engine as its fallback.

execution is easiest as running on a sidecar machine to the data node.  The data node  triggers the execution engine as needed, since it is more expensive to run, and it fires up, syncs up, and then executes.

Ideally exe would happen on the consensus node itself, where we have full control of it.
if we have worker pools then we can end up int eh same predicament as before, where we have to do network tricks to coax reliability out of the system, where the network has brought in unreliability.  Running inside a worker on the data node seems to make more sense ?  

certainly simpler to do this way.
big calc would move to a bigger compute node ?
or split the chains up, so you have a computing chain where big tasks go off to.
keeping all the operations local to a single machine makes it much easier to operate.  Then consensus is how network instructions go out.

We could manage a worker pool by using a chain to manage them, so the instructions go out reliably and get run locally.

The only form of network comms should be consensus and hash sync.
Anything else invites complexity where we have to use complexity to recover reliability.
the unit of reliability is the single computer, so it should fail cleanly and instantly, and not attempt to recover itself.  All network comms should be done by a consensus chain, so we have reliability.

Can we make a calculator, that can show how these various designs perform, and indicate the fine grained properties of CIA so you can experiment and see how the system works under the hood, plus have some optimizing goals ?

We can also show where the reliability properties are being upheld, so if you want to replace our mechanisms with other systems, this is where the bloat comes back in.

So we'd provide design guidance by way of LLMs that generate solutions, so you could be excused from learning much about our system before you can become productive in it.  And even then, it explains from first principles why the decisions are made.