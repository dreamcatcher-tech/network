
>[!tip] Created: [2025-02-19 Wed 09:43]

>[!question] Targets: 

>[!danger] Depends: 

Mango is good for json based queries, but when we have access to llms, there might perhaps be a different form of query, that includes some natural language components.

It should really be trying to turn the NL query into some mango like response, but it would only know how to do that by reading each record, or each group of records.

It might construct a virtual table, and then run the mango query on that.

Should leverage being able to run queries in parallel.