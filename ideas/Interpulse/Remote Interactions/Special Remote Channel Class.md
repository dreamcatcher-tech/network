If chains are remotely connected only via [[mtab]], then we might make a special class to represent that, and store extra data in the channel.

## Data to store
### peerIds
We always need to store a mapping between addresses and peerIds that can handle them, so this might be a good place to store that data, as it could scale well due to the HAMT being used to manage all the channels.

### multiaddrs
Info on how to connect to peers over transports could also be stored in the channel object.  The data could be hashlinked to avoid duplication.  

## Extras
We could make a dedicated chain for each peer, and store their info in there, as well as their reputation.