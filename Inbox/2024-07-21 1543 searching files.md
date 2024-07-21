
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