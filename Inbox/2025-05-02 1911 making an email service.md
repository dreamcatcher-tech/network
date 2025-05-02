
>[!tip] Created: [2025-05-02 Fri 19:11]

>[!question] Targets: 

>[!danger] Depends: 

We would want it so that anyone could make their own one, so each service needs an external name.

Then when incoming traffic occurs, we turn it into json actions and files, and send it to the correct app that is registered against a central table that maps dns names and ports to repo keys.  It can trigger fibers, or it can just write to a certain branch and file.

It can be treated like an external incoming action stream.

People can have sub-dns names, so they can have their own wildcard rules.

Running some code that executes live while its coming in is possible too, if you register the napp, and then when the incoming socket comes in, we'll trigger this piece of code for you, which is running as a side effect.