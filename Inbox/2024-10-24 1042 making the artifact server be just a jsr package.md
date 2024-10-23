
>[!tip] Created: [2024-10-24 Thu 10:42]

>[!question] Targets: 

>[!danger] Depends: 

Be able to deploy any napp as a server on deno deploy, by simply specifying this server package as the entry point.  Basically the server would just export the napp interface but would access it using json in, and then respond using some protocol.

Use headers for errors, body for message body, and links for files ?

> [!IMPORTANT] Artifact Purpose: 
> `json functions` is what artifact provides to the world

Allow configuring the rest of the system using env vars ?

Napps are really json functions.

The benefit of packaging like this is:
- we can test the server package independently of anything else, increasing the chance that it will perform correctly
- the server functionality does not drift as new features are added to expand it out
- the interface between web calls mapping to json functions

## Authentication of routes
The authentication settings of the system might require that some routes have auth headers on them ?

Or just handle this all inside of the json objects that are invocations.

Server could pull down cookie or auth headers into a separate object so that json functions can decide.

