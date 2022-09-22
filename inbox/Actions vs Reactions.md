Different use cases are better for

## Examples
### Controlling libp2p within shell
Some elements cannot be faulty, such as the mapping between addresses and peerIds.  Other elements are unable to be reacted to under all conditions, such as listening on a specific tcp port.

Port listening is therefore better as an action, with the results being stored in the shell state, and the address mapping is better stored in state, and libp2p reacting to it.