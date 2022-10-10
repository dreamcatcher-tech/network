>[!tip] Created: [2022-10-10 Mon 13:56]

>[!question] Targets: 

>[!danger] Depends: 

Can make a construct like a generator, where the yield and done construct can be used.

A shortcut way is to send multiple replies to a promise that we know is marked as outstanding, using the promise ID as a means of sending a `YIELD` action, where the only restriction is that they must be in reference to a promise that has not yet settled.

In JS, yield calls into the generator code.  In our system, yields are sent without further requests, which means flooding can occur.

If flow control is implemented, we can limit the number of un-acknowledged yields.

Yields may need their own counter, or have a decimalized counter as in `123.322`