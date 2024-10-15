
>[!tip] Created: [2024-10-16 Wed 10:07]

>[!question] Targets: 

>[!danger] Depends: 

This might be polluting the interface somewhat tho ?

Messages should be fairly universal tho.

So if we make it translated to this universal format, and upgrade the format over time, or permit multiple versions, with some kind of translation between formats ?

The essence is always the same tho, it is a sequence of messages.

Context / state is only needed if there was some file reading going on.

Messages might need to be loaded up using a special tool call, which primes the system with prior state, before making the NL call as pure text based.

Then the priming method is custom to the type of inference.

We can sort of standardize it, but the structure detracts from the purity of the NL interface.

So an openai napp would be a sequence of messages going into the addmessage tool, then an NL call, that causes the napp to load from the stored state.