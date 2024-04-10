
>[!tip] Created: [2024-04-11 Thu 10:42]

>[!question] Targets: 

>[!danger] Depends: 

This should be based on the branch, so that all isolaes that run on that branch will also have the context available to them.

BUT the isolate mount seems specific to the isolate itself.

How can we give the repo isolate access to the artifact db, even tho repo was called within artifact ?

If is the system chain, the api provided has the system context.

So perhaps the context needs to be specified in the .io.json file of the branch, which uses an isolate to load it up ?
Or, should it be segmented by branch, by isolate ?
What about shared between isolates ?  Then the isolate should be a combined one.