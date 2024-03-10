
>[!tip] Created: [2024-03-11 Mon 09:17]

>[!question] Targets: 

>[!danger] Depends: 

If we were to ensure that all async ops had to synchronize before calling any hook functions, then we might be able to set the context value before this stalling occured.

So we could run with a global hook until we were exhausted, then figure out which context called what afterwards ?

Accumulator triggers alarm as soon as something has been pushed on to it within one loop.

If we did only one side effect at a time ?