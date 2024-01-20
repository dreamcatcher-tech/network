
>[!tip] Created: [2024-01-21 Sun 08:59]

>[!question] Targets: 

>[!danger] Depends: 

If we were generating text in bot A, then we pipe that to bot B, we shouldn't have to wait until A is complete before B starts generating - what we can do is start B and tell it to go for x words, then restart it with the new longer reponses from A.  In this way it might be able to give reasonable responses with TTFB being much shorted