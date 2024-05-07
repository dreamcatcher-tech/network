
>[!tip] Created: [2024-05-07 Tue 13:52]

>[!question] Targets: 

>[!danger] Depends: 

In json file, we could store state and have its update be subject to rules, and a structure be enforced.

We could allow this restriction to be set on any file, and so the state could be just another file in the fs, with structure determined by some isolate, which could be running a json schema file.

So we can set a schema and force a file to follow a pattern.

Writing to that file gets automatically checked against the schema, with informative errors thrown, helping any LLM to figure it out more.