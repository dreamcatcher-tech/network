
>[!tip] Created: [2023-04-17 Mon 10:30]

>[!question] Targets: 

>[!danger] Depends: 

A link should not be constrained to a hash.

Sometimes we want a piece of data but for efficiency reasons we do not want to hash the data, however it is still known to be a type.

Abstrating links may allow encompassing a larger set of datas, particular data that came before the explosion of content addressed systems.

Size of the hashes in a DAG can become large, like a quarter of the total size.

Trees that are made to represent a blockchain like structure often need to diff, and so encoding that information in the link is useful, rather than a pure hash being unique universally, but giving no clues as to the top of the tree representing this particular block.

Abstrating the links allow compression to be included.  If the same hash is used multiple times in a DAG, the data size will be penalized by hashSize X Ntimes.  

Garbage count in fast moving DAGs is reduced, if the link definition allows rolling up child blocks into a single top level flat block.
Encoding the subsections of a block within the link data.

KVStore uses files per block of data, which does not work well for large numbers of small blocks.

Use a varint to refer to an index in an array of data as the link, so that the size required for a same block piece of data is just an int.  Multiple requirements are just an int too.

It also forces all the content addresses up to the top of the DAG so they can be fetched after one RTT loop, whereas a DAG can be horrifically inefficient as there is no way for the client to know what the child hashes are without asking the server to send them down.

Ties in to the technique of boosting, where we know what the next request is likely to be.

IPLD should allow some encryption and gzip layer to be defined too ?