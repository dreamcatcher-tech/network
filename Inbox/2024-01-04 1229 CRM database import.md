
>[!tip] Created: [2024-01-04 Thu 12:29]

>[!question] Targets: 

>[!danger] Depends: 

We would pull in the xml file, and store one xml file per customer, then we would check for changes and run the updates on each .md record that is our version of the data.
Import testing and troubleshooting is performed on each individual customer.
Writing out changes is done using the same method where we pull the single record, modify the xml and then push it back.

A single large xml file is cumbersome to work with, so we would prefer many smaller ones.  We would keep the original for our own record keeping, and to detect changes easily in the history, rather than doing diffing with a single large file.  Key each one by the customer number.

Server would run this, and would trigger updates by either a cron job, or another user merging in a file that specified a request.  The request would be marked as in progress, and then the results entered.

Name could be a file with a uid after it, so there are some time ordering, and then the executor can run one at a time, or many, or max concurrency.

Can run in a dedicated repo, and then merge into the main repo if there are meaningful changes.