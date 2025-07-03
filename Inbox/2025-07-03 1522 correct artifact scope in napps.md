
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

start container should be the transmit function.

? does an artifact instance ever need to talk to a container directly, or is it always via the host using dispatch ?

start the host, pass in the permissions check and start a new container as the transmit.
into each new container, pass in the ability to transmit back to the host.

to the napp containers goes a portal to talk to the host via provider actions.
to the provider container goes a portal to instantiate and talk to the napp containers.

could expose the host transmit with a context hook, so it is context that is always present - like the system portal.
otherwise for each non host container, we pass it in as a constructor, and it is available on the context hooks ? 
or it gets wrapped up in artifact.

in the system container, the artifact instance comes with the provider with the transmit function that is a direct access to making new containers.
in the napp containers, the artifact instance comes with the provider with the transmit function that is access to the host function.