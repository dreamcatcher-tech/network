
>[!tip] Created: [2025-08-13 Wed 09:59]

>[!question] Targets: 

>[!danger] Depends: 

just like artifact wrapped the provider with human coder friendly functions, maybe we need a further wrapping to make llm friendly tool calling ?

eg: read binary is fine for code, but llms need also a read text function.

also the tools are way too heavy, so the bot should load and unload them, to avoid massive context being pushed in each time ?  Or we could just tweak how the bot loads them, so they stay static as cached tokens.