
>[!tip] Created: [2024-04-07 Sun 14:16]

>[!question] Targets: 

>[!danger] Depends: 

Given accounts, then each github repo should be stored under a specific user account, since we need somewhere to send the bill.
A special repo that is the name of the ulid or repo account name is used to store account specific info, like billing ?

Should the github names be collapsed, so that if it is a repo owned by a user, then it doesn't need the account field filled in ?

But browsing a repo needs to include the github name as well as which artifact account it is cloned into.

? What is a native repo in our system ?  If the account field held the ULID, then this would be native.

We can store the account ID separately from the PID ?  It just gets set on each namespace, right at the front, making it implied in everything, rather than part of the PID.

PID namespaces are only within a given account.

Orgs would be used to represent mutual interests of groups of individuals.  Individuals always need their own accounts to be able to interact with all the chains on the system.

Billing should always be stored in the root repo, as well as auth and session management.

Old sessions can be recovered after the timeout by submitting the commit that we saw last, then walking back down from head to it, so we know we got the tip.

Accounting reads the base account balance, and subtracts the session balance.  We might use a small db key to avoid a bunch of waste git commits to write balances back to the root, since we'd write a commit, a tree, and a file change, rather than simply a sum() function in the db and a check.

If this summation showed we were out of funds, then it would actual commits to set the sessions as going into free mode.