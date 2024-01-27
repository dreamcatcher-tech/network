
>[!tip] Created: [2024-01-25 Thu 16:41]

>[!question] Targets: 

>[!danger] Depends: 

Would want to add a function 'send an email to all current customers'

This should break the command into parts that we can resolve.

Getting the email addresses of all customers should be the construction of a regex search.

Writing an email for each customer should involve grabbing their record, and the email we want to send, then writing a custom version just for that customer.

We could then use some diffing tools, or a backchecker to confirm that only the customer name was inserted, and that the customer name matched the customer record.

Templates could be turned into regex, so we can confirm that a document matches the regex easily.

So if we took in an xml file, and created customer records from it, making a template each time.
If the template needs changing, then we would alter it.
There can be a mirror folder that holds the xml that the custom record was based off, so we can always see what it was.
So next time we pull from moneyworks, we lookup the xml files to see about diffs.

During import, should list anything with errors or note suspicious things down in a file.

So reading and writing would update the xml file, and then on read, we would update the customer record, provided there was no pending change to it.

The template might include notes about
The template needs a pseudocode, where it is notes about a section, and provides help to anything reading each record.

A mapping to xml would be stored, as well as some extra bits that we can't store in moneyworks, like if an email was verified, or if they clicked on an email that was sent, or if they ever emailed in.

We can just take notes in the xml template file, and this can be updated.

Template changes need a rollout across the whole list to check they all match still.