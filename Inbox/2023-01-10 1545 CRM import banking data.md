
>[!tip] Created: [2023-01-10 Tue 15:45]

>[!question] Targets: 

>[!danger] Depends: 

Use [sheetjs](https://sheetjs.com/) to load in spreadsheet data and present it to the users.
Propose a column that we construct that says to whom the balance will add.
Human goes thru and checks it all off.
Approves one at a time or does bulk select on all entries.

Now with AI:

Load the file into code interpreter and generate a list of customers to update.

Run the AI over every row, and check the matches against customer records.  Search embeddings for a customer record that looks like the row in the csv.  Loop until we have a good confidence in a match

Whatever the strategy, looping agents is always part of it, so we need the looping aspect.

Store previous human corrections, by using some annotations on the customer record about their banking, as a human readable note.

Human readable notes on customers that a person would likely leave seem all we need in an AI system.

Set it with goals where we expect the numbers to be customer numbers.  But if we see a note on a customer about banking and it looks like this line, then we might need to do a correction.