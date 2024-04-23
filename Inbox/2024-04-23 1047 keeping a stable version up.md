
>[!tip] Created: [2024-04-23 Tue 10:47]

>[!question] Targets: 

>[!danger] Depends: 

Set up a dedicated deployment that is released only after all tests pass.

Those tests should include running a preview deployment and benchmarking it.

Then the UI has some automated interaction tests run against this stand deployment before it is released.

?? should they be released as a pair ?

A dedicated release for the CRM, so it gets hand released after testing passes.

How will live upgrades work ?

Should deployments check the version of the db before processing requests ?