
>[!tip] Created: [2024-07-21 Sun 15:43]

>[!question] Targets: 

>[!danger] Depends: 

This should be the same for all types of search - thread, agent, file

For big files, have a strategy to break / sample them and write summaries.

For directories, these should be a summary of all the files in the directory, which is rolled up from the bottom.

if we make a `.dreamcatcher` folder in the root of each branch, then this is where we store index info, `.io.json` and other files of interest.

The search should be type aware.
Each directory should be represented by a single file, for speed of retrieval.
Or, each file is a single summary file, and each dir a summary file, 

Could use assistant file search to upload the index files to, so they can be pulled on quickly.

Could the customer records be handled in this same way ?  We make a single large csv for all the customers, and then the file search tool retrieves it ?
Basically if we can get all customer queries answered with openai built in stuff, that would save some effort.

Maybe we could run an ai query on every single file in parallel ? might be cheaper in terms of effort ?

If the number of files stays under 50k, then running a mini query on every single file seems more reliable than having summaries ?

If a graphql system was run and kept live, then we could possibly run this in the browser ?
The bot can generate graphql queries to pull up date quickly, without running thru all records, which is rather wasteful.
So the md files would be contiually shadowed with a json file, which in turn is used to back a graphql service.

They liked the component where you type and then suitable items show up, ranked.
We could do that by downloading all records to the browser, and then plain text searching thru them ?
Have a table that was presenting a single index file of all customers, which itself is possibly sharded / chunked.
Then when rows are filtered out,

Basically we can't have the overhead of reading every single file, so we need them all either on hand in ram, or in a single file.  Or queryable in a database.

Have multiple index files, to allow the changes to be smaller.
So for each field of interest in the crm, or each query of interest, we set up an index file and a watcher on it.
So each commit, the index file gets updated to the new dir hash of the customers list.
The index file being for each query type means the file can be small.
We can also shard it to reduce the filesystem load.
We would make new types of queries as needs were discovered, but the users could make these queries too, and keep them updated, since they would be maintained by an intelligent agent.
Then doing a search considers the indexes we have available, and might make a new index if required.  Making a new one would walk a user thru it checking the query was what they wanted, before spending all the credits to build the full one.

Since pricing for queries is dropping, we should just run full blown AI queries in parallel, rather than trying to be fancy with the index files.   The speed is the only issue, but the complexity around making a query system seems too hard in comparison ?  We can certainly operate for a while with full queries, and we just eat the price of it, then later we optimize.

Make the browser download the whole repo, and then do a search based on this local copy.
Keep the repo up to date by watching the commits.
Use OPFS to get good storage performance, and long term storage.
Or just use the fs from isogit.
Make it periodically pack the git files and update the B2 storage, as this is what we should use to pull down from ?