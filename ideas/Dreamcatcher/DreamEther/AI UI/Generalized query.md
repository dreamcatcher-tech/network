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