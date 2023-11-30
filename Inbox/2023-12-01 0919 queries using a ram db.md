
>[!tip] Created: [2023-12-01 Fri 09:19]

>[!question] Targets: 

>[!danger] Depends: 

Do mango style queries by putting all the states into a db and using their engine to do the searching, to save implementing our own.

Pipeline sort vs filter.
Filter will return a growing list, which we might choose to run using the most recently changed items.
Sort will return an immutablejs object each time a new item is processed, so that you can start showing results that are instant but might change.

The AI needs to set up pipes so that the machinery can operate underneath at faster rathes than the AI can process directly.

Could do similarity where the name is similar to Mario, where we have used embeddings to create a vector based index.

Probably something we just implement ourselves, copying https://github.com/pouchdb/pouchdb/tree/master/packages/node_modules/pouchdb-find

We could use this as a plugin for general SQL based queries, so we could connect into any database and let the LLM browse around and build up a knowledge base about what the types of data in there is.  While it builds up its internal model, then it can start running queries with confidence.

Might be more useful to implement this in graphql ?

So if we taught HAL to use GraphQL then we could look at a company's databases by setting up graphql connectors.
Query raw to learn about the shape of the data.