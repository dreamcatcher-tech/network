
>[!tip] Created: [2025-07-03 Thu 15:22]

>[!question] Targets: 

>[!danger] Depends: 

when run in context, it needs to make the artifact scoped to whatever is relevant for the current target.

It should check that the target is in fact valid first, and then pass the scope that is bound to the commit of the latest tip of that scope.

so if any provider actions are being called, then we do not create an artifact context object.

dispatch would get passed a receive function in the context for them to poke out.

artifact.tx would pop the action out inside the provider container ?