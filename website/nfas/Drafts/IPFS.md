Because we have chosen to have a payload layer, and because our design treats all blocks as part of that payload layer, we are a seamless fit for IPFS which aims to be purely a payload layer.

The style of application has an app root, which can help significantly with resource reduction as only the root chain needs to be subscribed to

A major missing component to achieve our extended functionality is the permissioning of access to blocks and hashes based on the content of the blocks being requested.

Functions:

1. Announce when new blocks of a chain are made
1. Announce to destination when new interblocks are available from source
