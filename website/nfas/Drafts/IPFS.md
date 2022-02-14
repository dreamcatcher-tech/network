Because we have chosen to have a payload layer, and because our design treats all blocks as part of that payload layer, we are a seamless fit for IPFS which aims to be purely a payload layer. IPFS would be reponsible for replacing our storage layer and network layer, which is an enormous amount of complexity that we can leverage from a popular and funded project.

IPFS does not currently have any sense of read permissioning, nor multisig public cryptography, so we will need to add these layers in, hopefully in a way that can benefit the IPFS project as resusable components. An interim measure is to

Some modifications to our models are required to fit this, but the general logic

The style of application has an app root, which can help significantly with resource reduction as only the root chain needs to be subscribed to

A major missing component to achieve our extended functionality is the permissioning of access to blocks and hashes based on the content of the blocks being requested.

Functions:

1. Announce when new blocks of a chain are made
1. Announce to destination when new interblocks are available from source
1. Recover latest block of a chain, having missed announce
1. Recover latest interblocks from source, having missed announce
1. Publish a permanent end for a validator sets combined public key, signalling turnover to a new validator set

1. Present a state tree browser that presents data like files
1. Be able to browse blocks and other structures with the web tools in native IPFS

1. Map IPNS versions to blockheights
1. Allow a composite key in IPNS

IPFS requirements

1. Pin the
1. Subscribe to IPNS publish and pin the results
1. Regularly download a CAR file containing all the data
1. Be able to scrub by walking the tree fully

## DAGs required, and their children:

### Chain

This is a reverse trickle DAG which has as leaves pointers to every block.
The root hash of this DAG represents the LATEST hash. Benefit is that getting an arbitrary height can be looked up near instantly, rather than having to walk the chain one block at a time

### Block

#### Network

##### Channel

### Interblocks

### State

This is made up of pointers within the DAG

## Converting existing models

### Network model

This was designed to be very large and fast using ImmutableJS. Using IPLD opens up a new possibility for scale, as a network object of unlimited size can be created, and walked only for the specific pieces required during blockmaking. Using tools like the [IPLD HAMT](https://github.com/rvagg/js-ipld-hashmap) we might be able to achieve megachain without implementing the proxy pattern for chains.

## Benefits over existing implementation

1. Interblocks are not produced, nor sent, but rather the permissions layer will only give access to the destination chain from the source for the narrow slice
1. Network size in a block can be near infinite with no overhead
1. Whole applications of a tree of chains can be bundled up into a single archive and downloaded to sync rapidly
1. Storage space is used nearly as efficiently as possible with very little performance overhead
1. Lambda functions can now make their own internal high performance cache network that makes use of the temporary disk space each function gets
1. Lambda functions can operate without S3
1. Our public blockchain can have truly public data right from launch

## FAQs

#### How will devs access the full block inside a reducer ?

They have to use an async function to query the block anyway, so they will have to make several async calls once they know what the block.network path they want is.

Questions:

1. Can a UnixFS file also contain a custom IPLD format, so we can blend the payload layer tree and showing the state of each node ?
