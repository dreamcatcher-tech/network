
>[!tip] Created: [2024-01-03 Wed 20:09]

>[!question] Targets: 

>[!danger] Depends: 

We can run the interpulse protocol using LLMs.  But, this protocol is only for doing remove execution of things.

We could in fact, skip this completely, and use the file system as a queue of commands to be executed against some code.  This can be run in a sandbox, and can be called with function parameters the same as gpt4 api uses.

This way, the LLM can ask for an external function to be called, which is called using json parameters, and then we simply fire up the code from the requested location into a sandboxed environment, and execute it using the parameters given.  We *might* give it some state access by accessing the filesystem in a limited way.

This means that external calls can be made with the system easily, and we can run arbitrary code with consensus on the outputs and other measurements like CPU usage, datetime requests, etc.

So the api would be in json, and the environment it needs to run in, plus source etc, would be in some kind of config file, so we know how to set up what it needs.

? What about running other parts of the tree using llms in the same fashion ?

? how can encryption be done using git ?  We could encrypt each object perhaps ?

pgp sing can be used to handle server identity ?