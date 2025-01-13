
>[!tip] Created: [2025-01-13 Mon 15:54]

>[!question] Targets: 

>[!danger] Depends: 

passing the whole api to an LLM seems excessive, but sending in a thin wrapper around the api, with descriptions, seems useful ?

We could match up the api descriptions and the tool, so they all come out the same ?

Or just make napp tool calls that are broken down by interface type, so that we only pass in the type of operation that is needed, which can further still be isolated.

The LLM should have to ask for the tools it wants, and why.  Then it gets an expanded tool set.