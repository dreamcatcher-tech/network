
>[!tip] Created: [2025-03-02 Sun 22:11]

>[!question] Targets: 

>[!danger] Depends: 

Take the regular side effect runner.
Call its run action, which would allow it to access the context object.

Side effect runners has its own mount function, which is the creator of the context object.
During mount, you shouldn't be able to send any actions out at all.

