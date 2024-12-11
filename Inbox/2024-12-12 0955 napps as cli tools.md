
>[!tip] Created: [2024-12-12 Thu 09:55]

>[!question] Targets: 

>[!danger] Depends: 


Use a napps interface to be able to make a commandline interface.  Make rules of making a napp interface, and then make a cli that can either call all the options directly, or do a custom wrap around.

So if we make some prompts that can automatically make projects that have a napp interface, and optionally can have rules for how to make a cli out of them, OR just do a second clean pass, then we can produce napp tools

Make napp tool caller that interfaces with llm, and only once this works, split it out 

Use the fs snapshot interfaces inside the napp, since this is the key to the environment.

So the api on the artifact platform is just the napps api to allow the napp to do the reading and wriging.  Then LLMs can call the napps, or we can call the napps manually.