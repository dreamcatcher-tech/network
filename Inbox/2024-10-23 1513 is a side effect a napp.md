
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