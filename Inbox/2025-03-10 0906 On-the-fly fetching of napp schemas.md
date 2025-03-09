
>[!tip] Created: [2025-03-10 Mon 09:06]

>[!question] Targets: 

>[!danger] Depends: 

Allowing the bots to pull down the schema on the fly and then insert the Napp into themselves as a new tool is a key capability. 

We could make the Zod schemas available by way of an artifact call and then they get fetched live. From that point on, the client makes the function calls. 

The bots don't really need TypeScript. In a way, the Zod schema is acting like TypeScript for the bot because if the bot tries to make a call that is out of bounds for the received Zod schema, then an error will occur.