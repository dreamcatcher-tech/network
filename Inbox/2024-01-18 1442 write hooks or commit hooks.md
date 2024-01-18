
>[!tip] Created: [2024-01-18 Thu 14:42]

>[!question] Targets: 

>[!danger] Depends: 

When a process tries to update a record in the database, it should trigger a set of hooks that are watching for certain paths.

So writing to the customers folder triggers the customer-format-checker.
This should cause the function that was writing to receive back an error as it was trying to commit its changes.


Or, when writing to the customer record, it goes via the customer record bot, so the error is bounced back.
Any changes not made by this bot should be denied by way of an ACL or some other control mechanism.  This could be overridden in order to make edits ?

ACL should be locked to certain isolates or helps being the only ones allowed to access a certain file.  This could be help in the 777 style properties of the file, which get committed to git.