
>[!tip] Created: [2025-09-15 Mon 13:17]

>[!question] Targets: 

>[!danger] Depends: 

is it just a branch of the main repo ?

spawning an agent using an mcp server with a custom config:
1. write the config to a file, and then make the mcp server pick that up from the location
2. write the prompt verbatim
3. point to a registry of sorts to pull in the file.

so we could point to a registry or to a file.

the config file, would be written using an mcp tool, so that it could get the format right.

so when you start an agent, 

writing the config file should be an mcp tool call, that can be used to patch a config file, using the tool schema as a way to get info about the file format in to the agent, vasting improving the chances that the tool is used correctly.