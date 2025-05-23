
>[!tip] Created: [2025-05-23 Fri 20:52]

>[!question] Targets: 

>[!danger] Depends: 

If we were using Ledger as a plain text accounting system, we could attach this plain text ledger to every customer, and that customer would be able to see their accounts instantaneously. We could keep something like a double-entry system where each run had the debits or the amounts that were taken out.

Or we can have a central ledger that represents the company bank account and it does some top-ups and things like that. The idea is that with so many accounts, it seems best to make one account per customer, and then make that be a module where it's an application that knows how to process these files. You can break up where you store those files anywhere in the system, but we can easily assemble reports because we can create the full view of each customer. It can involve some complex processing like pulling in the query that was being asked (if you wanted the accounts for this year, you would go through each customer and pull in the transactions that only occurred this year). With a little bit of tweaking, we could make it very scalable