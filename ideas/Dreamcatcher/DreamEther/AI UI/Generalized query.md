Make it aware of costs, and politely ask the user if the costs are getting too high, if they want to continue.

We can actually do any query under the sun, as we can process the items in batch, and run them thru gpt in their entirety, with the output being stored in embeddings to make things easier to answer next time, and the output also being stored in a data base for querying.

Each time we process for a specific query, we:
1. Expand the users query to be something more general and more re-usable some other time
2. optionally convert the data into some more useful format or schema so in the future it can be hit with a query language
3. store the results of the query and any changed core data into an embedding, and possibly into a secondary index if it is schema related, to enable rapid searching.

So starting to look at a new system for the first time, we don't need to process all their data at the start, but we possibly could do a first pass.

Multistage queries
Sometimes we will know that we have a lookup style or comparison task to do, but all the data doesn't fit in memory.  Eg: we have a lookup table of codes, its split in two files.  Someone asks for something to be decoded, we need to be able to generate a task to loop thru all the given code files, and check each one - if we don't see what we want, go on to the next one.

This would be represented in simple state machines that would be shown to the user in the under the hood view.

Want to be able to give a whole git repo, and be able to chat with it.  Use the embeddings first, and the file by file later.

## Walking the Database
when doing layers on the database, where we store output of running a gpt walk thru the db, we should also store the snap of the reference record we were working on, and also what fields in that record we relied upon, so that when we use that query next time, we can know if we need to reparse based on changes. We can give the client a result using stale data, and signal subtly that we are updating the indexes, then correct the response once the reparsed data is available for running the query again. We would make the response reflect the already given response, since it might not be worth materially changing the response after update was completed, to avoid jarring the client
  
if I have a list of customers, but the format in the database does not have a field for if they have an anglo-saxon name, the query should be expanded to something like "nationality of names" using an expander prompt.

If the walks are not hit or used in a while, delete them to free up space, based on storage costs.