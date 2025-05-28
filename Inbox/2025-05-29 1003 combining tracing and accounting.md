
>[!tip] Created: [2025-05-29 Thu 10:03]

>[!question] Targets: 

>[!danger] Depends: 

if we maintain a plain text accounting file of all the billable events that are occuring, as well as your balance, then we can allow people to set per account spend controls too, where before commencing any operation, we check available balance, and possibly put a hold on some funds.

The trace id is stored along with the ledger entry.

? does every billable event have an originating action ?

so once you have a trace, it isn't a log, but it is the hashes required to replay the computation.
this should be a tranclude.

if you made external requests, you can set up an otel collector that will add this data to the record of execution.

bear in mind that replay and retrieval of these items costs money too.

batching the billing for many small requests, like maybe not required for every single request, but can refer to a range of requests, which are all stored, and then sums these up for their total costs.

this avoids thrashing the accounting too heavily.

this would allow negative amounts, since we can't know ahead of time what something will cost.