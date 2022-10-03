An optimization may be to cause all interactions with a particular [[App Complex]] to be done thru a socket chain, which acts like a proxy.

## Advantages
### opening paths is faster
Because the socket chain would be part of the remote complex, tedious operations like opening paths in the complex would avoid the network trip for each segment in the path.

### Presenting complete history for a remote actor
This is easy to do if everything came through a single chain that the inspector had full access to, but hard if we have to walk every chain in the complex to compile the report.  Very useful when allowing multiple users to make changes to an [[App Complex]].

### Permissioning can be contained within the socket
Instead of a separate permissions chain that needs to be looked up by each 

### Interpulse pooling only ever needs to be done for the sockets
If a remote chain can write to any other chain, we can have the pools in all kinds of states.  With sockets, the app complex is always drained, and has almost no catchup tasks to do, and no out of order interpulses.  Instictively it seems useful to be able to shut the outside world off and do internal processing only

## Disadvantages
1. Everything is delayed by an extra chain hop
2. Some extra programming required to do the proxy activit, 