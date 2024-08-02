
>[!tip] Created: [2024-08-02 Fri 14:45]

>[!question] Targets: 

>[!danger] Depends: 

How can we set concurrency controls so that an action that is trying to spawn many branches can limit how many are running at once ?

When one returns, the system itself should trigger the next one.

So all the requests are set up in the io.json file.

Also, how can we batch these so we can start early, but then keep adding without the generator starving because it only ever got called when all requeusts returned ?

Lastly, can we complete an action, but then fire off some other actions, like summarizing the threads, with the origin having been replied to ?