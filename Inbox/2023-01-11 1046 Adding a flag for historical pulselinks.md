
>[!tip] Created: [2023-01-11 Wed 10:46]

>[!question] Targets: 

>[!danger] Depends: 

With a flag, we could walk all the CID pointers of a given object ahead of time without caring about the structure of the objects within, and avoiding all the logic assertions required.

Or a crawl could be initiated that only used the classmaps, rather than instantiating the classes.  This means we would know what the CID links were, and can walk them as fast as is possible.

Problem with a flag is that it requires a whole extra block to encapsulate it.

If you know the data structure, you should be able to deduce what was historical, internal, or external.