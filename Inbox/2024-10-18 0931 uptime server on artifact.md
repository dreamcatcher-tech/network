
>[!tip] Created: [2024-10-18 Fri 09:31]

>[!question] Targets: 

>[!danger] Depends: 

Use cron to run some jobs periodically, to probe a server and measure uptime.

We could use the recording of the statistics as the actual uptime test.

So this deployment has a cronjob that runs periodically, which tries to load the root UI page and records the stats, opens a connection to the backend API, recording stats.

Then it will do some AI function, again recording stats maybe.

Or ask for some system check to occur, which outputs some responses.

Then, it writes these stats out to its own logs.

Calling the syscheck both stores the results in artifact but also returns them to the status board.

Then browsing the statusboard pulls up the artifact items that represent these summaries and their statistics.