
>[!tip] Created: [2025-07-21 Mon 13:19]

>[!question] Targets: 

>[!danger] Depends: 

the schema can be stored in each folder, where each folder is a table.
the schema is versioned, and each time an item is written, we know what version of schema it was written under.

when we read it, we can make it fit the schema, or we can lazily update any missing fields.

we could pack better than json by using the schema to remove all the keys.