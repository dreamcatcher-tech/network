
>[!tip] Created: [2023-12-01 Fri 11:14]

>[!question] Targets: 

>[!danger] Depends: 

Datums have a schema, and possibly [[2023-02-06 1602 lifting schema up to system level|all chains will have a schema]] so how can the api for doing a SET on a datum be told to require this schema in the form of its actions ?

It could at the very least send the schema back in its error messages, if something doesn't match.
SET could be hoisted to be a system level function, which can generate the API dynamically based on the state of the system.

Or, we can simply use the AIs with some help that says how to get the schema out by looking at the instructions for SET, so it tells them to use the schema in the chain object, which might be a path and need to be looked up.