
>[!tip] Created: [2023-02-02 Thu 16:22]

>[!question] Targets: 

>[!danger] Depends: 

During testing, often the provisioning of the test chain takes a lot of time.  It is not always convenient to load it from a CAR file.  So being able to rollback to a specific pulse is useful.

Rollback should be an engine level command.
Rollback may enforce a fork, but would lose predictable chain Ids.
Fork seems cleaner than rollback, unless testing root itself.

Could do it by forking, but would introduce dependency between tests.
Could make a test harness that tested pieces of code in reducers in multiple chains that have been forked, taking advantage of multi threading in lambda to get massive parallelism.
