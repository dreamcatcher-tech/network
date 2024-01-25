
>[!tip] Created: [2024-01-25 Thu 16:41]

>[!question] Targets: 

>[!danger] Depends: 

Would want to add a function 'send an email to all current customers'

This should break the command into parts that we can resolve.

Getting the email addresses of all customers should be the construction of a regex search.

Writing an email for each customer should involve grabbing their record, and the email we want to send, then writing a custom version just for that customer.

We could then use some diffing tools, or a backchecker to confirm that only the customer name was inserted, and that the customer name matched the customer record.

Templates could be turned into regex, so we can confirm that a document matches the regex easily.

