
>[!tip] Created: [2025-03-16 Sun 17:02]

>[!question] Targets: 

>[!danger] Depends: 

formal verification gap is the difference between formal verification and the implementation of a system.

Once we have a formal verification, we should be able to generate code for it much simpler than we could without that specification. 

we can loop the bots over the generated code and make sure it fits the specification accurately. 

If the bots are focused on the interfaces of the components that are required to make up the formal specification, then they can come at it from multiple angles to verify that the implementation is in fact in line with the formal verification version or component. 

This gives a far stronger bond between the formal verification and the implementation. If the formal verification passes and the code passes, as well as the tests that are written in the code pass and the LLMs believe that the code expresses accurately what the model describes, this is probably a better situation than trusting a human to compare the model and the implementation. it is more likely to stay correct as while the implementer of the code understands how the model works and can suggest changes to that model

If the bot has a better design, it would need to first modify the formal verification model and get that to pass before it can then go on to implement. 

This might be actually the best way to specify a system for an LLM to implement.  

Then we can get these models and implementations certed by the old school verification people, and confirm that we are consistently adhering to the model.