
>[!tip] Created: [2023-12-01 Fri 09:19]

>[!question] Targets: 

>[!danger] Depends: 

Do mango style queries by putting all the states into a db and using their engine to do the searching, to save implementing our own.

Pipeline sort vs filter.
Filter will return a growing list, which we might choose to run using the most recently changed items.
Sort will return an immutablejs object each time a new item is processed, so that you can start showing results that are instant but might change.