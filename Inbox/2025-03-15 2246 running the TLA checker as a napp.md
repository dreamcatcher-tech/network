
>[!tip] Created: [2025-03-15 Sat 22:46]

>[!question] Targets: 

>[!danger] Depends: 

This would take the java runtime.
It would point to a java package by referring to a jar file on the github releases page with a specific commit.
pull in the jar file from sonatype package manager.

Run the models as a streaming operation to get progress.

In the java runtime, we should be able to present an isolated set of files.

the runtime isolattion part would be standard across all images.  So it would be able to receive web requests, resolve napps, and then run multiple invocations in isolation.

? should we make a unified image that can do any known runtime, as a single container ? 
The overhead of the image space is probably less than the cost of having a separate container and having to switch between it, since just call the `napp-runner` and then it can handle anything we know how to handle.

Each runtime offers a virtualized filesystem, but then if they want cross branch control, the context needs to be hooked somehow.

So we would want to use the model checker as a way to ensure that we had reliability guarantees in our design of artifact, or at least the infrastructure beneath artifact.

We could spec the size of the machine we want to run the napp with, so that we can fire up a massive beast of a machine.

If we made an agent that sepcialized in TLA+, then it might know when to do different moves to help the problem, and can draw on techniques applied at a certain point.

So ultimately to guarantee how artifact works, we would need a tla model, otherwise we might have some edge conditions.

We would want the same guarantees on a smart contract for managing tasks.

Maybe we could make a statechart representation of a TLA+ model ?