
>[!tip] Created: [2025-07-03 Thu 15:22]

>[!question] Targets: 

>[!danger] Depends: 

when run in context, it needs to make the artifact scoped to whatever is relevant for the current target.

It should check that the target is in fact valid first, and then pass the scope that is bound to the commit of the latest tip of that scope.

so if any provider actions are being called, then we do not create an artifact context object.

dispatch would get passed a receive function in the context for them to poke out.

artifact.tx would pop the action out inside the provider container ?

provider operations don't need to know the latest commit - they are about marshalling everything to prepare for napps that execute on a given commit, so they purposefully do not have any concept of latest, since they are pure side effects.

so it is meaningless to provide them with an artifact item in their context.

they do need a transmit function that allows for actions to come in that need user operated containers.

we have to supply the artifact object, and it needs a provider to tunnel actions back into the system with.

when a new action goes in, then it starts a new container, runs checks, etc.

When each child container is started, it needs a way to call the system container again ?

Pass in the system transmit function in to each container, so they can tunnel back out to system functions ?
This seems essential, as each container needs a way to get out again ?

start container should be 