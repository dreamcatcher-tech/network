
>[!tip] Created: [2025-09-13 Sat 14:11]

>[!question] Targets: 

>[!danger] Depends: 

should the cli be able to start a remote agent if specified ?

it should at least be able to start a face based on a config file, and based on some parameters that get passed in.

? what commands would you expect this thing to do ?

```bash
agent face list/create
agent interact create/list
--agent-id some--nested--agent
--face-id someFaceId

```

probably just be the same as the mcp interfaces ?

when doing face create, you can override any setting in the config file.
can also run it as a single shot, where it runs and then exits.

this is required so we can start an agent with different sets of prompts and toolings each time.