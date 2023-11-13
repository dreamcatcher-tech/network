
>[!tip] Created: [2023-06-29 Thu 11:54]

>[!question] Targets: 

>[!danger] Depends: 

Children should be able to be queried using mango, to give a query language.  Should work for nested children too.
Can make each chain look like a mini mongodb instance.

SQL can be used too.

Possibly GraphQL.

## Existing engine
Use an existing engine and load up all the items we want to query into ram.
Stream results back where possible, as more data becomes available.
All queries should be streamable, even things like max, where we just stream the max as we know it, until we have parsed all the data.