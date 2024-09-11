
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

So the passthru is abandoned, and it is now a direct thing.  Backchat contacts these remotes directly.  It could go via the base thread if we wanted, to allow some checking, but seems best to just go directly in - see if we get any complaints there.  It is quite annoying when backchat gets that call wrong and you get janked out.

So a mode of remote running that keeps the overwatch present, in case you're worried ?  But you could just hit escape and get out of it, or use another thread to poke in and say you want to change something.

What if a remote points to its parent, and causes an infinite loop ?
So parents should process this loop somehow ?
In backchat, we can become that that.

Exit in the child thread should be a signal to backchat that the thread is done, and wants to hoist.

Show modals on top of modals for now ?
Or just let the stacks form, with the crosses ?
Stacks with crosses is much easier now, rather than managing a stack.

How to show when the remote is loading ?
Sending in empty props shows it as loading the remote