
>[!tip] Created: [2023-04-17 Mon 14:09]

>[!question] Targets: 

>[!danger] Depends: 

Instead of a central list, multiformats should allow an IPFS address.
We should be able to provide the pointer to this ourselves.
Common addresses can be preloaded.

So when the library loads, you load it with the IPFS hashed format table you want to use, which does the byte mappings that the library will load.

A bundler should prefetch this table, or it can be loaded from a dependency, so that it is always correct ?

Would remove the need for a central csv file and let devs define any format they like ?