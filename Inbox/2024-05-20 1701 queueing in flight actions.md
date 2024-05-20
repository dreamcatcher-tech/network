
>[!tip] Created: [2024-05-20 Mon 17:01]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes, ensuring a pid exists before we can send an action, causes a delay.

We should be able to make conditional actions, that wait for the completion of some other action id before continuing.

If the client could have a counter, then we can send actions to the server so that there are fewer RTT loops to go thru, but errors cause errors in all dependents too.