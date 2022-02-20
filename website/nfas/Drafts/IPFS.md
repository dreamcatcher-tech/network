Because we have chosen to have a payload layer, and because our design treats all blocks as part of that payload layer, we are a seamless fit for IPFS which aims to be purely a payload layer. IPFS would be responsible for replacing our storage layer and network layer, which is an enormous amount of complexity that we can leverage from a popular and funded project.

IPFS does not currently have any sense of read permissions, nor multisig public cryptography, so we will need to add these layers in, hopefully in a way that can benefit the IPFS project as reusable components. An interim measure will be to use the private network feature of IPFS to form boundaries of non overlapping permissioned data until per chain permissioning can be implemented.

Some modifications to our models are required to fit this, but all the logic of chainmaking remains identical. There may be an extra step to asynchronously build up the parts of the block that are needed once we know what we need - specifically in `block.network` - but the upside is that `block.network` can grow to millions of chains and still function with performance being mostly a function of what changes you want to make, not what changes had previously been made.

During the course of this conversion we will treat permissioning and privacy as a separate layer, as it does not affect the data structure and transmission systems very much, the only exception being the layout of a block to allow interblocks to be formed that do not leak data about what other channels also received transmissions at the same block.

The utility of IPFS splits into two key areas: Liveliness, which is the means of propagating changes to chains, and Persistence, which is the means of storing, distributing, and retrieving chains.

## Liveliness

Broadcasting in any network is a troublesome operation. After analysis of the protocols available in IPFS, broadcasting is significantly cheaper if a large number of different messages are sent to a single topic, rather than few messages sent to many topics. This is due to the cost of subscription to a topic. The principle we leverage to fit this model is that an AppRoot of any application is used as the topic for messages to notify a child of the AppRoot that there are new interblocks available to them to make new blocks out of.

### Functions required

1. Announce when new blocks of a chain are made to readers
1. Announce to destination when new interblocks are available from source
1. Recover latest block of a chain, having missed announce
1. Recover latest interblocks from source, having missed announce
1. Publish a permanent end for a validator sets combined public key, signalling turnover to a new validator set

#### Announce using a custom dht + pubsub

We need to make a custom dht in libp2p and set the validate and select functions to only relay blocks. There is a significant weakness in that a rogue validator set can turnover and then continue to publish, which will confuse some nodes, unless each node looks up the block turnover history to validate it properly before validating.

Initially for our version this problem will not be tackled, and any block with a valid signature scheme will be passed. The selector will operate solely on the heights of each block, whereas later it should walk the tree and determine which is latest.

The key:value pair in the dht is `chainId:CID` and we will walk the tree to check it. In prototyping, any publication will pass.

### Announcing new blocks

To avoid flooding the broadcast channels of IPFS (or any announcement system), change subscriptions are voluntarily kept to approot chains, altho they are permitted to be anything. The root of the app is guaranteed to change if any of the children change. The approot is the method of crosschain consistency for running queries.

Using pubsub in IPFS, each chainId is a broadcast topic. Correctly functioning validators will only broadcast when approots change. Upon receipt, each peer checks the signature of the block and if it fails it should stop gossiping the message.

Worst case we have a single validator, so we can just use IPNS to publish.

This DHT put is required for peers that missed an announcement. Each new block is also announced using pubsub. The same problems occur here as with put, and are handled the same way. Again a custom libp2p implementation may be needed.

Whenever a new block is received, the client and the server should pin it recursively, as this is the approot.

### Announcing new interblocks

Listeners in the target chain subscribe to the topic of targetChainId:sourceChainId. Once the permissions layer is implemented, they would just listen to the sourceChainId topic, and would only receive notifications when something they can access is part of the latest block

The principle is that if you have a request that you need processed, you need to keep announcing until you receive a reply. There is no point storing these values anywhere.

Publish by putting a value in the DHT so that if someone comes looking, they'll be able to find it, published by srcChainId-dstChainId:hash-height

### Catching up

Upon first seek, or periodically when a node suspects it might be behind announcements, the node needs to get the best known latest block. There are two ways to do this, which will be subject to testing.

Firstly, we can store the value directly in the DHT. Nodes would validate this value when received to make sure they agree with it before passing it on. This is the preferred method, provided we can stop forwarding malicious data, and we can update efficiently.

Secondly, we can use the IPNS system to publish versioned updates. Versions are numbered, and so these would coincide with block heights. Currently the IPNS system only supports signatures from a single key, so this method only supports single validator usage. Perhaps later we can modify it to support a set of validators, but then another problem is leaking information where the same validatorset is responsible for multiple chains.

### Speeding up first sync

CAR files are a single archive of a tree of IPFS data. We should speed up time to first sync for clients by providing CAR files that snapshot the application state periodically. This will be especially useful for browser clients, however the applications should function sufficiently well if synchronization is from scratch reassembling DAGs.

The design of Interblock and its web components has always considered data arriving asynchronously, as all UI components are reactive, so speed of sync should be less of an issue. Browser clients currently store data in indexeddb so they will only need to sync data they missed while offline each time

### Persisting app state on the clients

IPFS has a function called pinning, and we should use this to pin the approot of each chain periodically, each time a new approot block is discovered. We may choose to unpin the previous block, but this will be a performance based decision, and not critical initially. In this way, all web clients with the webrtc protocol enabled, can help others sync faster.

### Scrubbing the chain periodically

We will need to make a walker that periodically checks that latest has all its data present, then proceeds backwards in time, to ensure that all data is available.

## Persistence

### Chain

This is a reverse trickle DAG which has as leaves pointers to every block.
The root hash of this DAG represents the LATEST hash. Benefit is that getting an arbitrary height can be looked up near instantly, rather than having to walk the chain one block at a time. The old version of chain was literally a chain, but this new version should be a tree, to give this rapid lookup ability based on height.

### Block

This stays largely the same, except internally the IPLD datamodel is applied

### Network

This will be left alone if possible, but we might change firstly that we build it up asynchronously, allowing efficiency as it gets large, and secondly that we might move to a HAMT which allows millions of children. HAMT needs performance checking. We need to make sure that holes are repacked in the network tree, so the tree does not shuffle, but this might not actually matter if we use named links.

### Channel

This is an interesting structure, since it acts as a splice point to connect to the DAG or another chain. In the `precedent` field, it maintains a pointer to the latest block from the remote chain that transmitted to it. Walking this DAG it finds what messages are due to it based on its chainId. This will be tricky to implement privacy on, as the content request needs to be done as tho

### Interblocks

These point directly at the blocks of the transmitting channel so are no longer a thing. The permissions layer will restrict how receiving chains can walk the DAG of transmitting chains.

The `block.transmission` slice points now to the CID of the channel tip

### State

State allows using CIDs if the developer wants to, which can make anything in the IPLD be referenced and mutated by chains, by wrapping them in state.

## Converting existing models

### Network model

This was designed to be very large and fast using ImmutableJS. Using IPLD opens up a new possibility for scale, as a network object of unlimited size can be created, and walked only for the specific pieces required during blockmaking. Using tools like the [IPLD HAMT](https://github.com/rvagg/js-ipld-hashmap) we might be able to achieve megachain without implementing the proxy pattern for chains.

## Overlay DAGs within the App Complex

A chain application is made up of an approot and any number of children. Within this tree of children, there are 3 overlay DAGs which can be navigated directly:

1. The state tree (the knowledge of the complex)
1. The metadata tree (the liveliness of the complex)
1. The binary tree (the files of the complex)

Each of these is referenced and pushed up to the root. This allows the state hash to be queried for when it changes, and know that none of the child states changed either.

## Entering the system

The binary data can be attached directly to a pierce chain, or it can be attached using IPFS and then a CID provided to the chain. The validators will fetch the CID and verify the hashes before including reference to this data in any blocks

## Locking of chains

This is only required within any process that has access to the crypto keys of this node. This lock process cannot be within IPFS because it needs to be very quick, and should never leave the node. In lambda, this would probably be done through dynamodb, or it might be done as blocks in an internal chain to give high level locks, then fast local locks within each 6 core runner.

In an algorithm like tendermint, locking is handled loosely and within the protocol, so here locking refers to only within the node itself, to provide consistent and compliant use of the precious crypto keys.

The npm package [`mortice`](https://www.npmjs.com/package/mortice) which is used by IPFS might be useful for locking on the same machine.

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
1. Does throwing in the pubsub handler in ipfs perform the same result as a validator in libp2p pubsub ?
1. How is the performance of the IPLD primitives ? Can we use them in the intermediate states, or should we stick to our objects and only stamp down to IPLD at blockmaking time ?
1. How big are ints in the IPLD datamodel ? 2^53 due to implementation in JS

## Problems

1. Browser peers need access to a signalling server to use webrtc: https://github.com/libp2p/js-libp2p-webrtc-star/tree/master/packages/webrtc-star-signalling-server - but a desktop node might do this automatically once it gets discovered by the browsers

## Goals

1. Perform well over lan on a private network - ignore public network performance

## Implementation order

1. Data structures overview via writing schema
1. Convert model system over to use IPLD models
1. Build hash functions with rough benchmarks
1. Check producers still operate correctly
1. Modify Engine to use IPFS to store pools
1. Cache ioConsistency using block.bytes.length as the capacity
1. Modify Engine to fully resolve DAGs before blockmaking
