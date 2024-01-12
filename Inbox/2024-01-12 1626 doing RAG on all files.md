
>[!tip] Created: [2024-01-12 Fri 16:26]

>[!question] Targets: 

>[!danger] Depends: 

Each time an MD file gets written, we should maybe store some embeddings around it in a separate flat file ?

Then if you ask a question about it, we will look up the embeddings to help with the goal.  Also commits and things should be embedded too, so if you search for "the file I changed yesterday" we might take a structured approach, or just get a hit on the vector.

While your index is building, we can pipe the questions off to peers, splitting the query up.

We can make a parallel DB of any kind - if we set up an IO pipe that goes to a database, then we can execute instant queries about the given files.  Special db that can run AI queries against each file too, so we can ask highly intelligent queries.  So the tool to do a sql query is available, and can be used on any path, which will load up all the files into a db pre-emptively and keep everything updated when commits are made.

Then these queries can be used to give good effective results.  The first type of db tho will be an AI powered one that just makes a huge number of parallel calls out, and gives some progress back.

Self awareness is when the machine is aware of its own IO structure, and can be interrogated about it.