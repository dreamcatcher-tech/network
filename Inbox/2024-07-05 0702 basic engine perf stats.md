
>[!tip] Created: [2024-07-05 Fri 07:02]

>[!question] Targets: 

>[!danger] Depends: 

eg: number of commits performed, commits per second, average time waiting in the queue.

Commit amplification factor, basically to do a single op how many commits occured ?

How many queue operations occurred for a given commit or a given process ?

At engine shutdown, give the stats and also per branch stats.

Number of branches completed.

These stats could be stored in the db.  They should be part of the user billing and metrics.

Make a benchmark that counts the number of commits it takes to boot the engine.

Also # to boot backchat - or the time until first prompt, when the user can start to input text.
This is the cold start time, but number of commits is important to manage too.