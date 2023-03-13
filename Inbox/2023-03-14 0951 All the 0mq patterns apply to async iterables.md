
>[!tip] Created: [2023-03-14 Tue 09:51]

>[!question] Targets: 

>[!danger] Depends: 

ZeroMQ has a list of patterns for how to make streaming systems.

We should modify each of those to suit async iterables.

Then, since the interpulse channels can be modelled as async iterables, we should be able to make the same kind of architectures using chains, and show how different configurations give different properties and performance under loads.

We can expand this to cover eventual systems - those where the message gets thru eventually.