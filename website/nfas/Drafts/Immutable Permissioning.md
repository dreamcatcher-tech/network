IPFS has many great tools for content addressing data systems, but none of them deal will with read permissioning. Encrypting the files is not a solution - true privacy means no unauthorized actor has even the encrypted files.

This privacy needs to be contained not in the file content, but also the file hashes, so that all aspects of network traffic maintain complete secrecy from the unauthorized nodes.

This proposal centres around the concept of using the content that is being asked for as the reference for determining the permissioning instructions for itself. This is purely read based permissioning, as IPFS has strong write permissioning via its cryptographic model.

The proposal provides a walk path for any given piece of content that needs to be walked to ultimately find the list of permissible readers of the content. In the Interblock system, this will be:

`content.network.approot -> content.network.ACL -> content.state.allowRead`

Until this walk completes and confirms that the requesting node is allowed to read the data they requested, we will act as tho we have never seen this data, and will decoy requests out to other nodes for the peerwant lists, so that a traffic observe could not know if we had what was asked or not.

## Publicizing the AppRoot chainId

Unless a node is provided with valid bootstrap nodes, it will need to ask publicly for connections until it finds someone with the approot. Strategies could be employed to discover this without raising suspicion, but for now the approot chainId should be considered public

## Other Uses

1. publishing whitelists of files that are guaranteed conflict free, so no infringements, plus automatic takedowns if you want, as the lists are updateable

## References

A good source of ideas might be the efforts for integration of tor with IPFS, as privacy leakage needs to be tightly controlled there too.
