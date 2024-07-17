
>[!tip] Created: [2024-07-17 Wed 14:36]

>[!question] Targets: 

>[!danger] Depends: 

Basically this should create an accumulation action of the result, so that when it gets run again, it uses the result that was stored ?

Could be a state update, so it only ever runs once ?

So anything can be turned into a side effect with this hook, and the first time it runs, that will be treated as one off.

Then we can add permissions on what resources it can have access to when it runs.