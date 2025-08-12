
>[!tip] Created: [2025-08-12 Tue 16:14]

>[!question] Targets: 

>[!danger] Depends: 

Currently actions that are for the system use an envelope on the action to signal this, as it goes to a virtual scope that the system knows about.

also all actions have to be executed on the consensus branch, and might be sent to a particular fiber.

we could make it so that any time these system actions run, they run in the host container so they have this long running context between everything ?

Or we could boune the actions, so that we have a set of targetted actions that hit a repo, and then while they're running, they us upchannel to call the system ?

That would mean that the repo that was the target would be changed by the action, but this might be desirable, since we can see who did what system level action in there, and then it just called up to system when it ran ?

Idea is to have the system actions be targetted at a specific repo, which removes the need for scope in all the actions.  The scope is part of the action targeting, and so we can remove it from being in the provider actions everywhere.

This means that the system actions that acted upon a repo are ordered too, whereas if the came in from the outside, they would be unrepeatable, since changes just happened, and it isn't clear what caused them.

so when the isolated containers want to call a system function, they call the system action channel, and use the agreed set of actions (the provider set) but they include what scope they want the system action to occur at, which is just their own scope.

So the executing napps can only ask for system changes to their own selves.

Otherwise the system actions have to check the repo to see if they can act ? but they sitll have to do that to check if the action can be added to the repo at all.