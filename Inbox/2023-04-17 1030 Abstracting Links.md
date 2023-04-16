
>[!tip] Created: [2023-04-17 Mon 10:30]

>[!question] Targets: 

>[!danger] Depends: 

A link should not be constrained to a hash.

Sometimes we want a piece of data but for efficiency reasons we do not want to hash the data, however it is still known to be a type.

Abstrating links may allow encompassing a larger set of datas, particular data that came before the explosion of content addressed systems.

Size of the hashes in a DAG can become large, like a quarter of the total size.

Trees that are made to represent a blockchain like structure often need to diff, and so encoding that information in the link is useful, rather than a pure hash being unique universally, but giving no clues as to the top of the tree representing this particular block.

Abstrating the links allow compression to be included.  If the same hash is used multiple times in a DAG, the data size will be penalized by hashSize X Ntimes.  