
>[!tip] Created: [2025-08-13 Wed 17:41]

>[!question] Targets: 

>[!danger] Depends: 

The resource publication needs to be accessible on the system hooks.

Ask for a publishable resource id, which should be deterministically generated.

Then return this as part of the tool call ?

BUT we have to keep the tool running.  So the runner needs to recognize that a response has come back that is a transient resource, and then it will 

? multiple transient resources should be possible ?

If the service requests the transient resource, then it can also have the option fo calling a special function, the `endEarly` function, which will have a list of transient resources that will be passed down.

Each resource should also have a stats page that can be hit for costs, duration, progress.

If the runner calls end early, then the tool call returns with a preformatted message of the transient end point ?

Another option is to auto generate the transient end point based on the action id, so the callers can sniff for it any time, but only get it if it is active.  The stats portion is always relevant, so that would be good for getting info like who is running it, if it was processed, what its consensus state is.

In this case, end early could end with any data at all, and then the transient endpoint is available to callers, if they know to look for it.  so the action would know what the transient endpoint was, but it would also be discernable by the server.