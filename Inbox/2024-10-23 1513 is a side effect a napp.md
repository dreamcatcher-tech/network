
>[!tip] Created: [2024-10-23 Wed 15:13]

>[!question] Targets: 

>[!danger] Depends: 

It has the same calling interface


The side effect runner uses the same containment systems as the normal napp runner, but has additional access to fetch, and can be granted access to some secret stores, like the .env files of a particular installation, which are not available to a normal execution.

Fetch in the API otherwise throws, if we are not being run in the side effect runner.

? can a side effect run like any other napp, but retain its ability to fetch out ?
Is the fetch result simply entered on chain ?
If it was a binary stream, it can be stored in a temp file and returned in this way ?

side effects are not repeatable.

Multiple side effects, like 3 instances that all hit the same web address and compare their results ?

So it needs enforce that only one commit is possible, since it will make the API call and get the response, and that's all.

Billing relationship is handled here.

Because of the single request being turned into a json call, it can be mocked, for testing behaviours.

VAlidate the bindings between inner and outer with a supplied function call, that will be made by us, using json format invocation, that will validate the schemas provided match the internal representation of the types, so a zod schema invocation.
## A service with external resources
If a sql database instance was running somewhere

## Querying moneyworks
Running a query out to the accounting system means it would do a single request and get the response, and then commit it, possibly with some files.
