
>[!tip] Created: [2024-01-02 Tue 22:18]

>[!question] Targets: 

>[!danger] Depends: 

Each manifest should be an entry in the transaction log for the customer.
This means that if we make a single md file for that item, then everything attaches to it.

Inside the schedule, when you are viewing the schedule, it is always generated dynamically whenever you want to look at it.  There is a cached version, but it depends on no changes to the gps records since it was generated.

Then, when generated, we make a transaction in the transactions list, and then link it to the customer,

? have customer, give me all transactions.
transactions list could be sorted by customer, and a cursor used.
Could group them by year, or some other kind of archival mechanism once we approach the context window limits
Run a lensing operation that is a simple map, where we go pull up the key, or all the keys, and build up the list that way, on the fly.  So do like a hundred at a time.  

Can retrieve by file name, which has the customer id.

checks would run to make sure no unassigned customers were present in one of the sectors for the day.

Calling the geocoding service would be done by LLM and so could easily be done by a lens.

Make a `templates` folder at the root that defines the structure of the markdown documents.  They all then must be matching the template in the current HEAD of the system.  This is related to the dictionay of the system, which contains the list of terms to be used.
Could be in a .template folder inside the collection.