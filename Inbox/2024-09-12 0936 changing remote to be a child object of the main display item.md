
>[!tip] Created: [2024-09-12 Thu 09:36]

>[!question] Targets: 

>[!danger] Depends: 

Need a way to manage a stack of these objects.

Each one needs to be its own thing, but it needs to pass down a function to show itself in the remote dialog, and push onto the stack.

When something high up the chain stops having a remote, that would tear down all the children too.
Inside each one, a set of props that
ThreeBox props are then recursive, in that they have an extra remote parameter.



Redirect the outputs to go into the remotes, so cannot use the same prompt.

If we abandon the ability to intercept the remote, and just send the prompts straight in, it seems this is more what we want ?

So the passthru is abandoned, and it is now a direct thing.